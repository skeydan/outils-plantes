// Browser checks of the single page: screenshots (desktop/phone x light/dark
// x fr/en x the ten tabs), the tab bar (ARIA, keyboard, hash routing,
// history, lazy loading), and scripted use of each tab. Fails on any console
// error or warning and on horizontal overflow.
//
//   npm i            (installs playwright, dev only)
//   npx playwright install chromium   (once, if no browser is cached)
//   BASE=http://localhost:9417 node scripts/e2e.mjs
//
// Screenshots go to $SHOTS (default /tmp/plantes-shots).

import { chromium } from 'playwright';
import { mkdirSync } from 'node:fs';

const BASE = process.env.BASE || 'http://localhost:9417';
const SHOTS = process.env.SHOTS || '/tmp/plantes-shots';
mkdirSync(SHOTS, { recursive: true });

const devices = {
  desktop: { viewport: { width: 1280, height: 900 }, deviceScaleFactor: 1 },
  phone: { viewport: { width: 390, height: 844 }, deviceScaleFactor: 2, isMobile: true, hasTouch: true },
};
const TABS = ['anatomy', 'water', 'seeds', 'germination', 'bouturage', 'graft', 'taxonomy', 'fruits', 'development', 'microscope'];

const browser = await chromium.launch();
const problems = [];
let checks = 0;
const ok = (cond, msg) => { checks++; if (!cond) problems.push(msg); };

async function newPage(device, scheme, lang) {
  const ctx = await browser.newContext({ ...devices[device], colorScheme: scheme, locale: lang === 'fr' ? 'fr-FR' : 'en-GB' });
  const page = await ctx.newPage();
  page.on('console', (m) => { if (m.type() === 'error' || m.type() === 'warning') problems.push(`[${device} ${scheme} ${lang}] console ${m.type()}: ${m.text()}`); });
  page.on('pageerror', (e) => problems.push(`[${device} ${scheme} ${lang}] page error: ${e.message}`));
  return { ctx, page };
}
/** Wait until a tab is open and its content is built. */
const opened = (page, tab) => page.waitForFunction((tab) => {
  const p = document.getElementById(`panel-${tab}`);
  return p && !p.hidden && p.querySelector('h1') && document.getElementById(`tab-${tab}`).getAttribute('aria-selected') === 'true';
}, tab);
const current = (page) => page.evaluate(() => document.querySelector('#a-tree a[aria-current="true"]')?.dataset.id);
const waitCurrent = (page, id) => page.waitForFunction((id) => document.querySelector('#a-tree a[aria-current="true"]')?.dataset.id === id, id);
const overflowOf = (page) => page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
const hashOf = (page) => new URL(page.url()).hash;

// ---------------------------------------------------------------- screenshots
for (const device of Object.keys(devices)) {
  for (const scheme of ['light', 'dark']) {
    for (const lang of ['en', 'fr']) {
      const { ctx, page } = await newPage(device, scheme, lang);
      await page.goto(`${BASE}/`, { waitUntil: 'networkidle' });
      await opened(page, 'anatomy');
      ok((await page.getAttribute('html', 'lang')) === lang, `browser language ${lang} not picked up`);
      for (const [tab, sub] of [['anatomy', 'bordered-pit'], ['water', null], ['seeds', 'prunus-amygdalus'], ['germination', null], ['bouturage', null], ['graft', 'prunus-amygdalus'], ['taxonomy', 'prunus-dulcis'], ['fruits', 'drupe'], ['development', 'berry'], ['microscope', null]]) {
        await page.evaluate((h) => { location.hash = h; }, sub ? `${tab}/${sub}` : tab);
        await opened(page, tab);
        await page.waitForLoadState('networkidle');
        if (device === 'phone') await page.screenshot({ path: `${SHOTS}/${tab}-${device}-${scheme}-${lang}-top.png` });
        await page.screenshot({ path: `${SHOTS}/${tab}-${device}-${scheme}-${lang}.png`, fullPage: true });
        const overflow = await overflowOf(page);
        ok(overflow <= 0, `${tab} ${device} ${lang}: horizontal overflow ${overflow}px`);
      }
      await ctx.close();
    }
  }
}

// ---------------------------------------------------------------- the tab bar
{
  const { ctx, page } = await newPage('desktop', 'light', 'en');
  const requested = [];
  page.on('request', (r) => requested.push(new URL(r.url()).pathname));
  await page.goto(`${BASE}/`, { waitUntil: 'networkidle' });
  await opened(page, 'anatomy');
  // Lazy loading: only the open tab's code and data are fetched.
  ok(requested.some((u) => u.endsWith('/anatomy/js/entries.js')), 'anatomy data loaded on the anatomy tab');
  ok(!requested.some((u) => u.endsWith('/seeds/js/taxa.js') || u.endsWith('/germination/js/app.js') || u.endsWith('/bouturage/js/app.js') || u.endsWith('/graft/js/graft.js') || u.endsWith('/plant-water/js/app.js') || /\/microscope\/(js|img)\//.test(u) || u.endsWith('/taxonomy/js/taxa.js')), `other tabs not loaded yet: ${requested.filter((u) => /seeds|germination|bouturage|plant-water|microscope\/(js|img)|taxonomy\/js\//.test(u)).join(', ')}`);
  // ARIA structure.
  const aria = await page.evaluate(() => {
    const tabs = [...document.querySelectorAll('[role="tablist"] [role="tab"]')];
    return {
      n: tabs.length,
      selected: tabs.filter((t) => t.getAttribute('aria-selected') === 'true').map((t) => t.id),
      tabindex: tabs.map((t) => t.tabIndex),
      controls: tabs.every((t) => document.getElementById(t.getAttribute('aria-controls'))?.getAttribute('role') === 'tabpanel'),
      labelled: [...document.querySelectorAll('[role="tabpanel"]')].every((p) => document.getElementById(p.getAttribute('aria-labelledby'))?.getAttribute('role') === 'tab'),
      visible: [...document.querySelectorAll('[role="tabpanel"]')].filter((p) => !p.hidden).map((p) => p.id),
    };
  });
  ok(aria.n === 10, `ten tabs: ${aria.n}`);
  ok(aria.selected.join() === 'tab-anatomy', `anatomy selected: ${aria.selected}`);
  ok(aria.tabindex.join() === '0,-1,-1,-1,-1,-1,-1,-1,-1,-1', `roving tabindex: ${aria.tabindex}`);
  ok(aria.controls && aria.labelled, 'tabs and panels point at each other');
  ok(aria.visible.join() === 'panel-anatomy', `one panel visible: ${aria.visible}`);
  // Keyboard: arrows move and open, Home and End, focus stays on the tab.
  await page.focus('#tab-anatomy');
  await page.keyboard.press('ArrowRight');
  await opened(page, 'water');
  ok((await page.evaluate(() => document.activeElement.id)) === 'tab-water', 'ArrowRight focuses the water tab');
  ok(hashOf(page) === '#water', `hash after ArrowRight: ${hashOf(page)}`);
  ok(requested.some((u) => u.endsWith('/plant-water/js/app.js')), 'water code loaded on demand');
  await page.keyboard.press('End');
  await opened(page, 'microscope');
  ok(requested.some((u) => u.endsWith('/microscope/js/app.js')), 'microscope code loaded on demand');
  await page.keyboard.press('ArrowRight');
  await opened(page, 'anatomy');
  ok((await page.evaluate(() => document.activeElement.id)) === 'tab-anatomy', 'ArrowRight wraps to the first tab');
  await page.keyboard.press('ArrowLeft');
  await opened(page, 'microscope');
  await page.keyboard.press('ArrowLeft');
  await opened(page, 'development');
  ok(requested.some((u) => u.endsWith('/development/js/app.js')), 'development code loaded on demand');
  await page.keyboard.press('ArrowLeft');
  await opened(page, 'fruits');
  ok(requested.some((u) => u.endsWith('/fruits/js/app.js')), 'fruits code loaded on demand');
  await page.keyboard.press('ArrowLeft');
  await opened(page, 'taxonomy');
  ok(requested.some((u) => u.endsWith('/taxonomy/js/app.js')), 'taxonomy code loaded on demand');
  await page.keyboard.press('ArrowLeft');
  await opened(page, 'graft');
  ok(requested.some((u) => u.endsWith('/graft/js/app.js')), 'grafting code loaded on demand');
  await page.keyboard.press('ArrowLeft');
  await opened(page, 'bouturage');
  ok(requested.some((u) => u.endsWith('/bouturage/js/app.js')), 'cuttings code loaded on demand');
  await page.keyboard.press('ArrowLeft');
  await opened(page, 'germination');
  ok(requested.some((u) => u.endsWith('/germination/js/app.js')), 'germination code loaded on demand');
  await page.keyboard.press('ArrowLeft');
  await opened(page, 'seeds');
  await page.keyboard.press('Home');
  await opened(page, 'anatomy');
  ok((await page.$$eval('[role="tabpanel"]:not([hidden])', (ps) => ps.length)) === 1, 'still one panel visible');
  // Tab key goes from the tab into the panel content, not to the other tabs.
  await page.keyboard.press('Tab');
  ok(!(await page.evaluate(() => document.activeElement.getAttribute('role') === 'tab')), 'Tab leaves the tab list');
  // A tab remembers its entry; Back and Forward walk the routes.
  await page.evaluate(() => { location.hash = 'anatomy/xylem'; });
  await waitCurrent(page, 'xylem');
  await page.click('#tab-seeds');
  await opened(page, 'seeds');
  ok((await page.getAttribute('#tab-anatomy', 'href')) === '#anatomy/xylem', `anatomy tab remembers its entry: ${await page.getAttribute('#tab-anatomy', 'href')}`);
  await page.goBack();
  await opened(page, 'anatomy');
  await waitCurrent(page, 'xylem');
  await page.goForward();
  await opened(page, 'seeds');
  // Unknown routes fall back to the first tab without errors.
  await page.evaluate(() => { location.hash = 'nothing-here'; });
  await opened(page, 'anatomy');
  // Language switch keeps the route, and the tab labels follow.
  await page.evaluate(() => { location.hash = 'seeds/ribes-rubrum'; });
  await opened(page, 'seeds');
  await waitCurrent(page, 'ribes-rubrum');
  await page.click('[data-lang-btn="fr"]');
  await page.waitForFunction(() => document.documentElement.lang === 'fr');
  await waitCurrent(page, 'ribes-rubrum');
  ok((await page.textContent('#tab-seeds .tab-label')).trim() === 'Hybridation', `French tab label: ${await page.textContent('#tab-seeds .tab-label')}`);
  ok(hashOf(page) === '#seeds/ribes-rubrum', 'language switch keeps the route');
  await page.click('[data-theme-btn]');
  ok((await page.getAttribute('html', 'data-theme')) === 'dark', 'theme toggle');
  await page.click('[data-lang-btn="en"]');
  await page.click('[data-theme-btn]');
  // Old addresses of the three tools land on their tab.
  for (const [old, want] of [['anatomy/#e=bark', '#anatomy/bark'], ['seeds/#e=ribes-rubrum', '#seeds/ribes-rubrum'], ['plant-water/', '#water']]) {
    await page.goto(`${BASE}/${old}`, { waitUntil: 'networkidle' });
    ok(hashOf(page) === want, `old address ${old} -> ${page.url()}`);
  }
  // No tracking: every request stays on this origin.
  const origin = new URL(BASE).origin;
  const foreign = [];
  page.on('request', (r) => { if (!r.url().startsWith(origin) && !r.url().startsWith('data:')) foreign.push(r.url()); });
  for (const t of TABS) { await page.goto(`${BASE}/#${t}`, { waitUntil: 'networkidle' }); await opened(page, t); }
  ok(foreign.length === 0, `requests to other sites: ${foreign.join(', ')}`);
  await ctx.close();
}

// ---------------------------------------------------------------- anatomy
{
  const { ctx, page } = await newPage('desktop', 'light', 'en');
  await page.goto(`${BASE}/#anatomy`, { waitUntil: 'networkidle' });
  await opened(page, 'anatomy');
  // Search in German without the umlaut, the entry and its pitfall note.
  await page.fill('#a-search', 'tuepfel');
  ok((await page.textContent('#a-results li:first-child')).includes('Tüpfel'), 'anatomy: "tuepfel" finds Tüpfel');
  await page.keyboard.press('Enter');
  await waitCurrent(page, 'pit');
  ok(hashOf(page) === '#anatomy/pit', `anatomy: route of the entry: ${page.url()}`);
  ok(/pit/i.test(await page.textContent('#a-title')), `anatomy: pit entry: ${await page.textContent('#a-title')}`);
  ok(await page.isVisible('[data-note="tuepfel"]'), 'anatomy: Tüpfel note shown');
  ok(await page.isVisible('.a-fig svg'), 'anatomy: pit drawing shown');
  await page.screenshot({ path: `${SHOTS}/interact-1-anatomy-pit.png`, fullPage: true });
  // A citation scrolls to its source without leaving the entry.
  const cite = page.locator('#a-entry a.src').first();
  const target = (await cite.getAttribute('href')).slice(1);
  await cite.click();
  ok(hashOf(page) === '#anatomy/pit', `anatomy: a citation keeps the route: ${page.url()}`);
  ok(await page.evaluate((id) => document.getElementById(id)?.classList.contains('is-target'), target), 'anatomy: the cited source is marked');
  // Rinde / Borke: the bark entry carries the note; labels in German.
  await page.evaluate(() => { location.hash = 'anatomy/bark'; });
  await waitCurrent(page, 'bark');
  ok(await page.isVisible('[data-note="rinde-borke"]'), 'anatomy: Rinde/Borke note on bark');
  await page.click('#a-labels button[data-l="de"]');
  ok((await page.textContent('#a-tree a[aria-current="true"]')).trim() === 'Rinde', `anatomy: German label of bark: ${await page.textContent('#a-tree a[aria-current="true"]')}`);
  await page.click('#a-labels button[data-l="en"]');
  // The tree: expand a node with the twist button, open a child.
  await page.click('#a-collapse');
  const twist = page.locator('#a-tree li[data-id="cell"] > .a-row > .a-twist');
  await twist.click();
  ok((await twist.getAttribute('aria-expanded')) === 'true', 'anatomy: twist expands');
  ok(await page.isVisible('#a-tree li[data-id="protoplast"]'), 'anatomy: children shown');
  await page.click('#a-tree a[data-id="protoplast"]');
  await waitCurrent(page, 'protoplast');
  ok(await page.isVisible('[data-note="protoplast-protoplasma"]'), 'anatomy: Protoplast/Protoplasma note');
  // A label in a drawing opens its entry.
  await page.locator('.a-fig a[href="#anatomy/vacuole"]').first().click();
  await waitCurrent(page, 'vacuole');
  // Every entry renders without error.
  const ids = await page.evaluate(async () => (await import('./anatomy/js/entries.js')).ENTRIES.map((e) => e.id));
  for (const id of ids) {
    await page.evaluate((id) => { location.hash = `anatomy/${id}`; }, id);
    await waitCurrent(page, id);
  }
  ok(ids.length > 250, `anatomy: ${ids.length} entries rendered`);
  // Drawings: every label stays inside its drawing, in the four languages.
  const { clipped, drawn, keys } = await page.evaluate(async () => {
    const { DRAWINGS } = await import('./anatomy/js/drawings.js');
    const out = [];
    let drawn = 0;
    for (const [key, d] of Object.entries(DRAWINGS)) {
      for (const l of ['la', 'fr', 'de', 'en']) {
        document.querySelectorAll('#a-labels button').forEach((b) => { if (b.dataset.l === l) b.click(); });
        location.hash = `anatomy/${d.for[0]}`;
        await new Promise((r) => setTimeout(r, 60));
        const svg = document.querySelector(`.a-fig[data-drawing="${key}"] svg`);
        if (!svg) { out.push(`${key}: not shown for ${d.for[0]}`); continue; }
        drawn++;
        const vb = svg.viewBox.baseVal;
        for (const t of svg.querySelectorAll('text')) {
          const b = t.getBBox();
          if (b.x < vb.x - 1 || b.y < vb.y - 1 || b.x + b.width > vb.x + vb.width + 1 || b.y + b.height > vb.y + vb.height + 1) out.push(`${key}/${l}: "${t.textContent}"`);
        }
      }
    }
    return { clipped: out, drawn, keys: Object.keys(DRAWINGS).length };
  });
  ok(clipped.length === 0, `anatomy: labels outside the drawing: ${clipped.slice(0, 12).join('; ')}`);
  ok(drawn === 4 * keys, `anatomy: drawings shown ${drawn / 4} of ${keys}`);
  await page.click('#a-labels button[data-l="en"]');
  for (const id of ['fruit-types', 'stem-modified', 'pollen', 'meristem', 'prickle', 'root-types']) {
    await page.evaluate((id) => { location.hash = `anatomy/${id}`; }, id);
    await waitCurrent(page, id);
    ok(await page.isVisible('.a-fig svg'), `anatomy: drawing for ${id}`);
    await page.locator('.a-fig').screenshot({ path: `${SHOTS}/drawing-${id}.png` });
  }
  await ctx.close();
}

// ---------------------------------------------------------------- water potential
{
  const { ctx, page } = await newPage('desktop', 'light', 'en');
  await page.goto(`${BASE}/#water`, { waitUntil: 'networkidle' });
  await opened(page, 'water');
  // Capillary rise for a 10 µm radius at 20 °C is about 1.49 m.
  await page.fill('#pw-radius', '10');
  ok(/1[.,]49\s*m/.test(await page.textContent('#pw-cap-out')), `water: Jurin 10 µm: ${await page.textContent('#pw-cap-out')}`);
  await page.fill('#pw-rh', '50');
  await page.fill('#pw-temp', '20');
  ok(/−93[.,]6\s*MPa/.test(await page.textContent('#pw-air-out')), `water: air at 50 % RH: ${await page.textContent('#pw-air-out')}`);
  // Compartments: each one explained, the calculator on its examples.
  ok(await page.isVisible('#compartments'), 'water: compartments section');
  for (const k of ['vacuole', 'cytoplasm', 'wall', 'apoplast', 'symplast']) ok(await page.isVisible(`[data-compartment="${k}"]`), `water: compartment ${k} explained`);
  await page.selectOption('#pw-cmp-preset', 'kb');
  const kb = await page.textContent('#pw-cmp-table');
  ok(/−0[.,]6/.test(kb) && /\+0[.,]3/.test(kb), `water: compartments of the Kramer & Boyer cell: ${kb.slice(0, 200)}`);
  await page.selectOption('#pw-cmp-preset', 'plasmolysis');
  ok(/plasmoly/i.test(await page.textContent('#pw-cmp-out')), `water: a strong solution plasmolyses: ${await page.textContent('#pw-cmp-out')}`);
  await page.selectOption('#pw-cmp-preset', 'own');
  await page.fill('#pw-cmp-outside', '-0.2');
  ok(/enters/i.test(await page.textContent('#pw-cmp-out')), `water: own value, water enters: ${await page.textContent('#pw-cmp-out')}`);
  // The table of contents routes to sections.
  await page.click('.pw-toc a[href="#water/compartments"]');
  ok(hashOf(page) === '#water/compartments', 'water: section in the URL');
  await page.waitForFunction(() => Math.abs(document.getElementById('compartments').getBoundingClientRect().top) < 140);
  // A link to an anatomy entry opens the other tab on that entry.
  await page.locator('#compartments a[href="#anatomy/vacuole"]').first().click();
  await opened(page, 'anatomy');
  await waitCurrent(page, 'vacuole');
  await page.goBack();
  await opened(page, 'water');
  await page.screenshot({ path: `${SHOTS}/interact-2-water.png`, fullPage: true });
  // A direct link to a section.
  await page.goto(`${BASE}/#water/capillarity`, { waitUntil: 'networkidle' });
  await opened(page, 'water');
  await page.waitForFunction(() => Math.abs(document.getElementById('capillarity').getBoundingClientRect().top) < 140);
  await ctx.close();
}

// ---------------------------------------------------------------- breeding systems
{
  const { ctx, page } = await newPage('desktop', 'light', 'en');
  await page.goto(`${BASE}/#seeds`, { waitUntil: 'networkidle' });
  await opened(page, 'seeds');
  // Search an old name, the gooseberry under Ribes.
  await page.fill('#a-search', 'Hylocereus');
  await page.keyboard.press('Enter');
  await page.waitForFunction(() => document.querySelector('#a-tree a[aria-current="true"]')?.dataset.id?.startsWith('selenicereus'));
  ok(/Selenicereus/.test(await page.textContent('#a-title')), `seeds: Hylocereus -> ${await page.textContent('#a-title')}`);
  ok(hashOf(page).startsWith('#seeds/selenicereus'), `seeds: route ${page.url()}`);
  await page.fill('#a-search', 'groseillier à maquereau');
  await page.keyboard.press('Enter');
  await waitCurrent(page, 'ribes-uva-crispa');
  ok((await page.textContent('.a-crumbs')).includes('Ribes'), 'seeds: gooseberry is under Ribes');
  // The overview table lists the featured plants and links to them.
  ok(await page.isVisible('#sd-overview'), 'seeds: overview of the plants');
  for (const id of ['prunus-amygdalus', 'selenicereus-undatus', 'actinidia-chinensis', 'prunus-domestica', 'rubus-fruticosus-agg', 'rubus-idaeus', 'ribes-uva-crispa', 'ribes-rubrum', 'hippophae-rhamnoides', 'eucalyptus-deglupta'])
    ok((await page.locator(`#sd-overview a[href="#seeds/${id}"]`).count()) > 0, `seeds: overview row for ${id}`);
  // The almond pair check.
  await page.evaluate(() => { location.hash = 'seeds/prunus-amygdalus'; });
  await waitCurrent(page, 'prunus-amygdalus');
  ok(await page.isVisible('#sd-mother'), 'seeds: almond pair check shown');
  ok((await page.locator('#a-entry .sd-taxlink a').getAttribute('href')) === '#taxonomy/prunus-dulcis',
    'seeds: almond links to its accepted taxonomy name');
  const opts = await page.$$eval('#sd-mother option', (os) => os.map((o) => o.value));
  await page.selectOption('#sd-mother', opts[0]);
  await page.selectOption('#sd-donor', opts[0]);
  ok(['incompatible', 'semi'].includes(await page.getAttribute('#sd-pair-result', 'data-result')), 'seeds: self pair gives a verdict');
  // A concept link scrolls to its card and keeps the route.
  await page.locator('#a-entry a.sd-flag[href^="#c-"]').first().click();
  ok(hashOf(page) === '#seeds/prunus-amygdalus', `seeds: concept link keeps the route: ${page.url()}`);
  ok((await page.locator('.sd-concept.is-target').count()) === 1, 'seeds: concept card marked');
  await page.screenshot({ path: `${SHOTS}/interact-3-seeds-almond.png`, fullPage: true });
  const tids = await page.evaluate(async () => (await import('./seeds/js/taxa.js')).TAXA.map((t) => t.id));
  for (const id of tids) {
    await page.evaluate((id) => { location.hash = `seeds/${id}`; }, id);
    await waitCurrent(page, id);
  }
  ok(tids.length > 100, `seeds: ${tids.length} taxa rendered`);
  await ctx.close();
}

// ---------------------------------------------------------------- germination
{
  const { ctx, page } = await newPage('desktop', 'light', 'en');
  await page.goto(`${BASE}/#germination`, { waitUntil: 'networkidle' });
  await opened(page, 'germination');
  ok((await page.textContent('#panel-germination h1')).includes('Germination'), 'germination: title');
  ok((await page.locator('.gm-stats li').count()) === 4, 'germination: four key figures');
  ok((await page.locator('.gm-fig-grid svg').count()) === 3, 'germination: three drawings');
  ok((await page.locator('.gm-dorm').count()) === 5, 'germination: five dormancy cards');
  ok((await page.locator('.gm-treat').count()) === 11, 'germination: eleven treatments');
  ok((await page.locator('.gm-sp').count()) === 17, 'germination: seventeen species');
  ok((await page.locator('.gm-sp .gm-sp-tax').count()) === 17, 'germination: every species links to taxonomy');
  ok((await page.locator('#sp-olea-europaea .gm-sp-tax').getAttribute('href')) === '#taxonomy/olea-europaea',
    'germination: olive links to its taxonomy entry');
  // Search by common name, then an empty result.
  await page.fill('#gm-search', 'olive');
  ok((await page.locator('.gm-sp').count()) === 1, 'germination: "olive" narrows to one species');
  ok(await page.isVisible('#sp-olea-europaea'), 'germination: the olive is the match');
  await page.fill('#gm-search', 'zzzz');
  ok(await page.isVisible('.gm-empty'), 'germination: empty search gives a message');
  await page.fill('#gm-search', '');
  // Filter by dormancy: PY+PD has three species here.
  await page.selectOption('#gm-filter', 'pypd');
  ok((await page.locator('.gm-sp').count()) === 3, 'germination: PY+PD filters to three species');
  ok((await page.textContent('.gm-count')).includes('3 / 17'), `germination: live count: ${await page.textContent('.gm-count')}`);
  await page.selectOption('#gm-filter', 'all');
  // A species route opens its entry and clears a stale search.
  await page.fill('#gm-search', 'zzzz');
  await page.evaluate(() => { location.hash = 'germination/olea-europaea'; });
  await page.waitForFunction(() => document.getElementById('sp-olea-europaea')?.open === true);
  ok((await page.inputValue('#gm-search')) === '', 'germination: route clears the search');
  ok(hashOf(page) === '#germination/olea-europaea', `germination: species route: ${page.url()}`);
  ok((await page.textContent('#sp-olea-europaea')).includes('Olea europaea'), 'germination: olive entry open');
  // Treatments are native details, open and close with the keyboard.
  const treat = page.locator('#t-cold');
  await treat.locator('summary').click();
  ok(await treat.evaluate((d) => d.open), 'germination: treatment opens');
  await treat.locator('summary').press('Enter');
  ok(!(await treat.evaluate((d) => d.open)), 'germination: treatment closes with Enter');
  // The corrections of the PDF are listed and sourced.
  ok((await page.locator('.gm-corr-item').count()) >= 10, 'germination: corrections listed');
  ok((await page.locator('#src-wpsm').count()) === 1, 'germination: WPSM in the sources');
  // Language switch keeps the species route and rebuilds the tab.
  await page.click('[data-lang-btn="fr"]');
  await page.waitForFunction(() => document.documentElement.lang === 'fr');
  await page.waitForFunction(() => document.getElementById('sp-olea-europaea')?.open === true);
  ok(hashOf(page) === '#germination/olea-europaea', 'germination: French keeps the route');
  ok((await page.textContent('#panel-germination h1')).includes('Germination'), 'germination: French title');
  await page.screenshot({ path: `${SHOTS}/interact-4-germination-olive.png`, fullPage: true });
  await ctx.close();
}

// ---------------------------------------------------------------- cuttings
{
  const { ctx, page } = await newPage('desktop', 'light', 'en');
  await page.goto(`${BASE}/#bouturage`, { waitUntil: 'networkidle' });
  await opened(page, 'bouturage');
  ok((await page.textContent('#panel-bouturage h1')).includes('Cuttings'), 'cuttings: title');
  ok((await page.locator('.bt-stats li').count()) === 4, 'cuttings: four key figures');
  ok((await page.locator('.bt-fig-grid svg').count()) === 3, 'cuttings: three drawings');
  ok((await page.locator('.bt-type').count()) === 5, 'cuttings: five cutting types');
  ok((await page.locator('.bt-factor').count()) === 6, 'cuttings: six factors');
  ok((await page.locator('.bt-layer').count()) === 4, 'cuttings: four layering methods');
  ok((await page.locator('.bt-sp').count()) === 14, 'cuttings: fourteen species');
  ok((await page.locator('.bt-sp .bt-sp-tax').count()) === 14, 'cuttings: every species links to taxonomy');
  ok((await page.locator('#sp-olea-europaea .bt-sp-tax').getAttribute('href')) === '#taxonomy/olea-europaea',
    'cuttings: olive links to its taxonomy entry');
  // Search by common name and by scientific name, then an empty result.
  await page.fill('#bt-search', 'olive');
  ok((await page.locator('.bt-sp').count()) === 1, 'cuttings: "olive" narrows to one species');
  ok(await page.isVisible('#sp-olea-europaea'), 'cuttings: the olive is the match');
  await page.fill('#bt-search', 'Selenicereus');
  ok(await page.isVisible('#sp-selenicereus-undatus'), 'cuttings: scientific name search');
  await page.fill('#bt-search', 'zzzz');
  ok(await page.isVisible('.bt-empty'), 'cuttings: empty search gives a message');
  await page.fill('#bt-search', '');
  // Difficulty filter: three difficult species here.
  await page.selectOption('#bt-filter', 'difficult');
  ok((await page.locator('.bt-sp').count()) === 3, 'cuttings: difficult filters to three species');
  ok((await page.textContent('.bt-count')).includes('3 / 14'), `cuttings: live count: ${await page.textContent('.bt-count')}`);
  await page.selectOption('#bt-filter', 'all');
  // A species route opens its entry and clears a stale search.
  await page.fill('#bt-search', 'zzzz');
  await page.evaluate(() => { location.hash = 'bouturage/olea-europaea'; });
  await page.waitForFunction(() => document.getElementById('sp-olea-europaea')?.open === true);
  ok((await page.inputValue('#bt-search')) === '', 'cuttings: route clears the search');
  ok(hashOf(page) === '#bouturage/olea-europaea', `cuttings: species route: ${page.url()}`);
  ok((await page.textContent('#sp-olea-europaea')).includes('Olea europaea'), 'cuttings: olive entry open');
  ok((await page.textContent('#sp-olea-europaea')).includes('Layering'), 'cuttings: olive has a layering block');
  // The type cards are native details, open and close with the keyboard.
  const type = page.locator('#t-semi');
  await type.locator('summary').click();
  ok(await type.evaluate((d) => d.open), 'cuttings: cutting type opens');
  await type.locator('summary').press('Enter');
  ok(!(await type.evaluate((d) => d.open)), 'cuttings: cutting type closes with Enter');
  // A species with no layering says why.
  await page.evaluate(() => { location.hash = 'bouturage/hippophae-rhamnoides'; });
  await page.waitForFunction(() => document.getElementById('sp-hippophae-rhamnoides')?.open === true);
  ok((await page.textContent('#sp-hippophae-rhamnoides')).includes('No layering'), 'cuttings: no-layering explanation');
  // The corrections of the PDF are listed and sourced.
  ok((await page.locator('.bt-corr-item').count()) === 11, 'cuttings: eleven corrections');
  ok((await page.locator('#src-bhusal2003').count()) === 1, 'cuttings: Bhusal in the sources');
  // Language switch keeps the species route and rebuilds the tab.
  await page.click('[data-lang-btn="fr"]');
  await page.waitForFunction(() => document.documentElement.lang === 'fr');
  await page.waitForFunction(() => document.getElementById('sp-hippophae-rhamnoides')?.open === true);
  ok(hashOf(page) === '#bouturage/hippophae-rhamnoides', 'cuttings: French keeps the route');
  ok((await page.textContent('#panel-bouturage h1')).includes('Bouturage'), 'cuttings: French title');
  ok((await page.textContent('#sp-hippophae-rhamnoides')).includes('Pas de marcottage'), 'cuttings: French no-layering text');
  await page.screenshot({ path: `${SHOTS}/interact-5-bouturage-argousier.png`, fullPage: true });
  await ctx.close();
}

// ---------------------------------------------------------------- grafting
{
  const { ctx, page } = await newPage('desktop', 'light', 'en');
  await page.goto(`${BASE}/#graft`, { waitUntil: 'networkidle' });
  await opened(page, 'graft');
  ok(hashOf(page) === '#graft' && /Prunus amygdalus/.test(await page.textContent('#a-title')), 'graft: almond by default');
  ok((await page.locator('#a-entry .gf-stocks tbody tr').count()) >= 8, 'graft: almond rootstock table');
  // A rootstock name finds the rootstock under its plant.
  await page.fill('#a-search', 'GF 677');
  await page.keyboard.press('Enter');
  await waitCurrent(page, 'prunus-amygdalus--gf-677');
  ok((await page.textContent('.a-crumbs')).includes('rootstocks'), 'graft: rootstock under the plant’s rootstocks');
  ok((await page.locator('.gf-traits tr[data-c="lime"]').count()) === 1, 'graft: GF 677 has its lime row');
  // Plants not grafted say so.
  await page.evaluate(() => { location.hash = 'graft/rubus-idaeus'; });
  await waitCurrent(page, 'rubus-idaeus');
  ok(/Not grafted/.test(await page.textContent('#a-entry .sd-glance')), 'graft: raspberry is not grafted');
  ok((await page.locator('#a-entry .gf-taxlink a').getAttribute('href')) === '#taxonomy/rubus-idaeus',
    'graft: raspberry links to its taxonomy entry');
  // A criterion link scrolls to its card and keeps the route.
  await page.evaluate(() => { location.hash = 'graft/prunus-amygdalus--marianna-2624'; });
  await waitCurrent(page, 'prunus-amygdalus--marianna-2624');
  await page.locator('.gf-traits a[href="#c-wet"]').click();
  ok(hashOf(page) === '#graft/prunus-amygdalus--marianna-2624', `graft: criterion link keeps the route: ${page.url()}`);
  ok((await page.locator('.sd-concept.is-target').count()) === 1, 'graft: criterion card marked');
  await page.screenshot({ path: `${SHOTS}/interact-5-graft-marianna.png`, fullPage: true });
  // Every node opens.
  const nids = await page.evaluate(async () => {
    const [{ TAXA }, g, { graftNodes }] = await Promise.all([import('./seeds/js/taxa.js'), import('./graft/js/graft.js'), import('./graft/js/grafting.js')]);
    return graftNodes(TAXA, g.SCIONS, g.ROOTSTOCKS).map((n) => n.id);
  });
  for (const id of nids) {
    await page.evaluate((id) => { location.hash = `graft/${id}`; }, id);
    await waitCurrent(page, id);
  }
  ok(nids.length > 150, `graft: ${nids.length} nodes rendered`);
  await ctx.close();
}

// ---------------------------------------------------------------- taxonomy
{
  const { ctx, page } = await newPage('desktop', 'light', 'en');
  await page.goto(`${BASE}/#taxonomy`, { waitUntil: 'networkidle' });
  await opened(page, 'taxonomy');
  // Bread wheat by default: a flower figure and the counts table.
  ok(/Triticum aestivum/.test(await page.textContent('.taxo-name')), 'taxonomy: bread wheat by default');
  ok(await page.isVisible('.taxo-fig svg'), 'taxonomy: a flower figure is drawn');
  ok((await page.locator('.taxo-table tr').count()) >= 7, 'taxonomy: the counts table (four whorls plus symmetry, ovary, sex)');
  // Search a common name, the species opens with its flower.
  await page.fill('.taxo-search', 'amandier');
  await page.keyboard.press('Enter');
  await page.waitForFunction(() => /Prunus dulcis/.test(document.querySelector('.taxo-name')?.textContent ?? ''));
  ok(hashOf(page) === '#taxonomy/prunus-dulcis', `taxonomy: search route: ${page.url()}`);
  ok(await page.isVisible('.taxo-fig svg'), 'taxonomy: almond flower drawn');
  await page.screenshot({ path: `${SHOTS}/interact-4-taxonomy-almond.png`, fullPage: true });
  // Every taxon (order, family, genus, species) opens with its name.
  const taxa = await page.evaluate(async () => (await import('./taxonomy/js/taxa.js')).TAXA.map((t) => ({ id: t.id, name: t.name })));
  for (const { id, name } of taxa) {
    await page.evaluate((id) => { location.hash = `taxonomy/${id}`; }, id);
    await page.waitForFunction((n) => (document.querySelector('.taxo-name')?.textContent ?? '').includes(n), name);
  }
  ok(taxa.length >= 8, `taxonomy: ${taxa.length} taxa rendered`);
  const spCount = await page.evaluate(async () => (await import('./taxonomy/js/taxa.js')).TAXA.filter((t) => t.rank === 'species').length);
  ok(spCount === 37, `taxonomy: ${spCount} species (all propagation species included)`);
  // A gymnosperm has no ovary: the row says “naked”, with no anatomy link.
  await page.evaluate(() => { location.hash = 'taxonomy/pinus-sylvestris'; });
  await page.waitForFunction(() => /Pinus sylvestris/.test(document.querySelector('.taxo-name')?.textContent ?? ''));
  ok((await page.textContent('.taxo-table')).includes('naked (no ovary: gymnosperm)'), 'taxonomy: pine ovary marked naked');
  // A species of several tabs links to each: breeding, germination and cuttings.
  await page.evaluate(() => { location.hash = 'taxonomy/actinidia-deliciosa'; });
  await page.waitForFunction(() => /Actinidia deliciosa/.test(document.querySelector('.taxo-name')?.textContent ?? ''));
  const crossHrefs = await page.$$eval('.taxo-cross a', (as) => as.map((a) => a.getAttribute('href')));
  ok(crossHrefs.length === 3, `taxonomy: three cross-tab links: ${crossHrefs.join(', ')}`);
  for (const want of ['#seeds/actinidia-chinensis-var-deliciosa', '#germination/actinidia-deliciosa', '#bouturage/actinidia-deliciosa'])
    ok(crossHrefs.includes(want), `taxonomy: cross-link ${want}`);
  await page.screenshot({ path: `${SHOTS}/interact-7-taxonomy-links.png`, fullPage: true });
  await ctx.close();
}

// ---------------------------------------------------------------- fruits and development
{
  const { ctx, page } = await newPage('desktop', 'light', 'en');
  await page.goto(`${BASE}/#fruits`, { waitUntil: 'networkidle' });
  await opened(page, 'fruits');
  // The master table with its seven categories, and a section per category.
  ok(await page.isVisible('.fv-table'), 'fruits: the category table is drawn');
  ok((await page.locator('.fv-cat').count()) === 7, 'fruits: one section per category (7)');
  ok((await page.locator('.fv-cat svg').count()) === 7, 'fruits: each category has a drawing');
  ok((await page.locator('.fv-terms tbody tr').count()) === 11, 'fruits: the eleven-term vocabulary table');
  await page.evaluate(() => { location.hash = 'fruits/drupe'; });
  await page.waitForFunction(() => document.getElementById('drupe')?.getBoundingClientRect().top < window.innerHeight);
  // Chips from the category to Anatomy and Development.
  ok((await page.getAttribute('#drupe .fv-chip[href^="#anatomy"]', 'href')) === '#anatomy/drupe', 'fruits: chip to the drupe entry');
  ok((await page.getAttribute('#drupe .fv-chip[href^="#development"]', 'href')) === '#development/drupe', 'fruits: chip to the drupe process');
  ok(/Prunus dulcis/.test(await page.textContent('#drupe')), 'fruits: the almond is a drupe example');
  // The Steinkern correction: the stone is the endocarp, the almond is the seed.
  ok(await page.isVisible('#steinkern'), 'fruits: the Steinkern note is shown');
  const steinkern = await page.textContent('#steinkern');
  ok(/endosperm/i.test(steinkern) && /cotyledon/i.test(steinkern), 'fruits: the note explains endosperm and cotyledons');
  ok(/not .*endosperm \+ seed/i.test(steinkern), 'fruits: the note rejects “endosperm + seed”');
  // Pome and nut, with their own corrections and links to Anatomy.
  await page.evaluate(() => { location.hash = 'fruits/pome'; });
  await page.waitForFunction(() => document.getElementById('pome')?.getBoundingClientRect().top < window.innerHeight);
  ok(/Malus domestica/.test(await page.textContent('#pome')), 'fruits: the apple is a pome example');
  ok(/Samenobst/.test(await page.textContent('#pome')), 'fruits: the pome note names Samenobst');
  ok((await page.getAttribute('#pome .fv-chip[href^="#anatomy"]', 'href')) === '#anatomy/pome', 'fruits: chip to the pome entry');
  await page.evaluate(() => { location.hash = 'fruits/nut'; });
  await page.waitForFunction(() => document.getElementById('nut')?.getBoundingClientRect().top < window.innerHeight);
  ok(/Juglans regia/.test(await page.textContent('#nut')), 'fruits: the walnut is a nut example');
  ok(/juglone/i.test(await page.textContent('#nut')), 'fruits: the nut note explains juglone');
  ok(/cupule/i.test(await page.textContent('#nut')), 'fruits: the nut note explains the cupule');
  ok((await page.getAttribute('#nut .fv-chip[href^="#anatomy"]', 'href')) === '#anatomy/nut', 'fruits: chip to the nut entry');
  await page.screenshot({ path: `${SHOTS}/interact-4b-fruits-nut.png`, fullPage: true });
  // Development: a slider and four stage buttons per process; a stage switch rebuilds the box.
  await page.evaluate(() => { location.hash = 'development/drupe'; });
  await opened(page, 'development');
  const sliders = await page.locator('#drupe .dv-slider').count();
  ok(sliders === 1, 'development: one slider per process');
  ok((await page.locator('#drupe .dv-step').count()) === 4, 'development: four stages per process');
  const before = await page.textContent('#drupe .dv-stage svg title');
  await page.click('#drupe .dv-step:nth-child(4)');
  await page.waitForFunction(() => document.querySelector('#drupe .dv-slider').value === '3');
  const after = await page.textContent('#drupe .dv-stage svg title');
  ok(before !== after, `development: the stage drawing changes (${before} -> ${after})`);
  ok(await page.isVisible('#drupe .dv-stage svg'), 'development: a stage drawing is shown');
  // The processes cover the three categories we draw.
  ok((await page.locator('#panel-development section[id] h2').count()) === 3, 'development: three processes (drupe, berry, aggregate)');
  await ctx.close();
}

// ---------------------------------------------------------------- microscope
{
  const { ctx, page } = await newPage('desktop', 'light', 'en');
  const bad = [];
  page.on('response', (r) => { if (r.status() >= 400) bad.push(`${r.status()} ${r.url()}`); });
  await page.goto(`${BASE}/#microscope/onion-root-tip`, { waitUntil: 'networkidle' });
  await opened(page, 'microscope');
  ok((await page.getAttribute('.mc-specimens button[aria-pressed="true"]', 'data-id')) === 'onion-root-tip', 'microscope: the route picks the specimen');
  const pick = async (obj, eye, barlow) => {
    await page.click(`.mc-group button[data-id="${obj}"]`);
    await page.click(`.mc-group button[data-id="${eye}"]`);
    if ((await page.isChecked('#mc-barlow')) !== barlow) await page.click('#mc-barlow');
    await page.waitForFunction(() => document.getElementById('mc-view').getAttribute('aria-busy') === 'false');
  };
  // Pixels in the middle of the view, after the image is drawn.
  const centre = () => page.evaluate(() => {
    const c = document.querySelector('#mc-view canvas');
    const d = c.getContext('2d').getImageData(c.width / 2 - 2, c.height / 2 - 2, 4, 4).data;
    return [d[0], d[1], d[2]];
  });
  for (const [obj, eye, barlow, want] of [['40x', 'wf10', false, 'useful'], ['40x', 'wf20', false, 'empty'], ['40x', 'wf20', true, 'empty'], ['4x', 'wf10', false, 'low'], ['4x', 'wf20', false, 'useful'], ['10x', 'wf20', true, 'empty']]) {
    await pick(obj, eye, barlow);
    await page.waitForTimeout(150);
    ok((await page.getAttribute('.mc-verdict', 'data-v')) === want, `microscope: ${obj} ${eye}${barlow ? ' + Barlow' : ''} -> ${await page.getAttribute('.mc-verdict', 'data-v')}, want ${want}`);
  }
  await pick('40x', 'wf10', false);
  await page.waitForTimeout(150);
  const px = await centre();
  ok(!(px[0] === 0x1b && px[1] === 0x1f && px[2] === 0x1e), `microscope: the photograph is drawn (${px})`);
  ok((await page.textContent('.mc-readout')).includes('400×'), 'microscope: 40 x 10 = 400x');
  await page.screenshot({ path: `${SHOTS}/interact-4-microscope-40x.png`, fullPage: false });
  // Drag and keys move the slide without errors.
  const box = await page.locator('#mc-view').boundingBox();
  await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
  await page.mouse.down(); await page.mouse.move(box.x + box.width / 2 - 120, box.y + box.height / 2 - 60, { steps: 5 }); await page.mouse.up();
  await page.focus('#mc-view'); await page.keyboard.press('ArrowRight'); await page.keyboard.press('ArrowDown');
  // A photograph not sharp enough for an objective says so.
  await page.click('.mc-specimens button[data-id="maize-stem"]');
  ok(hashOf(page) === '#microscope/maize-stem', `microscope: route follows the specimen: ${hashOf(page)}`);
  await pick('40x', 'wf10', false);
  ok(await page.isVisible('.mc-banner'), 'microscope: banner shown');
  ok(/not sharp enough/.test(await page.textContent('.mc-banner')), `microscope: limited photograph explained: ${await page.textContent('.mc-banner')}`);
  // The photograph as taken.
  await page.click('#mc-photo');
  ok(/as taken/.test(await page.textContent('.mc-banner')), 'microscope: photo view explained');
  await page.click('#mc-photo');
  // Every specimen with every objective and eyepiece.
  const ids = await page.$$eval('.mc-specimens button', (bs) => bs.map((b) => b.dataset.id));
  for (const id of ids) {
    await page.click(`.mc-specimens button[data-id="${id}"]`);
    for (const obj of ['4x', '10x', '40x']) for (const eye of ['wf10', 'wf20']) await pick(obj, eye, false);
  }
  ok(ids.length >= 8, `microscope: ${ids.length} specimens`);
  // Structures: invisible ones say no with every objective.
  const er = await page.$$eval('.mc-struct tbody tr', (rows) => rows.find((r) => /Endoplasmic/.test(r.textContent))?.querySelectorAll('td.mc-res-no').length);
  ok(er === 3, `microscope: ER not resolved by any objective (${er})`);
  // A citation keeps the route; a credit link is there for every specimen.
  await page.locator('#structures a.src').first().click();
  ok(hashOf(page).startsWith('#microscope'), `microscope: a citation keeps the route: ${page.url()}`);
  ok((await page.locator('.mc-credit li').count()) === ids.length, 'microscope: one credit per photograph');
  ok(bad.length === 0, `microscope: failed requests: ${bad.join(', ')}`);
  await ctx.close();
}

// ---------------------------------------------------------------- phone
{
  const { ctx, page } = await newPage('phone', 'dark', 'fr');
  for (const route of ['anatomy/bordered-pit', 'anatomy/fruit-types', 'water/compartments', 'seeds/prunus-amygdalus', 'germination/prunus-cerasifera', 'graft/prunus-amygdalus--gf-677', 'microscope']) {
    await page.goto(`${BASE}/#${route}`, { waitUntil: 'networkidle' });
    await opened(page, route.split('/')[0]);
    const overflow = await overflowOf(page);
    ok(overflow <= 0, `${route} phone: horizontal overflow ${overflow}px`);
    await page.screenshot({ path: `${SHOTS}/phone-${route.replace('/', '-')}.png`, fullPage: true });
  }
  // The ten tabs stay on one row and are big enough to tap. On a phone the row
  // scrolls sideways, so the last tab must be reachable by scrolling, not fit.
  const boxes = await page.$$eval('[role="tab"]', (ts) => ts.map((t) => t.getBoundingClientRect()).map((r) => ({ top: r.top, right: r.right, h: r.height })));
  ok(boxes.every((b) => Math.abs(b.top - boxes[0].top) < 1), `phone: tabs on one row: ${JSON.stringify(boxes)}`);
  const scrolled = await page.evaluate(() => {
    const row = document.querySelector('.tabs');
    row.scrollLeft = row.scrollWidth;
    const last = row.lastElementChild.getBoundingClientRect();
    return { right: last.right, width: row.clientWidth, scrollWidth: row.scrollWidth };
  });
  ok(scrolled.right <= 390.5, `phone: last tab reachable by scrolling: ${JSON.stringify(scrolled)}`);
  ok(scrolled.width <= 390 && scrolled.scrollWidth >= scrolled.width, 'phone: the tab row is the scrolling element');
  ok(boxes.every((b) => b.h >= 44), 'phone: tabs are at least 44 px tall');
  await page.evaluate(() => scrollTo(0, 3000));
  const top = await page.$eval('.tabbar', (t) => t.getBoundingClientRect().top);
  ok(Math.abs(top) < 1, `phone: tab bar sticks to the top: ${top}`);
  await page.tap('#tab-water');
  await opened(page, 'water');
  ok(hashOf(page) === '#water/compartments', `phone: the water tab reopens its section: ${hashOf(page)}`);
  await ctx.close();
}

await browser.close();
if (problems.length) {
  console.error(`FAILED ${problems.length} of ${checks} checks:\n- ${problems.join('\n- ')}`);
  process.exit(1);
}
console.log(`OK: ${checks} checks, no console errors. Screenshots in ${SHOTS}`);
