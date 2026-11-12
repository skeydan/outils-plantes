// Fruits: seven fruit types, a sourced German/English/French vocabulary, and
// the two false friends (Steinkern, Samenobst). The drawings themselves are
// checked in the browser (e2e).
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { CATS, TERMS } from '../site/fruits/js/app.js';
import { SOURCES } from '../site/fruits/js/sources.js';
import { TAXA } from '../site/taxonomy/js/taxa.js';

const ids = new Set(SOURCES.map((s) => s.id));
const byId = new Map(SOURCES.map((s) => [s.id, s]));
const species = new Set(TAXA.filter((e) => e.rank === 'species').map((e) => e.id));
const hasBoth = (o) => o && typeof o.en === 'string' && o.en.length > 3 && typeof o.fr === 'string' && o.fr.length > 3;

test('the fruit sources are unique, linked and cited', () => {
  assert.equal(ids.size, SOURCES.length, 'source ids are unique');
  for (const s of SOURCES) {
    assert.match(s.url, /^https?:\/\//, `${s.id} URL`);
    assert.ok(s.text.length > 30, `${s.id} text`);
  }
  const used = new Set();
  for (const c of CATS) for (const s of c.src) used.add(s);
  for (const c of CATS) for (const n of c.notes ?? []) for (const s of n.src) used.add(s);
  for (const t of TERMS) for (const s of t.src) used.add(s);
  for (const s of SOURCES) assert.ok(used.has(s.id), `${s.id} is cited`);
  for (const s of used) assert.ok(ids.has(s), `${s} exists`);
});

test('seven fruit types, each bilingual, sourced and complete', () => {
  assert.deepEqual(CATS.map((c) => c.id), ['drupe', 'berry', 'aggregate', 'pome', 'nut', 'accessory', 'dry']);
  for (const c of CATS) {
    assert.ok(hasBoth(c.name), `${c.id} name`);
    assert.ok(hasBoth(c.short), `${c.id} short`);
    assert.ok(hasBoth(c.def), `${c.id} def`);
    assert.ok(c.src.length, `${c.id} has sources`);
    assert.ok(c.examples.length, `${c.id} has examples`);
    for (const id of c.examples) assert.ok(species.has(id), `${c.id} example ${id} is a species in the taxonomy`);
    assert.equal(typeof c.draw, 'function', `${c.id} drawing`);
  }
});

test('each example belongs to the fruit type announced by the category', () => {
  const taxon = new Map(TAXA.map((e) => [e.id, e]));
  for (const c of CATS) {
    if (!c.anatomy) continue; // the dry group deliberately gathers several dry fruit types
    for (const id of c.examples) {
      const e = taxon.get(id);
      assert.ok(e?.fruit_anatomy, `${id} has a fruit_anatomy`);
      assert.equal(e.fruit_anatomy, c.anatomy, `${id} links to ${c.anatomy}`);
    }
  }
});

test('the German/English/French vocabulary covers the requested terms', () => {
  const wanted = ['Steinfrucht', 'Steinkern', 'Nuss', 'Beere', 'Sammelfrucht', 'Sammelbeere',
    'Sammelsteinfrucht', 'Sammelbalgfrucht', 'Sammelnussfrucht', 'Apfelfrucht', 'Samenobst'];
  assert.deepEqual(TERMS.map((t) => t.de).sort(), [...wanted].sort());
  for (const t of TERMS) {
    assert.ok(t.de && t.en && t.fr, `${t.de} has three languages`);
    assert.ok(hasBoth(t.def), `${t.de} definition`);
    assert.ok(t.src.length, `${t.de} has sources`);
    for (const s of t.src) assert.ok(byId.has(s), `${t.de} source ${s}`);
  }
  const pome = TERMS.find((t) => t.de === 'Apfelfrucht');
  assert.match(pome.def.en, /hypanthium/i);
  assert.match(pome.def.en, /carpel/i);
  const sam = TERMS.find((t) => t.de === 'Samenobst');
  assert.match(sam.def.en, /food category/i);
  assert.match(sam.def.en, /not the pome/i);
});

test('the Steinkern note says what the stone is, and what the almond is', () => {
  const note = CATS.find((c) => c.id === 'drupe').notes.find((n) => n.id === 'steinkern');
  const text = `${note.body.en} ${note.body.fr}`;
  assert.match(text, /endocarp/i);
  assert.match(text, /cotyledon/i);
  assert.match(text, /endosperm/i);
  assert.match(text, /not .*endosperm \+ seed/i);
  assert.ok(note.src.includes('almond-anatomy') && note.src.includes('almond-development'));
});

test('the pome and nut notes carry the false-friend and juglone corrections', () => {
  const pome = CATS.find((c) => c.id === 'pome').notes[0];
  assert.match(pome.body.en, /false friend/i);
  assert.match(pome.body.en, /Apfelfrucht/);
  const nut = CATS.find((c) => c.id === 'nut').notes[0];
  assert.match(nut.body.en, /cupule/i);
  assert.match(nut.body.en, /juglone/i);
  assert.match(nut.body.en, /Juglans regia/);
  assert.ok(nut.src.includes('juglone'));
});

test('the two new species are complete and placed in their families', () => {
  const e = new Map(TAXA.map((x) => [x.id, x]));
  const malus = e.get('malus-domestica');
  const walnut = e.get('juglans-regia');
  assert.equal(malus.parent, 'malus');
  assert.equal(malus.fruit_anatomy, 'pome');
  assert.equal(malus.flower.ovary, 'inferior');
  assert.equal(malus.flower.carpels.n, 5);
  assert.equal(walnut.parent, 'juglans');
  assert.equal(walnut.fruit_anatomy, 'nut');
  assert.equal(walnut.flower.sex, 'monoecious');
  assert.equal(walnut.flower.ovary, 'inferior');
  assert.equal(e.get('malus').parent, 'maleae');
  assert.equal(e.get('juglans').parent, 'juglandaceae');
  assert.equal(e.get('juglandaceae').parent, 'fagales');
});
