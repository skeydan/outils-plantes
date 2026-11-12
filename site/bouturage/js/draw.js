// Original SVG diagrams for the cuttings and layering tab. Schematic teaching
// drawings, not photographs: each says what it shows and links its labels to
// the anatomy entries. No external image, no traced figure.
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

function frame(title, viewBox, desc = '', cls = 'bt-svg') {
  const root = mk('svg', {
    viewBox, role: 'img', class: cls, preserveAspectRatio: 'xMidYMid meet',
  });
  mk('title', {}, root).textContent = title;
  if (desc) mk('desc', {}, root).textContent = desc;
  const shapes = mk('g', {}, root);
  const leads = mk('g', {}, root);
  const labels = mk('g', {}, root);
  return {
    root,
    s(name, attrs, parent = shapes) {
      if (typeof parent === 'string') { attrs = { ...attrs, text: parent }; parent = shapes; }
      return mk(name, attrs, parent);
    },
    label(text, x, y, to, anchor = 'start') {
      const t = mk('text', { x, y, 'text-anchor': anchor, class: 'bt-lbl' }, labels);
      t.textContent = text;
      if (to) {
        const sx = anchor === 'start' ? x - 6 : x + 6;
        mk('path', { d: `M${sx},${y - 4} L${to[0]},${to[1]}`, class: 'bt-lead' }, leads);
        mk('circle', { cx: to[0], cy: to[1], r: 2.2, class: 'bt-dot' }, leads);
      }
      return t;
    },
    link(id, text, x, y, to, anchor = 'start') {
      const a = mk('a', { href: routeHref('anatomy', id) }, labels);
      const t = mk('text', { x, y, 'text-anchor': anchor, class: 'bt-lbl bt-lbl-link' }, a);
      t.textContent = text;
      if (to) {
        const sx = anchor === 'start' ? x - 6 : x + 6;
        mk('path', { d: `M${sx},${y - 4} L${to[0]},${to[1]}`, class: 'bt-lead' }, leads);
        mk('circle', { cx: to[0], cy: to[1], r: 2.2, class: 'bt-dot' }, leads);
      }
      return t;
    },
  };
}

/** A prepared leafy cutting, with the parts that decide rooting. */
export function cuttingAnatomy() {
  const title = T('A prepared cutting and the parts that decide rooting',
    'Une bouture préparée et les parties qui décident de l’enracinement');
  const c = frame(title, '0 0 660 430',
    T('Schematic cutting: slanted top cut above a bud, leaf and axillary bud at a node, internode, wound at the base, slanted base cut, adventitious roots forming.',
      'Bouture schématique : coupe supérieure en biais au-dessus d’un bourgeon, feuille et bourgeon axillaire à un nœud, entre-nœud, entaille à la base, coupe basale en biais, racines adventives en formation.'));

  // Stem: top slanted cut, swollen node, slanted base.
  c.s('path', {
    d: 'M238,86 C236,150 234,220 232,286 C231,320 230,344 228,362 L262,340 C262,310 262,260 264,200 C265,150 266,116 266,86 Z',
    class: 'bt-stem',
  });
  // Top cut surface.
  c.s('path', { d: 'M238,86 L266,86 L262,96 L241,96 Z', class: 'bt-cut' });
  // Node swelling and axillary bud.
  c.s('ellipse', { cx: 249, cy: 232, rx: 18, ry: 11, class: 'bt-node' });
  c.s('path', { d: 'M264,228 q16,-10 22,2 q-10,9 -22,4 Z', class: 'bt-bud' });
  // Leaf, reduced to half.
  c.s('path', { d: 'M266,214 C296,190 330,186 352,198 C332,222 300,228 270,222 Z', class: 'bt-leaf' });
  c.s('path', { d: 'M270,218 C300,212 326,204 346,198', class: 'bt-vein' });
  c.s('path', { d: 'M286,196 L282,176 M312,190 L310,172', class: 'bt-vein' });
  // Lower leaf scar / second bud.
  c.s('path', { d: 'M234,270 q-14,-8 -20,2 q9,9 20,3 Z', class: 'bt-bud-b' });
  // Wound at the base (a shallow slice).
  c.s('path', { d: 'M231,314 L219,322 L232,330', class: 'bt-wound' });
  // Adventitious roots at the base.
  c.s('path', { d: 'M228,356 C210,362 200,380 202,398', class: 'bt-root' });
  c.s('path', { d: 'M232,362 C222,376 224,390 232,402', class: 'bt-root' });
  c.s('path', { d: 'M258,346 C274,356 282,372 280,392', class: 'bt-root' });
  c.s('path', { d: 'M254,354 C264,366 266,382 262,396', class: 'bt-root' });

  // Labels on the right.
  c.label(T('slanted top cut, above a bud', 'coupe supérieure en biais, au-dessus d’un bourgeon'), 404, 70, [252, 90]);
  c.link('leaf', T('leaf, reduced by half', 'feuille, réduite de moitié'), 404, 126, [330, 206]);
  c.link('axillary-bud', T('axillary bud', 'bourgeon axillaire'), 404, 168, [280, 230]);
  c.link('node', T('node', 'nœud'), 404, 210, [250, 232]);
  c.link('internode', T('internode', 'entre-nœud'), 404, 252, [247, 170]);
  c.label(T('wound (light slice)', 'entaille (légère incision)'), 404, 310, [224, 322]);
  c.label(T('slanted base cut', 'coupe basale en biais'), 404, 352, [246, 352]);
  c.link('adventitious-root', T('adventitious roots', 'racines adventives'), 404, 394, [236, 382]);
  return c.root;
}

/** The five cutting types, schematically. */
export function cutTypes() {
  const title = T('Five kinds of cutting', 'Cinq types de bouture');
  const c = frame(title, '0 0 720 500',
    T('Softwood: tender leafy shoot. Semi-hardwood: firm base, soft tip. Hardwood: leafless dormant stem with buds. Root: root fragment. Stem segment: cactus cladode with a callused base.',
      'Herbacée : pousse tendre feuillée. Semi-aoûtée : base ferme, sommet souple. Aoûtée : tige dormante sans feuilles avec bourgeons. Racine : fragment de racine. Segment de tige : cladode de cactus à base calleuse.'));

  const panel = (x, y, h, label, note) => {
    c.s('rect', { x, y, width: 212, height: 220, rx: 12, class: 'bt-panel' });
    c.s('text', { x: x + 106, y: y + 24, class: 'bt-panel-h', 'text-anchor': 'middle' }, label);
    c.s('text', { x: x + 106, y: y + 204, class: 'bt-panel-note', 'text-anchor': 'middle' }, note);
  };

  // Softwood.
  panel(8, 8, 220, T('Softwood', 'Herbacée'), T('tender, in leaf', 'tendre, feuillée'));
  c.s('path', { d: 'M96,44 C92,86 94,120 96,150', class: 'bt-stem-soft' });
  c.s('path', { d: 'M96,84 q24,-18 38,-6 q-18,20 -38,16', class: 'bt-leaf' });
  c.s('path', { d: 'M96,120 q-24,-14 -38,-2 q16,18 38,14', class: 'bt-leaf' });
  c.s('path', { d: 'M96,150 L84,162 L98,168', class: 'bt-cut' });
  c.s('path', { d: 'M96,168 C88,180 90,192 96,200', class: 'bt-root' });

  // Semi-hardwood.
  panel(254, 8, 220, T('Semi-hardwood', 'Semi-aoûtée'), T('firm base, soft tip', 'base ferme, sommet souple'));
  c.s('path', { d: 'M342,44 C338,86 338,120 340,150', class: 'bt-stem-soft' });
  c.s('path', { d: 'M340,96 C338,140 338,178 340,206', class: 'bt-stem' });
  c.s('path', { d: 'M342,66 q22,-14 34,-4 q-16,18 -34,12', class: 'bt-leaf' });
  c.s('path', { d: 'M340,108 q-22,-10 -34,0 q14,16 34,10', class: 'bt-leaf' });
  c.s('path', { d: 'M340,206 L328,216 L342,222', class: 'bt-cut' });
  c.s('path', { d: 'M340,222 C332,234 334,244 340,252', class: 'bt-root' });

  // Hardwood.
  panel(500, 8, 220, T('Hardwood', 'Aoûtée'), T('dormant, leafless', 'dormante, sans feuilles'));
  c.s('path', { d: 'M588,44 L600,54 L590,210 L578,200 Z', class: 'bt-stem-hard' });
  c.s('path', { d: 'M590,80 q14,-4 16,4 q-8,6 -16,2', class: 'bt-bud' });
  c.s('path', { d: 'M590,128 q-14,-4 -16,4 q8,6 16,2', class: 'bt-bud' });
  c.s('path', { d: 'M590,176 q14,-4 16,4 q-8,6 -16,2', class: 'bt-bud' });
  c.s('path', { d: 'M578,200 L588,210 L600,198', class: 'bt-cut' });
  c.s('path', { d: 'M588,210 C582,222 584,234 590,244', class: 'bt-root' });

  // Root cutting.
  panel(8, 264, 220, T('Root cutting', 'Bouture de racine'), T('shoots up, roots down', 'pousses en haut, racines en bas'));
  c.s('path', { d: 'M58,368 C90,360 138,360 166,368 C160,380 120,384 60,378 Z', class: 'bt-root-piece' });
  c.s('path', { d: 'M84,362 C82,344 86,334 92,326', class: 'bt-shoot' });
  c.s('path', { d: 'M92,326 q-10,-10 -18,-6 q6,12 18,10', class: 'bt-leaf' });
  c.s('path', { d: 'M126,361 C128,344 132,336 138,330', class: 'bt-shoot' });
  c.s('path', { d: 'M138,330 q10,-10 18,-4 q-8,12 -18,8', class: 'bt-leaf' });
  c.s('path', { d: 'M98,376 C96,390 92,400 88,410', class: 'bt-root' });
  c.s('path', { d: 'M132,378 C136,392 140,400 144,410', class: 'bt-root' });

  // Stem segment.
  panel(254, 264, 220, T('Stem segment', 'Segment de tige'), T('cactus: cure, then plant', 'cactus : cicatriser, puis planter'));
  c.s('path', { d: 'M342,300 C330,330 330,362 342,392 L360,388 C368,356 368,326 358,298 Z', class: 'bt-cladode' });
  c.s('path', { d: 'M342,392 L352,398 L360,388', class: 'bt-callus' });
  c.s('path', { d: 'M342,392 C338,406 340,416 346,424', class: 'bt-root' });
  c.s('path', { d: 'M356,390 C360,404 358,414 352,422', class: 'bt-root' });
  c.s('circle', { cx: 350, cy: 330, r: 2, class: 'bt-dot' });
  c.s('circle', { cx: 352, cy: 356, r: 2, class: 'bt-dot' });

  // Note on the right of the bottom row.
  c.s('text', { x: 500, y: 322, class: 'bt-panel-h' }, T('One rule for all five', 'Une règle pour les cinq'));
  c.s('text', { x: 500, y: 352, class: 'bt-note-line' }, T('Cut below a node, keep the', 'Couper sous un nœud, garder le'));
  c.s('text', { x: 500, y: 372, class: 'bt-note-line' }, T('base drained, the air humid.', 'substrat drainé, l’air humide.'));
  c.s('text', { x: 500, y: 404, class: 'bt-note-line' }, T('The type follows the wood', 'Le type suit le bois'));
  c.s('text', { x: 500, y: 424, class: 'bt-note-line' }, T('available that day.', 'disponible ce jour-là.'));
  return c.root;
}

/** Four layering methods, schematically. */
export function layeringMethods() {
  const title = T('Four ways of layering', 'Quatre façons de marcotter');
  const c = frame(title, '0 0 720 520',
    T('Simple layering: a low shoot bent into a trench. Tip layering: the tip of a cane buried. Air layering: a girdled branch wrapped in moist moss. Mound layering: shoots covered with soil after the mother plant is cut back.',
      'Marcottage simple : une pousse basse couchée dans une tranchée. Par pointe : la pointe d’une canne enterrée. Aérien : une branche annelée entourée de mousse humide. En butte : les pousses couvertes de terre après rabattage du pied mère.'));

  const panel = (x, y, label, note) => {
    c.s('rect', { x, y, width: 344, height: 240, rx: 12, class: 'bt-panel' });
    c.s('text', { x: x + 172, y: y + 24, class: 'bt-panel-h', 'text-anchor': 'middle' }, label);
    c.s('text', { x: x + 172, y: y + 224, class: 'bt-panel-note', 'text-anchor': 'middle' }, note);
  };

  // Simple layering.
  panel(8, 8, T('Simple layering', 'Marcottage simple'), T('still attached, roots in 6–12 months', 'encore attaché, racines en 6–12 mois'));
  c.s('path', { d: 'M26,196 H332 V236 H26 Z', class: 'bt-soil' });
  c.s('path', { d: 'M26,196 H332', class: 'bt-soil-line' });
  c.s('path', { d: 'M64,196 C64,150 62,110 58,76', class: 'bt-stem' });
  c.s('path', { d: 'M58,76 q-4,-16 6,-26 M58,76 q16,-10 26,-4', class: 'bt-leaf' });
  c.s('path', { d: 'M64,168 C96,186 120,196 150,198 C186,200 208,186 218,168', class: 'bt-branch-lay' });
  c.s('path', { d: 'M150,198 C160,210 180,212 196,204', class: 'bt-branch-lay' });
  c.s('path', { d: 'M150,198 C152,216 166,224 182,222', class: 'bt-root' });
  c.s('path', { d: 'M130,198 C128,214 136,222 148,224', class: 'bt-root' });
  c.s('path', { d: 'M118,190 L118,206 M172,196 L172,212', class: 'bt-peg' });
  c.s('path', { d: 'M218,168 q-8,-16 2,-24 q10,10 6,24', class: 'bt-leaf' });

  // Tip layering.
  panel(368, 8, T('Tip layering', 'Marcottage par pointe'), T('brambles: bury the tip', 'ronces : enterrer la pointe'));
  c.s('path', { d: 'M386,196 H700 V236 H386 Z', class: 'bt-soil' });
  c.s('path', { d: 'M386,196 H700', class: 'bt-soil-line' });
  c.s('path', { d: 'M412,196 C412,150 414,108 420,74', class: 'bt-stem' });
  c.s('path', { d: 'M420,74 q-12,-12 -22,-8 q8,14 22,12', class: 'bt-leaf' });
  c.s('path', { d: 'M420,74 q18,-14 30,-4 q-12,16 -30,10', class: 'bt-leaf' });
  c.s('path', { d: 'M420,120 C470,136 520,146 566,176 C590,192 604,204 612,214', class: 'bt-branch-lay' });
  c.s('path', { d: 'M612,214 C606,226 614,236 626,234', class: 'bt-root' });
  c.s('path', { d: 'M598,210 C594,224 600,232 610,234', class: 'bt-root' });
  c.s('path', { d: 'M612,196 L612,212', class: 'bt-peg' });

  // Air layering.
  panel(8, 268, T('Air layering', 'Marcottage aérien'), T('a branch that cannot reach the ground', 'une branche qui ne peut pas atteindre le sol'));
  c.s('path', { d: 'M156,290 C154,330 154,380 156,430', class: 'bt-stem' });
  c.s('path', { d: 'M156,322 q-28,-16 -46,-4 q20,20 46,14', class: 'bt-leaf' });
  c.s('path', { d: 'M156,360 q28,-16 46,-4 q-20,20 -46,14', class: 'bt-leaf' });
  // Girdled zone.
  c.s('rect', { x: 148, y: 376, width: 18, height: 10, class: 'bt-girdle' });
  // Moss ball and film.
  c.s('ellipse', { cx: 156, cy: 400, rx: 42, ry: 34, class: 'bt-moss' });
  c.s('path', { d: 'M114,400 q42,-52 84,0 q-42,52 -84,0 Z', class: 'bt-wrap' });
  c.s('path', { d: 'M116,382 L196,418 M116,418 L196,382', class: 'bt-wrap-tie' });
  c.s('path', { d: 'M142,416 C140,426 144,432 150,436', class: 'bt-root' });
  c.s('path', { d: 'M170,414 C174,424 172,432 166,436', class: 'bt-root' });
  c.s('text', { x: 214, y: 386, class: 'bt-note-line' }, T('moist moss', 'mousse humide'));
  c.s('text', { x: 214, y: 406, class: 'bt-note-line' }, T('opaque film', 'film opaque'));

  // Mound layering.
  panel(368, 268, T('Mound layering', 'Marcottage en butte'), T('cut back, then mound soil over shoots', 'rabattre, puis buter de terre les pousses'));
  c.s('path', { d: 'M386,470 H700 V500 H386 Z', class: 'bt-soil' });
  c.s('path', { d: 'M388,470 C420,430 480,420 530,430 C580,420 650,430 700,470 Z', class: 'bt-mound' });
  c.s('path', { d: 'M404,430 C404,412 406,402 410,394', class: 'bt-shoot' });
  c.s('path', { d: 'M410,394 q-10,-10 -18,-6 q6,12 18,10', class: 'bt-leaf' });
  c.s('path', { d: 'M456,418 C456,398 458,388 462,380', class: 'bt-shoot' });
  c.s('path', { d: 'M462,380 q10,-10 18,-4 q-8,12 -18,8', class: 'bt-leaf' });
  c.s('path', { d: 'M512,414 C512,394 514,384 518,376', class: 'bt-shoot' });
  c.s('path', { d: 'M518,376 q-10,-10 -18,-6 q6,12 18,10', class: 'bt-leaf' });
  c.s('path', { d: 'M568,418 C568,400 570,390 574,382', class: 'bt-shoot' });
  c.s('path', { d: 'M574,382 q10,-10 18,-4 q-8,12 -18,8', class: 'bt-leaf' });
  c.s('path', { d: 'M430,470 C430,452 436,444 444,438', class: 'bt-root' });
  c.s('path', { d: 'M500,470 C498,452 502,444 510,438', class: 'bt-root' });
  c.s('path', { d: 'M620,468 C618,450 622,442 630,436', class: 'bt-root' });
  return c.root;
}
