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
  "text": "Stevens P.F. Angiosperm Phylogeny Website (Missouri Botanical Garden). Used for the placement of the orders (Poales, Caryophyllales, Lamiales, Rosales, Ericales) and their families, following APG IV.",
  "url": "https://www.mobot.org/MOBOT/research/APweb/"
 },
 {
  "id": "flora",
  "short": "Standard floras and morphology texts",
  "text": "Floral part counts, symmetry, ovary position, phyllotaxy, inflorescence and fruit type are standard morphological facts for these widely described species, as given in regional floras (e.g. Flora of China, Flora of North America) and plant-morphology textbooks. Checked against the per-species page named in each flower_src before publication.",
  "url": "http://www.efloras.org/"
 }
];
