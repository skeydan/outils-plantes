// Germination data. Every species entry is written from the cited sources;
// the PDF this tab started from is treated as untrusted data and corrected in
// CORRECTIONS below. Bilingual text is {en, fr}; the language helper picks one.

export const DORMANCY = [
  {
    id: 'nd', abbr: 'ND',
    name: { en: 'Non-dormant', fr: 'Non dormante' },
    short: {
      en: 'The seed is ready to germinate as soon as it is moist and warm enough.',
      fr: 'La graine est prête à germer dès qu’elle a assez d’humidité et de chaleur.',
    },
    detail: {
      en: 'No physiological block and no impermeable cover. Fresh seed germinates in a few days to a few weeks. This is the case of many tropical and fleshy-fruited species, and of recalcitrant seeds such as citrus, which cannot be dried or stored cold.',
      fr: 'Aucun blocage physiologique et aucune enveloppe imperméable. Les graines fraîches germent en quelques jours à quelques semaines. C’est le cas de beaucoup d’espèces tropicales et à fruits charnus, et des graines récalcitrantes comme les agrumes, qui ne supportent ni le séchage ni le froid.',
    },
    src: ['bask2004', 'bask2014', 'luro2023'],
  },
  {
    id: 'pd', abbr: 'PD',
    name: { en: 'Physiological dormancy', fr: 'Dormance physiologique' },
    short: {
      en: 'The embryo is mature but blocked by hormones; cold, warmth, light or time removes the block.',
      fr: 'L’embryon est mûr mais bloqué par les hormones ; le froid, la chaleur, la lumière ou le temps lèvent le blocage.',
    },
    detail: {
      en: 'The most common kind. The embryo is fully formed, but abscisic acid and the seed’s hormonal balance prevent germination. Moist cold (stratification), warm after-ripening, light or gibberellic acid shift the balance towards germination. Depth of dormancy varies from a few weeks to several months.',
      fr: 'Le type le plus courant. L’embryon est formé, mais l’acide abscissique et l’équilibre hormonal de la graine empêchent la germination. Le froid humide (stratification), le mûrissement à chaud, la lumière ou l’acide gibbérellique font pencher la balance vers la germination. La profondeur de la dormance va de quelques semaines à plusieurs mois.',
    },
    src: ['bask2004', 'finch2006', 'kucera2005', 'bewley1997', 'nonogaki2010'],
  },
  {
    id: 'mpd', abbr: 'MPD',
    name: { en: 'Morphophysiological dormancy', fr: 'Dormance morphophysiologique' },
    short: {
      en: 'The embryo is not yet fully grown, and it is also physiologically blocked: it must grow, then be released.',
      fr: 'L’embryon n’est pas encore complètement formé, et il est aussi bloqué physiologiquement : il doit grandir, puis être libéré.',
    },
    detail: {
      en: 'Two obstacles at once: a small or underdeveloped embryo (morphological dormancy) and a physiological block. A warm phase lets the embryo grow; a cold phase then releases the physiological block. In some species the order and length of the two phases are strict.',
      fr: 'Deux obstacles à la fois : un embryon petit ou sous-développé (dormance morphologique) et un blocage physiologique. Une phase chaude laisse l’embryon grandir ; une phase froide lève ensuite le blocage physiologique. Chez certaines espèces, l’ordre et la durée des deux phases sont stricts.',
    },
    src: ['bask2004', 'ribes2020', 'zhang1999'],
  },
  {
    id: 'py', abbr: 'PY',
    name: { en: 'Physical dormancy', fr: 'Dormance physique' },
    short: {
      en: 'A water-impermeable seed coat stops imbibition; the coat must be breached.',
      fr: 'Un tégument imperméable à l’eau empêche l’imbibition ; il faut le briser.',
    },
    detail: {
      en: 'The seed coat (testa) is waterproof, so the seed cannot take up water. Scarification — hot water, sandpaper, a nick, or acid — opens the coat. This is common in Fabaceae such as Acacia, and in some other families. It is a property of the seed coat, not of a stony fruit wall.',
      fr: 'Le tégument (testa) est imperméable, la graine ne peut donc pas absorber d’eau. La scarification — eau chaude, papier de verre, entaille ou acide — ouvre le tégument. C’est fréquent chez les Fabaceae comme Acacia, et dans quelques autres familles. C’est une propriété du tégument, pas d’une paroi de fruit ligneuse.',
    },
    src: ['bask2004', 'park2021'],
  },
  {
    id: 'pypd', abbr: 'PY+PD',
    name: { en: 'Combinational dormancy (physical + physiological)', fr: 'Dormance combinée (physique + physiologique)' },
    short: {
      en: 'An impermeable cover and a physiological block: break the cover first, then give cold.',
      fr: 'Une enveloppe imperméable et un blocage physiologique : briser l’enveloppe, puis donner du froid.',
    },
    detail: {
      en: 'The seed cannot take up water until the cover is breached, and even then the embryo remains physiologically dormant. Both treatments are needed, in that order. In stony fruits such as olive, pistachio and bramble, the “cover” is the endocarp of the fruit rather than the seed coat; the practical consequence is the same.',
      fr: 'La graine ne peut pas absorber d’eau tant que l’enveloppe n’est pas brisée, et même alors l’embryon reste physiologiquement dormant. Les deux traitements sont nécessaires, dans cet ordre. Dans les fruits à noyau comme l’olive, la pistache et la ronce, l’« enveloppe » est l’endocarpe du fruit plutôt que le tégument ; la conséquence pratique est la même.',
    },
    src: ['bask2004', 'wpsm', 'yasar2019'],
  },
];

export const TREATMENTS = [
  {
    id: 'cold',
    name: { en: 'Cold moist stratification', fr: 'Stratification froide humide' },
    short: { en: 'Moist, aerated, 0–5 °C, for weeks to months.', fr: 'Humide, aéré, 0–5 °C, pendant des semaines à des mois.' },
    detail: {
      en: 'Mix the seed with moist sand, peat or vermiculite (damp, not dripping), seal in a labelled bag or box and keep at 0–5 °C — a refrigerator is ideal. Check for mould every two weeks. This is not dry cold storage: the seed must be moist and able to breathe.',
      fr: 'Mélanger les graines à du sable, de la tourbe ou de la vermiculite humides (frais, pas détrempés), fermer dans un sachet ou une boîte étiquetés et garder à 0–5 °C — un réfrigérateur convient. Vérifier les moisissures toutes les deux semaines. Ce n’est pas un stockage au froid sec : la graine doit être humide et pouvoir respirer.',
    },
    src: ['bask2004', 'wpsm'],
  },
  {
    id: 'cool',
    name: { en: 'Cool moist stratification', fr: 'Stratification fraîche humide' },
    short: { en: 'Moist and aerated at about 10–15 °C.', fr: 'Humide et aéré, vers 10–15 °C.' },
    detail: {
      en: 'Some species, especially from mild climates, after-ripen at 10–15 °C rather than at 0–5 °C. Olive is the example here: 30 days at 15 °C in the dark, after the endocarp has been opened.',
      fr: 'Certaines espèces, notamment de climat doux, mûrissent à 10–15 °C plutôt qu’à 0–5 °C. L’olivier en est l’exemple : 30 jours à 15 °C à l’obscurité, après ouverture de l’endocarpe.',
    },
    src: ['wpsm'],
  },
  {
    id: 'warm',
    name: { en: 'Warm moist phase', fr: 'Phase chaude humide' },
    short: { en: 'Moist at about 20–25 °C, often before cold.', fr: 'Humide vers 20–25 °C, souvent avant le froid.' },
    detail: {
      en: 'A warm, moist period lets a small embryo grow or lets after-ripening proceed. It is used alone for some species and before cold for morphophysiological and combinational dormancy.',
      fr: 'Une période chaude et humide laisse un petit embryon grandir ou permet le mûrissement. Elle s’utilise seule chez certaines espèces et avant le froid dans les dormances morphophysiologiques et combinées.',
    },
    src: ['bask2004', 'wpsm'],
  },
  {
    id: 'warmcold',
    name: { en: 'Warm then cold', fr: 'Chaud puis froid' },
    short: { en: 'A warm phase, then a cold phase.', fr: 'Une phase chaude, puis une phase froide.' },
    detail: {
      en: 'The sequence matters: the embryo grows during the warm phase, then the cold phase releases the physiological block. Reversing the order usually fails. This is the classic treatment for morphophysiological dormancy.',
      fr: 'L’ordre compte : l’embryon grandit pendant la phase chaude, puis la phase froide lève le blocage physiologique. Inverser l’ordre échoue généralement. C’est le traitement classique de la dormance morphophysiologique.',
    },
    src: ['bask2004', 'ribes2020'],
  },
  {
    id: 'mechanical',
    name: { en: 'Mechanical scarification', fr: 'Scarification mécanique' },
    short: { en: 'Sandpaper, a file, a nick, or cracking the stone.', fr: 'Papier de verre, lime, entaille, ou fendre le noyau.' },
    detail: {
      en: 'Rub the seed coat with sandpaper or file a thin spot away from the embryo; for stony fruits, crack or clip the endocarp at the radicle end. Work on a few seeds first: a broken embryo is a dead seed.',
      fr: 'Frotter le tégument au papier de verre ou limer un point mince loin de l’embryon ; pour les fruits à noyau, fendre ou découper l’endocarpe du côté de la radicule. Tester sur quelques graines : un embryon blessé est une graine morte.',
    },
    src: ['wpsm', 'park2021'],
  },
  {
    id: 'acid',
    name: { en: 'Acid scarification', fr: 'Scarification à l’acide' },
    short: { en: 'Sulfuric acid for minutes to hours, then thorough rinsing.', fr: 'Acide sulfurique de quelques minutes à quelques heures, puis rinçage abondant.' },
    detail: {
      en: 'Concentrated sulfuric acid is a specialist treatment: gloves, goggles, a stable container, water nearby, and never pour water into the acid. The time depends on the species and the lot — raspberry 15–20 minutes, blackberry up to several hours, olive 24–30 hours commercially. Rinse thoroughly before sowing.',
      fr: 'L’acide sulfurique concentré est un traitement de spécialiste : gants, lunettes, récipient stable, eau à proximité, et ne jamais verser d’eau dans l’acide. La durée dépend de l’espèce et du lot — framboisier 15–20 minutes, ronce jusqu’à plusieurs heures, olivier 24–30 heures en traitement commercial. Rincer abondamment avant de semer.',
    },
    src: ['wpsm'],
  },
  {
    id: 'hotwater',
    name: { en: 'Hot-water treatment', fr: 'Traitement à l’eau chaude' },
    short: { en: 'Near-boiling water, then a 12–24 h soak.', fr: 'Eau presque bouillante, puis trempage de 12–24 h.' },
    detail: {
      en: 'Bring water to the boil, pour it over the seeds, remove the heat and leave them to soak as it cools for 12–24 hours. It works for hard-coated legumes such as Acacia. It is not a universal treatment: it kills seeds with thin coats or recalcitrant seeds.',
      fr: 'Porter l’eau à ébullition, la verser sur les graines, couper le feu et laisser tremper pendant le refroidissement, 12–24 h. Cela marche pour les légumineuses à tégument dur comme Acacia. Ce n’est pas universel : cela tue les graines à tégument mince ou récalcitrantes.',
    },
    src: ['wpsm', 'park2021'],
  },
  {
    id: 'soak',
    name: { en: 'Water soak', fr: 'Trempage dans l’eau' },
    short: { en: '12–48 h in clean water, often before cold.', fr: '12–48 h dans de l’eau propre, souvent avant le froid.' },
    detail: {
      en: 'A soak rehydrates the seed and can leach inhibitors. It is not scarification: it does not open a waterproof coat. Change the water if it becomes cloudy; do not leave fleshy or recalcitrant seeds soaking for days.',
      fr: 'Le trempage réhydrate la graine et peut lessiver des inhibiteurs. Ce n’est pas une scarification : il n’ouvre pas un tégument imperméable. Changer l’eau si elle se trouble ; ne pas laisser tremper des graines charnues ou récalcitrantes pendant des jours.',
    },
    src: ['wpsm'],
  },
  {
    id: 'ga',
    name: { en: 'Gibberellic acid (GA₃)', fr: 'Acide gibbérellique (GA₃)' },
    short: { en: 'A hormone dip or soak; partial substitute for cold.', fr: 'Trempage hormonal ; substitut partiel du froid.' },
    detail: {
      en: 'GA₃ can partly replace cold stratification in some species, especially after the cover has been opened. It is not a universal key: it may do nothing, or distort seedlings at high doses. Follow the dose on the product and treat it as an experiment, not a certainty.',
      fr: 'Le GA₃ peut partiellement remplacer la stratification froide chez certaines espèces, surtout après ouverture de l’enveloppe. Ce n’est pas une clé universelle : il peut ne rien faire, ou déformer les plantules à forte dose. Suivre la dose du produit et le traiter comme une expérience, pas une certitude.',
    },
    src: ['kucera2005', 'windauer2016'],
  },
  {
    id: 'light',
    name: { en: 'Light', fr: 'Lumière' },
    short: { en: 'Some seeds need light to germinate; sow them on the surface.', fr: 'Certaines graines ont besoin de lumière ; les semer en surface.' },
    detail: {
      en: 'Small seeds of open habitats often need light, or germinate better in it. Sow them on the surface and press them in. Other seeds need darkness; still others are indifferent. The requirement is a property of the species, not a rule for all seeds.',
      fr: 'Les petites graines des milieux ouverts ont souvent besoin de lumière, ou germent mieux à la lumière. Les semer en surface et les presser. D’autres graines ont besoin d’obscurité ; d’autres sont indifférentes. C’est une propriété de l’espèce, pas une règle pour toutes les graines.',
    },
    src: ['bask2004', 'windauer2016', 'hylocereus2007'],
  },
  {
    id: 'fresh',
    name: { en: 'Sow fresh, never dry', fr: 'Semer frais, jamais sec' },
    short: { en: 'For recalcitrant seeds: no drying, no cold storage.', fr: 'Pour les graines récalcitrantes : ni séchage, ni stockage au froid.' },
    detail: {
      en: 'Recalcitrant seeds are alive and metabolically active; drying them below a critical moisture content kills the embryo. Citrus, lychee, avocado, mango and many tropical forest trees are like this. Squeeze the seed out of the fruit, rinse it and sow it at once.',
      fr: 'Les graines récalcitrantes sont vivantes et métaboliquement actives ; les sécher sous un seuil critique tue l’embryon. Les agrumes, le litchi, l’avocat, le manguier et beaucoup d’arbres forestiers tropicaux sont ainsi. Extraire la graine du fruit, la rincer et la semer aussitôt.',
    },
    src: ['luro2023', 'saipari1998'],
  },
];

export const SPECIES = [
  {
    id: 'acacia-baileyana', name: 'Acacia baileyana', author: 'F.Muell.', family: 'Fabaceae',
    common: { fr: ['mimosa de Bailey'], en: ['Bailey’s wattle'], de: ['Bailey-Akazie'] },
    dormancy: 'py',
    seed: {
      en: 'A glossy, hard seed with a water-impermeable testa, shed from a legume. The coat, not the embryo, is the barrier.',
      fr: 'Une graine brillante et dure, à tégument imperméable à l’eau, libérée d’une gousse. C’est le tégument, pas l’embryon, qui fait obstacle.',
    },
    treatments: ['hotwater', 'mechanical', 'acid'],
    protocol: {
      en: 'Pour water at about 90–100 °C over the seeds, remove the heat and leave them to soak for 12–24 hours. Or rub the coat with sandpaper until it is thin, away from the embryo. Acid works too, with gloves and goggles. Sow about 5 mm deep.',
      fr: 'Verser de l’eau à environ 90–100 °C sur les graines, couper le feu et laisser tremper 12–24 h. Ou frotter le tégument au papier de verre jusqu’à l’amincir, loin de l’embryon. L’acide marche aussi, avec gants et lunettes. Semer à environ 5 mm de profondeur.',
    },
    sowing: {
      temp: '20–25 °C',
      depth: { en: 'about 5 mm', fr: 'environ 5 mm' },
      light: { en: 'not required', fr: 'pas nécessaire' },
      time: { en: '1–3 weeks', fr: '1–3 semaines' },
    },
    note: {
      en: 'GA₃ does not replace scarification: the barrier is physical, and the hormone cannot open the coat.',
      fr: 'Le GA₃ ne remplace pas la scarification : l’obstacle est physique, et l’hormone ne peut pas ouvrir le tégument.',
    },
    sources: ['wpsm', 'park2021'],
  },
  {
    id: 'actinidia-deliciosa', name: 'Actinidia deliciosa', author: '(A.Chev.) C.F.Liang & A.R.Ferguson', family: 'Actinidiaceae',
    common: { fr: ['kiwi', 'actinidia'], en: ['kiwifruit'], de: ['Kiwi'] },
    dormancy: 'pd',
    seed: {
      en: 'A very small dark seed in a fleshy berry. The embryo is mature; dormancy is physiological and is lifted by cold. The dry seed stores well (orthodox), but the cold treatment only acts on hydrated seed.',
      fr: 'Une très petite graine sombre dans une baie charnue. L’embryon est mûr ; la dormance est physiologique et se lève au froid. La graine sèche se conserve bien (orthodoxe), mais le froid n’agit que sur une graine hydratée.',
    },
    treatments: ['cold'],
    protocol: {
      en: 'Stratify moist for at least 3 weeks at 2–5 °C, then sow on the surface of moist compost at alternating 20/30 °C. Shade is unfavourable: a far-red light pulse inhibits germination, while red light has no effect.',
      fr: 'Stratifier au frais et humide pendant au moins 3 semaines à 2–5 °C, puis semer en surface sur un terreau humide à températures alternées 20/30 °C. L’ombre est défavorable : une impulsion de lumière rouge lointain inhibe la germination, alors que la lumière rouge est sans effet.',
    },
    sowing: {
      temp: '20/30 °C alternating',
      depth: { en: 'surface, barely covered', fr: 'surface, à peine couverte' },
      light: { en: 'not required; far-red (shade) inhibits', fr: 'pas nécessaire ; le rouge lointain (ombre) inhibe' },
      time: { en: 'several weeks after the cold period', fr: 'plusieurs semaines après la période de froid' },
    },
    note: {
      en: 'Keep the medium moist during stratification: dry seed does not respond to cold. Germination is completed by alternating temperatures, not by cold alone.',
      fr: 'Garder le substrat humide pendant la stratification : une graine sèche ne répond pas au froid. La germination se termine grâce aux températures alternées, pas par le froid seul.',
    },
    sources: ['windauer2016'],
  },
  {
    id: 'citrus-sinensis', name: 'Citrus sinensis', author: '(L.) Osbeck', family: 'Rutaceae',
    common: { fr: ['oranger', 'orange douce'], en: ['sweet orange'], de: ['Orange'] },
    dormancy: 'nd',
    seed: {
      en: 'A seed with a thin coat inside the fruit segments. It is desiccation-sensitive (recalcitrant to intermediate): drying it below a critical moisture content kills it.',
      fr: 'Une graine à tégument mince dans les quartiers du fruit. Elle est sensible au dessèchement (récalcitrante à intermédiaire) : la sécher sous un seuil critique la tue.',
    },
    treatments: ['fresh'],
    protocol: {
      en: 'Squeeze the seed out of a ripe fruit, rinse off the pulp and sow at once, about 1–2 cm deep. Keep it moist and warm. Never dry it and never store it cold.',
      fr: 'Extraire la graine d’un fruit mûr, rincer la pulpe et semer aussitôt, à 1–2 cm de profondeur. Garder humide et chaud. Ne jamais la sécher ni la stocker au froid.',
    },
    sowing: {
      temp: '25–30 °C',
      depth: { en: '1–2 cm', fr: '1–2 cm' },
      light: { en: 'not required', fr: 'pas nécessaire' },
      time: { en: '2–4 weeks', fr: '2–4 semaines' },
    },
    note: {
      en: 'Cold stratification and scarification are useless here and can kill the seed. The embryo is fully developed and the seed is not dormant.',
      fr: 'La stratification froide et la scarification sont inutiles ici et peuvent tuer la graine. L’embryon est complètement formé et la graine n’est pas dormante.',
    },
    sources: ['luro2023', 'saipari1998'],
  },
  {
    id: 'eucalyptus-deglupta', name: 'Eucalyptus deglupta', author: 'Blume', family: 'Myrtaceae',
    common: { fr: ['eucalyptus arc-en-ciel'], en: ['rainbow gum', 'Mindanao gum'], de: ['Regenbogen-Eukalyptus'] },
    dormancy: 'nd',
    seed: {
      en: 'A tiny seed mixed with much chaff, with no endosperm and only a thin coat. Fresh seed germinates readily.',
      fr: 'Une graine minuscule mêlée à beaucoup de débris, sans endosperme et à tégument mince. Les graines fraîches germent facilement.',
    },
    treatments: ['fresh', 'light'],
    protocol: {
      en: 'Sow fresh seed on the surface of a fine, sterile mix; press it in but do not bury it. Keep it humid and warm; light helps. Thin the seedlings early.',
      fr: 'Semer des graines fraîches en surface sur un substrat fin et stérile ; les presser sans les enterrer. Garder humide et chaud ; la lumière aide. Éclaircir tôt.',
    },
    sowing: {
      temp: '25–30 °C',
      depth: { en: 'surface', fr: 'surface' },
      light: { en: 'light beneficial', fr: 'lumière bénéfique' },
      time: { en: '1–3 weeks', fr: '1–3 semaines' },
    },
    note: {
      en: 'No scarification, no smoke and no cold are needed for this tropical species; the fire treatments of Australian eucalypts are not a general rule.',
      fr: 'Ni scarification, ni fumée, ni froid ne sont nécessaires pour cette espèce tropicale ; les traitements par le feu des eucalyptus australiens ne sont pas une règle générale.',
    },
    sources: ['wpsm', 'cabi-euc'],
  },
  {
    id: 'hippophae-rhamnoides', name: 'Hippophae rhamnoides', author: 'L.', family: 'Elaeagnaceae',
    common: { fr: ['argousier', 'argousier faux-nerprun'], en: ['sea buckthorn'], de: ['Sanddorn'] },
    dormancy: 'pd',
    seed: {
      en: 'A bony achene inside a fleshy orange fruit. The achene wall resists, and the embryo is physiologically dormant.',
      fr: 'Un akène osseux dans un fruit charnu orange. La paroi de l’akène résiste, et l’embryon est physiologiquement dormant.',
    },
    treatments: ['cold', 'warm', 'ga', 'soak'],
    protocol: {
      en: 'Stratify in moist sand for 90 days at 2–5 °C, or sow fresh in autumn and let winter do the work. A 24-hour soak and GA₃ can shorten the cold requirement; autumn sowing needs only about 15 days of cold.',
      fr: 'Stratifier dans du sable humide pendant 90 jours à 2–5 °C, ou semer frais en automne et laisser l’hiver faire le travail. Un trempage de 24 h et le GA₃ peuvent raccourcir le besoin de froid ; le semis d’automne ne demande qu’environ 15 jours de froid.',
    },
    sowing: {
      temp: '20/30 °C after stratification',
      depth: { en: 'about 6 mm', fr: 'environ 6 mm' },
      light: { en: 'slightly beneficial', fr: 'légèrement bénéfique' },
      time: { en: '2–4 weeks after cold', fr: '2–4 semaines après le froid' },
    },
    note: {
      en: 'Untreated seed germinates poorly and unevenly, often only 6–60 % after 60 days.',
      fr: 'Les graines non traitées germent mal et de façon irrégulière, souvent seulement 6–60 % après 60 jours.',
    },
    sources: ['wpsm', 'kukshal2022'],
  },
  {
    id: 'nyctanthes-arbor-tristis', name: 'Nyctanthes arbor-tristis', author: 'L.', family: 'Oleaceae',
    common: { fr: ['arbre de la tristesse', 'jasmin de nuit'], en: ['tree of sadness', 'night-flowering jasmine'], de: ['Baum der Traurigkeit'] },
    dormancy: 'nd',
    seed: {
      en: 'A flat seed with a mucilaginous coat, inside a dry capsule. Fresh seed is not dormant.',
      fr: 'Une graine plate à enveloppe mucilagineuse, dans une capsule sèche. Les graines fraîches ne sont pas dormantes.',
    },
    treatments: ['soak', 'fresh'],
    protocol: {
      en: 'Remove the seed from the fruit, rub off the mucilage, soak for 12–24 hours in cold water and sow about 1 cm deep. Fresh seed germinates best.',
      fr: 'Dégager la graine du fruit, retirer le mucilage, tremper 12–24 h dans de l’eau froide et semer à environ 1 cm de profondeur. Les graines fraîches germent le mieux.',
    },
    sowing: {
      temp: '25–30 °C (optimum 30 °C)',
      depth: { en: 'about 1 cm', fr: 'environ 1 cm' },
      light: { en: 'not required', fr: 'pas nécessaire' },
      time: { en: '1–4 weeks', fr: '1–4 semaines' },
    },
    note: {
      en: 'No stratification: cold is not needed and slows germination. The mucilage is easier to remove after a short soak.',
      fr: 'Pas de stratification : le froid n’est pas nécessaire et ralentit la germination. Le mucilage s’enlève plus facilement après un court trempage.',
    },
    sources: ['kundu2025', 'cabi-nyctanthes'],
  },
  {
    id: 'olea-europaea', name: 'Olea europaea', author: 'L.', family: 'Oleaceae',
    common: { fr: ['olivier', 'olivier cultivé'], en: ['olive'], de: ['Olivenbaum'] },
    dormancy: 'pypd',
    seed: {
      en: 'The dispersal unit is the stone: a woody endocarp around the seed. The endocarp blocks the radicle, and the embryo is also physiologically dormant.',
      fr: 'L’unité de dispersion est le noyau : un endocarpe ligneux autour de la graine. L’endocarpe bloque la radicule, et l’embryon est aussi physiologiquement dormant.',
    },
    treatments: ['mechanical', 'soak', 'cool'],
    protocol: {
      en: 'Crack or clip the endocarp at the radicle end without touching the embryo, soak 24 hours, then keep moist at 15 °C in the dark for 30 days. Sow 2–3 times the stone’s diameter deep and germinate at 21–27 °C with bottom heat.',
      fr: 'Fendre ou découper l’endocarpe du côté de la radicule sans toucher l’embryon, tremper 24 h, puis garder humide à 15 °C à l’obscurité pendant 30 jours. Semer à 2–3 fois le diamètre du noyau et faire germer à 21–27 °C avec chaleur de fond.',
    },
    sowing: {
      temp: '21–27 °C after 30 days at 15 °C',
      depth: { en: '2–3 × stone diameter', fr: '2–3 × le diamètre du noyau' },
      light: { en: 'dark during the cool phase', fr: 'obscurité pendant la phase fraîche' },
      time: { en: '1–3 months', fr: '1–3 mois' },
    },
    note: {
      en: 'The common advice of 4–8 weeks at 4 °C is not the olive protocol, and a 10-minute acid dip does not open a woody endocarp. Commercial acid soaks last 24–30 hours.',
      fr: 'Le conseil courant de 4–8 semaines à 4 °C n’est pas le protocole de l’olivier, et un bain d’acide de 10 minutes n’ouvre pas un endocarpe ligneux. Les bains commerciaux durent 24–30 heures.',
    },
    sources: ['wpsm'],
  },
  {
    id: 'pinus-sylvestris', name: 'Pinus sylvestris', author: 'L.', family: 'Pinaceae',
    common: { fr: ['pin sylvestre'], en: ['Scots pine'], de: ['Waldkiefer', 'Gemeine Kiefer'] },
    dormancy: 'pd',
    seed: {
      en: 'A winged seed with a thin coat and a mature embryo; there is no hard cover to break.',
      fr: 'Une graine ailée à tégument mince et embryon mûr ; il n’y a pas d’enveloppe dure à briser.',
    },
    treatments: ['cold', 'soak', 'fresh'],
    protocol: {
      en: 'Fresh seed germinates without pretreatment. For stored seed, soak 36–40 hours in aerated water at 20–25 °C, drain, then chill moist at 0–1 °C for 15–90 days. Sow 5–10 mm deep.',
      fr: 'Les graines fraîches germent sans prétraitement. Pour des graines stockées, tremper 36–40 h dans de l’eau aérée à 20–25 °C, égoutter, puis refroidir au frais et humide à 0–1 °C pendant 15–90 jours. Semer à 5–10 mm.',
    },
    sowing: {
      temp: '20–25 °C',
      depth: { en: '5–10 mm', fr: '5–10 mm' },
      light: { en: 'not required', fr: 'pas nécessaire' },
      time: { en: '1–3 weeks', fr: '1–3 semaines' },
    },
    note: {
      en: 'Never scarify pine seed with acid or sandpaper: the coat is not the problem, and acid scarification is explicitly not recommended for pines.',
      fr: 'Ne jamais scarifier les graines de pin à l’acide ou au papier de verre : le tégument n’est pas le problème, et la scarification acide est explicitement déconseillée pour les pins.',
    },
    sources: ['wpsm'],
  },
  {
    id: 'pistacia-terebinthus', name: 'Pistacia terebinthus', author: 'L.', family: 'Anacardiaceae',
    common: { fr: ['pistachier térébinthe', 'térébinthe'], en: ['terebinth', 'turpentine tree'], de: ['Terpentin-Pistazie'] },
    dormancy: 'pypd',
    seed: {
      en: 'A stone with a very hard endocarp around the seed; the embryo is also dormant. The shell is the first barrier.',
      fr: 'Un noyau à endocarpe très dur autour de la graine ; l’embryon est aussi dormant. La coque est le premier obstacle.',
    },
    treatments: ['mechanical', 'acid', 'cold', 'ga'],
    protocol: {
      en: 'Remove the endocarp (dehull) or scarify with sulfuric acid, then stratify moist at 4 °C for 50 days. GA₃ can be added, but dehulling is the decisive step. Sow 1–2 cm deep.',
      fr: 'Retirer l’endocarpe (décortiquer) ou scarifier à l’acide sulfurique, puis stratifier au frais et humide à 4 °C pendant 50 jours. Le GA₃ peut être ajouté, mais le décorticage est l’étape décisive. Semer à 1–2 cm.',
    },
    sowing: {
      temp: '20–25 °C after cold',
      depth: { en: '1–2 cm', fr: '1–2 cm' },
      light: { en: 'not required', fr: 'pas nécessaire' },
      time: { en: '3–6 weeks after cold', fr: '3–6 semaines après le froid' },
    },
    note: {
      en: 'In trials, dehulled seed reached 93–95 %; intact shell with GA₃ stayed below 10 %. The shell, not the hormone, is the limiting factor.',
      fr: 'Dans les essais, les graines décortiquées ont atteint 93–95 % ; les noyaux intacts avec GA₃ sont restés sous 10 %. C’est la coque, pas l’hormone, qui limite.',
    },
    sources: ['yasar2019'],
  },
  {
    id: 'poncirus-trifoliata', name: 'Poncirus trifoliata', author: '(L.) Raf.', family: 'Rutaceae',
    common: { fr: ['poncire trifolié', 'oranger trifolié'], en: ['trifoliate orange'], de: ['Dreiblättrige Orange'] },
    dormancy: 'nd',
    seed: {
      en: 'A seed with a thin coat inside a hairy, bitter fruit. Like citrus, it is desiccation-sensitive and not dormant.',
      fr: 'Une graine à tégument mince dans un fruit poilu et amer. Comme les agrumes, elle craint le dessèchement et n’est pas dormante.',
    },
    treatments: ['fresh'],
    protocol: {
      en: 'Sow fresh seed from a ripe fruit, rinsed and still moist, about 1–2 cm deep. Keep warm and humid. Do not dry it and do not cold-store it.',
      fr: 'Semer des graines fraîches d’un fruit mûr, rincées et encore humides, à 1–2 cm de profondeur. Garder chaud et humide. Ne pas sécher ni stocker au froid.',
    },
    sowing: {
      temp: '25–30 °C',
      depth: { en: '1–2 cm', fr: '1–2 cm' },
      light: { en: 'not required', fr: 'pas nécessaire' },
      time: { en: '2–4 weeks', fr: '2–4 semaines' },
    },
    note: {
      en: 'Cold stratification for 4–6 weeks is not needed: the seed is recalcitrant, not physiologically dormant.',
      fr: 'Une stratification froide de 4–6 semaines n’est pas nécessaire : la graine est récalcitrante, pas physiologiquement dormante.',
    },
    sources: ['cabi-poncirus', 'luro2023'],
  },
  {
    id: 'prunus-cerasifera', name: 'Prunus cerasifera', author: 'Ehrh.', family: 'Rosaceae',
    common: { fr: ['prunier myrobolan', 'prunier-cerise'], en: ['cherry plum', 'myrobalan plum'], de: ['Kirschpflaume'] },
    dormancy: 'pd',
    seed: {
      en: 'A stone with a woody but permeable endocarp; the embryo is physiologically dormant. Prunus is not truly hard-seeded.',
      fr: 'Un noyau à endocarpe ligneux mais perméable ; l’embryon est physiologiquement dormant. Les Prunus ne sont pas vraiment à tégument dur.',
    },
    treatments: ['warmcold', 'cold', 'ga'],
    protocol: {
      en: 'Give 2 weeks of warm moist stratification at about 20 °C, then 3–6 months cold at 3–5 °C; or sow the stones outdoors in autumn. The endocarp is permeable, so cracking is not required, although it can speed things up.',
      fr: 'Donner 2 semaines de stratification chaude et humide à environ 20 °C, puis 3–6 mois de froid à 3–5 °C ; ou semer les noyaux dehors en automne. L’endocarpe est perméable : le fendre n’est pas nécessaire, même si cela peut accélérer.',
    },
    sowing: {
      temp: '15–25 °C after cold',
      depth: { en: '2–3 cm', fr: '2–3 cm' },
      light: { en: 'not required', fr: 'pas nécessaire' },
      time: { en: '2–6 weeks after cold', fr: '2–6 semaines après le froid' },
    },
    note: {
      en: 'The stone is not hard-seeded in the physical sense: water gets in. The dormancy is in the embryo, so cold — not acid — is the key.',
      fr: 'Le noyau n’est pas à tégument dur au sens physique : l’eau y entre. La dormance est dans l’embryon ; c’est donc le froid, pas l’acide, qui est la clé.',
    },
    sources: ['wpsm', 'sst2011'],
  },
  {
    id: 'ribes-rubrum', name: 'Ribes rubrum', author: 'L.', family: 'Grossulariaceae',
    common: { fr: ['groseillier à grappes', 'groseille rouge'], en: ['red currant'], de: ['Rote Johannisbeere'] },
    dormancy: 'mpd',
    seed: {
      en: 'A small seed filled with copious endosperm around a minute embryo. The embryo must grow before germination can start.',
      fr: 'Une petite graine remplie d’un endosperme abondant autour d’un embryon minuscule. L’embryon doit grandir avant que la germination commence.',
    },
    treatments: ['cold', 'warmcold', 'ga', 'light'],
    protocol: {
      en: 'Stratify moist at 0–5 °C for 2–4 months; a warm phase before the cold can help. Sow on the surface and keep in the light. GA₃ can improve uniformity after the cold.',
      fr: 'Stratifier au frais et humide à 0–5 °C pendant 2–4 mois ; une phase chaude avant le froid peut aider. Semer en surface et garder à la lumière. Le GA₃ peut améliorer l’uniformité après le froid.',
    },
    sowing: {
      temp: '15–20 °C',
      depth: { en: 'surface, barely covered', fr: 'surface, à peine couverte' },
      light: { en: 'light improves germination', fr: 'la lumière améliore la germination' },
      time: { en: '2–6 weeks after cold', fr: '2–6 semaines après le froid' },
    },
    note: {
      en: 'The seed is albuminous: the embryo is minute, so germination is slow and uneven even after stratification.',
      fr: 'La graine est albuminée : l’embryon est minuscule, la germination reste donc lente et irrégulière même après stratification.',
    },
    sources: ['wpsm', 'ribes2020'],
  },
  {
    id: 'ribes-uva-crispa', name: 'Ribes uva-crispa', author: 'L.', family: 'Grossulariaceae',
    common: { fr: ['groseillier à maquereau', 'groseille verte'], en: ['gooseberry'], de: ['Stachelbeere'] },
    dormancy: 'mpd',
    seed: {
      en: 'A small albuminous seed with an underdeveloped embryo; dormancy is morphophysiological.',
      fr: 'Une petite graine albuminée à embryon sous-développé ; la dormance est morphophysiologique.',
    },
    treatments: ['warmcold', 'cold', 'ga', 'light'],
    protocol: {
      en: 'Give a warm moist phase at about 20 °C followed by 3–5 months cold at 0–5 °C; or sow outdoors in autumn. GA₃ can help after the cold. Surface-sow and keep in the light.',
      fr: 'Donner une phase chaude et humide à environ 20 °C, puis 3–5 mois de froid à 0–5 °C ; ou semer dehors en automne. Le GA₃ peut aider après le froid. Semer en surface et garder à la lumière.',
    },
    sowing: {
      temp: '15–20 °C',
      depth: { en: 'surface, barely covered', fr: 'surface, à peine couverte' },
      light: { en: 'light improves germination', fr: 'la lumière améliore la germination' },
      time: { en: '2–6 weeks after cold', fr: '2–6 semaines après le froid' },
    },
    note: {
      en: 'MPD: the embryo is underdeveloped and physiologically blocked. One cold period alone is often not enough.',
      fr: 'MPD : l’embryon est sous-développé et physiologiquement bloqué. Une seule période de froid ne suffit souvent pas.',
    },
    sources: ['ribes2020', 'wpsm'],
  },
  {
    id: 'rubus-fruticosus', name: 'Rubus fruticosus', author: 'L. (aggregate)', family: 'Rosaceae',
    common: { fr: ['ronce commune', 'mûre sauvage'], en: ['blackberry', 'bramble'], de: ['Brombeere'] },
    dormancy: 'pypd',
    seed: {
      en: 'A hard pyrene (endocarp) around the seed, inside a drupelet. The endocarp and the embryo both block germination.',
      fr: 'Un pyrène dur (endocarpe) autour de la graine, dans une drupéole. L’endocarpe et l’embryon bloquent tous deux la germination.',
    },
    treatments: ['acid', 'cold', 'mechanical', 'ga', 'light'],
    protocol: {
      en: 'Scarify with sulfuric acid (blackberry seed tolerates up to several hours; rinse thoroughly), then stratify moist at 2–5 °C for 60–120 days. Nicking the pyrene also works. Sow 3–5 mm deep and expect germination over 2–3 seasons.',
      fr: 'Scarifier à l’acide sulfurique (la graine de ronce supporte jusqu’à plusieurs heures ; rincer abondamment), puis stratifier au frais et humide à 2–5 °C pendant 60–120 jours. Entailler le pyrène marche aussi. Semer à 3–5 mm et attendre la germination sur 2–3 saisons.',
    },
    sowing: {
      temp: '20–25 °C',
      depth: { en: '3–5 mm', fr: '3–5 mm' },
      light: { en: 'light improves germination', fr: 'la lumière améliore la germination' },
      time: { en: 'slow: 1–3 months after cold, often more', fr: 'lent : 1–3 mois après le froid, souvent plus' },
    },
    note: {
      en: '“No scarification and no cold” is wrong: untreated seed may stay dormant for years, and a cohort germinates over 2–3 seasons.',
      fr: '« Ni scarification ni froid » est faux : les graines non traitées peuvent rester dormantes des années, et une cohorte germe sur 2–3 saisons.',
    },
    sources: ['wpsm'],
  },
  {
    id: 'rubus-idaeus', name: 'Rubus idaeus', author: 'L.', family: 'Rosaceae',
    common: { fr: ['framboisier', 'framboise'], en: ['raspberry', 'red raspberry'], de: ['Himbeere'] },
    dormancy: 'pd',
    seed: {
      en: 'A pyrene with a thinner endocarp than the blackberry; the embryo is physiologically dormant and the endocarp also resists.',
      fr: 'Un pyrène à endocarpe plus mince que celui de la ronce ; l’embryon est physiologiquement dormant et l’endocarpe résiste aussi.',
    },
    treatments: ['acid', 'cold', 'ga', 'light'],
    protocol: {
      en: 'Scarify with sulfuric acid for 15–20 minutes (no more), rinse, then stratify moist at 2–5 °C for 60–120 days. Surface-sow 3–5 mm deep; light helps.',
      fr: 'Scarifier à l’acide sulfurique pendant 15–20 minutes (pas plus), rincer, puis stratifier au frais et humide à 2–5 °C pendant 60–120 jours. Semer en surface à 3–5 mm ; la lumière aide.',
    },
    sowing: {
      temp: '20–25 °C',
      depth: { en: '3–5 mm', fr: '3–5 mm' },
      light: { en: 'light helps', fr: 'la lumière aide' },
      time: { en: '2–6 weeks after cold', fr: '2–6 semaines après le froid' },
    },
    note: {
      en: 'Stratification is not optional for most lots: acid alone gives low and erratic germination. Authors disagree on the label — Baskin and Baskin’s protocol calls raspberry seed physiologically dormant, while others describe a double (physical + physiological) dormancy. The practical treatment is the same: open the cover, then give cold.',
      fr: 'La stratification n’est pas facultative pour la plupart des lots : l’acide seul donne une germination faible et irrégulière. Les auteurs ne sont pas d’accord sur l’étiquette — le protocole de Baskin et Baskin classe la graine de framboisier comme physiologiquement dormante, d’autres décrivent une double dormance (physique + physiologique). Le traitement pratique est le même : ouvrir l’enveloppe, puis donner du froid.',
    },
    sources: ['wpsm', 'contreras2016'],
  },
  {
    id: 'schisandra-chinensis', name: 'Schisandra chinensis', author: '(Turcz.) Baill.', family: 'Schisandraceae',
    common: { fr: ['baie des cinq saveurs', 'schisandra'], en: ['five-flavour berry', 'schisandra'], de: ['Chinesische Beere', 'Schisandra'] },
    dormancy: 'mpd',
    seed: {
      en: 'A seed with a lignified coat; the embryo is small and must grow, and a physiological block is added. About 10 % of seeds may lack an embryo.',
      fr: 'Une graine à tégument lignifié ; l’embryon est petit et doit grandir, avec un blocage physiologique supplémentaire. Environ 10 % des graines peuvent être sans embryon.',
    },
    treatments: ['warmcold', 'cold', 'ga', 'acid'],
    protocol: {
      en: 'Give a warm moist phase at 15–20 °C for about 30 days, then cold at 3–5 °C for 30–90 days; variable temperatures work well. GA₃ is most effective after the cold. Acid scarification for about 20 minutes can help some lots.',
      fr: 'Donner une phase chaude et humide à 15–20 °C pendant environ 30 jours, puis du froid à 3–5 °C pendant 30–90 jours ; les températures variables donnent de bons résultats. Le GA₃ est plus efficace après le froid. Une scarification acide d’environ 20 minutes peut aider certains lots.',
    },
    sowing: {
      temp: '20–25 °C after cold',
      depth: { en: 'about 1 cm', fr: 'environ 1 cm' },
      light: { en: 'not essential', fr: 'pas indispensable' },
      time: { en: '3–8 weeks after cold', fr: '3–8 semaines après le froid' },
    },
    note: {
      en: 'Cold alone for 8–12 weeks is not enough: the embryo needs the warm phase first, and GA₃ works best after the cold.',
      fr: 'Le froid seul pendant 8–12 semaines ne suffit pas : l’embryon a besoin de la phase chaude d’abord, et le GA₃ agit mieux après le froid.',
    },
    sources: ['zhang1999', 'skrypchenko2020'],
  },
  {
    id: 'selenicereus-undatus', name: 'Selenicereus undatus', author: '(Haw.) D.R.Hunt', family: 'Cactaceae',
    common: { fr: ['pitaya', 'fruit du dragon'], en: ['dragon fruit', 'pitaya'], de: ['Drachenfrucht'] },
    dormancy: 'nd',
    seed: {
      en: 'A tiny black seed in a juicy, many-seeded berry. Fresh seed germinates readily and is not dormant.',
      fr: 'Une minuscule graine noire dans une baie juteuse à nombreuses graines. Les graines fraîches germent facilement et ne sont pas dormantes.',
    },
    treatments: ['fresh', 'light', 'ga'],
    protocol: {
      en: 'Wash the seed free of pulp, sow on the surface of a well-drained mix and keep warm in the light. A 100 ppm GA₃ soak improved germination in trials.',
      fr: 'Laver les graines pour retirer la pulpe, semer en surface sur un substrat bien drainé et garder chaud à la lumière. Un trempage à 100 ppm de GA₃ a amélioré la germination dans les essais.',
    },
    sowing: {
      temp: '25–30 °C',
      depth: { en: 'surface', fr: 'surface' },
      light: { en: 'surface sowing, exposed to light', fr: 'semis en surface, à la lumière' },
      time: { en: '1–3 weeks', fr: '1–3 semaines' },
    },
    note: {
      en: 'No cold and no scarification. The seed is tiny: sow on the surface without burying it. Part of the light evidence comes from work on the closely related Hylocereus setaceus.',
      fr: 'Ni froid ni scarification. La graine est minuscule : semer en surface sans l’enterrer. Une partie des données sur la lumière provient de travaux sur l’espèce voisine Hylocereus setaceus.',
    },
    sources: ['biotecnia2025', 'ijas2024', 'hylocereus2007'],
  },
];

export const STEPS = [
  {
    title: { en: 'Look at the dispersal unit', fr: 'Regarder l’unité de dispersion' },
    body: {
      en: 'Is it a seed, a winged seed, a stone, a pyrene, a capsule? The cover you see may be a seed coat or the endocarp of a fruit. The distinction decides the treatment: acid and hot water act on seed coats, cracking acts on stones.',
      fr: 'Est-ce une graine, une graine ailée, un noyau, un pyrène, une capsule ? L’enveloppe visible peut être un tégument ou l’endocarpe d’un fruit. La distinction décide du traitement : l’acide et l’eau chaude agissent sur les téguments, le fendage sur les noyaux.',
    },
  },
  {
    title: { en: 'Check that the seed is alive', fr: 'Vérifier que la graine est vivante' },
    body: {
      en: 'Cut a few seeds open: a firm, pale embryo and endosperm suggest life; a hollow, brown or mouldy interior does not. The float test is not reliable — some viable seeds float. A tetrazolium test is the laboratory answer.',
      fr: 'Ouvrir quelques graines : un embryon ferme et clair avec de l’endosperme suggère la vie ; un intérieur creux, brun ou moisi non. Le test de flottaison n’est pas fiable — des graines viables flottent. Le test au tétrazolium est la réponse de laboratoire.',
    },
  },
  {
    title: { en: 'Name the dormancy', fr: 'Nommer la dormance' },
    body: {
      en: 'Non-dormant, physiological, morphophysiological, physical or combinational. If the seed takes up water but does not germinate, think physiological. If water runs off a hard coat, think physical. If the embryo is tiny, think morphological.',
      fr: 'Non dormante, physiologique, morphophysiologique, physique ou combinée. Si la graine absorbe l’eau mais ne germe pas, penser physiologique. Si l’eau ruisselle sur un tégument dur, penser physique. Si l’embryon est minuscule, penser morphologique.',
    },
  },
  {
    title: { en: 'Choose the smallest sufficient treatment', fr: 'Choisir le traitement minimal suffisant' },
    body: {
      en: 'Start with moisture, warmth and time. Add cold only if the species needs it; scarify only if the cover is the barrier; use acid only when hot water or sandpaper fails. A treatment that is too strong kills the embryo.',
      fr: 'Commencer par l’humidité, la chaleur et le temps. Ajouter du froid seulement si l’espèce en a besoin ; scarifier seulement si l’enveloppe est l’obstacle ; utiliser l’acide seulement quand l’eau chaude ou le papier de verre échouent. Un traitement trop fort tue l’embryon.',
    },
  },
  {
    title: { en: 'Stratify moist, not dry', fr: 'Stratifier humide, pas sec' },
    body: {
      en: 'Mix the seed with a damp medium (sand, peat, vermiculite), seal it in a labelled bag and keep it at the stated temperature. “Stratification” in a dry packet in the refrigerator is just cold storage and does not break physiological dormancy.',
      fr: 'Mélanger les graines à un substrat humide (sable, tourbe, vermiculite), fermer dans un sachet étiqueté et garder à la température indiquée. Une « stratification » en sachet sec au réfrigérateur n’est qu’un stockage au froid et ne lève pas la dormance physiologique.',
    },
  },
  {
    title: { en: 'Sow at the right depth', fr: 'Semer à la bonne profondeur' },
    body: {
      en: 'A general rule is 2–3 times the seed’s diameter. Small light-demanding seeds go on the surface and are pressed in, not buried. Tiny seeds should be sown on a fine, levelled, watered surface.',
      fr: 'Une règle générale est 2–3 fois le diamètre de la graine. Les petites graines exigeant la lumière vont en surface et sont pressées, pas enterrées. Les graines minuscules se sèment sur une surface fine, nivelée et arrosée.',
    },
  },
  {
    title: { en: 'Keep moisture and air', fr: 'Maintenir l’humidité et l’air' },
    body: {
      en: 'A cover keeps moisture but must be opened daily, or use a ventilated propagator. Water from below or with a fine spray. Waterlogging and damping-off kill more seedlings than dryness.',
      fr: 'Un couvercle garde l’humidité mais doit être ouvert chaque jour, ou utiliser une mini-serre ventilée. Arroser par le bas ou au pulvérisateur fin. L’excès d’eau et la fonte des semis tuent plus de plantules que la sécheresse.',
    },
  },
  {
    title: { en: 'Give light as soon as the shoot appears', fr: 'Donner de la lumière dès que la tige apparaît' },
    body: {
      en: 'Germination may need darkness, but the seedling needs light at once, or it etiolates. Move it to bright, indirect light and thin or prick out before the roots tangle.',
      fr: 'La germination peut exiger l’obscurité, mais la plantule a besoin de lumière immédiatement, sinon elle s’étiole. La placer à une lumière vive et indirecte, éclaircir ou repiquer avant que les racines s’emmêlent.',
    },
  },
];

export const CONFUSIONS = [
  {
    wrong: { en: 'A hard coat always means physical dormancy.', fr: 'Une enveloppe dure signifie toujours une dormance physique.' },
    right: {
      en: 'No. A hard layer may be the endocarp of the fruit (olive, pistachio, bramble) rather than the seed coat. The treatment may still be scarification, but the botany is different, and the embryo may be dormant as well.',
      fr: 'Non. Une couche dure peut être l’endocarpe du fruit (olive, pistache, ronce) plutôt que le tégument. Le traitement peut rester une scarification, mais la botanique est différente, et l’embryon peut aussi être dormant.',
    },
    src: ['wpsm', 'bask2004'],
  },
  {
    wrong: { en: 'Stratification means putting seeds in the fridge.', fr: 'La stratification, c’est mettre les graines au réfrigérateur.' },
    right: {
      en: 'Only if they are moist, aerated and at 0–5 °C. Dry cold is storage, not stratification, and does not break physiological dormancy.',
      fr: 'Seulement si elles sont humides, aérées et à 0–5 °C. Le froid sec est un stockage, pas une stratification, et ne lève pas la dormance physiologique.',
    },
    src: ['bask2004'],
  },
  {
    wrong: { en: 'GA₃ replaces cold for every seed.', fr: 'Le GA₃ remplace le froid pour toutes les graines.' },
    right: {
      en: 'It partially substitutes for cold in some species, especially after the cover is opened, and does nothing in others. Dose matters; high doses can deform seedlings.',
      fr: 'Il remplace partiellement le froid chez certaines espèces, surtout après ouverture de l’enveloppe, et ne fait rien chez d’autres. La dose compte ; les fortes doses peuvent déformer les plantules.',
    },
    src: ['kucera2005', 'windauer2016'],
  },
  {
    wrong: { en: 'Soaking is the same as scarifying.', fr: 'Le trempage, c’est la même chose que la scarification.' },
    right: {
      en: 'No. Soaking rehydrates and can leach inhibitors; it does not open a waterproof seed coat. A seed that floats after 24 hours may still be viable, and a seed that sinks is not necessarily alive.',
      fr: 'Non. Le trempage réhydrate et peut lessiver des inhibiteurs ; il n’ouvre pas un tégument imperméable. Une graine qui flotte après 24 h peut être viable, et une graine qui coule n’est pas forcément vivante.',
    },
    src: ['wpsm'],
  },
  {
    wrong: { en: 'All seeds need light to germinate.', fr: 'Toutes les graines ont besoin de lumière pour germer.' },
    right: {
      en: 'No. Some need light, some need darkness, many are indifferent. Small seeds of open habitats tend to need light; large seeds and many forest species do not. Read the species, not the rule.',
      fr: 'Non. Certaines ont besoin de lumière, d’autres d’obscurité, beaucoup sont indifférentes. Les petites graines des milieux ouverts tendent à exiger la lumière ; les grosses graines et beaucoup d’espèces forestières non. Lire l’espèce, pas la règle.',
    },
    src: ['bask2004'],
  },
  {
    wrong: { en: 'A seed that has not germinated is dead.', fr: 'Une graine qui n’a pas germé est morte.' },
    right: {
      en: 'It may be dormant, or the treatment may be wrong, or it may need more time. Some Rubus and Prunus seeds germinate over two or three seasons. Check viability before throwing a lot away.',
      fr: 'Elle peut être dormante, ou le traitement inadéquat, ou avoir besoin de plus de temps. Certaines graines de Rubus et de Prunus germent sur deux ou trois saisons. Vérifier la viabilité avant de jeter un lot.',
    },
    src: ['wpsm'],
  },
  {
    wrong: { en: 'Citrus seeds can be dried and kept in the fridge like bean seeds.', fr: 'Les graines d’agrumes peuvent être séchées et gardées au réfrigérateur comme des haricots.' },
    right: {
      en: 'No. Citrus seeds are desiccation-sensitive (recalcitrant to intermediate). Drying below a critical moisture content kills them; sow fresh and keep moist.',
      fr: 'Non. Les graines d’agrumes sont sensibles au dessèchement (récalcitrantes à intermédiaires). Les sécher sous un seuil critique les tue ; semer frais et garder humide.',
    },
    src: ['luro2023', 'saipari1998'],
  },
];

export const CORRECTIONS = [
  {
    title: { en: 'Most per-species DOIs in the source PDF are invented or point elsewhere', fr: 'La plupart des DOI par espèce du PDF sont inventés ou renvoient ailleurs' },
    body: {
      en: 'Checked one by one on Crossref: 10.1016/j.plantsci.2020.110712 resolves to a glycyrrhizin paper, 10.1016/j.fitote.2012.04.012 to a Berberis paper, 10.1016/j.envexpbot.2005.05.003 to a chromium/Vigna paper, 10.1016/j.jaridenv.2012.02.011 to an Owens Valley succession paper, 10.1016/j.scienta.2014.05.010 to a humic-acid paper; 10.1017/S096025852000012X, 10.1186/s12870-015-0563-7 and 10.1071/BT9960017 do not resolve. None of these DOIs are used in this tab; every reference below was checked separately.',
      fr: 'Vérifiés un par un sur Crossref : 10.1016/j.plantsci.2020.110712 renvoie à un article sur la glycyrrhizine, 10.1016/j.fitote.2012.04.012 à un article sur Berberis, 10.1016/j.envexpbot.2005.05.003 à un article chrome/Vigna, 10.1016/j.jaridenv.2012.02.011 à une succession dans Owens Valley, 10.1016/j.scienta.2014.05.010 à un article sur les acides humiques ; 10.1017/S096025852000012X, 10.1186/s12870-015-0563-7 et 10.1071/BT9960017 ne se résolvent pas. Aucun de ces DOI n’est utilisé ici ; chaque référence ci-dessous a été vérifiée séparément.',
    },
  },
  {
    title: { en: 'The coat-composition table is false precision', fr: 'Le tableau de composition des enveloppes est une fausse précision' },
    body: {
      en: 'The PDF gives layer counts (2–7), thicknesses (0.1–2 mm) and chemical percentages (lignin 10–70 %, cellulose 20–60 %, waxes, tannins, terpenes) for each species, with no source, and the figures contradict each other from row to row. These numbers are not repeated here. What matters for germination is qualitative: is the cover permeable or not, and is the embryo dormant or not.',
      fr: 'Le PDF donne des nombres de couches (2–7), des épaisseurs (0,1–2 mm) et des pourcentages chimiques (lignine 10–70 %, cellulose 20–60 %, cires, tanins, terpènes) par espèce, sans source, et les chiffres se contredisent d’une ligne à l’autre. Ces nombres ne sont pas repris ici. Ce qui compte pour la germination est qualitatif : l’enveloppe est-elle perméable ou non, et l’embryon est-il dormant ou non.',
    },
  },
  {
    title: { en: 'Citrus and Poncirus: “underdeveloped embryo, morphological dormancy” is wrong', fr: 'Citrus et Poncirus : « embryon sous-développé, dormance morphologique » est faux' },
    body: {
      en: 'The table describes both as having an underdeveloped embryo and morphological dormancy, while the treatment table says stratification is unnecessary. The second is right: citrus seeds have a fully developed embryo, are not dormant, and are desiccation-sensitive. The practical rule is fresh seed, no drying, no cold. The PDF contradicts itself and the first claim is the wrong one.',
      fr: 'Le tableau décrit les deux comme ayant un embryon sous-développé et une dormance morphologique, alors que le tableau des traitements dit que la stratification est inutile. Le second a raison : les graines d’agrumes ont un embryon complètement formé, ne sont pas dormantes et sont sensibles au dessèchement. La règle pratique est graine fraîche, pas de séchage, pas de froid. Le PDF se contredit et c’est la première affirmation qui est fausse.',
    },
    src: ['luro2023', 'saipari1998'],
  },
  {
    title: { en: 'Eucalyptus deglupta: no scarification, no smoke, no cold', fr: 'Eucalyptus deglupta : ni scarification, ni fumée, ni froid' },
    body: {
      en: 'The table correctly says there is no morphological dormancy, but the treatment table then prescribes sandpaper, a 50 °C heat treatment, red light and liquid smoke. Most fresh eucalyptus seed needs no pretreatment; the seed is tiny and surface-sown, and light helps. Fire-related treatments belong to fire-adapted Australian species, not to this tropical one as a general rule.',
      fr: 'Le tableau dit correctement qu’il n’y a pas de dormance morphologique, mais le tableau des traitements prescrit ensuite papier de verre, chaleur à 50 °C, lumière rouge et fumée liquide. La plupart des graines fraîches d’eucalyptus n’ont besoin d’aucun prétraitement ; la graine est minuscule et se sème en surface, et la lumière aide. Les traitements liés au feu concernent des espèces australiennes adaptées au feu, pas cette espèce tropicale en règle générale.',
    },
    src: ['wpsm', 'cabi-euc'],
  },
  {
    title: { en: 'Pinus: acid and sandpaper are not recommended', fr: 'Pinus : l’acide et le papier de verre sont déconseillés' },
    body: {
      en: 'The PDF prescribes sandpaper (grade 120–180) or 30–60 minutes of sulfuric acid, plus a 50–60 °C heat shock. Pine seeds are not hard-coated. The Woody Plant Seed Manual says explicitly that acid scarification is not recommended for pine seeds. Fresh Pinus sylvestris needs 0 days of cold; stored seed needs 15–90 days of moist cold. Heat and acid damage the seed.',
      fr: 'Le PDF prescrit du papier de verre (grain 120–180) ou 30–60 minutes d’acide sulfurique, plus un choc thermique à 50–60 °C. Les graines de pin ne sont pas à tégument dur. Le Woody Plant Seed Manual dit explicitement que la scarification acide est déconseillée pour les pins. Pinus sylvestris frais ne demande aucun jour de froid ; les graines stockées demandent 15–90 jours de froid humide. La chaleur et l’acide abîment la graine.',
    },
    src: ['wpsm'],
  },
  {
    title: { en: 'Olive: crack the stone, then 30 days at 15 °C — not 4–8 weeks at 4 °C', fr: 'Olivier : fendre le noyau, puis 30 jours à 15 °C — pas 4–8 semaines à 4 °C' },
    body: {
      en: 'The PDF prescribes 4–8 weeks at 4 °C and a 10–15 minute acid dip. The olive protocol is mechanical: crack or clip the endocarp at the radicle end, soak 24 hours, then 30 days at 15 °C in the dark. Commercial acid softening uses 24–30 hours, not 10–15 minutes. Cold is not the key for this Mediterranean species.',
      fr: 'Le PDF prescrit 4–8 semaines à 4 °C et un bain d’acide de 10–15 minutes. Le protocole de l’olivier est mécanique : fendre ou découper l’endocarpe du côté de la radicule, tremper 24 h, puis 30 jours à 15 °C à l’obscurité. L’amollissement commercial à l’acide dure 24–30 heures, pas 10–15 minutes. Le froid n’est pas la clé pour cette espèce méditerranéenne.',
    },
    src: ['wpsm'],
  },
  {
    title: { en: 'Prunus cerasifera: 4–6 weeks of cold is far too short', fr: 'Prunus cerasifera : 4–6 semaines de froid est bien trop court' },
    body: {
      en: 'The PDF gives 4–6 weeks at 4 °C. Myrobalan plum has embryo dormancy, and its endocarp is permeable, not hard-seeded. The Woody Plant Seed Manual records 2 weeks of warm followed by about 196 days at 1/7 °C (65 % germination), and the text notes that 2 weeks at 20 °C before chilling promotes germination. In a garden, autumn sowing or a full winter of cold is the realistic treatment.',
      fr: 'Le PDF donne 4–6 semaines à 4 °C. Le prunier myrobolan a une dormance embryonnaire, et son endocarpe est perméable, pas à tégument dur. Le Woody Plant Seed Manual rapporte 2 semaines de chaud puis environ 196 jours à 1/7 °C (65 % de germination), et le texte note que 2 semaines à 20 °C avant le froid favorisent la germination. Au jardin, le semis d’automne ou un hiver complet de froid est le traitement réaliste.',
    },
    src: ['wpsm'],
  },
  {
    title: { en: 'Rubus fruticosus: “no scarification, no cold” is the opposite of the evidence', fr: 'Rubus fruticosus : « ni scarification ni froid » est l’inverse des données' },
    body: {
      en: 'The PDF says no scarification, no stratification, stable 20–25 °C. The Woody Plant Seed Manual describes deep dormancy: acid scarification (blackberry seed tolerates up to several hours) followed by 60–120 days of cold, or mechanical removal of the endocarp; a cohort germinates over 2–3 seasons. GA₃ alone does not replace this.',
      fr: 'Le PDF dit ni scarification, ni stratification, températures stables 20–25 °C. Le Woody Plant Seed Manual décrit une dormance profonde : scarification acide (la graine de ronce supporte jusqu’à plusieurs heures) suivie de 60–120 jours de froid, ou retrait mécanique de l’endocarpe ; une cohorte germe sur 2–3 saisons. Le GA₃ seul ne remplace pas cela.',
    },
    src: ['wpsm'],
  },
  {
    title: { en: 'Hippophae, Ribes and Schisandra: the cold periods are too short or in the wrong order', fr: 'Hippophae, Ribes et Schisandra : les périodes de froid sont trop courtes ou dans le mauvais ordre' },
    body: {
      en: 'Hippophae: the PDF says 6–8 weeks at 4 °C; the manual says 90 days at 2–5 °C. Ribes rubrum and R. uva-crispa: the PDF gives 6–8 and 8–12 weeks; these are morphophysiological dormancies, and R. uva-crispa needs a warm phase before a long cold. Schisandra: the PDF gives 8–12 weeks of cold alone; the embryo needs a warm phase first (about 30 days at 15–20 °C), then 30–90 days of cold, with GA₃ after the cold.',
      fr: 'Hippophae : le PDF dit 6–8 semaines à 4 °C ; le manuel dit 90 jours à 2–5 °C. Ribes rubrum et R. uva-crispa : le PDF donne 6–8 et 8–12 semaines ; ce sont des dormances morphophysiologiques, et R. uva-crispa a besoin d’une phase chaude avant un froid long. Schisandra : le PDF donne 8–12 semaines de froid seul ; l’embryon a d’abord besoin d’une phase chaude (environ 30 jours à 15–20 °C), puis de 30–90 jours de froid, avec du GA₃ après le froid.',
    },
    src: ['wpsm', 'ribes2020', 'zhang1999'],
  },
  {
    title: { en: 'Universal 72-hour soaks, red light and smoke are not general treatments', fr: 'Les trempages universels de 72 h, la lumière rouge et la fumée ne sont pas des traitements généraux' },
    body: {
      en: 'The PDF applies a 72-hour soak at 30 °C, red light at 660 nm and liquid smoke to species that do not need them. Soaking recalcitrant seeds for days is harmful; red light and smoke are species-specific cues, not general keys. Treatments in this tab are attached to the species that have evidence for them.',
      fr: 'Le PDF applique un trempage de 72 h à 30 °C, de la lumière rouge à 660 nm et de la fumée liquide à des espèces qui n’en ont pas besoin. Faire tremper des graines récalcitrantes pendant des jours est nocif ; la lumière rouge et la fumée sont des signaux spécifiques, pas des clés générales. Les traitements de cet onglet sont rattachés aux espèces pour lesquelles il existe des données.',
    },
    src: ['luro2023', 'wpsm'],
  },
];
