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
  inAnatomy: { en: 'in Anatomy', fr: 'dans Anatomie' },
  inFruits: { en: 'fruit types in Fruits', fr: 'types de fruits dans Fruits' },
  inDevelopment: { en: 'flower → fruit in Development', fr: 'fleur → fruit dans Développement' },
  sources: { en: 'Sources', fr: 'Sources' },
};

// Fruit-type category on the Fruits tab for each fruit type in the Anatomy tab.
const FRUIT_CAT = {
  drupe: 'drupe', berry: 'berry', 'aggregate-fruit': 'aggregate', 'accessory-fruit': 'accessory', pome: 'accessory',
  achene: 'dry', caryopsis: 'dry', capsule: 'dry', nut: 'dry', legume: 'dry', follicle: 'dry', silique: 'dry',
  samara: 'dry', schizocarp: 'dry',
};

const RANK = {
  order: { en: 'order', fr: 'ordre' },
  family: { en: 'family', fr: 'famille' },
  genus: { en: 'genus', fr: 'genre' },
  species: { en: 'species', fr: 'espèce' },
  variety: { en: 'variety', fr: 'variété' },
  cultivar: { en: 'cultivar', fr: 'cultivar' },
};
const LATIN_RANKS = new Set(['genus', 'species', 'variety']);
const CULTIVAR_RE = /^(.*?)\s+((?:'[^']*')|(?:‘[^’]*’))$/;

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
const italic = (txt) => h('span', { class: 'taxo-lat' }, txt);

/** Split a cultivar name into the italic binomial and the roman epithet. */
export function cultivarParts(e) {
  if (e?.rank !== 'cultivar') return null;
  const m = String(e.name ?? '').match(CULTIVAR_RE);
  return m ? { binomial: m[1], epithet: m[2] } : null;
}

function cultivarName(e) {
  const p = cultivarParts(e);
  if (!p) return h('span', { class: 'taxo-cultivar' }, e.name);
  return h('span', {}, italic(p.binomial), ' ', h('span', { class: 'taxo-cultivar' }, p.epithet));
}

/** A tree label: rank styling, and a split name for cultivars. */
function nameNode(e) {
  if (e.rank === 'cultivar') return cultivarName(e);
  const sp = h('span', { class: LATIN_RANKS.has(e.rank) ? 'taxo-lat' : 'taxo-rank' });
  sp.textContent = e.name;
  return sp;
}

/** The detail heading: Latin names italic, cultivar epithets roman. */
const detailName = (e) => (e.rank === 'cultivar' ? cultivarName(e) : italic(e.name));

/** A name inside a list or a breadcrumb: plain outside the Latin ranks. */
const nameInline = (e) => (e.rank === 'cultivar' ? cultivarName(e) : (LATIN_RANKS.has(e.rank) ? italic(e.name) : e.name));

/** A search result keeps the old all-italic look, except for cultivars. */
const searchName = (e) => (e.rank === 'cultivar' ? cultivarName(e) : italic(e.name));

const label = (id) => nameNode(index.byId.get(id));

/** What the tree shows beside a node: species below, or the taxa under a species. */
export function countBelow(i, id) {
  const e = i.byId.get(id);
  if (e.rank === 'species') return i.children.get(id).length;
  return descendantCount(i, id, (x) => x.rank === 'species');
}

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
  const alink = (id, txt) => h('a', { href: routeHref('anatomy', id), class: 'taxo-link' }, txt);
  const rows = [
    [alink('sepal', SFL.sepals), `${nTxt(f.sepals.n)}${wNote(f.sepals)}`],
    [alink('petal', SFL.petals), `${nTxt(f.petals.n)}${wNote(f.petals)}`],
    [alink('stamen', SFL.stamens), `${nTxt(f.stamens.n)}${wNote(f.stamens)}`],
    [alink('carpel', SFL.carpels), `${nTxt(f.carpels.n)}${wNote(f.carpels)}`],
  ];
  const table = h('table', { class: 'taxo-table' },
    h('caption', {}, L(STR.flowerParts)),
    ...rows.map(([k, v]) => h('tr', {}, h('th', { scope: 'row' }, k), h('td', {}, v))),
    h('tr', {}, h('th', { scope: 'row' }, L(STR.symmetry)), h('td', {}, L(SYMMETRY[f.symmetry]))),
    h('tr', {}, h('th', { scope: 'row' }, L(STR.ovary)), h('td', {},
      alink(f.ovary === 'superior' ? 'superior-ovary' : 'inferior-ovary', L(OVARY[f.ovary])))),
    h('tr', {}, h('th', { scope: 'row' }, L(STR.sex)), h('td', {}, L(SEX[f.sex]))),
  );

  const fig = h('div', { class: 'taxo-fig' });
  fig.innerHTML = flowerSVG(f, SFL);

  const photo = e.photo ? h('figure', { class: 'taxo-photo' },
    h('img', { src: `taxonomy/img/${e.photo.file}`, alt: L(e.photo.cap), loading: 'lazy' }),
    h('figcaption', {}, L(e.photo.cap),
      h('span', { class: 'taxo-credit' }, ' — ', T('Photo', 'Photo'), ' ', cite(e.photo.credit)))) : null;

  const fruitLinks = (e.fruit_anatomy || e.process) ? h('span', { class: 'taxo-see' },
    e.fruit_anatomy ? h('a', { class: 'taxo-chip', href: routeHref('anatomy', e.fruit_anatomy) }, L(STR.inAnatomy)) : null,
    e.fruit_anatomy ? h('a', { class: 'taxo-chip', href: routeHref('fruits', FRUIT_CAT[e.fruit_anatomy] ?? 'dry') }, L(STR.inFruits)) : null,
    e.process ? h('a', { class: 'taxo-chip', href: routeHref('development', e.process) }, L(STR.inDevelopment)) : null) : null;

  const facts = h('dl', { class: 'taxo-facts' },
    h('dt', {}, L(STR.formula)), h('dd', {}, h('code', {}, f.formula)),
    h('dt', {}, L(STR.phyllotaxy)), h('dd', {}, L(e.phyllotaxy)),
    h('dt', {}, L(STR.inflorescence)), h('dd', {}, L(e.inflorescence)),
    h('dt', {}, L(STR.fruit)), h('dd', {}, L(e.fruit), fruitLinks),
  );

  const kids = index.children.get(e.id);
  const below = kids.length ? h('div', { class: 'taxo-below' },
    h('h3', {}, T('Cultivars and varieties', 'Cultivars et variétés')),
    h('ul', { class: 'taxo-children' }, ...kids.map((id) => h('li', {},
      h('a', { href: href(id), 'data-id': id }, nameInline(index.byId.get(id))))))) : null;

  return h('div', {}, fig, photo, table, facts,
    f.note ? h('p', { class: 'taxo-note' }, L(f.note)) : null,
    below,
    h('p', { class: 'taxo-src' }, T('Names', 'Noms'), ' ', cite(...e.names_src.map((s) => s.k)),
      ' · ', T('flower', 'fleur'), ' ', cite(...e.flower_src.map((s) => s.k))));
}

/** A non-species detail (order, family, genus): name, common names, children. */
function taxonDetail(e) {
  const kids = index.children.get(e.id);
  const parent = e.parent === null ? null : index.byId.get(e.parent);
  return h('div', {},
    h('p', { class: 'taxo-rankline' }, L(RANK[e.rank])),
    (e.rank === 'variety' || e.rank === 'cultivar') && parent ? h('p', { class: 'taxo-rankline' },
      T('Flower and fruit: see ', 'Fleur et fruit : voir '), h('a', { href: href(parent.id), 'data-id': parent.id }, nameInline(parent))) : null,
    kids.length ? h('ul', { class: 'taxo-children' }, ...kids.map((id) => h('li', {},
      h('a', { href: href(id), 'data-id': id }, nameInline(index.byId.get(id)))))) : null,
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
    path.append(h('a', { href: href(c.id), 'data-id': c.id, 'aria-current': c.id === id ? 'true' : null }, nameInline(c)));
  });

  const head = h('h2', { class: 'taxo-name' }, detailName(e),
    e.author ? h('span', { class: 'taxo-author' }, ` ${e.author}`) : null);
  const langs = ['fr', 'en', 'de'];
  const common = h('p', { class: 'taxo-common' },
    [lang(), ...langs.filter((l) => l !== lang())].map((l) => (e.common?.[l] ?? []).join(' · ')).filter(Boolean).join(' · '));

  return h('article', {}, path, head, common,
    e.rank === 'species' ? speciesDetail(e) : taxonDetail(e));
}

// ---------------------------------------------------------------- hover notes
// On a family or genus, show its taxonomy{en,fr} text in a small tooltip.
const TIP_RANKS = new Set(['family', 'genus']);
let tipEl = null, tipAnchor = null;

function hideTip() {
  if (tipAnchor) { tipAnchor.removeAttribute('aria-describedby'); tipAnchor = null; }
  if (tipEl) tipEl.hidden = true;
}

function showTip(a) {
  const e = index.byId.get(a.dataset.id);
  const text = e && TIP_RANKS.has(e.rank) ? L(e.taxonomy) : '';
  if (!text) { hideTip(); return; }
  if (!tipEl) {
    tipEl = h('div', { class: 'taxo-tip', role: 'tooltip', id: 'taxo-tip', hidden: true });
    document.body.append(tipEl);
  }
  tipEl.textContent = text;
  tipEl.hidden = false;
  const pad = 10, r = a.getBoundingClientRect();
  const w = tipEl.offsetWidth, ht = tipEl.offsetHeight;
  let left = r.right + pad, top = r.top;
  if (left + w > innerWidth - pad) left = Math.max(pad, r.left - w - pad);
  if (top + ht > innerHeight - pad) top = Math.max(pad, innerHeight - ht - pad);
  tipEl.style.left = `${left}px`;
  tipEl.style.top = `${top}px`;
  if (tipAnchor && tipAnchor !== a) tipAnchor.removeAttribute('aria-describedby');
  tipAnchor = a;
  a.setAttribute('aria-describedby', tipEl.id);
}

function wireTaxonomyTips(box) {
  box.addEventListener('pointerover', (ev) => {
    const a = ev.target.closest?.('a[data-id]');
    if (a && box.contains(a)) showTip(a); else hideTip();
  });
  box.addEventListener('pointerout', (ev) => {
    const a = ev.target.closest?.('a[data-id]');
    if (!a || (ev.relatedTarget && a.contains(ev.relatedTarget))) return;
    hideTip();
  });
  box.addEventListener('focusin', (ev) => {
    const a = ev.target.closest?.('a[data-id]');
    if (a && box.contains(a)) showTip(a); else hideTip();
  });
  box.addEventListener('focusout', hideTip);
  box.addEventListener('scroll', hideTip, true);
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
  wireTaxonomyTips(treeBox);
  wireTaxonomyTips(detailEl);

  panel.replaceChildren(
    h('header', { class: 'taxo-head' }, h('h1', {}, L(STR.title)), h('p', { class: 'lead' }, L(STR.lead))),
    h('div', { class: 'taxo-searchwrap' }, searchInput, results, msg),
    body,
    h('footer', { class: 'taxo-sources' }, h('h2', {}, L(STR.sources)), list()),
  );

  wireSearch({
    input: searchInput, results, msg, T,
    find: (q) => (q.trim() ? search(index, q.trim()) : []),
    option: (r) => [searchName(index.byId.get(r.id)),
      h('span', { class: 'taxo-dim' }, (index.byId.get(r.id).common?.[lang()] ?? []).join(', '))],
    pick: (r) => { location.hash = href(r.id); },
  });

  S.open = new Set();
  show(sub);
}

export function show(sub) {
  hideTip();
  if (sub && index.byId.has(sub)) S.id = sub;
  renderTree(treeBox, { index, current: S.id, open: S.open, label, href, T,
    count: countBelow,
    countTitle: T('entries below', 'entrées en dessous') });
  detailEl.replaceChildren(detail(S.id));
}
