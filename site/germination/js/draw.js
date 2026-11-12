// Original SVG diagrams for the germination tab. They are schematic teaching
// drawings, not photographs: each one says what it shows and links its labels
// to the anatomy entries. No external image, no traced figure.
import { lang } from '../../assets/site.js';
import { routeHref } from '../../assets/route.js';

const NS = 'http://www.w3.org/2000/svg';
const T = (en, fr) => (lang() === 'fr' ? fr : en);

function mk(name, attrs = {}, parent = null) {
  const e = document.createElementNS(NS, name);
  for (const [k, v] of Object.entries(attrs)) {
    if (v === undefined || v === null) continue;
    if (k === 'text') e.textContent = v;
    else e.setAttribute(k, v);
  }
  if (parent) parent.appendChild(e);
  return e;
}

function frame(title, viewBox, desc = '') {
  const root = mk('svg', {
    viewBox, role: 'img', class: 'gm-svg', preserveAspectRatio: 'xMidYMid meet',
  });
  mk('title', {}, root).textContent = title;
  if (desc) mk('desc', {}, root).textContent = desc;
  const shapes = mk('g', {}, root);
  const leads = mk('g', {}, root);
  const labels = mk('g', {}, root);
  return {
    root,
    s(name, attrs, parent = shapes) {
      // A string third argument is the text of the element (SVG <text>).
      if (typeof parent === 'string') { attrs = { ...attrs, text: parent }; parent = shapes; }
      return mk(name, attrs, parent);
    },
    /** A right-hand label with a leader line to (x, y). */
    label(text, x, y, to, anchor = 'start') {
      const t = mk('text', { x, y, 'text-anchor': anchor, class: 'gm-lbl' }, labels);
      t.textContent = text;
      if (to) {
        const sx = anchor === 'start' ? x - 6 : x + 6;
        mk('path', { d: `M${sx},${y - 4} L${to[0]},${to[1]}`, class: 'gm-lead' }, leads);
        mk('circle', { cx: to[0], cy: to[1], r: 2.2, class: 'gm-dot' }, leads);
      }
      return t;
    },
    /** A label that links to an anatomy entry. */
    link(id, text, x, y, to, anchor = 'start') {
      const a = mk('a', { href: routeHref('anatomy', id) }, labels);
      const t = mk('text', { x, y, 'text-anchor': anchor, class: 'gm-lbl gm-lbl-link' }, a);
      t.textContent = text;
      if (to) {
        const sx = anchor === 'start' ? x - 6 : x + 6;
        mk('path', { d: `M${sx},${y - 4} L${to[0]},${to[1]}`, class: 'gm-lead' }, leads);
        mk('circle', { cx: to[0], cy: to[1], r: 2.2, class: 'gm-dot' }, leads);
      }
      return t;
    },
  };
}

/** A dicot seed with endosperm, cut open. */
export function seedAnatomy() {
  const title = T('A seed cut open: coat, endosperm, cotyledon, embryo', 'Une graine ouverte : tégument, endosperme, cotylédon, embryon');
  const c = frame(title, '0 0 560 320',
    T('Schematic section of an albuminous dicot seed: the endosperm surrounds a mature embryo with two cotyledons, a radicle and a plumule.',
      'Coupe schématique d’une graine dicotylédone albuminée : l’endosperme entoure un embryon mûr à deux cotylédons, une radicule et une plumule.'));

  // Seed body.
  c.s('ellipse', { cx: 205, cy: 160, rx: 122, ry: 86, class: 'gm-testa' });
  c.s('ellipse', { cx: 205, cy: 160, rx: 111, ry: 75, class: 'gm-endo' });
  // Cotyledon, front.
  c.s('path', { d: 'M105,158 C105,114 140,96 198,96 C258,96 300,120 300,155 C300,191 258,214 198,214 C140,214 105,199 105,158 Z', class: 'gm-cot' });
  // Cotyledon behind, hinted.
  c.s('path', { d: 'M150,104 C188,90 245,94 278,112', class: 'gm-cot-line' });
  // Embryo axis: radicle down, plumule up, on the right.
  c.s('path', { d: 'M258,196 C262,214 260,232 252,248', class: 'gm-axis' });
  c.s('path', { d: 'M252,248 C247,256 246,262 248,268', class: 'gm-axis' });
  c.s('path', { d: 'M258,196 C254,180 252,170 254,160', class: 'gm-axis' });
  c.s('path', { d: 'M254,160 q-12,-6 -8,-16 q11,1 12,12', class: 'gm-leaf' });
  c.s('path', { d: 'M254,160 q10,-8 17,-2 q-4,9 -15,7', class: 'gm-leaf' });
  // Hilum on the left edge.
  c.s('ellipse', { cx: 84, cy: 164, rx: 9, ry: 15, class: 'gm-hilum' });
  // Micropyle, small dot near the hilum.
  c.s('circle', { cx: 92, cy: 192, r: 3, class: 'gm-dot' });

  c.label(T('seed coat (testa)', 'tégument (testa)'), 368, 52, [150, 82]);
  c.label(T('endosperm', 'endosperme'), 368, 82, [232, 118]);
  c.link('cotyledon', T('cotyledon (seed leaf)', 'cotylédon (feuille séminale)'), 368, 112, [196, 158]);
  c.link('plumule', T('plumule (future shoot)', 'plumule (future tige)'), 368, 142, [250, 156]);
  c.link('radicle', T('radicle (future root)', 'radicule (future racine)'), 368, 172, [254, 246]);
  c.link('hilum', T('hilum (scar of attachment)', 'hile (cicatrice d’attache)'), 368, 202, [84, 164]);
  c.label(T('micropyle', 'micropyle'), 368, 232, [92, 192]);
  return c.root;
}

/** Epigeal and hypogeal germination, side by side. */
export function epiHypo() {
  const title = T('Two ways of germinating: epigeal and hypogeal', 'Deux façons de germer : épigée et hypogée');
  const c = frame(title, '0 0 620 380',
    T('Left: the hypocotyl lifts the cotyledons above the soil (bean). Right: the cotyledons stay below the soil and the epicotyl grows up (pea).',
      'À gauche : l’hypocotyle soulève les cotylédons au-dessus du sol (haricot). À droite : les cotylédons restent sous le sol et l’épicotyle monte (pois).'));

  // Two panels.
  c.s('rect', { x: 10, y: 10, width: 290, height: 330, rx: 12, class: 'gm-panel' });
  c.s('rect', { x: 320, y: 10, width: 290, height: 330, rx: 12, class: 'gm-panel' });

  // Soil.
  c.s('path', { d: 'M10,282 H300 V340 H10 Z', class: 'gm-soil' });
  c.s('path', { d: 'M320,282 H610 V340 H320 Z', class: 'gm-soil' });
  c.s('path', { d: 'M10,282 H300', class: 'gm-soil-line' });
  c.s('path', { d: 'M320,282 H610', class: 'gm-soil-line' });

  // Epigeal (bean), left: seed below, hypocotyl arch, cotyledons above.
  c.s('path', { d: 'M156,300 C156,300 158,270 170,246 C184,218 178,190 162,172', class: 'gm-stem' });
  c.s('path', { d: 'M162,172 C150,164 148,148 156,138', class: 'gm-stem' });
  c.s('ellipse', { cx: 148, cy: 153, rx: 24, ry: 12, transform: 'rotate(-37 148 153)', class: 'gm-cot2' });
  c.s('ellipse', { cx: 174, cy: 153, rx: 24, ry: 12, transform: 'rotate(37 174 153)', class: 'gm-cot2' });
  c.s('path', { d: 'M156,138 q-12,-14 -24,-14 q8,16 24,18', class: 'gm-leaf' });
  c.s('path', { d: 'M156,138 q12,-16 26,-15 q-9,17 -26,19', class: 'gm-leaf' });
  c.s('ellipse', { cx: 156, cy: 304, rx: 17, ry: 12, class: 'gm-seed' });
  c.s('path', { d: 'M140,310 q8,10 18,8', class: 'gm-coat' });
  c.s('text', { x: 155, y: 38, class: 'gm-panel-h', 'text-anchor': 'middle' }, T('Epigeal: bean', 'Épigée : haricot'));
  c.s('text', { x: 155, y: 366, class: 'gm-panel-note', 'text-anchor': 'middle' }, T('cotyledons above the soil', 'cotylédons hors du sol'));
  c.label(T('hypocotyl', 'hypocotyle'), 220, 228, [170, 240]);
  c.label(T('seed coat shed', 'tégument rejeté'), 210, 300, [170, 306]);

  // Hypogeal (pea), right: cotyledons stay in soil, epicotyl grows.
  c.s('path', { d: 'M466,302 C466,280 466,258 466,236 C466,214 462,196 458,178', class: 'gm-stem' });
  c.s('ellipse', { cx: 444, cy: 298, rx: 26, ry: 20, class: 'gm-cot2' });
  c.s('ellipse', { cx: 488, cy: 298, rx: 26, ry: 20, class: 'gm-cot2' });
  c.s('path', { d: 'M458,178 q-14,-12 -25,-9 q7,15 24,16', class: 'gm-leaf' });
  c.s('path', { d: 'M458,178 q14,-14 27,-10 q-9,16 -26,17', class: 'gm-leaf' });
  c.s('path', { d: 'M466,302 C466,320 464,330 460,340', class: 'gm-axis' });
  c.s('text', { x: 465, y: 38, class: 'gm-panel-h', 'text-anchor': 'middle' }, T('Hypogeal: pea', 'Hypogée : pois'));
  c.s('text', { x: 465, y: 366, class: 'gm-panel-note', 'text-anchor': 'middle' }, T('cotyledons below the soil', 'cotylédons sous le sol'));
  c.label(T('epicotyl', 'épicotyle'), 520, 218, [464, 214]);
  c.label(T('first true leaves', 'premières vraies feuilles'), 520, 176, [480, 176]);
  return c.root;
}

/** Three dormancy types as schematic timelines. */
export function timeline() {
  const title = T('Three dormancy types on a schematic timeline', 'Trois types de dormance sur une frise schématique');
  const c = frame(title, '0 0 680 340',
    T('Physiological dormancy: moist cold. Morphophysiological: warm for the embryo, then cold. Combinational: open the cover, then cold. The scale is schematic.',
      'Dormance physiologique : froid humide. Morphophysiologique : chaud pour l’embryon, puis froid. Combinée : ouvrir l’enveloppe, puis froid. L’échelle est schématique.'));

  const x0 = 190, x1 = 640, y0 = 78, row = 78;
  // Axis and month ticks.
  c.s('path', { d: `M${x0},${y0 - 18} V${y0 + 2 * row + 22}`, class: 'gm-axis-line' });
  for (let d = 0; d <= 120; d += 30) {
    const x = x0 + ((x1 - x0) * d) / 120;
    c.s('path', { d: `M${x},${y0 - 12} V${y0 + 2 * row + 14}`, class: 'gm-grid' });
    c.s('text', { x, y: y0 + 2 * row + 34, class: 'gm-tick', 'text-anchor': 'middle' }, String(d));
  }
  c.s('text', { x: 660, y: y0 + 2 * row + 34, class: 'gm-tick', 'text-anchor': 'end' }, T('days', 'jours'));

  const bar = (y, from, to, cls) => c.s('rect', {
    x: x0 + ((x1 - x0) * from) / 120, y, width: ((x1 - x0) * (to - from)) / 120, height: 26, rx: 7, class: cls,
  });

  c.s('text', { x: 24, y: y0 + 18, class: 'gm-row-h' }, T('Physiological (PD)', 'Physiologique (PD)'));
  bar(y0, 0, 60, 'gm-bar-cold');
  c.s('text', { x: x0 + 6, y: y0 + 18, class: 'gm-bar-lbl' }, T('moist cold 0–5 °C', 'froid humide 0–5 °C'));

  c.s('text', { x: 24, y: y0 + row + 18, class: 'gm-row-h' }, T('Morphophysiological (MPD)', 'Morphophysiologique (MPD)'));
  bar(y0 + row, 0, 30, 'gm-bar-warm');
  bar(y0 + row, 30, 90, 'gm-bar-cold');
  c.s('text', { x: x0 + 6, y: y0 + row + 18, class: 'gm-bar-lbl' }, T('warm 15–20 °C', 'chaud 15–20 °C'));
  c.s('text', { x: x0 + ((x1 - x0) * 61) / 120, y: y0 + row + 18, class: 'gm-bar-lbl' }, T('then cold', 'puis froid'));

  c.s('text', { x: 24, y: y0 + 2 * row + 18, class: 'gm-row-h' }, T('Combinational (PY+PD)', 'Combinée (PY+PD)'));
  bar(y0 + 2 * row, 0, 90, 'gm-bar-cold');
  c.s('circle', { cx: x0 + 2, cy: y0 + 2 * row + 13, r: 8, class: 'gm-bar-open' });
  c.s('text', { x: x0 + 18, y: y0 + 2 * row + 18, class: 'gm-bar-lbl' }, T('open the cover, then cold', 'ouvrir l’enveloppe, puis froid'));
  return c.root;
}
