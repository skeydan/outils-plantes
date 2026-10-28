// Plant anatomy tree: structure, sources, notes, drawings and search.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { ENTRIES } from '../site/anatomy/js/entries.js';
import { SOURCES } from '../site/anatomy/js/sources.js';
import { NOTES } from '../site/anatomy/js/notes.js';
import { DRAWINGS } from '../site/anatomy/js/drawings.js';
import { LANGS, buildIndex, validate, search, pathTo, fold, foldGerman } from '../site/anatomy/js/tree.js';

const sourceIds = new Set(SOURCES.map((s) => s.id));
const noteIds = new Set(Object.keys(NOTES));
const drawingIds = new Set(Object.keys(DRAWINGS));
const index = buildIndex(ENTRIES);
const top = (q) => search(index, q)[0]?.id;
const ids = (q, n = 5) => search(index, q).slice(0, n).map((r) => r.id);

test('the tree is valid: one root, no orphans, every name and definition sourced', () => {
  assert.deepEqual(validate(ENTRIES, { sourceIds, noteIds, drawingIds }), []);
});

test('no placeholder left in the data', () => {
  const text = JSON.stringify({ ENTRIES, SOURCES, NOTES });
  for (const bad of ['Placeholder', 'Provisoire', 'example.org', 'TODO', 'PROVISIONAL']) assert.ok(!text.includes(bad), `found ${bad}`);
  for (const e of ENTRIES) for (const l of LANGS) assert.ok(!/\((fr|de|la)\)$/.test(e.names[l].term ?? ''), `${e.id}: placeholder name ${e.names[l].term}`);
  for (const s of SOURCES) {
    assert.match(s.url, /^https:\/\//, `${s.id} url`);
    assert.ok(s.text.length > 20 && s.short, `${s.id} reference`);
  }
});

test('ids, links and citations used inside texts exist', () => {
  const check = (where, str) => {
    for (const m of str.matchAll(/\{\{([a-z0-9-]+)(?:\|[^}]+)?\}\}/g)) assert.ok(index.byId.has(m[1]), `${where}: link to unknown entry ${m[1]}`);
    for (const m of str.matchAll(/\^([a-z0-9-]+(?:,[a-z0-9-]+)*)\^/g)) for (const k of m[1].split(',')) assert.ok(sourceIds.has(k), `${where}: unknown source ${k}`);
  };
  for (const e of ENTRIES) { check(e.id, e.def.en); check(e.id, e.def.fr); }
  for (const [id, n] of Object.entries(NOTES)) {
    assert.ok(n.title.en && n.title.fr, `${id} title`);
    assert.equal(n.body.en.length, n.body.fr.length, `${id}: same number of paragraphs in en and fr`);
    for (const p of [...n.body.en, ...n.body.fr]) check(id, p);
    for (const k of n.src ?? []) assert.ok(sourceIds.has(typeof k === 'string' ? k : k.k), `${id}: source ${k}`);
  }
  for (const [key, d] of Object.entries(DRAWINGS)) {
    for (const id of d.for) assert.ok(index.byId.has(id), `drawing ${key}: unknown entry ${id}`);
    for (const k of d.src ?? []) assert.ok(sourceIds.has(k), `drawing ${key}: unknown source ${k}`);
  }
  const used = new Set();
  const collect = (list) => (list ?? []).forEach((s) => used.add(typeof s === 'string' ? s : s.k));
  for (const e of ENTRIES) { collect(e.def.src); for (const l of LANGS) { collect(e.names[l].src); collect(e.names[l].checked); } }
  for (const n of Object.values(NOTES)) { collect(n.src); for (const p of [...n.body.en, ...n.body.fr]) for (const m of p.matchAll(/\^([a-z0-9-,]+)\^/g)) m[1].split(',').forEach((k) => used.add(k)); }
  for (const d of Object.values(DRAWINGS)) collect(d.src);
  for (const s of SOURCES) assert.ok(used.has(s.id), `source ${s.id} is listed but never cited`);
});

test('the hard cases have their notes, on the right entries', () => {
  const hasNote = (id, note) => assert.ok((index.byId.get(id).notes ?? []).includes(note), `${id} should show note ${note}`);
  hasNote('pit', 'tuepfel');
  hasNote('protoplast', 'protoplast-protoplasma');
  for (const id of ['bark', 'cortex', 'rhytidome']) hasNote(id, 'rinde-borke');
  hasNote('cortex', 'cortex-bark');
  hasNote('bark', 'cortex-bark');
});

test('search works in the four languages, with or without accents and umlauts', () => {
  assert.equal(fold('Tüpfel'), 'tupfel');
  assert.equal(foldGerman('Tüpfel'), 'tuepfel');
  for (const q of ['Tüpfel', 'tupfel', 'tuepfel', 'ponctuation', 'pit']) assert.equal(top(q), 'pit', q);
  assert.equal(top('Tüpfelkanal'), 'pit-canal');
  assert.equal(top('Hoftüpfel'), 'bordered-pit');
  assert.equal(top('Borke'), 'rhytidome');
  assert.ok(ids('Rinde').includes('bark') && ids('Rinde').includes('cortex'), `Rinde: ${ids('Rinde')}`);
  assert.equal(top('écorce'), 'bark');
  assert.equal(top('ecorce'), 'bark');
  assert.equal(top('bark'), 'bark');
  assert.equal(top('Protoplast'), 'protoplast');
  assert.ok(ids('Protoplasma').includes('protoplast'), `Protoplasma: ${ids('Protoplasma')}`);
  assert.equal(top('periderme'), 'periderm');
  assert.equal(top('Spaltöffnung'), 'stoma');
  assert.equal(top('chloroplst'), 'chloroplast', 'one typo');
  assert.equal(top('Samenanlage'), 'ovule');
  assert.equal(search(index, '').length, 0);
});

test('paths run from the whole plant', () => {
  assert.deepEqual(pathTo(index, 'torus').slice(0, 3), ['plant', 'cell', 'cell-wall']);
  for (const e of ENTRIES) assert.equal(pathTo(index, e.id)[0], 'plant');
});

test('key terms are found, in the right place, in every language they have', () => {
  const parent = (id) => index.byId.get(id).parent;
  assert.equal(parent('aleurone-layer'), 'endosperm');
  assert.equal(parent('saccoderm'), 'primary-wall');
  assert.equal(parent('pollen-pore'), 'pollen-aperture');
  for (const [q, id] of [
    ['Aleuron', 'aleurone-layer'], ['Aleuronschicht', 'aleurone-layer'], ['couche à aleurone', 'aleurone-layer'], ['aleurone layer', 'aleurone-layer'],
    ['Sakkoderm', 'saccoderm'], ['Saccoderm', 'saccoderm'],
    ['Keimpore', 'pollen-pore'], ['germ pore', 'pollen-pore'],
    ['Tüpfelfeld', 'primary-pit-field'], ['Kork', 'phellem'], ['liège', 'phellem'], ['cork', 'phellem'],
  ]) assert.equal(top(q), id, q);
  // Porus has three senses: all three entries come up, and all show the note
  for (const id of ['pit-aperture', 'stomatal-pore', 'pollen-pore']) {
    assert.ok(ids('Porus', 6).includes(id), `Porus: ${ids('Porus', 6)}`);
    assert.ok(index.byId.get(id).notes.includes('porus'), `${id} should show note porus`);
  }
  // Sakkoderm has no French, English or Latin equivalent: said so, not coined
  for (const l of ['la', 'fr', 'en']) assert.equal(index.byId.get('saccoderm').names[l].term, null, l);
});

test('peroxisome kinds, oleosome, suspensor, hypophysis and the three primary meristems', () => {
  const parent = (id) => index.byId.get(id).parent;
  assert.equal(parent('leaf-peroxisome'), 'peroxisome');
  assert.equal(parent('glyoxysome'), 'peroxisome');
  assert.equal(parent('oleosome'), 'protoplast');
  assert.equal(parent('suspensor'), 'embryo');
  assert.equal(parent('hypophysis'), 'suspensor');
  for (const id of ['protoderm', 'ground-meristem', 'procambium']) assert.equal(parent(id), 'meristem', id);
  for (const [q, id] of [
    ['Blattperoxisomen', 'leaf-peroxisome'], ['Blatt-Peroxisom', 'leaf-peroxisome'], ['peroxysome foliaire', 'leaf-peroxisome'], ['leaf peroxisome', 'leaf-peroxisome'],
    ['Glyoxisom', 'glyoxysome'], ['Glyoxysom', 'glyoxysome'], ['glyoxysome', 'glyoxysome'],
    ['Oleosom', 'oleosome'], ['oléosome', 'oleosome'], ['corps lipidique', 'oleosome'], ['oil body', 'oleosome'], ['Sphärosomen', 'oleosome'],
    ['Hypophyse', 'hypophysis'], ['Keimanschluß', 'hypophysis'], ['hypophysis', 'hypophysis'],
    ['Suspensor', 'suspensor'], ['suspenseur', 'suspensor'], ['Embryoträger', 'suspensor'], ['suspensorium', 'suspensor'],
    ['Wurzelkappe', 'root-cap'], ['Wurzelhaube', 'root-cap'], ['Calyptra', 'root-cap'],
    ['Protoderm', 'protoderm'], ['protoderme', 'protoderm'], ['Dermatogen', 'protoderm'],
    ['Grundmeristem', 'ground-meristem'], ['méristème fondamental', 'ground-meristem'], ['ground meristem', 'ground-meristem'],
    ['Prokambium', 'procambium'], ['Peroxisom', 'peroxisome'], ['Mikrokörper', 'peroxisome'],
  ]) assert.equal(top(q), id, q);
  // The three primary meristems point to each other and share the note on "primary meristem"
  const trio = ['protoderm', 'ground-meristem', 'procambium'];
  for (const id of trio) {
    for (const other of trio) if (other !== id) assert.ok(index.byId.get(id).see.includes(other), `${id} should link to ${other}`);
    assert.ok(index.byId.get(id).notes.includes('primary-meristem'), `${id} should show note primary-meristem`);
  }
  // Hypophyse is also the pituitary gland and, in mosses, the apophysis: the note says so
  assert.ok(index.byId.get('hypophysis').notes.includes('hypophyse'));
  assert.equal(top('Apophyse'), 'hypophysis');
  // No Latin is coined for the organelles or the young tissues
  for (const id of ['leaf-peroxisome', 'glyoxysome', 'oleosome', 'hypophysis', 'protoderm', 'ground-meristem']) assert.equal(index.byId.get(id).names.la.term, null, id);
});

test('lateral meristems, cambia, periderm and the Bast pitfall hang together', () => {
  const e = (id) => index.byId.get(id);
  assert.equal(e('shoot-cambium').parent, 'vascular-cambium');
  assert.equal(e('root-cambium').parent, 'vascular-cambium');
  for (const id of ['phellem', 'phellogen', 'phelloderm']) assert.equal(e(id).parent, 'periderm', id);
  for (const [q, id] of [
    ['Folgemeristem', 'lateral-meristem'], ['sekundäres Bildungsgewebe', 'lateral-meristem'], ['Kambien', 'cambium'], ['cambia', 'cambium'],
    ['Sprosskambium', 'shoot-cambium'], ['Sproßkambium', 'shoot-cambium'], ['root vascular cambium', 'root-cambium'],
    ['Korkkambium', 'phellogen'], ['phellogène', 'phellogen'], ['Periderm', 'periderm'], ['Kork', 'phellem'], ['Phelloderm', 'phelloderm'],
    ['Bast', 'secondary-phloem'], ['Bastfaser', 'phloem-fibre'],
  ]) assert.equal(top(q), id, q);
  // the lateral meristem names its two members and its primary origin
  for (const id of ['vascular-cambium', 'phellogen', 'procambium', 'pericycle']) assert.ok(e('lateral-meristem').def.en.includes(`{{${id}}}`), id);
  for (const id of ['lateral-meristem', 'cambium', 'vascular-cambium', 'phellogen', 'shoot-cambium', 'root-cambium']) assert.ok(e(id).notes.includes('secondary-meristem'), id);
  for (const id of ['secondary-phloem', 'inner-bark', 'phloem-fibre', 'phloem']) assert.ok(e(id).notes.includes('bast'), id);
  // root cambium: closed through the pericycle; no German compound coined
  assert.ok(e('root-cambium').see.includes('pericycle'));
  assert.equal(e('root-cambium').names.de.term, null);
});

test('the terms of Nutzpflanzen ch. 2 are found, in place, with the book cited', () => {
  const e = (id) => index.byId.get(id);
  assert.equal(e('shoot-apex').parent, 'stem');
  assert.equal(e('root-cap').parent, 'root-tip');
  for (const id of ['ovary', 'style', 'stigma']) assert.equal(e(id).parent, 'pistil', id);
  assert.equal(e('seed-coat').parent, 'seed');
  for (const [q, id] of [
    ['Vegetationskegel', 'shoot-apex'], ['punctum vegetationis', 'shoot-apex'], ['Vegetationskegel der Wurzel', 'root-meristem'],
    ['Wurzelhaube', 'root-cap'], ['Fruchtknoten', 'ovary'], ['Ovar', 'ovary'], ['germen', 'ovary'],
    ['Griffel', 'style'], ['Stylus', 'style'], ['Narbe', 'stigma'], ['Stigma', 'stigma'],
    ['Testa', 'seed-coat'], ['epispermium', 'seed-coat'], ['episperm', 'seed-coat'],
  ]) assert.equal(top(q), id, q);
  // Vegetationskegel covers shoot and root apical meristems (Spektrum)
  for (const id of ['shoot-apex', 'apical-meristem', 'root-meristem']) assert.ok(ids('Vegetationskegel').includes(id), id);
  // the German names carry the book as the source of the term list
  for (const id of ['shoot-apex', 'root-cap', 'ovary', 'style', 'stigma', 'seed-coat']) {
    assert.ok(e(id).names.de.src.some((s) => s.k === 'g10-lieberei'), id);
    for (const l of LANGS) assert.ok(e(id).names[l].term, `${id}: ${l}`);
  }
});

test('the seed and seedling terms of Nutzpflanzen ch. 2: found, in place, grasses flagged, the book cited', () => {
  const e = (id) => index.byId.get(id);
  for (const id of ['radicle', 'coleorhiza', 'hypocotyl', 'cotyledon', 'mesocotyl', 'epicotyl', 'plumule', 'coleoptile']) assert.equal(e(id).parent, 'embryo', id);
  assert.equal(e('scutellum').parent, 'cotyledon');
  for (const id of ['endosperm', 'perisperm']) assert.equal(e(id).parent, 'seed', id);
  assert.equal(e('funiculus').parent, 'ovule');
  for (const [q, id] of [
    ['Mesokotyl', 'mesocotyl'], ['mésocotyle', 'mesocotyl'], ['mesocotyl', 'mesocotyl'],
    ['Scutellum', 'scutellum'], ['Schildchen', 'scutellum'],
    ['Koleoptile', 'coleoptile'], ['Coleoptile', 'coleoptile'], ['Keimscheide', 'coleoptile'], ['coléoptile', 'coleoptile'], ['coleoptilum', 'coleoptile'],
    ['Koleorhiza', 'coleorhiza'], ['Coleorrhiza', 'coleorhiza'], ['Keimwurzelscheide', 'coleorhiza'], ['coléorhize', 'coleorhiza'], ['coléorrhize', 'coleorhiza'], ['root sheath', 'coleorhiza'],
    ['Kotyledon', 'cotyledon'], ['Hypokotyl', 'hypocotyl'], ['Epikotyl', 'epicotyl'], ['Plumula', 'plumule'],
    ['Funiculus', 'funiculus'], ['Perisperm', 'perisperm'], ['Endosperm', 'endosperm'], ['Mehlkörper', 'endosperm'],
  ]) assert.equal(top(q), id, q);
  for (const id of ['micropyle', 'seed-micropyle']) assert.ok(ids('Mikropyle').includes(id), id);
  // the grass-only organs say so, in both languages
  for (const id of ['scutellum', 'coleoptile', 'coleorhiza', 'mesocotyl']) {
    assert.match(e(id).def.en, /^In grasses \(Poaceae\)/, id);
    assert.match(e(id).def.fr, /^Chez les graminées \(Poacées\)/, id);
  }
  for (const id of ['mesocotyl', 'scutellum', 'micropyle', 'seed-micropyle', 'perisperm', 'endosperm', 'funiculus', 'plumule', 'hypocotyl', 'cotyledon', 'epicotyl', 'coleoptile', 'coleorhiza']) {
    assert.ok(e(id).names.de.src.some((s) => s.k === 'g10-lieberei'), id);
    for (const l of ['fr', 'de', 'en']) assert.ok(e(id).names[l].term, `${id}: ${l}`);
  }
  // no Latin coined: an empty Latin slot says where we looked
  for (const id of ['mesocotyl', 'hypocotyl', 'epicotyl']) assert.ok(!e(id).names.la.term && e(id).names.la.checked.length >= 4, id);
});

test('tunica and corpus: under the shoot apex, found in every language, Schmidt 1924 cited', () => {
  const e = (id) => index.byId.get(id);
  for (const id of ['tunica', 'corpus']) {
    assert.equal(e(id).parent, 'shoot-apex', id);
    assert.ok(e(id).def.src.includes('g12-steeves2006'), id);
    assert.equal(e(id).names.la.term, null, id);
  }
  for (const [q, id] of [['tunica', 'tunica'], ['Tunika', 'tunica'], ['corpus', 'corpus'], ['Corpus', 'corpus']]) assert.equal(top(q), id, q);
  assert.ok(e('tunica').see.includes('corpus') && e('corpus').see.includes('tunica'));
  // the outer tunica layer gives the protoderm
  assert.ok(e('tunica').def.en.includes('{{protoderm}}'));
});

test('leaf zones: Oberblatt over petiole and blade, Unterblatt over the leaf base, ligule and rachis in place', () => {
  const e = (id) => index.byId.get(id);
  for (const id of ['upper-leaf', 'lower-leaf']) {
    assert.equal(e(id).parent, 'leaf', id);
    assert.ok(e(id).def.src.includes('g14-ye2024'), id);
    // no French word for the two zones: say so, never coin one
    assert.equal(e(id).names.fr.term, null, id);
    assert.ok(e(id).names.fr.checked.length >= 3, id);
  }
  for (const id of ['lamina', 'petiole']) assert.equal(e(id).parent, 'upper-leaf', id);
  assert.equal(e('leaf-base').parent, 'lower-leaf');
  for (const id of ['stipule', 'leaf-sheath', 'ligule']) assert.equal(e(id).parent, 'leaf-base', id);
  assert.equal(e('rachis').parent, 'leaf-compound');
  for (const [q, id] of [['Oberblatt', 'upper-leaf'], ['Unterblatt', 'lower-leaf'], ['upper leaf zone', 'upper-leaf'], ['hypophyll', 'lower-leaf'],
    ['Blattstiel', 'petiole'], ['Petiolus', 'petiole'], ['Blattspreite', 'lamina'], ['Lamina', 'lamina'], ['Blattscheide', 'leaf-sheath'],
    ['Stipel', 'stipule'], ['Nebenblatt', 'stipule'], ['Ligula', 'ligule'], ['Blatthäutchen', 'ligule'], ['ligule', 'ligule'],
    ['Rhachis', 'rachis'], ['Blattspindel', 'rachis'], ['rachis', 'rachis']]) assert.equal(top(q), id, q);
  // French texts never show the English fallback name of the zones
  for (const x of ENTRIES) assert.ok(!/\{\{(upper|lower)-leaf\}\}/.test(x.def.fr), `${x.id}: French link to a zone needs its own text`);
});

test('cataphyll, phyllode and sporophyll among the modified leaves; stamen and carpel read as sporophylls', () => {
  const e = (id) => index.byId.get(id);
  for (const id of ['cataphyll', 'phyllode', 'sporophyll']) assert.equal(e(id).parent, 'leaf-modified', id);
  for (const [q, id] of [['Niederblatt', 'cataphyll'], ['Kataphylla', 'cataphyll'], ['cataphylle', 'cataphyll'], ['Phyllodium', 'phyllode'], ['Blattstielblatt', 'phyllode'],
    ['phyllode', 'phyllode'], ['Sporophyll', 'sporophyll'], ['Sporenblatt', 'sporophyll'], ['Mikrosporophyll', 'stamen'], ['microsporophyll', 'stamen'],
    ['Megasporophyll', 'carpel'], ['mégasporophylle', 'carpel'], ['Karpell', 'carpel'], ['Stamen', 'stamen'], ['Perianth', 'perianth'], ['Blütenhülle', 'perianth'],
    ['Tegmente', 'bud-scale'], ['Tegment', 'bud-scale'], ['tegmentum', 'bud-scale'], ['perula', 'bud-scale']]) assert.equal(top(q), id, q);
  // floral leaves link back to the sporophyll, and the sporophyll to them
  for (const id of ['stamen', 'carpel', 'perianth']) {
    assert.ok(e(id).see.includes('sporophyll'), id);
    assert.ok(e('sporophyll').see.includes(id), id);
  }
  // bud scales are mostly cataphylls; a phyllode is a petiole, not a flattened stem
  assert.ok(e('bud-scale').def.en.includes('{{cataphyll}}') && e('cataphyll').see.includes('bud-scale'));
  assert.ok(e('phyllode').def.en.includes('{{petiole}}') && e('phyllode').see.includes('cladode'));
  // the zones of a cataphyll: often only the lower one
  assert.ok(e('cataphyll').def.en.includes('{{lower-leaf}}') && e('lower-leaf').see.includes('cataphyll'));
});

test('floral leaves in German: perigone apart from the double perianth, corona apart from the corolla', () => {
  const e = (id) => index.byId.get(id);
  assert.equal(e('perigone').parent, 'perianth');
  assert.equal(e('tepal').parent, 'perigone');
  for (const id of ['calyx', 'corolla', 'corona']) assert.equal(e(id).parent, 'perianth', id);
  // Perigon is no longer a synonym of the whole perianth
  for (const l of ['de', 'fr', 'en']) assert.ok(!(e('perianth').names[l].syn ?? []).some((s) => /^p[ée]rigon/i.test(s)), l);
  for (const [q, id] of [['Staubblatt', 'stamen'], ['Fruchtblatt', 'carpel'], ['Kronblatt', 'petal'], ['Petalen', 'petal'], ['Kelchblatt', 'sepal'],
    ['Sepalen', 'sepal'], ['Calyx', 'calyx'], ['Kelch', 'calyx'], ['Corolla', 'corolla'], ['Krone', 'corolla'], ['Rezeptakulum', 'receptacle'],
    ['Blütenboden', 'receptacle'], ['Perigon', 'perigone'], ['périgone', 'perigone'], ['Tepalen', 'tepal'], ['Perianth', 'perianth'],
    ['Corona', 'corona'], ['Nebenkrone', 'corona'], ['Paracorolla', 'corona'], ['paracorolle', 'corona']]) assert.equal(top(q), id, q);
  assert.ok(e('corona').see.includes('corolla') && e('corolla').see.includes('corona'));
});

test('chalaza under the ovule; microphyll and megaphyll as leaf types, Makrophyll apart from the size class macrophylle', () => {
  const e = (id) => index.byId.get(id);
  assert.equal(e('chalaza').parent, 'ovule');
  for (const id of ['microphyll', 'megaphyll']) {
    assert.equal(e(id).parent, 'leaf', id);
    assert.ok(e(id).notes.includes('phyll-type-size'), id);
  }
  assert.ok(e('mesophyll').notes.includes('phyll-type-size'));
  assert.ok(e('microphyll').see.includes('megaphyll') && e('megaphyll').see.includes('microphyll'));
  for (const [q, id] of [['chalaze', 'chalaza'], ['Chalaza', 'chalaza'], ['Nabelfleck', 'chalaza'], ['Hagelfleck', 'chalaza'],
    ['microphylle', 'microphyll'], ['Mikrophyll', 'microphyll'], ['lycophyll', 'microphyll'], ['mégaphylle', 'megaphyll'], ['Makrophyll', 'megaphyll'],
    ['Megaphyll', 'megaphyll'], ['Großblatt', 'megaphyll'], ['makrohyll', 'megaphyll'],
    // the terms that were already in the tree
    ['Androeceum', 'androecium'], ['Gynoeceum', 'gynoecium'], ['anthère', 'anther'], ['Anthere', 'anther'], ['thèque', 'theca'], ['Theka', 'theca'],
    ['Filament', 'filament'], ['sac pollinique', 'pollen-sac'], ['Pollensack', 'pollen-sac'], ['grain de pollen', 'pollen'], ['Pollenkorn', 'pollen'],
    ['ovaire', 'ovary'], ['Ovar', 'ovary'], ['Fruchtknoten', 'ovary'], ['Pistill', 'pistil'], ['stigmate', 'stigma'], ['Narbe', 'stigma'],
    ['Synergiden', 'synergid'], ['Griffel', 'style'], ['stylus', 'style'], ['nucelle', 'nucellus'], ['Integument', 'integument'],
    ['funicule', 'funiculus'], ['Funiculus', 'funiculus']]) assert.equal(top(q), id, q);
  assert.ok(ids('tégument').includes('integument') && ids('tégument').includes('seed-coat'));
  assert.equal(e('megaphyll').names.la.term, null);
});
