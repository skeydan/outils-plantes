// Taxonomy: the tree is valid, every fact is sourced, the starter species are
// present under their genus with a flower, and search reaches them.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { TAXA } from '../site/taxonomy/js/taxa.js';
import { SOURCES } from '../site/taxonomy/js/sources.js';
import { buildIndex, search, pathTo, descendantCount } from '../site/assets/tree.js';
import { keysOf } from '../site/taxonomy/js/app.js';

const index = buildIndex(TAXA, keysOf);
const top = (q) => search(index, q)[0]?.id;
const WHORLS = ['sepals', 'petals', 'stamens', 'carpels'];
const RANKS = ['order', 'family', 'genus', 'species'];

test('the tree is valid: unique ids, parents exist, no cycles', () => {
  const byId = new Map(TAXA.map((e) => [e.id, e]));
  for (const e of TAXA) {
    assert.ok(e.id && e.name, `id/name for ${JSON.stringify(e.id)}`);
    assert.ok(RANKS.includes(e.rank), `${e.id} has a known rank`);
    if (e.parent !== null) assert.ok(byId.has(e.parent), `${e.id} parent ${e.parent} missing`);
    pathTo(index, e.id); // throws on a cycle
  }
});

test('every name, text and flower fact is sourced; every source is cited and linked', () => {
  const used = new Set();
  for (const e of TAXA) {
    assert.ok(e.names_src?.length, `${e.id} has a name source`);
    for (const s of e.names_src) used.add(s.k);
    if (e.taxonomy?.src) for (const s of e.taxonomy.src) used.add(s.k);
    if (e.flower) { for (const s of e.flower.src) used.add(s.k); for (const s of e.flower_src) used.add(s.k); }
  }
  for (const s of SOURCES) {
    assert.ok(used.has(s.id), `${s.id} listed but never cited`);
    assert.match(s.url, /^https?:\/\//, s.id);
    assert.ok(s.text.length > 15, s.id);
  }
});

test('the starter species are present under their genus', () => {
  const under = (id, anc) => assert.ok(pathTo(index, id).includes(anc), `${id} under ${anc}`);
  const species = {
    'triticum-aestivum': 'triticum',
    'fagopyrum-esculentum': 'fagopyrum',
    'chenopodium-quinoa': 'chenopodium',
    'amaranthus-caudatus': 'amaranthus',
    'marrubium-vulgare': 'marrubium',
    'prunus-dulcis': 'prunus',
    'rubus-fruticosus': 'rubus',
    'actinidia-deliciosa': 'actinidia',
    'selenicereus-undatus': 'selenicereus',
    'hippophae-rhamnoides': 'hippophae',
  };
  for (const [sp, gen] of Object.entries(species)) under(sp, gen);
  // Each species sits under family and order too (four levels).
  for (const sp of Object.keys(species)) assert.equal(pathTo(index, sp).length, 4, `${sp} depth`);
});

test('each species has a complete, consistent flower', () => {
  for (const e of TAXA) {
    if (e.rank !== 'species') continue;
    const f = e.flower;
    assert.ok(f, `${e.id} has a flower`);
    for (const w of WHORLS) {
      assert.ok(f[w], `${e.id} ${w}`);
      assert.ok([0, null].includes(f[w].n) || Number.isInteger(f[w].n), `${e.id} ${w}.n`);
    }
    assert.ok(['actinomorphic', 'zygomorphic'].includes(f.symmetry), `${e.id} symmetry`);
    assert.ok(['superior', 'inferior'].includes(f.ovary), `${e.id} ovary`);
    assert.ok(['bisexual', 'monoecious', 'dioecious'].includes(f.sex), `${e.id} sex`);
    assert.ok(f.formula && f.formula.length, `${e.id} formula`);
    assert.ok(e.phyllotaxy?.en && e.phyllotaxy?.fr, `${e.id} phyllotaxy`);
    assert.ok(e.inflorescence?.en && e.fruit?.en, `${e.id} inflorescence/fruit`);
  }
});

test('search reaches species by Latin, common and German name', () => {
  assert.equal(top('Triticum aestivum'), 'triticum-aestivum');
  assert.equal(top('blé noir'), 'fagopyrum-esculentum');
  assert.equal(top('quinoa'), 'chenopodium-quinoa');
  assert.equal(top('amarante queue-de-renard'), 'amaranthus-caudatus');
  assert.equal(top('marrube blanc'), 'marrubium-vulgare');
  assert.equal(top('amandier'), 'prunus-dulcis');
  assert.equal(top('kiwi'), 'actinidia-deliciosa');
  assert.equal(top('mûre'), 'rubus-fruticosus');
  assert.equal(top('pitaya'), 'selenicereus-undatus');
  assert.equal(top('fruit du dragon'), 'selenicereus-undatus');
  // German common names reach the species too (genus and species share some).
  assert.ok(search(index, 'Buchweizen').some((r) => r.id === 'fagopyrum-esculentum'));
  assert.ok(search(index, 'Weizen').some((r) => r.id === 'triticum'));
  assert.ok(search(index, 'argousier').some((r) => r.id === 'hippophae-rhamnoides'));
  assert.ok(search(index, 'Sanddorn').some((r) => r.id === 'hippophae-rhamnoides'));
  assert.ok(search(index, 'Drachenfrucht').some((r) => r.id === 'selenicereus-undatus'));
});

test('species counts below each node match the displayed numbers', () => {
  const count = (id) => descendantCount(index, id, (e) => e.rank === 'species');
  assert.equal(count('poales'), 1);
  assert.equal(count('caryophyllales'), 4);
  assert.equal(count('lamiales'), 1);
  assert.equal(count('rosales'), 3);
  assert.equal(count('ericales'), 1);
  assert.equal(count('rosaceae'), 2);
  assert.equal(count('prunus'), 1);
  assert.equal(count('rubus'), 1);
  assert.equal(count('poaceae'), 1);
});
