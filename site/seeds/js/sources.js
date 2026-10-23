// Sources of the breeding-systems page (names, pollination, concepts).
export const SOURCES = [
 {
  "id": "powo",
  "short": "POWO / WCVP",
  "text": "Royal Botanic Gardens, Kew. Plants of the World Online and its data backbone, the World Checklist of Vascular Plants (WCVP, release of 2026-06-10). The POWO website returned HTTP 403 (Cloudflare challenge) to all our requests, so the WCVP records were read through the GBIF checklist dataset f382f0ce-323a-4091-bb9f-add557f3a9a2; record URLs point to the GBIF API. Used for accepted names and synonyms.",
  "url": "https://powo.science.kew.org/"
 },
 {
  "id": "wfo",
  "short": "WFO",
  "text": "World Flora Online, WFO Plant List, release 2026-06, read through its GraphQL API (list.worldfloraonline.org/gql.php). Used for accepted names, synonyms and child taxa.",
  "url": "https://wfoplantlist.org/"
 },
 {
  "id": "prunus-apweb",
  "short": "Stevens, APweb",
  "text": "Stevens P.F. Angiosperm Phylogeny Website, Rosales page (Missouri Botanical Garden). Used for the placement of Rosaceae and Prunus (APG IV itself could not be opened, HTTP 403).",
  "url": "https://www.mobot.org/MOBOT/research/APweb/orders/rosalesweb.htm"
 },
 {
  "id": "prunus-calle",
  "short": "Calle et al. 2024",
  "text": "Calle A., Aparicio-Durán L., Batlle I., Eduardo I., Miarnau X. (2024). Review of agronomic and kernel quality traits of 273 almond cultivars. Genetic Resources and Crop Evolution, doi:10.1007/s10722-024-02183-0 (open access, IRTA repository PDF). Used for origin, parentage, self-(in)compatibility and S-alleles of almond cultivars.",
  "url": "https://repositori.irta.cat/bitstream/handle/20.500.12327/3376/Calle_Review_24.pdf?sequence=1"
 },
 {
  "id": "prunus-scirep",
  "short": "Goonetilleke et al. 2020",
  "text": "Goonetilleke S.N., Croxford A.E., March T.J., Wirthensohn M.G., Hrmova M., Mather D.E. (2020). Variation among S-locus haplotypes and among stylar RNases in almond. Scientific Reports 10. Used for the almond SI mechanism and the S-genotypes of Nonpareil, Carmel and Lauranne.",
  "url": "https://www.nature.com/articles/s41598-020-57498-6"
 },
 {
  "id": "prunus-ped",
  "short": "Pérez de los Cobos et al. 2021",
  "text": "Pérez de los Cobos F., Martínez-García P.J., Romero A. et al. (2021). Pedigree analysis of 220 almond genotypes reveals two world mainstream breeding lines based on only three different cultivars. Horticulture Research 8. Used for Sf sources, Tuono/Guara, Carmel as pollinizer and breeding history.",
  "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC7775440/"
 },
 {
  "id": "prunus-ucalm",
  "short": "Asai et al. 1996 (UC ANR)",
  "text": "Asai W.K., Micke W.C., Kester D.E., Rough D. (1996). The evaluation and selection of current varieties. Chapter 8 in Micke W. (ed.), Almond Production Manual, University of California ANR. Used for bloom groups (Table 8.1) and pollen-incompatible groups (Table 8.2).",
  "url": "https://ucanr.edu/sites/default/files/2010-06/18977.pdf"
 },
 {
  "id": "prunus-grad",
  "short": "Gradziel 2016",
  "text": "Gradziel T.M. (2016). Self-compatibility sources as sources of variation in advanced almond introgression lines. Options Méditerranéennes A 119: 43-47 (CIHEAM). Used for Sf as an introgressed allele and interspecific donors.",
  "url": "https://om.ciheam.org/om/pdf/a119/00007361.pdf"
 },
 {
  "id": "prunus-bosk",
  "short": "Bošković et al. 2007",
  "text": "Bošković R.I., Tobutt K.R., Ortega E., Sutherland B.G., Godini A. (2007). Self-(in)compatibility of the almonds P. dulcis and P. webbii: detection and cloning of 'wild-type Sf' and new self-compatibility alleles encoding inactive S-RNases. Mol Genet Genomics 278: 665-676. Abstract read on PubMed. Used for the alternative origin of Sf and P. webbii self-compatibility.",
  "url": "https://pubmed.ncbi.nlm.nih.gov/17899198/"
 },
 {
  "id": "prunus-lopez",
  "short": "López et al. 2004",
  "text": "López M., Mnejja M., Rovira M., Collins G., Vargas F.J., Arús P., Batlle I. (2004). Self-incompatibility genotypes in almond re-evaluated by PCR, stylar ribonucleases, sequencing analysis and controlled pollinations. Theor Appl Genet 109: 954-964. Abstract read on PubMed. Used for S25 genotypes and new groups XVI/XVII.",
  "url": "https://pubmed.ncbi.nlm.nih.gov/15338131/"
 },
 {
  "id": "prunus-rubio",
  "short": "Rubio-Cabetas 2016",
  "text": "Rubio-Cabetas J.M. (2016). Almond rootstocks: overview. Options Méditerranéennes A 119: 133-143 (CIHEAM). Used for almond rootstocks, peach × almond hybrids and plum rootstock compatibility.",
  "url": "https://om.ciheam.org/ressources/om/pdf/a119/00007379.pdf"
 },
 {
  "id": "prunus-ca66",
  "short": "Laborde (CA66) 2019",
  "text": "Laborde A., Chambre d'agriculture des Pyrénées-Orientales (2019). L'amandier, mise en place d'un verger (slide deck, PDF dated 2 April 2019). Used for the French behaviour of Ferragnès, Ferraduel, Ferrastar, Mandaline. Slides, not a formal publication.",
  "url": "https://opera-connaissances.chambres-agriculture.fr/doc_num.php?explnum_id=151307"
 },
 {
  "id": "prunus-connell",
  "short": "Connell 2017 (UCCE)",
  "text": "Connell J. (2017). Honeybees, colony strength, and beekeeper challenges. Sacramento Valley Orchard Source, UC Cooperative Extension, posted 5 January 2017. Used for hives per acre in almond.",
  "url": "https://www.sacvalleyorchards.com/almonds/pollination/honeybees-colony-strength-and-beekeeper-challenges/"
 },
 {
  "id": "prunus-lotti",
  "short": "Lotti et al. 2023",
  "text": "Lotti C., Minervini A.P., Delvento C. et al. (2023). Detection and distribution of two dominant alleles associated with the sweet kernel phenotype in almond cultivated germplasm. Frontiers in Plant Science 14. Used for bitter wild kernels, Sk alleles and juvenile phase.",
  "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10145170/"
 },
 {
  "id": "prunus-vichi",
  "short": "Vichi et al. 2020",
  "text": "Vichi S., Mayer M.N., León-Cárdenas M.G. et al. (2020). Chemical markers to distinguish the homo- and heterozygous bitter genotype in sweet almond kernels. Foods 9(6): 747. Used for maternal control of kernel taste and bitter segregation ratios.",
  "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC7353606/"
 },
 {
  "id": "prunus-zheb",
  "short": "Zhebentyayeva et al. 2019",
  "text": "Zhebentyayeva T., Shankar V., Scorza R. et al. (2019). Genetic characterization of worldwide Prunus domestica (plum) germplasm using sequence-based genotyping. Horticulture Research 6: 12. Used for the origin of P. domestica and its pomological clades.",
  "url": "https://www.nature.com/articles/s41438-018-0090-6"
 },
 {
  "id": "prunus-abd",
  "short": "Abdallah et al. 2019",
  "text": "Abdallah D., Baraket G., Perez V., Ben Mustapha S., Salhi-Hannachi A., Hormaza J.I. (2019). Analysis of self-incompatibility and genetic diversity in diploid and hexaploid plum genotypes. Frontiers in Plant Science 10: 896. Used for plum ploidy, GSI, P. salicina S-genotypes and incompatibility groups, and origin hypotheses.",
  "url": "https://www.frontiersin.org/journals/plant-science/articles/10.3389/fpls.2019.00896/full"
 },
 {
  "id": "prunus-halasz",
  "short": "Halász et al. 2021",
  "text": "Halász J., Makovics-Zsohár N. et al. (2021). Simple sequence repeat and S-locus genotyping to assist the genetic characterization and breeding of polyploid Prunus species, P. spinosa and P. domestica subsp. insititia. Biochemical Genetics 59: 1065-1087. Used for blackthorn and damson ploidy, hybrids and 'Zempléni'.",
  "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC8249305/"
 },
 {
  "id": "prunus-fern",
  "short": "Fernandez i Marti et al. 2021",
  "text": "Fernandez i Marti A., Castro S., DeJong T.M. et al. (2021). Evaluation of the S-locus in Prunus domestica, characterization, phylogeny and 3D modelling. PLoS ONE 16(5): e0251305. Used for self-compatibility and the S17 allele in prune germplasm.",
  "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC8118244/"
 },
 {
  "id": "prunus-rhsplum",
  "short": "RHS, How to grow plums",
  "text": "Royal Horticultural Society. How to grow plums (web guide, read 2026-10-16). Used for self-fertility of 'Victoria', 'Czar', 'Opal' and plum rootstocks.",
  "url": "https://www.rhs.org.uk/fruit/plums/grow-your-own"
 },
 {
  "id": "prunus-rhsgage",
  "short": "RHS, How to grow gages",
  "text": "Royal Horticultural Society. How to grow gages (web guide, read 2026-10-16). Used for 'Oullins Gage' self-fertility.",
  "url": "https://www.rhs.org.uk/fruit/gages/grow-your-own"
 },
 {
  "id": "prunus-rhsdamson",
  "short": "RHS, How to grow damsons",
  "text": "Royal Horticultural Society. How to grow damsons (web guide, read 2026-10-16). Used for damson self-fertility and naming as Prunus insititia.",
  "url": "https://www.rhs.org.uk/fruit/damsons/grow-your-own"
 },
 {
  "id": "prunus-rhspoll",
  "short": "RHS, Fruit pollination",
  "text": "Royal Horticultural Society. Fruit pollination (beginner's guide, read 2026-10-16). Used for the 18 m rule, bee range and flowering groups.",
  "url": "https://www.rhs.org.uk/advice/beginners-guide/fruit-basics/fruit-pollination"
 },
 {
  "id": "prunus-rhsnancy",
  "short": "RHS, 'Mirabelle de Nancy'",
  "text": "Royal Horticultural Society plant database. Prunus insititia 'Mirabelle de Nancy' (C). Used for self-fertility and cross-pollination of this mirabelle.",
  "url": "https://www.rhs.org.uk/plants/66550/prunus-insititia-mirabelle-de-nancy-(c)/details"
 },
 {
  "id": "prunus-croq",
  "short": "Croqueurs de pommes",
  "text": "Les Croqueurs de pommes (association nationale). Pollinisation des pruniers (web page, read 2026-10-16). Used for self-fertile, partly self-fertile and self-sterile French plum cultivars and pollinizer pairs. Association page, not an extension service.",
  "url": "https://croqueurs-national.fr/pollinisation/155-pollinisation-des-pruniers.html"
 },
 {
  "id": "prunus-ucjp",
  "short": "LaRue & Norton (UC ANR)",
  "text": "LaRue J.H., Norton M.V. Japanese Plum Pollination. Chapter 9, pp. 49-55, University of California ANR (scanned PDF; book title not shown on the file). Used for Japanese plum pollenizers, set percentages and hive numbers.",
  "url": "https://ucanr.edu/sites/default/files/2011-12/132874.pdf"
 },
 {
  "id": "prunus-umaine",
  "short": "Moran, UMaine Bulletin 2034",
  "text": "Moran R. Plum Production in Maine. Bulletin #2034, University of Maine Cooperative Extension. Used for European/Japanese cross-incompatibility and Japanese plum pollenizers.",
  "url": "https://extension.umaine.edu/publications/2034e/"
 },
 {
  "id": "prunus-usu",
  "short": "USU Extension, plums",
  "text": "Utah State University Extension. How to grow plums in your home garden. Used for European vs Japanese plum pollination.",
  "url": "https://extension.usu.edu/yardandgarden/research/plums-in-the-home-garden"
 },
 {
  "id": "prunus-illinois",
  "short": "Illinois Extension, plums",
  "text": "University of Illinois Extension. Fruit trees for home gardens: plums. Used for European plums not pollinating Japanese plums.",
  "url": "https://extension.illinois.edu/fruit-trees/plums"
 },
 {
  "id": "prunus-ncsu",
  "short": "NC State Extension, 'Stanley'",
  "text": "North Carolina Extension Gardener Plant Toolbox. Prunus domestica 'Stanley'. Used for self-fruitfulness and partners of 'Stanley'.",
  "url": "https://plants.ces.ncsu.edu/plants/prunus-domestica-stanley/"
 },
 {
  "id": "prunus-fps",
  "short": "UC Davis FPS, Myrobalan",
  "text": "Foundation Plant Services, University of California, Davis. Prunus cultivar: Myrobalan (rootstock record). Used for seed propagation and traits of myrobalan rootstock.",
  "url": "https://fps.ucdavis.edu/treedetails.cfm?v=1790"
 },
 {
  "id": "prunus-habibi",
  "short": "Habibi et al. 2022",
  "text": "Habibi F., Liu T. et al. (2022). Physiological, biochemical, and molecular aspects of grafting in fruit trees. Horticulture Research 9. Used for why fruit trees are grafted (heterozygosity, poor rooting, juvenility).",
  "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC8976691/"
 },
 {
  "id": "prunus-unh",
  "short": "UNH Extension, grafting",
  "text": "University of New Hampshire Extension. Growing fruit: grafting fruit trees in the home orchard (fact sheet). Used for the two main reasons for grafting.",
  "url": "https://extension.unh.edu/resource/growing-fruit-grafting-fruit-trees-home-orchard-fact-sheet"
 },
 {
  "id": "berries-apweb-saxifragales",
  "short": "Stevens, APweb: Saxifragales",
  "text": "Stevens, P.F. Angiosperm Phylogeny Website, Saxifragales page (follows the APG classification). Used for the order of Grossulariaceae, because the APG IV PDF could not be downloaded.",
  "url": "http://www.mobot.org/MOBOT/research/APweb/orders/saxifragalesweb.htm"
 },
 {
  "id": "berries-apweb-rosales",
  "short": "Stevens, APweb: Rosales",
  "text": "Stevens, P.F. Angiosperm Phylogeny Website, Rosales page. Used for the order of Rosaceae and Elaeagnaceae and for the size of Rubus (tribe Rubeae).",
  "url": "http://www.mobot.org/MOBOT/research/APweb/orders/rosalesweb.htm"
 },
 {
  "id": "berries-jarvis-2007-rubus-fruticosus",
  "short": "Jarvis 2007, Rubus fruticosus",
  "text": "Jarvis, C. (2007). Order out of Chaos. Linnaean Plant Names and their Types, ch. 7, p. 801: entry 'Rubus fruticosus Linnaeus 1753' (Zenodo record). Type LINN 653.9, identity with R. plicatus, conserved type of Rubus.",
  "url": "https://zenodo.org/records/4367077"
 },
 {
  "id": "berries-bsbi-fermanagh-rubus",
  "short": "BSBI Fermanagh: Rubus fruticosus agg.",
  "text": "Botanical Society of Britain & Ireland, Fermanagh species accounts: 'Rubus fruticosus L. agg., Bramble'. Microspecies counts, polyploidy, pseudogamous apomixis.",
  "url": "https://bsbi.org/in-your-area/local-botany/co-fermanagh/fermanagh-species-accounts/rubus-fruticosus-l-agg"
 },
 {
  "id": "berries-sarhanova-2017",
  "short": "Šarhanová et al. 2017",
  "text": "Šarhanová, P., Sharbel, T.F., Sochor, M., Vašut, R.J., Dančák, M., Trávníček, B. (2017). Hybridization drives evolution of apomicts in Rubus subgenus Rubus: evidence from microsatellite markers. Annals of Botany 120(2): 317–328. doi:10.1093/aob/mcx033. Open access.",
  "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC5737493/"
 },
 {
  "id": "berries-wikipedia-rubus-fruticosus",
  "short": "Wikipedia: Rubus fruticosus",
  "text": "Wikipedia, 'Rubus fruticosus' (accessed 2026-10-16). Weak source, used only for how the aggregate name is used (nomen ambiguum) alongside Jarvis 2007.",
  "url": "https://en.wikipedia.org/wiki/Rubus_fruticosus"
 },
 {
  "id": "berries-mcgregor-1976",
  "short": "McGregor 1976 (USDA)",
  "text": "McGregor, S.E. (1976, online edition). Insect Pollination of Cultivated Crop Plants. USDA Agriculture Handbook 496, ch. 7 'Small fruits and brambles': Blackberry, Raspberry, Currant, Gooseberry. Old but authoritative review of pollination requirements.",
  "url": "https://www.ars.usda.gov/ARSUserFiles/20220500/OnlinePollinationHandbook.pdf"
 },
 {
  "id": "berries-osu-em9180",
  "short": "OSU EM 9180",
  "text": "Bouska, C., Dixon, E., Strik, B. (2018, reviewed 2025). Growing berries on the Oregon Coast: Raspberries and blackberries. Oregon State University Extension, EM 9180. Self-fruitfulness, cultivar types, hives per acre.",
  "url": "https://extension.oregonstate.edu/catalog/em-9180-growing-berries-oregon-coast-raspberries-blackberries"
 },
 {
  "id": "berries-rhs-raspberries",
  "short": "RHS: raspberries",
  "text": "Royal Horticultural Society. How to grow raspberries (grow-your-own guide). Self-fertility, propagation by suckers from certified stock.",
  "url": "https://www.rhs.org.uk/fruit/raspberries/grow-your-own"
 },
 {
  "id": "berries-rhs-blackberries-hybrids",
  "short": "RHS: blackberries and hybrid berries",
  "text": "Royal Horticultural Society. How to grow blackberries and hybrid berries. Parentage of tayberry, loganberry, boysenberry; stem-tip layering.",
  "url": "https://www.rhs.org.uk/fruit/blackberries-and-hybrid-berries/grow-your-own"
 },
 {
  "id": "berries-rhs-redcurrants",
  "short": "RHS: redcurrants",
  "text": "Royal Horticultural Society. How to grow redcurrants. Hardwood cuttings.",
  "url": "https://www.rhs.org.uk/fruit/redcurrants/grow-your-own"
 },
 {
  "id": "berries-rhs-gooseberries",
  "short": "RHS: gooseberries",
  "text": "Royal Horticultural Society. How to grow gooseberries. Hardwood cuttings.",
  "url": "https://www.rhs.org.uk/fruit/gooseberries/grow-your-own"
 },
 {
  "id": "berries-rhs-jonkheer-van-tets",
  "short": "RHS: 'Jonkheer van Tets'",
  "text": "Royal Horticultural Society plant record 69067, Ribes rubrum 'Jonkheer van Tets' (R): 'Self-pollinating'.",
  "url": "https://www.rhs.org.uk/plants/69067/ribes-rubrum-jonkheer-van-tets-r/details"
 },
 {
  "id": "berries-rhs-loch-ness",
  "short": "RHS: 'Loch Ness'",
  "text": "Royal Horticultural Society plant record 75680, Rubus fruticosus agg. 'Loch Ness' (B). Used for the name under which the cultivar is filed.",
  "url": "https://www.rhs.org.uk/plants/75680/rubus-fruticosus-agg-loch-ness-b/details"
 },
 {
  "id": "berries-rhs-tayberry",
  "short": "RHS: Tayberry Group",
  "text": "Royal Horticultural Society plant record 131374, Rubus Tayberry Group (F).",
  "url": "https://www.rhs.org.uk/plants/131374/rubus-tayberry-group-f/details"
 },
 {
  "id": "berries-rhs-pollmix",
  "short": "RHS: 'Pollmix'",
  "text": "Royal Horticultural Society plant record 93257, Hippophae rhamnoides 'Pollmix' (m): male, no berries.",
  "url": "https://www.rhs.org.uk/plants/93257/hippophae-rhamnoides-pollmix-m/details"
 },
 {
  "id": "berries-pinczinger-2021",
  "short": "Pinczinger et al. 2021",
  "text": "Pinczinger, D., von Reth, M., Hanke, M.-V., Flachowsky, H. (2021). Self-incompatibility of raspberry cultivars assessed by SSR markers. Scientia Horticulturae 288: 110384. doi:10.1016/j.scienta.2021.110384. Only the abstract was read (via the OpenAlex record; publisher and OpenAgrar pages blocked automated access).",
  "url": "https://api.openalex.org/works/doi:10.1016/j.scienta.2021.110384"
 },
 {
  "id": "berries-askext-raspberry-seed",
  "short": "Ask Extension #492628",
  "text": "Ask Extension (Cooperative Extension), question 'Starting Red Raspberries from seed', answer by Mark Longstroth, 29 Oct 2018.",
  "url": "https://ask.extension.org/kb/faq.php?id=492628"
 },
 {
  "id": "berries-usda-ars-raspberries",
  "short": "USDA ARS: Raspberries",
  "text": "USDA Agricultural Research Service, Pollinating Insect-Biology, Management, Systematics Research (Logan, UT): 'Raspberries' (last modified 2018). Used for the need for bees; its claim that red raspberry is a pseudogamous apomict is not used (see doubts).",
  "url": "https://www.ars.usda.gov/pacific-west-area/logan-ut/pollinating-insect-biology-management-systematics-research/docs/raspberries/"
 },
 {
  "id": "berries-tayberry-patent",
  "short": "US Plant Patent PP4424 (Tayberry)",
  "text": "Jennings, D.L. Tayberry. US Plant Patent PP4424, filed 1978-01-31, published 1979-06-12, assignee National Seed Development Organisation Ltd (Google Patents).",
  "url": "https://patents.google.com/patent/USPP4424P/en"
 },
 {
  "id": "berries-bsa-2002",
  "short": "Bundessortenamt 2002",
  "text": "Bundessortenamt (German Federal Plant Variety Office) (2002). Beschreibende Sortenliste Strauchbeerenobst: Rote Johannisbeere, Schwarze Johannisbeere, Stachelbeere, Jostabeere. Species introductions (self-fertility, origin, ploidy, jostaberry history) and cultivar descriptions; page numbers as printed.",
  "url": "https://www.bundessortenamt.de/bsa/media/Files/BSL/bsl_strauchbeerenobst_2002.pdf"
 },
 {
  "id": "berries-nybom-2023",
  "short": "Nybom et al. 2023",
  "text": "Nybom, H., Ruan, C., Rumpunen, K. (2023). The Systematics, Reproductive Biology, Biochemistry, and Breeding of Sea Buckthorn—A Review. Genes 14(12): 2120. doi:10.3390/genes14122120. Open access (read via Europe PMC full text). Main source for Hippophae taxonomy, sex determination, cultivars.",
  "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10743242/"
 },
 {
  "id": "berries-li-1999",
  "short": "Li 1999 (Purdue NewCROP)",
  "text": "Li, T.S.C. (1999). Sea buckthorn: New crop opportunity. In J. Janick (ed.), Perspectives on New Crops and New Uses, ASHS Press. Male:female ratio in British Columbia.",
  "url": "https://hort.purdue.edu/newcrop/proceedings1999/v4-335.html"
 },
 {
  "id": "berries-li-2002",
  "short": "Li 2002 (Purdue NewCROP)",
  "text": "Li, T.S.C. (2002). Product development of sea buckthorn. In J. Janick & A. Whipkey (eds.), Trends in New Crops and New Uses, ASHS Press, pp. 393–398. Wind pollination, male:female ratio.",
  "url": "https://hort.purdue.edu/newcrop/ncnu02/v5-393.html"
 },
 {
  "id": "berries-zhou-2018",
  "short": "Zhou et al. 2018",
  "text": "Zhou, W., Wang, Y., Zhang, G., et al. (2018). Molecular Sex Identification in Dioecious Hippophae rhamnoides L. via RAPD and SCAR Markers. Molecules 23(5): 1048. doi:10.3390/molecules23051048. Open access.",
  "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC6100209/"
 },
 {
  "id": "berries-puterova-2017",
  "short": "Puterova et al. 2017",
  "text": "Puterova, J., Razumova, O., Martinek, T., et al. (2017). Satellite DNA and Transposable Elements in Seabuckthorn (Hippophae rhamnoides), a Dioecious Plant with Small Y and Large X Chromosomes. Genome Biology and Evolution 9(1): 197–212. doi:10.1093/gbe/evw303. Open access.",
  "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC5381607/"
 },
 {
  "id": "berries-jhajhariya-2024",
  "short": "Jhajhariya et al. 2024",
  "text": "Jhajhariya, M., Mangla, Y., Chandra, A., Goel, S., Tandon, R. (2024). Variable resource allocation pattern, biased sex-ratio, and extent of sexual dimorphism in subdioecious Hippophae rhamnoides. PLoS ONE 19(4): e0302211. doi:10.1371/journal.pone.0302211. Seedling (primary) sex ratio.",
  "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11025892/"
 },
 {
  "id": "berries-chawla-2015",
  "short": "Chawla et al. 2015",
  "text": "Chawla, A., Stobdan, T., Srivastava, R.B., et al. (2015). Sex-Biased Temporal Gene Expression in Male and Female Floral Buds of Seabuckthorn (Hippophae rhamnoides). PLoS ONE 10(4): e0124890. doi:10.1371/journal.pone.0124890. Age at first flowering.",
  "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC4410991/"
 },
 {
  "id": "berries-mangla-tandon-2014",
  "short": "Mangla & Tandon 2014",
  "text": "Mangla, Y., Tandon, R. (2014). Pollination ecology of Himalayan sea buckthorn, Hippophae rhamnoides L. (Elaeagnaceae). Current Science 106(12): 1731–1735. Pollen flow distance (Ladakh).",
  "url": "https://www.currentscience.ac.in/Volumes/106/12/1731.pdf"
 },
 {
  "id": "berries-luke-2015",
  "short": "Luke 2015, Producing Sea Buckthorn of High Quality",
  "text": "Kauppinen, S., Petruneva, E. (eds.) (2015). Producing Sea Buckthorn of High Quality. Natural resources and bioeconomy studies 31/2015, Natural Resources Institute Finland (Luke). Chapters by F. Höhne (pp. 31–35, Germany) and A. Brūvelis (pp. 36–41, Latvia).",
  "url": "https://jukuri.luke.fi/server/api/core/bitstreams/a28bf67f-3204-4fcf-a426-db988ec0d34e/content"
 },
 {
  "id": "berries-omafra-seabuckthorn",
  "short": "OMAFRA: Introduction to sea buckthorn",
  "text": "Todd, J. (2022, updated 2025). Introduction to sea buckthorn. Ontario Ministry of Agriculture, Food and Agribusiness. Ratio, propagation.",
  "url": "https://www.ontario.ca/page/introduction-sea-buckthorn"
 },
 {
  "id": "berries-wisc-uncommonfruit",
  "short": "UW Uncommon Fruit: Seaberry",
  "text": "University of Wisconsin–Madison, CIAS, Uncommon Fruit: 'Seaberry (Sea Buckthorn)'. Ratio 1:6–8, wind pollination (secondary, cites Li & Schroeder 1996).",
  "url": "https://uncommonfruit.cias.wisc.edu/seaberry-sea-buckthorn/"
 },
 {
  "id": "berries-lubera-pollmix",
  "short": "Lubera: Sanddorn Pollmix 2",
  "text": "Lubera (nursery), product page 'Sanddorn Pollmix 2 (männlich)'. Nursery catalogue, used only for named female partners and a 1:6–10 ratio.",
  "url": "https://www.lubera.com/de/shop/sanddorn-pollmix-2-maennlich_produkt-193.html"
 },
 {
  "id": "berries-wikipedia-sea-buckthorn",
  "short": "Wikipedia: Sea buckthorn",
  "text": "Wikipedia, 'Sea buckthorn' (accessed 2026-10-16; page carries a notice about unverified text). Used only to report the ~100 m pollination distance it attributes to Li & Schroeder (1996), which we could not open.",
  "url": "https://en.wikipedia.org/wiki/Sea_buckthorn"
 },
 {
  "id": "tropic-wcvp-gbif",
  "short": "WCVP via GBIF",
  "text": "Govaerts R. et al., The World Checklist of Vascular Plants (WCVP), GBIF checklist dataset f382f0ce-323a-4091-bb9f-add557f3a9a2, version dated 2026-06-04. This is the names backbone of POWO; used for accepted status, authors, place of publication and POWO links.",
  "url": "https://www.gbif.org/dataset/f382f0ce-323a-4091-bb9f-add557f3a9a2"
 },
 {
  "id": "tropic-apweb",
  "short": "APweb (Stevens)",
  "text": "Stevens P.F., Angiosperm Phylogeny Website (Missouri Botanical Garden), order pages Ericales, Caryophyllales, Myrtales. Follows APG IV; used for the order placement of the families because the APG IV PDF could not be downloaded (HTTP 403).",
  "url": "http://www.mobot.org/MOBOT/research/APweb/"
 },
 {
  "id": "tropic-osu-pnw507",
  "short": "Strik & Davis 2021 (OSU PNW 507)",
  "text": "Strik B., Davis A. Growing kiwifruit: a guide to kiwiberries and fuzzy kiwifruit for Pacific Northwest producers. PNW 507, Oregon State University Extension, revised March 2021, reviewed 2025. Dioecy, male:female ratio, planting design, bees, cultivars and their sex, propagation.",
  "url": "https://extension.oregonstate.edu/catalog/pub/pnw507"
 },
 {
  "id": "tropic-ferguson-1999",
  "short": "Ferguson 1999",
  "text": "Ferguson A.R. 1999. New temperate fruits: Actinidia chinensis and Actinidia deliciosa. p. 342–347 in J. Janick (ed.), Perspectives on new crops and new uses. ASHS Press. Dioecy in Actinidia, origin of 'Hayward', male cultivars, 'Hort16A' and its males 'Meteor'/'Sparkler', 'Ananasnaya'.",
  "url": "https://hort.purdue.edu/newcrop/proceedings1999/v4-342.html"
 },
 {
  "id": "tropic-auburn-powell-1997",
  "short": "Powell 1997 (Auburn)",
  "text": "Powell A.A. 1997. The effects of Dormex on replacing lack of chilling in kiwifruit. Auburn University (Alabama). 'Hayward' as the leading female cultivar; 'Matua' and 'Tomuri' as the most common male pollinators.",
  "url": "https://ssl.acesag.auburn.edu/department/peaches/kiwidormex.html"
 },
 {
  "id": "tropic-broussard-2021-nzjchs",
  "short": "Broussard et al. 2021",
  "text": "Broussard M.A., Goodwin R.M., McBrydie H.M., Evans L.J., Pattemore D.E. 2021. Pollination requirements of kiwifruit (Actinidia chinensis Planch.) differ between cultivars 'Hayward' and 'Zesy002'. N.Z. J. Crop Hortic. Sci. 49(1): 30–40. Abstract only (read via Crossref; full text paywalled): ploidy of 'Hayward' (hexaploid) and 'Zesy002' (tetraploid), pollen needs.",
  "url": "https://doi.org/10.1080/01140671.2020.1861032"
 },
 {
  "id": "tropic-seal-2017-nzjchs",
  "short": "Seal et al. 2017",
  "text": "Seal A.G., Clark C.J., Sharrock K.R., de Silva H.N., Jaksons P., Wood M.E. 2017 (vol. 2018). Choice of pollen donor affects weight but not composition of Actinidia chinensis var. chinensis 'Zesy002' (Gold3) kiwifruit. N.Z. J. Crop Hortic. Sci. 46(2): 133–143. Abstract only (via Crossref): males M91, M33, M43.",
  "url": "https://doi.org/10.1080/01140671.2017.1365732"
 },
 {
  "id": "tropic-seal-2013-nzjchs",
  "short": "Seal et al. 2013",
  "text": "Seal A.G., Dunn J.K., Jia Y. 2013. Pollen parent effects on fruit attributes of diploid Actinidia chinensis 'Hort16A' kiwifruit. N.Z. J. Crop Hortic. Sci. 41(4): 219–229. Abstract only (via Crossref): interploid pollination.",
  "url": "https://doi.org/10.1080/01140671.2013.803130"
 },
 {
  "id": "tropic-goodwin-2013-nzjb",
  "short": "Goodwin et al. 2013",
  "text": "Goodwin R.M., McBrydie H.M., Taylor M.A. 2013. Wind and honey bee pollination of kiwifruit (Actinidia chinensis 'HORT16A'). N.Z. J. Bot. 51(3): 229–240. Abstract only (via Crossref): wind vs bees, decline of pollen and seeds with distance.",
  "url": "https://doi.org/10.1080/0028825X.2013.806934"
 },
 {
  "id": "tropic-popowski-2021-g3",
  "short": "Popowski et al. 2021",
  "text": "Popowski E., Thomson S.J., Knäbel M. et al. 2021. Construction of a high-density genetic map for hexaploid kiwifruit (Actinidia chinensis var. deliciosa) using genotyping by sequencing. G3 11: jkab142. Open access; ploidy of var. chinensis and var. deliciosa.",
  "url": "https://doi.org/10.1093/g3journal/jkab142"
 },
 {
  "id": "tropic-xia-2023-scidata",
  "short": "Xia et al. 2023",
  "text": "Xia H., Deng H., Li M. et al. 2023. Chromosome-scale genome assembly of a natural diploid kiwifruit (Actinidia chinensis var. deliciosa). Scientific Data 10: 92. Open access; var. deliciosa allohexaploid, rare natural diploid.",
  "url": "https://doi.org/10.1038/s41597-023-02006-4"
 },
 {
  "id": "tropic-mertten-2025-molbreed",
  "short": "Mertten et al. 2025",
  "text": "Mertten D., McKenzie C.M., Baldwin S. et al. 2025. Genomic selection in a kiwiberry breeding programme: integrating intra- and inter-specific crossing. Molecular Breeding 45: 31. Open access; dioecy, A. arguta × A. melanandra, ploidy barriers.",
  "url": "https://doi.org/10.1007/s11032-025-01550-8"
 },
 {
  "id": "tropic-mertten-2024-molbreed",
  "short": "Mertten et al. 2024",
  "text": "Mertten D., McKenzie C.M., Souleyre E.J.F. et al. 2024. Molecular breeding of flower load related traits in dioecious autotetraploid Actinidia arguta. Molecular Breeding 44: 36. Open access; seedling sex counts (822 female, 883 male).",
  "url": "https://doi.org/10.1007/s11032-024-01476-7"
 },
 {
  "id": "tropic-guo-2023-scirep",
  "short": "Guo et al. 2023",
  "text": "Guo D., Wang R., Fang J. et al. 2023. Development of sex-linked markers for gender identification of Actinidia arguta. Scientific Reports 13: 12780. Open access; functional dioecy, XX/XY, 5–7-year juvenile phase, ploidy range.",
  "url": "https://doi.org/10.1038/s41598-023-39561-0"
 },
 {
  "id": "tropic-yue-2023-pbj",
  "short": "Yue et al. 2023",
  "text": "Yue J., Chen Q., Zhang S. et al. 2023 (vol. 22, 2024). Origin and evolution of the kiwifruit Y chromosome. Plant Biotechnology Journal 22: 287–289. Open access; XY sex determination independent of ploidy.",
  "url": "https://doi.org/10.1111/pbi.14213"
 },
 {
  "id": "tropic-broussard-2022-peerj",
  "short": "Broussard et al. 2022",
  "text": "Broussard M.A., Howlett B.G., Evans L.J. et al. 2022. Pollinator identity and behavior affect pollination in kiwifruit (Actinidia chinensis Planch.). PeerJ 10: e12963. Open access; no nectar, pseudopollen, honey bees in NZ and France, seed set vs distance.",
  "url": "https://doi.org/10.7717/peerj.12963"
 },
 {
  "id": "tropic-rowan-2021-metabolites",
  "short": "Rowan et al. 2021",
  "text": "Rowan D.D., Boldingh H.L., Cordiner S.B. et al. 2021. Kiwifruit metabolomics: an investigation of within orchard metabolite variability of two cultivars of Actinidia chinensis. Metabolites 11: 603. Open access; grafting on clonal/seedling roots, 'Bruno' rootstock, 'Hort16A' inter-scion.",
  "url": "https://doi.org/10.3390/metabo11090603"
 },
 {
  "id": "tropic-nazir-2024-plants",
  "short": "Nazir et al. 2024",
  "text": "Nazir M.F., Lou J., Wang Y., Zou S., Huang H. 2024. Kiwifruit in the omics age: advances in genomics, breeding, and beyond. Plants 13: 2156. Open access review; 'Hayward' origin, interspecific hybridisation ('Jinyan'). Note: contains some loose statements (e.g. 'hexaploid (8x)'), used only for points not found elsewhere.",
  "url": "https://doi.org/10.3390/plants13152156"
 },
 {
  "id": "tropic-latocha-2017",
  "short": "Latocha 2017",
  "text": "Latocha P. 2017. The nutritional and health benefits of kiwiberry (Actinidia arguta) – a review. Plant Foods Hum. Nutr. 72: 325–334. Open access; calls 'Issai' a hybrid; European cultivars ('Weiki', 'Ananasnaya', 'Geneva').",
  "url": "https://doi.org/10.1007/s11130-017-0637-y"
 },
 {
  "id": "tropic-ufifas-hs303",
  "short": "Crane & Balerdi, UF/IFAS HS303",
  "text": "Crane J.H., Balerdi C.F. Pitaya (Dragonfruit) Growing in the Florida Home Landscape. UF/IFAS Extension HS303 (current online version). Hermaphrodite flowers, self-incompatibility, 2–3 genetic types, hand pollination, propagation.",
  "url": "https://ask.ifas.ufl.edu/publication/HS303"
 },
 {
  "id": "tropic-ufifas-hs1068-2005",
  "short": "Crane & Balerdi 2005, UF/IFAS HS1068 (archival)",
  "text": "Crane J.H., Balerdi C.F. 2005. Pitaya Growing in the Florida Home Landscape. UF/IFAS HS1068, archival PDF (original publication November 2005). Table 2: cultivars with 'Need for cross pollination'; propagation. Marked archival by UF/IFAS.",
  "url": "https://journals.flvc.org/edis/article/download/116119/114296/167134"
 },
 {
  "id": "tropic-korotkova-2017-phytotaxa",
  "short": "Korotkova et al. 2017",
  "text": "Korotkova N., Borsch T., Arias S. 2017. A phylogenetic framework for the Hylocereeae (Cactaceae) and implications for the circumscription of the genera. Phytotaxa 327(1): 1–46. Abstract only (via Crossref): Selenicereus incl. Hylocereus. (The brief cited Willdenowia; the paper is in Phytotaxa.)",
  "url": "https://doi.org/10.11646/phytotaxa.327.1.1"
 },
 {
  "id": "tropic-telzur-2022-hortres",
  "short": "Tel-Zur 2022",
  "text": "Tel-Zur N. 2022. Breeding an underutilized fruit crop: a long-term program for Hylocereus. Horticulture Research 9: uhac078. Open access; ploidy, gametophytic SI, S. megalanthus self-compatibility, interspecific and interploid hybrids, autotetraploids.",
  "url": "https://doi.org/10.1093/hr/uhac078"
 },
 {
  "id": "tropic-trindade-2023-plants",
  "short": "Trindade et al. 2023",
  "text": "Trindade A.R., Paiva P., Lacerda V., Marques N., Neto L., Duarte A. 2023. Pitaya as a new alternative crop for Iberian Peninsula: biology and edaphoclimatic requirements. Plants 12: 3212. Open access; cultivars grown in Spain/Portugal with fertility (Table 1), bees in Iberia, taxonomy confusion.",
  "url": "https://doi.org/10.3390/plants12183212"
 },
 {
  "id": "tropic-hueso-2025-plants",
  "short": "Hueso et al. 2025",
  "text": "Hueso J.J., Bouzar E.M., Cuevas J. 2025. Evaluation of different procedures to pollinate self-compatible 'Royal Red' pitaya under protected cultivation. Plants 14: 3102. Open access; greenhouse trial in Almería, Spain.",
  "url": "https://doi.org/10.3390/plants14193102"
 },
 {
  "id": "tropic-jadhav-2025-scirep",
  "short": "Jadhav et al. 2025",
  "text": "Jadhav P., Dhumal S.S., Boraiah K.M. et al. 2025. Floral and pollination biology of dragon fruit reveals strategies for enhancing productivity through pollination management and reproductive window extension. Scientific Reports 15: 37296. Open access; conflicting reports on SI, pollination window.",
  "url": "https://doi.org/10.1038/s41598-025-21168-2"
 },
 {
  "id": "tropic-fao-pryor-unasylva",
  "short": "Pryor, Unasylva 119–120",
  "text": "Pryor L.D. Reproductive habits of the eucalypts. Unasylva no. 119–120, FAO (year not shown on the web page). Outbreeding and insect pollination, selfing, hybrids within subgenera, 2 km isolation, seed orchards, F1 hybrids.",
  "url": "https://www.fao.org/4/l1900e/l1900e09.htm"
 },
 {
  "id": "tropic-nicolle-2024",
  "short": "Nicolle 2024",
  "text": "Nicolle D. 2024. Classification of the eucalypts, genus Eucalyptus. Version 7.1, November 2024. Subgenus and section of E. deglupta, synonyms, inter-subgenus hybrids.",
  "url": "http://www.dn.com.au/Classification-Of-The-Eucalypts.pdf"
 },
 {
  "id": "tropic-deoliveira-2023-plosone",
  "short": "de Oliveira et al. 2023",
  "text": "de Oliveira D.A., da Silva B.M., Novaes E. et al. 2023. Genome-wide analysis highlights genetic admixture in exotic germplasm resources of Eucalyptus and unexpected ancestral genomic composition of interspecific hybrids. PLOS ONE 18: e0289536. Open access; E. deglupta in sect. Equatoria, formerly subg. Minutifructis; 44 hybrids studied.",
  "url": "https://doi.org/10.1371/journal.pone.0289536"
 },
 {
  "id": "tropic-icraf-orwa-2009",
  "short": "Orwa et al. 2009 (ICRAF)",
  "text": "Orwa C., Mutua A., Kindt R., Jamnadass R., Anthony S. 2009. Agroforestree Database 4.0, Eucalyptus deglupta factsheet. World Agroforestry (ICRAF). Flowering age, seeds/kg, orthodox seed.",
  "url": "https://apps.worldagroforestry.org/treedb/AFTPDFS/Eucalyptus_deglupta.PDF"
 },
 {
  "id": "tropic-fao-srivastava-png",
  "short": "Srivastava, Eucalypts in PNG (FAO)",
  "text": "Srivastava P.B.L. Eucalypts in Papua New Guinea. PNG Forest Research Institute, Lae; FAO document ac772e (cites data to 1992). Seed per kg, early flowering, seedling and clonal seed orchards of kamarere.",
  "url": "https://www.fao.org/4/ac772e/ac772e0i.htm"
 },
 {
  "id": "tropic-fao-fgri12-1983",
  "short": "FAO Forest Genetic Resources Information 12",
  "text": "FAO. International provenance trials of Eucalyptus deglupta. Forest Genetic Resources Information No. 12 (1983). Provenances and clonal seed orchard seedlot.",
  "url": "https://www.fao.org/4/q5987e/Q5987E04.htm"
 },
 {
  "id": "tropic-fao-fgri6-1975",
  "short": "Boland, Davidson & Howcroft (FAO FGRI 6)",
  "text": "Boland D.J., Davidson J., Howcroft N. Eucalyptus deglupta Blume and Araucaria cunninghamii Lambert: provenance seed collections in Irian Jaya, Indonesia, 3–17 June 1975. FAO Forest Genetic Resources Information No. 6. Difficulty of seed collection.",
  "url": "https://www.fao.org/4/k4063e/K4063E02.htm"
 },
 {
  "id": "icn",
  "short": "ICN (Shenzhen Code)",
  "text": "Turland, N.J. et al. (eds.) 2018. International Code of Nomenclature for algae, fungi, and plants (Shenzhen Code). Regnum Vegetabile 159. Online version, IAPT. Used for ranks (Art. 3, 4), species and infraspecific names (Art. 23, 24), names of cultivated organisms (Art. 28) and hybrids (Arts H.1–H.3).",
  "url": "https://www.iapt-taxon.org/nomen/main.php"
 },
 {
  "id": "upov",
  "short": "UPOV 1991 Act",
  "text": "International Convention for the Protection of New Varieties of Plants, 1991 Act, Art. 1(vi), as reproduced in UPOV 2010, Explanatory Notes on the Definition of Variety under the 1991 Act of the UPOV Convention (UPOV/EXN/VAR/1), English and French versions. The upovlex page of the Act itself only loads with JavaScript.",
  "url": "https://www.upov.int/documents/d/upov/explanatory-notes-en-upov_exn_var.pdf"
 },
 {
  "id": "apg4",
  "short": "APG IV",
  "text": "Angiosperm Phylogeny Group (Chase, M.W. et al.) 2016. An update of the Angiosperm Phylogeny Group classification for the orders and families of flowering plants: APG IV. Bot. J. Linn. Soc. 181: 1–20. doi:10.1111/boj.12385. Only the abstract was read (Europe PMC record); publisher pages returned 403.",
  "url": "https://europepmc.org/article/AGR/IND605189905"
 },
 {
  "id": "concepts-osa-seed-saving-guide",
  "short": "Organic Seed Alliance, Seed Saving Guide",
  "text": "Organic Seed Alliance. A Seed Saving Guide for Gardeners and Farmers. Port Townsend, WA (undated PDF; URL path 2010). Mating systems, OP vs hybrids, isolation methods, population size, inbreeding depression, Crop Specific Chart (pp. 25–27).",
  "url": "https://seedalliance.org/wp-content/uploads/2010/04/seed_saving_guide.pdf"
 },
 {
  "id": "concepts-sse-guide-2017",
  "short": "Seed Savers Exchange, Seed Saving Guide 2017",
  "text": "Seed Savers Exchange 2017. Seed Saving Guide (table of crops: pollination method, recommended isolation distance, population sizes for viable seed / variety maintenance / genetic preservation).",
  "url": "https://shop.seedsavers.org/site/pdf/Seed%20Saving%20Guide_2017.pdf"
 },
 {
  "id": "concepts-sse-crop-chart",
  "short": "Seed Savers Exchange, crop chart",
  "text": "Seed Savers Exchange. Crop-Specific Seed Saving Guide (undated chart, adapted from the Organic Seed Alliance guide), with legend on selfing/outbreeding classes, isolation and population sizes.",
  "url": "https://shop.seedsavers.org/site/pdf/crop_chart.pdf"
 },
 {
  "id": "concepts-mccormack-isolation",
  "short": "McCormack, Isolation Distances",
  "text": "McCormack, J.H. 2010. Isolation Distances: Principles and practices of isolation distances for seed crops. An organic seed production manual for seed growers in the Mid-Atlantic and Southern U.S. Version 1.8. Saving Our Seeds / Southern SARE. Definitions, adjustment factors, time and mechanical isolation, Appendix A distances.",
  "url": "https://www.savingourseeds.org/pubs/isolation_distances_ver_1pt8.pdf"
 },
 {
  "id": "concepts-openstax-bio2e-32-2",
  "short": "OpenStax Biology 2e, 32.2",
  "text": "Clark, M.A., Douglas, M., Choi, J. 2018. Biology 2e, section 32.2 Pollination and Fertilization. OpenStax (open textbook). Definitions of self- and cross-pollination.",
  "url": "https://openstax.org/books/biology-2e/pages/32-2-pollination-and-fertilization"
 },
 {
  "id": "concepts-semae-lexique",
  "short": "SEMAE Pédagogie, lexique",
  "text": "SEMAE (interprofession des semences et plants), site SEMAE Pédagogie, Lexique: Allogamie, Autogamie, Clone, DHS, Dioïque, Monoïque, Hétérosis, Hétérozygotie, Homozygote, Hybride, Lignée, Variété.",
  "url": "https://www.semae-pedagogie.org/lexique/"
 },
 {
  "id": "concepts-semae-inscription",
  "short": "SEMAE Pédagogie, inscription au Catalogue",
  "text": "SEMAE Pédagogie. L'inscription des variétés aux Catalogues officiels (DHS tests).",
  "url": "https://www.semae-pedagogie.org/inscription-varietes-catalogue-officiel/"
 },
 {
  "id": "concepts-hiscock-2002",
  "short": "Hiscock 2002",
  "text": "Hiscock, S.J. 2002. Pollen recognition during the self-incompatibility response in plants. Genome Biology 3(2): reviews1004. doi:10.1186/gb-2002-3-2-reviews1004. Open access; full text read via Europe PMC. GSI vs SSI, families, S-alleles, Brassica SRK/SCR.",
  "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC139015/"
 },
 {
  "id": "concepts-kitashiba-2014-brassica",
  "short": "Kitashiba & Nasrallah 2014",
  "text": "Kitashiba, H., Nasrallah, J.B. 2014. Self-incompatibility in Brassicaceae crops: lessons for interspecific incompatibility. Breeding Science 64: 23–37. doi:10.1270/jsbbs.64.23. Open access; full text via Europe PMC.",
  "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC4031107/"
 },
 {
  "id": "concepts-cmejlova-2023-cherry",
  "short": "Čmejlová et al. 2023",
  "text": "Čmejlová, J. et al. 2023. A new one-tube reaction assay for the universal determination of sweet cherry (Prunus avium L.) self-(in)compatible MGST- and S-alleles using capillary fragment analysis. Int. J. Mol. Sci. 24: 6931. doi:10.3390/ijms24086931. Open access; abstract and introduction used.",
  "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10139232/"
 },
 {
  "id": "concepts-wsu-sweet-cherry-pollination",
  "short": "WSU Tree Fruit, sweet cherry pollination",
  "text": "Washington State University Tree Fruit. Pollination – Sweet Cherry (web article). Self-unfruitful vs self-fruitful cultivars, cross-unfruitful cultivars, bloom groups.",
  "url": "https://treefruit.wsu.edu/web-article/sweet-cherry-pollination/"
 },
 {
  "id": "concepts-hand-koltunow-2014",
  "short": "Hand & Koltunow 2014",
  "text": "Hand, M.L., Koltunow, A.M.G. 2014. The genetic control of apomixis: asexual seed formation. Genetics 197: 441–450. doi:10.1534/genetics.114.163105. Free full text on PMC.",
  "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC4063905/"
 },
 {
  "id": "concepts-goeckeritz-2024-apomixis",
  "short": "Goeckeritz et al. 2024",
  "text": "Goeckeritz, C.Z. et al. 2024. Widespread application of apomixis in agriculture requires further study of natural apomicts. iScience 27: 110720. doi:10.1016/j.isci.2024.110720. Open access; used for pseudogamy.",
  "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11399699/"
 },
 {
  "id": "concepts-bsbi-rubus-agg",
  "short": "BSBI, Rubus fruticosus agg. (Fermanagh)",
  "text": "Botanical Society of Britain and Ireland, Co. Fermanagh species accounts: Rubus fruticosus L. agg., Bramble. Aggregate, microspecies counts, apomixis/agamospermy, pseudogamy, facultative apomixis.",
  "url": "https://bsbi.org/in-your-area/local-botany/co-fermanagh/fermanagh-species-accounts/rubus-fruticosus-l-agg"
 },
 {
  "id": "concepts-ammarellou-2021-viola",
  "short": "Ammarellou et al. 2021",
  "text": "Ammarellou, A. et al. 2021. Seasonal and simultaneous cleistogamy in rostrate violets (Viola, subsect. Rostratae, Violaceae). Plants 10: 2147. doi:10.3390/plants10102147. Open access.",
  "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC8537809/"
 },
 {
  "id": "concepts-fraser-2009-kiwifruit",
  "short": "Fraser et al. 2009",
  "text": "Fraser, L.G. et al. 2009. A gene-rich linkage map in the dioecious species Actinidia chinensis (kiwifruit) reveals putative X/Y sex-determining chromosomes. BMC Genomics 10: 102. doi:10.1186/1471-2164-10-102. Open access; Background used for kiwifruit flower sexes and dioecy frequency.",
  "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC2661093/"
 },
 {
  "id": "concepts-unh-grafting",
  "short": "UNH Extension, grafting fruit trees",
  "text": "University of New Hampshire Extension. Growing Fruit: Grafting Fruit Trees in the Home Orchard (fact sheet). Why fruit trees are grafted, rootstocks, precocity.",
  "url": "https://extension.unh.edu/resource/growing-fruit-grafting-fruit-trees-home-orchard-fact-sheet"
 },
 {
  "id": "concepts-schlatholter-2018-apple",
  "short": "Schlathölter et al. 2018",
  "text": "Schlathölter, I. et al. 2018. Generation of advanced fire blight-resistant apple (Malus × domestica) selections of the fifth generation within 7 years of applying the early flowering approach. Planta 247: 1475–1488. doi:10.1007/s00425-018-2876-z. Open access; juvenile phase durations in the Introduction (citing Hanke et al. 2007 and others).",
  "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC5945749/"
 },
 {
  "id": "concepts-liu-2022-apple",
  "short": "Liu et al. 2022",
  "text": "Liu, W. et al. 2022. Research progress on genetic basis of fruit quality traits in apple (Malus × domestica). Front. Plant Sci. 13: 918202. doi:10.3389/fpls.2022.918202. Open access; heterozygosity, self-incompatibility and juvenility of perennial fruit trees.",
  "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC9330611/"
 },
 {
  "id": "concepts-ncsu-nomenclature",
  "short": "NC State Extension, nomenclature of horticultural plants",
  "text": "Zona, S. The Nomenclature of Horticultural Plants: An Explanation. NC State Extension Gardener Plant Toolbox (updated 4 July 2026). Summary of ICNCP rules: cultivar definition and writing, Group, grex, trade designations.",
  "url": "https://extensiongardener.ces.ncsu.edu/extension-gardener-plant-toolbox/the-nomenclature-of-horticultural-plants-an-explanation/"
 },
 {
  "id": "concepts-govaerts-2021-wcvp",
  "short": "Govaerts et al. 2021 (WCVP)",
  "text": "Govaerts, R. et al. 2021. The World Checklist of Vascular Plants, a continuously updated resource for exploring global plant diversity. Scientific Data 8: 215. doi:10.1038/s41597-021-00997-6. Open access; WCVP as index of POWO and default for WFO; follows APG IV.",
  "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC8363670/"
 },
 {
  "id": "concepts-ipni",
  "short": "IPNI",
  "text": "International Plant Names Index, name record 939018-1, Ribes × nidigrolaria Rud.Bauer & A.Bauer, Osnabrück. Naturwiss. Mitt. 15: 50 (1989) (read via the IPNI API).",
  "url": "https://www.ipni.org/n/939018-1"
 }
];
