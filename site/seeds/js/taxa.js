// Taxa of the breeding-systems tree, families in alphabetical order. Each text
// block {en, fr, src} is written in our own words from the cited sources;
// src items point at the exact page ({k: source id, url, loc}).
export const TAXA = [
 {
  "id": "actinidiaceae",
  "parent": null,
  "rank": "family",
  "name": "Actinidiaceae",
  "author": "Gilg & Werderm.",
  "common": {
   "fr": [
    "actinidiacées"
   ],
   "en": [
    "kiwifruit family"
   ],
   "de": [
    "Strahlengriffelgewächse"
   ]
  },
  "synonyms": [],
  "names_src": [
   {
    "k": "wfo",
    "url": "https://list.worldfloraonline.org/wfo-7000000006",
    "loc": "accepted family; placement Angiosperms > Ericales > Actinidiaceae"
   },
   {
    "k": "tropic-wcvp-gbif",
    "url": "https://www.gbif.org/species/340002154",
    "loc": "WCVP record, status ACCEPTED"
   },
   {
    "k": "tropic-apweb",
    "url": "http://www.mobot.org/MOBOT/research/APweb/orders/ericalesweb.htm",
    "loc": "Ericales page, Actinidiaceae section"
   }
  ],
  "taxonomy": {
   "en": "Family of the order Ericales. Its best-known genus is Actinidia (kiwifruit).",
   "fr": "Famille de l'ordre des Ericales. Son genre le plus connu est Actinidia (kiwi).",
   "src": [
    {
     "k": "wfo",
     "url": "https://list.worldfloraonline.org/wfo-7000000006",
     "loc": "placement"
    },
    {
     "k": "tropic-apweb",
     "url": "http://www.mobot.org/MOBOT/research/APweb/orders/ericalesweb.htm",
     "loc": "Actinidiaceae section"
    }
   ]
  }
 },
 {
  "id": "actinidia",
  "parent": "actinidiaceae",
  "rank": "genus",
  "name": "Actinidia",
  "author": "Lindl.",
  "common": {
   "fr": [
    "kiwi",
    "actinidia"
   ],
   "en": [
    "kiwifruit",
    "kiwi vine"
   ],
   "de": [
    "Strahlengriffel",
    "Kiwi"
   ]
  },
  "synonyms": [
   "Kalomikta Regel",
   "Trochostigma Siebold & Zucc."
  ],
  "names_src": [
   {
    "k": "powo",
    "url": "https://powo.science.kew.org/taxon/urn:lsid:ipni.org:names:38999-1",
    "loc": "URL given in the WCVP record on GBIF; the POWO page itself could not be opened (HTTP 403, Cloudflare challenge)"
   },
   {
    "k": "tropic-wcvp-gbif",
    "url": "https://www.gbif.org/species/206462990",
    "loc": "WCVP record: Actinidia Lindl., ACCEPTED, Intr. Nat. Syst. Bot., ed. 2: 439 (1836)"
   },
   {
    "k": "wfo",
    "url": "https://list.worldfloraonline.org/wfo-4000000499",
    "loc": "accepted genus; synonyms Kalomikta, Trochostigma"
   }
  ],
  "mating": {
   "system": "allogamous",
   "flags": [
    "dioecious",
    "insect-pollinated"
   ],
   "en": "All Actinidia species are described as dioecious: male vines make viable pollen but no working ovary, while female flowers look perfect but shed shrivelled, non-viable pollen. Sex is set by an XY system that works whatever the ploidy level.",
   "fr": "Toutes les espèces d'Actinidia sont décrites comme dioïques : les pieds mâles produisent un pollen viable sans ovaire fonctionnel, et les fleurs femelles semblent complètes mais libèrent un pollen ratatiné et stérile. Le sexe dépend d'un système XY, quel que soit le niveau de ploïdie.",
   "src": [
    {
     "k": "tropic-ferguson-1999",
     "url": "https://hort.purdue.edu/newcrop/proceedings1999/v4-342.html",
     "loc": "section 'The genus Actinidia'"
    },
    {
     "k": "tropic-yue-2023-pbj",
     "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/PMC10826980/fullTextXML",
     "loc": "first paragraph"
    },
    {
     "k": "tropic-mertten-2025-molbreed",
     "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/PMC11889281/fullTextXML",
     "loc": "Introduction, first paragraph"
    }
   ]
  },
  "interspecific": [
   {
    "with": "Actinidia arguta × Actinidia melanandra",
    "en": "Plant & Food Research (New Zealand) runs crosses between tetraploid A. arguta and A. melanandra in its kiwiberry breeding; the two species are genetically very close.",
    "fr": "Plant & Food Research (Nouvelle-Zélande) croise A. arguta tétraploïde avec A. melanandra dans son programme de kiwaï ; les deux espèces sont génétiquement très proches.",
    "src": [
     {
      "k": "tropic-mertten-2025-molbreed",
      "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/PMC11889281/fullTextXML",
      "loc": "Materials (plant material) and Discussion"
     }
    ]
   },
   {
    "with": "Actinidia chinensis × Actinidia eriantha",
    "en": "The Chinese cultivar 'Jinyan' comes from a cross between A. chinensis and A. eriantha. Hybrids with A. arguta, A. kolomikta, A. melanandra and A. chrysantha have also been used to bring in other traits.",
    "fr": "Le cultivar chinois 'Jinyan' est issu d'un croisement A. chinensis × A. eriantha. Des hybrides avec A. arguta, A. kolomikta, A. melanandra et A. chrysantha ont aussi servi à introduire d'autres caractères.",
    "src": [
     {
      "k": "tropic-nazir-2024-plants",
      "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/PMC11313697/fullTextXML",
      "loc": "section 4.5 Interspecific Hybridization"
     }
    ]
   },
   {
    "with": "general rule (ploidy)",
    "en": "Crosses between species with the same ploidy work better than crosses between different ploidy levels. When ploidy differs, crosses work better if the female parent has the lower ploidy. Large differences in flower size can also block crosses.",
    "fr": "Les croisements entre espèces de même ploïdie réussissent mieux. Quand la ploïdie diffère, mieux vaut que la mère ait la ploïdie la plus faible. Une grande différence de taille des fleurs peut aussi bloquer le croisement.",
    "src": [
     {
      "k": "tropic-mertten-2025-molbreed",
      "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/PMC11889281/fullTextXML",
      "loc": "Introduction, paragraph on inter-specific hybridisation"
     }
    ],
    "with_fr": "règle générale (ploïdie)"
   }
  ],
  "true_to_type": {
   "value": "no",
   "en": "Kiwifruit vines are very heterozygous and dioecious, so seedlings differ from their parents. About half of seedlings are male, and you only know which once they flower.",
   "fr": "Les kiwis sont très hétérozygotes et dioïques : les semis diffèrent de leurs parents. Environ la moitié sont mâles, et on ne le sait qu'à la floraison.",
   "src": [
    {
     "k": "tropic-nazir-2024-plants",
     "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/PMC11313697/fullTextXML",
     "loc": "section on synthetic directed evolution: 'dioecious perennial vines with high genetic heterozygosity and long juvenile phases'"
    },
    {
     "k": "tropic-mertten-2024-molbreed",
     "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/PMC11091038/fullTextXML",
     "loc": "Results: 822 female and 883 male seedlings"
    }
   ]
  },
  "propagation": {
   "en": "Cultivars are cloned, because seed does not reproduce them. Hardwood cuttings are easy. Grafting onto clonal or seedling rootstocks is also common.",
   "fr": "Les cultivars sont clonés, car la graine ne les reproduit pas. Le bouturage en bois sec est facile. On greffe aussi couramment sur porte-greffe clonal ou issu de semis.",
   "src": [
    {
     "k": "tropic-osu-pnw507",
     "url": "https://extension.oregonstate.edu/catalog/pub/pnw507",
     "loc": "Kiwifruit cultivars; Planting"
    },
    {
     "k": "tropic-rowan-2021-metabolites",
     "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/PMC8468816/fullTextXML",
     "loc": "Introduction"
    }
   ]
  }
 },
 {
  "id": "actinidia-chinensis",
  "parent": "actinidia",
  "rank": "species",
  "name": "Actinidia chinensis",
  "author": "Planch.",
  "common": {
   "fr": [
    "kiwi",
    "kiwi jaune",
    "groseille de Chine"
   ],
   "en": [
    "kiwifruit",
    "Chinese gooseberry",
    "gold kiwifruit"
   ],
   "de": [
    "Kiwi",
    "Chinesischer Strahlengriffel"
   ]
  },
  "synonyms": [],
  "names_src": [
   {
    "k": "powo",
    "url": "https://powo.science.kew.org/taxon/urn:lsid:ipni.org:names:828396-1",
    "loc": "URL from WCVP record on GBIF; page not opened (HTTP 403)"
   },
   {
    "k": "tropic-wcvp-gbif",
    "url": "https://www.gbif.org/species/206463219",
    "loc": "WCVP: Actinidia chinensis Planch., ACCEPTED, London J. Bot. 6: 303 (1847); 3 accepted varieties"
   },
   {
    "k": "wfo",
    "url": "https://list.worldfloraonline.org/wfo-0000519189",
    "loc": "accepted; parts: var. chinensis, var. deliciosa, var. setosa"
   }
  ],
  "taxonomy": {
   "en": "WFO and WCVP (the data behind POWO) agree: green kiwifruit is a variety, A. chinensis var. deliciosa, and 'Actinidia deliciosa' is a synonym. Many growers' guides still call it a species, A. deliciosa, as Liang & Ferguson did in 1984. Ferguson (1999) says the two were treated as one species until about 15 years earlier.",
   "fr": "WFO et WCVP (les données derrière POWO) sont d'accord : le kiwi vert est une variété, A. chinensis var. deliciosa, et « Actinidia deliciosa » est un synonyme. Beaucoup de guides de culture en font encore une espèce, A. deliciosa, comme Liang & Ferguson en 1984. Ferguson (1999) note que les deux formaient une seule espèce jusqu'à une quinzaine d'années plus tôt.",
   "src": [
    {
     "k": "wfo",
     "url": "https://list.worldfloraonline.org/wfo-0000519210",
     "loc": "Actinidia deliciosa: role synonym, accepted name A. chinensis var. deliciosa"
    },
    {
     "k": "tropic-wcvp-gbif",
     "url": "https://www.gbif.org/species/206463267",
     "loc": "A. deliciosa (A.Chev.) C.F.Liang & A.R.Ferguson, Guihaia 4: 181 (1984): SYNONYM"
    },
    {
     "k": "tropic-osu-pnw507",
     "url": "https://extension.oregonstate.edu/catalog/pub/pnw507",
     "loc": "Kiwifruit cultivars (uses 'Actinidia deliciosa')"
    },
    {
     "k": "tropic-ferguson-1999",
     "url": "https://hort.purdue.edu/newcrop/proceedings1999/v4-342.html",
     "loc": "section 'Actinidia chinensis Planch.'"
    }
   ]
  },
  "ploidy": {
   "en": "Basic number x = 29. Var. chinensis is diploid (2n = 2x = 58) or tetraploid (2n = 4x = 116); var. deliciosa ('Hayward') is hexaploid (2n = 6x = 174).",
   "fr": "Nombre de base x = 29. La var. chinensis est diploïde (2n = 2x = 58) ou tétraploïde (2n = 4x = 116) ; la var. deliciosa ('Hayward') est hexaploïde (2n = 6x = 174).",
   "src": [
    {
     "k": "tropic-popowski-2021-g3",
     "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/PMC8495948/fullTextXML",
     "loc": "Abstract"
    }
   ]
  },
  "mating": {
   "system": "allogamous",
   "flags": [
    "dioecious",
    "insect-pollinated"
   ],
   "en": "Male and female flowers are on separate plants, and neither sex makes nectar. Female flowers carry anthers with non-functional 'pseudopollen'. Honey bees are the main pollinators in New Zealand and France.",
   "fr": "Fleurs mâles et femelles sont sur des pieds séparés, et aucune ne produit de nectar. Les fleurs femelles portent des anthères à « pseudo-pollen » stérile. L'abeille domestique est le pollinisateur principal en Nouvelle-Zélande et en France.",
   "src": [
    {
     "k": "tropic-broussard-2022-peerj",
     "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/PMC9188772/fullTextXML",
     "loc": "Introduction, paragraphs 3–5"
    }
   ]
  },
  "interspecific": [
   {
    "with": "between var. chinensis and var. deliciosa (interploid)",
    "en": "On diploid 'Hort16A', pollen from tetraploid A. chinensis or hexaploid A. deliciosa males gave heavier fruit than pollen from a diploid male, but fewer well-formed seeds.",
    "fr": "Sur 'Hort16A' diploïde, le pollen de mâles A. chinensis tétraploïdes ou A. deliciosa hexaploïdes a donné des fruits plus lourds qu'un mâle diploïde, mais moins de graines bien formées.",
    "src": [
     {
      "k": "tropic-seal-2013-nzjchs",
      "url": "https://api.crossref.org/works/10.1080/01140671.2013.803130",
      "loc": "abstract"
     }
    ],
    "with_fr": "entre var. chinensis et var. deliciosa (ploïdies différentes)"
   }
  ],
  "isolation": {
   "en": "Seed set falls as distance from male vines grows. In 'Hort16A', the share of male pollen carried by bees fell by 0.8%/m from the staminate vines and seed number by 0.75%/m.",
   "fr": "La mise à graines baisse quand on s'éloigne des pieds mâles. Chez 'Hort16A', la part de pollen mâle portée par les abeilles baissait de 0,8 %/m depuis les pieds mâles, et le nombre de graines de 0,75 %/m.",
   "src": [
    {
     "k": "tropic-goodwin-2013-nzjb",
     "url": "https://api.crossref.org/works/10.1080/0028825X.2013.806934",
     "loc": "abstract"
    },
    {
     "k": "tropic-broussard-2022-peerj",
     "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/PMC9188772/fullTextXML",
     "loc": "Introduction (seed set declines with distance from male vines)"
    }
   ]
  },
  "true_to_type": {
   "value": "no",
   "en": "Like all Actinidia, it is dioecious and outcrossed: seed gives new, variable genotypes, about half of them male.",
   "fr": "Comme tous les Actinidia, il est dioïque et allogame : la graine donne des génotypes nouveaux et variables, dont environ la moitié de mâles.",
   "src": [
    {
     "k": "tropic-ferguson-1999",
     "url": "https://hort.purdue.edu/newcrop/proceedings1999/v4-342.html",
     "loc": "section 'Origin of present kiwifruit cultivars'"
    }
   ]
  }
 },
 {
  "id": "actinidia-chinensis-var-chinensis",
  "parent": "actinidia-chinensis",
  "rank": "varietas",
  "name": "Actinidia chinensis var. chinensis",
  "author": "",
  "common": {
   "fr": [
    "kiwi jaune",
    "kiwi doré"
   ],
   "en": [
    "gold kiwifruit",
    "yellow-fleshed kiwifruit"
   ],
   "de": [
    "Gelbe Kiwi"
   ]
  },
  "synonyms": [
   "Actinidia chinensis f. jinggangshanensis C.F.Liang",
   "Actinidia chinensis f. rufopulpa C.F.Liang & R.H.Huang"
  ],
  "names_src": [
   {
    "k": "powo",
    "url": "https://powo.science.kew.org/taxon/urn:lsid:ipni.org:names:77227045-1",
    "loc": "URL from WCVP record on GBIF; page not opened (HTTP 403)"
   },
   {
    "k": "tropic-wcvp-gbif",
    "url": "https://www.gbif.org/species/206463222",
    "loc": "WCVP: var. chinensis ACCEPTED; f. jinggangshanensis and f. rufopulpa listed as synonyms"
   },
   {
    "k": "wfo",
    "url": "https://list.worldfloraonline.org/wfo-0001219100",
    "loc": "accepted variety"
   }
  ],
  "ploidy": {
   "en": "Diploid (2n = 2x = 58) or tetraploid (2n = 4x = 116). 'Hort16A' is diploid and 'Zesy002' is tetraploid.",
   "fr": "Diploïde (2n = 2x = 58) ou tétraploïde (2n = 4x = 116). 'Hort16A' est diploïde, 'Zesy002' tétraploïde.",
   "src": [
    {
     "k": "tropic-popowski-2021-g3",
     "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/PMC8495948/fullTextXML",
     "loc": "Abstract"
    },
    {
     "k": "tropic-broussard-2021-nzjchs",
     "url": "https://api.crossref.org/works/10.1080/01140671.2020.1861032",
     "loc": "abstract"
    },
    {
     "k": "tropic-ferguson-1999",
     "url": "https://hort.purdue.edu/newcrop/proceedings1999/v4-342.html",
     "loc": "section 'Actinidia chinensis Planch.'"
    }
   ]
  },
  "varieties": {
   "en": "A male of the same ploidy must flower at the same time. Diploid 'Hort16A' flowers about a month before 'Hayward', so diploid A. chinensis males ('Meteor', 'Sparkler') were selected to pollinate it. For tetraploid 'Zesy002', breeders tested both var. chinensis and var. deliciosa males.",
   "fr": "Il faut un mâle de même ploïdie qui fleurit au même moment. 'Hort16A' (diploïde) fleurit environ un mois avant 'Hayward' : on a donc sélectionné des mâles A. chinensis diploïdes ('Meteor', 'Sparkler'). Pour 'Zesy002' (tétraploïde), les sélectionneurs ont testé des mâles var. chinensis et var. deliciosa.",
   "src": [
    {
     "k": "tropic-ferguson-1999",
     "url": "https://hort.purdue.edu/newcrop/proceedings1999/v4-342.html",
     "loc": "section 'Actinidia chinensis Planch.'"
    },
    {
     "k": "tropic-seal-2017-nzjchs",
     "url": "https://api.crossref.org/works/10.1080/01140671.2017.1365732",
     "loc": "abstract"
    }
   ]
  }
 },
 {
  "id": "actinidia-chinensis-var-chinensis-hort16a",
  "parent": "actinidia-chinensis-var-chinensis",
  "rank": "cultivar",
  "name": "Actinidia chinensis var. chinensis 'Hort16A'",
  "author": "",
  "common": {
   "fr": [],
   "en": [
    "ZESPRI GOLD kiwifruit"
   ],
   "de": []
  },
  "synonyms": [],
  "names_src": [
   {
    "k": "tropic-ferguson-1999",
    "url": "https://hort.purdue.edu/newcrop/proceedings1999/v4-342.html",
    "loc": "section 'Actinidia chinensis Planch.'"
   }
  ],
  "ploidy": {
   "en": "Diploid.",
   "fr": "Diploïde.",
   "src": [
    {
     "k": "tropic-seal-2013-nzjchs",
     "url": "https://api.crossref.org/works/10.1080/01140671.2013.803130",
     "loc": "title and abstract"
    }
   ]
  },
  "isolation": {
   "en": "In New Zealand trials, flowers open only to wind for 5 days still made fruit with an average of 110 seeds, but keeping honey bees out cut fruit set and seed number. One bee visit gave on average 51–61.7 seeds.",
   "fr": "En essais néo-zélandais, des fleurs exposées au seul vent pendant 5 jours ont donné des fruits à 110 graines en moyenne, mais exclure les abeilles réduisait la nouaison et le nombre de graines. Une seule visite d'abeille donnait en moyenne 51–61,7 graines.",
   "src": [
    {
     "k": "tropic-goodwin-2013-nzjb",
     "url": "https://api.crossref.org/works/10.1080/0028825X.2013.806934",
     "loc": "abstract"
    }
   ]
  },
  "cultivar": {
   "self": "female",
   "pollinizers": [
    "actinidia-chinensis-var-chinensis-meteor",
    "actinidia-chinensis-var-chinensis-sparkler"
   ],
   "incompatible_with": [],
   "group": "early flowering: almost a month before 'Hayward'",
   "origin": {
    "en": "From a 1987 cross between two A. chinensis accessions in New Zealand; the seedling was picked out in 1991. Marketed as ZESPRI GOLD.",
    "fr": "Issu d'un croisement de 1987 entre deux accessions d'A. chinensis en Nouvelle-Zélande ; semis repéré en 1991. Vendu sous le nom ZESPRI GOLD."
   },
   "src": [
    {
     "k": "tropic-ferguson-1999",
     "url": "https://hort.purdue.edu/newcrop/proceedings1999/v4-342.html",
     "loc": "section 'Actinidia chinensis Planch.'"
    },
    {
     "k": "tropic-goodwin-2013-nzjb",
     "url": "https://api.crossref.org/works/10.1080/0028825X.2013.806934",
     "loc": "abstract (pistillate flowers; staminate 'Sparkler' and 'Meteor')"
    }
   ]
  }
 },
 {
  "id": "actinidia-chinensis-var-chinensis-meteor",
  "parent": "actinidia-chinensis-var-chinensis",
  "rank": "cultivar",
  "name": "Actinidia chinensis var. chinensis 'Meteor'",
  "author": "",
  "common": {
   "fr": [],
   "en": [],
   "de": []
  },
  "synonyms": [],
  "names_src": [
   {
    "k": "tropic-ferguson-1999",
    "url": "https://hort.purdue.edu/newcrop/proceedings1999/v4-342.html",
    "loc": "section 'Actinidia chinensis Planch.'"
   }
  ],
  "cultivar": {
   "self": "male",
   "pollinizers": [],
   "incompatible_with": [],
   "group": "diploid male selected to match 'Hort16A' flowering",
   "origin": {
    "en": "One of the first two diploid A. chinensis males registered in New Zealand as pollinizers for 'Hort16A'.",
    "fr": "L'un des deux premiers mâles diploïdes d'A. chinensis enregistrés en Nouvelle-Zélande comme pollinisateurs de 'Hort16A'."
   },
   "src": [
    {
     "k": "tropic-ferguson-1999",
     "url": "https://hort.purdue.edu/newcrop/proceedings1999/v4-342.html",
     "loc": "section 'Actinidia chinensis Planch.'"
    },
    {
     "k": "tropic-goodwin-2013-nzjb",
     "url": "https://api.crossref.org/works/10.1080/0028825X.2013.806934",
     "loc": "abstract"
    }
   ]
  }
 },
 {
  "id": "actinidia-chinensis-var-chinensis-sparkler",
  "parent": "actinidia-chinensis-var-chinensis",
  "rank": "cultivar",
  "name": "Actinidia chinensis var. chinensis 'Sparkler'",
  "author": "",
  "common": {
   "fr": [],
   "en": [],
   "de": []
  },
  "synonyms": [],
  "names_src": [
   {
    "k": "tropic-ferguson-1999",
    "url": "https://hort.purdue.edu/newcrop/proceedings1999/v4-342.html",
    "loc": "section 'Actinidia chinensis Planch.'"
   }
  ],
  "cultivar": {
   "self": "male",
   "pollinizers": [],
   "incompatible_with": [],
   "group": "diploid male selected to match 'Hort16A' flowering",
   "origin": {
    "en": "The second of the two diploid A. chinensis males registered as pollinizers for 'Hort16A'.",
    "fr": "Le second des deux mâles diploïdes d'A. chinensis enregistrés comme pollinisateurs de 'Hort16A'."
   },
   "src": [
    {
     "k": "tropic-ferguson-1999",
     "url": "https://hort.purdue.edu/newcrop/proceedings1999/v4-342.html",
     "loc": "section 'Actinidia chinensis Planch.'"
    },
    {
     "k": "tropic-goodwin-2013-nzjb",
     "url": "https://api.crossref.org/works/10.1080/0028825X.2013.806934",
     "loc": "abstract"
    }
   ]
  }
 },
 {
  "id": "actinidia-chinensis-var-chinensis-zesy002",
  "parent": "actinidia-chinensis-var-chinensis",
  "rank": "cultivar",
  "name": "Actinidia chinensis var. chinensis 'Zesy002'",
  "author": "",
  "common": {
   "fr": [
    "kiwi SunGold"
   ],
   "en": [
    "Gold3",
    "Zespri SunGold Kiwifruit"
   ],
   "de": []
  },
  "synonyms": [
   "Gold3"
  ],
  "names_src": [
   {
    "k": "tropic-seal-2017-nzjchs",
    "url": "https://api.crossref.org/works/10.1080/01140671.2017.1365732",
    "loc": "abstract"
   }
  ],
  "ploidy": {
   "en": "Tetraploid.",
   "fr": "Tétraploïde.",
   "src": [
    {
     "k": "tropic-broussard-2021-nzjchs",
     "url": "https://api.crossref.org/works/10.1080/01140671.2020.1861032",
     "loc": "abstract"
    }
   ]
  },
  "propagation": {
   "en": "In a New Zealand orchard study, the vines were grafted onto 'Bruno' rootstock, either directly or with a 'Hort16A' inter-scion.",
   "fr": "Dans un verger néo-zélandais étudié, les pieds étaient greffés sur porte-greffe 'Bruno', directement ou avec un intermédiaire 'Hort16A'.",
   "src": [
    {
     "k": "tropic-rowan-2021-metabolites",
     "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/PMC8468816/fullTextXML",
     "loc": "sections 2.2 and 4 (plant material)"
    }
   ]
  },
  "cultivar": {
   "self": "female",
   "pollinizers": [
    "M91",
    "M33",
    "M43"
   ],
   "incompatible_with": [],
   "group": "",
   "origin": {
    "en": "Gold-fleshed cultivar sold as Zespri SunGold. It needs fewer pollen grains than 'Hayward' for full seed set. In hand-pollination tests, fruit from male M43 weighed less than fruit from males M91 and M33, because it had fewer seeds.",
    "fr": "Cultivar à chair jaune vendu sous le nom Zespri SunGold. Il lui faut moins de grains de pollen que 'Hayward' pour une mise à graines complète. En pollinisation manuelle, les fruits obtenus avec le mâle M43 pesaient moins qu'avec M91 et M33, faute de graines."
   },
   "src": [
    {
     "k": "tropic-seal-2017-nzjchs",
     "url": "https://api.crossref.org/works/10.1080/01140671.2017.1365732",
     "loc": "abstract"
    },
    {
     "k": "tropic-broussard-2021-nzjchs",
     "url": "https://api.crossref.org/works/10.1080/01140671.2020.1861032",
     "loc": "abstract"
    }
   ]
  }
 },
 {
  "id": "actinidia-chinensis-var-deliciosa",
  "parent": "actinidia-chinensis",
  "rank": "varietas",
  "name": "Actinidia chinensis var. deliciosa",
  "author": "(A.Chev.) A.Chev.",
  "common": {
   "fr": [
    "kiwi",
    "kiwi vert"
   ],
   "en": [
    "kiwifruit",
    "green kiwifruit",
    "fuzzy kiwifruit"
   ],
   "de": [
    "Kiwi"
   ]
  },
  "synonyms": [
   "Actinidia deliciosa (A.Chev.) C.F.Liang & A.R.Ferguson",
   "Actinidia latifolia var. deliciosa A.Chev.",
   "Actinidia chinensis var. hispida C.F.Liang"
  ],
  "names_src": [
   {
    "k": "powo",
    "url": "https://powo.science.kew.org/taxon/urn:lsid:ipni.org:names:60458895-2",
    "loc": "URL from WCVP record on GBIF; page not opened (HTTP 403)"
   },
   {
    "k": "tropic-wcvp-gbif",
    "url": "https://www.gbif.org/species/206463252",
    "loc": "WCVP: var. deliciosa ACCEPTED, Rev. Bot. Appl. Agric. Trop. 21: 241 (1941)"
   },
   {
    "k": "wfo",
    "url": "https://list.worldfloraonline.org/wfo-0000737917",
    "loc": "accepted variety; synonyms include A. deliciosa"
   }
  ],
  "taxonomy": {
   "en": "Most growing guides (e.g. Oregon State 2021) still call it Actinidia deliciosa. WFO and WCVP both treat that name as a synonym of A. chinensis var. deliciosa, so the two sources do not disagree with each other, only with common usage.",
   "fr": "La plupart des guides de culture (p. ex. Oregon State 2021) l'appellent encore Actinidia deliciosa. WFO et WCVP traitent tous deux ce nom comme synonyme d'A. chinensis var. deliciosa : pas de désaccord entre eux, seulement avec l'usage courant.",
   "src": [
    {
     "k": "wfo",
     "url": "https://list.worldfloraonline.org/wfo-0000519210",
     "loc": "synonym record"
    },
    {
     "k": "tropic-wcvp-gbif",
     "url": "https://www.gbif.org/species/206463267",
     "loc": "synonym record"
    },
    {
     "k": "tropic-osu-pnw507",
     "url": "https://extension.oregonstate.edu/catalog/pub/pnw507",
     "loc": "Kiwifruit cultivars"
    }
   ]
  },
  "ploidy": {
   "en": "Allohexaploid, 2n = 6x = 174. A rare natural diploid plant was found in Sichuan.",
   "fr": "Allohexaploïde, 2n = 6x = 174. Une rare plante diploïde naturelle a été trouvée au Sichuan.",
   "src": [
    {
     "k": "tropic-xia-2023-scidata",
     "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/PMC9929245/fullTextXML",
     "loc": "Abstract; Background"
    },
    {
     "k": "tropic-popowski-2021-g3",
     "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/PMC8495948/fullTextXML",
     "loc": "Abstract"
    }
   ]
  },
  "mating": {
   "system": "allogamous",
   "flags": [
    "dioecious",
    "insect-pollinated"
   ],
   "en": "Pollinated mainly by insects, with wind playing a minor role; honey bees are the main managed pollinator. Flowers have no nectar and do not attract bees much. Male flowers shed viable pollen for only 2–3 days, while female flowers stay receptive for 7–9 days.",
   "fr": "Pollinisation surtout par les insectes, le vent jouant un rôle mineur ; l'abeille domestique est le principal pollinisateur utilisé. Les fleurs n'ont pas de nectar et attirent peu les abeilles. Les fleurs mâles donnent un pollen viable 2–3 jours seulement, les femelles restent réceptives 7–9 jours.",
   "src": [
    {
     "k": "tropic-osu-pnw507",
     "url": "https://extension.oregonstate.edu/catalog/pub/pnw507",
     "loc": "section 'Pollination'"
    }
   ]
  },
  "varieties": {
   "en": "Female cultivars need a male of the same species that flowers at the same time. Males are chosen to match 'Hayward', and because spring weather shifts their timing, each country selects its own males (e.g. 'Autari' in Italy).",
   "fr": "Les cultivars femelles ont besoin d'un mâle de la même espèce qui fleurit en même temps. On choisit les mâles pour 'Hayward', et comme la météo du printemps décale leur floraison, chaque pays sélectionne les siens (p. ex. 'Autari' en Italie).",
   "src": [
    {
     "k": "tropic-ferguson-1999",
     "url": "https://hort.purdue.edu/newcrop/proceedings1999/v4-342.html",
     "loc": "section 'Male (pollenizer) cultivars of A. deliciosa'"
    },
    {
     "k": "tropic-osu-pnw507",
     "url": "https://extension.oregonstate.edu/catalog/pub/pnw507",
     "loc": "'Hayward', Male"
    }
   ]
  },
  "isolation": {
   "en": "Usually one male for every 6 to 10 females; Oregon recommends 1 male to 8 females, with male rows running across the female rows. On T-bar trellises, put males in every row, because bees seem to work along rows rather than across them. Use about 3–4 hives per acre, brought in no earlier than 10% bloom of the females.",
   "fr": "En général un mâle pour 6 à 10 femelles ; l'Oregon conseille 1 mâle pour 8 femelles, les lignes de mâles coupant les rangs de femelles. Sur palissage en T, mettez des mâles dans chaque rang, car les abeilles semblent suivre les rangs plutôt que les traverser. Comptez 3–4 ruches par acre, installées pas avant 10 % de floraison des femelles.",
   "src": [
    {
     "k": "tropic-osu-pnw507",
     "url": "https://extension.oregonstate.edu/catalog/pub/pnw507",
     "loc": "Introduction; 'Planting design'; 'Pollination'"
    }
   ]
  },
  "true_to_type": {
   "value": "no",
   "en": "Seedlings vary. 'Hayward' itself was picked from perhaps only 40 seedlings, and 'Koryoku' (Japan) is an open-pollinated seedling of 'Hayward' that differs from it.",
   "fr": "Les semis varient. 'Hayward' a lui-même été choisi parmi peut-être 40 semis seulement, et 'Koryoku' (Japon) est un semis de 'Hayward' en pollinisation libre, différent de lui.",
   "src": [
    {
     "k": "tropic-ferguson-1999",
     "url": "https://hort.purdue.edu/newcrop/proceedings1999/v4-342.html",
     "loc": "sections ''Hayward'' and 'Other fruiting cultivars of A. deliciosa'"
    }
   ]
  },
  "propagation": {
   "en": "Hardwood cuttings taken in winter. In cold areas, own-rooted vines are advised because frost can kill a grafted vine above the graft union. Grafted plants were already sold in New Zealand in the 1920s.",
   "fr": "Boutures de bois sec prises en hiver. En zone froide, on conseille des pieds francs, car le gel peut tuer une plante greffée au-dessus du point de greffe. On vendait déjà des plants greffés en Nouvelle-Zélande dans les années 1920.",
   "src": [
    {
     "k": "tropic-osu-pnw507",
     "url": "https://extension.oregonstate.edu/catalog/pub/pnw507",
     "loc": "'Planting' (propagation; self-rooted vines)"
    },
    {
     "k": "tropic-ferguson-1999",
     "url": "https://hort.purdue.edu/newcrop/proceedings1999/v4-342.html",
     "loc": "section 'Origin of present kiwifruit cultivars'"
    }
   ]
  }
 },
 {
  "id": "actinidia-chinensis-var-deliciosa-hayward",
  "parent": "actinidia-chinensis-var-deliciosa",
  "rank": "cultivar",
  "name": "Actinidia chinensis var. deliciosa 'Hayward'",
  "author": "",
  "common": {
   "fr": [],
   "en": [],
   "de": []
  },
  "synonyms": [
   "'Chico' (Californian material later found indistinguishable from 'Hayward')"
  ],
  "names_src": [
   {
    "k": "tropic-ferguson-1999",
    "url": "https://hort.purdue.edu/newcrop/proceedings1999/v4-342.html",
    "loc": "section ''Hayward''"
   }
  ],
  "ploidy": {
   "en": "Hexaploid (2n = 6x = 174).",
   "fr": "Hexaploïde (2n = 6x = 174).",
   "src": [
    {
     "k": "tropic-popowski-2021-g3",
     "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/PMC8495948/fullTextXML",
     "loc": "Abstract"
    }
   ]
  },
  "isolation": {
   "en": "A well-pollinated fruit holds 1,000 to 1,400 seeds; poor pollination gives small or grooved fruit.",
   "fr": "Un fruit bien pollinisé contient 1 000 à 1 400 graines ; une mauvaise pollinisation donne des fruits petits ou sillonnés.",
   "src": [
    {
     "k": "tropic-osu-pnw507",
     "url": "https://extension.oregonstate.edu/catalog/pub/pnw507",
     "loc": "'Pollination'; 'Problems'"
    }
   ]
  },
  "cultivar": {
   "self": "female",
   "pollinizers": [
    "actinidia-chinensis-var-deliciosa-tomuri",
    "actinidia-chinensis-var-deliciosa-matua"
   ],
   "incompatible_with": [],
   "group": "",
   "origin": {
    "en": "Selected in New Zealand by Hayward Wright from a few seedlings that go back to a single seed introduction from China in 1904. It became the main kiwifruit in world trade, including Europe.",
    "fr": "Sélectionné en Nouvelle-Zélande par Hayward Wright parmi quelques semis issus d'une seule introduction de graines de Chine en 1904. Il est devenu le kiwi dominant du commerce mondial, Europe comprise."
   },
   "src": [
    {
     "k": "tropic-auburn-powell-1997",
     "url": "https://ssl.acesag.auburn.edu/department/peaches/kiwidormex.html",
     "loc": "Introduction ('Hayward', the leading female commercial cultivar; Matua and Tomuri the most common male pollinators)"
    },
    {
     "k": "tropic-ferguson-1999",
     "url": "https://hort.purdue.edu/newcrop/proceedings1999/v4-342.html",
     "loc": "section ''Hayward''"
    },
    {
     "k": "tropic-nazir-2024-plants",
     "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/PMC11313697/fullTextXML",
     "loc": "Introduction (Hayward Wright)"
    }
   ]
  },
  "synonyms_fr": [
   "'Chico' (matériel californien, reconnu ensuite identique à 'Hayward')"
  ]
 },
 {
  "id": "actinidia-chinensis-var-deliciosa-tomuri",
  "parent": "actinidia-chinensis-var-deliciosa",
  "rank": "cultivar",
  "name": "Actinidia chinensis var. deliciosa 'Tomuri'",
  "author": "",
  "common": {
   "fr": [],
   "en": [],
   "de": []
  },
  "synonyms": [],
  "names_src": [
   {
    "k": "tropic-auburn-powell-1997",
    "url": "https://ssl.acesag.auburn.edu/department/peaches/kiwidormex.html",
    "loc": "Introduction"
   }
  ],
  "cultivar": {
   "self": "male",
   "pollinizers": [],
   "incompatible_with": [],
   "group": "",
   "origin": {
    "en": "Ferguson calls it 'the old pollenizer cultivar' for 'Hayward'; Auburn names it, with 'Matua', as the most common male pollinator.",
    "fr": "Ferguson le qualifie de « vieux cultivar pollinisateur » de 'Hayward' ; Auburn le cite, avec 'Matua', comme le mâle pollinisateur le plus courant."
   },
   "src": [
    {
     "k": "tropic-auburn-powell-1997",
     "url": "https://ssl.acesag.auburn.edu/department/peaches/kiwidormex.html",
     "loc": "Introduction"
    },
    {
     "k": "tropic-ferguson-1999",
     "url": "https://hort.purdue.edu/newcrop/proceedings1999/v4-342.html",
     "loc": "section 'Other fruiting cultivars of A. deliciosa' (Tomua paragraph)"
    }
   ]
  }
 },
 {
  "id": "actinidia-chinensis-var-deliciosa-matua",
  "parent": "actinidia-chinensis-var-deliciosa",
  "rank": "cultivar",
  "name": "Actinidia chinensis var. deliciosa 'Matua'",
  "author": "",
  "common": {
   "fr": [],
   "en": [],
   "de": []
  },
  "synonyms": [],
  "names_src": [
   {
    "k": "tropic-auburn-powell-1997",
    "url": "https://ssl.acesag.auburn.edu/department/peaches/kiwidormex.html",
    "loc": "Introduction"
   }
  ],
  "cultivar": {
   "self": "male",
   "pollinizers": [],
   "incompatible_with": [],
   "group": "",
   "origin": {
    "en": "One of the two most common male pollinators of 'Hayward', according to Auburn University. In Alabama it flowered well enough with only 500 to 600 hours of chilling.",
    "fr": "L'un des deux mâles pollinisateurs les plus courants de 'Hayward' selon l'université d'Auburn. En Alabama, il fleurissait assez avec seulement 500 à 600 heures de froid."
   },
   "src": [
    {
     "k": "tropic-auburn-powell-1997",
     "url": "https://ssl.acesag.auburn.edu/department/peaches/kiwidormex.html",
     "loc": "Introduction"
    }
   ]
  }
 },
 {
  "id": "actinidia-arguta",
  "parent": "actinidia",
  "rank": "species",
  "name": "Actinidia arguta",
  "author": "(Siebold & Zucc.) Planch. ex Miq.",
  "common": {
   "fr": [
    "kiwaï",
    "kiwi de Sibérie",
    "actinidia à fruits glabres"
   ],
   "en": [
    "hardy kiwi",
    "kiwiberry",
    "baby kiwi"
   ],
   "de": [
    "Kiwibeere",
    "Scharfzähniger Strahlengriffel"
   ]
  },
  "synonyms": [
   "Trochostigma argutum Siebold & Zucc.",
   "Actinidia arguta var. cordifolia (Miq.) Bean (= var. arguta)",
   "Actinidia arguta var. purpurea (Rehder) C.F.Liang (WFO: synonym of A. arguta)"
  ],
  "names_src": [
   {
    "k": "powo",
    "url": "https://powo.science.kew.org/taxon/urn:lsid:ipni.org:names:316460-1",
    "loc": "URL from WCVP record on GBIF; page not opened (HTTP 403)"
   },
   {
    "k": "tropic-wcvp-gbif",
    "url": "https://www.gbif.org/species/206463071",
    "loc": "WCVP: A. arguta (Siebold & Zucc.) Planch. ex Miq., ACCEPTED, Ann. Mus. Bot. Lugduno-Batavi 3: 15 (1867)"
   },
   {
    "k": "wfo",
    "url": "https://list.worldfloraonline.org/wfo-0000519157",
    "loc": "accepted as 'Actinidia arguta Miq.'; parts var. arguta, var. giraldii, var. hypoleuca"
   }
  ],
  "taxonomy": {
   "en": "Both sources accept the species, but they cite the author differently: WCVP gives '(Siebold & Zucc.) Planch. ex Miq.', WFO gives just 'Miq.'. 'Ken's Red' is said to come from 'A. arguta var. cordifolia', a name WCVP sinks into var. arguta.",
   "fr": "Les deux sources acceptent l'espèce mais citent l'auteur différemment : WCVP « (Siebold & Zucc.) Planch. ex Miq. », WFO simplement « Miq. ». 'Ken's Red' serait issu d'« A. arguta var. cordifolia », nom que WCVP range dans la var. arguta.",
   "src": [
    {
     "k": "tropic-wcvp-gbif",
     "url": "https://www.gbif.org/species/206463071",
     "loc": "accepted record; var. cordifolia record = synonym of var. arguta"
    },
    {
     "k": "wfo",
     "url": "https://list.worldfloraonline.org/wfo-0000519157",
     "loc": "accepted record"
    },
    {
     "k": "tropic-osu-pnw507",
     "url": "https://extension.oregonstate.edu/catalog/pub/pnw507",
     "loc": "''Ken's Red''"
    }
   ]
  },
  "ploidy": {
   "en": "Diploid, tetraploid, hexaploid and octoploid forms exist. Tetraploids (2n = 4x = 116) are the most common and widespread.",
   "fr": "Il existe des formes diploïdes, tétraploïdes, hexaploïdes et octoploïdes. Les tétraploïdes (2n = 4x = 116) sont les plus courantes et les plus répandues.",
   "src": [
    {
     "k": "tropic-guo-2023-scirep",
     "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/PMC10406875/fullTextXML",
     "loc": "Discussion"
    },
    {
     "k": "tropic-mertten-2025-molbreed",
     "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/PMC11889281/fullTextXML",
     "loc": "Introduction"
    },
    {
     "k": "tropic-mertten-2024-molbreed",
     "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/PMC11091038/fullTextXML",
     "loc": "Materials and methods (2n = 4x = 116)"
    }
   ]
  },
  "mating": {
   "system": "allogamous",
   "flags": [
    "dioecious",
    "insect-pollinated"
   ],
   "en": "Functionally dioecious, with an XX/XY system. Male and female plants look the same until they flower, which takes 5 to 7 years from seed. A few self-fertile garden cultivars exist, such as 'Issai'.",
   "fr": "Fonctionnellement dioïque, avec un système XX/XY. Mâles et femelles se ressemblent jusqu'à la floraison, qui prend 5 à 7 ans depuis le semis. Il existe quelques cultivars de jardin autofertiles, comme 'Issai'.",
   "src": [
    {
     "k": "tropic-guo-2023-scirep",
     "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/PMC10406875/fullTextXML",
     "loc": "Introduction, second paragraph"
    },
    {
     "k": "tropic-osu-pnw507",
     "url": "https://extension.oregonstate.edu/catalog/pub/pnw507",
     "loc": "Introduction; ''Issai' (self-fertile)'"
    }
   ]
  },
  "interspecific": [
   {
    "with": "Actinidia melanandra",
    "en": "Crossed with A. melanandra in New Zealand breeding; 'Ken's Red' is such a hybrid.",
    "fr": "Croisé avec A. melanandra dans la sélection néo-zélandaise ; 'Ken's Red' est un tel hybride.",
    "src": [
     {
      "k": "tropic-mertten-2025-molbreed",
      "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/PMC11889281/fullTextXML",
      "loc": "Abstract; Materials"
     },
     {
      "k": "tropic-osu-pnw507",
      "url": "https://extension.oregonstate.edu/catalog/pub/pnw507",
      "loc": "''Ken's Red''"
     }
    ]
   },
   {
    "with": "Actinidia chinensis var. deliciosa (pollen)",
    "en": "If frost kills the A. arguta males' flowers, female kiwiberries can be hand-pollinated with bought A. deliciosa pollen, which works well. Oregon advises about 10 g per acre per day from about 10% bloom.",
    "fr": "Si le gel détruit la floraison des mâles A. arguta, on peut polliniser les femelles à la main avec du pollen d'A. deliciosa du commerce, qui marche bien. L'Oregon conseille environ 10 g par acre et par jour dès 10 % de floraison.",
    "src": [
     {
      "k": "tropic-osu-pnw507",
      "url": "https://extension.oregonstate.edu/catalog/pub/pnw507",
      "loc": "'Pollination'"
     }
    ],
    "with_fr": "Actinidia chinensis var. deliciosa (comme pollinisateur)"
   },
   {
    "with": "Actinidia kolomikta",
    "en": "Ferguson (1999) says the true Russian 'Ananasnaya' is possibly an A. arguta × A. kolomikta hybrid selected by Michurin. Oregon State says the Russian 'Ananasnaya' is A. kolomikta.",
    "fr": "Selon Ferguson (1999), le vrai 'Ananasnaya' russe serait peut-être un hybride A. arguta × A. kolomikta sélectionné par Mitchourine. Oregon State dit que l''Ananasnaya' russe est un A. kolomikta.",
    "src": [
     {
      "k": "tropic-ferguson-1999",
      "url": "https://hort.purdue.edu/newcrop/proceedings1999/v4-342.html",
      "loc": "section 'Cultivation of other Actinidia species'"
     },
     {
      "k": "tropic-osu-pnw507",
      "url": "https://extension.oregonstate.edu/catalog/pub/pnw507",
      "loc": "''Ananasnaya''"
     }
    ]
   }
  ],
  "varieties": {
   "en": "Female cultivars need A. arguta males that flower at the same time. Oregon advises planting several males, e.g. 'Meader' (early) and 74-52 (long bloom), to stretch the pollen period. Names are often mixed up in nurseries.",
   "fr": "Les cultivars femelles ont besoin de mâles A. arguta qui fleurissent en même temps. L'Oregon conseille plusieurs mâles, p. ex. 'Meader' (précoce) et 74-52 (floraison longue), pour étaler la période de pollen. Les noms sont souvent confondus en pépinière.",
   "src": [
    {
     "k": "tropic-osu-pnw507",
     "url": "https://extension.oregonstate.edu/catalog/pub/pnw507",
     "loc": "Kiwiberries, 'Male'; 'Kiwifruit cultivars'"
    }
   ]
  },
  "isolation": {
   "en": "Same rules as fuzzy kiwifruit: about 1 male per 8 females, planted among them. A well-pollinated 'Ananasnaya' fruit holds up to 240 seeds.",
   "fr": "Mêmes règles que le kiwi : environ 1 mâle pour 8 femelles, plantés parmi elles. Un fruit d''Ananasnaya' bien pollinisé contient jusqu'à 240 graines.",
   "src": [
    {
     "k": "tropic-osu-pnw507",
     "url": "https://extension.oregonstate.edu/catalog/pub/pnw507",
     "loc": "'Planting design'; 'Pollination'"
    }
   ]
  },
  "true_to_type": {
   "value": "no",
   "en": "Seedlings are new genotypes and split roughly half and half between the sexes. In a New Zealand population of 1736 seedlings, 822 turned out female and 883 male, and 31 had not flowered.",
   "fr": "Les semis sont de nouveaux génotypes, environ moitié mâles, moitié femelles. Sur 1736 semis en Nouvelle-Zélande, 822 se sont révélés femelles, 883 mâles, et 31 n'avaient pas fleuri.",
   "src": [
    {
     "k": "tropic-mertten-2024-molbreed",
     "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/PMC11091038/fullTextXML",
     "loc": "Materials (1736 genotypes, 31 did not flower); Results (822 female, 883 male)"
    }
   ]
  },
  "propagation": {
   "en": "Hardwood cuttings in winter, own-rooted. Patented cultivars may not be propagated without a licence.",
   "fr": "Boutures de bois sec en hiver, sur leurs propres racines. Les cultivars brevetés ne peuvent être multipliés sans licence.",
   "src": [
    {
     "k": "tropic-osu-pnw507",
     "url": "https://extension.oregonstate.edu/catalog/pub/pnw507",
     "loc": "'Kiwifruit cultivars'; 'Planting'"
    }
   ]
  },
  "synonyms_fr": [
   "Trochostigma argutum Siebold & Zucc.",
   "Actinidia arguta var. cordifolia (Miq.) Bean (= var. arguta)",
   "Actinidia arguta var. purpurea (Rehder) C.F.Liang (WFO : synonyme d’A. arguta)"
  ]
 },
 {
  "id": "actinidia-arguta-issai",
  "parent": "actinidia-arguta",
  "rank": "cultivar",
  "name": "Actinidia arguta 'Issai'",
  "author": "",
  "common": {
   "fr": [],
   "en": [],
   "de": []
  },
  "synonyms": [],
  "names_src": [
   {
    "k": "tropic-osu-pnw507",
    "url": "https://extension.oregonstate.edu/catalog/pub/pnw507",
    "loc": "''Issai' (self-fertile)'"
   }
  ],
  "taxonomy": {
   "en": "Oregon State lists it as A. arguta, while Latocha (2017) calls it a hybrid; neither names the other parent.",
   "fr": "Oregon State le classe dans A. arguta, Latocha (2017) le dit hybride ; aucun ne nomme l'autre parent.",
   "src": [
    {
     "k": "tropic-osu-pnw507",
     "url": "https://extension.oregonstate.edu/catalog/pub/pnw507",
     "loc": "''Issai''"
    },
    {
     "k": "tropic-latocha-2017",
     "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/PMC5717121/fullTextXML",
     "loc": "section on vitamin C"
    }
   ]
  },
  "cultivar": {
   "self": "self-compatible",
   "pollinizers": [],
   "incompatible_with": [],
   "group": "",
   "origin": {
    "en": "From Japan. It sets fruit alone, but cross-pollination gives larger fruit with seeds. Less vigorous and less hardy (zero to minus 10° F) than other A. arguta, and more sensitive to phytophthora.",
    "fr": "Originaire du Japon. Il fructifie seul, mais la pollinisation croisée donne des fruits plus gros, avec graines. Moins vigoureux et moins rustique (0 à −10 °F) que les autres A. arguta, et plus sensible au phytophthora."
   },
   "src": [
    {
     "k": "tropic-osu-pnw507",
     "url": "https://extension.oregonstate.edu/catalog/pub/pnw507",
     "loc": "''Issai' (self-fertile)'"
    }
   ]
  }
 },
 {
  "id": "actinidia-arguta-ananasnaya",
  "parent": "actinidia-arguta",
  "rank": "cultivar",
  "name": "Actinidia arguta 'Ananasnaya'",
  "author": "",
  "common": {
   "fr": [],
   "en": [],
   "de": []
  },
  "synonyms": [
   "'Anna'",
   "'Anansnaya'"
  ],
  "names_src": [
   {
    "k": "tropic-osu-pnw507",
    "url": "https://extension.oregonstate.edu/catalog/pub/pnw507",
    "loc": "''Ananasnaya''"
   },
   {
    "k": "tropic-ferguson-1999",
    "url": "https://hort.purdue.edu/newcrop/proceedings1999/v4-342.html",
    "loc": "section 'Cultivation of other Actinidia species'"
   }
  ],
  "cultivar": {
   "self": "female",
   "pollinizers": [
    "actinidia-arguta-meader",
    "74-52 (male selection)"
   ],
   "incompatible_with": [],
   "group": "flowering starts mid- to late June (Oregon)",
   "origin": {
    "en": "The most planted kiwiberry in Oregon, sometimes sold as 'Anna'. Its identity is unclear: the Oregon material is A. arguta and Ferguson says it seems not true to label, while the true Russian 'Ananasnaya' may be A. kolomikta or an A. arguta × A. kolomikta hybrid.",
    "fr": "Le kiwaï le plus planté en Oregon, parfois vendu sous le nom 'Anna'. Son identité est floue : le matériel d'Oregon est un A. arguta et Ferguson le juge non conforme à l'étiquette, tandis que le vrai 'Ananasnaya' russe serait un A. kolomikta ou un hybride A. arguta × A. kolomikta."
   },
   "src": [
    {
     "k": "tropic-osu-pnw507",
     "url": "https://extension.oregonstate.edu/catalog/pub/pnw507",
     "loc": "''Ananasnaya''; Kiwiberries 'Male' ('Pollinizer for above female kiwiberry cultivars')"
    },
    {
     "k": "tropic-ferguson-1999",
     "url": "https://hort.purdue.edu/newcrop/proceedings1999/v4-342.html",
     "loc": "section 'Cultivation of other Actinidia species'"
    }
   ]
  }
 },
 {
  "id": "actinidia-arguta-jumbo",
  "parent": "actinidia-arguta",
  "rank": "cultivar",
  "name": "Actinidia arguta 'Jumbo'",
  "author": "",
  "common": {
   "fr": [],
   "en": [],
   "de": []
  },
  "synonyms": [],
  "names_src": [
   {
    "k": "tropic-osu-pnw507",
    "url": "https://extension.oregonstate.edu/catalog/pub/pnw507",
    "loc": "''Jumbo''"
   }
  ],
  "cultivar": {
   "self": "female",
   "pollinizers": [
    "actinidia-arguta-meader"
   ],
   "incompatible_with": [],
   "group": "ripens later than 'Ananasnaya'",
   "origin": {
    "en": "Large green kiwiberry with a blander flavour than 'Ananasnaya'. Oregon lists it among the female cultivars pollinated by A. arguta males.",
    "fr": "Gros kiwaï vert, au goût plus fade qu''Ananasnaya'. L'Oregon le range parmi les cultivars femelles pollinisés par des mâles A. arguta."
   },
   "src": [
    {
     "k": "tropic-osu-pnw507",
     "url": "https://extension.oregonstate.edu/catalog/pub/pnw507",
     "loc": "''Jumbo''; Kiwiberries 'Male'"
    }
   ]
  }
 },
 {
  "id": "actinidia-arguta-geneva-3",
  "parent": "actinidia-arguta",
  "rank": "cultivar",
  "name": "Actinidia arguta 'Geneva 3'",
  "author": "",
  "common": {
   "fr": [],
   "en": [],
   "de": []
  },
  "synonyms": [],
  "names_src": [
   {
    "k": "tropic-osu-pnw507",
    "url": "https://extension.oregonstate.edu/catalog/pub/pnw507",
    "loc": "''Geneva 3''"
   }
  ],
  "cultivar": {
   "self": "female",
   "pollinizers": [
    "actinidia-arguta-meader"
   ],
   "incompatible_with": [],
   "group": "breaks bud about one week earlier than 'Ananasnaya'",
   "origin": {
    "en": "Tested in New Hampshire and recommended for the north-eastern USA. It ripens 1–2 weeks before 'Ananasnaya'. Oregon lists it among the female cultivars.",
    "fr": "Testé dans le New Hampshire et recommandé pour le nord-est des États-Unis. Il mûrit 1–2 semaines avant 'Ananasnaya'. L'Oregon le range parmi les cultivars femelles."
   },
   "src": [
    {
     "k": "tropic-osu-pnw507",
     "url": "https://extension.oregonstate.edu/catalog/pub/pnw507",
     "loc": "''Geneva 3''; Kiwiberries 'Male'"
    }
   ]
  }
 },
 {
  "id": "actinidia-arguta-meader",
  "parent": "actinidia-arguta",
  "rank": "cultivar",
  "name": "Actinidia arguta 'Meader'",
  "author": "",
  "common": {
   "fr": [],
   "en": [],
   "de": []
  },
  "synonyms": [],
  "names_src": [
   {
    "k": "tropic-osu-pnw507",
    "url": "https://extension.oregonstate.edu/catalog/pub/pnw507",
    "loc": "Kiwiberries, 'Male'"
   }
  ],
  "cultivar": {
   "self": "male",
   "pollinizers": [],
   "incompatible_with": [],
   "group": "early flowering",
   "origin": {
    "en": "Male known for flowering early, matching the female kiwiberries grown in Oregon. Oregon advises pairing it with other males such as 74-52 (long bloom).",
    "fr": "Mâle connu pour sa floraison précoce, qui convient aux kiwaïs femelles cultivés en Oregon. L'Oregon conseille de l'associer à d'autres mâles, comme 74-52 (floraison longue)."
   },
   "src": [
    {
     "k": "tropic-osu-pnw507",
     "url": "https://extension.oregonstate.edu/catalog/pub/pnw507",
     "loc": "Kiwiberries, 'Male'"
    }
   ]
  }
 },
 {
  "id": "actinidia-kens-red",
  "parent": "actinidia",
  "rank": "cultivar",
  "name": "Actinidia arguta × A. melanandra 'Ken's Red'",
  "author": "",
  "common": {
   "fr": [],
   "en": [],
   "de": []
  },
  "synonyms": [],
  "names_src": [
   {
    "k": "tropic-osu-pnw507",
    "url": "https://extension.oregonstate.edu/catalog/pub/pnw507",
    "loc": "''Ken's Red''"
   }
  ],
  "cultivar": {
   "self": "female",
   "pollinizers": [
    "actinidia-arguta-meader"
   ],
   "incompatible_with": [],
   "group": "ripens slightly earlier than 'Ananasnaya'",
   "origin": {
    "en": "From New Zealand: a cross of A. arguta var. cordifolia with A. melanandra, with red-purple flesh. Oregon lists it among the female kiwiberries pollinated by A. arguta males.",
    "fr": "Originaire de Nouvelle-Zélande : croisement d'A. arguta var. cordifolia et d'A. melanandra, à chair rouge-pourpre. L'Oregon le range parmi les kiwaïs femelles pollinisés par des mâles A. arguta."
   },
   "src": [
    {
     "k": "tropic-osu-pnw507",
     "url": "https://extension.oregonstate.edu/catalog/pub/pnw507",
     "loc": "''Ken's Red''; Kiwiberries 'Male'"
    }
   ]
  }
 },
 {
  "id": "cactaceae",
  "parent": null,
  "rank": "family",
  "name": "Cactaceae",
  "author": "Juss.",
  "common": {
   "fr": [
    "cactacées",
    "cactus"
   ],
   "en": [
    "cactus family"
   ],
   "de": [
    "Kakteengewächse"
   ]
  },
  "synonyms": [],
  "names_src": [
   {
    "k": "wfo",
    "url": "https://list.worldfloraonline.org/wfo-7000000098",
    "loc": "accepted family; placement Caryophyllales"
   },
   {
    "k": "tropic-wcvp-gbif",
    "url": "https://www.gbif.org/species/340002245",
    "loc": "WCVP family record, ACCEPTED"
   },
   {
    "k": "tropic-apweb",
    "url": "http://www.mobot.org/MOBOT/research/APweb/orders/caryophyllalesweb.htm",
    "loc": "Caryophyllales page, Cactaceae section"
   }
  ],
  "taxonomy": {
   "en": "Cactus family, in the order Caryophyllales. Its base chromosome number is x = 11.",
   "fr": "Famille des cactus, dans l'ordre des Caryophyllales. Nombre chromosomique de base x = 11.",
   "src": [
    {
     "k": "wfo",
     "url": "https://list.worldfloraonline.org/wfo-7000000098",
     "loc": "placement"
    },
    {
     "k": "tropic-telzur-2022-hortres",
     "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/PMC9189603/fullTextXML",
     "loc": "section on cytology ('In Cactaceae, the base chromosome number is x = 11')"
    }
   ]
  }
 },
 {
  "id": "selenicereus",
  "parent": "cactaceae",
  "rank": "genus",
  "name": "Selenicereus",
  "author": "(A.Berger) Britton & Rose",
  "common": {
   "fr": [
    "pitaya",
    "pitahaya",
    "fruit du dragon"
   ],
   "en": [
    "pitaya",
    "dragon fruit",
    "night-blooming cereus"
   ],
   "de": [
    "Drachenfrucht",
    "Pitahaya"
   ]
  },
  "synonyms": [
   "Hylocereus (A.Berger) Britton & Rose",
   "Mediocactus Britton & Rose",
   "Werckleocereus Britton & Rose",
   "Wilmattea Britton & Rose",
   "Cryptocereus Alexander"
  ],
  "names_src": [
   {
    "k": "powo",
    "url": "https://powo.science.kew.org/taxon/urn:lsid:ipni.org:names:30011812-2",
    "loc": "URL from WCVP record on GBIF; page not opened (HTTP 403)"
   },
   {
    "k": "tropic-wcvp-gbif",
    "url": "https://www.gbif.org/species/206851023",
    "loc": "WCVP: 'Selenicereus Britton & Rose', ACCEPTED, Contr. U.S. Natl. Herb. 12: 429 (1909); Hylocereus (https://www.gbif.org/species/206851491) = SYNONYM"
   },
   {
    "k": "wfo",
    "url": "https://list.worldfloraonline.org/wfo-4000034979",
    "loc": "accepted as 'Selenicereus (A.Berger) Britton & Rose'; synonyms include Hylocereus, Mediocactus"
   }
  ],
  "taxonomy": {
   "en": "Korotkova, Borsch & Arias (2017) merged Hylocereus into Selenicereus. (Phytotaxa 327(1)). WFO and WCVP both follow this. Many pitaya breeders (e.g. Tel-Zur 2022) and extension sheets (UF/IFAS) still say Hylocereus, so the same plant can carry two names. WCVP gives the genus author as 'Britton & Rose', WFO as '(A.Berger) Britton & Rose'.",
   "fr": "Korotkova, Borsch & Arias (2017) ont fusionné Hylocereus dans Selenicereus. (Phytotaxa 327(1)). WFO et WCVP suivent ce choix. Beaucoup de sélectionneurs de pitaya (p. ex. Tel-Zur 2022) et de fiches de vulgarisation (UF/IFAS) écrivent encore Hylocereus : une même plante peut donc porter deux noms. WCVP donne l'auteur du genre « Britton & Rose », WFO « (A.Berger) Britton & Rose ».",
   "src": [
    {
     "k": "tropic-korotkova-2017-phytotaxa",
     "url": "https://api.crossref.org/works/10.11646/phytotaxa.327.1.1",
     "loc": "abstract: 'Selenicereus (incl. Hylocereus and Weberocereus p.p.)'"
    },
    {
     "k": "tropic-trindade-2023-plants",
     "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/PMC10537634/fullTextXML",
     "loc": "section 2 (taxonomy and names)"
    },
    {
     "k": "tropic-telzur-2022-hortres",
     "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/PMC9189603/fullTextXML",
     "loc": "throughout (uses Hylocereus)"
    },
    {
     "k": "wfo",
     "url": "https://list.worldfloraonline.org/wfo-4000034979",
     "loc": "synonym list"
    },
    {
     "k": "tropic-wcvp-gbif",
     "url": "https://www.gbif.org/species/206851491",
     "loc": "Hylocereus = synonym of Selenicereus"
    }
   ]
  },
  "mating": {
   "system": "mixed",
   "flags": [
    "hermaphrodite",
    "self-incompatible",
    "gametophytic-si",
    "partly-self-compatible",
    "self-compatible",
    "bat-pollinated",
    "insect-pollinated"
   ],
   "en": "Flowers are hermaphrodite, large and open at night. Self-compatibility varies by species and even by clone: some clones are fully self-incompatible (gametophytic SI in S. undatus and S. monacanthus), others set fruit alone. Bats and hawk moths pollinate them in their native range. Elsewhere, honey bees visit in the early morning, or growers hand-pollinate.",
   "fr": "Fleurs hermaphrodites, grandes, ouvertes la nuit. L'autocompatibilité varie selon l'espèce et même le clone : certains clones sont totalement auto-incompatibles (AI gamétophytique chez S. undatus et S. monacanthus), d'autres fructifient seuls. Chauves-souris et sphinx les pollinisent dans leur aire d'origine. Ailleurs, les abeilles passent tôt le matin, ou l'on pollinise à la main.",
   "src": [
    {
     "k": "tropic-ufifas-hs303",
     "url": "https://ask.ifas.ufl.edu/publication/HS303",
     "loc": "'Inflorescence (Flowers)'; 'Pollination'"
    },
    {
     "k": "tropic-telzur-2022-hortres",
     "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/PMC9189603/fullTextXML",
     "loc": "section on cytology and mating system"
    },
    {
     "k": "tropic-trindade-2023-plants",
     "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/PMC10537634/fullTextXML",
     "loc": "section 5.2 Pollination"
    },
    {
     "k": "tropic-jadhav-2025-scirep",
     "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/PMC12552510/fullTextXML",
     "loc": "Abstract"
    }
   ]
  },
  "interspecific": [
   {
    "with": "S. monacanthus × S. undatus (homoploid, 2x × 2x)",
    "en": "In the Israeli programme, crosses between diploid species met no barriers. The diploid hybrids had normal meiosis, many viable seeds and good germination.",
    "fr": "Dans le programme israélien, les croisements entre espèces diploïdes n'ont rencontré aucune barrière. Les hybrides diploïdes avaient une méiose normale, beaucoup de graines viables et une bonne germination.",
    "src": [
     {
      "k": "tropic-telzur-2022-hortres",
      "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/PMC9189603/fullTextXML",
      "loc": "section 'First stages of breeding – Interspecific homoploid and interploid hybridizations'"
     }
    ],
    "with_fr": "S. monacanthus × S. undatus (même ploïdie, 2x × 2x)"
   },
   {
    "with": "S. undatus or S. monacanthus × S. megalanthus (interploid, 2x × 4x)",
    "en": "These crosses gave triploid, pentaploid, hexaploid and aneuploid hybrids, and the direction of the cross decided the ploidy. Some later hybrids involving three species were self-compatible tetraploids.",
    "fr": "Ces croisements ont donné des hybrides triploïdes, pentaploïdes, hexaploïdes et aneuploïdes, et le sens du croisement décidait de la ploïdie. Certains hybrides ultérieurs à trois espèces étaient des tétraploïdes autocompatibles.",
    "src": [
     {
      "k": "tropic-telzur-2022-hortres",
      "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/PMC9189603/fullTextXML",
      "loc": "same section; Table 1 summary"
     }
    ],
    "with_fr": "S. undatus ou S. monacanthus × S. megalanthus (ploïdies différentes, 2x × 4x)"
   },
   {
    "with": "Selenicereus grandiflorus",
    "en": "S. grandiflorus crosses with the former Hylocereus species. Before the genera were merged these counted as intergeneric hybrids; now they are crosses within one genus.",
    "fr": "S. grandiflorus se croise avec les anciens Hylocereus. Avant la fusion des genres, on parlait d'hybrides intergénériques ; ce sont maintenant des croisements dans un même genre.",
    "src": [
     {
      "k": "tropic-telzur-2022-hortres",
      "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/PMC9189603/fullTextXML",
      "loc": "section 'Intergeneric hybridization'"
     },
     {
      "k": "tropic-korotkova-2017-phytotaxa",
      "url": "https://api.crossref.org/works/10.11646/phytotaxa.327.1.1",
      "loc": "abstract"
     }
    ]
   },
   {
    "with": "S. undatus × S. costaricensis",
    "en": "The Brazilian cultivar 'BRS Granada do Cerrado' comes from this cross.",
    "fr": "Le cultivar brésilien 'BRS Granada do Cerrado' est issu de ce croisement.",
    "src": [
     {
      "k": "tropic-trindade-2023-plants",
      "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/PMC10537634/fullTextXML",
      "loc": "section on cultivars (Brazilian BRS cultivars)"
     }
    ]
   }
  ],
  "varieties": {
   "en": "Many nursery clones are self-incompatible, so UF/IFAS advises planting 2 or 3 different genetic types (not the same clone) for fruit set and size. The current UF/IFAS sheet warns that self-incompatibility data for cultivars are poorly documented.",
   "fr": "Beaucoup de clones de pépinière sont auto-incompatibles : l'UF/IFAS conseille de planter 2 ou 3 types génétiques différents (pas le même clone) pour la nouaison et le calibre. La fiche actuelle de l'UF/IFAS prévient que les données d'auto-incompatibilité des cultivars sont mal documentées.",
   "src": [
    {
     "k": "tropic-ufifas-hs303",
     "url": "https://ask.ifas.ufl.edu/publication/HS303",
     "loc": "'Pollination'; 'Varieties'"
    }
   ]
  },
  "isolation": {
   "en": "In an Indian study, pollen viability and stigma receptivity gave a pollination window from 4 h before to 12 h after anthesis. Hand-pollinate at night or early in the morning by moving pollen or whole stamens to another flower's stigma. No isolation distance for seed saving was found.",
   "fr": "Dans une étude indienne, la viabilité du pollen et la réceptivité du stigmate donnaient une fenêtre de pollinisation de 4 h avant à 12 h après l'anthèse. Pollinisez à la main la nuit ou tôt le matin, en portant pollen ou étamines entières sur le stigmate d'une autre fleur. Aucune distance d'isolement pour la production de semences n'a été trouvée.",
   "src": [
    {
     "k": "tropic-jadhav-2025-scirep",
     "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/PMC12552510/fullTextXML",
     "loc": "Abstract"
    },
    {
     "k": "tropic-ufifas-hs303",
     "url": "https://ask.ifas.ufl.edu/publication/HS303",
     "loc": "'Pollination'"
    }
   ]
  },
  "true_to_type": {
   "value": "no",
   "en": "Seedlings vary in fruit and stem traits and can take up to 7 years to fruit. The pollen parent also affects the fruit itself (metaxenia).",
   "fr": "Les semis varient (fruits, tiges) et peuvent mettre jusqu'à 7 ans à fructifier. Le père influence aussi le fruit lui-même (métaxénie).",
   "src": [
    {
     "k": "tropic-ufifas-hs303",
     "url": "https://ask.ifas.ufl.edu/publication/HS303",
     "loc": "'Propagation'"
    },
    {
     "k": "tropic-telzur-2022-hortres",
     "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/PMC9189603/fullTextXML",
     "loc": "section on cytology (metaxenia)"
    }
   ]
  },
  "propagation": {
   "en": "Stem cuttings of 6–15 inches (12–38 cm), left to dry and heal for 7–8 days before planting. They grow fast and many fruit within 6 to 9 months. Grafting is possible but uncommon.",
   "fr": "Boutures de tige de 12–38 cm (6–15 pouces), laissées sécher et cicatriser 7–8 jours avant plantation. Elles poussent vite et beaucoup fructifient en 6 à 9 mois. Le greffage est possible mais rare.",
   "src": [
    {
     "k": "tropic-ufifas-hs303",
     "url": "https://ask.ifas.ufl.edu/publication/HS303",
     "loc": "'Propagation'"
    },
    {
     "k": "tropic-ufifas-hs1068-2005",
     "url": "https://journals.flvc.org/edis/article/download/116119/114296/167134",
     "loc": "p. 2, 'Propagation' (6 to 9 months)"
    }
   ]
  }
 },
 {
  "id": "selenicereus-undatus",
  "parent": "selenicereus",
  "rank": "species",
  "name": "Selenicereus undatus",
  "author": "(Haw.) D.R.Hunt",
  "common": {
   "fr": [
    "pitaya blanche",
    "fruit du dragon"
   ],
   "en": [
    "white-fleshed dragon fruit",
    "pitaya",
    "strawberry pear"
   ],
   "de": [
    "Drachenfrucht"
   ]
  },
  "synonyms": [
   "Hylocereus undatus (Haw.) Britton & Rose",
   "Cereus undatus Haw.",
   "Cereus tricostatus Rol.-Goss.",
   "Hylocereus tricostatus (Rol.-Goss.) Britton & Rose",
   "Hylocereus undatus subsp. luteocarpus Cálix de Dios"
  ],
  "names_src": [
   {
    "k": "powo",
    "url": "https://powo.science.kew.org/taxon/urn:lsid:ipni.org:names:77163184-1",
    "loc": "URL from WCVP record on GBIF; page not opened (HTTP 403)"
   },
   {
    "k": "tropic-wcvp-gbif",
    "url": "https://www.gbif.org/species/206851127",
    "loc": "WCVP: S. undatus (Haw.) D.R.Hunt, ACCEPTED, Cactaceae Syst. Init. 36: 35 (2017); Mexico to Honduras"
   },
   {
    "k": "wfo",
    "url": "https://list.worldfloraonline.org/wfo-0001434109",
    "loc": "accepted; synonyms incl. Hylocereus undatus"
   }
  ],
  "taxonomy": {
   "en": "WFO and WCVP agree. Yellow-skinned forms once named Hylocereus undatus subsp. luteocarpus are a synonym in both.",
   "fr": "WFO et WCVP sont d'accord. Les formes à peau jaune autrefois nommées Hylocereus undatus subsp. luteocarpus sont un synonyme dans les deux.",
   "src": [
    {
     "k": "wfo",
     "url": "https://list.worldfloraonline.org/wfo-0001434109",
     "loc": "synonyms"
    },
    {
     "k": "tropic-wcvp-gbif",
     "url": "https://www.gbif.org/species/206851127",
     "loc": "synonyms"
    }
   ]
  },
  "ploidy": {
   "en": "Diploid, 2n = 2x = 22.",
   "fr": "Diploïde, 2n = 2x = 22.",
   "src": [
    {
     "k": "tropic-telzur-2022-hortres",
     "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/PMC9189603/fullTextXML",
     "loc": "section on cytology"
    }
   ]
  },
  "mating": {
   "system": "mixed",
   "flags": [
    "hermaphrodite",
    "gametophytic-si",
    "partly-self-compatible",
    "self-compatible",
    "bat-pollinated",
    "insect-pollinated"
   ],
   "en": "Pollen is viable, but clones show partial or complete gametophytic self-incompatibility, and the Israeli team reports a 'weakened' reaction in this species. Some clones are self-compatible ('Vietnamese White' in Iberia; NDFW-1 in India), though cross-pollination still gives bigger fruit.",
   "fr": "Le pollen est viable, mais les clones montrent une auto-incompatibilité gamétophytique partielle ou totale, et l'équipe israélienne signale une réaction « affaiblie » chez cette espèce. Certains clones sont autocompatibles ('Vietnamese White' en péninsule Ibérique, NDFW-1 en Inde), mais la pollinisation croisée donne quand même de plus gros fruits.",
   "src": [
    {
     "k": "tropic-telzur-2022-hortres",
     "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/PMC9189603/fullTextXML",
     "loc": "section on cytology and mating system"
    },
    {
     "k": "tropic-trindade-2023-plants",
     "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/PMC10537634/fullTextXML",
     "loc": "section 6; Table 1"
    },
    {
     "k": "tropic-jadhav-2025-scirep",
     "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/PMC12552510/fullTextXML",
     "loc": "Abstract"
    }
   ]
  },
  "varieties": {
   "en": "Cultivars differ: some need a partner and others do not (see cultivars). Buying two or three unrelated clones is the safe choice.",
   "fr": "Les cultivars diffèrent : certains ont besoin d'un partenaire, d'autres non (voir cultivars). Acheter deux ou trois clones non apparentés est le choix prudent.",
   "src": [
    {
     "k": "tropic-ufifas-hs1068-2005",
     "url": "https://journals.flvc.org/edis/article/download/116119/114296/167134",
     "loc": "Table 2, 'Need for cross pollination'"
    },
    {
     "k": "tropic-trindade-2023-plants",
     "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/PMC10537634/fullTextXML",
     "loc": "Table 1"
    }
   ]
  }
 },
 {
  "id": "selenicereus-undatus-vietnamese-white",
  "parent": "selenicereus-undatus",
  "rank": "cultivar",
  "name": "Selenicereus undatus 'Vietnamese White'",
  "author": "",
  "common": {
   "fr": [],
   "en": [],
   "de": []
  },
  "synonyms": [],
  "names_src": [
   {
    "k": "tropic-trindade-2023-plants",
    "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/PMC10537634/fullTextXML",
    "loc": "section 4 (cultivars); Table 1"
   }
  ],
  "cultivar": {
   "self": "self-compatible",
   "pollinizers": [],
   "incompatible_with": [],
   "group": "",
   "origin": {
    "en": "Red skin, white flesh, fruit 500–1000 g. Probably the most grown cultivar in Spain and Portugal. Self-compatible, at least the clones grown there.",
    "fr": "Peau rouge, chair blanche, fruits de 500–1000 g. Sans doute le cultivar le plus planté en Espagne et au Portugal. Autocompatible, du moins les clones cultivés là-bas."
   },
   "src": [
    {
     "k": "tropic-trindade-2023-plants",
     "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/PMC10537634/fullTextXML",
     "loc": "section 4; Table 1 (SF)"
    }
   ]
  }
 },
 {
  "id": "selenicereus-undatus-common-white",
  "parent": "selenicereus-undatus",
  "rank": "cultivar",
  "name": "Selenicereus undatus 'Common White'",
  "author": "",
  "common": {
   "fr": [],
   "en": [],
   "de": []
  },
  "synonyms": [],
  "names_src": [
   {
    "k": "tropic-trindade-2023-plants",
    "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/PMC10537634/fullTextXML",
    "loc": "section 4; Table 1"
   }
  ],
  "cultivar": {
   "self": "self-incompatible",
   "pollinizers": [],
   "incompatible_with": [],
   "group": "",
   "origin": {
    "en": "A group of several clones. It is being replaced in Iberia because it is self-incompatible and its fruit tends to form a gelatinous centre.",
    "fr": "Regroupe plusieurs clones. Il est remplacé en péninsule Ibérique car il est auto-incompatible et son fruit tend à avoir un cœur gélatineux."
   },
   "src": [
    {
     "k": "tropic-trindade-2023-plants",
     "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/PMC10537634/fullTextXML",
     "loc": "section 4; Table 1 (SI)"
    }
   ]
  }
 },
 {
  "id": "selenicereus-undatus-golden-of-israel",
  "parent": "selenicereus-undatus",
  "rank": "cultivar",
  "name": "Selenicereus undatus 'Golden of Israel'",
  "author": "",
  "common": {
   "fr": [],
   "en": [],
   "de": []
  },
  "synonyms": [
   "'Golden' (Trindade et al. Table 1)"
  ],
  "names_src": [
   {
    "k": "tropic-trindade-2023-plants",
    "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/PMC10537634/fullTextXML",
    "loc": "section 4; Table 1"
   }
  ],
  "cultivar": {
   "self": "partly-self-compatible",
   "pollinizers": [],
   "incompatible_with": [],
   "group": "",
   "origin": {
    "en": "Yellow-skinned S. undatus. Selfed fruit weigh about 200 to 350 g, against about 500 to 850 g after cross-pollination. The similar 'Golden Isis' (Australia) is said by some growers to be self-incompatible.",
    "fr": "S. undatus à peau jaune. Les fruits autofécondés pèsent environ 200 à 350 g, contre 500 à 850 g environ après pollinisation croisée. Le proche 'Golden Isis' (Australie) serait auto-incompatible selon certains producteurs."
   },
   "src": [
    {
     "k": "tropic-trindade-2023-plants",
     "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/PMC10537634/fullTextXML",
     "loc": "section 4; Table 1 (PSC)"
    }
   ]
  },
  "synonyms_fr": [
   "'Golden' (Trindade et al., tableau 1)"
  ]
 },
 {
  "id": "selenicereus-undatus-alice",
  "parent": "selenicereus-undatus",
  "rank": "cultivar",
  "name": "Selenicereus undatus 'Alice'",
  "author": "",
  "common": {
   "fr": [],
   "en": [],
   "de": []
  },
  "synonyms": [],
  "names_src": [
   {
    "k": "tropic-ufifas-hs1068-2005",
    "url": "https://journals.flvc.org/edis/article/download/116119/114296/167134",
    "loc": "Table 2"
   }
  ],
  "cultivar": {
   "self": "self-incompatible",
   "pollinizers": [],
   "incompatible_with": [],
   "group": "",
   "origin": {
    "en": "From California, listed as H. undatus. UF/IFAS (2005) says it needs cross-pollination.",
    "fr": "Originaire de Californie, classé H. undatus. L'UF/IFAS (2005) indique qu'il lui faut une pollinisation croisée."
   },
   "src": [
    {
     "k": "tropic-ufifas-hs1068-2005",
     "url": "https://journals.flvc.org/edis/article/download/116119/114296/167134",
     "loc": "Table 2 ('Need for cross pollination': Yes)"
    }
   ]
  }
 },
 {
  "id": "selenicereus-undatus-la-woman",
  "parent": "selenicereus-undatus",
  "rank": "cultivar",
  "name": "Selenicereus undatus 'L.A. Woman'",
  "author": "",
  "common": {
   "fr": [],
   "en": [],
   "de": []
  },
  "synonyms": [
   "'L.A. Women' (spelling in UF/IFAS table)"
  ],
  "names_src": [
   {
    "k": "tropic-ufifas-hs1068-2005",
    "url": "https://journals.flvc.org/edis/article/download/116119/114296/167134",
    "loc": "Table 2"
   }
  ],
  "cultivar": {
   "self": "self-incompatible",
   "pollinizers": [],
   "incompatible_with": [],
   "group": "",
   "origin": {
    "en": "From California, listed as H. undatus. It needs cross-pollination, and UF/IFAS did not recommend it because of a bad aftertaste.",
    "fr": "Originaire de Californie, classé H. undatus. Il lui faut une pollinisation croisée, et l'UF/IFAS ne le recommandait pas à cause d'un arrière-goût désagréable."
   },
   "src": [
    {
     "k": "tropic-ufifas-hs1068-2005",
     "url": "https://journals.flvc.org/edis/article/download/116119/114296/167134",
     "loc": "Table 2 ('Need for cross pollination': Yes)"
    }
   ]
  },
  "synonyms_fr": [
   "'L.A. Women' (graphie du tableau UF/IFAS)"
  ]
 },
 {
  "id": "selenicereus-undatus-cosmic-charlie",
  "parent": "selenicereus-undatus",
  "rank": "cultivar",
  "name": "Selenicereus undatus 'Cosmic Charlie'",
  "author": "",
  "common": {
   "fr": [],
   "en": [],
   "de": []
  },
  "synonyms": [],
  "names_src": [
   {
    "k": "tropic-ufifas-hs1068-2005",
    "url": "https://journals.flvc.org/edis/article/download/116119/114296/167134",
    "loc": "Table 2"
   }
  ],
  "cultivar": {
   "self": "self-compatible",
   "pollinizers": [],
   "incompatible_with": [],
   "group": "",
   "origin": {
    "en": "From California, listed as H. undatus, with pink flesh. UF/IFAS (2005) lists it as not needing cross-pollination.",
    "fr": "Originaire de Californie, classé H. undatus, à chair rose. L'UF/IFAS (2005) le classe comme n'ayant pas besoin de pollinisation croisée."
   },
   "src": [
    {
     "k": "tropic-ufifas-hs1068-2005",
     "url": "https://journals.flvc.org/edis/article/download/116119/114296/167134",
     "loc": "Table 2 ('Need for cross pollination': No)"
    }
   ]
  }
 },
 {
  "id": "selenicereus-monacanthus",
  "parent": "selenicereus",
  "rank": "species",
  "name": "Selenicereus monacanthus",
  "author": "(Lem.) D.R.Hunt",
  "common": {
   "fr": [
    "pitaya rouge",
    "pitaya à chair rouge"
   ],
   "en": [
    "red-fleshed dragon fruit",
    "red pitaya"
   ],
   "de": [
    "Rote Drachenfrucht"
   ]
  },
  "synonyms": [
   "Hylocereus polyrhizus (F.A.C.Weber) Britton & Rose",
   "Cereus polyrhizus F.A.C.Weber",
   "Hylocereus monacanthus (Lem.) Britton & Rose",
   "Cereus monacanthus Lem.",
   "Hylocereus venezuelensis Britton & Rose",
   "Hylocereus peruvianus Backeb."
  ],
  "names_src": [
   {
    "k": "powo",
    "url": "https://powo.science.kew.org/taxon/urn:lsid:ipni.org:names:77163180-1",
    "loc": "URL from WCVP record on GBIF; page not opened (HTTP 403)"
   },
   {
    "k": "tropic-wcvp-gbif",
    "url": "https://www.gbif.org/species/206851151",
    "loc": "WCVP: S. monacanthus (Lem.) D.R.Hunt, ACCEPTED, Cactaceae Syst. Init. 36: 33 (2017); H. polyrhizus (https://www.gbif.org/species/206851163) = SYNONYM"
   },
   {
    "k": "wfo",
    "url": "https://list.worldfloraonline.org/wfo-0001434099",
    "loc": "accepted; H. polyrhizus among synonyms"
   }
  ],
  "taxonomy": {
   "en": "Yes, Hylocereus polyrhizus = S. monacanthus in both WFO and WCVP. Papers still use 'H. polyrhizus' or even 'Selenicereus polyrhizus' (e.g. Hueso et al. 2025 for 'Royal Red'); the second name is not accepted in WFO or WCVP.",
   "fr": "Oui, Hylocereus polyrhizus = S. monacanthus dans WFO comme dans WCVP. Des articles emploient encore « H. polyrhizus », voire « Selenicereus polyrhizus » (p. ex. Hueso et al. 2025 pour 'Royal Red') ; ce dernier nom n'est accepté ni dans WFO ni dans WCVP.",
   "src": [
    {
     "k": "wfo",
     "url": "https://list.worldfloraonline.org/wfo-0000726902",
     "loc": "H. polyrhizus: synonym of S. monacanthus"
    },
    {
     "k": "tropic-wcvp-gbif",
     "url": "https://www.gbif.org/species/206851163",
     "loc": "H. polyrhizus: SYNONYM of S. monacanthus"
    },
    {
     "k": "tropic-hueso-2025-plants",
     "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/PMC12526123/fullTextXML",
     "loc": "keywords"
    },
    {
     "k": "tropic-trindade-2023-plants",
     "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/PMC10537634/fullTextXML",
     "loc": "section 4 ('S. monacanthus (previously classified as Hylocereus polyrhizus)')"
    }
   ]
  },
  "ploidy": {
   "en": "Diploid, 2n = 2x = 22.",
   "fr": "Diploïde, 2n = 2x = 22.",
   "src": [
    {
     "k": "tropic-telzur-2022-hortres",
     "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/PMC9189603/fullTextXML",
     "loc": "section on cytology"
    }
   ]
  },
  "mating": {
   "system": "mixed",
   "flags": [
    "hermaphrodite",
    "self-incompatible",
    "gametophytic-si",
    "self-compatible",
    "bat-pollinated",
    "insect-pollinated"
   ],
   "en": "Often self-incompatible (gametophytic), but some cultivars are self-compatible ('Tesoro', 'Royal Red'). Doubling the chromosomes (autotetraploid lines) broke down the self-incompatibility, but the fruit were smaller.",
   "fr": "Souvent auto-incompatible (gamétophytique), mais certains cultivars sont autocompatibles ('Tesoro', 'Royal Red'). Le doublement des chromosomes (lignées autotétraploïdes) a levé l'auto-incompatibilité, mais avec des fruits plus petits.",
   "src": [
    {
     "k": "tropic-telzur-2022-hortres",
     "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/PMC9189603/fullTextXML",
     "loc": "sections on cytology and 'Autopolyploidization'"
    },
    {
     "k": "tropic-trindade-2023-plants",
     "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/PMC10537634/fullTextXML",
     "loc": "section 6; Table 1"
    }
   ]
  }
 },
 {
  "id": "selenicereus-monacanthus-tesoro",
  "parent": "selenicereus-monacanthus",
  "rank": "cultivar",
  "name": "Selenicereus monacanthus 'Tesoro'",
  "author": "",
  "common": {
   "fr": [],
   "en": [],
   "de": []
  },
  "synonyms": [],
  "names_src": [
   {
    "k": "tropic-trindade-2023-plants",
    "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/PMC10537634/fullTextXML",
    "loc": "section 4; Table 1"
   }
  ],
  "cultivar": {
   "self": "self-compatible",
   "pollinizers": [],
   "incompatible_with": [],
   "group": "",
   "origin": {
    "en": "The most important red-fleshed cultivar in Spain and Portugal: red skin and flesh, fruit 400–800 g, about 18 °Brix.",
    "fr": "Le principal cultivar à chair rouge en Espagne et au Portugal : peau et chair rouges, fruits de 400–800 g, environ 18 °Brix."
   },
   "src": [
    {
     "k": "tropic-trindade-2023-plants",
     "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/PMC10537634/fullTextXML",
     "loc": "section 4; Table 1 (SC)"
    }
   ]
  }
 },
 {
  "id": "selenicereus-monacanthus-royal-red",
  "parent": "selenicereus-monacanthus",
  "rank": "cultivar",
  "name": "Selenicereus monacanthus 'Royal Red'",
  "author": "",
  "common": {
   "fr": [],
   "en": [],
   "de": []
  },
  "synonyms": [],
  "names_src": [
   {
    "k": "tropic-trindade-2023-plants",
    "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/PMC10537634/fullTextXML",
    "loc": "section 4 (listed under S. monacanthus)"
   },
   {
    "k": "tropic-hueso-2025-plants",
    "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/PMC12526123/fullTextXML",
    "loc": "title (called 'Selenicereus polyrhizus')"
   }
  ],
  "cultivar": {
   "self": "self-compatible",
   "pollinizers": [],
   "incompatible_with": [],
   "group": "",
   "origin": {
    "en": "In greenhouses in Almería (south-east Spain), bagged flowers set fruit fully, which confirms self-compatibility. But selfed fruit were small with few seeds, and a pollen blower or brush gave commercial-size fruit.",
    "fr": "En serre à Almería (sud-est de l'Espagne), les fleurs ensachées ont toutes noué, ce qui confirme l'autocompatibilité. Mais les fruits autofécondés étaient petits et pauvres en graines ; une souffleuse à pollen ou un pinceau donnait des fruits de calibre commercial."
   },
   "src": [
    {
     "k": "tropic-hueso-2025-plants",
     "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/PMC12526123/fullTextXML",
     "loc": "Abstract; Materials and Methods 4.1"
    }
   ]
  }
 },
 {
  "id": "selenicereus-monacanthus-bloody-mary",
  "parent": "selenicereus-monacanthus",
  "rank": "cultivar",
  "name": "Selenicereus monacanthus 'Bloody Mary'",
  "author": "",
  "common": {
   "fr": [],
   "en": [],
   "de": []
  },
  "synonyms": [],
  "names_src": [
   {
    "k": "tropic-ufifas-hs1068-2005",
    "url": "https://journals.flvc.org/edis/article/download/116119/114296/167134",
    "loc": "Table 2 (as H. polyrhizus)"
   }
  ],
  "cultivar": {
   "self": "self-incompatible",
   "pollinizers": [],
   "incompatible_with": [],
   "group": "",
   "origin": {
    "en": "From California, listed as H. polyrhizus (= S. monacanthus). UF/IFAS (2005) says it needs cross-pollination.",
    "fr": "Originaire de Californie, classé H. polyrhizus (= S. monacanthus). L'UF/IFAS (2005) indique qu'il lui faut une pollinisation croisée."
   },
   "src": [
    {
     "k": "tropic-ufifas-hs1068-2005",
     "url": "https://journals.flvc.org/edis/article/download/116119/114296/167134",
     "loc": "Table 2 ('Need for cross pollination': Yes)"
    }
   ]
  }
 },
 {
  "id": "selenicereus-monacanthus-zamorano",
  "parent": "selenicereus-monacanthus",
  "rank": "cultivar",
  "name": "Selenicereus monacanthus 'Zamorano'",
  "author": "",
  "common": {
   "fr": [],
   "en": [],
   "de": []
  },
  "synonyms": [],
  "names_src": [
   {
    "k": "tropic-ufifas-hs1068-2005",
    "url": "https://journals.flvc.org/edis/article/download/116119/114296/167134",
    "loc": "Table 2 (as H. polyrhizus)"
   }
  ],
  "cultivar": {
   "self": "self-compatible",
   "pollinizers": [],
   "incompatible_with": [],
   "group": "",
   "origin": {
    "en": "From Honduras, listed as H. polyrhizus, with red flesh. UF/IFAS (2005) lists it as not needing cross-pollination.",
    "fr": "Originaire du Honduras, classé H. polyrhizus, à chair rouge. L'UF/IFAS (2005) le classe comme n'ayant pas besoin de pollinisation croisée."
   },
   "src": [
    {
     "k": "tropic-ufifas-hs1068-2005",
     "url": "https://journals.flvc.org/edis/article/download/116119/114296/167134",
     "loc": "Table 2 ('Need for cross pollination': No)"
    }
   ]
  }
 },
 {
  "id": "selenicereus-costaricensis",
  "parent": "selenicereus",
  "rank": "species",
  "name": "Selenicereus costaricensis",
  "author": "(F.A.C.Weber) S.Arias & N.Korotkova ex Hammel",
  "common": {
   "fr": [
    "pitaya rouge du Costa Rica"
   ],
   "en": [
    "Costa Rican pitaya"
   ],
   "de": []
  },
  "synonyms": [
   "Hylocereus costaricensis (F.A.C.Weber) Britton & Rose",
   "Cereus trigonus var. costaricensis F.A.C.Weber",
   "Cereus costaricensis (F.A.C.Weber) A.Berger",
   "Hylocereus microcladus Backeb.",
   "Selenicereus costaricensis (F.A.C.Weber) S.Arias & N.Korotkova (earlier publication, treated as synonym)"
  ],
  "names_src": [
   {
    "k": "powo",
    "url": "https://powo.science.kew.org/taxon/urn:lsid:ipni.org:names:77177683-1",
    "loc": "URL from WCVP record on GBIF; page not opened (HTTP 403)"
   },
   {
    "k": "tropic-wcvp-gbif",
    "url": "https://www.gbif.org/species/206851046",
    "loc": "WCVP: '… S.Arias & N.Korotkova ex Hammel', ACCEPTED, Monogr. Syst. Bot. Missouri Bot. Gard. 138: 283 (2020); Nicaragua to N. Peru"
   },
   {
    "k": "wfo",
    "url": "https://list.worldfloraonline.org/wfo-1200098351",
    "loc": "accepted '… ex Hammel'; two records '(F.A.C.Weber) S.Arias & N.Korotkova' (wfo-0001434083, wfo-0001434685) are synonyms"
   }
  ],
  "taxonomy": {
   "en": "Both WFO and WCVP accept the version 'ex Hammel' (2020) and treat the 2017 combination by Arias & Korotkova as a synonym, which suggests the 2017 publication was not valid. Hylocereus costaricensis is the old name still found in extension sheets.",
   "fr": "WFO et WCVP acceptent tous deux la version « ex Hammel » (2020) et traitent la combinaison de 2017 d'Arias & Korotkova comme synonyme, ce qui suggère que la publication de 2017 n'était pas valide. Hylocereus costaricensis est l'ancien nom encore présent dans les fiches de vulgarisation.",
   "src": [
    {
     "k": "wfo",
     "url": "https://list.worldfloraonline.org/wfo-1200098351",
     "loc": "accepted record and synonyms"
    },
    {
     "k": "tropic-wcvp-gbif",
     "url": "https://www.gbif.org/species/206851046",
     "loc": "accepted record"
    },
    {
     "k": "tropic-ufifas-hs303",
     "url": "https://ask.ifas.ufl.edu/publication/HS303",
     "loc": "Table 1 ('Hylocereus costaricenes' [sic])"
    }
   ]
  },
  "mating": {
   "system": "mixed",
   "flags": [
    "hermaphrodite",
    "self-compatible"
   ],
   "en": "Little species-level data was found. The Iberian review lists the cultivar 'Costa Rica' as self-compatible.",
   "fr": "Peu de données à l'échelle de l'espèce. La revue ibérique classe le cultivar 'Costa Rica' comme autocompatible.",
   "src": [
    {
     "k": "tropic-trindade-2023-plants",
     "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/PMC10537634/fullTextXML",
     "loc": "Table 1"
    }
   ]
  },
  "synonyms_fr": [
   "Hylocereus costaricensis (F.A.C.Weber) Britton & Rose",
   "Cereus trigonus var. costaricensis F.A.C.Weber",
   "Cereus costaricensis (F.A.C.Weber) A.Berger",
   "Hylocereus microcladus Backeb.",
   "Selenicereus costaricensis (F.A.C.Weber) S.Arias & N.Korotkova (publication antérieure, traitée comme synonyme)"
  ]
 },
 {
  "id": "selenicereus-costaricensis-costa-rica",
  "parent": "selenicereus-costaricensis",
  "rank": "cultivar",
  "name": "Selenicereus costaricensis 'Costa Rica'",
  "author": "",
  "common": {
   "fr": [],
   "en": [],
   "de": []
  },
  "synonyms": [
   "'Roxa do Pará' (Brazil)"
  ],
  "names_src": [
   {
    "k": "tropic-trindade-2023-plants",
    "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/PMC10537634/fullTextXML",
    "loc": "section 4; Table 1"
   }
  ],
  "cultivar": {
   "self": "self-compatible",
   "pollinizers": [],
   "incompatible_with": [],
   "group": "",
   "origin": {
    "en": "Known worldwide as pitaya 'Costa Rica' and in Brazil as 'Roxa do Pará'. Red skin and flesh, fruit 400–800 g.",
    "fr": "Connu partout comme pitaya 'Costa Rica' et au Brésil comme 'Roxa do Pará'. Peau et chair rouges, fruits de 400–800 g."
   },
   "src": [
    {
     "k": "tropic-trindade-2023-plants",
     "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/PMC10537634/fullTextXML",
     "loc": "section 4; Table 1 (SC)"
    }
   ]
  }
 },
 {
  "id": "selenicereus-megalanthus",
  "parent": "selenicereus",
  "rank": "species",
  "name": "Selenicereus megalanthus",
  "author": "(K.Schum. ex Vaupel) Moran",
  "common": {
   "fr": [
    "pitaya jaune"
   ],
   "en": [
    "yellow pitaya",
    "yellow dragon fruit"
   ],
   "de": [
    "Gelbe Pitahaya"
   ]
  },
  "synonyms": [
   "Hylocereus megalanthus (K.Schum. ex Vaupel) Ralf Bauer",
   "Mediocactus megalanthus (K.Schum. ex Vaupel) Britton & Rose",
   "Cereus megalanthus K.Schum. ex Vaupel"
  ],
  "names_src": [
   {
    "k": "powo",
    "url": "https://powo.science.kew.org/taxon/urn:lsid:ipni.org:names:232386-2",
    "loc": "URL from WCVP record on GBIF; page not opened (HTTP 403)"
   },
   {
    "k": "tropic-wcvp-gbif",
    "url": "https://www.gbif.org/species/206851481",
    "loc": "WCVP: ACCEPTED, Gentes Herbarum 8: 325 (1953); Colombia to Peru"
   },
   {
    "k": "wfo",
    "url": "https://list.worldfloraonline.org/wfo-0001288022",
    "loc": "accepted; H. megalanthus synonym"
   }
  ],
  "taxonomy": {
   "en": "It has been put in Mediocactus (1920), Selenicereus (Moran 1953) and Hylocereus (Bauer 2003). Tel-Zur's molecular work places it inside the old Hylocereus. Now that Hylocereus is merged into Selenicereus, the name S. megalanthus covers both views, and WFO and WCVP accept it.",
   "fr": "Elle a été placée dans Mediocactus (1920), Selenicereus (Moran 1953) puis Hylocereus (Bauer 2003). Les travaux moléculaires de Tel-Zur la placent dans l'ancien Hylocereus. Depuis la fusion de Hylocereus dans Selenicereus, le nom S. megalanthus couvre les deux points de vue, et WFO comme WCVP l'acceptent.",
   "src": [
    {
     "k": "tropic-telzur-2022-hortres",
     "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/PMC9189603/fullTextXML",
     "loc": "paragraph on the taxonomy of H. megalanthus"
    },
    {
     "k": "wfo",
     "url": "https://list.worldfloraonline.org/wfo-0001288022",
     "loc": "accepted"
    }
   ]
  },
  "ploidy": {
   "en": "Tetraploid, 2n = 4x = 44, probably of autopolyploid origin.",
   "fr": "Tétraploïde, 2n = 4x = 44, probablement d'origine autopolyploïde.",
   "src": [
    {
     "k": "tropic-telzur-2022-hortres",
     "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/PMC9189603/fullTextXML",
     "loc": "section on cytology; Table 1"
    }
   ]
  },
  "mating": {
   "system": "mixed",
   "flags": [
    "hermaphrodite",
    "self-compatible"
   ],
   "en": "Self-compatible: it sets fruit with the same low seed set after selfing as after crossing. 70–80% of its pollen is viable, and the low seed set is put down to chromosome irregularities. The commercial cultivars are self-fertile.",
   "fr": "Autocompatible : elle noue avec la même faible mise à graines en autofécondation qu'en croisement. 70–80 % de son pollen est viable, et la faible mise à graines est attribuée à des anomalies chromosomiques. Les cultivars commerciaux sont autofertiles.",
   "src": [
    {
     "k": "tropic-telzur-2022-hortres",
     "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/PMC9189603/fullTextXML",
     "loc": "section on cytology"
    },
    {
     "k": "tropic-trindade-2023-plants",
     "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/PMC10537634/fullTextXML",
     "loc": "section 4 (yellow pitaya cultivars)"
    }
   ]
  }
 },
 {
  "id": "selenicereus-megalanthus-palora",
  "parent": "selenicereus-megalanthus",
  "rank": "cultivar",
  "name": "Selenicereus megalanthus 'Palora'",
  "author": "",
  "common": {
   "fr": [],
   "en": [],
   "de": []
  },
  "synonyms": [],
  "names_src": [
   {
    "k": "tropic-trindade-2023-plants",
    "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/PMC10537634/fullTextXML",
    "loc": "section 4; Table 1"
   }
  ],
  "cultivar": {
   "self": "self-compatible",
   "pollinizers": [],
   "incompatible_with": [],
   "group": "",
   "origin": {
    "en": "Main commercial yellow pitaya from Ecuador: fruit 200–500 g, about 22 °Brix. It is sensitive to nematodes.",
    "fr": "Principale pitaya jaune commerciale, originaire d'Équateur : fruits de 200–500 g, environ 22 °Brix. Sensible aux nématodes."
   },
   "src": [
    {
     "k": "tropic-trindade-2023-plants",
     "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/PMC10537634/fullTextXML",
     "loc": "section 4; Table 1 (SC)"
    }
   ]
  }
 },
 {
  "id": "selenicereus-megalanthus-colombian-yellow",
  "parent": "selenicereus-megalanthus",
  "rank": "cultivar",
  "name": "Selenicereus megalanthus 'Colombian Yellow'",
  "author": "",
  "common": {
   "fr": [],
   "en": [],
   "de": []
  },
  "synonyms": [
   "'Colombiana'",
   "'Yellow Dragon' (Trindade et al. treat it as the same; UF/IFAS lists a Florida 'Yellow Dragon')"
  ],
  "names_src": [
   {
    "k": "tropic-trindade-2023-plants",
    "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/PMC10537634/fullTextXML",
    "loc": "section 4; Table 1"
   }
  ],
  "cultivar": {
   "self": "self-compatible",
   "pollinizers": [],
   "incompatible_with": [],
   "group": "",
   "origin": {
    "en": "Main yellow pitaya cultivar from Colombia, self-fertile. A 'Yellow Dragon' (S. megalanthus) in Florida is also listed as not needing cross-pollination; whether it is the same clone is not shown.",
    "fr": "Principal cultivar de pitaya jaune de Colombie, autofertile. Un 'Yellow Dragon' (S. megalanthus) de Floride est aussi classé sans besoin de pollinisation croisée ; rien ne montre qu'il s'agit du même clone."
   },
   "src": [
    {
     "k": "tropic-trindade-2023-plants",
     "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/PMC10537634/fullTextXML",
     "loc": "section 4; Table 1 (SC)"
    },
    {
     "k": "tropic-ufifas-hs1068-2005",
     "url": "https://journals.flvc.org/edis/article/download/116119/114296/167134",
     "loc": "Table 2 ('Yellow Dragon', Florida, Selenicereus megalanthus, 'No')"
    }
   ]
  },
  "synonyms_fr": [
   "'Colombiana'",
   "'Yellow Dragon' (identique selon Trindade et al. ; l’UF/IFAS cite un 'Yellow Dragon' de Floride)"
  ]
 },
 {
  "id": "selenicereus-physical-graffiti",
  "parent": "selenicereus",
  "rank": "cultivar",
  "name": "Selenicereus 'Physical Graffiti'",
  "author": "",
  "common": {
   "fr": [],
   "en": [],
   "de": []
  },
  "synonyms": [],
  "names_src": [
   {
    "k": "tropic-ufifas-hs1068-2005",
    "url": "https://journals.flvc.org/edis/article/download/116119/114296/167134",
    "loc": "Table 2"
   },
   {
    "k": "tropic-trindade-2023-plants",
    "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/PMC10537634/fullTextXML",
    "loc": "section 4"
   }
  ],
  "cultivar": {
   "self": "self-compatible",
   "pollinizers": [],
   "incompatible_with": [],
   "group": "",
   "origin": {
    "en": "Hybrid from California, grown in Iberia. The sources disagree on its parents: UF/IFAS says H. polyrhizus × H. undatus, Trindade et al. say S. guatemalensis × S. undatus. UF/IFAS lists it as not needing cross-pollination.",
    "fr": "Hybride californien, cultivé en péninsule Ibérique. Les sources divergent sur ses parents : H. polyrhizus × H. undatus pour l'UF/IFAS, S. guatemalensis × S. undatus pour Trindade et al. L'UF/IFAS le classe sans besoin de pollinisation croisée."
   },
   "src": [
    {
     "k": "tropic-ufifas-hs1068-2005",
     "url": "https://journals.flvc.org/edis/article/download/116119/114296/167134",
     "loc": "Table 2 ('No')"
    },
    {
     "k": "tropic-trindade-2023-plants",
     "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/PMC10537634/fullTextXML",
     "loc": "section 4"
    }
   ]
  }
 },
 {
  "id": "selenicereus-delight",
  "parent": "selenicereus",
  "rank": "cultivar",
  "name": "Selenicereus 'Delight'",
  "author": "",
  "common": {
   "fr": [],
   "en": [],
   "de": []
  },
  "synonyms": [],
  "names_src": [
   {
    "k": "tropic-ufifas-hs1068-2005",
    "url": "https://journals.flvc.org/edis/article/download/116119/114296/167134",
    "loc": "Table 2"
   },
   {
    "k": "tropic-trindade-2023-plants",
    "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/PMC10537634/fullTextXML",
    "loc": "section 4"
   }
  ],
  "cultivar": {
   "self": "self-compatible",
   "pollinizers": [],
   "incompatible_with": [],
   "group": "",
   "origin": {
    "en": "Californian hybrid, white flesh. Same parentage disagreement as 'Physical Graffiti': H. polyrhizus × H. undatus (UF/IFAS) or S. guatemalensis × S. undatus (Trindade et al.). UF/IFAS lists it as not needing cross-pollination.",
    "fr": "Hybride californien à chair blanche. Même désaccord sur les parents que 'Physical Graffiti' : H. polyrhizus × H. undatus (UF/IFAS) ou S. guatemalensis × S. undatus (Trindade et al.). L'UF/IFAS le classe sans besoin de pollinisation croisée."
   },
   "src": [
    {
     "k": "tropic-ufifas-hs1068-2005",
     "url": "https://journals.flvc.org/edis/article/download/116119/114296/167134",
     "loc": "Table 2 ('No')"
    },
    {
     "k": "tropic-trindade-2023-plants",
     "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/PMC10537634/fullTextXML",
     "loc": "section 4"
    }
   ]
  }
 },
 {
  "id": "selenicereus-halleys-comet",
  "parent": "selenicereus",
  "rank": "cultivar",
  "name": "Selenicereus 'Halley's Comet'",
  "author": "",
  "common": {
   "fr": [],
   "en": [],
   "de": []
  },
  "synonyms": [
   "'Halleys Comet'"
  ],
  "names_src": [
   {
    "k": "tropic-ufifas-hs1068-2005",
    "url": "https://journals.flvc.org/edis/article/download/116119/114296/167134",
    "loc": "Table 2"
   }
  ],
  "cultivar": {
   "self": "self-compatible",
   "pollinizers": [],
   "incompatible_with": [],
   "group": "",
   "origin": {
    "en": "Californian hybrid H. undatus × H. polyrhizus with large fruit (1.5–2.0 lb). UF/IFAS (2005) lists it as not needing cross-pollination.",
    "fr": "Hybride californien H. undatus × H. polyrhizus à gros fruits (1,5–2,0 lb). L'UF/IFAS (2005) le classe sans besoin de pollinisation croisée."
   },
   "src": [
    {
     "k": "tropic-ufifas-hs1068-2005",
     "url": "https://journals.flvc.org/edis/article/download/116119/114296/167134",
     "loc": "Table 2 ('No')"
    }
   ]
  }
 },
 {
  "id": "elaeagnaceae",
  "parent": null,
  "rank": "family",
  "name": "Elaeagnaceae",
  "author": "Juss.",
  "common": {
   "fr": [
    "éléagnacées"
   ],
   "en": [
    "oleaster family"
   ],
   "de": [
    "Ölweidengewächse"
   ]
  },
  "names_src": [
   {
    "k": "powo",
    "url": "https://www.checklistbank.org/dataset/2000/taxon/xMR",
    "loc": "accepted family (POWO/WCVP export 2026-10-07, ChecklistBank dataset 2000)"
   },
   {
    "k": "wfo",
    "url": "https://wfoplantlist.org/taxon/wfo-7000000209",
    "loc": "accepted family, order Rosales (WFO Plant List 2026-06)"
   }
  ],
  "taxonomy": {
   "en": "A small family placed in the order Rosales in the APG system.",
   "fr": "Petite famille placée dans l'ordre des Rosales dans la classification APG.",
   "src": [
    {
     "k": "berries-apweb-rosales",
     "url": "http://www.mobot.org/MOBOT/research/APweb/orders/rosalesweb.htm",
     "loc": "Rosales: list of included families"
    },
    {
     "k": "berries-nybom-2023",
     "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10743242/",
     "loc": "1. Introduction"
    }
   ]
  }
 },
 {
  "id": "hippophae",
  "parent": "elaeagnaceae",
  "rank": "genus",
  "name": "Hippophae",
  "author": "L.",
  "common": {
   "fr": [
    "argousier"
   ],
   "en": [
    "sea buckthorn"
   ],
   "de": [
    "Sanddorn"
   ]
  },
  "names_src": [
   {
    "k": "powo",
    "url": "https://www.checklistbank.org/dataset/2000/taxon/urn:lsid:ipni.org:names:14480-1",
    "loc": "accepted genus; 8 accepted species (POWO/WCVP export 2026-10-07, ChecklistBank dataset 2000)"
   },
   {
    "k": "wfo",
    "url": "https://wfoplantlist.org/taxon/wfo-4000017969",
    "loc": "accepted genus (WFO Plant List 2026-06)"
   }
  ],
  "taxonomy": {
   "en": "POWO accepts eight species: H. gyantsensis, H. litangensis, H. neurocarpa, H. rhamnoides, H. salicifolia, H. sinensis, H. tibetana and the hybrid H. × goniocarpa. Rousi recognized only three species, and the treatment of the genus has long been disputed.",
   "fr": "POWO accepte huit espèces : H. gyantsensis, H. litangensis, H. neurocarpa, H. rhamnoides, H. salicifolia, H. sinensis, H. tibetana et l'hybride H. × goniocarpa. Rousi n'en reconnaissait que trois, et le traitement du genre est discuté depuis longtemps.",
   "src": [
    {
     "k": "powo",
     "url": "https://www.checklistbank.org/dataset/2000/taxon/urn:lsid:ipni.org:names:14480-1",
     "loc": "children (POWO/WCVP export 2026-10-07, ChecklistBank dataset 2000)"
    },
    {
     "k": "berries-nybom-2023",
     "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10743242/",
     "loc": "2. Taxonomy"
    }
   ]
  },
  "ploidy": {
   "en": "The taxa are diploid, 2n = 24.",
   "fr": "Les taxons sont diploïdes, 2n = 24.",
   "src": [
    {
     "k": "berries-nybom-2023",
     "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10743242/",
     "loc": "2. Taxonomy"
    }
   ]
  },
  "mating": {
   "system": "allogamous",
   "flags": [
    "dioecious",
    "wind-pollinated"
   ],
   "en": "Wind-pollinated shrubs with male and female flowers on separate plants.",
   "fr": "Arbustes pollinisés par le vent, à fleurs mâles et femelles sur des pieds séparés.",
   "src": [
    {
     "k": "berries-nybom-2023",
     "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10743242/",
     "loc": "1. Introduction"
    }
   ]
  },
  "interspecific": [
   {
    "with": "H. rhamnoides × H. neurocarpa",
    "en": "Three species look hybridogenic: H. gyantsensis from gene flow between H. rhamnoides subsp. yunnanensis and H. neurocarpa, H. goniocarpa and H. litangensis from H. rhamnoides subsp. sinensis and H. neurocarpa (subsp. stellatopilosa for litangensis).",
    "fr": "Trois espèces semblent d'origine hybride : H. gyantsensis par flux de gènes entre H. rhamnoides subsp. yunnanensis et H. neurocarpa, H. goniocarpa et H. litangensis entre H. rhamnoides subsp. sinensis et H. neurocarpa (subsp. stellatopilosa pour litangensis).",
    "src": [
     {
      "k": "berries-nybom-2023",
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10743242/",
      "loc": "2. Taxonomy"
     }
    ]
   }
  ]
 },
 {
  "id": "hippophae-rhamnoides",
  "parent": "hippophae",
  "rank": "species",
  "name": "Hippophae rhamnoides",
  "author": "L.",
  "common": {
   "fr": [
    "argousier",
    "argousier faux-nerprun"
   ],
   "en": [
    "sea buckthorn",
    "seaberry"
   ],
   "de": [
    "Sanddorn"
   ]
  },
  "synonyms": [
   "Elaeagnus rhamnoides (L.) A.Nelson",
   "Rhamnoides hippophae Moench",
   "Osyris rhamnoides (L.) Scop.",
   "Hippophae fluviatilis (Soest) Rivas Mart."
  ],
  "names_src": [
   {
    "k": "powo",
    "url": "https://www.checklistbank.org/dataset/2000/taxon/urn:lsid:ipni.org:names:323851-1",
    "loc": "accepted name (POWO/WCVP export 2026-10-07, ChecklistBank dataset 2000)"
   },
   {
    "k": "wfo",
    "url": "https://wfoplantlist.org/taxon/wfo-0000723743",
    "loc": "accepted name (WFO Plant List 2026-06)"
   }
  ],
  "taxonomy": {
   "en": "POWO and WFO agree on seven subspecies: carpatica, caucasica, mongolica, rhamnoides, turkestanica, wolongensis and yunnanensis. Both raise Rousi's subsp. sinensis to species (H. sinensis (Rousi) Tzvelev) and sink subsp. fluviatilis into subsp. rhamnoides, whereas the 2023 breeding review still uses Rousi's eight subspecies including sinensis and fluviatilis; Tzvelev also made species of carpatica, caucasica, mongolica, turkestanica and yunnanensis, but POWO lists those as synonyms. Both databases list Elaeagnus rhamnoides as a synonym.",
   "fr": "POWO et WFO s'accordent sur sept sous-espèces : carpatica, caucasica, mongolica, rhamnoides, turkestanica, wolongensis et yunnanensis. Tous deux élèvent la subsp. sinensis de Rousi au rang d'espèce (H. sinensis (Rousi) Tzvelev) et rattachent la subsp. fluviatilis à la subsp. rhamnoides, alors que la revue de 2023 sur la sélection garde les huit sous-espèces de Rousi, dont sinensis et fluviatilis ; Tzvelev avait aussi fait des espèces de carpatica, caucasica, mongolica, turkestanica et yunnanensis, que POWO traite en synonymes. Les deux bases citent Elaeagnus rhamnoides comme synonyme.",
   "src": [
    {
     "k": "powo",
     "url": "https://www.checklistbank.org/dataset/2000/taxon/urn:lsid:ipni.org:names:323851-1",
     "loc": "children (7 subspecies) and synonyms (POWO/WCVP export 2026-10-07, ChecklistBank dataset 2000)"
    },
    {
     "k": "powo",
     "url": "https://www.checklistbank.org/dataset/2000/taxon/urn:lsid:ipni.org:names:879997-1",
     "loc": "H. rhamnoides subsp. sinensis Rousi: synonym of H. sinensis (POWO/WCVP export 2026-10-07, ChecklistBank dataset 2000)"
    },
    {
     "k": "powo",
     "url": "https://www.checklistbank.org/dataset/2000/taxon/urn:lsid:ipni.org:names:70028336-1",
     "loc": "H. turkestanica (Rousi) Tzvelev: synonym (POWO/WCVP export 2026-10-07, ChecklistBank dataset 2000)"
    },
    {
     "k": "powo",
     "url": "https://www.checklistbank.org/dataset/2000/taxon/urn:lsid:ipni.org:names:70023902-1",
     "loc": "subsp. fluviatilis Soest: synonym of subsp. rhamnoides (POWO/WCVP export 2026-10-07, ChecklistBank dataset 2000)"
    },
    {
     "k": "wfo",
     "url": "https://wfoplantlist.org/taxon/wfo-0000723743",
     "loc": "parts and synonyms (WFO Plant List 2026-06)"
    },
    {
     "k": "wfo",
     "url": "https://wfoplantlist.org/taxon/wfo-0000723750",
     "loc": "H. sinensis accepted (WFO Plant List 2026-06)"
    },
    {
     "k": "wfo",
     "url": "https://wfoplantlist.org/taxon/wfo-0001360593",
     "loc": "subsp. fluviatilis: synonym of subsp. rhamnoides (WFO Plant List 2026-06)"
    },
    {
     "k": "berries-nybom-2023",
     "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10743242/",
     "loc": "2. Taxonomy"
    }
   ]
  },
  "ploidy": {
   "en": "2n = 24, diploid, with an XY sex-chromosome system. Sources disagree on which sex chromosome is larger: a 2017 genome study reports a small Y and large X, the 2023 review says the Y is slightly longer.",
   "fr": "2n = 24, diploïde, avec un système de chromosomes sexuels XY. Les sources divergent sur le plus grand : une étude génomique de 2017 décrit un petit Y et un grand X, la revue de 2023 dit le Y un peu plus long.",
   "src": [
    {
     "k": "berries-puterova-2017",
     "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC5381607/",
     "loc": "Abstract; Introduction"
    },
    {
     "k": "berries-nybom-2023",
     "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10743242/",
     "loc": "4. Sex Determination"
    }
   ]
  },
  "mating": {
   "system": "allogamous",
   "flags": [
    "dioecious",
    "wind-pollinated"
   ],
   "en": "Strictly two-sexed (dioecious) and wind-pollinated, so every female needs a male nearby; the flowers have no nectar or scent. Rare exceptions exist: some males carry hermaphrodite flowers, 2–4% of plants in some Indian wild populations were polygamomonoecious, and some fruit set in bagged flowers (16% vs 68%; 3% vs 60% in a follow-up) was reported as facultative apomixis, still unconfirmed.",
   "fr": "Strictement dioïque et pollinisé par le vent : chaque pied femelle a besoin d'un mâle proche ; les fleurs n'ont ni nectar ni parfum. Il existe de rares exceptions : certains mâles portent des fleurs hermaphrodites, 2–4 % des plantes de populations sauvages indiennes étaient polygamomonoïques, et une fructification en fleurs ensachées (16 % contre 68 % ; 3 % contre 60 % dans une étude suivante) a été attribuée à une apomixie facultative, non confirmée.",
   "src": [
    {
     "k": "berries-nybom-2023",
     "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10743242/",
     "loc": "1. Introduction; 4. Sex Determination; 8. Breeding of Male Plants"
    },
    {
     "k": "berries-mangla-tandon-2014",
     "url": "https://www.currentscience.ac.in/Volumes/106/12/1731.pdf",
     "loc": "Abstract; results on anthesis ('flowers lack nectar and fragrance')"
    }
   ]
  },
  "interspecific": [
   {
    "with": "Hippophae neurocarpa",
    "en": "Natural gene flow with H. neurocarpa is thought to have produced H. gyantsensis, H. goniocarpa and H. litangensis.",
    "fr": "Un flux de gènes naturel avec H. neurocarpa aurait produit H. gyantsensis, H. goniocarpa et H. litangensis.",
    "src": [
     {
      "k": "berries-nybom-2023",
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10743242/",
      "loc": "2. Taxonomy"
     }
    ]
   },
   {
    "with": "between subspecies (mongolica × rhamnoides, mongolica × sinensis, rhamnoides × caucasica)",
    "en": "Breeding relies mainly on crosses between subspecies, e.g. Russian and Nordic cultivars from mongolica × rhamnoides and Chinese ones from mongolica × sinensis.",
    "fr": "La sélection repose surtout sur des croisements entre sous-espèces, par exemple mongolica × rhamnoides pour des cultivars russes et nordiques, mongolica × sinensis pour des cultivars chinois.",
    "src": [
     {
      "k": "berries-nybom-2023",
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10743242/",
      "loc": "Abstract; 6. Sea Buckthorn Breeding around the World"
     }
    ],
    "with_fr": "entre sous-espèces (mongolica × rhamnoides, mongolica × sinensis, rhamnoides × caucasica)"
   }
  ],
  "varieties": {
   "en": "Cultivars are either female (fruiting) or male (pollen only). Males are chosen for vigour, persistence and for shedding pollen when the females flower; continental males are often not cold-hardy enough for Finland and the Baltics.",
   "fr": "Les cultivars sont soit femelles (fructifères), soit mâles (pollen seul). Les mâles sont choisis pour leur vigueur, leur longévité et une émission de pollen qui coïncide avec la floraison des femelles ; les mâles continentaux manquent souvent de rusticité pour la Finlande et les pays baltes.",
   "src": [
    {
     "k": "berries-nybom-2023",
     "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10743242/",
     "loc": "8. Breeding of Male Plants"
    },
    {
     "k": "berries-luke-2015",
     "url": "https://jukuri.luke.fi/server/api/core/bitstreams/a28bf67f-3204-4fcf-a426-db988ec0d34e/content",
     "loc": "Höhne, p. 32: frost susceptibility of male varieties"
    }
   ]
  },
  "isolation": {
   "en": "Ratios differ by source: 1 male to 6–8 females in British Columbia orchards (4000 trees/ha in Li 1999, 2500 trees/ha in Li 2002); 1:7 in Ontario; 1:8 in mixed or single rows in Latvia; 'about 10%' males in the 2023 review; '6–7%' males in a 2018 study; 1 male for 6 to 10 females in a nursery catalogue. Distance also differs: in Ladakh airborne pollen reached only 15 m and males should be within 10–15 m, while Wikipedia gives about 100 m (attributed to Li & Schroeder 1996, not checked).",
   "fr": "Les proportions varient selon les sources : 1 mâle pour 6–8 femelles en vergers de Colombie-Britannique (4000 arbres/ha chez Li 1999, 2500 arbres/ha chez Li 2002) ; 1:7 en Ontario ; 1:8 en rangs mixtes ou séparés en Lettonie ; « environ 10 % » de mâles dans la revue de 2023 ; « 6–7 % » de mâles dans une étude de 2018 ; 1 mâle pour 6 à 10 femelles dans un catalogue de pépinière. La distance diffère aussi : au Ladakh, le pollen dans l'air ne dépassait pas 15 m et les mâles devraient être à moins de 10–15 m, alors que Wikipédia donne environ 100 m (attribué à Li & Schroeder 1996, non vérifié).",
   "src": [
    {
     "k": "berries-li-1999",
     "url": "https://hort.purdue.edu/newcrop/proceedings1999/v4-335.html",
     "loc": "Cultivation section"
    },
    {
     "k": "berries-wisc-uncommonfruit",
     "url": "https://uncommonfruit.cias.wisc.edu/seaberry-sea-buckthorn/",
     "loc": "pollination; Farm Observations: 1 male per 6 to 8 females, males dispersed uniformly"
    },
    {
     "k": "berries-li-2002",
     "url": "https://hort.purdue.edu/newcrop/ncnu02/v5-393.html",
     "loc": "Sea Buckthorn Cultivation"
    },
    {
     "k": "berries-omafra-seabuckthorn",
     "url": "https://www.ontario.ca/page/introduction-sea-buckthorn",
     "loc": "Agronomic practices > Spacing"
    },
    {
     "k": "berries-luke-2015",
     "url": "https://jukuri.luke.fi/server/api/core/bitstreams/a28bf67f-3204-4fcf-a426-db988ec0d34e/content",
     "loc": "Brūvelis, p. 37: Planting and maintenance"
    },
    {
     "k": "berries-nybom-2023",
     "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10743242/",
     "loc": "4. Sex Determination"
    },
    {
     "k": "berries-zhou-2018",
     "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC6100209/",
     "loc": "1. Introduction"
    },
    {
     "k": "berries-lubera-pollmix",
     "url": "https://www.lubera.com/de/shop/sanddorn-pollmix-2-maennlich_produkt-193.html",
     "loc": "product description, Pollmix 2"
    },
    {
     "k": "berries-mangla-tandon-2014",
     "url": "https://www.currentscience.ac.in/Volumes/106/12/1731.pdf",
     "loc": "Abstract; Figure 2 pollen flow"
    },
    {
     "k": "berries-wikipedia-sea-buckthorn",
     "url": "https://en.wikipedia.org/wiki/Sea_buckthorn",
     "loc": "Propagation section"
    }
   ]
  },
  "true_to_type": {
   "value": "no",
   "en": "Because the species is obligately outcrossing, every seedling is a new genotype; a seedling may be male and its sex is unknown until first flowering (3–5 years in the 2023 review, 3–4 years in the field per a 2015 study, 5–7 years until berries per a 2018 study). DNA-sexed seedlings in Ladakh were close to 1:1 (54, 49 and 56 males out of 100 in three populations), although adult wild stands can be biased either way (0.435:1 to 1.602:1).",
   "fr": "L'espèce étant obligatoirement allogame, chaque semis est un génotype nouveau ; il peut être mâle et son sexe reste inconnu jusqu'à la première floraison (3–5 ans selon la revue de 2023, 3–4 ans au champ selon une étude de 2015, 5–7 ans jusqu'aux baies selon une étude de 2018). Des semis sexés par ADN au Ladakh étaient proches de 1:1 (54, 49 et 56 mâles sur 100 dans trois populations), bien que les peuplements sauvages adultes puissent être déséquilibrés dans un sens ou l'autre (0,435:1 à 1,602:1).",
   "src": [
    {
     "k": "berries-nybom-2023",
     "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10743242/",
     "loc": "4. Sex Determination; 5. DNA-Based Identification of Cultivars"
    },
    {
     "k": "berries-chawla-2015",
     "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC4410991/",
     "loc": "Introduction"
    },
    {
     "k": "berries-zhou-2018",
     "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC6100209/",
     "loc": "1. Introduction"
    },
    {
     "k": "berries-jhajhariya-2024",
     "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11025892/",
     "loc": "Results: secondary and primary sex ratio"
    },
    {
     "k": "berries-omafra-seabuckthorn",
     "url": "https://www.ontario.ca/page/introduction-sea-buckthorn",
     "loc": "Agronomic practices > Propagation"
    }
   ]
  },
  "propagation": {
   "en": "Cultivars are propagated vegetatively, by hardwood or softwood cuttings (also root cuttings, suckers or micropropagation), so each plant keeps the known sex and traits of its parent clone. Hardwood cuttings rooted in Germany were nearly 1 m tall by November and about 80% could be planted.",
   "fr": "Les cultivars sont multipliés par voie végétative, par boutures ligneuses ou herbacées (aussi boutures de racines, drageons ou micropropagation), si bien que chaque plant garde le sexe et les caractères connus du clone parent. En Allemagne, des boutures ligneuses atteignaient presque 1 m en novembre et environ 80 % pouvaient être plantées.",
   "src": [
    {
     "k": "berries-nybom-2023",
     "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10743242/",
     "loc": "5. DNA-Based Identification; 9.1 Conventional Breeding Methods"
    },
    {
     "k": "berries-omafra-seabuckthorn",
     "url": "https://www.ontario.ca/page/introduction-sea-buckthorn",
     "loc": "Agronomic practices > Propagation"
    },
    {
     "k": "berries-luke-2015",
     "url": "https://jukuri.luke.fi/server/api/core/bitstreams/a28bf67f-3204-4fcf-a426-db988ec0d34e/content",
     "loc": "Höhne, p. 31: Propagation of sea buckthorn plants"
    }
   ]
  }
 },
 {
  "id": "hippophae-rhamnoides-subsp-carpatica",
  "parent": "hippophae-rhamnoides",
  "rank": "subspecies",
  "name": "Hippophae rhamnoides subsp. carpatica",
  "author": "Rousi",
  "common": {},
  "names_src": [
   {
    "k": "powo",
    "url": "https://www.checklistbank.org/dataset/2000/taxon/urn:lsid:ipni.org:names:879993-1",
    "loc": "accepted name (POWO/WCVP export 2026-10-07, ChecklistBank dataset 2000)"
   },
   {
    "k": "wfo",
    "url": "https://wfoplantlist.org/taxon/wfo-0000723744",
    "loc": "accepted name (WFO Plant List 2026-06)"
   }
  ],
  "taxonomy": {
   "en": "European subspecies (Carpathians) used in cultivation and breeding; Ukrainian 'Medova Osin' derives from it.",
   "fr": "Sous-espèce européenne (Carpates) utilisée en culture et en sélection ; l'ukrainien 'Medova Osin' en est issu.",
   "src": [
    {
     "k": "powo",
     "url": "https://www.checklistbank.org/dataset/2000/taxon/urn:lsid:ipni.org:names:879993-1",
     "loc": "accepted name (POWO/WCVP export 2026-10-07, ChecklistBank dataset 2000)"
    },
    {
     "k": "wfo",
     "url": "https://wfoplantlist.org/taxon/wfo-0000723744",
     "loc": "accepted name (WFO Plant List 2026-06)"
    },
    {
     "k": "berries-nybom-2023",
     "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10743242/",
     "loc": "2. Taxonomy; 6. Breeding; Table 1"
    }
   ]
  }
 },
 {
  "id": "hippophae-rhamnoides-subsp-caucasica",
  "parent": "hippophae-rhamnoides",
  "rank": "subspecies",
  "name": "Hippophae rhamnoides subsp. caucasica",
  "author": "Rousi",
  "common": {},
  "names_src": [
   {
    "k": "powo",
    "url": "https://www.checklistbank.org/dataset/2000/taxon/urn:lsid:ipni.org:names:879994-1",
    "loc": "accepted name (POWO/WCVP export 2026-10-07, ChecklistBank dataset 2000)"
   },
   {
    "k": "wfo",
    "url": "https://wfoplantlist.org/taxon/wfo-0000723745",
    "loc": "accepted name (WFO Plant List 2026-06)"
   }
  ],
  "taxonomy": {
   "en": "Asian subspecies; wild stands are harvested in Iran and Turkey, and the Finnish 'Raisa' comes from rhamnoides × caucasica.",
   "fr": "Sous-espèce asiatique ; ses peuplements sauvages sont récoltés en Iran et en Turquie, et le finlandais 'Raisa' vient de rhamnoides × caucasica.",
   "src": [
    {
     "k": "powo",
     "url": "https://www.checklistbank.org/dataset/2000/taxon/urn:lsid:ipni.org:names:879994-1",
     "loc": "accepted name (POWO/WCVP export 2026-10-07, ChecklistBank dataset 2000)"
    },
    {
     "k": "wfo",
     "url": "https://wfoplantlist.org/taxon/wfo-0000723745",
     "loc": "accepted name (WFO Plant List 2026-06)"
    },
    {
     "k": "berries-nybom-2023",
     "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10743242/",
     "loc": "2. Taxonomy; 6. Breeding; Table 1"
    }
   ]
  }
 },
 {
  "id": "hippophae-rhamnoides-subsp-mongolica",
  "parent": "hippophae-rhamnoides",
  "rank": "subspecies",
  "name": "Hippophae rhamnoides subsp. mongolica",
  "author": "Rousi",
  "common": {},
  "names_src": [
   {
    "k": "powo",
    "url": "https://www.checklistbank.org/dataset/2000/taxon/urn:lsid:ipni.org:names:879996-1",
    "loc": "accepted name (POWO/WCVP export 2026-10-07, ChecklistBank dataset 2000)"
   },
   {
    "k": "wfo",
    "url": "https://wfoplantlist.org/taxon/wfo-0001364401",
    "loc": "accepted name (WFO Plant List 2026-06)"
   }
  ],
  "taxonomy": {
   "en": "The first subspecies taken into cultivation (Siberia, almost a century); base of most Russian cultivars, with fewer thorns and larger fruit.",
   "fr": "La première sous-espèce mise en culture (Sibérie, depuis près d'un siècle) ; base de la plupart des cultivars russes, moins épineux et à plus gros fruits.",
   "src": [
    {
     "k": "powo",
     "url": "https://www.checklistbank.org/dataset/2000/taxon/urn:lsid:ipni.org:names:879996-1",
     "loc": "accepted name (POWO/WCVP export 2026-10-07, ChecklistBank dataset 2000)"
    },
    {
     "k": "wfo",
     "url": "https://wfoplantlist.org/taxon/wfo-0001364401",
     "loc": "accepted name (WFO Plant List 2026-06)"
    },
    {
     "k": "berries-nybom-2023",
     "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10743242/",
     "loc": "2. Taxonomy; 6. Breeding; Table 1"
    }
   ]
  }
 },
 {
  "id": "hippophae-rhamnoides-subsp-rhamnoides",
  "parent": "hippophae-rhamnoides",
  "rank": "subspecies",
  "name": "Hippophae rhamnoides subsp. rhamnoides",
  "author": "",
  "common": {},
  "names_src": [
   {
    "k": "powo",
    "url": "https://www.checklistbank.org/dataset/2000/taxon/urn:lsid:ipni.org:names:77231762-1",
    "loc": "accepted name (POWO/WCVP export 2026-10-07, ChecklistBank dataset 2000)"
   },
   {
    "k": "wfo",
    "url": "https://wfoplantlist.org/taxon/wfo-1200063953",
    "loc": "accepted name (WFO Plant List 2026-06)"
   }
  ],
  "taxonomy": {
   "en": "The typical European subspecies of coasts and rivers; the German cultivars ('Leikora', 'Hergo', 'Askola', 'Frugana', 'Pollmix') were selected from it. POWO and WFO include subsp. fluviatilis Soest here.",
   "fr": "La sous-espèce européenne type, des côtes et des rivières ; les cultivars allemands ('Leikora', 'Hergo', 'Askola', 'Frugana', 'Pollmix') y ont été sélectionnés. POWO et WFO y incluent la subsp. fluviatilis Soest.",
   "src": [
    {
     "k": "powo",
     "url": "https://www.checklistbank.org/dataset/2000/taxon/urn:lsid:ipni.org:names:77231762-1",
     "loc": "accepted name (POWO/WCVP export 2026-10-07, ChecklistBank dataset 2000)"
    },
    {
     "k": "wfo",
     "url": "https://wfoplantlist.org/taxon/wfo-1200063953",
     "loc": "accepted name (WFO Plant List 2026-06)"
    },
    {
     "k": "berries-nybom-2023",
     "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10743242/",
     "loc": "2. Taxonomy; 6. Breeding; Table 1"
    }
   ]
  }
 },
 {
  "id": "hippophae-rhamnoides-subsp-turkestanica",
  "parent": "hippophae-rhamnoides",
  "rank": "subspecies",
  "name": "Hippophae rhamnoides subsp. turkestanica",
  "author": "Rousi",
  "common": {},
  "names_src": [
   {
    "k": "powo",
    "url": "https://www.checklistbank.org/dataset/2000/taxon/urn:lsid:ipni.org:names:879998-1",
    "loc": "accepted name (POWO/WCVP export 2026-10-07, ChecklistBank dataset 2000)"
   },
   {
    "k": "wfo",
    "url": "https://wfoplantlist.org/taxon/wfo-0001364402",
    "loc": "accepted name (WFO Plant List 2026-06)"
   }
  ],
  "taxonomy": {
   "en": "Central Asian subspecies, harvested wild in India; most sex-marker studies were made on it.",
   "fr": "Sous-espèce d'Asie centrale, récoltée à l'état sauvage en Inde ; la plupart des études de marqueurs du sexe portent sur elle.",
   "src": [
    {
     "k": "powo",
     "url": "https://www.checklistbank.org/dataset/2000/taxon/urn:lsid:ipni.org:names:879998-1",
     "loc": "accepted name (POWO/WCVP export 2026-10-07, ChecklistBank dataset 2000)"
    },
    {
     "k": "wfo",
     "url": "https://wfoplantlist.org/taxon/wfo-0001364402",
     "loc": "accepted name (WFO Plant List 2026-06)"
    },
    {
     "k": "berries-nybom-2023",
     "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10743242/",
     "loc": "2. Taxonomy; 6. Breeding; Table 1"
    }
   ]
  }
 },
 {
  "id": "hippophae-rhamnoides-subsp-wolongensis",
  "parent": "hippophae-rhamnoides",
  "rank": "subspecies",
  "name": "Hippophae rhamnoides subsp. wolongensis",
  "author": "Y.S.Lian, K.Sun & X.L.Chen",
  "common": {},
  "names_src": [
   {
    "k": "powo",
    "url": "https://www.checklistbank.org/dataset/2000/taxon/urn:lsid:ipni.org:names:70027930-1",
    "loc": "accepted name (POWO/WCVP export 2026-10-07, ChecklistBank dataset 2000)"
   },
   {
    "k": "wfo",
    "url": "https://wfoplantlist.org/taxon/wfo-0001360598",
    "loc": "accepted name (WFO Plant List 2026-06)"
   }
  ],
  "taxonomy": {
   "en": "Accepted by POWO and WFO; not discussed in the breeding sources we opened.",
   "fr": "Acceptée par POWO et WFO ; non traitée dans les sources de sélection consultées.",
   "src": [
    {
     "k": "powo",
     "url": "https://www.checklistbank.org/dataset/2000/taxon/urn:lsid:ipni.org:names:70027930-1",
     "loc": "accepted name (POWO/WCVP export 2026-10-07, ChecklistBank dataset 2000)"
    },
    {
     "k": "wfo",
     "url": "https://wfoplantlist.org/taxon/wfo-0001360598",
     "loc": "accepted name (WFO Plant List 2026-06)"
    },
    {
     "k": "berries-nybom-2023",
     "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10743242/",
     "loc": "2. Taxonomy; 6. Breeding; Table 1"
    }
   ]
  }
 },
 {
  "id": "hippophae-rhamnoides-subsp-yunnanensis",
  "parent": "hippophae-rhamnoides",
  "rank": "subspecies",
  "name": "Hippophae rhamnoides subsp. yunnanensis",
  "author": "Rousi",
  "common": {},
  "names_src": [
   {
    "k": "powo",
    "url": "https://www.checklistbank.org/dataset/2000/taxon/urn:lsid:ipni.org:names:879999-1",
    "loc": "accepted name (POWO/WCVP export 2026-10-07, ChecklistBank dataset 2000)"
   },
   {
    "k": "wfo",
    "url": "https://wfoplantlist.org/taxon/wfo-0001046548",
    "loc": "accepted name (WFO Plant List 2026-06)"
   }
  ],
  "taxonomy": {
   "en": "Chinese subspecies; gene flow with H. neurocarpa probably gave H. gyantsensis.",
   "fr": "Sous-espèce chinoise ; un flux de gènes avec H. neurocarpa a probablement donné H. gyantsensis.",
   "src": [
    {
     "k": "powo",
     "url": "https://www.checklistbank.org/dataset/2000/taxon/urn:lsid:ipni.org:names:879999-1",
     "loc": "accepted name (POWO/WCVP export 2026-10-07, ChecklistBank dataset 2000)"
    },
    {
     "k": "wfo",
     "url": "https://wfoplantlist.org/taxon/wfo-0001046548",
     "loc": "accepted name (WFO Plant List 2026-06)"
    },
    {
     "k": "berries-nybom-2023",
     "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10743242/",
     "loc": "2. Taxonomy; 6. Breeding; Table 1"
    }
   ]
  }
 },
 {
  "id": "hippophae-sinensis",
  "parent": "hippophae",
  "rank": "species",
  "name": "Hippophae sinensis",
  "author": "(Rousi) Tzvelev",
  "common": {
   "en": [
    "Chinese sea buckthorn"
   ]
  },
  "synonyms": [
   "Hippophae rhamnoides subsp. sinensis Rousi",
   "Hippophae salicifolia subsp. sinensis (Rousi) Hyvönen"
  ],
  "names_src": [
   {
    "k": "powo",
    "url": "https://www.checklistbank.org/dataset/2000/taxon/urn:lsid:ipni.org:names:70028331-1",
    "loc": "accepted name (POWO/WCVP export 2026-10-07, ChecklistBank dataset 2000)"
   },
   {
    "k": "wfo",
    "url": "https://wfoplantlist.org/taxon/wfo-0000723750",
    "loc": "accepted name (WFO Plant List 2026-06)"
   }
  ],
  "taxonomy": {
   "en": "Accepted as a species by POWO and WFO, but still called H. rhamnoides subsp. sinensis in the breeding literature. It is the base of the first Chinese cultivars (hardy, very high in vitamin C, but very thorny and small-fruited).",
   "fr": "Acceptée comme espèce par POWO et WFO, mais encore appelée H. rhamnoides subsp. sinensis dans la littérature de sélection. Elle est à la base des premiers cultivars chinois (rustiques, très riches en vitamine C, mais très épineux et à petits fruits).",
   "src": [
    {
     "k": "powo",
     "url": "https://www.checklistbank.org/dataset/2000/taxon/urn:lsid:ipni.org:names:70028331-1",
     "loc": "accepted name (POWO/WCVP export 2026-10-07, ChecklistBank dataset 2000)"
    },
    {
     "k": "wfo",
     "url": "https://wfoplantlist.org/taxon/wfo-0000723750",
     "loc": "accepted name (WFO Plant List 2026-06)"
    },
    {
     "k": "berries-nybom-2023",
     "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10743242/",
     "loc": "2. Taxonomy; 6. Breeding"
    }
   ]
  },
  "mating": {
   "system": "allogamous",
   "flags": [
    "dioecious",
    "wind-pollinated"
   ],
   "en": "Dioecious and wind-pollinated like the rest of the genus; the Chinese male 'Wucixiong' was selected from it.",
   "fr": "Dioïque et anémophile comme le reste du genre ; le mâle chinois 'Wucixiong' y a été sélectionné.",
   "src": [
    {
     "k": "berries-nybom-2023",
     "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10743242/",
     "loc": "1. Introduction; 8. Breeding of Male Plants"
    }
   ]
  }
 },
 {
  "id": "hippophae-rhamnoides-leikora",
  "parent": "hippophae-rhamnoides",
  "rank": "cultivar",
  "name": "Hippophae rhamnoides 'Leikora'",
  "author": "",
  "common": {
   "en": [
    "sea buckthorn 'Leikora'"
   ],
   "fr": [
    "argousier 'Leikora'"
   ]
  },
  "synonyms": [],
  "names_src": [
   {
    "k": "berries-nybom-2023",
    "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10743242/",
    "loc": "Table 1"
   }
  ],
  "cultivar": {
   "self": "female",
   "pollinizers": [
    "hippophae-rhamnoides-pollmix"
   ],
   "incompatible_with": [],
   "group": "German, subsp. rhamnoides",
   "origin": {
    "en": "Selected in Berlin from wild subsp. rhamnoides (releases from 1979 on); vigorous, winter-hardy, limited suckering.",
    "fr": "Sélectionné à Berlin dans des populations sauvages de la subsp. rhamnoides (sorties à partir de 1979) ; vigoureux, rustique, drageonne peu."
   },
   "src": [
    {
     "k": "berries-nybom-2023",
     "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10743242/",
     "loc": "Table 1 (female cultivars)"
    },
    {
     "k": "berries-nybom-2023",
     "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10743242/",
     "loc": "6. Breeding: Berlin releases from 1979"
    },
    {
     "k": "berries-lubera-pollmix",
     "url": "https://www.lubera.com/de/shop/sanddorn-pollmix-2-maennlich_produkt-193.html",
     "loc": "product description: Pollmix 2 as pollinizer for Hergo, Frugana, Dorana, Askola; Leikora as partner"
    }
   ]
  },
  "mating": {
   "system": "allogamous",
   "flags": [
    "dioecious",
    "wind-pollinated"
   ],
   "en": "Female clone: fruits only if a male that flowers at the same time grows close by.",
   "fr": "Clone femelle : ne fructifie que si un mâle fleurissant en même temps pousse à proximité.",
   "src": [
    {
     "k": "berries-nybom-2023",
     "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10743242/",
     "loc": "1. Introduction; 8. Breeding of Male Plants"
    },
    {
     "k": "berries-mangla-tandon-2014",
     "url": "https://www.currentscience.ac.in/Volumes/106/12/1731.pdf",
     "loc": "Abstract"
    }
   ]
  }
 },
 {
  "id": "hippophae-rhamnoides-hergo",
  "parent": "hippophae-rhamnoides",
  "rank": "cultivar",
  "name": "Hippophae rhamnoides 'Hergo'",
  "author": "",
  "common": {
   "en": [
    "sea buckthorn 'Hergo'"
   ],
   "fr": [
    "argousier 'Hergo'"
   ]
  },
  "synonyms": [],
  "names_src": [
   {
    "k": "berries-nybom-2023",
    "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10743242/",
    "loc": "Table 1"
   }
  ],
  "cultivar": {
   "self": "female",
   "pollinizers": [
    "hippophae-rhamnoides-pollmix"
   ],
   "incompatible_with": [],
   "group": "German, subsp. rhamnoides",
   "origin": {
    "en": "Selected in Berlin from wild subsp. rhamnoides; vigorous, high-yielding, late, small fruit, suited to machine harvest.",
    "fr": "Sélectionné à Berlin dans la subsp. rhamnoides sauvage ; vigoureux, productif, tardif, petits fruits, adapté à la récolte mécanique."
   },
   "src": [
    {
     "k": "berries-nybom-2023",
     "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10743242/",
     "loc": "Table 1 (female cultivars)"
    },
    {
     "k": "berries-nybom-2023",
     "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10743242/",
     "loc": "6. Breeding: Berlin releases from 1979"
    },
    {
     "k": "berries-lubera-pollmix",
     "url": "https://www.lubera.com/de/shop/sanddorn-pollmix-2-maennlich_produkt-193.html",
     "loc": "product description: Pollmix 2 as pollinizer for Hergo, Frugana, Dorana, Askola; Leikora as partner"
    }
   ]
  },
  "mating": {
   "system": "allogamous",
   "flags": [
    "dioecious",
    "wind-pollinated"
   ],
   "en": "Female clone: fruits only if a male that flowers at the same time grows close by.",
   "fr": "Clone femelle : ne fructifie que si un mâle fleurissant en même temps pousse à proximité.",
   "src": [
    {
     "k": "berries-nybom-2023",
     "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10743242/",
     "loc": "1. Introduction; 8. Breeding of Male Plants"
    },
    {
     "k": "berries-mangla-tandon-2014",
     "url": "https://www.currentscience.ac.in/Volumes/106/12/1731.pdf",
     "loc": "Abstract"
    }
   ]
  }
 },
 {
  "id": "hippophae-rhamnoides-askola",
  "parent": "hippophae-rhamnoides",
  "rank": "cultivar",
  "name": "Hippophae rhamnoides 'Askola'",
  "author": "",
  "common": {
   "en": [
    "sea buckthorn 'Askola'"
   ],
   "fr": [
    "argousier 'Askola'"
   ]
  },
  "synonyms": [],
  "names_src": [
   {
    "k": "berries-nybom-2023",
    "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10743242/",
    "loc": "Table 1"
   }
  ],
  "cultivar": {
   "self": "female",
   "pollinizers": [
    "hippophae-rhamnoides-pollmix"
   ],
   "incompatible_with": [],
   "group": "German, subsp. rhamnoides",
   "origin": {
    "en": "Selected in Berlin from wild subsp. rhamnoides; dark orange fruit high in vitamins C and E.",
    "fr": "Sélectionné à Berlin dans la subsp. rhamnoides sauvage ; fruits orange foncé riches en vitamines C et E."
   },
   "src": [
    {
     "k": "berries-nybom-2023",
     "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10743242/",
     "loc": "Table 1 (female cultivars)"
    },
    {
     "k": "berries-nybom-2023",
     "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10743242/",
     "loc": "6. Breeding: Berlin releases from 1979"
    },
    {
     "k": "berries-lubera-pollmix",
     "url": "https://www.lubera.com/de/shop/sanddorn-pollmix-2-maennlich_produkt-193.html",
     "loc": "product description: Pollmix 2 as pollinizer for Hergo, Frugana, Dorana, Askola; Leikora as partner"
    }
   ]
  },
  "mating": {
   "system": "allogamous",
   "flags": [
    "dioecious",
    "wind-pollinated"
   ],
   "en": "Female clone: fruits only if a male that flowers at the same time grows close by.",
   "fr": "Clone femelle : ne fructifie que si un mâle fleurissant en même temps pousse à proximité.",
   "src": [
    {
     "k": "berries-nybom-2023",
     "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10743242/",
     "loc": "1. Introduction; 8. Breeding of Male Plants"
    },
    {
     "k": "berries-mangla-tandon-2014",
     "url": "https://www.currentscience.ac.in/Volumes/106/12/1731.pdf",
     "loc": "Abstract"
    }
   ]
  }
 },
 {
  "id": "hippophae-rhamnoides-frugana",
  "parent": "hippophae-rhamnoides",
  "rank": "cultivar",
  "name": "Hippophae rhamnoides 'Frugana'",
  "author": "",
  "common": {
   "en": [
    "sea buckthorn 'Frugana'"
   ],
   "fr": [
    "argousier 'Frugana'"
   ]
  },
  "synonyms": [],
  "names_src": [
   {
    "k": "berries-nybom-2023",
    "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10743242/",
    "loc": "Table 1"
   }
  ],
  "cultivar": {
   "self": "female",
   "pollinizers": [
    "hippophae-rhamnoides-pollmix"
   ],
   "incompatible_with": [],
   "group": "German, subsp. rhamnoides",
   "origin": {
    "en": "Selected in Berlin from wild subsp. rhamnoides; vigorous, high-yielding, early.",
    "fr": "Sélectionné à Berlin dans la subsp. rhamnoides sauvage ; vigoureux, productif, précoce."
   },
   "src": [
    {
     "k": "berries-nybom-2023",
     "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10743242/",
     "loc": "Table 1 (female cultivars)"
    },
    {
     "k": "berries-nybom-2023",
     "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10743242/",
     "loc": "6. Breeding: Berlin releases from 1979"
    },
    {
     "k": "berries-lubera-pollmix",
     "url": "https://www.lubera.com/de/shop/sanddorn-pollmix-2-maennlich_produkt-193.html",
     "loc": "product description: Pollmix 2 as pollinizer for Hergo, Frugana, Dorana, Askola; Leikora as partner"
    }
   ]
  },
  "mating": {
   "system": "allogamous",
   "flags": [
    "dioecious",
    "wind-pollinated"
   ],
   "en": "Female clone: fruits only if a male that flowers at the same time grows close by.",
   "fr": "Clone femelle : ne fructifie que si un mâle fleurissant en même temps pousse à proximité.",
   "src": [
    {
     "k": "berries-nybom-2023",
     "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10743242/",
     "loc": "1. Introduction; 8. Breeding of Male Plants"
    },
    {
     "k": "berries-mangla-tandon-2014",
     "url": "https://www.currentscience.ac.in/Volumes/106/12/1731.pdf",
     "loc": "Abstract"
    }
   ]
  }
 },
 {
  "id": "hippophae-rhamnoides-habego",
  "parent": "hippophae-rhamnoides",
  "rank": "cultivar",
  "name": "Hippophae rhamnoides 'Habego'",
  "author": "",
  "common": {
   "en": [
    "sea buckthorn 'Habego'"
   ],
   "fr": [
    "argousier 'Habego'"
   ]
  },
  "synonyms": [
   "'Orange Energy'"
  ],
  "names_src": [
   {
    "k": "berries-nybom-2023",
    "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10743242/",
    "loc": "Table 1"
   }
  ],
  "cultivar": {
   "self": "female",
   "pollinizers": [],
   "incompatible_with": [],
   "group": "German, subsp. rhamnoides × subsp. mongolica",
   "origin": {
    "en": "Second-step German cultivar from rhamnoides × mongolica (Altai), also sold as 'Orange Energy'; vigorous and high-yielding.",
    "fr": "Cultivar allemand de seconde génération issu de rhamnoides × mongolica (Altaï), vendu aussi sous le nom 'Orange Energy' ; vigoureux et productif."
   },
   "src": [
    {
     "k": "berries-nybom-2023",
     "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10743242/",
     "loc": "Table 1 (female cultivars)"
    }
   ]
  },
  "mating": {
   "system": "allogamous",
   "flags": [
    "dioecious",
    "wind-pollinated"
   ],
   "en": "Female clone: fruits only if a male that flowers at the same time grows close by.",
   "fr": "Clone femelle : ne fructifie que si un mâle fleurissant en même temps pousse à proximité.",
   "src": [
    {
     "k": "berries-nybom-2023",
     "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10743242/",
     "loc": "1. Introduction; 8. Breeding of Male Plants"
    },
    {
     "k": "berries-mangla-tandon-2014",
     "url": "https://www.currentscience.ac.in/Volumes/106/12/1731.pdf",
     "loc": "Abstract"
    }
   ]
  }
 },
 {
  "id": "hippophae-rhamnoides-chuyskaya",
  "parent": "hippophae-rhamnoides",
  "rank": "cultivar",
  "name": "Hippophae rhamnoides 'Chuyskaya'",
  "author": "",
  "common": {
   "en": [
    "sea buckthorn 'Chuyskaya'"
   ],
   "fr": [
    "argousier 'Chuyskaya'"
   ]
  },
  "synonyms": [
   "'Star of Altai'"
  ],
  "names_src": [
   {
    "k": "berries-nybom-2023",
    "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10743242/",
    "loc": "Table 1"
   }
  ],
  "cultivar": {
   "self": "female",
   "pollinizers": [],
   "incompatible_with": [],
   "group": "Russian, subsp. mongolica",
   "origin": {
    "en": "Altai cultivar (also 'Star of Altai'): thornless, compact, high-yielding, sweet, early.",
    "fr": "Cultivar de l'Altaï (aussi 'Star of Altai') : sans épines, compact, productif, sucré, précoce."
   },
   "src": [
    {
     "k": "berries-nybom-2023",
     "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10743242/",
     "loc": "Table 1 (female cultivars)"
    }
   ]
  },
  "mating": {
   "system": "allogamous",
   "flags": [
    "dioecious",
    "wind-pollinated"
   ],
   "en": "Female clone: fruits only if a male that flowers at the same time grows close by.",
   "fr": "Clone femelle : ne fructifie que si un mâle fleurissant en même temps pousse à proximité.",
   "src": [
    {
     "k": "berries-nybom-2023",
     "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10743242/",
     "loc": "1. Introduction; 8. Breeding of Male Plants"
    },
    {
     "k": "berries-mangla-tandon-2014",
     "url": "https://www.currentscience.ac.in/Volumes/106/12/1731.pdf",
     "loc": "Abstract"
    }
   ]
  }
 },
 {
  "id": "hippophae-rhamnoides-botanicheskaya-ljubitelskaya",
  "parent": "hippophae-rhamnoides",
  "rank": "cultivar",
  "name": "Hippophae rhamnoides 'Botanicheskaya Ljubitelskaya'",
  "author": "",
  "common": {
   "en": [
    "sea buckthorn 'Botanicheskaya Ljubitelskaya'"
   ],
   "fr": [
    "argousier 'Botanicheskaya Ljubitelskaya'"
   ]
  },
  "synonyms": [
   "'Sunny'"
  ],
  "names_src": [
   {
    "k": "berries-nybom-2023",
    "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10743242/",
    "loc": "Table 1"
   }
  ],
  "cultivar": {
   "self": "female",
   "pollinizers": [],
   "incompatible_with": [],
   "group": "Russian, subsp. mongolica × subsp. rhamnoides",
   "origin": {
    "en": "Moscow cultivar (also sold as 'Sunny'): high yield, large yellow fruit; the most widely grown cultivar in Sweden according to Höhne (2015).",
    "fr": "Cultivar de Moscou (vendu aussi comme 'Sunny') : fort rendement, gros fruits jaunes ; le plus cultivé en Suède selon Höhne (2015)."
   },
   "src": [
    {
     "k": "berries-nybom-2023",
     "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10743242/",
     "loc": "Table 1 (female cultivars)"
    },
    {
     "k": "berries-luke-2015",
     "url": "https://jukuri.luke.fi/server/api/core/bitstreams/a28bf67f-3204-4fcf-a426-db988ec0d34e/content",
     "loc": "Höhne, p. 32"
    }
   ]
  },
  "mating": {
   "system": "allogamous",
   "flags": [
    "dioecious",
    "wind-pollinated"
   ],
   "en": "Female clone: fruits only if a male that flowers at the same time grows close by.",
   "fr": "Clone femelle : ne fructifie que si un mâle fleurissant en même temps pousse à proximité.",
   "src": [
    {
     "k": "berries-nybom-2023",
     "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10743242/",
     "loc": "1. Introduction; 8. Breeding of Male Plants"
    },
    {
     "k": "berries-mangla-tandon-2014",
     "url": "https://www.currentscience.ac.in/Volumes/106/12/1731.pdf",
     "loc": "Abstract"
    }
   ]
  }
 },
 {
  "id": "hippophae-rhamnoides-pollmix",
  "parent": "hippophae-rhamnoides",
  "rank": "cultivar",
  "name": "Hippophae rhamnoides 'Pollmix'",
  "author": "",
  "common": {
   "en": [
    "sea buckthorn 'Pollmix'"
   ],
   "fr": [
    "argousier 'Pollmix'"
   ]
  },
  "synonyms": [],
  "names_src": [
   {
    "k": "berries-nybom-2023",
    "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10743242/",
    "loc": "8. Breeding of Male Plants"
   },
   {
    "k": "berries-rhs-pollmix",
    "url": "https://www.rhs.org.uk/plants/93257/hippophae-rhamnoides-pollmix-m/details",
    "loc": "RHS plant name 'Hippophae rhamnoides 'Pollmix' (m)'"
   }
  ],
  "cultivar": {
   "self": "male",
   "pollinizers": [],
   "incompatible_with": [],
   "group": "German, subsp. rhamnoides",
   "origin": {
    "en": "Name used for a group of four different male genotypes selected from wild subsp. rhamnoides in Germany (sold as 'Pollmix 1', '2', '3'...). The RHS notes it bears no berries.",
    "fr": "Nom donné à un groupe de quatre génotypes mâles différents sélectionnés dans la subsp. rhamnoides sauvage en Allemagne (vendus comme 'Pollmix 1', '2', '3'...). La RHS précise qu'il ne porte pas de baies."
   },
   "src": [
    {
     "k": "berries-nybom-2023",
     "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10743242/",
     "loc": "8. Breeding of Male Plants"
    },
    {
     "k": "berries-rhs-pollmix",
     "url": "https://www.rhs.org.uk/plants/93257/hippophae-rhamnoides-pollmix-m/details",
     "loc": "description: 'This male cultivar ... will not produce berries'"
    }
   ]
  },
  "mating": {
   "system": "allogamous",
   "flags": [
    "dioecious",
    "wind-pollinated"
   ],
   "en": "Male clone: gives pollen only; choose it to flower with the females.",
   "fr": "Clone mâle : ne donne que du pollen ; à choisir pour fleurir en même temps que les femelles.",
   "src": [
    {
     "k": "berries-nybom-2023",
     "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10743242/",
     "loc": "1. Introduction; 8. Breeding of Male Plants"
    },
    {
     "k": "berries-mangla-tandon-2014",
     "url": "https://www.currentscience.ac.in/Volumes/106/12/1731.pdf",
     "loc": "Abstract"
    }
   ]
  }
 },
 {
  "id": "hippophae-rhamnoides-lord",
  "parent": "hippophae-rhamnoides",
  "rank": "cultivar",
  "name": "Hippophae rhamnoides 'Lord'",
  "author": "",
  "common": {
   "en": [
    "sea buckthorn 'Lord'"
   ],
   "fr": [
    "argousier 'Lord'"
   ]
  },
  "synonyms": [],
  "names_src": [
   {
    "k": "berries-nybom-2023",
    "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10743242/",
    "loc": "8. Breeding of Male Plants"
   }
  ],
  "cultivar": {
   "self": "male",
   "pollinizers": [],
   "incompatible_with": [],
   "group": "Latvian",
   "origin": {
    "en": "Selected in Latvia from a cross between a mongolica × rhamnoides hybrid and local subsp. rhamnoides.",
    "fr": "Sélectionné en Lettonie à partir d'un croisement entre un hybride mongolica × rhamnoides et la subsp. rhamnoides locale."
   },
   "src": [
    {
     "k": "berries-nybom-2023",
     "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10743242/",
     "loc": "8. Breeding of Male Plants"
    }
   ]
  },
  "mating": {
   "system": "allogamous",
   "flags": [
    "dioecious",
    "wind-pollinated"
   ],
   "en": "Male clone: gives pollen only; choose it to flower with the females.",
   "fr": "Clone mâle : ne donne que du pollen ; à choisir pour fleurir en même temps que les femelles.",
   "src": [
    {
     "k": "berries-nybom-2023",
     "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10743242/",
     "loc": "1. Introduction; 8. Breeding of Male Plants"
    },
    {
     "k": "berries-mangla-tandon-2014",
     "url": "https://www.currentscience.ac.in/Volumes/106/12/1731.pdf",
     "loc": "Abstract"
    }
   ]
  }
 },
 {
  "id": "hippophae-rhamnoides-aley",
  "parent": "hippophae-rhamnoides",
  "rank": "cultivar",
  "name": "Hippophae rhamnoides 'Aley'",
  "author": "",
  "common": {
   "en": [
    "sea buckthorn 'Aley'"
   ],
   "fr": [
    "argousier 'Aley'"
   ]
  },
  "synonyms": [],
  "names_src": [
   {
    "k": "berries-nybom-2023",
    "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10743242/",
    "loc": "8. Breeding of Male Plants"
   }
  ],
  "cultivar": {
   "self": "male",
   "pollinizers": [],
   "incompatible_with": [],
   "group": "Russian",
   "origin": {
    "en": "Thornless, very vigorous male with winter-hardy flower buds, from the Lisavenko Research Institute; recommended for commercial plantations (the compact 'Gnom' for gardens).",
    "fr": "Mâle sans épines, très vigoureux, aux bourgeons floraux rustiques, du Lisavenko Research Institute ; conseillé pour les vergers (le compact 'Gnom' pour les jardins)."
   },
   "src": [
    {
     "k": "berries-nybom-2023",
     "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10743242/",
     "loc": "8. Breeding of Male Plants"
    }
   ]
  },
  "mating": {
   "system": "allogamous",
   "flags": [
    "dioecious",
    "wind-pollinated"
   ],
   "en": "Male clone: gives pollen only; choose it to flower with the females.",
   "fr": "Clone mâle : ne donne que du pollen ; à choisir pour fleurir en même temps que les femelles.",
   "src": [
    {
     "k": "berries-nybom-2023",
     "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10743242/",
     "loc": "1. Introduction; 8. Breeding of Male Plants"
    },
    {
     "k": "berries-mangla-tandon-2014",
     "url": "https://www.currentscience.ac.in/Volumes/106/12/1731.pdf",
     "loc": "Abstract"
    }
   ]
  }
 },
 {
  "id": "grossulariaceae",
  "parent": null,
  "rank": "family",
  "name": "Grossulariaceae",
  "author": "DC.",
  "common": {
   "fr": [
    "grossulariacées"
   ],
   "en": [
    "currant family",
    "gooseberry family"
   ],
   "de": [
    "Stachelbeergewächse"
   ]
  },
  "names_src": [
   {
    "k": "powo",
    "url": "https://www.checklistbank.org/dataset/2000/taxon/xDX",
    "loc": "accepted family (POWO/WCVP export 2026-10-07, ChecklistBank dataset 2000)"
   },
   {
    "k": "wfo",
    "url": "https://wfoplantlist.org/taxon/wfo-7000000259",
    "loc": "accepted family, order Saxifragales (WFO Plant List 2026-06)"
   }
  ],
  "taxonomy": {
   "en": "In the APG system Grossulariaceae sits in the order Saxifragales, not with the Rosaceae. Older books, such as McGregor's 1976 handbook, put gooseberries and currants in Saxifragaceae; the German variety office notes this former placement.",
   "fr": "Dans la classification APG, les Grossulariacées sont dans l'ordre des Saxifragales, pas avec les Rosacées. Les ouvrages anciens, comme le manuel de McGregor (1976), plaçaient groseilliers et cassissiers dans les Saxifragacées ; l'office allemand des variétés rappelle ce classement ancien.",
   "src": [
    {
     "k": "berries-apweb-saxifragales",
     "url": "http://www.mobot.org/MOBOT/research/APweb/orders/saxifragalesweb.htm",
     "loc": "Saxifragales: 'Includes ... Grossulariaceae ...'"
    },
    {
     "k": "wfo",
     "url": "https://wfoplantlist.org/taxon/wfo-7000000259",
     "loc": "placement Saxifragales/Grossulariaceae (WFO Plant List 2026-06)"
    },
    {
     "k": "berries-bsa-2002",
     "url": "https://www.bundessortenamt.de/bsa/media/Files/BSL/bsl_strauchbeerenobst_2002.pdf",
     "loc": "Rote Johannisbeere, introduction p. 10: 'Grossulariaceae (vormals Saxifragaceae)'"
    },
    {
     "k": "berries-mcgregor-1976",
     "url": "https://www.ars.usda.gov/ARSUserFiles/20220500/OnlinePollinationHandbook.pdf",
     "loc": "Gooseberry: 'family Saxifragaceae'"
    }
   ]
  }
 },
 {
  "id": "ribes",
  "parent": "grossulariaceae",
  "rank": "genus",
  "name": "Ribes",
  "author": "L.",
  "common": {
   "fr": [
    "groseillier",
    "cassissier"
   ],
   "en": [
    "currant",
    "gooseberry"
   ],
   "de": [
    "Johannisbeere",
    "Stachelbeere"
   ]
  },
  "names_src": [
   {
    "k": "powo",
    "url": "https://www.checklistbank.org/dataset/2000/taxon/urn:lsid:ipni.org:names:30002461-2",
    "loc": "accepted genus (POWO/WCVP export 2026-10-07, ChecklistBank dataset 2000)"
   },
   {
    "k": "wfo",
    "url": "https://wfoplantlist.org/taxon/wfo-4000033210",
    "loc": "accepted genus (WFO Plant List 2026-06)"
   }
  ],
  "ploidy": {
   "en": "Currant species are diploid, 2n = 16; the jostaberry hybrid is tetraploid.",
   "fr": "Les espèces de groseillier sont diploïdes, 2n = 16 ; l'hybride josta est tétraploïde.",
   "src": [
    {
     "k": "berries-bsa-2002",
     "url": "https://www.bundessortenamt.de/bsa/media/Files/BSL/bsl_strauchbeerenobst_2002.pdf",
     "loc": "Rote Johannisbeere, p. 10: 'Alle Arten sind diploid (2n = 16)'; Jostabeere, p. 127: 'tetraploid'"
    }
   ]
  },
  "mating": {
   "system": "mixed",
   "flags": [
    "hermaphrodite",
    "insect-pollinated",
    "self-compatible",
    "partly-self-compatible"
   ],
   "en": "The cultivated currants and gooseberries are self-fruitful to varying degrees, but most need insects to move pollen onto the stigma, and cross-pollination raises yields. Some wild American species tested were fully self-sterile.",
   "fr": "Les groseilliers et cassissiers cultivés sont autofertiles à des degrés divers, mais la plupart ont besoin d'insectes pour amener le pollen sur le stigmate, et la pollinisation croisée augmente les rendements. Certaines espèces sauvages américaines testées étaient totalement autostériles.",
   "src": [
    {
     "k": "berries-mcgregor-1976",
     "url": "https://www.ars.usda.gov/ARSUserFiles/20220500/OnlinePollinationHandbook.pdf",
     "loc": "Currant and Gooseberry, Pollination Requirements"
    },
    {
     "k": "berries-bsa-2002",
     "url": "https://www.bundessortenamt.de/bsa/media/Files/BSL/bsl_strauchbeerenobst_2002.pdf",
     "loc": "Rote Johannisbeere p. 10; Schwarze Johannisbeere; Stachelbeere p. 101-102"
    }
   ]
  }
 },
 {
  "id": "ribes-rubrum",
  "parent": "ribes",
  "rank": "species",
  "name": "Ribes rubrum",
  "author": "L.",
  "common": {
   "fr": [
    "groseillier à grappes",
    "groseillier rouge"
   ],
   "en": [
    "redcurrant",
    "red currant",
    "whitecurrant"
   ],
   "de": [
    "Rote Johannisbeere"
   ]
  },
  "synonyms": [
   "Ribes sativum (Rchb.) A.Berger",
   "Ribes vulgare Lam.",
   "Ribes rubrum var. sativum Rchb.",
   "Ribes sylvestre (Lam.) Mert. & W.D.J.Koch"
  ],
  "names_src": [
   {
    "k": "powo",
    "url": "https://www.checklistbank.org/dataset/2000/taxon/urn:lsid:ipni.org:names:792965-1",
    "loc": "accepted name (POWO/WCVP export 2026-10-07, ChecklistBank dataset 2000)"
   },
   {
    "k": "powo",
    "url": "https://www.checklistbank.org/dataset/2000/taxon/urn:lsid:ipni.org:names:77390319-1",
    "loc": "Ribes sativum (Rchb.) A.Berger: synonym of Ribes rubrum (POWO/WCVP export 2026-10-07, ChecklistBank dataset 2000)"
   },
   {
    "k": "wfo",
    "url": "https://wfoplantlist.org/taxon/wfo-0000405218",
    "loc": "accepted, 46 synonyms incl. R. sativum (Rchb.) A.Berger, R. vulgare Lam. (WFO Plant List 2026-06)"
   }
  ],
  "taxonomy": {
   "en": "POWO and WFO both accept R. rubrum and sink the garden name R. sativum (Rchb.) A.Berger and R. vulgare into it; both keep R. spicatum E.Robson and R. petraeum Wulfen as separate species. WFO also lists a separate accepted 'Ribes sativum Syme' with no synonyms, which POWO does not; the German variety office says garden red currants come from R. petraeum, R. rubrum and R. sativum Syme crossed with R. multiflorum.",
   "fr": "POWO et WFO acceptent tous deux R. rubrum et y rattachent le nom horticole R. sativum (Rchb.) A.Berger ainsi que R. vulgare ; tous deux gardent R. spicatum E.Robson et R. petraeum Wulfen comme espèces distinctes. WFO cite en plus un « Ribes sativum Syme » accepté sans synonymes, absent de POWO ; l'office allemand des variétés indique que les groseilles cultivées viennent de R. petraeum, R. rubrum et R. sativum Syme croisés avec R. multiflorum.",
   "src": [
    {
     "k": "powo",
     "url": "https://www.checklistbank.org/dataset/2000/taxon/urn:lsid:ipni.org:names:792965-1",
     "loc": "accepted name (POWO/WCVP export 2026-10-07, ChecklistBank dataset 2000)"
    },
    {
     "k": "powo",
     "url": "https://www.checklistbank.org/dataset/2000/taxon/urn:lsid:ipni.org:names:793001-1",
     "loc": "Ribes spicatum E.Robson accepted (POWO/WCVP export 2026-10-07, ChecklistBank dataset 2000)"
    },
    {
     "k": "powo",
     "url": "https://www.checklistbank.org/dataset/2000/taxon/urn:lsid:ipni.org:names:792921-1",
     "loc": "Ribes petraeum Wulfen accepted (POWO/WCVP export 2026-10-07, ChecklistBank dataset 2000)"
    },
    {
     "k": "wfo",
     "url": "https://wfoplantlist.org/taxon/wfo-0000405218",
     "loc": "accepted name (WFO Plant List 2026-06)"
    },
    {
     "k": "wfo",
     "url": "https://wfoplantlist.org/taxon/wfo-0001135629",
     "loc": "Ribes sativum Syme: accepted, no synonyms (WFO Plant List 2026-06)"
    },
    {
     "k": "wfo",
     "url": "https://wfoplantlist.org/taxon/wfo-0000405234",
     "loc": "Ribes spicatum accepted (WFO Plant List 2026-06)"
    },
    {
     "k": "wfo",
     "url": "https://wfoplantlist.org/taxon/wfo-0000405142",
     "loc": "Ribes petraeum Wulfen accepted (WFO Plant List 2026-06)"
    },
    {
     "k": "berries-bsa-2002",
     "url": "https://www.bundessortenamt.de/bsa/media/Files/BSL/bsl_strauchbeerenobst_2002.pdf",
     "loc": "Rote Johannisbeere, introduction p. 10"
    }
   ]
  },
  "ploidy": {
   "en": "2n = 16, diploid.",
   "fr": "2n = 16, diploïde.",
   "src": [
    {
     "k": "berries-bsa-2002",
     "url": "https://www.bundessortenamt.de/bsa/media/Files/BSL/bsl_strauchbeerenobst_2002.pdf",
     "loc": "Rote Johannisbeere p. 10"
    }
   ]
  },
  "mating": {
   "system": "mixed",
   "flags": [
    "self-compatible",
    "hermaphrodite",
    "insect-pollinated"
   ],
   "en": "Red currant is self-fertile, but cross-pollination increases yields; insects are still needed to carry pollen to the stigma in at least some cultivars. Poor fertilization is one cause of 'running off' (young fruit dropping), especially in long-strig cultivars.",
   "fr": "Le groseillier à grappes est autofertile, mais la pollinisation croisée augmente les rendements ; il faut tout de même des insectes pour porter le pollen sur le stigmate, au moins chez certains cultivars. Une mauvaise fécondation est l'une des causes de la coulure (chute des jeunes fruits), surtout chez les cultivars à longues grappes.",
   "src": [
    {
     "k": "berries-bsa-2002",
     "url": "https://www.bundessortenamt.de/bsa/media/Files/BSL/bsl_strauchbeerenobst_2002.pdf",
     "loc": "Rote Johannisbeere p. 10-11 (selbstfruchtbar; Verrieseln)"
    },
    {
     "k": "berries-mcgregor-1976",
     "url": "https://www.ars.usda.gov/ARSUserFiles/20220500/OnlinePollinationHandbook.pdf",
     "loc": "Currant, Pollination Requirements"
    }
   ]
  },
  "interspecific": [
   {
    "with": "Ribes multiflorum",
    "en": "Wild R. multiflorum from the Balkans and central Italy took part in the origin of garden red currants, and Dutch cultivars 'Augustus' and 'Roodneus' come from 'Jonkheer van Tets' × R. multiflorum.",
    "fr": "Le R. multiflorum sauvage des Balkans et d'Italie centrale a participé à l'origine des groseilles cultivées, et les cultivars néerlandais 'Augustus' et 'Roodneus' sont issus de 'Jonkheer van Tets' × R. multiflorum.",
    "src": [
     {
      "k": "berries-bsa-2002",
      "url": "https://www.bundessortenamt.de/bsa/media/Files/BSL/bsl_strauchbeerenobst_2002.pdf",
      "loc": "Rote Johannisbeere p. 10; 'Augustus' p. 16; 'Roodneus' p. 33"
     }
    ]
   },
   {
    "with": "Ribes petraeum, Ribes sativum Syme",
    "en": "Named as wild ancestors of the cultivated red currant.",
    "fr": "Cités comme ancêtres sauvages de la groseille cultivée.",
    "src": [
     {
      "k": "berries-bsa-2002",
      "url": "https://www.bundessortenamt.de/bsa/media/Files/BSL/bsl_strauchbeerenobst_2002.pdf",
      "loc": "Rote Johannisbeere p. 10"
     }
    ]
   }
  ],
  "varieties": {
   "en": "No incompatibility groups are known to us; planting two cultivars that flower together is advised for higher yields. The cultivar descriptions only grade each cultivar's tendency to run off.",
   "fr": "Nous ne connaissons pas de groupes d'incompatibilité ; planter deux cultivars fleurissant ensemble est conseillé pour de meilleurs rendements. Les descriptions variétales notent seulement la tendance de chaque cultivar à la coulure.",
   "src": [
    {
     "k": "berries-bsa-2002",
     "url": "https://www.bundessortenamt.de/bsa/media/Files/BSL/bsl_strauchbeerenobst_2002.pdf",
     "loc": "Rote Johannisbeere p. 10 and cultivar descriptions"
    }
   ]
  },
  "propagation": {
   "en": "Propagated by hardwood cuttings from young, healthy wood between mid-autumn and late winter. Standards are grafted onto rooted shoots of golden currant (Ribes aureum) to get a stem.",
   "fr": "Multiplié par boutures ligneuses de bois jeune et sain, du milieu de l'automne à la fin de l'hiver. Les groseilliers-tiges sont greffés sur des pousses enracinées de groseillier doré (Ribes aureum) pour obtenir un tronc.",
   "src": [
    {
     "k": "berries-rhs-redcurrants",
     "url": "https://www.rhs.org.uk/fruit/redcurrants/grow-your-own",
     "loc": "Propagating"
    },
    {
     "k": "berries-bsa-2002",
     "url": "https://www.bundessortenamt.de/bsa/media/Files/BSL/bsl_strauchbeerenobst_2002.pdf",
     "loc": "Rote Johannisbeere p. 11: Hochstämmchen auf R. aureum"
    }
   ]
  }
 },
 {
  "id": "ribes-rubrum-jonkheer-van-tets",
  "parent": "ribes-rubrum",
  "rank": "cultivar",
  "name": "Ribes rubrum 'Jonkheer van Tets'",
  "author": "",
  "common": {
   "en": [
    "redcurrant 'Jonkheer van Tets'"
   ],
   "fr": [
    "groseillier 'Jonkheer van Tets'"
   ]
  },
  "synonyms": [
   "Ribes praecox 'Jonkheer van Tets'"
  ],
  "names_src": [
   {
    "k": "berries-rhs-jonkheer-van-tets",
    "url": "https://www.rhs.org.uk/plants/69067/ribes-rubrum-jonkheer-van-tets-r/details",
    "loc": "RHS plant name and alternate name"
   }
  ],
  "cultivar": {
   "self": "self-compatible",
   "pollinizers": [],
   "incompatible_with": [],
   "group": "very early ripening, early flowering",
   "origin": {
    "en": "Raised by J. Maarse, Schellinkhout (Netherlands), from a seedling of 'Fays Fruchtbare'; on sale since 1941.",
    "fr": "Obtenu par J. Maarse à Schellinkhout (Pays-Bas), d'un semis de 'Fays Fruchtbare' ; commercialisé depuis 1941."
   },
   "src": [
    {
     "k": "berries-rhs-jonkheer-van-tets",
     "url": "https://www.rhs.org.uk/plants/69067/ribes-rubrum-jonkheer-van-tets-r/details",
     "loc": "description: 'Self-pollinating'"
    },
    {
     "k": "berries-bsa-2002",
     "url": "https://www.bundessortenamt.de/bsa/media/Files/BSL/bsl_strauchbeerenobst_2002.pdf",
     "loc": "Jonkheer van Tets, p. 24"
    }
   ]
  },
  "mating": {
   "system": "mixed",
   "flags": [
    "self-compatible",
    "insect-pollinated"
   ],
   "en": "The RHS describes it as self-pollinating; the German variety office rates its tendency to run off as medium to strong and its early flowers as somewhat frost-prone.",
   "fr": "La RHS le dit autopollinisant ; l'office allemand des variétés note une tendance moyenne à forte à la coulure et des fleurs précoces un peu sensibles au gel.",
   "src": [
    {
     "k": "berries-rhs-jonkheer-van-tets",
     "url": "https://www.rhs.org.uk/plants/69067/ribes-rubrum-jonkheer-van-tets-r/details",
     "loc": "description"
    },
    {
     "k": "berries-bsa-2002",
     "url": "https://www.bundessortenamt.de/bsa/media/Files/BSL/bsl_strauchbeerenobst_2002.pdf",
     "loc": "Jonkheer van Tets, p. 24"
    }
   ]
  }
 },
 {
  "id": "ribes-uva-crispa",
  "parent": "ribes",
  "rank": "species",
  "name": "Ribes uva-crispa",
  "author": "L.",
  "common": {
   "fr": [
    "groseillier à maquereau"
   ],
   "en": [
    "gooseberry",
    "European gooseberry"
   ],
   "de": [
    "Stachelbeere"
   ]
  },
  "synonyms": [
   "Ribes grossularia L.",
   "Grossularia uva-crispa (L.) Mill.",
   "Ribes reclinatum L.",
   "Ribes uva-crispa var. reclinatum (used by the RHS for cultivars)",
   "Ribes uva-crispa var. sativum DC. (used by the German variety office)"
  ],
  "names_src": [
   {
    "k": "powo",
    "url": "https://www.checklistbank.org/dataset/2000/taxon/urn:lsid:ipni.org:names:793052-1",
    "loc": "accepted name (POWO/WCVP export 2026-10-07, ChecklistBank dataset 2000)"
   },
   {
    "k": "powo",
    "url": "https://www.checklistbank.org/dataset/2000/taxon/urn:lsid:ipni.org:names:792725-1",
    "loc": "Ribes grossularia L.: synonym of R. uva-crispa subsp. uva-crispa (POWO/WCVP export 2026-10-07, ChecklistBank dataset 2000)"
   },
   {
    "k": "wfo",
    "url": "https://wfoplantlist.org/taxon/wfo-0000405193",
    "loc": "accepted name (WFO Plant List 2026-06)"
   },
   {
    "k": "wfo",
    "url": "https://wfoplantlist.org/taxon/wfo-0000405262",
    "loc": "Ribes grossularia L.: synonym of R. uva-crispa subsp. uva-crispa (WFO Plant List 2026-06)"
   }
  ],
  "taxonomy": {
   "en": "POWO and WFO agree: R. uva-crispa with two subspecies, subsp. uva-crispa and subsp. austroeuropaeum (Bornm.) Bech.; the old name R. grossularia L. is a synonym of subsp. uva-crispa. Garden sources still use infraspecific labels the databases do not keep (var. reclinatum at the RHS, var. sativum at the German variety office).",
   "fr": "POWO et WFO concordent : R. uva-crispa avec deux sous-espèces, subsp. uva-crispa et subsp. austroeuropaeum (Bornm.) Bech. ; l'ancien nom R. grossularia L. est synonyme de la subsp. uva-crispa. Les sources horticoles emploient encore des rangs que les bases ne retiennent pas (var. reclinatum à la RHS, var. sativum à l'office allemand des variétés).",
   "src": [
    {
     "k": "powo",
     "url": "https://www.checklistbank.org/dataset/2000/taxon/urn:lsid:ipni.org:names:793052-1",
     "loc": "children: subsp. austroeuropaeum, subsp. uva-crispa (POWO/WCVP export 2026-10-07, ChecklistBank dataset 2000)"
    },
    {
     "k": "wfo",
     "url": "https://wfoplantlist.org/taxon/wfo-0000405193",
     "loc": "parts (WFO Plant List 2026-06)"
    },
    {
     "k": "berries-rhs-gooseberries",
     "url": "https://www.rhs.org.uk/fruit/gooseberries/grow-your-own",
     "loc": "Recommended varieties (RHS plant records list 'Ribes uva-crispa var. reclinatum' as alternate name)"
    },
    {
     "k": "berries-bsa-2002",
     "url": "https://www.bundessortenamt.de/bsa/media/Files/BSL/bsl_strauchbeerenobst_2002.pdf",
     "loc": "Stachelbeere, p. 101 heading"
    }
   ]
  },
  "mating": {
   "system": "mixed",
   "flags": [
    "self-compatible",
    "partly-self-compatible",
    "hermaphrodite",
    "insect-pollinated"
   ],
   "en": "Gooseberries are self-fertile to varying degrees, but pollen is shed before the stigma of the same flower is receptive, so cross-pollination is recommended for better yields. Bee visits increase the share of ripe berries, berry weight and seeds per berry.",
   "fr": "Le groseillier à maquereau est autofertile à des degrés divers, mais le pollen est libéré avant que le stigmate de la même fleur soit réceptif : la pollinisation croisée est donc conseillée pour de meilleurs rendements. Les visites d'abeilles augmentent la part de baies mûres, leur poids et le nombre de graines par baie.",
   "src": [
    {
     "k": "berries-bsa-2002",
     "url": "https://www.bundessortenamt.de/bsa/media/Files/BSL/bsl_strauchbeerenobst_2002.pdf",
     "loc": "Stachelbeere p. 101-102"
    },
    {
     "k": "berries-mcgregor-1976",
     "url": "https://www.ars.usda.gov/ARSUserFiles/20220500/OnlinePollinationHandbook.pdf",
     "loc": "Gooseberry, Pollination Requirements (Zakharov 1958)"
    }
   ]
  },
  "interspecific": [
   {
    "with": "North American gooseberries (Ribes cynosbati, Ribes hirtellum)",
    "en": "Mildew-resistant American species were crossed into European gooseberry cultivars.",
    "fr": "Des espèces américaines résistantes à l'oïdium ont été croisées avec les cultivars européens.",
    "src": [
     {
      "k": "berries-bsa-2002",
      "url": "https://www.bundessortenamt.de/bsa/media/Files/BSL/bsl_strauchbeerenobst_2002.pdf",
      "loc": "Stachelbeere p. 101"
     }
    ],
    "with_fr": "groseilliers à maquereau d’Amérique du Nord (Ribes cynosbati, Ribes hirtellum)"
   },
   {
    "with": "Ribes nigrum (and Ribes divaricatum)",
    "en": "Crossed with black currant to give the jostaberry.",
    "fr": "Croisé avec le cassissier pour donner la josta.",
    "src": [
     {
      "k": "berries-bsa-2002",
      "url": "https://www.bundessortenamt.de/bsa/media/Files/BSL/bsl_strauchbeerenobst_2002.pdf",
      "loc": "Jostabeere p. 127"
     }
    ],
    "with_fr": "Ribes nigrum (et Ribes divaricatum)"
   }
  ],
  "true_to_type": {
   "value": "no",
   "en": "Seed comes from open pollination and the seedlings can be very variable, which is why gooseberries are propagated by cuttings.",
   "fr": "Les graines viennent de pollinisation libre et les semis peuvent être très variables ; c'est pourquoi on multiplie le groseillier à maquereau par bouturage.",
   "src": [
    {
     "k": "berries-mcgregor-1976",
     "url": "https://www.ars.usda.gov/ARSUserFiles/20220500/OnlinePollinationHandbook.pdf",
     "loc": "Gooseberry, Plant"
    }
   ]
  },
  "propagation": {
   "en": "Hardwood cuttings taken from stems removed at winter pruning, only from young healthy plants.",
   "fr": "Boutures ligneuses prises sur les rameaux enlevés à la taille d'hiver, seulement sur des plants jeunes et sains.",
   "src": [
    {
     "k": "berries-rhs-gooseberries",
     "url": "https://www.rhs.org.uk/fruit/gooseberries/grow-your-own",
     "loc": "Propagating"
    }
   ]
  },
  "synonyms_fr": [
   "Ribes grossularia L.",
   "Grossularia uva-crispa (L.) Mill.",
   "Ribes reclinatum L.",
   "Ribes uva-crispa var. reclinatum (employé par la RHS pour les cultivars)",
   "Ribes uva-crispa var. sativum DC. (employé par l’office allemand des variétés)"
  ]
 },
 {
  "id": "ribes-nidigrolaria",
  "parent": "ribes",
  "rank": "hybrid",
  "name": "Ribes × nidigrolaria",
  "author": "Rud.Bauer & A.Bauer",
  "common": {
   "fr": [
    "josta",
    "groseillier josta"
   ],
   "en": [
    "jostaberry"
   ],
   "de": [
    "Jostabeere",
    "Jochelbeere"
   ]
  },
  "names_src": [
   {
    "k": "powo",
    "url": "https://www.checklistbank.org/dataset/2000/taxon/urn:lsid:ipni.org:names:939018-1",
    "loc": "Ribes × nidigrolaria Rud.Bauer & A.Bauer accepted (POWO/WCVP export 2026-10-07, ChecklistBank dataset 2000)"
   },
   {
    "k": "wfo",
    "url": "https://wfoplantlist.org/taxon/wfo-0000405164",
    "loc": "Ribes nidigrolaria Rud.Bauer & A.Bauer: unplaced name (WFO Plant List 2026-06)"
   }
  ],
  "taxonomy": {
   "en": "POWO accepts Ribes × nidigrolaria; WFO lists the name (without ×) but leaves it unplaced. The epithet appears to be built from the first letters of the Ribes species in the cross.",
   "fr": "POWO accepte Ribes × nidigrolaria ; WFO cite le nom (sans ×) mais ne le classe pas. L'épithète semble formée des initiales des espèces de Ribes croisées.",
   "src": [
    {
     "k": "powo",
     "url": "https://www.checklistbank.org/dataset/2000/taxon/urn:lsid:ipni.org:names:939018-1",
     "loc": "accepted name (POWO/WCVP export 2026-10-07, ChecklistBank dataset 2000)"
    },
    {
     "k": "wfo",
     "url": "https://wfoplantlist.org/taxon/wfo-0000405164",
     "loc": "accepted name (WFO Plant List 2026-06)"
    },
    {
     "k": "berries-bsa-2002",
     "url": "https://www.bundessortenamt.de/bsa/media/Files/BSL/bsl_strauchbeerenobst_2002.pdf",
     "loc": "Jostabeere p. 127"
    }
   ]
  },
  "interspecific": [
   {
    "with": "Ribes nigrum × Ribes uva-crispa × Ribes divaricatum",
    "en": "R. Bauer at the Max Planck Institute in Cologne crossed black currant, gooseberry and wild R. divaricatum; cultivar 'Josta' comes from ('Langtraubige Schwarze' × R. divaricatum) × ('Silvergieters Schwarze' × 'Grüne Hansa'). Earlier currant × gooseberry hybrids were made by E. Baur (1922, Müncheberg) and H. Murawski (1950s, Dresden-Pillnitz).",
    "fr": "R. Bauer, à l'Institut Max-Planck de Cologne, a croisé cassissier, groseillier à maquereau et R. divaricatum sauvage ; le cultivar 'Josta' est issu de ('Langtraubige Schwarze' × R. divaricatum) × ('Silvergieters Schwarze' × 'Grüne Hansa'). Des hybrides cassis × groseille à maquereau plus anciens ont été faits par E. Baur (1922, Müncheberg) et H. Murawski (années 1950, Dresde-Pillnitz).",
    "src": [
     {
      "k": "berries-bsa-2002",
      "url": "https://www.bundessortenamt.de/bsa/media/Files/BSL/bsl_strauchbeerenobst_2002.pdf",
      "loc": "Jostabeere p. 127 and 'Josta' p. 133"
     }
    ]
   }
  ],
  "ploidy": {
   "en": "Tetraploid: the chromosome number is doubled compared with the parent species.",
   "fr": "Tétraploïde : le nombre de chromosomes est doublé par rapport aux espèces parentes.",
   "src": [
    {
     "k": "berries-bsa-2002",
     "url": "https://www.bundessortenamt.de/bsa/media/Files/BSL/bsl_strauchbeerenobst_2002.pdf",
     "loc": "Jostabeere p. 127"
    }
   ]
  }
 },
 {
  "id": "myrtaceae",
  "parent": null,
  "rank": "family",
  "name": "Myrtaceae",
  "author": "Juss.",
  "common": {
   "fr": [
    "myrtacées"
   ],
   "en": [
    "myrtle family"
   ],
   "de": [
    "Myrtengewächse"
   ]
  },
  "synonyms": [],
  "names_src": [
   {
    "k": "wfo",
    "url": "https://list.worldfloraonline.org/wfo-7000000404",
    "loc": "accepted family; placement Myrtales"
   },
   {
    "k": "tropic-wcvp-gbif",
    "url": "https://www.gbif.org/species/340002479",
    "loc": "WCVP family record, ACCEPTED"
   },
   {
    "k": "tropic-apweb",
    "url": "http://www.mobot.org/MOBOT/research/APweb/orders/myrtalesweb2.htm",
    "loc": "Myrtales page, Myrtaceae section"
   }
  ],
  "taxonomy": {
   "en": "Myrtle family, in the order Myrtales. WFO places Eucalyptus in subfamily Myrtoideae, tribe Eucalypteae.",
   "fr": "Famille du myrte, dans l'ordre des Myrtales. WFO place Eucalyptus dans la sous-famille des Myrtoideae, tribu des Eucalypteae.",
   "src": [
    {
     "k": "wfo",
     "url": "https://list.worldfloraonline.org/wfo-0000954796",
     "loc": "placement of E. deglupta"
    }
   ]
  }
 },
 {
  "id": "eucalyptus",
  "parent": "myrtaceae",
  "rank": "genus",
  "name": "Eucalyptus",
  "author": "L'Hér.",
  "common": {
   "fr": [
    "eucalyptus"
   ],
   "en": [
    "eucalypt",
    "gum tree"
   ],
   "de": [
    "Eukalyptus"
   ]
  },
  "synonyms": [
   "Symphyomyrtus Schauer",
   "Eudesmia R.Br.",
   "Aromadendron Andrews ex Steud."
  ],
  "names_src": [
   {
    "k": "powo",
    "url": "https://powo.science.kew.org/taxon/urn:lsid:ipni.org:names:27534-1",
    "loc": "URL from WCVP record on GBIF; page not opened (HTTP 403)"
   },
   {
    "k": "tropic-wcvp-gbif",
    "url": "https://www.gbif.org/species/207322133",
    "loc": "WCVP: Eucalyptus L'Hér., ACCEPTED, Sert. Angl.: 18 (1789)"
   },
   {
    "k": "wfo",
    "url": "https://list.worldfloraonline.org/wfo-4000014088",
    "loc": "accepted genus"
   }
  ],
  "taxonomy": {
   "en": "Nicolle's classification (version 7.1, 2024) puts all eucalypts, including Corymbia and Angophora, into Eucalyptus, with six major and five single-species subgenera. WFO and WCVP still list Corymbia and Angophora as separate genera.",
   "fr": "La classification de Nicolle (version 7.1, 2024) range tous les eucalyptus, Corymbia et Angophora compris, dans Eucalyptus, avec six grands sous-genres et cinq sous-genres à une seule espèce. WFO et WCVP gardent Corymbia et Angophora comme genres à part.",
   "src": [
    {
     "k": "tropic-nicolle-2024",
     "url": "http://www.dn.com.au/Classification-Of-The-Eucalypts.pdf",
     "loc": "Preamble, points 1 and 2"
    }
   ]
  },
  "mating": {
   "system": "allogamous",
   "flags": [
    "insect-pollinated"
   ],
   "en": "Eucalyptus mostly outcrosses at random and relies largely on insects for pollination. Species are generally preferentially outcrossed, but some self to a degree, with weaker selfed offspring. Self-incompatibility varies between species.",
   "fr": "Eucalyptus est surtout allogame, au hasard, et dépend largement des insectes pour la pollinisation. Les espèces sont en général préférentiellement allogames, mais certaines s'autofécondent en partie, avec des descendants autofécondés moins vigoureux. L'auto-incompatibilité varie selon les espèces.",
   "src": [
    {
     "k": "tropic-fao-pryor-unasylva",
     "url": "https://www.fao.org/4/l1900e/l1900e09.htm",
     "loc": "sections 'Natural habitat' and following paragraphs"
    }
   ]
  },
  "interspecific": [
   {
    "with": "within a subgenus",
    "en": "Hybrids are common between pairs of species from the same subgenus that grow side by side, but Pryor says they do not occur between subgenera. Nicolle (2024) records only three inter-subgenus hybrid combinations.",
    "fr": "Les hybrides sont fréquents entre espèces d'un même sous-genre qui poussent côte à côte, mais Pryor dit qu'il n'y en a pas entre sous-genres. Nicolle (2024) ne recense que trois combinaisons d'hybrides entre sous-genres.",
    "src": [
     {
      "k": "tropic-fao-pryor-unasylva",
      "url": "https://www.fao.org/4/l1900e/l1900e09.htm",
      "loc": "paragraph on interspecific hybrids"
     },
     {
      "k": "tropic-nicolle-2024",
      "url": "http://www.dn.com.au/Classification-Of-The-Eucalypts.pdf",
      "loc": "Preamble point 8 (Hybrids); 'Inter-subgenus hybrid' list"
     }
    ],
    "with_fr": "au sein d’un sous-genre"
   },
   {
    "with": "Eucalyptus grandis × E. tereticornis (and other planted F1s)",
    "en": "F1 hybrids often outperform the pure species and are quite uniform. Seed from later hybrid generations segregates and degrades stands, as happened with E. urophylla in Brazil. In Zambia, F1 seed was obtained by planting E. tereticornis and E. grandis together and roguing the progeny.",
    "fr": "Les hybrides F1 dépassent souvent les espèces pures et sont assez uniformes. La graine des générations hybrides suivantes ségrège et dégrade les peuplements, comme avec E. urophylla au Brésil. En Zambie, on obtenait de la graine F1 en plantant ensemble E. tereticornis et E. grandis puis en triant les descendants.",
    "src": [
     {
      "k": "tropic-fao-pryor-unasylva",
      "url": "https://www.fao.org/4/l1900e/l1900e09.htm",
      "loc": "sections on hybrids and 'F1 manipulated hybrids'"
     }
    ],
    "with_fr": "Eucalyptus grandis × E. tereticornis (et autres F1 plantés)"
   }
  ],
  "isolation": {
   "en": "Isolation of a seed stand depends on how far insects carry pollen. Pryor (FAO) considers two kilometres ample in most cases, but based on few measurements. A good trick is to surround the seed plot with a eucalypt species it cannot cross with (e.g. E. citriodora around E. grandis).",
   "fr": "L'isolement d'un peuplement semencier dépend de la distance de transport du pollen par les insectes. Pryor (FAO) juge deux kilomètres largement suffisants dans la plupart des cas, mais sur peu de mesures. Une astuce : entourer la parcelle d'une espèce avec laquelle elle ne peut pas se croiser (p. ex. E. citriodora autour d'E. grandis).",
   "src": [
    {
     "k": "tropic-fao-pryor-unasylva",
     "url": "https://www.fao.org/4/l1900e/l1900e09.htm",
     "loc": "section 'Improvements'"
    }
   ]
  },
  "propagation": {
   "en": "Mainly from seed. Grafted clones for seed orchards often show graft incompatibility, so many replacement grafts are needed.",
   "fr": "Surtout par semis. Les clones greffés des vergers à graines montrent souvent une incompatibilité de greffe : il faut beaucoup de greffes de remplacement.",
   "src": [
    {
     "k": "tropic-fao-pryor-unasylva",
     "url": "https://www.fao.org/4/l1900e/l1900e09.htm",
     "loc": "section 'Clonal seed orchards'"
    }
   ]
  }
 },
 {
  "id": "eucalyptus-subg-symphyomyrtus",
  "parent": "eucalyptus",
  "rank": "subgenus",
  "name": "Eucalyptus subg. Symphyomyrtus",
  "author": "",
  "common": {
   "fr": [],
   "en": [
    "symphyomyrts"
   ],
   "de": []
  },
  "synonyms": [
   "Symphyomyrtus Schauer (as genus)"
  ],
  "names_src": [
   {
    "k": "tropic-nicolle-2024",
    "url": "http://www.dn.com.au/Classification-Of-The-Eucalypts.pdf",
    "loc": "Preamble point 6; classification list"
   },
   {
    "k": "wfo",
    "url": "https://list.worldfloraonline.org/wfo-4000014088",
    "loc": "Symphyomyrtus Schauer listed as synonym of Eucalyptus"
   }
  ],
  "taxonomy": {
   "en": "The largest subgenus. About twenty of its species make up 95% of the world's eucalypt plantations, mostly in sections Exsertaria, Latoangulatae and Maidenaria.",
   "fr": "Le plus grand sous-genre. Une vingtaine de ses espèces forment 95 % des plantations mondiales d'eucalyptus, surtout dans les sections Exsertaria, Latoangulatae et Maidenaria.",
   "src": [
    {
     "k": "tropic-deoliveira-2023-plosone",
     "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/PMC10409294/fullTextXML",
     "loc": "Abstract; Introduction"
    }
   ]
  }
 },
 {
  "id": "eucalyptus-sect-equatoria",
  "parent": "eucalyptus-subg-symphyomyrtus",
  "rank": "section",
  "name": "Eucalyptus sect. Equatoria",
  "author": "",
  "common": {
   "fr": [],
   "en": [
    "northern tiny fruits"
   ],
   "de": []
  },
  "synonyms": [],
  "names_src": [
   {
    "k": "tropic-nicolle-2024",
    "url": "http://www.dn.com.au/Classification-Of-The-Eucalypts.pdf",
    "loc": "subg. Symphyomyrtus (continued), sect. Equatoria"
   }
  ],
  "taxonomy": {
   "en": "Small section (Nicolle 2024) holding E. deglupta and E. binacag, with E. brachyandra moved in provisionally.",
   "fr": "Petite section (Nicolle 2024) qui regroupe E. deglupta et E. binacag, avec E. brachyandra ajouté à titre provisoire.",
   "src": [
    {
     "k": "tropic-nicolle-2024",
     "url": "http://www.dn.com.au/Classification-Of-The-Eucalypts.pdf",
     "loc": "Preamble point 6; sect. Equatoria list"
    }
   ]
  }
 },
 {
  "id": "eucalyptus-deglupta",
  "parent": "eucalyptus-sect-equatoria",
  "rank": "species",
  "name": "Eucalyptus deglupta",
  "author": "Blume",
  "common": {
   "fr": [
    "eucalyptus arc-en-ciel"
   ],
   "en": [
    "rainbow eucalyptus",
    "rainbow gum",
    "kamarere",
    "Mindanao gum"
   ],
   "de": [
    "Regenbogen-Eukalyptus"
   ]
  },
  "synonyms": [
   "Eucalyptus naudiniana F.Muell.",
   "Eucalyptus schlechteri Diels",
   "Eucalyptus versicolor Blume",
   "Eucalyptus sarassa Blume",
   "Eucalyptus multiflora Rich. ex A.Gray (WFO/WCVP; Nicolle puts it under E. binacag)"
  ],
  "names_src": [
   {
    "k": "powo",
    "url": "https://powo.science.kew.org/taxon/urn:lsid:ipni.org:names:592872-1",
    "loc": "URL from WCVP record on GBIF; page not opened (HTTP 403)"
   },
   {
    "k": "tropic-wcvp-gbif",
    "url": "https://www.gbif.org/species/207325367",
    "loc": "WCVP: E. deglupta Blume, ACCEPTED, Mus. Bot. 1: 83 (1850); Philippines to Papuasia"
   },
   {
    "k": "wfo",
    "url": "https://list.worldfloraonline.org/wfo-0000954796",
    "loc": "accepted; 5 synonyms incl. E. multiflora"
   },
   {
    "k": "tropic-icraf-orwa-2009",
    "url": "https://apps.worldagroforestry.org/treedb/AFTPDFS/Eucalyptus_deglupta.PDF",
    "loc": "page 1 (local name kamarere)"
   }
  ],
  "taxonomy": {
   "en": "Accepted by both WFO and WCVP. Nicolle (2024) and de Oliveira et al. (2023) place it in subgenus Symphyomyrtus, section Equatoria; older classifications put it in a subgenus 'Minutifructis'. One disagreement: WFO/WCVP make E. multiflora a synonym of E. deglupta and give its range as Philippines to New Guinea, while Nicolle treats E. multiflora as E. binacag ('Mindanao gum') and lists E. deglupta for Indonesia and PNG only.",
   "fr": "Acceptée par WFO et WCVP. Nicolle (2024) et de Oliveira et al. (2023) la placent dans le sous-genre Symphyomyrtus, section Equatoria ; d'anciennes classifications la mettaient dans un sous-genre « Minutifructis ». Un désaccord : WFO/WCVP font d'E. multiflora un synonyme d'E. deglupta et lui donnent une aire des Philippines à la Nouvelle-Guinée, tandis que Nicolle range E. multiflora sous E. binacag (« Mindanao gum ») et ne cite E. deglupta que pour l'Indonésie et la PNG.",
   "src": [
    {
     "k": "tropic-nicolle-2024",
     "url": "http://www.dn.com.au/Classification-Of-The-Eucalypts.pdf",
     "loc": "sect. Equatoria list (E. binacag: syn. E. multiflora; E. deglupta: Indo, PNG)"
    },
    {
     "k": "tropic-deoliveira-2023-plosone",
     "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/PMC10409294/fullTextXML",
     "loc": "Table 1 (E. deglupta, section Equatoria); Discussion (formerly subgenus Minutifructis)"
    },
    {
     "k": "wfo",
     "url": "https://list.worldfloraonline.org/wfo-0000954796",
     "loc": "synonyms"
    },
    {
     "k": "tropic-wcvp-gbif",
     "url": "https://www.gbif.org/species/207325367",
     "loc": "distribution remark; synonyms"
    }
   ]
  },
  "mating": {
   "system": "allogamous",
   "flags": [
    "insect-pollinated"
   ],
   "en": "No outcrossing rate for E. deglupta itself was found. The genus is mostly outcrossing and insect-pollinated, with some selfing. Trees can flower in their first year but usually start after 2 years, then flower every year, in any month depending on the place.",
   "fr": "Aucun taux d'allogamie propre à E. deglupta n'a été trouvé. Le genre est surtout allogame et pollinisé par les insectes, avec une part d'autofécondation. L'arbre peut fleurir dès la 1re année mais commence en général après 2 ans, puis fleurit chaque année, à n'importe quel mois selon le lieu.",
   "src": [
    {
     "k": "tropic-fao-pryor-unasylva",
     "url": "https://www.fao.org/4/l1900e/l1900e09.htm",
     "loc": "sections 'Natural habitat' and following"
    },
    {
     "k": "tropic-icraf-orwa-2009",
     "url": "https://apps.worldagroforestry.org/treedb/AFTPDFS/Eucalyptus_deglupta.PDF",
     "loc": "page 1, 'Biology'"
    }
   ]
  },
  "interspecific": [
   {
    "with": "other Eucalyptus (no sourced example)",
    "en": "No documented E. deglupta hybrid was found in the sources opened. In a 2023 study of 16 species and 44 controlled hybrids, none of the hybrids involved E. deglupta. The species sat genetically far from the main planted sections and had the lowest polymorphism (29.7% of loci).",
    "fr": "Aucun hybride documenté d'E. deglupta n'a été trouvé dans les sources ouvertes. Dans une étude de 2023 portant sur 16 espèces et 44 hybrides contrôlés, aucun hybride ne faisait intervenir E. deglupta. L'espèce était génétiquement éloignée des grandes sections plantées et avait le plus faible polymorphisme (29,7 % des loci).",
    "src": [
     {
      "k": "tropic-deoliveira-2023-plosone",
      "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/PMC10409294/fullTextXML",
      "loc": "Tables 1–3; Discussion"
     }
    ],
    "with_fr": "autres Eucalyptus (aucun exemple sourcé)"
   }
  ],
  "isolation": {
   "en": "No species-specific distance was found; the genus guideline is about 2 km. In Papua New Guinea, seed for international provenance trials (1980–83) came from 15 natural provenances (at least 10 mother trees each) and from a clonal seed orchard built from 28 selected Warangoi mother trees.",
   "fr": "Pas de distance propre à l'espèce ; le repère du genre est d'environ 2 km. En Papouasie-Nouvelle-Guinée, la graine des essais internationaux de provenances (1980–83) venait de 15 provenances naturelles (au moins 10 arbres-mères chacune) et d'un verger à graines clonal issu de 28 arbres-mères sélectionnés à Warangoi.",
   "src": [
    {
     "k": "tropic-fao-pryor-unasylva",
     "url": "https://www.fao.org/4/l1900e/l1900e09.htm",
     "loc": "section 'Improvements'"
    },
    {
     "k": "tropic-fao-fgri12-1983",
     "url": "https://www.fao.org/4/q5987e/Q5987E04.htm",
     "loc": "text and Table 1"
    }
   ]
  },
  "true_to_type": {
   "value": "mostly",
   "en": "Seed from an isolated stand gives E. deglupta, but every seedling is a new outcrossed genotype, not a copy of the mother tree. That is why breeders set up seedling and clonal seed orchards.",
   "fr": "La graine d'un peuplement isolé donne bien E. deglupta, mais chaque semis est un nouveau génotype issu d'allofécondation, pas une copie de l'arbre-mère. C'est pourquoi les sélectionneurs ont créé des vergers à graines de semis et clonaux.",
   "src": [
    {
     "k": "tropic-fao-pryor-unasylva",
     "url": "https://www.fao.org/4/l1900e/l1900e09.htm",
     "loc": "paragraph on genetic diversity of the breeding system"
    },
    {
     "k": "tropic-fao-srivastava-png",
     "url": "https://www.fao.org/4/ac772e/ac772e0i.htm",
     "loc": "kamarere plantations (tree improvement)"
    }
   ]
  },
  "propagation": {
   "en": "Grown from seed. Seed is orthodox and keeps in cold, airtight storage: ICRAF gives 2,000,000 seeds/kg, the PNG Forest Research Institute about 12,000,000 per kg. Viable seed can come from two-year-old trees, but it is hard to collect because ripe capsules open within a few weeks. The tree does not coppice vigorously.",
   "fr": "Multiplié par semis. La graine est orthodoxe et se garde au froid, en contenant étanche : l'ICRAF donne 2 000 000 graines/kg, l'institut forestier de PNG environ 12 000 000 par kg. On récolte de la graine viable sur des arbres de deux ans, mais la récolte est difficile car les capsules mûres s'ouvrent en quelques semaines. L'arbre rejette mal de souche.",
   "src": [
    {
     "k": "tropic-icraf-orwa-2009",
     "url": "https://apps.worldagroforestry.org/treedb/AFTPDFS/Eucalyptus_deglupta.PDF",
     "loc": "page 4, 'Germplasm management'; page 3, 'Tree management'"
    },
    {
     "k": "tropic-fao-srivastava-png",
     "url": "https://www.fao.org/4/ac772e/ac772e0i.htm",
     "loc": "'Nursery practices'"
    },
    {
     "k": "tropic-fao-fgri6-1975",
     "url": "https://www.fao.org/4/k4063e/K4063E02.htm",
     "loc": "paragraph on seed collection of E. deglupta"
    }
   ]
  },
  "synonyms_fr": [
   "Eucalyptus naudiniana F.Muell.",
   "Eucalyptus schlechteri Diels",
   "Eucalyptus versicolor Blume",
   "Eucalyptus sarassa Blume",
   "Eucalyptus multiflora Rich. ex A.Gray (WFO/WCVP ; Nicolle le range sous E. binacag)"
  ]
 },
 {
  "id": "rosaceae",
  "parent": null,
  "rank": "family",
  "name": "Rosaceae",
  "author": "Juss.",
  "common": {
   "fr": [
    "Rosacées"
   ],
   "en": [
    "rose family"
   ],
   "de": [
    "Rosengewächse"
   ]
  },
  "synonyms": [],
  "names_src": [
   {
    "k": "powo",
    "url": "https://api.gbif.org/v1/species/340002569",
    "loc": "WCVP 2026-06 record (POWO backbone) via GBIF: family Rosaceae, accepted"
   },
   {
    "k": "wfo",
    "url": "https://wfoplantlist.org/taxon/wfo-7000000532-2026-06",
    "loc": "WFO Plant List 2026-06: Rosaceae Juss., accepted"
   },
   {
    "k": "powo",
    "url": "https://www.checklistbank.org/dataset/2000/taxon/xN",
    "loc": "accepted family (POWO/WCVP export 2026-10-07, ChecklistBank dataset 2000)"
   },
   {
    "k": "wfo",
    "url": "https://wfoplantlist.org/taxon/wfo-7000000532",
    "loc": "accepted family (WFO Plant List 2026-06)"
   }
  ],
  "taxonomy": {
   "en": "The rose family belongs to the order Rosales. Prunus is the only genus of tribe Amygdaleae, in subfamily Amygdaloideae. Rubus is the only genus of tribe Rubeae.",
   "fr": "La famille des Rosacées appartient à l'ordre des Rosales. Prunus est le seul genre de la tribu des Amygdaleae, dans la sous-famille des Amygdaloideae. Rubus y est le seul genre de la tribu des Rubeae.",
   "src": [
    {
     "k": "prunus-apweb",
     "url": "https://www.mobot.org/MOBOT/research/APweb/orders/rosalesweb.htm",
     "loc": "Rosales page, ROSACEAE; 3. Amygdaloideae; 3D. Amygdaleae Jussieu - Prunus L."
    },
    {
     "k": "berries-apweb-rosales",
     "url": "http://www.mobot.org/MOBOT/research/APweb/orders/rosalesweb.htm",
     "loc": "Rosales: list of included families; Rosaceae, Rosoideae, 2B. Rubeae"
    }
   ]
  }
 },
 {
  "id": "prunus",
  "parent": "rosaceae",
  "rank": "genus",
  "name": "Prunus",
  "author": "L.",
  "common": {
   "fr": [
    "prunus"
   ],
   "en": [
    "stone fruits",
    "prunus"
   ]
  },
  "synonyms": [
   "Amygdalus L. (for almond and peach; see Amygdalus communis L., a synonym of Prunus amygdalus)"
  ],
  "names_src": [
   {
    "k": "powo",
    "url": "https://api.gbif.org/v1/species/207741737",
    "loc": "WCVP 2026-06 record (POWO backbone) via GBIF: Prunus L., accepted genus"
   },
   {
    "k": "wfo",
    "url": "https://wfoplantlist.org/taxon/wfo-4000031284-2026-06",
    "loc": "WFO Plant List 2026-06: Prunus L., accepted"
   },
   {
    "k": "powo",
    "url": "https://api.gbif.org/v1/species/207752097",
    "loc": "WCVP 2026-06 record (POWO backbone) via GBIF: Amygdalus communis L. = synonym of Prunus amygdalus Batsch"
   }
  ],
  "taxonomy": {
   "en": "A genus of about 275 species (estimates 250 to 400), base chromosome number x = 8. Plums sit in subgenus Prunophora: Asian and European plums in section Euprunus, North American plums in section Prunocerasus.",
   "fr": "Genre d'environ 275 espèces (estimations de 250 à 400), nombre chromosomique de base x = 8. Les pruniers relèvent du sous-genre Prunophora : pruniers asiatiques et européens dans la section Euprunus, pruniers nord-américains dans la section Prunocerasus.",
   "src": [
    {
     "k": "prunus-apweb",
     "url": "https://www.mobot.org/MOBOT/research/APweb/orders/rosalesweb.htm",
     "loc": "3D. Amygdaleae: '1/ca 275 (250-400)', 'n = 8'"
    },
    {
     "k": "prunus-abd",
     "url": "https://www.frontiersin.org/journals/plant-science/articles/10.3389/fpls.2019.00896/full",
     "loc": "Introduction, paragraph 1 (Prunophora, Euprunus, Prunocerasus; x = 8)"
    }
   ]
  },
  "mating": {
   "system": "mixed",
   "flags": [
    "gametophytic-si",
    "self-incompatible",
    "self-compatible",
    "hermaphrodite",
    "insect-pollinated"
   ],
   "en": "Prunus uses gametophytic self-incompatibility: an S-RNase made in the style stops pollen tubes whose S-allele matches one of the style's alleles, the pollen side being an F-box gene (SFB). Cultivars with the same S-genotype cannot pollinate each other and form an incompatibility group. Some species or cultivars have lost this barrier: all commercial peaches and nectarines in California are self-fruitful.",
   "fr": "Les Prunus ont une auto-incompatibilité gamétophytique : une S-RNase produite dans le style arrête les tubes polliniques dont l'allèle S est identique à l'un de ceux du style, le côté pollen étant un gène F-box (SFB). Deux variétés de même génotype S ne peuvent pas se polliniser et forment un groupe d'incompatibilité. Certaines espèces ou variétés ont perdu cette barrière : toutes les pêches et nectarines commerciales de Californie sont autofertiles.",
   "src": [
    {
     "k": "prunus-abd",
     "url": "https://www.frontiersin.org/journals/plant-science/articles/10.3389/fpls.2019.00896/full",
     "loc": "Introduction, paragraphs on GSI, S-RNase/SFB and incompatibility groups"
    },
    {
     "k": "prunus-scirep",
     "url": "https://www.nature.com/articles/s41598-020-57498-6",
     "loc": "Introduction, paragraphs 1-2"
    },
    {
     "k": "prunus-ucjp",
     "url": "https://ucanr.edu/sites/default/files/2011-12/132874.pdf",
     "loc": "p. 49, first column (peaches and nectarines self-fruitful)"
    }
   ]
  },
  "isolation": {
   "en": "RHS rule of thumb for gardens: trees meant to cross-pollinate should be within 18 m (55 ft) of each other, although bees can travel 3 to 4 km (2 to 2.5 miles). Even self-fertile cultivars tend to crop better with another cultivar nearby.",
   "fr": "Règle pratique de la RHS pour le jardin : les arbres censés se polliniser doivent être à moins de 18 m (55 ft) les uns des autres, même si les abeilles peuvent parcourir 3 à 4 km (2 à 2,5 miles). Même les variétés autofertiles produisent souvent mieux avec une autre variété à proximité.",
   "src": [
    {
     "k": "prunus-rhspoll",
     "url": "https://www.rhs.org.uk/advice/beginners-guide/fruit-basics/fruit-pollination",
     "loc": "Fruit pollination, paragraphs 1-2"
    }
   ]
  },
  "true_to_type": {
   "value": "no",
   "en": "Cultivated stone fruits (plums, peaches, apricots, cherries) are highly heterozygous, so a seed gives a new genotype rather than a copy of its mother; most fruit trees do not come true from seed.",
   "fr": "Les fruits à noyau cultivés (pruniers, pêchers, abricotiers, cerisiers) sont très hétérozygotes : un noyau donne un nouveau génotype et non une copie de l'arbre mère ; la plupart des arbres fruitiers ne se reproduisent pas fidèlement par semis.",
   "src": [
    {
     "k": "prunus-habibi",
     "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC8976691/",
     "loc": "Introduction, paragraph 1"
    },
    {
     "k": "prunus-unh",
     "url": "https://extension.unh.edu/resource/growing-fruit-grafting-fruit-trees-home-orchard-fact-sheet",
     "loc": "paragraph 1"
    }
   ]
  },
  "propagation": {
   "en": "Cultivars are grafted: a scion of the cultivar is joined to a rootstock. Grafting keeps the cultivar identical, skips the juvenile (non-flowering) phase of seedlings, lets the rootstock control vigour and soil adaptation, and is needed because these species root poorly from cuttings.",
   "fr": "Les variétés sont greffées : un greffon de la variété est soudé sur un porte-greffe. Le greffage garde la variété identique, évite la phase juvénile (sans floraison) des semis, laisse le porte-greffe régler vigueur et adaptation au sol, et s'impose parce que ces espèces s'enracinent mal en bouture.",
   "src": [
    {
     "k": "prunus-habibi",
     "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC8976691/",
     "loc": "Abstract and Introduction, paragraph 1"
    },
    {
     "k": "prunus-unh",
     "url": "https://extension.unh.edu/resource/growing-fruit-grafting-fruit-trees-home-orchard-fact-sheet",
     "loc": "paragraph 1"
    }
   ]
  },
  "synonyms_fr": [
   "Amygdalus L. (pour l’amandier et le pêcher ; voir Amygdalus communis L., synonyme de Prunus amygdalus)"
  ]
 },
 {
  "id": "prunus-amygdalus",
  "parent": "prunus",
  "rank": "species",
  "name": "Prunus amygdalus",
  "author": "Batsch",
  "common": {
   "fr": [
    "amandier"
   ],
   "en": [
    "almond"
   ]
  },
  "synonyms": [
   "Prunus dulcis (Mill.) D.A.Webb",
   "Amygdalus dulcis Mill.",
   "Amygdalus communis L.",
   "Prunus communis (L.) Arcang."
  ],
  "names_src": [
   {
    "k": "powo",
    "url": "https://api.gbif.org/v1/species/207751845",
    "loc": "WCVP 2026-06 record (POWO backbone) via GBIF: Prunus amygdalus Batsch, accepted"
   },
   {
    "k": "powo",
    "url": "https://api.gbif.org/v1/species/207752105",
    "loc": "WCVP 2026-06 record (POWO backbone) via GBIF: Prunus dulcis (Mill.) D.A.Webb = synonym of P. amygdalus"
   },
   {
    "k": "powo",
    "url": "https://api.gbif.org/v1/species/207752550",
    "loc": "WCVP 2026-06 record (POWO backbone) via GBIF: Prunus dulcis Rouchy (1878) = synonym of Prunus avium"
   },
   {
    "k": "wfo",
    "url": "https://wfoplantlist.org/taxon/wfo-0001015846-2026-06",
    "loc": "WFO Plant List 2026-06: Prunus amygdalus Batsch, accepted"
   },
   {
    "k": "wfo",
    "url": "https://wfoplantlist.org/taxon/wfo-0001005398",
    "loc": "WFO Plant List 2026-06: Prunus dulcis (Mill.) D.A.Webb, synonym of P. amygdalus"
   },
   {
    "k": "powo",
    "url": "https://api.gbif.org/v1/species/207752101",
    "loc": "WCVP 2026-06 record (POWO backbone) via GBIF: Amygdalus dulcis Mill. = synonym"
   },
   {
    "k": "powo",
    "url": "https://api.gbif.org/v1/species/207752097",
    "loc": "WCVP 2026-06 record (POWO backbone) via GBIF: Amygdalus communis L. = synonym"
   }
  ],
  "taxonomy": {
   "en": "POWO (WCVP data) and WFO (June 2026) both accept Prunus amygdalus Batsch and list Prunus dulcis (Mill.) D.A.Webb as a synonym, whereas most breeding and genetics papers still use P. dulcis. WCVP also records an older Prunus dulcis Rouchy (1878) used for a cherry; this earlier homonym is probably why Webb's 1967 name is not accepted (our reading of the records).",
   "fr": "POWO (données WCVP) et WFO (juin 2026) acceptent tous deux Prunus amygdalus Batsch et rangent Prunus dulcis (Mill.) D.A.Webb en synonyme, alors que la plupart des articles de génétique et d'amélioration emploient encore P. dulcis. Le WCVP enregistre aussi un Prunus dulcis Rouchy plus ancien (1878), appliqué à un cerisier ; cet homonyme antérieur explique probablement le rejet du nom de Webb de 1967 (notre lecture des fiches).",
   "src": [
    {
     "k": "powo",
     "url": "https://api.gbif.org/v1/species/207751845",
     "loc": "WCVP 2026-06 record (POWO backbone) via GBIF: Prunus amygdalus Batsch, accepted"
    },
    {
     "k": "powo",
     "url": "https://api.gbif.org/v1/species/207752105",
     "loc": "WCVP 2026-06 record (POWO backbone) via GBIF: Prunus dulcis (Mill.) D.A.Webb = synonym of P. amygdalus"
    },
    {
     "k": "powo",
     "url": "https://api.gbif.org/v1/species/207752550",
     "loc": "WCVP 2026-06 record (POWO backbone) via GBIF: Prunus dulcis Rouchy (1878) = synonym of Prunus avium"
    },
    {
     "k": "wfo",
     "url": "https://wfoplantlist.org/taxon/wfo-0001015846-2026-06",
     "loc": "WFO Plant List 2026-06: Prunus amygdalus Batsch, accepted"
    },
    {
     "k": "wfo",
     "url": "https://wfoplantlist.org/taxon/wfo-0001005398",
     "loc": "WFO Plant List 2026-06: Prunus dulcis (Mill.) D.A.Webb, synonym of P. amygdalus"
    },
    {
     "k": "prunus-calle",
     "url": "https://repositori.irta.cat/bitstream/handle/20.500.12327/3376/Calle_Review_24.pdf?sequence=1",
     "loc": "title page, keywords 'Prunus dulcis'"
    },
    {
     "k": "prunus-scirep",
     "url": "https://www.nature.com/articles/s41598-020-57498-6",
     "loc": "Introduction, first sentence"
    }
   ]
  },
  "ploidy": {
   "en": "Diploid; with the Prunus base number x = 8 this means 2n = 16.",
   "fr": "Diploïde ; avec le nombre de base x = 8 des Prunus, cela fait 2n = 16.",
   "src": [
    {
     "k": "prunus-ped",
     "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC7775440/",
     "loc": "Introduction, paragraph 1 ('the most genetically variable of the diploid Prunus cultivated species')"
    },
    {
     "k": "prunus-abd",
     "url": "https://www.frontiersin.org/journals/plant-science/articles/10.3389/fpls.2019.00896/full",
     "loc": "Introduction, paragraph 1 (x = 8)"
    }
   ]
  },
  "mating": {
   "system": "allogamous",
   "flags": [
    "self-incompatible",
    "gametophytic-si",
    "self-compatible",
    "partly-self-compatible",
    "hermaphrodite",
    "insect-pollinated"
   ],
   "en": "Almond is mainly self-incompatible (gametophytic, S-RNase based, at least 50 S-variants thought to exist) and depends on insects, mainly honeybees, to carry pollen between compatible cultivars. Self-compatibility comes from a single dominant allele, Sf, and is now a main breeding goal in the Mediterranean. Some self-incompatible genotypes, e.g. S1S14 'Winters' and 'Sweetheart', can still set fairly many selfed nuts in good conditions.",
   "fr": "L'amandier est surtout auto-incompatible (système gamétophytique à S-RNase, au moins 50 variants S supposés) et dépend des insectes, surtout l'abeille domestique, pour transporter le pollen entre variétés compatibles. L'autocompatibilité vient d'un seul allèle dominant, Sf, et c'est un objectif majeur de l'amélioration méditerranéenne. Certains génotypes auto-incompatibles, par ex. S1S14 'Winters' et 'Sweetheart', peuvent quand même nouer assez d'amandes autofécondées en bonnes conditions.",
   "src": [
    {
     "k": "prunus-scirep",
     "url": "https://www.nature.com/articles/s41598-020-57498-6",
     "loc": "Introduction, paragraph 1"
    },
    {
     "k": "prunus-ped",
     "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC7775440/",
     "loc": "Introduction, paragraph 3 ('single self-compatibility Sf dominant allele')"
    },
    {
     "k": "prunus-grad",
     "url": "https://om.ciheam.org/om/pdf/a119/00007361.pdf",
     "loc": "I. Introduction (insect cross-pollinators); III. Results, paragraph 2 (S1S14)"
    }
   ]
  },
  "interspecific": [
   {
    "with": "Prunus webbii",
    "en": "The origin of Sf is debated. One view (Gradziel, UC Davis) holds that Sf is not native to almond and came from related self-fertile species, landraces such as 'Tuono' apparently carrying Sf from P. webbii. A study of Apulian material found Sf in nearly all self-compatible almonds but almost never in self-compatible P. webbii, and found its active wild type (S30) in self-incompatible almonds, suggesting Sf arose by mutation inside almond.",
    "fr": "L'origine de Sf est discutée. Selon Gradziel (UC Davis), Sf n'est pas natif de l'amandier et vient d'espèces voisines autofertiles, des variétés locales comme 'Tuono' l'ayant apparemment reçu de P. webbii. Une étude du matériel des Pouilles a trouvé Sf dans presque tous les amandiers autocompatibles mais presque jamais chez les P. webbii autocompatibles, et sa forme sauvage active (S30) chez des amandiers auto-incompatibles : Sf serait donc né par mutation au sein de l'amandier.",
    "src": [
     {
      "k": "prunus-grad",
      "url": "https://om.ciheam.org/om/pdf/a119/00007361.pdf",
      "loc": "I. Introduction; III. Results, paragraph 2"
     },
     {
      "k": "prunus-bosk",
      "url": "https://pubmed.ncbi.nlm.nih.gov/17899198/",
      "loc": "abstract"
     }
    ]
   },
   {
    "with": "Prunus persica",
    "en": "Almond × peach hybrids are the best known and most widespread interspecific Prunus hybrids. They are mainly clonal rootstocks: 'INRA-GF-677' has been the most used rootstock for decades; Spanish selections include 'Garnem', 'Felinem' and 'Monegro' (controlled crosses) and 'Adafuel' and 'Mayor' (from spontaneous hybrids). Peach is also one of the self-compatibility donors used in UC Davis almond lines.",
    "fr": "Les hybrides amandier × pêcher sont les hybrides interspécifiques de Prunus les plus connus et les plus répandus. Ce sont surtout des porte-greffes clonaux : 'INRA-GF-677' est le plus employé depuis des décennies ; parmi les sélections espagnoles figurent 'Garnem', 'Felinem' et 'Monegro' (croisements dirigés) et 'Adafuel' et 'Mayor' (issus d'hybrides spontanés). Le pêcher est aussi l'une des sources d'autocompatibilité des lignées d'amandier de UC Davis.",
    "src": [
     {
      "k": "prunus-rubio",
      "url": "https://om.ciheam.org/ressources/om/pdf/a119/00007379.pdf",
      "loc": "Introduction paragraphs 2-3; section 5 'Interspecific hybrids'"
     },
     {
      "k": "prunus-grad",
      "url": "https://om.ciheam.org/om/pdf/a119/00007361.pdf",
      "loc": "I. Introduction"
     },
     {
      "k": "prunus-ped",
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC7775440/",
      "loc": "Results, 'Founding clones' (introgression crosses with P. persica and P. webbii)"
     }
    ]
   },
   {
    "with": "Prunus mira, Prunus fenzliana",
    "en": "UC Davis has backcrossed self-fruitfulness into almond from P. mira as well; P. fenzliana, itself self-incompatible, was used for tree architecture. Lines from P. mira gave the most stable self-fruitfulness in that trial.",
    "fr": "UC Davis a aussi transféré l'autofertilité chez l'amandier à partir de P. mira ; P. fenzliana, lui-même auto-incompatible, a servi pour l'architecture de l'arbre. Dans cet essai, les lignées issues de P. mira ont eu l'autofertilité la plus stable.",
    "src": [
     {
      "k": "prunus-grad",
      "url": "https://om.ciheam.org/om/pdf/a119/00007361.pdf",
      "loc": "II. Materials and methods; III. Results, paragraphs 1-2"
     }
    ]
   }
  ],
  "varieties": {
   "en": "Cultivars that share the same two S-alleles cannot fertilise each other and form a cross-incompatibility group; a cultivar from one group pollinates any cultivar of another group if bloom overlaps. UC lists groups named after Nonpareil, Mission, Ne Plus Ultra, Thompson, Carmel, Solano and Monterey; IRTA added groups XVI and XVII after re-testing S-genotypes. Bloom overlap matters as much as compatibility: 'Ne Plus Ultra', peaking about 6 days before 'Nonpareil', pollinates it better than 'Mission', which blooms 5 to 7 days after.",
   "fr": "Les variétés qui ont les deux mêmes allèles S ne peuvent pas se féconder et forment un groupe d'interincompatibilité ; une variété d'un groupe pollinise toute variété d'un autre groupe si les floraisons se chevauchent. UC distingue des groupes nommés d'après Nonpareil, Mission, Ne Plus Ultra, Thompson, Carmel, Solano et Monterey ; l'IRTA a ajouté les groupes XVI et XVII après révision des génotypes S. Le chevauchement des floraisons compte autant que la compatibilité : 'Ne Plus Ultra', qui fleurit environ 6 jours avant 'Nonpareil', la pollinise mieux que 'Mission', qui fleurit 5 à 7 jours après.",
   "src": [
    {
     "k": "prunus-ucalm",
     "url": "https://ucanr.edu/sites/default/files/2010-06/18977.pdf",
     "loc": "chapter 8, 'Pollen Incompatibility', Table 8.2; 'Bloom Time', Table 8.1"
    },
    {
     "k": "prunus-lopez",
     "url": "https://pubmed.ncbi.nlm.nih.gov/15338131/",
     "loc": "abstract"
    }
   ]
  },
  "isolation": {
   "en": "For orchards, a UC Cooperative Extension farm advisor recommends between 2 and 3 hives per acre (about 5 to 7.4 per hectare, our conversion). In poor weather, UC Davis found 24% nut set with 3 hives per acre versus 14.8% with 1.7 hives per acre; in good weather the difference disappeared. For self-fertile cultivars, 1 hive per acre has been suggested, without research data.",
   "fr": "En verger, un conseiller de l'extension de l'Université de Californie recommande 2 à 3 ruches par acre (soit environ 5 à 7,4 par hectare, conversion de notre part). Par mauvais temps, UC Davis a mesuré 24 % de nouaison avec 3 ruches par acre contre 14,8 % avec 1,7 ruche par acre ; par beau temps, l'écart disparaissait. Pour les variétés autofertiles, 1 ruche par acre a été proposée, sans données de recherche.",
   "src": [
    {
     "k": "prunus-connell",
     "url": "https://www.sacvalleyorchards.com/almonds/pollination/honeybees-colony-strength-and-beekeeper-challenges/",
     "loc": "section 'How many colonies per acre?' and following paragraph"
    }
   ]
  },
  "true_to_type": {
   "value": "no",
   "en": "Seedlings do not reproduce the cultivar, and kernel taste segregates. Sweet (Sk) is dominant over bitter (sk); the taste of the nuts on a tree depends on that tree's own genotype, so a sweet tree bears sweet nuts, but trees grown from them can be bitter: about 25% bitter seedlings when both parents are heterozygous, about 50% when one is heterozygous and the other bitter, none if one parent is SkSk. Kernels of wild almond relatives are bitter and toxic (amygdalin).",
   "fr": "Les semis ne reproduisent pas la variété, et le goût de l'amande ségrège. Le caractère doux (Sk) domine l'amer (sk) ; le goût des amandes d'un arbre dépend du génotype de cet arbre, donc un arbre doux porte des amandes douces, mais les arbres issus de ces amandes peuvent être amers : environ 25 % de semis amers quand les deux parents sont hétérozygotes, environ 50 % quand l'un est hétérozygote et l'autre amer, aucun si un parent est SkSk. Les amandes des espèces sauvages apparentées sont amères et toxiques (amygdaline).",
   "src": [
    {
     "k": "prunus-vichi",
     "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC7353606/",
     "loc": "Introduction, paragraphs 1-2"
    },
    {
     "k": "prunus-lotti",
     "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10145170/",
     "loc": "Introduction, paragraphs 1-2"
    }
   ]
  },
  "propagation": {
   "en": "Cultivars are grafted onto rootstocks: almond seedlings (traditionally unselected, often bitter, deep-rooted, for dry farming), peach seedlings (irrigated land) or clonal peach × almond hybrids such as GF-677 and Garnem; plum rootstocks only under irrigation and after compatibility tests. Attempts to select a clonal almond rootstock failed because almond is hard to propagate vegetatively. The juvenile phase prevents judging nuts before 3 to 4 years.",
   "fr": "Les variétés sont greffées sur des porte-greffes : semis d'amandier (traditionnellement non sélectionnés, souvent amers, à racines profondes, pour le sec), semis de pêcher (en irrigué) ou hybrides clonaux pêcher × amandier comme GF-677 et Garnem ; les porte-greffes prunier seulement en irrigué et après essais de compatibilité. Les essais de sélection d'un porte-greffe clonal d'amandier ont échoué, l'amandier se multipliant mal par voie végétative. La phase juvénile empêche de juger les amandes avant 3 à 4 ans.",
   "src": [
    {
     "k": "prunus-rubio",
     "url": "https://om.ciheam.org/ressources/om/pdf/a119/00007379.pdf",
     "loc": "Introduction; sections 1-5"
    },
    {
     "k": "prunus-ped",
     "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC7775440/",
     "loc": "Introduction, paragraph 2 ('grafted onto soil-adapted clonal rootstocks')"
    },
    {
     "k": "prunus-lotti",
     "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10145170/",
     "loc": "Introduction, paragraph 2 (juvenile phase 3-4 years)"
    }
   ]
  }
 },
 {
  "id": "prunus-amygdalus-nonpareil",
  "parent": "prunus-amygdalus",
  "rank": "cultivar",
  "name": "Prunus amygdalus 'Nonpareil'",
  "author": "",
  "names_src": [],
  "cultivar": {
   "self": "self-incompatible",
   "s_genotype": "S7S8",
   "pollinizers": [
    "prunus-amygdalus-carmel",
    "prunus-amygdalus-monterey",
    "Sonora",
    "Ne Plus Ultra"
   ],
   "incompatible_with": [
    "IXL",
    "Long IXL",
    "Profuse",
    "Tardy Nonpareil",
    "Jeffries (one-way: Jeffries cannot fertilise Nonpareil)"
   ],
   "group": "UC incompatibility group 'Nonpareil'; UC bloom group 'Mid' (reference for bloom dates)",
   "origin": {
    "en": "USA, chance seedling, introduced 1925; founder of most US and Australian breeding.",
    "fr": "États-Unis, semis de hasard, diffusé en 1925 ; fondateur de la plupart des programmes américains et australiens."
   },
   "src": [
    {
     "k": "prunus-calle",
     "url": "https://repositori.irta.cat/bitstream/handle/20.500.12327/3376/Calle_Review_24.pdf?sequence=1",
     "loc": "cultivar entry 'Nonpareil'"
    },
    {
     "k": "prunus-scirep",
     "url": "https://www.nature.com/articles/s41598-020-57498-6",
     "loc": "Results (Nonpareil S7S8)"
    },
    {
     "k": "prunus-ucalm",
     "url": "https://ucanr.edu/sites/default/files/2010-06/18977.pdf",
     "loc": "Table 8.1 (bloom groups) and Table 8.2 (incompatibility groups)"
    },
    {
     "k": "prunus-ucalm",
     "url": "https://ucanr.edu/sites/default/files/2010-06/18977.pdf",
     "loc": "'Bloom Time' paragraph (Nonpareil with Carmel, Sonora, Monterey; Ne Plus Ultra)"
    },
    {
     "k": "prunus-ped",
     "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC7775440/",
     "loc": "Discussion paragraph 1"
    }
   ]
  }
 },
 {
  "id": "prunus-amygdalus-carmel",
  "parent": "prunus-amygdalus",
  "rank": "cultivar",
  "name": "Prunus amygdalus 'Carmel'",
  "author": "",
  "names_src": [],
  "cultivar": {
   "self": "self-incompatible",
   "s_genotype": "S5S8",
   "pollinizers": [],
   "incompatible_with": [
    "Carrion",
    "Livingston",
    "Monarch",
    "Sauret #1"
   ],
   "group": "UC incompatibility group 'Carmel'; UC bloom group 'Mid'; released as a pollinizer for 'Nonpareil'",
   "origin": {
    "en": "USA, Nonpareil × Mission, introduced 1966; the first Californian release with wide commercial impact, as a pollinizer for 'Nonpareil'.",
    "fr": "États-Unis, Nonpareil × Mission, diffusé en 1966 ; première obtention californienne à fort impact commercial, comme pollinisateur de 'Nonpareil'."
   },
   "src": [
    {
     "k": "prunus-calle",
     "url": "https://repositori.irta.cat/bitstream/handle/20.500.12327/3376/Calle_Review_24.pdf?sequence=1",
     "loc": "cultivar entry 'Carmel'"
    },
    {
     "k": "prunus-scirep",
     "url": "https://www.nature.com/articles/s41598-020-57498-6",
     "loc": "Results (Carmel S5S8)"
    },
    {
     "k": "prunus-ucalm",
     "url": "https://ucanr.edu/sites/default/files/2010-06/18977.pdf",
     "loc": "Table 8.1 (bloom groups) and Table 8.2 (incompatibility groups)"
    },
    {
     "k": "prunus-ped",
     "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC7775440/",
     "loc": "Introduction, paragraph 3 ('Carmel ... as Nonpareil pollinizer')"
    }
   ]
  }
 },
 {
  "id": "prunus-amygdalus-monterey",
  "parent": "prunus-amygdalus",
  "rank": "cultivar",
  "name": "Prunus amygdalus 'Monterey'",
  "author": "",
  "names_src": [],
  "cultivar": {
   "self": "self-incompatible",
   "s_genotype": "S1S8",
   "pollinizers": [
    "prunus-amygdalus-nonpareil"
   ],
   "incompatible_with": [],
   "group": "UC incompatibility group 'Monterey' (only member listed); UC bloom group 'Late mid' (+3 to +4 days)",
   "origin": {
    "en": "USA, Nonpareil × Mission, introduced 1974.",
    "fr": "États-Unis, Nonpareil × Mission, diffusé en 1974."
   },
   "src": [
    {
     "k": "prunus-calle",
     "url": "https://repositori.irta.cat/bitstream/handle/20.500.12327/3376/Calle_Review_24.pdf?sequence=1",
     "loc": "cultivar entry 'Monterey'"
    },
    {
     "k": "prunus-ucalm",
     "url": "https://ucanr.edu/sites/default/files/2010-06/18977.pdf",
     "loc": "Table 8.1 (bloom groups) and Table 8.2 (incompatibility groups)"
    },
    {
     "k": "prunus-ucalm",
     "url": "https://ucanr.edu/sites/default/files/2010-06/18977.pdf",
     "loc": "'Bloom Time' paragraph (Nonpareil and Monterey cross-pollinate)"
    }
   ]
  }
 },
 {
  "id": "prunus-amygdalus-independence",
  "parent": "prunus-amygdalus",
  "rank": "cultivar",
  "name": "Prunus amygdalus 'Independence'",
  "author": "",
  "names_src": [],
  "cultivar": {
   "self": "self-compatible",
   "s_genotype": "",
   "pollinizers": [],
   "incompatible_with": [],
   "group": "blooms with 'Nonpareil'",
   "origin": {
    "en": "USA, Zaiger Genetics, introduced 2010, All-In-One × 21G8.",
    "fr": "États-Unis, Zaiger Genetics, diffusé en 2010, All-In-One × 21G8."
   },
   "src": [
    {
     "k": "prunus-calle",
     "url": "https://repositori.irta.cat/bitstream/handle/20.500.12327/3376/Calle_Review_24.pdf?sequence=1",
     "loc": "cultivar entry 'Independence'"
    }
   ]
  }
 },
 {
  "id": "prunus-amygdalus-ferragnes",
  "parent": "prunus-amygdalus",
  "rank": "cultivar",
  "name": "Prunus amygdalus 'Ferragnès'",
  "author": "",
  "names_src": [],
  "cultivar": {
   "self": "self-incompatible",
   "s_genotype": "S1S3",
   "pollinizers": [
    "prunus-amygdalus-ferraduel"
   ],
   "incompatible_with": [],
   "group": "very late bloom",
   "origin": {
    "en": "France, INRAE breeding, Cristomorto × Aï; introduced 1969 (Calle et al.) or 1973 (Pérez de los Cobos et al.); a very successful late-flowering Mediterranean cultivar.",
    "fr": "France, sélection INRAE, Cristomorto × Aï ; diffusé en 1969 (Calle et al.) ou 1973 (Pérez de los Cobos et al.) ; variété méditerranéenne tardive à grand succès."
   },
   "src": [
    {
     "k": "prunus-calle",
     "url": "https://repositori.irta.cat/bitstream/handle/20.500.12327/3376/Calle_Review_24.pdf?sequence=1",
     "loc": "cultivar entry 'Ferragnès'"
    },
    {
     "k": "prunus-ca66",
     "url": "https://opera-connaissances.chambres-agriculture.fr/doc_num.php?explnum_id=151307",
     "loc": "slide '3. Choix variétales' (variety table; Ferragnès-Ferraduel pairing)"
    },
    {
     "k": "prunus-ped",
     "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC7775440/",
     "loc": "Introduction, paragraph 3"
    }
   ]
  }
 },
 {
  "id": "prunus-amygdalus-ferraduel",
  "parent": "prunus-amygdalus",
  "rank": "cultivar",
  "name": "Prunus amygdalus 'Ferraduel'",
  "author": "",
  "names_src": [],
  "cultivar": {
   "self": "self-incompatible",
   "s_genotype": "S1S4",
   "pollinizers": [],
   "incompatible_with": [],
   "group": "very late bloom, slightly later than 'Ferragnès'; grown mainly as a pollinizer",
   "origin": {
    "en": "France, INRAE breeding, introduced 1969, Cristomorto × Aï (same parents as 'Ferragnès').",
    "fr": "France, sélection INRAE, diffusé en 1969, Cristomorto × Aï (mêmes parents que 'Ferragnès')."
   },
   "src": [
    {
     "k": "prunus-calle",
     "url": "https://repositori.irta.cat/bitstream/handle/20.500.12327/3376/Calle_Review_24.pdf?sequence=1",
     "loc": "cultivar entry 'Ferraduel'"
    },
    {
     "k": "prunus-ca66",
     "url": "https://opera-connaissances.chambres-agriculture.fr/doc_num.php?explnum_id=151307",
     "loc": "slide '3. Choix variétales': 'Seul intérêt comme pollinisateur'"
    }
   ]
  }
 },
 {
  "id": "prunus-amygdalus-ferrastar",
  "parent": "prunus-amygdalus",
  "rank": "cultivar",
  "name": "Prunus amygdalus 'Ferrastar'",
  "author": "",
  "names_src": [],
  "cultivar": {
   "self": "self-incompatible",
   "s_genotype": "S2S25 (López et al. 2004) or S2S10 (Calle et al. 2024)",
   "pollinizers": [],
   "incompatible_with": [],
   "group": "very late bloom; IRTA cross-incompatibility group XVI or XVII (exact group not in the abstract)",
   "origin": {
    "en": "France, INRAE breeding, introduced 1960, Cristomorto × Ardechoise; synonym Cristar.",
    "fr": "France, sélection INRAE, diffusé en 1960, Cristomorto × Ardechoise ; synonyme Cristar."
   },
   "src": [
    {
     "k": "prunus-calle",
     "url": "https://repositori.irta.cat/bitstream/handle/20.500.12327/3376/Calle_Review_24.pdf?sequence=1",
     "loc": "cultivar entry 'Ferrastar'"
    },
    {
     "k": "prunus-lopez",
     "url": "https://pubmed.ncbi.nlm.nih.gov/15338131/",
     "loc": "abstract"
    },
    {
     "k": "prunus-ca66",
     "url": "https://opera-connaissances.chambres-agriculture.fr/doc_num.php?explnum_id=151307",
     "loc": "slide '3. Choix variétales': 'Autostérile'"
    }
   ]
  }
 },
 {
  "id": "prunus-amygdalus-lauranne",
  "parent": "prunus-amygdalus",
  "rank": "cultivar",
  "name": "Prunus amygdalus 'Lauranne'",
  "author": "",
  "names_src": [],
  "cultivar": {
   "self": "self-compatible",
   "s_genotype": "S3Sf",
   "pollinizers": [],
   "incompatible_with": [],
   "group": "midseason to late bloom",
   "origin": {
    "en": "France, INRAE breeding, Ferragnès × Tuono; introduced 1989 (Calle et al.) or 1991 (Pérez de los Cobos et al.); synonym Avijor.",
    "fr": "France, sélection INRAE, Ferragnès × Tuono ; diffusé en 1989 (Calle et al.) ou 1991 (Pérez de los Cobos et al.) ; synonyme Avijor."
   },
   "src": [
    {
     "k": "prunus-calle",
     "url": "https://repositori.irta.cat/bitstream/handle/20.500.12327/3376/Calle_Review_24.pdf?sequence=1",
     "loc": "cultivar entry 'Lauranne'"
    },
    {
     "k": "prunus-scirep",
     "url": "https://www.nature.com/articles/s41598-020-57498-6",
     "loc": "Results (Lauranne S3Sf)"
    },
    {
     "k": "prunus-ped",
     "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC7775440/",
     "loc": "Introduction, paragraph 3"
    }
   ]
  }
 },
 {
  "id": "prunus-amygdalus-mandaline",
  "parent": "prunus-amygdalus",
  "rank": "cultivar",
  "name": "Prunus amygdalus 'Mandaline'",
  "author": "",
  "names_src": [],
  "cultivar": {
   "self": "self-compatible",
   "s_genotype": "S1Sf",
   "pollinizers": [],
   "incompatible_with": [],
   "group": "late bloom, slightly later than 'Ferragnès'",
   "origin": {
    "en": "France, INRAE breeding, Ferralise × Tuono.",
    "fr": "France, sélection INRAE, Ferralise × Tuono."
   },
   "src": [
    {
     "k": "prunus-calle",
     "url": "https://repositori.irta.cat/bitstream/handle/20.500.12327/3376/Calle_Review_24.pdf?sequence=1",
     "loc": "cultivar entry 'Mandaline'"
    },
    {
     "k": "prunus-ca66",
     "url": "https://opera-connaissances.chambres-agriculture.fr/doc_num.php?explnum_id=151307",
     "loc": "slide '3. Choix variétales': 'Autofertile'"
    }
   ]
  }
 },
 {
  "id": "prunus-amygdalus-tuono",
  "parent": "prunus-amygdalus",
  "rank": "cultivar",
  "name": "Prunus amygdalus 'Tuono'",
  "author": "",
  "names_src": [],
  "cultivar": {
   "self": "self-compatible",
   "s_genotype": "S1Sf",
   "pollinizers": [],
   "incompatible_with": [],
   "group": "very late bloom; main Sf donor of Spanish breeding programmes",
   "origin": {
    "en": "Italian landrace; synonyms include Guara: genetic and trait data indicate that the Spanish 'Guara' (CITA, 1987) is very likely the same clone.",
    "fr": "Variété locale italienne ; synonymes dont Guara : données génétiques et caractères indiquent que l'espagnole 'Guara' (CITA, 1987) est très probablement le même clone."
   },
   "src": [
    {
     "k": "prunus-calle",
     "url": "https://repositori.irta.cat/bitstream/handle/20.500.12327/3376/Calle_Review_24.pdf?sequence=1",
     "loc": "cultivar entry 'Tuono'"
    },
    {
     "k": "prunus-calle",
     "url": "https://repositori.irta.cat/bitstream/handle/20.500.12327/3376/Calle_Review_24.pdf?sequence=1",
     "loc": "cultivar entry 'Guara'"
    },
    {
     "k": "prunus-ped",
     "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC7775440/",
     "loc": "Results 'Genetic contribution'; Discussion ('Guara' (syn 'Tuono'))"
    }
   ]
  }
 },
 {
  "id": "prunus-amygdalus-marcona",
  "parent": "prunus-amygdalus",
  "rank": "cultivar",
  "name": "Prunus amygdalus 'Marcona'",
  "author": "",
  "names_src": [],
  "cultivar": {
   "self": "self-incompatible",
   "s_genotype": "S11S12",
   "pollinizers": [],
   "incompatible_with": [],
   "group": "medium bloom; also used in Spain as a seedling rootstock",
   "origin": {
    "en": "Spanish landrace; one of four reference cultivars in Calle et al.",
    "fr": "Variété locale espagnole ; l'une des quatre variétés de référence de Calle et al."
   },
   "src": [
    {
     "k": "prunus-calle",
     "url": "https://repositori.irta.cat/bitstream/handle/20.500.12327/3376/Calle_Review_24.pdf?sequence=1",
     "loc": "cultivar entry 'Marcona'"
    },
    {
     "k": "prunus-calle",
     "url": "https://repositori.irta.cat/bitstream/handle/20.500.12327/3376/Calle_Review_24.pdf?sequence=1",
     "loc": "Table 2"
    },
    {
     "k": "prunus-rubio",
     "url": "https://om.ciheam.org/ressources/om/pdf/a119/00007379.pdf",
     "loc": "section 1 'Almond seedling'"
    }
   ]
  }
 },
 {
  "id": "prunus-amygdalus-desmayo-largueta",
  "parent": "prunus-amygdalus",
  "rank": "cultivar",
  "name": "Prunus amygdalus 'Desmayo Largueta'",
  "author": "",
  "names_src": [],
  "cultivar": {
   "self": "self-incompatible",
   "s_genotype": "S1S25 (López et al. 2004) or S1S10 (Calle et al. 2024)",
   "pollinizers": [],
   "incompatible_with": [],
   "group": "very early bloom; IRTA cross-incompatibility group XVI or XVII (exact group not in the abstract)",
   "origin": {
    "en": "Spanish landrace.",
    "fr": "Variété locale espagnole."
   },
   "src": [
    {
     "k": "prunus-calle",
     "url": "https://repositori.irta.cat/bitstream/handle/20.500.12327/3376/Calle_Review_24.pdf?sequence=1",
     "loc": "cultivar entry 'Desmayo Largueta'"
    },
    {
     "k": "prunus-lopez",
     "url": "https://pubmed.ncbi.nlm.nih.gov/15338131/",
     "loc": "abstract"
    }
   ]
  }
 },
 {
  "id": "prunus-webbii",
  "parent": "prunus",
  "rank": "species",
  "name": "Prunus webbii",
  "author": "(Spach) Fritsch",
  "common": {
   "fr": [],
   "en": []
  },
  "synonyms": [
   "Amygdalus webbii Spach"
  ],
  "names_src": [
   {
    "k": "powo",
    "url": "https://api.gbif.org/v1/species/207742567",
    "loc": "WCVP 2026-06 record (POWO backbone) via GBIF: Prunus webbii (Spach) Fritsch, accepted; Amygdalus webbii Spach listed as synonym"
   },
   {
    "k": "wfo",
    "url": "https://wfoplantlist.org/taxon/wfo-0000996499-2026-06",
    "loc": "WFO Plant List 2026-06: Prunus webbii (Spach) Fritsch, accepted"
   }
  ],
  "mating": {
   "system": "mixed",
   "flags": [
    "self-compatible",
    "self-incompatible",
    "gametophytic-si"
   ],
   "en": "A wild almond relative with both self-compatible and self-incompatible trees: of 33 Apulian accessions, 16 were self-compatible, 2 self-incompatible and 15 of unknown status; some carry S-alleles without RNase activity.",
   "fr": "Amandier sauvage comprenant des arbres autocompatibles et auto-incompatibles : sur 33 accessions des Pouilles, 16 étaient autocompatibles, 2 auto-incompatibles et 15 de statut inconnu ; certaines portent des allèles S sans activité RNase.",
   "src": [
    {
     "k": "prunus-bosk",
     "url": "https://pubmed.ncbi.nlm.nih.gov/17899198/",
     "loc": "abstract"
    }
   ]
  },
  "interspecific": [
   {
    "with": "Prunus amygdalus",
    "en": "Crosses easily enough with almond to be used in breeding: UC Davis keeps four P. webbii-derived sources of self-compatibility, counting 'Tuono'.",
    "fr": "Se croise assez facilement avec l'amandier pour servir en amélioration : UC Davis conserve quatre sources d'autocompatibilité issues de P. webbii, en comptant 'Tuono'.",
    "src": [
     {
      "k": "prunus-grad",
      "url": "https://om.ciheam.org/om/pdf/a119/00007361.pdf",
      "loc": "III. Results, paragraph 1"
     }
    ]
   }
  ]
 },
 {
  "id": "prunus-domestica",
  "parent": "prunus",
  "rank": "species",
  "name": "Prunus domestica",
  "author": "L.",
  "common": {
   "fr": [
    "prunier",
    "prunier domestique"
   ],
   "en": [
    "European plum",
    "plum"
   ]
  },
  "synonyms": [
   "Prunus communis Huds."
  ],
  "names_src": [
   {
    "k": "powo",
    "url": "https://api.gbif.org/v1/species/207748787",
    "loc": "WCVP 2026-06 record (POWO backbone) via GBIF: Prunus domestica L., accepted"
   },
   {
    "k": "powo",
    "url": "https://api.gbif.org/v1/species/207749063",
    "loc": "WCVP 2026-06 record (POWO backbone) via GBIF: Prunus communis Huds. = synonym"
   },
   {
    "k": "wfo",
    "url": "https://wfoplantlist.org/taxon/wfo-0000984349-2026-06",
    "loc": "WFO Plant List 2026-06: Prunus domestica L., accepted; child taxon subsp. insititia (L.) C.K.Schneid."
   }
  ],
  "taxonomy": {
   "en": "Accepted by POWO and WFO. Damsons, bullaces and mirabelles are split off differently: POWO (WCVP) accepts Prunus insititia L. and Prunus ×syriaca Borkh. as separate species; WFO accepts P. insititia and P. syriaca too, but also keeps P. domestica subsp. insititia (L.) C.K.Schneid. as an accepted subspecies. DNA data on 405 samples found four clades in cultivated plums (greengages, mirabelles, European plums, d'Agen prunes) but no separate clade for damsons, bullaces or P. insititia.",
   "fr": "Accepté par POWO et WFO. Les damas (damsons), prunelles de haie (bullaces) et mirabelles sont traités différemment : POWO (WCVP) accepte Prunus insititia L. et Prunus ×syriaca Borkh. comme espèces distinctes ; WFO accepte aussi P. insititia et P. syriaca, mais garde en même temps P. domestica subsp. insititia (L.) C.K.Schneid. comme sous-espèce acceptée. Des données ADN sur 405 échantillons montrent quatre clades chez les pruniers cultivés (reines-claudes, mirabelles, pruniers européens, pruneaux d'Agen), sans clade propre aux damas, bullaces ou P. insititia.",
   "src": [
    {
     "k": "powo",
     "url": "https://api.gbif.org/v1/species/207748787",
     "loc": "WCVP 2026-06 record (POWO backbone) via GBIF: Prunus domestica L., accepted"
    },
    {
     "k": "powo",
     "url": "https://api.gbif.org/v1/species/207749063",
     "loc": "WCVP 2026-06 record (POWO backbone) via GBIF: Prunus communis Huds. = synonym"
    },
    {
     "k": "wfo",
     "url": "https://wfoplantlist.org/taxon/wfo-0000984349-2026-06",
     "loc": "WFO Plant List 2026-06: Prunus domestica L., accepted; child taxon subsp. insititia (L.) C.K.Schneid."
    },
    {
     "k": "powo",
     "url": "https://api.gbif.org/v1/species/207747682",
     "loc": "WCVP 2026-06 record (POWO backbone) via GBIF: Prunus insititia L., accepted"
    },
    {
     "k": "powo",
     "url": "https://api.gbif.org/v1/species/207743426",
     "loc": "WCVP 2026-06 record (POWO backbone) via GBIF: Prunus ×syriaca Borkh., accepted"
    },
    {
     "k": "powo",
     "url": "https://api.gbif.org/v1/species/207743435",
     "loc": "WCVP 2026-06 record (POWO backbone) via GBIF: P. domestica subsp. syriaca (Borkh.) Janch. = synonym of P. ×syriaca"
    },
    {
     "k": "wfo",
     "url": "https://wfoplantlist.org/taxon/wfo-0001007422-2026-06",
     "loc": "WFO Plant List 2026-06: Prunus insititia L., accepted"
    },
    {
     "k": "wfo",
     "url": "https://wfoplantlist.org/taxon/wfo-0001018364-2026-06",
     "loc": "WFO Plant List 2026-06: P. domestica subsp. insititia (L.) C.K.Schneid., accepted"
    },
    {
     "k": "wfo",
     "url": "https://wfoplantlist.org/taxon/wfo-0000996194-2026-06",
     "loc": "WFO Plant List 2026-06: Prunus syriaca Borkh., accepted"
    },
    {
     "k": "prunus-zheb",
     "url": "https://www.nature.com/articles/s41438-018-0090-6",
     "loc": "Abstract; Results, 'Prunus domestica germplasm structure'"
    }
   ]
  },
  "ploidy": {
   "en": "Hexaploid, 2n = 48.",
   "fr": "Hexaploïde, 2n = 48.",
   "src": [
    {
     "k": "prunus-abd",
     "url": "https://www.frontiersin.org/journals/plant-science/articles/10.3389/fpls.2019.00896/full",
     "loc": "Introduction, paragraph 1"
    }
   ]
  },
  "mating": {
   "system": "mixed",
   "flags": [
    "self-compatible",
    "partly-self-compatible",
    "self-incompatible",
    "gametophytic-si",
    "hermaphrodite",
    "insect-pollinated"
   ],
   "en": "The European plum has both self-incompatible and self-compatible cultivars; self-incompatibility is rarer in polyploid plums than in diploid ones. The RHS says many plums and gages are self-fertile, and that partly self-fertile ones also crop decently. In UC Davis prune material, one S-allele (S17) was found in every self-compatible selection and in no self-incompatible one.",
   "fr": "Le prunier européen compte des variétés auto-incompatibles et autocompatibles ; l'auto-incompatibilité est plus rare chez les pruniers polyploïdes que chez les diploïdes. La RHS indique que beaucoup de prunes et reines-claudes sont autofertiles, et que les partiellement autofertiles donnent aussi des récoltes correctes. Dans le matériel de pruneaux de UC Davis, un allèle S (S17) était présent chez toutes les sélections autocompatibles et chez aucune auto-incompatible.",
   "src": [
    {
     "k": "prunus-halasz",
     "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC8249305/",
     "loc": "Introduction (Kota-Dombrovska & Lacis 2013)"
    },
    {
     "k": "prunus-abd",
     "url": "https://www.frontiersin.org/journals/plant-science/articles/10.3389/fpls.2019.00896/full",
     "loc": "Introduction, paragraph 3 (Halász et al. 2014)"
    },
    {
     "k": "prunus-rhsplum",
     "url": "https://www.rhs.org.uk/fruit/plums/grow-your-own",
     "loc": "'Choosing' section"
    },
    {
     "k": "prunus-rhsgage",
     "url": "https://www.rhs.org.uk/fruit/gages/grow-your-own",
     "loc": "'Choosing' section"
    },
    {
     "k": "prunus-fern",
     "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC8118244/",
     "loc": "Results, 'A S-RNase allele common to self-compatible phenotypes'"
    }
   ]
  },
  "interspecific": [
   {
    "with": "Prunus cerasifera × Prunus spinosa (origin)",
    "en": "Current view: P. domestica arose as a hybrid of diploid cherry plum (P. cerasifera) and tetraploid blackthorn (P. spinosa), the blackthorn itself perhaps a hybrid of cherry plum and an unknown Eurasian plum; no truly wild P. domestica is known. An older hypothesis (Eryomine 1991) also gives a share to the Japanese plum, and S-locus and SSR data show P. domestica close to P. salicina.",
    "fr": "Vue actuelle : P. domestica est né d'un hybride entre le prunier myrobolan diploïde (P. cerasifera) et le prunellier tétraploïde (P. spinosa), ce dernier étant peut-être lui-même un hybride du myrobolan et d'un prunier eurasiatique inconnu ; on ne connaît pas de P. domestica vraiment sauvage. Une hypothèse plus ancienne (Eryomine 1991) donne aussi une part au prunier japonais, et les données du locus S et des SSR montrent P. domestica proche de P. salicina.",
    "src": [
     {
      "k": "prunus-zheb",
      "url": "https://www.nature.com/articles/s41438-018-0090-6",
      "loc": "Abstract; Introduction"
     },
     {
      "k": "prunus-abd",
      "url": "https://www.frontiersin.org/journals/plant-science/articles/10.3389/fpls.2019.00896/full",
      "loc": "Discussion, 'Genetic Relationships in Prunus Species'"
     }
    ],
    "with_fr": "Prunus cerasifera × Prunus spinosa (origine)"
   },
   {
    "with": "Prunus salicina",
    "en": "European and Japanese plums do not pollinate each other: plant a European plum with another European plum, and a Japanese plum with another Japanese (or American) plum.",
    "fr": "Pruniers européens et japonais ne se pollinisent pas entre eux : associer un prunier européen à un autre européen, et un japonais à un autre japonais (ou américain).",
    "src": [
     {
      "k": "prunus-umaine",
      "url": "https://extension.umaine.edu/publications/2034e/",
      "loc": "section 'Pollination'"
     },
     {
      "k": "prunus-usu",
      "url": "https://extension.usu.edu/yardandgarden/research/plums-in-the-home-garden",
      "loc": "European and Japanese plum paragraphs"
     },
     {
      "k": "prunus-illinois",
      "url": "https://extension.illinois.edu/fruit-trees/plums",
      "loc": "plums page, European plums paragraph"
     }
    ]
   },
   {
    "with": "Prunus spinosa",
    "en": "Blackthorn hybridises readily with hexaploid plums in the wild; the hybrids look like blackthorn but are pentaploid (2n = 5x = 40). Hungarian breeders made three P. spinosa × P. domestica hybrids on purpose.",
    "fr": "Le prunellier s'hybride facilement dans la nature avec les pruniers hexaploïdes ; les hybrides ressemblent au prunellier mais sont pentaploïdes (2n = 5x = 40). Des sélectionneurs hongrois ont créé volontairement trois hybrides P. spinosa × P. domestica.",
    "src": [
     {
      "k": "prunus-halasz",
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC8249305/",
      "loc": "Abstract; Introduction, paragraph 2"
     }
    ]
   }
  ],
  "varieties": {
   "en": "A cultivar that is not self-fertile needs another plum that flowers at about the same time nearby; UC notes that any self-fertile plum will pollinate any other plum whose bloom overlaps. Sources differ on how common self-fertility is: the RHS and the French Croqueurs de pommes list many self-fertile cultivars, while a Maine extension bulletin says European plums need other European plums and that little is known about incompatibilities between them.",
   "fr": "Une variété non autofertile a besoin à proximité d'un autre prunier fleurissant à peu près en même temps ; UC note que tout prunier autofertile pollinise tout autre prunier dont la floraison chevauche la sienne. Les sources divergent sur la fréquence de l'autofertilité : la RHS et les Croqueurs de pommes citent beaucoup de variétés autofertiles, alors qu'un bulletin de l'extension du Maine dit que les pruniers européens ont besoin d'autres pruniers européens et que l'on connaît mal leurs incompatibilités.",
   "src": [
    {
     "k": "prunus-rhsplum",
     "url": "https://www.rhs.org.uk/fruit/plums/grow-your-own",
     "loc": "'Choosing' section"
    },
    {
     "k": "prunus-ucjp",
     "url": "https://ucanr.edu/sites/default/files/2011-12/132874.pdf",
     "loc": "p. 51, 'Selecting Pollenizers'"
    },
    {
     "k": "prunus-croq",
     "url": "https://croqueurs-national.fr/pollinisation/155-pollinisation-des-pruniers.html",
     "loc": "page text"
    },
    {
     "k": "prunus-umaine",
     "url": "https://extension.umaine.edu/publications/2034e/",
     "loc": "section 'Pollination'"
    }
   ]
  },
  "isolation": {
   "en": "For fruit set, UC (chapter on Japanese plums, advice given for plums in general) advises one to two hives per acre where bees are needed, more if pollenizers are few, weather poor, hives weak or bloom overlap small. Hives in groups of no more than 6 to 12; some bees forage up to 4 miles from the hive within 2 or 3 days. No seed-saving isolation distance found.",
   "fr": "Pour la nouaison, UC (chapitre sur le prunier japonais, conseil valable pour les pruniers en général) conseille une à deux ruches par acre là où des abeilles sont nécessaires, davantage si les pollinisateurs sont rares, le temps mauvais, les ruches faibles ou le chevauchement des floraisons faible. Ruches par groupes de 6 à 12 au plus ; en 2 ou 3 jours, certaines abeilles butinent jusqu'à 4 miles de la ruche. Aucune distance d'isolement pour la production de semences trouvée.",
   "src": [
    {
     "k": "prunus-ucjp",
     "url": "https://ucanr.edu/sites/default/files/2011-12/132874.pdf",
     "loc": "pp. 53-54, 'Bee placement in the orchard'"
    }
   ]
  },
  "true_to_type": {
   "value": "no",
   "en": "Plum cultivars are highly heterozygous, so seedlings are new genotypes; we found no source measuring how close seedlings of self-fertile plums stay to the mother tree.",
   "fr": "Les variétés de prunier sont très hétérozygotes, leurs semis sont donc de nouveaux génotypes ; nous n'avons pas trouvé de source mesurant à quel point les semis de pruniers autofertiles restent proches de l'arbre mère.",
   "src": [
    {
     "k": "prunus-habibi",
     "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC8976691/",
     "loc": "Introduction, paragraph 1"
    }
   ]
  },
  "propagation": {
   "en": "Plums are grafted on the roots of another plum to limit size and bring earlier cropping: RHS cites 'Pixy' and 'VVA-1' (semi-dwarfing), 'St Julian A' and 'Wavit' (semi-vigorous) and 'Brompton' (vigorous).",
   "fr": "Les pruniers sont greffés sur les racines d'un autre prunier pour limiter la taille et avancer la mise à fruit : la RHS cite 'Pixy' et 'VVA-1' (semi-nanisants), 'St Julian A' et 'Wavit' (semi-vigoureux) et 'Brompton' (vigoureux).",
   "src": [
    {
     "k": "prunus-rhsplum",
     "url": "https://www.rhs.org.uk/fruit/plums/grow-your-own",
     "loc": "'Choosing' section, rootstocks"
    }
   ]
  }
 },
 {
  "id": "prunus-domestica-victoria",
  "parent": "prunus-domestica",
  "rank": "cultivar",
  "name": "Prunus domestica 'Victoria'",
  "author": "",
  "names_src": [],
  "cultivar": {
   "self": "self-compatible",
   "s_genotype": "",
   "pollinizers": [],
   "incompatible_with": [],
   "group": "RHS AGM",
   "origin": {
    "en": "Classic British plum, eaten fresh or cooked; RHS gives it as its example of a self-fertile plum.",
    "fr": "Prune britannique classique, à croquer ou à cuire ; la RHS la donne en exemple de prunier autofertile."
   },
   "src": [
    {
     "k": "prunus-rhsplum",
     "url": "https://www.rhs.org.uk/fruit/plums/grow-your-own",
     "loc": "Recommended Varieties: 'Victoria' AGM, Self-fertile"
    },
    {
     "k": "prunus-rhspoll",
     "url": "https://www.rhs.org.uk/advice/beginners-guide/fruit-basics/fruit-pollination",
     "loc": "paragraph 2"
    },
    {
     "k": "prunus-croq",
     "url": "https://croqueurs-national.fr/pollinisation/155-pollinisation-des-pruniers.html",
     "loc": "list 'Autofertiles' (Victoria, Queen Victoria)"
    }
   ]
  }
 },
 {
  "id": "prunus-domestica-czar",
  "parent": "prunus-domestica",
  "rank": "cultivar",
  "name": "Prunus domestica 'Czar'",
  "author": "",
  "names_src": [],
  "cultivar": {
   "self": "self-compatible",
   "s_genotype": "",
   "pollinizers": [],
   "incompatible_with": [],
   "group": "RHS AGM",
   "origin": {
    "en": "Culinary plum with deep purplish-blue fruit, compact; the Croqueurs list it among pollinizers of several cultivars.",
    "fr": "Prune à cuire, fruits bleu-violet foncé, arbre compact ; les Croqueurs la citent parmi les pollinisateurs de plusieurs variétés."
   },
   "src": [
    {
     "k": "prunus-rhsplum",
     "url": "https://www.rhs.org.uk/fruit/plums/grow-your-own",
     "loc": "Recommended Varieties: 'Czar' AGM, compact and self-fertile"
    },
    {
     "k": "prunus-croq",
     "url": "https://croqueurs-national.fr/pollinisation/155-pollinisation-des-pruniers.html",
     "loc": "pollinizer table"
    }
   ]
  }
 },
 {
  "id": "prunus-domestica-opal",
  "parent": "prunus-domestica",
  "rank": "cultivar",
  "name": "Prunus domestica 'Opal'",
  "author": "",
  "names_src": [],
  "cultivar": {
   "self": "self-compatible",
   "s_genotype": "",
   "pollinizers": [],
   "incompatible_with": [],
   "group": "RHS AGM",
   "origin": {
    "en": "Dessert plum, reddish-purple skin and golden-yellow flesh.",
    "fr": "Prune de table, peau rouge-violet, chair jaune doré."
   },
   "src": [
    {
     "k": "prunus-rhsplum",
     "url": "https://www.rhs.org.uk/fruit/plums/grow-your-own",
     "loc": "Recommended Varieties: 'Opal' AGM, Self-fertile"
    }
   ]
  }
 },
 {
  "id": "prunus-domestica-stanley",
  "parent": "prunus-domestica",
  "rank": "cultivar",
  "name": "Prunus domestica 'Stanley'",
  "author": "",
  "names_src": [],
  "cultivar": {
   "self": "self-compatible",
   "s_genotype": "",
   "pollinizers": [
    "Bluefre",
    "Verity",
    "Empress",
    "President"
   ],
   "incompatible_with": [],
   "group": "European prune-type plum",
   "origin": {
    "en": "Self-fruitful, but a second cultivar is recommended for best fruit; common partners named by NC State.",
    "fr": "Autofertile, mais une seconde variété est conseillée pour de meilleurs fruits ; partenaires courants cités par NC State."
   },
   "src": [
    {
     "k": "prunus-ncsu",
     "url": "https://plants.ces.ncsu.edu/plants/prunus-domestica-stanley/",
     "loc": "Fruit/description paragraph"
    },
    {
     "k": "prunus-usu",
     "url": "https://extension.usu.edu/yardandgarden/research/plums-in-the-home-garden",
     "loc": "European plums paragraph (Stanley as pollinizer)"
    }
   ]
  }
 },
 {
  "id": "prunus-domestica-reine-claude-d-oullins",
  "parent": "prunus-domestica",
  "rank": "cultivar",
  "name": "Prunus domestica 'Reine Claude d'Oullins'",
  "author": "",
  "names_src": [],
  "cultivar": {
   "self": "self-compatible",
   "s_genotype": "",
   "pollinizers": [],
   "incompatible_with": [],
   "group": "gage type; RHS AGM as 'Oullins Gage'",
   "origin": {
    "en": "Dual-purpose yellow gage; in the Croqueurs table it is one of the most cited pollinizers of other plums.",
    "fr": "Reine-claude jaune à double usage ; dans le tableau des Croqueurs, c'est l'un des pollinisateurs les plus cités pour les autres pruniers."
   },
   "src": [
    {
     "k": "prunus-rhsgage",
     "url": "https://www.rhs.org.uk/fruit/gages/grow-your-own",
     "loc": "Recommended Varieties: 'Oullins Gage' AGM, Self-fertile"
    },
    {
     "k": "prunus-croq",
     "url": "https://croqueurs-national.fr/pollinisation/155-pollinisation-des-pruniers.html",
     "loc": "list 'Autofertiles' and pollinizer table"
    }
   ]
  }
 },
 {
  "id": "prunus-domestica-reine-claude-doree",
  "parent": "prunus-domestica",
  "rank": "cultivar",
  "name": "Prunus domestica 'Reine Claude Dorée'",
  "author": "",
  "names_src": [],
  "cultivar": {
   "self": "self-incompatible",
   "s_genotype": "",
   "pollinizers": [],
   "incompatible_with": [],
   "group": "gage type",
   "origin": {
    "en": "Classed as self-sterile by the Croqueurs de pommes; it needs pollen of another plum flowering at the same time.",
    "fr": "Classée autostérile par les Croqueurs de pommes ; elle a besoin du pollen d'un autre prunier fleurissant en même temps."
   },
   "src": [
    {
     "k": "prunus-croq",
     "url": "https://croqueurs-national.fr/pollinisation/155-pollinisation-des-pruniers.html",
     "loc": "list 'Autostériles'"
    }
   ]
  }
 },
 {
  "id": "prunus-domestica-prune-d-ente",
  "parent": "prunus-domestica",
  "rank": "cultivar",
  "name": "Prunus domestica 'Prune d'Ente'",
  "author": "",
  "names_src": [],
  "cultivar": {
   "self": "self-compatible",
   "s_genotype": "",
   "pollinizers": [],
   "incompatible_with": [],
   "group": "",
   "origin": {
    "en": "Listed as self-fertile by the Croqueurs de pommes.",
    "fr": "Classée autofertile par les Croqueurs de pommes."
   },
   "src": [
    {
     "k": "prunus-croq",
     "url": "https://croqueurs-national.fr/pollinisation/155-pollinisation-des-pruniers.html",
     "loc": "list 'Autofertiles'"
    }
   ]
  }
 },
 {
  "id": "prunus-domestica-quetsche-d-italie",
  "parent": "prunus-domestica",
  "rank": "cultivar",
  "name": "Prunus domestica 'Quetsche d'Italie'",
  "author": "",
  "names_src": [],
  "cultivar": {
   "self": "self-incompatible",
   "s_genotype": "",
   "pollinizers": [
    "Reine Claude Verte",
    "Reine Claude d'Althan",
    "prunus-domestica-reine-claude-d-oullins",
    "Anna Spath",
    "Queen Victoria",
    "Prune Monsieur"
   ],
   "incompatible_with": [],
   "group": "quetsche type",
   "origin": {
    "en": "Self-sterile according to the Croqueurs, who list the pollinizers above; the same source lists 'Quetsche commune' as self-fertile.",
    "fr": "Autostérile selon les Croqueurs, qui donnent les pollinisateurs ci-dessus ; la même source classe la 'Quetsche commune' autofertile."
   },
   "src": [
    {
     "k": "prunus-croq",
     "url": "https://croqueurs-national.fr/pollinisation/155-pollinisation-des-pruniers.html",
     "loc": "list 'Autostériles', list 'Autofertiles' and pollinizer table (row 'Quetsche d'Italie')"
    }
   ]
  }
 },
 {
  "id": "prunus-insititia",
  "parent": "prunus",
  "rank": "species",
  "name": "Prunus insititia",
  "author": "L.",
  "common": {
   "fr": [],
   "en": [
    "damson",
    "bullace"
   ]
  },
  "synonyms": [
   "Prunus domestica subsp. insititia (L.) Bonnier & Layens",
   "Prunus domestica subsp. insititia (L.) C.K.Schneid.",
   "Prunus italica Borkh."
  ],
  "names_src": [
   {
    "k": "powo",
    "url": "https://api.gbif.org/v1/species/207747682",
    "loc": "WCVP 2026-06 record (POWO backbone) via GBIF: Prunus insititia L., accepted"
   },
   {
    "k": "powo",
    "url": "https://api.gbif.org/v1/species/207747790",
    "loc": "WCVP 2026-06 record (POWO backbone) via GBIF: P. domestica subsp. insititia (L.) Bonnier & Layens = synonym of P. insititia"
   },
   {
    "k": "powo",
    "url": "https://api.gbif.org/v1/species/207747717",
    "loc": "WCVP 2026-06 record (POWO backbone) via GBIF: Prunus italica Borkh. = synonym of P. insititia"
   },
   {
    "k": "wfo",
    "url": "https://wfoplantlist.org/taxon/wfo-0001007422-2026-06",
    "loc": "WFO Plant List 2026-06: Prunus insititia L., accepted"
   },
   {
    "k": "wfo",
    "url": "https://wfoplantlist.org/taxon/wfo-0001018364-2026-06",
    "loc": "WFO Plant List 2026-06: Prunus domestica subsp. insititia (L.) C.K.Schneid., also accepted"
   }
  ],
  "taxonomy": {
   "en": "POWO (WCVP) accepts P. insititia as a species and sinks P. domestica subsp. insititia into it. WFO accepts P. insititia L. but, inconsistently, also accepts P. domestica subsp. insititia (L.) C.K.Schneid. Many authors treat it as a subspecies of P. domestica (e.g. Halász et al. 2021), and DNA data do not separate damsons and bullaces from other domestic plums. The RHS files damsons and 'Mirabelle de Nancy' under P. insititia.",
   "fr": "POWO (WCVP) accepte P. insititia comme espèce et y rattache P. domestica subsp. insititia. WFO accepte P. insititia L. mais, de façon incohérente, accepte aussi P. domestica subsp. insititia (L.) C.K.Schneid. Beaucoup d'auteurs en font une sous-espèce de P. domestica (par ex. Halász et al. 2021), et les données ADN ne séparent pas damas et bullaces des autres pruniers domestiques. La RHS range les damas et 'Mirabelle de Nancy' sous P. insititia.",
   "src": [
    {
     "k": "powo",
     "url": "https://api.gbif.org/v1/species/207747682",
     "loc": "WCVP 2026-06 record (POWO backbone) via GBIF: Prunus insititia L., accepted"
    },
    {
     "k": "powo",
     "url": "https://api.gbif.org/v1/species/207747790",
     "loc": "WCVP 2026-06 record (POWO backbone) via GBIF: P. domestica subsp. insititia (L.) Bonnier & Layens = synonym of P. insititia"
    },
    {
     "k": "powo",
     "url": "https://api.gbif.org/v1/species/207747717",
     "loc": "WCVP 2026-06 record (POWO backbone) via GBIF: Prunus italica Borkh. = synonym of P. insititia"
    },
    {
     "k": "wfo",
     "url": "https://wfoplantlist.org/taxon/wfo-0001007422-2026-06",
     "loc": "WFO Plant List 2026-06: Prunus insititia L., accepted"
    },
    {
     "k": "wfo",
     "url": "https://wfoplantlist.org/taxon/wfo-0001018364-2026-06",
     "loc": "WFO Plant List 2026-06: Prunus domestica subsp. insititia (L.) C.K.Schneid., also accepted"
    },
    {
     "k": "prunus-halasz",
     "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC8249305/",
     "loc": "title and abstract"
    },
    {
     "k": "prunus-zheb",
     "url": "https://www.nature.com/articles/s41438-018-0090-6",
     "loc": "Results, germplasm structure"
    },
    {
     "k": "prunus-abd",
     "url": "https://www.frontiersin.org/journals/plant-science/articles/10.3389/fpls.2019.00896/full",
     "loc": "Discussion (insititia often proposed as a subspecies of P. domestica)"
    },
    {
     "k": "prunus-rhsdamson",
     "url": "https://www.rhs.org.uk/fruit/damsons/grow-your-own",
     "loc": "introduction"
    },
    {
     "k": "prunus-rhsnancy",
     "url": "https://www.rhs.org.uk/plants/66550/prunus-insititia-mirabelle-de-nancy-(c)/details",
     "loc": "plant name"
    }
   ]
  },
  "ploidy": {
   "en": "Hexaploid, 2n = 48 (2n = 6x).",
   "fr": "Hexaploïde, 2n = 48 (2n = 6x).",
   "src": [
    {
     "k": "prunus-abd",
     "url": "https://www.frontiersin.org/journals/plant-science/articles/10.3389/fpls.2019.00896/full",
     "loc": "Introduction, paragraph 1"
    },
    {
     "k": "prunus-halasz",
     "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC8249305/",
     "loc": "Abstract"
    }
   ]
  },
  "mating": {
   "system": "mixed",
   "flags": [
    "self-compatible",
    "partly-self-compatible",
    "gametophytic-si",
    "insect-pollinated"
   ],
   "en": "The widely sold damson cultivars are self-fertile. Wild Hungarian P. spinosa and P. insititia share overlapping pools of S-alleles.",
   "fr": "Les variétés de damas les plus vendues sont autofertiles. En Hongrie, P. spinosa et P. insititia sauvages partagent des pools d'allèles S qui se recouvrent.",
   "src": [
    {
     "k": "prunus-rhsdamson",
     "url": "https://www.rhs.org.uk/fruit/damsons/grow-your-own",
     "loc": "'Choosing' section"
    },
    {
     "k": "prunus-halasz",
     "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC8249305/",
     "loc": "Abstract"
    }
   ]
  },
  "interspecific": [
   {
    "with": "Prunus spinosa",
    "en": "Natural hybrids with blackthorn are frequent; they are pentaploid and look like blackthorn.",
    "fr": "Les hybrides naturels avec le prunellier sont fréquents ; ils sont pentaploïdes et ressemblent au prunellier.",
    "src": [
     {
      "k": "prunus-halasz",
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC8249305/",
      "loc": "Introduction, paragraph 2"
     }
    ]
   },
   {
    "with": "Prunus domestica",
    "en": "'Mirabelle de Nancy' cross-pollinates with other mirabelles, plums and damsons.",
    "fr": "'Mirabelle de Nancy' se pollinise croisée avec d'autres mirabelliers, pruniers et damas.",
    "src": [
     {
      "k": "prunus-rhsnancy",
      "url": "https://www.rhs.org.uk/plants/66550/prunus-insititia-mirabelle-de-nancy-(c)/details",
      "loc": "plant description"
     }
    ]
   }
  ]
 },
 {
  "id": "prunus-insititia-merryweather",
  "parent": "prunus-insititia",
  "rank": "cultivar",
  "name": "Prunus insititia 'Merryweather Damson'",
  "author": "",
  "names_src": [],
  "cultivar": {
   "self": "self-compatible",
   "s_genotype": "",
   "pollinizers": [],
   "incompatible_with": [],
   "group": "RHS AGM",
   "origin": {
    "en": "Relatively large blue-black damson.",
    "fr": "Damas assez gros, bleu-noir."
   },
   "src": [
    {
     "k": "prunus-rhsdamson",
     "url": "https://www.rhs.org.uk/fruit/damsons/grow-your-own",
     "loc": "Recommended Varieties: 'Merryweather Damson' AGM, Self-fertile"
    }
   ]
  }
 },
 {
  "id": "prunus-insititia-farleigh",
  "parent": "prunus-insititia",
  "rank": "cultivar",
  "name": "Prunus insititia 'Farleigh Damson'",
  "author": "",
  "names_src": [],
  "cultivar": {
   "self": "self-compatible",
   "s_genotype": "",
   "pollinizers": [],
   "incompatible_with": [],
   "group": "RHS AGM",
   "origin": {
    "en": "Small dark-blue damson, reliable crops, compact growth.",
    "fr": "Petit damas bleu foncé, récoltes régulières, port compact."
   },
   "src": [
    {
     "k": "prunus-rhsdamson",
     "url": "https://www.rhs.org.uk/fruit/damsons/grow-your-own",
     "loc": "Recommended Varieties: 'Farleigh Damson' AGM, Self-fertile"
    }
   ]
  }
 },
 {
  "id": "prunus-insititia-mirabelle-de-nancy",
  "parent": "prunus-insititia",
  "rank": "cultivar",
  "name": "Prunus insititia 'Mirabelle de Nancy'",
  "author": "",
  "names_src": [],
  "cultivar": {
   "self": "partly-self-compatible",
   "s_genotype": "",
   "pollinizers": [
    "other mirabelles, plums and damsons"
   ],
   "incompatible_with": [],
   "group": "mirabelle type",
   "origin": {
    "en": "RHS: partially self-fertile to self-fertile, slow to start cropping, blossom prone to spring cold. The Croqueurs list 'Mirabelle grosse de Nancy' as self-fertile.",
    "fr": "RHS : partiellement autofertile à autofertile, lente à se mettre à fruit, fleurs sensibles au froid printanier. Les Croqueurs classent 'Mirabelle grosse de Nancy' autofertile."
   },
   "src": [
    {
     "k": "prunus-rhsnancy",
     "url": "https://www.rhs.org.uk/plants/66550/prunus-insititia-mirabelle-de-nancy-(c)/details",
     "loc": "plant description"
    },
    {
     "k": "prunus-croq",
     "url": "https://croqueurs-national.fr/pollinisation/155-pollinisation-des-pruniers.html",
     "loc": "list 'Autofertiles'"
    }
   ]
  }
 },
 {
  "id": "prunus-salicina",
  "parent": "prunus",
  "rank": "species",
  "name": "Prunus salicina",
  "author": "Lindl.",
  "common": {
   "fr": [
    "prunier japonais"
   ],
   "en": [
    "Japanese plum"
   ]
  },
  "synonyms": [
   "Prunus triflora Roxb."
  ],
  "names_src": [
   {
    "k": "powo",
    "url": "https://api.gbif.org/v1/species/207744158",
    "loc": "WCVP 2026-06 record (POWO backbone) via GBIF: Prunus salicina Lindl., accepted; accepted varieties include var. salicina, var. latifolia Cardot, var. pubipes (Koehne) L.H.Bailey"
   },
   {
    "k": "powo",
    "url": "https://api.gbif.org/v1/species/207744170",
    "loc": "WCVP 2026-06 record (POWO backbone) via GBIF: Prunus triflora Roxb. = synonym of P. salicina var. salicina"
   },
   {
    "k": "wfo",
    "url": "https://wfoplantlist.org/taxon/wfo-0001017607-2026-06",
    "loc": "WFO Plant List 2026-06: Prunus salicina Lindl., accepted"
   }
  ],
  "taxonomy": {
   "en": "Accepted by POWO and WFO; both accept several botanical varieties (e.g. var. latifolia, var. mandshurica), but garden cultivars are simply P. salicina.",
   "fr": "Accepté par POWO et WFO ; tous deux acceptent plusieurs variétés botaniques (par ex. var. latifolia, var. mandshurica), mais les variétés fruitières sont simplement rangées sous P. salicina.",
   "src": [
    {
     "k": "powo",
     "url": "https://api.gbif.org/v1/species/207744158",
     "loc": "WCVP 2026-06 record (POWO backbone) via GBIF: Prunus salicina Lindl., accepted; accepted varieties include var. salicina, var. latifolia Cardot, var. pubipes (Koehne) L.H.Bailey"
    },
    {
     "k": "powo",
     "url": "https://api.gbif.org/v1/species/207744170",
     "loc": "WCVP 2026-06 record (POWO backbone) via GBIF: Prunus triflora Roxb. = synonym of P. salicina var. salicina"
    },
    {
     "k": "wfo",
     "url": "https://wfoplantlist.org/taxon/wfo-0001017607-2026-06",
     "loc": "WFO Plant List 2026-06: Prunus salicina Lindl., accepted"
    },
    {
     "k": "wfo",
     "url": "https://wfoplantlist.org/taxon/wfo-0000985994-2026-06",
     "loc": "WFO Plant List 2026-06: var. mandshurica, accepted"
    },
    {
     "k": "wfo",
     "url": "https://wfoplantlist.org/taxon/wfo-1200012017-2026-06",
     "loc": "WFO Plant List 2026-06: var. latifolia Cardot, accepted"
    }
   ]
  },
  "ploidy": {
   "en": "Diploid, 2n = 16.",
   "fr": "Diploïde, 2n = 16.",
   "src": [
    {
     "k": "prunus-abd",
     "url": "https://www.frontiersin.org/journals/plant-science/articles/10.3389/fpls.2019.00896/full",
     "loc": "Introduction, paragraph 1"
    }
   ]
  },
  "mating": {
   "system": "allogamous",
   "flags": [
    "self-incompatible",
    "gametophytic-si",
    "partly-self-compatible",
    "self-compatible",
    "hermaphrodite",
    "insect-pollinated"
   ],
   "en": "Most commercial Japanese plums are fully or partly self-unfruitful: self-unfruitful flowers set only about 1 to 2 percent or less, against about 30 percent for self-fruitful ones. By 2015, 42 S-RNase alleles and 26 incompatibility groups were known; some S-haplotypes (Se, Sb, St, Sg) are linked to self-compatibility, although one cultivar carrying Se ('Cidre') proved self-incompatible.",
   "fr": "La plupart des pruniers japonais commerciaux sont totalement ou partiellement autostériles : leurs fleurs nouent environ 1 à 2 % ou moins, contre environ 30 % pour les autofertiles. En 2015, on connaissait 42 allèles S-RNase et 26 groupes d'incompatibilité ; certains haplotypes S (Se, Sb, St, Sg) sont liés à l'autocompatibilité, même si une variété porteuse de Se ('Cidre') s'est révélée auto-incompatible.",
   "src": [
    {
     "k": "prunus-ucjp",
     "url": "https://ucanr.edu/sites/default/files/2011-12/132874.pdf",
     "loc": "pp. 49-50"
    },
    {
     "k": "prunus-abd",
     "url": "https://www.frontiersin.org/journals/plant-science/articles/10.3389/fpls.2019.00896/full",
     "loc": "Introduction (42 S-RNase alleles, 26 IG); Discussion (Se, Sb, St, Sg; 'Cidre')"
    }
   ]
  },
  "interspecific": [
   {
    "with": "Prunus domestica",
    "en": "Not cross-compatible with European plums in either direction; use another Japanese plum or an American plum as pollinizer.",
    "fr": "Non interfertile avec les pruniers européens, dans un sens comme dans l'autre ; prendre comme pollinisateur un autre prunier japonais ou un prunier américain.",
    "src": [
     {
      "k": "prunus-umaine",
      "url": "https://extension.umaine.edu/publications/2034e/",
      "loc": "section 'Pollination'"
     },
     {
      "k": "prunus-usu",
      "url": "https://extension.usu.edu/yardandgarden/research/plums-in-the-home-garden",
      "loc": "Japanese plums paragraph"
     }
    ]
   },
   {
    "with": "Prunus cerasifera",
    "en": "Cherry plum × Japanese plum hybrids exist and produce unreduced gametes; Eryomine (1991) proposed that such hybrids took part in the origin of P. domestica.",
    "fr": "Des hybrides myrobolan × prunier japonais existent et produisent des gamètes non réduits ; Eryomine (1991) a proposé que de tels hybrides aient participé à l'origine de P. domestica.",
    "src": [
     {
      "k": "prunus-abd",
      "url": "https://www.frontiersin.org/journals/plant-science/articles/10.3389/fpls.2019.00896/full",
      "loc": "Discussion, 'Genetic Relationships in Prunus Species'"
     }
    ]
   }
  ],
  "varieties": {
   "en": "To set a crop, the main cultivar and its pollenizer must bloom together, be cross-compatible and shed enough viable pollen. Some Japanese plums will not pollinate other Japanese plums, so planting at least three cultivars is advised; 'Santa Rosa' and 'Wickson' are used as universal pollenizers, and Maine found 'Vanier', 'Wickson' and 'Early Golden' good pollenizers. Orchards alternate rows (e.g. four and four), use one pollenizer tree per eight trees, or graft pollenizer limbs.",
   "fr": "Pour nouer, la variété principale et son pollinisateur doivent fleurir ensemble, être interfertiles et produire assez de pollen viable. Certains pruniers japonais ne pollinisent pas d'autres japonais : il est conseillé d'en planter au moins trois variétés ; 'Santa Rosa' et 'Wickson' servent de pollinisateurs universels, et le Maine a trouvé 'Vanier', 'Wickson' et 'Early Golden' bons pollinisateurs. En verger, on alterne les rangs (par ex. quatre et quatre), on met un arbre pollinisateur pour huit, ou on greffe des branches pollinisatrices.",
   "src": [
    {
     "k": "prunus-ucjp",
     "url": "https://ucanr.edu/sites/default/files/2011-12/132874.pdf",
     "loc": "pp. 50-52, 'Selecting Pollenizers', 'Pollenizer Arrangement', 'Pollenizer Limbs'"
    },
    {
     "k": "prunus-umaine",
     "url": "https://extension.umaine.edu/publications/2034e/",
     "loc": "section 'Pollination'"
    }
   ]
  },
  "isolation": {
   "en": "One to two hives per acre are usually enough (more with few pollenizers, poor weather, weak hives or little bloom overlap); minimum hive strength six frames of bees with a laying queen, eight preferred.",
   "fr": "Une à deux ruches par acre suffisent en général (davantage si les pollinisateurs sont rares, le temps mauvais, les ruches faibles ou les floraisons peu chevauchantes) ; force minimale d'une ruche : six cadres d'abeilles avec une reine qui pond, huit de préférence.",
   "src": [
    {
     "k": "prunus-ucjp",
     "url": "https://ucanr.edu/sites/default/files/2011-12/132874.pdf",
     "loc": "pp. 53-55, 'Bee placement in the orchard', 'Hive strength'"
    }
   ]
  },
  "true_to_type": {
   "value": "no",
   "en": "Mostly self-incompatible and highly heterozygous, so seedlings are new plums, not copies of the cultivar.",
   "fr": "Surtout auto-incompatible et très hétérozygote : les semis sont de nouveaux pruniers, pas des copies de la variété.",
   "src": [
    {
     "k": "prunus-habibi",
     "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC8976691/",
     "loc": "Introduction, paragraph 1"
    },
    {
     "k": "prunus-ucjp",
     "url": "https://ucanr.edu/sites/default/files/2011-12/132874.pdf",
     "loc": "p. 50"
    }
   ]
  },
  "propagation": {
   "en": "Grafted like other plums; pollenizer limbs are often grafted into young trees 1 to 2 years old, since grafts made on trees 3 to 4 years old establish poorly.",
   "fr": "Greffé comme les autres pruniers ; on greffe souvent des branches pollinisatrices sur les jeunes arbres de 1 à 2 ans, les greffes faites sur des arbres de 3 à 4 ans reprenant mal.",
   "src": [
    {
     "k": "prunus-ucjp",
     "url": "https://ucanr.edu/sites/default/files/2011-12/132874.pdf",
     "loc": "pp. 52-53, 'Pollenizer Limbs'"
    },
    {
     "k": "prunus-habibi",
     "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC8976691/",
     "loc": "Introduction, paragraph 1"
    }
   ]
  }
 },
 {
  "id": "prunus-salicina-santa-rosa",
  "parent": "prunus-salicina",
  "rank": "cultivar",
  "name": "Prunus salicina 'Santa Rosa'",
  "author": "",
  "names_src": [],
  "cultivar": {
   "self": "self-compatible",
   "s_genotype": "ScSe",
   "pollinizers": [],
   "incompatible_with": [],
   "group": "incompatibility group M in Abdallah et al. (XI in earlier numbering); used as a universal pollenizer",
   "origin": {
    "en": "Self-compatible in pollen-tube tests; in California considered self-fruitful around Fresno-Tulare, but in some northern counties it often needs cross-pollination.",
    "fr": "Autocompatible en tests de croissance des tubes polliniques ; en Californie, autofertile autour de Fresno-Tulare, mais dans certains comtés du nord elle a souvent besoin d'une pollinisation croisée."
   },
   "src": [
    {
     "k": "prunus-abd",
     "url": "https://www.frontiersin.org/journals/plant-science/articles/10.3389/fpls.2019.00896/full",
     "loc": "Table 2 and Table 3"
    },
    {
     "k": "prunus-ucjp",
     "url": "https://ucanr.edu/sites/default/files/2011-12/132874.pdf",
     "loc": "pp. 50-51"
    }
   ]
  }
 },
 {
  "id": "prunus-salicina-methley",
  "parent": "prunus-salicina",
  "rank": "cultivar",
  "name": "Prunus salicina 'Methley'",
  "author": "",
  "names_src": [],
  "cultivar": {
   "self": "self-compatible",
   "s_genotype": "SbSg",
   "pollinizers": [],
   "incompatible_with": [],
   "group": "incompatibility group L in Abdallah et al. (group 0 in earlier numbering)",
   "origin": {
    "en": "Described as self-compatible; its Sg haplotype is one of those linked to self-compatibility.",
    "fr": "Décrite comme autocompatible ; son haplotype Sg fait partie de ceux liés à l'autocompatibilité."
   },
   "src": [
    {
     "k": "prunus-abd",
     "url": "https://www.frontiersin.org/journals/plant-science/articles/10.3389/fpls.2019.00896/full",
     "loc": "Table 2; Discussion; reference 9 (Beppu et al. 2012b, 'self-compatible Japanese plum Methley')"
    }
   ]
  }
 },
 {
  "id": "prunus-salicina-fortune",
  "parent": "prunus-salicina",
  "rank": "cultivar",
  "name": "Prunus salicina 'Fortune'",
  "author": "",
  "names_src": [],
  "cultivar": {
   "self": "self-incompatible",
   "s_genotype": "SbSc",
   "pollinizers": [],
   "incompatible_with": [],
   "group": "incompatibility group P in Abdallah et al. (II in earlier numbering)",
   "origin": {
    "en": "Used as the self-incompatible control in pollen-tube tests.",
    "fr": "Utilisée comme témoin auto-incompatible dans les tests de tubes polliniques."
   },
   "src": [
    {
     "k": "prunus-abd",
     "url": "https://www.frontiersin.org/journals/plant-science/articles/10.3389/fpls.2019.00896/full",
     "loc": "Table 2 and Table 3"
    }
   ]
  }
 },
 {
  "id": "prunus-salicina-angeleno",
  "parent": "prunus-salicina",
  "rank": "cultivar",
  "name": "Prunus salicina 'Angeleno'",
  "author": "",
  "names_src": [],
  "cultivar": {
   "self": "unknown",
   "s_genotype": "ScSh",
   "pollinizers": [],
   "incompatible_with": [],
   "group": "incompatibility group I in Abdallah et al. (VII in earlier numbering)",
   "origin": {
    "en": "S-genotype published; its own self-fertility was not tested in the source.",
    "fr": "Génotype S publié ; son autofertilité n'a pas été testée dans la source."
   },
   "src": [
    {
     "k": "prunus-abd",
     "url": "https://www.frontiersin.org/journals/plant-science/articles/10.3389/fpls.2019.00896/full",
     "loc": "Table 2"
    }
   ]
  }
 },
 {
  "id": "prunus-cerasifera",
  "parent": "prunus",
  "rank": "species",
  "name": "Prunus cerasifera",
  "author": "Ehrh.",
  "common": {
   "fr": [
    "prunier myrobolan",
    "myrobolan"
   ],
   "en": [
    "cherry plum",
    "myrobalan"
   ]
  },
  "synonyms": [
   "Prunus divaricata Ledeb.",
   "Prunus cerasifera subsp. divaricata (Ledeb.) C.K.Schneid."
  ],
  "names_src": [
   {
    "k": "powo",
    "url": "https://api.gbif.org/v1/species/207749880",
    "loc": "WCVP 2026-06 record (POWO backbone) via GBIF: Prunus cerasifera Ehrh., accepted; subsp. divaricata, pontica, iranica etc. all synonyms"
   },
   {
    "k": "powo",
    "url": "https://api.gbif.org/v1/species/207749992",
    "loc": "WCVP 2026-06 record (POWO backbone) via GBIF: Prunus divaricata Ledeb. = synonym"
   },
   {
    "k": "wfo",
    "url": "https://wfoplantlist.org/taxon/wfo-0001007955-2026-06",
    "loc": "WFO Plant List 2026-06: Prunus cerasifera Ehrh., accepted, no accepted infraspecific taxa"
   },
   {
    "k": "prunus-halasz",
    "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC8249305/",
    "loc": "Introduction (common names cherry plum, myrobalan)"
   }
  ],
  "taxonomy": {
   "en": "Accepted by POWO and WFO, which treat the many described subspecies and varieties (divaricata, pontica, iranica...) as synonyms.",
   "fr": "Accepté par POWO et WFO, qui mettent en synonymie les nombreuses sous-espèces et variétés décrites (divaricata, pontica, iranica...).",
   "src": [
    {
     "k": "powo",
     "url": "https://api.gbif.org/v1/species/207749880",
     "loc": "WCVP 2026-06 record (POWO backbone) via GBIF: Prunus cerasifera Ehrh., accepted; subsp. divaricata, pontica, iranica etc. all synonyms"
    },
    {
     "k": "powo",
     "url": "https://api.gbif.org/v1/species/207749992",
     "loc": "WCVP 2026-06 record (POWO backbone) via GBIF: Prunus divaricata Ledeb. = synonym"
    },
    {
     "k": "wfo",
     "url": "https://wfoplantlist.org/taxon/wfo-0001007955-2026-06",
     "loc": "WFO Plant List 2026-06: Prunus cerasifera Ehrh., accepted, no accepted infraspecific taxa"
    }
   ]
  },
  "ploidy": {
   "en": "Diploid, 2n = 16.",
   "fr": "Diploïde, 2n = 16.",
   "src": [
    {
     "k": "prunus-abd",
     "url": "https://www.frontiersin.org/journals/plant-science/articles/10.3389/fpls.2019.00896/full",
     "loc": "Introduction, paragraph 1"
    }
   ]
  },
  "mating": {
   "system": "allogamous",
   "flags": [
    "gametophytic-si",
    "insect-pollinated"
   ],
   "en": "Cherry plum has the plum S-RNase/SFB system, and its sequenced S-RNases are treated as self-incompatibility alleles. We found no opened source that measured self fruit set, so 'probably self-incompatible' is the honest summary.",
   "fr": "Le myrobolan possède le système S-RNase/SFB des pruniers, et ses S-RNases séquencées sont traitées comme des allèles d'auto-incompatibilité. Nous n'avons trouvé aucune source consultée mesurant la nouaison en autofécondation : « probablement auto-incompatible » est le résumé honnête.",
   "src": [
    {
     "k": "prunus-halasz",
     "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC8249305/",
     "loc": "Introduction (S-RNase and SFB alleles sequenced in P. cerasifera)"
    },
    {
     "k": "prunus-fern",
     "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC8118244/",
     "loc": "Methods, 3D modelling (P. cerasifera S1-RNase among SI alleles)"
    },
    {
     "k": "prunus-abd",
     "url": "https://www.frontiersin.org/journals/plant-science/articles/10.3389/fpls.2019.00896/full",
     "loc": "Introduction, paragraph 3 ('Plums are mainly self-incompatible')"
    }
   ]
  },
  "interspecific": [
   {
    "with": "Prunus spinosa",
    "en": "Taken as a parent of the hexaploid European plum, together with tetraploid blackthorn.",
    "fr": "Considéré comme parent du prunier européen hexaploïde, avec le prunellier tétraploïde.",
    "src": [
     {
      "k": "prunus-zheb",
      "url": "https://www.nature.com/articles/s41438-018-0090-6",
      "loc": "Abstract; Introduction"
     }
    ]
   },
   {
    "with": "Prunus salicina",
    "en": "Hybridises with the Japanese plum; the hybrids form unreduced gametes (Eryomine 1991).",
    "fr": "S'hybride avec le prunier japonais ; les hybrides forment des gamètes non réduits (Eryomine 1991).",
    "src": [
     {
      "k": "prunus-abd",
      "url": "https://www.frontiersin.org/journals/plant-science/articles/10.3389/fpls.2019.00896/full",
      "loc": "Discussion, 'Genetic Relationships in Prunus Species'"
     }
    ]
   },
   {
    "with": "Prunus munsoniana",
    "en": "The rootstock 'Marianna' is a P. cerasifera × P. munsoniana hybrid.",
    "fr": "Le porte-greffe 'Marianna' est un hybride P. cerasifera × P. munsoniana.",
    "src": [
     {
      "k": "prunus-rubio",
      "url": "https://om.ciheam.org/ressources/om/pdf/a119/00007379.pdf",
      "loc": "section 4, 'Vigorous plums'"
     }
    ]
   },
   {
    "with": "Prunus domestica",
    "en": "P. domestica × P. cerasifera hybrids carry the same S-alleles as their parent species.",
    "fr": "Les hybrides P. domestica × P. cerasifera portent les mêmes allèles S que leurs espèces parentes.",
    "src": [
     {
      "k": "prunus-abd",
      "url": "https://www.frontiersin.org/journals/plant-science/articles/10.3389/fpls.2019.00896/full",
      "loc": "Discussion (Hegedűs & Halász 2006)"
     }
    ]
   }
  ],
  "propagation": {
   "en": "Myrobalan is a seed-propagated, highly vigorous plum rootstock suited to many soil types, compatible with apricot, plum and prune; on myrobalan, trees start bearing after 4 to 5 years. Myrobalan clones generally graft poorly with almond.",
   "fr": "Le myrobolan est un porte-greffe de prunier très vigoureux, multiplié par semis, adapté à beaucoup de sols, compatible avec abricotier, prunier et prunier à pruneaux ; sur myrobolan, les arbres commencent à produire après 4 à 5 ans. Les clones de myrobolan sont en général peu compatibles avec l'amandier.",
   "src": [
    {
     "k": "prunus-fps",
     "url": "https://fps.ucdavis.edu/treedetails.cfm?v=1790",
     "loc": "Myrobalan rootstock record: Propagation Method 'Seed', Description"
    },
    {
     "k": "prunus-rubio",
     "url": "https://om.ciheam.org/ressources/om/pdf/a119/00007379.pdf",
     "loc": "section 4, 'Vigorous plums'"
    }
   ]
  }
 },
 {
  "id": "prunus-spinosa",
  "parent": "prunus",
  "rank": "species",
  "name": "Prunus spinosa",
  "author": "L.",
  "common": {
   "fr": [
    "prunellier"
   ],
   "en": [
    "blackthorn",
    "sloe"
   ]
  },
  "synonyms": [],
  "names_src": [
   {
    "k": "powo",
    "url": "https://api.gbif.org/v1/species/207752643",
    "loc": "WCVP 2026-06 record (POWO backbone) via GBIF: Prunus spinosa L., accepted"
   },
   {
    "k": "wfo",
    "url": "https://wfoplantlist.org/taxon/wfo-0001007437-2026-06",
    "loc": "WFO Plant List 2026-06: Prunus spinosa L., accepted"
   },
   {
    "k": "prunus-halasz",
    "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC8249305/",
    "loc": "Introduction (blackthorn or sloe)"
   }
  ],
  "ploidy": {
   "en": "Tetraploid, 2n = 4x = 32.",
   "fr": "Tétraploïde, 2n = 4x = 32.",
   "src": [
    {
     "k": "prunus-halasz",
     "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC8249305/",
     "loc": "Introduction"
    },
    {
     "k": "prunus-abd",
     "url": "https://www.frontiersin.org/journals/plant-science/articles/10.3389/fpls.2019.00896/full",
     "loc": "Introduction, paragraph 1"
    }
   ]
  },
  "taxonomy": {
   "en": "Its own origin is unsettled: it may be a hybrid of cherry plum and an unknown Eurasian plum, or come from polyploidisation of a diploid ancestor of P. ramburii.",
   "fr": "Son origine est discutée : ce pourrait être un hybride du myrobolan et d'un prunier eurasiatique inconnu, ou le produit de la polyploïdisation d'un ancêtre diploïde de P. ramburii.",
   "src": [
    {
     "k": "prunus-zheb",
     "url": "https://www.nature.com/articles/s41438-018-0090-6",
     "loc": "Abstract"
    },
    {
     "k": "prunus-halasz",
     "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC8249305/",
     "loc": "Introduction, paragraph 1"
    }
   ]
  },
  "mating": {
   "system": "mixed",
   "flags": [
    "gametophytic-si",
    "self-compatible",
    "insect-pollinated"
   ],
   "en": "Wild blackthorn carries many S-RNase alleles; the Hungarian cultivar 'Zempléni' is self-compatible thanks to at least one non-functional S-RNase allele (SJ).",
   "fr": "Le prunellier sauvage porte de nombreux allèles S-RNase ; la variété hongroise 'Zempléni' est autocompatible grâce à au moins un allèle S-RNase non fonctionnel (SJ).",
   "src": [
    {
     "k": "prunus-halasz",
     "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC8249305/",
     "loc": "Abstract; Table 1"
    }
   ]
  },
  "interspecific": [
   {
    "with": "Prunus domestica, Prunus insititia",
    "en": "Hybridises readily with hexaploid plums; the hybrids are pentaploid (2n = 5x = 40).",
    "fr": "S'hybride facilement avec les pruniers hexaploïdes ; les hybrides sont pentaploïdes (2n = 5x = 40).",
    "src": [
     {
      "k": "prunus-halasz",
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC8249305/",
      "loc": "Introduction, paragraph 2"
     }
    ]
   }
  ]
 },
 {
  "id": "prunus-spinosa-zempleni",
  "parent": "prunus-spinosa",
  "rank": "cultivar",
  "name": "Prunus spinosa 'Zempléni'",
  "author": "",
  "names_src": [],
  "cultivar": {
   "self": "self-compatible",
   "s_genotype": "S12 SC SJ SQ",
   "pollinizers": [],
   "incompatible_with": [],
   "group": "recognised Hungarian cultivar",
   "origin": {
    "en": "Selected from wild Hungarian blackthorn; self-compatible, carrying the non-functional allele SJ.",
    "fr": "Sélectionnée dans le prunellier sauvage hongrois ; autocompatible, porteuse de l'allèle non fonctionnel SJ."
   },
   "src": [
    {
     "k": "prunus-halasz",
     "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC8249305/",
     "loc": "Abstract; Table 1 (accession ZE)"
    }
   ]
  }
 },
 {
  "id": "rubus",
  "parent": "rosaceae",
  "rank": "genus",
  "name": "Rubus",
  "author": "L.",
  "common": {
   "fr": [
    "ronce",
    "framboisier, mûrier (cultivés)"
   ],
   "en": [
    "bramble",
    "raspberry",
    "blackberry"
   ],
   "de": [
    "Brombeere",
    "Himbeere"
   ]
  },
  "names_src": [
   {
    "k": "powo",
    "url": "https://www.checklistbank.org/dataset/2000/taxon/urn:lsid:ipni.org:names:30000199-2",
    "loc": "accepted genus (POWO/WCVP export 2026-10-07, ChecklistBank dataset 2000)"
   },
   {
    "k": "wfo",
    "url": "https://wfoplantlist.org/taxon/wfo-4000033581",
    "loc": "accepted genus (WFO Plant List 2026-06)"
   }
  ],
  "taxonomy": {
   "en": "Rubus is a large genus (about 1,700 species counted on the Angiosperm Phylogeny Website, apomicts included); its fruit is an aggregate of small drupelets. The conserved type of the genus name is Rubus fruticosus L.",
   "fr": "Rubus est un grand genre (environ 1 700 espèces selon l'Angiosperm Phylogeny Website, apomictes compris) ; son fruit est un agrégat de petites drupéoles. Le type conservé du nom de genre est Rubus fruticosus L.",
   "src": [
    {
     "k": "berries-apweb-rosales",
     "url": "http://www.mobot.org/MOBOT/research/APweb/orders/rosalesweb.htm",
     "loc": "Rosaceae, 2B. Rubeae - Rubus L.: '1/1,732, inc. apomicts'"
    },
    {
     "k": "berries-jarvis-2007-rubus-fruticosus",
     "url": "https://zenodo.org/records/4367077",
     "loc": "Rubus fruticosus L.: generitype of Rubus L., nom. cons."
    }
   ]
  },
  "mating": {
   "system": "mixed",
   "flags": [
    "hermaphrodite",
    "insect-pollinated",
    "self-compatible",
    "pseudogamous",
    "apomictic"
   ],
   "en": "The genus mixes sexual species (red raspberry is self-fertile) and many polyploid blackberries that make seed by pseudogamous apomixis. Bees are needed for full-sized fruit in both groups.",
   "fr": "Le genre réunit des espèces sexuées (le framboisier est autofertile) et de nombreuses ronces polyploïdes qui produisent leurs graines par apomixie pseudogame. Dans les deux cas, les abeilles sont nécessaires pour des fruits bien formés.",
   "src": [
    {
     "k": "berries-bsbi-fermanagh-rubus",
     "url": "https://bsbi.org/in-your-area/local-botany/co-fermanagh/fermanagh-species-accounts/rubus-fruticosus-l-agg",
     "loc": "apomixis and pseudogamy"
    },
    {
     "k": "berries-rhs-raspberries",
     "url": "https://www.rhs.org.uk/fruit/raspberries/grow-your-own",
     "loc": "'Raspberries are self-fertile'"
    },
    {
     "k": "berries-usda-ars-raspberries",
     "url": "https://www.ars.usda.gov/pacific-west-area/logan-ut/pollinating-insect-biology-management-systematics-research/docs/raspberries/",
     "loc": "fully sized fruits only after bee pollination"
    }
   ]
  },
  "interspecific": [
   {
    "with": "Rubus idaeus × blackberries",
    "en": "Raspberry and blackberry cross; loganberry, tayberry and boysenberry are such hybrids.",
    "fr": "Framboisier et ronces (mûres) se croisent ; la loganberry, la tayberry et la boysenberry en sont issues.",
    "src": [
     {
      "k": "berries-rhs-blackberries-hybrids",
      "url": "https://www.rhs.org.uk/fruit/blackberries-and-hybrid-berries/grow-your-own",
      "loc": "Choosing what to grow: Tayberry, Loganberry, Boysenberry"
     },
     {
      "k": "berries-mcgregor-1976",
      "url": "https://www.ars.usda.gov/ARSUserFiles/20220500/OnlinePollinationHandbook.pdf",
      "loc": "Blackberry, Plant: loganberry origin"
     }
    ],
    "with_fr": "Rubus idaeus × mûres"
   }
  ]
 },
 {
  "id": "rubus-fruticosus-agg",
  "parent": "rubus",
  "rank": "aggregate",
  "name": "Rubus fruticosus agg.",
  "author": "",
  "common": {
   "fr": [
    "ronce commune",
    "mûrier sauvage"
   ],
   "en": [
    "bramble",
    "blackberry"
   ],
   "de": [
    "Brombeere"
   ]
  },
  "synonyms": [
   "Rubus fruticosus L. (in the narrow sense = R. plicatus Weihe & Nees)",
   "Rubus plicatus Weihe & Nees (synonym of R. fruticosus L. in POWO and WFO)"
  ],
  "names_src": [
   {
    "k": "powo",
    "url": "https://www.checklistbank.org/dataset/2000/taxon/urn:lsid:ipni.org:names:736933-1",
    "loc": "Rubus fruticosus L. accepted as a species (POWO/WCVP export 2026-10-07, ChecklistBank dataset 2000)"
   },
   {
    "k": "powo",
    "url": "https://www.checklistbank.org/dataset/2000/taxon/urn:lsid:ipni.org:names:739210-1",
    "loc": "Rubus plicatus Weihe & Nees: synonym of Rubus fruticosus L. (POWO/WCVP export 2026-10-07, ChecklistBank dataset 2000)"
   },
   {
    "k": "wfo",
    "url": "https://wfoplantlist.org/taxon/wfo-0000984598",
    "loc": "Rubus fruticosus L. accepted, 84 synonyms incl. R. plicatus Weihe & Nees (WFO Plant List 2026-06)"
   }
  ],
  "taxonomy": {
   "en": "POWO and WFO both accept 'Rubus fruticosus L.' as one ordinary species and list R. plicatus Weihe & Nees as its synonym, because the Linnaean type (an inflorescence, LINN 653.9) matches R. plicatus; that specimen is also the conserved type of the genus. Gardeners and British/Irish botanists instead use 'R. fruticosus agg.' for the whole blackberry complex of hundreds of microspecies, and some authors keep the name R. plicatus for the single microspecies; Wikipedia calls the aggregate name a nomen ambiguum. We found no proposal formally rejecting the name.",
   "fr": "POWO et WFO acceptent tous deux « Rubus fruticosus L. » comme une espèce ordinaire, avec R. plicatus Weihe & Nees en synonyme, car le type linnéen (une inflorescence, LINN 653.9) correspond à R. plicatus ; ce spécimen est aussi le type conservé du genre. Les jardiniers et les botanistes britanniques et irlandais emploient plutôt « R. fruticosus agg. » pour tout le complexe des ronces, qui compte des centaines de microespèces, et certains auteurs gardent le nom R. plicatus pour la seule microespèce ; Wikipédia qualifie le nom d'agrégat de nomen ambiguum. Nous n'avons trouvé aucune proposition de rejet formel du nom.",
   "src": [
    {
     "k": "powo",
     "url": "https://www.checklistbank.org/dataset/2000/taxon/urn:lsid:ipni.org:names:736933-1",
     "loc": "accepted name (POWO/WCVP export 2026-10-07, ChecklistBank dataset 2000)"
    },
    {
     "k": "wfo",
     "url": "https://wfoplantlist.org/taxon/wfo-0000984598",
     "loc": "accepted name (WFO Plant List 2026-06)"
    },
    {
     "k": "berries-jarvis-2007-rubus-fruticosus",
     "url": "https://zenodo.org/records/4367077",
     "loc": "type: Herb. Linn. No. 653.9, inflorescence only; identifiable with R. plicatus; conserved type of Rubus"
    },
    {
     "k": "berries-bsbi-fermanagh-rubus",
     "url": "https://bsbi.org/in-your-area/local-botany/co-fermanagh/fermanagh-species-accounts/rubus-fruticosus-l-agg",
     "loc": "'The name R. fruticosus agg. covers all the multiple segregates'"
    },
    {
     "k": "berries-rhs-loch-ness",
     "url": "https://www.rhs.org.uk/plants/75680/rubus-fruticosus-agg-loch-ness-b/details",
     "loc": "name used: Rubus fruticosus agg. 'Loch Ness'"
    },
    {
     "k": "berries-wikipedia-rubus-fruticosus",
     "url": "https://en.wikipedia.org/wiki/Rubus_fruticosus",
     "loc": "definitions; 'nomen ambiguum'; type matches R. plicatus"
    }
   ]
  },
  "ploidy": {
   "en": "Polyploid: about 91% of British and Irish microspecies are tetraploid (2n = 28), the rest range from triploid to octoploid (2n = 21 to 56).",
   "fr": "Polyploïde : environ 91 % des microespèces de Grande-Bretagne et d'Irlande sont tétraploïdes (2n = 28), les autres vont du triploïde à l'octoploïde (2n = 21 à 56).",
   "src": [
    {
     "k": "berries-bsbi-fermanagh-rubus",
     "url": "https://bsbi.org/in-your-area/local-botany/co-fermanagh/fermanagh-species-accounts/rubus-fruticosus-l-agg",
     "loc": "polyploidy paragraph"
    }
   ]
  },
  "mating": {
   "system": "apomictic",
   "flags": [
    "apomictic",
    "pseudogamous",
    "hermaphrodite",
    "insect-pollinated"
   ],
   "en": "Most brambles are facultative pseudogamous apomicts: the flower must be pollinated, but the embryo develops from the mother plant's tissue without fertilization, so seedlings are clones of the mother. Some pollen is viable and occasional sexual reproduction happens; in Europe (about 750 species) only four diploid and two tetraploid taxa are fully sexual.",
   "fr": "La plupart des ronces sont des apomictes pseudogames facultatives : la fleur doit être pollinisée, mais l'embryon se forme à partir des tissus de la plante mère, sans fécondation, et les semis sont des clones de la mère. Une partie du pollen est viable et une reproduction sexuée occasionnelle existe ; en Europe (environ 750 espèces), seuls quatre taxons diploïdes et deux tétraploïdes sont pleinement sexués.",
   "src": [
    {
     "k": "berries-bsbi-fermanagh-rubus",
     "url": "https://bsbi.org/in-your-area/local-botany/co-fermanagh/fermanagh-species-accounts/rubus-fruticosus-l-agg",
     "loc": "pseudogamy, agamospermy facultative"
    },
    {
     "k": "berries-sarhanova-2017",
     "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC5737493/",
     "loc": "Introduction: ~750 species in Europe; sexuals: four diploid and two tetraploid; facultative apomicts"
    }
   ]
  },
  "interspecific": [
   {
    "with": "sexual Rubus species (series Glandulosi) and other apomicts",
    "en": "New apomictic microspecies keep arising from crosses in which a sexual plant is the mother and an apomict gives the pollen.",
    "fr": "De nouvelles microespèces apomictiques continuent d'apparaître par croisement entre une plante sexuée (mère) et une apomicte (donneuse de pollen).",
    "src": [
     {
      "k": "berries-sarhanova-2017",
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC5737493/",
      "loc": "Abstract; Discussion 'Residual sexuality drives bramble evolution'"
     }
    ],
    "with_fr": "Rubus sexués (série Glandulosi) et autres apomictiques"
   }
  ],
  "true_to_type": {
   "value": "mostly",
   "en": "Seed of apomictic brambles gives plants genetically identical to the mother, except in the occasional sexual seed.",
   "fr": "Les graines des ronces apomictiques donnent des plantes génétiquement identiques à la mère, sauf rares graines issues de reproduction sexuée.",
   "src": [
    {
     "k": "berries-bsbi-fermanagh-rubus",
     "url": "https://bsbi.org/in-your-area/local-botany/co-fermanagh/fermanagh-species-accounts/rubus-fruticosus-l-agg",
     "loc": "'progeny are genetically identical to the female parent'"
    }
   ]
  },
  "synonyms_fr": [
   "Rubus fruticosus L. (au sens strict = R. plicatus Weihe & Nees)",
   "Rubus plicatus Weihe & Nees (synonyme de R. fruticosus L. dans POWO et WFO)"
  ]
 },
 {
  "id": "rubus-fruticosus-agg-loch-ness",
  "parent": "rubus-fruticosus-agg",
  "rank": "cultivar",
  "name": "Rubus fruticosus agg. 'Loch Ness'",
  "author": "",
  "common": {
   "en": [
    "blackberry 'Loch Ness'"
   ]
  },
  "names_src": [
   {
    "k": "berries-rhs-loch-ness",
    "url": "https://www.rhs.org.uk/plants/75680/rubus-fruticosus-agg-loch-ness-b/details",
    "loc": "RHS plant name"
   }
  ],
  "cultivar": {
   "self": "self-compatible",
   "pollinizers": [],
   "incompatible_with": [],
   "group": "semierect blackberry",
   "origin": {
    "en": "Not given in the sources we opened.",
    "fr": "Non indiquée dans les sources consultées."
   },
   "src": [
    {
     "k": "berries-osu-em9180",
     "url": "https://extension.oregonstate.edu/catalog/em-9180-growing-berries-oregon-coast-raspberries-blackberries",
     "loc": "Raspberry and blackberry cultivars for the coast; Table 3; Pollination: 'All blackberry cultivars are self-fruitful'"
    }
   ]
  },
  "mating": {
   "system": "autogamous",
   "flags": [
    "self-compatible",
    "insect-pollinated"
   ],
   "en": "Oregon State lists it among semierect blackberries and says all blackberry cultivars are self-fruitful, so one cultivar is enough; this is a group statement, not a test of this cultivar.",
   "fr": "L'Oregon State University le classe parmi les mûriers semi-érigés et indique que tous les cultivars de mûrier sont autofertiles, un seul suffit ; c'est une affirmation générale, pas un essai sur ce cultivar.",
   "src": [
    {
     "k": "berries-osu-em9180",
     "url": "https://extension.oregonstate.edu/catalog/em-9180-growing-berries-oregon-coast-raspberries-blackberries",
     "loc": "Table 3 and Pollination section"
    }
   ]
  }
 },
 {
  "id": "rubus-triple-crown",
  "parent": "rubus",
  "rank": "cultivar",
  "name": "Rubus 'Triple Crown'",
  "author": "",
  "common": {
   "en": [
    "blackberry 'Triple Crown'"
   ]
  },
  "names_src": [
   {
    "k": "berries-osu-em9180",
    "url": "https://extension.oregonstate.edu/catalog/em-9180-growing-berries-oregon-coast-raspberries-blackberries",
    "loc": "Table 3, semierect blackberries"
   }
  ],
  "cultivar": {
   "self": "self-compatible",
   "pollinizers": [],
   "incompatible_with": [],
   "group": "semierect blackberry",
   "origin": {
    "en": "Not given in the sources we opened.",
    "fr": "Non indiquée dans les sources consultées."
   },
   "src": [
    {
     "k": "berries-osu-em9180",
     "url": "https://extension.oregonstate.edu/catalog/em-9180-growing-berries-oregon-coast-raspberries-blackberries",
     "loc": "Table 3; 'All blackberry cultivars are self-fruitful'"
    }
   ]
  },
  "mating": {
   "system": "autogamous",
   "flags": [
    "self-compatible",
    "insect-pollinated"
   ],
   "en": "Covered by Oregon State's statement that every blackberry cultivar is self-fruitful.",
   "fr": "Concerné par l'affirmation de l'Oregon State University selon laquelle tous les cultivars de mûrier sont autofertiles.",
   "src": [
    {
     "k": "berries-osu-em9180",
     "url": "https://extension.oregonstate.edu/catalog/em-9180-growing-berries-oregon-coast-raspberries-blackberries",
     "loc": "Pollination"
    }
   ]
  }
 },
 {
  "id": "rubus-flordagrand",
  "parent": "rubus",
  "rank": "cultivar",
  "name": "Rubus 'Flordagrand'",
  "author": "",
  "common": {
   "en": [
    "blackberry 'Flordagrand'"
   ]
  },
  "names_src": [
   {
    "k": "berries-mcgregor-1976",
    "url": "https://www.ars.usda.gov/ARSUserFiles/20220500/OnlinePollinationHandbook.pdf",
    "loc": "Blackberry, Pollination Requirements"
   }
  ],
  "cultivar": {
   "self": "self-incompatible",
   "pollinizers": [
    "rubus-oklawaha",
    "wild trailing blackberries"
   ],
   "incompatible_with": [],
   "group": "trailing blackberry (Florida)",
   "origin": {
    "en": "Florida cultivar, cited by Shoemaker (1961) and Shoemaker & Westgate (1966).",
    "fr": "Cultivar de Floride, cité par Shoemaker (1961) et Shoemaker & Westgate (1966)."
   },
   "src": [
    {
     "k": "berries-mcgregor-1976",
     "url": "https://www.ars.usda.gov/ARSUserFiles/20220500/OnlinePollinationHandbook.pdf",
     "loc": "Blackberry, Pollination Requirements"
    }
   ]
  },
  "mating": {
   "system": "allogamous",
   "flags": [
    "self-incompatible",
    "insect-pollinated"
   ],
   "en": "A counter-example to 'all blackberries are self-fruitful': it sets fruit only with pollen of another blackberry, brought by bees, and alternate rows with 'Oklawaha' were recommended.",
   "fr": "Un contre-exemple à « tous les mûriers sont autofertiles » : il ne fructifie qu'avec le pollen d'un autre mûrier apporté par les abeilles, et l'on conseillait des rangs alternés avec 'Oklawaha'.",
   "src": [
    {
     "k": "berries-mcgregor-1976",
     "url": "https://www.ars.usda.gov/ARSUserFiles/20220500/OnlinePollinationHandbook.pdf",
     "loc": "Blackberry, Pollination Requirements"
    }
   ]
  }
 },
 {
  "id": "rubus-oklawaha",
  "parent": "rubus",
  "rank": "cultivar",
  "name": "Rubus 'Oklawaha'",
  "author": "",
  "common": {
   "en": [
    "blackberry 'Oklawaha'"
   ]
  },
  "names_src": [
   {
    "k": "berries-mcgregor-1976",
    "url": "https://www.ars.usda.gov/ARSUserFiles/20220500/OnlinePollinationHandbook.pdf",
    "loc": "Blackberry, Pollination Requirements"
   }
  ],
  "cultivar": {
   "self": "self-incompatible",
   "pollinizers": [
    "rubus-flordagrand"
   ],
   "incompatible_with": [],
   "group": "trailing blackberry (Florida)",
   "origin": {
    "en": "Bred to be a pollen source for 'Flordagrand' while also giving a crop.",
    "fr": "Sélectionné comme source de pollen pour 'Flordagrand', tout en donnant une récolte."
   },
   "src": [
    {
     "k": "berries-mcgregor-1976",
     "url": "https://www.ars.usda.gov/ARSUserFiles/20220500/OnlinePollinationHandbook.pdf",
     "loc": "Blackberry, Pollination Requirements (Shoemaker & Westgate 1966)"
    }
   ]
  },
  "mating": {
   "system": "allogamous",
   "flags": [
    "self-incompatible",
    "insect-pollinated"
   ],
   "en": "Sets no fruit with its own pollen but crops well when cross-pollinated.",
   "fr": "Ne donne aucun fruit avec son propre pollen, mais produit bien en pollinisation croisée.",
   "src": [
    {
     "k": "berries-mcgregor-1976",
     "url": "https://www.ars.usda.gov/ARSUserFiles/20220500/OnlinePollinationHandbook.pdf",
     "loc": "Blackberry, Pollination Requirements"
    }
   ]
  }
 },
 {
  "id": "rubus-idaeus",
  "parent": "rubus",
  "rank": "species",
  "name": "Rubus idaeus",
  "author": "L.",
  "common": {
   "fr": [
    "framboisier"
   ],
   "en": [
    "raspberry",
    "red raspberry"
   ],
   "de": [
    "Himbeere"
   ]
  },
  "synonyms": [
   "Batidaea idaea (L.) Nieuwl.",
   "Rubus fragrans Salisb.",
   "Rubus idaeus var. strigosus (Michx.) Maxim. (= subsp. strigosus)"
  ],
  "names_src": [
   {
    "k": "powo",
    "url": "https://www.checklistbank.org/dataset/2000/taxon/urn:lsid:ipni.org:names:298089-2",
    "loc": "accepted name (POWO/WCVP export 2026-10-07, ChecklistBank dataset 2000)"
   },
   {
    "k": "wfo",
    "url": "https://wfoplantlist.org/taxon/wfo-0001000827",
    "loc": "accepted name (WFO Plant List 2026-06)"
   }
  ],
  "taxonomy": {
   "en": "POWO and WFO agree: one species with two accepted subspecies, subsp. idaeus and subsp. strigosus (Michx.) Focke; WFO also lists a forma, f. sterilis.",
   "fr": "POWO et WFO concordent : une espèce avec deux sous-espèces acceptées, subsp. idaeus et subsp. strigosus (Michx.) Focke ; WFO cite en plus une forme, f. sterilis.",
   "src": [
    {
     "k": "powo",
     "url": "https://www.checklistbank.org/dataset/2000/taxon/urn:lsid:ipni.org:names:298089-2",
     "loc": "children: subsp. idaeus, subsp. strigosus (POWO/WCVP export 2026-10-07, ChecklistBank dataset 2000)"
    },
    {
     "k": "wfo",
     "url": "https://wfoplantlist.org/taxon/wfo-0001000827",
     "loc": "parts: subsp. idaeus, f. sterilis, subsp. strigosus (WFO Plant List 2026-06)"
    }
   ]
  },
  "mating": {
   "system": "mixed",
   "flags": [
    "self-compatible",
    "hermaphrodite",
    "insect-pollinated"
   ],
   "en": "Raspberries are self-fertile, so one cultivar is enough, but the flower cannot pollinate itself fully and bees make the difference between crumbly and full fruit. Cultivars differ: in a German SSR study the share of cross-fertilized seedlings ranged from 5% to 100%.",
   "fr": "Le framboisier est autofertile, un seul cultivar suffit, mais la fleur ne s'autopollinise pas complètement : les abeilles font la différence entre des fruits qui s'émiettent et des fruits complets. Les cultivars diffèrent : dans une étude allemande par marqueurs SSR, la part de semis issus de fécondation croisée allait de 5 % à 100 %.",
   "src": [
    {
     "k": "berries-rhs-raspberries",
     "url": "https://www.rhs.org.uk/fruit/raspberries/grow-your-own",
     "loc": "Choosing what to grow: 'Raspberries are self-fertile'"
    },
    {
     "k": "berries-osu-em9180",
     "url": "https://extension.oregonstate.edu/catalog/em-9180-growing-berries-oregon-coast-raspberries-blackberries",
     "loc": "Pollination"
    },
    {
     "k": "berries-mcgregor-1976",
     "url": "https://www.ars.usda.gov/ARSUserFiles/20220500/OnlinePollinationHandbook.pdf",
     "loc": "Raspberry, Pollination Requirements"
    },
    {
     "k": "berries-pinczinger-2021",
     "url": "https://api.openalex.org/works/doi:10.1016/j.scienta.2021.110384",
     "loc": "abstract"
    }
   ]
  },
  "interspecific": [
   {
    "with": "blackberries (Rubus subg. Rubus, e.g. R. ursinus and cultivars)",
    "en": "Crossed with blackberries to give loganberry, tayberry and boysenberry.",
    "fr": "Croisé avec des mûriers pour obtenir la loganberry, la tayberry et la boysenberry.",
    "src": [
     {
      "k": "berries-rhs-blackberries-hybrids",
      "url": "https://www.rhs.org.uk/fruit/blackberries-and-hybrid-berries/grow-your-own",
      "loc": "Choosing what to grow"
     },
     {
      "k": "berries-tayberry-patent",
      "url": "https://patents.google.com/patent/USPP4424P/en",
      "loc": "parents"
     }
    ],
    "with_fr": "mûres (Rubus subg. Rubus, p. ex. R. ursinus et cultivars)"
   }
  ],
  "varieties": {
   "en": "No pollinizer groups are needed, but some cultivars set much better with another cultivar's pollen: 'Rumla' gave only cross-fertilized seedlings, while 'Lucana' and 'Preußen' gave none.",
   "fr": "Pas de groupes de pollinisation, mais certains cultivars nouent bien mieux avec le pollen d'un autre cultivar : 'Rumla' n'a donné que des semis issus de croisement, alors que 'Lucana' et 'Preußen' n'en ont donné aucun.",
   "src": [
    {
     "k": "berries-pinczinger-2021",
     "url": "https://api.openalex.org/works/doi:10.1016/j.scienta.2021.110384",
     "loc": "abstract"
    }
   ]
  },
  "isolation": {
   "en": "For fruit, Oregon State says native bees are often enough in gardens and suggests 2 to 4 hives per acre in larger plantings. We found no sourced isolation distance for raspberry seed saving.",
   "fr": "Pour les fruits, l'Oregon State University juge les abeilles sauvages souvent suffisantes au jardin et conseille 2 à 4 ruches par acre (2 à 4 hives per acre) pour les grandes plantations. Nous n'avons trouvé aucune distance d'isolement sourcée pour la production de semences de framboisier.",
   "src": [
    {
     "k": "berries-osu-em9180",
     "url": "https://extension.oregonstate.edu/catalog/em-9180-growing-berries-oregon-coast-raspberries-blackberries",
     "loc": "Pollination"
    }
   ]
  },
  "true_to_type": {
   "value": "no",
   "en": "Raspberry seedlings are all different from the parent cultivar, so seed is used for breeding, not for copying a variety.",
   "fr": "Les semis de framboisier diffèrent tous du cultivar parent : la graine sert à créer des variétés, pas à les reproduire.",
   "src": [
    {
     "k": "berries-askext-raspberry-seed",
     "url": "https://ask.extension.org/kb/faq.php?id=492628",
     "loc": "expert answer (M. Longstroth, 2018)"
    }
   ]
  },
  "propagation": {
   "en": "Propagated by suckers dug in winter, but only from recently bought, certified virus-free plants, because older plantings carry viruses.",
   "fr": "Multiplié par drageons prélevés en hiver, mais seulement sur des plants récents certifiés sans virus, car les vieilles plantations sont souvent virosées.",
   "src": [
    {
     "k": "berries-rhs-raspberries",
     "url": "https://www.rhs.org.uk/fruit/raspberries/grow-your-own",
     "loc": "Propagating"
    },
    {
     "k": "berries-osu-em9180",
     "url": "https://extension.oregonstate.edu/catalog/em-9180-growing-berries-oregon-coast-raspberries-blackberries",
     "loc": "Planting systems: certified plants, do not move suckers from old plantings"
    }
   ]
  }
 },
 {
  "id": "rubus-idaeus-subsp-idaeus",
  "parent": "rubus-idaeus",
  "rank": "subspecies",
  "name": "Rubus idaeus subsp. idaeus",
  "author": "",
  "common": {
   "fr": [
    "framboisier d'Europe"
   ],
   "en": [
    "European red raspberry"
   ]
  },
  "names_src": [
   {
    "k": "powo",
    "url": "https://www.checklistbank.org/dataset/2000/taxon/urn:lsid:ipni.org:names:77232556-1",
    "loc": "accepted name (POWO/WCVP export 2026-10-07, ChecklistBank dataset 2000)"
   },
   {
    "k": "wfo",
    "url": "https://wfoplantlist.org/taxon/wfo-0001006864",
    "loc": "accepted name (WFO Plant List 2026-06)"
   }
  ],
  "taxonomy": {
   "en": "The typical subspecies, accepted by POWO and WFO.",
   "fr": "La sous-espèce type, acceptée par POWO et WFO.",
   "src": [
    {
     "k": "powo",
     "url": "https://www.checklistbank.org/dataset/2000/taxon/urn:lsid:ipni.org:names:77232556-1",
     "loc": "accepted name (POWO/WCVP export 2026-10-07, ChecklistBank dataset 2000)"
    },
    {
     "k": "wfo",
     "url": "https://wfoplantlist.org/taxon/wfo-0001006864",
     "loc": "accepted name (WFO Plant List 2026-06)"
    }
   ]
  }
 },
 {
  "id": "rubus-idaeus-subsp-strigosus",
  "parent": "rubus-idaeus",
  "rank": "subspecies",
  "name": "Rubus idaeus subsp. strigosus",
  "author": "(Michx.) Focke",
  "common": {
   "en": [
    "American red raspberry"
   ]
  },
  "synonyms": [
   "Rubus idaeus var. strigosus (Michx.) Maxim.",
   "Rubus subarcticus (Greene) Rydb."
  ],
  "names_src": [
   {
    "k": "powo",
    "url": "https://www.checklistbank.org/dataset/2000/taxon/urn:lsid:ipni.org:names:223189-2",
    "loc": "accepted name (POWO/WCVP export 2026-10-07, ChecklistBank dataset 2000)"
   },
   {
    "k": "wfo",
    "url": "https://wfoplantlist.org/taxon/wfo-0001006872",
    "loc": "accepted name (WFO Plant List 2026-06)"
   }
  ],
  "taxonomy": {
   "en": "Accepted as a subspecies by POWO and WFO; the older variety rank (var. strigosus) is a synonym.",
   "fr": "Acceptée comme sous-espèce par POWO et WFO ; l'ancien rang de variété (var. strigosus) est un synonyme.",
   "src": [
    {
     "k": "powo",
     "url": "https://www.checklistbank.org/dataset/2000/taxon/urn:lsid:ipni.org:names:223189-2",
     "loc": "accepted name (POWO/WCVP export 2026-10-07, ChecklistBank dataset 2000)"
    },
    {
     "k": "wfo",
     "url": "https://wfoplantlist.org/taxon/wfo-0001008300",
     "loc": "Rubus idaeus var. strigosus: synonym (WFO Plant List 2026-06)"
    }
   ]
  }
 },
 {
  "id": "rubus-idaeus-rumla",
  "parent": "rubus-idaeus",
  "rank": "cultivar",
  "name": "Rubus idaeus 'Rumla'",
  "author": "",
  "common": {
   "en": [
    "raspberry 'Rumla'"
   ],
   "fr": [
    "framboisier 'Rumla'"
   ]
  },
  "names_src": [
   {
    "k": "berries-pinczinger-2021",
    "url": "https://api.openalex.org/works/doi:10.1016/j.scienta.2021.110384",
    "loc": "abstract"
   }
  ],
  "mating": {
   "system": "allogamous",
   "flags": [
    "self-incompatible",
    "insect-pollinated"
   ],
   "en": "Behaved as largely self-incompatible: 100% of its seedlings came from cross-fertilization, and self-pollinated fruit had on average 10.95 drupelets, almost seven times fewer than cross-pollinated fruit.",
   "fr": "S'est comporté comme largement auto-incompatible : 100 % de ses semis venaient de fécondation croisée, et ses fruits autopollinisés avaient en moyenne 10,95 drupéoles, presque sept fois moins que les fruits issus de pollinisation croisée.",
   "src": [
    {
     "k": "berries-pinczinger-2021",
     "url": "https://api.openalex.org/works/doi:10.1016/j.scienta.2021.110384",
     "loc": "abstract (SSR genotyping of progenies of 16 cultivars, topcross, hand pollination)"
    }
   ]
  },
  "cultivar": {
   "self": "self-incompatible",
   "pollinizers": [],
   "incompatible_with": [],
   "group": "",
   "origin": {
    "en": "Not given in the source we opened.",
    "fr": "Non indiquée dans la source consultée."
   },
   "src": [
    {
     "k": "berries-pinczinger-2021",
     "url": "https://api.openalex.org/works/doi:10.1016/j.scienta.2021.110384",
     "loc": "abstract"
    }
   ]
  }
 },
 {
  "id": "rubus-idaeus-dorman-red",
  "parent": "rubus-idaeus",
  "rank": "cultivar",
  "name": "Rubus idaeus 'Dorman Red'",
  "author": "",
  "common": {
   "en": [
    "raspberry 'Dorman Red'"
   ],
   "fr": [
    "framboisier 'Dorman Red'"
   ]
  },
  "names_src": [
   {
    "k": "berries-pinczinger-2021",
    "url": "https://api.openalex.org/works/doi:10.1016/j.scienta.2021.110384",
    "loc": "abstract"
   }
  ],
  "mating": {
   "system": "autogamous",
   "flags": [
    "self-compatible",
    "insect-pollinated"
   ],
   "en": "Mostly self-fertilizes: only 5% of its open-pollinated seedlings were cross-fertilized, and hand self-pollination gave more seeds than crossing.",
   "fr": "S'autoféconde surtout : seulement 5 % de ses semis en pollinisation libre venaient d'un croisement, et l'autopollinisation manuelle a donné plus de graines que le croisement.",
   "src": [
    {
     "k": "berries-pinczinger-2021",
     "url": "https://api.openalex.org/works/doi:10.1016/j.scienta.2021.110384",
     "loc": "abstract (SSR genotyping of progenies of 16 cultivars, topcross, hand pollination)"
    }
   ]
  },
  "cultivar": {
   "self": "self-compatible",
   "pollinizers": [],
   "incompatible_with": [],
   "group": "",
   "origin": {
    "en": "Not given in the source we opened.",
    "fr": "Non indiquée dans la source consultée."
   },
   "src": [
    {
     "k": "berries-pinczinger-2021",
     "url": "https://api.openalex.org/works/doi:10.1016/j.scienta.2021.110384",
     "loc": "abstract"
    }
   ]
  }
 },
 {
  "id": "rubus-idaeus-lucana",
  "parent": "rubus-idaeus",
  "rank": "cultivar",
  "name": "Rubus idaeus 'Lucana'",
  "author": "",
  "common": {
   "en": [
    "raspberry 'Lucana'"
   ],
   "fr": [
    "framboisier 'Lucana'"
   ]
  },
  "names_src": [
   {
    "k": "berries-pinczinger-2021",
    "url": "https://api.openalex.org/works/doi:10.1016/j.scienta.2021.110384",
    "loc": "abstract"
   }
  ],
  "mating": {
   "system": "autogamous",
   "flags": [
    "self-compatible",
    "insect-pollinated"
   ],
   "en": "In a topcross planting none of its seedlings came from cross-fertilization.",
   "fr": "En plantation mélangée (topcross), aucun de ses semis ne venait d'une fécondation croisée.",
   "src": [
    {
     "k": "berries-pinczinger-2021",
     "url": "https://api.openalex.org/works/doi:10.1016/j.scienta.2021.110384",
     "loc": "abstract (SSR genotyping of progenies of 16 cultivars, topcross, hand pollination)"
    }
   ]
  },
  "cultivar": {
   "self": "self-compatible",
   "pollinizers": [],
   "incompatible_with": [],
   "group": "",
   "origin": {
    "en": "Not given in the source we opened.",
    "fr": "Non indiquée dans la source consultée."
   },
   "src": [
    {
     "k": "berries-pinczinger-2021",
     "url": "https://api.openalex.org/works/doi:10.1016/j.scienta.2021.110384",
     "loc": "abstract"
    }
   ]
  }
 },
 {
  "id": "rubus-idaeus-preussen",
  "parent": "rubus-idaeus",
  "rank": "cultivar",
  "name": "Rubus idaeus 'Preußen'",
  "author": "",
  "common": {
   "en": [
    "raspberry 'Preußen'"
   ],
   "fr": [
    "framboisier 'Preußen'"
   ]
  },
  "names_src": [
   {
    "k": "berries-pinczinger-2021",
    "url": "https://api.openalex.org/works/doi:10.1016/j.scienta.2021.110384",
    "loc": "abstract"
   }
  ],
  "mating": {
   "system": "autogamous",
   "flags": [
    "self-compatible",
    "insect-pollinated"
   ],
   "en": "In a topcross planting none of its seedlings came from cross-fertilization.",
   "fr": "En plantation mélangée (topcross), aucun de ses semis ne venait d'une fécondation croisée.",
   "src": [
    {
     "k": "berries-pinczinger-2021",
     "url": "https://api.openalex.org/works/doi:10.1016/j.scienta.2021.110384",
     "loc": "abstract (SSR genotyping of progenies of 16 cultivars, topcross, hand pollination)"
    }
   ]
  },
  "cultivar": {
   "self": "self-compatible",
   "pollinizers": [],
   "incompatible_with": [],
   "group": "",
   "origin": {
    "en": "Not given in the source we opened.",
    "fr": "Non indiquée dans la source consultée."
   },
   "src": [
    {
     "k": "berries-pinczinger-2021",
     "url": "https://api.openalex.org/works/doi:10.1016/j.scienta.2021.110384",
     "loc": "abstract"
    }
   ]
  }
 },
 {
  "id": "rubus-loganobaccus",
  "parent": "rubus",
  "rank": "hybrid",
  "name": "Rubus × loganobaccus",
  "author": "L.H.Bailey",
  "common": {
   "fr": [
    "loganberry",
    "mûre-framboise de Logan"
   ],
   "en": [
    "loganberry"
   ],
   "de": [
    "Loganbeere"
   ]
  },
  "synonyms": [
   "Rubus ursinus var. loganobaccus (L.H.Bailey) L.H.Bailey",
   "Rubus loganobaccus L.H.Bailey (spelling without × in WFO)"
  ],
  "names_src": [
   {
    "k": "powo",
    "url": "https://www.checklistbank.org/dataset/2000/taxon/urn:lsid:ipni.org:names:223266-2",
    "loc": "Rubus × loganobaccus L.H.Bailey accepted (POWO/WCVP export 2026-10-07, ChecklistBank dataset 2000)"
   },
   {
    "k": "wfo",
    "url": "https://wfoplantlist.org/taxon/wfo-0000984858",
    "loc": "Rubus loganobaccus L.H.Bailey accepted, without the hybrid sign (WFO Plant List 2026-06)"
   }
  ],
  "taxonomy": {
   "en": "POWO writes the name with the hybrid sign (Rubus × loganobaccus), WFO without it; both accept it. Its status was long debated: Darrow first treated it as a form of the Pacific blackberry R. ursinus, later accepted that it is a raspberry × blackberry cross, and Bailey placed loganberry and boysenberry under R. ursinus subsp. loganobaccus.",
   "fr": "POWO écrit le nom avec le signe d'hybride (Rubus × loganobaccus), WFO sans ; tous deux l'acceptent. Son statut a longtemps été discuté : Darrow y vit d'abord une forme de la ronce du Pacifique R. ursinus, puis admit qu'il s'agit d'un croisement framboisier × mûrier, et Bailey rangeait loganberry et boysenberry sous R. ursinus subsp. loganobaccus.",
   "src": [
    {
     "k": "powo",
     "url": "https://www.checklistbank.org/dataset/2000/taxon/urn:lsid:ipni.org:names:223266-2",
     "loc": "accepted name (POWO/WCVP export 2026-10-07, ChecklistBank dataset 2000)"
    },
    {
     "k": "wfo",
     "url": "https://wfoplantlist.org/taxon/wfo-0000984858",
     "loc": "accepted name (WFO Plant List 2026-06)"
    },
    {
     "k": "berries-mcgregor-1976",
     "url": "https://www.ars.usda.gov/ARSUserFiles/20220500/OnlinePollinationHandbook.pdf",
     "loc": "Blackberry, Plant"
    }
   ]
  },
  "interspecific": [
   {
    "with": "Rubus idaeus ('Antwerp') × blackberry 'Aughinbaugh'",
    "en": "Considered a cross between the red raspberry 'Antwerp' and the blackberry 'Aughinbaugh'; the RHS calls it a raspberry × American blackberry hybrid.",
    "fr": "Considérée comme un croisement entre le framboisier 'Antwerp' et le mûrier 'Aughinbaugh' ; la RHS la décrit comme un hybride framboisier × mûrier américain.",
    "src": [
     {
      "k": "berries-mcgregor-1976",
      "url": "https://www.ars.usda.gov/ARSUserFiles/20220500/OnlinePollinationHandbook.pdf",
      "loc": "Blackberry, Plant"
     },
     {
      "k": "berries-rhs-blackberries-hybrids",
      "url": "https://www.rhs.org.uk/fruit/blackberries-and-hybrid-berries/grow-your-own",
      "loc": "Choosing what to grow: Loganberry"
     }
    ],
    "with_fr": "Rubus idaeus ('Antwerp') × mûre 'Aughinbaugh'"
   }
  ],
  "mating": {
   "system": "mixed",
   "flags": [
    "insect-pollinated",
    "hermaphrodite"
   ],
   "en": "Oregon State groups it with blackberries, all said to be self-fruitful, but an early author (Hooper 1912) stressed that loganberries need insect pollination.",
   "fr": "L'Oregon State University la range avec les mûriers, tous dits autofertiles, mais un auteur ancien (Hooper 1912) insistait sur son besoin de pollinisation par les insectes.",
   "src": [
    {
     "k": "berries-osu-em9180",
     "url": "https://extension.oregonstate.edu/catalog/em-9180-growing-berries-oregon-coast-raspberries-blackberries",
     "loc": "Table 3 (blackberry/raspberry hybrids) and Pollination"
    },
    {
     "k": "berries-mcgregor-1976",
     "url": "https://www.ars.usda.gov/ARSUserFiles/20220500/OnlinePollinationHandbook.pdf",
     "loc": "Blackberry, Pollination Requirements"
    }
   ]
  },
  "varieties": {
   "en": "The RHS recommends the thornless loganberry 'LY 654' (AGM).",
   "fr": "La RHS recommande la loganberry sans épines 'LY 654' (AGM).",
   "src": [
    {
     "k": "berries-rhs-blackberries-hybrids",
     "url": "https://www.rhs.org.uk/fruit/blackberries-and-hybrid-berries/grow-your-own",
     "loc": "Recommended varieties"
    }
   ]
  },
  "synonyms_fr": [
   "Rubus ursinus var. loganobaccus (L.H.Bailey) L.H.Bailey",
   "Rubus loganobaccus L.H.Bailey (graphie sans × dans WFO)"
  ]
 },
 {
  "id": "rubus-tayberry-group",
  "parent": "rubus",
  "rank": "cultivar-group",
  "name": "Rubus Tayberry Group",
  "author": "",
  "common": {
   "fr": [
    "tayberry"
   ],
   "en": [
    "tayberry"
   ],
   "de": [
    "Tayberry"
   ]
  },
  "names_src": [
   {
    "k": "berries-rhs-tayberry",
    "url": "https://www.rhs.org.uk/plants/131374/rubus-tayberry-group-f/details",
    "loc": "RHS plant name 'Rubus Tayberry Group (F)'"
   }
  ],
  "interspecific": [
   {
    "with": "blackberry 'Aurora' (octoploid) × tetraploid raspberry 626/67",
    "en": "Selected from seedlings of a 1969 cross made at the Scottish Horticultural Research Institute, Dundee, between the octoploid blackberry 'Aurora' (bred at Corvallis, Oregon) as mother and a tetraploid raspberry selection.",
    "fr": "Sélectionnée parmi les semis d'un croisement de 1969 réalisé au Scottish Horticultural Research Institute de Dundee, entre le mûrier octoploïde 'Aurora' (obtenu à Corvallis, Oregon) comme mère et une sélection de framboisier tétraploïde.",
    "src": [
     {
      "k": "berries-tayberry-patent",
      "url": "https://patents.google.com/patent/USPP4424P/en",
      "loc": "description"
     }
    ],
    "with_fr": "mûre 'Aurora' (octoploïde) × framboisier tétraploïde 626/67"
   }
  ],
  "cultivar": {
   "self": "unknown",
   "pollinizers": [],
   "incompatible_with": [],
   "group": "blackberry × raspberry hybrid",
   "origin": {
    "en": "Derek L. Jennings, Scottish Horticultural Research Institute; US plant patent PP4424 published 1979 (assignee National Seed Development Organisation).",
    "fr": "Derek L. Jennings, Scottish Horticultural Research Institute ; brevet végétal américain PP4424 publié en 1979 (titulaire National Seed Development Organisation)."
   },
   "src": [
    {
     "k": "berries-tayberry-patent",
     "url": "https://patents.google.com/patent/USPP4424P/en",
     "loc": "inventor, assignee, dates"
    }
   ]
  },
  "mating": {
   "system": "mixed",
   "flags": [
    "insect-pollinated"
   ],
   "en": "Oregon State lists 'Tayberry' among blackberry/raspberry hybrids under its general rule that blackberries are self-fruitful; we found no test specific to the tayberry.",
   "fr": "L'Oregon State University cite 'Tayberry' parmi les hybrides mûrier/framboisier, sous la règle générale que les mûriers sont autofertiles ; nous n'avons trouvé aucun essai propre à la tayberry.",
   "src": [
    {
     "k": "berries-osu-em9180",
     "url": "https://extension.oregonstate.edu/catalog/em-9180-growing-berries-oregon-coast-raspberries-blackberries",
     "loc": "Table 3 and Pollination"
    }
   ]
  }
 },
 {
  "id": "rubus-boysen",
  "parent": "rubus",
  "rank": "hybrid",
  "name": "Rubus 'Boysen'",
  "author": "",
  "common": {
   "fr": [
    "boysenberry"
   ],
   "en": [
    "boysenberry"
   ],
   "de": [
    "Boysenbeere"
   ]
  },
  "names_src": [
   {
    "k": "berries-osu-em9180",
    "url": "https://extension.oregonstate.edu/catalog/em-9180-growing-berries-oregon-coast-raspberries-blackberries",
    "loc": "Introduction: 'Boysen' (boysenberry)"
   }
  ],
  "taxonomy": {
   "en": "Has no separate botanical name in the sources we opened; Bailey placed it under R. ursinus subsp. loganobaccus, and Oregon State treats it as a trailing blackberry hybrid.",
   "fr": "N'a pas de nom botanique propre dans les sources consultées ; Bailey la rangeait sous R. ursinus subsp. loganobaccus, et l'Oregon State University la traite comme un hybride de mûrier rampant.",
   "src": [
    {
     "k": "berries-mcgregor-1976",
     "url": "https://www.ars.usda.gov/ARSUserFiles/20220500/OnlinePollinationHandbook.pdf",
     "loc": "Blackberry, Plant"
    },
    {
     "k": "berries-osu-em9180",
     "url": "https://extension.oregonstate.edu/catalog/em-9180-growing-berries-oregon-coast-raspberries-blackberries",
     "loc": "Introduction; Table 3"
    }
   ]
  },
  "interspecific": [
   {
    "with": "loganberry, raspberry, dewberry and blackberry",
    "en": "The RHS describes it as a cross involving loganberry, raspberry, dewberry and blackberry.",
    "fr": "La RHS la décrit comme un croisement impliquant loganberry, framboisier, ronce bleue (dewberry) et mûrier.",
    "src": [
     {
      "k": "berries-rhs-blackberries-hybrids",
      "url": "https://www.rhs.org.uk/fruit/blackberries-and-hybrid-berries/grow-your-own",
      "loc": "Choosing what to grow: Boysenberry"
     }
    ],
    "with_fr": "mûre de Logan, framboise, ronce bleue et mûre"
   }
  ],
  "mating": {
   "system": "mixed",
   "flags": [
    "insect-pollinated"
   ],
   "en": "Covered only by Oregon State's general statement that blackberries are self-fruitful.",
   "fr": "Seulement couverte par l'affirmation générale de l'Oregon State University : les mûriers sont autofertiles.",
   "src": [
    {
     "k": "berries-osu-em9180",
     "url": "https://extension.oregonstate.edu/catalog/em-9180-growing-berries-oregon-coast-raspberries-blackberries",
     "loc": "Pollination"
    }
   ]
  }
 }
];
