// Our own schematic drawings. Every label is the entry's name in the label
// language and links to that entry; the part of the drawing that belongs to
// the entry being shown is outlined. Drawings are schematic (not to scale);
// what they show follows the sources cited in their captions.

import { routeHref } from '../../assets/route.js';

const NS = 'http://www.w3.org/2000/svg';
const r1 = (v) => Math.round(v * 10) / 10;

function mk(name, attrs = {}, parent = null) {
  const e = document.createElementNS(NS, name);
  for (const [k, v] of Object.entries(attrs)) if (v !== undefined && v !== null) e.setAttribute(k, v);
  if (parent) parent.appendChild(e);
  return e;
}

/** Annular sector path: centre, radii, angles in degrees (0 = right, clockwise on screen). */
function sector(cx, cy, ri, ro, a1, a2) {
  const p = (r, a) => `${r1(cx + r * Math.cos((a * Math.PI) / 180))},${r1(cy + r * Math.sin((a * Math.PI) / 180))}`;
  const large = a2 - a1 > 180 ? 1 : 0;
  return `M${p(ro, a1)} A${ro},${ro} 0 ${large} 1 ${p(ro, a2)} L${p(ri, a2)} A${ri},${ri} 0 ${large} 0 ${p(ri, a1)} Z`;
}
const polar = (cx, cy, r, a) => [r1(cx + r * Math.cos((a * Math.PI) / 180)), r1(cy + r * Math.sin((a * Math.PI) / 180))];

/** A wavy line (for jigsaw epidermal cells). */
function wavy(x1, y1, x2, y2, amp = 4, waves = 2) {
  const dx = x2 - x1, dy = y2 - y1, len = Math.hypot(dx, dy);
  const nx = -dy / len, ny = dx / len;
  let d = `M${r1(x1)},${r1(y1)}`;
  const n = waves * 2;
  for (let i = 0; i < n; i++) {
    const t0 = i / n, t1 = (i + 1) / n, tm = (t0 + t1) / 2;
    const s = i % 2 ? -1 : 1;
    d += ` Q${r1(x1 + dx * tm + nx * amp * s * 2)},${r1(y1 + dy * tm + ny * amp * s * 2)} ${r1(x1 + dx * t1)},${r1(y1 + dy * t1)}`;
  }
  return d;
}

/** Curly brace. Vertical (x fixed) when y1 != y2, pointing dir (+1 right, -1 left); horizontal otherwise (dir +1 down). */
function bracePath(x1, y1, x2, y2, dir = 1, k = 6) {
  if (x1 === x2) {
    const ym = (y1 + y2) / 2, x = x1, d = dir * k;
    return `M${x},${y1} q${d},0 ${d},${k} L${x + d},${ym - k} q0,${k} ${d},${k} q${-d},0 ${-d},${k} L${x + d},${y2 - k} q0,${k} ${-d},${k}`;
  }
  const xm = (x1 + x2) / 2, y = y1, d = dir * k;
  return `M${x1},${y} q0,${d} ${k},${d} L${xm - k},${y + d} q${k},0 ${k},${d} q0,${-d} ${k},${-d} L${x2 - k},${y + d} q${k},0 ${k},${-d}`;
}

/** Drawing context: shapes below, labels above; highlight of the current entry. */
function canvas(ctx, w, h, title) {
  const root = mk('svg', { viewBox: `0 0 ${w} ${h}`, role: 'group', 'aria-label': title, width: w, height: h });
  mk('title', {}, root).textContent = title;
  const shapes = mk('g', {}, root);
  const leads = mk('g', {}, root);
  const labels = mk('g', {}, root);
  const hl = ctx.hl;
  const api = {
    root, shapes, hl,
    g(parent = shapes) { return mk('g', {}, parent); },
    /** A shape; `part` ties it to an entry so it is outlined when that entry is shown. */
    s(name, attrs, part = null, parent = shapes) {
      const e = mk(name, attrs, parent);
      if (part) { e.dataset.part = part; if (part === hl) e.classList.add('dr-hl'); }
      return e;
    },
    /** A linked label at (x, y); `to` draws a leader to a point of the drawing. */
    label(id, x, y, { to = null, anchor = 'start', cls = 'dr-lbl', text = null } = {}) {
      const a = mk('a', { href: routeHref('anatomy', id), class: id === hl ? 'is-hl' : null }, labels);
      const t = mk('text', { x, y, 'text-anchor': anchor, class: cls, lang: ctx.lang }, a);
      t.textContent = text ?? ctx.nameOf(id);
      if (to) {
        const sx = anchor === 'start' ? x - 3 : anchor === 'end' ? x + 3 : x;
        const sy = anchor === 'middle' ? y + (to[1] > y ? 4 : -12) : y - 4;
        mk('path', { d: `M${sx},${sy} L${to[0]},${to[1]}`, class: 'dr-lead' }, leads);
        mk('circle', { cx: to[0], cy: to[1], r: 1.8, fill: 'var(--ink-2)' }, leads);
      }
      return t;
    },
    /** Plain text (not linked), e.g. panel titles in the page language. */
    text(str, x, y, { anchor = 'start', cls = 'dr-lbl-sm' } = {}) {
      const t = mk('text', { x, y, 'text-anchor': anchor, class: cls }, labels);
      t.textContent = str;
      return t;
    },
    /** A brace with a linked label at its tip. */
    brace(id, x1, y1, x2, y2, dir = 1, { gap = 8, anchor = null, dy = 4 } = {}) {
      mk('path', { d: bracePath(x1, y1, x2, y2, dir), class: 'dr-brace' + (id === hl ? ' dr-hl' : '') }, leads);
      if (x1 === x2) {
        const x = x1 + dir * (14 + gap);
        return api.label(id, x, (y1 + y2) / 2 + dy, { anchor: anchor ?? (dir > 0 ? 'start' : 'end'), cls: 'dr-brace-lbl' });
      }
      const y = y1 + dir * (14 + gap) + (dir > 0 ? 9 : -1);
      return api.label(id, (x1 + x2) / 2, y, { anchor: anchor ?? 'middle', cls: 'dr-brace-lbl' });
    },
  };
  return api;
}

// ---------------------------------------------------------------- the drawings

function plant(ctx) {
  const c = canvas(ctx, 470, 460, ctx.T('A flowering plant', 'Une plante à fleurs'));
  c.s('rect', { x: 0, y: 300, width: 470, height: 160, class: 'dr-soil' });
  c.s('path', { d: 'M0,300 H470', class: 'dr-line' });
  // Roots
  const roots = c.g();
  c.s('path', { d: 'M226,300 L234,300 L231.2,440 L228.8,440 Z', class: 'dr-root-fill' }, 'primary-root', roots);
  for (const d of ['M230,322 Q205,330 176,362', 'M230,334 Q262,342 290,374', 'M230,372 Q212,382 192,410', 'M230,392 Q250,400 268,424', 'M190,350 Q178,362 172,384', 'M276,360 Q290,366 300,386'])
    c.s('path', { d, class: 'dr-root' }, 'lateral-root', roots);
  for (let y = 414; y <= 436; y += 4) { c.s('path', { d: `M229,${y} l-7,3`, class: 'dr-thin' }); c.s('path', { d: `M231,${y} l7,3`, class: 'dr-thin' }); }
  // Stem, nodes, buds
  c.s('path', { d: 'M226,300 L227,72 L233,72 L234,300 Z', class: 'dr-chl' }, 'stem');
  for (const y of [242, 182, 122]) c.s('ellipse', { cx: 230, cy: y, rx: 6.5, ry: 2.6, class: 'dr-node' }, 'node');
  c.s('path', { d: 'M230,72 C222,66 224,52 230,44 C236,52 238,66 230,72 Z', class: 'dr-chl' }, 'terminal-bud');
  c.s('path', { d: 'M229,58 C232,54 233,50 230,46', class: 'dr-thin' });
  // Leaf 1 (right) and its axillary bud
  c.s('path', { d: 'M234,242 Q250,236 264,228', class: 'dr-line' });
  c.s('path', { d: 'M264,228 C288,200 336,194 362,206 C340,228 298,244 264,228 Z', class: 'dr-chl' }, 'leaf');
  c.s('path', { d: 'M264,228 Q312,214 360,206', class: 'dr-thin' });
  c.s('path', { d: 'M236,238 C238,230 243,228 246,229 C245,234 241,238 236,238 Z', class: 'dr-chl' }, 'axillary-bud');
  // Leaf 2 (left)
  c.s('path', { d: 'M226,182 Q210,176 196,168', class: 'dr-line' });
  c.s('path', { d: 'M196,168 C172,140 124,134 98,146 C120,168 162,184 196,168 Z', class: 'dr-chl' }, 'leaf');
  c.s('path', { d: 'M196,168 Q148,154 100,146', class: 'dr-thin' });
  c.s('path', { d: 'M224,178 C222,170 217,168 214,169 C215,174 219,178 224,178 Z', class: 'dr-chl' }, 'axillary-bud');
  // Flower (right, top node) and fruit (left)
  c.s('path', { d: 'M233,122 Q252,112 270,98', class: 'dr-line' });
  const fl = c.g();
  for (let k = 0; k < 5; k++) { const [x, y] = polar(278, 90, 9.5, k * 72 - 90); c.s('circle', { cx: x, cy: y, r: 8, class: 'dr-flower' }, 'flower', fl); }
  c.s('circle', { cx: 278, cy: 90, r: 4.5, class: 'dr-flower-c' }, 'flower', fl);
  c.s('path', { d: 'M227,122 Q210,124 196,130', class: 'dr-line' });
  c.s('circle', { cx: 186, cy: 142, r: 13, class: 'dr-fruit' }, 'fruit');
  c.s('path', { d: 'M196,130 Q190,128 188,129', class: 'dr-line' });
  // Internode brace (left of the stem, between two nodes)
  c.s('path', { d: bracePath(220, 186, 220, 238, -1), class: 'dr-brace' + (ctx.hl === 'internode' ? ' dr-hl' : '') });

  c.label('terminal-bud', 380, 50, { to: [236, 56] });
  c.label('flower', 380, 86, { to: [289, 88] });
  c.label('node', 380, 126, { to: [237, 122] });
  c.label('leaf', 380, 204, { to: [340, 208] });
  c.label('axillary-bud', 380, 246, { to: [244, 232] });
  c.label('stem', 380, 280, { to: [234, 280] });
  c.label('lateral-root', 380, 380, { to: [288, 371] });
  c.label('primary-root', 380, 432, { to: [233, 430] });
  c.label('fruit', 90, 116, { to: [176, 134], anchor: 'end' });
  c.label('internode', 90, 216, { to: [212, 212], anchor: 'end' });
  c.label('root', 90, 360, { to: [226, 330], anchor: 'end' });
  c.label('plant', 20, 30, { cls: 'dr-brace-lbl' });
  return c.root;
}

function stemPrimary(ctx) {
  const c = canvas(ctx, 480, 380, ctx.T('Young stem of a eudicot, cross-section', 'Jeune tige de eudicotylédone, coupe transversale'));
  const cx = 172, cy = 190;
  c.s('circle', { cx, cy, r: 160, class: 'dr-ground' }, 'cortex');
  // Epidermis: a ring of small cells
  c.s('circle', { cx, cy, r: 160, class: 'dr-epi' }, 'stem-epidermis');
  c.s('circle', { cx, cy, r: 154, class: 'dr-thin' });
  for (let a = 0; a < 360; a += 5) { const [x1, y1] = polar(cx, cy, 154, a); const [x2, y2] = polar(cx, cy, 160, a); c.s('path', { d: `M${x1},${y1} L${x2},${y2}`, class: 'dr-thin' }); }
  // Cortex cells
  for (const [r, step, off] of [[144, 9, 0], [131, 9.5, 4], [120, 10.5, 2]]) for (let a = off; a < 360; a += step) { const [x, y] = polar(cx, cy, r, a); c.s('circle', { cx: x, cy: y, r: 5.2, class: 'dr-thin' }); }
  // Starch sheath: innermost cortex layer
  c.s('circle', { cx, cy, r: 113, class: 'dr-sheath' }, 'starch-sheath');
  // Pith and pith rays (ground tissue)
  c.s('circle', { cx, cy, r: 60, class: 'dr-pith' }, 'pith');
  for (const [x, y] of [[0, 0], [-28, -18], [26, -20], [-24, 22], [24, 24], [0, -40], [0, 40], [-44, 2], [44, 0]]) c.s('circle', { cx: cx + x, cy: cy + y, r: 12, class: 'dr-thin' });
  c.s('path', { d: sector(cx, cy, 62, 108, -12, 12), class: 'dr-ray' }, 'pith-ray');
  // Vascular bundles: phloem outside, xylem inside, cambium between
  const bundles = c.g();
  for (let k = 0; k < 8; k++) {
    const a = k * 45 + 22.5;
    const b = c.g(bundles);
    b.dataset.part = 'vascular-bundle';
    if (ctx.hl === 'vascular-bundle' && k === 7) b.classList.add('dr-hl');
    c.s('path', { d: sector(cx, cy, 92, 110, a - 12, a + 12), class: 'dr-phloem' }, 'primary-phloem', b);
    c.s('path', { d: sector(cx, cy, 88, 92, a - 12, a + 12), class: 'dr-meri' }, 'fascicular-cambium', b);
    c.s('path', { d: sector(cx, cy, 64, 88, a - 9, a + 9), class: 'dr-xylem' }, 'primary-xylem', b);
    for (const [rr, da] of [[80, -4], [80, 4], [71, 0]]) { const [x, y] = polar(cx, cy, rr, a + da); c.s('circle', { cx: x, cy: y, r: 3.2, class: 'dr-vessel' }, null, b); }
    if (ctx.hl === 'vascular-bundle' && k === 7) c.s('path', { d: sector(cx, cy, 62, 112, a - 13, a + 13), class: 'dr-hl-ring' }, null, b);
  }
  c.label('stem-epidermis', 352, 36, { to: polar(cx, cy, 157, -62) });
  c.label('cortex', 352, 66, { to: polar(cx, cy, 136, -40) });
  c.label('starch-sheath', 352, 96, { to: polar(cx, cy, 113, -30) });
  c.label('primary-phloem', 352, 134, { to: polar(cx, cy, 101, -22.5) });
  c.label('fascicular-cambium', 352, 158, { to: polar(cx, cy, 90, -18) });
  c.label('primary-xylem', 352, 182, { to: polar(cx, cy, 76, -22.5) });
  c.label('pith-ray', 352, 206, { to: polar(cx, cy, 90, 0) });
  c.label('vascular-bundle', 352, 248, { to: polar(cx, cy, 104, 34) });
  c.label('pith', 352, 290, { to: [cx + 30, cy + 30] });
  return c.root;
}

/** Two radial strips from the pith (left) to the outside (right): bark, cortex, Rinde and Borke. */
function barkStrips(ctx) {
  const c = canvas(ctx, 480, 450, ctx.T('From the pith to the outside: a young stem and an old trunk', 'De la moelle vers l’extérieur : une jeune tige et un vieux tronc'));
  // Strip A: first year, the cortex is still there.
  const A = 76, H = 64;
  c.text(ctx.T('Young stem, first year (radial strip)', 'Jeune tige, première année (bande radiale)'), 10, A - 40, { cls: 'dr-lbl' });
  const ya = A, ha = H;
  c.s('rect', { x: 10, y: ya, width: 40, height: ha, class: 'dr-pith' }, 'pith');
  c.s('rect', { x: 50, y: ya, width: 100, height: ha, class: 'dr-xylem' }, 'wood');
  for (let x = 62; x < 148; x += 15) c.s('circle', { cx: x, cy: ya + 20 + ((x / 15) % 2) * 22, r: 4, class: 'dr-vessel' });
  c.s('rect', { x: 150, y: ya, width: 6, height: ha, class: 'dr-meri' }, 'vascular-cambium');
  c.s('rect', { x: 156, y: ya, width: 46, height: ha, class: 'dr-phloem' }, 'secondary-phloem');
  c.s('rect', { x: 202, y: ya, width: 138, height: ha, class: 'dr-ground' }, 'cortex');
  for (let x = 214; x < 336; x += 18) for (const y of [ya + 14, ya + 34, ya + 52]) c.s('circle', { cx: x + (y % 2) * 4, cy: y, r: 6.5, class: 'dr-thin' });
  c.s('rect', { x: 340, y: ya, width: 8, height: ha, class: 'dr-cell' }, 'phelloderm');
  c.s('rect', { x: 348, y: ya, width: 4, height: ha, class: 'dr-meri' }, 'phellogen');
  c.s('rect', { x: 352, y: ya, width: 22, height: ha, class: 'dr-cork' }, 'phellem');
  c.s('rect', { x: 374, y: ya, width: 6, height: ha, class: 'dr-dead' }, 'stem-epidermis');
  c.text(ctx.T('outside', 'extérieur'), 386, ya + ha / 2 + 4);
  c.text(ctx.T('centre', 'centre'), 10, ya - 6);
  c.label('secondary-phloem', 178, ya - 30, { anchor: 'start', to: [180, ya + 3] });
  c.brace('periderm', 340, ya - 4, 374, ya - 4, -1, { gap: 2 });
  c.brace('cortex', 202, ya + ha + 4, 340, ya + ha + 4, 1, { gap: 0 });
  c.label('vascular-cambium', 150, ya - 14, { anchor: 'end', to: [153, ya] });
  c.brace('bark', 156, ya + ha + 34, 380, ya + ha + 34, 1, { gap: 0 });
  c.brace('wood', 50, ya + ha + 4, 150, ya + ha + 4, 1, { gap: 0 });

  // Strip B: an old trunk, the cortex is gone, the rhytidome builds up.
  const yb = 290, hb = 64;
  c.text(ctx.T('Old trunk, several years (radial strip)', 'Vieux tronc, plusieurs années (bande radiale)'), 10, yb - 70, { cls: 'dr-lbl' });
  c.s('rect', { x: 10, y: yb, width: 18, height: hb, class: 'dr-pith' }, 'pith');
  // Growth rings: earlywood (wide pores) then latewood (dense); inner rings are heartwood.
  const rings = [[28, 76], [76, 124], [124, 172], [172, 220]];
  rings.forEach(([x0, x1], i) => {
    const part = i < 2 ? 'heartwood' : 'sapwood';
    c.s('rect', { x: x0, y: yb, width: x1 - x0, height: hb, class: i < 2 ? 'dr-xylem dr-heart' : 'dr-xylem' }, part);
    c.s('rect', { x: x1 - 12, y: yb, width: 12, height: hb, class: 'dr-late' }, 'latewood');
    for (let x = x0 + 7; x < x1 - 14; x += 11) for (const y of [yb + 12, yb + 28, yb + 52]) c.s('circle', { cx: x + ((y / 2) % 4), cy: y, r: 3.2, class: 'dr-vessel' });
  });
  c.s('rect', { x: 28, y: yb + 37, width: 198, height: 6, class: 'dr-ray' }, 'wood-ray');
  c.s('rect', { x: 220, y: yb, width: 6, height: hb, class: 'dr-meri' }, 'vascular-cambium');
  c.s('rect', { x: 226, y: yb, width: 64, height: hb, class: 'dr-phloem' }, 'secondary-phloem');
  c.s('rect', { x: 290, y: yb, width: 6, height: hb, class: 'dr-cell' }, 'phelloderm');
  c.s('rect', { x: 296, y: yb, width: 3, height: hb, class: 'dr-meri' }, 'phellogen');
  c.s('rect', { x: 299, y: yb, width: 13, height: hb, class: 'dr-cork' }, 'phellem');
  // Rhytidome: dead phloem and old periderms, cracked.
  c.s('path', { d: `M312,${yb} H452 L446,${yb + 14} L458,${yb + 30} L444,${yb + 46} L454,${yb + hb} H312 Z`, class: 'dr-dead' }, 'rhytidome');
  for (const x of [340, 374, 410]) c.s('path', { d: `M${x},${yb} Q${x + 6},${yb + hb / 2} ${x - 2},${yb + hb}`, class: 'dr-cork-line' });
  c.s('path', { d: `M436,${yb + 6} L426,${yb + 22} L438,${yb + 38}`, class: 'dr-thin' });
  c.brace('growth-ring', 124, yb - 4, 172, yb - 4, -1, { gap: 0 });
  c.label('latewood', 200, yb - 40, { anchor: 'end', to: [214, yb + 3] });
  c.label('vascular-cambium', 226, yb - 40, { anchor: 'start', to: [223, yb] });
  c.brace('periderm', 290, yb - 4, 312, yb - 4, -1, { gap: 0 });
  c.label('wood-ray', 14, yb - 14, { to: [40, yb + 40] });
  c.brace('heartwood', 28, yb + hb + 4, 124, yb + hb + 4, 1, { gap: 0 });
  c.brace('sapwood', 124, yb + hb + 4, 220, yb + hb + 4, 1, { gap: 0 });
  c.brace('inner-bark', 226, yb + hb + 4, 299, yb + hb + 4, 1, { gap: 0 });
  c.brace('rhytidome', 299, yb + hb + 4, 456, yb + hb + 4, 1, { gap: 0 });
  c.brace('bark', 226, yb + hb + 38, 456, yb + hb + 38, 1, { gap: 0 });
  c.brace('wood', 28, yb + hb + 38, 220, yb + hb + 38, 1, { gap: 0 });
  return c.root;
}

function periderm(ctx) {
  const c = canvas(ctx, 540, 290, ctx.T('Periderm with a lenticel, cross-section', 'Périderme avec une lenticelle, coupe transversale'));
  const x0 = 190, x1 = 440, cw = 25;
  c.text(ctx.T('outside', 'extérieur'), x0, 20);
  // Phellem: radial files of flat dead cells; the lenticel interrupts them.
  const lx0 = 340, lx1 = 415;
  for (let row = 0; row < 6; row++) for (let x = x0; x < x1; x += cw) {
    if (x >= lx0 && x < lx1) continue;
    c.s('rect', { x, y: 40 + row * 12, width: cw, height: 12, class: 'dr-cork' }, 'phellem');
  }
  // Lenticel: loose rounded cells with air spaces, bulging out.
  const lm = (lx0 + lx1) / 2;
  c.s('path', { d: `M${lx0},112 L${lx0},40 Q${lm},4 ${lx1},40 L${lx1},112 Z`, class: 'dr-air' }, 'lenticel');
  for (const [dx, y] of [[-26, 102], [-9, 100], [9, 102], [26, 100], [-18, 82], [0, 80], [18, 82], [-26, 62], [-8, 60], [10, 62], [27, 62], [-16, 42], [3, 40], [20, 42], [-4, 22]])
    c.s('circle', { cx: lm + dx, cy: y, r: 8, class: 'dr-cork' }, 'lenticel');
  // Phellogen: one layer of thin, flat dividing cells.
  for (let x = x0; x < x1; x += cw) c.s('rect', { x, y: 112, width: cw, height: 7, class: 'dr-meri' }, 'phellogen');
  // Phelloderm: two layers of living cells, in the same radial files.
  for (let row = 0; row < 2; row++) for (let x = x0; x < x1; x += cw) {
    c.s('rect', { x, y: 119 + row * 18, width: cw, height: 18, class: 'dr-cell' }, 'phelloderm');
    c.s('circle', { cx: x + cw / 2, cy: 128 + row * 18, r: 2.4, class: 'dr-nucleus' });
  }
  // Below: cortex (or secondary phloem in older stems).
  for (let x = x0 + 12; x < x1; x += 30) for (const [y, dx] of [[176, 0], [204, 15], [232, 0]]) if (x + dx < x1 - 8) c.s('circle', { cx: x + dx, cy: y, r: 13, class: 'dr-ground' }, 'cortex');
  c.text(ctx.T('inside', 'intérieur'), x0, 272);
  c.label('phellem', 178, 78, { anchor: 'end', to: [x0 + 4, 74] });
  c.label('phellogen', 178, 112, { anchor: 'end', to: [x0 + 4, 116] });
  c.label('phelloderm', 178, 146, { anchor: 'end', to: [x0 + 4, 138] });
  c.label('cortex', 178, 210, { anchor: 'end', to: [x0 + 6, 206] });
  c.label('lenticel', 300, 18, { anchor: 'end', to: [lm - 20, 30] });
  c.brace('periderm', 446, 40, 446, 155, 1, { gap: 0 });
  return c.root;
}

function leafSection(ctx) {
  const c = canvas(ctx, 540, 330, ctx.T('Leaf blade of a eudicot, cross-section', 'Limbe de eudicotylédone, coupe transversale'));
  const x0 = 110, x1 = 370;
  // Upper cuticle and epidermis
  c.s('rect', { x: x0, y: 26, width: x1 - x0, height: 4, class: 'dr-cuticle' }, 'cuticle');
  for (let x = x0; x < x1; x += 26) c.s('rect', { x, y: 30, width: 26, height: 18, class: 'dr-cell' }, 'leaf-epidermis');
  // Palisade: tall cells with chloroplasts
  for (let x = x0 + 1; x < x1 - 14; x += 17) {
    c.s('rect', { x, y: 50, width: 15, height: 66, rx: 6, class: 'dr-chl' }, 'palisade');
    for (let y = 58; y < 112; y += 11) { c.s('circle', { cx: x + 4, cy: y, r: 2, class: 'dr-chl-solid' }, 'chloroplast'); c.s('circle', { cx: x + 11, cy: y + 5, r: 2, class: 'dr-chl-solid' }, 'chloroplast'); }
  }
  // Spongy: loose cells with air spaces (none above the stoma: substomatal cavity)
  c.s('rect', { x: x0, y: 118, width: x1 - x0, height: 122, class: 'dr-air' }, 'intercellular-space');
  const spongy = [[124, 132], [150, 128], [212, 136], [236, 130], [262, 134], [290, 128], [318, 134], [346, 130], [126, 164], [204, 168], [232, 160], [300, 160], [326, 166], [354, 160], [130, 198], [200, 200], [226, 196], [322, 198], [350, 196], [126, 228], [206, 228], [240, 226], [318, 228], [350, 228], [292, 192]];
  for (const [x, y] of spongy) c.s('ellipse', { cx: x, cy: y, rx: 13, ry: 10, class: 'dr-chl' }, 'spongy');
  // Vein: bundle sheath ring, xylem above (towards the upper side), phloem below
  const vx = 166, vy = 176;
  for (let a = 0; a < 360; a += 30) { const [x, y] = polar(vx, vy, 30, a); c.s('circle', { cx: x, cy: y, r: 8, class: 'dr-cell' }, 'bundle-sheath'); }
  c.s('path', { d: `M${vx - 22},${vy} A22,22 0 0 1 ${vx + 22},${vy} Z`, class: 'dr-xylem' }, 'xylem');
  for (const [dx, dy] of [[-9, -8], [5, -12], [10, -4], [-2, -3]]) c.s('circle', { cx: vx + dx, cy: vy + dy, r: 3.3, class: 'dr-vessel' }, 'xylem');
  c.s('path', { d: `M${vx - 22},${vy} A22,22 0 0 0 ${vx + 22},${vy} Z`, class: 'dr-phloem' }, 'phloem');
  // Lower epidermis with a stoma and its substomatal cavity
  const sx = 262;
  for (let x = x0; x < x1; x += 26) if (x + 26 < sx - 18 || x > sx + 18) c.s('rect', { x, y: 240, width: 26, height: 16, class: 'dr-cell' }, 'leaf-epidermis');
  c.s('rect', { x: sx - 23, y: 240, width: 6, height: 16, class: 'dr-cell' }, 'leaf-epidermis');
  c.s('rect', { x: sx + 17, y: 240, width: 6, height: 16, class: 'dr-cell' }, 'leaf-epidermis');
  c.s('path', { d: `M${sx - 26},${238} Q${sx},200 ${sx + 26},238 Z`, class: 'dr-air-strong' }, 'substomatal-cavity');
  c.s('ellipse', { cx: sx - 9, cy: 248, rx: 8, ry: 7, class: 'dr-chl' }, 'guard-cell');
  c.s('ellipse', { cx: sx + 9, cy: 248, rx: 8, ry: 7, class: 'dr-chl' }, 'guard-cell');
  c.s('rect', { x: x0, y: 256, width: x1 - x0, height: 3, class: 'dr-cuticle' }, 'cuticle');
  // Left labels
  c.brace('mesophyll', 104, 50, 104, 238, -1, { gap: 2 });
  c.label('bundle-sheath', 100, 112, { anchor: 'end', to: [vx - 26, vy - 18] });
  c.label('xylem', 100, 190, { anchor: 'end', to: [vx - 12, vy - 8] });
  c.label('phloem', 100, 226, { anchor: 'end', to: [vx - 10, vy + 10] });
  c.label('leaf-vein', 100, 290, { anchor: 'end', to: [vx, vy + 34] });
  // Right labels
  c.label('cuticle', 380, 24, { to: [x1 - 4, 28] });
  c.label('leaf-epidermis', 380, 46, { to: [x1 - 6, 40] });
  c.label('palisade', 380, 82, { to: [x1 - 10, 82] });
  c.label('chloroplast', 380, 108, { to: [x1 - 13, 104] });
  c.label('spongy', 380, 146, { to: [354, 160] });
  c.label('intercellular-space', 380, 184, { to: [338, 182] });
  c.label('substomatal-cavity', 380, 216, { to: [sx + 6, 228] });
  c.label('guard-cell', 380, 262, { to: [sx + 12, 250] });
  c.label('stoma', 380, 290, { to: [sx, 254] });
  c.label('stomatal-pore', 262, 316, { anchor: 'middle', to: [sx, 257] });
  return c.root;
}

function leafParts(ctx) {
  const c = canvas(ctx, 480, 320, ctx.T('A simple leaf on its stem, and a compound leaf', 'Une feuille simple sur sa tige, et une feuille composée'));
  c.s('path', { d: 'M56,10 L56,310 L64,310 L64,10 Z', class: 'dr-chl' }, 'stem');
  c.s('ellipse', { cx: 60, cy: 236, rx: 7, ry: 2.6, class: 'dr-node' }, 'node');
  // Leaf base with stipules, petiole, blade with veins
  c.s('path', { d: 'M64,232 C68,228 74,230 78,234 C74,238 68,238 64,236 Z', class: 'dr-chl' }, 'leaf-base');
  c.s('path', { d: 'M70,231 C70,214 80,206 90,204 C88,216 82,226 72,232 Z', class: 'dr-chl' }, 'stipule');
  c.s('path', { d: 'M74,238 C84,246 96,248 104,246 C96,240 86,236 76,236 Z', class: 'dr-chl' }, 'stipule');
  c.s('path', { d: 'M76,234 Q110,222 140,206', class: 'dr-petiole' }, 'petiole');
  const blade = 'M140,206 C170,150 260,92 410,70 C362,140 270,214 140,206 Z';
  c.s('path', { d: blade, class: 'dr-chl' }, 'lamina');
  c.s('path', { d: 'M140,206 Q270,150 408,72', class: 'dr-vein-main' }, 'midrib');
  // Secondary veins leave the midrib towards the margins, angled towards the tip.
  for (const [t, up, down] of [[0.2, 34, 30], [0.4, 42, 36], [0.6, 36, 30], [0.8, 22, 18]]) {
    const x = 140 + 268 * t, y = 206 - 134 * t;
    const [ux, uy] = [0.397 * up, -0.918 * up], [lx, ly] = [0.973 * down, 0.232 * down];
    c.s('path', { d: `M${r1(x)},${r1(y)} q${r1(ux * 0.3)},${r1(uy * 0.6)} ${r1(ux)},${r1(uy)}`, class: 'dr-vein' }, 'leaf-vein');
    c.s('path', { d: `M${r1(x)},${r1(y)} q${r1(lx * 0.6)},${r1(ly * 0.2)} ${r1(lx)},${r1(ly)}`, class: 'dr-vein' }, 'leaf-vein');
  }
  c.s('path', { d: 'M64,228 C66,220 71,218 74,219 C73,224 69,228 64,228 Z', class: 'dr-chl' }, 'axillary-bud');
  // Compound leaf (inset): rachis and leaflets
  c.s('rect', { x: 290, y: 196, width: 186, height: 118, rx: 10, class: 'dr-inset' });
  c.s('path', { d: 'M310,300 Q380,260 455,214', class: 'dr-petiole' }, 'leaf-compound');
  for (const [x, y, s] of [[352, 276, 1], [386, 256, 1], [418, 236, 1], [352, 276, -1], [386, 256, -1], [418, 236, -1]]) {
    const d = s > 0 ? `M${x},${y} c-6,-16 2,-30 14,-34 c4,14 -2,28 -14,34 Z` : `M${x},${y} c16,4 30,0 36,-10 c-14,-6 -28,-2 -36,10 Z`;
    c.s('path', { d, class: 'dr-chl' }, 'leaflet');
  }
  c.s('path', { d: 'M455,214 c4,-14 16,-22 22,-22 c-2,12 -10,20 -22,22 Z', class: 'dr-chl' }, 'leaflet');
  c.label('lamina', 300, 40, { to: [300, 112] });
  c.label('midrib', 420, 110, { anchor: 'end', to: [372, 92] });
  c.label('leaf-vein', 210, 60, { to: [262, 120] });
  c.label('petiole', 150, 260, { to: [110, 222] });
  c.label('stipule', 100, 196, { to: [84, 210] });
  c.label('leaf-base', 100, 286, { to: [72, 238] });
  c.label('axillary-bud', 76, 170, { anchor: 'start', to: [70, 222] });
  c.label('leaf-compound', 300, 214, { cls: 'dr-lbl-sm' });
  c.label('leaflet', 440, 300, { anchor: 'end', to: [398, 258], cls: 'dr-lbl-sm' });
  return c.root;
}

function stomaFace(ctx) {
  const c = canvas(ctx, 480, 300, ctx.T('A stoma seen from the leaf surface', 'Un stomate vu de la surface de la feuille'));
  const cx = 200, cy = 150;
  c.s('rect', { x: 20, y: 20, width: 360, height: 260, class: 'dr-cell' }, 'pavement-cell');
  // Jigsaw walls of the pavement cells
  const walls = [[20, 90, 120, 96], [120, 96, 120, 20], [270, 20, 280, 100], [280, 100, 380, 92], [20, 210, 118, 204], [118, 204, 116, 280], [282, 204, 290, 280], [282, 204, 380, 214], [120, 96, 150, 92], [250, 92, 280, 100], [118, 204, 150, 208], [250, 208, 282, 204]];
  for (const [a, b, x, y] of walls) c.s('path', { d: wavy(a, b, x, y, 3, 3), class: 'dr-line' });
  // Subsidiary cells (in many species), then the two guard cells around the pore
  c.s('path', { d: 'M150,92 C120,120 120,180 150,208 L160,208 C140,180 140,120 160,92 Z', class: 'dr-subs' }, 'subsidiary-cell');
  c.s('path', { d: 'M250,92 C280,120 280,180 250,208 L240,208 C260,180 260,120 240,92 Z', class: 'dr-subs' }, 'subsidiary-cell');
  c.s('path', { d: 'M150,92 H250 M150,208 H250', class: 'dr-line' });
  const gl = `M${cx},${cy - 56} A46,56 0 0 0 ${cx},${cy + 56} L${cx},${cy + 40} A10,40 0 0 1 ${cx},${cy - 40} Z`;
  const gr = `M${cx},${cy - 56} A46,56 0 0 1 ${cx},${cy + 56} L${cx},${cy + 40} A10,40 0 0 0 ${cx},${cy - 40} Z`;
  c.s('path', { d: gl, class: 'dr-chl' }, 'guard-cell');
  c.s('path', { d: gr, class: 'dr-chl' }, 'guard-cell');
  c.s('ellipse', { cx, cy, rx: 10, ry: 40, class: 'dr-air-strong' }, 'stomatal-pore');
  for (const [x, y] of [[172, 118], [168, 140], [170, 166], [176, 186], [228, 118], [232, 140], [230, 166], [224, 186]]) c.s('ellipse', { cx: x, cy: y, rx: 4, ry: 2.6, class: 'dr-chl-solid' }, 'chloroplast');
  c.s('circle', { cx: 176, cy: 150, r: 5, class: 'dr-nucleus' }, 'nucleus');
  c.s('circle', { cx: 224, cy: 150, r: 5, class: 'dr-nucleus' }, 'nucleus');
  c.s('ellipse', { cx, cy, rx: 62, ry: 70, class: 'dr-hl-ring', style: ctx.hl === 'stoma' ? null : 'display:none' });
  c.label('stomatal-pore', 392, 150, { to: [cx + 4, cy] });
  c.label('guard-cell', 392, 112, { to: [cx + 30, cy - 30] });
  c.label('subsidiary-cell', 392, 196, { to: [262, 180] });
  c.label('pavement-cell', 392, 250, { to: [330, 250] });
  c.label('stoma', 392, 60, { to: [cx + 40, cy - 52] });
  c.label('chloroplast', 10, 296, { to: [168, 168], cls: 'dr-lbl-sm' });
  return c.root;
}

function rootTip(ctx) {
  const c = canvas(ctx, 480, 430, ctx.T('Root tip, lengthwise section', 'Extrémité de racine, coupe longitudinale'));
  const L = 118, R = 182, mid = 150;
  // Root hair zone: mature cells, hairs from the epidermis
  c.s('rect', { x: L, y: 14, width: R - L, height: 160, class: 'dr-ground' }, 'root-hair-zone');
  c.s('rect', { x: mid - 12, y: 14, width: 24, height: 160, class: 'dr-xylem' }, 'stele');
  c.s('rect', { x: L, y: 14, width: 8, height: 160, class: 'dr-cell' }, 'rhizodermis');
  c.s('rect', { x: R - 8, y: 14, width: 8, height: 160, class: 'dr-cell' }, 'rhizodermis');
  for (const y of [30, 52, 76, 100, 124, 148]) {
    c.s('path', { d: `M${L},${y} q-20,-4 -46,${-10 + (y % 3) * 4}`, class: 'dr-hair' }, 'root-hair');
    c.s('path', { d: `M${R},${y + 10} q22,-4 46,${-8 + (y % 4) * 3}`, class: 'dr-hair' }, 'root-hair');
  }
  // Elongation zone: long cells
  c.s('rect', { x: L, y: 174, width: R - L, height: 106, class: 'dr-ground' }, 'elongation-zone');
  for (let x = L; x < R; x += 16) for (let y = 174; y < 280; y += 35) c.s('rect', { x, y, width: 16, height: 35, class: 'dr-thin' });
  // Meristem: small, dense cells, quiescent centre at its base
  c.s('rect', { x: L, y: 280, width: R - L, height: 62, class: 'dr-meri-zone' }, 'root-meristem');
  for (let x = L; x < R; x += 8) for (let y = 280; y < 342; y += 8) c.s('rect', { x, y, width: 8, height: 8, class: 'dr-thin' });
  c.s('ellipse', { cx: mid, cy: 343, rx: 12, ry: 6, class: 'dr-qc' }, 'quiescent-centre');
  // Root cap with the columella (statocytes with amyloplasts)
  c.s('path', { d: `M${L},344 L${R},344 C${R + 4},380 ${mid + 22},408 ${mid},410 C${mid - 22},408 ${L - 4},380 ${L},344 Z`, class: 'dr-cap' }, 'root-cap');
  c.s('rect', { x: mid - 12, y: 350, width: 24, height: 46, class: 'dr-cell' }, 'columella');
  for (let y = 354; y < 396; y += 11) { c.s('path', { d: `M${mid - 12},${y + 7} H${mid + 12}`, class: 'dr-thin' }); for (const dx of [-6, 0, 6]) c.s('circle', { cx: mid + dx, cy: y + 5, r: 1.8, class: 'dr-amylo' }, 'amyloplast'); }
  for (const [x, y] of [[106, 386], [96, 404], [196, 388]]) c.s('ellipse', { cx: x, cy: y, rx: 6, ry: 4, class: 'dr-cap' });
  c.brace('root-hair-zone', 250, 14, 250, 174, 1, { gap: 2 });
  c.brace('elongation-zone', 250, 176, 250, 280, 1, { gap: 2 });
  c.brace('root-meristem', 250, 282, 250, 342, 1, { gap: 2 });
  c.brace('root-cap', 250, 346, 250, 410, 1, { gap: 2 });
  c.brace('root-tip', 380, 176, 380, 410, 1, { gap: 2 });
  c.label('root-hair', 64, 40, { anchor: 'end', to: [80, 36] });
  c.label('rhizodermis', 100, 140, { anchor: 'end', to: [L + 4, 140] });
  c.label('stele', 100, 196, { anchor: 'end', to: [mid - 6, 160] });
  c.label('quiescent-centre', 100, 320, { anchor: 'end', to: [mid - 10, 342] });
  c.label('columella', 100, 360, { anchor: 'end', to: [mid - 8, 372] });
  return c.root;
}

function rootSection(ctx) {
  const c = canvas(ctx, 480, 420, ctx.T('Young root of a eudicot, cross-section', 'Jeune racine de eudicotylédone, coupe transversale'));
  const cx = 186, cy = 214;
  c.s('circle', { cx, cy, r: 168, class: 'dr-ground' }, 'root-cortex');
  for (const a of [200, 218, 236]) { const [x1, y1] = polar(cx, cy, 168, a); const [x2, y2] = polar(cx, cy, 214, a - 4); c.s('path', { d: `M${x1},${y1} Q${(x1 + x2) / 2},${(y1 + y2) / 2 - 6} ${x2},${y2}`, class: 'dr-hair' }, 'root-hair'); }
  c.s('circle', { cx, cy, r: 165, class: 'dr-epi' }, 'rhizodermis');
  c.s('circle', { cx, cy, r: 157, class: 'dr-exo' }, 'exodermis');
  for (const [r, step] of [[146, 8.5], [130, 9], [114, 10], [98, 11.5]]) for (let a = 0; a < 360; a += step) { const [x, y] = polar(cx, cy, r, a + r); c.s('circle', { cx: x, cy: y, r: 6.6, class: 'dr-thin' }); }
  // Endodermis: one ring of cells, Casparian strip on the radial walls
  c.s('path', { d: sector(cx, cy, 70, 80, 0, 359.9), class: 'dr-endo' }, 'endodermis');
  for (let a = 0; a < 360; a += 12) {
    const [x1, y1] = polar(cx, cy, 70, a), [x2, y2] = polar(cx, cy, 80, a);
    c.s('path', { d: `M${x1},${y1} L${x2},${y2}`, class: 'dr-thin' });
    if (Math.abs(a - 84) > 8) { const [x, y] = polar(cx, cy, 75, a); c.s('circle', { cx: x, cy: y, r: 2, class: 'dr-casp' }, 'casparian-strip'); }
  }
  c.s('path', { d: sector(cx, cy, 70, 80, 84, 96), class: 'dr-passage' }, 'passage-cell');
  // Pericycle and stele: xylem star with four arms, phloem between
  c.s('circle', { cx, cy, r: 70, class: 'dr-cell' }, 'stele');
  c.s('path', { d: sector(cx, cy, 62, 70, 0, 359.9), class: 'dr-peri' }, 'pericycle');
  const star = [];
  for (let k = 0; k < 8; k++) { const a = k * 45; star.push(polar(cx, cy, k % 2 ? 16 : 58, a)); }
  c.s('path', { d: `M${star.map((p) => p.join(',')).join(' L')} Z`, class: 'dr-xylem' }, 'xylem');
  for (let k = 0; k < 4; k++) { const [x, y] = polar(cx, cy, 44, k * 90 + 45); c.s('ellipse', { cx: x, cy: y, rx: 11, ry: 9, class: 'dr-phloem' }, 'phloem'); }
  // Inset: three endodermis cells, the Casparian strip as a band in the radial walls
  const ix = 362, iy = 300;
  c.s('rect', { x: ix - 8, y: iy - 18, width: 120, height: 112, rx: 8, class: 'dr-inset' });
  for (let k = 0; k < 3; k++) c.s('rect', { x: ix + k * 34, y: iy + 6, width: 34, height: 56, class: 'dr-cell' }, 'endodermis');
  for (let k = 0; k <= 3; k++) c.s('rect', { x: ix + k * 34 - 2, y: iy + 26, width: 4, height: 14, class: 'dr-casp' }, 'casparian-strip');
  c.text(ctx.T('enlarged', 'agrandi'), ix, iy - 4);
  c.label('root-hair', 8, 22, { to: polar(cx, cy, 206, 228) });
  c.label('rhizodermis', 372, 36, { to: polar(cx, cy, 165, -60) });
  c.label('exodermis', 372, 64, { to: polar(cx, cy, 157, -42) });
  c.label('root-cortex', 372, 104, { to: polar(cx, cy, 122, -28) });
  c.label('endodermis', 372, 150, { to: polar(cx, cy, 77, -16) });
  c.label('pericycle', 372, 178, { to: polar(cx, cy, 66, -6) });
  c.label('phloem', 372, 206, { to: polar(cx, cy, 44, 45) });
  c.label('xylem', 372, 232, { to: polar(cx, cy, 40, 90) });
  c.label('passage-cell', 372, 262, { to: polar(cx, cy, 75, 90) });
  c.label('casparian-strip', 362, 408, { to: [ix + 34, iy + 40], cls: 'dr-lbl-sm' });
  c.label('stele', 30, 404, { to: [cx - 40, cy + 40] });
  return c.root;
}

function flower(ctx) {
  const c = canvas(ctx, 500, 430, ctx.T('A flower cut lengthwise (half-flower)', 'Une fleur coupée en long (demi-fleur)'));
  const cx = 236;
  c.s('rect', { x: cx - 5, y: 330, width: 10, height: 92, class: 'dr-chl' }, 'pedicel');
  c.s('path', { d: `M${cx - 5},332 C${cx - 26},330 ${cx - 30},316 ${cx - 26},310 H${cx + 26} C${cx + 30},316 ${cx + 26},330 ${cx + 5},332 Z`, class: 'dr-chl' }, 'receptacle');
  // Sepals and petals
  c.s('path', { d: `M${cx - 24},312 C${cx - 70},306 ${cx - 112},282 ${cx - 120},262 C${cx - 92},266 ${cx - 52},282 ${cx - 20},306 Z`, class: 'dr-chl' }, 'sepal');
  c.s('path', { d: `M${cx + 24},312 C${cx + 70},306 ${cx + 112},282 ${cx + 120},262 C${cx + 92},266 ${cx + 52},282 ${cx + 20},306 Z`, class: 'dr-chl' }, 'sepal');
  c.s('path', { d: `M${cx - 20},308 C${cx - 80},270 ${cx - 170},200 ${cx - 156},150 C${cx - 120},170 ${cx - 56},236 ${cx - 14},302 Z`, class: 'dr-flower' }, 'petal');
  c.s('path', { d: `M${cx + 20},308 C${cx + 80},270 ${cx + 170},200 ${cx + 156},150 C${cx + 120},170 ${cx + 56},236 ${cx + 14},302 Z`, class: 'dr-flower' }, 'petal');
  // Stamens: filament and anther
  for (const s of [-1, 1]) for (const [dx, top] of [[44, 178], [74, 204]]) {
    c.s('path', { d: `M${cx + s * 14},308 Q${cx + s * (dx - 6)},250 ${cx + s * dx},${top + 12}`, class: 'dr-filament' }, 'filament');
    c.s('ellipse', { cx: cx + s * dx, cy: top, rx: 6, ry: 13, class: 'dr-anther' }, 'anther');
  }
  // Pistil: ovary with ovules, style, stigma; nectaries at its base
  c.s('path', { d: `M${cx - 4},246 L${cx - 4},150 L${cx + 4},150 L${cx + 4},246 Z`, class: 'dr-pistil' }, 'style');
  c.s('path', { d: `M${cx - 16},150 C${cx - 18},136 ${cx - 6},132 ${cx},140 C${cx + 6},132 ${cx + 18},136 ${cx + 16},150 Z`, class: 'dr-pistil' }, 'stigma');
  c.s('path', { d: `M${cx},244 C${cx - 34},244 ${cx - 30},310 ${cx},310 C${cx + 30},310 ${cx + 34},244 ${cx},244 Z`, class: 'dr-pistil' }, 'ovary');
  c.s('path', { d: `M${cx},254 C${cx - 18},256 ${cx - 18},300 ${cx},300 C${cx + 18},300 ${cx + 18},256 ${cx},254 Z`, class: 'dr-air' });
  c.s('path', { d: `M${cx},256 V298`, class: 'dr-line' }, 'placenta');
  for (const y of [264, 278, 292]) for (const s of [-1, 1]) c.s('ellipse', { cx: cx + s * 7, cy: y, rx: 5, ry: 4, class: 'dr-ovule' }, 'ovule');
  for (const s of [-1, 1]) c.s('ellipse', { cx: cx + s * 22, cy: 309, rx: 6, ry: 3.5, class: 'dr-nectary' }, 'nectary');
  if (ctx.hl === 'pistil' || ctx.hl === 'carpel' || ctx.hl === 'gynoecium') c.s('path', { d: `M${cx - 34},312 C${cx - 40},240 ${cx - 22},140 ${cx},128 C${cx + 22},140 ${cx + 40},240 ${cx + 34},312 Z`, class: 'dr-hl-ring' });
  if (ctx.hl === 'stamen' || ctx.hl === 'androecium') c.s('path', { d: `M${cx - 86},214 C${cx - 90},180 ${cx - 70},150 ${cx - 40},158 C${cx - 30},230 ${cx - 20},300 ${cx - 8},312 Z`, class: 'dr-hl-ring' });
  c.label('stigma', 362, 120, { to: [cx + 10, 140] });
  c.label('anther', 362, 162, { to: [cx + 50, 176] });
  c.label('petal', 362, 196, { to: [cx + 126, 200] });
  c.label('style', 362, 222, { to: [cx + 4, 200] });
  c.label('filament', 362, 248, { to: [cx + 60, 250] });
  c.label('ovary', 362, 274, { to: [cx + 24, 272] });
  c.label('ovule', 362, 298, { to: [cx + 12, 292] });
  c.label('sepal', 362, 322, { to: [cx + 96, 278] });
  c.label('nectary', 362, 346, { to: [cx + 26, 310] });
  c.label('receptacle', 362, 370, { to: [cx + 20, 322] });
  c.label('pedicel', 362, 400, { to: [cx + 5, 392] });
  c.label('stamen', 100, 120, { anchor: 'end', to: [cx - 72, 190] });
  c.label('pistil', 100, 380, { anchor: 'end', to: [cx - 26, 284] });
  c.label('placenta', 100, 410, { anchor: 'end', to: [cx, 290], cls: 'dr-lbl-sm' });
  return c.root;
}

function ovule(ctx) {
  const c = canvas(ctx, 480, 380, ctx.T('An ovule with its embryo sac, lengthwise section', 'Un ovule et son sac embryonnaire, coupe longitudinale'));
  const cx = 200;
  c.s('path', { d: `M${cx - 12},372 L${cx - 10},318 L${cx + 10},318 L${cx + 12},372 Z`, class: 'dr-chl' }, 'funiculus');
  // Outer and inner integuments (open at the top: the micropyle)
  c.s('path', { d: `M${cx - 8},40 C${cx - 120},50 ${cx - 120},322 ${cx},322 C${cx + 120},322 ${cx + 120},50 ${cx + 8},40 L${cx + 8},52 C${cx + 100},64 ${cx + 100},306 ${cx},306 C${cx - 100},306 ${cx - 100},64 ${cx - 8},52 Z`, class: 'dr-integ' }, 'integument');
  c.s('path', { d: `M${cx - 8},58 C${cx - 96},70 ${cx - 96},300 ${cx},300 C${cx + 96},300 ${cx + 96},70 ${cx + 8},58 L${cx + 8},70 C${cx + 80},82 ${cx + 80},286 ${cx},286 C${cx - 80},286 ${cx - 80},82 ${cx - 8},70 Z`, class: 'dr-integ2' }, 'integument');
  c.s('path', { d: `M${cx},72 C${cx - 78},84 ${cx - 78},284 ${cx},284 C${cx + 78},284 ${cx + 78},84 ${cx},72 Z`, class: 'dr-ground' }, 'nucellus');
  // Chalaza: the base, where nucellus and integuments join the funicle
  c.s('path', { d: `M${cx - 30},298 C${cx - 22},322 ${cx + 22},322 ${cx + 30},298 C${cx + 16},288 ${cx - 16},288 ${cx - 30},298 Z`, class: 'dr-hilum' }, 'chalaza');
  // Embryo sac: egg apparatus at the micropylar end, central cell, antipodals
  c.s('path', { d: `M${cx},92 C${cx - 44},96 ${cx - 46},262 ${cx},266 C${cx + 46},262 ${cx + 44},96 ${cx},92 Z`, class: 'dr-cell' }, 'embryo-sac');
  c.s('path', { d: `M${cx - 30},140 C${cx - 30},200 ${cx + 30},200 ${cx + 30},140 C${cx + 34},190 ${cx + 34},236 ${cx},236 C${cx - 34},236 ${cx - 34},190 ${cx - 30},140 Z`, class: 'dr-central' }, 'central-cell');
  c.s('circle', { cx: cx - 6, cy: 196, r: 6, class: 'dr-nucleus' });
  c.s('circle', { cx: cx + 7, cy: 198, r: 6, class: 'dr-nucleus' });
  c.s('path', { d: `M${cx - 14},98 C${cx - 26},108 ${cx - 24},130 ${cx - 10},132 C${cx - 4},120 ${cx - 4},104 ${cx - 14},98 Z`, class: 'dr-syn' }, 'synergid');
  c.s('path', { d: `M${cx + 14},98 C${cx + 26},108 ${cx + 24},130 ${cx + 10},132 C${cx + 4},120 ${cx + 4},104 ${cx + 14},98 Z`, class: 'dr-syn' }, 'synergid');
  c.s('ellipse', { cx, cy: 150, rx: 13, ry: 17, class: 'dr-egg' }, 'egg-cell');
  c.s('circle', { cx, cy: 156, r: 5, class: 'dr-nucleus' });
  for (const [dx, dy] of [[-12, 248], [12, 248], [0, 256]]) c.s('circle', { cx: cx + dx, cy: dy, r: 7, class: 'dr-anti' }, 'antipodal');
  c.label('micropyle', 330, 34, { to: [cx, 50] });
  c.label('synergid', 330, 96, { to: [cx + 14, 112] });
  c.label('egg-cell', 330, 130, { to: [cx + 10, 150] });
  c.label('central-cell', 330, 180, { to: [cx + 24, 210] });
  c.label('embryo-sac', 330, 228, { to: [cx + 40, 228] });
  c.label('antipodal', 330, 260, { to: [cx + 18, 250] });
  c.label('nucellus', 330, 292, { to: [cx + 56, 262] });
  c.label('funiculus', 330, 350, { to: [cx + 11, 350] });
  c.label('integument', 70, 120, { anchor: 'end', to: [cx - 92, 140] });
  c.label('chalaza', 90, 330, { anchor: 'end', to: [cx - 24, 306] });
  return c.root;
}

function seed(ctx) {
  const c = canvas(ctx, 480, 440, ctx.T('A bean seed, outside and opened; a cereal grain cut lengthwise', 'Une graine de haricot, entière et ouverte ; un grain de céréale coupé en long'));
  const kidney = (x, y, s = 1) => `M${x},${y} C${x - 70 * s},${y - 4} ${x - 92 * s},${y + 70} ${x - 30 * s},${y + 92} C${x + 20 * s},${y + 110} ${x + 92 * s},${y + 92} ${x + 92 * s},${y + 40} C${x + 92 * s},${y + 6} ${x + 60 * s},${y - 6} ${x + 30 * s},${y + 14} C${x + 18 * s},${y + 22} ${x + 10 * s},${y + 4} ${x},${y} Z`;
  c.text(ctx.T('outside', 'vue extérieure'), 20, 26, { cls: 'dr-lbl' });
  c.s('path', { d: kidney(90, 50), class: 'dr-seedcoat' }, 'seed-coat');
  c.s('ellipse', { cx: 110, cy: 60, rx: 15, ry: 5, class: 'dr-hilum', transform: 'rotate(18 110 60)' }, 'hilum');
  c.s('circle', { cx: 88, cy: 54, r: 2.4, class: 'dr-micro' }, 'seed-micropyle');
  c.text(ctx.T('opened (one cotyledon removed)', 'ouverte (un cotylédon enlevé)'), 250, 26, { cls: 'dr-lbl' });
  c.s('path', { d: kidney(320, 50), class: 'dr-seedcoat' }, 'seed-coat');
  c.s('path', { d: 'M318,60 C262,62 246,124 290,140 C330,154 398,140 400,96 C402,66 372,58 352,72 C340,80 330,64 318,60 Z', class: 'dr-coty' }, 'cotyledon');
  // Embryo axis on the inner edge: radicle towards the micropyle, hypocotyl, epicotyl and plumule
  c.s('path', { d: 'M318,62 C306,66 300,76 302,84 C306,90 316,88 322,80 Z', class: 'dr-axis' }, 'radicle');
  c.s('path', { d: 'M322,80 C328,86 336,88 342,86 L338,76 C334,76 328,72 326,68 Z', class: 'dr-axis' }, 'hypocotyl');
  c.s('path', { d: 'M342,86 C348,86 352,90 354,96 L348,98 C346,94 344,92 340,92 Z', class: 'dr-axis' }, 'epicotyl');
  c.s('path', { d: 'M354,96 C362,92 372,96 372,104 C364,108 356,104 354,96 Z M354,96 C352,104 356,114 364,116 C366,108 362,100 354,96 Z', class: 'dr-chl' }, 'plumule');
  c.label('hilum', 40, 150, { to: [108, 62] });
  c.label('seed-micropyle', 40, 172, { to: [88, 55] });
  c.label('seed-coat', 40, 194, { to: [70, 140] });
  c.label('cotyledon', 250, 180, { to: [300, 132] });
  c.label('radicle', 470, 40, { anchor: 'end', to: [306, 78] });
  c.label('hypocotyl', 470, 62, { anchor: 'end', to: [334, 80] });
  c.label('epicotyl', 470, 84, { anchor: 'end', to: [346, 92] });
  c.label('plumule', 470, 128, { anchor: 'end', to: [368, 106] });
  c.label('embryo', 470, 160, { anchor: 'end', to: [326, 76] });
  // Cereal grain (caryopsis): fruit wall and seed coat fused, endosperm, embryo at the base
  const gy = 240;
  c.text(ctx.T('cereal grain cut lengthwise', 'grain de céréale coupé en long'), 20, gy, { cls: 'dr-lbl' });
  c.s('path', { d: `M120,${gy + 26} C40,${gy + 30} 30,${gy + 170} 120,${gy + 178} C200,${gy + 182} 230,${gy + 40} 120,${gy + 26} Z`, class: 'dr-seedcoat' }, 'pericarp');
  c.s('path', { d: `M120,${gy + 32} C48,${gy + 36} 40,${gy + 164} 118,${gy + 172} C192,${gy + 174} 222,${gy + 46} 120,${gy + 32} Z`, class: 'dr-endo-sperm' }, 'endosperm');
  c.s('path', { d: `M80,${gy + 140} C70,${gy + 156} 84,${gy + 172} 104,${gy + 170} C112,${gy + 156} 100,${gy + 138} 80,${gy + 140} Z`, class: 'dr-axis' }, 'embryo');
  c.s('path', { d: `M82,${gy + 138} C96,${gy + 130} 112,${gy + 140} 112,${gy + 162}`, class: 'dr-scut' });
  c.label('endosperm', 250, gy + 90, { to: [150, gy + 92] });
  c.label('embryo', 250, gy + 160, { to: [100, gy + 160] });
  c.label('pericarp', 250, gy + 40, { to: [170, gy + 60] });
  c.label('caryopsis', 250, gy + 190, { cls: 'dr-lbl-sm' });
  return c.root;
}

function drupe(ctx) {
  const c = canvas(ctx, 480, 320, ctx.T('A cherry (a drupe) cut lengthwise', 'Une cerise (une drupe) coupée en long'));
  const cx = 200, cy = 180;
  c.s('path', { d: `M${cx},${cy - 112} Q${cx + 10},${cy - 150} ${cx + 30},${cy - 166}`, class: 'dr-petiole' }, 'pedicel');
  c.s('path', { d: `M${cx},${cy - 110} C${cx - 140},${cy - 130} ${cx - 140},${cy + 120} ${cx},${cy + 120} C${cx + 140},${cy + 120} ${cx + 140},${cy - 130} ${cx},${cy - 110} Z`, class: 'dr-exocarp' }, 'exocarp');
  c.s('path', { d: `M${cx},${cy - 104} C${cx - 130},${cy - 122} ${cx - 130},${cy + 112} ${cx},${cy + 112} C${cx + 130},${cy + 112} ${cx + 130},${cy - 122} ${cx},${cy - 104} Z`, class: 'dr-meso' }, 'mesocarp');
  c.s('path', { d: `M${cx},${cy - 56} C${cx - 62},${cy - 54} ${cx - 62},${cy + 60} ${cx},${cy + 62} C${cx + 62},${cy + 60} ${cx + 62},${cy - 54} ${cx},${cy - 56} Z`, class: 'dr-stone' }, 'endocarp');
  c.s('path', { d: `M${cx},${cy - 42} C${cx - 44},${cy - 40} ${cx - 44},${cy + 46} ${cx},${cy + 48} C${cx + 44},${cy + 46} ${cx + 44},${cy - 40} ${cx},${cy - 42} Z`, class: 'dr-seedcoat' }, 'seed');
  c.s('path', { d: `M${cx},${cy - 104} L${cx},${cy - 56}`, class: 'dr-thin' });
  c.label('pedicel', 370, 30, { to: [cx + 24, cy - 160] });
  c.label('exocarp', 370, 80, { to: [cx + 100, cy - 70] });
  c.label('mesocarp', 370, 130, { to: [cx + 90, cy - 20] });
  c.label('endocarp', 370, 190, { to: [cx + 54, cy + 10] });
  c.label('seed', 370, 240, { to: [cx + 20, cy + 20] });
  c.brace('pericarp', 52, cy - 6, 52, cy + 108, -1, { gap: 2 });
  c.label('drupe', 30, 30, { cls: 'dr-brace-lbl' });
  return c.root;
}

function cell(ctx) {
  const c = canvas(ctx, 480, 450, ctx.T('A plant cell (schematic, as seen in an electron micrograph)', 'Une cellule végétale (schéma, comme au microscope électronique)'));
  // Neighbouring cells' walls, middle lamella, this cell's wall
  c.s('rect', { x: 4, y: 4, width: 352, height: 352, class: 'dr-wall' }, null);
  c.s('rect', { x: 14, y: 14, width: 332, height: 332, class: 'dr-ml' }, 'middle-lamella');
  c.s('rect', { x: 16, y: 16, width: 328, height: 328, class: 'dr-wall' }, 'cell-wall');
  // Primary pit field with plasmodesmata in the right wall
  c.s('rect', { x: 338, y: 118, width: 10, height: 52, class: 'dr-pitfield' }, 'primary-pit-field');
  for (const y of [124, 134, 144, 154, 164]) c.s('path', { d: `M330,${y} H354`, class: 'dr-pd' }, 'plasmodesma');
  // Protoplast: plasma membrane, cytoplasm, organelles, vacuole
  c.s('rect', { x: 28, y: 28, width: 304, height: 304, rx: 10, class: 'dr-cyto' }, 'cytoplasm');
  c.s('rect', { x: 28, y: 28, width: 304, height: 304, rx: 10, class: 'dr-pm' }, 'plasma-membrane');
  c.s('path', { d: 'M96,62 H292 Q312,62 312,82 V286 Q312,306 292,306 H150 Q118,306 118,276 V230 Q118,200 92,198 Q70,196 70,170 V88 Q70,62 96,62 Z', class: 'dr-water' }, 'vacuole');
  c.s('path', { d: 'M96,62 H292 Q312,62 312,82 V286 Q312,306 292,306 H150 Q118,306 118,276 V230 Q118,200 92,198 Q70,196 70,170 V88 Q70,62 96,62 Z', class: 'dr-tono' }, 'tonoplast');
  c.s('circle', { cx: 70, cy: 262, r: 34, class: 'dr-nucleus' }, 'nucleus');
  c.s('circle', { cx: 70, cy: 262, r: 30, class: 'dr-thin' }, 'nuclear-envelope');
  c.s('circle', { cx: 70, cy: 262, r: 34, class: 'dr-ne' }, 'nuclear-envelope');
  c.s('circle', { cx: 78, cy: 254, r: 10, class: 'dr-nucleolus' }, 'nucleolus');
  for (const [x, y, rot] of [[150, 44, 0], [240, 44, 0], [322, 120, 90], [322, 236, 90], [210, 320, 0], [44, 120, 90]]) {
    const g = c.g();
    g.setAttribute('transform', `rotate(${rot} ${x} ${y})`);
    c.s('ellipse', { cx: x, cy: y, rx: 20, ry: 8.5, class: 'dr-chl' }, 'chloroplast', g);
    for (const dx of [-10, -2, 6, 13]) c.s('path', { d: `M${x + dx},${y - 4} v8`, class: 'dr-grana' }, null, g);
  }
  for (const [x, y, rot] of [[100, 44, 0], [290, 320, 0], [44, 190, 90], [322, 180, 90]]) {
    const g = c.g();
    g.setAttribute('transform', `rotate(${rot} ${x} ${y})`);
    c.s('ellipse', { cx: x, cy: y, rx: 11, ry: 6, class: 'dr-mito' }, 'mitochondrion', g);
    c.s('path', { d: `M${x - 6},${y + 4} l2,-7 l3,7 l3,-7 l3,7`, class: 'dr-thin' }, null, g);
  }
  c.s('path', { d: 'M108,236 q8,-6 16,0 t16,0 M108,246 q8,-6 16,0 t16,0 M108,256 q8,-6 16,0 t16,0', class: 'dr-er' }, 'er');
  c.s('path', { d: 'M156,318 q12,-8 24,0 M154,312 q14,-9 28,0 M152,306 q16,-10 32,0', class: 'dr-golgi' }, 'golgi');
  if (ctx.hl === 'protoplast') c.s('rect', { x: 25, y: 25, width: 310, height: 310, rx: 12, class: 'dr-hl-ring' });
  c.label('middle-lamella', 368, 24, { to: [346, 30] });
  c.label('cell-wall', 368, 48, { to: [340, 60] });
  c.label('primary-pit-field', 368, 112, { to: [348, 124] });
  c.label('plasmodesma', 368, 150, { to: [352, 154] });
  c.label('plasma-membrane', 368, 200, { to: [332, 206] });
  c.label('chloroplast', 368, 236, { to: [328, 246] });
  c.label('vacuole', 368, 268, { to: [260, 200] });
  c.label('tonoplast', 368, 296, { to: [312, 280] });
  c.label('cytoplasm', 368, 330, { to: [318, 318] });
  c.label('nucleus', 20, 372, { to: [46, 284] });
  c.label('nucleolus', 20, 388, { to: [82, 258] });
  c.label('nuclear-envelope', 20, 404, { to: [100, 270] });
  c.label('er', 20, 420, { to: [126, 256] });
  c.label('golgi', 20, 436, { to: [168, 312] });
  c.label('mitochondrion', 300, 380, { to: [290, 324] });
  c.label('protoplast', 300, 410, { to: [300, 334], cls: 'dr-brace-lbl' });
  return c.root;
}

function pits(ctx) {
  const c = canvas(ctx, 480, 400, ctx.T('Pits between two cells: sections and a face view', 'Ponctuations entre deux cellules : coupes et vue de face'));
  // Panel A: simple pit pair in section
  c.text(ctx.T('simple pit pair, section', 'paire de ponctuations simples, coupe'), 14, 12, { cls: 'dr-lbl' });
  const ax = 100;
  c.s('path', { d: `M${ax - 26},36 H${ax - 2} V96 H${ax - 26} Z M${ax - 26},120 H${ax - 2} V180 H${ax - 26} Z`, class: 'dr-wall2' }, 'secondary-wall');
  c.s('path', { d: `M${ax + 2},36 H${ax + 26} V96 H${ax + 2} Z M${ax + 2},120 H${ax + 26} V180 H${ax + 2} Z`, class: 'dr-wall2' }, 'secondary-wall');
  c.s('rect', { x: ax - 2, y: 36, width: 4, height: 144, class: 'dr-wall' }, 'pit-membrane');
  c.s('rect', { x: ax - 26, y: 96, width: 24, height: 24, class: 'dr-pitcav' }, 'simple-pit');
  c.s('rect', { x: ax + 2, y: 96, width: 24, height: 24, class: 'dr-pitcav' }, 'simple-pit');
  c.text(ctx.T('cell 1', 'cellule 1'), ax - 60, 110);
  c.text(ctx.T('cell 2', 'cellule 2'), ax + 34, 110);
  c.label('simple-pit', 20, 206, { to: [ax - 16, 112] });
  c.label('pit-membrane', 20, 246, { to: [ax, 150] });
  c.label('secondary-wall', 20, 226, { to: [ax - 14, 60], cls: 'dr-lbl-sm' });
  c.brace('pit-pair', ax - 30, 92, ax + 30, 92, -1, { gap: 46 });
  // Panel B: bordered pit pair (conifer) in section, with torus
  c.text(ctx.T('bordered pit pair (conifer), section', 'paire de ponctuations aréolées (conifère), coupe'), 250, 12, { cls: 'dr-lbl' });
  const bx = 350, by = 108;
  for (const s of [-1, 1]) {
    // A secondary wall that arches over the pit chamber: the border, with an aperture in the middle
    const d = `M${bx + s * 30},36 V${by - 40} Q${bx + s * 30},${by - 14} ${bx + s * 6},${by - 8} L${bx + s * 6},${by - 4} Q${bx + s * 38},${by - 8} ${bx + s * 38},${by - 44} V36 Z M${bx + s * 30},180 V${by + 40} Q${bx + s * 30},${by + 14} ${bx + s * 6},${by + 8} L${bx + s * 6},${by + 4} Q${bx + s * 38},${by + 8} ${bx + s * 38},${by + 44} V180 Z`;
    c.s('path', { d, class: 'dr-wall2' }, 'bordered-pit');
  }
  c.s('path', { d: `M${bx - 30},${by - 40} Q${bx},${by - 70} ${bx + 30},${by - 40} V${by + 40} Q${bx},${by + 70} ${bx - 30},${by + 40} Z`, class: 'dr-pitcav' }, 'bordered-pit');
  c.s('rect', { x: bx - 1, y: 36, width: 2, height: by - 66, class: 'dr-wall' });
  c.s('rect', { x: bx - 1, y: by + 30, width: 2, height: 180 - by - 30, class: 'dr-wall' });
  c.s('path', { d: `M${bx},${by - 30} V${by + 30}`, class: 'dr-margo-line' }, 'margo');
  c.s('rect', { x: bx - 3.5, y: by - 9, width: 7, height: 18, rx: 3, class: 'dr-torus' }, 'torus');
  c.label('torus', 440, 116, { anchor: 'end', to: [bx + 3, by] , cls: 'dr-lbl-sm' });
  c.label('pit-aperture', 470, 200, { anchor: 'end', to: [bx + 6, by - 6] });
  c.label('margo', 250, 200, { to: [bx, by - 22] });
  c.label('bordered-pit', 250, 222, { to: [bx - 22, by - 40] });
  // Panel C: face view of a conifer bordered pit, and an aspirated pit
  c.text(ctx.T('face view: torus and margo', 'vue de face : torus et margo'), 14, 262, { cls: 'dr-lbl' });
  const fx = 100, fy = 330;
  c.s('circle', { cx: fx, cy: fy, r: 50, class: 'dr-wall2' }, 'bordered-pit');
  c.s('circle', { cx: fx, cy: fy, r: 44, class: 'dr-pitcav' });
  for (let a = 0; a < 360; a += 15) { const [x1, y1] = polar(fx, fy, 16, a); const [x2, y2] = polar(fx, fy, 44, a + 8); c.s('path', { d: `M${x1},${y1} L${x2},${y2}`, class: 'dr-margo-line' }, 'margo'); }
  c.s('circle', { cx: fx, cy: fy, r: 16, class: 'dr-torus' }, 'torus');
  c.s('circle', { cx: fx, cy: fy, r: 8, class: 'dr-aperture' }, 'pit-aperture');
  c.label('torus', 180, 300, { to: [fx + 12, fy - 10] });
  c.label('margo', 180, 330, { to: [fx + 30, fy] });
  c.label('pit-aperture', 180, 360, { to: [fx + 4, fy + 4] });
  c.text(ctx.T('aspirated: the torus seals the aperture', 'aspirée : le torus bouche l’ouverture'), 286, 262, { cls: 'dr-lbl' });
  const qx = 386, qy = 330;
  for (const s of [-1, 1]) {
    const d = `M${qx + s * 30},278 V${qy - 40} Q${qx + s * 30},${qy - 14} ${qx + s * 6},${qy - 8} L${qx + s * 6},${qy - 4} Q${qx + s * 38},${qy - 8} ${qx + s * 38},${qy - 44} V278 Z M${qx + s * 30},392 V${qy + 40} Q${qx + s * 30},${qy + 14} ${qx + s * 6},${qy + 8} L${qx + s * 6},${qy + 4} Q${qx + s * 38},${qy + 8} ${qx + s * 38},${qy + 44} V392 Z`;
    c.s('path', { d, class: 'dr-wall2' }, 'bordered-pit');
  }
  c.s('path', { d: `M${qx - 30},${qy - 40} Q${qx},${qy - 70} ${qx + 30},${qy - 40} V${qy + 40} Q${qx},${qy + 70} ${qx - 30},${qy + 40} Z`, class: 'dr-pitcav' });
  c.s('path', { d: `M${qx},${qy - 30} Q${qx + 14},${qy} ${qx},${qy + 30}`, class: 'dr-margo-line' }, 'margo');
  c.s('rect', { x: qx + 6, y: qy - 9, width: 7, height: 18, rx: 3, class: 'dr-torus' }, 'torus');
  c.text(ctx.T('air', 'air'), qx - 60, qy + 4);
  c.text(ctx.T('water', 'eau'), qx + 44, qy + 4);
  return c.root;
}

function conducting(ctx) {
  const c = canvas(ctx, 480, 400, ctx.T('Conducting cells of the xylem and phloem', 'Cellules conductrices du xylème et du phloème'));
  c.text(ctx.T('xylem: dead at maturity', 'xylème : mortes à maturité'), 14, 20, { cls: 'dr-lbl' });
  c.text(ctx.T('phloem: living', 'phloème : vivantes'), 300, 20, { cls: 'dr-lbl' });
  // Tracheid: long, narrow, tapered, with bordered pits
  c.s('path', { d: 'M52,36 L64,60 V320 L52,344 L40,320 V60 Z', class: 'dr-xylem' }, 'tracheid');
  for (let y = 80; y < 310; y += 22) { c.s('circle', { cx: 52, cy: y, r: 4, class: 'dr-pitface' }, 'bordered-pit'); c.s('circle', { cx: 52, cy: y, r: 1.5, class: 'dr-aperture' }); }
  // Vessel: three vessel elements end to end, perforation plates open
  for (let k = 0; k < 3; k++) {
    const y = 40 + k * 100;
    c.s('rect', { x: 120, y, width: 64, height: 100, class: 'dr-xylem' }, 'vessel-element');
    for (let yy = y + 16; yy < y + 92; yy += 14) for (const x of [132, 146, 160, 174]) c.s('circle', { cx: x, cy: yy, r: 2.6, class: 'dr-pitface' });
  }
  for (const y of [140, 240]) { c.s('rect', { x: 120, y: y - 3, width: 64, height: 6, class: 'dr-perf' }, 'perforation-plate'); c.s('ellipse', { cx: 152, cy: y, rx: 22, ry: 2.4, class: 'dr-aperture' }); }
  // Xylem fibre
  c.s('path', { d: 'M232,50 L238,80 V300 L232,330 L226,300 V80 Z', class: 'dr-fibre' }, 'xylem-fibre');
  // Sieve tube: two sieve tube elements with a sieve plate; companion cell
  for (let k = 0; k < 2; k++) c.s('rect', { x: 320, y: 40 + k * 150, width: 56, height: 150, class: 'dr-phloem' }, 'sieve-tube-element');
  c.s('rect', { x: 320, y: 187, width: 56, height: 6, class: 'dr-sieve' }, 'sieve-plate');
  for (const x of [328, 338, 348, 358, 368]) c.s('rect', { x: x - 2, y: 187, width: 4, height: 6, class: 'dr-aperture' });
  for (let k = 0; k < 2; k++) {
    c.s('rect', { x: 378, y: 50 + k * 150, width: 16, height: 130, rx: 6, class: 'dr-companion' }, 'companion-cell');
    c.s('ellipse', { cx: 386, cy: 110 + k * 150, rx: 5, ry: 9, class: 'dr-nucleus' });
  }
  c.label('tracheid', 52, 366, { anchor: 'middle', to: [52, 344] });
  c.label('vessel', 152, 366, { anchor: 'middle', to: [152, 340] });
  c.label('vessel-element', 196, 90, { to: [184, 90], cls: 'dr-lbl-sm' });
  c.label('perforation-plate', 196, 146, { to: [184, 140], cls: 'dr-lbl-sm' });
  c.label('xylem-fibre', 232, 366, { anchor: 'middle', to: [232, 330] });
  c.label('sieve-tube-element', 300, 120, { anchor: 'end', to: [322, 120], cls: 'dr-lbl-sm' });
  c.label('sieve-plate', 300, 194, { anchor: 'end', to: [322, 190], cls: 'dr-lbl-sm' });
  c.label('companion-cell', 470, 366, { anchor: 'end', to: [388, 330] });
  c.label('sieve-tube', 348, 386, { anchor: 'middle', to: [348, 340], cls: 'dr-lbl-sm' });
  return c.root;
}

function groundTissues(ctx) {
  const c = canvas(ctx, 480, 230, ctx.T('Three ground tissues in cross-section', 'Trois tissus fondamentaux en coupe transversale'));
  const hex = (x, y, r) => `M${[0, 60, 120, 180, 240, 300].map((a) => polar(x, y, r, a + 30).join(',')).join(' L')} Z`;
  const centres = (ox) => [[ox + 30, 50], [ox + 80, 50], [ox + 130, 50], [ox + 55, 93], [ox + 105, 93], [ox + 30, 136], [ox + 80, 136], [ox + 130, 136]];
  // Parenchyma: thin walls, small intercellular spaces
  for (const [x, y] of centres(0)) c.s('path', { d: hex(x, y, 24), class: 'dr-ground' }, 'parenchyma');
  for (const [x, y] of [[55, 64], [105, 64], [55, 122], [105, 122]]) c.s('circle', { cx: x, cy: y, r: 3.5, class: 'dr-air-strong' }, 'intercellular-space');
  // Collenchyma: walls thickened in the corners
  for (const [x, y] of centres(160)) {
    c.s('path', { d: hex(x, y, 24), class: 'dr-ground' }, 'collenchyma');
    for (let a = 30; a < 390; a += 60) { const [px, py] = polar(x, y, 21, a); c.s('circle', { cx: px, cy: py, r: 5, class: 'dr-wall2' }, 'collenchyma'); }
  }
  // Sclerenchyma: fibres with very thick, lignified walls and a tiny lumen
  for (const [x, y] of centres(320)) {
    c.s('path', { d: hex(x, y, 24), class: 'dr-fibre' }, 'fibre');
    c.s('circle', { cx: x, cy: y, r: 4, class: 'dr-cell' });
    for (let a = 0; a < 360; a += 45) { const [px, py] = polar(x, y, 12, a); c.s('path', { d: `M${polar(x, y, 5, a).join(',')} L${px},${py}`, class: 'dr-thin' }); }
  }
  c.label('parenchyma', 80, 188, { anchor: 'middle' });
  c.label('collenchyma', 240, 188, { anchor: 'middle' });
  c.label('sclerenchyma', 400, 188, { anchor: 'middle' });
  c.label('intercellular-space', 80, 212, { anchor: 'middle', to: [105, 125], cls: 'dr-lbl-sm' });
  c.label('fibre', 400, 212, { anchor: 'middle', to: [400, 160], cls: 'dr-lbl-sm' });
  return c.root;
}

function chloroplast(ctx) {
  const c = canvas(ctx, 480, 250, ctx.T('A chloroplast (schematic)', 'Un chloroplaste (schéma)'));
  const cx = 210, cy = 125;
  c.s('ellipse', { cx, cy, rx: 182, ry: 86, class: 'dr-chl' }, 'chloroplast');
  c.s('ellipse', { cx, cy, rx: 175, ry: 80, class: 'dr-stroma' }, 'stroma');
  const stacks = [[110, 100], [170, 140], [230, 100], [290, 140], [140, 160], [260, 70]];
  for (const [x, y] of stacks) for (let k = 0; k < 6; k++) c.s('rect', { x: x - 16, y: y - 18 + k * 6, width: 32, height: 4.5, rx: 2, class: 'dr-thyl' }, 'granum');
  for (const [a, b] of [[0, 1], [1, 2], [2, 3], [4, 1], [5, 2]]) {
    const [x1, y1] = stacks[a], [x2, y2] = stacks[b];
    c.s('path', { d: `M${x1 + 16},${y1} L${x2 - 16},${y2}`, class: 'dr-thyl-line' }, 'thylakoid');
  }
  c.s('ellipse', { cx: 330, cy: 110, rx: 18, ry: 11, class: 'dr-starch' });
  for (const [x, y] of [[80, 140], [200, 190], [320, 170]]) c.s('circle', { cx: x, cy: y, r: 3.4, class: 'dr-globule' });
  c.label('chloroplast', 400, 26, { to: [330, 52] });
  c.label('stroma', 400, 70, { to: [350, 130] });
  c.label('granum', 400, 210, { to: [306, 146] });
  c.label('thylakoid', 30, 230, { to: [140, 120] });
  return c.root;
}

// ---------------------------------------------------------------- registry
// `for`: entries that show this drawing; the first drawing listing an entry wins.
// ---------------------------------------------------------------- more drawings: forms of organs

/** Panel title in the page language (not linked), centred. */
const ptitle = (c, str, x, y) => c.text(str, x, y, { anchor: 'middle', cls: 'dr-lbl-sm' });
const ellPath = (x, y, rx, ry) => `M${x - rx},${y} A${rx},${ry} 0 1 0 ${x + rx},${y} A${rx},${ry} 0 1 0 ${x - rx},${y} Z`;

function fruitTypes(ctx) {
  const c = canvas(ctx, 590, 520, ctx.T('Fruit types, schematic', 'Types de fruits, schématiques'));
  const X = [62, 178, 294, 410, 526];
  const rows = [
    { y: 92, title: ctx.T('Fleshy fruits', 'Fruits charnus') },
    { y: 262, title: ctx.T('Dry fruits that open when ripe', 'Fruits secs qui s’ouvrent à maturité') },
    { y: 432, title: ctx.T('Dry fruits that stay closed', 'Fruits secs qui restent fermés') },
  ];
  rows.forEach((r) => { c.text(r.title, 8, r.y - 66, { cls: 'dr-lbl-sm' }); c.s('path', { d: `M8,${r.y - 60} H582`, class: 'dr-thin' }); });
  const lab = (id, x, y) => c.label(id, x, y + 64, { anchor: 'middle' });
  // Berry: a tomato cut across, seeds in the flesh, no stone.
  {
    const x = X[0], y = rows[0].y;
    c.s('circle', { cx: x, cy: y, r: 36, class: 'dr-fruit' }, 'berry');
    c.s('circle', { cx: x, cy: y, r: 31, class: 'dr-meso' });
    for (const a of [-90, 30, 150]) {
      const [lx, ly] = polar(x, y, 15, a);
      c.s('ellipse', { cx: lx, cy: ly, rx: 11, ry: 9, transform: `rotate(${a + 90} ${lx} ${ly})`, class: 'dr-cell' });
      for (const k of [-1, 1]) { const [sx, sy] = polar(lx, ly, 5, a + 90 * k); c.s('ellipse', { cx: sx, cy: sy, rx: 2.6, ry: 1.7, class: 'dr-seedcoat' }); }
    }
    lab('berry', x, y);
  }
  // Pome: an apple cut lengthwise; the flesh is the receptacle, the core the endocarp.
  {
    const x = X[1], y = rows[0].y + 4;
    c.s('path', { d: `M${x},${y - 34} Q${x + 2},${y - 46} ${x + 8},${y - 52}`, class: 'dr-line' });
    c.s('path', { d: `M${x},${y - 30} C${x - 44},${y - 48} ${x - 50},${y + 30} ${x},${y + 32} C${x + 50},${y + 30} ${x + 44},${y - 48} ${x},${y - 30} Z`, class: 'dr-fruit' }, 'pome');
    c.s('path', { d: `M${x},${y - 25} C${x - 38},${y - 41} ${x - 43},${y + 25} ${x},${y + 27} C${x + 43},${y + 25} ${x + 38},${y - 41} ${x},${y - 25} Z`, class: 'dr-meso' }, 'receptacle');
    c.s('path', { d: `M${x},${y - 14} C${x - 15},${y - 12} ${x - 16},${y + 12} ${x},${y + 16} C${x + 16},${y + 12} ${x + 15},${y - 12} ${x},${y - 14} Z`, class: 'dr-wall' }, 'endocarp');
    for (const k of [-1, 1]) c.s('path', { d: `M${x + 6 * k},${y - 6} q${-4 * k},6 0,12 q${4 * k},-6 0,-12 Z`, class: 'dr-seedcoat' });
    for (const k of [-4, 0, 4]) c.s('path', { d: `M${x + k},${y + 27} l${k / 2},6`, class: 'dr-thin' });
    lab('pome', x, y - 4);
  }
  // Aggregate fruit: a raspberry, many drupelets from one flower.
  {
    const x = X[2], y = rows[0].y + 4;
    for (const [dx, dy] of [[-24, -6], [-12, -10], [0, -12], [12, -10], [24, -6], [-28, 8], [-16, 4], [-4, 2], [8, 2], [20, 4], [30, 10], [-22, 20], [-10, 16], [2, 15], [14, 16], [26, 22], [-12, 28], [0, 28], [12, 29]])
      c.s('circle', { cx: x + dx, cy: y + dy, r: 7.2, class: 'dr-fruit' }, 'aggregate-fruit');
    for (const a of [-150, -120, -60, -30]) { const [px, py] = polar(x, y - 18, 16, a); c.s('path', { d: `M${x},${y - 18} L${px},${py}`, class: 'dr-petiole' }); }
    lab('aggregate-fruit', x, y - 4);
  }
  // Multiple fruit: a pineapple, one small fruit per flower of the cluster.
  {
    const x = X[3], y = rows[0].y + 8;
    c.s('path', { d: ellPath(x, y, 24, 32), class: 'dr-flower' }, 'multiple-fruit');
    for (let j = -3; j <= 3; j++) for (let i = -3; i <= 3; i++) {
      const px = x + i * 11 + (j % 2 ? 5.5 : 0), py = y + j * 9;
      if (((px - x) / 21) ** 2 + ((py - y) / 29) ** 2 < 1) c.s('path', { d: `M${px - 4},${py} L${px},${py - 3.5} L${px + 4},${py} L${px},${py + 3.5} Z`, class: 'dr-thin' });
    }
    for (const a of [-140, -115, -90, -65, -40]) { const [px, py] = polar(x, y - 30, 22, a); c.s('path', { d: `M${x - 3},${y - 30} Q${(x + px) / 2},${py + 6} ${px},${py} Q${(x + px) / 2 + 3},${py + 10} ${x + 3},${y - 30} Z`, class: 'dr-chl' }); }
    lab('multiple-fruit', x, y - 8);
  }
  // Accessory fruit: a strawberry; the flesh is the receptacle, the achenes sit on it.
  {
    const x = X[4], y = rows[0].y + 2;
    c.s('path', { d: `M${x},${y - 26} C${x - 42},${y - 34} ${x - 34},${y + 12} ${x},${y + 36} C${x + 34},${y + 12} ${x + 42},${y - 34} ${x},${y - 26} Z`, class: 'dr-fruit' }, 'accessory-fruit');
    for (const [dx, dy] of [[-18, -16], [-4, -18], [10, -17], [22, -12], [-24, -2], [-10, -4], [4, -5], [18, 0], [-14, 10], [0, 9], [12, 12], [-4, 22], [6, 24]])
      c.s('ellipse', { cx: x + dx, cy: y + dy, rx: 1.8, ry: 2.6, class: 'dr-flower-c' }, 'achene');
    for (const a of [-170, -135, -90, -45, -10]) { const [px, py] = polar(x, y - 27, 17, a); c.s('path', { d: `M${x - 2},${y - 27} L${px},${py} L${x + 2},${y - 27} Z`, class: 'dr-chl' }); }
    lab('accessory-fruit', x, y);
  }
  // Capsule: a poppy head, seeds shaken out through pores under the lid.
  {
    const x = X[0], y = rows[1].y + 2;
    c.s('path', { d: `M${x},${y + 30} V${y + 46}`, class: 'dr-line' });
    c.s('path', { d: ellPath(x, y, 22, 30), class: 'dr-dry' }, 'capsule');
    c.s('ellipse', { cx: x, cy: y - 30, rx: 25, ry: 6, class: 'dr-dry' }, 'capsule');
    for (const k of [-16, -8, 0, 8, 16]) c.s('path', { d: `M${x},${y - 30} L${x + k * 1.4},${y - 33 + Math.abs(k) / 6}`, class: 'dr-thin' });
    for (const k of [-15, -5, 5, 15]) c.s('circle', { cx: x + k, cy: y - 22, r: 2.2, class: 'dr-aperture' });
    for (const [dx, dy] of [[30, -18], [34, -8], [38, 2]]) c.s('circle', { cx: x + dx, cy: y + dy, r: 1.5, class: 'dr-node' });
    lab('capsule', x, y);
  }
  // Legume: a pod split along both seams, seeds on one seam.
  {
    const x = X[1], y = rows[1].y;
    c.s('path', { d: `M${x - 44},${y - 4} C${x - 30},${y - 30} ${x + 30},${y - 30} ${x + 44},${y - 10} C${x + 20},${y - 16} ${x - 20},${y - 16} ${x - 44},${y - 4} Z`, class: 'dr-dry' }, 'legume');
    c.s('path', { d: `M${x - 44},${y + 6} C${x - 20},${y - 4} ${x + 20},${y - 4} ${x + 44},${y + 2} C${x + 30},${y + 26} ${x - 30},${y + 26} ${x - 44},${y + 6} Z`, class: 'dr-dry' }, 'legume');
    for (const k of [-27, -9, 9, 27]) c.s('circle', { cx: x + k, cy: y + 5, r: 6.5, class: 'dr-coty' });
    lab('legume', x, y);
  }
  // Follicles: several from one flower, each open along one seam.
  {
    const x = X[2], y = rows[1].y + 10;
    for (const a of [-150, -90, -30]) {
      const g = c.g();
      g.setAttribute('transform', `rotate(${a + 90} ${x} ${y})`);
      c.s('path', { d: `M${x},${y} C${x - 13},${y - 14} ${x - 11},${y - 40} ${x + 2},${y - 50} C${x + 10},${y - 38} ${x + 11},${y - 14} ${x},${y} Z`, class: 'dr-dry' }, 'follicle', g);
      if (a === -90) {
        c.s('path', { d: `M${x + 2},${y - 46} C${x + 7},${y - 34} ${x + 7},${y - 16} ${x + 1},${y - 4}`, class: 'dr-line' }, null, g);
        for (const t of [-38, -28, -18]) c.s('circle', { cx: x + 3, cy: y + t, r: 2.6, class: 'dr-seedcoat' }, null, g);
      }
    }
    c.s('circle', { cx: x, cy: y, r: 3, class: 'dr-node' });
    lab('follicle', x, y - 10);
  }
  // Silique: the two valves fall away, seeds stay on the frame (replum).
  {
    const x = X[3], y = rows[1].y;
    c.s('path', { d: `M${x},${y + 44} V${y + 36}`, class: 'dr-line' });
    c.s('path', { d: `M${x - 5},${y + 36} L${x - 5},${y - 36} Q${x},${y - 46} ${x + 5},${y - 36} L${x + 5},${y + 36} Z`, class: 'dr-wall' }, 'silique');
    for (let t = -30; t <= 30; t += 10) { c.s('circle', { cx: x - 3, cy: y + t, r: 2.4, class: 'dr-seedcoat' }); c.s('circle', { cx: x + 3, cy: y + t + 5, r: 2.4, class: 'dr-seedcoat' }); }
    for (const k of [-1, 1]) c.s('path', { d: `M${x + 7 * k},${y + 34} C${x + 22 * k},${y + 20} ${x + 26 * k},${y - 18} ${x + 16 * k},${y - 38} C${x + 14 * k},${y - 16} ${x + 12 * k},${y + 18} ${x + 7 * k},${y + 34} Z`, class: 'dr-dry' }, 'silique');
    lab('silique', x, y);
  }
  // Nut: a hazelnut, a hard shell around one seed, in its leafy husk.
  {
    const x = X[0], y = rows[2].y;
    c.s('path', { d: `M${x},${y - 26} C${x - 26},${y - 20} ${x - 26},${y + 22} ${x},${y + 24} C${x + 26},${y + 22} ${x + 26},${y - 20} ${x},${y - 26} Z`, class: 'dr-stone' }, 'nut');
    c.s('path', { d: `M${x - 30},${y + 4} L${x - 24},${y + 30} L${x - 12},${y + 22} L${x - 6},${y + 34} L${x + 6},${y + 24} L${x + 14},${y + 34} L${x + 22},${y + 22} L${x + 32},${y + 28} L${x + 28},${y + 4} Q${x},${y + 18} ${x - 30},${y + 4} Z`, class: 'dr-chl' });
    lab('nut', x, y);
  }
  // Achene: one seed nearly filling a thin wall, joined to it at one point.
  {
    const x = X[1], y = rows[2].y;
    c.s('path', { d: `M${x},${y + 30} C${x - 22},${y + 12} ${x - 20},${y - 26} ${x},${y - 30} C${x + 20},${y - 26} ${x + 22},${y + 12} ${x},${y + 30} Z`, class: 'dr-dry' }, 'achene');
    c.s('path', { d: `M${x},${y + 24} C${x - 16},${y + 8} ${x - 15},${y - 22} ${x},${y - 25} C${x + 15},${y - 22} ${x + 16},${y + 8} ${x},${y + 24} Z`, class: 'dr-seedcoat' }, 'seed');
    c.s('circle', { cx: x, cy: y + 25, r: 2, class: 'dr-node' });
    lab('achene', x, y);
  }
  // Samara: an elm fruit, the wall grown into a wing around the seed.
  {
    const x = X[2], y = rows[2].y;
    c.s('path', { d: `M${x - 4},${y - 30} C${x - 40},${y - 30} ${x - 38},${y + 32} ${x},${y + 32} C${x + 38},${y + 32} ${x + 40},${y - 30} ${x + 4},${y - 30} L${x},${y - 22} Z`, class: 'dr-wing' }, 'samara');
    for (const a of [-160, -120, -60, -20, 20, 60, 120, 160]) { const [px, py] = polar(x, y + 4, 26, a); c.s('path', { d: `M${x},${y + 4} L${px},${py}`, class: 'dr-thin' }); }
    c.s('ellipse', { cx: x, cy: y + 4, rx: 7, ry: 10, class: 'dr-seedcoat' });
    lab('samara', x, y);
  }
  // Schizocarp: a maple fruit splitting into two winged halves.
  {
    const x = X[3], y = rows[2].y + 18;
    for (const k of [-1, 1]) {
      c.s('path', { d: `M${x + 3 * k},${y} C${x + 18 * k},${y - 6} ${x + 40 * k},${y - 34} ${x + 42 * k},${y - 48} C${x + 30 * k},${y - 46} ${x + 12 * k},${y - 26} ${x + 3 * k},${y - 10} Z`, class: 'dr-wing' }, 'schizocarp');
      c.s('ellipse', { cx: x + 9 * k, cy: y - 5, rx: 8, ry: 6, class: 'dr-dry' }, 'schizocarp');
    }
    c.s('path', { d: `M${x},${y + 2} V${y + 12}`, class: 'dr-line' });
    lab('schizocarp', x, y - 18);
  }
  c.label('fruit-types', 582, 14, { anchor: 'end', cls: 'dr-brace-lbl' });
  return c.root;
}

function stemForms(ctx) {
  const c = canvas(ctx, 570, 430, ctx.T('Modified stems, schematic', 'Tiges modifiées, schématiques'));
  const soil = (x0, y, w) => { c.s('rect', { x: x0, y, width: w, height: 200 - (y % 200) + 6, class: 'dr-soil' }); c.s('path', { d: `M${x0},${y} H${x0 + w}`, class: 'dr-line' }); };
  const leafFan = (x, y, n = 3, len = 34) => { for (let i = 0; i < n; i++) { const a = -90 + (i - (n - 1) / 2) * 22; const [px, py] = polar(x, y, len, a); c.s('path', { d: `M${x - 2},${y} Q${(x + px) / 2 - 6},${(y + py) / 2} ${px},${py} Q${(x + px) / 2 + 6},${(y + py) / 2} ${x + 2},${y} Z`, class: 'dr-chl' }); } };
  // 1. Rhizome: horizontal underground stem with nodes, roots below, shoots above.
  {
    soil(6, 70, 178);
    c.s('path', { d: 'M24,100 C60,92 110,96 168,92 L170,108 C112,112 62,110 24,114 Z', class: 'dr-tuber' }, 'rhizome');
    for (const x of [52, 84, 116, 146]) {
      c.s('path', { d: `M${x},${94} V${111}`, class: 'dr-line' }, 'node');
      c.s('path', { d: `M${x},${94} l6,-5`, class: 'dr-thin' });
      for (const k of [-6, 4]) c.s('path', { d: `M${x},${111} q${k},12 ${k * 1.6},26`, class: 'dr-hair' }, 'adventitious-root');
    }
    leafFan(158, 92, 3, 50);
    leafFan(100, 96, 2, 30);
    c.label('rhizome', 95, 186, { anchor: 'middle' });
    c.label('node', 70, 160, { to: [84, 108], cls: 'dr-lbl-sm', anchor: 'end' });
  }
  // 2. Stolon: a runner with long internodes rooting at a node.
  {
    soil(196, 120, 178);
    for (const x of [228]) leafFan(x, 120, 3, 40);
    c.s('path', { d: 'M232,118 C262,60 312,60 336,116', class: 'dr-stolon' }, 'stolon');
    c.s('circle', { cx: 284, cy: 74, r: 2.4, class: 'dr-node' }, 'node');
    leafFan(338, 118, 3, 26);
    for (const k of [-6, 0, 6]) c.s('path', { d: `M338,120 q${k},10 ${k * 1.5},22`, class: 'dr-hair' });
    for (const k of [-8, 0, 8]) c.s('path', { d: `M228,122 q${k},14 ${k * 1.6},30`, class: 'dr-hair' });
    c.label('stolon', 285, 186, { anchor: 'middle', to: [306, 80] });
  }
  // 3. Stem tuber: a potato at the tip of an underground stolon, eyes are buds.
  {
    soil(386, 50, 178);
    leafFan(420, 50, 3, 34);
    c.s('path', { d: 'M420,50 V120', class: 'dr-stolon' });
    c.s('path', { d: 'M420,96 C450,104 470,112 482,120', class: 'dr-stolon' }, 'stolon');
    c.s('path', { d: ellPath(510, 128, 32, 22), class: 'dr-tuber' }, 'stem-tuber');
    for (const [x, y] of [[496, 116], [522, 140], [534, 118]]) c.s('path', { d: `M${x - 4},${y} q4,-4 8,0`, class: 'dr-line' }, 'bud');
    for (const k of [-6, 6]) c.s('path', { d: `M420,120 q${k},12 ${k * 1.5},26`, class: 'dr-hair' });
    c.label('stem-tuber', 475, 186, { anchor: 'middle' });
    c.label('bud', 556, 98, { to: [534, 116], cls: 'dr-lbl-sm', anchor: 'end' });
  }
  // 4. Bulb cut lengthwise: a flat stem (basal plate) with fleshy leaves and a bud.
  {
    const x = 95, y = 330;
    for (const [w, hh] of [[46, 70], [38, 60], [30, 50], [22, 40]]) c.s('path', { d: `M${x - w},${y} C${x - w - 4},${y - hh * 0.6} ${x - 6},${y - hh} ${x},${y - hh - 14} C${x + 6},${y - hh} ${x + w + 4},${y - hh * 0.6} ${x + w},${y} Z`, class: 'dr-bulbscale' }, 'bulb');
    c.s('path', { d: `M${x - 6},${y - 4} C${x - 8},${y - 26} ${x - 3},${y - 40} ${x},${y - 50} C${x + 3},${y - 40} ${x + 8},${y - 26} ${x + 6},${y - 4} Z`, class: 'dr-chl' }, 'bud');
    c.s('path', { d: `M${x - 40},${y} Q${x},${y + 14} ${x + 40},${y} Z`, class: 'dr-stem' }, 'stem');
    for (const k of [-24, -12, 0, 12, 24]) c.s('path', { d: `M${x + k},${y + 7} q${k / 4},14 ${k / 2},26`, class: 'dr-hair' });
    c.label('bulb', x, 396, { anchor: 'middle' });
    c.label('bud', 168, 286, { to: [x + 2, y - 30], cls: 'dr-lbl-sm', anchor: 'end' });
  }
  // 5. Corm cut lengthwise: a solid swollen stem base, buds on top, dry scales.
  {
    const x = 285, y = 320;
    c.s('path', { d: `M${x - 40},${y} C${x - 44},${y - 34} ${x + 44},${y - 34} ${x + 40},${y} C${x + 36},${y + 22} ${x - 36},${y + 22} ${x - 40},${y} Z`, class: 'dr-tuber' }, 'corm');
    c.s('path', { d: `M${x - 44},${y + 2} C${x - 48},${y - 38} ${x + 48},${y - 38} ${x + 44},${y + 2}`, class: 'dr-thin' });
    c.s('path', { d: `M${x - 47},${y + 4} C${x - 52},${y - 42} ${x + 52},${y - 42} ${x + 47},${y + 4}`, class: 'dr-thin' });
    for (const k of [-1, 1]) c.s('path', { d: `M${x - 30 * k},${y - 8} H${x + 30 * k}`, class: 'dr-thin' });
    c.s('path', { d: `M${x - 5},${y - 24} C${x - 7},${y - 44} ${x},${y - 60} ${x + 2},${y - 66} C${x + 4},${y - 56} ${x + 8},${y - 42} ${x + 5},${y - 24} Z`, class: 'dr-chl' }, 'bud');
    for (const k of [-28, -14, 0, 14, 28]) c.s('path', { d: `M${x + k},${y + 16} q${k / 4},12 ${k / 2},22`, class: 'dr-hair' });
    c.label('corm', x, 396, { anchor: 'middle' });
  }
  // 6. Cladodes: flattened green stems of a prickly pear; areoles at the nodes.
  {
    c.s('path', { d: ellPath(470, 340, 30, 44), class: 'dr-chl' }, 'cladode');
    c.s('path', { d: ellPath(450, 280, 22, 32), transform: 'rotate(-28 450 280)', class: 'dr-chl' }, 'cladode');
    c.s('path', { d: ellPath(494, 282, 20, 30), transform: 'rotate(30 494 282)', class: 'dr-chl' }, 'cladode');
    for (const [x, y] of [[462, 318], [480, 340], [462, 362], [478, 304], [452, 384], [486, 378], [444, 272], [456, 290], [496, 276], [490, 294]]) {
      c.s('circle', { cx: x, cy: y, r: 1.8, class: 'dr-node' }, 'node');
      c.s('path', { d: `M${x},${y} l-4,-5 M${x},${y} l5,-4`, class: 'dr-thin' });
    }
    c.label('cladode', 470, 410, { anchor: 'middle' });
    c.label('node', 556, 330, { to: [480, 340], cls: 'dr-lbl-sm', anchor: 'end' });
  }
  c.label('stem-modified', 8, 14, { cls: 'dr-brace-lbl' });
  return c.root;
}

function sharpPoints(ctx) {
  const c = canvas(ctx, 580, 280, ctx.T('Thorn, spine, prickle and hairs', 'Épine, épine foliaire, aiguillon et poils'));
  const stem = (x) => c.s('path', { d: `M${x - 7},236 V30 H${x + 7} V236 Z`, class: 'dr-stem' }, 'stem');
  // Thorn: a side shoot in a leaf axil, grown from inside the stem.
  {
    const x = 70;
    stem(x);
    c.s('path', { d: `M${x + 6},150 C${x + 22},134 ${x + 36},112 ${x + 50},86 L${x + 6},138 Z`, class: 'dr-stem' }, 'thorn');
    c.s('path', { d: `M${x + 6},152 C${x + 30},156 ${x + 52},168 ${x + 62},186 C${x + 40},186 ${x + 18},174 ${x + 6},158 Z`, class: 'dr-chl' }, 'leaf');
    c.s('path', { d: `M${x - 3},146 C${x + 2},144 ${x + 4},140 ${x + 6},138`, class: 'dr-thin' });
    c.label('thorn', x + 10, 262, { anchor: 'middle' });
    c.text(ctx.T('a shoot', 'une pousse'), x + 10, 276, { anchor: 'middle' });
  }
  // Leaf spine: the leaf itself is the spine; a short shoot grows in its axil.
  {
    const x = 210;
    stem(x);
    for (const a of [-15, 15, 45]) { const [px, py] = polar(x + 7, 142, 44, a); const [qx, qy] = polar(x + 7, 142, 5, a - 90); const [rx, ry] = polar(x + 7, 142, 5, a + 90); c.s('path', { d: `M${qx},${qy} L${px},${py} L${rx},${ry} Z`, class: 'dr-spine' }, 'leaf-spine'); }
    for (const a of [-95, -70, -45]) { const [px, py] = polar(x + 8, 134, 30, a); c.s('path', { d: `M${x + 8},134 Q${(x + 8 + px) / 2 - 5},${(134 + py) / 2} ${px},${py} Q${(x + 8 + px) / 2 + 5},${(134 + py) / 2} ${x + 8},134 Z`, class: 'dr-chl' }); }
    c.label('leaf-spine', x + 10, 262, { anchor: 'middle' });
    c.text(ctx.T('a leaf', 'une feuille'), x + 10, 276, { anchor: 'middle' });
  }
  // Prickles: outgrowths of the surface, anywhere along the stem.
  {
    const x = 350;
    stem(x);
    for (const [y, k] of [[60, 1], [104, -1], [142, 1], [186, -1], [214, 1]]) c.s('path', { d: `M${x + 7 * k},${y} Q${x + 18 * k},${y - 4} ${x + 24 * k},${y - 16} Q${x + 18 * k},${y + 2} ${x + 7 * k},${y + 12} Z`, class: 'dr-prickle' }, 'prickle');
    c.label('prickle', x, 262, { anchor: 'middle' });
    c.text(ctx.T('the surface only', 'la surface seulement'), x, 276, { anchor: 'middle' });
  }
  // Hairs on an epidermis: a simple hair and a glandular one.
  {
    const x0 = 430, y = 200;
    for (let i = 0; i < 6; i++) c.s('rect', { x: x0 + i * 24, y, width: 24, height: 18, class: 'dr-cell' }, 'epidermis');
    for (let i = 0; i < 6; i++) c.s('rect', { x: x0 + i * 24 + (i % 2 ? 0 : 12), y: y + 18, width: 24, height: 20, class: 'dr-ground' });
    c.s('path', { d: `M${x0 + 30},${y} L${x0 + 30},${y - 28} L${x0 + 42},${y - 28} L${x0 + 42},${y} Z M${x0 + 31},${y - 28} L${x0 + 33},${y - 58} L${x0 + 40},${y - 58} L${x0 + 41},${y - 28} M${x0 + 33},${y - 58} L${x0 + 37},${y - 92} L${x0 + 40},${y - 58}`, class: 'dr-hairc' }, 'trichome');
    c.s('path', { d: `M${x0 + 104},${y} V${y - 40} H${x0 + 110} V${y} Z`, class: 'dr-hairc' }, 'glandular-trichome');
    c.s('circle', { cx: x0 + 107, cy: y - 52, r: 14, class: 'dr-gland' }, 'glandular-trichome');
    c.s('path', { d: `M${x0 + 93},${y - 52} H${x0 + 121} M${x0 + 107},${y - 66} V${y - 38}`, class: 'dr-thin' });
    c.label('trichome', x0 + 38, 40, { anchor: 'middle', to: [x0 + 37, y - 80] });
    c.label('glandular-trichome', x0 + 110, 76, { anchor: 'middle', to: [x0 + 107, y - 66] });
    c.label('epidermis', x0 + 72, 262, { anchor: 'middle', to: [x0 + 72, y + 10] });
  }
  return c.root;
}

function pollenDrawing(ctx) {
  const c = canvas(ctx, 580, 320, ctx.T('An anther in cross-section and a germinating pollen grain', 'Une anthère en coupe transversale et un grain de pollen qui germe'));
  // Anther: two thecae of two pollen sacs each, joined by the connective.
  const cx = 150, cy = 165;
  for (const k of [-1, 1]) {
    c.s('path', { d: ellPath(cx + 58 * k, cy, 54, 78), class: 'dr-anther' }, 'theca');
    for (const s of [-1, 1]) {
      const sx = cx + 62 * k, sy = cy + 36 * s;
      c.s('circle', { cx: sx, cy: sy, r: 26, class: 'dr-cell' }, 'pollen-sac');
      for (const [dx, dy] of [[-10, -8], [4, -12], [12, 2], [-2, 4], [-12, 8], [6, 14]]) c.s('circle', { cx: sx + dx, cy: sy + dy, r: 3.4, class: 'dr-flower-c' }, 'pollen');
    }
  }
  c.s('path', { d: ellPath(cx, cy, 16, 40), class: 'dr-ground' }, 'connective');
  c.s('circle', { cx, cy, r: 6, class: 'dr-xylem' }, 'vascular-bundle');
  c.label('anther', cx, 24, { anchor: 'middle', cls: 'dr-brace-lbl' });
  c.label('theca', cx + 92, 70, { to: [cx + 98, cy - 64] });
  c.label('pollen-sac', cx + 120, 300, { to: [cx + 74, cy + 58] });
  c.label('connective', cx - 20, 300, { anchor: 'end', to: [cx - 4, cy + 32] });
  // Pollen grain: exine with spines and an aperture, intine, the tube growing out.
  const px = 440, py = 110;
  c.s('path', { d: `M${px - 5},${py + 38} C${px - 8},${py + 90} ${px + 30},${py + 120} ${px + 36},${py + 196} L${px + 48},${py + 196} C${px + 42},${py + 116} ${px + 6},${py + 86} ${px + 7},${py + 38} Z`, class: 'dr-tube' }, 'pollen-tube');
  for (const [dx, dy] of [[34, 160], [40, 176]]) c.s('ellipse', { cx: px + dx, cy: py + dy, rx: 3, ry: 6, class: 'dr-nucleus' });
  c.s('circle', { cx: px, cy: py, r: 40, class: 'dr-intine' }, 'intine');
  c.s('circle', { cx: px, cy: py, r: 35, class: 'dr-cyto' });
  c.s('circle', { cx: px - 8, cy: py - 4, r: 9, class: 'dr-nucleus' });
  c.s('ellipse', { cx: px + 12, cy: py + 6, rx: 4, ry: 7, class: 'dr-nucleus' });
  c.s('path', { d: sector(px, py, 40, 49, 112, 428), class: 'dr-exine' }, 'exine');
  for (let a = 120; a <= 420; a += 20) { const [x1, y1] = polar(px, py, 49, a); const [x2, y2] = polar(px, py, 56, a); c.s('path', { d: `M${x1},${y1} L${x2},${y2}`, class: 'dr-line' }, 'exine'); }
  c.label('pollen', px, 24, { anchor: 'middle', cls: 'dr-brace-lbl' });
  c.label('exine', px - 70, 66, { anchor: 'end', to: [px - 36, py - 22] });
  c.label('intine', px - 70, 140, { anchor: 'end', to: [px - 30, py + 22] });
  c.label('pollen-aperture', px + 70, 160, { to: [px + 2, py + 44] });
  c.label('pollen-tube', px + 70, 260, { to: [px + 40, py + 150] });
  return c.root;
}

function meristems(ctx) {
  const c = canvas(ctx, 590, 350, ctx.T('Where the meristems are', 'Où sont les méristèmes'));
  // A. Seedling: an apical meristem at each tip.
  {
    const x = 90;
    c.s('rect', { x: 6, y: 170, width: 170, height: 170, class: 'dr-soil' });
    c.s('path', { d: 'M6,170 H176', class: 'dr-line' });
    c.s('path', { d: `M${x - 3},170 V64 H${x + 3} V170 Z`, class: 'dr-chl' }, 'stem');
    for (const k of [-1, 1]) c.s('path', { d: `M${x},${110} C${x + 18 * k},${96} ${x + 42 * k},${98} ${x + 52 * k},${108} C${x + 36 * k},${118} ${x + 14 * k},${118} ${x},${112} Z`, class: 'dr-chl' }, 'leaf');
    c.s('path', { d: `M${x - 4},66 Q${x},52 ${x + 4},66 Z`, class: 'dr-meri' }, 'apical-meristem');
    c.s('path', { d: `M${x - 2.5},170 L${x - 1.5},300 L${x + 1.5},300 L${x + 2.5},170 Z`, class: 'dr-root-fill' }, 'root');
    for (const d of [`M${x},200 q-18,10 -30,34`, `M${x},226 q20,10 30,36`, `M${x},256 q-14,8 -22,28`]) c.s('path', { d, class: 'dr-root' }, 'lateral-root');
    c.s('path', { d: `M${x - 3},296 Q${x},314 ${x + 3},296 Z`, class: 'dr-meri' }, 'apical-meristem');
    c.label('apical-meristem', x + 16, 36, { to: [x + 2, 60] });
    c.s('path', { d: `M${x + 40},238 L${x + 3},304`, class: 'dr-lead' });
    c.text(ctx.T('(also at the root tip)', '(aussi au bout de la racine)'), x + 16, 232, { cls: 'dr-lbl-sm' });
  }
  // B. Shoot tip lengthwise: the dome, leaf primordia, procambium strands.
  {
    const x = 285, y = 110;
    c.s('path', { d: `M${x - 60},${y + 200} L${x - 60},${y + 40} C${x - 60},${y + 10} ${x - 34},${y - 6} ${x},${y - 8} C${x + 34},${y - 6} ${x + 60},${y + 10} ${x + 60},${y + 40} L${x + 60},${y + 200} Z`, class: 'dr-ground' }, 'stem');
    for (const k of [-1, 1]) {
      c.s('path', { d: `M${x + 30 * k},${y + 14} C${x + 44 * k},${y - 20} ${x + 58 * k},${y - 46} ${x + 52 * k},${y - 70} C${x + 34 * k},${y - 46} ${x + 22 * k},${y - 18} ${x + 18 * k},${y + 6} Z`, class: 'dr-chl' }, 'leaf');
      c.s('path', { d: `M${x + 50 * k},${y + 52} C${x + 74 * k},${y + 20} ${x + 92 * k},${y - 6} ${x + 96 * k},${y - 40} C${x + 76 * k},${y - 12} ${x + 62 * k},${y + 16} ${x + 46 * k},${y + 36} Z`, class: 'dr-chl' }, 'leaf');
      c.s('path', { d: `M${x + 24 * k},${y + 20} C${x + 24 * k},${y + 80} ${x + 30 * k},${y + 140} ${x + 30 * k},${y + 200}`, class: 'dr-procambium' }, 'procambium');
      c.s('path', { d: `M${x + 44 * k},${y + 50} C${x + 40 * k},${y + 100} ${x + 40 * k},${y + 150} ${x + 40 * k},${y + 200}`, class: 'dr-procambium' }, 'procambium');
    }
    c.s('path', { d: `M${x - 20},${y + 8} C${x - 18},${y - 12} ${x + 18},${y - 12} ${x + 20},${y + 8} C${x + 12},${y + 20} ${x - 12},${y + 20} ${x - 20},${y + 8} Z`, class: 'dr-meri' }, 'shoot-apex');
    c.label('shoot-apex', x, 22, { anchor: 'middle', to: [x, y - 2] });
    c.label('procambium', x + 66, y + 222, { to: [x + 41, y + 196] });
    c.text(ctx.T('shoot tip, lengthwise', 'bout de pousse, en long'), x, 322, { anchor: 'middle' });
  }
  // C. Lateral meristems in a stem cross-section, and an intercalary meristem in a grass.
  {
    const x = 470, y = 92, R = 62;
    c.s('circle', { cx: x, cy: y, r: R, class: 'dr-ground' }, 'cortex');
    c.s('circle', { cx: x, cy: y, r: R - 4, class: 'dr-meri-ring' }, 'phellogen');
    c.s('circle', { cx: x, cy: y, r: 42, class: 'dr-phloem' }, 'secondary-phloem');
    c.s('circle', { cx: x, cy: y, r: 34, class: 'dr-xylem' }, 'wood');
    c.s('circle', { cx: x, cy: y, r: 10, class: 'dr-pith' }, 'pith');
    c.s('circle', { cx: x, cy: y, r: 35.5, class: 'dr-meri-ring' }, 'cambium');
    c.label('lateral-meristem', x, 14, { anchor: 'middle', cls: 'dr-brace-lbl' });
    c.label('cambium', x + 76, y + 6, { to: [x + 25, y + 25] });
    c.label('phellogen', x + 76, y + 50, { to: [x + 40, y + 40] });
    // Grass culm: node, the growing band at the base of the internode, leaf sheath.
    const gx = 470, gy = 260;
    c.s('path', { d: `M${gx - 6},340 V176 H${gx + 6} V340 Z`, class: 'dr-chl' }, 'stem');
    c.s('rect', { x: gx - 9, y: gy - 3, width: 18, height: 8, rx: 3, class: 'dr-node' }, 'node');
    c.s('rect', { x: gx - 6, y: gy - 20, width: 12, height: 17, class: 'dr-meri' }, 'intercalary-meristem');
    c.s('path', { d: `M${gx + 7},${gy + 2} C${gx + 14},${gy - 30} ${gx + 12},${gy - 60} ${gx + 9},${gy - 80} L${gx + 40},${gy - 120}`, class: 'dr-sheath-g' }, 'leaf-sheath');
    c.label('intercalary-meristem', gx - 16, gy - 34, { anchor: 'end', to: [gx - 6, gy - 12] });
    c.label('node', gx - 16, gy + 16, { anchor: 'end', to: [gx - 9, gy + 1] });
    c.label('leaf-sheath', gx + 24, gy - 40, { to: [gx + 12, gy - 50] });
  }
  c.label('meristem', 8, 14, { cls: 'dr-brace-lbl' });
  return c.root;
}

function rootForms(ctx) {
  const c = canvas(ctx, 580, 270, ctx.T('Kinds of roots, schematic', 'Sortes de racines, schématiques'));
  c.s('rect', { x: 0, y: 70, width: 580, height: 200, class: 'dr-soil' });
  c.s('path', { d: 'M0,70 H580', class: 'dr-line' });
  // Adventitious roots on a cutting: from the stem, at the nodes.
  {
    const x = 96;
    c.s('path', { d: `M${x - 5},20 V210 H${x + 5} V20 Z`, class: 'dr-stem' }, 'stem');
    for (const y of [100, 150, 200]) {
      c.s('path', { d: `M${x - 6},${y} H${x + 6}`, class: 'dr-line' }, 'node');
      for (const k of [-1, 1]) c.s('path', { d: `M${x + 5 * k},${y} q${18 * k},6 ${30 * k},28 q${6 * k},10 ${10 * k},22`, class: 'dr-root' }, 'adventitious-root');
    }
    c.s('path', { d: `M${x + 5},34 C${x + 24},26 ${x + 40},28 ${x + 50},38 C${x + 34},44 ${x + 18},44 ${x + 5},40 Z`, class: 'dr-chl' }, 'leaf');
    c.label('adventitious-root', x, 256, { anchor: 'middle' });
  }
  // Storage root: a swollen taproot (carrot).
  {
    const x = 290;
    for (const a of [-125, -100, -80, -55]) { const [px, py] = polar(x, 70, 50, a); c.s('path', { d: `M${x - 2},70 Q${(x + px) / 2 - 6},${(70 + py) / 2} ${px},${py} Q${(x + px) / 2 + 6},${(70 + py) / 2} ${x + 2},70 Z`, class: 'dr-chl' }); }
    c.s('path', { d: `M${x - 20},74 C${x - 20},120 ${x - 6},180 ${x},226 C${x + 6},180 ${x + 20},120 ${x + 20},74 Z`, class: 'dr-store' }, 'storage-root');
    for (const y of [104, 134, 164]) c.s('path', { d: `M${x - 14 + (y - 104) / 10},${y} h6 M${x + 8 - (y - 104) / 10},${y + 10} h6`, class: 'dr-thin' });
    for (const [y, k] of [[110, -1], [150, 1], [180, -1]]) c.s('path', { d: `M${x + 12 * k},${y} q${10 * k},6 ${20 * k},4`, class: 'dr-hair' }, 'lateral-root');
    c.label('storage-root', x, 256, { anchor: 'middle' });
  }
  // Root nodules on a legume root.
  {
    const x = 470;
    c.s('path', { d: `M${x - 2},20 V70 H${x + 2} V20 Z`, class: 'dr-chl' }, 'stem');
    c.s('path', { d: `M${x},70 C${x},120 ${x + 4},170 ${x},224`, class: 'dr-root' }, 'primary-root');
    for (const [y, k, l] of [[96, -1, 50], [120, 1, 56], [150, -1, 46], [176, 1, 44]]) {
      c.s('path', { d: `M${x},${y} q${l * 0.5 * k},6 ${l * k},26`, class: 'dr-root' }, 'lateral-root');
      for (const t of [0.35, 0.7]) c.s('circle', { cx: x + l * t * k, cy: y + 4 + 22 * t * t, r: 5, class: 'dr-nodule' }, 'root-nodule');
    }
    c.label('root-nodule', x, 256, { anchor: 'middle', to: [452.5, 102.7] });
  }
  c.label('root-types', 8, 14, { cls: 'dr-brace-lbl' });
  return c.root;
}

export const DRAWINGS = {
  plant: { render: plant, for: ['plant', 'stem', 'root', 'node', 'internode', 'bud', 'terminal-bud', 'primary-root', 'lateral-root'],
    caption: { en: 'The organs of a flowering plant: the shoot (stem, leaves, buds, flowers, fruits) and the roots.', fr: 'Les organes d’une plante à fleurs : la partie aérienne (tige, feuilles, bourgeons, fleurs, fruits) et les racines.' }, src: ['po', 'openstax'] },
  'bark-strips': { render: barkStrips, for: ['secondary-growth', 'bark', 'inner-bark', 'rhytidome', 'secondary-phloem', 'wood', 'vascular-cambium', 'sapwood', 'heartwood', 'growth-ring', 'earlywood', 'latewood', 'wood-ray', 'cortex'],
    caption: { en: 'Two radial strips, the centre of the stem on the left. In the young stem the cortex is still there, between the phloem and the first periderm; in the old trunk it has been shed, and everything outside the vascular cambium is bark.', fr: 'Deux bandes radiales, le centre de la tige à gauche. Dans la jeune tige, le cortex est encore là, entre le phloème et le premier périderme ; dans le vieux tronc il a disparu, et tout ce qui est à l’extérieur du cambium est l’écorce.' }, src: ['po', 'openstax', 'g1-shtein2023'] },
  periderm: { render: periderm, for: ['periderm', 'phellem', 'phellogen', 'phelloderm', 'lenticel'],
    caption: { en: 'The phellogen divides outwards into phellem (cork) and inwards into phelloderm, so the cells lie in radial files. In a lenticel the cork cells are loose, leaving air spaces.', fr: 'Le phellogène se divise vers l’extérieur en phellème (liège) et vers l’intérieur en phelloderme : les cellules sont alignées en files radiales. Dans une lenticelle, les cellules sont lâches et laissent passer l’air.' }, src: ['po', 'g1-nickrent'] },
  'stem-primary': { render: stemPrimary, for: ['stem-primary', 'stem-epidermis', 'starch-sheath', 'vascular-bundle', 'primary-xylem', 'primary-phloem', 'fascicular-cambium', 'pith', 'pith-ray', 'protoxylem', 'metaxylem'],
    caption: { en: 'In a young eudicot stem the vascular bundles form a ring, phloem towards the outside and xylem towards the centre.', fr: 'Dans une jeune tige de eudicotylédone, les faisceaux forment un cercle, le phloème vers l’extérieur et le xylème vers le centre.' }, src: ['po', 'openstax'] },
  'leaf-section': { render: leafSection, for: ['mesophyll', 'palisade', 'spongy', 'intercellular-space', 'leaf-epidermis', 'cuticle', 'substomatal-cavity', 'bundle-sheath', 'leaf-vein', 'midrib'],
    caption: { en: 'Light comes from above: the palisade cells are packed under the upper epidermis, the spongy cells leave air spaces that open to the outside through the stomata of the lower epidermis.', fr: 'La lumière vient d’en haut : les cellules palissadiques sont serrées sous l’épiderme supérieur ; les cellules lacuneuses laissent des espaces d’air qui s’ouvrent vers l’extérieur par les stomates de l’épiderme inférieur.' }, src: ['po', 'openstax'] },
  'leaf-parts': { render: leafParts, for: ['leaf', 'lamina', 'petiole', 'leaf-base', 'stipule', 'axillary-bud', 'leaf-compound', 'leaflet'],
    caption: { en: 'A simple leaf: blade, petiole and base with two stipules; a bud in its axil. Inset: a compound leaf, its blade divided into leaflets.', fr: 'Une feuille simple : limbe, pétiole et base avec deux stipules ; un bourgeon à son aisselle. En encart : une feuille composée, au limbe divisé en folioles.' }, src: ['po'] },
  stoma: { render: stomaFace, for: ['stoma', 'guard-cell', 'subsidiary-cell', 'stomatal-pore', 'pavement-cell'],
    caption: { en: 'Two guard cells, with chloroplasts, open and close the pore. Subsidiary cells flank them in many species but not all.', fr: 'Deux cellules de garde, avec des chloroplastes, ouvrent et ferment l’ostiole. Des cellules annexes les entourent chez beaucoup d’espèces, pas toutes.' }, src: ['po'] },
  'root-tip': { render: rootTip, for: ['root-tip', 'root-cap', 'columella', 'root-meristem', 'quiescent-centre', 'elongation-zone', 'root-hair-zone', 'root-hair', 'rhizodermis'],
    caption: { en: 'The root cap protects the meristem; behind it cells divide, then lengthen, then mature and grow root hairs. Not to scale: the zones are each a few millimetres or less.', fr: 'La coiffe protège le méristème ; derrière, les cellules se divisent, puis s’allongent, puis mûrissent et portent des poils absorbants. Pas à l’échelle : chaque zone mesure quelques millimètres au plus.' }, src: ['po', 'openstax'] },
  'root-section': { render: rootSection, for: ['root-cortex', 'exodermis', 'endodermis', 'casparian-strip', 'passage-cell', 'stele', 'pericycle'],
    caption: { en: 'In a young root the xylem forms a star in the centre with the phloem between its arms. The Casparian strip in the endodermis walls forces water and salts to cross a living membrane on their way in.', fr: 'Dans une jeune racine, le xylème forme une étoile au centre, le phloème entre ses branches. Le cadre de Caspary, dans les parois de l’endoderme, oblige l’eau et les sels à traverser une membrane vivante pour entrer.' }, src: ['po', 'openstax'] },
  flower: { render: flower, for: ['flower', 'pedicel', 'receptacle', 'perianth', 'calyx', 'sepal', 'corolla', 'petal', 'androecium', 'stamen', 'filament', 'anther', 'gynoecium', 'carpel', 'pistil', 'ovary', 'placenta', 'style', 'stigma', 'nectary', 'ovule'],
    caption: { en: 'From the outside in: sepals (calyx), petals (corolla), stamens (androecium) and the pistil, made of one or more carpels (gynoecium).', fr: 'De l’extérieur vers l’intérieur : sépales (calice), pétales (corolle), étamines (androcée) et le pistil, formé d’un ou plusieurs carpelles (gynécée).' }, src: ['po', 'openstax'] },
  ovule: { render: ovule, for: ['funiculus', 'chalaza', 'integument', 'micropyle', 'nucellus', 'embryo-sac', 'egg-cell', 'synergid', 'central-cell', 'antipodal'],
    caption: { en: 'Drawn straight for clarity. The embryo sac shown is the common seven-celled, eight-nucleate type: egg cell and two synergids at the micropyle, a central cell with two polar nuclei, three antipodal cells. At the base, the chalaza, where nucellus and integuments join the funicle.', fr: 'Dessiné droit pour plus de clarté. Le sac embryonnaire montré est le type courant à sept cellules et huit noyaux : oosphère et deux synergides côté micropyle, une cellule centrale à deux noyaux polaires, trois antipodes. À la base, la chalaze, où nucelle et téguments rejoignent le funicule.' }, src: ['po', 'openstax'] },
  seed: { render: seed, for: ['seed', 'seed-coat', 'hilum', 'seed-micropyle', 'embryo', 'radicle', 'hypocotyl', 'cotyledon', 'epicotyl', 'plumule', 'endosperm', 'caryopsis'],
    caption: { en: 'In the bean the food reserves are in the two cotyledons; in a cereal grain they are in the endosperm, and the fruit wall is fused with the seed coat.', fr: 'Chez le haricot, les réserves sont dans les deux cotylédons ; dans un grain de céréale, elles sont dans l’albumen, et la paroi du fruit est soudée au tégument de la graine.' }, src: ['po', 'openstax'] },
  drupe: { render: drupe, for: ['fruit', 'pericarp', 'exocarp', 'mesocarp', 'endocarp', 'drupe'],
    caption: { en: 'In a drupe the three layers of the fruit wall are easy to see: thin skin, fleshy middle, stony inside around the seed.', fr: 'Dans une drupe, les trois couches de la paroi du fruit se voient bien : peau fine, partie charnue, partie dure autour de la graine.' }, src: ['po'] },
  cell: { render: cell, for: ['cell', 'cell-wall', 'middle-lamella', 'primary-wall', 'plasmodesma', 'primary-pit-field', 'protoplast', 'plasma-membrane', 'cytoplasm', 'nucleus', 'nucleolus', 'nuclear-envelope', 'vacuole', 'tonoplast', 'cell-sap', 'mitochondrion', 'er', 'golgi', 'plastid', 'apoplast', 'symplast'],
    caption: { en: 'A living plant cell. The protoplast is everything inside the cell wall, plasma membrane included. Sizes are not to scale.', fr: 'Une cellule végétale vivante. Le protoplaste est tout ce qui est à l’intérieur de la paroi, membrane plasmique comprise. Tailles pas à l’échelle.' }, src: ['go', 'openstax'] },
  pits: { render: pits, for: ['pit', 'simple-pit', 'bordered-pit', 'pit-pair', 'pit-membrane', 'pit-aperture', 'torus', 'margo', 'secondary-wall'],
    caption: { en: 'A pit is a gap in the secondary wall; the pit membrane (the two primary walls and the middle lamella) stays. In a bordered pit the secondary wall arches over the pit chamber. In conifers the membrane has a thick torus held by a porous margo; when one side fills with air, the torus seals the aperture.', fr: 'Une ponctuation est une lacune de la paroi secondaire ; la membrane de ponctuation (les deux parois primaires et la lamelle moyenne) demeure. Dans une ponctuation aréolée, la paroi secondaire forme une voûte au-dessus de la chambre. Chez les conifères, la membrane porte un torus épais tenu par une margo poreuse ; quand un côté se remplit d’air, le torus bouche l’ouverture.' }, src: ['g6-iawa1964', 'iawa-sw'] },
  conducting: { render: conducting, for: ['tracheary', 'tracheid', 'vessel', 'vessel-element', 'perforation-plate', 'xylem-fibre', 'sieve-element', 'sieve-tube-element', 'sieve-plate', 'sieve-tube', 'companion-cell', 'xylem', 'phloem', 'vascular'],
    caption: { en: 'Water travels in dead, lignified cells: tracheids (through their pits) and vessels (through open perforation plates). Sugars travel in living sieve tube elements, joined by sieve plates and supported by companion cells.', fr: 'L’eau circule dans des cellules mortes et lignifiées : trachéides (par leurs ponctuations) et vaisseaux (par des perforations ouvertes). Les sucres circulent dans des tubes criblés vivants, reliés par des cribles et soutenus par des cellules compagnes.' }, src: ['po', 'openstax'] },
  'ground-tissues': { render: groundTissues, for: ['ground', 'parenchyma', 'collenchyma', 'sclerenchyma', 'fibre', 'tissue'],
    caption: { en: 'Parenchyma has thin walls; collenchyma has living cells with walls thickened unevenly, often in the corners; sclerenchyma has thick, usually lignified walls and is often dead at maturity.', fr: 'Le parenchyme a des parois fines ; le collenchyme a des cellules vivantes aux parois épaissies de façon inégale, souvent dans les angles ; le sclérenchyme a des parois épaisses, en général lignifiées, et il est souvent mort à maturité.' }, src: ['po', 'openstax'] },
  chloroplast: { render: chloroplast, for: ['chloroplast', 'thylakoid', 'granum', 'stroma'],
    caption: { en: 'Thylakoid membranes, stacked into grana, carry the photosynthetic pigments; the stroma around them holds the enzymes that fix carbon dioxide.', fr: 'Les membranes des thylakoïdes, empilées en grana, portent les pigments photosynthétiques ; le stroma qui les entoure contient les enzymes qui fixent le dioxyde de carbone.' }, src: ['go'] },
  'fruit-types': { render: fruitTypes, for: ['fruit-types', 'berry', 'pome', 'aggregate-fruit', 'multiple-fruit', 'accessory-fruit', 'capsule', 'legume', 'follicle', 'silique', 'nut', 'achene', 'samara', 'schizocarp'],
    caption: { en: 'Fruits are sorted by what the fruit wall becomes and whether it opens. Berry: a tomato, seeds in the flesh. Pome: an apple, the flesh grown from the receptacle around a papery core. Aggregate: a raspberry, many small drupes from one flower. Multiple: a pineapple, one small fruit per flower of a cluster. Accessory: a strawberry, the red flesh is the receptacle and the true fruits are the achenes on it. Capsule (poppy), legume (pea pod, opens along both seams), follicles (open along one seam), silique (valves fall away from the frame). Nut (hazelnut), achene, samara (elm), schizocarp (maple, splits into two). The drupe has its own drawing.', fr: 'Les fruits se classent selon ce que devient leur paroi et s’ils s’ouvrent. Baie : une tomate, graines dans la chair. Piridion : une pomme, chair issue du réceptacle autour d’un cœur parcheminé. Fruit multiple d’une fleur (polydrupe) : une framboise, de nombreuses petites drupes issues d’une seule fleur. Infrutescence : un ananas, un petit fruit par fleur d’une inflorescence. Faux-fruit : une fraise, la chair rouge est le réceptacle et les vrais fruits sont les akènes posés dessus. Capsule (pavot), gousse (pois, s’ouvre par deux fentes), follicules (une seule fente), silique (les valves se détachent du cadre). Noix (noisette), akène, samare (orme), schizocarpe (érable, se sépare en deux). La drupe a son propre dessin.' }, src: ['g4-uclouvain', 'po', 'spektrum'] },
  'stem-forms': { render: stemForms, for: ['stem-modified', 'rhizome', 'stolon', 'stem-tuber', 'bulb', 'corm', 'cladode'],
    caption: { en: 'Each of these is a stem, because it has nodes with buds or scale leaves. Rhizome: horizontal and underground (iris, ginger). Stolon: a runner with long internodes that roots at a node (strawberry). Stem tuber: a swollen stolon tip whose eyes are buds (potato). Bulb: a flat stem carrying fleshy leaves (onion). Corm: the reserves are in a solid stem base, not in leaves (gladiolus). Cladode: a flat green stem doing the work of leaves (prickly pear).', fr: 'Chacune est une tige, car elle porte des nœuds avec des bourgeons ou des écailles. Rhizome : horizontal et souterrain (iris, gingembre). Stolon : une tige rampante aux longs entre-nœuds qui s’enracine à un nœud (fraisier). Tubercule caulinaire : le bout renflé d’un stolon, dont les yeux sont des bourgeons (pomme de terre). Bulbe : une tige plate portant des feuilles charnues (oignon). Corme : les réserves sont dans une base de tige pleine, pas dans des feuilles (glaïeul). Cladode : une tige plate et verte qui fait le travail des feuilles (figuier de Barbarie).' }, src: ['po', 'openstax', 'spektrum'] },
  'sharp-points': { render: sharpPoints, for: ['prickle', 'thorn', 'leaf-spine', 'trichome', 'glandular-trichome'],
    caption: { en: 'Three sharp points, three origins. A thorn is a side shoot, growing in the axil of a leaf from inside the stem (blackthorn, sea buckthorn). A leaf spine is a leaf, with a bud or short shoot in its axil (barberry). A prickle is an outgrowth of the surface, anywhere along the stem, and snaps off cleanly (rose, bramble). Hairs (trichomes) are made by the epidermis alone; glandular ones carry a head that secretes.', fr: 'Trois pointes, trois origines. L’épine (caulinaire) est une pousse latérale, née à l’aisselle d’une feuille depuis l’intérieur de la tige (prunellier, argousier). L’épine foliaire est une feuille, avec un bourgeon ou une courte pousse à son aisselle (épine-vinette). L’aiguillon est une excroissance de la surface, n’importe où le long de la tige, et se détache net (rosier, ronce). Les poils (trichomes) sont formés par l’épiderme seul ; les poils glanduleux portent une tête qui sécrète.' }, src: ['po', 'spektrum'] },
  pollen: { render: pollenDrawing, for: ['pollen', 'theca', 'pollen-sac', 'connective', 'exine', 'intine', 'pollen-aperture', 'pollen-tube'],
    caption: { en: 'An anther has two halves (thecae), each with two pollen sacs, joined by the sterile connective. A pollen grain has a tough outer wall (exine), often sculpted, and a thin inner one (intine); the pollen tube grows out through an aperture, carrying the sperm cells to the ovule.', fr: 'Une anthère a deux moitiés (thèques), chacune avec deux sacs polliniques, reliées par le connectif stérile. Un grain de pollen a une paroi externe résistante (exine), souvent sculptée, et une paroi interne fine (intine) ; le tube pollinique sort par une aperture et porte les cellules spermatiques jusqu’à l’ovule.' }, src: ['po', 'go', 'spektrum'] },
  meristems: { render: meristems, for: ['meristem', 'apical-meristem', 'shoot-apex', 'procambium', 'lateral-meristem', 'cambium', 'intercalary-meristem'],
    caption: { en: 'Apical meristems at the tips of shoots and roots make them longer; below the shoot apex, procambium strands become the first xylem and phloem. Lateral meristems, the vascular cambium and the cork cambium (phellogen), make stems and roots thicker. In grasses an intercalary meristem at the base of the internodes keeps them growing from below.', fr: 'Les méristèmes apicaux, au bout des tiges et des racines, les allongent ; sous l’apex, les cordons de procambium deviennent le premier xylème et le premier phloème. Les méristèmes latéraux, le cambium et le phellogène, épaississent tiges et racines. Chez les graminées, un méristème intercalaire à la base des entre-nœuds les fait croître par le bas.' }, src: ['po', 'openstax', 'spektrum'] },
  'root-forms': { render: rootForms, for: ['root-types', 'adventitious-root', 'storage-root', 'root-nodule'],
    caption: { en: 'Adventitious roots grow from a stem, here at the nodes of a cutting. A storage root is swollen with reserves (carrot). Root nodules house nitrogen-fixing bacteria (Rhizobium in legumes, Frankia in alder and sea buckthorn).', fr: 'Les racines adventives naissent d’une tige, ici aux nœuds d’une bouture. Une racine de réserve est gonflée de réserves (carotte). Les nodosités abritent des bactéries fixatrices d’azote (Rhizobium chez les légumineuses, Frankia chez l’aulne et l’argousier).' }, src: ['po', 'spektrum', 'openstax'] },
};

/** The drawing to show for an entry, or null. */
export function drawingFor(id) {
  for (const [key, d] of Object.entries(DRAWINGS)) if (d.for.includes(id)) return key;
  return null;
}
