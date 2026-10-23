// Pure logic for the breeding-systems page: name formatting, search keys,
// S-allele compatibility, structural checks. No DOM, so the unit tests can
// run it in Node.
import { buildIndex as buildTreeIndex } from '../../assets/tree.js';

export const RANKS = ['family', 'genus', 'subgenus', 'section', 'species', 'aggregate', 'hybrid', 'subspecies', 'varietas', 'forma', 'cultivar-group', 'cultivar'];
const ROMAN = new Set(['subsp.', 'var.', 'f.', 'agg.', '×', 'sect.', 'subg.', 'nothosubsp.', 'nothovar.', 'Group', 's.l.', 's.str.', 'aggr.']);

/**
 * Split a scientific name into parts to print in italics or not, following
 * the usual conventions: genus, species and infraspecific epithets in
 * italics; rank words (subsp., var.), the hybrid sign, cultivar epithets in
 * single quotes, Group names and authors in roman. Families are printed in
 * roman.
 * Returns [{text, italic}], spaces included.
 */
export function nameParts(name, rank = 'species') {
  if (rank === 'family') return [{ text: name, italic: false }];
  const tokens = String(name).match(/'[^']*'|\S+|\s+/g) ?? [];
  let roman = false; // once a cultivar group name starts, the rest is roman
  return tokens.map((t, i) => {
    if (/^\s+$/.test(t)) return { text: t, italic: false };
    if (t.startsWith("'")) return { text: t, italic: false };
    if (ROMAN.has(t)) return { text: t, italic: false };
    const abbrevGenus = /^[A-Z]\.$/.test(t);
    if (i > 0 && /^[A-Z(]/.test(t) && !abbrevGenus) roman = true; // Group names, authors
    return { text: t, italic: !roman };
  });
}

/** Search keys: scientific name, synonyms, common names (fr, en, de). */
export function taxonKeys(t) {
  const out = [{ lang: 'la', term: t.name, main: true }];
  for (const s of t.synonyms ?? []) out.push({ lang: 'la', term: s, main: false });
  for (const l of ['fr', 'en', 'de']) for (const [i, c] of (t.common?.[l] ?? []).entries()) out.push({ lang: l, term: c, main: i === 0 });
  return out;
}

export const buildIndex = (taxa) => buildTreeIndex(taxa, taxonKeys);

/** S-alleles of a genotype written like "S7S8", "SfS1" or "S1 S10". */
export function parseS(genotype) {
  return [...String(genotype ?? '').matchAll(/S(f|\d+[a-z]?)/g)].map((m) => `S${m[1]}`);
}

/**
 * Gametophytic self-incompatibility (S-RNase type, as in almond and other
 * Prunus): each pollen grain carries one S-allele of its parent and is
 * stopped in the style when the style expresses the same allele. The Sf
 * allele of almond makes no working stylar S-RNase, so it stops nothing.
 * Returns {result: 'compatible' | 'semi' | 'incompatible' | 'unknown',
 * accepted: [alleles of the donor whose pollen can grow]}.
 * 'semi': half of the donor's pollen can grow, usually enough for fruit set.
 */
export function pollination(motherGenotype, donorGenotype) {
  const mother = parseS(motherGenotype);
  const donor = parseS(donorGenotype);
  if (mother.length !== 2 || donor.length !== 2) return { result: 'unknown', accepted: [] };
  const active = new Set(mother.filter((a) => a !== 'Sf'));
  const accepted = donor.filter((a) => !active.has(a));
  const result = accepted.length === 2 ? 'compatible' : accepted.length === 1 ? 'semi' : 'incompatible';
  return { result, accepted };
}

const TEXT_BLOCKS = ['taxonomy', 'ploidy', 'mating', 'varieties', 'isolation', 'true_to_type', 'propagation'];

/** Every source id cited by a taxon. */
export function citedSources(t) {
  const out = [];
  const add = (list) => (list ?? []).forEach((s) => out.push(typeof s === 'string' ? s : s.k));
  add(t.names_src);
  for (const b of TEXT_BLOCKS) add(t[b]?.src);
  for (const x of t.interspecific ?? []) add(x.src);
  add(t.cultivar?.src);
  return out;
}

/** Structural checks used by the unit tests. */
export function validate(taxa, { sourceIds = new Set(), conceptIds = new Set() } = {}) {
  const problems = [];
  const index = buildIndex(taxa);
  const rankOf = (id) => RANKS.indexOf(index.byId.get(id)?.rank);
  for (const t of taxa) {
    if (!RANKS.includes(t.rank)) problems.push(`${t.id}: unknown rank ${t.rank}`);
    if (t.parent === null && t.rank !== 'family') problems.push(`${t.id}: only families sit at the top`);
    if (t.parent !== null && !index.byId.has(t.parent)) problems.push(`${t.id}: parent ${t.parent} does not exist`);
    if (t.parent !== null && index.byId.has(t.parent) && rankOf(t.parent) >= rankOf(t.id) && !(t.rank === 'cultivar' && index.byId.get(t.parent).rank === 'cultivar-group'))
      problems.push(`${t.id}: rank ${t.rank} under ${index.byId.get(t.parent).rank}`);
    if (!t.names_src?.length && !(t.rank === 'cultivar' && t.cultivar?.src?.length)) problems.push(`${t.id}: name has no source`);
    for (const b of TEXT_BLOCKS) {
      const x = t[b];
      if (!x) continue;
      if (!x.en || !x.fr) problems.push(`${t.id}: ${b} needs en and fr`);
      if (!x.src?.length) problems.push(`${t.id}: ${b} has no source`);
    }
    for (const x of t.interspecific ?? []) if (!x.en || !x.fr || !x.src?.length) problems.push(`${t.id}: interspecific ${x.with} incomplete`);
    if (t.rank === 'cultivar') {
      if (!t.cultivar) problems.push(`${t.id}: cultivar without pollination data`);
      else if (!t.cultivar.src?.length) problems.push(`${t.id}: cultivar data has no source`);
    }
    for (const k of citedSources(t)) if (!sourceIds.has(k)) problems.push(`${t.id}: unknown source ${k}`);
    for (const f of t.mating?.flags ?? []) if (!FLAG_CONCEPT[f] || (conceptIds.size && !conceptIds.has(FLAG_CONCEPT[f]))) problems.push(`${t.id}: unknown flag ${f}`);
  }
  return problems;
}

/** Which concept card explains each reproduction flag. */
export const FLAG_CONCEPT = {
  'self-incompatible': 'self-incompatibility',
  'gametophytic-si': 'gametophytic-si',
  'sporophytic-si': 'sporophytic-si',
  'self-compatible': 'autogamy',
  'partly-self-compatible': 'mixed-mating',
  dioecious: 'dioecy',
  'functionally-dioecious': 'functional-dioecy',
  monoecious: 'monoecy',
  hermaphrodite: 'hermaphrodite',
  apomictic: 'apomixis',
  pseudogamous: 'pseudogamy',
  'insect-pollinated': 'isolation-distance',
  'wind-pollinated': 'isolation-distance',
  'bat-pollinated': 'isolation-distance',
  'moth-pollinated': 'isolation-distance',
  parthenocarpic: 'true-to-type',
};
