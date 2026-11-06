// Taxonomy: a small, growing tree (order -> family -> genus -> species) with,
// for each species, a schematic flower (parts per whorl, symmetry, ovary) and
// the leaf arrangement (phyllotaxy). Names follow POWO/WFO.
import { lang } from '../../assets/site.js';
import { routeHref } from '../../assets/route.js';
import { h, citer } from '../../assets/ui.js';
import { renderTree, wireSearch } from '../../assets/tree-ui.js';
import { buildIndex, search, descendantCount } from '../../assets/tree.js';
import { TAXA } from './taxa.js';
import { SOURCES } from './sources.js';
import { flowerSVG } from './flower.js';

const T = (en, fr) => (lang() === 'fr' ? fr : en);
const L = (o) => (o ? o[lang()] ?? o.en : '');

const STR = {
  title: { en: 'Taxonomy: from order to species, and the flower of each', fr: 'Taxonomie : de l’ordre à l’espèce, et la fleur de chacune' },
  lead: {
    en: 'A small, growing classification. For each species: its order, family, genus and species name (with the author), a schematic flower showing sepals, petals, stamens and carpels, the count of each, and how the leaves are arranged.',
    fr: 'Une petite classification qui grandit peu à peu. Pour chaque espèce : son ordre, sa famille, son genre et son nom d’espèce (avec l’auteur), une fleur schématique montrant sépales, pétales, étamines et carpelles, le nombre de chacun, et la disposition des feuilles.',
  },
  search: { en: 'Search a name or a common name…', fr: 'Chercher un nom ou un nom commun…' },
  path: { en: 'Order → family → genus → species', fr: 'Ordre → famille → genre → espèce' },
  flowerParts: { en: 'Flower parts', fr: 'Pièces florales' },
  formula: { en: 'Floral formula', fr: 'Formule florale' },
  symmetry: { en: 'Symmetry', fr: 'Symétrie' },
  ovary: { en: 'Ovary', fr: 'Ovaire' },
  sex: { en: 'Sex', fr: 'Sexualité' },
  phyllotaxy: { en: 'Leaf arrangement (phyllotaxy)', fr: 'Disposition des feuilles (phyllotaxie)' },
  inflorescence: { en: 'Inflorescence', fr: 'Inflorescence' },
  fruit: { en: 'Fruit', fr: 'Fruit' },
  sources: { en: 'Sources', fr: 'Sources' },
};

const RANK = {
  order: { en: 'order', fr: 'ordre' },
  family: { en: 'family', fr: 'famille' },
  genus: { en: 'genus', fr: 'genre' },
  species: { en: 'species', fr: 'espèce' },
};

const SYMMETRY = {
  actinomorphic: { en: 'actinomorphic (radial)', fr: 'actinomorphe (radiaire)' },
  zygomorphic: { en: 'zygomorphic (two-sided)', fr: 'zygomorphe (bilatérale)' },
};
const OVARY = { superior: { en: 'superior', fr: 'supère' }, inferior: { en: 'inferior', fr: 'infère' } };
const SEX = {
  bisexual: { en: 'bisexual (one flower has both)', fr: 'bisexuée (une fleur porte les deux)' },
  monoecious: { en: 'monoecious (male and female flowers on one plant)', fr: 'monoïque (fleurs mâles et femelles sur un même pied)' },
  dioecious: { en: 'dioecious (male and female on separate plants)', fr: 'dioïque (pieds mâles et femelles séparés)' },
};

export const keysOf = (e) => {
  const out = [{ lang: 'la', term: e.name, main: true }];
  for (const [l, arr] of Object.entries(e.common ?? {})) for (const term of arr) out.push({ lang: l, term, main: false });
  for (const s of e.synonyms ?? []) out.push({ lang: 'la', term: s, main: false });
  return out;
};

const index = buildIndex(TAXA, keysOf);
const { cite, list } = citer(SOURCES);
const DEFAULT_ID = 'triticum-aestivum';
const S = { id: DEFAULT_ID, open: new Set() };

const href = (id) => routeHref('taxonomy', id);
const label = (id) => {
  const e = index.byId.get(id);
  const sp = h('span', { class: e.rank === 'genus' || e.rank === 'species' ? 'taxo-lat' : 'taxo-rank' });
  sp.textContent = e.name;
  return sp;
};

const nTxt = (n) => (n === null ? '∞' : String(n));
const wNote = (w) => (w.note ? ` — ${L(w.note)}` : '');

/** A species detail: the flower figure and the counts. */
function speciesDetail(e) {
  const f = e.flower;
  const SFL = {
    sepals: T('sepals', 'sépales'), petals: T('petals', 'pétales'),
    stamens: T('stamens', 'étamines'), carpels: T('carpels', 'carpelles'),
    diagram: T('floral diagram', 'schéma floral'),
  };
  const rows = [
    [SFL.sepals, `${nTxt(f.sepals.n)}${wNote(f.sepals)}`],
    [SFL.petals, `${nTxt(f.petals.n)}${wNote(f.petals)}`],
    [SFL.stamens, `${nTxt(f.stamens.n)}${wNote(f.stamens)}`],
    [SFL.carpels, `${nTxt(f.carpels.n)}${wNote(f.carpels)}`],
  ];
  const table = h('table', { class: 'taxo-table' },
    h('caption', {}, L(STR.flowerParts)),
    ...rows.map(([k, v]) => h('tr', {}, h('th', { scope: 'row' }, k), h('td', {}, v))),
    h('tr', {}, h('th', { scope: 'row' }, L(STR.symmetry)), h('td', {}, L(SYMMETRY[f.symmetry]))),
    h('tr', {}, h('th', { scope: 'row' }, L(STR.ovary)), h('td', {}, L(OVARY[f.ovary]))),
    h('tr', {}, h('th', { scope: 'row' }, L(STR.sex)), h('td', {}, L(SEX[f.sex]))),
  );

  const fig = h('div', { class: 'taxo-fig' });
  fig.innerHTML = flowerSVG(f, SFL);

  const facts = h('dl', { class: 'taxo-facts' },
    h('dt', {}, L(STR.formula)), h('dd', {}, h('code', {}, f.formula)),
    h('dt', {}, L(STR.phyllotaxy)), h('dd', {}, L(e.phyllotaxy)),
    h('dt', {}, L(STR.inflorescence)), h('dd', {}, L(e.inflorescence)),
    h('dt', {}, L(STR.fruit)), h('dd', {}, L(e.fruit)),
  );

  return h('div', {}, fig, table, facts,
    f.note ? h('p', { class: 'taxo-note' }, L(f.note)) : null,
    h('p', { class: 'taxo-src' }, T('Names', 'Noms'), ' ', cite(...e.names_src.map((s) => s.k)),
      ' · ', T('flower', 'fleur'), ' ', cite(...e.flower_src.map((s) => s.k))));
}

/** A non-species detail (order, family, genus): name, common names, children. */
function taxonDetail(e) {
  const kids = index.children.get(e.id);
  return h('div', {},
    h('p', { class: 'taxo-rankline' }, L(RANK[e.rank])),
    kids.length ? h('ul', { class: 'taxo-children' }, ...kids.map((id) => h('li', {}, h('a', { href: href(id) }, index.byId.get(id).name)))) : null,
    h('p', { class: 'taxo-src' }, T('Names and placement', 'Noms et placement'), ' ', cite(...e.names_src.map((s) => s.k)), ' ',
      cite(...(e.taxonomy?.src ?? []).map((s) => s.k))));
}

function detail(id) {
  const e = index.byId.get(id);
  const path = h('p', { class: 'taxo-path' });
  const chain = [];
  let cur = e;
  while (cur) { chain.unshift(cur); cur = cur.parent === null ? null : index.byId.get(cur.parent); }
  chain.forEach((c, i) => {
    if (i) path.append(h('span', { class: 'taxo-arrow' }, ' → '));
    path.append(h('a', { href: href(c.id), 'aria-current': c.id === id ? 'true' : null }, c.name));
  });

  const head = h('h2', { class: 'taxo-name' }, h('span', { class: 'taxo-lat' }, e.name),
    e.author ? h('span', { class: 'taxo-author' }, ` ${e.author}`) : null);
  const langs = ['fr', 'en', 'de'];
  const common = h('p', { class: 'taxo-common' },
    [lang(), ...langs.filter((l) => l !== lang())].map((l) => (e.common?.[l] ?? []).join(' · ')).filter(Boolean).join(' · '));

  return h('article', {}, path, head, common,
    e.rank === 'species' ? speciesDetail(e) : taxonDetail(e));
}

let detailEl, treeBox;

export function mount(panel, sub) {
  const searchInput = h('input', { type: 'search', class: 'taxo-search', placeholder: L(STR.search), 'aria-label': L(STR.search) });
  const results = h('ul', { class: 'taxo-results', role: 'listbox', hidden: true });
  const msg = h('p', { class: 'taxo-msg' });
  detailEl = h('div', { class: 'taxo-detail' });
  treeBox = h('div', { class: 'taxo-tree-box' });

  const treeCard = h('div', { class: 'a-tree-card taxo-tree-card' }, treeBox);
  const body = h('div', { class: 'taxo-body' }, treeCard, detailEl);

  panel.replaceChildren(
    h('header', { class: 'taxo-head' }, h('h1', {}, L(STR.title)), h('p', { class: 'lead' }, L(STR.lead))),
    h('div', { class: 'taxo-searchwrap' }, searchInput, results, msg),
    body,
    h('footer', { class: 'taxo-sources' }, h('h2', {}, L(STR.sources)), list()),
  );

  wireSearch({
    input: searchInput, results, msg, T,
    find: (q) => (q.trim() ? search(index, q.trim()) : []),
    option: (r) => [h('span', { class: 'taxo-lat' }, index.byId.get(r.id).name),
      h('span', { class: 'taxo-dim' }, (index.byId.get(r.id).common?.[lang()] ?? []).join(', '))],
    pick: (r) => { location.hash = href(r.id); },
  });

  S.open = new Set();
  show(sub);
}

export function show(sub) {
  if (sub && index.byId.has(sub)) S.id = sub;
  renderTree(treeBox, { index, current: S.id, open: S.open, label, href, T,
    count: (_i, id) => descendantCount(index, id, (e) => e.rank === 'species'),
    countTitle: T('species below', 'espèces en dessous') });
  detailEl.replaceChildren(detail(S.id));
}
