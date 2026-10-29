# outils-plantes

One page, five tabs, for gardeners and for anyone learning how plants are
built and how they live. French and English (follows the browser language,
with a switch), light and dark, works on phones and with the keyboard. A
static site: no backend, no build step, no tracking. Every number comes from
a cited source, listed at the bottom of each tab.

## The five tabs

- **Anatomy** (`#anatomy`, code in `site/anatomy/`): a drill-down tree from
  the whole plant to organs, tissues, cells and cell parts (297 entries),
  names in Latin, French, German and English with the source of each name,
  search in all four (accents, umlauts, one typo forgiven), a link per entry
  (`#anatomy/bordered-pit`), translation-pitfall notes (Tüpfel and its
  family, Protoplast vs Protoplasma, Rinde/Borke/Bast, écorce and liber,
  cortex vs bark, Porus, Aleuron, Trachee, albumen, microphyll and
  macrophyll...) and 24 drawings of our own, labelled in the chosen
  language, covering 226 entries: the plant, stem, bark, periderm, leaf,
  stoma, root tip and section, flower, ovule, seed, drupe, cell, pits,
  conducting cells, ground tissues,
  chloroplast, fruit types, modified stems, thorn/spine/prickle and hairs,
  anther and pollen, meristems, kinds of roots. Latin is given only when a source gives it.
- **Water potential** (`#water`, code in `site/plant-water/`):
  Ψ = Ψs + Ψp + Ψg + Ψm with a unit converter and a cell in a sugar
  solution; the compartments of the plant (vacuole, cytoplasm, cell wall,
  apoplast, symplast): which part dominates where, with measured values,
  how water moves between them and across a root (Casparian strip), a
  drawing of the three paths and a one-cell calculator (Kramer & Boyer's
  cell, a wetter apoplast, plasmolysis); the potential from soil to leaf to
  air (published tomato and tree chains or your own values); adhesion,
  cohesion and capillary rise against tube radius; the cohesion–tension
  theory; field capacity and wilting point. Each section has its own link
  (`#water/compartments`).
- **Breeding** (`#seeds`, code in `site/seeds/`): a tree from family to
  cultivar with search (scientific, old and common names): self- or
  cross-pollinated, self-incompatibility and S-alleles, dioecy, apomixis,
  crosses between species and between varieties, pollinizers and
  distances, whether seed comes true; a table of the plants at a glance
  (almond and its cultivars, plums, pitayas, kiwis, bramble, raspberry,
  gooseberry, redcurrant, sea buckthorn, rainbow eucalyptus); an almond
  pair check from published S-genotypes; the words (var., cultivar, the
  seed-trade « variété ») explained. Names follow POWO and WFO, with their
  disagreements.
- **Grafting** (`#graft`, code in `site/graft/`): the same plants as the
  breeding tab, from family to cultivar (the taxa are read from
  `site/seeds/js/taxa.js`), each grafted plant branching into the
  rootstocks it is grafted on: almond (almond and peach seedlings, Hansen,
  GF 677, Garnem, Rootpac, Krymsk 86, Marianna 2624, Viking), European,
  damson and Japanese plums (myrobalan, St Julien, Pixy, Brompton, Wavit,
  Krymsk 1, Marianna, Torinel, Ishtara, Citation), kiwifruit (Bruno,
  Bounty 71, Kaimai), yellow pitaya on S. undatus, currant and gooseberry
  standards on Ribes aureum. For each pair, how well they get on
  (compatible, depends on the variety, interstock needed, incompatible)
  and for each rootstock what it is chosen for: vigour, soil, lime, drought,
  wet soil, salinity, cold, heat, diseases, anchorage, suckers, cropping.
  Plants that are not grafted (raspberries and blackberries, kiwiberry,
  sea buckthorn, rainbow eucalyptus) say so and how they are propagated
  instead. Search on plant, variety or rootstock names; a link per node
  (`#graft/prunus-amygdalus--gf-677`).
- **Microscope** (`#microscope`, code in `site/microscope/`): a simulated
  student microscope (the objectives, eyepieces and Barlow lens of the
  Bresser Biorit SE 1600x: 4x, 10x, 40x; WF10x, WF20x; 40× to 1600×) on
  nine real photographs (leaf, root tip, stems, root, cereal grain, tulip
  epidermis, lily anther, red onion). Each photograph is blurred offline to
  what each objective resolves, then drawn at the angular size of the
  eyepiece image; the eyepiece only changes the size, so empty
  magnification shows. A table says which structures each objective can
  resolve (chloroplast, nucleus, stoma, phloem... down to the ER and
  plasmodesmata, which none can), with sourced sizes. Method, reliability
  and credits are in the tab and below.

The soil tools that used to live here (texture triangle, jar test,
watering planner, sowing temperatures, fertilizer, soil volume) moved to
their own repository, outils-sols.

## How the page works

`site/index.html` holds the header, the tab bar and five empty panels.
`site/assets/app.js` reads the route from the hash, `#<tab>[/<entry or
section>]` (`site/assets/route.js`), and loads a tab's code the first time
it opens (`import()`), so the 435 KB anatomy data is only fetched for the
anatomy tab; hovering or focusing a tab starts loading it early. Only the
open tab is in the page. Each tool module exports `mount(panel, sub)` and
`show(sub)`.

- Tabs follow the ARIA tabs pattern: `role="tablist"`, `tab`, `tabpanel`,
  arrow keys, Home and End, one tab in the Tab order. The bar sticks to the
  top and fits on one row on a phone.
- Each tab remembers its entry or section, and Back and Forward walk the
  routes. Citations (`#src-…`) and concept links (`#c-…`) scroll inside the
  tab without changing the route.
- The old addresses (`anatomy/#e=bark`, `seeds/`, `plant-water/`) redirect
  to their tab.

## Run locally

Any static file server works. With Python:

```bash
python3 -m http.server 9417 --directory site
# open http://localhost:9417/
```

or with Docker (the same image as for deployment):

```bash
docker build -t outils-plantes .
docker run --rm -p 9418:8080 outils-plantes
# open http://localhost:9418/   (the container listens on $PORT, default 8080)
```

All links inside the site are relative, so it also works from a sub-path.

## Adding a term to the anatomy tree

Each entry is one line of `site/anatomy/js/entries.js` (a JSON object), and
the tree is built from the `parent` fields, so a new term is one new line:
put it after its parent or its siblings (children are shown in file order).

- `id` (kebab-case, also the link `#anatomy/<id>`), `parent` (an existing
  id), `kind` (one of the keys of `KIND` in `site/anatomy/js/app.js`),
  `onto` (Plant or Gene Ontology id, or `null`), `wd` (Wikidata id, optional).
- `names.la`, `names.fr`, `names.de`, `names.en`, all four always present:
  `{"term": "...", "syn": [...], "src": [{"k": "<source id>", "url": "...",
  "loc": "where in the source"}], "remark": {"en": "...", "fr": "..."}}`.
  `confusable` lists false friends (search finds them; the entry then needs
  a note). If a language has no established word, write `"term": null`
  with `"missing": "none"` or `"missing": {"en": "why", "fr": "pourquoi"}`
  and `"checked": [<source ids looked in>]`: never coin a translation.
- `def`: `{"en": "...", "fr": "...", "src": [<source ids>]}`, in our own
  words; `{{other-id}}` links to another entry.
- `notes`: ids of translation-pitfall notes (`site/anatomy/js/notes.js`;
  add the entry to `NOTE_ENTRIES` there too).
- A new source goes at the end of `site/anatomy/js/sources.js`.

Then `npm test`: it rejects orphans, unknown parents, sources or notes,
names without a source and empty slots without a reason.

## Tests

```bash
npm test               # unit tests, plain Node (no dependencies)
npm i && npm run e2e   # browser checks with Playwright, BASE=http://localhost:9417 by default
```

- `tests/anatomy.test.mjs`: the tree is valid and fully sourced, notes,
  drawings and links resolve, search in four languages (Tüpfel / tupfel /
  tuepfel, Borke, écorce, Spaltöffnung...).
- `tests/plantwater.test.mjs`: surface tension (IAPWS table), van ’t Hoff,
  air potential from humidity, Jurin and Young–Laplace against the cited
  values, the Kramer & Boyer cell, the compartments (equilibrium, a wetter
  apoplast, plasmolysis), the xylem-sap conversion, every source cited.
- `tests/seeds.test.mjs`: the taxa tree is valid and sourced, the listed
  taxa are where they should be, search on old names and common names,
  italics of scientific names, the S-allele rule against the published
  self-compatibility of almond cultivars, who needs a partner.
- `tests/graft.test.mjs`: the grafting data are valid and sourced, the
  tree is the breeding tab's with the rootstocks under their plants, every
  species has a grafting answer (own or inherited), plants grown from
  cuttings or seed say so, every criterion has its card.
- `tests/route.test.mjs`: parsing and writing the routes.
- `tests/microscope.test.mjs`: resolution and useful magnification against
  the MicroscopyU tables and Bresser's 650× example, the screen scale, every
  source cited, every structure sized and sourced (ER, plasmodesmata,
  ribosomes never resolved), every photograph with an open licence, credit,
  scale and images whose pixel keeps what the objective passes.
- `python3 -I scripts/microscope/check_optics.py`: the transfer function and
  the Airy pattern are a Fourier pair, first dark ring at 0.61 λ/NA, a
  blurred point matches the Airy pattern.
- `scripts/e2e.mjs`: screenshots of the five tabs (desktop and phone,
  light and dark, French and English, into `/tmp/plantes-shots`); the tab
  bar (ARIA, keyboard, lazy loading, history, language switch keeps the
  route, old addresses, no request to another site); every anatomy entry
  and every taxon opened; every drawing label checked to stay inside its
  drawing in the four languages; the water calculators and the compartment
  examples; the microscope (verdicts for each combination, the image is
  drawn, dragging, a photograph that is not sharp enough says so, every
  specimen with every objective); fails on any console error, failed
  request or horizontal overflow.

## Microscope tab: method and reliability

The question first: can real photographs be degraded honestly enough to
show what a student microscope resolves? Judged before building:

- **Scale.** Every photograph has a scale bar drawn by its author; we
  measured each bar in pixels (`um_per_px` in `scripts/microscope/manifest.json`).
  For the Reischig archive the stated print magnification agrees within
  0.8–2.4 %.
- **Sharpness of the source.** A photograph can only stand for objectives it
  out-resolves: pixel at most λ/(4 NA) and its spectrum above the noise up
  to the objective's cut-off 2 NA/λ (`degrade.py` measures it). Only the
  leaf and the onion root tip (1600× prints, about 0.15 µm detail) pass for
  the 40x; the root, grain and tulip pass up to the 10x; the maize stems,
  the lily anther and the red onion only the 4x. Where a photograph falls
  short, the tab shows it as taken and says the microscope would show more.
- **Preparation and contrast.** Thin stained sections in brightfield, except
  the living red onion (anthocyanin, unstained) and the tulip epidermis
  (DIC, flagged in the tab). Contrast is the photograph's and is not
  simulated; resolution is.
- **Limits.** ER, plasmodesmata, ribosomes, membranes and microtubules are
  below 0.2 µm: no objective shows them, and they are never drawn.
- **What is left out.** Best case (perfect objective, condenser matched);
  one wavelength (550 nm); one focal plane; partially coherent effects of a
  closed diaphragm; the unknown blur of the source objective is not
  removed.
- **Assumed values.** Bresser's manual of the Biorit SE 1600x (14950,
  version v072024a, July 2024, technical data p. 2) gives only the
  eyepieces (WF10x, WF20x), objectives (4x, 10x, 40x), the 2x Barlow lens
  and 40x–1600x: no numerical aperture, no field number, no condenser
  aperture, and the product page gives none either. The apertures are
  therefore the usual achromat values 0.10 / 0.25 / 0.65 (MicroscopyU), and
  the WF10x field number (18 mm) is that of Bresser's Erudit Basic WF10x;
  both are labelled as assumptions in the tab (`naAssumed`, `fnAssumed` in
  `optics.js`). The WF20x field stays unknown.

Verdict: reliable for what is resolved and how big it looks; not a
prediction of contrast.

How the images are made: incoherent imaging with a circular pupil, in
linear light, by multiplying the image spectrum by the diffraction-limited
transfer function (the Fourier transform of the Airy pattern) and
resampling at λ/(8 NA). To rebuild them (the originals are not kept in the
repository; their SHA-256 is in the manifest):

```bash
python3 -I scripts/microscope/fetch.py scripts/microscope/manifest.json /tmp/micro-originals
python3 -I scripts/microscope/degrade.py scripts/microscope/manifest.json /tmp/micro-originals site/microscope/img
python3 -I scripts/microscope/make_data.py scripts/microscope/manifest.json site/microscope/img/build.json site/microscope/js/specimens.js
```

Photographs: Josef Reischig archive (CC BY-SA 3.0), Jon Houseman and
Matthew Ford (CC BY-SA 4.0), Adrian J. Hunter (CC BY-SA 3.0), all from
Wikimedia Commons; our blurred versions are under the same licences.
Credits with links are in the tab.

## Deploy

The site runs locally only, either way from "Run locally":

- `npm run serve`, then open <http://localhost:9417/>;
- or the container: `docker build -t outils-plantes .` and `docker run --rm -p 8080:8080 outils-plantes`, then open
  <http://localhost:8080/>. The image is nginx with a strict content security policy
  (`deploy/default.conf.template`) and listens on `$PORT` (default 8080).

## Layout

```
site/
  index.html              the page: header, tab bar, five panels
  assets/app.js           tabs, hash routing, lazy loading, in-page anchors
  assets/route.js         routes (#tab/sub), no side effects
  assets/site.js          language and theme shell
  assets/site.css         shared tokens (light/dark, validated palettes), layout, tab bar
  assets/ui.js            small DOM helpers (elements, numbers, citations)
  assets/tree.js, tree-ui.js, tree.css   shared tree, search and tree panel
  anatomy/                anatomy tab (js/entries.js, notes.js, drawings.js, sources.js, tree.js)
  plant-water/            water tab (js/physics.js, sources.js)
  seeds/                  breeding tab (js/taxa.js, concepts.js, breeding.js, sources.js)
  graft/                  grafting tab (js/graft.js data, grafting.js logic, sources.js; reuses seeds/js/taxa.js)
  microscope/             microscope tab (js/optics.js, specimens.js, structures.js, sources.js; img/)
  */index.html            redirects from the old addresses
deploy/default.conf.template   nginx config
tests/                    node:test unit tests
scripts/e2e.mjs           browser checks
scripts/microscope/       offline image build for the microscope tab (manifest, fetch, degrade, checks)
```

## Sources and respect

Texts and drawings are original. Facts come from the documents listed at the
bottom of each tab, each one opened while writing it; numbers are copied
with unit conversions only, and calculations of our own (for example the
compartment equilibrium or the xylem-sap conversion) are labelled as such.
Nothing was copied from other online tools.

Colours are checked for contrast and colour-vision deficiency: three hues
in the drawings (blue xylem, orange phloem, aqua photosynthetic tissue),
everything else neutral with direct labels; status colours (the almond pair
check) always come with a symbol and a sentence.

## Licence and credits

Code: MIT, see [LICENSE](LICENSE). Text, data tables and our own drawings:
[CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/), unless
stated otherwise. Third-party images keep their own licence as credited.
The microscope tab's photographs are by Josef Reischig and by Jon Houseman and Matthew Ford (Wikimedia Commons, CC BY-SA 3.0 or 4.0). Our blurred, cropped and resampled versions are shared under the same CC BY-SA licence as each original; the tab's credits list gives author, licence and changes for every photograph.

Built with the help of AI coding tools; every fact is checked against the cited sources.
