// Cross-tab species links: every species of the germination, cuttings and
// breeding tabs has a taxonomy counterpart, every manifest target exists in
// its tab, and the mapping is one-to-one per tab.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { TAXA } from '../site/taxonomy/js/taxa.js';
import { SPECIES as GERMINATION } from '../site/germination/js/data.js';
import { SPECIES as CUTTINGS } from '../site/bouturage/js/data.js';
import { TAXA as SEEDS } from '../site/seeds/js/taxa.js';
import { SPECIES_LINKS, tabIds, taxonomyId, idsInTab } from '../site/assets/species-links.js';

const taxById = new Map(TAXA.map((e) => [e.id, e]));
const TABS = {
  germination: new Set(GERMINATION.map((s) => s.id)),
  bouturage: new Set(CUTTINGS.map((s) => s.id)),
  seeds: new Set(SEEDS.map((s) => s.id)),
};

test('the manifest only names existing taxonomy species', () => {
  for (const id of Object.keys(SPECIES_LINKS)) {
    const e = taxById.get(id);
    assert.ok(e, `${id} exists in the taxonomy`);
    assert.equal(e.rank, 'species', `${id} is a species`);
  }
});

test('every germination species has a taxonomy entry and a link', () => {
  for (const s of GERMINATION) {
    const taxId = taxonomyId('germination', s.id);
    assert.ok(taxId, `${s.id} mapped`);
    assert.equal(taxById.get(taxId)?.rank, 'species', `${s.id} → a taxonomy species`);
    assert.equal(tabIds(taxId).germination, s.id, `${taxId} points back to ${s.id}`);
  }
  assert.equal(idsInTab('germination').length, GERMINATION.length);
});

test('every cuttings species has a taxonomy entry and a link', () => {
  for (const s of CUTTINGS) {
    const taxId = taxonomyId('bouturage', s.id);
    assert.ok(taxId, `${s.id} mapped`);
    assert.equal(taxById.get(taxId)?.rank, 'species', `${s.id} → a taxonomy species`);
    assert.equal(tabIds(taxId).bouturage, s.id, `${taxId} points back to ${s.id}`);
  }
  assert.equal(idsInTab('bouturage').length, CUTTINGS.length);
});

test('every breeding species and the bramble aggregate has a taxonomy entry', () => {
  const wanted = SEEDS.filter((s) => s.rank === 'species' || s.rank === 'aggregate');
  for (const s of wanted) {
    const taxId = taxonomyId('seeds', s.id);
    assert.ok(taxId, `${s.id} mapped`);
    const e = taxById.get(taxId);
    assert.ok(e, `${s.id} → existing taxonomy entry`);
    assert.equal(e.rank, 'species', `${s.id} → a taxonomy species`);
    assert.equal(tabIds(taxId).seeds, s.id, `${taxId} points back to ${s.id}`);
  }
  // One more than the seeds list: Actinidia deliciosa is a full species in the
  // taxonomy but only the variety A. chinensis var. deliciosa in the breeding
  // tab, so both taxonomy species point at entries of that tab.
  assert.ok(idsInTab('seeds').length >= wanted.length);
});

test('every manifest target exists in the tab it names', () => {
  for (const [taxId, map] of Object.entries(SPECIES_LINKS)) {
    for (const [tab, id] of Object.entries(map)) {
      assert.ok(TABS[tab], `${taxId}: known tab ${tab}`);
      assert.ok(TABS[tab].has(id), `${taxId}: ${tab} entry ${id} exists`);
    }
  }
});

test('one entry per tab id, and reverse lookup is stable', () => {
  for (const tab of Object.keys(TABS)) {
    const ids = idsInTab(tab);
    assert.equal(new Set(ids.map((taxId) => SPECIES_LINKS[taxId][tab])).size, ids.length,
      `${tab}: no two species share an entry`);
    for (const taxId of ids) assert.equal(taxonomyId(tab, SPECIES_LINKS[taxId][tab]), taxId);
  }
  assert.equal(taxonomyId('germination', 'does-not-exist'), null);
  assert.deepEqual(tabIds('ribes-nigrum'), {});
});
