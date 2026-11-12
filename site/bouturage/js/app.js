// Cuttings and layering: the five kinds of cutting, the factors that decide
// success, four layering methods, and fourteen species with a protocol each.
// The starting PDF was treated as untrusted data: every protocol is rebuilt
// from the cited manuals, extension guides and papers, and the corrections
// section lists what the PDF got wrong. Route: #bouturage[/<species>].
import { lang } from '../../assets/site.js';
import { routeHref } from '../../assets/route.js';
import { taxonomyId } from '../../assets/species-links.js';
import { h, citer } from '../../assets/ui.js';
import { CUT_TYPES, FACTORS, LAYERS, SPECIES, STEPS, CONFUSIONS, CORRECTIONS } from './data.js';
import { SOURCES } from './sources.js';
import { cuttingAnatomy, cutTypes, layeringMethods } from './draw.js';

const T = (en, fr) => (lang() === 'fr' ? fr : en);
const L = (o) => (o ? o[lang()] ?? o.en : '');
const { cite, list } = citer(SOURCES);

const CUT = new Map(CUT_TYPES.map((c) => [c.id, c]));
const LAY = new Map(LAYERS.map((l) => [l.id, l]));
const SP = new Map(SPECIES.map((s) => [s.id, s]));

const DIFF = {
  easy: { en: 'Easy', fr: 'Facile' },
  moderate: { en: 'Moderate', fr: 'Moyen' },
  difficult: { en: 'Difficult', fr: 'Difficile' },
};

const STR = {
  title: { en: 'Cuttings and layering: how a plant becomes a clone', fr: 'Bouturage et marcottage : comment une plante devient un clone' },
  lead: {
    en: 'A cutting is a piece separated from its mother and made to root on its own. A layer is a shoot made to root while still attached. Neither is magic: juvenility, the right wood, water, heat and oxygen decide far more than a jar of hormone. This tab gives the five kinds of cutting, the factors that actually matter, four layering methods, and a sourced protocol for fourteen species — with the corrections to the course notes it started from.',
    fr: 'Une bouture est un fragment séparé de sa plante mère et amené à s’enraciner seul. Une marcotte est une pousse enracinée encore attachée. Ni l’une ni l’autre n’est magique : juvénilité, bois adapté, eau, chaleur et oxygène décident bien plus qu’un pot d’hormone. Cet onglet donne les cinq types de bouture, les facteurs qui comptent vraiment, quatre méthodes de marcottage, et un protocole sourcé pour quatorze espèces — avec les corrections des notes de cours dont il part.',
  },
  stats: {
    cut: { en: 'kinds of cutting', fr: 'types de bouture' },
    layers: { en: 'layering methods', fr: 'méthodes de marcottage' },
    species: { en: 'species', fr: 'espèces' },
    sources: { en: 'sources', fr: 'sources' },
  },
  see: { en: 'See also', fr: 'Voir aussi' },
  seeAnatomy: { en: 'node and stem in anatomy', fr: 'le nœud et la tige en anatomie' },
  seeGerm: { en: 'germination', fr: 'la germination' },
  seeFruits: { en: 'fruit types', fr: 'les types de fruits' },
  seeTaxo: { en: 'the species in taxonomy', fr: 'les espèces en taxonomie' },
  inTaxo: { en: 'in Taxonomy', fr: 'dans Taxonomie' },
  figures: { en: 'Three drawings to start with', fr: 'Trois dessins pour commencer' },
  figCut: { en: 'A prepared cutting', fr: 'Une bouture préparée' },
  figCutCap: {
    en: 'The base is cut just below a node and wounded; the top is cut above a bud; the leaf is reduced. Roots will come from the cambium at the wound and the node, not from the bark in general.',
    fr: 'La base est coupée juste sous un nœud et entaillée ; le sommet est coupé au-dessus d’un bourgeon ; la feuille est réduite. Les racines viendront du cambium à la blessure et au nœud, pas de l’écorce en général.',
  },
  figTypes: { en: 'Five kinds of cutting', fr: 'Cinq types de bouture' },
  figTypesCap: {
    en: 'The type follows the wood available, not the species’ reputation: a soft shoot in leaf, a semi-hardwood shoot, a dormant leafless stem, a root fragment, or a cactus segment left to callus.',
    fr: 'Le type suit le bois disponible, pas la réputation de l’espèce : pousse tendre feuillée, pousse semi-aoûtée, tige dormante sans feuilles, fragment de racine, ou segment de cactus laissé à cal.',
  },
  figLay: { en: 'Four ways of layering', fr: 'Quatre façons de marcotter' },
  figLayCap: {
    en: 'Simple, tip, air and mound layering. All four keep the shoot attached while it roots, which is why they are slower but safer than cuttings on difficult plants.',
    fr: 'Marcottage simple, par pointe, aérien et en butte. Les quatre gardent la pousse attachée pendant l’enracinement, d’où leur lenteur mais leur sûreté sur les plantes difficiles.',
  },
  types: { en: 'The five kinds of cutting', fr: 'Les cinq types de bouture' },
  typesLead: {
    en: 'Open a type for the detail. The same plant can be propagated by different types at different seasons; the wood in front of you decides.',
    fr: 'Ouvrez un type pour le détail. Une même plante peut se multiplier par des types différents selon la saison ; le bois devant vous décide.',
  },
  when: { en: 'When', fr: 'Quand' },
  factors: { en: 'Six factors that decide success', fr: 'Six facteurs qui décident de la réussite' },
  factorsLead: {
    en: 'In order of importance, not in order of equipment. A hormone cannot rescue a cutting taken from old, dry or diseased wood.',
    fr: 'Par ordre d’importance, pas par ordre de matériel. Une hormone ne sauve pas une bouture prélevée sur du bois vieux, sec ou malade.',
  },
  layerSection: { en: 'Layering, method by method', fr: 'Le marcottage, méthode par méthode' },
  layerLead: {
    en: 'A layer stays attached, so it never lacks water. That is its advantage and its slowness: roots take months, not weeks.',
    fr: 'Une marcotte reste attachée et ne manque donc jamais d’eau. C’est son avantage et sa lenteur : les racines prennent des mois, pas des semaines.',
  },
  species: { en: 'Fourteen species, one protocol each', fr: 'Quatorze espèces, un protocole chacune' },
  speciesLead: {
    en: 'Search by scientific or common name, or filter by difficulty. Each entry gives the cutting, the layering method (or why there is none), the grafting alternative where it matters, and the sources. A link per species: #bouturage/<species>.',
    fr: 'Cherchez par nom scientifique ou commun, ou filtrez par difficulté. Chaque fiche donne la bouture, la méthode de marcottage (ou pourquoi il n’y en a pas), l’alternative de greffe quand elle compte, et les sources. Un lien par espèce : #bouturage/<espèce>.',
  },
  search: { en: 'Search a species', fr: 'Chercher une espèce' },
  searchPh: { en: 'Name, common name, family, method…', fr: 'Nom, nom commun, famille, méthode…' },
  filter: { en: 'Difficulty', fr: 'Difficulté' },
  all: { en: 'All', fr: 'Toutes' },
  family: { en: 'Family', fr: 'Famille' },
  names: { en: 'Names', fr: 'Noms' },
  cutting: { en: 'Cutting', fr: 'Bouturage' },
  layering: { en: 'Layering', fr: 'Marcottage' },
  type: { en: 'Type', fr: 'Type' },
  hormone: { en: 'Auxin', fr: 'Auxine' },
  rooting: { en: 'Rooting time', fr: 'Délai d’enracinement' },
  protocol: { en: 'Protocol', fr: 'Protocole' },
  graft: { en: 'Grafting alternative', fr: 'Alternative : la greffe' },
  watch: { en: 'Watch out', fr: 'Attention' },
  dioecious: { en: 'dioecious: keep the sex', fr: 'dioïque : conserver le sexe' },
  noLayer: { en: 'No layering', fr: 'Pas de marcottage' },
  steps: { en: 'In practice, in six steps', fr: 'En pratique, en six étapes' },
  stepsLead: {
    en: 'The order matters. Most failures come from a medium that stayed wet, a cutting taken too late, or roots broken at potting-on.',
    fr: 'L’ordre compte. La plupart des échecs viennent d’un substrat resté détrempé, d’une bouture prélevée trop tard, ou de racines cassées au rempotage.',
  },
  confusions: { en: 'Eight confusions to drop', fr: 'Huit confusions à abandonner' },
  wrong: { en: 'Often said', fr: 'On lit souvent' },
  right: { en: 'What actually happens', fr: 'Ce qui se passe réellement' },
  corrections: { en: 'Corrections to the starting document', fr: 'Corrections du document de départ' },
  correctionsLead: {
    en: 'The PDF this tab started from is unreliable. It cites newspaper articles, blogs and ResearchGate, two of its DOIs do not resolve, and several protocols are single trials presented as rules. Each correction below is sourced; the protocols above follow the sources, not the PDF.',
    fr: 'Le PDF dont part cet onglet n’est pas fiable. Il cite des articles de presse, des blogs et ResearchGate, deux de ses DOI ne se résolvent pas, et plusieurs protocoles sont des essais uniques présentés comme des règles. Chaque correction ci-dessous est sourcée ; les protocoles ci-dessus suivent les sources, pas le PDF.',
  },
  empty: { en: 'No species matches this search.', fr: 'Aucune espèce ne correspond à cette recherche.' },
  count: { en: 'species shown', fr: 'espèces affichées' },
  sources: { en: 'Sources', fr: 'Sources' },
  sourcesNote: {
    en: 'Every protocol is attached to a manual chapter, an extension guide or a peer-reviewed trial. Where the source gives a range, the range is kept; where it gives one trial result, the text says so. The drawings are our own schematics.',
    fr: 'Chaque protocole est rattaché à un chapitre de manuel, un guide de vulgarisation ou un essai à comité de lecture. Quand la source donne une plage, la plage est conservée ; quand elle donne le résultat d’un seul essai, le texte le dit. Les dessins sont nos schémas.',
  },
};

const common = (s) => s.common?.[lang()]?.[0] ?? s.common?.en?.[0] ?? '';

function sci(s, { author = false } = {}) {
  const [genus, ...rest] = s.name.split(' ');
  const span = h('span', { class: 'bt-sci' }, h('i', { text: genus }), rest.length ? ' ' : null, h('i', { text: rest.join(' ') }));
  if (author && s.author) span.append(' ', h('span', { class: 'bt-author', text: s.author }));
  return span;
}

const srcRefs = (ids) => (ids?.length ? cite(...ids) : []);
const norm = (v) => String(v).normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();

const HAY = new Map(SPECIES.map((s) => {
  const words = [
    s.name, s.author, s.family, ...Object.values(s.common).flat(),
    ...s.cut.types.map((id) => `${L(CUT.get(id).name)} ${L(CUT.get(id).short)}`),
    L(LAY.get(s.layer.type)?.name ?? DIFF[s.difficulty]),
    L(DIFF[s.difficulty]), s.cut.protocol, s.cut.hormone,
  ];
  return [s.id, norm(words.join(' '))];
}));

// ---------------------------------------------------------------- page parts
function stats() {
  const item = (n, label) => h('li', {}, h('strong', { text: String(n) }), h('span', { text: L(label) }));
  return h('ul', { class: 'bt-stats', 'aria-label': T('Key figures', 'Repères') },
    item(CUT_TYPES.length, STR.stats.cut),
    item(LAYERS.length, STR.stats.layers),
    item(SPECIES.length, STR.stats.species),
    item(SOURCES.length, STR.stats.sources));
}

const crossLinks = () => h('p', { class: 'bt-cross' },
  h('span', { class: 'bt-cross-label', text: L(STR.see) }), ' ',
  h('a', { class: 'bt-chip', href: routeHref('anatomy', 'node') }, L(STR.seeAnatomy)), ' ',
  h('a', { class: 'bt-chip', href: routeHref('germination') }, L(STR.seeGerm)), ' ',
  h('a', { class: 'bt-chip', href: routeHref('fruits') }, L(STR.seeFruits)), ' ',
  h('a', { class: 'bt-chip', href: routeHref('taxonomy') }, L(STR.seeTaxo)));

function figure(id, title, caption, svg, srcIds) {
  return h('figure', { class: 'card bt-fig', id },
    svg,
    h('figcaption', {},
      h('strong', { text: L(title) }), ' ', L(caption), ' ', ...srcRefs(srcIds)));
}

function figures() {
  return h('section', { class: 'bt-section', 'aria-labelledby': 'bt-fig-h' },
    h('h2', { id: 'bt-fig-h', text: L(STR.figures) }),
    h('div', { class: 'bt-fig-grid' },
      figure('bt-fig-cut', STR.figCut, STR.figCutCap, cuttingAnatomy(), ['hartmann2011', 'ncsu-cuttings']),
      figure('bt-fig-types', STR.figTypes, STR.figTypesCap, cutTypes(), ['hartmann2011', 'rhs-semi']),
      figure('bt-fig-lay', STR.figLay, STR.figLayCap, layeringMethods(), ['rhs-layering', 'rhs-airlayer'])));
}

function typesSection() {
  return h('section', { class: 'bt-section', 'aria-labelledby': 'bt-type-h' },
    h('h2', { id: 'bt-type-h', text: L(STR.types) }),
    h('p', { class: 'lead bt-lead' }, L(STR.typesLead)),
    h('div', { class: 'bt-grid bt-type-grid' }, ...CUT_TYPES.map((t) =>
      h('details', { class: 'card bt-type', id: `t-${t.id}` },
        h('summary', {},
          h('span', { class: 'bt-type-name', text: L(t.name) }),
          h('span', { class: 'bt-type-short', text: L(t.short) })),
        h('p', { class: 'bt-type-when' }, h('strong', { text: L(STR.when) }), ' ', L(t.when)),
        h('p', { class: 'bt-type-body', text: L(t.detail) }),
        h('p', { class: 'bt-src' }, ...srcRefs(t.src))))));
}

function factorsSection() {
  return h('section', { class: 'bt-section', 'aria-labelledby': 'bt-fact-h' },
    h('h2', { id: 'bt-fact-h', text: L(STR.factors) }),
    h('p', { class: 'lead bt-lead' }, L(STR.factorsLead)),
    h('div', { class: 'bt-grid' }, ...FACTORS.map((f) =>
      h('article', { class: 'card bt-factor' },
        h('h3', { text: L(f.title) }),
        h('p', { text: L(f.body) }),
        h('p', { class: 'bt-src' }, ...srcRefs(f.src))))));
}

function layeringSection() {
  return h('section', { class: 'bt-section', 'aria-labelledby': 'bt-lay-h' },
    h('h2', { id: 'bt-lay-h', text: L(STR.layerSection) }),
    h('p', { class: 'lead bt-lead' }, L(STR.layerLead)),
    h('div', { class: 'bt-grid' }, ...LAYERS.map((m) =>
      h('article', { class: 'card bt-layer', id: `l-${m.id}` },
        h('h3', { text: L(m.name) }),
        h('p', { text: L(m.body) }),
        h('p', { class: 'bt-src' }, ...srcRefs(m.src))))));
}

function namesLine(s) {
  const group = (code, label, arr) => h('span', { lang: code, class: 'bt-name-lang' },
    h('span', { class: 'bt-lang-code', text: label }), ' ', arr.join(', '));
  return h('p', { class: 'bt-names' },
    h('strong', { text: L(STR.names) }), ' ',
    group('fr', 'FR', s.common.fr), ' · ',
    group('en', 'EN', s.common.en), ' · ',
    group('de', 'DE', s.common.de));
}

const diffBadge = (id) => h('span', { class: `bt-badge bt-d-${id}`, text: L(DIFF[id]) });

function cutBlock(s) {
  const types = s.cut.types.map((id) => L(CUT.get(id).name)).join(', ');
  return h('div', { class: 'bt-cut-block' },
    h('h3', { text: L(STR.cutting) }),
    h('div', { class: 'bt-table-wrap' },
      h('table', { class: 'kv bt-kv' }, h('tbody', {},
        h('tr', {}, h('th', { scope: 'row', text: L(STR.type) }), h('td', { text: types })),
        h('tr', {}, h('th', { scope: 'row', text: L(STR.when) }), h('td', { text: L(s.cut.when) })),
        h('tr', {}, h('th', { scope: 'row', text: L(STR.hormone) }), h('td', { text: L(s.cut.hormone) })),
        h('tr', {}, h('th', { scope: 'row', text: L(STR.rooting) }), h('td', { text: L(s.cut.rooting) }))))),
    h('p', {}, h('strong', { text: L(STR.protocol) }), ' ', L(s.cut.protocol)));
}

function layerBlock(s) {
  const l = s.layer;
  if (!l || l.type === 'none') {
    return h('div', { class: 'bt-layer-block' },
      h('h3', { text: L(STR.layering) }),
      h('p', { class: 'bt-no-layer' }, h('strong', { text: L(STR.noLayer) }), ' ', L(l?.why)));
  }
  const m = LAY.get(l.type);
  return h('div', { class: 'bt-layer-block' },
    h('h3', { text: L(STR.layering) }),
    h('p', { class: 'bt-layer-meta' },
      h('strong', { text: L(STR.type) }), ' ', L(m.name), ' · ',
      h('strong', { text: L(STR.when) }), ' ', L(l.when)),
    h('p', {}, h('strong', { text: L(STR.protocol) }), ' ', L(l.protocol)));
}

function speciesCard(s) {
  const taxId = taxonomyId('bouturage', s.id);
  return h('details', { class: 'card bt-sp', id: `sp-${s.id}`, 'data-diff': s.difficulty },
    h('summary', { class: 'bt-sp-sum' },
      h('span', { class: 'bt-sp-title' }, sci(s, { author: true }),
        h('span', { class: 'bt-sp-common', text: common(s) })),
      h('span', { class: 'bt-sp-badges' }, diffBadge(s.difficulty),
        s.sex ? h('span', { class: 'bt-badge bt-sex', text: T('dioecious', 'dioïque') }) : null)),
    h('div', { class: 'bt-sp-body' },
      namesLine(s),
      h('p', { class: 'bt-sp-meta' },
        h('strong', { text: L(STR.family) }), ' ', s.family, ' · ',
        h('strong', { text: L(STR.filter) }), ' ', L(DIFF[s.difficulty]),
        taxId ? [' · ', h('a', { class: 'bt-chip bt-sp-tax', href: routeHref('taxonomy', taxId) }, L(STR.inTaxo))] : null),
      cutBlock(s),
      layerBlock(s),
      s.graft ? h('div', { class: 'bt-graft' },
        h('h3', { text: L(STR.graft) }),
        h('p', { text: L(s.graft) })) : null,
      h('p', { class: 'bt-note' }, h('strong', { text: L(STR.watch) }), ' ', L(s.note)),
      h('p', { class: 'bt-src' }, ...srcRefs(s.sources))));
}

function speciesSection() {
  const state = { q: '', diff: 'all' };
  const box = h('div', { class: 'bt-sp-list' });
  const count = h('p', { class: 'hint bt-count', 'aria-live': 'polite' });

  const input = h('input', {
    type: 'search', id: 'bt-search', class: 'bt-search-in', autocomplete: 'off', spellcheck: 'false',
    placeholder: L(STR.searchPh), 'aria-label': L(STR.search),
  });
  const select = h('select', { id: 'bt-filter', class: 'bt-select', 'aria-label': L(STR.filter) });
  select.append(h('option', { value: 'all', text: L(STR.all) }));
  for (const id of Object.keys(DIFF)) select.append(h('option', { value: id, text: L(DIFF[id]) }));

  function paint() {
    const q = norm(state.q.trim());
    const items = SPECIES.filter((s) => (state.diff === 'all' || s.difficulty === state.diff)
      && (!q || HAY.get(s.id).includes(q)));
    box.replaceChildren(...(items.length ? items.map(speciesCard) : [h('p', { class: 'card bt-empty', text: L(STR.empty) })]));
    count.textContent = `${items.length} / ${SPECIES.length} ${L(STR.count)}`;
  }
  input.addEventListener('input', () => { state.q = input.value; paint(); });
  select.addEventListener('change', () => { state.diff = select.value; paint(); });

  paint();
  return {
    section: h('section', { class: 'bt-section', 'aria-labelledby': 'bt-sp-h' },
      h('h2', { id: 'bt-sp-h', text: L(STR.species) }),
      h('p', { class: 'lead bt-lead' }, L(STR.speciesLead)),
      h('div', { class: 'card bt-controls' },
        h('div', { class: 'bt-field' }, h('label', { for: 'bt-search', text: L(STR.search) }), input),
        h('div', { class: 'bt-field bt-field-select' }, h('label', { for: 'bt-filter', text: L(STR.filter) }), select),
        count),
      box),
    focus(id) {
      const s = SP.get(id);
      if (!s) return;
      if (state.q || state.diff !== 'all') {
        state.q = ''; state.diff = 'all'; input.value = ''; select.value = 'all'; paint();
      }
      const el = document.getElementById(`sp-${s.id}`);
      if (!el) return;
      el.open = true;
      el.scrollIntoView({ block: 'start' });
    },
  };
}

function stepsSection() {
  return h('section', { class: 'bt-section', 'aria-labelledby': 'bt-steps-h' },
    h('h2', { id: 'bt-steps-h', text: L(STR.steps) }),
    h('p', { class: 'lead bt-lead' }, L(STR.stepsLead)),
    h('ol', { class: 'bt-steps' }, ...STEPS.map((st, i) =>
      h('li', { class: 'card bt-step' },
        h('h3', {}, h('span', { class: 'bt-step-n', text: String(i + 1) }), L(st.title)),
        h('p', { text: L(st.body) })))));
}

function confusionsSection() {
  return h('section', { class: 'bt-section', 'aria-labelledby': 'bt-conf-h' },
    h('h2', { id: 'bt-conf-h', text: L(STR.confusions) }),
    h('div', { class: 'bt-grid' }, ...CONFUSIONS.map((c) =>
      h('article', { class: 'card bt-conf' },
        h('p', { class: 'bt-wrong' }, h('span', { class: 'bt-tag bt-tag-wrong', text: L(STR.wrong) }), ' ', L(c.wrong)),
        h('p', { class: 'bt-right' }, h('span', { class: 'bt-tag bt-tag-right', text: L(STR.right) }), ' ', L(c.right)),
        h('p', { class: 'bt-src' }, ...srcRefs(c.src))))));
}

function correctionsSection() {
  return h('section', { class: 'bt-section', 'aria-labelledby': 'bt-corr-h' },
    h('h2', { id: 'bt-corr-h', text: L(STR.corrections) }),
    h('p', { class: 'lead bt-lead' }, L(STR.correctionsLead)),
    h('div', { class: 'bt-corr' }, ...CORRECTIONS.map((c, i) =>
      h('article', { class: 'card bt-corr-item' },
        h('h3', {}, h('span', { class: 'bt-corr-n', text: String(i + 1) }), L(c.title)),
        h('p', { text: L(c.body) }),
        c.src ? h('p', { class: 'bt-src' }, ...srcRefs(c.src)) : null))));
}

function sourcesSection() {
  return h('footer', { class: 'bt-section bt-sources sources' },
    h('h2', { text: L(STR.sources) }),
    list(),
    h('p', { class: 'small muted', text: L(STR.sourcesNote) }));
}

// ---------------------------------------------------------------- mount
let speciesPart = null;

export function mount(panel, sub) {
  speciesPart = speciesSection();
  panel.replaceChildren(
    h('header', { class: 'bt-head' },
      h('h1', { text: L(STR.title) }),
      h('p', { class: 'lead', text: L(STR.lead) }),
      stats(),
      crossLinks()),
    figures(),
    typesSection(),
    factorsSection(),
    layeringSection(),
    speciesPart.section,
    stepsSection(),
    confusionsSection(),
    correctionsSection(),
    sourcesSection());
  if (sub) speciesPart.focus(sub);
}

export function show(sub) {
  if (sub && speciesPart) speciesPart.focus(sub);
}
