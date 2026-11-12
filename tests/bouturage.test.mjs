// Cuttings and layering: types, factors, layering methods, species protocols
// and sources are internally consistent, bilingual and complete, and every
// correction of the starting PDF is sourced. The protocols were checked by
// hand against the cited manuals and trials; this test keeps the data honest.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { CUT_TYPES, FACTORS, LAYERS, SPECIES, STEPS, CONFUSIONS, CORRECTIONS } from '../site/bouturage/js/data.js';
import { SOURCES } from '../site/bouturage/js/sources.js';

const SOURCE_IDS = new Set(SOURCES.map((s) => s.id));
const CUT_IDS = new Set(CUT_TYPES.map((c) => c.id));
const LAY_IDS = new Set(LAYERS.map((l) => l.id));
const SP_IDS = new Set(SPECIES.map((s) => s.id));
const hasBoth = (o) => typeof o?.en === 'string' && o.en.trim() && typeof o?.fr === 'string' && o.fr.trim();

test('sources: unique ids, full URLs, at least forty references', () => {
  assert.ok(SOURCES.length >= 40, `${SOURCES.length} sources`);
  assert.equal(SOURCE_IDS.size, SOURCES.length, 'source ids are unique');
  for (const s of SOURCES) {
    assert.ok(s.text.length > 20, `${s.id} has a reference`);
    assert.match(s.url, /^https:\/\//, `${s.id} has an https URL`);
  }
});

test('the five cutting types are complete, bilingual and sourced', () => {
  assert.deepEqual([...CUT_IDS].sort(), ['hard', 'root', 'segment', 'semi', 'soft']);
  for (const c of CUT_TYPES) {
    assert.ok(hasBoth(c.name) && hasBoth(c.short) && hasBoth(c.when) && hasBoth(c.detail), `${c.id} bilingual`);
    assert.ok(c.src?.length, `${c.id} is sourced`);
    for (const id of c.src) assert.ok(SOURCE_IDS.has(id), `${c.id} cites ${id}`);
    assert.ok(SPECIES.some((s) => s.cut.types.includes(c.id)), `${c.id} used by a species`);
  }
});

test('six factors, four layering methods, all bilingual and sourced', () => {
  assert.equal(FACTORS.length, 6);
  for (const f of FACTORS) {
    assert.ok(hasBoth(f.title) && hasBoth(f.body), `${f.id} bilingual`);
    assert.ok(f.src?.length, `${f.id} is sourced`);
    for (const id of f.src) assert.ok(SOURCE_IDS.has(id), `${f.id} cites ${id}`);
  }
  assert.deepEqual([...LAY_IDS].sort(), ['air', 'mound', 'simple', 'tip']);
  for (const m of LAYERS) {
    assert.ok(hasBoth(m.name) && hasBoth(m.body), `${m.id} bilingual`);
    assert.ok(m.src?.length, `${m.id} is sourced`);
    for (const id of m.src) assert.ok(SOURCE_IDS.has(id), `${m.id} cites ${id}`);
    assert.ok(SPECIES.some((s) => s.layer?.type === m.id), `${m.id} used by a species`);
  }
});

test('species: fourteen complete bilingual records with a cut and a layer', () => {
  assert.equal(SP_IDS.size, SPECIES.length, 'species ids are unique');
  assert.equal(SPECIES.length, 14, '14 species');
  for (const s of SPECIES) {
    assert.match(s.id, /^[a-z0-9-]+$/, `${s.id} is kebab-case`);
    assert.match(s.name, /^[A-Z][a-z]+ [a-z-]+$/, `${s.name} is a binomial`);
    assert.ok(s.author, `${s.id} author`);
    assert.ok(s.family, `${s.id} family`);
    assert.ok(['easy', 'moderate', 'difficult'].includes(s.difficulty), `${s.id} difficulty`);
    assert.ok(s.cut.types.length, `${s.id} has cut types`);
    for (const id of s.cut.types) assert.ok(CUT_IDS.has(id), `${s.id} cut type ${id}`);
    assert.ok(hasBoth(s.cut.when) && hasBoth(s.cut.hormone) && hasBoth(s.cut.rooting) && hasBoth(s.cut.protocol), `${s.id} cut bilingual`);
    assert.ok(s.layer && s.layer.type, `${s.id} has a layer decision`);
    if (s.layer.type === 'none') {
      assert.ok(hasBoth(s.layer.why), `${s.id} explains why no layering`);
    } else {
      assert.ok(LAY_IDS.has(s.layer.type), `${s.id} layer type ${s.layer.type}`);
      assert.ok(hasBoth(s.layer.when) && hasBoth(s.layer.protocol), `${s.id} layer bilingual`);
      for (const id of s.layer.src ?? []) assert.ok(SOURCE_IDS.has(id), `${s.id} layer cites ${id}`);
    }
    assert.ok(s.graft === null || hasBoth(s.graft), `${s.id} graft alternative bilingual or null`);
    assert.ok(hasBoth(s.note), `${s.id} note bilingual`);
    for (const l of ['fr', 'en', 'de']) {
      assert.ok(Array.isArray(s.common[l]) && s.common[l].length, `${s.id} common names ${l}`);
      for (const n of s.common[l]) assert.ok(n.trim(), `${s.id} ${l} common name not empty`);
    }
    assert.ok(s.sources.length, `${s.id} is sourced`);
    for (const id of s.sources) assert.ok(SOURCE_IDS.has(id), `${s.id} cites ${id}`);
  }
});

test('every source is cited somewhere', () => {
  const used = new Set();
  const add = (ids) => (ids ?? []).forEach((id) => used.add(id));
  CUT_TYPES.forEach((c) => add(c.src));
  FACTORS.forEach((f) => add(f.src));
  LAYERS.forEach((m) => add(m.src));
  SPECIES.forEach((s) => add(s.sources));
  CONFUSIONS.forEach((c) => add(c.src));
  CORRECTIONS.forEach((c) => add(c.src));
  assert.deepEqual([...SOURCE_IDS].filter((id) => !used.has(id)), [], 'uncited sources');
});

test('steps and confusions are bilingual, complete and sourced', () => {
  assert.equal(STEPS.length, 6);
  for (const st of STEPS) assert.ok(hasBoth(st.title) && hasBoth(st.body));
  assert.equal(CONFUSIONS.length, 8);
  for (const c of CONFUSIONS) {
    assert.ok(hasBoth(c.wrong) && hasBoth(c.right), 'confusion bilingual');
    assert.ok(c.src?.length, 'confusion sourced');
    for (const id of c.src) assert.ok(SOURCE_IDS.has(id), `confusion cites ${id}`);
  }
});

test('the corrections to the PDF are present, bilingual and sourced', () => {
  assert.equal(CORRECTIONS.length, 11);
  for (const c of CORRECTIONS) {
    assert.ok(hasBoth(c.title) && hasBoth(c.body), 'correction bilingual');
    assert.ok(c.src?.length, `${c.title.en} is sourced`);
    for (const id of c.src) assert.ok(SOURCE_IDS.has(id), `correction cites ${id}`);
  }
});

test('the species cover a range of families, difficulties and methods', () => {
  assert.ok(new Set(SPECIES.map((s) => s.family)).size >= 10, 'at least ten families');
  for (const d of ['easy', 'moderate', 'difficult']) {
    assert.ok(SPECIES.filter((s) => s.difficulty === d).length >= 2, `${d} species`);
  }
  for (const id of CUT_IDS) assert.ok(SPECIES.some((s) => s.cut.types.includes(id)), `a species uses ${id}`);
});
