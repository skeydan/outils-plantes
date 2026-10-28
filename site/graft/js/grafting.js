// Pure logic for the grafting page: the tree (the taxa of the breeding tab,
// with each grafted plant branching into its rootstocks), search keys,
// inherited data and structural checks. No DOM, so the unit tests can run it
// in Node.
import { buildIndex as buildTreeIndex, pathTo } from '../../assets/tree.js';
import { taxonKeys } from '../../seeds/js/breeding.js';

/** How usual grafting is for a plant. */
export const PRACTICES = ['standard', 'common', 'standards', 'occasional', 'not'];
/** How a scion and a rootstock get on. */
export const COMPAT = ['good', 'variable', 'interstock', 'poor'];
/** What a rootstock is judged on, in the order shown. */
export const CRITERIA = ['vigour', 'soil', 'lime', 'drought', 'wet', 'salinity', 'cold', 'heat', 'disease', 'anchorage', 'suckering', 'cropping'];
export const VIGOUR = ['dwarfing', 'semi-dwarfing', 'semi-vigorous', 'vigorous', 'very-vigorous'];

export const SEP = '--';
export const groupId = (taxonId) => `${taxonId}${SEP}rootstocks`;
export const stockNodeId = (taxonId, stockId) => `${taxonId}${SEP}${stockId}`;

/**
 * The nodes of the tree: every taxon of the breeding tab, and under each
 * plant that has rootstocks, a group node "rootstocks" with one node per
 * rootstock. Rootstock nodes come first under their plant, before the
 * cultivars. Node: {id, parent, type: 'taxon' | 'group' | 'stock', taxon, stock}.
 */
export function graftNodes(taxa, scions, rootstocks) {
  const stockById = new Map(rootstocks.map((r) => [r.id, r]));
  const out = [];
  for (const t of taxa) {
    out.push({ id: t.id, parent: t.parent, type: 'taxon', taxon: t });
    const s = scions[t.id];
    if (!s?.stocks?.length) continue;
    out.push({ id: groupId(t.id), parent: t.id, type: 'group', taxon: t });
    for (const link of s.stocks) out.push({ id: stockNodeId(t.id, link.rs), parent: groupId(t.id), type: 'stock', taxon: t, stock: stockById.get(link.rs), link });
  }
  return out;
}

/** Search keys: the taxa as in the breeding tab, rootstocks by name and other names. */
export function nodeKeys(n) {
  if (n.type === 'taxon') return taxonKeys(n.taxon);
  if (n.type === 'group') return [];
  return [{ lang: 'la', term: n.stock?.name, main: true }, ...(n.stock?.aka ?? []).map((a) => ({ lang: 'la', term: a, main: false }))];
}

export function buildGraftIndex(taxa, scions, rootstocks) {
  return buildTreeIndex(graftNodes(taxa, scions, rootstocks), nodeKeys);
}

/** The closest taxon (self or ancestor) that has grafting data. */
export function scionSource(index, scions, id) {
  for (const k of pathTo(index, id).reverse()) {
    const n = index.byId.get(k);
    if (n.type === 'taxon' && scions[k]?.practice) return k;
  }
  return null;
}

/** Every source id cited by the grafting data. */
export function citedSources(scions, rootstocks, criteria = []) {
  const out = new Set();
  const add = (list) => (list ?? []).forEach((s) => out.add(typeof s === 'string' ? s : s.k));
  for (const s of Object.values(scions)) { add(s.how?.src); add(s.cultivars?.src); add(s.note?.src); for (const l of s.stocks ?? []) add(l.src); }
  for (const r of rootstocks) { add(r.parentage?.src); for (const c of CRITERIA) add(r.traits?.[c]?.src); }
  for (const c of criteria) add(c.src);
  return [...out];
}

/** Structural checks used by the unit tests. */
export function validate(taxa, scions, rootstocks, { sourceIds = new Set(), criteria = [] } = {}) {
  const problems = [];
  const taxonIds = new Set(taxa.map((t) => t.id));
  const stockIds = new Set();
  const txt = (where, x) => {
    if (!x) return;
    if (!x.en || !x.fr) problems.push(`${where}: needs en and fr`);
    if (!x.src?.length) problems.push(`${where}: no source`);
    for (const s of x.src ?? []) { const k = typeof s === 'string' ? s : s.k; if (!sourceIds.has(k)) problems.push(`${where}: unknown source ${k}`); }
  };
  for (const r of rootstocks) {
    if (stockIds.has(r.id)) problems.push(`rootstock ${r.id} twice`);
    stockIds.add(r.id);
    if (r.id.includes(SEP)) problems.push(`rootstock ${r.id}: id contains ${SEP}`);
    if (!['clonal', 'seedling', 'species'].includes(r.kind)) problems.push(`rootstock ${r.id}: kind ${r.kind}`);
    txt(`rootstock ${r.id} parentage`, r.parentage);
    if (!r.parentage) problems.push(`rootstock ${r.id}: no parentage`);
    for (const [c, x] of Object.entries(r.traits ?? {})) {
      if (!CRITERIA.includes(c)) problems.push(`rootstock ${r.id}: unknown criterion ${c}`);
      txt(`rootstock ${r.id} ${c}`, x);
      if (c === 'vigour' && x.level && !VIGOUR.includes(x.level)) problems.push(`rootstock ${r.id}: vigour ${x.level}`);
    }
  }
  for (const [id, s] of Object.entries(scions)) {
    if (!taxonIds.has(id)) problems.push(`scion ${id}: not a taxon of the breeding tab`);
    if (s.practice && !PRACTICES.includes(s.practice)) problems.push(`scion ${id}: practice ${s.practice}`);
    if (s.practice) { if (!s.how) problems.push(`scion ${id}: practice without text`); }
    txt(`scion ${id}`, s.how);
    txt(`scion ${id} cultivars`, s.cultivars);
    txt(`scion ${id} note`, s.note);
    if (!s.practice && !s.note && !s.stocks?.length) problems.push(`scion ${id}: empty`);
    if (s.practice === 'not' && s.stocks?.length) problems.push(`scion ${id}: not grafted but has rootstocks`);
    const seen = new Set();
    for (const l of s.stocks ?? []) {
      if (!stockIds.has(l.rs)) problems.push(`scion ${id}: unknown rootstock ${l.rs}`);
      if (seen.has(l.rs)) problems.push(`scion ${id}: rootstock ${l.rs} twice`);
      seen.add(l.rs);
      if (!COMPAT.includes(l.compat)) problems.push(`scion ${id} on ${l.rs}: compat ${l.compat}`);
      txt(`scion ${id} on ${l.rs}`, l);
    }
  }
  for (const r of rootstocks) if (!Object.values(scions).some((s) => s.stocks?.some((l) => l.rs === r.id))) problems.push(`rootstock ${r.id}: used by no plant`);
  for (const c of criteria) { if (!c.title?.en || !c.title?.fr) problems.push(`criterion ${c.id}: title`); txt(`criterion ${c.id}`, c); }
  return problems;
}
