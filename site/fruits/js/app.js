// Fruits: the types (drupe, berry, aggregate, accessory, dry), what part of
// the flower becomes what, and which of our species belongs to each type.
// Each example links to its Taxonomy page and to its Anatomy entry; where a
// Development process exists, it links there too.
import { lang } from '../../assets/site.js';
import { routeHref } from '../../assets/route.js';
import { h, citer } from '../../assets/ui.js';
import { TAXA } from '../../taxonomy/js/taxa.js';
import { SOURCES } from './sources.js';

const T = (en, fr) => (lang() === 'fr' ? fr : en);
const L = (o) => (o ? o[lang()] ?? o.en : '');

const STR = {
  title: { en: 'Fruits: the types, with our species', fr: 'Fruits : les types, avec nos espèces' },
  lead: {
    en: 'A fruit is what a flower becomes when its seeds ripen. Botanists sort fruits by how they form and what their wall becomes: fleshy or dry, from one carpel or several, from the ovary alone or with other flower parts. Here are the five types found among our species, with the species as examples.',
    fr: 'Un fruit, c’est ce que devient une fleur quand ses graines mûrissent. Les botanistes classent les fruits selon leur formation et ce que devient leur paroi : charnu ou sec, issu d’un carpelle ou de plusieurs, formé du seul ovaire ou avec d’autres pièces florales. Voici les cinq types présents chez nos espèces, avec les espèces en exemples.',
  },
  tableTitle: { en: 'The five types at a glance', fr: 'Les cinq types en un coup d’œil' },
  typeCol: { en: 'Type', fr: 'Type' },
  defCol: { en: 'What it is', fr: 'Ce que c’est' },
  exCol: { en: 'Examples', fr: 'Exemples' },
  drawingTitle: { en: 'Schematic section', fr: 'Coupe schématique' },
  examplesTitle: { en: 'Our species', fr: 'Nos espèces' },
  inAnatomy: { en: 'in Anatomy', fr: 'dans Anatomie' },
  inTaxonomy: { en: 'in Taxonomy', fr: 'dans Taxonomie' },
  inDevelopment: { en: 'flower → fruit in Development', fr: 'fleur → fruit dans Développement' },
  sources: { en: 'Sources', fr: 'Sources' },
};

const CATS = [
  { id: 'drupe', anatomy: 'drupe', process: 'drupe',
    name: { en: 'Drupe (stone fruit)', fr: 'Drupe (fruit à noyau)' },
    short: { en: 'A fleshy fruit with a thin skin, a fleshy middle and a hard stone around the seed.', fr: 'Fruit charnu à peau fine, partie moyenne charnue et noyau dur autour de la graine.' },
    def: {
      en: 'A fleshy fruit that does not open, grown from a single carpel: a thin skin ({{exocarp|exocarp}}), a fleshy or fibrous middle ({{mesocarp}}) and a hard stone ({{endocarp}}) around the seed. Cherries, plums, peaches, olives — and the almond: in the almond the middle layer stays thin and splits open when ripe, and what we eat is the seed.',
      fr: 'Fruit charnu qui ne s’ouvre pas, issu d’un seul carpelle : une peau fine ({{exocarp|exocarpe}}), une partie moyenne charnue ou fibreuse ({{mesocarp}}) et un noyau dur ({{endocarp}}) autour de la graine. Cerises, prunes, pêches, olives — et l’amande : chez l’amandier, la partie moyenne reste mince et s’ouvre à maturité, et ce que l’on mange est la graine.',
    },
    examples: ['prunus-dulcis'],
    draw: drupeSVG },
  { id: 'berry', anatomy: 'berry', process: 'berry',
    name: { en: 'Berry', fr: 'Baie' },
    short: { en: 'A fleshy fruit whose whole wall becomes soft or juicy, seeds in the flesh, no stone.', fr: 'Fruit charnu dont toute la paroi devient molle ou juteuse, graines dans la chair, sans noyau.' },
    def: {
      en: 'A fleshy fruit that does not open and whose whole wall ({{pericarp}}) becomes soft or juicy, with the seeds embedded in the flesh and no stone. Grapes, tomatoes, peppers — and the kiwifruit and the dragon fruit (pitaya), both from an {{inferior-ovary|inferior ovary}}: the flesh comes from the ovary wall grown together with the receptacle.',
      fr: 'Fruit charnu qui ne s’ouvre pas et dont toute la paroi ({{pericarp}}) devient molle ou juteuse, les graines noyées dans la chair, sans noyau. Raisin, tomate, poivron — et le kiwi comme le pitaya (fruit du dragon), tous deux issus d’un {{inferior-ovary|ovaire infère}} : la chair vient de la paroi de l’ovaire soudée au réceptacle.',
    },
    examples: ['actinidia-deliciosa', 'selenicereus-undatus'],
    draw: berrySVG },
  { id: 'aggregate', anatomy: 'aggregate-fruit', process: 'aggregate',
    name: { en: 'Aggregate fruit', fr: 'Fruit agrégé (fruit composé)' },
    short: { en: 'One flower with several free carpels: each becomes a small fruit, and together they ripen as one.', fr: 'Une fleur à plusieurs carpelles libres : chacun devient un petit fruit, et l’ensemble mûrit comme un tout.' },
    def: {
      en: 'A fruit formed from one flower that has several separate ({{apocarpous}}) carpels on the {{receptacle}}: each carpel becomes a small fruit — a {{drupelet}} in the bramble — and together they ripen as one unit. Raspberries and blackberries are aggregates of drupelets; the strawberry is one of achenes, on a swollen receptacle.',
      fr: 'Fruit issu d’une seule fleur à plusieurs carpelles libres ({{apocarpous|apocarpes}}) portés par le {{receptacle|réceptacle}} : chaque carpelle devient un petit fruit — une {{drupelet|drupéole}} chez la ronce — et l’ensemble mûrit comme un tout. Framboises et mûres sont des agrégats de drupéoles ; la fraise, elle, est un agrégat d’akènes sur un réceptacle renflé.',
    },
    examples: ['rubus-fruticosus'],
    draw: aggregateSVG },
  { id: 'accessory', anatomy: 'accessory-fruit', process: null,
    name: { en: 'Accessory fruit (false fruit)', fr: 'Fruit accessoire (faux-fruit)' },
    short: { en: 'The fleshy part comes not only from the ovary but from other flower parts.', fr: 'La partie charnue ne vient pas seulement de l’ovaire mais d’autres pièces florales.' },
    def: {
      en: 'A fruit whose fleshy part does not come from the ovary wall alone but also, or mainly, from other flower parts — the swollen {{receptacle}}, a {{hypanthium}}, or the {{calyx}}. Anatomically, a true fruit develops from the {{carpel}}: its {{ovary}} wall becomes the {{pericarp}}, as in a peach or a tomato. In an accessory fruit the ovary still forms the true fruit — the little {{achene}}s of a strawberry, the papery core of an apple — while the flesh around it is accessory: the {{receptacle}} in the strawberry, the {{hypanthium}} in the apple, pear ({{pome}}) and rose hip, the fleshy floral tube around the achene in the sea buckthorn. The accessory flesh attracts animals and pays for dispersal; it is not part of the seed-bearing fruit itself.',
      fr: 'Fruit dont la partie charnue ne vient pas seulement de la paroi de l’ovaire mais aussi, ou surtout, d’autres pièces florales — le {{receptacle|réceptacle}} renflé, un {{hypanthium|hypanthe}}, ou le {{calyx|calice}}. Anatomiquement, un vrai fruit se développe à partir du {{carpel}} : la paroi de son {{ovary|ovaire}} devient le {{pericarp}}, comme chez la pêche ou la tomate. Dans un faux fruit, l’ovaire forme toujours le vrai fruit — les petits {{achene|akènes}} de la fraise, le cœur parcheminé de la pomme — tandis que la chair autour est accessoire : le {{receptacle|réceptacle}} chez la fraise, l’{{hypanthium|hypanthe}} chez la pomme, la poire ({{pome}}) et le cynorhodon, le tube floral charnu autour de l’akène chez l’argousier. Cette chair accessoire attire les animaux et finance la dispersion ; elle ne fait pas partie du fruit porte-graines lui-même.',
    },
    examples: ['hippophae-rhamnoides'],
    draw: accessorySVG },
  { id: 'dry', anatomy: null, process: null,
    name: { en: 'Dry fruits', fr: 'Fruits secs' },
    short: { en: 'The fruit wall stays dry at maturity: it opens (capsule) or keeps the seed inside (achene, caryopsis, nut).', fr: 'La paroi du fruit reste sèche à maturité : elle s’ouvre (capsule) ou garde la graine (akène, caryopse, noix).' },
    def: {
      en: 'A fruit whose wall ({{pericarp}}) stays dry when ripe. Two families: dry fruits that open to release the seeds, like the {{capsule}} of the amaranth, and dry fruits that stay closed, like the {{achene}} of buckwheat and quinoa, the {{caryopsis}} of wheat (wall fused with the seed) and the small {{nut|nutlets}} of the horehound.',
      fr: 'Fruit dont la paroi ({{pericarp}}) reste sèche à maturité. Deux familles : les fruits secs qui s’ouvrent pour libérer les graines, comme la {{capsule}} de l’amarante, et les fruits secs qui restent fermés, comme l’{{achene|akène}} du sarrasin et du quinoa, le {{caryopsis|caryopse}} du blé (paroi soudée à la graine) et les petits {{nut|nucules}} du marrube.',
    },
    examples: ['triticum-aestivum', 'fagopyrum-esculentum', 'chenopodium-quinoa', 'marrubium-vulgare', 'amaranthus-caudatus'],
    draw: drySVG },
];

const index = new Map(TAXA.map((e) => [e.id, e]));
const { cite, list } = citer(SOURCES);

// ---------------------------------------------------------------- drawings
// Schematic sections in the style of the Anatomy drawings; every label links
// to its Anatomy entry. Colors: skin green, flesh clay/sand, stone silt,
// seed yellow.
const NS = 'http://www.w3.org/2000/svg';
function mk(name, attrs = {}, parent = null) {
  const e = document.createElementNS(NS, name);
  for (const [k, v] of Object.entries(attrs)) if (v !== undefined && v !== null) e.setAttribute(k, v);
  if (parent) parent.appendChild(e);
  return e;
}
const polar = (cx, cy, r, a) => [Math.round((cx + r * Math.cos((a * Math.PI) / 180)) * 10) / 10, Math.round((cy + r * Math.sin((a * Math.PI) / 180)) * 10) / 10];

function frame(title) {
  const root = mk('svg', { viewBox: '0 0 460 210', role: 'group', 'aria-label': title, width: 460, height: 210 });
  mk('title', {}, root).textContent = title;
  const shapes = mk('g', {}, root);
  const leads = mk('g', {}, root);
  const labels = mk('g', {}, root);
  const api = {
    root, shapes,
    s(name, attrs, parent = shapes) { return mk(name, attrs, parent); },
    label(text, x, y, to = null, anchor = 'start') {
      const t = mk('text', { x, y, 'text-anchor': anchor, class: 'fv-lbl' }, labels);
      t.textContent = text;
      if (to) {
        const sx = anchor === 'start' ? x - 4 : x + 4;
        mk('path', { d: `M${sx},${y - 4} L${to[0]},${to[1]}`, class: 'fv-lead' }, leads);
        mk('circle', { cx: to[0], cy: to[1], r: 1.8, fill: 'var(--ink-2)' }, leads);
      }
      return t;
    },
    link(id, text, x, y, to = null, anchor = 'start') {
      const a = mk('a', { href: routeHref('anatomy', id) }, labels);
      const t = mk('text', { x, y, 'text-anchor': anchor, class: 'fv-lbl fv-link' }, a);
      t.textContent = text;
      if (to) {
        const sx = anchor === 'start' ? x - 4 : x + 4;
        mk('path', { d: `M${sx},${y - 4} L${to[0]},${to[1]}`, class: 'fv-lead' }, leads);
        mk('circle', { cx: to[0], cy: to[1], r: 1.8, fill: 'var(--ink-2)' }, leads);
      }
      return t;
    },
  };
  return api;
}

function drupeSVG() {
  const c = frame(T('A drupe cut open (almond)', 'Une drupe ouverte (amande)'));
  const cx = 165, cy = 100;
  // Seed (the almond) inside the stone
  c.s('ellipse', { cx, cy, rx: 26, ry: 42, class: 'fv-seed' });
  c.s('path', { d: `M${cx},${cy} q-24,-4 -20,26 q26,8 44,0 q-2,-30 -24,-26 Z`, class: 'fv-seed' });
  c.s('path', { d: `M${cx + 2},${cy - 36} q2,8 -2,12 q4,8 0,14`, class: 'fv-thin' });
  // Stone (endocarp), split open
  c.s('path', { d: `M${cx},${cy - 52} C${cx - 38},${cy - 34} ${cx - 38},${cy + 30} ${cx},${cy + 52} C${cx - 4},${cy + 52} ${cx - 4},${cy - 52} ${cx},${cy - 52} Z`, class: 'fv-stone' });
  c.s('path', { d: `M${cx},${cy - 52} C${cx + 40},${cy - 34} ${cx + 40},${cy + 30} ${cx},${cy + 52} C${cx + 4},${cy + 52} ${cx + 4},${cy - 52} ${cx},${cy - 52} Z`, class: 'fv-stone' });
  // Fleshy middle, drying and splitting open
  c.s('path', { d: `M${cx},${cy - 58} C${cx - 52},${cy - 38} ${cx - 52},${cy + 34} ${cx},${cy + 58} C${cx - 8},${cy + 58} ${cx - 8},${cy - 58} ${cx},${cy - 58} Z`, class: 'fv-meso' });
  c.s('path', { d: `M${cx},${cy - 58} C${cx + 54},${cy - 38} ${cx + 54},${cy + 34} ${cx},${cy + 58} C${cx + 8},${cy + 58} ${cx + 8},${cy - 58} ${cx},${cy - 58} Z`, class: 'fv-meso' });
  // Skin (exocarp), whole
  c.s('ellipse', { cx, cy, rx: 62, ry: 78, class: 'fv-skin' });
  c.link('exocarp', T('exocarp', 'exocarpe'), 40, 26, [cx - 34, cy - 62], 'end');
  c.link('mesocarp', T('mesocarp', 'mésocarpe'), 40, 52, [cx - 44, cy + 10], 'end');
  c.link('endocarp', T('endocarp', 'endocarpe'), 40, 78, [cx - 20, cy - 22], 'end');
  c.link('seed', T('seed', 'graine'), 40, 104, [cx - 20, cy + 34], 'end');
  c.label(T('ripe, splitting open', 'mûre, s’ouvrant'), 40, 130);
  return c.root;
}

function berrySVG() {
  const c = frame(T('A berry cut across (kiwifruit)', 'Une baie coupée en travers (kiwi)'));
  const cx = 165, cy = 100;
  c.s('circle', { cx, cy, r: 78, class: 'fv-skin' });
  c.s('circle', { cx, cy, r: 70, class: 'fv-meso' });
  // seeds around the core
  for (const a of [-160, -120, -80, -40, 0, 40, 80, 120, 160]) {
    const [sx, sy] = polar(cx, cy, 46, a);
    c.s('ellipse', { cx: sx, cy: sy, rx: 9, ry: 5, transform: `rotate(${a + 90} ${sx} ${sy})`, class: 'fv-seed' });
  }
  c.s('circle', { cx, cy, r: 22, class: 'fv-core' });
  c.link('pericarp', T('pericarp, all fleshy', 'péricarpe, tout charnu'), 40, 24, [cx - 30, cy - 62], 'end');
  c.link('seed', T('seeds', 'graines'), 40, 50, [cx - 10, cy - 40], 'end');
  c.label(T('skin with hairs (exocarp)', 'peau velue (exocarpe)'), 40, 76);
  c.label(T('green flesh (meso- and endocarp)', 'chair verte (méso- et endocarpe)'), 40, 102);
  return c.root;
}

function aggregateSVG() {
  const c = frame(T('An aggregate of drupelets (blackberry)', 'Un agrégat de drupéoles (mûre)'));
  const cx = 165, cy = 128;
  const spots = [[-44, 0], [-22, -6], [0, -10], [22, -6], [44, 0], [-50, 24], [-28, 20], [-6, 16], [16, 16], [38, 20], [52, 30], [-38, 44], [-16, 40], [6, 38], [28, 42], [-24, 62], [-2, 60], [20, 64]];
  for (const [dx, dy] of spots) {
    c.s('circle', { cx: cx + dx, cy: cy + dy, r: 11, class: 'fv-meso' });
    c.s('circle', { cx: cx + dx, cy: cy + dy, r: 3.2, class: 'fv-stone' });
  }
  // receptacle dome inside
  c.s('path', { d: `M${cx},${cy + 62} C${cx - 60},${cy + 30} ${cx - 62},${cy - 28} ${cx},${cy - 26} C${cx + 62},${cy - 28} ${cx + 60},${cy + 30} ${cx},${cy + 62} Z`, class: 'fv-core' });
  c.link('drupelet', T('drupelet (small drupe)', 'drupéole (petite drupe)'), 40, 22, [cx + 34, cy - 30], 'end');
  c.link('receptacle', T('receptacle', 'réceptacle'), 40, 48, [cx + 8, cy + 14], 'end');
  c.label(T('each with a tiny stone (endocarp)', 'chacune avec un minuscule noyau (endocarpe)'), 40, 74);
  c.label(T('from one flower, many free carpels', 'd’une seule fleur, de nombreux carpelles libres'), 40, 100);
  return c.root;
}

function accessorySVG() {
  const c = frame(T('A false fruit (sea buckthorn)', 'Un faux-fruit (argousier)'));
  const cx = 165, cy = 100;
  // fleshy calyx tube (hypanthium) wrapping the achene
  c.s('ellipse', { cx, cy, rx: 42, ry: 54, class: 'fv-meso' });
  // the true fruit: a small achene inside
  c.s('ellipse', { cx, cy, rx: 17, ry: 26, class: 'fv-stone' });
  c.s('ellipse', { cx, cy, rx: 10, ry: 18, class: 'fv-seed' });
  c.link('achene', T('achene (the true fruit)', 'akène (le vrai fruit)'), 40, 26, [cx - 20, cy - 6], 'end');
  c.link('hypanthium', T('fleshy calyx tube (hypanthium)', 'tube charnu du calice (hypanthe)'), 40, 52, [cx - 30, cy + 30], 'end');
  c.label(T('one seed inside', 'une graine à l’intérieur'), 40, 78);
  c.label(T('the orange “berry” is the calyx, not the ovary', 'la « baie » orange est le calice, pas l’ovaire'), 40, 104);
  return c.root;
}

function drySVG() {
  const c = frame(T('Dry fruits (wheat, buckwheat, horehound, amaranth)', 'Fruits secs (blé, sarrasin, marrube, amarante)'));
  // Caryopsis: wall fused with the seed
  const x1 = 78, y = 62;
  c.s('ellipse', { cx: x1, cy: y, rx: 30, ry: 42, class: 'fv-skin' });
  c.s('ellipse', { cx: x1, cy: y, rx: 26, ry: 38, class: 'fv-seed' });
  c.s('path', { d: `M${x1 + 6},${y - 22} q8,10 0,26 q10,4 8,-14 q-2,-14 -8,-12 Z`, class: 'fv-core' });
  c.link('caryopsis', T('caryopsis (wheat)', 'caryopse (blé)'), 300, 30, [x1 + 32, y - 26], 'start');
  c.label(T('wall fused with the seed coat', 'paroi soudée au tégument'), 300, 52);
  // Achene: seed nearly filling the wall, joined at one point
  const x2 = 78, y2 = 150;
  c.s('path', { d: `M${x2},${y2 + 30} C${x2 - 24},${y2 + 14} ${x2 - 22},${y2 - 28} ${x2},${y2 - 32} C${x2 + 22},${y2 - 28} ${x2 + 24},${y2 + 14} ${x2},${y2 + 30} Z`, class: 'fv-skin' });
  c.s('path', { d: `M${x2},${y2 + 24} C${x2 - 17},${y2 + 10} ${x2 - 16},${y2 - 24} ${x2},${y2 - 27} C${x2 + 16},${y2 - 24} ${x2 + 17},${y2 + 10} ${x2},${y2 + 24} Z`, class: 'fv-seed' });
  c.link('achene', T('achene (buckwheat, quinoa)', 'akène (sarrasin, quinoa)'), 300, 132, [x2 + 26, y2 - 6], 'start');
  c.label(T('one seed, joined at one point', 'une graine, attachée en un point'), 300, 154);
  // Four nutlets (horehound)
  const x3 = 78, y3 = 104;
  for (const [dx, dy] of [[-13, -13], [13, -13], [-13, 13], [13, 13]]) {
    c.s('ellipse', { cx: x3 + dx, cy: y3 + dy, rx: 13, ry: 15, class: 'fv-stone' });
    c.s('ellipse', { cx: x3 + dx, cy: y3 + dy, rx: 6, ry: 9, class: 'fv-seed' });
  }
  c.link('nut', T('four nutlets (horehound)', 'quatre nucules (marrube)'), 300, 82, [x3 + 28, y3 - 22], 'start');
  c.label(T('a four-lobed ovary, each lobe one nutlet', 'un ovaire à quatre lobes, chaque lobe une nucule'), 300, 104);
  return c.root;
}

// ---------------------------------------------------------------- page
function speciesName(id) {
  const e = index.get(id);
  return h('a', { href: routeHref('taxonomy', id), class: 'taxo-lat' }, e.name);
}

function exampleItem(id) {
  const e = index.get(id);
  const links = [];
  if (e.fruit_anatomy) links.push(h('a', { class: 'fv-chip', href: routeHref('anatomy', e.fruit_anatomy) },
    T(`${STR.inAnatomy.en} →`, `${STR.inAnatomy.fr} →`)));
  if (e.process) links.push(h('a', { class: 'fv-chip', href: routeHref('development', e.process) },
    L(STR.inDevelopment)));
  return h('li', { class: 'fv-example' },
    h('span', { class: 'fv-example-head' }, speciesName(id), ' · ', (e.common?.[lang()] ?? e.common?.fr ?? []).join(' · ')),
    h('span', { class: 'fv-example-fruit' }, L(e.fruit)),
    links.length ? h('span', { class: 'fv-example-links' }, ...links) : null);
}

function catSection(cat) {
  const fig = h('figure', { class: 'fv-fig' },
    h('figcaption', {}, L(STR.drawingTitle)),
    cat.draw());
  const body = h('div', { class: 'fv-cat-body' },
    h('p', {}, ...rich(L(cat.def))),
    h('h3', {}, L(STR.examplesTitle)),
    h('ul', { class: 'fv-examples' }, ...cat.examples.map(exampleItem)),
    h('p', { class: 'fv-src' }, cite('morph', 'flora')));
  return h('section', { class: 'fv-cat', id: cat.id },
    h('h2', { class: 'fv-cat-title' }, h('span', {}, L(cat.name)),
      cat.anatomy ? h('a', { class: 'fv-chip', href: routeHref('anatomy', cat.anatomy) }, L(STR.inAnatomy)) : null,
      cat.process ? h('a', { class: 'fv-chip', href: routeHref('development', cat.process) }, L(STR.inDevelopment)) : null),
    h('div', { class: 'fv-cat-grid' }, fig, body));
}

/** {{entry|text}} links to Anatomy entries; the rest stays plain text. */
function rich(def) {
  const parts = def.split(/(\{\{[a-z0-9-]+\|[^}]+\}\}|\{\{[a-z0-9-]+\}\})/g);
  return parts.map((part) => {
    const m = part.match(/^\{\{([a-z0-9-]+)(?:\|([^}]+))?\}\}$/);
    if (m) return h('a', { class: 'fv-link', href: routeHref('anatomy', m[1]) }, m[2] ?? m[1]);
    return part;
  });
}

export function mount(panel) {
  const table = h('table', { class: 'fv-table' },
    h('caption', {}, L(STR.tableTitle)),
    h('thead', {}, h('tr', {},
      h('th', { scope: 'col' }, L(STR.typeCol)),
      h('th', { scope: 'col' }, L(STR.defCol)),
      h('th', { scope: 'col' }, L(STR.exCol)))),
    h('tbody', {}, ...CATS.map((cat) => h('tr', {},
      h('th', { scope: 'row' }, h('a', { href: routeHref('fruits', cat.id) }, L(cat.name))),
      h('td', {}, L(cat.short)),
      h('td', {}, ...cat.examples.map((id, i) => [i ? ', ' : null, speciesName(id)]))))));

  panel.replaceChildren(
    h('header', { class: 'fv-head' }, h('h1', {}, L(STR.title)), h('p', { class: 'lead' }, L(STR.lead))),
    table,
    ...CATS.map(catSection),
    h('footer', { class: 'fv-sources' }, h('h2', {}, L(STR.sources)), list()),
  );
}

export function show(sub) {
  if (!sub) return;
  const el = document.getElementById(sub);
  if (el) el.scrollIntoView({ block: 'start' });
}
