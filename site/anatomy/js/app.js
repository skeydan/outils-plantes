// Plant anatomy in four languages: a drill-down tree with breadcrumbs,
// search in Latin, French, German and English, a permalink per entry,
// sourced names and definitions, translation pitfalls and drawings.
import { lang } from '../../assets/site.js';
import { routeHref } from '../../assets/route.js';
import { h, citer } from '../../assets/ui.js';
import { renderTree as drawTree, wireSearch as wireSearchBox } from '../../assets/tree-ui.js';
import { ENTRIES } from './entries.js';
import { SOURCES } from './sources.js';
import { NOTES } from './notes.js';
import { DRAWINGS, drawingFor } from './drawings.js';
import { LANGS, buildIndex, pathTo, search } from './tree.js';

const STR = {
  title: { en: 'Plant anatomy in four languages', fr: 'Anatomie végétale en quatre langues' },
  lead: {
    en: 'From the whole plant down to the cell wall: organs, tissues, cells and their parts, each with its Latin, French, German and English name, a short definition, its place in the tree and where every word comes from. Translation pitfalls are flagged.',
    fr: 'De la plante entière jusqu’à la paroi cellulaire : organes, tissus, cellules et leurs parties, chacun avec son nom latin, français, allemand et anglais, une courte définition, sa place dans l’arbre et l’origine de chaque mot. Les pièges de traduction sont signalés.',
  },
};
const T = (en, fr) => (lang() === 'fr' ? fr : en);

const LANG_NAME = {
  la: { en: 'Latin', fr: 'latin' },
  fr: { en: 'French', fr: 'français' },
  de: { en: 'German', fr: 'allemand' },
  en: { en: 'English', fr: 'anglais' },
};
const KIND = {
  plant: { en: 'whole plant', fr: 'plante entière' },
  organ: { en: 'organ', fr: 'organe' },
  part: { en: 'part of an organ', fr: 'partie d’organe' },
  system: { en: 'set of organs', fr: 'ensemble d’organes' },
  tissue: { en: 'tissue', fr: 'tissu' },
  tissues: { en: 'group of tissues', fr: 'ensemble de tissus' },
  zone: { en: 'zone', fr: 'zone' },
  cell: { en: 'cell', fr: 'cellule' },
  cellpart: { en: 'part of a cell', fr: 'partie de cellule' },
  space: { en: 'space', fr: 'espace' },
  layer: { en: 'layer', fr: 'couche' },
  group: { en: 'grouping', fr: 'regroupement' },
  process: { en: 'process and its products', fr: 'processus et ses produits' },
  compartment: { en: 'compartment of the whole plant', fr: 'compartiment de la plante entière' },
  type: { en: 'kind', fr: 'type' },
};

const index = buildIndex(ENTRIES);
const sourceById = new Map(SOURCES.map((s) => [s.id, s]));
const { cite, list } = citer(SOURCES);
const DEFAULT_ID = 'plant';
const link = (id) => routeHref('anatomy', id);

// ---------------------------------------------------------------- state
const S = {
  id: DEFAULT_ID,
  labels: null, // language of the tree and drawing labels; null = page language
  open: new Set(['plant']), // expanded tree nodes (the organs are shown at first)
};
try { const l = localStorage.getItem('anatomy-labels'); if (LANGS.includes(l)) S.labels = l; } catch { /* ignore */ }
const labelLang = () => S.labels ?? lang();

const valid = (id) => (id && index.byId.has(id) ? id : null);

/** The name of an entry in a language, falling back to English, French, German, then Latin
 * (a term that exists only in German, like Sakkoderm, is shown as the German word). */
function nameOf(id, l = labelLang()) {
  const e = index.byId.get(id);
  return e.names[l]?.term ?? e.names.en?.term ?? e.names.fr?.term ?? e.names.de?.term ?? e.names.la?.term ?? id;
}
const uiName = (id) => nameOf(id, lang());

// ---------------------------------------------------------------- page skeleton
const els = {};
function build(main) {
  els.searchIn = h('input', {
    id: 'a-search', type: 'search', autocomplete: 'off', spellcheck: 'false', role: 'combobox',
    'aria-autocomplete': 'list', 'aria-expanded': 'false', 'aria-controls': 'a-results',
    placeholder: T('Search in Latin, French, German or English…', 'Chercher en latin, français, allemand ou anglais…'),
  });
  els.results = h('ul', { id: 'a-results', role: 'listbox', class: 'a-results', hidden: true, 'aria-label': T('Matching entries', 'Entrées trouvées') });
  els.searchMsg = h('p', { class: 'hint', id: 'a-search-msg', 'aria-live': 'polite' });
  const searchBox = h('div', { class: 'a-search card' },
    h('label', { for: 'a-search', class: 'field-label', text: T('Find a term', 'Trouver un terme') }),
    h('div', { class: 'a-search-in' }, els.searchIn, els.results),
    els.searchMsg,
    h('p', { class: 'hint', text: T('Accents and umlauts are optional: “tupfel” or “tuepfel” finds “Tüpfel”, “periderme” finds “périderme”.', 'Accents et trémas facultatifs : « tupfel » ou « tuepfel » trouve « Tüpfel », « periderme » trouve « périderme ».') }));

  const labelSeg = h('div', { class: 'seg', role: 'group', id: 'a-labels', 'aria-label': T('Language of the tree labels', 'Langue des noms dans l’arbre') },
    ...LANGS.map((l) => h('button', { type: 'button', 'data-l': l, lang: l, 'aria-pressed': String(labelLang() === l), text: l.toUpperCase(), title: LANG_NAME[l][lang()],
      onclick: () => { S.labels = l === lang() ? null : l; try { if (S.labels) localStorage.setItem('anatomy-labels', l); else localStorage.removeItem('anatomy-labels'); } catch { /* ignore */ } renderTree(); renderEntry({ scroll: false }); } })));
  els.tree = h('div', { class: 'a-tree', id: 'a-tree' });
  const treeCard = h('aside', { class: 'card a-tree-card', 'aria-labelledby': 'a-tree-h' },
    h('div', { class: 'a-tree-head' },
      h('h2', { id: 'a-tree-h', text: T('The tree', 'L’arbre') }),
      labelSeg),
    h('div', { class: 'a-tree-tools' },
      h('button', { type: 'button', class: 'chip-btn', id: 'a-expand', text: T('Expand all', 'Tout déplier'), onclick: () => { ENTRIES.forEach((e) => { if (index.children.get(e.id).length) S.open.add(e.id); }); renderTree(); } }),
      h('button', { type: 'button', class: 'chip-btn', id: 'a-collapse', text: T('Collapse all', 'Tout replier'), onclick: () => { S.open = new Set(pathTo(index, S.id).slice(0, -1)); renderTree(); } })),
    els.tree);

  els.entry = h('article', { class: 'card a-entry', id: 'a-entry', 'aria-live': 'polite', tabindex: '-1' });
  const depthMax = Math.max(...index.depth.values());
  const intro = h('section', { class: 'card a-about' },
    h('h2', { text: T('How to read an entry', 'Comment lire une entrée') }),
    h('ul', { class: 'a-about-list' },
      h('li', {}, T('The four names are always shown together, in the order Latin, French, German, English, with synonyms and the sources of each name. When no Latin term could be found in the sources, the slot says so: Latin is never made up.', 'Les quatre noms sont toujours affichés ensemble, dans l’ordre latin, français, allemand, anglais, avec les synonymes et les sources de chaque nom. Quand aucun terme latin n’a été trouvé dans les sources, la case le dit : le latin n’est jamais inventé.')),
      h('li', {}, T('A yellow box flags a translation pitfall: a word that means something else in another language, or two words that are easily confused.', 'Un encadré jaune signale un piège de traduction : un mot qui veut dire autre chose dans une autre langue, ou deux mots faciles à confondre.')),
      h('li', {}, T(`The tree has ${ENTRIES.length} entries, up to ${depthMax} levels below the whole plant. It is a tree for browsing: some tissues occur in several organs and are filed once, with “see also” links.`, `L’arbre compte ${ENTRIES.length} entrées, jusqu’à ${depthMax} niveaux sous la plante entière. C’est un arbre pour naviguer : certains tissus existent dans plusieurs organes ; ils sont rangés une fois, avec des liens « voir aussi ».`)),
      h('li', {}, T('Each entry has its own link (permalink): copy it to send someone straight to the term.', 'Chaque entrée a son propre lien (permalien) : copiez-le pour envoyer quelqu’un directement au terme.'))));

  const sources = h('section', { class: 'card wide sources', id: 'a-sources' }, h('h2', { text: 'Sources' }), list(),
    h('p', { class: 'small muted', text: T('Hierarchy and definitions follow the Plant Ontology (CC BY 4.0) and, for parts of cells, the Gene Ontology (CC BY 4.0), paraphrased in our own words. Multilingual labels from Wikidata (CC0) were checked against the glossaries and course pages listed. Drawings are our own.', 'La hiérarchie et les définitions suivent la Plant Ontology (CC BY 4.0) et, pour les parties de la cellule, la Gene Ontology (CC BY 4.0), reformulées avec nos mots. Les noms multilingues de Wikidata (CC0) ont été vérifiés dans les glossaires et pages de cours cités. Les dessins sont les nôtres.') }));

  main.replaceChildren(
    h('h1', { text: STR.title[lang()] }),
    h('p', { class: 'lead muted', text: STR.lead[lang()] }),
    searchBox,
    h('div', { class: 'a-cols' }, els.entry, treeCard),
    h('div', { class: 'tool-cols' }, intro, sources));

  wireSearch();
  renderTree();
  renderEntry({ scroll: false });
}

// ---------------------------------------------------------------- tree
function renderTree() {
  document.querySelectorAll('#a-labels button').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.l === labelLang())));
  drawTree(els.tree, { index, current: S.id, open: S.open, label: (id) => nameOf(id), labelLang: labelLang(), href: link, T });
}

// ---------------------------------------------------------------- entry
function srcRefs(list) {
  const ids = [...new Set((list ?? []).map((s) => (typeof s === 'string' ? s : s.k)))];
  return ids.length ? cite(...ids) : [];
}

function nameRow(e, l) {
  const n = e.names[l];
  const tag = h('span', { class: 'a-lang', title: LANG_NAME[l][lang()], text: l.toUpperCase() });
  if (!n?.term) {
    const why = n?.missing === 'none' || !n?.missing
      ? T(`No established ${LANG_NAME[l].en} term found`, `Aucun terme ${LANG_NAME[l].fr} établi trouvé`)
      : n.missing[lang()] ?? n.missing.en;
    const checked = (n?.checked ?? []).map((k) => sourceById.get(k)?.short ?? k);
    return h('div', { class: 'a-name missing', 'data-l': l }, tag,
      h('div', {},
        h('span', { class: 'a-term-missing', text: why }),
        checked.length ? h('span', { class: 'a-syn' }, T(' · checked: ', ' · vérifié : '), checked.join(', '), ' ', ...srcRefs(n.checked)) : null,
        n?.wd ? h('span', { class: 'a-syn' }, T(` · Wikidata gives “${n.wd}”, not confirmed by these sources`, ` · Wikidata donne « ${n.wd} », non confirmé par ces sources`)) : null,
        n?.remark ? h('span', { class: 'a-remark' }, n.remark[lang()] ?? n.remark.en) : null));
  }
  return h('div', { class: 'a-name', 'data-l': l }, tag,
    h('div', {},
      h('span', { class: 'a-term', lang: l, text: n.term }), ' ', ...srcRefs(n.src),
      n.syn?.length ? h('span', { class: 'a-syn' }, T(' · also ', ' · aussi '), ...n.syn.flatMap((s, i) => [i ? ', ' : '', h('span', { lang: l, text: s })])) : null,
      n.remark ? h('span', { class: 'a-remark' }, n.remark[lang()] ?? n.remark.en) : null,
      n.confusable?.length ? h('span', { class: 'a-remark' }, T('Not the same as ', 'À ne pas confondre avec '), ...n.confusable.flatMap((s, i) => [i ? ', ' : '', h('i', { lang: l, text: s })]), T(': see the note.', ' : voir la note.')) : null));
}

function entryLink(id) {
  return h('a', { href: link(id), class: 'a-chip' }, h('span', { text: uiName(id) }),
    labelLang() !== lang() ? h('span', { class: 'a-chip-alt', lang: labelLang(), text: nameOf(id) }) : null);
}

function provenance(e) {
  const rows = [];
  for (const l of LANGS) {
    const n = e.names[l];
    const items = (n?.term ? n.src : n?.checked) ?? [];
    const parts = items.map((s) => {
      const k = typeof s === 'string' ? s : s.k;
      const src = sourceById.get(k);
      const label = src?.short ?? k;
      const url = typeof s === 'string' ? null : s.url;
      return url ? h('a', { href: url, rel: 'noopener', target: '_blank', text: label + (s.loc ? `, ${s.loc}` : '') }) : h('span', { text: label + (typeof s !== 'string' && s.loc ? `, ${s.loc}` : '') });
    });
    rows.push(h('tr', {}, h('th', { text: LANG_NAME[l][lang()] }), h('td', {}, ...parts.flatMap((p, i) => [i ? ' · ' : '', p]), ' ', ...srcRefs(items))));
  }
  const ids = [e.onto, e.wd ? `Wikidata ${e.wd}` : null].filter(Boolean);
  return h('details', { class: 'more a-prov' }, h('summary', { text: T('Where the names come from', 'D’où viennent les noms') }),
    h('table', { class: 'kv' }, h('tbody', {}, ...rows)),
    ids.length ? h('p', { class: 'hint' }, T('Identifiers: ', 'Identifiants : '), ...ids.flatMap((x, i) => [i ? ', ' : '', ontoLink(x)])) : null);
}
function ontoLink(x) {
  if (x.startsWith('PO:')) return h('a', { href: `https://browser.planteome.org/amigo/term/${x}`, rel: 'noopener', target: '_blank', text: x });
  if (x.startsWith('GO:')) return h('a', { href: `https://amigo.geneontology.org/amigo/term/${x}`, rel: 'noopener', target: '_blank', text: x });
  if (x.startsWith('Wikidata ')) return h('a', { href: `https://www.wikidata.org/wiki/${x.slice(9)}`, rel: 'noopener', target: '_blank', text: x });
  return x;
}

function noteBox(noteId) {
  const n = NOTES[noteId];
  const body = n.body[lang()] ?? n.body.en;
  return h('section', { class: 'note a-pitfall', 'data-note': noteId },
    h('h3', {}, h('span', { class: 'a-flag', 'aria-hidden': 'true', text: '!' }), T('Translation pitfall: ', 'Piège de traduction : '), n.title[lang()] ?? n.title.en),
    ...body.map((p) => h('p', {}, ...richText(p))),
    n.src?.length ? h('p', { class: 'hint' }, T('Sources: ', 'Sources : '), ...srcRefs(n.src)) : null);
}

/** Paragraph text with {{id}} entry links and [[lang:term]] foreign words. */
function richText(s) {
  const out = [];
  const re = /\{\{([a-z0-9-]+)(?:\|([^}]+))?\}\}|\[\[(la|fr|de|en):([^\]]+)\]\]|\^([a-z0-9-]+(?:,[a-z0-9-]+)*)\^/g;
  let last = 0, m;
  while ((m = re.exec(s))) {
    if (m.index > last) out.push(s.slice(last, m.index));
    if (m[1]) out.push(h('a', { href: link(m[1]), text: m[2] ?? uiName(m[1]) }));
    else if (m[3]) out.push(h('i', { lang: m[3], text: m[4] }));
    else out.push(...cite(...m[5].split(',')));
    last = re.lastIndex;
  }
  if (last < s.length) out.push(s.slice(last));
  return out;
}

function drawingFigure(e) {
  const key = e.draw ?? drawingFor(e.id);
  const d = DRAWINGS[key];
  if (!d) return null;
  const svg = d.render({ hl: e.id, nameOf: (id) => nameOf(id), lang: labelLang(), ui: lang(), T });
  return h('figure', { class: 'a-fig', 'data-drawing': key },
    svg,
    h('figcaption', {}, d.caption[lang()] ?? d.caption.en, ' ',
      d.src?.length ? h('span', {}, T('Our drawing, after ', 'Notre dessin, d’après '), ...srcRefs(d.src), '.') : h('span', { text: T('Our drawing.', 'Notre dessin.') }),
      labelLang() !== lang() ? h('span', { text: T(` Labels in ${LANG_NAME[labelLang()].en}.`, ` Légendes en ${LANG_NAME[labelLang()].fr}.`) }) : null));
}

/**
 * Labels are names in four languages and some are long: grow the drawing's
 * view box so that every label stays inside it (needs the SVG in the page).
 */
function fitDrawing(svg) {
  if (!svg) return;
  const vb = svg.viewBox.baseVal;
  const b = svg.getBBox();
  const pad = 4;
  const x0 = Math.min(vb.x, b.x - pad), y0 = Math.min(vb.y, b.y - pad);
  const x1 = Math.max(vb.x + vb.width, b.x + b.width + pad), y1 = Math.max(vb.y + vb.height, b.y + b.height + pad);
  if (x0 < vb.x || y0 < vb.y || x1 > vb.x + vb.width || y1 > vb.y + vb.height) {
    svg.setAttribute('viewBox', `${x0} ${y0} ${x1 - x0} ${y1 - y0}`);
    svg.setAttribute('width', x1 - x0); svg.setAttribute('height', y1 - y0);
  }
}

function renderEntry({ scroll = true } = {}) {
  const e = index.byId.get(S.id);
  const path = pathTo(index, e.id);
  document.title = `${uiName(e.id)} · ${STR.title[lang()]} · outils-plantes`;
  const crumbs = h('nav', { class: 'a-crumbs', 'aria-label': T('Breadcrumbs', 'Fil d’Ariane') },
    h('ol', {}, ...path.map((id, i) => h('li', {}, i === path.length - 1
      ? h('span', { 'aria-current': 'page', text: uiName(id) })
      : h('a', { href: link(id), text: uiName(id) })))));
  const kids = index.children.get(e.id);
  const permalink = new URL(link(e.id), location.href).href;
  const copyBtn = h('button', { type: 'button', class: 'chip-btn', id: 'a-copy', text: T('Copy link', 'Copier le lien'),
    onclick: async () => {
      try { await navigator.clipboard.writeText(permalink); copyBtn.textContent = T('Copied', 'Copié'); }
      catch { copyBtn.textContent = T('Select the link to copy it', 'Sélectionnez le lien pour le copier'); }
      setTimeout(() => { copyBtn.textContent = T('Copy link', 'Copier le lien'); }, 2000);
    } });
  els.entry.replaceChildren(...[
    crumbs,
    h('div', { class: 'a-head' },
      h('h2', { id: 'a-title', text: uiName(e.id) }),
      h('span', { class: 'a-kind', text: KIND[e.kind]?.[lang()] ?? e.kind })),
    h('div', { class: 'a-names', role: 'group', 'aria-label': T('Names in four languages', 'Noms en quatre langues') }, ...LANGS.map((l) => nameRow(e, l))),
    h('p', { class: 'a-def' }, ...richText(e.def[lang()] ?? e.def.en), ' ', ...srcRefs(e.def.src)),
    ...(e.notes ?? []).map(noteBox),
    drawingFigure(e),
    h('div', { class: 'a-rel' },
      e.parent ? h('div', {}, h('h3', { text: T('Part of / kind of', 'Partie ou sorte de') }), entryLink(e.parent)) : null,
      kids.length ? h('div', {}, h('h3', { text: T(`Below (${kids.length})`, `En dessous (${kids.length})`) }), h('div', { class: 'a-chips' }, ...kids.map(entryLink))) : null,
      e.see?.length ? h('div', {}, h('h3', { text: T('See also', 'Voir aussi') }), h('div', { class: 'a-chips' }, ...e.see.map(entryLink))) : null),
    h('p', { class: 'a-perma small' }, T('Permalink: ', 'Permalien : '), h('a', { href: link(e.id), id: 'a-permalink', text: permalink }), ' ', copyBtn),
    provenance(e),
  ].filter(Boolean));
  fitDrawing(els.entry.querySelector('.a-fig svg'));
  if (scroll) {
    const r = els.entry.getBoundingClientRect();
    if (r.top < 0 || r.top > innerHeight * 0.6) els.entry.scrollIntoView({ block: 'start' });
    els.entry.focus({ preventScroll: true });
  }
}

function go(id) {
  if (!index.byId.has(id)) return;
  if (S.id === id && location.hash === link(id)) { renderTree(); renderEntry(); return; }
  location.hash = link(id);
}

// ---------------------------------------------------------------- search
function wireSearch() {
  wireSearchBox({
    input: els.searchIn, results: els.results, msg: els.searchMsg, T,
    find: (q) => search(index, q),
    pick: (r) => go(r.id),
    option: (r) => {
      const parent = index.byId.get(r.id).parent;
      return [
        h('span', { class: 'a-lang', text: r.lang.toUpperCase() }),
        h('span', { class: 'a-hit', lang: r.lang, text: r.term }),
        r.term !== uiName(r.id) ? h('span', { class: 'a-hit-ui', text: `→ ${uiName(r.id)}` }) : null,
        parent ? h('span', { class: 'a-hit-where', text: T(`in ${uiName(parent)}`, `dans ${uiName(parent)}`) }) : null,
      ].filter(Boolean);
    },
  });
}

// ---------------------------------------------------------------- tab interface
/** Build the tab into its panel; sub is the entry id from the route. */
export function mount(panel, sub) {
  S.id = valid(sub) ?? DEFAULT_ID;
  build(panel);
}
/** The route changed inside the tab. */
export function show(sub) {
  const id = valid(sub) ?? DEFAULT_ID;
  const changed = id !== S.id;
  S.id = id;
  renderTree();
  renderEntry({ scroll: changed });
}
