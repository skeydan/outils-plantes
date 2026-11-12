// Cross-tab species links.
//
// The taxonomy tab names accepted species; the germination, cuttings
// (bouturage) and breeding (seeds) tabs use their own entry ids, which are not
// always the same: a synonym can be the accepted name there (Prunus amygdalus
// for Prunus dulcis), an aggregate can stand for a species (Rubus fruticosus
// agg.), or an infraspecific taxon can hold the cultivars (Actinidia chinensis
// var. deliciosa). This small manifest is the single place where the two id
// spaces are matched, so no tab has to import another tab's heavy data.
//
// Keys are ids from site/taxonomy/js/taxa.js; values map a tab name to the id
// to use in that tab. Tabs without an entry for a species simply have no link.
export const SPECIES_LINKS = {
  'acacia-baileyana': { germination: 'acacia-baileyana' },
  'actinidia-arguta': { seeds: 'actinidia-arguta' },
  'actinidia-chinensis': { seeds: 'actinidia-chinensis' },
  'actinidia-deliciosa': {
    seeds: 'actinidia-chinensis-var-deliciosa',
    germination: 'actinidia-deliciosa',
    bouturage: 'actinidia-deliciosa',
  },
  'citrus-sinensis': { germination: 'citrus-sinensis', bouturage: 'citrus-sinensis' },
  'eucalyptus-deglupta': {
    seeds: 'eucalyptus-deglupta',
    germination: 'eucalyptus-deglupta',
    bouturage: 'eucalyptus-deglupta',
  },
  'hippophae-rhamnoides': {
    seeds: 'hippophae-rhamnoides',
    germination: 'hippophae-rhamnoides',
    bouturage: 'hippophae-rhamnoides',
  },
  'hippophae-sinensis': { seeds: 'hippophae-sinensis' },
  'nyctanthes-arbor-tristis': { germination: 'nyctanthes-arbor-tristis' },
  'olea-europaea': { germination: 'olea-europaea', bouturage: 'olea-europaea' },
  'pinus-sylvestris': { germination: 'pinus-sylvestris', bouturage: 'pinus-sylvestris' },
  'pistacia-terebinthus': { germination: 'pistacia-terebinthus', bouturage: 'pistacia-terebinthus' },
  'poncirus-trifoliata': { germination: 'poncirus-trifoliata', bouturage: 'poncirus-trifoliata' },
  'prunus-cerasifera': {
    seeds: 'prunus-cerasifera',
    germination: 'prunus-cerasifera',
    bouturage: 'prunus-cerasifera',
  },
  'prunus-dulcis': { seeds: 'prunus-amygdalus' },
  'prunus-domestica': { seeds: 'prunus-domestica' },
  'prunus-insititia': { seeds: 'prunus-insititia' },
  'prunus-salicina': { seeds: 'prunus-salicina' },
  'prunus-spinosa': { seeds: 'prunus-spinosa' },
  'prunus-webbii': { seeds: 'prunus-webbii' },
  'ribes-rubrum': { seeds: 'ribes-rubrum', germination: 'ribes-rubrum', bouturage: 'ribes-rubrum' },
  'ribes-uva-crispa': {
    seeds: 'ribes-uva-crispa',
    germination: 'ribes-uva-crispa',
    bouturage: 'ribes-uva-crispa',
  },
  'rubus-fruticosus': {
    seeds: 'rubus-fruticosus-agg',
    germination: 'rubus-fruticosus',
    bouturage: 'rubus-fruticosus',
  },
  'rubus-idaeus': { seeds: 'rubus-idaeus', germination: 'rubus-idaeus', bouturage: 'rubus-idaeus' },
  'schisandra-chinensis': { germination: 'schisandra-chinensis' },
  'selenicereus-costaricensis': { seeds: 'selenicereus-costaricensis' },
  'selenicereus-megalanthus': { seeds: 'selenicereus-megalanthus' },
  'selenicereus-monacanthus': { seeds: 'selenicereus-monacanthus' },
  'selenicereus-undatus': {
    seeds: 'selenicereus-undatus',
    germination: 'selenicereus-undatus',
    bouturage: 'selenicereus-undatus',
  },
};

/** The tab ids that correspond to a taxonomy species id. */
export const tabIds = (taxId) => SPECIES_LINKS[taxId] ?? {};

/** The taxonomy species id that corresponds to an entry of `tab`, or null. */
export function taxonomyId(tab, tabId) {
  for (const [taxId, map] of Object.entries(SPECIES_LINKS)) {
    if (map[tab] === tabId) return taxId;
  }
  return null;
}

/** The species ids of one tab, in manifest order. */
export const idsInTab = (tab) => Object.keys(SPECIES_LINKS).filter((taxId) => SPECIES_LINKS[taxId][tab]);
