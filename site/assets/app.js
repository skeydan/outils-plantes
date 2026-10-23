// The single page: a tab bar (ARIA tabs) over four tools, hash routing and
// lazy loading. The route is the hash: #<tab>[/<sub>], for example
// #anatomy/pit, #water/compartments, #seeds/prunus-amygdalus. Each tool is an
// ES module loaded the first time its tab opens; it exports
// mount(panel, sub) (build the tab into its panel), show(sub) (the route
// changed inside the tab) and, optionally, unmount(). Only the open tab is
// in the page, so the tools can keep their own element ids.
import { initShell, onLangChange, lang } from './site.js';
import { parseRoute, routeHref, revealAnchor, TAB_IDS, DEFAULT_TAB } from './route.js';

const TABS = [
  { id: 'anatomy', load: () => import('../anatomy/js/app.js'),
    label: { en: 'Anatomy', fr: 'Anatomie' }, long: { en: 'Plant anatomy in four languages', fr: 'Anatomie végétale en quatre langues' } },
  { id: 'water', load: () => import('../plant-water/js/app.js'),
    label: { en: 'Water potential', fr: 'Potentiel hydrique' }, long: { en: 'How water moves in plants', fr: 'Comment l’eau circule dans les plantes' } },
  { id: 'seeds', load: () => import('../seeds/js/app.js'),
    label: { en: 'Breeding', fr: 'Hybridation' }, long: { en: 'Pollination, crosses and seeds', fr: 'Fécondation, croisements et graines' } },
  { id: 'microscope', load: () => import('../microscope/js/app.js'),
    label: { en: 'Microscope', fr: 'Microscope' }, long: { en: 'What a student microscope really shows', fr: 'Ce que montre vraiment un microscope d’élève' } },
];
const byId = new Map(TABS.map((t) => [t.id, t]));
if (TABS.map((t) => t.id).join() !== TAB_IDS.join() || !byId.has(DEFAULT_TAB)) throw new Error('tabs and routes disagree');

const DICT = {
  'shell.tabs': { en: 'Tools', fr: 'Outils' },
  'shell.loading': { en: 'Loading…', fr: 'Chargement…' },
  'shell.failed': { en: 'This tab could not be loaded. Reload the page to try again.', fr: 'Cet onglet n’a pas pu être chargé. Rechargez la page pour réessayer.' },
  footer: {
    en: 'Independent personal project, no tracking. Texts and drawings are original; facts come from the sources listed at the bottom of each tab.',
    fr: 'Projet personnel indépendant, sans pistage. Textes et dessins originaux ; les faits viennent des sources citées en bas de chaque onglet.',
  },
};
const say = (k) => DICT[k][lang()] ?? DICT[k].en;

// ---------------------------------------------------------------- elements
const list = document.querySelector('[role="tablist"]');
const tabEl = (id) => document.getElementById(`tab-${id}`);
const panelEl = (id) => document.getElementById(`panel-${id}`);

const modules = new Map(); // id -> Promise<module>
const lastSub = new Map(); // id -> sub, so a tab reopens where it was left
let current = null; // {tab, sub, mod}
let seq = 0;

function load(id) {
  if (!modules.has(id)) {
    const p = byId.get(id).load();
    p.catch(() => modules.delete(id));
    modules.set(id, p);
  }
  return modules.get(id);
}

function paintTabs(active) {
  for (const t of TABS) {
    const el = tabEl(t.id);
    const on = t.id === active;
    el.setAttribute('aria-selected', String(on));
    el.tabIndex = on ? 0 : -1;
    el.href = routeHref(t.id, lastSub.get(t.id));
    el.querySelector('.tab-label').textContent = t.label[lang()];
    el.title = t.long[lang()];
    panelEl(t.id).hidden = !on;
  }
  list.setAttribute('aria-label', say('shell.tabs'));
}

/** Show the route in the hash. remount: build the tab again (language change). */
async function render({ remount = false } = {}) {
  const { tab, sub } = parseRoute(location.hash);
  const my = ++seq;
  if (sub) lastSub.set(tab, sub); else lastSub.delete(tab);
  paintTabs(tab);
  if (current && current.tab === tab && !remount) { current.sub = sub; current.mod.show?.(sub); return; }
  const leaving = current;
  if (leaving) { leaving.mod.unmount?.(); panelEl(leaving.tab).replaceChildren(); }
  current = null;
  const panel = panelEl(tab);
  let mod;
  try {
    if (!modules.has(tab)) panel.replaceChildren(Object.assign(document.createElement('p'), { className: 'tab-loading', textContent: say('shell.loading') }));
    mod = await load(tab);
  } catch (err) {
    if (my === seq) panel.replaceChildren(Object.assign(document.createElement('p'), { className: 'err', textContent: say('shell.failed') }));
    console.warn(err);
    return;
  }
  if (my !== seq) return; // another route won meanwhile
  panel.replaceChildren();
  current = { tab, sub, mod };
  mod.mount(panel, sub);
  if (leaving && leaving.tab !== tab) {
    // A new tab starts at its top, just under the tab bar.
    const top = list.getBoundingClientRect().top + scrollY - parseFloat(getComputedStyle(list).top || 0);
    if (scrollY > top) scrollTo({ top });
  }
}

// ---------------------------------------------------------------- keyboard (APG tabs, automatic activation)
list.addEventListener('keydown', (ev) => {
  const i = TABS.findIndex((t) => tabEl(t.id) === document.activeElement);
  if (i < 0) return;
  let j = null;
  if (ev.key === 'ArrowRight') j = (i + 1) % TABS.length;
  else if (ev.key === 'ArrowLeft') j = (i - 1 + TABS.length) % TABS.length;
  else if (ev.key === 'Home') j = 0;
  else if (ev.key === 'End') j = TABS.length - 1;
  else if (ev.key === ' ') { ev.preventDefault(); tabEl(TABS[i].id).click(); return; }
  if (j === null) return;
  ev.preventDefault();
  const el = tabEl(TABS[j].id);
  el.focus();
  location.hash = el.getAttribute('href');
});
// Load a tab's code as soon as the pointer or focus reaches its tab.
for (const t of TABS) for (const ev of ['pointerenter', 'focus']) tabEl(t.id).addEventListener(ev, () => { load(t.id).catch(() => {}); }, { passive: true });

// ---------------------------------------------------------------- in-page anchors
// Links like #src-kb2 (a citation) or #c-dioecy (a concept card) point inside
// the open tab. They must not change the route: scroll to the target instead
// and mark it (replaces :target, which hash routing cannot use).
document.addEventListener('click', (ev) => {
  if (ev.defaultPrevented || ev.button !== 0 || ev.metaKey || ev.ctrlKey || ev.shiftKey || ev.altKey) return;
  const a = ev.target.closest?.('a[href^="#"]');
  if (!a) return;
  const href = a.getAttribute('href');
  const name = decodeURIComponent(href.slice(1));
  if (!name || byId.has(name.split('/')[0])) return; // a route: the hashchange handles it
  const panel = current && panelEl(current.tab);
  const target = panel && [...panel.querySelectorAll('[id]')].find((el) => el.id === name);
  if (!target) return;
  ev.preventDefault();
  revealAnchor(target);
});
// ---------------------------------------------------------------- start
initShell(DICT);
onLangChange(() => render({ remount: true }));
window.addEventListener('hashchange', () => render());
render();
