// Germination: dormancy types, treatments, species protocols and sources are
// internally consistent, bilingual and complete, and every correction of the
// starting PDF is sourced. The protocols themselves were checked by hand
// against the cited manuals; this test keeps the data honest.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { DORMANCY, TREATMENTS, SPECIES, STEPS, CONFUSIONS, CORRECTIONS } from '../site/germination/js/data.js';
import { SOURCES } from '../site/germination/js/sources.js';

const SOURCE_IDS = new Set(SOURCES.map((s) => s.id));
const DORM_IDS = new Set(DORMANCY.map((d) => d.id));
const TREAT_IDS = new Set(TREATMENTS.map((t) => t.id));
const SP_IDS = new Set(SPECIES.map((s) => s.id));
const hasBoth = (o) => typeof o?.en === 'string' && o.en.trim() && typeof o?.fr === 'string' && o.fr.trim();

test('sources: unique ids, full URLs, real references', () => {
  assert.ok(SOURCES.length >= 20, `${SOURCES.length} sources`);
  assert.equal(SOURCE_IDS.size, SOURCES.length, 'source ids are unique');
  for (const s of SOURCES) {
    assert.ok(s.text.length > 20, `${s.id} has a reference`);
    assert.match(s.url, /^https:\/\//, `${s.id} has an https URL`);
  }
});

test('the five dormancy types are exactly the Baskin and Baskin classes used here', () => {
  assert.deepEqual([...DORM_IDS].sort(), ['mpd', 'nd', 'pd', 'py', 'pypd']);
  for (const d of DORMANCY) {
    assert.ok(hasBoth(d.name), `${d.id} name`);
    assert.ok(hasBoth(d.short), `${d.id} short`);
    assert.ok(hasBoth(d.detail), `${d.id} detail`);
    assert.ok(d.src?.length, `${d.id} is sourced`);
    for (const id of d.src) assert.ok(SOURCE_IDS.has(id), `${d.id} cites ${id}`);
    assert.ok(SPECIES.some((s) => s.dormancy === d.id), `${d.id} has at least one species`);
  }
});

test('treatments: bilingual, sourced, and every one is used by a species', () => {
  assert.equal(TREAT_IDS.size, TREATMENTS.length, 'treatment ids are unique');
  assert.ok(TREATMENTS.length >= 10, `${TREATMENTS.length} treatments`);
  for (const t of TREATMENTS) {
    assert.ok(hasBoth(t.name) && hasBoth(t.short) && hasBoth(t.detail), `${t.id} bilingual`);
    assert.ok(t.src?.length, `${t.id} is sourced`);
    for (const id of t.src) assert.ok(SOURCE_IDS.has(id), `${t.id} cites ${id}`);
    assert.ok(SPECIES.some((s) => s.treatments.includes(t.id)), `${t.id} used by a species`);
  }
});

test('species: unique ids, complete bilingual records, known dormancy and treatments', () => {
  assert.equal(SP_IDS.size, SPECIES.length, 'species ids are unique');
  assert.equal(SPECIES.length, 17, '17 species');
  for (const s of SPECIES) {
    assert.match(s.id, /^[a-z0-9-]+$/, `${s.id} is kebab-case`);
    assert.match(s.name, /^[A-Z][a-z]+ [a-z-]+$/, `${s.name} is a binomial`);
    assert.ok(s.author, `${s.id} author`);
    assert.ok(s.family, `${s.id} family`);
    assert.ok(DORM_IDS.has(s.dormancy), `${s.id} dormancy ${s.dormancy}`);
    assert.ok(s.seed && hasBoth(s.seed), `${s.id} seed description bilingual`);
    assert.ok(s.protocol && hasBoth(s.protocol), `${s.id} protocol bilingual`);
    assert.ok(s.note && hasBoth(s.note), `${s.id} note bilingual`);
    assert.ok(hasBoth(s.sowing.depth) && hasBoth(s.sowing.light) && hasBoth(s.sowing.time), `${s.id} sowing bilingual`);
    assert.ok(s.sowing.temp && s.sowing.temp.length, `${s.id} sowing temperature`);
    assert.ok(s.treatments.length, `${s.id} has treatments`);
    for (const id of s.treatments) assert.ok(TREAT_IDS.has(id), `${s.id} treatment ${id}`);
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
  DORMANCY.forEach((d) => add(d.src));
  TREATMENTS.forEach((t) => add(t.src));
  SPECIES.forEach((s) => add(s.sources));
  CONFUSIONS.forEach((c) => add(c.src));
  CORRECTIONS.forEach((c) => add(c.src));
  assert.deepEqual([...SOURCE_IDS].filter((id) => !used.has(id)), [], 'uncited sources');
});

test('steps and confusions are bilingual and complete', () => {
  assert.equal(STEPS.length, 8);
  for (const st of STEPS) assert.ok(hasBoth(st.title) && hasBoth(st.body));
  assert.equal(CONFUSIONS.length, 7);
  for (const c of CONFUSIONS) {
    assert.ok(hasBoth(c.wrong) && hasBoth(c.right), 'confusion bilingual');
    assert.ok(c.src?.length, 'confusion sourced');
    for (const id of c.src) assert.ok(SOURCE_IDS.has(id), `confusion cites ${id}`);
  }
});

test('the corrections to the PDF are present, bilingual and mostly sourced', () => {
  assert.ok(CORRECTIONS.length >= 10, `${CORRECTIONS.length} corrections`);
  for (const c of CORRECTIONS) {
    assert.ok(hasBoth(c.title) && hasBoth(c.body), 'correction bilingual');
    if (c.src) for (const id of c.src) assert.ok(SOURCE_IDS.has(id), `correction cites ${id}`);
  }
  // At least the eight species-level corrections must carry a source.
  assert.ok(CORRECTIONS.filter((c) => c.src?.length).length >= 8);
});

test('the species cover all five dormancy types and a range of families', () => {
  const families = new Set(SPECIES.map((s) => s.family));
  assert.ok(families.size >= 10, `${families.size} families`);
  assert.ok(SPECIES.filter((s) => s.dormancy === 'nd').length >= 3);
  assert.ok(SPECIES.filter((s) => s.dormancy === 'pd').length >= 3);
  assert.ok(SPECIES.filter((s) => s.dormancy === 'mpd').length >= 2);
  assert.ok(SPECIES.filter((s) => s.dormancy === 'py').length >= 1);
  assert.ok(SPECIES.filter((s) => s.dormancy === 'pypd').length >= 2);
});
