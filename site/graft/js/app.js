// Grafting: the plants of the breeding tab (family -> genus -> species ->
// variety or cultivar), each grafted plant branching into the rootstocks it
// is grafted on, with what each rootstock is chosen for (vigour, soil, lime,
// drought, wet soil, cold, diseases...) and how well scion and rootstock get
// on. Plants that are not grafted say so, and how they are propagated.
import { lang } from '../../assets/site.js';
import { routeHref } from '../../assets/route.js';
import { h, citer } from '../../assets/ui.js';
import { renderTree as drawTree, wireSearch } from '../../assets/tree-ui.js';
import { pathTo, search } from '../../assets/tree.js';
import { TAXA } from '../../seeds/js/taxa.js';
import { nameParts } from '../../seeds/js/breeding.js';
import { SCIONS, ROOTSTOCKS, CRITERIA_CARDS } from './graft.js';
import { SOURCES } from './sources.js';
import { buildGraftIndex, scionSource, CRITERIA, groupId, stockNodeId } from './grafting.js';

const T = (en, fr) => (lang() === 'fr' ? fr : en);
const L = (o) => (o ? o[lang()] ?? o.en : '');

const STR = {
  title: { en: 'Grafting: scions, rootstocks and how to choose them', fr: 'Greffe : greffons, porte-greffes et comment les choisir' },
  lead: {
    en: 'The plants of the breeding tab, from family to cultivar. For each one: is it grafted at all, and if so on which rootstocks, what each rootstock brings (size, soil, lime, drought, wet soil, cold, diseases) and how well the two get on. Where grafting is not the way the plant is grown, the entry says so and how it is propagated instead.',
    fr: 'Les plantes de l’onglet Hybridation, de la famille au cultivar. Pour chacune : la greffe-t-on, et si oui sur quels porte-greffes, ce que chaque porte-greffe apporte (taille, sol, calcaire, sécheresse, sol humide, froid, maladies) et s’il s’entend bien avec le greffon. Quand on ne la cultive pas greffée, la fiche le dit, et comment on la multiplie.',
  },
};
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
const PRACTICE = {
  standard: { en: 'Grafted as a rule', fr: 'Greffé en règle générale' },
  common: { en: 'Often grafted, also grown on its own roots', fr: 'Souvent greffé, aussi cultivé franc de pied' },
  standards: { en: 'Own roots as a bush; grafted only as a standard', fr: 'Franc de pied en buisson ; greffé seulement en tige' },
  occasional: { en: 'Grafting possible, but uncommon', fr: 'Greffe possible, mais peu courante' },
  not: { en: 'Not grafted', fr: 'Pas greffé' },
};
const PRACTICE_MARK = { standard: '●', common: '◐', standards: '◐', occasional: '○', not: '–' };
const COMPAT = {
  good: { en: 'compatible', fr: 'compatible' },
  variable: { en: 'depends on the variety', fr: 'selon la variété' },
  interstock: { en: 'needs an interstock for some varieties', fr: 'intermédiaire nécessaire pour certaines variétés' },
  poor: { en: 'poor or incompatible', fr: 'mauvaise ou incompatible' },
};
const COMPAT_MARK = { good: '✓', variable: '~', interstock: '⇅', poor: '✕' };
const KIND = {
  clonal: { en: 'clonal rootstock', fr: 'porte-greffe clonal' },
  seedling: { en: 'seedling rootstock', fr: 'porte-greffe de semis' },
  species: { en: 'another species, used as rootstock', fr: 'autre espèce, utilisée comme porte-greffe' },
};
const CRIT = {
  vigour: { en: 'Vigour and tree size', fr: 'Vigueur et taille de l’arbre' },
  soil: { en: 'Soil', fr: 'Sol' },
  lime: { en: 'Lime and pH', fr: 'Calcaire et pH' },
  drought: { en: 'Drought', fr: 'Sécheresse' },
  wet: { en: 'Wet soil, waterlogging', fr: 'Sol humide, asphyxie' },
  salinity: { en: 'Salinity', fr: 'Salinité' },
  cold: { en: 'Cold', fr: 'Froid' },
  heat: { en: 'Heat', fr: 'Chaleur' },
  disease: { en: 'Diseases and pests', fr: 'Maladies et ravageurs' },
  anchorage: { en: 'Anchorage', fr: 'Ancrage' },
  suckering: { en: 'Suckers', fr: 'Drageons' },
  cropping: { en: 'Cropping', fr: 'Mise à fruit' },
};
const VIGOUR = {
  dwarfing: { en: 'dwarfing', fr: 'nanifiant' },
  'semi-dwarfing': { en: 'semi-dwarfing', fr: 'semi-nanifiant' },
  'semi-vigorous': { en: 'semi-vigorous', fr: 'moyennement vigoureux' },
  vigorous: { en: 'vigorous', fr: 'vigoureux' },
  'very-vigorous': { en: 'very vigorous', fr: 'très vigoureux' },
};

const index = buildGraftIndex(TAXA, SCIONS, ROOTSTOCKS);
const stockById = new Map(ROOTSTOCKS.map((r) => [r.id, r]));
const { cite, list } = citer(SOURCES);
const DEFAULT_ID = 'prunus-amygdalus';
const S = { id: DEFAULT_ID, open: new Set() };
const link = (id) => routeHref('graft', id);
const valid = (id) => (id && index.byId.has(id) ? id : null);

const srcRefs = (items) => {
  const ids = [...new Set((items ?? []).map((s) => (typeof s === 'string' ? s : s.k)))];
  return ids.length ? cite(...ids) : [];
};

/** A scientific name with the right italics. */
function sciName(t) {
  return h('span', { class: 'sd-sci' }, ...nameParts(t.name, t.rank).map((p) => (p.italic ? h('i', { text: p.text }) : p.text)));
}
const common = (t) => t.common?.[lang()]?.[0] ?? t.common?.en?.[0] ?? null;
const stockName = (r) => h('span', { class: 'gf-stock-name', text: r.name });

function nodeLabel(id) {
  const n = index.byId.get(id);
  if (n.type === 'group') return h('span', { class: 'gf-group-label', text: T(`Rootstocks (${index.children.get(id).length})`, `Porte-greffes (${index.children.get(id).length})`) });
  if (n.type === 'stock') return h('span', {}, h('span', { class: `gf-mark gf-c-${n.link.compat}`, 'aria-hidden': 'true', text: COMPAT_MARK[n.link.compat] }), ' ', stockName(n.stock));
  const t = n.taxon;
  const c = common(t);
  const p = SCIONS[t.id]?.practice;
  return h('span', {}, p ? h('span', { class: `gf-mark gf-p-${p}`, title: L(PRACTICE[p]), text: `${PRACTICE_MARK[p]} ` }) : null,
    sciName(t), c && t.rank !== 'cultivar' ? h('span', { class: 'sd-common', text: ` ${c}` }) : null);
}

/** Text with {{taxon-id}} links (to this tab) and [[rootstock-id]] links (to the rootstock under the plant shown). */
function rich(s, at = null) {
  const out = [];
  const re = /\{\{([a-z0-9-]+)(?:\|([^}]+))?\}\}|\[\[([a-z0-9-]+)(?:\|([^\]]+))?\]\]/g;
  let last = 0, m;
  while ((m = re.exec(s))) {
    if (m.index > last) out.push(s.slice(last, m.index));
    if (m[1]) {
      const n = index.byId.get(m[1]);
      out.push(n ? h('a', { href: link(n.id) }, m[2] ?? sciName(n.taxon)) : (m[2] ?? m[1]));
    } else {
      const r = stockById.get(m[3]);
      const target = at && index.byId.has(stockNodeId(at, m[3])) ? stockNodeId(at, m[3]) : firstUse(m[3]);
      out.push(r && target ? h('a', { href: link(target) }, m[4] ?? r.name) : (m[4] ?? r?.name ?? m[3]));
    }
    last = re.lastIndex;
  }
  if (last < s.length) out.push(s.slice(last));
  return out;
}
/** The first plant node a rootstock hangs under. */
function firstUse(rs) {
  for (const [id, s] of Object.entries(SCIONS)) if (s.stocks?.some((l) => l.rs === rs)) return stockNodeId(id, rs);
  return null;
}
/** Every plant a rootstock is used for. */
const usesOf = (rs) => Object.entries(SCIONS).filter(([, s]) => s.stocks?.some((l) => l.rs === rs)).map(([id]) => id);

function practiceBadge(p) {
  return h('span', { class: `gf-practice gf-p-${p}` }, h('span', { 'aria-hidden': 'true', text: `${PRACTICE_MARK[p]} ` }), L(PRACTICE[p]));
}
function compatBadge(c) {
  return h('span', { class: `gf-compat gf-c-${c}` }, h('span', { class: 'gf-mark', 'aria-hidden': 'true', text: COMPAT_MARK[c] }), ' ', L(COMPAT[c]));
}

// ---------------------------------------------------------------- overview
const OVERVIEW = ['prunus-amygdalus', 'prunus-domestica', 'prunus-insititia', 'prunus-salicina', 'prunus-cerasifera', 'prunus-spinosa',
  'actinidia-chinensis', 'actinidia-arguta', 'selenicereus-undatus', 'selenicereus-megalanthus',
  'ribes-rubrum', 'ribes-uva-crispa', 'rubus-idaeus', 'rubus-fruticosus-agg', 'hippophae-rhamnoides', 'eucalyptus-deglupta'];

function overview() {
  const rows = OVERVIEW.filter((id) => index.byId.has(id)).map((id) => {
    const t = index.byId.get(id).taxon;
    const srcId = scionSource(index, SCIONS, id);
    const s = srcId ? SCIONS[srcId] : null;
    const stocks = (SCIONS[id]?.stocks ?? []);
    return h('tr', {},
      h('th', { scope: 'row' }, h('a', { href: link(id) }, sciName(t)), common(t) ? h('span', { class: 'sd-common', text: ` ${common(t)}` }) : null),
      h('td', {}, s ? practiceBadge(s.practice) : '–'),
      h('td', {}, ...(stocks.length ? stocks.flatMap((l, i) => [i ? ', ' : '', h('a', { href: link(stockNodeId(id, l.rs)), text: stockById.get(l.rs).name })]) : [T('–', '–')])));
  });
  return h('section', { class: 'card sd-overview', id: 'gf-overview', 'aria-labelledby': 'gf-overview-h' },
    h('h2', { id: 'gf-overview-h', text: T('The plants at a glance', 'Les plantes en un coup d’œil') }),
    h('p', { class: 'small' }, T('A grafted plant has two parts: the scion, a piece of the variety to grow, and the rootstock, which gives the roots. The scion decides the fruit; the rootstock decides much of the size of the plant and how it copes with the soil. ', 'Une plante greffée a deux parties : le greffon, un morceau de la variété à cultiver, et le porte-greffe, qui donne les racines. Le greffon décide du fruit ; le porte-greffe décide pour une bonne part de la taille de la plante et de sa tenue dans le sol. '),
      h('a', { href: '#c-scion-rootstock', text: T('More', 'En savoir plus') })),
    h('div', { class: 'sd-table-wrap', tabindex: '0', role: 'region', 'aria-labelledby': 'gf-overview-h' },
      h('table', { class: 'kv sd-table gf-table' },
        h('thead', {}, h('tr', {}, ...[T('Plant', 'Plante'), T('Grafted?', 'Greffée ?'), T('Rootstocks in the tree', 'Porte-greffes dans l’arbre')].map((x) => h('th', { scope: 'col', text: x })))),
        h('tbody', {}, ...rows))),
    h('p', { class: 'hint', text: T('A summary of the entries: open a plant for the details and the sources.', 'Un résumé des fiches : ouvrez une plante pour le détail et les sources.') }));
}

// ---------------------------------------------------------------- skeleton
const els = {};
function build(main) {
  els.searchIn = h('input', {
    id: 'a-search', type: 'search', autocomplete: 'off', spellcheck: 'false', role: 'combobox',
    'aria-autocomplete': 'list', 'aria-expanded': 'false', 'aria-controls': 'a-results',
    placeholder: T('Plant, variety or rootstock…', 'Plante, variété ou porte-greffe…'),
  });
  els.results = h('ul', { id: 'a-results', role: 'listbox', class: 'a-results', hidden: true, 'aria-label': T('Matching entries', 'Entrées trouvées') });
  els.searchMsg = h('p', { class: 'hint', 'aria-live': 'polite' });
  const searchBox = h('div', { class: 'a-search card' },
    h('label', { for: 'a-search', class: 'field-label', text: T('Find a plant or a rootstock', 'Trouver une plante ou un porte-greffe') }),
    h('div', { class: 'a-search-in' }, els.searchIn, els.results),
    els.searchMsg,
    h('p', { class: 'hint', text: T('Rootstock names work too: “GF 677”, “St Julien”, “Myrobalan”.', 'Les noms de porte-greffes marchent aussi : « GF 677 », « Saint-Julien », « Myrobolan ».') }));

  els.tree = h('div', { class: 'a-tree', id: 'a-tree' });
  const treeCard = h('aside', { class: 'card a-tree-card', 'aria-labelledby': 'a-tree-h' },
    h('div', { class: 'a-tree-head' }, h('h2', { id: 'a-tree-h', text: T('The tree', 'L’arbre') })),
    h('p', { class: 'small muted gf-legend' }, ...Object.keys(PRACTICE).flatMap((p, i) => [i ? ' · ' : '', h('span', { class: `gf-p-${p}`, 'aria-hidden': 'true', text: `${PRACTICE_MARK[p]} ` }), L(PRACTICE[p])])),
    h('div', { class: 'a-tree-tools' },
      h('button', { type: 'button', class: 'chip-btn', id: 'a-expand', text: T('Expand all', 'Tout déplier'), onclick: () => { for (const id of index.byId.keys()) if (index.children.get(id).length) S.open.add(id); renderTree(); } }),
      h('button', { type: 'button', class: 'chip-btn', id: 'a-collapse', text: T('Collapse all', 'Tout replier'), onclick: () => { S.open = new Set(pathTo(index, S.id).slice(0, -1)); renderTree(); } })),
    els.tree);
  els.entry = h('article', { class: 'card a-entry', id: 'a-entry', 'aria-live': 'polite', tabindex: '-1' });

  const criteria = h('section', { class: 'sd-concepts', id: 'criteria', 'aria-labelledby': 'criteria-h' },
    h('h2', { id: 'criteria-h', text: T('How to choose a rootstock', 'Comment choisir un porte-greffe') }),
    h('div', { class: 'sd-concept-grid' }, ...CRITERIA_CARDS.map((c) => h('section', { class: 'card sd-concept', id: `c-${c.id}` },
      h('h3', { text: L(c.title) }),
      h('p', {}, ...rich(L(c)), ' ', ...srcRefs(c.src))))));

  const sources = h('section', { class: 'card sources', id: 'a-sources' }, h('h2', { text: 'Sources' }), list(),
    h('p', { class: 'small muted', text: T('The plants and their names are those of the breeding tab. Rootstock data come from the cited extension services, research institutes and papers; where they disagree, the entry says so. Texts are our own.', 'Les plantes et leurs noms sont ceux de l’onglet Hybridation. Les données sur les porte-greffes viennent des services de vulgarisation, instituts de recherche et articles cités ; quand ils divergent, la fiche le dit. Les textes sont les nôtres.') }));

  main.replaceChildren(
    h('h1', { text: STR.title[lang()] }),
    h('p', { class: 'lead muted', text: STR.lead[lang()] }),
    searchBox,
    h('div', { class: 'a-cols' }, els.entry, treeCard),
    overview(),
    criteria,
    sources);

  wireSearch({
    input: els.searchIn, results: els.results, msg: els.searchMsg, T,
    find: (q) => search(index, q),
    pick: (r) => go(r.id),
    option: (r) => {
      const n = index.byId.get(r.id);
      if (n.type === 'stock') {
        return [h('span', { class: 'a-lang', text: T('stock', 'p.-g.') }), h('span', { class: 'a-hit', text: r.term }),
          h('span', { class: 'a-hit-ui' }, T('for ', 'pour '), sciName(n.taxon))];
      }
      const t = n.taxon;
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
  drawTree(els.tree, { index, current: S.id, open: S.open, label: nodeLabel, href: link, T });
}

// ---------------------------------------------------------------- entry
function block(title, x, at, extra = null) {
  if (!x) return null;
  return h('section', { class: 'sd-block' }, h('h3', {}, title, extra), h('p', {}, ...rich(L(x), at), ' ', ...srcRefs(x.src)));
}

/** The rootstocks of a plant as a table: name, kind, vigour, compatibility. */
function stockTable(taxonId) {
  const stocks = SCIONS[taxonId]?.stocks ?? [];
  if (!stocks.length) return null;
  return h('div', { class: 'sd-table-wrap', tabindex: '0', role: 'region', 'aria-label': T('Rootstocks', 'Porte-greffes') },
    h('table', { class: 'kv gf-stocks' },
      h('thead', {}, h('tr', {}, ...[T('Rootstock', 'Porte-greffe'), T('Kind', 'Type'), T('Vigour', 'Vigueur'), T('With this plant', 'Avec cette plante')].map((x) => h('th', { scope: 'col', text: x })))),
      h('tbody', {}, ...stocks.map((l) => {
        const r = stockById.get(l.rs);
        return h('tr', {},
          h('th', { scope: 'row' }, h('a', { href: link(stockNodeId(taxonId, l.rs)), text: r.name })),
          h('td', { text: L(KIND[r.kind]) }),
          h('td', { text: r.traits?.vigour?.level ? L(VIGOUR[r.traits.vigour.level]) : '–' }),
          h('td', {}, compatBadge(l.compat)));
      }))));
}

function crumbs(path) {
  return h('nav', { class: 'a-crumbs', 'aria-label': T('Breadcrumbs', 'Fil d’Ariane') },
    h('ol', {}, ...path.map((id, i) => {
      const n = index.byId.get(id);
      const label = n.type === 'taxon' ? sciName(n.taxon) : n.type === 'group' ? T('rootstocks', 'porte-greffes') : n.stock.name;
      return h('li', {}, i === path.length - 1 ? h('span', { 'aria-current': 'page' }, label) : h('a', { href: link(id) }, label));
    })));
}

function taxonEntry(n) {
  const t = n.taxon;
  const own = SCIONS[t.id];
  const srcId = scionSource(index, SCIONS, t.id);
  const s = srcId ? SCIONS[srcId] : null;
  const inherited = srcId && srcId !== t.id;
  const kids = index.children.get(t.id).filter((k) => index.byId.get(k).type === 'taxon');
  const names = ['fr', 'en', 'de'].filter((l) => t.common?.[l]?.length);
  return [
    h('div', { class: 'a-head' }, h('h2', { id: 'a-title' }, sciName(t)), h('span', { class: 'a-kind', text: L(RANK[t.rank]) })),
    names.length ? h('p', { class: 'sd-names' }, ...names.flatMap((l, i) => [i ? ' · ' : '', h('span', { class: 'a-lang', text: l.toUpperCase() }), ' ', h('span', { lang: l, text: t.common[l].join(', ') })])) : null,
    s ? h('div', { class: 'sd-glance' }, h('p', { class: 'sd-system' }, practiceBadge(s.practice),
      inherited ? h('span', { class: 'small muted' }, T(' · as for ', ' · comme pour '), h('a', { href: link(srcId) }, sciName(index.byId.get(srcId).taxon))) : null))
      : h('p', { class: 'small muted', text: T('Grafting depends on the plant: open a species below.', 'La greffe dépend de la plante : ouvrez une espèce ci-dessous.') }),
    own?.how ? block(T('Grafting and propagation', 'Greffe et multiplication'), own.how, t.id) : null,
    own?.cultivars ? block(T('The varieties', 'Les variétés'), own.cultivars, t.id) : null,
    own?.note ? block(T('This variety', 'Cette variété'), own.note, t.id) : null,
    own?.stocks?.length ? h('section', { class: 'sd-block' }, h('h3', { text: T('Rootstocks', 'Porte-greffes') }), stockTable(t.id),
      h('p', { class: 'hint' }, T('Open a rootstock for what it is chosen for. ', 'Ouvrez un porte-greffe pour savoir pourquoi on le choisit. '), h('a', { href: '#criteria', text: T('How to choose', 'Comment choisir') }))) : null,
    inherited && SCIONS[srcId]?.stocks?.length ? h('p', { class: 'small' }, T('Rootstocks: see ', 'Porte-greffes : voir '), h('a', { href: link(groupId(srcId)) }, sciName(index.byId.get(srcId).taxon)), '.') : null,
    h('p', { class: 'small' }, T('Pollination, crosses and seeds: ', 'Fécondation, croisements et graines : '), h('a', { href: routeHref('seeds', t.id), text: T('breeding tab', 'onglet Hybridation') }), '.'),
    kids.length ? h('div', { class: 'a-rel' }, h('div', {}, h('h3', { text: T(`Below (${kids.length})`, `En dessous (${kids.length})`) }),
      h('div', { class: 'a-chips' }, ...kids.map((k) => h('a', { href: link(k), class: 'a-chip' }, sciName(index.byId.get(k).taxon)))))) : null,
  ];
}

function groupEntry(n) {
  const t = n.taxon;
  return [
    h('div', { class: 'a-head' }, h('h2', { id: 'a-title' }, T('Rootstocks for ', 'Porte-greffes pour '), sciName(t)), h('span', { class: 'a-kind', text: T('rootstocks', 'porte-greffes') })),
    stockTable(t.id),
    h('p', { class: 'hint' }, h('a', { href: '#criteria', text: T('How to choose a rootstock', 'Comment choisir un porte-greffe') })),
  ];
}

/** The main criteria a rootstock entry says nothing about. */
const missing = (r) => ['vigour', 'soil', 'lime', 'drought', 'wet', 'cold', 'disease'].filter((c) => !r.traits?.[c]);

function stockEntry(n) {
  const r = n.stock;
  const t = n.taxon;
  const others = usesOf(r.id).filter((id) => id !== t.id);
  return [
    h('div', { class: 'a-head' }, h('h2', { id: 'a-title' }, stockName(r)), h('span', { class: 'a-kind', text: L(KIND[r.kind]) })),
    r.aka?.length ? h('p', { class: 'small muted' }, T('Also called ', 'Aussi appelé '), r.aka.join(', ')) : null,
    block(T('What it is', 'Ce que c’est'), r.parentage, t.id),
    h('section', { class: 'sd-block gf-link' }, h('h3', {}, T('Grafted with ', 'Greffé avec '), sciName(t), ' ', compatBadge(n.link.compat)),
      h('p', {}, ...rich(L(n.link), t.id), ' ', ...srcRefs(n.link.src))),
    h('section', { class: 'sd-block' }, h('h3', { text: T('What it is chosen for', 'Pourquoi on le choisit') }),
      h('table', { class: 'kv gf-traits' }, h('tbody', {}, ...CRITERIA.filter((c) => r.traits?.[c]).map((c) => {
        const x = r.traits[c];
        return h('tr', { 'data-c': c },
          h('th', { scope: 'row' }, h('a', { href: `#c-${c}`, text: L(CRIT[c]) })),
          h('td', {}, x.level ? h('strong', { text: `${L(VIGOUR[x.level])}. ` }) : null, ...rich(L(x), t.id), ' ', ...srcRefs(x.src)));
      }))),
      missing(r).length ? h('p', { class: 'hint', text: T(`Not found in the sources: ${missing(r).map((c) => L(CRIT[c]).toLowerCase()).join(', ')}.`, `Pas trouvé dans les sources : ${missing(r).map((c) => L(CRIT[c]).toLowerCase()).join(', ')}.`) }) : null),
    others.length ? h('div', { class: 'a-rel' }, h('div', {}, h('h3', { text: T('Also a rootstock for', 'Aussi porte-greffe de') }),
      h('div', { class: 'a-chips' }, ...others.map((id) => h('a', { href: link(stockNodeId(id, r.id)), class: 'a-chip' }, sciName(index.byId.get(id).taxon)))))) : null,
  ];
}

function renderEntry({ scroll = true } = {}) {
  const n = index.byId.get(S.id);
  const path = pathTo(index, n.id);
  const title = n.type === 'stock' ? `${n.stock.name} · ${n.taxon.name}` : n.taxon.name;
  document.title = `${title} · ${STR.title[lang()]} · outils-plantes`;
  const body = n.type === 'taxon' ? taxonEntry(n) : n.type === 'group' ? groupEntry(n) : stockEntry(n);
  els.entry.replaceChildren(...[
    crumbs(path),
    ...body,
    n.parent ? h('div', { class: 'a-rel' }, h('div', {}, h('h3', { text: T('Belongs to', 'Fait partie de') }), h('a', { href: link(n.parent), class: 'a-chip' }, nodeLabel(n.parent)))) : null,
    h('p', { class: 'a-perma small' }, T('Permalink: ', 'Permalien : '), h('a', { href: link(n.id), id: 'a-permalink', text: new URL(link(n.id), location.href).href })),
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
/** Build the tab into its panel; sub is the node id from the route. */
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
