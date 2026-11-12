// Fruits: the types (drupe, berry, aggregate, pome, nut, accessory, dry),
// what part of the flower becomes what, the German/English/French vocabulary,
// and which of our species belongs to each type. Each example links to its
// Taxonomy page and to its Anatomy entry; where a Development process exists,
// it links there too.
import { lang } from '../../assets/site.js';
import { routeHref } from '../../assets/route.js';
import { h, citer } from '../../assets/ui.js';
import { TAXA } from '../../taxonomy/js/taxa.js';
import { SOURCES } from './sources.js';

const T = (en, fr) => (lang() === 'fr' ? fr : en);
const L = (o) => (o ? o[lang()] ?? o.en : '');

const STR = {
  title: { en: 'Fruits: the types, the words, and our species', fr: 'Fruits : les types, les mots et nos espèces' },
  lead: {
    en: 'A fruit is what a flower becomes when its seeds ripen. Botanists sort fruits by how they form and what their wall becomes: fleshy or dry, from one carpel or several, from the ovary alone or with other flower parts. Here are the seven types found among our species, with the species as examples — and the German, English and French words for each, because the same fruit can hide behind a false friend.',
    fr: 'Un fruit, c’est ce que devient une fleur quand ses graines mûrissent. Les botanistes classent les fruits selon leur formation et ce que devient leur paroi : charnu ou sec, issu d’un carpelle ou de plusieurs, formé du seul ovaire ou avec d’autres pièces florales. Voici les sept types présents chez nos espèces, avec les espèces en exemples — et les mots allemands, anglais et français de chacun, car un même fruit peut se cacher derrière un faux ami.',
  },
  tableTitle: { en: 'The seven types at a glance', fr: 'Les sept types en un coup d’œil' },
  typeCol: { en: 'Type', fr: 'Type' },
  defCol: { en: 'What it is', fr: 'Ce que c’est' },
  exCol: { en: 'Examples', fr: 'Exemples' },
  termsTitle: { en: 'The words, in three languages', fr: 'Les mots, en trois langues' },
  termsLead: {
    en: 'German botany uses a precise vocabulary that French and English do not always mirror. The German term is given first, then its English and French equivalents and what it actually means. Watch the two false friends below the table: Steinkern is not “endosperm + seed”, and Samenobst is not the pome.',
    fr: 'La botanique allemande dispose d’un vocabulaire précis que le français et l’anglais ne reflètent pas toujours. Le terme allemand vient d’abord, puis ses équivalents anglais et français et ce qu’il désigne réellement. Attention aux deux faux amis sous le tableau : Steinkern n’est pas « endosperme + graine », et Samenobst n’est pas le piridion.',
  },
  deCol: { en: 'German', fr: 'Allemand' },
  enCol: { en: 'English', fr: 'Anglais' },
  frCol: { en: 'French', fr: 'Français' },
  whatCol: { en: 'What it is', fr: 'Ce que c’est' },
  drawingTitle: { en: 'Schematic section', fr: 'Coupe schématique' },
  examplesTitle: { en: 'Our species', fr: 'Nos espèces' },
  inAnatomy: { en: 'in Anatomy', fr: 'dans Anatomie' },
  inTaxonomy: { en: 'in Taxonomy', fr: 'dans Taxonomie' },
  inDevelopment: { en: 'flower → fruit in Development', fr: 'fleur → fruit dans Développement' },
  sources: { en: 'Sources', fr: 'Sources' },
};

// The vocabulary table. `de` is the German term; `en` and `fr` are the usual
// equivalents; `def` says what the term actually covers, in both languages.
export const TERMS = [
  { de: 'Steinfrucht', en: 'drupe', fr: 'drupe',
    def: { en: 'A fleshy, indehiscent fruit with a thin skin, a fleshy or fibrous middle and a hard stone (lignified endocarp) around the seed. Cherry, olive, almond.', fr: 'Fruit charnu indéhiscent à peau fine, partie moyenne charnue ou fibreuse et noyau dur (endocarpe lignifié) autour de la graine. Cerise, olive, amande.' },
    src: ['german-terms', 'morph'] },
  { de: 'Steinkern', en: 'stone, pit', fr: 'noyau',
    def: { en: 'The stone itself: the lignified endocarp of a drupe, with the seed inside. It is not a seed plus endosperm.', fr: 'Le noyau lui-même : l’endocarpe lignifié d’une drupe, avec la graine à l’intérieur. Ce n’est pas une graine plus de l’endosperme.' },
    src: ['german-terms', 'almond-anatomy'] },
  { de: 'Nuss', en: 'nut', fr: 'noix (fruit sec)',
    def: { en: 'A dry, indehiscent fruit whose whole pericarp is hard and which contains one seed. Hazelnut is the classic example; the walnut is a nut enclosed in a husk, not a drupe.', fr: 'Fruit sec indéhiscent dont tout le périarpe est dur et qui contient une graine. La noisette en est l’exemple classique ; la noix est une nucule enveloppée d’une écorce, pas une drupe.' },
    src: ['german-terms', 'fna-juglandaceae'] },
  { de: 'Beere', en: 'berry', fr: 'baie',
    def: { en: 'A fleshy, indehiscent fruit whose whole pericarp becomes soft or juicy, with seeds in the flesh and no stone. Kiwifruit, tomato, grape.', fr: 'Fruit charnu indéhiscent dont tout le périarpe devient mou ou juteux, à graines dans la chair et sans noyau. Kiwi, tomate, raisin.' },
    src: ['german-terms', 'morph'] },
  { de: 'Sammelfrucht', en: 'aggregate fruit', fr: 'fruit multiple (fruit composé)',
    def: { en: 'A fruit formed from one flower with several free carpels: each carpel becomes a fruitlet, and the fruitlets ripen together. The four subtypes below name what each fruitlet is.', fr: 'Fruit issu d’une seule fleur à plusieurs carpelles libres : chaque carpelle devient un fruit élémentaire, et l’ensemble mûrit ensemble. Les quatre sous-types ci-dessous nomment la nature de chaque fruit élémentaire.' },
    src: ['german-terms', 'morph'] },
  { de: 'Sammelbeere', en: 'aggregate berry', fr: 'baie composée',
    def: { en: 'An aggregate whose fruitlets are berries, their fleshy walls fused. Rare: Annona (cherimoya, soursop), Phytolacca.', fr: 'Fruit multiple dont les fruits élémentaires sont des baies, à parois charnues soudées. Rare : Annona (chérimole, corossol), Phytolacca.' },
    src: ['sammelbeere', 'german-terms'] },
  { de: 'Sammelsteinfrucht', en: 'aggregate of drupelets', fr: 'polydrupe',
    def: { en: 'An aggregate whose fruitlets are small drupes (drupelets), each with its own tiny stone. Raspberry, blackberry.', fr: 'Fruit multiple dont les fruits élémentaires sont de petites drupes (drupéoles), chacune avec son minuscule noyau. Framboise, mûre.' },
    src: ['german-terms', 'morph'] },
  { de: 'Sammelbalgfrucht', en: 'aggregate of follicles', fr: 'polyfollicule',
    def: { en: 'An aggregate whose fruitlets are follicles, dry pods that open along one seam. Caltha, Magnolia.', fr: 'Fruit multiple dont les fruits élémentaires sont des follicules, fruits secs s’ouvrant par une seule fente. Caltha, Magnolia.' },
    src: ['german-terms', 'morph'] },
  { de: 'Sammelnussfrucht', en: 'aggregate of achenes', fr: 'polyakène',
    def: { en: 'An aggregate whose fruitlets are small dry, one-seeded fruits (achenes or nutlets), often on a fleshy receptacle. Strawberry, rose hip.', fr: 'Fruit multiple dont les fruits élémentaires sont de petits fruits secs à une graine (akènes ou nucules), souvent sur un réceptacle charnu. Fraise, cynorhodon.' },
    src: ['german-terms', 'morph'] },
  { de: 'Apfelfrucht', en: 'pome', fr: 'piridion (fruit à pépins)',
    def: { en: 'An accessory fruit in which the flesh is the hypanthium and the papery core is the true fruit made of the carpels. Apple, pear, quince. Commercial German also says Kernfrucht or Kernobst.', fr: 'Fruit accessoire dont la chair est l’hypanthe et le cœur parcheminé le vrai fruit formé des carpelles. Pomme, poire, coing. L’allemand commercial dit aussi Kernfrucht ou Kernobst.' },
    src: ['german-terms', 'pome'] },
  { de: 'Samenobst', en: 'seed fruit (food term)', fr: 'fruits à graines (terme alimentaire)',
    def: { en: 'A food category, not a botanical fruit type: fruits of which the seeds are eaten — almond, walnut, hazelnut, pistachio, pine nut. It is not the pome: that is Apfelfrucht.', fr: 'Catégorie alimentaire, non un type botanique de fruit : fruits dont on mange les graines — amande, noix, noisette, pistache, pignon. Ce n’est pas le piridion : celui-ci est l’Apfelfrucht.' },
    src: ['samenobst', 'german-terms'] },
];

const CATS = [
  { id: 'drupe', anatomy: 'drupe', process: 'drupe',
    name: { en: 'Drupe (stone fruit)', fr: 'Drupe (fruit à noyau)' },
    short: { en: 'A fleshy fruit with a thin skin, a fleshy middle and a hard stone around the seed.', fr: 'Fruit charnu à peau fine, partie moyenne charnue et noyau dur autour de la graine.' },
    def: {
      en: 'A fleshy fruit that does not open, grown from a single carpel: a thin skin ({{exocarp|exocarp}}), a fleshy or fibrous middle ({{mesocarp}}) and a hard stone ({{endocarp}}) around the seed. Cherries, plums, peaches, olives — and the almond: in the almond the middle layer stays thin and splits open when ripe, and what we eat is the seed.',
      fr: 'Fruit charnu qui ne s’ouvre pas, issu d’un seul carpelle : une peau fine ({{exocarp|exocarpe}}), une partie moyenne charnue ou fibreuse ({{mesocarp}}) et un noyau dur ({{endocarp}}) autour de la graine. Cerises, prunes, pêches, olives — et l’amande : chez l’amandier, la partie moyenne reste mince et s’ouvre à maturité, et ce que l’on mange est la graine.',
    },
    examples: ['prunus-dulcis'],
    src: ['morph', 'flora', 'almond-anatomy', 'almond-development'],
    notes: [{
      id: 'steinkern',
      title: { en: 'Steinkern: the stone, not the seed', fr: 'Steinkern : le noyau, pas la graine' },
      body: {
        en: 'The German Steinkern (English stone or pit, French noyau) is the lignified {{endocarp}} of a drupe. In the almond it is the hard shell around the kernel. Inside lies the seed — the almond we eat. At maturity that seed is almost entirely embryo, with two large {{cotyledon|cotyledons}}; the {{endosperm}} grows early, then shrinks as the embryo fills the seed and remains only as a thin layer. A Steinkern is therefore not “endosperm + seed”: it is the endocarp around the seed.',
        fr: 'Le Steinkern allemand (stone ou pit en anglais, noyau en français) est l’{{endocarp|endocarpe}} lignifié d’une drupe. Chez l’amandier, c’est la coque dure autour de l’amande. À l’intérieur se trouve la graine — l’amande que l’on mange. À maturité, cette graine est presque entièrement un embryon, avec deux grands {{cotyledon|cotylédons}} ; l’{{endosperm|endosperme}} se développe tôt, puis diminue à mesure que l’embryon remplit la graine et ne subsiste qu’en couche mince. Un Steinkern n’est donc pas « endosperme + graine » : c’est l’endocarpe autour de la graine.',
      },
      src: ['german-terms', 'almond-anatomy', 'almond-development'],
    }],
    draw: drupeSVG },
  { id: 'berry', anatomy: 'berry', process: 'berry',
    name: { en: 'Berry', fr: 'Baie' },
    short: { en: 'A fleshy fruit whose whole wall becomes soft or juicy, seeds in the flesh, no stone.', fr: 'Fruit charnu dont toute la paroi devient molle ou juteuse, graines dans la chair, sans noyau.' },
    def: {
      en: 'A fleshy fruit that does not open and whose whole wall ({{pericarp}}) becomes soft or juicy, with the seeds embedded in the flesh and no stone. Grapes, tomatoes, peppers — and the kiwifruit and the dragon fruit (pitaya), both from an {{inferior-ovary|inferior ovary}}: the flesh comes from the ovary wall grown together with the receptacle.',
      fr: 'Fruit charnu qui ne s’ouvre pas et dont toute la paroi ({{pericarp}}) devient molle ou juteuse, les graines noyées dans la chair, sans noyau. Raisin, tomate, poivron — et le kiwi comme le pitaya (fruit du dragon), tous deux issus d’un {{inferior-ovary|ovaire infère}} : la chair vient de la paroi de l’ovaire soudée au réceptacle.',
    },
    examples: ['actinidia-deliciosa', 'selenicereus-undatus'],
    src: ['morph', 'flora'],
    draw: berrySVG },
  { id: 'aggregate', anatomy: 'aggregate-fruit', process: 'aggregate',
    name: { en: 'Aggregate fruit (Sammelfrucht)', fr: 'Fruit multiple (Sammelfrucht)' },
    short: { en: 'One flower with several free carpels: each becomes a small fruit, and together they ripen as one.', fr: 'Une fleur à plusieurs carpelles libres : chacun devient un petit fruit, et l’ensemble mûrit comme un tout.' },
    def: {
      en: 'A fruit formed from one flower that has several separate ({{apocarpous}}) carpels on the {{receptacle}}: each carpel becomes a small fruit — a {{drupelet}} in the bramble — and together they ripen as one unit. The German Sammelfrucht covers four subtypes, named by what each fruitlet is: Sammelbeere (berries; Annona), Sammelsteinfrucht (drupelets; raspberry, blackberry), Sammelbalgfrucht (follicles; Caltha), Sammelnussfrucht (achenes; strawberry, rose hip). Raspberries and blackberries are Sammelsteinfrüchte; the strawberry is a Sammelnussfrucht on a swollen receptacle.',
      fr: 'Fruit issu d’une seule fleur à plusieurs carpelles libres ({{apocarpous|apocarpes}}) portés par le {{receptacle|réceptacle}} : chaque carpelle devient un petit fruit — une {{drupelet|drupéole}} chez la ronce — et l’ensemble mûrit comme un tout. Le Sammelfrucht allemand réunit quatre sous-types, nommés d’après la nature de chaque fruit élémentaire : Sammelbeere (baies ; Annona), Sammelsteinfrucht (drupéoles ; framboise, mûre), Sammelbalgfrucht (follicules ; Caltha), Sammelnussfrucht (akènes ; fraise, cynorhodon). Framboises et mûres sont des Sammelsteinfrüchte ; la fraise est une Sammelnussfrucht sur un réceptacle renflé.',
    },
    examples: ['rubus-fruticosus'],
    src: ['morph', 'flora', 'german-terms', 'sammelbeere'],
    draw: aggregateSVG },
  { id: 'pome', anatomy: 'pome', process: null,
    name: { en: 'Pome (apple fruit)', fr: 'Piridion (fruit à pépins)' },
    short: { en: 'The flesh is the hypanthium; the papery core is the true fruit made of the carpels.', fr: 'La chair est l’hypanthe ; le cœur parcheminé est le vrai fruit formé des carpelles.' },
    def: {
      en: 'A pome is an accessory fruit: the edible flesh comes from the {{hypanthium}}, not from the ovary wall, while the papery core is the true fruit formed by the {{carpel|carpels}}. The ovary is {{inferior-ovary|inferior}}, sunk in the hypanthium; the calyx remains at the far end from the stalk. Apple, pear and quince are pomes. German calls the pome Apfelfrucht, and commercial German Kernfrucht or Kernobst — not Samenobst, which is the food category of seed fruits such as almond and walnut.',
      fr: 'Le piridion est un fruit accessoire : la chair comestible vient de l’{{hypanthium|hypanthe}}, non de la paroi de l’ovaire, tandis que le cœur parcheminé est le vrai fruit formé par les {{carpel|carpelles}}. L’ovaire est {{inferior-ovary|infère}}, enfoncé dans l’hypanthe ; le calice reste à l’extrémité opposée au pédoncule. Pomme, poire et coing sont des piridions. L’allemand dit Apfelfrucht, et dans le commerce Kernfrucht ou Kernobst — pas Samenobst, qui est la catégorie alimentaire des fruits à graines comme l’amande et la noix.',
    },
    examples: ['malus-domestica'],
    src: ['morph', 'flora', 'pome'],
    notes: [{
      id: 'samenobst-note',
      title: { en: 'Samenobst is not the pome', fr: 'Samenobst n’est pas le piridion' },
      body: {
        en: 'The pair Samenobst / pome is a false friend. Samenobst is a food category: fruits of which the seed is eaten — almond, walnut, hazelnut, pistachio. The botanical pome is Apfelfrucht (commercial German Kernfrucht or Kernobst). An apple is a pome, not Samenobst; an almond is Samenobst, not a pome. The two words answer different questions: what the fruit is botanically, and which part we eat.',
        fr: 'Le couple Samenobst / piridion est un faux ami. Samenobst est une catégorie alimentaire : les fruits dont on mange la graine — amande, noix, noisette, pistache. Le piridion botanique est l’Apfelfrucht (Kernfrucht ou Kernobst dans le commerce). Une pomme est un piridion, pas du Samenobst ; une amande est du Samenobst, pas un piridion. Les deux mots répondent à deux questions différentes : ce qu’est le fruit en botanique, et quelle partie on mange.',
      },
      src: ['samenobst', 'german-terms'],
    }],
    draw: pomeSVG },
  { id: 'nut', anatomy: 'nut', process: null,
    name: { en: 'Nut (walnut)', fr: 'Noix (nucule)' },
    short: { en: 'A dry, one-seeded fruit with a hard wall; in the walnut the nut is wrapped in a fleshy husk.', fr: 'Fruit sec à une graine et paroi dure ; chez le noyer, la noix est enveloppée d’une écorce charnue.' },
    def: {
      en: 'A true nut is a dry, indehiscent fruit whose whole {{pericarp}} is hard and which contains one seed; the hazelnut is the classic example. The walnut (Juglans regia) looks like a drupe but is a nut enclosed in a fleshy husk: the husk develops from the involucre and calyx, not from the fruit wall, and the hard shell is the {{endocarp}}. Botanists call this drupelike fruit a tryma or pseudodrupe. The husk is not a free cupule like the cup of an acorn; it is an involucre fused to the flower parts around the ovary.',
      fr: 'Une vraie noix est un fruit sec indéhiscent dont tout le {{pericarp|péricarpe}} est dur et qui contient une graine ; la noisette en est l’exemple classique. La noix (Juglans regia) ressemble à une drupe mais est une nucule enveloppée d’une écorce charnue : cette écorce vient de l’involucre et du calice, non de la paroi du fruit, et la coque dure est l’{{endocarp|endocarpe}}. Les botanistes appellent ce fruit drupacé un tryma ou une pseudodrupe. L’écorce n’est pas une cupule libre comme la coupe d’un gland ; c’est un involucre soudé aux pièces florales autour de l’ovaire.',
    },
    examples: ['juglans-regia'],
    src: ['morph', 'flora', 'fna-juglandaceae', 'cupule', 'juglone'],
    notes: [{
      id: 'husk-juglone',
      title: { en: 'Husk, cupule, and juglone', fr: 'Écorce, cupule et juglone' },
      body: {
        en: 'A cupule is a cup-shaped involucre of bracts around a fruit, as in the acorn and the hazelnut. The walnut husk is also involucral, but it is fused to the calyx and ovary and encloses the whole nut, so it is not a free cup. Walnuts also make juglone (5-hydroxy-1,4-naphthoquinone), released from leaves, roots and husks; it is allelopathic and can kill sensitive plants. Black walnut and butternut are the worst offenders; Juglans regia also produces juglone, but to a lesser degree.',
        fr: 'Une cupule est un involucre en forme de coupe, fait de bractées, autour d’un fruit, comme chez le gland et la noisette. L’écorce de la noix est aussi un involucre, mais soudé au calice et à l’ovaire et enveloppant toute la noix : ce n’est donc pas une coupe libre. Le noyer produit en outre de la juglone (5-hydroxy-1,4-naphtoquinone), libérée par les feuilles, les racines et les écorces ; elle est allélopathique et peut tuer des plantes sensibles. Le noyer noir et le noyer cendré sont les plus virulents ; Juglans regia produit aussi de la juglone, mais à un degré moindre.',
      },
      src: ['fna-juglandaceae', 'cupule', 'juglone'],
    }],
    draw: nutSVG },
  { id: 'accessory', anatomy: 'accessory-fruit', process: null,
    name: { en: 'Accessory fruit (false fruit)', fr: 'Fruit accessoire (faux-fruit)' },
    short: { en: 'The fleshy part comes not only from the ovary but from other flower parts.', fr: 'La partie charnue ne vient pas seulement de l’ovaire mais d’autres pièces florales.' },
    def: {
      en: 'A fruit whose fleshy part does not come from the ovary wall alone but also, or mainly, from other flower parts — the swollen {{receptacle}}, a {{hypanthium}}, or the {{calyx}}. Anatomically, a true fruit develops from the {{carpel}}: its {{ovary}} wall becomes the {{pericarp}}, as in a peach or a tomato. In an accessory fruit the ovary still forms the true fruit — the little {{achene}}s of a strawberry, the papery core of an apple — while the flesh around it is accessory: the {{receptacle}} in the strawberry, the {{hypanthium}} in the apple, pear ({{pome}}) and rose hip, the fleshy floral tube around the achene in the sea buckthorn. The pome is treated separately above because its core and flesh have their own names; this section covers the other accessory fruits, such as the sea buckthorn.',
      fr: 'Fruit dont la partie charnue ne vient pas seulement de la paroi de l’ovaire mais aussi, ou surtout, d’autres pièces florales — le {{receptacle|réceptacle}} renflé, un {{hypanthium|hypanthe}}, ou le {{calyx|calice}}. Anatomiquement, un vrai fruit se développe à partir du {{carpel}} : la paroi de son {{ovary|ovaire}} devient le {{pericarp}}, comme chez la pêche ou la tomate. Dans un faux fruit, l’ovaire forme toujours le vrai fruit — les petits {{achene|akènes}} de la fraise, le cœur parcheminé de la pomme — tandis que la chair autour est accessoire : le {{receptacle|réceptacle}} chez la fraise, l’{{hypanthium|hypanthe}} chez la pomme, la poire ({{pome}}) et le cynorhodon, le tube floral charnu autour de l’akène chez l’argousier. Le piridion est traité à part ci-dessus parce que son cœur et sa chair ont leurs propres noms ; cette section couvre les autres fruits accessoires, comme l’argousier.',
    },
    examples: ['hippophae-rhamnoides'],
    src: ['morph', 'flora'],
    draw: accessorySVG },
  { id: 'dry', anatomy: null, process: null,
    name: { en: 'Dry fruits', fr: 'Fruits secs' },
    short: { en: 'The fruit wall stays dry at maturity: it opens (capsule) or keeps the seed inside (achene, caryopsis, nutlet).', fr: 'La paroi du fruit reste sèche à maturité : elle s’ouvre (capsule) ou garde la graine (akène, caryopse, nucule).' },
    def: {
      en: 'A fruit whose wall ({{pericarp}}) stays dry when ripe. Two families: dry fruits that open to release the seeds, like the {{capsule}} of the amaranth, and dry fruits that stay closed, like the {{achene}} of buckwheat and quinoa, the {{caryopsis}} of wheat (wall fused with the seed) and the small {{nut|nutlets}} of the horehound. True nuts, with a hard whole wall and one seed, are treated in their own section above; the “nutlets” of the horehound are small one-seeded units of a four-lobed ovary, not nuts.',
      fr: 'Fruit dont la paroi ({{pericarp}}) reste sèche à maturité. Deux familles : les fruits secs qui s’ouvrent pour libérer les graines, comme la {{capsule}} de l’amarante, et les fruits secs qui restent fermés, comme l’{{achene|akène}} du sarrasin et du quinoa, le {{caryopsis|caryopse}} du blé (paroi soudée à la graine) et les petits {{nut|nucules}} du marrube. Les vraies noix, à paroi entièrement dure et à une graine, sont traitées dans leur section ci-dessus ; les « nucules » du marrube sont de petites unités à une graine d’un ovaire à quatre lobes, pas des noix.',
    },
    examples: ['triticum-aestivum', 'fagopyrum-esculentum', 'chenopodium-quinoa', 'marrubium-vulgare', 'amaranthus-caudatus'],
    src: ['morph', 'flora'],
    draw: drySVG },
];

const index = new Map(TAXA.map((e) => [e.id, e]));
const { cite, list } = citer(SOURCES);

// ---------------------------------------------------------------- drawings
// Schematic sections in the style of the Anatomy drawings; every label links
// to its Anatomy entry. Colors: skin green, flesh clay/sand, stone silt,
// seed yellow, husk olive.
const NS = 'http://www.w3.org/2000/svg';
function mk(name, attrs = {}, parent = null) {
  const e = document.createElementNS(NS, name);
  for (const [k, v] of Object.entries(attrs)) if (v !== undefined && v !== null) e.setAttribute(k, v);
  if (parent) parent.appendChild(e);
  return e;
}
const polar = (cx, cy, r, a) => [Math.round((cx + r * Math.cos((a * Math.PI) / 180)) * 10) / 10, Math.round((cy + r * Math.sin((a * Math.PI) / 180)) * 10) / 10];

function frame(title) {
  const root = mk('svg', { viewBox: '0 0 460 210', role: 'group', 'aria-label': title, width: 460, height: 210 });
  mk('title', {}, root).textContent = title;
  const shapes = mk('g', {}, root);
  const leads = mk('g', {}, root);
  const labels = mk('g', {}, root);
  return {
    root, shapes,
    s(name, attrs, parent = shapes) { return mk(name, attrs, parent); },
    label(text, x, y, to = null, anchor = 'start') {
      const t = mk('text', { x, y, 'text-anchor': anchor, class: 'fv-lbl' }, labels);
      t.textContent = text;
      if (to) {
        const sx = anchor === 'start' ? x - 4 : x + 4;
        mk('path', { d: `M${sx},${y - 4} L${to[0]},${to[1]}`, class: 'fv-lead' }, leads);
        mk('circle', { cx: to[0], cy: to[1], r: 1.8, fill: 'var(--ink-2)' }, leads);
      }
      return t;
    },
    link(id, text, x, y, to = null, anchor = 'start') {
      const a = mk('a', { href: routeHref('anatomy', id) }, labels);
      const t = mk('text', { x, y, 'text-anchor': anchor, class: 'fv-lbl fv-link' }, a);
      t.textContent = text;
      if (to) {
        const sx = anchor === 'start' ? x - 4 : x + 4;
        mk('path', { d: `M${sx},${y - 4} L${to[0]},${to[1]}`, class: 'fv-lead' }, leads);
        mk('circle', { cx: to[0], cy: to[1], r: 1.8, fill: 'var(--ink-2)' }, leads);
      }
      return t;
    },
  };
}

function drupeSVG() {
  const c = frame(T('A drupe cut open (almond): stone and seed', 'Une drupe ouverte (amande) : noyau et graine'));
  const cx = 165, cy = 100;
  // Seed (the almond) inside the stone
  c.s('ellipse', { cx, cy, rx: 26, ry: 42, class: 'fv-seed' });
  c.s('path', { d: `M${cx},${cy} q-24,-4 -20,26 q26,8 44,0 q-2,-30 -24,-26 Z`, class: 'fv-seed' });
  c.s('path', { d: `M${cx + 2},${cy - 36} q2,8 -2,12 q4,8 0,14`, class: 'fv-thin' });
  // Stone (endocarp), split open
  c.s('path', { d: `M${cx},${cy - 52} C${cx - 38},${cy - 34} ${cx - 38},${cy + 30} ${cx},${cy + 52} C${cx - 4},${cy + 52} ${cx - 4},${cy - 52} ${cx},${cy - 52} Z`, class: 'fv-stone' });
  c.s('path', { d: `M${cx},${cy - 52} C${cx + 40},${cy - 34} ${cx + 40},${cy + 30} ${cx},${cy + 52} C${cx + 4},${cy + 52} ${cx + 4},${cy - 52} ${cx},${cy - 52} Z`, class: 'fv-stone' });
  // Fleshy middle, drying and splitting open
  c.s('path', { d: `M${cx},${cy - 58} C${cx - 52},${cy - 38} ${cx - 52},${cy + 34} ${cx},${cy + 58} C${cx - 8},${cy + 58} ${cx - 8},${cy - 58} ${cx},${cy - 58} Z`, class: 'fv-meso' });
  c.s('path', { d: `M${cx},${cy - 58} C${cx + 54},${cy - 38} ${cx + 54},${cy + 34} ${cx},${cy + 58} C${cx + 8},${cy + 58} ${cx + 8},${cy - 58} ${cx},${cy - 58} Z`, class: 'fv-meso' });
  // Skin (exocarp), whole
  c.s('ellipse', { cx, cy, rx: 62, ry: 78, class: 'fv-skin' });
  c.link('exocarp', T('exocarp', 'exocarpe'), 40, 26, [cx - 34, cy - 62], 'end');
  c.link('mesocarp', T('mesocarp', 'mésocarpe'), 40, 52, [cx - 44, cy + 10], 'end');
  c.link('endocarp', T('endocarp = stone (Steinkern)', 'endocarpe = noyau (Steinkern)'), 40, 78, [cx - 20, cy - 22], 'end');
  c.link('seed', T('seed (the almond)', 'graine (l’amande)'), 40, 104, [cx - 20, cy + 34], 'end');
  c.label(T('ripe, splitting open', 'mûre, s’ouvrant'), 40, 130);
  return c.root;
}

function berrySVG() {
  const c = frame(T('A berry cut across (kiwifruit)', 'Une baie coupée en travers (kiwi)'));
  const cx = 165, cy = 100;
  c.s('circle', { cx, cy, r: 78, class: 'fv-skin' });
  c.s('circle', { cx, cy, r: 70, class: 'fv-meso' });
  // seeds around the core
  for (const a of [-160, -120, -80, -40, 0, 40, 80, 120, 160]) {
    const [sx, sy] = polar(cx, cy, 46, a);
    c.s('ellipse', { cx: sx, cy: sy, rx: 9, ry: 5, transform: `rotate(${a + 90} ${sx} ${sy})`, class: 'fv-seed' });
  }
  c.s('circle', { cx, cy, r: 22, class: 'fv-core' });
  c.link('pericarp', T('pericarp, all fleshy', 'péricarpe, tout charnu'), 40, 24, [cx - 30, cy - 62], 'end');
  c.link('seed', T('seeds', 'graines'), 40, 50, [cx - 10, cy - 40], 'end');
  c.label(T('skin with hairs (exocarp)', 'peau velue (exocarpe)'), 40, 76);
  c.label(T('green flesh (meso- and endocarp)', 'chair verte (méso- et endocarpe)'), 40, 102);
  return c.root;
}

function aggregateSVG() {
  const c = frame(T('An aggregate of drupelets (blackberry)', 'Un agrégat de drupéoles (mûre)'));
  const cx = 165, cy = 128;
  const spots = [[-44, 0], [-22, -6], [0, -10], [22, -6], [44, 0], [-50, 24], [-28, 20], [-6, 16], [16, 16], [38, 20], [52, 30], [-38, 44], [-16, 40], [6, 38], [28, 42], [-24, 62], [-2, 60], [20, 64]];
  for (const [dx, dy] of spots) {
    c.s('circle', { cx: cx + dx, cy: cy + dy, r: 11, class: 'fv-meso' });
    c.s('circle', { cx: cx + dx, cy: cy + dy, r: 3.2, class: 'fv-stone' });
  }
  // receptacle dome inside
  c.s('path', { d: `M${cx},${cy + 62} C${cx - 60},${cy + 30} ${cx - 62},${cy - 28} ${cx},${cy - 26} C${cx + 62},${cy - 28} ${cx + 60},${cy + 30} ${cx},${cy + 62} Z`, class: 'fv-core' });
  c.link('drupelet', T('drupelet (small drupe)', 'drupéole (petite drupe)'), 40, 22, [cx + 34, cy - 30], 'end');
  c.link('receptacle', T('receptacle', 'réceptacle'), 40, 48, [cx + 8, cy + 14], 'end');
  c.label(T('each with a tiny stone (endocarp)', 'chacune avec un minuscule noyau (endocarpe)'), 40, 74);
  c.label(T('from one flower, many free carpels', 'd’une seule fleur, de nombreux carpelles libres'), 40, 100);
  return c.root;
}

function pomeSVG() {
  const c = frame(T('A pome cut across (apple)', 'Un piridion coupé en travers (pomme)'));
  const cx = 165, cy = 102;
  // Skin and fleshy hypanthium
  c.s('ellipse', { cx, cy, rx: 70, ry: 80, class: 'fv-skin' });
  c.s('ellipse', { cx, cy, rx: 64, ry: 74, class: 'fv-meso' });
  // Core: five carpels, papery, star-shaped
  const pts = [];
  for (let i = 0; i < 10; i++) {
    const a = -90 + i * 36;
    const r = i % 2 ? 13 : 30;
    pts.push(polar(cx, cy, r, a).join(','));
  }
  c.s('path', { d: `M${pts.join(' L')} Z`, class: 'fv-core-line' });
  // Seeds in the carpels
  for (let i = 0; i < 5; i++) {
    const [sx, sy] = polar(cx, cy, 19, -90 + i * 72);
    c.s('ellipse', { cx: sx, cy: sy, rx: 4, ry: 7, transform: `rotate(${i * 72} ${sx} ${sy})`, class: 'fv-seed' });
  }
  // Calyx remnants at the top
  c.s('path', { d: `M${cx - 10},${cy - 76} q10,-14 20,0 q-10,6 -20,0 Z`, class: 'fv-calyx' });
  c.link('exocarp', T('skin (exocarp)', 'peau (exocarpe)'), 40, 24, [cx - 40, cy - 60], 'end');
  c.link('hypanthium', T('flesh = hypanthium', 'chair = hypanthe'), 40, 50, [cx - 46, cy + 8], 'end');
  c.link('endocarp', T('papery core = carpels', 'cœur parcheminé = carpelles'), 40, 76, [cx - 8, cy - 18], 'end');
  c.link('seed', T('seeds', 'graines'), 40, 102, [cx + 16, cy + 4], 'end');
  c.label(T('calyx remains at the far end', 'le calice reste à l’extrémité opposée'), 40, 128);
  return c.root;
}

function nutSVG() {
  const c = frame(T('A walnut: husk, shell (endocarp) and seed', 'Une noix : écorce, coque (endocarpe) et graine'));
  // Whole fruit at left: green husk
  const hx = 95, hy = 100;
  c.s('ellipse', { cx: hx, cy: hy, rx: 50, ry: 60, class: 'fv-husk' });
  c.s('path', { d: `M${hx},${hy - 58} q-6,60 0,116`, class: 'fv-thin' });
  c.s('path', { d: `M${hx - 30},${hy - 30} q30,10 60,0`, class: 'fv-thin' });
  // Half fruit at right: shell and kernel
  const sx = 305, sy = 100;
  c.s('ellipse', { cx: sx, cy: sy, rx: 64, ry: 58, class: 'fv-shell' });
  c.s('ellipse', { cx: sx, cy: sy, rx: 50, ry: 44, class: 'fv-seed' });
  // Two cotyledons
  c.s('path', { d: `M${sx},${sy - 40} C${sx - 26},${sy - 18} ${sx - 26},${sy + 18} ${sx},${sy + 40}`, class: 'fv-thin' });
  c.s('path', { d: `M${sx},${sy - 40} C${sx + 26},${sy - 18} ${sx + 26},${sy + 18} ${sx},${sy + 40}`, class: 'fv-thin' });
  c.label(T('husk = involucre + calyx', 'écorce = involucre + calice'), 20, 28);
  c.link('endocarp', T('shell = endocarp', 'coque = endocarpe'), 20, 56, [sx - 52, sy - 20], 'start');
  c.link('seed', T('seed (kernel)', 'graine (amande)'), 20, 84, [sx - 18, sy], 'start');
  c.link('cotyledon', T('two cotyledons', 'deux cotylédons'), 20, 112, [sx + 18, sy + 8], 'start');
  c.label(T('the nut sits inside the shell', 'la noix est à l’intérieur de la coque'), 20, 148);
  return c.root;
}

function accessorySVG() {
  const c = frame(T('A false fruit (sea buckthorn)', 'Un faux-fruit (argousier)'));
  const cx = 165, cy = 100;
  // fleshy calyx tube (hypanthium) wrapping the achene
  c.s('ellipse', { cx, cy, rx: 42, ry: 54, class: 'fv-meso' });
  // the true fruit: a small achene inside
  c.s('ellipse', { cx, cy, rx: 17, ry: 26, class: 'fv-stone' });
  c.s('ellipse', { cx, cy, rx: 10, ry: 18, class: 'fv-seed' });
  c.link('achene', T('achene (the true fruit)', 'akène (le vrai fruit)'), 40, 26, [cx - 20, cy - 6], 'end');
  c.link('hypanthium', T('fleshy calyx tube (hypanthium)', 'tube charnu du calice (hypanthe)'), 40, 52, [cx - 30, cy + 30], 'end');
  c.label(T('one seed inside', 'une graine à l’intérieur'), 40, 78);
  c.label(T('the orange “berry” is the calyx, not the ovary', 'la « baie » orange est le calice, pas l’ovaire'), 40, 104);
  return c.root;
}

function drySVG() {
  const c = frame(T('Dry fruits (wheat, buckwheat, horehound, amaranth)', 'Fruits secs (blé, sarrasin, marrube, amarante)'));
  // Caryopsis: wall fused with the seed
  const x1 = 78, y = 62;
  c.s('ellipse', { cx: x1, cy: y, rx: 30, ry: 42, class: 'fv-skin' });
  c.s('ellipse', { cx: x1, cy: y, rx: 26, ry: 38, class: 'fv-seed' });
  c.s('path', { d: `M${x1 + 6},${y - 22} q8,10 0,26 q10,4 8,-14 q-2,-14 -8,-12 Z`, class: 'fv-core' });
  c.link('caryopsis', T('caryopsis (wheat)', 'caryopse (blé)'), 300, 30, [x1 + 32, y - 26], 'start');
  c.label(T('wall fused with the seed coat', 'paroi soudée au tégument'), 300, 52);
  // Achene: seed nearly filling the wall, joined at one point
  const x2 = 78, y2 = 150;
  c.s('path', { d: `M${x2},${y2 + 30} C${x2 - 24},${y2 + 14} ${x2 - 22},${y2 - 28} ${x2},${y2 - 32} C${x2 + 22},${y2 - 28} ${x2 + 24},${y2 + 14} ${x2},${y2 + 30} Z`, class: 'fv-skin' });
  c.s('path', { d: `M${x2},${y2 + 24} C${x2 - 17},${y2 + 10} ${x2 - 16},${y2 - 24} ${x2},${y2 - 27} C${x2 + 16},${y2 - 24} ${x2 + 17},${y2 + 10} ${x2},${y2 + 24} Z`, class: 'fv-seed' });
  c.link('achene', T('achene (buckwheat, quinoa)', 'akène (sarrasin, quinoa)'), 300, 132, [x2 + 26, y2 - 6], 'start');
  c.label(T('one seed, joined at one point', 'une graine, attachée en un point'), 300, 154);
  // Four nutlets (horehound)
  const x3 = 78, y3 = 104;
  for (const [dx, dy] of [[-13, -13], [13, -13], [-13, 13], [13, 13]]) {
    c.s('ellipse', { cx: x3 + dx, cy: y3 + dy, rx: 13, ry: 15, class: 'fv-stone' });
    c.s('ellipse', { cx: x3 + dx, cy: y3 + dy, rx: 6, ry: 9, class: 'fv-seed' });
  }
  c.link('nut', T('four nutlets (horehound)', 'quatre nucules (marrube)'), 300, 82, [x3 + 28, y3 - 22], 'start');
  c.label(T('a four-lobed ovary, each lobe one nutlet', 'un ovaire à quatre lobes, chaque lobe une nucule'), 300, 104);
  return c.root;
}

// ---------------------------------------------------------------- page
/** {{entry|text}} links to Anatomy entries; the rest stays plain text. */
function rich(def) {
  const parts = def.split(/(\{\{[a-z0-9-]+\|[^}]+\}\}|\{\{[a-z0-9-]+\}\})/g);
  return parts.map((part) => {
    const m = part.match(/^\{\{([a-z0-9-]+)(?:\|([^}]+))?\}\}$/);
    if (m) return h('a', { class: 'fv-link', href: routeHref('anatomy', m[1]) }, m[2] ?? m[1]);
    return part;
  });
}

function speciesName(id) {
  const e = index.get(id);
  if (!e) return h('span', { class: 'taxo-lat' }, id);
  return h('a', { href: routeHref('taxonomy', id), class: 'taxo-lat' }, e.name);
}

function exampleItem(id) {
  const e = index.get(id);
  if (!e) return h('li', { class: 'fv-example' }, id);
  const links = [];
  if (e.fruit_anatomy) links.push(h('a', { class: 'fv-chip', href: routeHref('anatomy', e.fruit_anatomy) },
    T(`${STR.inAnatomy.en} →`, `${STR.inAnatomy.fr} →`)));
  if (e.process) links.push(h('a', { class: 'fv-chip', href: routeHref('development', e.process) },
    L(STR.inDevelopment)));
  return h('li', { class: 'fv-example' },
    h('span', { class: 'fv-example-head' }, speciesName(id), ' · ', (e.common?.[lang()] ?? e.common?.fr ?? []).join(' · ')),
    h('span', { class: 'fv-example-fruit' }, L(e.fruit)),
    links.length ? h('span', { class: 'fv-example-links' }, ...links) : null);
}

function noteSection(note) {
  return h('aside', { class: 'fv-note', id: note.id },
    h('h3', {}, L(note.title)),
    h('p', {}, ...rich(L(note.body))),
    h('p', { class: 'fv-src' }, cite(...note.src)));
}

function catSection(cat) {
  const fig = h('figure', { class: 'fv-fig' },
    h('figcaption', {}, L(STR.drawingTitle)),
    cat.draw());
  const body = h('div', { class: 'fv-cat-body' },
    h('p', {}, ...rich(L(cat.def))),
    ...(cat.notes ?? []).map(noteSection),
    h('h3', {}, L(STR.examplesTitle)),
    h('ul', { class: 'fv-examples' }, ...cat.examples.map(exampleItem)),
    h('p', { class: 'fv-src' }, cite(...cat.src)));
  return h('section', { class: 'fv-cat', id: cat.id },
    h('h2', { class: 'fv-cat-title' }, h('span', {}, L(cat.name)),
      cat.anatomy ? h('a', { class: 'fv-chip', href: routeHref('anatomy', cat.anatomy) }, L(STR.inAnatomy)) : null,
      cat.process ? h('a', { class: 'fv-chip', href: routeHref('development', cat.process) }, L(STR.inDevelopment)) : null),
    h('div', { class: 'fv-cat-grid' }, fig, body));
}

function termRow(t) {
  return h('tr', {},
    h('th', { scope: 'row' }, t.de),
    h('td', {}, t.en),
    h('td', {}, t.fr),
    h('td', {}, L(t.def)),
    h('td', { class: 'fv-term-src' }, cite(...t.src)));
}

export function mount(panel) {
  const table = h('table', { class: 'fv-table' },
    h('caption', {}, L(STR.tableTitle)),
    h('thead', {}, h('tr', {},
      h('th', { scope: 'col' }, L(STR.typeCol)),
      h('th', { scope: 'col' }, L(STR.defCol)),
      h('th', { scope: 'col' }, L(STR.exCol)))),
    h('tbody', {}, ...CATS.map((cat) => h('tr', {},
      h('th', { scope: 'row' }, h('a', { href: routeHref('fruits', cat.id) }, L(cat.name))),
      h('td', {}, L(cat.short)),
      h('td', {}, ...cat.examples.map((id, i) => [i ? ', ' : null, speciesName(id)]))))));

  const terms = h('table', { class: 'fv-table fv-terms' },
    h('caption', {}, L(STR.termsTitle)),
    h('thead', {}, h('tr', {},
      h('th', { scope: 'col' }, L(STR.deCol)),
      h('th', { scope: 'col' }, L(STR.enCol)),
      h('th', { scope: 'col' }, L(STR.frCol)),
      h('th', { scope: 'col' }, L(STR.whatCol)),
      h('th', { scope: 'col' }, L(STR.sources)))),
    h('tbody', {}, ...TERMS.map(termRow)));

  panel.replaceChildren(
    h('header', { class: 'fv-head' }, h('h1', {}, L(STR.title)), h('p', { class: 'lead' }, L(STR.lead))),
    table,
    h('p', { class: 'lead fv-terms-lead' }, L(STR.termsLead)),
    h('div', { class: 'fv-table-wrap' }, terms),
    ...CATS.map(catSection),
    h('footer', { class: 'fv-sources' }, h('h2', {}, L(STR.sources)), list()),
  );
}

export function show(sub) {
  if (!sub) return;
  const el = document.getElementById(sub);
  if (el) el.scrollIntoView({ block: 'start' });
}

// Exported for the unit tests: the page data without the DOM.
export { CATS };
