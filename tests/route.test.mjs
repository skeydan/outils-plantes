// Routes of the single page: #<tab>[/<sub>].
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { parseRoute, routeHref, TAB_IDS, DEFAULT_TAB } from '../site/assets/route.js';

test('four tabs, anatomy first', () => {
  assert.deepEqual(TAB_IDS, ['anatomy', 'water', 'seeds', 'microscope']);
  assert.equal(DEFAULT_TAB, 'anatomy');
});

test('parse and write routes', () => {
  assert.deepEqual(parseRoute('#anatomy/bordered-pit'), { tab: 'anatomy', sub: 'bordered-pit' });
  assert.deepEqual(parseRoute('#water'), { tab: 'water', sub: null });
  assert.deepEqual(parseRoute('seeds/prunus-amygdalus'), { tab: 'seeds', sub: 'prunus-amygdalus' });
  assert.deepEqual(parseRoute(''), { tab: 'anatomy', sub: null });
  assert.deepEqual(parseRoute('#src-kb2'), { tab: 'anatomy', sub: null }, 'unknown hash -> default tab');
  assert.deepEqual(parseRoute('#%E0%A4%A'), { tab: 'anatomy', sub: null }, 'bad escapes do not throw');
  assert.equal(routeHref('water', 'compartments'), '#water/compartments');
  assert.equal(routeHref('seeds'), '#seeds');
  assert.deepEqual(parseRoute('#microscope/leaf'), { tab: 'microscope', sub: 'leaf' });
  for (const [tab, sub] of [['anatomy', 'pit'], ['water', null], ['seeds', 'ribes-rubrum']]) assert.deepEqual(parseRoute(routeHref(tab, sub)), { tab, sub });
});
