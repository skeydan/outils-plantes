// The simulated microscope: optics against the cited values.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { OBJECTIVES, EYEPIECES, objective, eyepiece, totalMag, rayleigh, abbe, usefulRange, verdict, umPerCssPx, fieldUm, resolves, cutoff } from '../site/microscope/js/optics.js';

const close = (a, b, tol, msg) => assert.ok(Math.abs(a - b) <= tol, `${msg}: ${a} vs ${b}`);

test('objectives and eyepieces of the Biorit SE: 40x to 1600x', () => {
  assert.deepEqual(OBJECTIVES.map((o) => o.id), ['4x', '10x', '40x']);
  assert.deepEqual(EYEPIECES.map((e) => e.mag), [10, 20]);
  const mags = [];
  for (const o of OBJECTIVES) for (const e of EYEPIECES) for (const b of [false, true]) mags.push(totalMag(o, e, b));
  assert.equal(Math.min(...mags), 40);
  assert.equal(Math.max(...mags), 1600);
});

test('the manual gives no aperture or field number: those values are flagged as assumptions', async () => {
  const { SOURCES } = await import('../site/microscope/js/sources.js');
  const manual = SOURCES.find((s) => s.id === 'bresser-manual');
  assert.match(manual.text, /v072024a/);
  assert.match(manual.text, /p\. 2/);
  assert.match(manual.text, /no numerical aperture/);
  assert.match(manual.text, /WF10x \/ WF20x/);
  assert.match(manual.text, /Barlow lens 2x/);
  assert.match(manual.text, /40x–1600x/);
  // MicroscopyU plan achromats, labelled as assumed, with their source.
  assert.deepEqual(OBJECTIVES.map((o) => o.na), [0.10, 0.25, 0.65]);
  for (const o of OBJECTIVES) {
    assert.equal(o.naAssumed, true, o.id);
    assert.ok(SOURCES.some((s) => s.id === o.naSrc), `${o.id}: ${o.naSrc}`);
  }
  const [wf10, wf20] = EYEPIECES;
  assert.equal(wf10.fn, 18);
  assert.equal(wf10.fnAssumed, true);
  assert.equal(wf10.fnSrc, 'bresser-erudit');
  assert.equal(wf20.fn, null);
});

test('resolution: the Abbe values of the MicroscopyU table at 550 nm', () => {
  // Table 1 of the MicroscopyU resolution page: plan achromats 4x/0.10 2.75 µm, 10x/0.25 1.10 µm, 40x/0.65 0.42 µm.
  close(abbe(0.10), 2.75, 0.005, '4x');
  close(abbe(0.25), 1.10, 0.005, '10x');
  close(abbe(0.65), 0.42, 0.005, '40x');
  close(rayleigh(0.65), 0.516, 0.001, 'Rayleigh 40x');
  close(cutoff(0.65), 2.364, 0.001, 'cut-off 40x');
});

test('useful magnification: Bresser example, 40x/0.65 up to about 650x', () => {
  assert.deepEqual(usefulRange(0.65).map((v) => Math.round(v)), [325, 650]);
  const o40 = objective('40x');
  assert.equal(verdict(totalMag(o40, eyepiece('wf10')), o40.na), 'useful'); // 400x
  assert.equal(verdict(totalMag(o40, eyepiece('wf20')), o40.na), 'empty'); // 800x
  assert.equal(verdict(totalMag(o40, eyepiece('wf20'), true), o40.na), 'empty'); // 1600x
  const o4 = objective('4x');
  assert.equal(verdict(totalMag(o4, eyepiece('wf10')), o4.na), 'low'); // 40x < 50x
  assert.equal(verdict(totalMag(o4, eyepiece('wf20')), o4.na), 'useful'); // 80x
});

test('screen scale: a CSS pixel is 0.0213 degrees, seen at 250 mm', () => {
  // 250 mm x tan(0.0213°) = 92.9 µm in the virtual image.
  close(umPerCssPx(1), 92.94, 0.05, '1x');
  close(umPerCssPx(400), 0.2324, 0.0005, '400x');
});

test('field of view: field number / magnification before the eyepiece', () => {
  assert.equal(fieldUm(objective('4x'), eyepiece('wf10')), 4500);
  assert.equal(fieldUm(objective('40x'), eyepiece('wf10'), true), 225);
  assert.equal(fieldUm(objective('40x'), eyepiece('wf20')), null);
});

test('what resolves: chloroplast shape at 40x, not at 4x; ER never', () => {
  assert.equal(resolves(5, 0.65), 'shape');
  assert.equal(resolves(5, 0.10), 'dot');
  assert.equal(resolves(0.06, 0.65), 'no');
});

// ---------------------------------------------------------------- data
import { readFileSync, existsSync } from 'node:fs';
import { SPECIMENS } from '../site/microscope/js/specimens.js';
import { STRUCTURES } from '../site/microscope/js/structures.js';
import { SOURCES } from '../site/microscope/js/sources.js';
import { ENTRIES } from '../site/anatomy/js/entries.js';

const site = new URL('../site/microscope/', import.meta.url);
const code = ['js/app.js', 'js/structures.js', 'js/optics.js'].map((f) => readFileSync(new URL(f, site), 'utf8')).join('\n');

test('every source is cited and every citation has a source', () => {
  const ids = new Set(SOURCES.map((s) => s.id));
  assert.equal(ids.size, SOURCES.length, 'no duplicate source ids');
  for (const s of SOURCES) {
    assert.ok(code.includes(`'${s.id}'`), `source ${s.id} is cited`);
    assert.match(s.url, /^https?:\/\//);
  }
  for (const st of STRUCTURES) for (const k of [...st.src, ...(st.contrastSrc || [])]) assert.ok(ids.has(k), `${st.id}: source ${k}`);
});

test('structures: sizes, both languages, links to the anatomy tab', () => {
  const anat = new Set(ENTRIES.map((e) => e.id));
  for (const st of STRUCTURES) {
    assert.ok(st.sizeUm > 0 && st.sizeMaxUm >= st.sizeUm, `${st.id}: size range`);
    assert.ok(st.src.length > 0, `${st.id}: size is sourced`);
    for (const k of ['name', 'sizeText', 'contrast']) assert.ok(st[k].en && st[k].fr, `${st.id}: ${k} in en and fr`);
    if (st.anatomy) assert.ok(anat.has(st.anatomy), `${st.id}: anatomy entry ${st.anatomy}`);
  }
  // Below light-microscope resolution whatever the objective.
  for (const id of ['er', 'plasmodesma', 'ribosome', 'plasma-membrane', 'microtubule']) {
    const st = STRUCTURES.find((s) => s.id === id);
    for (const o of OBJECTIVES) assert.equal(resolves(st.sizeMaxUm, o.na), 'no', `${id} invisible with ${o.id}`);
  }
});

test('specimens: open licence, credit, scale, images on disk, honest objectives', () => {
  const structs = new Set(STRUCTURES.map((s) => s.id));
  for (const sp of SPECIMENS) {
    const p = sp.photo;
    assert.match(p.licence, /^CC (BY|BY-SA|0)|^Public domain/, `${sp.id}: open licence`);
    for (const k of ['title', 'page', 'author', 'licenceUrl', 'original', 'sha256']) assert.ok(p[k], `${sp.id}: photo.${k}`);
    for (const k of ['name', 'kind', 'prep', 'scaleNote', 'takenWith']) assert.ok(sp[k].en && sp[k].fr, `${sp.id}: ${k} in en and fr`);
    for (const s of sp.structures) assert.ok(structs.has(s), `${sp.id}: structure ${s}`);
    assert.ok(sp.views.photo, `${sp.id}: photo view`);
    assert.ok(existsSync(new URL(`img/${sp.thumb}`, site)), `${sp.id}: thumbnail`);
    for (const [k, v] of Object.entries(sp.views)) {
      assert.ok(existsSync(new URL(`img/${v.file}`, site)), `${sp.id}: ${v.file}`);
      // Same extent in micrometres for every view.
      assert.ok(Math.abs(v.w * v.um_per_px - sp.size_um[0]) / sp.size_um[0] < 0.01, `${sp.id} ${k}: width`);
      if (k === 'photo') continue;
      const o = OBJECTIVES.find((x) => x.id === k);
      assert.ok(o, `${sp.id}: view ${k} is an objective`);
      // Stored finely enough for what the objective passes (pixel <= lambda / (4 NA)).
      assert.ok(v.um_per_px <= 0.55 / (4 * o.na) + 1e-9, `${sp.id} ${k}: pixel ${v.um_per_px}`);
    }
  }
  assert.ok(SPECIMENS.some((s) => s.views['40x']), 'at least one specimen for the 40x');
});
