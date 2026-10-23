// Seeds and breeding systems: a browsable tree (family -> genus -> species ->
// subspecies -> variety or cultivar) with search, and for each taxon how it
// is pollinated, what it crosses with, and whether its seed comes true.
import { lang } from '../../assets/site.js';
import { routeHref } from '../../assets/route.js';
import { h, citer } from '../../assets/ui.js';
import { renderTree as drawTree, wireSearch } from '../../assets/tree-ui.js';
import { pathTo, search } from '../../assets/tree.js';
import { TAXA } from './taxa.js';
import { SOURCES } from './sources.js';
import { CONCEPTS, CONCEPT_GROUPS } from './concepts.js';
import { buildIndex, nameParts, parseS, pollination, FLAG_CONCEPT } from './breeding.js';

const STR = {
  title: { en: 'Seeds: how plants are pollinated, and what comes true', fr: 'Graines : comment les plantes se fécondent, et ce qui reste fidèle' },
  lead: {
    en: 'For anyone who wants to produce their own seeds or understand fruit growing: for each family, species and variety, whether it pollinates itself or needs a partner, which species and varieties cross with it, and whether its seed gives the same plant again.',
    fr: 'Pour qui veut produire ses graines ou comprendre l’arboriculture : pour chaque famille, espèce et variété, si la plante se féconde seule ou a besoin d’un partenaire, avec quelles espèces et variétés elle se croise, et si ses graines redonnent la même plante.',
  },
};
const T = (en, fr) => (lang() === 'fr' ? fr : en);
const L = (o) => (o ? o[lang()] ?? o.en : '');

const RANK = {
  family: { en: 'family', fr: 'famille' },
  genus: { en: 'genus', fr: 'genre' },
  subgenus: { en: 'subgenus', fr: 'sous-genre' },
  section: { en: 'section', fr: 'section' },
  species: { en: 'species', fr: 'espèce' },
  aggregate: { en: 'aggregate (group of species)', fr: 'agrégat (groupe d’espèces)' },
  hybrid: { en: 'hybrid', fr: 'hybride' },
  subspecies: { en: 'subspecies', fr: 'sous-espèce' },
  varietas: { en: 'botanical variety (var.)', fr: 'variété botanique (var.)' },
  forma: { en: 'form (f.)', fr: 'forme (f.)' },
  'cultivar-group': { en: 'cultivar group', fr: 'groupe de cultivars' },
  cultivar: { en: 'cultivar (cultivated variety)', fr: 'cultivar (variété cultivée)' },
};
const SYSTEM = {
  allogamous: { en: 'Cross-pollinated (allogamous)', fr: 'Allogame (fécondation croisée)' },
  autogamous: { en: 'Self-pollinated (autogamous)', fr: 'Autogame (autofécondation)' },
  mixed: { en: 'Mixed: self and cross', fr: 'Mixte : autofécondation et croisement' },
  apomictic: { en: 'Seeds without fertilisation (apomictic)', fr: 'Graines sans fécondation (apomixie)' },
};
const FLAG = {
  'self-incompatible': { en: 'self-incompatible', fr: 'auto-incompatible' },
  'gametophytic-si': { en: 'gametophytic SI (S-alleles)', fr: 'AI gamétophytique (allèles S)' },
  'sporophytic-si': { en: 'sporophytic SI', fr: 'AI sporophytique' },
  'self-compatible': { en: 'self-compatible', fr: 'autocompatible' },
  'partly-self-compatible': { en: 'partly self-compatible', fr: 'partiellement autocompatible' },
  dioecious: { en: 'dioecious: male and female plants', fr: 'dioïque : pieds mâles et femelles' },
  'functionally-dioecious': { en: 'functionally dioecious', fr: 'fonctionnellement dioïque' },
  monoecious: { en: 'monoecious', fr: 'monoïque' },
  hermaphrodite: { en: 'hermaphrodite flowers', fr: 'fleurs hermaphrodites' },
  apomictic: { en: 'apomictic', fr: 'apomictique' },
  pseudogamous: { en: 'pseudogamous', fr: 'pseudogame' },
  'insect-pollinated': { en: 'insects', fr: 'insectes' },
  'wind-pollinated': { en: 'wind', fr: 'vent' },
  'bat-pollinated': { en: 'bats', fr: 'chauves-souris' },
  'moth-pollinated': { en: 'moths', fr: 'papillons de nuit' },
  parthenocarpic: { en: 'can fruit without seeds', fr: 'peut fructifier sans graines' },
};
const TRUE = {
  yes: { en: 'Yes', fr: 'Oui' },
  mostly: { en: 'Mostly', fr: 'En général' },
  no: { en: 'No', fr: 'Non' },
  varies: { en: 'It depends', fr: 'Ça dépend' },
};
const SELF = {
  'self-compatible': { en: 'self-compatible', fr: 'autocompatible' },
  'partly-self-compatible': { en: 'partly self-compatible', fr: 'partiellement autocompatible' },
  'self-incompatible': { en: 'self-incompatible: needs a pollinizer', fr: 'auto-incompatible : il lui faut un pollinisateur' },
  female: { en: 'female: needs a male', fr: 'femelle : il lui faut un mâle' },
  male: { en: 'male: pollinizer, no fruit', fr: 'mâle : pollinisateur, pas de fruits' },
  unknown: { en: 'not known', fr: 'inconnu' },
};

const index = buildIndex(TAXA);
const { cite, list } = citer(SOURCES);
const DEFAULT_ID = 'prunus-amygdalus';
const S = { id: DEFAULT_ID, open: new Set() };
const link = (id) => routeHref('seeds', id);
const valid = (id) => (id && index.byId.has(id) ? id : null);

const srcRefs = (items) => {
  const ids = [...new Set((items ?? []).map((s) => (typeof s === 'string' ? s : s.k)))];
  return ids.length ? cite(...ids) : [];
};

/** A scientific name with the right italics. */
function sciName(t, { author = false } = {}) {
  const span = h('span', { class: 'sd-sci' }, ...nameParts(t.name, t.rank).map((p) => (p.italic ? h('i', { text: p.text }) : p.text)));
  if (author && t.author) span.append(' ', h('span', { class: 'sd-author', text: t.author }));
  return span;
}
const common = (t) => t.common?.[lang()]?.[0] ?? t.common?.en?.[0] ?? null;
function treeLabel(id) {
  const t = index.byId.get(id);
  const c = common(t);
  return h('span', {}, sciName(t), c && t.rank !== 'cultivar' ? h('span', { class: 'sd-common', text: ` ${c}` }) : null);
}
const plainName = (t) => t.name;

/** Text with {{taxon-id}} links. */
function rich(s) {
  const out = [];
  const re = /\{\{([a-z0-9-]+)(?:\|([^}]+))?\}\}/g;
  let last = 0, m;
  while ((m = re.exec(s))) {
    if (m.index > last) out.push(s.slice(last, m.index));
    const t = index.byId.get(m[1]);
    out.push(t ? h('a', { href: link(t.id) }, m[2] ?? sciName(t)) : (m[2] ?? m[1]));
    last = re.lastIndex;
  }
  if (last < s.length) out.push(s.slice(last));
  return out;
}

/** A text where the scientific names of taxa in the tree become links. */
const NAMED = TAXA.filter((t) => !['family', 'genus', 'subgenus', 'section', 'cultivar'].includes(t.rank)).sort((a, b) => b.name.length - a.name.length);
function linkNames(text) {
  const out = [];
  let rest = String(text);
  while (rest) {
    let best = null;
    for (const t of NAMED) {
      const i = rest.indexOf(t.name);
      if (i >= 0 && (best === null || i < best.i)) best = { i, t };
    }
    if (!best) { out.push(rest); break; }
    if (best.i) out.push(rest.slice(0, best.i));
    out.push(h('a', { href: link(best.t.id) }, sciName(best.t)));
    rest = rest.slice(best.i + best.t.name.length);
  }
  return out;
}

function taxonLink(ref) {
  const t = index.byId.get(ref) ?? TAXA.find((x) => x.name === ref || x.name.endsWith(`'${ref}'`));
  return t ? h('a', { href: link(t.id), class: 'a-chip' }, sciName(t)) : h('span', { class: 'a-chip sd-chip-plain', text: ref });
}

// ---------------------------------------------------------------- overview
// The plants this tab was written for, summed up from their entries.
const OVERVIEW = ['prunus-amygdalus', 'prunus-domestica', 'prunus-salicina', 'prunus-insititia', 'prunus-cerasifera',
  'selenicereus-undatus', 'selenicereus-megalanthus', 'actinidia-chinensis', 'actinidia-arguta',
  'rubus-fruticosus-agg', 'rubus-idaeus', 'ribes-uva-crispa', 'ribes-rubrum', 'hippophae-rhamnoides', 'eucalyptus-deglupta'];

/** Does a plant need a partner to set seed? Read from its reproduction flags. */
export function partnerNeed(flags = []) {
  const has = (f) => flags.includes(f);
  if (has('dioecious') || has('functionally-dioecious')) return 'male';
  if (has('apomictic')) return 'no-apomictic';
  const si = has('self-incompatible') || has('gametophytic-si') || has('sporophytic-si');
  if (si && (has('self-compatible') || has('partly-self-compatible'))) return 'varies';
  if (si) return 'yes';
  if (has('partly-self-compatible')) return 'partly';
  if (has('self-compatible')) return 'no';
  return 'unknown';
}
const PARTNER = {
  male: { en: 'Yes: a male plant nearby', fr: 'Oui : un pied mâle à proximité' },
  yes: { en: 'Yes: another variety', fr: 'Oui : une autre variété' },
  varies: { en: 'Depends on the variety', fr: 'Selon la variété' },
  partly: { en: 'Not always; a partner helps', fr: 'Pas toujours ; un partenaire aide' },
  no: { en: 'No: self-fertile', fr: 'Non : autofertile' },
  'no-apomictic': { en: 'No: seeds without fertilisation, pollination still needed', fr: 'Non : graines sans fécondation, pollinisation tout de même nécessaire' },
  unknown: { en: 'See the entry', fr: 'Voir la fiche' },
};
function cultivarCount(id) {
  let n = 0;
  const walk = (k) => { for (const c of index.children.get(k)) { if (index.byId.get(c).rank === 'cultivar') n++; walk(c); } };
  walk(id);
  return n;
}
function overview() {
  const rows = OVERVIEW.filter((id) => index.byId.has(id)).map((id) => {
    const t = index.byId.get(id);
    const m = matingSource(t);
    const flags = m?.mating.flags ?? [];
    const inter = t.interspecific ?? [];
    const n = cultivarCount(id);
    return h('tr', {},
      h('th', { scope: 'row' }, h('a', { href: link(id) }, sciName(t)), common(t) ? h('span', { class: 'sd-common', text: ` ${common(t)}` }) : null),
      h('td', {}, m ? h('span', { class: `sd-sys sd-sys-${m.mating.system}`, text: L(SYSTEM[m.mating.system]) }) : '–'),
      h('td', { text: L(PARTNER[partnerNeed(flags)]) }),
      h('td', {}, ...(inter.length ? inter.flatMap((x, i) => [i ? '; ' : '', ...linkNames(lang() === 'fr' && x.with_fr ? x.with_fr : x.with)]) : ['–'])),
      h('td', {}, n ? h('a', { href: link(id), text: T(`${n} in the tree`, `${n} dans l’arbre`) }) : '–'),
      h('td', { text: t.true_to_type ? L(TRUE[t.true_to_type.value]) : '–' }));
  });
  return h('section', { class: 'card sd-overview', id: 'sd-overview', 'aria-labelledby': 'sd-overview-h' },
    h('h2', { id: 'sd-overview-h', text: T('The plants at a glance', 'Les plantes en un coup d’œil') }),
    h('div', { class: 'sd-two' },
      h('p', {}, h('strong', { text: T('Autogamous', 'Autogame') }), T(': the flower is fertilised by its own pollen or pollen of the same plant; one plant is enough and its seedlings stay close to it. ', ' : la fleur est fécondée par son propre pollen ou celui de la même plante ; une plante suffit et ses semis lui ressemblent. '), h('a', { href: '#c-autogamy', text: T('More', 'En savoir plus') })),
      h('p', {}, h('strong', { text: T('Allogamous', 'Allogame') }), T(': the pollen must come from another plant. It can come from another variety of the same species (the usual case for fruit trees: choose a compatible pollinizer) or from another species, which gives an interspecific hybrid. ', ' : le pollen doit venir d’une autre plante. Il peut venir d’une autre variété de la même espèce (le cas habituel des arbres fruitiers : choisir un pollinisateur compatible) ou d’une autre espèce, ce qui donne un hybride interspécifique. '), h('a', { href: '#c-allogamy', text: T('More', 'En savoir plus') }), ' · ', h('a', { href: '#c-hybrid-formula-nothospecies', text: T('hybrid names', 'noms des hybrides') }))),
    h('div', { class: 'sd-table-wrap', tabindex: '0', role: 'region', 'aria-labelledby': 'sd-overview-h' },
      h('table', { class: 'kv sd-table' },
        h('thead', {}, h('tr', {}, ...[T('Plant', 'Plante'), T('Pollination', 'Fécondation'), T('Needs a partner?', 'Faut-il un partenaire ?'), T('Crosses with other species', 'Croisements avec d’autres espèces'), T('Varieties', 'Variétés'), T('Seed comes true?', 'Graine fidèle ?')].map((x) => h('th', { scope: 'col', text: x })))),
        h('tbody', {}, ...rows))),
    h('p', { class: 'hint', text: T('A summary of the entries: open a plant for the details, the crosses between its varieties, and the sources.', 'Un résumé des fiches : ouvrez une plante pour le détail, les croisements entre ses variétés, et les sources.') }));
}

// ---------------------------------------------------------------- skeleton
const els = {};
function build(main) {
  els.searchIn = h('input', {
    id: 'a-search', type: 'search', autocomplete: 'off', spellcheck: 'false', role: 'combobox',
    'aria-autocomplete': 'list', 'aria-expanded': 'false', 'aria-controls': 'a-results',
    placeholder: T('Scientific name, common name or variety…', 'Nom scientifique, nom commun ou variété…'),
  });
  els.results = h('ul', { id: 'a-results', role: 'listbox', class: 'a-results', hidden: true, 'aria-label': T('Matching taxa', 'Taxons trouvés') });
  els.searchMsg = h('p', { class: 'hint', 'aria-live': 'polite' });
  const searchBox = h('div', { class: 'a-search card' },
    h('label', { for: 'a-search', class: 'field-label', text: T('Find a plant', 'Trouver une plante') }),
    h('div', { class: 'a-search-in' }, els.searchIn, els.results),
    els.searchMsg,
    h('p', { class: 'hint', text: T('Old names work too: “Hylocereus” finds the pitayas, now in Selenicereus.', 'Les anciens noms marchent aussi : « Hylocereus » trouve les pitayas, aujourd’hui dans Selenicereus.') }));

  els.tree = h('div', { class: 'a-tree', id: 'a-tree' });
  const treeCard = h('aside', { class: 'card a-tree-card', 'aria-labelledby': 'a-tree-h' },
    h('div', { class: 'a-tree-head' }, h('h2', { id: 'a-tree-h', text: T('The tree', 'L’arbre') })),
    h('div', { class: 'a-tree-tools' },
      h('button', { type: 'button', class: 'chip-btn', id: 'a-expand', text: T('Expand all', 'Tout déplier'), onclick: () => { TAXA.forEach((t) => { if (index.children.get(t.id).length) S.open.add(t.id); }); renderTree(); } }),
      h('button', { type: 'button', class: 'chip-btn', id: 'a-collapse', text: T('Collapse all', 'Tout replier'), onclick: () => { S.open = new Set(pathTo(index, S.id).slice(0, -1)); renderTree(); } })),
    els.tree);
  els.entry = h('article', { class: 'card a-entry', id: 'a-entry', 'aria-live': 'polite', tabindex: '-1' });

  const byConcept = new Map(CONCEPTS.map((c) => [c.id, c]));
  const concepts = h('section', { class: 'sd-concepts', id: 'concepts', 'aria-labelledby': 'concepts-h' },
    h('h2', { id: 'concepts-h', text: T('The words used here', 'Les mots employés ici') }),
    ...CONCEPT_GROUPS.map((g) => h('section', { class: 'sd-concept-group', id: `g-${g.id}` },
      h('h3', { class: 'sd-group-h', text: L(g.title) }),
      h('div', { class: 'sd-concept-grid' }, ...g.ids.map((id) => byConcept.get(id)).map((c) => h('section', { class: 'card sd-concept', id: `c-${c.id}` },
        h('h4', { text: L(c.title) }),
        h('p', {}, ...rich(L(c)), ' ', ...srcRefs(c.src))))))));

  const sources = h('section', { class: 'card sources', id: 'a-sources' }, h('h2', { text: 'Sources' }), list(),
    h('p', { class: 'small muted', text: T('Names follow Plants of the World Online (Kew) and World Flora Online, families APG IV; where they disagree, the entry says so. Pollination data come from the cited extension services and papers. The compatibility check is our own calculation from the published S-genotypes. Texts are our own.', 'Les noms suivent Plants of the World Online (Kew) et World Flora Online, les familles APG IV ; quand ils divergent, la fiche le dit. Les données de pollinisation viennent des services de vulgarisation et articles cités. Le test de compatibilité est notre calcul à partir des génotypes S publiés. Les textes sont les nôtres.') }));

  main.replaceChildren(
    h('h1', { text: STR.title[lang()] }),
    h('p', { class: 'lead muted', text: STR.lead[lang()] }),
    h('p', { class: 'small' }, T('The tree goes from family to genus, species, subspecies and variety. Two kinds of “variety” meet here: the botanical variety (var.), a natural group within a species, and the cultivated variety or cultivar, written in single quotes (\'Hayward\'), which is what French seed and nursery catalogues call a « variété ». ', 'L’arbre va de la famille au genre, à l’espèce, à la sous-espèce et à la variété. Deux sortes de « variétés » s’y croisent : la variété botanique (var.), un groupe naturel au sein d’une espèce, et la variété cultivée ou cultivar, écrite entre apostrophes (\'Hayward\'), que les catalogues de semences et de pépinières appellent « variété ». '),
      h('a', { href: '#c-botanical-variety', text: T('More on names', 'En savoir plus sur les noms') })),
    searchBox,
    h('div', { class: 'a-cols' }, els.entry, treeCard),
    overview(),
    concepts,
    sources);

  wireSearch({
    input: els.searchIn, results: els.results, msg: els.searchMsg, T,
    find: (q) => search(index, q),
    pick: (r) => go(r.id),
    option: (r) => {
      const t = index.byId.get(r.id);
      const tag = r.lang === 'la' ? T('name', 'nom') : r.lang.toUpperCase();
      return [
        h('span', { class: 'a-lang', text: tag }),
        h('span', { class: 'a-hit', lang: r.lang === 'la' ? null : r.lang }, r.lang === 'la' && r.term === t.name ? sciName(t) : r.term),
        r.term !== t.name ? h('span', { class: 'a-hit-ui' }, '→ ', sciName(t)) : null,
        h('span', { class: 'a-hit-where', text: L(RANK[t.rank]) }),
      ].filter(Boolean);
    },
  });
  renderTree();
  renderEntry({ scroll: false });
}

function renderTree() {
  drawTree(els.tree, { index, current: S.id, open: S.open, label: treeLabel, href: link, T });
}

// ---------------------------------------------------------------- entry
function block(title, x, { id, extra = null } = {}) {
  if (!x) return null;
  return h('section', { class: 'sd-block', 'data-block': id },
    h('h3', {}, title, extra),
    h('p', {}, ...rich(L(x)), ' ', ...srcRefs(x.src)));
}

function flagChip(f) {
  const label = L(FLAG[f]) || f;
  const c = FLAG_CONCEPT[f];
  return c && CONCEPTS.some((k) => k.id === c) ? h('a', { class: 'sd-flag', href: `#c-${c}`, text: label }) : h('span', { class: 'sd-flag', text: label });
}

/** The closest ancestor (or self) that has reproduction data. */
function matingSource(t) {
  for (const id of pathTo(index, t.id).reverse()) { const x = index.byId.get(id); if (x.mating) return x; }
  return null;
}

function glance(t) {
  const m = matingSource(t);
  if (!m) return null;
  const inherited = m !== t;
  return h('div', { class: 'sd-glance' },
    h('p', { class: 'sd-system' },
      h('span', { class: `sd-sys sd-sys-${m.mating.system}`, text: L(SYSTEM[m.mating.system]) }),
      inherited ? h('span', { class: 'small muted' }, T(' · as for ', ' · comme pour '), h('a', { href: link(m.id) }, sciName(m))) : null),
    m.mating.flags?.length ? h('div', { class: 'sd-flags', 'aria-label': T('In short', 'En bref') }, ...m.mating.flags.map(flagChip)) : null);
}

function cultivarBox(t) {
  const c = t.cultivar;
  if (!c) return null;
  const rows = [
    [T('Pollination', 'Pollinisation'), L(SELF[c.self]) || c.self],
    c.s_genotype ? [T('S-genotype', 'Génotype S'), c.s_genotype] : null,
    c.group ? [T('Group', 'Groupe'), L(c.group) || c.group] : null,
  ].filter(Boolean);
  return h('section', { class: 'sd-block sd-cultivar', 'data-block': 'cultivar' },
    h('h3', {}, T('This variety', 'Cette variété'), ' ', ...srcRefs(c.src)),
    h('table', { class: 'kv' }, h('tbody', {}, ...rows.map(([k, v]) => h('tr', {}, h('th', { text: k }), h('td', { text: v }))))),
    c.pollinizers?.length ? h('div', { class: 'sd-pairs' }, h('h4', { text: T('Good pollinizers', 'Bons pollinisateurs') }), h('div', { class: 'a-chips' }, ...c.pollinizers.map(taxonLink))) : null,
    c.incompatible_with?.length ? h('div', { class: 'sd-pairs' }, h('h4', { text: T('Do not pollinize it', 'Ne le pollinisent pas') }), h('div', { class: 'a-chips' }, ...c.incompatible_with.map(taxonLink))) : null,
    c.origin ? h('p', { class: 'small muted', text: L(c.origin) }) : null,
    c.note ? h('p', { class: 'small' }, ...rich(L(c.note))) : null);
}

/** Cultivars with a published S-genotype below a species (for the pair check). */
function genotyped(speciesId) {
  const out = [];
  const walk = (id) => { for (const k of index.children.get(id)) { const t = index.byId.get(k); if (t.cultivar?.s_genotype && parseS(t.cultivar.s_genotype).length === 2) out.push(t); walk(k); } };
  walk(speciesId);
  return out;
}

function pairCheck(t) {
  const species = pathTo(index, t.id).map((id) => index.byId.get(id)).reverse().find((x) => x.rank === 'species');
  if (!species) return null;
  const cvs = genotyped(species.id);
  if (cvs.length < 2) return null;
  const opts = (sel) => cvs.map((c) => h('option', { value: c.id, selected: c.id === sel, text: `${c.name.replace(/^.*?'/, "'")} (${c.cultivar.s_genotype})` }));
  const first = cvs.find((c) => c.id === t.id) ?? cvs[0];
  const second = cvs.find((c) => c.id !== first.id);
  const mother = h('select', { id: 'sd-mother' }, ...opts(first.id));
  const donor = h('select', { id: 'sd-donor' }, ...opts(second.id));
  const out = h('p', { class: 'sd-pair-result', id: 'sd-pair-result', 'aria-live': 'polite' });
  const update = () => {
    const a = index.byId.get(mother.value), b = index.byId.get(donor.value);
    const self = a.id === b.id;
    const r = pollination(a.cultivar.s_genotype, b.cultivar.s_genotype);
    const shared = parseS(b.cultivar.s_genotype).filter((x) => !r.accepted.includes(x));
    const msg = {
      compatible: T('Compatible: all its pollen can grow in the style.', 'Compatible : tout son pollen peut germer dans le style.'),
      semi: self
        ? T(`Self-compatible: pollen carrying ${r.accepted.join(' ')} can grow.`, `Autocompatible : le pollen porteur de ${r.accepted.join(' ')} peut germer.`)
        : T(`Semi-compatible: half its pollen (${r.accepted.join(' ')}) can grow, which is usually enough; ${shared.join(' ')} is shared.`, `Semi-compatible : la moitié de son pollen (${r.accepted.join(' ')}) peut germer, ce qui suffit en général ; ${shared.join(' ')} est en commun.`),
      incompatible: self
        ? T('Self-incompatible: its own pollen is stopped.', 'Auto-incompatible : son propre pollen est arrêté.')
        : T(`Incompatible: both alleles (${shared.join(' ')}) are shared, all pollen is stopped.`, `Incompatible : les deux allèles (${shared.join(' ')}) sont en commun, tout le pollen est arrêté.`),
      unknown: T('Not enough data.', 'Pas assez de données.'),
    }[r.result];
    out.dataset.result = r.result;
    out.replaceChildren(h('span', { class: `sd-verdict sd-v-${r.result}`, 'aria-hidden': 'true', text: { compatible: '✓', semi: '½', incompatible: '✕', unknown: '?' }[r.result] }), ' ', msg);
  };
  mother.addEventListener('change', update);
  donor.addEventListener('change', update);
  update();
  const srcs = cvs.flatMap((c) => c.cultivar.src ?? []);
  return h('section', { class: 'sd-block sd-check', 'data-block': 'pair' },
    h('h3', { text: T('Check a pair of varieties', 'Tester un couple de variétés') }),
    h('div', { class: 'fields' },
      h('div', { class: 'field select' }, h('label', { for: 'sd-mother', text: T('Tree to pollinate (style)', 'Arbre à polliniser (style)') }), h('div', { class: 'field-in' }, mother)),
      h('div', { class: 'field select' }, h('label', { for: 'sd-donor', text: T('Pollen from', 'Pollen de') }), h('div', { class: 'field-in' }, donor))),
    out,
    h('p', { class: 'hint' }, T('Our calculation from the published S-genotypes, with the rule of gametophytic self-incompatibility. The trees must also flower at the same time; check the sources.', 'Notre calcul à partir des génotypes S publiés, avec la règle de l’auto-incompatibilité gamétophytique. Les arbres doivent aussi fleurir en même temps ; vérifiez les sources.'), ' ', ...srcRefs(srcs), ...(CONCEPTS.find((c) => c.id === 'self-incompatibility') ? [' ', h('a', { href: '#c-self-incompatibility', text: T('How it works', 'Comment ça marche') })] : [])));
}

function renderEntry({ scroll = true } = {}) {
  const t = index.byId.get(S.id);
  const path = pathTo(index, t.id);
  document.title = `${plainName(t)} · ${STR.title[lang()]} · outils-plantes`;
  const kids = index.children.get(t.id);
  const names = ['fr', 'en', 'de'].filter((l) => t.common?.[l]?.length);
  els.entry.replaceChildren(...[
    h('nav', { class: 'a-crumbs', 'aria-label': T('Breadcrumbs', 'Fil d’Ariane') },
      h('ol', {}, ...path.map((id, i) => h('li', {}, i === path.length - 1 ? h('span', { 'aria-current': 'page' }, sciName(index.byId.get(id))) : h('a', { href: link(id) }, sciName(index.byId.get(id))))))),
    h('div', { class: 'a-head' },
      h('h2', { id: 'a-title' }, sciName(t, { author: true })),
      h('span', { class: 'a-kind', text: L(RANK[t.rank]) })),
    names.length ? h('p', { class: 'sd-names' }, ...names.flatMap((l, i) => [i ? ' · ' : '', h('span', { class: 'a-lang', text: l.toUpperCase() }), ' ', h('span', { lang: l, text: t.common[l].join(', ') })]), ' ', ...srcRefs(t.names_src)) : t.names_src?.length ? h('p', { class: 'sd-names small muted' }, T('Name: ', 'Nom : '), ...srcRefs(t.names_src)) : null,
    t.synonyms?.length ? h('p', { class: 'small muted' }, T('Also known as ', 'Aussi appelé '), ...((lang() === 'fr' && t.synonyms_fr) || t.synonyms).flatMap((s, i) => [i ? ', ' : '', h('span', { class: 'sd-sci' }, ...nameParts(s, 'species').map((p) => (p.italic ? h('i', { text: p.text }) : p.text)))])) : null,
    glance(t),
    block(T('Name and classification', 'Nom et classification'), t.taxonomy, { id: 'taxonomy' }),
    block(T('How it reproduces', 'Comment elle se reproduit'), t.mating, { id: 'mating' }),
    block(T('Chromosomes', 'Chromosomes'), t.ploidy, { id: 'ploidy' }),
    t.interspecific?.length ? h('section', { class: 'sd-block', 'data-block': 'interspecific' },
      h('h3', { text: T('Crosses with other species', 'Croisements avec d’autres espèces') }),
      h('ul', { class: 'sd-list' }, ...t.interspecific.map((x) => h('li', {}, h('strong', {}, ...linkNames(lang() === 'fr' && x.with_fr ? x.with_fr : x.with)), ': ', ...rich(L(x)), ' ', ...srcRefs(x.src))))) : null,
    block(T('Crosses between varieties', 'Croisements entre variétés'), t.varieties, { id: 'varieties' }),
    block(T('Pollinizers, distances and isolation', 'Pollinisateurs, distances et isolement'), t.isolation, { id: 'isolation' }),
    t.true_to_type ? block(T('Does the seed come true?', 'Les graines redonnent-elles la même plante ?'), t.true_to_type, { id: 'true', extra: h('span', { class: `sd-true sd-true-${t.true_to_type.value}`, text: ` ${L(TRUE[t.true_to_type.value])}` }) }) : null,
    block(T('How it is propagated', 'Comment on la multiplie'), t.propagation, { id: 'propagation' }),
    cultivarBox(t),
    pairCheck(t),
    kids.length ? h('div', { class: 'a-rel' }, h('div', {}, h('h3', { text: T(`Below (${kids.length})`, `En dessous (${kids.length})`) }),
      h('div', { class: 'a-chips' }, ...kids.map((k) => { const x = index.byId.get(k); return h('a', { href: link(k), class: 'a-chip' }, sciName(x), x.cultivar?.self ? h('span', { class: 'a-chip-alt', text: L(SELF[x.cultivar.self])?.split(':')[0] }) : null); })))) : null,
    t.parent ? h('div', { class: 'a-rel' }, h('div', {}, h('h3', { text: T('Belongs to', 'Fait partie de') }), taxonLink(t.parent))) : null,
    h('p', { class: 'a-perma small' }, T('Permalink: ', 'Permalien : '), h('a', { href: link(t.id), id: 'a-permalink', text: new URL(link(t.id), location.href).href })),
  ].filter(Boolean));
  if (scroll) {
    const r = els.entry.getBoundingClientRect();
    if (r.top < 0 || r.top > innerHeight * 0.6) els.entry.scrollIntoView({ block: 'start' });
    els.entry.focus({ preventScroll: true });
  }
}

function go(id) {
  if (!index.byId.has(id)) return;
  if (S.id === id && location.hash === link(id)) { renderTree(); renderEntry(); return; }
  location.hash = link(id);
}

// ---------------------------------------------------------------- tab interface
/** Build the tab into its panel; sub is the taxon id from the route. */
export function mount(panel, sub) {
  S.id = valid(sub) ?? DEFAULT_ID;
  build(panel);
}
/** The route changed inside the tab. */
export function show(sub) {
  const id = valid(sub) ?? DEFAULT_ID;
  const changed = id !== S.id;
  S.id = id;
  renderTree();
  renderEntry({ scroll: changed });
}
