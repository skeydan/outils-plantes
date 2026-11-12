// Cuttings and layering: the five kinds of cutting, the factors that decide
// success, four layering methods, fourteen species with a cutting protocol and
// a layering protocol (or the reason there is none), common confusions and the
// corrections to the course notes. Every factual claim points to sources.js.

export const CUT_TYPES = [
  {
    id: 'soft',
    name: { en: 'Softwood cutting', fr: 'Bouture herbacée' },
    short: { en: 'Tender current-year shoot, in leaf', fr: 'Pousse tendre de l’année, feuillée' },
    when: { en: 'Late spring to early summer, while the shoot is still growing.', fr: 'Fin printemps au début de l’été, tant que la pousse grandit encore.' },
    detail: {
      en: 'The most demanding and the fastest. The stem is soft, the leaves lose water quickly, so it needs mist, shade and a drained medium. Roots form in two to six weeks. One half-leaf is often enough: more leaf means more water loss.',
      fr: 'La plus exigeante et la plus rapide. La tige est tendre, les feuilles perdent vite leur eau : il faut de la brumisation, de l’ombre et un substrat drainant. Les racines viennent en deux à six semaines. Une demi-feuille suffit souvent : plus de feuilles signifie plus de perte d’eau.',
    },
    src: ['rhs-softwood', 'hartmann2011'],
  },
  {
    id: 'semi',
    name: { en: 'Semi-hardwood cutting', fr: 'Bouture semi-aoûtée' },
    short: { en: 'Current-year shoot beginning to harden, in leaf', fr: 'Pousse de l’année qui commence à durcir, feuillée' },
    when: { en: 'Late summer to early autumn, after the first growth has hardened.', fr: 'Fin été au début de l’automne, après durcissement de la première pousse.' },
    detail: {
      en: 'The workhorse of woody plants. The base is firm, the tip still flexible; leaves are kept but reduced. It roots under mist or a plastic cover in four to ten weeks, depending on the species and on bottom heat.',
      fr: 'La méthode de base des ligneux. La base est ferme, le sommet encore souple ; on garde des feuilles, réduites. L’enracinement se fait sous brumisation ou sous film plastique en quatre à dix semaines, selon l’espèce et la chaleur de fond.',
    },
    src: ['rhs-semi', 'hartmann2011'],
  },
  {
    id: 'hard',
    name: { en: 'Hardwood cutting', fr: 'Bouture aoûtée (bois dormant)' },
    short: { en: 'Mature leafless shoot taken in dormancy', fr: 'Pousse mûre sans feuilles, prélevée en repos' },
    when: { en: 'Late autumn to late winter, on dormant wood.', fr: 'Fin automne à fin hiver, sur bois dormant.' },
    detail: {
      en: 'The simplest: no mist, no leaves, often outdoors or in a cold frame. The cutting lives on its reserves and roots slowly, usually in spring. Length, number of buds and planting depth matter more than hormone. “Aoûtée” names the hardened wood, not the month of August.',
      fr: 'La plus simple : pas de brumisation, pas de feuilles, souvent en pleine terre ou sous châssis froid. La bouture vit sur ses réserves et s’enracine lentement, au printemps. Longueur, nombre de bourgeons et profondeur de plantation comptent plus que l’hormone. « Aoûtée » désigne le bois durci, pas le mois d’août.',
    },
    src: ['rhs-hardwood', 'hartmann2011'],
  },
  {
    id: 'root',
    name: { en: 'Root cutting', fr: 'Bouture de racine' },
    short: { en: 'Fragment of root that shoots and roots', fr: 'Fragment de racine qui émet tiges et racines' },
    when: { en: 'Dormant season, autumn to late winter.', fr: 'Repos végétatif, automne à fin hiver.' },
    detail: {
      en: 'For plants that naturally sucker: raspberry, blackberry, some Prunus and Hippophae. Roots 5–15 cm long and 5–10 mm thick are placed horizontally or vertically in a light medium. Shoots appear in spring; a piece with the wrong polarity can stay silent or grow upside down.',
      fr: 'Pour les plantes qui drageonnent naturellement : framboisier, ronce, certains Prunus et Hippophae. Des racines de 5–15 cm et 5–10 mm sont posées horizontalement ou verticalement dans un substrat léger. Les pousses sortent au printemps ; un fragment mal orienté peut rester muet ou pousser à l’envers.',
    },
    src: ['rhs-root', 'hartmann2011'],
  },
  {
    id: 'segment',
    name: { en: 'Stem-segment cutting', fr: 'Bouture de segment de tige' },
    short: { en: 'Cactus cladode left to callus, then planted', fr: 'Cladode de cactus laissé à cicatriser, puis planté' },
    when: { en: 'Warm season, at least six weeks before cold nights.', fr: 'Saison chaude, au moins six semaines avant les nuits froides.' },
    detail: {
      en: 'Used for cacti and succulents such as Selenicereus. The cut end dries and forms a corky callus for five to eight days; planting a fresh, wet wound invites rot. The segment is planted upright, a few centimetres deep, in a very open mix.',
      fr: 'Pour les cactus et succulentes comme Selenicereus. La coupe sèche et forme un cal cicatriciel en cinq à huit jours ; planter une blessure fraîche invite la pourriture. Le segment est planté debout, sur quelques centimètres, dans un mélange très ouvert.',
    },
    src: ['ctahr-pitaya', 'kakade2019'],
  },
];

export const FACTORS = [
  {
    id: 'stock',
    title: { en: 'The mother plant decides first', fr: 'La plante mère décide d’abord' },
    body: {
      en: 'Juvenile, vigorous, well-fed and disease-free stock roots far better than old, flowering or stressed wood. In trifoliate orange, cuttings from 1–2-year-old trees rooted 100 %, those from 15–25-year-old trees 0 %. Take cuttings from the lower, shaded parts of the plant when you can: they are less mature.',
      fr: 'Un pied jeune, vigoureux, bien nourri et sain s’enracine bien mieux qu’un bois vieux, fleuri ou stressé. Chez le poncire, les boutures d’arbres de 1–2 ans ont raciné à 100 %, celles d’arbres de 15–25 ans à 0 %. Prélever si possible sur les parties basses et ombragées : elles sont moins mûres.',
    },
    src: ['bhusal2003', 'hartmann2011'],
  },
  {
    id: 'cut',
    title: { en: 'Cut below a node, wound the base', fr: 'Couper sous un nœud, blesser la base' },
    body: {
      en: 'Roots arise most easily at the node and at a wound. A clean cut just below a node, a slanted base for more surface, and a light vertical wound on hard cuttings all help. A blunt blade crushes the vessels and rots.',
      fr: 'Les racines naissent plus facilement au nœud et à une blessure. Une coupe nette juste sous un nœud, une base en biseau pour plus de surface et une légère entaille verticale sur les boutures dures aident. Une lame émoussée écrase les vaisseaux et fait pourrir la base.',
    },
    src: ['rhs-semi', 'ncsu-cuttings'],
  },
  {
    id: 'auxin',
    title: { en: 'Auxin helps, it does not decide', fr: 'L’auxine aide, elle ne décide pas' },
    body: {
      en: 'IBA (AIB in French) and NAA (ANA) promote roots, but a cutting with no reserves, taken at the wrong time, will not root because of a powder. More is not better: excess auxin causes callus, necrosis or a few thick roots. Follow the label; a quick dip of five seconds is not a soak.',
      fr: 'L’AIB (IBA) et l’ANA (NAA) favorisent les racines, mais une bouture sans réserves, prélevée au mauvais moment, ne racinera pas grâce à une poudre. Plus n’est pas mieux : l’excès d’auxine provoque du cal, des nécroses ou quelques grosses racines. Suivre l’étiquette ; un trempage rapide de cinq secondes n’est pas un bain.',
    },
    src: ['hartmann2011', 'ncsu-cuttings'],
  },
  {
    id: 'water',
    title: { en: 'Keep the air humid, the medium drained', fr: 'Air humide, substrat drainé' },
    body: {
      en: 'A cutting without roots cannot replace the water its leaves lose. Mist, a plastic dome or a shaded frame keeps the air near saturation. The medium must still drain: a waterlogged base dies before it roots. Reduce the leaf area instead of sealing the bag tighter.',
      fr: 'Une bouture sans racines ne peut pas remplacer l’eau perdue par ses feuilles. Brumisation, cloche plastique ou châssis ombragé maintiennent l’air proche de la saturation. Le substrat doit pourtant drainer : une base noyée meurt avant de raciner. Réduire la surface foliaire plutôt que fermer le sac davantage.',
    },
    src: ['rhs-softwood', 'ncsu-cuttings'],
  },
  {
    id: 'heat',
    title: { en: 'Warm the base, light the leaves', fr: 'Chauffer la base, éclairer les feuilles' },
    body: {
      en: 'Bottom heat of 20–25 °C speeds rooting while the air stays cooler, which limits rot and leaf loss. Leaves need light to make the sugars roots will use, but direct sun overheats a closed frame. Shade the frame, not the whole room.',
      fr: 'Une chaleur de fond de 20–25 °C accélère l’enracinement tandis que l’air reste plus frais, ce qui limite pourriture et perte de feuilles. Les feuilles ont besoin de lumière pour fabriquer les sucres que les racines utiliseront, mais le soleil direct surchauffe un châssis fermé. Ombrer le châssis, pas la pièce entière.',
    },
    src: ['hartmann2011', 'rhs-semi'],
  },
  {
    id: 'after',
    title: { en: 'Harden off before potting on', fr: 'Endurcir avant le rempotage' },
    body: {
      en: 'Roots formed under mist are soft and break easily. Open the cover gradually over one to two weeks, reduce mist, then lift the cutting by sliding a knife under it, never by pulling. A cutting that resists a gentle tug is not necessarily ready: check for roots.',
      fr: 'Les racines formées sous brumisation sont tendres et cassent facilement. Ouvrir la protection progressivement en une à deux semaines, réduire la brumisation, puis soulever la bouture avec une lame glissée dessous, jamais en tirant. Une bouture qui résiste à une traction douce n’est pas forcément prête : vérifier les racines.',
    },
    src: ['ncsu-cuttings', 'rhs-softwood'],
  },
];

export const LAYERS = [
  {
    id: 'simple',
    name: { en: 'Simple layering', fr: 'Marcottage simple' },
    body: {
      en: 'A flexible low shoot is wounded, bent into a 10–15 cm trench, pegged and covered, tip out of the soil. It stays attached to the mother plant, so it never lacks water. Roots in six to twelve months; sever once the layer has its own roots.',
      fr: 'Une pousse basse et souple est blessée, couchée dans une tranchée de 10–15 cm, fixée et recouverte, la pointe hors terre. Elle reste attachée à la plante mère et ne manque donc jamais d’eau. Racines en six à douze mois ; séparer quand la marcotte a ses propres racines.',
    },
    src: ['rhs-layering', 'ncsu-layering'],
  },
  {
    id: 'tip',
    name: { en: 'Tip layering', fr: 'Marcottage par pointe' },
    body: {
      en: 'The method for brambles. In late summer, bury the tip of a long cane 7–10 cm deep and peg it. The tip roots during autumn and winter; cut the cane behind the new plant in spring and replant it.',
      fr: 'La méthode des ronces. En fin d’été, enterrer la pointe d’une longue canne à 7–10 cm et la fixer. La pointe s’enracine en automne-hiver ; couper la canne derrière le nouveau pied au printemps et le replanter.',
    },
    src: ['rhs-layering', 'rhs-blackberries'],
  },
  {
    id: 'air',
    name: { en: 'Air layering', fr: 'Marcottage aérien' },
    body: {
      en: 'For a branch that cannot reach the ground. Remove a ring of bark 2–4 cm wide, scrape the cambium, apply auxin, wrap the wound in moist sphagnum or peat, then in opaque film tied at both ends. Roots appear in two to six months; sever below the ball when it is well filled.',
      fr: 'Pour une branche qui ne peut pas atteindre le sol. Retirer un anneau d’écorce de 2–4 cm, gratter le cambium, appliquer de l’auxine, entourer la blessure de sphaigne ou de tourbe humide, puis d’un film opaque ficelé aux deux bouts. Les racines apparaissent en deux à six mois ; sectionner sous la motte quand elle est bien remplie.',
    },
    src: ['rhs-airlayer', 'tamu-airlayer'],
  },
  {
    id: 'mound',
    name: { en: 'Mound layering (stooling)', fr: 'Marcottage en butte' },
    body: {
      en: 'The mother plant is cut back hard in winter; in spring, soil or compost is mounded over the new shoots. Each shoot roots at its base. Used for Ribes and rootstocks; it produces several plants from one stock plant.',
      fr: 'La plante mère est rabattue court en hiver ; au printemps, terre ou compost est buté sur les nouvelles pousses. Chaque pousse s’enracine à sa base. Employé pour les Ribes et les porte-greffes ; il donne plusieurs plants à partir d’un seul pied.',
    },
    src: ['hartmann2011', 'ncsu-layering'],
  },
];

export const SPECIES = [
  {
    id: 'citrus-sinensis',
    name: 'Citrus sinensis',
    author: '(L.) Osbeck',
    family: 'Rutaceae',
    common: { fr: ['oranger', 'orange douce'], en: ['sweet orange'], de: ['Orange'] },
    difficulty: 'moderate',
    cut: {
      types: ['semi', 'soft'],
      when: { en: 'Late spring to summer, on hardened current-year shoots.', fr: 'Fin printemps à l’été, sur pousses de l’année durcies.' },
      hormone: { en: 'IBA 0.1–0.3 % (1 000–3 000 ppm), useful.', fr: 'AIB 0,1–0,3 % (1 000–3 000 ppm), utile.' },
      rooting: { en: '4–6 weeks with bottom heat and mist.', fr: '4–6 semaines avec chaleur de fond et brumisation.' },
      protocol: {
        en: 'Take a 10–15 cm semi-hardwood cutting just below a node, keep 2–3 leaves reduced by half, dip the base in IBA, plant in a drained mix and cover with a bag or mist. Keep the base at 20–25 °C. Sweet orange roots less easily than lemon or citrange; expect uneven results.',
        fr: 'Prélever une bouture semi-aoûtée de 10–15 cm juste sous un nœud, garder 2–3 feuilles réduites de moitié, tremper la base dans l’AIB, planter dans un mélange drainant et couvrir d’un sac ou brumiser. Maintenir la base à 20–25 °C. L’oranger racinera moins facilement que le citronnier ou le citrange ; les résultats sont irréguliers.',
      },
      src: ['crfg', 'andrade2003', 'rhs-semi'],
    },
    layer: {
      type: 'air',
      when: { en: 'Spring on the previous year’s wood, or mid-summer on mature current-year wood.', fr: 'Printemps sur le bois de l’année précédente, ou mi-été sur bois de l’année mûr.' },
      protocol: {
        en: 'Girdle a pencil-thick branch, apply auxin, wrap in moist sphagnum and opaque film. Rooting takes two to four months; keep the moss moist and sever only when roots fill the ball.',
        fr: 'Anneler une branche de la grosseur d’un crayon, appliquer de l’auxine, entourer de sphaigne humide et de film opaque. L’enracinement prend deux à quatre mois ; garder la mousse humide et ne séparer que lorsque les racines remplissent la motte.',
      },
      src: ['tamu-airlayer', 'rhs-airlayer'],
    },
    graft: {
      en: 'Commercial citrus is budded or grafted on a rootstock, which brings soil and disease tolerance. A cutting or a layer grows on its own roots and loses that protection; in a cold or wet garden, grafting remains the robust choice.',
      fr: 'Les agrumes commerciaux sont écussonnés ou greffés sur un porte-greffe, qui apporte tolérance au sol et aux maladies. Une bouture ou une marcotte pousse sur ses propres racines et perd cette protection ; dans un jardin froid ou humide, la greffe reste le choix robuste.',
    },
    note: {
      en: 'The PDF’s source for this species was a newspaper article and the sentence was garbled. Cuttings do root, but they are not the commercial method.',
      fr: 'La source du PDF pour cette espèce était un article de journal et la phrase était incompréhensible. Les boutures racinent, mais ce n’est pas la méthode commerciale.',
    },
    sources: ['crfg', 'andrade2003', 'tamu-airlayer', 'rhs-semi', 'rhs-airlayer'],
  },
  {
    id: 'poncirus-trifoliata',
    name: 'Poncirus trifoliata',
    author: '(L.) Raf.',
    family: 'Rutaceae',
    common: { fr: ['poncire trifolié', 'citronnier épineux'], en: ['trifoliate orange'], de: ['Dreiblättrige Orange'] },
    difficulty: 'difficult',
    cut: {
      types: ['semi', 'hard'],
      when: { en: 'Early June for semi-hardwood; hardwood in the dormant season.', fr: 'Début juin pour la semi-aoûtée ; bois dormant en hiver.' },
      hormone: { en: 'Auxin is not the limiting factor: in one trial, IBA and growth-promoting bacteria had no significant effect.', fr: 'L’auxine n’est pas le facteur limitant : dans un essai, l’AIB et des bactéries favorisantes n’ont pas eu d’effet significatif.' },
      rooting: { en: '6–12 weeks, low and irregular.', fr: '6–12 semaines, faible et irrégulier.' },
      protocol: {
        en: 'Take 10–15 cm cuttings from young, juvenile plants, just below a node. Use a light auxin, 50/50 peat–perlite, a humid cover and indirect light. The age of the mother plant dominates: 1–2-year-old plants rooted 100 %, 15–25-year-old plants 0 %. Hardwood cuttings can root better than softwood.',
        fr: 'Prélever des boutures de 10–15 cm sur des plants jeunes et juvéniles, juste sous un nœud. Utiliser une auxine légère, tourbe-perlite 50/50, une couverture humide et une lumière indirecte. L’âge du pied mère domine : les plants de 1–2 ans ont raciné à 100 %, ceux de 15–25 ans à 0 %. Les boutures de bois dormant peuvent mieux raciner que les herbacées.',
      },
      src: ['bhusal2003', 'cinar2019', 'andrade2003'],
    },
    layer: {
      type: 'air',
      when: { en: 'Spring to summer, on a vigorous shoot.', fr: 'Printemps à l’été, sur une pousse vigoureuse.' },
      protocol: {
        en: 'The technique is the same as for Citrus, but successes are anecdotal and irregular. For a reliable plant, sow then graft.',
        fr: 'La technique est celle des agrumes, mais les réussites sont anecdotiques et irrégulières. Pour un plant fiable, semer puis greffer.',
      },
      src: ['rhs-airlayer'],
    },
    graft: {
      en: 'Seed first, then graft: this is far more reliable than cuttings or layers. The juvenile rootstock also keeps the good rooting capacity that mature wood loses.',
      fr: 'D’abord semer, puis greffer : bien plus fiable que bouture ou marcotte. Le porte-greffe juvénile garde aussi la bonne capacité d’enracinement que le bois adulte perd.',
    },
    note: {
      en: 'The PDF said that IBA and “promoting bacteria” do not improve rooting. That is true of one 2019 trial, but the decisive factor is juvenility, not the product.',
      fr: 'Le PDF affirmait que l’AIB et des « bactéries favorisantes » n’améliorent pas l’enracinement. C’est vrai dans un essai de 2019, mais le facteur décisif est la juvénilité, pas le produit.',
    },
    sources: ['bhusal2003', 'cinar2019', 'andrade2003', 'rhs-airlayer'],
  },
  {
    id: 'eucalyptus-deglupta',
    name: 'Eucalyptus deglupta',
    author: 'Blume',
    family: 'Myrtaceae',
    common: { fr: ['eucalyptus arc-en-ciel'], en: ['rainbow gum', 'Mindanao gum'], de: ['Regenbogen-Eukalyptus'] },
    difficulty: 'moderate',
    cut: {
      types: ['semi'],
      when: { en: 'Spring to early summer, on young material.', fr: 'Printemps au début de l’été, sur matériel jeune.' },
      hormone: { en: 'Useful but not indispensable on juvenile cuttings.', fr: 'Utile mais non indispensable sur boutures juvéniles.' },
      rooting: { en: '5–9 days in the best trials; 6–8 weeks in ordinary nursery conditions.', fr: '5–9 jours dans les meilleurs essais ; 6–8 semaines en conditions de pépinière ordinaires.' },
      protocol: {
        en: 'Use only juvenile material: cuttings from seedlings a few months old, or from trees under about five years. Take 15–20 cm of the current-year shoot, remove the lower two-thirds of leaves, cut below a node, and root under high humidity at 25–30 °C in bright indirect light. Cuttings from old trees fail; an inhibitor accumulates with age.',
        fr: 'N’utiliser que du matériel juvénile : boutures de semis de quelques mois, ou d’arbres de moins de cinq ans environ. Prélever 15–20 cm de pousse de l’année, retirer les feuilles des deux tiers inférieurs, couper sous un nœud et raciner sous forte humidité à 25–30 °C, à lumière vive indirecte. Les boutures d’arbres âgés échouent ; un inhibiteur s’accumule avec l’âge.',
      },
      src: ['davidson1974', 'rhs-semi'],
    },
    layer: {
      type: 'none',
      why: { en: 'Not documented for this species. Juvenile cuttings are the clonal route.', fr: 'Non documenté pour cette espèce. Les boutures juvéniles sont la voie clonale.' },
      src: ['davidson1974'],
    },
    graft: null,
    note: {
      en: 'Davidson’s “95 % in water” refers to cuttings from seedlings, under mist — not to a jar on a windowsill. The same paper found no rooting from trees five years and older.',
      fr: 'Les « 95 % dans l’eau » de Davidson concernent des boutures issues de semis, sous brumisation — pas un bocal sur un rebord de fenêtre. Le même article n’obtient aucun enracinement sur des arbres de cinq ans et plus.',
    },
    sources: ['davidson1974', 'rhs-semi'],
  },
  {
    id: 'hippophae-rhamnoides',
    name: 'Hippophae rhamnoides',
    author: 'L.',
    family: 'Elaeagnaceae',
    common: { fr: ['argousier', 'argousier faux-nerprun'], en: ['sea buckthorn'], de: ['Sanddorn'] },
    difficulty: 'easy',
    sex: true,
    cut: {
      types: ['hard', 'semi'],
      when: { en: 'Hardwood in late winter (planted in March); semi-hardwood in early summer.', fr: 'Aoûtée en fin d’hiver (plantée en mars) ; semi-aoûtée au début de l’été.' },
      hormone: { en: 'IBA 500–1 000 ppm helps; 1 000 ppm was best in a cultivar trial, 2 000 ppm reduced rooting. Hormone is not indispensable.', fr: 'AIB 500–1 000 ppm aide ; 1 000 ppm était le meilleur dans un essai variétal, 2 000 ppm réduisaient l’enracinement. L’hormone n’est pas indispensable.' },
      rooting: { en: '4–8 weeks.', fr: '4–8 semaines.' },
      protocol: {
        en: 'Take 15–20 cm of one-year wood in dormancy, or 15 cm semi-hardwood shoots in early summer. Plant one third to one half buried; semi-hardwood needs mist and bottom heat. Cuttings preserve the sex of the mother plant, which seed cannot do.',
        fr: 'Prélever 15–20 cm de bois de l’année en repos, ou 15 cm de pousses semi-aoûtées au début de l’été. Enterrer d’un tiers à la moitié ; la semi-aoûtée demande brumisation et chaleur de fond. Les boutures conservent le sexe du pied mère, ce que le semis ne permet pas.',
      },
      src: ['gunes2020', 'li-seabuckthorn', 'rhs-hardwood'],
    },
    layer: {
      type: 'none',
      why: { en: 'Not needed: the shrub suckers abundantly. A rooted sucker is faster than any layer.', fr: 'Inutile : l’arbuste drageonne abondamment. Un drageon raciné est plus rapide que toute marcotte.' },
      src: ['li-seabuckthorn'],
    },
    graft: null,
    note: {
      en: 'The PDF made 500 ppm IBA look like the standard. The trial tested 500, 1 000 and 2 000 ppm: 1 000 ppm rooted best (about 96 %), 2 000 ppm fell back, and untreated cuttings also rooted.',
      fr: 'Le PDF présentait 500 ppm d’AIB comme la référence. L’essai testait 500, 1 000 et 2 000 ppm : 1 000 ppm donnaient le meilleur enracinement (environ 96 %), 2 000 ppm faisaient retomber, et les boutures non traitées racinaient aussi.',
    },
    sources: ['gunes2020', 'li-seabuckthorn', 'rhs-hardwood'],
  },
  {
    id: 'olea-europaea',
    name: 'Olea europaea',
    author: 'L.',
    family: 'Oleaceae',
    common: { fr: ['olivier', 'olivier cultivé'], en: ['olive'], de: ['Olive', 'Echter Ölbaum'] },
    difficulty: 'easy',
    cut: {
      types: ['semi'],
      when: { en: 'August–September, on current-year shoots that are beginning to harden, after fruit set.', fr: 'Août–septembre, sur pousses de l’année qui commencent à durcir, après la nouaison.' },
      hormone: { en: 'IBA 0.2–0.3 % (2 000–3 000 ppm) as a quick dip or talc.', fr: 'AIB 0,2–0,3 % (2 000–3 000 ppm) en trempage rapide ou talc.' },
      rooting: { en: 'About 45 days to 3 months, depending on cultivar and heat.', fr: 'Environ 45 jours à 3 mois, selon le cultivar et la chaleur.' },
      protocol: {
        en: 'Take 15–20 cm semi-hardwood cuttings, remove all but 2–3 upper leaves, cut the base in a bevel below a node, dip in IBA, and root in half washed sand, half peat (or peat–perlite) at about 21 °C bottom heat, under mist and shade. Rooting varies from 20 to 90 % with cultivar.',
        fr: 'Prélever des boutures semi-aoûtées de 15–20 cm, ne garder que 2–3 feuilles au sommet, tailler la base en biseau sous un nœud, tremper dans l’AIB et raciner dans moitié sable lavé, moitié tourbe (ou tourbe-perlite) à environ 21 °C de fond, sous brumisation et ombrage. L’enracinement varie de 20 à 90 % selon le cultivar.',
      },
      src: ['florida-olive', 'swan-olive', 'rhs-olive'],
    },
    layer: {
      type: 'air',
      when: { en: 'Spring to summer, on a branch of the previous year.', fr: 'Printemps à l’été, sur une branche de l’année précédente.' },
      protocol: {
        en: 'Girdle 3–4 cm, apply auxin, wrap in moist moss and opaque film. Roots appear in about 1.5–2 months and the layer is severed when the ball is well rooted. Useful for a cultivar that roots poorly from cuttings.',
        fr: 'Anneler sur 3–4 cm, appliquer de l’auxine, entourer de mousse humide et de film opaque. Les racines apparaissent en 1,5–2 mois environ et la marcotte est séparée quand la motte est bien racinée. Utile pour un cultivar qui racinera mal en bouture.',
      },
      src: ['rhs-airlayer', 'florida-olive'],
    },
    graft: null,
    note: {
      en: 'The PDF’s 0.2–0.3 % IBA is consistent with the trials, but there is no single universal protocol: cultivar, wood age, temperature and mist all shift the result. The “2–3 months” for air layering matches root appearance, not a finished plant.',
      fr: 'L’AIB à 0,2–0,3 % du PDF est cohérent avec les essais, mais il n’existe pas de protocole universel : cultivar, âge du bois, température et brumisation déplacent le résultat. Les « 2–3 mois » du marcottage aérien correspondent à l’apparition des racines, pas à un plant fini.',
    },
    sources: ['florida-olive', 'swan-olive', 'rhs-olive', 'rhs-airlayer'],
  },
  {
    id: 'pinus-sylvestris',
    name: 'Pinus sylvestris',
    author: 'L.',
    family: 'Pinaceae',
    common: { fr: ['pin sylvestre'], en: ['Scots pine'], de: ['Waldkiefer', 'Gemeine Kiefer'] },
    difficulty: 'difficult',
    cut: {
      types: ['hard'],
      when: { en: 'Late autumn to winter, after the first frosts and outside thaw periods; or semi-hardwood in summer for some species.', fr: 'Fin automne à l’hiver, après les premières gelées et hors périodes de dégel ; ou semi-aoûtée en été pour certaines espèces.' },
      hormone: { en: 'Essential in practice: IBA 4 000–8 000 ppm, or a commercial rooting powder for conifers.', fr: 'Indispensable en pratique : AIB 4 000–8 000 ppm, ou une poudre commerciale pour conifères.' },
      rooting: { en: 'Several months to a year.', fr: 'Plusieurs mois à un an.' },
      protocol: {
        en: 'Use juvenile material: cuttings from young plants, hedged stock or the lower crown. Take 10–15 cm terminal shoots, strip the lower needles so none touches the soil, wound the base, dip in IBA and root in sterile peat–perlite 1:1 under a clear cover, bright indirect light. Storing cuttings at 4 °C for four weeks improved rooting in P. halepensis; it is not a general pine rule.',
        fr: 'Utiliser du matériel juvénile : boutures de jeunes plants, de pieds rabattus ou de la couronne basse. Prélever 10–15 cm de pousses terminales, retirer les aiguilles du bas pour qu’aucune ne touche le sol, blesser la base, tremper dans l’AIB et raciner dans tourbe-perlite stérile 1:1 sous couverture transparente, à lumière vive indirecte. Un stockage des boutures à 4 °C pendant quatre semaines a amélioré le enracinement chez P. halepensis ; ce n’est pas une règle générale pour les pins.',
      },
      src: ['ncsu-cuttings', 'riov2020'],
    },
    layer: {
      type: 'none',
      why: { en: 'Conifers do not layer usefully; seed or grafting are the normal routes.', fr: 'Les conifères ne se marcottent pas utilement ; semis ou greffe sont les voies normales.' },
      src: ['ncsu-cuttings'],
    },
    graft: null,
    note: {
      en: 'The PDF called P. mugo and P. strobus “easier”. Even those need juvenile wood and several months; “easy” is relative. The cold-storage result quoted for pines comes from P. halepensis, not from P. sylvestris.',
      fr: 'Le PDF qualifiait P. mugo et P. strobus de « plus faciles ». Même eux demandent du bois juvénile et plusieurs mois ; « facile » est relatif. Le résultat de stockage au froid cité pour les pins vient de P. halepensis, pas de P. sylvestris.',
    },
    sources: ['ncsu-cuttings', 'riov2020'],
  },
  {
    id: 'rubus-idaeus',
    name: 'Rubus idaeus',
    author: 'L.',
    family: 'Rosaceae',
    common: { fr: ['framboisier'], en: ['raspberry'], de: ['Himbeere'] },
    difficulty: 'easy',
    cut: {
      types: ['root', 'hard', 'soft'],
      when: { en: 'Suckers and root cuttings in dormancy; stem cuttings in spring or early summer, but they root poorly.', fr: 'Drageons et boutures de racines en repos ; boutures de tige au printemps ou au début de l’été, mais elles racinent mal.' },
      hormone: { en: 'Not necessary for suckers or root cuttings.', fr: 'Pas nécessaire pour les drageons ni les boutures de racines.' },
      rooting: { en: 'Root cuttings: shoots in spring. Stem cuttings: slow and irregular.', fr: 'Boutures de racines : pousses au printemps. Boutures de tige : lentes et irrégulières.' },
      protocol: {
        en: 'The simplest is a sucker: dig up a rooted sucker 30 cm or more from the row in dormancy, with its roots, and replant it. Root cuttings: 5–10 cm pieces, laid horizontally 2–5 cm deep in autumn–winter. Stem cuttings are possible but give mediocre results on red raspberry; use only certified virus-free stock.',
        fr: 'Le plus simple est le drageon : déterrer en repos un drageon raciné à 30 cm ou plus de la ligne, avec ses racines, et le replanter. Boutures de racines : fragments de 5–10 cm posés horizontalement à 2–5 cm de profondeur en automne-hiver. Les boutures de tige sont possibles mais médiocres sur le framboisier rouge ; n’utiliser que du matériel certifié sans virus.',
      },
      src: ['rhs-idaeus', 'rhs-root'],
    },
    layer: {
      type: 'simple',
      when: { en: 'Late summer to autumn, on a flexible cane.', fr: 'Fin d’été à l’automne, sur une canne souple.' },
      protocol: {
        en: 'Bury a cane section 10–15 cm deep, tip out, and separate after about a year. It works, but suckers and root cuttings are faster and do not need the mother row to be bent over.',
        fr: 'Enterrer une section de canne à 10–15 cm, pointe dehors, et séparer au bout d’un an environ. Cela marche, mais drageons et boutures de racines sont plus rapides et n’obligent pas à coucher la ligne mère.',
      },
      src: ['rhs-idaeus', 'rhs-layering'],
    },
    graft: null,
    note: {
      en: 'The PDF is right that stem cuttings are the weak method for red raspberry. The strong methods are the sucker and the root cutting, both of which the PDF mentions in its annex.',
      fr: 'Le PDF a raison : la bouture de tige est la méthode faible pour le framboisier rouge. Les méthodes fortes sont le drageon et la bouture de racine, que le PDF mentionne dans son annexe.',
    },
    sources: ['rhs-idaeus', 'rhs-root', 'rhs-layering'],
  },
  {
    id: 'rubus-fruticosus',
    name: 'Rubus fruticosus',
    author: 'L. (agg.)',
    family: 'Rosaceae',
    common: { fr: ['ronce', 'mûrier sauvage'], en: ['blackberry', 'bramble'], de: ['Brombeere'] },
    difficulty: 'easy',
    cut: {
      types: ['hard', 'root'],
      when: { en: 'Hardwood cane cuttings in late winter; root cuttings in late winter.', fr: 'Boutures de canne aoûtées en fin d’hiver ; boutures de racines en fin d’hiver.' },
      hormone: { en: 'Useful but not essential; 0.1–0.3 % IBA is common.', fr: 'Utile mais non essentiel ; 0,1–0,3 % d’AIB est courant.' },
      rooting: { en: '4–8 weeks for cane cuttings under cover; root cuttings shoot in spring.', fr: '4–8 semaines pour les boutures de canne sous abri ; les boutures de racines poussent au printemps.' },
      protocol: {
        en: 'Cane cuttings: 6–8 cm segments of hardened cane, planted under a frame in late winter. Root cuttings: 8–15 cm pieces laid horizontally. Suckers are also available. Tip layering remains the easiest method for a garden.',
        fr: 'Boutures de canne : segments de 6–8 cm de canne aoûtée, plantés sous châssis en fin d’hiver. Boutures de racines : fragments de 8–15 cm posés horizontalement. Les drageons sont aussi disponibles. Le marcottage par pointe reste la méthode la plus simple au jardin.',
      },
      src: ['rhs-fruticosus', 'rhs-blackberries', 'rhs-root'],
    },
    layer: {
      type: 'tip',
      when: { en: 'Late summer, when the canes arch to the ground.', fr: 'Fin d’été, quand les cannes s’arquent vers le sol.' },
      protocol: {
        en: 'Bury the tip of a healthy cane 7–10 cm deep, peg it, and keep the soil moist. Roots form in autumn–winter; cut the cane behind the new plant in spring and replant it. Blackberries often do this without help.',
        fr: 'Enterrer la pointe d’une canne saine à 7–10 cm, la fixer et garder le sol humide. Les racines se forment en automne-hiver ; couper la canne derrière le nouveau pied au printemps et le replanter. Les ronces le font souvent sans aide.',
      },
      src: ['rhs-layering', 'rhs-blackberries'],
    },
    graft: null,
    note: {
      en: 'The PDF dates “aoûtées” cuttings to February. In February the wood is dormant hardwood, not hardened current-year wood: the word “aoûtée” describes the wood, not the month.',
      fr: 'Le PDF date les boutures « aoûtées » de février. En février, le bois est du bois dormant, pas du bois de l’année durci : le mot « aoûtée » décrit le bois, pas le mois.',
    },
    sources: ['rhs-fruticosus', 'rhs-blackberries', 'rhs-root', 'rhs-layering'],
  },
  {
    id: 'ribes-rubrum',
    name: 'Ribes rubrum',
    author: 'L.',
    family: 'Grossulariaceae',
    common: { fr: ['groseillier rouge', 'groseillier à grappes'], en: ['redcurrant'], de: ['Rote Johannisbeere'] },
    difficulty: 'easy',
    cut: {
      types: ['hard'],
      when: { en: 'Late autumn to winter, on dormant wood.', fr: 'Fin automne à l’hiver, sur bois dormant.' },
      hormone: { en: 'Not necessary.', fr: 'Pas nécessaire.' },
      rooting: { en: 'Roots in spring; plant out the following autumn.', fr: 'Racines au printemps ; plantation à l’automne suivant.' },
      protocol: {
        en: 'Cut 20–30 cm segments with at least 3–4 buds, straight below a bud at the base and slanted above a bud at the top. Plant two-thirds buried, buds upwards, in fresh drained soil or a frame. Keep only the top buds if you want a clear leg.',
        fr: 'Couper des segments de 20–30 cm avec au moins 3–4 bourgeons, droit sous un bourgeon à la base et en biais au-dessus d’un bourgeon au sommet. Planter aux deux tiers enterrés, bourgeons vers le haut, en terre fraîche et drainante ou sous châssis. Ne garder que les bourgeons du haut pour former une tige dégagée.',
      },
      src: ['uaf-ribes', 'sare-ribes', 'rhs-redcurrants'],
    },
    layer: {
      type: 'mound',
      when: { en: 'Late winter to spring, on a plant cut back for the purpose.', fr: 'Fin d’hiver au printemps, sur un pied rabattu pour cela.' },
      protocol: {
        en: 'In winter, cut the mother plant back to about 30 cm. In spring, mound soil or compost over the new shoots as they grow, keeping their tips out. In autumn, uncover the base: each shoot has its own roots. Cut them off and replant.',
        fr: 'En hiver, rabattre le pied mère à environ 30 cm. Au printemps, buter de terre ou de compost les nouvelles pousses à mesure qu’elles grandissent, en laissant les sommités dehors. À l’automne, découvrir la base : chaque pousse a ses propres racines. Les détacher et les replanter.',
      },
      src: ['rhs-layering', 'sare-ribes'],
    },
    graft: null,
    note: {
      en: 'One of the easiest woody plants to propagate. The main risk is taking short, thin wood: 20–30 cm and at least three buds give the cutting enough reserves.',
      fr: 'L’un des ligneux les plus faciles à multiplier. Le principal risque est de prélever du bois court et mince : 20–30 cm et au moins trois bourgeons donnent assez de réserves.',
    },
    sources: ['uaf-ribes', 'sare-ribes', 'rhs-redcurrants', 'rhs-layering'],
  },
  {
    id: 'ribes-uva-crispa',
    name: 'Ribes uva-crispa',
    author: 'L.',
    family: 'Grossulariaceae',
    common: { fr: ['groseillier à maquereau'], en: ['gooseberry'], de: ['Stachelbeere'] },
    difficulty: 'moderate',
    cut: {
      types: ['hard'],
      when: { en: 'Late autumn to winter, on dormant wood.', fr: 'Fin automne à l’hiver, sur bois dormant.' },
      hormone: { en: 'Not necessary.', fr: 'Pas nécessaire.' },
      rooting: { en: 'Roots in spring; pot on the following autumn. Less generous than redcurrant.', fr: 'Racines au printemps ; rempotage à l’automne suivant. Moins généreux que le groseillier rouge.' },
      protocol: {
        en: 'Same as redcurrant: 20–30 cm hardwood segments, at least 3–4 buds, two-thirds buried. Cultivar and season matter: in a SARE trial, September–October planting rooted far better than January. European cultivars often root less well than American ones.',
        fr: 'Comme le groseillier rouge : segments aoûtés de 20–30 cm, au moins 3–4 bourgeons, aux deux tiers enterrés. Cultivar et saison comptent : dans un essai SARE, la plantation de septembre-octobre racinait bien mieux que celle de janvier. Les cultivars européens racinent souvent moins bien que les américains.',
      },
      src: ['uaf-ribes', 'sare-ribes', 'rhs-gooseberries'],
    },
    layer: {
      type: 'simple',
      when: { en: 'Autumn to winter, on a low one-year branch.', fr: 'Automne à l’hiver, sur une branche basse d’un an.' },
      protocol: {
        en: 'The drooping habit makes layering easy: bend a low branch, nick the underside, bury 8–10 cm at 3–4 cm deep, leave the tip out and peg it. Roots form by autumn; separate the following spring. Tip layering also works.',
        fr: 'Le port retombant rend le marcottage facile : coucher une branche basse, entailler légèrement le dessous, enterrer 8–10 cm à 3–4 cm de profondeur, laisser la pointe dehors et fixer. Les racines se forment à l’automne ; séparer au printemps suivant. Le marcottage par pointe marche aussi.',
      },
      src: ['sare-ribes', 'rhs-layering', 'rhs-gooseberries'],
    },
    graft: null,
    note: {
      en: 'The PDF says “a little less easy than redcurrant”, which is fair, but layering is clearly more reliable than cuttings for many cultivars.',
      fr: 'Le PDF dit « un peu moins facile que le groseillier rouge », ce qui est juste, mais le marcottage est nettement plus fiable que la bouture pour beaucoup de cultivars.',
    },
    sources: ['uaf-ribes', 'sare-ribes', 'rhs-gooseberries', 'rhs-layering'],
  },
  {
    id: 'selenicereus-undatus',
    name: 'Selenicereus undatus',
    author: '(Haw.) D.R.Hunt',
    family: 'Cactaceae',
    common: { fr: ['pitaya', 'fruit du dragon'], en: ['dragon fruit', 'pitaya'], de: ['Drachenfrucht'] },
    difficulty: 'easy',
    cut: {
      types: ['segment'],
      when: { en: 'Warm season, preferably spring to summer.', fr: 'Saison chaude, de préférence printemps à été.' },
      hormone: { en: 'Optional; auxin trials give mixed results.', fr: 'Optionnelle ; les essais d’auxine donnent des résultats mitigés.' },
      rooting: { en: '2–6 weeks after callus; first fruit in 1–2 years from a cutting.', fr: '2–6 semaines après callus ; première récolte 1–2 ans après une bouture.' },
      protocol: {
        en: 'Take a 30–40 cm stem segment (one trial recommends 40 ± 5 cm; others find 30 cm optimal), cut the base at a slant, and let it cure in dry shade for 5–7 days until a callus forms. Plant upright 5–10 cm deep in a very drained mix, water sparingly at first. Long segments give the best early growth.',
        fr: 'Prélever un segment de tige de 30–40 cm (un essai recommande 40 ± 5 cm ; d’autres trouvent 30 cm optimal), tailler la base en biais et laisser cicatriser à l’ombre sèche 5–7 jours jusqu’à formation d’un cal. Planter debout à 5–10 cm de profondeur dans un mélange très drainant, arroser peu au début. Les segments longs donnent la meilleure croissance initiale.',
      },
      src: ['kakade2019', 'ctahr-pitaya', 'auxin-pitaya2025'],
    },
    layer: {
      type: 'none',
      why: { en: 'Pointless: a stem segment roots almost every time.', fr: 'Sans objet : un segment de tige raciné presque à coup sûr.' },
      src: ['ctahr-pitaya'],
    },
    graft: null,
    note: {
      en: 'The PDF cited a 2026 Scientific Reports paper with a DOI that does not resolve. The segment-length advice is supported by Kakade et al. (2019), and the 5–7-day callus by the CTAHR pitaya guide.',
      fr: 'Le PDF citait un article de Scientific Reports de 2026 dont le DOI ne se résout pas. La longueur des segments est étayée par Kakade et al. (2019), et le cal de 5–7 jours par le guide pitaya du CTAHR.',
    },
    sources: ['kakade2019', 'ctahr-pitaya', 'auxin-pitaya2025'],
  },
  {
    id: 'pistacia-terebinthus',
    name: 'Pistacia terebinthus',
    author: 'L.',
    family: 'Anacardiaceae',
    common: { fr: ['pistachier térébinthe', 'térébinthe'], en: ['terebinth', 'cypress turpentine tree'], de: ['Terpentin-Pistazie'] },
    difficulty: 'difficult',
    cut: {
      types: ['semi'],
      when: { en: 'Summer, on current-year shoots, under mist.', fr: 'Été, sur pousses de l’année, sous brumisation.' },
      hormone: { en: 'IBA useful, but mature material remains recalcitrant.', fr: 'AIB utile, mais le matériel adulte reste récalcitrant.' },
      rooting: { en: 'Variable, often disappointing; grafting dominates.', fr: 'Variable, souvent décevant ; la greffe domine.' },
      protocol: {
        en: 'Semi-hardwood cuttings under mist with IBA can work on juvenile material and on some rootstocks, but mature P. vera cuttings are notoriously difficult. For a garden plant, use seed then graft; reserve cuttings for a greenhouse trial.',
        fr: 'Des boutures semi-aoûtées sous brumisation avec AIB peuvent marcher sur matériel juvénile et certains porte-greffes, mais les boutures de P. vera adulte sont notoirement difficiles. Pour un plant de jardin, semer puis greffer ; réserver les boutures à un essai sous serre.',
      },
      src: ['gadze2023', 'noori2019'],
    },
    layer: {
      type: 'air',
      when: { en: 'Growing season, on a 1–2 cm branch.', fr: 'Saison de croissance, sur une branche de 1–2 cm.' },
      protocol: {
        en: 'Girdle 3–4 cm, apply 20 000 ppm IBA to the wound, wrap in moist peat and opaque film, and keep it moist. In a 2019 trial on P. vera, this gave 63–70 % rooting, against 0 % in the control. Spraying GA3 or low-dose IBA improved survival, not rooting itself.',
        fr: 'Anneler sur 3–4 cm, appliquer 20 000 ppm d’AIB sur la blessure, entourer de tourbe humide et de film opaque, et maintenir humide. Dans un essai de 2019 sur P. vera, cela a donné 63–70 % d’enracinement, contre 0 % au témoin. Des pulvérisations de GA3 ou d’AIB faible ont amélioré la survie, pas l’enracinement lui-même.',
      },
      src: ['noori2019', 'rhs-airlayer'],
    },
    graft: {
      en: 'Grafting on seedling rootstocks is the practical route for pistachio; the air layer is for cloning a chosen sex or cultivar, not for bulk propagation.',
      fr: 'La greffe sur porte-greffe de semis est la voie pratique du pistachier ; le marcottage aérien sert à cloner un sexe ou un cultivar choisi, pas à produire en masse.',
    },
    note: {
      en: 'The PDF called air layering “the most promising” route. It is promising, but one trial with a very high auxin dose is not a general nursery method; grafting remains the standard.',
      fr: 'Le PDF qualifiait le marcottage aérien de voie « la plus prometteuse ». Elle l’est, mais un essai avec une dose d’auxine très élevée ne fait pas une méthode générale de pépinière ; la greffe reste la référence.',
    },
    sources: ['gadze2023', 'noori2019', 'rhs-airlayer'],
  },
  {
    id: 'prunus-cerasifera',
    name: 'Prunus cerasifera',
    author: 'Ehrh.',
    family: 'Rosaceae',
    common: { fr: ['prunier myrobolan', 'prunier-cerise'], en: ['cherry plum', 'myrobalan plum'], de: ['Kirschpflaume', 'Myrobalane'] },
    difficulty: 'moderate',
    cut: {
      types: ['semi', 'hard', 'root'],
      when: { en: 'Semi-hardwood late May–June; hardwood in winter; suckers in dormancy.', fr: 'Semi-aoûtée fin mai–juin ; aoûtée en hiver ; drageons en repos.' },
      hormone: { en: 'Semi-hardwood: standard auxin. Hardwood: 3 000–5 000 ppm IBA (K-IBA) quick dip.', fr: 'Semi-aoûtée : auxine standard. Aoûtée : 3 000–5 000 ppm d’AIB (K-IBA) en trempage rapide.' },
      rooting: { en: 'Semi-hardwood 6–10 weeks; hardwood 4–6 months, 20–91 % depending on clone.', fr: 'Semi-aoûtée 6–10 semaines ; aoûtée 4–6 mois, 20–91 % selon le clone.' },
      protocol: {
        en: 'Semi-hardwood: 10–15 cm leafy cuttings in late May–June under high humidity, standard auxin. Hardwood: 20 cm dormant cuttings, a light nick at the base, a quick dip in 3 000–5 000 ppm IBA, in a cold frame over winter. Suckers at the base of the tree are the fastest route when available.',
        fr: 'Semi-aoûtée : boutures feuillées de 10–15 cm fin mai–juin sous forte humidité, auxine standard. Aoûtée : boutures de 20 cm en repos, légère entaille à la base, trempage rapide dans 3 000–5 000 ppm d’AIB, sous châssis froid tout l’hiver. Les drageons à la base de l’arbre sont la voie la plus rapide quand il y en a.',
      },
      src: ['nahlawi1973', 'acta-prunus2007', 'rhs-cerasifera'],
    },
    layer: {
      type: 'none',
      why: { en: 'Not documented as a nursery method for this species; grafting or suckers are used.', fr: 'Non documenté comme méthode de pépinière pour cette espèce ; greffe ou drageons sont employés.' },
      src: ['rhs-cerasifera'],
    },
    graft: {
      en: 'Ornamental purple forms are normally grafted on a myrobalan seedling, which keeps the leaf colour and the cultivar. A cutting on its own roots is possible but slower to establish.',
      fr: 'Les formes pourpres ornementales sont normalement greffées sur un semis de myrobolan, ce qui conserve la couleur et le cultivar. Une bouture sur ses propres racines est possible mais s’installe plus lentement.',
    },
    note: {
      en: 'The PDF linked a ScienceDirect PII that cannot be resolved and gave “20–91 %” without a traceable source. The classic Nahlawi & Howard trial supports 5 000 ppm IBA; rooting varies enormously with clone and season.',
      fr: 'Le PDF renvoyait à un PII ScienceDirect qui ne se résout pas et donnait « 20–91 % » sans source traçable. L’essai classique de Nahlawi & Howard étaye 5 000 ppm d’AIB ; l’enracinement varie énormément selon le clone et la saison.',
    },
    sources: ['nahlawi1973', 'acta-prunus2007', 'rhs-cerasifera'],
  },
  {
    id: 'actinidia-deliciosa',
    name: 'Actinidia deliciosa',
    author: '(A.Chev.) C.F.Liang & A.R.Ferguson',
    family: 'Actinidiaceae',
    common: { fr: ['kiwi', 'actinidia'], en: ['kiwifruit'], de: ['Kiwi'] },
    difficulty: 'moderate',
    sex: true,
    cut: {
      types: ['soft', 'semi', 'hard'],
      when: { en: 'Herbaceous June–July (or late April–May depending on region); semi-hardwood in summer; hardwood from winter pruning.', fr: 'Herbacée juin–juillet (ou fin avril–mai selon la région) ; semi-aoûtée en été ; aoûtée issue de la taille d’hiver.' },
      hormone: { en: 'IBA liquid quick dip: 500–6 000 ppm tested; 4 000–6 000 ppm is common, and 6 000 ppm performed best in one extension trial. Avoid excess.', fr: 'Trempage rapide d’AIB liquide : 500–6 000 ppm testés ; 4 000–6 000 ppm est courant, et 6 000 ppm a donné le meilleur résultat dans un essai de vulgarisation. Éviter l’excès.' },
      rooting: { en: '4–8 weeks under mist.', fr: '4–8 semaines sous brumisation.' },
      protocol: {
        en: 'Take 10–15 cm herbaceous cuttings in June–July, cut just below a leaf node, keep one leaf reduced by half. Dip 5 seconds in IBA, plant in perlite–vermiculite 1:1 or peat–perlite, and root under intermittent mist (5 s every 5 min in daylight), 50 % shade, 21–23 °C. Herbaceous cuttings root more evenly than hardened ones.',
        fr: 'Prélever des boutures herbacées de 10–15 cm en juin–juillet, couper juste sous un nœud feuillé, garder une feuille réduite de moitié. Tremper 5 secondes dans l’AIB, planter dans perlite-vermiculite 1:1 ou tourbe-perlite, et raciner sous brumisation intermittente (5 s toutes les 5 min le jour), 50 % d’ombrage, 21–23 °C. Les boutures herbacées racinent plus régulièrement que les aoûtées.',
      },
      src: ['alabama-kiwi', 'ucanr-kiwi', 'ishs-kiwi', 'osu-kiwi'],
    },
    layer: {
      type: 'simple',
      when: { en: 'Spring, on a one-year-old shoot.', fr: 'Printemps, sur une pousse d’un an.' },
      protocol: {
        en: 'Lay a one-year shoot into a 10–15 cm trench, tip out, peg it and keep the soil moist. Separate after 6–8 months. Slower than cuttings but needs no mist bench.',
        fr: 'Coucher une pousse d’un an dans une tranchée de 10–15 cm, pointe dehors, la fixer et garder le sol humide. Séparer après 6–8 mois. Plus lent que la bouture mais sans banc de brumisation.',
      },
      src: ['rhs-layering'],
    },
    graft: null,
    note: {
      en: 'The species is dioecious: seed gives unknown sexes, while a cutting or a layer keeps the sex of the mother vine. A. chinensis (yellow kiwifruit) follows the same protocol but is less hardy and more exposed to late frost; in a cool garden, A. deliciosa ‘Hayward’ remains the safe choice.',
      fr: 'L’espèce est dioïque : le semis donne des sexes inconnus, tandis qu’une bouture ou une marcotte conserve le sexe du pied mère. A. chinensis (kiwi jaune) suit le même protocole mais est moins rustique et plus exposé aux gelées tardives ; dans un jardin frais, A. deliciosa ‘Hayward’ reste le choix sûr.',
    },
    sources: ['alabama-kiwi', 'ucanr-kiwi', 'ishs-kiwi', 'osu-kiwi', 'rhs-layering'],
  },
];

export const STEPS = [
  {
    title: { en: 'Choose the mother plant, then the method', fr: 'Choisir la plante mère, puis la méthode' },
    body: {
      en: 'Young, healthy, virus-free stock first. Then match the method to the wood available: tender shoot for softwood, hardened current-year shoot for semi-hardwood, dormant leafless shoot for hardwood, root for a suckering plant.',
      fr: 'D’abord un pied jeune, sain et sans virus. Ensuite adapter la méthode au bois disponible : pousse tendre pour l’herbacée, pousse de l’année durcie pour la semi-aoûtée, bois dormant sans feuilles pour l’aoûtée, racine pour une plante qui drageonne.',
    },
  },
  {
    title: { en: 'Prepare a clean, drained medium', fr: 'Préparer un substrat propre et drainant' },
    body: {
      en: 'Mix peat or coir with perlite, sand or vermiculite; never garden soil in a closed frame. Clean the tools with alcohol between plants. A medium that stays wet is the most common cause of failure.',
      fr: 'Mélanger tourbe ou coco avec perlite, sable ou vermiculite ; jamais de terre de jardin dans un châssis fermé. Nettoyer les outils à l’alcool entre les plants. Un substrat qui reste détrempé est la cause d’échec la plus fréquente.',
    },
  },
  {
    title: { en: 'Cut, wound and treat', fr: 'Couper, blesser et traiter' },
    body: {
      en: 'A sharp blade, a cut just below a node, a slanted base and a light wound. Apply auxin only at the recommended concentration, as a quick dip or a thin talc film. Shake off the excess.',
      fr: 'Une lame affûtée, une coupe juste sous un nœud, une base en biseau et une légère entaille. Appliquer l’auxine uniquement à la concentration recommandée, en trempage rapide ou en fine pellicule de talc. Secouer l’excès.',
    },
  },
  {
    title: { en: 'Control water, heat and light', fr: 'Maîtriser eau, chaleur et lumière' },
    body: {
      en: 'Leaves in humid air, base in a drained medium at 20–25 °C, bright indirect light. Open the cover daily for a few minutes to exchange air and remove condensation.',
      fr: 'Feuilles dans un air humide, base dans un substrat drainé à 20–25 °C, lumière vive indirecte. Ouvrir la protection quelques minutes par jour pour renouveler l’air et retirer la condensation.',
    },
  },
  {
    title: { en: 'Check before pulling', fr: 'Vérifier avant de tirer' },
    body: {
      en: 'Look for white root tips at the drainage holes or by gently lifting the edge with a knife. A tug can break the only roots. Pot on when roots are 2–3 cm long, not when the cutting merely looks alive.',
      fr: 'Chercher des pointes de racines blanches aux trous de drainage ou en soulevant doucement le bord avec une lame. Une traction peut casser les seules racines. Rempoter quand elles font 2–3 cm, pas quand la bouture semble simplement vivante.',
    },
  },
  {
    title: { en: 'Harden off and label', fr: 'Endurcir et étiqueter' },
    body: {
      en: 'Reduce mist and shade over one to two weeks, then pot in a growing mix. Label with species, cultivar, sex if dioecious, and date. A rooted cutting is a clone: it keeps every character of the mother plant, including its diseases.',
      fr: 'Réduire brumisation et ombrage en une à deux semaines, puis rempoter dans un substrat de culture. Étiqueter avec l’espèce, le cultivar, le sexe si l’espèce est dioïque, et la date. Une bouture racinée est un clone : elle conserve tous les caractères du pied mère, y compris ses maladies.',
    },
  },
];

export const CONFUSIONS = [
  {
    wrong: { en: 'A cutting and a layer are the same thing.', fr: 'Une bouture et une marcotte, c’est la même chose.' },
    right: { en: 'A cutting is separated from the mother plant before rooting; a layer roots while still attached, then is separated. The layer never lacks water, which is why it is slower but safer.', fr: 'Une bouture est séparée de la plante mère avant l’enracinement ; une marcotte raciné encore attachée, puis est séparée. La marcotte ne manque jamais d’eau, d’où sa lenteur mais sa sûreté.' },
    src: ['rhs-layering'],
  },
  {
    wrong: { en: 'More rooting hormone means more roots.', fr: 'Plus d’hormone de bouturage signifie plus de racines.' },
    right: { en: 'Above the species optimum, auxin causes callus, necrosis and fewer roots. Concentration, formulation and dipping time all count; follow the label.', fr: 'Au-delà de l’optimum de l’espèce, l’auxine provoque du cal, des nécroses et moins de racines. Concentration, formulation et durée de trempage comptent ; suivre l’étiquette.' },
    src: ['hartmann2011', 'gunes2020'],
  },
  {
    wrong: { en: 'A cutting can root in a glass of water like a houseplant.', fr: 'Une bouture peut raciner dans un verre d’eau comme une plante d’intérieur.' },
    right: { en: 'Some easy plants do, but woody cuttings often rot or make fragile water roots. A drained medium, humidity and oxygen at the base give stronger roots.', fr: 'Quelques plantes faciles le font, mais les boutures ligneuses pourrissent souvent ou font des racines d’eau fragiles. Un substrat drainé, de l’humidité et de l’oxygène à la base donnent des racines plus solides.' },
    src: ['ncsu-cuttings'],
  },
  {
    wrong: { en: '“Aoûtée” means a cutting taken in August.', fr: '« Aoûtée » signifie une bouture prélevée en août.' },
    right: { en: 'It describes wood that has hardened and lost its green colour, whatever the month. Hardwood cuttings are taken in dormancy, often in winter.', fr: 'Cela décrit un bois durci qui a perdu sa couleur verte, quel que soit le mois. Les boutures aoûtées se prélèvent en repos, souvent en hiver.' },
    src: ['rhs-hardwood'],
  },
  {
    wrong: { en: 'If it is still green, it will root.', fr: 'Si c’est encore vert, ça va raciner.' },
    right: { en: 'Green means alive, not capable of rooting. Reserves, juvenility, timing and humidity decide. A cutting can stay green for weeks and never form a root.', fr: 'Vert signifie vivant, pas capable de raciner. Réserves, juvénilité, timing et humidité décident. Une bouture peut rester verte des semaines sans jamais former de racine.' },
    src: ['ncsu-cuttings'],
  },
  {
    wrong: { en: 'A clone is automatically healthier than a seedling.', fr: 'Un clone est forcément plus sain qu’un semis.' },
    right: { en: 'A clone copies the mother plant, including its viruses. Raspberry and blackberry stocks accumulate viruses; use certified virus-free material.', fr: 'Un clone copie la plante mère, virus compris. Les framboisiers et ronces accumulent les virus ; utiliser du matériel certifié sans virus.' },
    src: ['rhs-idaeus'],
  },
  {
    wrong: { en: 'Layering is only for branches you cannot cut.', fr: 'Le marcottage ne sert que pour les branches qu’on ne peut pas couper.' },
    right: { en: 'It is also the best route for plants that root poorly from cuttings, and for keeping a large branch without a mist bench. Air layering is standard for Citrus, olive and pistachio.', fr: 'C’est aussi la meilleure voie pour les plantes qui racinent mal en bouture, et pour conserver une grosse branche sans banc de brumisation. Le marcottage aérien est classique pour les agrumes, l’olivier et le pistachier.' },
    src: ['rhs-layering', 'rhs-airlayer'],
  },
  {
    wrong: { en: 'Roots visible through the pot mean the plant is ready to go outside.', fr: 'Des racines visibles à travers le pot signifient que la plante est prête à sortir.' },
    right: { en: 'It means roots have reached the wall, not that they are hardened. Acclimatize gradually: shade, wind and dry air kill more young plants than the cutting stage did.', fr: 'Cela signifie que les racines ont atteint la paroi, pas qu’elles sont endurcies. Acclimater progressivement : ombre, vent et air sec tuent plus de jeunes plants que l’étape de bouturage.' },
    src: ['ncsu-cuttings'],
  },
];

export const CORRECTIONS = [
  {
    title: { en: 'Citrus: a newspaper source and a garbled sentence', fr: 'Agrumes : une source de journal et une phrase incompréhensible' },
    body: {
      en: 'The PDF’s Citrus paragraph begins with an unintelligible sentence and cites a newspaper article. Cuttings are possible (semi-hardwood, IBA, mist, bottom heat), and air layering works, but commercial citrus is grafted or budded for rootstock benefits. The tab says so and gives the cutting and layering protocols separately.',
      fr: 'Le paragraphe du PDF sur les agrumes commence par une phrase incompréhensible et cite un article de journal. Les boutures sont possibles (semi-aoûtées, AIB, brumisation, chaleur de fond), et le marcottage aérien marche, mais les agrumes commerciaux sont greffés ou écussonnés pour les avantages du porte-greffe. L’onglet le dit et donne séparément les protocoles de bouture et de marcotte.',
    },
    src: ['crfg', 'andrade2003', 'tamu-airlayer'],
  },
  {
    title: { en: 'Poncirus: “IBA has no effect” is too absolute', fr: 'Poncirus : « l’AIB n’a aucun effet » est trop absolu' },
    body: {
      en: 'One 2019 trial found no significant effect of IBA or growth-promoting bacteria, but other trials show season- and genotype-dependent auxin effects. The robust finding is juvenility: 1–2-year-old plants rooted 100 %, 15–25-year-old plants 0 %. The tab gives juvenility the first place and does not promise a hormone fix.',
      fr: 'Un essai de 2019 n’a trouvé aucun effet significatif de l’AIB ni de bactéries favorisantes, mais d’autres essais montrent des effets de l’auxine selon la saison et le génotype. Le résultat solide est la juvénilité : 100 % sur plants de 1–2 ans, 0 % sur plants de 15–25 ans. L’onglet donne la première place à la juvénilité et ne promet pas de solution hormonale.',
    },
    src: ['bhusal2003', 'cinar2019'],
  },
  {
    title: { en: 'Eucalyptus: “95 % in water” is not a garden recipe', fr: 'Eucalyptus : « 95 % dans l’eau » n’est pas une recette de jardin' },
    body: {
      en: 'Davidson’s 95 % figure comes from cuttings of seedlings, rooted in water under mist. The same work found no rooting from trees five years and older, because an inhibitor accumulates with age. The tab says “juvenile material only” and does not present water as a general method.',
      fr: 'Les 95 % de Davidson viennent de boutures de semis, racinées dans l’eau sous brumisation. Le même travail n’obtient aucun enracinement sur arbres de cinq ans et plus, car un inhibiteur s’accumule avec l’âge. L’onglet dit « matériel juvénile uniquement » et ne présente pas l’eau comme méthode générale.',
    },
    src: ['davidson1974'],
  },
  {
    title: { en: 'Hippophae: 500 ppm IBA is not the optimum', fr: 'Hippophae : 500 ppm d’AIB n’est pas l’optimum' },
    body: {
      en: 'The PDF presents 500 ppm as the standard. A cultivar trial tested 0, 500, 1 000 and 2 000 ppm: 1 000 ppm rooted best (about 96 %), 2 000 ppm reduced rooting (about 79 %), and untreated cuttings also rooted. The tab gives the range and says the hormone is not indispensable.',
      fr: 'Le PDF présente 500 ppm comme la référence. Un essai variétal testait 0, 500, 1 000 et 2 000 ppm : 1 000 ppm donnaient le meilleur enracinement (environ 96 %), 2 000 ppm réduisaient l’enracinement (environ 79 %), et les boutures non traitées racinaient aussi. L’onglet donne la plage et précise que l’hormone n’est pas indispensable.',
    },
    src: ['gunes2020'],
  },
  {
    title: { en: 'Selenicereus: the 2026 Scientific Reports citation does not resolve', fr: 'Selenicereus : la citation Scientific Reports 2026 ne se résout pas' },
    body: {
      en: 'The DOI 10.1038/s41598-026-60049-0 cited by the PDF returns no article. The segment-length recommendation is supported by Kakade et al. (2019), who recommend 40 ± 5 cm, while other trials find 30 cm optimal. The 5–7-day callus is supported by the CTAHR pitaya guide. The tab uses those sources.',
      fr: 'Le DOI 10.1038/s41598-026-60049-0 cité par le PDF ne renvoie à aucun article. La longueur des segments est étayée par Kakade et al. (2019), qui recommandent 40 ± 5 cm, tandis que d’autres essais trouvent 30 cm optimal. Le cal de 5–7 jours est étayé par le guide pitaya du CTAHR. L’onglet utilise ces sources.',
    },
    src: ['kakade2019', 'ctahr-pitaya'],
  },
  {
    title: { en: 'Prunus cerasifera: an unresolvable ScienceDirect link', fr: 'Prunus cerasifera : un lien ScienceDirect qui ne se résout pas' },
    body: {
      en: 'The PDF’s PII S0304423819310301 does not resolve, and the “20–91 %” range is given without a traceable citation. The classic Nahlawi & Howard trial supports 5 000 ppm IBA as the optimum for Myrobalan B, and later reviews give 3 000–5 000 ppm. Rooting remains strongly clone-dependent.',
      fr: 'Le PII S0304423819310301 du PDF ne se résout pas, et la plage « 20–91 % » est donnée sans citation traçable. L’essai classique de Nahlawi & Howard étaye 5 000 ppm d’AIB comme optimum pour Myrobalan B, et des revues ultérieures donnent 3 000–5 000 ppm. L’enracinement reste très dépendant du clone.',
    },
    src: ['nahlawi1973', 'acta-prunus2007'],
  },
  {
    title: { en: 'Actinidia: 500–4 000 ppm were tested, not crowned', fr: 'Actinidia : 500–4 000 ppm ont été testés, pas couronnés' },
    body: {
      en: 'The PDF says “500 to 4 000 mg/L tested”, which is accurate as a trial range, but extension work reports 6 000 ppm as better in one comparison. The tab gives 500–6 000 ppm, recommends following the product label, and warns that excess auxin causes callus and necrosis.',
      fr: 'Le PDF dit « 500 à 4 000 mg/L testés », ce qui est exact comme plage d’essai, mais des travaux de vulgarisation rapportent 6 000 ppm comme meilleurs dans une comparaison. L’onglet donne 500–6 000 ppm, recommande de suivre l’étiquette du produit et avertit que l’excès d’auxine provoque cal et nécroses.',
    },
    src: ['alabama-kiwi', 'ishs-kiwi'],
  },
  {
    title: { en: 'Olive: one protocol is not the protocol', fr: 'Olivier : un protocole n’est pas le protocole' },
    body: {
      en: 'The PDF’s 0.2–0.3 % IBA is plausible, but trials range from 2 000 to 5 000 ppm, rooting from 20 to 90 % depending on cultivar, and air layering takes about 1.5–2 months to show roots. The tab gives ranges and names the cultivar effect instead of a single recipe.',
      fr: 'L’AIB à 0,2–0,3 % du PDF est plausible, mais les essais vont de 2 000 à 5 000 ppm, l’enracinement de 20 à 90 % selon le cultivar, et le marcottage aérien met environ 1,5–2 mois à montrer des racines. L’onglet donne des plages et nomme l’effet cultivar au lieu d’une recette unique.',
    },
    src: ['florida-olive', 'swan-olive'],
  },
  {
    title: { en: 'Pinus: “easier” pines are still difficult, and the cold storage is not Scots pine', fr: 'Pinus : les pins « plus faciles » restent difficiles, et le froid n’est pas du pin sylvestre' },
    body: {
      en: 'The PDF calls P. mugo and P. strobus easier than P. sylvestris. Even those need juvenile wood, auxin and several months; “easier” is relative, not easy. The four-week cold storage quoted for pines comes from work on P. halepensis, not on P. sylvestris, and must not be transferred as a general rule.',
      fr: 'Le PDF qualifie P. mugo et P. strobus de plus faciles que P. sylvestris. Même eux demandent du bois juvénile, de l’auxine et plusieurs mois ; « plus facile » est relatif, pas facile. Le stockage au froid de quatre semaines cité pour les pins vient de travaux sur P. halepensis, pas sur P. sylvestris, et ne doit pas être transposé en règle générale.',
    },
    src: ['ncsu-cuttings', 'riov2020'],
  },
  {
    title: { en: '“Aoûtée” in February: the word describes the wood, not the month', fr: '« Aoûtée » en février : le mot décrit le bois, pas le mois' },
    body: {
      en: 'The PDF schedules “aoûtées” cuttings in February. In February the wood is dormant hardwood, not a hardened current-year shoot: “aoûtée” names wood that has lost its green colour and hardened, whatever the calendar month. The tab uses “hardwood (dormant)” and explains the term in the confusions.',
      fr: 'Le PDF programme des boutures « aoûtées » en février. En février, le bois est du bois dormant, pas une pousse de l’année durcie : « aoûtée » désigne un bois qui a perdu sa couleur verte et durci, quel que soit le mois du calendrier. L’onglet emploie « aoûtée (bois dormant) » et explique le terme dans les confusions.',
    },
    src: ['rhs-hardwood', 'hartmann2011'],
  },
  {
    title: { en: 'Sources: newspaper articles, blogs and ResearchGate are not enough', fr: 'Sources : articles de presse, blogs et ResearchGate ne suffisent pas' },
    body: {
      en: 'The PDF relies on the Straits Times, Hunker, Weekand, Houzz, Greg, Plantura and FarmersOrbit. These pages can inspire a trial, but they are not evidence. Every protocol in this tab is attached to an extension service, a trial station or a peer-reviewed paper. Where evidence is only horticultural practice (the 5–7-day cactus callus), the text says so.',
      fr: 'Le PDF s’appuie sur le Straits Times, Hunker, Weekand, Houzz, Greg, Plantura et FarmersOrbit. Ces pages peuvent inspirer un essai, mais ne sont pas des preuves. Chaque protocole de cet onglet est rattaché à un service de vulgarisation, une station d’essai ou un article à comité de lecture. Là où la preuve n’est qu’une pratique horticole (le cal de 5–7 jours du cactus), le texte le dit.',
    },
    src: ['hartmann2011', 'ncsu-cuttings'],
  },
];
