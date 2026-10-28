// Grafting: the same plants as the breeding tab, every rootstock sourced and
// used, plants that are not grafted say so, search on rootstock names.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { TAXA } from '../site/seeds/js/taxa.js';
import { SCIONS, ROOTSTOCKS, CRITERIA_CARDS } from '../site/graft/js/graft.js';
import { SOURCES } from '../site/graft/js/sources.js';
import { validate, citedSources, buildGraftIndex, scionSource, groupId, stockNodeId, CRITERIA } from '../site/graft/js/grafting.js';
import { search, pathTo } from '../site/assets/tree.js';

const sourceIds = new Set(SOURCES.map((s) => s.id));
const index = buildGraftIndex(TAXA, SCIONS, ROOTSTOCKS);
const top = (q) => search(index, q)[0]?.id;

test('the data are valid and fully sourced', () => {
  assert.deepEqual(validate(TAXA, SCIONS, ROOTSTOCKS, { sourceIds, criteria: CRITERIA_CARDS }), []);
});

test('every source is cited and has a reference', () => {
  const used = new Set(citedSources(SCIONS, ROOTSTOCKS, CRITERIA_CARDS));
  for (const s of SOURCES) {
    assert.ok(used.has(s.id), `${s.id} listed but not cited`);
    assert.match(s.url, /^https:\/\//, s.id);
    assert.ok(s.text.length > 20 && s.short, s.id);
  }
});

test('the tree is the breeding tab’s, with the rootstocks under their plants', () => {
  for (const t of TAXA) assert.ok(index.byId.has(t.id), t.id);
  for (const [id, s] of Object.entries(SCIONS)) for (const l of s.stocks ?? []) {
    const n = stockNodeId(id, l.rs);
    assert.deepEqual(pathTo(index, n).slice(-3), [id, groupId(id), n]);
  }
  // rootstocks come before the cultivars under a plant
  const kids = index.children.get('prunus-amygdalus');
  assert.equal(kids[0], groupId('prunus-amygdalus'));
});

test('every species of the breeding tab has a grafting answer, own or inherited', () => {
  for (const t of TAXA.filter((x) => ['species', 'hybrid', 'aggregate', 'cultivar-group'].includes(x.rank))) {
    assert.ok(scionSource(index, SCIONS, t.id), `${t.id} has no grafting data`);
  }
});

test('plants grown from cuttings, suckers or seed say so', () => {
  for (const id of ['rubus', 'hippophae', 'eucalyptus-deglupta']) {
    const s = SCIONS[scionSource(index, SCIONS, id)];
    assert.ok(['not', 'occasional'].includes(s.practice), `${id}: ${s.practice}`);
  }
  assert.equal(SCIONS[scionSource(index, SCIONS, 'prunus-amygdalus')].practice, 'standard');
});

test('every criterion of the rootstock entries has its card', () => {
  const cards = new Set(CRITERIA_CARDS.map((c) => c.id));
  for (const c of CRITERIA) if (ROOTSTOCKS.some((r) => r.traits?.[c])) assert.ok(cards.has(c), c);
  for (const c of ['scion-rootstock', 'compatibility', 'interstock']) assert.ok(cards.has(c), c);
});
