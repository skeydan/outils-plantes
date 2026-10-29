// Simulated microscope: real photographs, blurred offline to what each
// objective resolves (scripts/microscope/degrade.py), then shown at the
// angular size the eye would see in the eyepiece. Choose a specimen, an
// objective, an eyepiece and the Barlow lens; drag to move the slide.
import { lang } from '../../assets/site.js';
import { routeHref, revealAnchor } from '../../assets/route.js';
import { h, fmtn, citer } from '../../assets/ui.js';
import { SOURCES } from './sources.js';
import { SPECIMENS } from './specimens.js';
import { STRUCTURES } from './structures.js';
import {
  OBJECTIVES, EYEPIECES, BARLOW, objective, eyepiece, totalMag, rayleigh, abbe, usefulRange, verdict,
  umPerCssPx, fieldUm, resolves, LAMBDA_UM,
} from './optics.js';

const T = (en, fr) => (lang() === 'fr' ? fr : en);
const L = (o) => (o ? o[lang()] ?? o.en : '');
const f = (v, d = 2) => fmtn(v, lang(), d);
const na2 = (v) => new Intl.NumberFormat(lang() === 'fr' ? 'fr-FR' : 'en-GB', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(v);
const { cite, list } = citer(SOURCES);
const anat = (id, text) => h('a', { href: routeHref('anatomy', id), text });
const IMG = new URL('../img/', import.meta.url);

// ---------------------------------------------------------------- state
const S = { spec: SPECIMENS[0].id, obj: '10x', eye: 'wf10', barlow: false, photo: false, cx: null, cy: null };
const out = {};
const cache = new Map(); // file -> Promise<HTMLImageElement>
let raf = 0;
let alive = false;

const spec = () => SPECIMENS.find((s) => s.id === S.spec);
const mag = () => totalMag(objective(S.obj), eyepiece(S.eye), S.barlow);

function loadImage(file) {
  if (!cache.has(file)) {
    cache.set(file, new Promise((resolve, reject) => {
      const im = new Image();
      im.decoding = 'async';
      im.onload = () => resolve(im);
      im.onerror = () => { cache.delete(file); reject(new Error(`image ${file}`)); };
      im.src = new URL(file, IMG).href;
    }));
  }
  return cache.get(file);
}

/** Which stored view stands for the chosen objective, and whether the photo limits it. */
function viewFor(sp, objId, photo) {
  if (photo) return { view: sp.views.photo, limited: false, asPhoto: true };
  if (sp.views[objId]) return { view: sp.views[objId], limited: false, asPhoto: false };
  return { view: sp.views.photo, limited: true, asPhoto: true };
}

// ---------------------------------------------------------------- the view
function scaleBar(umPerPx) {
  const steps = [0.5, 1, 2, 5, 10, 20, 50, 100, 200, 500, 1000, 2000];
  const target = 110 * umPerPx;
  let best = steps[0];
  for (const s of steps) if (s <= target) best = s;
  return { um: best, px: best / umPerPx };
}
const fmtLen = (um) => (um >= 1000 ? `${f(um / 1000, 1)} mm` : `${f(um, um < 1 ? 1 : 0)} µm`);

function draw() {
  raf = 0;
  if (!alive) return;
  const sp = spec();
  const { view, limited } = viewFor(sp, S.obj, S.photo);
  const canvas = out.canvas;
  const box = out.view.getBoundingClientRect();
  const dpr = Math.min(window.devicePixelRatio || 1, 3);
  const W = Math.max(1, Math.round(box.width)), H = Math.max(1, Math.round(box.height));
  if (canvas.width !== Math.round(W * dpr) || canvas.height !== Math.round(H * dpr)) {
    canvas.width = Math.round(W * dpr); canvas.height = Math.round(H * dpr);
  }
  const ctx = canvas.getContext('2d');
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  ctx.fillStyle = '#1b1f1e';
  ctx.fillRect(0, 0, W, H);
  const upp = umPerCssPx(mag()); // µm per CSS pixel
  const wUm = sp.size_um[0], hUm = sp.size_um[1];
  if (S.cx === null) { S.cx = wUm / 2; S.cy = hUm / 2; }
  S.cx = Math.min(Math.max(S.cx, 0), wUm); S.cy = Math.min(Math.max(S.cy, 0), hUm);
  // Photo rectangle in CSS pixels.
  const x0 = W / 2 - S.cx / upp, y0 = H / 2 - S.cy / upp;
  const pw = wUm / upp, ph = hUm / upp;
  ctx.save();
  ctx.fillStyle = '#2a302e';
  ctx.fillRect(x0, y0, pw, ph);
  ctx.restore();
  const p = loadImage(view.file);
  p.then((im) => {
    if (!alive || spec() !== sp || viewFor(spec(), S.obj, S.photo).view !== view) return;
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';
    // Only the visible part, in source pixels.
    const k = view.um_per_px / upp; // CSS px per image px
    const sx = Math.max(0, -x0 / k), sy = Math.max(0, -y0 / k);
    const ex = Math.min(view.w, (W - x0) / k), ey = Math.min(view.h, (H - y0) / k);
    if (ex > sx && ey > sy) ctx.drawImage(im, sx, sy, ex - sx, ey - sy, x0 + sx * k, y0 + sy * k, (ex - sx) * k, (ey - sy) * k);
    // Field stop, when the eyepiece's field number is known.
    const fu = fieldUm(objective(S.obj), eyepiece(S.eye), S.barlow);
    if (fu) {
      const r = fu / 2 / upp;
      if (r < Math.hypot(W, H) / 2) {
        ctx.save();
        ctx.beginPath(); ctx.rect(0, 0, W, H); ctx.arc(W / 2, H / 2, r, 0, Math.PI * 2, true);
        ctx.fillStyle = 'rgba(8,10,10,0.92)'; ctx.fill('evenodd');
        ctx.restore();
      }
    }
    out.view.setAttribute('aria-busy', 'false');
  }).catch(() => { out.banner.hidden = false; out.banner.textContent = T('This image could not be loaded.', 'Cette image n’a pas pu être chargée.'); });
  // Scale bar and banner.
  const sb = scaleBar(upp);
  out.scaleBar.style.width = `${sb.px}px`;
  out.scaleText.textContent = fmtLen(sb.um);
  const msgs = [];
  if (S.photo) msgs.push(T('The photograph as taken (its own objective), at the same magnification: compare with the simulated view.', 'La photographie telle que prise (avec son propre objectif), au même grossissement : comparez avec la vue simulée.'));
  else if (limited) msgs.push(T(`This photograph is not sharp enough to stand for a ${S.obj} objective: it is shown as taken, so your microscope would show more than this.`, `Cette photographie n’est pas assez nette pour représenter un objectif ${S.obj} : elle est montrée telle quelle, votre microscope en montrerait davantage.`));
  if (pw < W / 3 && ph < H / 3) msgs.push(T(`At this magnification the whole photograph (${fmtLen(wUm)} wide) is this small patch; the dark around it is outside the photograph, not empty slide.`, `À ce grossissement, toute la photographie (${fmtLen(wUm)} de large) n’est que ce petit rectangle ; le noir autour est hors de la photographie, pas une lame vide.`));
  out.banner.hidden = msgs.length === 0;
  out.banner.textContent = msgs.join(' ');
  drawMap(W, H, upp);
}
const redraw = () => { if (!raf) raf = requestAnimationFrame(draw); };

/** Overview: the whole photo, the part in view, the field of view. */
function drawMap(W, H, upp) {
  const sp = spec();
  const c = out.map;
  const size = 220, dpr = Math.min(window.devicePixelRatio || 1, 3);
  if (c.width !== size * dpr) { c.width = size * dpr; c.height = size * dpr; }
  const ctx = c.getContext('2d');
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  ctx.clearRect(0, 0, size, size);
  const fu = fieldUm(objective(S.obj), eyepiece(S.eye), S.barlow);
  const extent = Math.max(sp.size_um[0], sp.size_um[1], fu || 0) * 1.08;
  const k = size / extent; // map px per µm
  const ox = size / 2 - S.cx * k, oy = size / 2 - S.cy * k;
  out.mapK = { k, ox, oy };
  loadImage(sp.thumb).then((im) => {
    if (!alive || spec() !== sp) return;
    ctx.drawImage(im, ox, oy, sp.size_um[0] * k, sp.size_um[1] * k);
    ctx.lineWidth = 2;
    ctx.strokeStyle = '#0e98ad';
    ctx.strokeRect(size / 2 - (W / 2) * upp * k, size / 2 - (H / 2) * upp * k, W * upp * k, H * upp * k);
    if (fu) {
      ctx.setLineDash([4, 3]); ctx.strokeStyle = getComputedStyle(c).color;
      ctx.beginPath(); ctx.arc(size / 2, size / 2, (fu / 2) * k, 0, Math.PI * 2); ctx.stroke(); ctx.setLineDash([]);
    }
  }).catch(() => {});
}

// ---------------------------------------------------------------- readout
function readout() {
  const o = objective(S.obj), e = eyepiece(S.eye), sp = spec();
  const M = mag();
  const [lo, hi] = usefulRange(o.na);
  const v = verdict(M, o.na);
  const upp = umPerCssPx(M);
  const fu = fieldUm(o, e, S.barlow);
  const sym = { useful: '✓', empty: '!', low: '↓' }[v];
  const say = {
    useful: [T('Useful magnification', 'Grossissement utile'), T(`Between 500 and 1000 × NA (${f(lo, 0)}× to ${f(hi, 0)}×): the eye sees what the objective resolves.`, `Entre 500 et 1000 × ON (${f(lo, 0)}× à ${f(hi, 0)}×) : l’œil voit ce que l’objectif résout.`)],
    empty: [T('Empty magnification', 'Grossissement vide'), T(`Above 1000 × NA (${f(hi, 0)}×): the image is bigger, not sharper. Only a higher NA would show more.`, `Au-delà de 1000 × ON (${f(hi, 0)}×) : l’image est plus grande, pas plus nette. Seule une ON plus grande montrerait plus.`)],
    low: [T('Below the useful range', 'Sous le grossissement utile'), T(`Under 500 × NA (${f(lo, 0)}×): the objective resolves finer detail than the eye can see at this size; a stronger eyepiece would show it.`, `Sous 500 × ON (${f(lo, 0)}×) : l’objectif résout plus fin que ce que l’œil voit à cette taille ; un oculaire plus fort le montrerait.`)],
  }[v];
  out.verdict.dataset.v = v;
  out.verdict.replaceChildren(h('span', { class: 'mc-sym', 'aria-hidden': 'true', text: sym }), h('b', { text: say[0] }), h('br'), say[1], ' ', ...cite('microscopyu-useful', 'bresser-faq'));
  const rows = [
    [T('Total magnification', 'Grossissement total'), `${o.mag} × ${e.mag}${S.barlow ? ` × ${BARLOW}` : ''} = ${f(M, 0)}×`],
    [T('Numerical aperture (NA)', 'Ouverture numérique (ON)'), o.naAssumed
      ? [na2(o.na), h('small', {}, T('assumed, not in Bresser’s manual', 'supposée, absente du mode d’emploi'), ' ', ...cite(o.naSrc, 'bresser-manual'))]
      : na2(o.na)],
    [T('Resolution, Rayleigh 0.61 λ/NA', 'Résolution, Rayleigh 0,61 λ/ON'), `${f(rayleigh(o.na), 2)} µm`],
    [T('Abbe λ/(2 NA), matched condenser', 'Abbe λ/(2 ON), condenseur adapté'), `${f(abbe(o.na), 2)} µm`],
    [T('Field of view', 'Champ de vision'), fu
      ? [`${fmtLen(fu)} ${T('across', 'de diamètre')}`, h('small', {}, e.fnAssumed ? T(`assumed field number ${e.fn} mm`, `indice de champ supposé ${e.fn} mm`) : '', ' ', ...cite(e.fnSrc, 'bresser-manual'))]
      : [T('unknown: Bresser gives no field number for this eyepiece', 'inconnu : Bresser ne donne pas d’indice de champ pour cet oculaire'), ' ', ...cite('bresser-manual', 'bresser-se')]],
    [T('One screen pixel', 'Un pixel de l’écran'), `${f(upp, upp < 1 ? 2 : 1)} µm`],
  ];
  out.readout.replaceChildren(...rows.map(([k, val]) => h('tr', {}, h('th', { scope: 'row', text: k }), h('td', { class: 'v' }, val))));
  out.viewLabel.textContent = T(
    `${L(sp.name)}, ${S.photo ? 'photograph as taken' : `simulated ${o.id} objective (NA ${na2(o.na)}${o.naAssumed ? ', assumed' : ''})`}, ${f(M, 0)}×. Drag or use the arrow keys to move the slide.`,
    `${L(sp.name)}, ${S.photo ? 'photographie telle que prise' : `objectif ${o.id} simulé (ON ${na2(o.na)}${o.naAssumed ? ', supposée' : ''})`}, ${f(M, 0)}×. Faites glisser ou utilisez les flèches pour déplacer la lame.`);
  out.view.setAttribute('aria-label', out.viewLabel.textContent);
  paintStructures();
}

// ---------------------------------------------------------------- structures table
function paintStructures() {
  const sp = spec();
  out.structBody.replaceChildren(...STRUCTURES.map((st) => {
    const inPhoto = sp.structures.includes(st.id);
    return h('tr', {},
      h('th', { scope: 'row' }, st.anatomy ? anat(st.anatomy, L(st.name)) : L(st.name), inPhoto ? h('small', { text: T('in this photograph', 'dans cette photographie') }) : null),
      h('td', {}, L(st.sizeText), ' ', ...cite(...st.src)),
      ...OBJECTIVES.map((o) => {
        const lo = resolves(st.sizeUm, o.na), hi = resolves(st.sizeMaxUm ?? st.sizeUm, o.na);
        const txt = { no: T('no', 'non'), dot: T('a dot', 'un point'), shape: T('shape', 'forme') };
        const sym = { no: '–', dot: '·', shape: '✓' }[hi];
        const label = lo === hi ? txt[lo] : `${txt[lo]} ${T('to', 'à')} ${txt[hi]}`;
        return h('td', { class: `mc-r${o.id === S.obj ? ' mc-cur' : ''}${hi === 'no' ? ' mc-res-no' : ''}` }, `${sym} ${label}`);
      }),
      h('td', {}, L(st.contrast), st.contrastSrc?.length ? ' ' : '', ...cite(...(st.contrastSrc || []))));
  }));
  out.structHead.querySelectorAll('th[data-obj]').forEach((th) => th.classList.toggle('mc-cur', th.dataset.obj === S.obj));
}

// ---------------------------------------------------------------- controls
function choiceGroup(legend, items, key, onpick) {
  const btns = items.map((it) => {
    const b = h('button', { type: 'button', 'aria-pressed': String(S[key] === it.id), 'data-id': it.id }, ...it.content);
    b.addEventListener('click', () => { S[key] = it.id; btns.forEach((x) => x.setAttribute('aria-pressed', String(x.dataset.id === it.id))); onpick(it.id); });
    return b;
  });
  return h('fieldset', { class: 'mc-group' }, h('legend', { text: legend }), h('div', { class: `mc-choices${key === 'spec' ? ' mc-specimens' : ''}` }, ...btns));
}

function update() { readout(); redraw(); paintPhotoMeta(); }

function paintPhotoMeta() {
  const sp = spec();
  const a = sp.photo;
  out.photoMeta.replaceChildren(
    T('Photograph: ', 'Photographie : '), h('a', { href: a.page, rel: 'noopener', target: '_blank', text: a.title }), ` · ${a.author} · `,
    a.licenceUrl ? h('a', { href: a.licenceUrl, rel: 'noopener license', target: '_blank', text: a.licence }) : a.licence,
    ` · ${L(sp.prep)} · `, T('Scale: ', 'Échelle : '), L(sp.scaleNote),
    ' · ', h('a', { href: `#mc-credit-${sp.id}`, text: T('details', 'détails') }));
}

function pan(dxUm, dyUm) { S.cx += dxUm; S.cy += dyUm; redraw(); }

function wireView() {
  let drag = null;
  out.view.addEventListener('pointerdown', (ev) => {
    drag = { x: ev.clientX, y: ev.clientY, id: ev.pointerId };
    out.view.setPointerCapture(ev.pointerId);
    out.view.classList.add('dragging');
  });
  out.view.addEventListener('pointermove', (ev) => {
    if (!drag || ev.pointerId !== drag.id) return;
    const upp = umPerCssPx(mag());
    pan(-(ev.clientX - drag.x) * upp, -(ev.clientY - drag.y) * upp);
    drag.x = ev.clientX; drag.y = ev.clientY;
  });
  const end = () => { drag = null; out.view.classList.remove('dragging'); };
  out.view.addEventListener('pointerup', end);
  out.view.addEventListener('pointercancel', end);
  out.view.addEventListener('keydown', (ev) => {
    const step = 60 * umPerCssPx(mag());
    const d = { ArrowLeft: [-step, 0], ArrowRight: [step, 0], ArrowUp: [0, -step], ArrowDown: [0, step] }[ev.key];
    if (!d) return;
    ev.preventDefault();
    pan(...d);
  });
  const toMap = (ev) => {
    const r = out.map.getBoundingClientRect();
    const { k, ox, oy } = out.mapK || {};
    if (!k) return;
    const mx = ((ev.clientX - r.left) / r.width) * 220, my = ((ev.clientY - r.top) / r.height) * 220;
    S.cx = (mx - ox) / k; S.cy = (my - oy) / k; redraw();
  };
  let mapDrag = false;
  out.map.addEventListener('pointerdown', (ev) => { mapDrag = true; out.map.setPointerCapture(ev.pointerId); toMap(ev); });
  out.map.addEventListener('pointermove', (ev) => { if (mapDrag) toMap(ev); });
  out.map.addEventListener('pointerup', () => { mapDrag = false; });
  out.ro = new ResizeObserver(redraw);
  out.ro.observe(out.view);
}

// ---------------------------------------------------------------- page
function build(main) {
  document.title = `${T('Simulated microscope', 'Microscope simulé')} · outils-plantes`;
  out.canvas = h('canvas', { 'aria-hidden': 'true' });
  out.banner = h('p', { class: 'mc-banner', hidden: true, 'aria-live': 'polite' });
  out.scaleBar = h('span');
  out.scaleText = document.createTextNode('');
  out.view = h('div', { class: 'mc-view', id: 'mc-view', tabindex: '0', role: 'img', 'aria-busy': 'true' }, out.canvas, out.banner,
    h('div', { class: 'mc-scale', 'aria-hidden': 'true' }, out.scaleBar, out.scaleText));
  out.viewLabel = h('p', { class: 'visually-hidden', 'aria-live': 'polite' });
  out.map = h('canvas', { class: 'mc-map', width: 220, height: 220, role: 'img', 'aria-label': T('Overview: the whole photograph, the part in view (blue) and the field of view (dashed circle). Click to move there.', 'Vue d’ensemble : toute la photographie, la partie visible (bleu) et le champ de vision (cercle pointillé). Cliquez pour vous y rendre.') });
  out.verdict = h('p', { class: 'mc-verdict', 'aria-live': 'polite' });
  out.readout = h('tbody');
  out.photoMeta = h('p', { class: 'mc-photo-meta' });
  const photoBox = h('input', { type: 'checkbox', id: 'mc-photo' });
  photoBox.checked = S.photo;
  photoBox.addEventListener('change', () => { S.photo = photoBox.checked; update(); });
  const barlowBox = h('input', { type: 'checkbox', id: 'mc-barlow' });
  barlowBox.checked = S.barlow;
  barlowBox.addEventListener('change', () => { S.barlow = barlowBox.checked; update(); });

  const specimens = choiceGroup(T('Specimen', 'Échantillon'), SPECIMENS.map((sp) => ({
    id: sp.id, content: [h('img', { src: new URL(sp.thumb, IMG).href, alt: '', width: 52, height: 52, loading: 'lazy' }), h('span', {}, L(sp.name), h('small', { text: L(sp.kind) }))],
  })), 'spec', () => { S.cx = null; S.cy = null; location.replace(routeHref('microscope', S.spec)); update(); });
  const objectives = choiceGroup(T('Objective (on the nosepiece)', 'Objectif (sur le revolver)'), OBJECTIVES.map((o) => ({
    id: o.id, content: [o.id, h('small', { text: `${T('NA', 'ON')} ${o.naAssumed ? '≈ ' : ''}${na2(o.na)} · ${f(rayleigh(o.na), 2)} µm` })],
  })), 'obj', update);
  const eyepieces = choiceGroup(T('Eyepiece', 'Oculaire'), EYEPIECES.map((e) => ({
    id: e.id, content: [`WF${e.mag}x`, h('small', { text: T('only magnifies', 'agrandit seulement') })],
  })), 'eye', update);

  const sim = h('section', { class: 'card wide', id: 'simulator' },
    h('h2', {}, h('span', { class: 'step', text: '1' }), T('Look through it', 'Regardez dedans')),
    h('div', { class: 'mc-controls' }, specimens,
      h('div', { class: 'mc-row' }, objectives, eyepieces,
        h('div', { class: 'mc-checks' },
          h('label', { class: 'mc-check', for: 'mc-barlow' }, barlowBox, T('2x Barlow lens in the tube', 'Lentille de Barlow 2x dans le tube')),
          h('label', { class: 'mc-check', for: 'mc-photo' }, photoBox, T('Show the photograph as taken', 'Montrer la photographie telle que prise'))))),
    h('div', { class: 'mc-stage' },
      h('div', {}, out.view, out.viewLabel, out.photoMeta),
      h('div', { class: 'mc-side' }, out.map, out.verdict, h('table', { class: 'kv mc-readout' }, out.readout))),
    h('p', { class: 'hint' },
      T('The view is drawn at the size the image has in the eyepiece: one CSS pixel per 0.0213°, the visual angle of a reference pixel seen at arm’s length. On most screens at a normal distance you see it about as large as in the microscope, and your own eye sets the limit of what you can make out, as it would at the eyepiece.',
        'La vue est dessinée à la taille qu’a l’image dans l’oculaire : un pixel CSS pour 0,0213°, l’angle sous lequel on voit un pixel de référence à bout de bras. Sur la plupart des écrans, à distance normale, vous la voyez à peu près aussi grande qu’au microscope, et c’est votre propre œil qui fixe la limite de ce que vous distinguez, comme à l’oculaire.'),
      ' ', ...cite('css-px', 'microscopyu-useful')));

  // 2. Structures
  out.structBody = h('tbody');
  out.structHead = h('thead', {}, h('tr', {},
    h('th', { scope: 'col', text: T('Structure', 'Structure') }), h('th', { scope: 'col', text: T('Typical size', 'Taille typique') }),
    ...OBJECTIVES.map((o) => h('th', { scope: 'col', class: 'mc-r', 'data-obj': o.id, text: `${o.id} (${T('NA', 'ON')} ${o.naAssumed ? '≈ ' : ''}${na2(o.na)})` })),
    h('th', { scope: 'col', text: T('Contrast in brightfield', 'Contraste en fond clair') })));
  const structures = h('section', { class: 'card wide', id: 'structures' },
    h('h2', {}, h('span', { class: 'step', text: '2' }), T('What each objective can show', 'Ce que chaque objectif peut montrer')),
    h('p', {}, T('Resolution is one condition, contrast the other: a structure must be larger than what the objective resolves and differ from its surroundings in colour or darkness. Our rule of thumb with the Rayleigh distance d: smaller than d, not resolved; between d and 3 d, a dot or blur whose shape cannot be made out; from 3 d, its shape shows. Sizes are typical ranges, and both ends are checked: “no to shape” means the small ones are not resolved and the large ones are.',
      'La résolution est une condition, le contraste l’autre : une structure doit être plus grande que ce que l’objectif résout et se distinguer de son entourage par la couleur ou la densité. Notre règle empirique avec la distance de Rayleigh d : plus petite que d, non résolue ; entre d et 3 d, un point ou une tache dont on ne voit pas la forme ; à partir de 3 d, sa forme apparaît. Les tailles sont des fourchettes typiques, et les deux bouts sont testés : « non à forme » veut dire que les petits ne sont pas résolus et les grands si.'), ' ', ...cite('microscopyu-res')),
    h('div', { class: 'mc-table-wrap' }, h('table', { class: 'mc-struct' }, out.structHead, out.structBody)));

  // 3. Why
  const why = h('section', { class: 'card wide', id: 'why' },
    h('h2', {}, h('span', { class: 'step', text: '3' }), T('The objective resolves, the eyepiece magnifies', 'L’objectif résout, l’oculaire agrandit')),
    h('p', {}, T('Light passing a small detail spreads out (diffraction). The objective only collects a cone of it, measured by its numerical aperture, NA = n·sin α (n, the refractive index between lens and slide, 1 in air; α, half the angle of the cone). Each point of the specimen becomes a small disc with rings, the Airy pattern; two points closer than about 0.61 λ/NA merge into one (Rayleigh). With green light (λ = 0.55 µm): 3.4 µm for a 4x/0.10, 1.3 µm for a 10x/0.25, 0.52 µm for a 40x/0.65. With a condenser opened to the objective’s aperture, Abbe’s λ/(2 NA) gives slightly smaller numbers. Magnification does not appear in these formulas.',
      'La lumière qui passe un petit détail s’étale (diffraction). L’objectif n’en recueille qu’un cône, mesuré par son ouverture numérique, ON = n·sin α (n, l’indice de réfraction entre lentille et lame, 1 dans l’air ; α, la moitié de l’angle du cône). Chaque point de l’objet devient un petit disque entouré d’anneaux, la tache d’Airy ; deux points plus proches qu’environ 0,61 λ/ON se confondent (Rayleigh). En lumière verte (λ = 0,55 µm) : 3,4 µm pour un 4x/0,10, 1,3 µm pour un 10x/0,25, 0,52 µm pour un 40x/0,65. Avec un condenseur ouvert à l’ouverture de l’objectif, la formule d’Abbe λ/(2 ON) donne des valeurs un peu plus petites. Le grossissement n’apparaît pas dans ces formules.'),
      ' ', ...cite('microscopyu-na', 'microscopyu-res')),
    h('p', {}, T('The eyepiece then magnifies the image the objective made, blur included. It must magnify enough for the eye to see the finest resolved detail: the eye separates about 0.15 mm at 250 mm (2 minutes of arc), which gives a total magnification of at least about 500 × NA. Beyond about 1000 × NA nothing new appears: this is empty magnification. Bresser’s own rule for its microscopes says the same: at most 1000 × the aperture, about 650× for a 40x objective of NA 0.65.',
      'L’oculaire agrandit ensuite l’image formée par l’objectif, flou compris. Il doit agrandir assez pour que l’œil voie le plus fin détail résolu : l’œil sépare environ 0,15 mm à 250 mm (2 minutes d’arc), d’où un grossissement total d’au moins 500 × ON environ. Au-delà d’environ 1000 × ON, rien de nouveau n’apparaît : c’est le grossissement vide. La règle que Bresser donne pour ses microscopes dit la même chose : au plus 1000 × l’ouverture, environ 650× pour un objectif 40x d’ON 0,65.'),
      ' ', ...cite('microscopyu-useful', 'bresser-faq')),
    h('p', {}, T('On the Biorit SE 1600x, the 40x objective with the WF20x eyepiece and the Barlow lens gives 1600×, more than twice the useful limit: try it on a chloroplast. The 4x with the WF10x (40×) is the opposite case: it resolves more than the eye can see at that size, which is fine for finding your way on the slide.',
      'Sur le Biorit SE 1600x, l’objectif 40x avec l’oculaire WF20x et la lentille de Barlow donne 1600×, plus du double de la limite utile : essayez sur un chloroplaste. Le 4x avec le WF10x (40×) est le cas inverse : il résout plus que ce que l’œil voit à cette taille, ce qui convient pour se repérer sur la lame.'),
      ' ', ...cite('bresser-se')),
    h('p', { class: 'note' }, T('The microscope, as Bresser gives it: the manual of the Biorit SE 1600x (article 14950, version of July 2024, technical data on p. 2) lists a monocular head, WF10x and WF20x eyepieces, 4x, 10x and 40x objectives, a 2x Barlow lens, 40× to 1600×, and LED light; its parts list names a condenser with a colour filter wheel. That is all: neither the manual nor the product page gives the numerical aperture of any objective, the field number of either eyepiece or the aperture of the condenser.',
      'Le microscope, tel que Bresser le décrit : le mode d’emploi du Biorit SE 1600x (article 14950, version de juillet 2024, données techniques p. 2) indique une tête monoculaire, des oculaires WF10x et WF20x, des objectifs 4x, 10x et 40x, une lentille de Barlow 2x, 40× à 1600× et un éclairage LED ; sa liste des pièces nomme un condenseur avec une roue de filtres colorés. C’est tout : ni le mode d’emploi ni la fiche du produit ne donnent l’ouverture numérique d’un objectif, l’indice de champ d’un oculaire ou l’ouverture du condenseur.'),
      ' ', ...cite('bresser-manual', 'bresser-se')),
    h('p', { class: 'note' }, T('So the apertures used here are assumptions: 0.10, 0.25 and 0.65, the usual values for achromats of these magnifications (0.65 is also the 40x of Bresser’s own example). The 18 mm field number of the WF10x is assumed too, taken from Bresser’s WF10x of the Erudit Basic, which has the same barrel; the field of the WF20x stays unknown. On many objectives the aperture is engraved after the magnification (for example 40/0.65); if yours carry one, it is the value to trust.',
      'Les ouvertures utilisées ici sont donc des hypothèses : 0,10, 0,25 et 0,65, les valeurs habituelles des achromats de ces grossissements (0,65 est aussi le 40x de l’exemple de Bresser). L’indice de champ de 18 mm du WF10x est supposé lui aussi, repris du WF10x de l’Erudit Basic de Bresser, au même diamètre de tube ; le champ du WF20x reste inconnu. Sur beaucoup d’objectifs, l’ouverture est gravée après le grossissement (par exemple 40/0,65) ; si les vôtres en portent une, c’est elle qui fait foi.'),
      ' ', ...cite('microscopyu-na', 'bresser-faq', 'bresser-erudit')));

  // 4. Method and reliability
  const method = h('section', { class: 'card wide', id: 'method' },
    h('h2', {}, h('span', { class: 'step', text: '4' }), T('How the images are made, and how far to trust them', 'Comment les images sont faites, et quelle confiance leur accorder')),
    ...methodParagraphs());

  // 5. Credits
  const credits = h('section', { class: 'card wide', id: 'credits' },
    h('h2', { text: T('Photographs: authors, licences, what we changed', 'Photographies : auteurs, licences, ce que nous avons modifié') }),
    h('ol', { class: 'mc-credit' }, ...SPECIMENS.map((sp) => h('li', { id: `mc-credit-${sp.id}` },
      h('b', { text: L(sp.name) }), ' (', h('i', { text: sp.taxon }), '). ',
      h('a', { href: sp.photo.page, rel: 'noopener', target: '_blank', text: sp.photo.title }), `, ${sp.photo.author}, `,
      h('a', { href: sp.photo.licenceUrl, rel: 'noopener license', target: '_blank', text: sp.photo.licence }), '. ',
      L(sp.photo.about), ' ', T('Scale: ', 'Échelle : '), L(sp.scaleNote), ' ', T('Taken with: ', 'Prise avec : '), L(sp.takenWith), ' ',
      T(`Modified: cropped (labels and scale bar left out), blurred and resampled as described above; our versions are shared under ${sp.photo.licence}.`, `Modifiée : recadrée (légendes et barre d’échelle retirées), floutée et rééchantillonnée comme décrit plus haut ; nos versions sont partagées sous ${sp.photo.licence}.`)))));

  const sources = h('section', { class: 'card wide sources' }, h('h2', { text: 'Sources' }), list(),
    h('p', { class: 'small muted', text: T('Texts are our own. The images are the photographs credited above, changed only by the blur and resampling described in section 4 (scripts/microscope/ in the repository).', 'Les textes sont les nôtres. Les images sont les photographies créditées ci-dessus, modifiées seulement par le flou et le rééchantillonnage décrits en partie 4 (scripts/microscope/ dans le dépôt).') }));

  main.replaceChildren(
    h('h1', { text: T('Simulated microscope: what an objective really shows', 'Microscope simulé : ce que montre vraiment un objectif') }),
    h('p', { class: 'lead muted', text: T('Real photographs of plant tissues, blurred by us exactly as much as a student microscope’s objective would blur them, then shown at the size you would see in the eyepiece. Change the objective, then the eyepiece: one makes details appear, the other only makes them bigger.', 'De vraies photographies de tissus végétaux, floutées par nous exactement autant que les floute l’objectif d’un microscope d’élève, puis montrées à la taille vue dans l’oculaire. Changez d’objectif, puis d’oculaire : l’un fait apparaître des détails, l’autre les agrandit seulement.') }),
    h('nav', { class: 'nav-tools', 'aria-label': T('On this page', 'Sur cette page') },
      ...[['simulator', T('Microscope', 'Microscope')], ['structures', T('What shows', 'Ce qui se voit')], ['why', T('Why', 'Pourquoi')], ['method', T('Method and limits', 'Méthode et limites')], ['credits', T('Credits', 'Crédits')]]
        .map(([id, t]) => h('a', { href: routeHref('microscope', id), text: t }))),
    h('div', { class: 'tool-cols mc-cols' }, sim, structures, why, method, credits, sources));
  wireView();
  update();
}

function methodParagraphs() {
  const P = (en, fr, ...src) => h('p', {}, T(en, fr), src.length ? ' ' : '', ...cite(...src));
  const items = (rows) => h('ul', {}, ...rows.map(([en, fr, ...src]) => h('li', {}, T(en, fr), src.length ? ' ' : '', ...cite(...src))));
  return [
    P('No drawing is involved. Each specimen is a photograph taken through a better microscope than the one simulated, with a known scale and an open licence. For each objective we take its light intensities (sRGB converted to linear light), multiply their spectrum by the transfer function of an aberration-free objective of that aperture (divided by that of the objective that took the photograph, when it is known), and resample at a pixel fine enough to keep everything that passes. Multiplying by the transfer function is the same as replacing every point by the Airy pattern. The ratio is never above 1, so nothing is sharpened. The eyepiece and the Barlow lens then only change the size on the screen.',
      'Aucun dessin n’intervient. Chaque échantillon est une photographie prise avec un meilleur microscope que celui qu’on simule, d’échelle connue et sous licence libre. Pour chaque objectif, nous prenons ses intensités lumineuses (le sRGB converti en lumière linéaire), multiplions leur spectre par la fonction de transfert d’un objectif sans aberration de cette ouverture (divisée par celle de l’objectif qui a pris la photo, quand on la connaît), puis rééchantillonnons avec un pixel assez fin pour garder tout ce qui passe. Multiplier par la fonction de transfert revient à remplacer chaque point par la tache d’Airy. Le rapport ne dépasse jamais 1 : rien n’est rendu plus net. L’oculaire et la lentille de Barlow ne changent ensuite que la taille à l’écran.',
      'microscopyu-mtf', 'microscopyu-res'),
    h('h3', { text: T('Checked before building', 'Vérifié avant de construire') }),
    items([
      ['Scale: each photograph has a scale bar drawn by its author or a stated magnification and pixel size; we measured the bar in pixels. An error of a few per cent in scale changes sizes on screen by as much, not the blur, which is computed in micrometres.', 'Échelle : chaque photographie porte une barre d’échelle de son auteur ou un grossissement et une taille de pixel indiqués ; nous avons mesuré la barre en pixels. Une erreur de quelques pour cent sur l’échelle change d’autant les tailles à l’écran, pas le flou, calculé en micromètres.'],
      ['Sharpness of the source: a photograph can only stand for objectives it out-resolves. Its pixel must be at most λ/(4 NA) (0.21 µm for the 40x) and its own objective must have a larger aperture. We also measure how far its spectrum rises above the noise; where a photograph falls short, that objective is not simulated with it and the view says so.', 'Netteté de la source : une photographie ne peut représenter que des objectifs qu’elle dépasse en résolution. Son pixel doit faire au plus λ/(4 ON) (0,21 µm pour le 40x) et son propre objectif doit avoir une ouverture plus grande. Nous mesurons aussi jusqu’où son spectre dépasse le bruit ; quand une photographie ne suffit pas, cet objectif n’est pas simulé avec elle et la vue le dit.'],
      ['Preparation: thin sections, stained or naturally coloured, in brightfield, like the slides sold with student microscopes. Contrast is the photograph’s, kept as it is: a stain makes walls and nuclei stand out that would be nearly invisible unstained.', 'Préparation : coupes fines, colorées ou naturellement colorées, en fond clair, comme les lames vendues avec les microscopes d’élève. Le contraste est celui de la photographie, conservé tel quel : une coloration fait ressortir parois et noyaux qui seraient presque invisibles sans elle.'],
      ['Limits of light microscopy: the endoplasmic reticulum, plasmodesmata, ribosomes, membranes and microtubules are far below 0.2 µm. No objective of this microscope shows them, and the photographs cannot either; they are listed in section 2 for that reason, never drawn.', 'Limites de la microscopie optique : le réticulum endoplasmique, les plasmodesmes, les ribosomes, les membranes et les microtubules sont bien en dessous de 0,2 µm. Aucun objectif de ce microscope ne les montre, et les photographies non plus ; ils figurent en partie 2 pour cette raison, jamais dessinés.', 'vigo-lm', 'openstax-cells', 'vigo-em'],
    ]),
    h('h3', { text: T('What the simulation leaves out', 'Ce que la simulation laisse de côté') }),
    items([
      ['It is the best case: a perfect objective of the stated aperture, a condenser opened to match it, clean slide and cover glass. A cheap objective, a closed diaphragm or a thick section give less. Closing the diaphragm raises contrast but lowers resolution; that partially coherent imaging is not modelled.', 'C’est le meilleur cas : un objectif parfait de l’ouverture indiquée, un condenseur ouvert à sa mesure, lame et lamelle propres. Un objectif bon marché, un diaphragme fermé ou une coupe épaisse donnent moins. Fermer le diaphragme augmente le contraste mais réduit la résolution ; cette imagerie partiellement cohérente n’est pas modélisée.', 'microscopyu-res'],
      ['One wavelength, 550 nm, for all colours; real white light blurs red a little more and blue a little less, and achromats are not perfectly corrected.', 'Une seule longueur d’onde, 550 nm, pour toutes les couleurs ; en lumière blanche, le rouge est un peu plus flou et le bleu un peu moins, et les achromats ne sont pas parfaitement corrigés.', 'microscopyu-res'],
      ['Depth: the photograph is one focal plane. A 4x objective sees the whole thickness of a section sharp at once, a 40x only a thin slice; parts that were out of focus in the photograph stay so in every view.', 'Profondeur : la photographie est un seul plan de mise au point. Un objectif 4x voit net toute l’épaisseur d’une coupe à la fois, un 40x une tranche mince seulement ; ce qui était flou dans la photographie le reste dans toutes les vues.'],
      ['The source’s own blur is assumed to be that of a perfect objective of its stated aperture; when it is unknown, none is removed, so the view is slightly blurrier than the true one. Camera, compression and the photographer’s choices of light and colour are those of the source.', 'Le flou propre à la source est supposé être celui d’un objectif parfait de son ouverture indiquée ; si elle est inconnue, on n’en retire rien, si bien que la vue est un peu plus floue que la vraie. Appareil photo, compression, éclairage et couleurs sont ceux de la source.'],
      ['Gaps: we found no open-licence photograph with a scale of Elodea leaf cells, or of stomata in brightfield. The tulip epidermis is shown in DIC, which adds relief a brightfield microscope does not give; only its blur and size are simulated faithfully. No photograph here is sharp enough to stand for the 40x except the leaf and the onion root tip.', 'Lacunes : nous n’avons trouvé aucune photographie sous licence libre et à l’échelle connue de cellules d’élodée, ni de stomates en fond clair. L’épiderme de tulipe est en DIC, qui ajoute un relief que le fond clair ne donne pas ; seuls son flou et sa taille sont simulés fidèlement. Aucune photographie ici n’est assez nette pour représenter le 40x, sauf la feuille et la pointe de racine d’oignon.'],
      ['The screen: the view assumes the CSS reference pixel (0.0213°). A large monitor seen from close by shows it bigger, a phone held far smaller; the comparison between objectives stays right.', 'L’écran : la vue suppose le pixel de référence CSS (0,0213°). Un grand écran vu de près l’affiche plus grand, un téléphone tenu loin plus petit ; la comparaison entre objectifs reste juste.', 'css-px'],
    ]),
    P('Verdict: for the size of what is resolved, the method is sound, because it uses only the physics of diffraction and real photographs that are sharper than the objective. It does not predict contrast, which depends on the preparation. Treat each view as what a well-adjusted student microscope can show at best, on a slide like this one.',
      'Verdict : pour la taille de ce qui est résolu, la méthode est solide, car elle n’emploie que la physique de la diffraction et de vraies photographies plus nettes que l’objectif. Elle ne prédit pas le contraste, qui dépend de la préparation. Prenez chaque vue comme ce qu’un microscope d’élève bien réglé peut montrer au mieux, sur une lame comme celle-ci.'),
  ];
}

// ---------------------------------------------------------------- tab interface
const SECTIONS = ['simulator', 'structures', 'why', 'method', 'credits'];
function route(sub, smooth) {
  if (sub && SPECIMENS.some((s) => s.id === sub)) {
    if (S.spec !== sub) { S.spec = sub; S.cx = null; S.cy = null; }
    return false;
  }
  const el = SECTIONS.includes(sub) ? document.getElementById(sub) : null;
  if (el) revealAnchor(el, { smooth });
  return true;
}
/** Build the tab into its panel; sub is a specimen id or a section id. */
export function mount(panel, sub) {
  alive = true;
  const isSection = route(sub, false);
  build(panel);
  if (sub && isSection) requestAnimationFrame(() => route(sub, false));
}
/** The route changed inside the tab. */
export function show(sub) {
  const before = S.spec;
  if (!route(sub, true) && S.spec !== before) {
    document.querySelectorAll('.mc-specimens button').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.id === S.spec)));
    update();
  }
}
export function unmount() {
  alive = false;
  out.ro?.disconnect();
  if (raf) cancelAnimationFrame(raf);
  raf = 0;
}

export const _test = { viewFor, scaleBar, LAMBDA_UM };
