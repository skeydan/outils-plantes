// Germination: seed dormancy, the treatments that break it, and the protocol
// for each species. The starting PDF was treated as untrusted data: every
// protocol below is rebuilt from the cited manuals and papers, and the
// corrections section lists what the PDF got wrong. Route: #germination[/<species>].
import { lang } from '../../assets/site.js';
import { routeHref } from '../../assets/route.js';
import { h, citer } from '../../assets/ui.js';
import { DORMANCY, TREATMENTS, SPECIES, STEPS, CONFUSIONS, CORRECTIONS } from './data.js';
import { SOURCES } from './sources.js';
import { seedAnatomy, epiHypo, timeline } from './draw.js';

const T = (en, fr) => (lang() === 'fr' ? fr : en);
const L = (o) => (o ? o[lang()] ?? o.en : '');
const { cite, list } = citer(SOURCES);

const DORM = new Map(DORMANCY.map((d) => [d.id, d]));
const TREAT = new Map(TREATMENTS.map((t) => [t.id, t]));
const SP = new Map(SPECIES.map((s) => [s.id, s]));

const STR = {
  title: { en: 'Germination: dormancy, treatments and protocols', fr: 'Germination : dormance, traitements et protocoles' },
  lead: {
    en: 'A seed is not a machine that starts when watered. Many are dormant, and the block can sit in the seed coat, in the embryo, or in the fruit wall around it. This tab names the five kinds of dormancy, the treatments that answer them, and what actually works for 17 species — with the corrections to the course notes it started from.',
    fr: 'Une graine n’est pas une machine qui démarre quand on l’arrose. Beaucoup sont dormantes, et le blocage peut se trouver dans le tégument, dans l’embryon, ou dans la paroi du fruit qui l’entoure. Cet onglet nomme les cinq types de dormance, les traitements qui y répondent, et ce qui marche réellement pour 17 espèces — avec les corrections des notes de cours dont il part.',
  },
  stats: {
    dormancy: { en: 'kinds of dormancy', fr: 'types de dormance' },
    treatments: { en: 'treatments', fr: 'traitements' },
    species: { en: 'species', fr: 'espèces' },
    sources: { en: 'sources', fr: 'sources' },
  },
  see: { en: 'See also', fr: 'Voir aussi' },
  seeSeed: { en: 'the seed in anatomy', fr: 'la graine en anatomie' },
  seeFruit: { en: 'fruit types', fr: 'les types de fruits' },
  seeTaxo: { en: 'the species in taxonomy', fr: 'les espèces en taxonomie' },
  figures: { en: 'Three drawings to start with', fr: 'Trois dessins pour commencer' },
  figSeed: { en: 'A seed cut open', fr: 'Une graine ouverte' },
  figSeedCap: {
    en: 'An albuminous dicot seed, the kind Ribes has: the endosperm is the food store, the embryo is already formed, and the radicle is the first thing to emerge. Not every seed has endosperm at maturity — the almond has almost none, the store is in its cotyledons.',
    fr: 'Une graine dicotylédone albuminée, comme celle des Ribes : l’endosperme est la réserve, l’embryon est déjà formé, et la radicule est la première chose à sortir. Toutes les graines n’ont pas d’endosperme à maturité — l’amande n’en a presque pas, la réserve est dans ses cotylédons.',
  },
  figEpi: { en: 'Two ways of germinating', fr: 'Deux façons de germer' },
  figEpiCap: {
    en: 'Epigeal: the hypocotyl lengthens and lifts the cotyledons out of the soil; they turn green and then fall. Hypogeal: the cotyledons stay in the soil and the epicotyl grows. The same seed can therefore look very different two weeks after sowing.',
    fr: 'Épigée : l’hypocotyle s’allonge et soulève les cotylédons hors du sol ; ils verdissent puis tombent. Hypogée : les cotylédons restent dans le sol et l’épicotyle pousse. Une même graine peut donc avoir très mauvaise mine deux semaines après le semis.',
  },
  figTime: { en: 'Three dormancy types', fr: 'Trois types de dormance' },
  figTimeCap: {
    en: 'Schematic, not to scale: physiological dormancy is answered by moist cold; morphophysiological dormancy needs a warm phase for the embryo first; combinational dormancy needs the cover opened before the cold can act.',
    fr: 'Schématique, pas à l’échelle : la dormance physiologique se lève par le froid humide ; la morphophysiologique a d’abord besoin d’une phase chaude pour l’embryon ; la combinée exige d’ouvrir l’enveloppe avant que le froid puisse agir.',
  },
  dormancy: { en: 'The five kinds of dormancy', fr: 'Les cinq types de dormance' },
  dormancyLead: {
    en: 'The classification is Baskin and Baskin’s: non-dormant (ND), physiological (PD), morphophysiological (MPD), physical (PY) and combinational (PY+PD). It describes what blocks germination, not how hard the seed looks.',
    fr: 'La classification est celle de Baskin et Baskin : non dormante (ND), physiologique (PD), morphophysiologique (MPD), physique (PY) et combinée (PY+PD). Elle décrit ce qui bloque la germination, pas la dureté apparente de la graine.',
  },
  speciesOf: { en: 'Species here', fr: 'Espèces concernées' },
  treatments: { en: 'The treatments, and what they do', fr: 'Les traitements, et ce qu’ils font' },
  treatmentsLead: {
    en: 'Open a treatment for the detail. None of them is universal: the same acid that opens an Acacia seed kills a citrus seed, and cold that releases an olive embryo does nothing for a fresh pine.',
    fr: 'Ouvrez un traitement pour le détail. Aucun n’est universel : le même acide qui ouvre une graine d’Acacia tue une graine d’agrume, et le froid qui libère l’embryon de l’olive ne fait rien à un pin frais.',
  },
  species: { en: 'The species, one protocol each', fr: 'Les espèces, un protocole chacune' },
  speciesLead: {
    en: 'Search by scientific or common name, or filter by dormancy. Each entry gives the seed, the protocol, sowing depth and temperature, and the sources. A link per species: #germination/<species>.',
    fr: 'Cherchez par nom scientifique ou commun, ou filtrez par dormance. Chaque fiche donne la graine, le protocole, la profondeur et la température de semis, et les sources. Un lien par espèce : #germination/<espèce>.',
  },
  search: { en: 'Search a species', fr: 'Chercher une espèce' },
  searchPh: { en: 'Name, common name, family, treatment…', fr: 'Nom, nom commun, famille, traitement…' },
  filter: { en: 'Dormancy', fr: 'Dormance' },
  all: { en: 'All', fr: 'Toutes' },
  family: { en: 'Family', fr: 'Famille' },
  dormancyLabel: { en: 'Dormancy', fr: 'Dormance' },
  names: { en: 'Names', fr: 'Noms' },
  seed: { en: 'The seed', fr: 'La graine' },
  protocol: { en: 'Protocol', fr: 'Protocole' },
  sowing: { en: 'Sowing', fr: 'Semis' },
  temp: { en: 'Temperature', fr: 'Température' },
  depth: { en: 'Depth', fr: 'Profondeur' },
  light: { en: 'Light', fr: 'Lumière' },
  time: { en: 'Time to germinate', fr: 'Délai de germination' },
  watch: { en: 'Watch out', fr: 'Attention' },
  steps: { en: 'In practice, in eight steps', fr: 'En pratique, en huit étapes' },
  stepsLead: {
    en: 'The order matters. Most failures come from a treatment that was too strong, or from a “stratification” that was dry cold in a drawer.',
    fr: 'L’ordre compte. La plupart des échecs viennent d’un traitement trop fort, ou d’une « stratification » qui n’était qu’un froid sec dans un tiroir.',
  },
  confusions: { en: 'Seven confusions to drop', fr: 'Sept confusions à abandonner' },
  wrong: { en: 'Often said', fr: 'On lit souvent' },
  right: { en: 'What actually happens', fr: 'Ce qui se passe réellement' },
  corrections: { en: 'Corrections to the starting document', fr: 'Corrections du document de départ' },
  correctionsLead: {
    en: 'The PDF this tab started from is not a reliable source. Its per-species DOIs were checked on Crossref: most are invented or point to unrelated papers. Its tables also contradict each other. Each correction below is sourced; the protocols above follow the sources, not the PDF.',
    fr: 'Le PDF dont part cet onglet n’est pas une source fiable. Ses DOI par espèce ont été vérifiés sur Crossref : la plupart sont inventés ou renvoient à des articles sans rapport. Ses tableaux se contredisent aussi. Chaque correction ci-dessous est sourcée ; les protocoles ci-dessus suivent les sources, pas le PDF.',
  },
  empty: { en: 'No species matches this search.', fr: 'Aucune espèce ne correspond à cette recherche.' },
  count: { en: 'species shown', fr: 'espèces affichées' },
  sources: { en: 'Sources', fr: 'Sources' },
  sourcesNote: {
    en: 'Every protocol is built from the cited manual chapter or paper. Where the source gives a range, the range is kept; where it gives a single figure for one lot, the protocol says so. The drawings are our own schematics.',
    fr: 'Chaque protocole est construit à partir du chapitre de manuel ou de l’article cité. Quand la source donne une plage, la plage est conservée ; quand elle donne une valeur unique pour un lot, le protocole le dit. Les dessins sont nos schémas.',
  },
};

const common = (s) => s.common?.[lang()]?.[0] ?? s.common?.en?.[0] ?? '';
const badge = (id) => h('span', { class: `gm-badge gm-b-${id}`, text: DORM.get(id)?.abbr ?? '?' });

/** A scientific name in italics, with the author when asked. */
function sci(s, { author = false } = {}) {
  const [genus, ...rest] = s.name.split(' ');
  const span = h('span', { class: 'gm-sci' }, h('i', { text: genus }), rest.length ? ' ' : null, h('i', { text: rest.join(' ') }));
  if (author && s.author) span.append(' ', h('span', { class: 'gm-author', text: s.author }));
  return span;
}

const srcRefs = (ids) => (ids?.length ? cite(...ids) : []);
const norm = (v) => String(v).normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();

// Precomputed search text: names, family, dormancy and treatment words in both
// languages, so that “stratification” or “scarification” finds the species
// concerned without searching the whole prose.
const HAY = new Map(SPECIES.map((s) => {
  const d = DORM.get(s.dormancy);
  const words = [
    s.name, s.author, s.family,
    ...Object.values(s.common).flat(),
    L(d.name), L(d.short),
    ...s.treatments.map((id) => `${L(TREAT.get(id).name)} ${L(TREAT.get(id).short)}`),
  ];
  return [s.id, norm(words.join(' '))];
}));

// ---------------------------------------------------------------- page parts
function stats() {
  const item = (n, label) => h('li', {}, h('strong', { text: String(n) }), h('span', { text: L(label) }));
  return h('ul', { class: 'gm-stats', 'aria-label': T('Key figures', 'Repères') },
    item(DORMANCY.length, STR.stats.dormancy),
    item(TREATMENTS.length, STR.stats.treatments),
    item(SPECIES.length, STR.stats.species),
    item(SOURCES.length, STR.stats.sources));
}

const crossLinks = () => h('p', { class: 'gm-cross' },
  h('span', { class: 'gm-cross-label', text: L(STR.see) }), ' ',
  h('a', { class: 'gm-chip', href: routeHref('anatomy', 'seed') }, L(STR.seeSeed)), ' ',
  h('a', { class: 'gm-chip', href: routeHref('fruits', 'drupe') }, L(STR.seeFruit)), ' ',
  h('a', { class: 'gm-chip', href: routeHref('taxonomy') }, L(STR.seeTaxo)));

function figure(id, title, caption, svg, srcIds) {
  return h('figure', { class: 'card gm-fig', id },
    svg,
    h('figcaption', {},
      h('strong', { text: L(title) }), ' ', L(caption), ' ', ...srcRefs(srcIds)));
}

function figures() {
  return h('section', { class: 'gm-section', 'aria-labelledby': 'gm-fig-h' },
    h('h2', { id: 'gm-fig-h', text: L(STR.figures) }),
    h('div', { class: 'gm-fig-grid' },
      figure('gm-fig-seed', STR.figSeed, STR.figSeedCap, seedAnatomy(), ['bask2014', 'wpsm']),
      figure('gm-fig-epi', STR.figEpi, STR.figEpiCap, epiHypo(), ['bask2014']),
      figure('gm-fig-time', STR.figTime, STR.figTimeCap, timeline(), ['bask2004'])));
}

function dormancySection() {
  return h('section', { class: 'gm-section', 'aria-labelledby': 'gm-dorm-h' },
    h('h2', { id: 'gm-dorm-h', text: L(STR.dormancy) }),
    h('p', { class: 'lead gm-lead' }, L(STR.dormancyLead)),
    h('div', { class: 'gm-grid' }, ...DORMANCY.map((d) => {
      const spp = SPECIES.filter((s) => s.dormancy === d.id);
      return h('article', { class: 'card gm-dorm', id: `d-${d.id}` },
        h('div', { class: 'gm-dorm-head' }, badge(d.id), h('h3', { text: L(d.name) })),
        h('p', { class: 'gm-dorm-short', text: L(d.short) }),
        h('p', { text: L(d.detail) }),
        h('p', { class: 'gm-src' }, ...srcRefs(d.src)),
        spp.length ? h('div', { class: 'gm-dorm-spp' },
          h('h4', { text: L(STR.speciesOf) }),
          h('ul', {}, ...spp.map((s) => h('li', {},
            h('a', { class: 'gm-chip', href: routeHref('germination', s.id) }, sci(s), ` ${common(s)}`))))) : null);
    })));
}

function treatmentsSection() {
  return h('section', { class: 'gm-section', 'aria-labelledby': 'gm-treat-h' },
    h('h2', { id: 'gm-treat-h', text: L(STR.treatments) }),
    h('p', { class: 'lead gm-lead' }, L(STR.treatmentsLead)),
    h('div', { class: 'gm-grid gm-treat-grid' }, ...TREATMENTS.map((t) =>
      h('details', { class: 'card gm-treat', id: `t-${t.id}` },
        h('summary', {},
          h('span', { class: 'gm-treat-name', text: L(t.name) }),
          h('span', { class: 'gm-treat-short', text: L(t.short) })),
        h('p', { class: 'gm-treat-body', text: L(t.detail) }),
        h('p', { class: 'gm-src' }, ...srcRefs(t.src))))));
}

function sowingTable(s) {
  const rows = [
    [L(STR.temp), s.sowing.temp],
    [L(STR.depth), L(s.sowing.depth)],
    [L(STR.light), L(s.sowing.light)],
    [L(STR.time), L(s.sowing.time)],
  ];
  return h('div', { class: 'gm-table-wrap' },
    h('table', { class: 'kv gm-kv' },
      h('tbody', {}, ...rows.map(([k, v]) => h('tr', {}, h('th', { scope: 'row', text: k }), h('td', { text: v }))))));
}

function namesLine(s) {
  const group = (code, label, arr) => h('span', { lang: code, class: 'gm-name-lang' },
    h('span', { class: 'gm-lang-code', text: label }), ' ', arr.join(', '));
  return h('p', { class: 'gm-names' },
    h('strong', { text: L(STR.names) }), ' ',
    group('fr', 'FR', s.common.fr), ' · ',
    group('en', 'EN', s.common.en), ' · ',
    group('de', 'DE', s.common.de));
}

function speciesCard(s) {
  const d = DORM.get(s.dormancy);
  return h('details', { class: 'card gm-sp', id: `sp-${s.id}`, 'data-dorm': s.dormancy },
    h('summary', { class: 'gm-sp-sum' },
      h('span', { class: 'gm-sp-title' }, sci(s, { author: true }),
        h('span', { class: 'gm-sp-common', text: common(s) })),
      h('span', { class: 'gm-sp-badge' }, badge(s.dormancy), h('span', { class: 'gm-sp-badge-name', text: L(d.name) }))),
    h('div', { class: 'gm-sp-body' },
      namesLine(s),
      h('p', { class: 'gm-sp-meta' },
        h('strong', { text: L(STR.family) }), ' ', s.family, ' · ',
        h('strong', { text: L(STR.dormancyLabel) }), ' ', L(d.name), ' ', ...srcRefs(['bask2004'])),
      h('p', {}, h('strong', { text: L(STR.seed) }), ' ', L(s.seed)),
      h('h3', { text: L(STR.protocol) }),
      h('p', { text: L(s.protocol) }),
      h('h3', { text: L(STR.sowing) }),
      sowingTable(s),
      h('p', { class: 'gm-note' }, h('strong', { text: L(STR.watch) }), ' ', L(s.note)),
      h('p', { class: 'gm-src' }, ...srcRefs(s.sources))));
}

function speciesSection() {
  const state = { q: '', dorm: 'all' };
  const box = h('div', { class: 'gm-sp-list' });
  const count = h('p', { class: 'hint gm-count', 'aria-live': 'polite' });

  const input = h('input', {
    type: 'search', id: 'gm-search', class: 'gm-search-in', autocomplete: 'off', spellcheck: 'false',
    placeholder: L(STR.searchPh), 'aria-label': L(STR.search),
  });
  const select = h('select', { id: 'gm-filter', class: 'gm-select', 'aria-label': L(STR.filter) });
  select.append(h('option', { value: 'all', text: L(STR.all) }));
  for (const d of DORMANCY) select.append(h('option', { value: d.id, text: `${d.abbr} — ${L(d.name)}` }));

  function paint() {
    const q = norm(state.q.trim());
    const items = SPECIES.filter((s) => (state.dorm === 'all' || s.dormancy === state.dorm)
      && (!q || HAY.get(s.id).includes(q)));
    box.replaceChildren(...(items.length ? items.map(speciesCard) : [h('p', { class: 'card gm-empty', text: L(STR.empty) })]));
    count.textContent = `${items.length} / ${SPECIES.length} ${L(STR.count)}`;
  }
  input.addEventListener('input', () => { state.q = input.value; paint(); });
  select.addEventListener('change', () => { state.dorm = select.value; paint(); });

  paint();
  return {
    section: h('section', { class: 'gm-section', 'aria-labelledby': 'gm-sp-h' },
      h('h2', { id: 'gm-sp-h', text: L(STR.species) }),
      h('p', { class: 'lead gm-lead' }, L(STR.speciesLead)),
      h('div', { class: 'card gm-controls' },
        h('div', { class: 'gm-field' }, h('label', { for: 'gm-search', text: L(STR.search) }), input),
        h('div', { class: 'gm-field gm-field-select' }, h('label', { for: 'gm-filter', text: L(STR.filter) }), select),
        count),
      box),
    focus(id) {
      const s = SP.get(id);
      if (!s) return;
      if (state.q || state.dorm !== 'all') {
        state.q = ''; state.dorm = 'all'; input.value = ''; select.value = 'all'; paint();
      }
      const el = document.getElementById(`sp-${s.id}`);
      if (!el) return;
      el.open = true;
      el.scrollIntoView({ block: 'start' });
    },
  };
}

function stepsSection() {
  return h('section', { class: 'gm-section', 'aria-labelledby': 'gm-steps-h' },
    h('h2', { id: 'gm-steps-h', text: L(STR.steps) }),
    h('p', { class: 'lead gm-lead' }, L(STR.stepsLead)),
    h('ol', { class: 'gm-steps' }, ...STEPS.map((st, i) =>
      h('li', { class: 'card gm-step' },
        h('h3', {}, h('span', { class: 'gm-step-n', text: String(i + 1) }), L(st.title)),
        h('p', { text: L(st.body) })))));
}

function confusionsSection() {
  return h('section', { class: 'gm-section', 'aria-labelledby': 'gm-conf-h' },
    h('h2', { id: 'gm-conf-h', text: L(STR.confusions) }),
    h('div', { class: 'gm-grid' }, ...CONFUSIONS.map((c) =>
      h('article', { class: 'card gm-conf' },
        h('p', { class: 'gm-wrong' }, h('span', { class: 'gm-tag gm-tag-wrong', text: L(STR.wrong) }), ' ', L(c.wrong)),
        h('p', { class: 'gm-right' }, h('span', { class: 'gm-tag gm-tag-right', text: L(STR.right) }), ' ', L(c.right)),
        h('p', { class: 'gm-src' }, ...srcRefs(c.src))))));
}

function correctionsSection() {
  return h('section', { class: 'gm-section', 'aria-labelledby': 'gm-corr-h' },
    h('h2', { id: 'gm-corr-h', text: L(STR.corrections) }),
    h('p', { class: 'lead gm-lead' }, L(STR.correctionsLead)),
    h('div', { class: 'gm-corr' }, ...CORRECTIONS.map((c, i) =>
      h('article', { class: 'card gm-corr-item' },
        h('h3', {}, h('span', { class: 'gm-corr-n', text: String(i + 1) }), L(c.title)),
        h('p', { text: L(c.body) }),
        c.src ? h('p', { class: 'gm-src' }, ...srcRefs(c.src)) : null))));
}

function sourcesSection() {
  return h('footer', { class: 'gm-section gm-sources sources' },
    h('h2', { text: L(STR.sources) }),
    list(),
    h('p', { class: 'small muted', text: L(STR.sourcesNote) }));
}

// ---------------------------------------------------------------- mount
let speciesPart = null;

export function mount(panel, sub) {
  speciesPart = speciesSection();
  panel.replaceChildren(
    h('header', { class: 'gm-head' },
      h('h1', { text: L(STR.title) }),
      h('p', { class: 'lead', text: L(STR.lead) }),
      stats(),
      crossLinks()),
    figures(),
    dormancySection(),
    treatmentsSection(),
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
