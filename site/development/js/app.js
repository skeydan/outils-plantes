// Development: how the flower becomes the fruit and the seed. One slider per
// process (drupe/almond, berry/kiwifruit, aggregate/blackberry); four stages:
// flower -> young fruit -> ripe fruit -> seed. Each stage says which piece of
// the flower became what. Light SVG, no video.
import { lang } from '../../assets/site.js';
import { routeHref } from '../../assets/route.js';
import { h, citer } from '../../assets/ui.js';
import { TAXA } from '../../taxonomy/js/taxa.js';
import { SOURCES } from './sources.js';

const T = (en, fr) => (lang() === 'fr' ? fr : en);
const L = (o) => (o ? o[lang()] ?? o.en : '');

const STR = {
  title: { en: 'Development: from flower to fruit', fr: 'Développement : de la fleur au fruit' },
  lead: {
    en: 'A fruit is a flower in the state of seed-ripeness. Slide through the four stages: what part of the flower becomes what, for a stone fruit, a berry and an aggregate of small drupes.',
    fr: 'Le fruit, c’est la fleur à l’état de maturité des graines. Faites glisser le curseur à travers les quatre étapes : quelle pièce de la fleur devient quoi, pour un fruit à noyau, une baie et un agrégat de petites drupes.',
  },
  stage: { en: 'Stage', fr: 'Étape' },
  drag: { en: 'Drag to follow the stages', fr: 'Faites glisser pour suivre les étapes' },
  species: { en: 'Species', fr: 'Espèce' },
  fruitType: { en: 'fruit type', fr: 'type de fruit' },
  sources: { en: 'Sources', fr: 'Sources' },
};

const index = new Map(TAXA.map((e) => [e.id, e]));
const { cite, list } = citer(SOURCES);

// ---------------------------------------------------------------- helpers
const NS = 'http://www.w3.org/2000/svg';
function mk(name, attrs = {}, parent = null) {
  const e = document.createElementNS(NS, name);
  for (const [k, v] of Object.entries(attrs)) if (v !== undefined && v !== null) e.setAttribute(k, v);
  if (parent) parent.appendChild(e);
  return e;
}
const polar = (cx, cy, r, a) => [Math.round((cx + r * Math.cos((a * Math.PI) / 180)) * 10) / 10, Math.round((cy + r * Math.sin((a * Math.PI) / 180)) * 10) / 10];

function frame(title) {
  const root = mk('svg', { viewBox: '0 0 460 240', role: 'group', 'aria-label': title, width: 460, height: 240 });
  mk('title', {}, root).textContent = title;
  const shapes = mk('g', {}, root);
  const leads = mk('g', {}, root);
  const labels = mk('g', {}, root);
  const api = {
    root,
    s(name, attrs, parent = shapes) { return mk(name, attrs, parent); },
    label(text, x, y, to = null, anchor = 'start') {
      const t = mk('text', { x, y, 'text-anchor': anchor, class: 'dv-lbl' }, labels);
      t.textContent = text;
      if (to) {
        const sx = anchor === 'start' ? x - 6 : x + 6;
        mk('path', { d: `M${sx},${y - 4} L${to[0]},${to[1]}`, class: 'dv-lead' }, leads);
        mk('circle', { cx: to[0], cy: to[1], r: 1.8, fill: 'var(--ink-2)' }, leads);
      }
      return t;
    },
    link(id, text, x, y, to = null, anchor = 'start') {
      const a = mk('a', { href: routeHref('anatomy', id) }, labels);
      const t = mk('text', { x, y, 'text-anchor': anchor, class: 'dv-lbl dv-link' }, a);
      t.textContent = text;
      if (to) {
        const sx = anchor === 'start' ? x - 6 : x + 6;
        mk('path', { d: `M${sx},${y - 4} L${to[0]},${to[1]}`, class: 'dv-lead' }, leads);
        mk('circle', { cx: to[0], cy: to[1], r: 1.8, fill: 'var(--ink-2)' }, leads);
      }
      return t;
    },
  };
  return api;
}

/** {{entry|text}} links to Anatomy entries; the rest stays plain text. */
function rich(def) {
  const parts = def.split(/(\{\{[a-z0-9-]+\|[^}]+\}\}|\{\{[a-z0-9-]+\}\})/g);
  return parts.map((part) => {
    const m = part.match(/^\{\{([a-z0-9-]+)(?:\|([^}]+))?\}\}$/);
    if (m) return h('a', { class: 'dv-link', href: routeHref('anatomy', m[1]) }, m[2] ?? m[1]);
    return part;
  });
}

// ---------------------------------------------------------------- stages
// Drupe: the almond (Prunus dulcis).
const drupeStages = [
  {
    name: { en: 'Flower', fr: 'Fleur' },
    caption: {
      en: 'The flower carries its pieces: sepals, petals, stamens — and in the middle the {{pistil}}, whose {{ovary}} holds the {{ovule}} inside the {{carpel}}.',
      fr: 'La fleur porte ses pièces : sépales, pétales, étamines — et au centre le {{pistil}}, dont l’{{ovary|ovaire}} contient l’{{ovule}} dans le {{carpel|carpelle}}.',
    },
    draw(c) {
      c.s('path', { d: 'M150,224 L150,172', class: 'dv-axis' });
      c.s('ellipse', { cx: 150, cy: 174, rx: 20, ry: 7, class: 'dv-core' });
      for (const a of [-160, -120, -80, -40, 0]) {
        const [px, py] = polar(150, 166, 24, a);
        c.s('ellipse', { cx: px, cy: py, rx: 9, ry: 4, transform: `rotate(${a + 90} ${px} ${py})`, class: 'dv-petal' });
      }
      for (const a of [-170, -130, -90, -50, -10]) {
        const [px, py] = polar(150, 152, 38, a);
        c.s('ellipse', { cx: px, cy: py, rx: 15, ry: 7, transform: `rotate(${a + 90} ${px} ${py})`, class: 'dv-petal2' });
      }
      for (const a of [-150, -90, -30]) {
        const [sx, sy] = polar(150, 148, 24, a);
        c.s('path', { d: `M150,148 L${sx},${sy}`, class: 'dv-axis' });
        c.s('circle', { cx: sx, cy: sy, r: 3.4, class: 'dv-anther' });
      }
      c.s('ellipse', { cx: 150, cy: 118, rx: 17, ry: 21, class: 'dv-ovary' });
      c.s('ellipse', { cx: 150, cy: 122, rx: 6, ry: 8, class: 'dv-seed' });
      c.s('path', { d: 'M150,98 L150,60', class: 'dv-axis' });
      c.s('circle', { cx: 150, cy: 57, r: 4.4, class: 'dv-anther' });
      c.link('petal', T('petal', 'pétale'), 300, 34, [144, 116]);
      c.link('stamen', T('stamen', 'étamine'), 300, 62, [168, 140]);
      c.link('carpel', T('carpel with the ovary', 'carpelle avec l’ovaire'), 300, 90, [163, 118]);
      c.link('ovule', T('ovule', 'ovule'), 300, 118, [156, 122]);
      c.label(T('sepals at the base', 'sépales à la base'), 300, 146);
      c.link('style', T('style and stigma', 'style et stigmate'), 300, 174, [150, 60]);
      c.link('pedicel', T('pedicel', 'pédicelle'), 300, 202, [150, 210]);
    return c.root;
    },
  },
  {
    name: { en: 'Young fruit', fr: 'Jeune fruit' },
    caption: {
      en: 'Petals and stamens fall; the ovary wall starts to grow and its three layers appear: {{exocarp}}, {{mesocarp}}, {{endocarp}} — together the {{pericarp}}. The {{ovule}} is growing inside.',
      fr: 'Pétales et étamines tombent ; la paroi de l’ovaire commence à grossir et ses trois couches apparaissent : {{exocarp|exocarpe}}, {{mesocarp|mésocarpe}}, {{endocarp|endocarpe}} — ensemble, le {{pericarp|péricarpe}}. L’{{ovule}} grandit à l’intérieur.',
    },
    draw(c) {
      c.s('path', { d: 'M150,228 L150,180', class: 'dv-axis' });
      c.s('ellipse', { cx: 150, cy: 182, rx: 22, ry: 8, class: 'dv-core' });
      c.s('ellipse', { cx: 150, cy: 112, rx: 30, ry: 40, class: 'dv-skin' });
      c.s('ellipse', { cx: 150, cy: 112, rx: 25, ry: 35, class: 'dv-meso' });
      c.s('ellipse', { cx: 150, cy: 112, rx: 18, ry: 28, class: 'dv-stone' });
      c.s('ellipse', { cx: 150, cy: 118, rx: 8, ry: 12, class: 'dv-seed' });
      c.s('path', { d: 'M150,76 C142,74 132,74 128,80', class: 'dv-axis' });
      c.s('circle', { cx: 127, cy: 81, r: 3, class: 'dv-anther' });
      c.link('exocarp', T('exocarp (skin)', 'exocarpe (peau)'), 300, 34, [128, 84]);
      c.link('mesocarp', T('mesocarp (flesh)', 'mésocarpe (chair)'), 300, 62, [127, 100]);
      c.link('endocarp', T('endocarp (becomes the stone)', 'endocarpe (deviendra le noyau)'), 300, 90, [133, 112]);
      c.link('ovule', T('ovule', 'ovule'), 300, 118, [156, 118]);
      c.link('pericarp', T('the whole wall = pericarp', 'toute la paroi = péricarpe'), 300, 146, [128, 130]);
      c.label(T('withering style', 'style qui fane'), 300, 174, [130, 80]);
      c.link('receptacle', T('receptacle', 'réceptacle'), 300, 202, [150, 186]);
    return c.root;
    },
  },
  {
    name: { en: 'Ripe fruit', fr: 'Fruit mûr' },
    caption: {
      en: 'Ripe, the {{mesocarp}} is dry and splits open; the {{endocarp}} is the hard stone. Inside it, the {{seed}}: the almond.',
      fr: 'À maturité, le {{mesocarp|mésocarpe}} est sec et s’ouvre ; l’{{endocarp}} est le noyau dur. Dedans, la {{seed|graine}} : l’amande.',
    },
    draw(c) {
      const cx = 150, cy = 112;
      c.s('path', { d: `M${cx},${cy - 58} C${cx - 40},${cy - 38} ${cx - 40},${cy + 34} ${cx},${cy + 58} C${cx - 7},${cy + 58} ${cx - 7},${cy - 58} ${cx},${cy - 58} Z`, class: 'dv-stone' });
      c.s('path', { d: `M${cx},${cy - 58} C${cx + 42},${cy - 38} ${cx + 42},${cy + 34} ${cx},${cy + 58} C${cx + 7},${cy + 58} ${cx + 7},${cy - 58} ${cx},${cy - 58} Z`, class: 'dv-stone' });
      c.s('ellipse', { cx, cy, rx: 22, ry: 38, class: 'dv-seed' });
      c.s('path', { d: `M${cx},${cy} q-20,-3 -17,22 q22,7 37,0 q-2,-25 -20,-22 Z`, class: 'dv-seed' });
      c.s('path', { d: `M${cx},${cy - 52} C${cx - 54},${cy - 32} ${cx - 54},${cy + 30} ${cx},${cy + 52} C${cx - 9},${cy + 52} ${cx - 9},${cy - 52} ${cx},${cy - 52} Z`, class: 'dv-meso' });
      c.s('path', { d: `M${cx},${cy - 52} C${cx + 56},${cy - 32} ${cx + 56},${cy + 30} ${cx},${cy + 52} C${cx + 9},${cy + 52} ${cx + 9},${cy - 52} ${cx},${cy - 52} Z`, class: 'dv-meso' });
      c.s('ellipse', { cx, cy, rx: 60, ry: 70, class: 'dv-skin' });
      c.link('exocarp', T('exocarp', 'exocarpe'), 300, 30, [118, 52]);
      c.link('mesocarp', T('mesocarp, dry, splitting', 'mésocarpe, sec, qui s’ouvre'), 300, 58, [116, 82]);
      c.link('endocarp', T('endocarp: the stone', 'endocarpe : le noyau'), 300, 86, [128, 100]);
      c.link('seed', T('seed: the almond', 'graine : l’amande'), 300, 114, [148, 112]);
      c.label(T('two halves of the shell', 'deux moitiés de la coque'), 300, 142);
      c.link('pericarp', T('pericarp, dry here', 'péricarpe, ici sec'), 300, 170, [110, 128]);
    return c.root;
    },
  },
  {
    name: { en: 'Seed', fr: 'Graine' },
    caption: {
      en: 'What we call the almond is the {{seed}}: a {{seed|seed coat}}, two large cotyledons full of reserves, and, in the notch, the embryo that will become a new almond tree.',
      fr: 'Ce que l’on appelle l’amande est la {{seed|graine}} : un tégument, deux gros cotylédons pleins de réserves et, dans le creux, l’embryon qui deviendra un nouvel amandier.',
    },
    draw(c) {
      const cx = 150, cy = 112;
      c.s('path', { d: `M${cx},${cy - 48} C${cx - 34},${cy - 26} ${cx - 36},${cy + 22} ${cx},${cy + 44} C${cx + 30},${cy + 24} ${cx + 32},${cy - 28} ${cx + 2},${cy - 46} Z`, class: 'dv-stone' });
      c.s('path', { d: `M${cx + 4},${cy - 42} C${cx - 16},${cy - 28} ${cx - 16},${cy + 20} ${cx + 2},${cy + 36} C${cx + 2},${cy + 10} ${cx + 6},${cy - 18} ${cx + 4},${cy - 42} Z`, class: 'dv-seed' });
      c.s('path', { d: `M${cx + 14},${cy - 38} C${cx + 28},${cy - 24} ${cx + 28},${cy + 16} ${cx + 4},${cy + 36} C${cx + 4},${cy + 6} ${cx + 10},${cy - 22} ${cx + 14},${cy - 38} Z`, class: 'dv-seed2' });
      c.s('path', { d: `M${cx},${cy - 2} q6,-4 4,-12 q-8,-2 -10,4 q-2,6 4,8`, class: 'dv-embryo' });
      c.label(T('seed coat', 'tégument'), 300, 34, [128, 78]);
      c.label(T('two cotyledons (reserves)', 'deux cotylédons (réserves)'), 300, 62, [166, 108]);
      c.label(T('embryo (future plant)', 'embryon (future plante)'), 300, 90, [152, 108]);
      c.link('seed', T('seed', 'graine'), 300, 118, [118, 122]);
      c.link('ovule', T('from the ovule, after fertilisation', 'issue de l’ovule, après fécondation'), 300, 146, [104, 132]);
    return c.root;
    },
  },
];

// Berry: the kiwifruit (Actinidia deliciosa).
const berryStages = [
  {
    name: { en: 'Flower', fr: 'Fleur' },
    caption: {
      en: 'In the kiwi flower the {{ovary}} is {{inferior-ovary|inferior}}: it sits below the petals, fused with the {{receptacle}}. Many {{ovule|ovules}} line its inside.',
      fr: 'Chez la fleur de kiwi, l’{{ovary|ovaire}} est {{inferior-ovary|infère}} : il est posé sous les pétales, soudé au {{receptacle|réceptacle}}. De nombreux {{ovule|ovules}} tapissent l’intérieur.',
    },
    draw(c) {
      c.s('path', { d: 'M150,232 L150,182', class: 'dv-axis' });
      c.s('ellipse', { cx: 150, cy: 152, rx: 26, ry: 30, class: 'dv-ovary' });
      for (const a of [-150, -90, -30, 30, 90, 150]) {
        const [sx, sy] = polar(150, 132, 20, a);
        c.s('ellipse', { cx: sx, cy: sy, rx: 5, ry: 7, class: 'dv-seed' });
      }
      c.s('ellipse', { cx: 150, cy: 118, rx: 22, ry: 8, class: 'dv-core' });
      for (const a of [-170, -130, -90, -50, -10, 10, 50, 90, 130, 170]) {
        const [px, py] = polar(150, 102, 36, a);
        c.s('ellipse', { cx: px, cy: py, rx: 13, ry: 6, transform: `rotate(${a + 90} ${px} ${py})`, class: 'dv-petal2' });
      }
      for (const a of [-140, -60, 20, 100]) {
        const [sx, sy] = polar(150, 104, 22, a);
        c.s('path', { d: `M150,104 L${sx},${sy}`, class: 'dv-axis' });
        c.s('circle', { cx: sx, cy: sy, r: 3, class: 'dv-anther' });
      }
      c.link('petal', T('petals', 'pétales'), 300, 30, [150, 74]);
      c.link('stamen', T('stamens', 'étamines'), 300, 56, [172, 108]);
      c.link('inferior-ovary', T('inferior ovary', 'ovaire infère'), 300, 82, [170, 156]);
      c.link('ovule', T('ovules', 'ovules'), 300, 108, [162, 124]);
      c.link('receptacle', T('receptacle, fused with the ovary', 'réceptacle, soudé à l’ovaire'), 300, 134, [150, 120]);
      c.link('sepal', T('sepals', 'sépales'), 300, 160, [132, 124]);
      c.link('pedicel', T('pedicel', 'pédicelle'), 300, 186, [150, 206]);
    return c.root;
    },
  },
  {
    name: { en: 'Young fruit', fr: 'Jeune fruit' },
    caption: {
      en: 'Petals and stamens fall. Ovary and receptacle grow together; the whole wall will be the {{pericarp}} — all of it fleshy, no stone. The ovules become the seeds.',
      fr: 'Pétales et étamines tombent. Ovaire et réceptacle grossissent ensemble ; toute la paroi sera le {{pericarp|péricarpe}} — entièrement charnu, sans noyau. Les ovules deviennent les graines.',
    },
    draw(c) {
      c.s('path', { d: 'M150,236 L150,196', class: 'dv-axis' });
      c.s('ellipse', { cx: 150, cy: 150, rx: 38, ry: 46, class: 'dv-skin' });
      for (let i = 0; i < 7; i++) {
        const a = -170 + i * 14;
        const [sx, sy] = polar(150, 150, 38, a);
        c.s('path', { d: `M${sx},${sy} l-3,-7`, class: 'dv-axis' });
      }
      c.s('ellipse', { cx: 150, cy: 150, rx: 31, ry: 39, class: 'dv-meso' });
      c.s('ellipse', { cx: 150, cy: 150, rx: 17, ry: 22, class: 'dv-core' });
      for (const a of [-150, -90, -30, 30, 90, 150]) {
        const [sx, sy] = polar(150, 150, 25, a);
        c.s('ellipse', { cx: sx, cy: sy, rx: 4, ry: 6, class: 'dv-seed' });
      }
      c.link('pericarp', T('pericarp, growing fleshy', 'péricarpe, qui devient charnu'), 300, 30, [118, 122]);
      c.link('seed', T('future seeds (from the ovules)', 'futures graines (des ovules)'), 300, 58, [164, 136]);
      c.link('exocarp', T('skin with hairs: exocarp', 'peau velue : exocarpe'), 300, 86, [120, 190]);
      c.label(T('hairs of the skin', 'poils de la peau'), 300, 114, [116, 182]);
      c.link('receptacle', T('receptacle, part of the flesh', 'réceptacle, dans la chair'), 300, 142, [150, 190]);
      c.label(T('green flesh, no stone', 'chair verte, sans noyau'), 300, 170, [178, 152]);
    return c.root;
    },
  },
  {
    name: { en: 'Ripe fruit', fr: 'Fruit mûr' },
    caption: {
      en: 'A ripe {{berry}}: the whole {{pericarp}} is soft — hairy skin outside, green juicy flesh inside, seeds embedded around the core. The receptacle is part of the flesh.',
      fr: 'Une {{berry|baie}} mûre : tout le {{pericarp|péricarpe}} est mou — peau velue dehors, chair verte juteuse dedans, graines noyées autour du cœur. Le réceptacle fait partie de la chair.',
    },
    draw(c) {
      const cx = 150, cy = 120;
      c.s('circle', { cx, cy, r: 74, class: 'dv-skin' });
      for (let i = 0; i < 10; i++) {
        const a = -170 + i * 17;
        const [sx, sy] = polar(cx, cy, 74, a);
        c.s('path', { d: `M${sx},${sy} l-3,-7`, class: 'dv-axis' });
      }
      c.s('circle', { cx, cy, r: 66, class: 'dv-meso' });
      c.s('circle', { cx, cy, r: 20, class: 'dv-core' });
      for (const a of [-160, -120, -80, -40, 0, 40, 80, 120, 160]) {
        const [sx, sy] = polar(cx, cy, 44, a);
        c.s('ellipse', { cx: sx, cy: sy, rx: 9, ry: 5, transform: `rotate(${a + 90} ${sx} ${sy})`, class: 'dv-seed' });
      }
      c.link('pericarp', T('pericarp, all fleshy', 'péricarpe, tout charnu'), 300, 34, [100, 62]);
      c.link('seed', T('seeds in the flesh', 'graines dans la chair'), 300, 62, [162, 88]);
      c.link('exocarp', T('hairy exocarp', 'exocarpe velu'), 300, 90, [110, 168]);
      c.link('receptacle', T('receptacle (in the flesh)', 'réceptacle (dans la chair)'), 300, 118, [150, 138]);
      c.label(T('white core', 'cœur blanc'), 300, 146, [148, 120]);
      c.link('mesocarp', T('juicy mesocarp and endocarp', 'mésocarpe et endocarpe juteux'), 300, 174, [190, 128]);
    return c.root;
    },
  },
  {
    name: { en: 'Seed', fr: 'Graine' },
    caption: {
      en: 'Each {{seed|seed}} is small, black, and comes from one {{ovule}} of the flower. Inside: a tiny embryo, dormant until it germinates.',
      fr: 'Chaque {{seed|graine}} est petite, noire, et vient d’un {{ovule}} de la fleur. Dedans : un minuscule embryon, dormant jusqu’à la germination.',
    },
    draw(c) {
      const cx = 150, cy = 112;
      c.s('ellipse', { cx, cy, rx: 22, ry: 30, class: 'dv-stone' });
      c.s('ellipse', { cx: cx - 2, cy, rx: 14, ry: 22, class: 'dv-seed' });
      c.s('path', { d: `M${cx - 2},${cy - 6} q6,-2 5,-10 q-8,-1 -9,5`, class: 'dv-embryo' });
      c.label(T('dark seed coat', 'tégument sombre'), 300, 34, [130, 90]);
      c.label(T('embryo inside', 'embryon à l’intérieur'), 300, 62, [152, 108]);
      c.link('seed', T('seed', 'graine'), 300, 90, [130, 132]);
      c.label(T('one of many, from one ovule', 'l’une des nombreuses, d’un ovule'), 300, 118, [176, 118]);
      c.link('fruit', T('the fruit around it has fallen', 'le fruit autour est tombé'), 300, 146, [196, 128]);
    return c.root;
    },
  },
];

// Aggregate: the blackberry (Rubus fruticosus).
const aggregateStages = [
  {
    name: { en: 'Flower', fr: 'Fleur' },
    caption: {
      en: 'One flower, but many separate carpels ({{apocarpous}}): each tiny {{ovary}} sits on the dome of the {{receptacle}}, with its own ovule.',
      fr: 'Une seule fleur, mais de nombreux carpelles séparés ({{apocarpous|apocarpes}}) : chaque petit {{ovary|ovaire}} est posé sur le dôme du {{receptacle|réceptacle}}, avec son propre ovule.',
    },
    draw(c) {
      c.s('path', { d: 'M150,234 L150,198', class: 'dv-axis' });
      c.s('path', { d: `M150,198 C110,196 88,168 92,140 C96,112 122,102 150,102 C178,102 204,112 208,140 C212,168 190,196 150,198 Z`, class: 'dv-core' });
      const spots = [[120, 150], [150, 138], [180, 150], [132, 172], [168, 172], [150, 190]];
      for (const [sx, sy] of spots) {
        c.s('ellipse', { cx: sx, cy: sy, rx: 6, ry: 8, class: 'dv-ovary' });
        c.s('path', { d: `M${sx},${sy - 8} L${sx},${sy - 18}`, class: 'dv-axis' });
        c.s('circle', { cx: sx, cy: sy - 19, r: 2, class: 'dv-anther' });
      }
      for (const a of [-170, -130, -90, -50, -10, 10, 50, 90, 130, 170]) {
        const [px, py] = polar(150, 88, 40, a);
        c.s('ellipse', { cx: px, cy: py, rx: 13, ry: 6, transform: `rotate(${a + 90} ${px} ${py})`, class: 'dv-petal2' });
      }
      c.link('petal', T('petals', 'pétales'), 300, 30, [160, 50]);
      c.link('apocarpous', T('free carpels (apocarpous)', 'carpelles libres (apocarpes)'), 300, 58, [182, 152]);
      c.link('ovary', T('each ovary on its own', 'chaque ovaire, séparé'), 300, 86, [138, 150]);
      c.link('receptacle', T('dome-shaped receptacle', 'réceptacle en dôme'), 300, 114, [150, 122]);
      c.link('ovule', T('one ovule per carpel', 'un ovule par carpelle'), 300, 142, [156, 190]);
      c.link('pedicel', T('pedicel', 'pédicelle'), 300, 170, [150, 214]);
    return c.root;
    },
  },
  {
    name: { en: 'Young fruit', fr: 'Jeune fruit' },
    caption: {
      en: 'Petals and stamens fall. Each ovary becomes a little {{drupelet}}: its wall makes a tiny stone around the seed, and a fleshy cover. They all ripen together as one fruit.',
      fr: 'Pétales et étamines tombent. Chaque ovaire devient une petite {{drupelet|drupéole}} : sa paroi forme un minuscule noyau autour de la graine, et une enveloppe charnue. Elles mûrissent toutes ensemble, en un seul fruit.',
    },
    draw(c) {
      c.s('path', { d: 'M150,236 L150,202', class: 'dv-axis' });
      c.s('path', { d: `M150,202 C112,200 90,172 94,144 C98,116 124,106 150,106 C176,106 202,116 206,144 C210,172 188,200 150,202 Z`, class: 'dv-core' });
      const spots = [[122, 152], [152, 140], [182, 152], [134, 174], [168, 174], [150, 194]];
      for (const [sx, sy] of spots) {
        c.s('circle', { cx: sx, cy: sy, r: 10, class: 'dv-meso' });
        c.s('circle', { cx: sx, cy: sy, r: 3.4, class: 'dv-stone' });
      }
      c.s('path', { d: 'M128,138 l-8,-10', class: 'dv-axis' });
      c.link('drupelet', T('drupelets forming', 'drupéoles en formation'), 300, 34, [174, 150]);
      c.link('endocarp', T('tiny stone (endocarp)', 'noyau minuscule (endocarpe)'), 300, 62, [154, 174]);
      c.link('receptacle', T('receptacle', 'réceptacle'), 300, 90, [150, 128]);
      c.link('seed', T('one seed per drupelet', 'une graine par drupéole'), 300, 118, [152, 194]);
      c.label(T('still green, not ripe', 'encore vertes, pas mûres'), 300, 146, [122, 152]);
      c.link('aggregate-fruit', T('together: one aggregate fruit', 'ensemble : un fruit agrégé'), 300, 174, [96, 162]);
    return c.root;
    },
  },
  {
    name: { en: 'Ripe fruit', fr: 'Fruit mûr' },
    caption: {
      en: 'The ripe {{aggregate-fruit|aggregate}}: a head of black {{drupelet|drupelets}} on the {{receptacle}} — what we call a blackberry. Each drupelet is a tiny drupe.',
      fr: 'L’{{aggregate-fruit|agrégat}} mûr : un chapeau de {{drupelet|drupéoles}} noires sur le {{receptacle|réceptacle}} — ce qu’on appelle la mûre. Chaque drupéole est une minuscule drupe.',
    },
    draw(c) {
      const cx = 150, cy = 132;
      c.s('path', { d: `M${cx},${cy + 68} C${cx - 64},${cy + 36} ${cx - 66},${cy - 32} ${cx},${cy - 30} C${cx + 66},${cy - 32} ${cx + 64},${cy + 36} ${cx},${cy + 68} Z`, class: 'dv-core' });
      const spots = [[-48, 4], [-26, -8], [-4, -12], [18, -8], [40, -2], [-54, 26], [-32, 20], [-10, 16], [12, 16], [34, 20], [52, 30], [-42, 46], [-20, 42], [2, 40], [24, 42], [-28, 64], [-6, 62], [16, 64]];
      for (const [dx, dy] of spots) {
        c.s('circle', { cx: cx + dx, cy: cy + dy, r: 11, class: 'dv-meso' });
        c.s('circle', { cx: cx + dx, cy: cy + dy, r: 3.4, class: 'dv-stone' });
      }
      c.link('drupelet', T('drupelet (small drupe)', 'drupéole (petite drupe)'), 300, 30, [188, 110]);
      c.link('receptacle', T('receptacle', 'réceptacle'), 300, 58, [150, 148]);
      c.link('endocarp', T('tiny stone in each', 'noyau minuscule dans chacune'), 300, 86, [172, 150]);
      c.link('aggregate-fruit', T('aggregate fruit', 'fruit agrégé'), 300, 114, [100, 130]);
      c.link('apocarpous', T('from many free carpels', 'de nombreux carpelles libres'), 300, 142, [112, 92]);
      c.label(T('black when ripe', 'noires à maturité'), 300, 170, [204, 160]);
    return c.root;
    },
  },
  {
    name: { en: 'Seed', fr: 'Graine' },
    caption: {
      en: 'Inside each drupelet, a small hard {{endocarp}} holds the {{seed}}. One flower gave dozens of seeds, each with an embryo.',
      fr: 'Dans chaque drupéole, un petit {{endocarp|endocarpe}} dur abrite la {{seed|graine}}. Une seule fleur a donné des dizaines de graines, chacune avec un embryon.',
    },
    draw(c) {
      const cx = 150, cy = 108;
      c.s('circle', { cx, cy, r: 34, class: 'dv-meso' });
      c.s('ellipse', { cx, cy, rx: 14, ry: 20, class: 'dv-stone' });
      c.s('ellipse', { cx: cx - 1, cy, rx: 9, ry: 14, class: 'dv-seed' });
      c.s('path', { d: `M${cx - 1},${cy - 3} q4,-1 3,-7 q-6,-1 -6,4`, class: 'dv-embryo' });
      c.link('mesocarp', T('fleshy cover (mesocarp)', 'enveloppe charnue (mésocarpe)'), 300, 34, [126, 78]);
      c.link('endocarp', T('small stone (endocarp)', 'petit noyau (endocarpe)'), 300, 62, [156, 100]);
      c.link('seed', T('seed', 'graine'), 300, 90, [146, 108]);
      c.label(T('embryo', 'embryon'), 300, 118, [148, 106]);
      c.link('drupelet', T('one drupelet, cut open', 'une drupéole, ouverte'), 300, 146, [186, 108]);
      c.link('aggregate-fruit', T('its neighbours in the fruit', 'ses voisines dans le fruit'), 300, 174, [196, 132]);
    return c.root;
    },
  },
];

const PROCESSES = [
  { id: 'drupe', species: 'prunus-dulcis', cat: 'drupe',
    name: { en: 'Stone fruit: the almond', fr: 'Fruit à noyau : l’amande' },
    stages: drupeStages },
  { id: 'berry', species: 'actinidia-deliciosa', cat: 'berry',
    name: { en: 'Berry: the kiwifruit', fr: 'Baie : le kiwi' },
    stages: berryStages },
  { id: 'aggregate', species: 'rubus-fruticosus', cat: 'aggregate',
    name: { en: 'Aggregate: the blackberry', fr: 'Agrégat : la mûre' },
    stages: aggregateStages },
];

// ---------------------------------------------------------------- page
function processSection(p) {
  const e = index.get(p.species);
  const stageName = h('span', { class: 'dv-stage-name' });
  const stageBox = h('div', { class: 'dv-stage' });
  const caption = h('p', { class: 'dv-caption' });
  const slider = h('input', { type: 'range', class: 'dv-slider', min: 0, max: 3, step: 1, value: 0,
    'aria-label': T(`${STR.drag.en}: ${p.name.en}`, `${STR.drag.fr} : ${p.name.fr}`) });

  function setStage(i) {
    const st = p.stages[i];
    stageName.textContent = `${L(STR.stage)} ${i + 1}/4 — ${L(st.name)}`;
    slider.value = String(i);
    stageBox.replaceChildren(st.draw(frame(L(st.name))));
    caption.replaceChildren(...rich(L(st.caption)));
  }
  slider.addEventListener('input', () => setStage(Number(slider.value)));

  const head = h('h2', { class: 'dv-head' }, h('span', {}, L(p.name)),
    h('a', { class: 'dv-chip', href: routeHref('taxonomy', p.species) }, e.name),
    h('a', { class: 'dv-chip', href: routeHref('fruits', p.cat) }, L(STR.fruitType)));

  const steps = h('div', { class: 'dv-steps' },
    ...p.stages.map((st, i) => h('button', { type: 'button', class: 'dv-step', onclick: () => setStage(i) }, L(st.name))));

  setStage(0);
  return h('section', { class: 'dv-process', id: p.id },
    head,
    h('div', { class: 'dv-controls' }, stageName, slider, steps),
    stageBox,
    caption,
    h('p', { class: 'dv-src' }, T('Species', 'Espèce'), ' ', cite('morph', 'flora')));
}

export function mount(panel) {
  panel.replaceChildren(
    h('header', { class: 'dv-head-block' }, h('h1', {}, L(STR.title)), h('p', { class: 'lead' }, L(STR.lead))),
    ...PROCESSES.map(processSection),
    h('footer', { class: 'dv-sources' }, h('h2', {}, L(STR.sources)), list()),
  );
}

export function show(sub) {
  if (!sub) return;
  const el = document.getElementById(sub);
  if (el) el.scrollIntoView({ block: 'start' });
}
