// Translation pitfalls, shown as yellow boxes on the entries they concern.
// Paragraphs may use {{entry-id}} or {{entry-id|text}} links, [[de:Wort]]
// foreign words and ^source,ids^ citations. Written in our own words from
// the cited sources.

export const NOTES = {
  'rinde-borke': {
    title: { en: 'Rinde, Borke, Bast: German words for bark', fr: 'Rinde, Borke, Bast : l’écorce en allemand' },
    body: {
      en: [
        'In everyday German, [[de:Rinde]] is the outer layer of a trunk or root. Plant anatomy splits it: [[de:primäre Rinde]] is the {{cortex}}, the ground tissue of a young stem between epidermis and vascular bundles; [[de:sekundäre Rinde]] is what the cambium makes towards the outside, also called [[de:Bast]] (the {{secondary-phloem}}). In the wide sense used in raw-material science and pharmacognosy, sekundäre Rinde covers everything outside the cambium, the English {{bark}}; the periderm is sometimes even called [[de:tertiäre Rinde]]. In everyday speech, Rinde often means only the outer protective layer, the periderm or the Borke. ^spektrum,wpde^',
        '[[de:Borke]] (or [[de:Rhytidom]]) is only the dead outer bark: old phloem and cortex cut off by successive cork layers, the {{rhytidome}}. A beech keeps its first cork cambium all its life, so it has a smooth Rinde but no real Borke. ^spektrum^',
        'So never translate the cortex by plain “Rinde”: say “primäre Rinde”. Wood layers have their own words: [[de:Splint]] or [[de:Splintholz]] = {{sapwood}}, [[de:Kernholz]] = {{heartwood}}. German Splint was borrowed from English, but English “splint” does not mean sapwood. ^spektrum^',
      ],
      fr: [
        'En allemand courant, [[de:Rinde]] est la couche externe d’un tronc ou d’une racine. L’anatomie la divise : [[de:primäre Rinde]] est le {{cortex}}, le tissu fondamental d’une jeune tige entre l’épiderme et les faisceaux ; [[de:sekundäre Rinde]] est ce que le cambium produit vers l’extérieur, aussi appelé [[de:Bast]] (le {{secondary-phloem}}). Au sens large de la science des matières premières végétales et de la pharmacognosie, sekundäre Rinde couvre tout ce qui est à l’extérieur du cambium : l’{{bark}} ; le périderme est même parfois appelé [[de:tertiäre Rinde]]. Dans la langue courante, Rinde ne désigne souvent que la couche protectrice externe, le périderme ou la Borke. ^spektrum,wpde^',
        '[[de:Borke]] (ou [[de:Rhytidom]]) n’est que l’écorce externe morte : vieux phloème et cortex isolés par des couches de liège successives, le {{rhytidome}}. Le hêtre garde toute sa vie son premier cambium subéreux : il a une Rinde lisse mais pas de vraie Borke. ^spektrum^',
        'Ne traduisez donc jamais le cortex par « Rinde » tout court : dites « primäre Rinde ». Les couches du bois ont leurs propres mots : [[de:Splint]] ou [[de:Splintholz]] = {{sapwood}}, [[de:Kernholz]] = {{heartwood}}. L’allemand Splint vient de l’anglais, mais l’anglais « splint » ne veut pas dire aubier. ^spektrum^',
      ],
    },
    src: ['spektrum', 'wpde'],
  },
  'ecorce-liber': {
    title: { en: 'French écorce and liber, Latin cortex and liber', fr: 'Écorce et liber en français, cortex et liber en latin' },
    body: {
      en: [
        'French [[fr:écorce]] is the {{bark}} that can be peeled off a trunk, but French teaching of the young stem also says écorce, or écorce primaire, for the {{cortex}}: “l’écorce (ou cortex)”. The word [[fr:cortex]] has no botanical sense in the TLFi; in plant anatomy it is a recent technical loan. Read the context: in a primary stem écorce is the cortex, on a tree it is the bark. ^cnrtl,wpfr,g1-jussieu,iate^',
        'French [[fr:liber]] is the phloem, in practice usually the {{secondary-phloem}}, which German calls [[de:Bast]]. Classical Latin [[la:liber]] was the whole inner bark (people wrote on it, hence “book”), and [[la:cortex]] the bark or rind as a whole, not the tissue cortex. English “bast” mostly means phloem fibres. French [[fr:aubier]], the {{sapwood}}, comes from Latin [[la:alburnum]]. ^ls,cnrtl,spektrum^',
        'The list of trunk layers in Linnaeus’ Philosophia Botanica (1751, §79) runs from the inside out: medulla, lignum, liber, cortex, epidermis. The version with alburnum added is in a 1775 English compilation of Linnaeus by Hugh Rose. ^g1-linnaeus-pb,g1-rose1775^',
      ],
      fr: [
        'L’[[fr:écorce]] est en français ce qui se détache du tronc, l’{{bark}} au sens courant, mais l’enseignement de la jeune tige emploie aussi écorce, ou écorce primaire, pour le {{cortex}} : « l’écorce (ou cortex) ». Le mot [[fr:cortex]] n’a pas de sens botanique dans le TLFi ; en anatomie végétale c’est un emprunt technique récent. Lisez le contexte : dans une tige primaire l’écorce est le cortex, sur un arbre c’est l’écorce au sens courant. ^cnrtl,wpfr,g1-jussieu,iate^',
        'Le [[fr:liber]] est le phloème, en pratique surtout le {{secondary-phloem|phloème secondaire}}, que l’allemand appelle [[de:Bast]]. En latin classique, [[la:liber]] était toute l’écorce interne (on y écrivait, d’où « livre »), et [[la:cortex]] l’écorce dans son ensemble, pas le tissu cortex. L’anglais « bast » désigne surtout les fibres du phloème. L’[[fr:aubier]] ({{sapwood}}) vient du latin [[la:alburnum]]. ^ls,cnrtl,spektrum^',
        'La liste des couches du tronc, dans la Philosophia Botanica de Linné (1751, §79), va de l’intérieur vers l’extérieur : medulla, lignum, liber, cortex, epidermis. La version qui ajoute alburnum se trouve dans une compilation anglaise de Linné par Hugh Rose (1775). ^g1-linnaeus-pb,g1-rose1775^',
      ],
    },
    src: ['cnrtl', 'ls', 'g1-linnaeus-pb'],
  },
  'cortex-bark': {
    title: { en: 'Cortex, a tissue; bark, everything outside the cambium', fr: 'Le cortex, un tissu ; l’écorce, tout ce qui est hors du cambium' },
    body: {
      en: [
        'The {{cortex}} is a primary tissue: the ground tissue between the epidermis and the vascular system of a young stem or root. {{bark|Bark}} is not a tissue but everything outside the {{vascular-cambium}}: secondary and primary phloem, what is left of the cortex, the periderms and sometimes the epidermis. In a mature trunk it is split into a living inner bark (secondary phloem, conducting or not) and a dead outer bark, the {{rhytidome}}. Bark is not the same as the {{periderm}}, and the English word is often used loosely for the cork layer alone. ^po,g1-shtein2023,g1-nickrent,openstax^',
        'How long the cortex lasts depends on where the first cork cambium ({{phellogen}}) forms. Usually it arises in the outer cortex, often just under the epidermis (ivy, Pelargonium): the cortex stays alive inside it for a while. Later periderms form deeper and deeper, in the old secondary phloem, and cut off the cortex together with old phloem, which become part of the rhytidome. In grapevine, currants and barberry the first periderm already forms deep in the primary phloem, and the cortex outside it dies at once. ^g1-nickrent,spektrum,g1-biovegbe,g1-shtein2023^',
      ],
      fr: [
        'Le {{cortex}} est un tissu primaire : le tissu fondamental entre l’épiderme et le système conducteur d’une jeune tige ou racine. L’{{bark}} n’est pas un tissu mais tout ce qui est à l’extérieur du {{vascular-cambium}} : phloèmes secondaire et primaire, ce qui reste du cortex, les péridermes et parfois l’épiderme. Sur un tronc âgé, on distingue une écorce interne vivante (phloème secondaire, conducteur ou non) et une écorce externe morte, le {{rhytidome}}. L’écorce n’est pas le {{periderm}}, et l’anglais « bark » sert souvent, à tort, pour la seule couche de liège. ^po,g1-shtein2023,g1-nickrent,openstax^',
        'La durée de vie du cortex dépend de l’endroit où naît le premier cambium subéreux ({{phellogen}}). Le plus souvent dans le cortex externe, souvent juste sous l’épiderme (lierre, Pelargonium) : le cortex reste vivant à l’intérieur un certain temps. Les péridermes suivants se forment de plus en plus profond, dans le vieux phloème secondaire, et isolent le cortex avec le vieux phloème, qui passent dans le rhytidome. Chez la vigne, les groseilliers et l’épine-vinette, le premier périderme se forme déjà dans le phloème primaire, et le cortex à l’extérieur meurt aussitôt. ^g1-nickrent,spektrum,g1-biovegbe,g1-shtein2023^',
      ],
    },
    src: ['po', 'g1-shtein2023', 'g1-nickrent'],
  },
  tuepfel: {
    title: { en: 'Tüpfel, ponctuation, pit: one structure, many words', fr: 'Tüpfel, ponctuation, pit : une structure, beaucoup de mots' },
    body: {
      en: [
        'A {{pit}} (DE [[de:Tüpfel]], FR [[fr:ponctuation]]) is a gap in the secondary wall where the cell keeps only a thin {{pit-membrane}} (DE [[de:Schließhaut]]): middle lamella plus the two primary walls. A pit is not a hole: the membrane stays. Pits usually face each other in neighbouring cells: a {{pit-pair}}, DE [[de:Tüpfelpaar]]. All the pits of a wall together are the pitting, DE [[de:Tüpfelung]]; French says ponctuation for both. ^spektrum,g6-iawa1964,g6-gdt^',
        'In a thick wall the pit opens into the cell through a passage, the {{pit-canal}} (DE [[de:Tüpfelkanal]], FR canal d’une ponctuation): in a {{bordered-pit}} it runs from the inner aperture, on the lumen side, to the outer aperture, on the side of the {{pit-chamber}} (DE [[de:Tüpfelkammer]]). The opening itself is the {{pit-aperture}}, DE [[de:Porus]] or [[de:Tüpfelöffnung]]. ^g6-iawa1964,spektrum,iate^',
        'German [[de:Hoftüpfel]] is the bordered pit; the [[de:Hof]] is only its border, the arched wall seen as a halo around the aperture (the {{pit-border}}, FR aréole). “Tüpfelhof” is not an established term. In conifers the membrane has a thick {{torus}} held by a porous {{margo}}, which French calls marge. ^spektrum,wpde,g6-gdt,iawa-sw^',
        'Do not mix pits with {{primary-pit-field}}s ([[de:primäres Tüpfelfeld]]): thin areas of the primary wall crossed by {{plasmodesma|plasmodesmata}}, found before any secondary wall. Some texts loosely call them “primary pits” or describe pits as groups of plasmodesmata; strictly a pit needs a secondary wall. Pits were long taken for holes and called pores (DE [[de:Poren]], Latin pori), until Mohl showed in 1828 that they are thin places. ^g6-iawa1964,wpen,wpde,g6-link1837^',
      ],
      fr: [
        'Une {{pit}} (DE [[de:Tüpfel]], EN [[en:pit]]) est une lacune de la paroi secondaire où la cellule ne garde qu’une fine {{pit-membrane}} (DE [[de:Schließhaut]]) : lamelle moyenne et les deux parois primaires. Ce n’est pas un trou : la membrane demeure. Les ponctuations se font face d’une cellule à l’autre : une {{pit-pair}}, DE [[de:Tüpfelpaar]]. L’ensemble des ponctuations d’une paroi se dit en allemand [[de:Tüpfelung]], en anglais pitting ; le français dit ponctuation dans les deux cas. ^spektrum,g6-iawa1964,g6-gdt^',
        'Dans une paroi épaisse, la ponctuation s’ouvre dans la cellule par un passage, le {{pit-canal}} (DE [[de:Tüpfelkanal]]) : dans une {{bordered-pit}}, il va de l’ouverture interne, côté lumen, à l’ouverture externe, côté {{pit-chamber}} (DE [[de:Tüpfelkammer]]). L’ouverture elle-même est l’{{pit-aperture}}, DE [[de:Porus]] ou [[de:Tüpfelöffnung]]. ^g6-iawa1964,spektrum,iate^',
        'L’allemand [[de:Hoftüpfel]] est la ponctuation aréolée ; le [[de:Hof]] n’est que sa bordure, la paroi en voûte vue comme un halo autour de l’ouverture ({{pit-border}}). « Tüpfelhof » n’est pas un terme établi. Chez les conifères, la membrane porte un {{torus}} épais tenu par une {{margo}} poreuse. ^spektrum,wpde,g6-gdt,iawa-sw^',
        'Ne confondez pas avec les {{primary-pit-field|champs de ponctuation}} ([[de:primäres Tüpfelfeld]]) : des zones minces de la paroi primaire traversées par des {{plasmodesma|plasmodesmes}}, présentes avant toute paroi secondaire. Certains textes parlent à tort de « ponctuations primaires » ou décrivent les ponctuations comme des groupes de plasmodesmes ; au sens strict, une ponctuation suppose une paroi secondaire. On a longtemps pris les ponctuations pour des trous, appelés pores (DE [[de:Poren]], latin pori), jusqu’à ce que Mohl montre en 1828 que ce sont des zones minces. ^g6-iawa1964,wpen,wpde,g6-link1837^',
      ],
    },
    src: ['spektrum', 'g6-iawa1964', 'iate', 'g6-gdt'],
  },
  'ponctuation-pit': {
    title: { en: 'Ponctuation is not punctuation; a pit is also a fruit stone', fr: 'Une ponctuation n’est pas une « punctuation » ; un « pit » est aussi un noyau' },
    body: {
      en: [
        'French [[fr:ponctuation]] first means punctuation in a text; in botany it is the {{pit}} of a cell wall, named for the dot it looks like. English “punctation” exists but means spots or tiny depressions in general: translate the French by “pit”, and “ponctué” by “pitted”. ^cnrtl,g6-wiktionary^',
        'English “pit” is itself ambiguous: in American English it is also the stone of a cherry or a peach, the {{endocarp}} of a {{drupe}} with its seed, which French calls [[fr:noyau]]. And French noyau is also the cell {{nucleus}}. Latin [[la:nucleus]] already meant both a kernel and a fruit stone. ^g6-cambridge,cnrtl,ls^',
      ],
      fr: [
        'La [[fr:ponctuation]] d’un texte se dit en anglais « punctuation » ; en botanique, la ponctuation d’une paroi est un « pit » ({{pit}}), nommée d’après le point qu’elle dessine. L’anglais « punctation » existe mais veut dire des taches ou petites dépressions en général : traduisez ponctuation par « pit », et « ponctué » par « pitted ». ^cnrtl,g6-wiktionary^',
        'L’anglais « pit » est lui-même ambigu : en anglais américain c’est aussi le noyau de la cerise ou de la pêche, l’{{endocarp}} d’une {{drupe}} avec sa graine. Et le [[fr:noyau]] français est aussi le {{nucleus}} de la cellule. Le latin [[la:nucleus]] désignait déjà l’amande et le noyau d’un fruit. ^g6-cambridge,cnrtl,ls^',
      ],
    },
    src: ['cnrtl', 'g6-cambridge', 'ls'],
  },
  'protoplast-protoplasma': {
    title: { en: 'Protoplast is not Protoplasma (protoplasm)', fr: 'Le protoplaste n’est pas le protoplasme' },
    body: {
      en: [
        'The {{protoplast}} (a word of Hanstein, 1880) is a unit: the living cell without its wall, the plasma membrane and everything inside it, nucleus, cytoplasm and vacuoles included. In the laboratory the word also means a cell whose wall has been removed with enzymes; the Plant Ontology and the TLFi only have this sense. ^spektrum,wpde,wpen,po,cnrtl^',
        'Protoplasm (DE [[de:Protoplasma]], FR [[fr:protoplasme]] or protoplasma) is a substance: an old, loosely used name for the living content of the cell, {{nucleus}} plus {{cytoplasm}}. It is hardly used today; German says [[de:Cytoplasma]] or [[de:Zytoplasma]] for the cytoplasm. The sap of the {{vacuole}} is inside the protoplast but was not counted in the protoplasm. ^spektrum,wpde,cnrtl,wpen^',
        'French is muddled: French Wikipedia sends “protoplasme” to “cytoplasme”, and IATE even lists protoplasme as a French word for protoplast, which is wrong. And late Latin [[la:protoplastus]] is Adam, the first man. ^wpfr,iate,ls^',
      ],
      fr: [
        'Le {{protoplast}} (mot de Hanstein, 1880) est une unité : la cellule vivante sans sa paroi, la membrane plasmique et tout ce qu’elle contient, noyau, cytoplasme et vacuoles compris. Au laboratoire, le mot désigne aussi une cellule dont on a retiré la paroi par des enzymes ; la Plant Ontology et le TLFi n’ont que ce sens. ^spektrum,wpde,wpen,po,cnrtl^',
        'Le protoplasme (DE [[de:Protoplasma]], aussi protoplasma) est une substance : un ancien nom, employé de façon floue, pour le contenu vivant de la cellule, {{nucleus}} et {{cytoplasm}}. Il n’est presque plus employé ; l’allemand dit [[de:Cytoplasma]] ou [[de:Zytoplasma]] pour le cytoplasme. Le suc de la {{vacuole}} est dans le protoplaste mais n’était pas compté dans le protoplasme. ^spektrum,wpde,cnrtl,wpen^',
        'Le français s’y perd : Wikipédia renvoie « protoplasme » vers « cytoplasme », et IATE donne même protoplasme comme équivalent de protoplaste, à tort. Et le latin tardif [[la:protoplastus]] désigne Adam, le premier homme. ^wpfr,iate,ls^',
      ],
    },
    src: ['spektrum', 'cnrtl', 'wpde'],
  },
  'spine-thorn-prickle': {
    title: { en: 'Spine, thorn, prickle; épine, aiguillon; Dorn, Stachel', fr: 'Épine, aiguillon ; spine, thorn, prickle ; Dorn, Stachel' },
    body: {
      en: [
        'Botanical English has three words: a {{leaf-spine|spine}} is a modified leaf (cactus, barberry), a {{thorn}} a modified shoot (hawthorn, blackthorn), a {{prickle}} an outgrowth of the epidermis without vascular tissue, which snaps off cleanly (rose, bramble). French and German have two: [[fr:épine]] and [[de:Dorn]] for any pointed organ (DE [[de:Blattdorn]] for the spine, [[de:Sprossdorn]] for the thorn), [[fr:aiguillon]] and [[de:Stachel]] for the prickle. ^po,cnrtl,wpfr,wpde^',
        'So the rose botanically has prickles, aiguillons, [[de:Stacheln]], not the “thorns” or “épines” of everyday speech; and German [[de:Stachel]] is not English spine, even if cactus spines are called Stacheln in everyday German. Linnaeus already separated [[la:spina]], coming out of the wood, from [[la:aculeus]], fixed on the bark only. ^cnrtl,wpde,g1-linnaeus-pb^',
      ],
      fr: [
        'L’anglais botanique a trois mots : « spine », une {{leaf-spine|feuille transformée en épine}} (cactus, épine-vinette) ; « thorn », un {{thorn|rameau transformé en épine}} (aubépine, prunellier) ; « prickle », un {{prickle}}, excroissance de l’épiderme sans tissu conducteur, qui se détache net (rosier, ronce). Le français et l’allemand en ont deux : [[fr:épine]] et [[de:Dorn]] pour tout organe pointu (DE [[de:Blattdorn]] pour la feuille, [[de:Sprossdorn]] pour le rameau), [[fr:aiguillon]] et [[de:Stachel]] pour l’excroissance. ^po,cnrtl,wpfr,wpde^',
        'Le rosier porte donc, en botanique, des aiguillons ([[de:Stacheln]]), pas les « épines » du langage courant ; et l’allemand [[de:Stachel]] n’est pas l’anglais « spine », même si l’allemand courant appelle Stacheln les épines des cactus. Linné distinguait déjà [[la:spina]], qui sort du bois, d’[[la:aculeus]], fixé sur la seule écorce. ^cnrtl,wpde,g1-linnaeus-pb^',
      ],
    },
    src: ['po', 'cnrtl', 'wpde'],
  },
  trachee: {
    title: { en: 'German Trachee and French trachée are vessels, not tracheids', fr: 'Trachee et trachée sont des vaisseaux, pas des trachéides' },
    body: {
      en: [
        'In German and French plant anatomy, [[de:Trachee]] and [[fr:trachée]] mean a xylem {{vessel}} (German also says [[de:Gefäß]], French [[fr:vaisseau]]), the open tube built of {{vessel-element}}s. The {{tracheid}} is [[de:Tracheide]], [[fr:trachéide]]: a closed, tapering cell that passes water only through its pits; older French calls it a “vaisseau imparfait”. Never translate German Trachee by “tracheid”. ^spektrum,wpde,cnrtl,g5-tanguy^',
        'The name goes back to Malpighi (1675), who compared the spiral tubes of wood with the air tubes of insects and thought they carried air; “tracheid” was coined much later, by Sanio in 1863. In English, “trachea” for a vessel is dated. ^g5-malpighi,cnrtl,g5-wiktionary^',
      ],
      fr: [
        'En anatomie végétale, l’allemand [[de:Trachee]] et le français [[fr:trachée]] désignent un {{vessel}} du xylème (allemand [[de:Gefäß]]), le tube ouvert formé d’{{vessel-element|éléments de vaisseau}}. La {{tracheid}} se dit [[de:Tracheide]] : une cellule close et effilée qui ne laisse passer l’eau que par ses ponctuations, le « vaisseau imparfait » des textes anciens. Ne traduisez jamais Trachee par « trachéide ». ^spektrum,wpde,cnrtl,g5-tanguy^',
        'Le nom vient de Malpighi (1675), qui comparait les tubes spiralés du bois aux trachées des insectes et pensait qu’ils portaient de l’air ; « trachéide » a été forgé bien plus tard, par Sanio en 1863. En anglais, « trachea » pour un vaisseau est vieilli. ^g5-malpighi,cnrtl,g5-wiktionary^',
      ],
    },
    src: ['spektrum', 'cnrtl', 'wpde'],
  },
  albumen: {
    title: { en: 'Albumen: endosperm in French, egg white in English', fr: 'Albumen : l’endosperme en français, le blanc d’œuf en anglais' },
    body: {
      en: [
        'In French botany [[fr:albumen]] is the normal word for the {{endosperm}}, the food tissue of the seed. In English and in classical Latin, albumen is egg white; older English botany and the Plant Ontology still list it as a synonym of endosperm. German botanists say [[de:Endosperm]]; [[de:Nährgewebe]] is broader and also covers the {{perisperm}}. ^cnrtl,ls,po,spektrum^',
      ],
      fr: [
        'En botanique française, l’[[fr:albumen]] est le mot courant pour l’endosperme ({{endosperm}}), le tissu de réserve de la graine. En anglais et en latin classique, albumen est le blanc d’œuf ; les vieux textes anglais et la Plant Ontology le gardent comme synonyme d’endosperme. Les botanistes allemands disent [[de:Endosperm]] ; [[de:Nährgewebe]] est plus large et couvre aussi le {{perisperm}}. ^cnrtl,ls,po,spektrum^',
      ],
    },
    src: ['cnrtl', 'po', 'spektrum'],
  },
  'graine-semence': {
    title: { en: 'Graine, semence, seed, Samen: what is sown is often a fruit', fr: 'Graine, semence, seed, Samen : ce qu’on sème est souvent un fruit' },
    body: {
      en: [
        'French [[fr:graine]] is the botanical {{seed}}, which comes from an ovule. [[fr:Semence]] is whatever is sown or planted, seed potatoes included. English “seed” and German [[de:Samen]] have the same broad everyday sense. Many “seeds” of the seed trade are botanically fruits: sunflower and strawberry “seeds” are {{achene}}s, cereal grains are {{caryopsis|caryopses}}. ^cnrtl,wpen,spektrum^',
      ],
      fr: [
        'La [[fr:graine]] est la {{seed}} au sens botanique, issue d’un ovule. La [[fr:semence]] est tout ce qu’on sème ou plante, pommes de terre de semence comprises. L’anglais « seed » et l’allemand [[de:Samen]] ont le même sens large au quotidien. Beaucoup de « graines » du commerce sont des fruits : celles du tournesol et de la fraise sont des {{achene|akènes}}, les grains de céréales des {{caryopsis|caryopses}}. ^cnrtl,wpen,spektrum^',
      ],
    },
    src: ['cnrtl', 'spektrum'],
  },
  'berry-fruit': {
    title: { en: 'Berry, baie, Beere: botanical or in the kitchen?', fr: 'Baie, berry, Beere : en botanique ou en cuisine ?' },
    body: {
      en: [
        'A botanical {{berry}} is a closed fruit whose whole wall is fleshy: grapes, tomatoes, peppers, currants, dates, bananas and citrus are berries. Strawberries (a swollen receptacle carrying achenes) and raspberries or blackberries (groups of small drupes) are not. French [[fr:baie]] and German [[de:Beere]] have the same trap; German groups the everyday ones as [[de:Beerenobst]]. ^wpen,spektrum,po^',
        'Careful with {{aggregate-fruit}} and {{multiple-fruit}}: the words are swapped between languages. English “aggregate fruit” (one flower, several carpels: raspberry) is French [[fr:fruit multiple]] and German [[de:Sammelfrucht]]; English “multiple fruit” (a whole inflorescence: pineapple, fig) is French [[fr:fruit composé]] or infrutescence and German [[de:Fruchtverband]]. ^wpen,wpfr,wpde,g4-uclouvain^',
      ],
      fr: [
        'Une {{berry}} au sens botanique est un fruit clos dont toute la paroi est charnue : raisin, tomate, poivron, groseille, datte, banane et agrumes sont des baies. La fraise (un réceptacle gonflé portant des akènes), la framboise et la mûre (des groupes de petites drupes) n’en sont pas. L’anglais « berry » et l’allemand [[de:Beere]] ont le même piège ; l’allemand range les baies du quotidien dans le [[de:Beerenobst]]. ^wpen,spektrum,po^',
        'Attention aux mots {{aggregate-fruit|fruit multiple}} et {{multiple-fruit|fruit composé}} : ils sont inversés d’une langue à l’autre. L’anglais « aggregate fruit » (une fleur, plusieurs carpelles : framboise) est en français le [[fr:fruit multiple]], en allemand [[de:Sammelfrucht]] ; l’anglais « multiple fruit » (toute une inflorescence : ananas, figue) est le [[fr:fruit composé]] ou infrutescence, en allemand [[de:Fruchtverband]]. ^wpen,wpfr,wpde,g4-uclouvain^',
      ],
    },
    src: ['wpen', 'spektrum', 'wpfr'],
  },
  'ovule-fr': {
    title: { en: 'French ovule: the plant ovule, or the animal egg?', fr: 'Ovule : celui de la plante, ou l’œuf animal ?' },
    body: {
      en: [
        'English {{ovule}} and French [[fr:ovule]] look the same, but in everyday French, and first in the TLFi, ovule is the egg cell of animals and humans; the plant ovule comes second. The plant {{egg-cell}}, inside the ovule, is French [[fr:oosphère]] and German [[de:Eizelle]]; German avoids the trap with [[de:Samenanlage]] for the ovule. ^cnrtl,spektrum,wpfr^',
      ],
      fr: [
        'L’anglais « ovule » et le français [[fr:ovule]] ({{ovule}}) se ressemblent, mais en français courant, et en premier dans le TLFi, l’ovule est la cellule-œuf des animaux et de l’humain ; l’ovule végétal ne vient qu’ensuite. La cellule reproductrice femelle de la plante, dans l’ovule, est l’{{egg-cell}}, en allemand [[de:Eizelle]] ; l’allemand évite le piège avec [[de:Samenanlage]] pour l’ovule. ^cnrtl,spektrum,wpfr^',
      ],
    },
    src: ['cnrtl', 'spektrum'],
  },
  'pistil-carpel': {
    title: { en: 'Pistil, carpel, gynoecium', fr: 'Pistil, carpelle, gynécée' },
    body: {
      en: [
        'The {{carpel}} is the basic female organ; the {{gynoecium}} is all the carpels of a flower; a {{pistil}} is one visible female unit, ovary, style and stigma, made of one free carpel or several fused ones. A buttercup has many pistils, a tulip one pistil of three carpels. The TLFi gives [[fr:gynécée]] as a synonym of pistil, and German [[de:Stempel]] is used like the English pistil. ^po,cnrtl,wpde^',
      ],
      fr: [
        'Le {{carpel}} est l’organe femelle de base ; le {{gynoecium}} est l’ensemble des carpelles d’une fleur ; un {{pistil}} est une unité femelle visible, ovaire, style et stigmate, formée d’un carpelle libre ou de plusieurs soudés. Une renoncule a de nombreux pistils, une tulipe un seul pistil de trois carpelles. Le TLFi donne [[fr:gynécée]] comme synonyme de pistil, et l’allemand [[de:Stempel]] s’emploie comme pistil. ^po,cnrtl,wpde^',
      ],
    },
    src: ['po', 'cnrtl'],
  },
  'stoma-ostiole': {
    title: { en: 'Stoma: the pore, or the whole apparatus?', fr: 'Stomate et ostiole' },
    body: {
      en: [
        'English “{{stoma}}” is used both for the pore and for the whole device, pore plus {{guard-cell}}s. French keeps them apart: [[fr:stomate]] is the device, [[fr:ostiole]] the opening between the guard cells (the {{stomatal-pore}}). German [[de:Spaltöffnung]] is the pair of guard cells with their slit; with the {{subsidiary-cell}}s it is the [[de:Spaltöffnungsapparat]]. English “ostiole” mostly means the opening of a fungus or a fig, not the stomatal pore. ^po,cnrtl,wpfr,spektrum^',
      ],
      fr: [
        'L’anglais « stoma » sert à la fois pour le pore et pour tout le dispositif, pore et {{guard-cell|cellules de garde}}. Le français les distingue : le [[fr:stomate]] ({{stoma}}) est le dispositif, l’[[fr:ostiole]] l’ouverture entre les cellules de garde ({{stomatal-pore}}). L’allemand [[de:Spaltöffnung]] désigne la paire de cellules de garde avec leur fente ; avec les {{subsidiary-cell|cellules annexes}}, c’est le [[de:Spaltöffnungsapparat]]. L’anglais « ostiole » désigne surtout l’ouverture d’un champignon ou d’une figue, pas celle du stomate. ^po,cnrtl,wpfr,spektrum^',
      ],
    },
    src: ['po', 'cnrtl', 'spektrum'],
  },
  'membrane-wall': {
    title: { en: 'Membrane: a wall, or a membrane?', fr: 'Membrane : paroi ou membrane ?' },
    body: {
      en: [
        'Older French botany often says [[fr:membrane]] for the {{cell-wall}} (“membrane cellulosique”), while German [[de:Zellmembran]] and English cell membrane are the {{plasma-membrane}}. The {{pit-membrane}} (DE [[de:Schließhaut]]) is not a membrane in the cell-biology sense either: it is a thin piece of wall, middle lamella and primary walls. ^cnrtl,wpde,wpfr,spektrum^',
      ],
      fr: [
        'La botanique française ancienne dit souvent [[fr:membrane]] pour la {{cell-wall}} (« membrane cellulosique »), alors que l’allemand [[de:Zellmembran]] et l’anglais cell membrane désignent la {{plasma-membrane}}. La {{pit-membrane}} (DE [[de:Schließhaut]]) n’est pas non plus une membrane au sens de la biologie cellulaire : c’est un mince morceau de paroi, lamelle moyenne et parois primaires. ^cnrtl,wpde,wpfr,spektrum^',
      ],
    },
    src: ['cnrtl', 'spektrum'],
  },
  'medullary-ray': {
    title: { en: 'Medullary ray: pith ray or wood ray?', fr: 'Rayon médullaire : de la moelle ou du bois ?' },
    body: {
      en: [
        'The Plant Ontology uses “medullary ray” for the {{pith-ray}}, the primary tissue between the vascular bundles, but English usage often applies it to the rays in wood. German separates [[de:Markstrahl]] (primary, from cortex to pith) from [[de:Holzstrahl]] (the {{wood-ray}}, ending in the wood); French [[fr:rayon médullaire]] from [[fr:rayon ligneux]]. ^po,spektrum,iate,wpde^',
      ],
      fr: [
        'La Plant Ontology emploie « medullary ray » pour le {{pith-ray}}, le tissu primaire entre les faisceaux, mais l’usage anglais l’applique souvent aux rayons du bois. L’allemand distingue [[de:Markstrahl]] (primaire, du cortex à la moelle) et [[de:Holzstrahl]] ({{wood-ray}}, qui se termine dans le bois) ; le français [[fr:rayon médullaire]] et [[fr:rayon ligneux]]. ^po,spektrum,iate,wpde^',
      ],
    },
    src: ['po', 'spektrum', 'iate'],
  },
  porus: {
    title: { en: 'Porus: three different openings', fr: 'Porus : trois ouvertures différentes' },
    body: {
      en: [
        'German [[de:Porus]] (plural Pori) names three unrelated openings. In a cell wall it is the {{pit-aperture}}, the opening of a pit into the cell (also [[de:Tüpfelöffnung]]). In a leaf it can be the {{stomatal-pore}}, the slit between the two guard cells, more often called [[de:Spalt]] (French [[fr:ostiole]]). In pollen it is a round {{pollen-pore|germ pore}} in the wall, as opposed to a long furrow (colpus). The context, wall, leaf or pollen, tells which one is meant. ^wpde,spektrum,g7-punt2007^',
        'English says “pit aperture” and “stomatal pore”; the Latin word survives in English mainly in palynology, where “porus” is a synonym of pore. Two more traps: Latin pori (German Poren) once meant the pits themselves, until Mohl showed in 1828 that they are thin places, not holes ({{pit}}); and in wood descriptions, English “pore” (German [[de:Pore]]) is a vessel seen in cross-section. ^g6-iawa1964,po,g7-punt2007,g6-link1837,iate^',
      ],
      fr: [
        'L’allemand [[de:Porus]] (pluriel Pori) désigne trois ouvertures sans rapport entre elles. Dans une paroi, c’est l’{{pit-aperture}}, l’ouverture d’une ponctuation vers l’intérieur de la cellule (aussi [[de:Tüpfelöffnung]]). Dans une feuille, ce peut être l’{{stomatal-pore}}, la fente entre les deux cellules de garde, plus souvent appelée [[de:Spalt]]. Dans le pollen, c’est un {{pollen-pore}} rond de la paroi, par opposition au sillon allongé (colpus). Le contexte, paroi, feuille ou pollen, dit lequel est visé. ^wpde,spektrum,g7-punt2007^',
        'L’anglais dit « pit aperture » et « stomatal pore » ; le mot latin ne survit guère en anglais qu’en palynologie, où « porus » est synonyme de pore. Deux pièges encore : le latin pori (allemand Poren) a d’abord désigné les ponctuations elles-mêmes, jusqu’à ce que Mohl montre en 1828 que ce sont des zones minces et non des trous ({{pit}}) ; et dans les descriptions du bois, l’anglais « pore » (allemand [[de:Pore]]) est un vaisseau vu en coupe transversale. ^g6-iawa1964,po,g7-punt2007,g6-link1837,iate^',
      ],
    },
    src: ['wpde', 'spektrum', 'g7-punt2007', 'iate'],
  },
  aleuron: {
    title: { en: 'Aleuron: a protein, or a layer?', fr: 'Aleurone : une protéine ou une couche ?' },
    body: {
      en: [
        'German [[de:Aleuron]] and French [[fr:aleurone]] (from the Greek for flour) are first the storage protein of seeds, kept as small grains ([[de:Aleuronkörner]], [[fr:grains d’aleurone]]) in many seeds, for example lupin, flax and castor bean. The layer of cells packed with these grains at the outside of a cereal endosperm is the {{aleurone-layer}}: [[de:Aleuronschicht]], [[fr:couche à aleurone]] or [[fr:assise protéique]]. English often shortens the layer to “the aleurone”, so the word alone can mean either. ^spektrum,cnrtl,wpfr,wpen,iate^',
      ],
      fr: [
        'L’allemand [[de:Aleuron]] et le français [[fr:aleurone]] (du grec pour « farine ») désignent d’abord la protéine de réserve des graines, présente sous forme de petits grains ([[de:Aleuronkörner]], grains d’aleurone) dans beaucoup de graines, par exemple le lupin, le lin et le ricin. La couche de cellules remplies de ces grains, à l’extérieur de l’albumen des céréales, est la {{aleurone-layer}} : [[de:Aleuronschicht]], couche à aleurone ou assise protéique. L’anglais abrège souvent la couche en « the aleurone », si bien que le mot seul peut désigner l’une ou l’autre. ^spektrum,cnrtl,wpfr,wpen,iate^',
      ],
    },
    src: ['spektrum', 'cnrtl', 'wpfr', 'iate'],
  },
  hypophyse: {
    title: { en: 'Hypophysis: a plant cell, a gland, a moss stalk', fr: 'Hypophyse : une cellule végétale, une glande, un pied de mousse' },
    body: {
      en: [
        'In all four languages the word is first of all medical: [[de:Hypophyse]], [[fr:hypophyse]], [[en:hypophysis]] is the pituitary gland at the base of the brain. The TLFi and IATE give only this sense, so a general dictionary will not help. ^cnrtl,iate,spektrum^',
        'In plant embryology, the {{hypophysis}} is one cell: the uppermost cell of the {{suspensor}}, which the embryo takes in and which builds the centre of the root tip. German also calls it [[de:Keimanschluss]]. ^spektrum,po,g2-luettge2010^',
        'In mosses, the swollen top of the capsule stalk, just below the capsule, is the [[de:Apophyse]], [[fr:apophyse]], [[en:apophysis]], and is sometimes also called hypophysis (Spektrum, Plant Ontology). The French Wikipedia article on the embryo cell gives apophyse as a synonym, which mixes the two senses: for the embryo, say hypophyse only. ^spektrum,po,wpfr^',
      ],
      fr: [
        'Dans les quatre langues, le mot est d’abord médical : [[de:Hypophyse]], hypophyse, [[en:hypophysis]] désigne la glande pituitaire, à la base du cerveau. Le TLFi et IATE ne donnent que ce sens : un dictionnaire général n’aide pas. ^cnrtl,iate,spektrum^',
        'En embryologie végétale, l’{{hypophysis}} est une cellule : la plus haute du {{suspensor}}, que l’embryon intègre et qui forme le centre de la pointe de la racine. L’allemand l’appelle aussi [[de:Keimanschluss]]. ^spektrum,po,g2-luettge2010^',
        'Chez les mousses, le renflement au sommet du pied de la capsule, juste sous celle-ci, est l’apophyse ([[de:Apophyse]], [[en:apophysis]]), parfois appelée aussi hypophyse (Spektrum, Plant Ontology). L’article de Wikipédia sur la cellule de l’embryon donne apophyse comme synonyme, ce qui mêle les deux sens : pour l’embryon, dites seulement hypophyse. ^spektrum,po,wpfr^',
      ],
    },
    src: ['spektrum', 'po', 'g2-luettge2010', 'cnrtl', 'iate'],
  },
  'primary-meristem': {
    title: { en: 'Primary meristem: three tissues, or the growing tip?', fr: 'Méristème primaire : trois tissus, ou la pointe en croissance ?' },
    body: {
      en: [
        'In English plant anatomy courses (for example Nickrent’s, which follows Esau’s Plant Anatomy), “the primary meristems” are three tissues: the {{protoderm}}, the {{ground-meristem}} and the {{procambium}}. The {{apical-meristem}} makes them, and they become the dermal, ground and vascular tissues. ^g8-nickrent^',
        'In French, [[fr:méristèmes primaires]] usually means the meristems of primary growth, the growth in length, as opposed to the [[fr:méristèmes secondaires]], cambium and phellogen; the apical meristems are the méristèmes primaires par excellence. German [[de:primäres Meristem]] is used both ways: Spektrum calls the procambium a primäres Meristem and the German Wikipedia counts the protoderm in it, while Lüttge, Kluge and Thiel call the whole root apical meristem primary because it comes straight from the embryo. So translate by context, and name protoderm, ground meristem and procambium when those are meant. ^wpfr,g8-unisciel,spektrum,wpde,g2-luettge2010^',
      ],
      fr: [
        'Dans les cours d’anatomie végétale anglophones (par exemple celui de Nickrent, qui suit le Plant Anatomy d’Esau), « the primary meristems » sont trois tissus : le {{protoderm}}, le {{ground-meristem}} et le {{procambium}}. Le {{apical-meristem}} les produit, et ils deviennent les tissus de revêtement, fondamentaux et conducteurs. ^g8-nickrent^',
        'En français, méristèmes primaires désigne en général les méristèmes de la croissance primaire, la croissance en longueur, par opposition aux méristèmes secondaires, cambium et phellogène ; les méristèmes apicaux sont les méristèmes primaires par excellence. L’allemand [[de:primäres Meristem]] s’emploie dans les deux sens : Spektrum appelle le procambium un primäres Meristem et la Wikipédia allemande y range le protoderme, tandis que Lüttge, Kluge et Thiel disent primaire tout le méristème apical de la racine, parce qu’il vient directement de l’embryon. Traduisez donc selon le contexte, et nommez protoderme, méristème fondamental et procambium quand ce sont eux qui sont visés. ^wpfr,g8-unisciel,spektrum,wpde,g2-luettge2010^',
      ],
    },
    src: ['g8-nickrent', 'wpfr', 'spektrum', 'g2-luettge2010'],
  },
  'secondary-meristem': {
    title: { en: 'Folgemeristem, secondary meristem, lateral meristem: origin or position?', fr: 'Folgemeristem, méristème secondaire, méristème latéral : origine ou position ?' },
    body: {
      en: [
        'German [[de:Folgemeristem]] (also [[de:sekundäres Bildungsgewebe]]) is defined by origin: a meristem formed by cells of a permanent tissue that start dividing again. It is opposed to the primary meristems, which come straight from the tissues of the embryo, and to their leftovers, the [[de:Restmeristeme]]. English {{lateral-meristem}} is defined by position: a meristem parallel to the surface that makes the organ thicker. ^spektrum,po^',
        'The two overlap but are not the same. The {{phellogen}} is both. The {{vascular-cambium}} of a stem is mixed: the {{fascicular-cambium}} is left over from the procambium, a primary cambium in German terms, and only the {{interfascicular-cambium}} is a Folgemeristem; in the lime type the whole cambium goes back to the apical meristem. French [[fr:méristèmes secondaires]] names the cambium and the phellogen by their work, secondary growth. So translate sekundäres Meristem by lateral meristem when the two cambia as a pair are meant, and keep the German distinction when the origin matters. ^spektrum,wpfr,g9-bvbe-racines,g8-nickrent^',
      ],
      fr: [
        'L’allemand [[de:Folgemeristem]] (aussi [[de:sekundäres Bildungsgewebe]]) se définit par l’origine : un méristème formé par des cellules d’un tissu adulte qui se remettent à se diviser. Il s’oppose aux méristèmes primaires, issus directement des tissus de l’embryon, et à leurs restes, les [[de:Restmeristeme]]. L’anglais {{lateral-meristem|lateral meristem}} se définit par la position : un méristème parallèle à la surface, qui fait grossir l’organe. ^spektrum,po^',
        'Les deux se recouvrent sans se confondre. Le {{phellogen}} est l’un et l’autre. Le {{vascular-cambium}} d’une tige est mixte : le {{fascicular-cambium}} est un reste du procambium, un cambium primaire au sens allemand, et seul le {{interfascicular-cambium}} est un Folgemeristem ; dans le type tilleul, tout le cambium remonte au méristème apical. Le français méristèmes secondaires nomme le cambium et le phellogène par leur travail, la croissance secondaire. Traduisez donc sekundäres Meristem par méristème secondaire ou latéral quand il s’agit des deux cambiums ensemble, et gardez la distinction allemande quand l’origine compte. ^spektrum,wpfr,g9-bvbe-racines,g8-nickrent^',
      ],
    },
    src: ['spektrum', 'po', 'wpfr', 'g9-bvbe-racines'],
  },
  bast: {
    title: { en: 'Bast: a tissue, a tying material, a fibre', fr: 'Bast : un tissu, un lien, une fibre' },
    body: {
      en: [
        'In German botany, [[de:Bast]] is the {{secondary-phloem}}: everything the cambium makes towards the outside, also called [[de:sekundäre Rinde]]. Spektrum splits it into [[de:Weichbast]], the sieve tubes, companion cells and parenchyma, and [[de:Hartbast]], the strands of {{phloem-fibre|bast fibres}}. Older texts also say [[de:Bastteil]] for {{phloem}} in general. ^spektrum,wpde^',
        'In everyday German, Bast is a plant fibre for tying and weaving (Duden). Gardeners once tied with strips of lime or willow bast fibres; the raffia used today ([[de:Raffiabast]]) is made from palm leaves, not from bark. Hunters’ Bast is something else again: the skin on a growing antler. ^g9-duden,spektrum,wpen,wpde^',
        'English “bast” is the inner bark, or its fibres in “bast fibre” (flax, hemp, jute); French says [[fr:liber]] for the tissue and [[fr:fibres libériennes]] for the fibres. A German [[de:Bastfaser]] is a phloem fibre, not any plant fibre. ^po,wpen,cnrtl,spektrum^',
      ],
      fr: [
        'En botanique allemande, [[de:Bast]] est le {{secondary-phloem}} : tout ce que le cambium produit vers l’extérieur, aussi appelé [[de:sekundäre Rinde]]. Spektrum le divise en [[de:Weichbast]], les tubes criblés, cellules compagnes et parenchyme, et [[de:Hartbast]], les cordons de {{phloem-fibre|fibres libériennes}}. Des textes anciens disent aussi [[de:Bastteil]] pour le {{phloem}} en général. ^spektrum,wpde^',
        'En allemand courant, Bast est une fibre végétale pour lier et tresser (Duden). Les jardiniers liaient autrefois avec des lanières de fibres de liber de tilleul ou de saule ; le raphia employé aujourd’hui ([[de:Raffiabast]]) vient de feuilles de palmier, pas d’une écorce. Le Bast des chasseurs est encore autre chose : la peau qui couvre un bois de cerf en croissance. ^g9-duden,spektrum,wpen,wpde^',
        'L’anglais « bast » désigne l’écorce interne, ou ses fibres dans « bast fibre » (lin, chanvre, jute) ; le français dit liber pour le tissu et fibres libériennes pour les fibres. Une [[de:Bastfaser]] allemande est une fibre libérienne, pas n’importe quelle fibre végétale. ^po,wpen,cnrtl,spektrum^',
      ],
    },
    src: ['spektrum', 'wpde', 'g9-duden', 'wpen'],
  },
};

/** Which entries show which notes. */
export const NOTE_ENTRIES = {
  'rinde-borke': ['bark', 'cortex', 'rhytidome', 'inner-bark', 'secondary-phloem', 'sapwood', 'heartwood'],
  'ecorce-liber': ['bark', 'cortex', 'inner-bark', 'secondary-phloem', 'sapwood'],
  'cortex-bark': ['cortex', 'bark', 'periderm', 'phellogen', 'rhytidome'],
  tuepfel: ['pit', 'bordered-pit', 'simple-pit', 'pit-pair', 'pit-membrane', 'pit-aperture', 'pit-canal', 'pit-chamber', 'pit-border', 'torus', 'margo', 'primary-pit-field'],
  'ponctuation-pit': ['pit', 'nucleus', 'endocarp', 'drupe'],
  'protoplast-protoplasma': ['protoplast', 'cytoplasm', 'vacuole'],
  'spine-thorn-prickle': ['leaf-spine', 'thorn', 'prickle'],
  trachee: ['vessel', 'vessel-element', 'tracheid', 'tracheary'],
  albumen: ['endosperm', 'perisperm'],
  'graine-semence': ['seed', 'achene', 'caryopsis'],
  'berry-fruit': ['berry', 'aggregate-fruit', 'multiple-fruit', 'accessory-fruit'],
  'ovule-fr': ['ovule', 'egg-cell'],
  'pistil-carpel': ['pistil', 'carpel', 'gynoecium'],
  'stoma-ostiole': ['stoma', 'stomatal-pore'],
  'membrane-wall': ['cell-wall', 'plasma-membrane', 'pit-membrane'],
  'medullary-ray': ['pith-ray', 'wood-ray'],
  porus: ['pit', 'pit-aperture', 'stomatal-pore', 'pollen-pore'],
  aleuron: ['aleurone-layer'],
  hypophyse: ['hypophysis'],
  'primary-meristem': ['protoderm', 'ground-meristem', 'procambium', 'apical-meristem'],
  'secondary-meristem': ['lateral-meristem', 'cambium', 'vascular-cambium', 'fascicular-cambium', 'interfascicular-cambium', 'shoot-cambium', 'root-cambium', 'phellogen'],
  bast: ['secondary-phloem', 'inner-bark', 'phloem-fibre', 'phloem'],
};
