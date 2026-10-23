// How water climbs in plants: water potential and its parts, the path from
// soil to air, adhesion, cohesion and capillarity, the cohesion–tension
// theory. Small calculators run on physics.js; every value shown is cited.
import { lang } from '../../assets/site.js';
import { routeHref, revealAnchor } from '../../assets/route.js';
import { h, num, fmtn, citer } from '../../assets/ui.js';
import { SOURCES } from './sources.js';
import {
  compartments, solutePotential, airPotential, surfaceTension, jurinHeight, laplacePressure, cellInBath,
  gravityPotential, toBar, toKPa, toAtm, toWaterColumn, symlog,
} from './physics.js';

const STR = {
  title: { en: 'Water potential: how water moves in plants', fr: 'Le potentiel hydrique : comment l’eau circule dans les plantes' },
  lead: {
    en: 'Water moves from where its potential is high to where it is low: from the soil into the roots, up the wood and out of the leaves into the air. No pump does the work; the dry air pulls, and water holds together. Inside the plant, the same rule decides between the vacuole, the cytoplasm and the cell walls. The numbers, with small calculations to try.',
    fr: 'L’eau va de là où son potentiel est élevé vers là où il est bas : du sol aux racines, dans le bois, puis des feuilles à l’air. Aucune pompe ne fait le travail : l’air sec tire, et l’eau tient ensemble. Dans la plante, la même règle tranche entre la vacuole, le cytoplasme et les parois. Les chiffres, avec de petits calculs à essayer.',
  },
};
const T = (en, fr) => (lang() === 'fr' ? fr : en);
const f = (v, d = 2) => fmtn(v, lang(), d).replace(/^-/, '−');
const mpa = (v, d = 2) => `${f(v, d)} MPa`;
const { cite, list } = citer(SOURCES);
const anat = (id, text) => h('a', { href: routeHref('anatomy', id), text });
const NS = 'http://www.w3.org/2000/svg';
const svg = (name, attrs = {}, parent = null) => {
  const e = document.createElementNS(NS, name);
  for (const [k, v] of Object.entries(attrs)) if (v !== null && v !== undefined) e.setAttribute(k, v);
  if (parent) parent.append(e);
  return e;
};
const sig = (v, n = 3) => (v === 0 || !Number.isFinite(v) ? v : Number(v.toPrecision(n)));

// ---------------------------------------------------------------- state
const S = {
  units: '-1.5',
  cellS: '-0.9', bath: '0.25', bathT: '20',
  preset: 'zhang-dry', soil: '-0.033', leaf: '-1.0', rh: '50', temp: '20', height: '1',
  radius: '10', capT: '20', theta: '0',
  cmp: 'kb', cmpS: '-0.9', cmpP: '0.3', cmpOut: '-0.6', cmpWall: '-0.04',
};
const out = {};

// Published chains of water potential (MPa) along the path, as given by the sources.
const PRESETS = {
  'zhang-dry': {
    label: { en: 'Greenhouse tomato, dry hot air (published)', fr: 'Tomate de serre, air sec et chaud (publié)' },
    nodes: [['soil', -0.26], ['stem', -1.36], ['leaf', -1.47], ['air', -168.3]], src: ['zhang'],
    note: { en: 'Midday values from the figure of the study. With the mean midday humidity and temperature it reports (42.5 %, 38.5 °C), our formula gives about −123 MPa for the air, not −168; the paper does not say which conditions its figure used.', fr: 'Valeurs de midi lues sur la figure de l’étude. Avec l’humidité et la température moyennes de midi qu’elle indique (42,5 %, 38,5 °C), notre formule donne environ −123 MPa pour l’air, pas −168 ; l’article ne précise pas les conditions de sa figure.' },
  },
  'zhang-humid': {
    label: { en: 'Greenhouse tomato, humidified air (published)', fr: 'Tomate de serre, air humidifié (publié)' },
    nodes: [['soil', -0.23], ['stem', -0.92], ['leaf', -1.03], ['air', -82.3]], src: ['zhang'],
    note: { en: 'Same greenhouse after fogging the air: the leaf-to-air drop is halved, and the plants used about 20 % less water over the season.', fr: 'Même serre après brumisation : la chute feuille–air est divisée par deux, et les plantes ont consommé environ 20 % d’eau en moins sur la saison.' },
  },
  tree: {
    label: { en: 'A tree, teaching example', fr: 'Un arbre, exemple de cours' },
    nodes: [['soil', -0.015], ['trunk', -0.7], ['twig', -2.3], ['leaf', -2.5], ['air', -93.5]], src: ['saupe'],
    note: { en: 'Soil at field capacity; air at 50 % relative humidity and 20 °C.', fr: 'Sol à la capacité au champ ; air à 50 % d’humidité relative et 20 °C.' },
  },
  own: { label: { en: 'Your own values', fr: 'Vos propres valeurs' } },
};
const NODE = {
  soil: { en: 'Soil', fr: 'Sol' }, stem: { en: 'Stem', fr: 'Tige' }, trunk: { en: 'Trunk', fr: 'Tronc' },
  twig: { en: 'Twig', fr: 'Rameau' }, leaf: { en: 'Leaf', fr: 'Feuille' }, air: { en: 'Air', fr: 'Air' },
};

// ---------------------------------------------------------------- small helpers
function input(key, { id, label, unit = '', hint = '', onchange }) {
  const el = h('input', { id, type: 'text', inputmode: 'decimal', autocomplete: 'off', value: lang() === 'fr' ? S[key].replace('.', ',') : S[key] });
  el.addEventListener('input', () => { S[key] = el.value; onchange(); });
  return h('div', { class: 'field' }, h('label', { for: id, text: label }),
    h('div', { class: 'field-in' }, el, unit ? h('span', { class: 'unit', text: unit, 'aria-hidden': 'true' }) : null),
    hint ? h('p', { class: 'hint', text: hint }) : null);
}
const read = (key, min = -Infinity, max = Infinity) => {
  const v = num(S[key]);
  const ok = Number.isFinite(v) && v >= min && v <= max;
  return ok ? v : NaN;
};
const mark = (id, bad) => document.getElementById(id)?.setAttribute('aria-invalid', String(bad));
function facts(rows) {
  return h('dl', { class: 'facts' }, ...rows.flatMap(([dt, ...dd]) => [h('dt', {}, dt), h('dd', {}, ...dd)]));
}

// ---------------------------------------------------------------- page
function build(main) {
  document.title = `${STR.title[lang()]} · outils-plantes`;

  // 1. Water potential
  out.units = h('p', { class: 'pw-units', id: 'pw-units-out', 'aria-live': 'polite' });
  const potential = h('section', { class: 'card wide', id: 'potential' },
    h('h2', {}, h('span', { class: 'step', text: '1' }), T('Water potential: where water wants to go', 'Le potentiel hydrique : où l’eau veut aller')),
    h('p', {}, T('Water potential, Ψ (psi), is the free energy of water per unit of volume, compared with pure free water at the same temperature, at atmospheric pressure and at a reference height. Pure water is 0 by convention, so the water of soils and plants is almost always below 0. An energy per volume has the unit of a pressure: the megapascal, MPa.', 'Le potentiel hydrique, Ψ (psi), est l’énergie libre de l’eau par unité de volume, comparée à celle de l’eau pure et libre à la même température, à pression atmosphérique et à une hauteur de référence. L’eau pure vaut 0 par convention : l’eau des sols et des plantes est donc presque toujours sous 0. Une énergie par volume a l’unité d’une pression : le mégapascal, MPa.'), ' ', ...cite('openstax', 'kb2')),
    h('p', { class: 'pw-eq', 'aria-label': 'Psi equals Psi s plus Psi p plus Psi g plus Psi m' }, 'Ψ = Ψ', h('sub', { text: 's' }), ' + Ψ', h('sub', { text: 'p' }), ' + Ψ', h('sub', { text: 'g' }), ' + Ψ', h('sub', { text: 'm' })),
    h('p', {}, T('The four parts simply add up, and water only ever moves down the difference of the total: from higher Ψ to lower Ψ. For water to go from the soil to the air through a plant, each step must be lower than the one before.', 'Les quatre termes s’additionnent, et l’eau ne se déplace qu’en descendant la différence du total : du Ψ le plus haut vers le plus bas. Pour aller du sol à l’air à travers une plante, chaque étape doit être plus basse que la précédente.'), ' ', ...cite('openstax', 'kb3')),
    facts([
      [h('span', {}, 'Ψ', h('sub', { text: 's' }), T(' solute (osmotic) potential', ' potentiel osmotique (des solutés)')),
        T('Dissolved sugars and salts lower the potential: Ψs = −i·C·R·T (van ’t Hoff, for dilute solutions; C in mol per litre, i particles per molecule, T in kelvin). Always negative in cells; typically −0.5 to −1.0 MPa in the cytoplasm.', 'Les sucres et sels dissous abaissent le potentiel : Ψs = −i·C·R·T (van ’t Hoff, pour les solutions diluées ; C en mol par litre, i particules par molécule, T en kelvins). Toujours négatif dans les cellules ; typiquement −0,5 à −1,0 MPa dans le cytoplasme.'), ' ', ...cite('openstax', 'kb2')],
      [h('span', {}, 'Ψ', h('sub', { text: 'p' }), T(' pressure potential', ' potentiel de pression')),
        T('Positive in living cells pushed against their wall (turgor): about 0.6–0.8 MPa, up to 1.5 MPa in a well-watered plant, close to 0 when it wilts. Negative in the xylem, where the sap is pulled: a tension.', 'Positif dans les cellules vivantes qui poussent contre leur paroi (turgescence) : environ 0,6 à 0,8 MPa, jusqu’à 1,5 MPa chez une plante bien arrosée, près de 0 quand elle flétrit. Négatif dans le xylème, où la sève est tirée : une tension.'), ' ', ...cite('openstax')],
      [h('span', {}, 'Ψ', h('sub', { text: 'g' }), T(' gravitational potential', ' potentiel gravitaire')),
        T('Ψg = ρ·g·h: about 0.01 MPa per metre above the reference (ground level here). It only matters in tall columns: a 100 m trunk needs about 1 MPa just to hold its water up. Convention: positive upwards, so for water at rest the pressure in the xylem falls by the same amount. Some textbooks write gravity as a negative term instead.', 'Ψg = ρ·g·h : environ 0,01 MPa par mètre au-dessus de la référence (ici le sol). Il ne compte que pour les hautes colonnes : un tronc de 100 m demande environ 1 MPa rien que pour tenir son eau. Convention : positif vers le haut, si bien que pour une eau au repos la pression du xylème baisse d’autant. Certains manuels écrivent plutôt la gravité comme un terme négatif.'), ' ', ...cite('saupe', 'kb3')],
      [h('span', {}, 'Ψ', h('sub', { text: 'm' }), T(' matric potential', ' potentiel matriciel')),
        T('Water held on wettable surfaces (cell walls, soil particles) has a lower potential. Zero or negative; usually ignored inside well-watered cells, but it is the main part in cell walls (section 2), in dry seeds (air-dry seeds are at −50 to −350 MPa, which is why they can draw water in against large forces) and in soils (section 6).', 'L’eau retenue sur des surfaces mouillables (parois, particules du sol) a un potentiel plus bas. Nul ou négatif ; en général négligé dans les cellules bien hydratées, mais c’est le terme principal dans les parois (partie 2), dans les graines sèches (des graines sèches à l’air sont entre −50 et −350 MPa, c’est pourquoi elles peuvent attirer l’eau contre de grandes forces) et dans les sols (partie 6).'), ' ', ...cite('openstax', 'kb2', 'arnold')],
    ]),
    h('div', { class: 'pw-conv' },
      h('div', { class: 'fields' }, input('units', { id: 'pw-units', label: T('Convert a potential', 'Convertir un potentiel'), unit: 'MPa', onchange: compute })),
      out.units),
    h('p', { class: 'hint' }, T('1 MPa = 10 bar ≈ 9.87 atm; the water-column height is our conversion with the density of water at 20 °C.', '1 MPa = 10 bar ≈ 9,87 atm ; la hauteur d’eau est notre conversion avec la masse volumique de l’eau à 20 °C.'), ' ', ...cite('kb2', 'nist')));

  // 1b. A cell in a solution
  out.cell = h('div', { class: 'pw-out', id: 'pw-cell-out', 'aria-live': 'polite' });
  const cell = h('section', { class: 'card' },
    h('h2', { text: T('Try it: a cell in a sugar solution', 'À essayer : une cellule dans de l’eau sucrée') }),
    h('p', { class: 'small' }, T('Put a plant cell in a sucrose solution and let it settle: water goes in or out until the cell has the same Ψ as the solution. Inside, the solutes stay; what changes is the turgor.', 'Plongez une cellule végétale dans une solution de saccharose et attendez l’équilibre : l’eau entre ou sort jusqu’à ce que la cellule ait le même Ψ que la solution. Les solutés restent dedans ; c’est la turgescence qui change.')),
    h('div', { class: 'fields' },
      input('cellS', { id: 'pw-cell-s', label: T('Cell sap Ψs', 'Ψs du suc cellulaire'), unit: 'MPa', onchange: compute }),
      input('bath', { id: 'pw-bath', label: T('Sucrose outside', 'Saccharose dehors'), unit: 'mol/L', onchange: compute }),
      input('bathT', { id: 'pw-bath-t', label: T('Temperature', 'Température'), unit: '°C', onchange: compute })),
    out.cell,
    h('p', { class: 'hint' }, T('Example from Kramer & Boyer: a cell with Ψs = −0.9 MPa and a turgor of +0.3 MPa has Ψ = −0.6 MPa. Our simplification: the wall is rigid while there is turgor; below zero turgor the protoplast shrinks so that Ψs × volume stays constant. Real walls stretch a little.', 'Exemple de Kramer & Boyer : une cellule avec Ψs = −0,9 MPa et une turgescence de +0,3 MPa a un Ψ de −0,6 MPa. Notre simplification : la paroi est rigide tant qu’il y a turgescence ; sous zéro, le protoplaste rétrécit de sorte que Ψs × volume reste constant. Les vraies parois s’étirent un peu.'), ' ', ...cite('kb3', 'openstax'), ' ', anat('protoplast', T('Protoplast', 'Protoplaste')), ' · ', anat('vacuole', T('vacuole', 'vacuole'))));

  const comp = compartmentSection();

  // 3. Soil -> leaf -> air
  out.chain = h('div', { class: 'pw-chart', id: 'pw-chain' });
  out.chainNote = h('p', { class: 'hint', id: 'pw-chain-note' });
  out.chainSum = h('p', { class: 'pw-out', id: 'pw-chain-sum', 'aria-live': 'polite' });
  out.chainTable = h('tbody');
  out.air = h('p', { class: 'pw-out', id: 'pw-air-out', 'aria-live': 'polite' });
  out.height = h('p', { class: 'small', id: 'pw-height-out', 'aria-live': 'polite' });
  out.own = h('div', { class: 'fields', id: 'pw-own' },
    input('soil', { id: 'pw-soil', label: T('Soil Ψ', 'Ψ du sol'), unit: 'MPa', onchange: compute }),
    input('leaf', { id: 'pw-leaf', label: T('Leaf Ψ', 'Ψ de la feuille'), unit: 'MPa', onchange: compute }));
  const presetSel = h('select', { id: 'pw-preset' }, ...Object.entries(PRESETS).map(([k, p]) => h('option', { value: k, selected: k === S.preset, text: p.label[lang()] })));
  presetSel.addEventListener('change', () => { S.preset = presetSel.value; compute(); });
  const path = h('section', { class: 'card wide', id: 'path' },
    h('h2', {}, h('span', { class: 'step', text: '3' }), T('From the soil to the air', 'Du sol à l’air')),
    h('p', {}, T('The potential falls a little from the soil to the leaf, and then enormously from the leaf to the air. Air that is not saturated has a very low water potential: Ψ = (R·T / V̄w)·ln(RH), where RH is the relative humidity and V̄w the volume of a mole of liquid water (18 cm³). At 20 °C, air at 98 % is at about −2.7 MPa and air at 50 % at about −93.5 MPa, far below any leaf. The air inside a leaf stays almost saturated, so the big drop happens across the stomata.', 'Le potentiel baisse un peu du sol à la feuille, puis énormément de la feuille à l’air. Un air non saturé a un potentiel hydrique très bas : Ψ = (R·T / V̄w)·ln(HR), où HR est l’humidité relative et V̄w le volume d’une mole d’eau liquide (18 cm³). À 20 °C, un air à 98 % est vers −2,7 MPa et un air à 50 % vers −93,5 MPa, bien en dessous de n’importe quelle feuille. L’air à l’intérieur de la feuille reste presque saturé : la grosse chute se fait à travers les stomates.'), ' ', ...cite('vesala', 'saupe', 'kb7', 'zhang'), ' ', anat('stoma', T('Stoma', 'Stomate'))),
    h('div', { class: 'tool-cols pw-path-cols' },
      h('div', {},
        h('div', { class: 'fields' },
          h('div', { class: 'field select' }, h('label', { for: 'pw-preset', text: T('Values', 'Valeurs') }), h('div', { class: 'field-in' }, presetSel))),
        out.own,
        h('div', { class: 'fields' },
          input('rh', { id: 'pw-rh', label: T('Air humidity', 'Humidité de l’air'), unit: '%', onchange: compute }),
          input('temp', { id: 'pw-temp', label: T('Air temperature', 'Température de l’air'), unit: '°C', onchange: compute })),
        out.air,
        h('div', { class: 'fields' }, input('height', { id: 'pw-height', label: T('Height of the plant', 'Hauteur de la plante'), unit: 'm', onchange: compute })),
        out.height),
      h('div', {}, out.chain, out.chainSum, out.chainNote,
        h('details', { class: 'more' }, h('summary', { text: T('The numbers', 'Les chiffres') }), h('table', { class: 'kv' }, out.chainTable)))),
    h('p', { class: 'hint' }, T('The chart compresses the scale (a log scale that keeps 0): each grid line down is ten times more negative. Measured in the field, leaves usually stay between 0 and −5 MPa; vines in Napa went from about −0.15 MPa before dawn to −1.3 MPa at midday, and their stomata close below about −1.0 MPa. With the pressure chamber, Scholander measured xylem sap at −0.4 to −0.5 MPa in a damp forest and down to about −8 MPa in desert plants.', 'Le graphique comprime l’échelle (une échelle logarithmique qui garde le 0) : chaque ligne vers le bas est dix fois plus négative. Mesurées au champ, les feuilles restent en général entre 0 et −5 MPa ; des vignes de la Napa allaient d’environ −0,15 MPa avant l’aube à −1,3 MPa à midi, et leurs stomates se ferment sous −1,0 MPa environ. Avec la chambre à pression, Scholander a mesuré la sève du xylème à −0,4 ou −0,5 MPa en forêt humide et jusqu’à −8 MPa environ chez les plantes du désert.'), ' ', ...cite('prometheus', 'charrier', 'scholander')));

  // 3. Adhesion, cohesion, capillarity
  out.cap = h('div', { class: 'pw-out', id: 'pw-cap-out', 'aria-live': 'polite' });
  out.capChart = h('div', { class: 'pw-chart', id: 'pw-cap-chart' });
  const thetaSeg = h('div', { class: 'seg', role: 'group', 'aria-label': T('Contact angle presets', 'Angles de contact') },
    ...[['0', T('0° (ideal)', '0° (idéal)')], ['48', T('48° (vessel walls)', '48° (parois de vaisseaux)')]].map(([v, l]) => h('button', { type: 'button', 'data-theta': v, 'aria-pressed': String(S.theta === v), text: l,
      onclick: () => { S.theta = v; document.getElementById('pw-theta').value = v; compute(); } })));
  const capillarity = h('section', { class: 'card wide', id: 'capillarity' },
    h('h2', {}, h('span', { class: 'step', text: '4' }), T('Adhesion, cohesion and capillarity', 'Adhésion, cohésion et capillarité')),
    h('div', { class: 'tool-cols' },
      h('div', {},
        facts([
          [T('Cohesion', 'Cohésion'), T('Water molecules attract each other strongly (hydrogen bonds). This gives water a surface tension far higher than most liquids, 72.74 mN/m at 20 °C, and lets a water column be pulled without breaking.', 'Les molécules d’eau s’attirent fortement (liaisons hydrogène). Cela donne à l’eau une tension superficielle bien plus forte que la plupart des liquides, 72,74 mN/m à 20 °C, et permet de tirer une colonne d’eau sans la rompre.'), ' ', ...cite('kb2', 'iapws')],
          [T('Adhesion', 'Adhésion'), T('Water also binds to the cellulose of cell walls, which is hydrophilic. Measured on the inside of xylem vessels, though, water drops make a contact angle of 42° to 55°: the walls are only partly wettable, perhaps helped by surfactants in the sap.', 'L’eau se lie aussi à la cellulose des parois, qui est hydrophile. Mesurées à l’intérieur des vaisseaux du xylème, les gouttes font pourtant un angle de contact de 42° à 55° : les parois ne sont que partiellement mouillables, peut-être aidées par des tensioactifs de la sève.'), ' ', ...cite('openstax', 'zwieniecki', 'schenk')],
          [T('Capillarity', 'Capillarité'), T('Adhesion and cohesion together lift water up a thin tube until the weight of the column balances the curved surface: h = 2·γ·cosθ / (ρ·g·r) (Jurin’s law). Roughly h in metres = 14.87 divided by the radius in micrometres.', 'Adhésion et cohésion font monter l’eau dans un tube fin jusqu’à ce que le poids de la colonne équilibre la surface courbe : h = 2·γ·cosθ / (ρ·g·r) (loi de Jurin). En gros, h en mètres = 14,87 divisé par le rayon en micromètres.'), ' ', ...cite('saupe')],
        ]),
        h('div', { class: 'fields' },
          input('radius', { id: 'pw-radius', label: T('Tube radius', 'Rayon du tube'), unit: 'µm', onchange: compute }),
          input('capT', { id: 'pw-cap-t', label: T('Temperature', 'Température'), unit: '°C', onchange: compute }),
          input('theta', { id: 'pw-theta', label: T('Contact angle', 'Angle de contact'), unit: '°', onchange: compute })),
        thetaSeg,
        out.cap),
      h('div', {}, out.capChart,
        h('p', { class: 'hint' }, T('Sizes under the chart: tracheids of pines and junipers average 8–11 µm across (largest above 30 µm); vessels are about 20 to 700 µm wide, oak earlywood vessels around 230 µm, grapevine stems 150–400 µm; pores in pit membranes measure 5–20 nm in fresh flowering-plant wood, and estimates up to 170 nm exist. Radii are half these diameters.', 'Tailles sous le graphique : les trachéides des pins et genévriers font en moyenne 8 à 11 µm de large (les plus grandes plus de 30 µm) ; les vaisseaux environ 20 à 700 µm, ceux du bois initial du chêne vers 230 µm, ceux des tiges de vigne 150 à 400 µm ; les pores des membranes de ponctuation mesurent 5 à 20 nm dans le bois frais des plantes à fleurs, et certaines estimations vont jusqu’à 170 nm. Les rayons sont la moitié de ces diamètres.'), ' ', ...cite('pittermann', 'kb7', 'hietz', 'chatelet', 'li'), ' ', anat('vessel', T('Vessel', 'Vaisseau')), ' · ', anat('tracheid', T('tracheid', 'trachéide')), ' · ', anat('pit', T('pit', 'ponctuation'))))),
    h('p', {}, T('Conclusion: in a vessel, capillarity lifts water a few tens of centimetres at most. To reach the top of the tallest tree, 115.55 m, it would need a tube of about 0.13 µm radius, far finer than any conduit. Capillarity does act in plants, but elsewhere: in the nanometre-wide pores of wet cell walls, whose curved menisci stay filled up to tensions of about 75 MPa. That is where evaporation pulls on the water.', 'Conclusion : dans un vaisseau, la capillarité monte l’eau de quelques dizaines de centimètres au plus. Pour atteindre le sommet du plus grand arbre, 115,55 m, il faudrait un tube d’environ 0,13 µm de rayon, bien plus fin que tout conduit. La capillarité agit bien chez les plantes, mais ailleurs : dans les pores larges de quelques nanomètres des parois mouillées, dont les ménisques courbes restent pleins jusqu’à des tensions d’environ 75 MPa. C’est là que l’évaporation tire sur l’eau.'), ' ', ...cite('humboldt', 'kb2')));

  // 4. Cohesion–tension theory
  const theory = h('section', { class: 'card wide', id: 'cohesion-tension' },
    h('h2', {}, h('span', { class: 'step', text: '5' }), T('The cohesion–tension theory', 'La théorie de la cohésion–tension')),
    h('p', {}, T('Proposed by Dixon and Joly in 1894–1895 (and Askenasy the same year), it is the accepted explanation of the ascent of sap, in four steps:', 'Proposée par Dixon et Joly en 1894–1895 (et Askenasy la même année), c’est l’explication admise de la montée de la sève, en quatre temps :'), ' ', ...cite('dixon', 'kb7')),
    h('ol', { class: 'pw-steps' },
      h('li', {}, T('Water evaporates from the wet walls of the cells inside the leaf and leaves through the stomata. The menisci in the wall pores curve and pull on the water behind them: the leaf’s potential drops.', 'L’eau s’évapore des parois mouillées des cellules à l’intérieur de la feuille et sort par les stomates. Les ménisques dans les pores des parois se creusent et tirent sur l’eau derrière eux : le potentiel de la feuille baisse.')),
      h('li', {}, T('Water is pulled out of the xylem into the leaf cells. The sap in the xylem is now under tension (negative pressure), of the order of −2 MPa at the leaf, depending strongly on the humidity of the air.', 'L’eau est tirée du xylème vers les cellules de la feuille. La sève du xylème est alors sous tension (pression négative), de l’ordre de −2 MPa dans la feuille, selon surtout l’humidité de l’air.')),
      h('li', {}, T('Because water is cohesive and the conduits are narrow and continuous, the tension is passed down the whole column, from the leaves through the stem to the roots.', 'Comme l’eau est cohésive et que les conduits sont étroits et continus, la tension se transmet à toute la colonne, des feuilles à la tige puis aux racines.')),
      h('li', {}, T('At the roots the tension draws water in from the soil, as long as the soil is at a higher potential. The plant spends no energy on it: the sun and the dry air do the work.', 'Aux racines, la tension fait entrer l’eau du sol, tant que le sol est à un potentiel plus élevé. La plante n’y dépense pas d’énergie : le soleil et l’air sec font le travail.'))),
    h('p', { class: 'small' }, ...cite('kb7', 'openstax'), ' ', anat('xylem', T('Xylem', 'Xylème')), ' · ', anat('casparian-strip', T('Casparian strip', 'cadre de Caspary'))),
    facts([
      [T('Why not suction?', 'Pourquoi pas une aspiration ?'), T('Sucking from the top, even with a perfect vacuum, lifts water only about 10.4 m: it is the atmosphere that pushes it. Above that, water must be under true tension, pulled from above.', 'Aspirer par le haut, même avec un vide parfait, ne monte l’eau que d’environ 10,4 m : c’est l’atmosphère qui la pousse. Au-delà, l’eau doit être sous vraie tension, tirée par le haut.'), ' ', ...cite('caupin')],
      [T('How strong is water?', 'Quelle est la résistance de l’eau ?'), T('Theory says pure water should only break near −190 MPa. In the cleanest experiments it usually breaks around −30 MPa (Briggs’ spinning tube in 1950 reached about −25 MPa); water trapped in tiny quartz cavities reached about −140 MPa (an estimate). Plants work far above these limits, down to about −8 MPa: bubbles start on particles, rough or water-repelling surfaces, or by air pulled through pits.', 'La théorie dit que l’eau pure ne devrait se rompre que vers −190 MPa. Dans les expériences les plus propres, elle se rompt en général vers −30 MPa (le tube tournant de Briggs en 1950 a atteint environ −25 MPa) ; de l’eau enfermée dans de minuscules cavités de quartz a atteint environ −140 MPa (une estimation). Les plantes travaillent bien au-dessus de ces limites, jusqu’à −8 MPa environ : les bulles naissent sur des particules, des surfaces rugueuses ou hydrophobes, ou par de l’air aspiré à travers les ponctuations.'), ' ', ...cite('caupin', 'gallo', 'zheng', 'schenk')],
      [T('When the column breaks: embolism', 'Quand la colonne se rompt : l’embolie'), T('Under too much tension a conduit can suddenly fill with gas (cavitation) and stop carrying water. Air usually enters through the pores of the pit membranes between conduits: the narrower the pores, the more tension they hold (the same law as capillarity). Species differ in this more than in vessel width. The tension that costs half the conductivity, P50, is about −3.4 to −3.9 MPa in pines and spruce branches and −2.1 to −2.8 MPa in grapevine stems.', 'Sous une tension trop forte, un conduit peut d’un coup se remplir de gaz (cavitation) et ne plus porter l’eau. L’air entre en général par les pores des membranes de ponctuation entre conduits : plus les pores sont fins, plus ils tiennent de tension (la même loi que la capillarité). Les espèces diffèrent par là plus que par la largeur des vaisseaux. La tension qui fait perdre la moitié de la conductivité, le P50, est d’environ −3,4 à −3,9 MPa dans les branches de pins et d’épicéa et de −2,1 à −2,8 MPa dans les tiges de vigne.'), ' ', ...cite('kb7', 'choat', 'losso', 'charrier'), ' ', anat('bordered-pit', T('Bordered pit', 'Ponctuation aréolée'))],
      [T('How tall can a tree be?', 'Quelle hauteur pour un arbre ?'), T('Gravity alone costs about 1.13 MPa for the 115.55 m of Hyperion, a coast redwood measured in 2006, the tallest known then; friction adds more (a teaching estimate for fast flow gives 0.02 MPa per metre). From leaves sampled along redwood trunks, Koch and colleagues estimated a maximum height of 122–130 m.', 'La gravité seule coûte environ 1,13 MPa pour les 115,55 m d’Hyperion, un séquoia à feuilles d’if mesuré en 2006, le plus grand connu alors ; les frottements ajoutent encore (une estimation de cours pour un flux rapide donne 0,02 MPa par mètre). D’après des feuilles prélevées le long de troncs de séquoias, Koch et ses collègues ont estimé la hauteur maximale à 122–130 m.'), ' ', ...cite('humboldt', 'saupe', 'koch')],
      [T('Root pressure and guttation', 'Pression racinaire et guttation'), T('Roots can also push: 0.05 to 0.19 MPa in herbaceous plants, about 0.1 MPa in grapevine, 0.2–0.3 MPa in birch. It is gone when the plant transpires fast and far too weak to lift sap up a tree. Its visible sign is guttation: drops of liquid water pushed out at leaf edges and grass tips in the morning, through hydathodes.', 'Les racines peuvent aussi pousser : 0,05 à 0,19 MPa chez les plantes herbacées, environ 0,1 MPa chez la vigne, 0,2 à 0,3 MPa chez le bouleau. Cette poussée disparaît quand la plante transpire fort et reste bien trop faible pour monter la sève dans un arbre. Son signe visible est la guttation : des gouttes d’eau liquide poussées au bord des feuilles et au bout des brins d’herbe le matin, par les hydathodes.'), ' ', ...cite('kb6'), ' ', anat('hydathode', T('Hydathode', 'Hydathode'))],
      [T('How it is measured', 'Comment on le mesure'), T('In a pressure chamber, a cut leaf or shoot is sealed with its cut end outside, and gas pressure is raised until sap just appears at the cut. That pressure, with a minus sign, estimates the water potential.', 'Dans une chambre à pression, une feuille ou une pousse coupée est enfermée, l’extrémité coupée dehors, et l’on monte la pression du gaz jusqu’à ce que la sève affleure à la coupe. Cette pression, avec un signe moins, estime le potentiel hydrique.'), ' ', ...cite('prometheus', 'scholander')],
    ]));

  // 5. Soil and watering
  const soil = h('section', { class: 'card wide', id: 'soil' },
    h('h2', {}, h('span', { class: 'step', text: '6' }), T('What it means for watering', 'Ce que cela veut dire pour l’arrosage')),
    facts([
      [T('Field capacity', 'Capacité au champ'), T('After free drainage, soil water sits at about −0.01 to −0.033 MPa. Laboratories in the US use −33 kPa for loams and clays and −10 kPa for sands; recent work suggests −10 or even −6 kPa fits most soils better.', 'Après ressuyage, l’eau du sol est vers −0,01 à −0,033 MPa. Les laboratoires américains prennent −33 kPa pour les limons et argiles et −10 kPa pour les sables ; des travaux récents suggèrent que −10 voire −6 kPa conviennent mieux à la plupart des sols.'), ' ', ...cite('cornell', 'ochsner')],
      [T('Wilting point', 'Point de flétrissement'), T('By convention −1.5 MPa (−15 bar): the soil potential at which many herbaceous plants, measured long ago, stayed wilted overnight (measured −1.5 to −2.0 MPa). Most crops show stress much earlier, around −0.2 to −0.5 MPa in the soil, because water no longer reaches the roots fast enough.', 'Par convention −1,5 MPa (−15 bar) : le potentiel du sol auquel beaucoup de plantes herbacées, mesurées autrefois, restaient flétries la nuit (mesuré entre −1,5 et −2,0 MPa). La plupart des cultures souffrent bien avant, vers −0,2 à −0,5 MPa dans le sol, car l’eau n’arrive plus assez vite aux racines.'), ' ', ...cite('kb4', 'cornell')],
    ]),
    h('p', {}, T('The water held between these two limits is the water a soil can store for plants. How much that is depends on the soil; how fast it is used depends on the plants and the air, as in section 3.', 'L’eau retenue entre ces deux limites est celle qu’un sol peut stocker pour les plantes. Sa quantité dépend du sol ; la vitesse à laquelle elle est consommée dépend des plantes et de l’air, comme dans la partie 3.'), ' ', ...cite('cornell')));

  const sources = h('section', { class: 'card wide sources' }, h('h2', { text: 'Sources' }), list(),
    h('p', { class: 'small muted', text: T('Formulas are in physics.js and checked against the cited values and worked examples (unit tests). Values marked as ours are our own calculations with those formulas. Texts and charts are our own.', 'Les formules sont dans physics.js et vérifiées sur les valeurs et exemples cités (tests). Les valeurs indiquées comme nôtres sont nos calculs avec ces formules. Textes et graphiques sont les nôtres.') }));

  main.replaceChildren(
    h('h1', { text: STR.title[lang()] }),
    h('p', { class: 'lead muted', text: STR.lead[lang()] }),
    h('nav', { class: 'nav-tools pw-toc', 'aria-label': T('On this page', 'Sur cette page') },
      ...[['potential', T('Water potential', 'Potentiel hydrique')], ['compartments', T('Vacuole, cytoplasm, wall', 'Vacuole, cytoplasme, paroi')], ['path', T('Soil to air', 'Du sol à l’air')], ['capillarity', T('Capillarity', 'Capillarité')], ['cohesion-tension', T('Cohesion–tension', 'Cohésion–tension')], ['soil', T('Watering', 'Arrosage')]]
        .map(([id, t]) => h('a', { href: routeHref('water', id), text: t }))),
    h('div', { class: 'tool-cols' }, potential, cell, h('div', { class: 'card pw-fig' }, cellFigure()), comp, path, capillarity, theory, soil, sources));
  compute();
}

// A cell, its wall and vacuole: what the parts of Ψ refer to. Our own drawing.
function cellFigure() {
  const s = svg('svg', { viewBox: '0 0 380 200', role: 'img', 'aria-label': T('A plant cell: the wall holds the swollen protoplast; turgor pushes outward.', 'Une cellule végétale : la paroi retient le protoplaste gonflé ; la turgescence pousse vers l’extérieur.') });
  svg('rect', { x: 20, y: 20, width: 190, height: 150, rx: 14, class: 'pw-wall' }, s);
  svg('rect', { x: 28, y: 28, width: 174, height: 134, rx: 10, class: 'pw-cyto' }, s);
  svg('rect', { x: 46, y: 44, width: 138, height: 102, rx: 22, class: 'pw-vac' }, s);
  for (const [x1, y1, x2, y2] of [[115, 44, 115, 14], [115, 146, 115, 176], [46, 95, 10, 95], [184, 95, 220, 95]]) {
    svg('path', { d: `M${x1},${y1} L${x2},${y2}`, class: 'pw-arrow', 'marker-end': 'url(#pw-ah)' }, s);
  }
  const defs = svg('defs', {}, s);
  const m = svg('marker', { id: 'pw-ah', viewBox: '0 0 8 8', refX: 6, refY: 4, markerWidth: 6, markerHeight: 6, orient: 'auto' }, defs);
  svg('path', { d: 'M0,0 L8,4 L0,8 Z', class: 'pw-ah' }, m);
  const label = (x, y, t, anchor = 'start') => { const e = svg('text', { x, y, class: 'pw-lbl', 'text-anchor': anchor }, s); e.textContent = t; return e; };
  label(232, 40, T('cell wall', 'paroi'));
  label(232, 56, T('holds the push', 'retient la poussée'));
  label(232, 92, T('Ψp > 0: turgor', 'Ψp > 0 : turgescence'));
  label(232, 108, T('pushes outward', 'pousse vers l’extérieur'));
  label(115, 92, T('vacuole', 'vacuole'), 'middle');
  label(115, 108, T('Ψs < 0: solutes', 'Ψs < 0 : solutés'), 'middle');
  label(232, 140, T('Ψ = Ψs + Ψp', 'Ψ = Ψs + Ψp'));
  label(232, 156, T('= Ψ of the water', '= Ψ de l’eau autour,'));
  label(232, 172, T('around, at equilibrium', 'à l’équilibre'));
  return h('figure', { class: 'pw-cellfig' }, s, h('figcaption', { class: 'hint', text: T('Our drawing, schematic. In a living cell the solutes pull water in and the wall pushes back.', 'Notre dessin, schématique. Dans une cellule vivante, les solutés attirent l’eau et la paroi repousse.') }));
}

// ---------------------------------------------------------------- 2. compartments
const CMP_PRESETS = {
  kb: { label: { en: 'Kramer & Boyer’s cell, at equilibrium', fr: 'La cellule de Kramer & Boyer, à l’équilibre' }, S: '-0.9', P: '0.3', out: '-0.6', wall: '-0.04' },
  wet: { label: { en: 'The same cell, apoplast at −0.15 MPa', fr: 'La même cellule, apoplasme à −0,15 MPa' }, S: '-0.9', P: '0.3', out: '-0.15', wall: '-0.04' },
  plasmolysis: { label: { en: 'The same cell in 0.5 mol/L sucrose', fr: 'La même cellule dans du saccharose à 0,5 mol/L' }, S: '-0.9', P: '0.3', out: String(sig(solutePotential(0.5, 20), 3)), wall: String(sig(solutePotential(0.5, 20), 3)) },
  own: { label: { en: 'Your own values', fr: 'Vos propres valeurs' } },
};
const sgn = (v, d = 2) => (v > 0 ? `+${f(v, d)}` : f(v, d));

function compartmentSection() {
  const presetSel = h('select', { id: 'pw-cmp-preset' }, ...Object.entries(CMP_PRESETS).map(([k, p]) => h('option', { value: k, selected: k === S.cmp, text: p.label[lang()] })));
  presetSel.addEventListener('change', () => {
    S.cmp = presetSel.value;
    const p = CMP_PRESETS[S.cmp];
    if (p.S) {
      Object.assign(S, { cmpS: p.S, cmpP: p.P, cmpOut: p.out, cmpWall: p.wall });
      for (const [id, k] of [['pw-cmp-s', 'cmpS'], ['pw-cmp-p', 'cmpP'], ['pw-cmp-outside', 'cmpOut'], ['pw-cmp-wall', 'cmpWall']]) {
        const el = document.getElementById(id);
        if (el) el.value = lang() === 'fr' ? S[k].replace('.', ',') : S[k];
      }
    }
    computeCompartments();
  });
  const own = () => { if (S.cmp !== 'own') { S.cmp = 'own'; presetSel.value = 'own'; } computeCompartments(); };
  out.cmp = h('div', { class: 'pw-out', id: 'pw-cmp-out', 'aria-live': 'polite' });
  out.cmpTable = h('tbody');
  const card = (key, anatId, title, dom, body, srcs, extra = null) => h('section', { class: 'pw-cmp-card', 'data-compartment': key },
    h('h3', {}, anat(anatId, title), h('span', { class: 'pw-dom', text: dom })),
    h('p', {}, body, ' ', ...cite(...srcs)), extra);
  return h('section', { class: 'card wide', id: 'compartments' },
    h('h2', {}, h('span', { class: 'step', text: '2' }), T('Inside the plant: vacuole, cytoplasm, wall, apoplast and symplast', 'Dans la plante : vacuole, cytoplasme, paroi, apoplasme et symplasme')),
    h('p', {}, T('The same Ψ = Ψs + Ψp + Ψm holds in every compartment, but a different part dominates in each. Living protoplasts (vacuole and cytoplasm, joined into the symplast) are ruled by solutes and turgor; the walls and the dead conduits around them (the apoplast) by tension and the pull of wet surfaces. Water crosses from one to the other wherever Ψ is lower.', 'La même relation Ψ = Ψs + Ψp + Ψm vaut dans chaque compartiment, mais un terme différent y domine. Les protoplastes vivants (vacuole et cytoplasme, reliés en symplasme) sont régis par les solutés et la turgescence ; les parois et les conduits morts qui les entourent (l’apoplasme) par la tension et l’attraction des surfaces mouillées. L’eau passe de l’un à l’autre partout où Ψ est plus bas.'), ' ', ...cite('kb3')),
    h('div', { class: 'tool-cols pw-cmp-cols' },
      h('div', {}, compartmentFigure()),
      h('div', { class: 'pw-cmp-cards' },
        card('vacuole', 'vacuole', T('Vacuole', 'Vacuole'), T('Ψs, with the shared Ψp', 'Ψs, avec le Ψp commun'),
          T('The large central vacuole fills 80 to 90 % of a mature cell. It stores mineral salts, organic acids, sugars and amino acids, and up to 90 % of the cell’s nitrate, so most of the solutes that lower Ψs are here. Its sap draws water in; the wall pushes back, and that push, the turgor, is felt by the whole protoplast. When the cell loses water, it is mostly the vacuole that shrinks: plasmolysis is driven by the vacuole. Example: Kramer & Boyer’s cell, Ψs −0.9 MPa and Ψp +0.3 MPa, so Ψ −0.6 MPa.',
            'La grande vacuole centrale occupe 80 à 90 % d’une cellule adulte. Elle stocke sels minéraux, acides organiques, sucres et acides aminés, et jusqu’à 90 % du nitrate de la cellule : la plupart des solutés qui abaissent Ψs sont là. Son suc attire l’eau ; la paroi repousse, et cette poussée, la turgescence, s’exerce sur tout le protoplaste. Quand la cellule perd de l’eau, c’est surtout la vacuole qui rétrécit : la plasmolyse est menée par la vacuole. Exemple : la cellule de Kramer & Boyer, Ψs −0,9 MPa et Ψp +0,3 MPa, donc Ψ −0,6 MPa.'),
          ['schmidt', 'zhang2015', 'he2017', 'lang2014', 'kb3']),
        card('cytoplasm', 'cytoplasm', T('Cytoplasm', 'Cytoplasme'), T('the same Ψs and Ψp as the vacuole', 'les mêmes Ψs et Ψp que la vacuole'),
          T('A thin layer between the plasma membrane and the tonoplast. Its osmotic potential matches the vacuole’s: the membranes inside the cell have negligible strength, so a difference is evened out at once by water crossing them, and the two share one turgor. The cell keeps salts in the vacuole and balances the cytoplasm with compatible solutes. Ψm is ignored in the protoplast: it is full of water, with no air–water interface. In tobacco cells the tonoplast let water through 100 times more easily than the plasma membrane, so the vacuole buffers the cytoplasm. Turgor itself is usually 0.6–0.8 MPa, but guard cells need about 4 MPa to open a stoma fully.',
            'Une fine couche entre la membrane plasmique et le tonoplaste. Son potentiel osmotique égale celui de la vacuole : les membranes internes de la cellule n’ont pas de résistance notable, une différence est donc aussitôt effacée par l’eau qui les traverse, et les deux partagent une même turgescence. La cellule garde les sels dans la vacuole et équilibre le cytoplasme avec des solutés compatibles. Ψm est négligé dans le protoplaste : il est plein d’eau, sans interface air–eau. Dans des cellules de tabac, le tonoplaste laissait passer l’eau 100 fois plus facilement que la membrane plasmique : la vacuole amortit les variations du cytoplasme. La turgescence est en général de 0,6 à 0,8 MPa, mais les cellules de garde ont besoin d’environ 4 MPa pour ouvrir complètement un stomate.'),
          ['kb3', 'maurel1997', 'openstax', 'franks'],
          h('p', { class: 'hint' }, anat('tonoplast', T('Tonoplast', 'Tonoplaste')), ' · ', anat('plasma-membrane', T('plasma membrane', 'membrane plasmique')), ' · ', anat('guard-cell', T('guard cell', 'cellule de garde')))),
        card('wall', 'cell-wall', T('Cell wall', 'Paroi'), T('Ψm: tension in its pores', 'Ψm : tension dans ses pores'),
          T('A mesh of cellulose whose pores are 4 to 6.5 nm wide. Its water is held by menisci in these pores, and their surface tension keeps the pores filled even at tensions of about −75 MPa. Its potential is mostly a negative pressure behind these menisci: Kramer & Boyer call it matric, other authors count it as pressure; it is the same water. In leaves, the matric forces sit mainly in the walls. Dry seeds and pollen are such dried-out matrices: air-dry seeds are at −50 to −350 MPa.',
            'Un treillis de cellulose dont les pores mesurent 4 à 6,5 nm. Son eau est retenue par des ménisques dans ces pores, et leur tension superficielle les garde pleins même sous des tensions d’environ −75 MPa. Son potentiel est surtout une pression négative derrière ces ménisques : Kramer & Boyer l’appellent matriciel, d’autres auteurs le comptent comme une pression ; c’est la même eau. Dans les feuilles, les forces matricielles sont surtout dans les parois. Graines et pollen secs sont de telles matrices desséchées : des graines sèches à l’air sont entre −50 et −350 MPa.'),
          ['kb3', 'kb2', 'boyer1967', 'arnold']),
        card('apoplast', 'apoplast', T('Apoplast', 'Apoplasme'), T('Ψp < 0 (tension), little Ψs', 'Ψp < 0 (tension), peu de Ψs'),
          T('All the walls, the air spaces and the hollow dead conduits of the xylem form one space outside the membranes. Its solution is dilute: in growing pea and soybean stems the apoplast solutes amounted to only −0.03 to −0.04 MPa, while its water potential was −0.15 to −0.30 MPa, mostly a negative pressure. Xylem sap is dilute too, 20 to 50 mOsm/kg in laurel stems (about −0.05 to −0.12 MPa, our conversion with van ’t Hoff), which is why the pressure chamber usually neglects it. The tension pulled from the leaves is of the order of −2 MPa.',
            'Toutes les parois, les espaces aériens et les conduits morts et creux du xylème forment un seul espace hors des membranes. Sa solution est diluée : dans des tiges de pois et de soja en croissance, les solutés de l’apoplasme ne valaient que −0,03 à −0,04 MPa, alors que son potentiel hydrique était de −0,15 à −0,30 MPa, surtout une pression négative. La sève du xylème est diluée elle aussi, 20 à 50 mOsm/kg dans des tiges de laurier (environ −0,05 à −0,12 MPa, notre conversion par van ’t Hoff) : c’est pourquoi la chambre à pression la néglige en général. La tension tirée depuis les feuilles est de l’ordre de −2 MPa.'),
          ['nonami', 'ryu', 'rodriguez', 'openstax']),
        card('symplast', 'symplast', T('Symplast', 'Symplasme'), T('Ψs + Ψp, from cell to cell', 'Ψs + Ψp, de cellule en cellule'),
          T('The protoplasts of neighbouring cells are joined through plasmodesmata into one living continuum. Water and solutes can go from cell to cell inside it without crossing another membrane; each protoplast keeps its own Ψs and Ψp, and water follows the drop of their sum.',
            'Les protoplastes de cellules voisines sont reliés par les plasmodesmes en un seul continuum vivant. L’eau et les solutés y passent de cellule en cellule sans traverser d’autre membrane ; chaque protoplaste garde ses propres Ψs et Ψp, et l’eau suit la baisse de leur somme.'),
          ['kb3'], h('p', { class: 'hint' }, anat('plasmodesma', T('Plasmodesma', 'Plasmodesme')))))),
    h('h3', { text: T('How water moves between them', 'Comment l’eau passe de l’un à l’autre') }),
    h('p', {}, T('Always from higher to lower Ψ, whichever part makes the difference. Between the apoplast and a protoplast it crosses the plasma membrane by osmosis, helped by water channels (aquaporins); between cytoplasm and vacuole, the tonoplast. Across a root it takes three parallel paths: the apoplast (in the walls, around the cells), the symplast (through plasmodesmata) and the transcellular path (across the membranes, cell after cell). At the endodermis the Casparian strip blocks the walls and forces water and solutes through the membranes of the endodermal cells, although the barrier is not perfect.', 'Toujours du Ψ le plus haut vers le plus bas, quel que soit le terme qui fait la différence. Entre l’apoplasme et un protoplaste, elle traverse la membrane plasmique par osmose, aidée par des canaux à eau (aquaporines) ; entre cytoplasme et vacuole, le tonoplaste. À travers une racine, elle suit trois voies parallèles : l’apoplasme (dans les parois, autour des cellules), le symplasme (par les plasmodesmes) et la voie transcellulaire (à travers les membranes, cellule après cellule). À l’endoderme, le cadre de Caspary bouche les parois et oblige l’eau et les solutés à traverser les membranes des cellules endodermiques, même si la barrière n’est pas parfaite.'), ' ', ...cite('maurel1997', 'kim2018', 'openstax-roots'), ' ', anat('casparian-strip', T('Casparian strip', 'Cadre de Caspary')), ' · ', anat('endodermis', T('endodermis', 'endoderme'))),
    h('h3', { text: T('Try it: one cell and the apoplast around it', 'À essayer : une cellule et l’apoplasme autour') }),
    h('div', { class: 'fields' },
      h('div', { class: 'field select' }, h('label', { for: 'pw-cmp-preset', text: T('Example', 'Exemple') }), h('div', { class: 'field-in' }, presetSel)),
      input('cmpS', { id: 'pw-cmp-s', label: T('Cell sap Ψs at the start', 'Ψs du suc au départ'), unit: 'MPa', onchange: own }),
      input('cmpP', { id: 'pw-cmp-p', label: T('Turgor at the start', 'Turgescence au départ'), unit: 'MPa', onchange: own }),
      input('cmpOut', { id: 'pw-cmp-outside', label: T('Ψ of the apoplast', 'Ψ de l’apoplasme'), unit: 'MPa', onchange: own }),
      input('cmpWall', { id: 'pw-cmp-wall', label: T('Ψs of the wall solution', 'Ψs de la solution de la paroi'), unit: 'MPa', onchange: own })),
    out.cmp,
    h('div', { class: 'pw-table-wrap' }, h('table', { class: 'kv pw-cmp-table', id: 'pw-cmp-table' },
      h('thead', {}, h('tr', {}, h('th', { text: T('At equilibrium', 'À l’équilibre') }), ...['s', 'p', 'm'].map((k) => h('th', { class: 'v' }, 'Ψ', h('sub', { text: k }))), h('th', { class: 'v', text: 'Ψ' }))),
      out.cmpTable)),
    h('p', { class: 'hint' }, T('Our calculation, with the simplifications of the sugar-solution example above: a rigid wall while there is turgor; vacuole and cytoplasm share one Ψs and one turgor; in the wall, pressure and matric parts are given together. Wall solution −0.04 MPa as measured by Nonami & Boyer; 0.5 mol/L sucrose is ', 'Notre calcul, avec les simplifications de l’exemple de l’eau sucrée plus haut : paroi rigide tant qu’il y a turgescence ; vacuole et cytoplasme partagent un même Ψs et une même turgescence ; dans la paroi, pression et terme matriciel sont donnés ensemble. Solution de la paroi à −0,04 MPa comme mesuré par Nonami & Boyer ; le saccharose à 0,5 mol/L vaut '), mpa(solutePotential(0.5, 20)), T(' at 20 °C (van ’t Hoff).', ' à 20 °C (van ’t Hoff).'), ' ', ...cite('kb3', 'nonami')));
}

function computeCompartments() {
  const ps = read('cmpS', -10, 0), pp = read('cmpP', 0, 5), po = read('cmpOut', -20, 0), pw = read('cmpWall', -20, 0);
  mark('pw-cmp-s', !Number.isFinite(ps)); mark('pw-cmp-p', !Number.isFinite(pp)); mark('pw-cmp-outside', !Number.isFinite(po)); mark('pw-cmp-wall', !Number.isFinite(pw));
  if (![ps, pp, po, pw].every(Number.isFinite)) {
    out.cmp.replaceChildren(h('p', { class: 'err', text: T('Cell sap Ψs between −10 and 0 MPa, turgor between 0 and 5 MPa, apoplast and wall solution between −20 and 0 MPa.', 'Ψs du suc entre −10 et 0 MPa, turgescence entre 0 et 5 MPa, apoplasme et solution de la paroi entre −20 et 0 MPa.') }));
    out.cmpTable.replaceChildren();
    return;
  }
  const c = compartments({ psiS: ps, turgor0: pp, psiOut: po, psiSWall: pw });
  const flow = {
    1: T(`Water enters the cell: the apoplast (Ψ = ${f(po)} MPa) is above the cell (Ψ = ${f(c.start)} MPa). It crosses the plasma membrane into the cytoplasm, then the tonoplast into the vacuole.`, `L’eau entre dans la cellule : l’apoplasme (Ψ = ${f(po)} MPa) est au-dessus de la cellule (Ψ = ${f(c.start)} MPa). Elle traverse la membrane plasmique vers le cytoplasme, puis le tonoplaste vers la vacuole.`),
    '-1': T(`Water leaves the cell: the apoplast (Ψ = ${f(po)} MPa) is below the cell (Ψ = ${f(c.start)} MPa). It leaves the vacuole through the tonoplast, then the cytoplasm through the plasma membrane.`, `L’eau sort de la cellule : l’apoplasme (Ψ = ${f(po)} MPa) est sous la cellule (Ψ = ${f(c.start)} MPa). Elle quitte la vacuole par le tonoplaste, puis le cytoplasme par la membrane plasmique.`),
    0: T(`No net movement: the cell and the apoplast are both at Ψ = ${f(po)} MPa.`, `Pas de mouvement net : la cellule et l’apoplasme sont tous deux à Ψ = ${f(po)} MPa.`),
  }[c.flow];
  const eq = c.plasmolysed
    ? h('p', {}, h('strong', { text: T('Plasmolysis. ', 'Plasmolyse. ') }), T(`Turgor falls to 0 and the protoplast shrinks to about ${f(c.volume * 100, 0)} % of its volume, mostly by the vacuole losing water; its sap concentrates to Ψs = ${f(c.vacuole.s)} MPa.`, `La turgescence tombe à 0 et le protoplaste rétrécit à environ ${f(c.volume * 100, 0)} % de son volume, surtout par la vacuole qui perd de l’eau ; son suc se concentre jusqu’à Ψs = ${f(c.vacuole.s)} MPa.`))
    : h('p', {}, T('At equilibrium the protoplast keeps a turgor of ', 'À l’équilibre le protoplaste garde une turgescence de '), h('strong', { text: `Ψp = ${sgn(c.vacuole.p)} MPa` }), T(`, in the vacuole and the cytoplasm alike.`, `, dans la vacuole comme dans le cytoplasme.`));
  out.cmp.replaceChildren(...[h('p', {}, flow), eq,
    pw < po ? h('p', { class: 'hint', text: T('Here the wall solution is below the Ψ of the apoplast, so Ψp + Ψm in the wall comes out positive: a push, as under root pressure, not the usual tension.', 'Ici la solution de la paroi est sous le Ψ de l’apoplasme : Ψp + Ψm y est donc positif, une poussée comme sous la pression racinaire, pas la tension habituelle.') }) : null].filter(Boolean));
  const row = (name, x) => h('tr', {}, h('th', { text: name }), h('td', { class: 'v', text: f(x.s) }), h('td', { class: 'v', text: sgn(x.p) }), h('td', { class: 'v', text: f(x.m) }), h('td', { class: 'v' }, h('strong', { text: f(x.psi) })));
  out.cmpTable.replaceChildren(
    row(T('Vacuole', 'Vacuole'), c.vacuole),
    row(T('Cytoplasm (symplast)', 'Cytoplasme (symplasme)'), c.cytoplasm),
    h('tr', {}, h('th', { text: T('Wall and apoplast', 'Paroi et apoplasme') }), h('td', { class: 'v', text: f(c.wall.s) }), h('td', { class: 'v pw-pm', colspan: '2' }, sgn(c.wall.pm), h('small', { text: T('Ψp and Ψm together', 'Ψp et Ψm ensemble') })), h('td', { class: 'v' }, h('strong', { text: f(c.wall.psi) }))));
}

/** Two cells and a vessel: the compartments and the three paths of water. Our own drawing. */
function compartmentFigure() {
  const s = svg('svg', { viewBox: '0 0 540 330', role: 'img', 'aria-label': T('Two plant cells and a xylem vessel: walls and vessel form the apoplast, the protoplasts joined by a plasmodesma form the symplast.', 'Deux cellules végétales et un vaisseau du xylème : parois et vaisseau forment l’apoplasme, les protoplastes reliés par un plasmodesme forment le symplasme.') });
  const defs = svg('defs', {}, s);
  for (const [id, cls] of [['pw-ah-apo', 'pw-ah-apo'], ['pw-ah-sym', 'pw-ah-sym'], ['pw-ah-tm', 'pw-ah-tm']]) {
    const m = svg('marker', { id, viewBox: '0 0 8 8', refX: 6, refY: 4, markerWidth: 5, markerHeight: 5, orient: 'auto' }, defs);
    svg('path', { d: 'M0,0 L8,4 L0,8 Z', class: cls }, m);
  }
  const lk = (id, x, y, text, anchor = 'start', cls = 'pw-lbl') => {
    const a = svg('a', { href: routeHref('anatomy', id) }, s);
    const t = svg('text', { x, y, 'text-anchor': anchor, class: cls }, a);
    t.textContent = text;
    return t;
  };
  const lead = (x1, y1, x2, y2) => { svg('path', { d: `M${x1},${y1} L${x2},${y2}`, class: 'pw-lead' }, s); svg('circle', { cx: x2, cy: y2, r: 1.8, class: 'pw-dot' }, s); };
  // Walls (apoplast), two cells, a vessel.
  svg('rect', { x: 10, y: 50, width: 400, height: 200, rx: 6, class: 'pw-wall' }, s);
  svg('rect', { x: 418, y: 50, width: 112, height: 200, rx: 6, class: 'pw-wall' }, s);
  svg('rect', { x: 430, y: 50, width: 88, height: 200, class: 'pw-xyl' }, s);
  for (const x0 of [20, 216]) {
    svg('rect', { x: x0, y: 60, width: 184, height: 180, rx: 10, class: 'pw-cyto' }, s);
    svg('rect', { x: x0 + 18, y: 78, width: 148, height: 144, rx: 22, class: 'pw-vac' }, s);
  }
  svg('path', { d: 'M204,150 H216', class: 'pw-pd' }, s);
  // Paths: apoplast in the walls, symplast through the plasmodesma, transmembrane across.
  svg('path', { d: 'M14,56 H406 L424,56', class: 'pw-path-apo', 'marker-end': 'url(#pw-ah-apo)' }, s);
  svg('path', { d: 'M28,150 C80,150 150,150 210,150 C260,150 330,150 396,150', class: 'pw-path-sym', 'marker-end': 'url(#pw-ah-sym)' }, s);
  svg('path', { d: 'M14,236 C40,236 60,210 90,200 C140,184 150,236 212,236 C250,236 280,200 320,200 C360,200 380,236 426,236', class: 'pw-path-tm', 'marker-end': 'url(#pw-ah-tm)' }, s);
  // Labels, linked to the anatomy tab.
  lk('vacuole', 112, 112, T('vacuole', 'vacuole'), 'middle');
  s.append(Object.assign(svg('text', { x: 112, y: 128, 'text-anchor': 'middle', class: 'pw-lbl-sm' }), { textContent: T('Ψs dominates', 'Ψs domine') }));
  s.append(Object.assign(svg('text', { x: 308, y: 112, 'text-anchor': 'middle', class: 'pw-lbl-sm' }), { textContent: T('same Ψs and Ψp', 'mêmes Ψs et Ψp') }));
  s.append(Object.assign(svg('text', { x: 308, y: 128, 'text-anchor': 'middle', class: 'pw-lbl-sm' }), { textContent: T('in vacuole and cytoplasm', 'vacuole et cytoplasme') }));
  lk('cell-wall', 60, 22, T('cell wall', 'paroi')); lead(60, 26, 70, 52);
  lk('cytoplasm', 132, 22, T('cytoplasm', 'cytoplasme')); lead(150, 26, 196, 64);
  lk('plasmodesma', 256, 22, T('plasmodesma', 'plasmodesme')); lead(266, 26, 210, 146);
  lk('vessel', 474, 22, T('vessel', 'vaisseau'), 'middle'); lead(474, 26, 474, 70);
  s.append(Object.assign(svg('text', { x: 474, y: 140, 'text-anchor': 'middle', class: 'pw-lbl-sm' }), { textContent: T('Ψp < 0', 'Ψp < 0') }));
  s.append(Object.assign(svg('text', { x: 474, y: 156, 'text-anchor': 'middle', class: 'pw-lbl-sm' }), { textContent: T('tension', 'tension') }));
  s.append(Object.assign(svg('text', { x: 412, y: 44, 'text-anchor': 'end', class: 'pw-lbl-sm' }), { textContent: T('wall: Ψm, tension in pores', 'paroi : Ψm, tension dans les pores') }));
  // Legend
  const leg = [['pw-path-apo', 'apoplast', T('apoplast: in the walls and the vessel', 'apoplasme : dans les parois et le vaisseau')], ['pw-path-sym', 'symplast', T('symplast: from cytoplasm to cytoplasm', 'symplasme : de cytoplasme à cytoplasme')], ['pw-path-tm', 'plasma-membrane', T('across the membranes (transcellular)', 'à travers les membranes (transcellulaire)')]];
  leg.forEach(([cls, id, text], i) => {
    const y = 274 + i * 20;
    svg('path', { d: `M14,${y - 4} H44`, class: cls }, s);
    lk(id, 52, y, text, 'start', 'pw-lbl-sm');
  });
  return h('figure', { class: 'pw-cmpfig' }, s, h('figcaption', { class: 'hint', text: T('Our drawing, schematic, not to scale. Labels open the anatomy tab.', 'Notre dessin, schématique, pas à l’échelle. Les légendes ouvrent l’onglet anatomie.') }));
}

// ---------------------------------------------------------------- compute
function compute() {
  // Units
  const u = read('units');
  mark('pw-units', !Number.isFinite(u));
  out.units.replaceChildren(Number.isFinite(u)
    ? `= ${f(toBar(u), 3)} bar = ${f(toKPa(u), 1)} kPa = ${f(toAtm(u), 2)} atm ≈ ${f(toWaterColumn(Math.abs(u)), 1)} ${T('m of water column', 'm de colonne d’eau')}`
    : T('Enter a number.', 'Entrez un nombre.'));

  // Cell in a bath
  const cs = read('cellS', -10, 0), cb = read('bath', 0, 5), ct = read('bathT', -5, 50);
  mark('pw-cell-s', !Number.isFinite(cs)); mark('pw-bath', !Number.isFinite(cb)); mark('pw-bath-t', !Number.isFinite(ct));
  if ([cs, cb, ct].every(Number.isFinite)) {
    const psiOut = solutePotential(cb, ct);
    const c = cellInBath(cs, psiOut);
    out.cell.replaceChildren(
      h('p', {}, T('Solution outside: Ψ = ', 'Solution dehors : Ψ = '), h('strong', { text: mpa(psiOut) })),
      c.plasmolysed
        ? h('p', {}, h('strong', { text: T('Plasmolysis. ', 'Plasmolyse. ') }), T(`The solution is more negative than the cell sap: water leaves, turgor falls to 0 and the protoplast shrinks to about ${f(c.volume * 100, 0)} % of its volume, pulling away from the wall.`, `La solution est plus négative que le suc : l’eau sort, la turgescence tombe à 0 et le protoplaste rétrécit à environ ${f(c.volume * 100, 0)} % de son volume, en se détachant de la paroi.`))
        : h('p', {}, T('At equilibrium the cell keeps a turgor of ', 'À l’équilibre, la cellule garde une turgescence de '), h('strong', { text: `Ψp = +${f(c.psiP)} MPa` }), T(`: Ψ = ${f(cs)} + ${f(c.psiP)} = ${f(psiOut)} MPa, the same as outside.`, ` : Ψ = ${f(cs)} + ${f(c.psiP)} = ${f(psiOut)} MPa, comme dehors.`)),
      h('p', { class: 'hint' }, T('Ψs of the solution from van ’t Hoff (sucrose does not dissociate, i = 1).', 'Ψs de la solution par van ’t Hoff (le saccharose ne se dissocie pas, i = 1).'), ' ', ...cite('neufeld')));
  } else out.cell.replaceChildren(h('p', { class: 'err', text: T('Cell Ψs between −10 and 0 MPa, sucrose between 0 and 5 mol/L, temperature between −5 and 50 °C.', 'Ψs de la cellule entre −10 et 0 MPa, saccharose entre 0 et 5 mol/L, température entre −5 et 50 °C.') }));

  computeCompartments();

  // Air and the chain
  const rh = read('rh', 0.1, 100), t = read('temp', -10, 50), height = read('height', 0, 150);
  mark('pw-rh', !Number.isFinite(rh)); mark('pw-temp', !Number.isFinite(t)); mark('pw-height', !Number.isFinite(height));
  const air = Number.isFinite(rh) && Number.isFinite(t) ? airPotential(rh / 100, t) : NaN;
  out.air.replaceChildren(Number.isFinite(air)
    ? h('span', {}, T('Air at this humidity: Ψ = ', 'Air à cette humidité : Ψ = '), h('strong', { text: mpa(air, 1) }), h('span', { class: 'hint', text: T(' (our calculation)', ' (notre calcul)') }))
    : h('span', { class: 'err', text: T('Humidity between 0.1 and 100 %, temperature between −10 and 50 °C.', 'Humidité entre 0,1 et 100 %, température entre −10 et 50 °C.') }));
  const p = PRESETS[S.preset];
  out.own.hidden = S.preset !== 'own';
  let nodes;
  if (S.preset === 'own') {
    const so = read('soil', -10, 0), le = read('leaf', -20, 0);
    mark('pw-soil', !Number.isFinite(so)); mark('pw-leaf', !Number.isFinite(le));
    nodes = [['soil', so], ['leaf', le], ['air', air]];
    out.chainNote.replaceChildren(T('Soil: about −0.01 to −0.033 MPa at field capacity, −1.5 MPa at the wilting point (section 6). Leaf: usually 0 to −5 MPa.', 'Sol : environ −0,01 à −0,033 MPa à la capacité au champ, −1,5 MPa au point de flétrissement (partie 6). Feuille : en général 0 à −5 MPa.'), ' ', ...cite('cornell', 'kb4', 'prometheus'));
  } else {
    nodes = p.nodes;
    out.chainNote.replaceChildren(p.note[lang()], ' ', ...cite(...p.src));
  }
  drawChain(nodes.filter(([, v]) => Number.isFinite(v)));
  out.chainTable.replaceChildren(...nodes.map(([k, v], i) => h('tr', {}, h('th', { text: NODE[k][lang()] }), h('td', { class: 'v', text: Number.isFinite(v) ? mpa(v, Math.abs(v) < 0.1 ? 3 : 2) : '–' }),
    h('td', { class: 'eq', text: i ? `Δ ${Number.isFinite(v) && Number.isFinite(nodes[i - 1][1]) ? mpa(v - nodes[i - 1][1], 2) : '–'}` : '' }))));
  const [, s0] = nodes[0];
  const leafV = nodes.find(([k]) => k === 'leaf')?.[1];
  const airV = nodes.find(([k]) => k === 'air')?.[1];
  if ([s0, leafV, airV].every(Number.isFinite)) {
    const d1 = s0 - leafV, d2 = leafV - airV;
    out.chainSum.replaceChildren(d1 <= 0
      ? h('span', { class: 'err', text: T('The leaf is not below the soil: no water would rise; water would rather flow back into the soil.', 'La feuille n’est pas sous le sol : aucune eau ne monterait ; elle repartirait plutôt vers le sol.') })
      : h('span', {}, T('Soil to leaf: ', 'Du sol à la feuille : '), h('strong', { text: mpa(-d1) }), T('; leaf to air: ', ' ; de la feuille à l’air : '), h('strong', { text: mpa(-d2, 1) }),
        d2 > 0 ? T(` (${f(d2 / d1, 0)} times larger).`, ` (${f(d2 / d1, 0)} fois plus).`) : T('. The air is wetter than the leaf: no transpiration.', '. L’air est plus humide que la feuille : pas de transpiration.')));
  } else out.chainSum.replaceChildren('');
  if (Number.isFinite(height) && Number.isFinite(s0)) {
    const g = gravityPotential(height);
    out.height.replaceChildren(T(`Holding a ${f(height, 1)} m column against gravity costs ${mpa(g, 3)} (ρgh, our calculation): the top must be at least that much below the soil, before any friction${Number.isFinite(leafV) ? (s0 - leafV >= g ? '. Here it is.' : '. Here it is not: water could not reach the top.') : '.'}`,
      `Tenir une colonne de ${f(height, 1)} m contre la gravité coûte ${mpa(g, 3)} (ρgh, notre calcul) : le sommet doit être au moins d’autant sous le sol, avant tout frottement${Number.isFinite(leafV) ? (s0 - leafV >= g ? '. C’est le cas ici.' : '. Ce n’est pas le cas ici : l’eau ne pourrait pas atteindre le sommet.') : '.'}`));
  }

  // Capillarity
  const r = read('radius', 0.001, 1000), tc = read('capT', 0.01, 100), th = read('theta', 0, 89.9);
  mark('pw-radius', !Number.isFinite(r)); mark('pw-cap-t', !Number.isFinite(tc)); mark('pw-theta', !Number.isFinite(th));
  document.querySelectorAll('[data-theta]').forEach((b) => b.setAttribute('aria-pressed', String(Number(b.dataset.theta) === th)));
  if ([r, tc, th].every(Number.isFinite)) {
    const hm = jurinHeight(r * 1e-6, { tC: tc, thetaDeg: th });
    const dp = laplacePressure(r * 1e-6, { tC: tc, thetaDeg: th });
    const hText = hm >= 1000 ? `${f(hm / 1000, 2)} km` : hm >= 1 ? `${f(hm, 2)} m` : hm >= 0.01 ? `${f(hm * 100, 1)} cm` : `${f(hm * 1000, 2)} mm`;
    out.cap.replaceChildren(
      h('p', {}, T('Water rises ', 'L’eau monte de '), h('strong', { class: 'pw-big', text: hText }), T(` in a tube of ${f(r, 3)} µm radius`, ` dans un tube de ${f(r, 3)} µm de rayon`), h('span', { class: 'hint', text: T(' (our calculation).', ' (notre calcul).') })),
      h('p', { class: 'small' }, T(`Surface tension at ${f(tc, 1)} °C: ${f(surfaceTension(tc) * 1000, 2)} mN/m (IAPWS). A meniscus of this radius holds a pressure difference of `, `Tension superficielle à ${f(tc, 1)} °C : ${f(surfaceTension(tc) * 1000, 2)} mN/m (IAPWS). Un ménisque de ce rayon tient une différence de pression de `), h('strong', { text: mpa(dp, dp < 0.1 ? 4 : 2) }),
        T(' (Young–Laplace, 2γcosθ/r): the tension at which air would be pulled through a pore this size.', ' (Young–Laplace, 2γcosθ/r) : la tension à laquelle l’air serait aspiré à travers un pore de cette taille.'), ' ', ...cite('iapws', 'choat')));
    drawCap(r, hm, tc, th);
  } else {
    out.cap.replaceChildren(h('p', { class: 'err', text: T('Radius between 0.001 and 1000 µm, temperature 0.01–100 °C, contact angle 0–89.9°.', 'Rayon entre 0,001 et 1000 µm, température 0,01–100 °C, angle de contact 0–89,9°.') }));
  }
}

// ---------------------------------------------------------------- charts
function tooltip(box) {
  let tip = box.querySelector('.pw-tip');
  if (!tip) { tip = h('div', { class: 'pw-tip', role: 'status', hidden: true }); box.append(tip); }
  return {
    show(x, y, value, label) { tip.replaceChildren(h('strong', { text: value }), h('span', { text: label })); tip.hidden = false; tip.style.left = `${x}px`; tip.style.top = `${y}px`; },
    hide() { tip.hidden = true; },
  };
}

/** Potentials along the path, on a compressed (symmetric log) axis, 0 at the top. */
function drawChain(nodes) {
  const W = 460, H = 300, L = 64, R = 16, TOP = 16, B = 34;
  const minV = Math.min(-1000, ...nodes.map(([, v]) => v));
  const yMax = -symlog(minV);
  const y = (v) => TOP + (-symlog(v) / yMax) * (H - TOP - B);
  const x = (i) => L + (nodes.length > 1 ? (i * (W - L - R)) / (nodes.length - 1) : (W - L - R) / 2);
  const s = svg('svg', { viewBox: `0 0 ${W} ${H}`, role: 'img', 'aria-label': T('Water potential along the path from soil to air', 'Potentiel hydrique le long du trajet du sol à l’air') });
  const ticks = [0, -0.01, -0.1, -1, -10, -100, -1000].filter((v) => v >= minV);
  for (const v of ticks) {
    svg('line', { x1: L, x2: W - R, y1: y(v), y2: y(v), class: 'pw-grid' }, s);
    const t = svg('text', { x: L - 6, y: y(v) + 3, 'text-anchor': 'end', class: 'pw-tick' }, s);
    t.textContent = v === 0 ? '0' : f(v, 2);
  }
  const ax = svg('text', { x: 12, y: TOP + (H - TOP - B) / 2, class: 'pw-tick', transform: `rotate(-90 12 ${TOP + (H - TOP - B) / 2})`, 'text-anchor': 'middle' }, s);
  ax.textContent = 'Ψ (MPa)';
  if (nodes.length > 1) svg('polyline', { points: nodes.map(([, v], i) => `${x(i)},${y(v)}`).join(' '), class: 'pw-line' }, s);
  const box = out.chain;
  const tip = tooltip(box);
  nodes.forEach(([k, v], i) => {
    const g = svg('g', { tabindex: 0, class: 'pw-pt-g', role: 'img', 'aria-label': `${NODE[k][lang()]}: ${mpa(v)}` }, s);
    svg('circle', { cx: x(i), cy: y(v), r: 14, class: 'pw-hit' }, g);
    svg('circle', { cx: x(i), cy: y(v), r: 5, class: 'pw-pt' }, g);
    const lb = svg('text', { x: x(i), y: H - 12, 'text-anchor': 'middle', class: 'pw-lbl' }, s);
    lb.textContent = NODE[k][lang()];
    const vl = svg('text', { x: x(i) + (i === nodes.length - 1 ? -9 : 9), y: y(v) - 8, 'text-anchor': i === nodes.length - 1 ? 'end' : 'start', class: 'pw-val' }, s);
    vl.textContent = f(v, Math.abs(v) < 0.1 ? 3 : Math.abs(v) >= 10 ? 1 : 2);
    const show = () => { const r = s.getBoundingClientRect(), k2 = r.width / W; tip.show(x(i) * k2, y(v) * k2, mpa(v, Math.abs(v) < 0.1 ? 3 : 2), NODE[k][lang()]); };
    g.addEventListener('pointerenter', show); g.addEventListener('focus', show);
    g.addEventListener('pointerleave', tip.hide); g.addEventListener('blur', tip.hide);
  });
  box.querySelector('svg')?.remove();
  box.prepend(s);
}

/** Capillary rise against tube radius, log–log, with the sizes of real conduits below. */
function drawCap(r, hm, tC, th) {
  const W = 460, H = 330, L = 56, R = 14, TOP = 12, PB = 230; // plot bottom
  const lx0 = -3, lx1 = 3; // log10 radius in µm: 1 nm .. 1 mm
  const ly0 = -3, ly1 = 4; // log10 height in m: 1 mm .. 10 km
  const x = (lr) => L + ((lr - lx0) / (lx1 - lx0)) * (W - L - R);
  const y = (lh) => PB - ((lh - ly0) / (ly1 - ly0)) * (PB - TOP);
  const s = svg('svg', { viewBox: `0 0 ${W} ${H}`, role: 'img', 'aria-label': T('Capillary rise against tube radius', 'Montée capillaire selon le rayon du tube') });
  for (let e = ly0; e <= ly1; e++) {
    svg('line', { x1: L, x2: W - R, y1: y(e), y2: y(e), class: 'pw-grid' }, s);
    const t = svg('text', { x: L - 6, y: y(e) + 3, 'text-anchor': 'end', class: 'pw-tick' }, s);
    t.textContent = { '-3': '1 mm', '-2': '1 cm', '-1': '10 cm', 0: '1 m', 1: '10 m', 2: '100 m', 3: '1 km', 4: '10 km' }[e];
  }
  for (let e = lx0; e <= lx1; e++) {
    svg('line', { x1: x(e), x2: x(e), y1: TOP, y2: PB, class: 'pw-grid' }, s);
    const t = svg('text', { x: x(e), y: PB + 13, 'text-anchor': 'middle', class: 'pw-tick' }, s);
    t.textContent = { '-3': '1 nm', '-2': '10 nm', '-1': '0.1 µm', 0: '1 µm', 1: '10 µm', 2: '100 µm', 3: '1 mm' }[e].replace('0.1', lang() === 'fr' ? '0,1' : '0.1');
  }
  const xt = svg('text', { x: (L + W - R) / 2, y: PB + 27, 'text-anchor': 'middle', class: 'pw-tick' }, s);
  xt.textContent = T('tube radius (log scale)', 'rayon du tube (échelle log)');
  // Hyperion
  const hy = Math.log10(115.55);
  svg('line', { x1: L, x2: W - R, y1: y(hy), y2: y(hy), class: 'pw-ref' }, s);
  const hyl = svg('text', { x: W - R - 4, y: y(hy) - 5, 'text-anchor': 'end', class: 'pw-lbl' }, s);
  hyl.textContent = T('115.55 m, Hyperion', '115,55 m, Hyperion');
  // Curve
  const pts = [];
  for (let lr = lx0; lr <= lx1 + 1e-9; lr += 0.05) {
    const hh = Math.log10(jurinHeight(10 ** lr * 1e-6, { tC, thetaDeg: th }));
    if (hh <= ly1 && hh >= ly0) pts.push(`${x(lr).toFixed(1)},${y(hh).toFixed(1)}`);
  }
  svg('polyline', { points: pts.join(' '), class: 'pw-line' }, s);
  // Current point
  const lr = Math.log10(r), lh = Math.log10(hm);
  if (lr >= lx0 && lr <= lx1 && lh >= ly0 && lh <= ly1) svg('circle', { cx: x(lr), cy: y(lh), r: 5.5, class: 'pw-mark' }, s);
  // Size ranges (radius = diameter / 2), as cited in the caption.
  const bands = [
    [T('pores in pit membranes', 'pores des membranes de ponctuation'), 0.0025, 0.085],
    [T('tracheids', 'trachéides'), 4, 15],
    [T('vessels', 'vaisseaux'), 10, 350],
  ];
  bands.forEach(([label, a, b], i) => {
    const yy = PB + 40 + i * 19;
    svg('rect', { x: x(Math.log10(a)), y: yy, width: x(Math.log10(b)) - x(Math.log10(a)), height: 8, rx: 4, class: 'pw-band' }, s);
    const right = x(Math.log10(b)) > W - 110;
    const t = svg('text', { x: right ? x(Math.log10(a)) - 6 : x(Math.log10(b)) + 6, y: yy + 7.5, class: 'pw-lbl', 'text-anchor': right ? 'end' : 'start' }, s);
    t.textContent = label;
  });
  // Crosshair readout
  const box = out.capChart;
  const tip = tooltip(box);
  const hair = svg('line', { y1: TOP, y2: PB, class: 'pw-hair', visibility: 'hidden' }, s);
  const hit = svg('rect', { x: L, y: TOP, width: W - L - R, height: PB - TOP, class: 'pw-hitarea' }, s);
  hit.addEventListener('pointermove', (ev) => {
    const rc = s.getBoundingClientRect(), k = rc.width / W;
    const px = (ev.clientX - rc.left) / k;
    const l = lx0 + ((px - L) / (W - L - R)) * (lx1 - lx0);
    const rr = 10 ** l, hh = jurinHeight(rr * 1e-6, { tC, thetaDeg: th });
    hair.setAttribute('x1', px); hair.setAttribute('x2', px); hair.setAttribute('visibility', 'visible');
    const hText = hh >= 1000 ? `${f(hh / 1000, 2)} km` : hh >= 1 ? `${f(hh, 2)} m` : `${f(hh * 100, 1)} cm`;
    tip.show(px * k, Math.max(TOP, y(Math.min(ly1, Math.max(ly0, Math.log10(hh))))) * k, hText, `r = ${f(sig(rr), 3)} µm`);
  });
  hit.addEventListener('pointerleave', () => { hair.setAttribute('visibility', 'hidden'); tip.hide(); });
  box.querySelector('svg')?.remove();
  box.prepend(s);
}

// ---------------------------------------------------------------- tab interface
const SECTIONS = ['potential', 'compartments', 'path', 'capillarity', 'cohesion-tension', 'soil'];
function reveal(sub, smooth) {
  const el = SECTIONS.includes(sub) ? document.getElementById(sub) : null;
  if (el) revealAnchor(el, { smooth });
}
/** Build the tab into its panel; sub is a section id from the route. */
export function mount(panel, sub) {
  build(panel);
  if (sub) requestAnimationFrame(() => reveal(sub, false));
}
/** The route changed inside the tab. */
export function show(sub) {
  if (sub) reveal(sub, true);
  else scrollTo({ top: 0 });
}
