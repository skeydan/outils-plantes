// Concepts explained at the bottom of the page, in our own words.
export const CONCEPT_GROUPS = [
 {
  "id": "pollination",
  "title": {
   "en": "Who pollinates whom",
   "fr": "Qui féconde qui"
  },
  "ids": [
   "autogamy",
   "allogamy",
   "mixed-mating",
   "cleistogamy"
  ]
 },
 {
  "id": "si",
  "title": {
   "en": "Self-incompatibility and S-alleles",
   "fr": "Auto-incompatibilité et allèles S"
  },
  "ids": [
   "self-incompatibility",
   "gametophytic-si",
   "sporophytic-si",
   "s-alleles-cross-incompatibility",
   "self-compatible-mutants"
  ]
 },
 {
  "id": "sexes",
  "title": {
   "en": "Male, female, both",
   "fr": "Mâle, femelle, les deux"
  },
  "ids": [
   "hermaphrodite",
   "monoecy",
   "dioecy",
   "functional-dioecy"
  ]
 },
 {
  "id": "apomixis",
  "title": {
   "en": "Seeds without sex",
   "fr": "Des graines sans sexe"
  },
  "ids": [
   "apomixis",
   "pseudogamy"
  ]
 },
 {
  "id": "saving",
  "title": {
   "en": "Saving seed",
   "fr": "Produire ses semences"
  },
  "ids": [
   "inbreeding-depression",
   "seed-saving-population-size",
   "isolation-distance",
   "isolation-distances-numbers",
   "isolation-time",
   "isolation-barriers-bagging"
  ]
 },
 {
  "id": "true",
  "title": {
   "en": "Does it come true?",
   "fr": "Est-ce fidèle ?"
  },
  "ids": [
   "true-to-type",
   "open-pollinated-vs-f1",
   "fruit-trees-grafting",
   "juvenility"
  ]
 },
 {
  "id": "names",
  "title": {
   "en": "Names: species, varieties, cultivars",
   "fr": "Les noms : espèces, variétés, cultivars"
  },
  "ids": [
   "taxonomic-ranks",
   "binomial",
   "botanical-variety",
   "cultivar",
   "cultivar-group",
   "upov-variety",
   "variete-fr",
   "hybrid-formula-nothospecies",
   "aggregate",
   "powo",
   "wfo",
   "apg4"
  ]
 }
];

export const CONCEPTS = [
 {
  "id": "autogamy",
  "title": {
   "en": "Autogamy (self-pollination)",
   "fr": "Autogamie (autofécondation)"
  },
  "en": "In an autogamous plant, the egg cells are fertilised by pollen from the same flower or the same plant, so the plant in effect mates with itself and its offspring carry only its own genes. In strongly self-pollinating crops the flower is built to keep foreign pollen out: in most modern tomatoes the anthers form a cone around the stigma, and a pea flower is already fertilised when it opens; lettuce, common bean and wheat behave the same way. Selfing gives less genetic diversity than crossing, but it makes seed set independent of wind or insects. Even strong selfers cross occasionally (for example when bees force a flower open), and self-pollinating okra can still cross readily, so 'able to self' does not mean 'never crosses'.",
  "fr": "Chez une plante autogame, les ovules sont fécondés par le pollen de la même fleur ou de la même plante : la plante se reproduit en quelque sorte avec elle-même et sa descendance ne porte que ses propres gènes. Chez les espèces très autogames, la fleur est construite pour écarter le pollen étranger : chez la plupart des tomates modernes, les anthères forment un cône autour du stigmate, et la fleur de pois est déjà fécondée quand elle s'ouvre ; la laitue, le haricot et le blé se comportent de même. L'autofécondation donne moins de diversité génétique que le croisement, mais rend la production de graines indépendante du vent et des insectes. Même les fortes autogames se croisent parfois (par exemple quand des abeilles forcent la fleur), et le gombo, pourtant autogame, se croise facilement : « capable de s'autoféconder » ne veut donc pas dire « ne se croise jamais ».",
  "src": [
   {
    "k": "concepts-osa-seed-saving-guide",
    "url": "https://seedalliance.org/wp-content/uploads/2010/04/seed_saving_guide.pdf",
    "loc": "p. 5–6, 'Inbreeding and Outbreeding', 'Inbreeding', 'Strong Inbreeders'"
   },
   {
    "k": "concepts-openstax-bio2e-32-2",
    "url": "https://openstax.org/books/biology-2e/pages/32-2-pollination-and-fertilization",
    "loc": "section 32.2, 'Pollination and Fertilization' (self-pollination, cross-pollination)"
   },
   {
    "k": "concepts-semae-lexique",
    "url": "https://www.semae-pedagogie.org/lexique/",
    "loc": "entry 'Autogamie'"
   },
   {
    "k": "concepts-mccormack-isolation",
    "url": "https://www.savingourseeds.org/pubs/isolation_distances_ver_1pt8.pdf",
    "loc": "PDF p. 7–8, 'Okra'"
   }
  ]
 },
 {
  "id": "allogamy",
  "title": {
   "en": "Allogamy (cross-pollination)",
   "fr": "Allogamie (fécondation croisée)"
  },
  "en": "In an allogamous plant the fertilising pollen comes from another plant of the same species, so the offspring differ genetically from both parents. Allogamy needs two things: something that prevents or limits selfing, and a carrier (wind, insects or other animals) to move the pollen. The strongest outbreeders are dioecious or self-incompatible and cannot self at all; others only make selfing less likely, as in maize, where the tassel sheds most of its pollen before the silks of the same plant are receptive. Beet, broccoli and spinach are other strong outbreeders.",
  "fr": "Chez une plante allogame, le pollen fécondant vient d'une autre plante de la même espèce, si bien que la descendance diffère génétiquement des deux parents. L'allogamie suppose deux conditions : un mécanisme qui empêche ou limite l'autofécondation, et un vecteur (vent, insectes ou autres animaux) qui transporte le pollen. Les allogames les plus strictes sont dioïques ou auto-incompatibles et ne peuvent pas s'autoféconder ; d'autres rendent seulement l'autofécondation moins probable, comme le maïs, dont la panicule libère l'essentiel de son pollen avant que les soies du même pied soient réceptives. La betterave, le brocoli et l'épinard sont d'autres allogames marquées.",
  "src": [
   {
    "k": "concepts-openstax-bio2e-32-2",
    "url": "https://openstax.org/books/biology-2e/pages/32-2-pollination-and-fertilization",
    "loc": "section 32.2 (definition of cross-pollination)"
   },
   {
    "k": "concepts-semae-lexique",
    "url": "https://www.semae-pedagogie.org/lexique/",
    "loc": "entry 'Allogamie'"
   },
   {
    "k": "concepts-osa-seed-saving-guide",
    "url": "https://seedalliance.org/wp-content/uploads/2010/04/seed_saving_guide.pdf",
    "loc": "p. 6, 'Outbreeding', 'Strong Outbreeders'"
   }
  ]
 },
 {
  "id": "mixed-mating",
  "title": {
   "en": "Mixed or facultative mating",
   "fr": "Régime de reproduction mixte (allogamie partielle)"
  },
  "en": "Many crops are neither strict selfers nor strict outcrossers but sit somewhere along a spectrum. The Organic Seed Alliance guide sorts crops into five classes (very inbreeding, primarily inbreeding, both inbreeding and outbreeding, primarily outbreeding, very outbreeding) and stresses that a species' position can shift with the environment. Its example: in an average field of fava beans, about 50-75% of flowers are self-fertilised and 25-50% cross-fertilised, mainly by bees. For seed saving, such 'in-between' crops need more isolation than strict selfers.",
  "fr": "Beaucoup d'espèces cultivées ne sont ni strictement autogames ni strictement allogames, mais se situent quelque part sur un gradient. Le guide de l'Organic Seed Alliance classe les cultures en cinq catégories (très autogame, surtout autogame, à la fois autogame et allogame, surtout allogame, très allogame) et souligne que la place d'une espèce peut varier selon le milieu. Son exemple : dans un champ moyen de fèves, environ 50-75 % des fleurs sont autofécondées et 25-50 % croisées, surtout par les abeilles. Pour produire ses graines, ces espèces « intermédiaires » demandent plus d'isolement que les autogames strictes.",
  "src": [
   {
    "k": "concepts-osa-seed-saving-guide",
    "url": "https://seedalliance.org/wp-content/uploads/2010/04/seed_saving_guide.pdf",
    "loc": "p. 6, 'The Plants In-Between' and 'Classifications in the Crop Specific Chart'; p. 27 chart legend"
   },
   {
    "k": "concepts-sse-crop-chart",
    "url": "https://shop.seedsavers.org/site/pdf/crop_chart.pdf",
    "loc": "legend 'Selfing or Outbreeding' (SO = can be self-pollinating, but is often outbreeding)"
   }
  ]
 },
 {
  "id": "cleistogamy",
  "title": {
   "en": "Cleistogamy",
   "fr": "Cléistogamie"
  },
  "en": "Cleistogamous (CL) flowers stay closed and pollinate themselves; chasmogamous (CH) flowers open and can be cross-pollinated. Some plants make both kinds: this is common in violets (Viola), where in most Northern Hemisphere sections the open flowers come first in the season and the closed ones later; having both at the same time on one branch is rare. Seeds from closed flowers are always the product of selfing, which is why CL seed is of interest for producing genetically stable lines.",
  "fr": "Les fleurs cléistogames (CL) restent fermées et s'autopollinisent ; les fleurs chasmogames (CH) s'ouvrent et peuvent être pollinisées par d'autres plantes. Certaines espèces produisent les deux types : c'est courant chez les violettes (Viola), où, dans la plupart des sections de l'hémisphère Nord, les fleurs ouvertes viennent en premier dans la saison et les fleurs fermées ensuite ; les deux types en même temps sur une même tige sont rares. Les graines issues de fleurs fermées proviennent toujours d'une autofécondation, d'où leur intérêt pour obtenir des lignées génétiquement stables.",
  "src": [
   {
    "k": "concepts-ammarellou-2021-viola",
    "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC8537809/",
    "loc": "Abstract and Introduction"
   }
  ]
 },
 {
  "id": "self-incompatibility",
  "title": {
   "en": "Self-incompatibility (SI)",
   "fr": "Auto-incompatibilité"
  },
  "en": "Self-incompatibility is a genetic system by which the pistil recognises pollen from the same plant (or from a plant with the same S-alleles) and stops it before fertilisation, even though the flower is hermaphrodite and its own pollen is fertile. It is usually controlled by one highly variable locus, S, with many alleles (S1, S2...): when pollen and pistil carry a matching S allele, the pollen is rejected. Hiscock (2002) states that up to 70% of flowering plants may have such systems, which avoid inbreeding depression. For a grower, a self-incompatible plant or cultivar needs a compatible partner flowering at the same time to set fruit or seed.",
  "fr": "L'auto-incompatibilité est un système génétique par lequel le pistil reconnaît le pollen de la même plante (ou d'une plante portant les mêmes allèles S) et l'arrête avant la fécondation, alors même que la fleur est hermaphrodite et que son pollen est fertile. Elle est en général contrôlée par un seul locus très variable, S, aux nombreux allèles (S1, S2...) : quand le pollen et le pistil portent un même allèle S, le pollen est rejeté. Selon Hiscock (2002), jusqu'à 70 % des plantes à fleurs posséderaient de tels systèmes, qui évitent la dépression de consanguinité. Pour le jardinier, une plante ou un cultivar auto-incompatible a besoin d'un partenaire compatible fleurissant en même temps pour donner fruits ou graines.",
  "src": [
   {
    "k": "concepts-hiscock-2002",
    "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC139015/",
    "loc": "Introduction and 'The genetics of self-incompatibility', Figure 1"
   },
   {
    "k": "concepts-osa-seed-saving-guide",
    "url": "https://seedalliance.org/wp-content/uploads/2010/04/seed_saving_guide.pdf",
    "loc": "p. 5, 'Inbreeding and Outbreeding'"
   }
  ]
 },
 {
  "id": "gametophytic-si",
  "title": {
   "en": "Gametophytic self-incompatibility (GSI, S-RNase)",
   "fr": "Auto-incompatibilité gamétophytique (S-RNase)"
  },
  "en": "In gametophytic SI, each pollen grain behaves according to its own single (haploid) S allele. The pollen germinates, but its tube is usually stopped while growing down the style if its S allele matches either of the two S alleles of the pistil. In the Solanaceae, the Rosaceae (apple, pear, apricot, cherry...) and the snapdragon family, the female side is an S-RNase made in the style; in Prunus the pollen side is an F-box protein called SFB. Poppies (Papaveraceae) are also gametophytic but use a different mechanism that does not involve S-RNases.",
  "fr": "Dans l'auto-incompatibilité gamétophytique, chaque grain de pollen se comporte selon son propre allèle S (il est haploïde). Le pollen germe, mais son tube est en général arrêté pendant sa croissance dans le style si son allèle S est identique à l'un des deux allèles S du pistil. Chez les Solanacées, les Rosacées (pommier, poirier, abricotier, cerisier...) et la famille du muflier, le déterminant femelle est une S-RNase produite dans le style ; chez Prunus, le déterminant pollinique est une protéine à boîte F appelée SFB. Les pavots (Papavéracées) sont aussi gamétophytiques, mais avec un autre mécanisme, sans S-RNase.",
  "src": [
   {
    "k": "concepts-hiscock-2002",
    "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC139015/",
    "loc": "'The genetics of self-incompatibility', Figure 1a; 'Molecular diversity of self-incompatibility systems'"
   },
   {
    "k": "concepts-cmejlova-2023-cherry",
    "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10139232/",
    "loc": "1. Introduction (S-RNase and SFB)"
   }
  ]
 },
 {
  "id": "sporophytic-si",
  "title": {
   "en": "Sporophytic self-incompatibility (SSI, Brassicaceae)",
   "fr": "Auto-incompatibilité sporophytique (Brassicacées)"
  },
  "en": "In sporophytic SI, the pollen's behaviour is set by the diploid genotype of the plant that produced it, because the S proteins are deposited on the pollen coat by the anther tissue (tapetum). Rejection usually happens on the stigma surface, often before the pollen even germinates. In Brassica the stigma receptor SRK recognises a matching small pollen-coat protein (SCR/SP11). Dominance between S alleles is possible in this system, so S-homozygous plants can exist. SSI occurs in the Brassicaceae (cabbage family), Convolvulaceae and Asteraceae; in Brassica, stigmas only become able to reject self pollen about one day before the flower opens.",
  "fr": "Dans l'auto-incompatibilité sporophytique, le comportement du pollen est fixé par le génotype diploïde de la plante qui l'a produit, car les protéines S sont déposées sur l'enveloppe du pollen par un tissu de l'anthère (le tapis). Le rejet a lieu en général à la surface du stigmate, souvent avant même la germination du pollen. Chez Brassica, le récepteur SRK du stigmate reconnaît une petite protéine de l'enveloppe pollinique (SCR/SP11) qui lui correspond. Des relations de dominance entre allèles S sont possibles, si bien que des plantes homozygotes pour S peuvent exister. On la trouve chez les Brassicacées (famille du chou), les Convolvulacées et les Astéracées ; chez Brassica, le stigmate ne devient capable de rejeter son propre pollen qu'environ un jour avant l'ouverture de la fleur.",
  "src": [
   {
    "k": "concepts-hiscock-2002",
    "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC139015/",
    "loc": "'The genetics of self-incompatibility', Figure 1b; Figure 2"
   },
   {
    "k": "concepts-kitashiba-2014-brassica",
    "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC4031107/",
    "loc": "section on SLG and SRK (developmental regulation of SI)"
   }
  ]
 },
 {
  "id": "s-alleles-cross-incompatibility",
  "title": {
   "en": "S-alleles and cross-incompatibility groups",
   "fr": "Allèles S et groupes d'interincompatibilité"
  },
  "en": "With gametophytic SI, a pollen grain succeeds only if its S allele differs from both S alleles of the pistil. If two cultivars share one S allele, half of the pollen of one can still fertilise the other; if they carry exactly the same pair, neither can pollinate the other. Sweet cherry cultivars with the same S-allele pair are put in 'incompatibility groups': Čmejlová et al. (2023), citing the JKI overview, report 63 such groups, some containing more than 100 cultivars that cannot pollinate one another. WSU gives the classic case of 'Bing', 'Lambert' and 'Royal Ann'/'Napoleon', which cannot be relied on to pollinate each other.",
  "fr": "Avec l'auto-incompatibilité gamétophytique, un grain de pollen ne réussit que si son allèle S diffère des deux allèles S du pistil. Si deux cultivars partagent un allèle S, la moitié du pollen de l'un peut encore féconder l'autre ; s'ils portent exactement la même paire, aucun ne peut polliniser l'autre. Les cultivars de cerisier doux qui ont la même paire d'allèles S sont rangés en « groupes d'incompatibilité » : Čmejlová et al. (2023), d'après la synthèse du JKI, en comptent 63, dont certains réunissent plus de 100 cultivars incapables de se polliniser entre eux. La WSU cite le cas classique de 'Bing', 'Lambert' et 'Royal Ann'/'Napoleon', sur lesquels on ne peut pas compter pour se polliniser mutuellement.",
  "src": [
   {
    "k": "concepts-hiscock-2002",
    "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC139015/",
    "loc": "Figure 1a legend (50% of S1S2 pollen compatible on S1S3)"
   },
   {
    "k": "concepts-cmejlova-2023-cherry",
    "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10139232/",
    "loc": "Abstract; 1. Introduction (incompatibility groups)"
   },
   {
    "k": "concepts-wsu-sweet-cherry-pollination",
    "url": "https://treefruit.wsu.edu/web-article/sweet-cherry-pollination/",
    "loc": "first paragraph"
   }
  ]
 },
 {
  "id": "self-compatible-mutants",
  "title": {
   "en": "Self-compatible mutants",
   "fr": "Mutants autocompatibles"
  },
  "en": "Self-incompatibility can break down through mutations, giving self-compatible (self-fertile) plants. In sweet cherry, all fully self-compatible cultivars carry an S allele whose pollen part (SFB) is inactivated, written with an apostrophe: S3' and S4' were produced by irradiation, while S5' arose naturally in some Sicilian cultivars; lower expression of another gene (MGST) gives partial self-compatibility in some Spanish cultivars. 'Stella', from 'Lambert' × the self-compatible selection 'JI2420', was the first commercially successful self-compatible sweet cherry, and such cultivars can serve as pollinizers for many others if they bloom at the same time (WSU notes 'Stella' did not work for 'Bing' in some areas). In Brassica, the amphidiploid species B. napus, B. juncea and B. carinata are self-compatible, whereas B. rapa, B. nigra and B. oleracea are self-incompatible.",
  "fr": "L'auto-incompatibilité peut être perdue par mutation, ce qui donne des plantes autocompatibles (autofertiles). Chez le cerisier doux, tous les cultivars pleinement autocompatibles portent un allèle S dont la partie pollinique (SFB) est inactivée, noté avec une apostrophe : S3' et S4' ont été obtenus par irradiation, tandis que S5' est apparu naturellement chez des cultivars siciliens ; une expression réduite d'un autre gène (MGST) donne une autocompatibilité partielle chez certains cultivars espagnols. 'Stella', issu de 'Lambert' × la sélection autocompatible 'JI2420', a été le premier cerisier doux autocompatible à succès commercial, et ces cultivars peuvent servir de pollinisateurs à beaucoup d'autres s'ils fleurissent en même temps (la WSU note que 'Stella' n'a pas fonctionné pour 'Bing' dans certaines régions). Chez Brassica, les espèces amphidiploïdes B. napus, B. juncea et B. carinata sont autocompatibles, alors que B. rapa, B. nigra et B. oleracea sont auto-incompatibles.",
  "src": [
   {
    "k": "concepts-cmejlova-2023-cherry",
    "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10139232/",
    "loc": "1. Introduction (S3', S4', S5', MGST, 'Stella')"
   },
   {
    "k": "concepts-wsu-sweet-cherry-pollination",
    "url": "https://treefruit.wsu.edu/web-article/sweet-cherry-pollination/",
    "loc": "first paragraph (self-fruitful 'universal' pollinizers)"
   },
   {
    "k": "concepts-kitashiba-2014-brassica",
    "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC4031107/",
    "loc": "section 'Self-compatibility of amphidiploid species in Brassica and Arabidopsis'"
   }
  ]
 },
 {
  "id": "hermaphrodite",
  "title": {
   "en": "Hermaphrodite (perfect) flowers",
   "fr": "Fleurs hermaphrodites"
  },
  "en": "A hermaphrodite (bisexual, 'perfect') flower has both stamens (male parts, which make pollen) and a pistil (female part: stigma, style and ovary). Having both sexes in one flower makes selfing possible but not obligatory: the outcome depends on flower structure, on timing (male and female parts maturing at different times lowers selfing) and on self-incompatibility.",
  "fr": "Une fleur hermaphrodite (bisexuée, dite « parfaite ») possède à la fois des étamines (organes mâles, qui produisent le pollen) et un pistil (organe femelle : stigmate, style et ovaire). Avoir les deux sexes dans la même fleur rend l'autofécondation possible mais pas obligatoire : tout dépend de la structure de la fleur, du décalage de maturité entre organes mâles et femelles (qui réduit l'autofécondation) et de l'auto-incompatibilité.",
  "src": [
   {
    "k": "concepts-osa-seed-saving-guide",
    "url": "https://seedalliance.org/wp-content/uploads/2010/04/seed_saving_guide.pdf",
    "loc": "p. 5, 'Botany Vocabulary' (bisexual flower, pistil, stamen) and 'Inbreeding and Outbreeding'"
   }
  ]
 },
 {
  "id": "monoecy",
  "title": {
   "en": "Monoecy",
   "fr": "Monoécie"
  },
  "en": "A monoecious plant carries separate male and female flowers on the same individual; maize, cucumber and squash are examples. Because the two kinds of flowers are physically apart, these crops cross readily, but they can still self-pollinate if pollen moves from a male to a female flower of the same plant.",
  "fr": "Une plante monoïque porte des fleurs mâles et des fleurs femelles séparées sur le même pied ; le maïs, le concombre et la courge en sont des exemples. Comme les deux types de fleurs sont séparés, ces espèces se croisent facilement, mais elles peuvent encore s'autoféconder si le pollen passe d'une fleur mâle à une fleur femelle de la même plante.",
  "src": [
   {
    "k": "concepts-osa-seed-saving-guide",
    "url": "https://seedalliance.org/wp-content/uploads/2010/04/seed_saving_guide.pdf",
    "loc": "p. 5, 'Botany Vocabulary' (Monoecious) and 'Inbreeding and Outbreeding'"
   },
   {
    "k": "concepts-semae-lexique",
    "url": "https://www.semae-pedagogie.org/lexique/",
    "loc": "entry 'Monoïque'"
   }
  ]
 },
 {
  "id": "dioecy",
  "title": {
   "en": "Dioecy",
   "fr": "Dioécie"
  },
  "en": "In a dioecious species each plant bears flowers of only one sex, so there are male and female individuals; asparagus, spinach and date palm are examples. Dioecy rules out selfing completely and is the strongest outbreeding system. Full dioecy occurs in about 4% of seed plants. For seed or fruit, female plants need a male of the same species flowering nearby; the Seed Savers Exchange guide gives 2 plants (1 male, 1 female) as the bare minimum for viable asparagus seed.",
  "fr": "Chez une espèce dioïque, chaque pied ne porte que des fleurs d'un seul sexe : il y a des individus mâles et des individus femelles ; l'asperge, l'épinard et le palmier dattier en sont des exemples. La dioécie exclut totalement l'autofécondation et constitue le système le plus fort d'allogamie. La dioécie complète concerne environ 4 % des plantes à graines. Pour obtenir graines ou fruits, les pieds femelles ont besoin d'un pied mâle de la même espèce fleurissant à proximité ; le guide de Seed Savers Exchange indique 2 plantes (1 mâle, 1 femelle) comme strict minimum pour obtenir des graines viables d'asperge.",
  "src": [
   {
    "k": "concepts-osa-seed-saving-guide",
    "url": "https://seedalliance.org/wp-content/uploads/2010/04/seed_saving_guide.pdf",
    "loc": "p. 5, 'Botany Vocabulary' (Dioecious) and 'Inbreeding and Outbreeding'"
   },
   {
    "k": "concepts-fraser-2009-kiwifruit",
    "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC2661093/",
    "loc": "Background (about 4% of seed plants)"
   },
   {
    "k": "concepts-semae-lexique",
    "url": "https://www.semae-pedagogie.org/lexique/",
    "loc": "entry 'Dioïque'"
   },
   {
    "k": "concepts-sse-guide-2017",
    "url": "https://shop.seedsavers.org/site/pdf/Seed%20Saving%20Guide_2017.pdf",
    "loc": "table row 'asparagus', column 'Viable Seeds'"
   }
  ]
 },
 {
  "id": "functional-dioecy",
  "title": {
   "en": "Functional dioecy (e.g. kiwifruit)",
   "fr": "Dioécie fonctionnelle (ex. kiwi)"
  },
  "en": "Some plants look hermaphrodite but work as one sex only. In kiwifruit (Actinidia, where all known species are dioecious), female vines have flowers that look bisexual but whose anthers release only empty, non-functional pollen, while male vines have many stamens around a rudimentary pistil that stops developing early. So a female kiwifruit vine, despite its stamens, needs pollen from a male vine.",
  "fr": "Certaines plantes semblent hermaphrodites mais ne fonctionnent que comme un seul sexe. Chez le kiwi (Actinidia, dont toutes les espèces connues sont dioïques), les lianes femelles ont des fleurs d'aspect bisexué dont les anthères ne libèrent qu'un pollen vide, non fonctionnel, tandis que les lianes mâles ont de nombreuses étamines autour d'un pistil rudimentaire qui cesse tôt de se développer. Une liane femelle de kiwi a donc besoin du pollen d'un pied mâle, malgré ses étamines.",
  "src": [
   {
    "k": "concepts-fraser-2009-kiwifruit",
    "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC2661093/",
    "loc": "Background"
   }
  ]
 },
 {
  "id": "apomixis",
  "title": {
   "en": "Apomixis (agamospermy)",
   "fr": "Apomixie (agamospermie)"
  },
  "en": "Apomixis, also called agamospermy, is the formation of seed without sex: the embryo develops from an unreduced maternal cell without fertilisation, so the seedlings are clones, genetically identical to the mother plant. In gametophytic apomixis meiosis is bypassed (diplospory, as in dandelion Taraxacum officinale, or apospory) and the egg develops on its own; in sporophytic apomixis, embryos bud directly from tissue of the ovule beside a normal sexual embryo sac, which can give several embryos per seed, as is common in Citrus. Apomixis is documented in more than 120 flowering-plant genera, but no major seed crop is apomictic. It can be facultative: some Rubus microspecies still produce part of their seed sexually.",
  "fr": "L'apomixie, ou agamospermie, est la formation de graines sans sexualité : l'embryon se développe sans fécondation à partir d'une cellule maternelle non réduite, si bien que les semis sont des clones, génétiquement identiques à la plante mère. Dans l'apomixie gamétophytique, la méiose est court-circuitée (diplosporie, comme chez le pissenlit Taraxacum officinale, ou aposporie) et l'oosphère se développe seule ; dans l'apomixie sporophytique, des embryons naissent directement de tissus de l'ovule à côté d'un sac embryonnaire sexué normal, ce qui peut donner plusieurs embryons par graine, fréquent chez les agrumes (Citrus). L'apomixie est connue dans plus de 120 genres de plantes à fleurs, mais aucune grande culture à graines n'est apomictique. Elle peut être facultative : certaines microespèces de Rubus produisent encore une partie de leurs graines par voie sexuée.",
  "src": [
   {
    "k": "concepts-hand-koltunow-2014",
    "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC4063905/",
    "loc": "Introduction; 'Apomixis Mechanisms'; Figure 1"
   },
   {
    "k": "concepts-bsbi-rubus-agg",
    "url": "https://bsbi.org/in-your-area/local-botany/co-fermanagh/fermanagh-species-accounts/rubus-fruticosus-l-agg",
    "loc": "'Variation, apomixis and taxonomic difficulties'"
   }
  ]
 },
 {
  "id": "pseudogamy",
  "title": {
   "en": "Pseudogamy",
   "fr": "Pseudogamie"
  },
  "en": "Most apomictic species are pseudogamous: the embryo is maternal and forms without fertilisation, but the seed's nutritive tissue (endosperm) only develops if a sperm cell fertilises the central cell, so pollination is still needed. Only a few apomictic Asteraceae make endosperm without any fertilisation. Brambles (Rubus) are a familiar example: most flowers need viable pollen, from the same or another plant, to set seed, yet the offspring are genetically identical to the female parent. Practical consequence: a pseudogamous plant needs pollinators or a pollen source like a sexual plant, but its seedlings come true like cuttings.",
  "fr": "La plupart des espèces apomictiques sont pseudogames : l'embryon est maternel et se forme sans fécondation, mais le tissu nourricier de la graine (albumen) ne se développe que si un gamète mâle féconde la cellule centrale ; la pollinisation reste donc nécessaire. Seules quelques Astéracées apomictiques forment leur albumen sans aucune fécondation. Les ronces (Rubus) en sont un exemple connu : la plupart des fleurs ont besoin de pollen viable, de la même plante ou d'une autre, pour faire des graines, et pourtant la descendance est génétiquement identique à la plante mère. Conséquence pratique : une plante pseudogame a besoin de pollinisateurs ou d'une source de pollen comme une plante sexuée, mais ses semis sont conformes comme des boutures.",
  "src": [
   {
    "k": "concepts-goeckeritz-2024-apomixis",
    "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11399699/",
    "loc": "section on gametophytic apomixis components (pseudogamy, autonomous endosperm)"
   },
   {
    "k": "concepts-bsbi-rubus-agg",
    "url": "https://bsbi.org/in-your-area/local-botany/co-fermanagh/fermanagh-species-accounts/rubus-fruticosus-l-agg",
    "loc": "'Variation, apomixis and taxonomic difficulties'"
   }
  ]
 },
 {
  "id": "inbreeding-depression",
  "title": {
   "en": "Inbreeding depression",
   "fr": "Dépression de consanguinité"
  },
  "en": "Inbreeding depression is the loss of vigour and fertility that appears when closely related, genetically too similar plants mate, or when a plant is selfed repeatedly. Affected plants germinate poorly, yield little and give in more easily to stress. Strong outbreeders suffer most, because they are adapted to constant mixing; strong selfers suffer least, having adapted to the inbred state over many generations. The cucurbits (cucumber, melon, squash, watermelon) are an exception: largely outcrossing but not badly affected. Its opposite is hybrid vigour (heterosis), the better performance of crosses between distinct lines.",
  "fr": "La dépression de consanguinité est la perte de vigueur et de fertilité qui apparaît quand des plantes proches parentes, trop semblables génétiquement, se croisent, ou quand une plante est autofécondée de façon répétée. Les plantes touchées germent mal, produisent peu et résistent moins aux stress. Les allogames marquées en souffrent le plus, car elles sont adaptées à un brassage constant ; les autogames strictes en souffrent le moins, s'étant adaptées à cet état au fil des générations. Les cucurbitacées (concombre, melon, courge, pastèque) font exception : largement allogames, elles sont peu affectées. Son contraire est la vigueur hybride (hétérosis), meilleure performance des croisements entre lignées éloignées.",
  "src": [
   {
    "k": "concepts-osa-seed-saving-guide",
    "url": "https://seedalliance.org/wp-content/uploads/2010/04/seed_saving_guide.pdf",
    "loc": "p. 8–9, 'Inbreeding depression'"
   },
   {
    "k": "concepts-hiscock-2002",
    "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC139015/",
    "loc": "Introduction (inbreeding depression, converse of hybrid vigour)"
   },
   {
    "k": "concepts-semae-lexique",
    "url": "https://www.semae-pedagogie.org/lexique/",
    "loc": "entry 'Hétérosis'"
   }
  ]
 },
 {
  "id": "seed-saving-population-size",
  "title": {
   "en": "Population size for seed saving",
   "fr": "Effectif de plantes pour produire ses semences"
  },
  "en": "Saving seed from too few plants narrows a variety's genetic variability, which reduces its ability to adapt (for example to a new disease) and, in outcrossing crops, leads to inbreeding depression. The Organic Seed Alliance gives minimum populations for genetic maintenance of: 10-20 plants for very self-pollinating crops (common bean, lettuce, pea, modern tomato) and for cucurbits; 40 for crops that both self and cross (fava bean, runner bean, okra, hot pepper); 80 for most insect- or wind-pollinated outcrossers (brassicas, beet, spinach, celery); 200 for maize, carrot and onion. The Seed Savers Exchange 2017 guide gives three levels (viable seed / variety maintenance / genetic preservation), e.g. lettuce 1 / 5-10 / 20+, cabbage 5 / 20-50 / 80+, squash 1 / 5-10 / 25+, maize 10 / 50-120 / 200+. If space is short, grow as many as you can, watch for loss of vigour, and refresh with seed of the same variety from elsewhere.",
  "fr": "Récolter les graines sur trop peu de plantes réduit la variabilité génétique de la variété, donc sa capacité d'adaptation (par exemple à une nouvelle maladie), et, chez les allogames, entraîne une dépression de consanguinité. L'Organic Seed Alliance donne des effectifs minimaux pour le maintien génétique : 10-20 plantes pour les espèces très autogames (haricot, laitue, pois, tomate moderne) et pour les cucurbitacées ; 40 pour celles qui se croisent et s'autofécondent (fève, haricot d'Espagne, gombo, piment fort) ; 80 pour la plupart des allogames pollinisées par les insectes ou le vent (choux, betterave, épinard, céleri) ; 200 pour le maïs, la carotte et l'oignon. Le guide 2017 de Seed Savers Exchange donne trois niveaux (graines viables / maintien de la variété / conservation génétique), par exemple laitue 1 / 5-10 / 20+, chou 5 / 20-50 / 80+, courge 1 / 5-10 / 25+, maïs 10 / 50-120 / 200+. Faute de place, cultiver autant de plantes que possible, surveiller la perte de vigueur et renouveler avec des graines de la même variété venues d'ailleurs.",
  "src": [
   {
    "k": "concepts-osa-seed-saving-guide",
    "url": "https://seedalliance.org/wp-content/uploads/2010/04/seed_saving_guide.pdf",
    "loc": "p. 8–9, 'Population Size'; p. 25–27, Crop Specific Chart, column 'Minimum Population Size for Genetic Maintenance'"
   },
   {
    "k": "concepts-sse-guide-2017",
    "url": "https://shop.seedsavers.org/site/pdf/Seed%20Saving%20Guide_2017.pdf",
    "loc": "table, columns 'Population Size (Number of plants)'"
   },
   {
    "k": "concepts-sse-crop-chart",
    "url": "https://shop.seedsavers.org/site/pdf/crop_chart.pdf",
    "loc": "legend 'Population Size'"
   }
  ]
 },
 {
  "id": "isolation-distance",
  "title": {
   "en": "Isolation by distance",
   "fr": "Isolement par la distance"
  },
  "en": "An isolation distance is the minimum separation between two varieties of the same species needed to keep seed pure; only plants of the same species (sometimes close relatives or wild forms) are a risk, e.g. cabbage, kale, broccoli, Brussels sprouts and cauliflower are all Brassica oleracea, and carrot crosses with wild carrot. As a rule, self-pollinating crops need little distance and outcrossing crops much more; the Organic Seed Alliance adds that among outcrossers, insect-pollinated crops need less than wind-pollinated ones. Distances are never absolute: McCormack notes that each doubling of distance cuts outcrossing by about a factor of four, that barriers and staggered flowering allow somewhat less, and that beekeeping, rich pollinator fauna, organic growing or large plantings nearby require more.",
  "fr": "La distance d'isolement est l'écart minimal entre deux variétés d'une même espèce pour garder des semences pures ; seules les plantes de la même espèce (parfois des formes sauvages ou des espèces proches) posent problème : chou, chou frisé, brocoli, chou de Bruxelles et chou-fleur sont tous Brassica oleracea, et la carotte se croise avec la carotte sauvage. En règle générale, les autogames demandent peu de distance et les allogames beaucoup plus ; l'Organic Seed Alliance précise que, parmi les allogames, celles pollinisées par les insectes en demandent moins que celles pollinisées par le vent. Les distances ne sont jamais absolues : McCormack note que chaque doublement de la distance divise environ par quatre les croisements, que des haies ou un décalage de floraison permettent de la réduire un peu, et que l'apiculture, une faune pollinisatrice riche, la culture biologique ou de grandes parcelles voisines obligent à l'augmenter.",
  "src": [
   {
    "k": "concepts-mccormack-isolation",
    "url": "https://www.savingourseeds.org/pubs/isolation_distances_ver_1pt8.pdf",
    "loc": "PDF p. 3 'Isolation distance'; PDF p. 16 'Summary of isolation distance factors' and 'Weighting the adjustment factors'; PDF p. 18 note to Appendix A"
   },
   {
    "k": "concepts-osa-seed-saving-guide",
    "url": "https://seedalliance.org/wp-content/uploads/2010/04/seed_saving_guide.pdf",
    "loc": "p. 7 'Plants that can cross-pollinate with your seed crop'; p. 8 'Isolating with distance'"
   }
  ]
 },
 {
  "id": "isolation-distances-numbers",
  "title": {
   "en": "Typical isolation distances from seed-saving guides",
   "fr": "Distances d'isolement indicatives des guides de semences"
  },
  "en": "Numbers as the guides give them (home/garden use). Organic Seed Alliance (home use / commercial): very self-pollinating common bean, lettuce, pea, modern tomato 10 ft / 20 ft; potato-leaf or heirloom tomato 40 ft / 160-320 ft; sweet pepper 160 ft / 320-640 ft; fava bean, runner bean, okra, hot pepper 800 ft / 0.3-0.6 mi; insect-pollinated outcrossers (brassicas, carrot, onion, squash, cucumber, melon...) 1600 ft / 1-2 mi; wind-pollinated maize 1600 ft / 1-2 mi; wind-pollinated beet and spinach 3200 ft / 1-3 mi. Seed Savers Exchange 2017: self-pollinated crops (bean, pea, lettuce, wheat) 10-20 feet (3-6 m); tomato 10-50 feet (3-15 m); pepper and eggplant 300-1,600 feet (91-488 m); insect-pollinated crops (brassicas, carrot, squash, onion) 800 feet-1/2 mile (244-805 m); maize 800 feet-1/2 mile (244-805 m); beet, chard, spinach 800 feet-1 mile (244 m-1.6 km). McCormack (Virginia, minimum for home use): modern tomato 10'; common bean and pea 20'; lettuce 40'; Brassica oleracea, carrot, maize, cucurbits, onion 600'; beet, chard, spinach > 600'. The guides differ, and all say more distance is needed for absolute purity.",
  "fr": "Chiffres tels que donnés par les guides (usage domestique). Organic Seed Alliance (usage domestique / production commerciale) : haricot, laitue, pois et tomate moderne, très autogames, 10 ft / 20 ft ; tomate à feuille de pomme de terre ou ancienne 40 ft / 160-320 ft ; poivron 160 ft / 320-640 ft ; fève, haricot d'Espagne, gombo, piment fort 800 ft / 0.3-0.6 mi ; allogames pollinisées par les insectes (choux, carotte, oignon, courges, concombre, melon...) 1600 ft / 1-2 mi ; maïs (vent) 1600 ft / 1-2 mi ; betterave et épinard (vent) 3200 ft / 1-3 mi. Seed Savers Exchange 2017 : autogames (haricot, pois, laitue, blé) 10-20 feet (3-6 m) ; tomate 10-50 feet (3-15 m) ; poivron/piment et aubergine 300-1,600 feet (91-488 m) ; espèces pollinisées par les insectes (choux, carotte, courges, oignon) 800 feet-1/2 mile (244-805 m) ; maïs 800 feet-1/2 mile (244-805 m) ; betterave, blette, épinard 800 feet-1 mile (244 m-1.6 km). McCormack (Virginie, minimum pour usage domestique) : tomate moderne 10' ; haricot et pois 20' ; laitue 40' ; Brassica oleracea, carotte, maïs, cucurbitacées, oignon 600' ; betterave, blette, épinard > 600'. Les guides divergent, et tous disent qu'il faut plus de distance pour une pureté absolue. (1 ft = 0,3048 m ; 1 mi = 1,609 km.)",
  "src": [
   {
    "k": "concepts-osa-seed-saving-guide",
    "url": "https://seedalliance.org/wp-content/uploads/2010/04/seed_saving_guide.pdf",
    "loc": "p. 25–27, Crop Specific Chart, columns 'Minimum isolation distance for home use' and 'for commercial production'"
   },
   {
    "k": "concepts-sse-guide-2017",
    "url": "https://shop.seedsavers.org/site/pdf/Seed%20Saving%20Guide_2017.pdf",
    "loc": "table, column 'Recommended Isolation Distance for Seed Saving'"
   },
   {
    "k": "concepts-sse-crop-chart",
    "url": "https://shop.seedsavers.org/site/pdf/crop_chart.pdf",
    "loc": "table and legend 'Isolation Distance'"
   },
   {
    "k": "concepts-mccormack-isolation",
    "url": "https://www.savingourseeds.org/pubs/isolation_distances_ver_1pt8.pdf",
    "loc": "PDF p. 18, Appendix A 'Minimum Recommended Isolation Distances for Virginia-Grown Seed Crops', column 'Min. for home use'"
   }
  ]
 },
 {
  "id": "isolation-time",
  "title": {
   "en": "Isolation in time",
   "fr": "Isolement dans le temps"
  },
  "en": "Two varieties of the same species can be kept apart by making sure they do not flower at the same time: the first must finish its pollination before the second starts flowering. This works well for annuals such as maize, sunflower, basil, lettuce and okra; McCormack sows an early maize variety and a late one three weeks later. Weather can make the flowering periods overlap, in which case the last buds of the early variety or the first buds of the late one have to be removed.",
  "fr": "On peut séparer deux variétés d'une même espèce en faisant en sorte qu'elles ne fleurissent pas en même temps : la première doit avoir terminé sa pollinisation avant que la seconde commence à fleurir. Cela marche bien pour des annuelles comme le maïs, le tournesol, le basilic, la laitue ou le gombo ; McCormack sème une variété de maïs précoce puis une tardive trois semaines plus tard. La météo peut faire se chevaucher les floraisons ; il faut alors supprimer les derniers boutons de la variété précoce ou les premiers de la tardive.",
  "src": [
   {
    "k": "concepts-osa-seed-saving-guide",
    "url": "https://seedalliance.org/wp-content/uploads/2010/04/seed_saving_guide.pdf",
    "loc": "p. 7, 'Isolating with time'"
   },
   {
    "k": "concepts-mccormack-isolation",
    "url": "https://www.savingourseeds.org/pubs/isolation_distances_ver_1pt8.pdf",
    "loc": "PDF p. 15, 'Isolate in time (staggered blooming times)'"
   }
  ]
 },
 {
  "id": "isolation-barriers-bagging",
  "title": {
   "en": "Barriers, bagging, cages and hand pollination",
   "fr": "Barrières, ensachage, cages et pollinisation manuelle"
  },
  "en": "When distance or timing is not possible, pollen can be blocked physically. Dense hedges, tall barrier crops (maize, sorghum, sunflower), woods, hills or buildings only partly stop wind and insects; paper or cloth bags over flowers and fine-mesh cages over plants can almost eliminate foreign pollen. Bags and cages have costs: the flowers must then be pollinated by hand or by insects put inside (carrot seed growers release flies), and they make it harder to keep a large population. Alternate-day caging lets two or three varieties flowering together share pollinators: each day only one is uncovered, and all are covered at night.",
  "fr": "Quand la distance ou le décalage de floraison ne sont pas possibles, on bloque le pollen physiquement. Des haies denses, des cultures-barrières hautes (maïs, sorgho, tournesol), des bois, des collines ou des bâtiments n'arrêtent qu'en partie le vent et les insectes ; des sacs en papier ou en tissu sur les fleurs et des cages à maille fine sur les plantes peuvent presque éliminer le pollen étranger. Sacs et cages ont un coût : il faut alors polliniser à la main ou introduire des insectes (les producteurs de semences de carotte lâchent des mouches), et il devient plus difficile de garder un grand nombre de plantes. Le « cageage alterné » permet à deux ou trois variétés fleurissant ensemble de partager les pollinisateurs : chaque jour une seule est découverte, et toutes sont couvertes la nuit.",
  "src": [
   {
    "k": "concepts-osa-seed-saving-guide",
    "url": "https://seedalliance.org/wp-content/uploads/2010/04/seed_saving_guide.pdf",
    "loc": "p. 7, 'Isolating with physical barriers'"
   },
   {
    "k": "concepts-mccormack-isolation",
    "url": "https://www.savingourseeds.org/pubs/isolation_distances_ver_1pt8.pdf",
    "loc": "PDF p. 14 'Use barrier crops'; PDF p. 16–17 'Mechanical isolation' (caging, alternate-day caging, hand pollination)"
   }
  ]
 },
 {
  "id": "true-to-type",
  "title": {
   "en": "True to type",
   "fr": "Conforme au type (« fidèle au semis »)"
  },
  "en": "A seed is 'true to type' (comes true from seed) when the plant it gives looks and behaves like the variety it came from. This is the case for open-pollinated varieties of self-pollinating crops kept in isolation, for pure lines (homozygous plants reproduced by selfing), and for apomictic plants whose seeds are clones of the mother. It is not the case for seed of F1 hybrids, for outcrossing crops that were not isolated, or for most fruit trees: seeds of a 'McIntosh' apple do not grow into 'McIntosh' trees.",
  "fr": "Une graine est « conforme au type » quand la plante qu'elle donne ressemble à la variété dont elle est issue et se comporte comme elle. C'est le cas des variétés population (à pollinisation libre) d'espèces autogames cultivées isolément, des lignées pures (plantes homozygotes reproduites par autofécondation) et des plantes apomictiques, dont les graines sont des clones de la mère. Ce n'est pas le cas des graines d'hybrides F1, des allogames non isolées, ni de la plupart des arbres fruitiers : les pépins d'une pomme 'McIntosh' ne donnent pas des pommiers 'McIntosh'.",
  "src": [
   {
    "k": "concepts-osa-seed-saving-guide",
    "url": "https://seedalliance.org/wp-content/uploads/2010/04/seed_saving_guide.pdf",
    "loc": "p. 4, 'Open Pollinated Varieties and Hybrid Varieties'"
   },
   {
    "k": "concepts-semae-lexique",
    "url": "https://www.semae-pedagogie.org/lexique/",
    "loc": "entries 'Lignée', 'Homozygote', 'Clone'"
   },
   {
    "k": "concepts-hand-koltunow-2014",
    "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC4063905/",
    "loc": "Introduction (progeny genetically identical to the maternal plant)"
   },
   {
    "k": "concepts-unh-grafting",
    "url": "https://extension.unh.edu/resource/growing-fruit-grafting-fruit-trees-home-orchard-fact-sheet",
    "loc": "first paragraph"
   }
  ]
 },
 {
  "id": "open-pollinated-vs-f1",
  "title": {
   "en": "Open-pollinated vs F1 hybrid seed",
   "fr": "Variétés population vs hybrides F1"
  },
  "en": "Open-pollinated (OP) varieties come from parents that are genetically similar and share the variety's traits, so saved seed gives plants much like the parents; the Organic Seed Alliance's example is the bean 'Kentucky Wonder'. F1 hybrids come from a controlled cross between two genetically distinct parents; their seed is uniform and often benefits from hybrid vigour, but seed saved from them gives very mixed offspring (few plants grown from saved 'Early Girl' tomato seed resemble 'Early Girl'). Unless you want to start a breeding project, do not save seed from F1 hybrids. In cabbage-family crops, self-incompatibility genes (S-haplotypes) are used in F1 hybrid seed production.",
  "fr": "Les variétés population (à pollinisation libre, « OP ») proviennent de parents génétiquement proches qui partagent les caractères de la variété : les graines récoltées donnent des plantes très semblables aux parents ; l'exemple de l'Organic Seed Alliance est le haricot 'Kentucky Wonder'. Les hybrides F1 proviennent d'un croisement contrôlé entre deux parents génétiquement éloignés ; leurs graines sont homogènes et profitent souvent de la vigueur hybride, mais les graines récoltées sur eux donnent une descendance très hétérogène (peu de plantes issues de graines de la tomate 'Early Girl' ressemblent à 'Early Girl'). Sauf pour un projet de sélection, ne pas ressemer les graines d'hybrides F1. Chez les choux et apparentés, les gènes d'auto-incompatibilité (haplotypes S) servent à la production de semences hybrides F1.",
  "src": [
   {
    "k": "concepts-osa-seed-saving-guide",
    "url": "https://seedalliance.org/wp-content/uploads/2010/04/seed_saving_guide.pdf",
    "loc": "p. 4, 'Open Pollinated Varieties and Hybrid Varieties'"
   },
   {
    "k": "concepts-semae-lexique",
    "url": "https://www.semae-pedagogie.org/lexique/",
    "loc": "entries 'Hybride', 'Hétérosis'"
   },
   {
    "k": "concepts-kitashiba-2014-brassica",
    "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC4031107/",
    "loc": "section on S-haplotype identification (use for F1 hybrid breeding and seed purity tests)"
   }
  ]
 },
 {
  "id": "fruit-trees-grafting",
  "title": {
   "en": "Why fruit trees are grafted",
   "fr": "Pourquoi les arbres fruitiers sont greffés"
  },
  "en": "Most perennial fruit trees are self-incompatible, so every seed is the product of a cross, and they are highly heterozygous: each tree carries two different versions of many genes, which are reshuffled in its seeds. A seedling is therefore a new, unpredictable genotype rather than a copy of the variety. To multiply a named cultivar, a piece of it (the scion) is grafted onto a rootstock, giving a clone of the cultivar; grafting is also used because cuttings of most fruit trees root poorly. Grafting is normally limited to the same species (most apples graft on each other, but an apple will not take on a pear rootstock), and the rootstock controls tree size, hardiness and how early it bears.",
  "fr": "La plupart des arbres fruitiers vivaces sont auto-incompatibles, donc chaque graine est issue d'un croisement, et ils sont très hétérozygotes : chaque arbre porte deux versions différentes de nombreux gènes, qui sont rebrassées dans ses pépins ou noyaux. Un semis est donc un génotype nouveau et imprévisible, pas une copie de la variété. Pour multiplier un cultivar nommé, on greffe un fragment de celui-ci (le greffon) sur un porte-greffe, ce qui donne un clone du cultivar ; on greffe aussi parce que les boutures de la plupart des fruitiers s'enracinent mal. La greffe se fait normalement au sein d'une même espèce (les pommiers se greffent entre eux, mais un pommier ne prend pas sur un porte-greffe de poirier), et le porte-greffe détermine la taille de l'arbre, sa rusticité et sa précocité de mise à fruit.",
  "src": [
   {
    "k": "concepts-liu-2022-apple",
    "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC9330611/",
    "loc": "Abstract; section on genetic variation of perennial fruit trees"
   },
   {
    "k": "concepts-unh-grafting",
    "url": "https://extension.unh.edu/resource/growing-fruit-grafting-fruit-trees-home-orchard-fact-sheet",
    "loc": "first paragraph and 'Choice of rootstock'"
   },
   {
    "k": "concepts-semae-lexique",
    "url": "https://www.semae-pedagogie.org/lexique/",
    "loc": "entries 'Hétérozygotie', 'Clone'"
   }
  ]
 },
 {
  "id": "juvenility",
  "title": {
   "en": "Juvenility of seedlings",
   "fr": "Phase juvénile des semis"
  },
  "en": "A tree grown from seed must pass through a juvenile phase during which it cannot flower. Schlathölter et al. (2018) give 4-5 years in general for apple, sometimes up to 12 years; 3-5 years for almond, sweet cherry and peach; 5-10 years for citrus; 3-7 years for plum. Grafted trees avoid the long wait from seed, and dwarfing rootstocks are also precocious: on M.26, an apple may carry some fruit the year after planting (UNH).",
  "fr": "Un arbre issu de semis passe d'abord par une phase juvénile pendant laquelle il ne peut pas fleurir. Schlathölter et al. (2018) indiquent en général 4-5 ans pour le pommier, parfois jusqu'à 12 ans ; 3-5 ans pour l'amandier, le cerisier doux et le pêcher ; 5-10 ans pour les agrumes ; 3-7 ans pour le prunier. Les arbres greffés évitent cette longue attente, et les porte-greffes nanisants sont en plus précoces : sur M.26, un pommier peut porter quelques fruits dès l'année qui suit la plantation (UNH).",
  "src": [
   {
    "k": "concepts-schlatholter-2018-apple",
    "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC5945749/",
    "loc": "Introduction (juvenile phase durations)"
   },
   {
    "k": "concepts-unh-grafting",
    "url": "https://extension.unh.edu/resource/growing-fruit-grafting-fruit-trees-home-orchard-fact-sheet",
    "loc": "'Choice of rootstock' (precocious dwarf rootstocks; M.26)"
   }
  ]
 },
 {
  "id": "taxonomic-ranks",
  "title": {
   "en": "Ranks for gardeners",
   "fr": "Les rangs taxonomiques pour le jardinier"
  },
  "en": "The botanical code (ICN, Shenzhen Code 2018) sets the main ranks in descending order; the ones a gardener meets are family, genus, species, then below species subspecies (subsp.), variety (varietas, var.) and form (forma, f.). Art. 3.1 lists family, genus and species among the principal ranks; Art. 4.1 adds secondary ranks such as tribe, section, series, variety and form; Art. 4.2 lets 'sub-' be added (subfamily, subgenus, subspecies...). The name of a taxon below species joins the species name, a connecting term showing the rank, and an epithet (Art. 24.1), e.g. Taxus baccata var. variegata. Cultivars are not ranks of this code: they belong to a separate code (ICNCP).",
  "fr": "Le code de nomenclature botanique (ICN, Code de Shenzhen 2018) fixe les rangs principaux dans l'ordre décroissant ; ceux que rencontre le jardinier sont la famille, le genre, l'espèce, puis sous l'espèce la sous-espèce (subsp.), la variété (varietas, var.) et la forme (forma, f.). L'art. 3.1 range famille, genre et espèce parmi les rangs principaux ; l'art. 4.1 ajoute des rangs secondaires comme la tribu, la section, la série, la variété et la forme ; l'art. 4.2 permet d'ajouter « sous- » (sous-famille, sous-genre, sous-espèce...). Le nom d'un taxon infraspécifique associe le nom de l'espèce, un terme de rang et une épithète (art. 24.1), par exemple Taxus baccata var. variegata. Les cultivars ne sont pas des rangs de ce code : ils relèvent d'un code distinct (CINPC/ICNCP).",
  "src": [
   {
    "k": "icn",
    "url": "https://www.iapt-taxon.org/nomen/pages/main/art_3.html",
    "loc": "Art. 3.1"
   },
   {
    "k": "icn",
    "url": "https://www.iapt-taxon.org/nomen/pages/main/art_4.html",
    "loc": "Art. 4.1, 4.2"
   },
   {
    "k": "icn",
    "url": "https://www.iapt-taxon.org/nomen/pages/main/art_24.html",
    "loc": "Art. 24.1"
   },
   {
    "k": "icn",
    "url": "https://www.iapt-taxon.org/nomen/pages/main/art_28.html",
    "loc": "Art. 28 Note 2, Ex. 1"
   }
  ]
 },
 {
  "id": "binomial",
  "title": {
   "en": "Binomial: genus + specific epithet",
   "fr": "Binôme : genre + épithète spécifique"
  },
  "en": "A species name is a binary combination: the genus name followed by a single specific epithet (ICN Art. 23.1), e.g. Cornus sanguinea or Papaver rhoeas. The epithet alone ('sanguinea') is not a name; plants that share both parts belong to the same species and can usually cross, which is why cabbage, broccoli, kale, Brussels sprouts and cauliflower (all Brassica oleracea) must be isolated from one another for seed saving. An epithet may not simply repeat the genus name (Art. 23.4).",
  "fr": "Le nom d'une espèce est une combinaison binaire : le nom du genre suivi d'une seule épithète spécifique (ICN, art. 23.1), par exemple Cornus sanguinea ou Papaver rhoeas. L'épithète seule (« sanguinea ») n'est pas un nom ; les plantes qui partagent les deux parties appartiennent à la même espèce et peuvent en général se croiser, d'où la nécessité d'isoler entre eux chou, brocoli, chou frisé, chou de Bruxelles et chou-fleur (tous Brassica oleracea) pour produire leurs graines. L'épithète ne peut pas simplement répéter le nom de genre (art. 23.4).",
  "src": [
   {
    "k": "icn",
    "url": "https://www.iapt-taxon.org/nomen/pages/main/art_23.html",
    "loc": "Art. 23.1, Ex. 1; Art. 23.4"
   },
   {
    "k": "concepts-osa-seed-saving-guide",
    "url": "https://seedalliance.org/wp-content/uploads/2010/04/seed_saving_guide.pdf",
    "loc": "p. 7, 'Plants that can cross-pollinate with your seed crop'"
   }
  ]
 },
 {
  "id": "botanical-variety",
  "title": {
   "en": "Botanical variety (var.)",
   "fr": "Variété botanique (var.)"
  },
  "en": "In botany, variety (varietas, abbreviated var.) is a rank below species and subspecies under the ICN (Art. 4). It names a natural group, wild or brought from the wild, written in italics with 'var.' in roman: e.g. Actinidia chinensis var. chinensis. It is not the same thing as a cultivar, although cultivars can be selected within any subspecies, variety or form. When a taxon named as a variety is better treated as a cultivar, its epithet becomes a cultivar epithet in single quotes: Taxus baccata var. variegata becomes Taxus baccata 'Variegata' (ICN Art. 28 Note 4).",
  "fr": "En botanique, la variété (varietas, abrégé var.) est un rang situé sous l'espèce et la sous-espèce selon l'ICN (art. 4). Elle désigne un groupe naturel, sauvage ou issu de la nature, écrit en italique avec « var. » en romain : par exemple Actinidia chinensis var. chinensis. Ce n'est pas la même chose qu'un cultivar, même si des cultivars peuvent être sélectionnés au sein de n'importe quelle sous-espèce, variété ou forme. Quand un taxon nommé comme variété est mieux traité comme cultivar, son épithète devient une épithète de cultivar entre guillemets simples : Taxus baccata var. variegata devient Taxus baccata 'Variegata' (ICN, art. 28, note 4).",
  "src": [
   {
    "k": "icn",
    "url": "https://www.iapt-taxon.org/nomen/pages/main/art_4.html",
    "loc": "Art. 4.1, 4.2"
   },
   {
    "k": "icn",
    "url": "https://www.iapt-taxon.org/nomen/pages/main/art_28.html",
    "loc": "Art. 28.1; Note 4, Ex. 1"
   },
   {
    "k": "concepts-ncsu-nomenclature",
    "url": "https://extensiongardener.ces.ncsu.edu/extension-gardener-plant-toolbox/the-nomenclature-of-horticultural-plants-an-explanation/",
    "loc": "section 'The Cultivar'"
   },
   {
    "k": "concepts-fraser-2009-kiwifruit",
    "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC2661093/",
    "loc": "Background (Actinidia chinensis var. chinensis 'Hort16A')"
   }
  ]
 },
 {
  "id": "cultivar",
  "title": {
   "en": "Cultivar (cultivated variety)",
   "fr": "Cultivar (variété cultivée)"
  },
  "en": "A cultivar is the basic category of the International Code of Nomenclature for Cultivated Plants (ICNCP), separate from the botanical code (ICN Art. 28 Note 2). It is a group of plants selected for one or more characters, distinct, uniform and stable in them, which keeps them when propagated by the appropriate means (seed for a pure line, grafting or cuttings for a fruit tree clone). Its origin, wild selection or bred, does not matter. The cultivar epithet is written in single quotation marks, not in italics, with capital initials: Cornus florida 'Ozark Spring', Actinidia chinensis var. chinensis 'Hort16A'. The older 'cv.' prefix should be replaced by quotes, and epithets coined since 1 January 1959 may not be wholly Latin.",
  "fr": "Le cultivar est la catégorie de base du Code international de nomenclature des plantes cultivées (CINPC/ICNCP), distinct du code botanique (ICN, art. 28, note 2). C'est un ensemble de plantes sélectionnées pour un ou plusieurs caractères, distinctes, homogènes et stables pour ces caractères, qui les conservent quand on les multiplie de la façon appropriée (graines pour une lignée pure, greffe ou bouture pour un clone de fruitier). Son origine, sélection dans la nature ou obtention, n'a pas d'importance. L'épithète de cultivar s'écrit entre guillemets simples, pas en italique, avec des majuscules initiales : Cornus florida 'Ozark Spring', Actinidia chinensis var. chinensis 'Hort16A'. L'ancien préfixe « cv. » est à remplacer par les guillemets, et les épithètes créées depuis le 1er janvier 1959 ne peuvent pas être entièrement latines.",
  "src": [
   {
    "k": "icn",
    "url": "https://www.iapt-taxon.org/nomen/pages/main/art_28.html",
    "loc": "Art. 28 Notes 2, 4 and 5"
   },
   {
    "k": "concepts-ncsu-nomenclature",
    "url": "https://extensiongardener.ces.ncsu.edu/extension-gardener-plant-toolbox/the-nomenclature-of-horticultural-plants-an-explanation/",
    "loc": "introduction and section 'The Cultivar'"
   },
   {
    "k": "concepts-fraser-2009-kiwifruit",
    "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC2661093/",
    "loc": "Background ('Hort16A')"
   }
  ]
 },
 {
  "id": "cultivar-group",
  "title": {
   "en": "Cultivar Group",
   "fr": "Groupe de cultivars"
  },
  "en": "A Group (cultivar group) is a formal ICNCP category gathering cultivars or plants that share characters useful to growers. It is written with capitals and the word 'Group', and placed in parentheses before a cultivar epithet: Fagus sylvatica (Atropurpurea Group) 'Riversii', Solanum tuberosum (Maincrop Group) 'Desiree'. A cultivar may belong to more than one Group if that is useful (the same potato can be in a Red-skinned Group too). Breeders' 'series' are often the commercial equivalent.",
  "fr": "Un Groupe (groupe de cultivars) est une catégorie formelle du CINPC qui réunit des cultivars ou des plantes partageant des caractères utiles aux cultivateurs. Il s'écrit avec des majuscules et le mot « Group(e) », entre parenthèses avant l'épithète de cultivar : Fagus sylvatica (Atropurpurea Group) 'Riversii', Solanum tuberosum (Maincrop Group) 'Desiree'. Un cultivar peut appartenir à plusieurs Groupes si c'est utile (la même pomme de terre peut aussi être dans un groupe « à peau rouge »). Les « séries » des obtenteurs en sont souvent l'équivalent commercial.",
  "src": [
   {
    "k": "concepts-ncsu-nomenclature",
    "url": "https://extensiongardener.ces.ncsu.edu/extension-gardener-plant-toolbox/the-nomenclature-of-horticultural-plants-an-explanation/",
    "loc": "section 'The Group'"
   }
  ]
 },
 {
  "id": "upov-variety",
  "title": {
   "en": "Plant variety in the UPOV sense",
   "fr": "La variété au sens de l'UPOV"
  },
  "en": "The UPOV Convention (1991 Act, Art. 1(vi)) defines a 'variety' as a plant grouping within a single botanical taxon of the lowest known rank that can be defined by the characteristics resulting from its genotype(s), distinguished from any other grouping by at least one of them, and considered as a unit with regard to its suitability for being propagated unchanged. The definition applies whether or not the variety can be protected; a variety cannot mix plants of several species, and a single plant, a trait or a technique is not a variety. In French the same article reads: « ensemble végétal d'un taxon botanique du rang le plus bas connu ».",
  "fr": "La Convention UPOV (Acte de 1991, art. 1.vi) définit la « variété » comme un ensemble végétal d'un taxon botanique du rang le plus bas connu qui peut être défini par l'expression des caractères résultant d'un génotype (ou d'une combinaison de génotypes), distingué de tout autre ensemble par au moins un de ces caractères, et considéré comme une entité eu égard à son aptitude à être reproduit conforme. La définition vaut que la variété soit protégeable ou non ; une variété ne peut pas mélanger des plantes de plusieurs espèces, et une plante isolée, un caractère ou une technique ne sont pas des variétés.",
  "src": [
   {
    "k": "upov",
    "url": "https://www.upov.int/documents/d/upov/explanatory-notes-en-upov_exn_var.pdf",
    "loc": "UPOV/EXN/VAR/1 (2010), p. 4, reproducing Art. 1(vi) of the 1991 Act; p. 4–5 paras 4–6"
   },
   {
    "k": "upov",
    "url": "https://www.upov.int/documents/d/upov/explanatory-notes-fr-upov_exn_var.pdf",
    "loc": "UPOV/EXN/VAR/1 (French), p. 4, 'Article premier, Définition, vi)'"
   }
  ]
 },
 {
  "id": "variete-fr",
  "title": {
   "en": "'Variété' in French seed catalogues",
   "fr": "La « variété » des catalogues de semences"
  },
  "en": "In French seed and nursery catalogues and in the Official Catalogue, « variété » means a cultivated variety, i.e. a cultivar in the ICNCP sense or a 'variety' in the UPOV sense, not the botanical rank var. SEMAE's glossary defines it as an artificial population obtained for agricultural use, reproducible, homogeneous and stable in its genetic characters and distinct from other varieties; to be listed in the Official Catalogue it must pass DUS tests (distinctness, uniformity, stability). So a tomato « variété » in a seed catalogue is a cultivar, whereas a name containing 'var.' is a botanical variety. English uses 'variety' with the same double meaning, which the NC State guide advises avoiding for cultivars.",
  "fr": "Dans les catalogues de graines et de pépinières et au Catalogue officiel, « variété » désigne une variété cultivée, c'est-à-dire un cultivar au sens du CINPC ou une « variété » au sens de l'UPOV, et non le rang botanique var. Le lexique de SEMAE la définit comme une population artificielle obtenue en vue d'un usage agricole, reproductible, homogène et stable dans ses caractéristiques génétiques et distincte des autres variétés ; pour être inscrite au Catalogue officiel elle doit passer les épreuves DHS (distinction, homogénéité, stabilité). Une « variété » de tomate dans un catalogue de graines est donc un cultivar, tandis qu'un nom contenant « var. » désigne une variété botanique. L'anglais emploie « variety » avec le même double sens, que le guide de NC State conseille d'éviter pour les cultivars.",
  "src": [
   {
    "k": "concepts-semae-lexique",
    "url": "https://www.semae-pedagogie.org/lexique/",
    "loc": "entries 'Variété' and 'DHS'"
   },
   {
    "k": "concepts-semae-inscription",
    "url": "https://www.semae-pedagogie.org/inscription-varietes-catalogue-officiel/",
    "loc": "'Les études « DHS »'"
   },
   {
    "k": "upov",
    "url": "https://www.upov.int/documents/d/upov/explanatory-notes-en-upov_exn_var.pdf",
    "loc": "p. 4, Art. 1(vi)"
   },
   {
    "k": "concepts-ncsu-nomenclature",
    "url": "https://extensiongardener.ces.ncsu.edu/extension-gardener-plant-toolbox/the-nomenclature-of-horticultural-plants-an-explanation/",
    "loc": "section 'The Cultivar' (colloquial 'varieties')"
   }
  ]
 },
 {
  "id": "hybrid-formula-nothospecies",
  "title": {
   "en": "Hybrid formula and nothospecies (×)",
   "fr": "Formule d'hybride et nothoespèce (×)"
  },
  "en": "Hybridity is shown by the multiplication sign × or the prefix 'notho-' (ICN Art. H.1.1). A hybrid formula simply joins the parents' names with ×, e.g. Salix aurita × S. caprea (Art. H.2.1; the female parent may be put first). A hybrid can also receive its own name as a nothotaxon: × goes before the epithet of an interspecific hybrid (a nothospecies, e.g. Mentha ×smithiana) or before the name of an intergeneric hybrid (×Agropogon) (Art. H.3.1); the × is ignored for homonymy (Art. H.3.3), and plants of hybrid origin need not be named as nothotaxa (H.3 Note 1). Example for fruit growers: IPNI records the jostaberry name as Ribes × nidigrolaria Rud.Bauer & A.Bauer (1989), flagged as a hybrid, whereas the WFO Plant List (2026-06) has it as 'Ribes nidigrolaria', unplaced.",
  "fr": "Le caractère hybride s'indique par le signe de multiplication × ou le préfixe « notho- » (ICN, art. H.1.1). Une formule d'hybride relie simplement les noms des parents par ×, par exemple Salix aurita × S. caprea (art. H.2.1 ; on peut placer le parent femelle en premier). Un hybride peut aussi recevoir un nom propre, comme nothotaxon : le × se place avant l'épithète d'un hybride entre espèces (une nothoespèce, par ex. Mentha ×smithiana) ou avant le nom d'un hybride entre genres (×Agropogon) (art. H.3.1) ; le × est ignoré pour l'homonymie (art. H.3.3), et des plantes d'origine hybride ne sont pas obligatoirement nommées comme nothotaxons (H.3, note 1). Exemple fruitier : l'IPNI enregistre le nom du josta comme Ribes × nidigrolaria Rud.Bauer & A.Bauer (1989), marqué hybride, alors que la WFO Plant List (2026-06) le donne comme « Ribes nidigrolaria », non placé.",
  "src": [
   {
    "k": "icn",
    "url": "https://www.iapt-taxon.org/nomen/pages/main/art_h1.html",
    "loc": "Art. H.1.1"
   },
   {
    "k": "icn",
    "url": "https://www.iapt-taxon.org/nomen/pages/main/art_h2.html",
    "loc": "Art. H.2.1, Rec. H.2A.1"
   },
   {
    "k": "icn",
    "url": "https://www.iapt-taxon.org/nomen/pages/main/art_h3.html",
    "loc": "Art. H.3.1, H.3.3, Note 1"
   },
   {
    "k": "concepts-ipni",
    "url": "https://www.ipni.org/n/939018-1",
    "loc": "name record 939018-1 (hybrid: true)"
   },
   {
    "k": "wfo",
    "url": "https://list.worldfloraonline.org/wfo-0000405164",
    "loc": "wfo-0000405164, role 'unplaced', classification 2026-06"
   }
  ]
 },
 {
  "id": "aggregate",
  "title": {
   "en": "Aggregate (agg.)",
   "fr": "Agrégat (agg.)"
  },
  "en": "'agg.' after a name (e.g. Rubus fruticosus agg., bramble) means a species aggregate: a convenient label for a group of closely similar species, often apomictic 'microspecies', that only specialists can tell apart. It is an informal grouping, not one of the ranks listed in ICN Art. 4. The bramble aggregate counts more than 330 microspecies in Britain and Ireland (353 in the latest count cited by BSBI) and over 2,000 worldwide; their apomictic, often pseudogamous seed production fixes each variant as a clonal line.",
  "fr": "« agg. » après un nom (par ex. Rubus fruticosus agg., la ronce) signifie un agrégat d'espèces : une étiquette commode pour un groupe d'espèces très proches, souvent des « microespèces » apomictiques que seuls des spécialistes savent distinguer. C'est un regroupement informel, qui ne fait pas partie des rangs énumérés à l'art. 4 de l'ICN. L'agrégat des ronces compte plus de 330 microespèces en Grande-Bretagne et Irlande (353 dans le dernier décompte cité par la BSBI) et plus de 2 000 dans le monde ; leur production de graines apomictique, souvent pseudogame, fixe chaque variante en lignée clonale.",
  "src": [
   {
    "k": "concepts-bsbi-rubus-agg",
    "url": "https://bsbi.org/in-your-area/local-botany/co-fermanagh/fermanagh-species-accounts/rubus-fruticosus-l-agg",
    "loc": "account summary; 'Variation, apomixis and taxonomic difficulties'"
   },
   {
    "k": "icn",
    "url": "https://www.iapt-taxon.org/nomen/pages/main/art_4.html",
    "loc": "Art. 4.2 (list of ranks)"
   }
  ]
 },
 {
  "id": "powo",
  "title": {
   "en": "POWO (Plants of the World Online)",
   "fr": "POWO (Plants of the World Online)"
  },
  "en": "POWO (Plants of the World Online) is the Royal Botanic Gardens, Kew's online portal for the world's plants. Its taxonomic index is the World Checklist of Vascular Plants (WCVP), a continuously updated checklist compiled from Kew's name and taxon resources with expert review; WCVP follows APG IV for flowering-plant families.",
  "fr": "POWO (Plants of the World Online) est le portail en ligne des Jardins botaniques royaux de Kew consacré aux plantes du monde. Son index taxonomique est la World Checklist of Vascular Plants (WCVP), liste mise à jour en continu à partir des ressources de noms et de taxons de Kew, avec relecture par des experts ; la WCVP suit APG IV pour les familles de plantes à fleurs.",
  "src": [
   {
    "k": "concepts-govaerts-2021-wcvp",
    "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC8363670/",
    "loc": "Background & Summary; Methods (WCVP as taxonomic index to POWO; families follow APG IV)"
   }
  ]
 },
 {
  "id": "wfo",
  "title": {
   "en": "WFO (World Flora Online)",
   "fr": "WFO (World Flora Online)"
  },
  "en": "World Flora Online is an open-access online flora of all known plants, started in 2012 by the Missouri Botanical Garden, the New York Botanical Garden, the Royal Botanic Garden Edinburgh and Kew to meet Target 1 of the Global Strategy for Plant Conservation, and now run by a consortium of more than 50 institutions. Its WFO Plant List gives the accepted name and synonyms of each taxon, with citable snapshots every 21 June and 21 December; names marked 'unplaced' are not yet in the classification. Govaerts et al. (2021) report that WCVP (the list behind POWO) was replacing The Plant List as WFO's default for taxa not covered by WFO's expert networks, so the two often agree, but not always.",
  "fr": "World Flora Online est une flore en ligne en libre accès de toutes les plantes connues, lancée en 2012 par le Missouri Botanical Garden, le New York Botanical Garden, le Royal Botanic Garden Edinburgh et Kew pour atteindre l'objectif 1 de la Stratégie mondiale pour la conservation des plantes, et gérée aujourd'hui par un consortium de plus de 50 institutions. Sa WFO Plant List donne le nom accepté et les synonymes de chaque taxon, avec des versions citables chaque 21 juin et 21 décembre ; les noms marqués « unplaced » ne sont pas encore placés dans la classification. Selon Govaerts et al. (2021), la WCVP (la liste qui sert à POWO) remplaçait The Plant List comme référence par défaut de WFO pour les taxons non couverts par ses réseaux d'experts : les deux concordent donc souvent, mais pas toujours.",
  "src": [
   {
    "k": "wfo",
    "url": "https://about.worldfloraonline.org/who-we-are",
    "loc": "'Who we are'"
   },
   {
    "k": "wfo",
    "url": "https://about.worldfloraonline.org/faqs",
    "loc": "FAQs (GSPC Target 1, consortium)"
   },
   {
    "k": "wfo",
    "url": "https://wfoplantlist.org/about",
    "loc": "WFO Plant List introduction (snapshots, 'unplaced')"
   },
   {
    "k": "concepts-govaerts-2021-wcvp",
    "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC8363670/",
    "loc": "WCVP replacing TPL 1.1 as taxonomic default for WFO"
   }
  ]
 },
 {
  "id": "apg4",
  "title": {
   "en": "APG IV",
   "fr": "APG IV"
  },
  "en": "APG IV (Angiosperm Phylogeny Group, 2016) is the update of the Angiosperm Phylogeny Group classification of the orders and families of flowering plants, revised from new phylogenetic results published since APG III. It recognises 64 orders and 416 families and is the family framework followed by WCVP/POWO; it classifies orders and families, not species.",
  "fr": "APG IV (Angiosperm Phylogeny Group, 2016) est la mise à jour de la classification des ordres et familles de plantes à fleurs du Angiosperm Phylogeny Group, révisée d'après les résultats phylogénétiques publiés depuis APG III. Elle reconnaît 64 ordres et 416 familles et sert de cadre pour les familles dans WCVP/POWO ; elle classe ordres et familles, pas les espèces.",
  "src": [
   {
    "k": "apg4",
    "url": "https://europepmc.org/article/AGR/IND605189905",
    "loc": "abstract (Bot. J. Linn. Soc. 181: 1–20, doi:10.1111/boj.12385)"
   },
   {
    "k": "concepts-govaerts-2021-wcvp",
    "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC8363670/",
    "loc": "Methods (flowering plant families follow APG IV)"
   }
  ]
 }
];
