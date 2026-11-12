// Sources of the taxonomy tab: accepted names, order/family placement, and the
// flower facts (parts per whorl, symmetry, ovary, phyllotaxy, inflorescence,
// fruit). Names and placement follow POWO/WCVP and WFO; the flower facts are
// textbook-standard values for these well-studied species, given per species
// in `flower_src`.
export const SOURCES = [
 {
  "id": "powo",
  "short": "POWO / WCVP",
  "text": "Royal Botanic Gardens, Kew. Plants of the World Online and its data backbone, the World Checklist of Vascular Plants (WCVP, release of 2026-06-10). The POWO website returns HTTP 403 (Cloudflare challenge), so WCVP records are read through the GBIF checklist dataset f382f0ce-323a-4091-bb9f-add557f3a9a2. Used for accepted names and authorities.",
  "url": "https://powo.science.kew.org/"
 },
 {
  "id": "wfo",
  "short": "WFO",
  "text": "World Flora Online, WFO Plant List, release 2026-06, read through its GraphQL API (list.worldfloraonline.org/gql.php). Used for accepted names, authorities and family placement.",
  "url": "https://wfoplantlist.org/"
 },
 {
  "id": "apweb",
  "short": "Stevens, APweb",
  "text": "Stevens P.F. Angiosperm Phylogeny Website (Missouri Botanical Garden). Used for the placement of the orders (Poales, Caryophyllales, Lamiales, Rosales, Ericales, Saxifragales) and their families, following APG IV, and for the subfamilies and tribes of Rosaceae.",
  "url": "https://www.mobot.org/MOBOT/research/APweb/"
 },
 {
  "id": "fna-rosaceae",
  "short": "Flora of North America, Rosaceae",
  "text": "Brouillet L. Rosaceae Jussieu, including the tribe treatments Amygdaleae, Maleae and Rubeae. Flora of North America North of Mexico, vol. 9 (2014), online at floranorthamerica.org. Used for the tribe names, their authorities and their circumscription; where APweb and FNA differ on the author of Amygdaleae, the entry says so.",
  "url": "https://floranorthamerica.org/Rosaceae"
 },
 {
  "id": "burnett-1835",
  "short": "Burnett, Outlines of Botany (1835)",
  "text": "Burnett G.T., Outlines of Botany, including a general history of the vegetable kingdom, vol. 1. London: H. Renshaw, 1835. Scan and OCR on archive.org (item outlinesbotany00burngoog). Used for the names Amaranthoideae and Chenopodioideae, published there as the groups Amaranthidae and Chenopodidae (p. 591); the modern -oideae spelling and the rank of subfamily follow APweb.",
  "url": "https://archive.org/details/outlinesbotany00burngoog/page/591/mode/1up"
 },
 {
  "id": "almond-cultivars",
  "short": "Almond cultivars, CEBAS-CSIC",
  "text": "Dicenta F., Cremades T., Martínez-Gómez P., et al. ‘Penta and Makako: Two Extra-late Flowering Self-compatible Almond Cultivars from CEBAS-CSIC’. HortScience 53(11): 1700–1702 (2018). Used for the cultivar names, their sex/self-compatibility and their flowering and ripening traits.",
  "url": "https://doi.org/10.21273/HORTSCI13310-18"
 },
 {
  "id": "cpvo-actinidia",
  "short": "CPVO, Actinidia protocol",
  "text": "Community Plant Variety Office (CPVO). Technical Protocol TP/098 for Actinidia, the kiwifruit genus, with ‘Hayward’ as the reference female variety. Used for the female cultivar name and sex.",
  "url": "https://cpvo.europa.eu/sites/default/files/documents/TP/fruits/TP_098_ACTINIDIA.pdf"
 },
 {
  "id": "grin-tomuri",
  "short": "GRIN-Global, ‘Tomuri’",
  "text": "USDA ARS National Plant Germplasm System, GRIN-Global accession PI 667954, Actinidia deliciosa ‘Tomuri’, a male kiwifruit pollinizer. Used for the male cultivar name and sex.",
  "url": "https://npgsweb.ars-grin.gov/gringlobal/accessiondetail?id=1641383"
 },
 {
  "id": "flora",
  "short": "Standard floras and morphology texts",
  "text": "Floral part counts, symmetry, ovary position, phyllotaxy, inflorescence and fruit type are standard morphological facts for these widely described species, as given in regional floras (e.g. Flora of China, Flora of North America) and plant-morphology textbooks. Checked against the species or genus treatment named in each flower_src before publication.",
  "url": "http://www.efloras.org/"
 },
 {
  "id": "photo-prunus",
  "short": "Photo : CC0, ManuelB701",
  "text": "Photo of an almond blossom, CC0, ManuelB701, Wikimedia Commons (reduced in size for the web).",
  "url": "https://commons.wikimedia.org/wiki/File:Bodenheim_-_Bl%C3%BCte_eines_Mandelbaums.jpg"
 },
 {
  "id": "photo-rubus",
  "short": "Photo : CC0, MargaretAndArmand",
  "text": "Photo of a bramble (Rubus fruticosus) flower, CC0, MargaretAndArmand, Wikimedia Commons (reduced in size for the web).",
  "url": "https://commons.wikimedia.org/wiki/File:Rubus_fruticosus_flower_in_Maastricht.jpg"
 },
 {
  "id": "photo-actinidia",
  "short": "Photo : public domain, Wouter Hagens",
  "text": "Photo of a kiwifruit flower, public domain, Wouter Hagens, Wikimedia Commons (reduced in size for the web).",
  "url": "https://commons.wikimedia.org/wiki/File:Actinidia_chinensis_A.jpg"
 },
 {
  "id": "photo-hippophae",
  "short": "Photo : CC BY-SA 2.0 de, Jürgen Howaldt",
  "text": "Photo of sea buckthorn berries, CC BY-SA 2.0 de, Jürgen Howaldt, Wikimedia Commons (reduced in size for the web).",
  "url": "https://commons.wikimedia.org/wiki/File:Hippophae_rhamnoides_051012.jpg"
 },
 {
  "id": "photo-selenicereus",
  "short": "Photo : CC BY 3.0, Forest & Kim Starr",
  "text": "Photo of a dragon-fruit (Selenicereus undatus) flower, CC BY 3.0, Forest & Kim Starr, Wikimedia Commons (reduced in size for the web).",
  "url": "https://commons.wikimedia.org/wiki/File:Starr_030702-0001_Hylocereus_undatus.jpg"
 },
 {
  "id": "photo-triticum",
  "short": "Photo : CC BY-SA 2.5, Andreas Trepte",
  "text": "Photo of wheat ears, CC BY-SA 2.5, Andreas Trepte, Wikimedia Commons (reduced in size for the web).",
  "url": "https://commons.wikimedia.org/wiki/File:Triticum_aestivum.jpg"
 },
 {
  "id": "photo-fagopyrum",
  "short": "Photo : CC BY-SA 4.0, V.Boldychev",
  "text": "Photo of a buckwheat flower, CC BY-SA 4.0, V.Boldychev, Wikimedia Commons (reduced in size for the web).",
  "url": "https://commons.wikimedia.org/wiki/File:Buckwheat_flower_macroA.jpg"
 },
 {
  "id": "photo-chenopodium",
  "short": "Photo : CC BY-SA 4.0, Michael Hermann",
  "text": "Photo of red quinoa plants, CC BY-SA 4.0, Michael Hermann, Wikimedia Commons (reduced in size for the web).",
  "url": "https://commons.wikimedia.org/wiki/File:Red_quinoa_plants.JPG"
 },
 {
  "id": "photo-amaranthus",
  "short": "Photo : CC BY-SA 4.0, Stefan.lefnaer",
  "text": "Photo of love-lies-bleeding (Amaranthus caudatus) inflorescences, CC BY-SA 4.0, Stefan.lefnaer, Wikimedia Commons (reduced in size for the web).",
  "url": "https://commons.wikimedia.org/wiki/File:Amaranthus_caudatus_sl7.jpg"
 },
 {
  "id": "photo-ribes-rubrum",
  "short": "Photo : CC BY-SA 3.0, Hedwig Storch",
  "text": "Photo of ripe red currant berries, CC BY-SA 3.0, Hedwig Storch, Wikimedia Commons (reduced in size for the web). The same image is used by Plants For A Future; the original is on Wikimedia Commons.",
  "url": "https://commons.wikimedia.org/wiki/File:Ribes_rubrum_-_Rote_Johannisbeeren_1353.jpg"
 },
 {
  "id": "photo-ribes-nigrum",
  "short": "Photo : CC BY-SA 3.0, Aiwok",
  "text": "Photo of blackcurrant flowers, CC BY-SA 3.0, Aiwok, Wikimedia Commons (reduced in size for the web).",
  "url": "https://commons.wikimedia.org/wiki/File:Ribes_nigrum_flos.JPG"
 },
 {
  "id": "photo-ribes-uva-crispa",
  "short": "Photo : CC BY-SA 4.0, Krzysztof Ziarnek, Kenraiz",
  "text": "Photo of a gooseberry flower, CC BY-SA 4.0, Krzysztof Ziarnek (Kenraiz), Wikimedia Commons (reduced in size for the web).",
  "url": "https://commons.wikimedia.org/wiki/File:Ribes_uva-crispa_kz04.jpg"
 },
 {
  "id": "photo-rubus-idaeus",
  "short": "Photo : CC BY-SA 4.0, Krzysztof Ziarnek, Kenraiz",
  "text": "Photo of raspberry flowers, CC BY-SA 4.0, Krzysztof Ziarnek (Kenraiz), Wikimedia Commons (reduced in size for the web).",
  "url": "https://commons.wikimedia.org/wiki/File:Rubus_idaeus_kz03.jpg"
 },
 {
  "id": "gbif",
  "short": "GBIF backbone",
  "text": "GBIF Secretariat, GBIF Backbone Taxonomy (2026). Used to check the spelling, authority and current status of the species names added in this task, and to give each name a stable page; where GBIF treats a name as a synonym, the entry says so and gives the accepted name.",
  "url": "https://www.gbif.org/"
 },
 {
  "id": "wattle",
  "short": "World Wide Wattle",
  "text": "World Wide Wattle (Australian Tree Seed Centre, CSIRO), species gallery, Acacia baileyana F.Muell. Used for the tree’s phyllotaxy, its globular flower heads, its 5-merous flowers with 30–40 stamens and its legume.",
  "url": "https://worldwidewattle.com/speciesgallery/baileyana.php"
 },
 {
  "id": "euclid",
  "short": "EUCLID, eucalypts of Australia",
  "text": "EUCLID (Centre for Australian National Biodiversity Research), Eucalyptus deglupta Blume. Used for the opposite adult leaves, the double operculum, the 3–7-flowered umbels in terminal panicles, the numerous stamens, the inferior ovary and the woody capsule.",
  "url": "https://keyserver.lucidcentral.org/euclid/text/entities/eucalyptus_deglupta.htm"
 },
 {
  "id": "gymnosperm",
  "short": "Gymnosperm Database",
  "text": "Earle C.J., The Gymnosperm Database, Pinus sylvestris L. Used for the monoecious cones, the two naked ovules on each ovuliferous scale, the absence of an ovary and carpel, and the needle leaves in fascicles of two. A gymnosperm has no true fruit: the cone is a strobilus.",
  "url": "https://www.conifers.org/pi/Pinus_sylvestris.php"
 },
 {
  "id": "tropicos",
  "short": "Tropicos, Flora de Costa Rica",
  "text": "Missouri Botanical Garden, Tropicos, Flora de Costa Rica treatment of Selenicereus. Used for the many tepals, numerous stamens, inferior ovary, berry with bracteoles, and for the fruit colours of S. monacanthus, S. costaricensis and S. megalanthus.",
  "url": "http://legacy.tropicos.org/ProjectAnswerDetails.aspx?nameid=40034944&descid=67321&projectid=66"
 },
 {
  "id": "ts-online",
  "short": "Trees and Shrubs Online",
  "text": "Trees and Shrubs Online (International Dendrology Society), species accounts for Olea europaea, Pistacia terebinthus, Citrus trifoliata, Prunus cerasifera, P. domestica, P. salicina, P. spinosa, Actinidia arguta and Schisandra chinensis. Used for flower counts, ovary position, inflorescence and fruit where the account is cited.",
  "url": "https://www.treesandshrubsonline.org/"
 },
 {
  "id": "prosea",
  "short": "PROSEA, Citrus sinensis",
  "text": "Plant Resources of South-East Asia (PROSEA), Citrus sinensis (L.) Osbeck account. Used for the 20–25 stamens, the 10–13-locular ovary and the hesperidium; the account also notes that Flora of China merges the sweet orange into Citrus × aurantium.",
  "url": "https://plantuse.plantnet.org/en/index.php?title=Citrus_sinensis_(PROSEA)"
 },
 {
  "id": "northafrica",
  "short": "North Africa Trees",
  "text": "North Africa Trees, species accounts for Prunus webbii (Spach) Fritsch and Prunus insititia L. Used for the 5 sepals and petals, the stamen counts, the solitary or fascicled flowers and the drupe.",
  "url": "https://www.northafricatrees.org/en/species/prunus-dulcis-mill-d-a-webb/"
 },
 {
  "id": "photo-marrubium",
  "short": "Photo : CC BY-SA 4.0, Kenraiz",
  "text": "Photo of a white horehound plant in flower, CC BY-SA 4.0, Krzysztof Ziarnek (Kenraiz), Wikimedia Commons (reduced in size for the web).",
  "url": "https://commons.wikimedia.org/wiki/File:Marrubium_vulgare_kz16.jpg"
 }
];
