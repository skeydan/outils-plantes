// Breeding systems: the tree, its sources, names in italics, the S-allele rule.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { TAXA } from '../site/seeds/js/taxa.js';
import { SOURCES } from '../site/seeds/js/sources.js';
import { CONCEPTS, CONCEPT_GROUPS } from '../site/seeds/js/concepts.js';
import { buildIndex, validate, nameParts, parseS, pollination, citedSources, FLAG_CONCEPT } from '../site/seeds/js/breeding.js';
import { search, pathTo } from '../site/assets/tree.js';

const sourceIds = new Set(SOURCES.map((s) => s.id));
const conceptIds = new Set(CONCEPTS.map((c) => c.id));
const index = buildIndex(TAXA);
const top = (q) => search(index, q)[0]?.id;

test('the tree is valid: ranks in order, every name and text sourced', () => {
  assert.deepEqual(validate(TAXA, { sourceIds, conceptIds }), []);
});

test('every source is cited and has a reference; every concept is sourced and grouped once', () => {
  const used = new Set(TAXA.flatMap(citedSources));
  for (const c of CONCEPTS) for (const s of c.src) used.add(typeof s === 'string' ? s : s.k);
  for (const s of SOURCES) {
    assert.ok(used.has(s.id), `${s.id} listed but not cited`);
    assert.match(s.url, /^https?:\/\//, s.id);
    assert.ok(s.text.length > 15, s.id);
  }
  for (const c of CONCEPTS) { assert.ok(c.en && c.fr && c.title.en && c.title.fr && c.src.length, c.id); }
  const grouped = CONCEPT_GROUPS.flatMap((g) => g.ids);
  assert.deepEqual([...grouped].sort(), [...conceptIds].sort());
  for (const f of Object.values(FLAG_CONCEPT)) assert.ok(conceptIds.has(f), `flag concept ${f}`);
});

test('the featured taxa are there, under the right parents', () => {
  const under = (id, anc) => assert.ok(pathTo(index, id).includes(anc), `${id} under ${anc}`);
  under('prunus-amygdalus', 'prunus');
  for (const id of ['prunus-domestica', 'prunus-salicina', 'prunus-cerasifera', 'prunus-insititia']) under(id, 'prunus');
  under('selenicereus-undatus', 'cactaceae');
  for (const id of ['actinidia-chinensis-var-deliciosa', 'actinidia-chinensis', 'actinidia-arguta']) under(id, 'actinidia');
  under('rubus-fruticosus-agg', 'rubus');
  under('rubus-idaeus', 'rosaceae');
  under('ribes-uva-crispa', 'ribes');
  under('ribes-rubrum', 'grossulariaceae');
  under('hippophae-rhamnoides', 'elaeagnaceae');
  assert.ok(TAXA.some((t) => t.parent === 'hippophae-rhamnoides' && t.rank === 'subspecies'), 'sea buckthorn subspecies');
  under('eucalyptus-deglupta', 'myrtaceae');
  assert.ok(TAXA.filter((t) => t.parent === 'prunus-amygdalus' && t.cultivar).length >= 5, 'almond cultivars');
});

test('search: common names, old names and synonyms', () => {
  assert.equal(top('Prunus dulcis'), 'prunus-amygdalus');
  assert.equal(top('amandier'), 'prunus-amygdalus');
  assert.equal(top('Hylocereus undatus'), 'selenicereus-undatus');
  assert.ok(top('Hylocereus').startsWith('selenicereus'), top('Hylocereus'));
  assert.equal(top('groseillier à maquereau'), 'ribes-uva-crispa');
  assert.equal(top('Stachelbeere'), 'ribes-uva-crispa');
  assert.equal(top('Ribes grossularia'), 'ribes-uva-crispa');
  assert.ok(search(index, 'argousier').slice(0, 2).some((r) => r.id === 'hippophae-rhamnoides'), 'argousier');
  assert.equal(top('nonpareil'), 'prunus-amygdalus-nonpareil');
  assert.equal(top('Actinidia deliciosa'), 'actinidia-chinensis-var-deliciosa');
});

test('names in italics where they should be', () => {
  const it = (name, rank) => nameParts(name, rank).filter((p) => p.text.trim()).map((p) => (p.italic ? `<${p.text}>` : p.text)).join(' ');
  assert.equal(it("Prunus amygdalus 'Nonpareil'", 'cultivar'), "<Prunus> <amygdalus> 'Nonpareil'");
  assert.equal(it('Actinidia chinensis var. deliciosa', 'varietas'), '<Actinidia> <chinensis> var. <deliciosa>');
  assert.equal(it('Ribes × nidigrolaria', 'hybrid'), '<Ribes> × <nidigrolaria>');
  assert.equal(it('Rubus fruticosus agg.', 'aggregate'), '<Rubus> <fruticosus> agg.');
  assert.equal(it('Rubus Tayberry Group', 'cultivar-group'), '<Rubus> Tayberry Group');
  assert.equal(it('Prunus dulcis (Mill.) D.A.Webb', 'species'), '<Prunus> <dulcis> (Mill.) D.A.Webb');
  assert.equal(it('Rosaceae', 'family'), 'Rosaceae');
});

test('gametophytic self-incompatibility from S-genotypes (almond)', () => {
  assert.deepEqual(parseS('S7S8'), ['S7', 'S8']);
  assert.deepEqual(parseS('S3Sf'), ['S3', 'Sf']);
  assert.equal(pollination('S7S8', 'S7S8').result, 'incompatible', 'self, no Sf');
  assert.equal(pollination('S7S8', 'S5S8').result, 'semi', 'Nonpareil x Carmel share S8');
  assert.deepEqual(pollination('S7S8', 'S5S8').accepted, ['S5']);
  assert.equal(pollination('S1S3', 'S1S4').result, 'semi');
  assert.equal(pollination('S7S8', 'S1S3').result, 'compatible');
  assert.equal(pollination('S3Sf', 'S3Sf').result, 'semi', 'Lauranne is self-compatible through Sf pollen');
  assert.deepEqual(pollination('S3Sf', 'S3Sf').accepted, ['Sf']);
  assert.equal(pollination('S1S8', 'S1Sf').result, 'semi', 'Sf pollen grows in any style');
  assert.equal(pollination('S1', 'S1S8').result, 'unknown');
  // The published genotypes agree with the published self-compatibility.
  for (const t of TAXA.filter((x) => x.parent === 'prunus-amygdalus' && parseS(x.cultivar?.s_genotype).length === 2)) {
    const self = pollination(t.cultivar.s_genotype, t.cultivar.s_genotype).result;
    assert.equal(self === 'semi', t.cultivar.self === 'self-compatible', `${t.id}: ${t.cultivar.s_genotype} vs ${t.cultivar.self}`);
  }
});

test('overview: who needs a partner, read from the reproduction flags', async () => {
  const { partnerNeed } = await import('../site/seeds/js/app.js');
  const need = (id) => partnerNeed(TAXA.find((t) => t.id === id).mating.flags);
  assert.equal(need('hippophae-rhamnoides'), 'male', 'sea buckthorn is dioecious');
  assert.equal(need('actinidia-chinensis'), 'male', 'kiwifruit is dioecious');
  assert.equal(need('prunus-amygdalus'), 'varies', 'almond: self-incompatible and self-compatible cultivars');
  assert.equal(need('prunus-cerasifera'), 'yes');
  assert.equal(need('rubus-idaeus'), 'no');
  assert.equal(need('rubus-fruticosus-agg'), 'no-apomictic');
  assert.equal(need('ribes-uva-crispa'), 'partly');
  assert.equal(partnerNeed([]), 'unknown');
});
