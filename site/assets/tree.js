// Shared logic for the browsable trees (plant anatomy, breeding systems):
// index, paths, search with accents and typos forgiven. No DOM, so the unit
// tests can run it in Node.

/**
 * Normalise a term for matching: lower case, accents and umlauts removed
 * ("Tüpfel" -> "tupfel", "périderme" -> "periderme"), ß -> ss, ligatures
 * opened, punctuation, quotes and hyphens turned into single spaces.
 */
export function fold(s) {
  return String(s ?? '')
    .toLowerCase()
    .replace(/ß/g, 'ss').replace(/æ/g, 'ae').replace(/œ/g, 'oe')
    .normalize('NFD').replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, ' ')
    .trim();
}

/** The German way of writing umlauts without them: "Tüpfel" -> "tuepfel". */
export function foldGerman(s) {
  return fold(String(s ?? '').toLowerCase().replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue'));
}

/**
 * Build lookups once: byId, children (in data order), roots, depth and the
 * search keys. keysOf(entry) lists the searchable terms of an entry:
 * [{lang, term, main}] (main: the entry's own name rather than a synonym).
 */
export function buildIndex(entries, keysOf) {
  const byId = new Map();
  const children = new Map();
  for (const e of entries) {
    if (byId.has(e.id)) throw new Error(`duplicate id ${e.id}`);
    byId.set(e.id, e);
    children.set(e.id, []);
  }
  const roots = [];
  for (const e of entries) {
    if (e.parent === null) roots.push(e.id);
    else if (children.has(e.parent)) children.get(e.parent).push(e.id);
  }
  const depth = new Map();
  const walk = (id, d) => { depth.set(id, d); for (const c of children.get(id)) walk(c, d + 1); };
  roots.forEach((r) => walk(r, 0));

  const keys = [];
  for (const e of entries) {
    for (const { lang, term, main } of keysOf(e)) {
      if (!term) continue;
      for (const f of new Set([fold(term), foldGerman(term)])) if (f) keys.push({ id: e.id, lang, term, main: !!main, f });
    }
  }
  return { byId, children, roots, depth, keys };
}

/** Ids from the root to `id`, inclusive. */
export function pathTo(index, id) {
  const out = [];
  let cur = index.byId.get(id);
  const seen = new Set();
  while (cur) {
    if (seen.has(cur.id)) throw new Error(`cycle at ${cur.id}`);
    seen.add(cur.id);
    out.unshift(cur.id);
    cur = cur.parent === null ? null : index.byId.get(cur.parent);
  }
  return out;
}

/** Number of entries below `id`. */
export function descendantCount(index, id) {
  let n = 0;
  for (const c of index.children.get(id) ?? []) n += 1 + descendantCount(index, c);
  return n;
}

function editDistanceAtMost1(a, b) {
  if (a === b) return true;
  const la = a.length, lb = b.length;
  if (Math.abs(la - lb) > 1) return false;
  let i = 0, j = 0, edits = 0;
  while (i < la && j < lb) {
    if (a[i] === b[j]) { i++; j++; continue; }
    if (++edits > 1) return false;
    if (la > lb) i++;
    else if (lb > la) j++;
    else if (a[i + 1] === b[j] && a[i] === b[j + 1]) { i += 2; j += 2; } // swapped letters
    else { i++; j++; }
  }
  return edits + (la - i) + (lb - j) <= 1;
}

/**
 * Search all keys. Returns the best match per entry, best first:
 * [{id, lang, term, score}]. Scores: exact 100, starts with 80, a word starts
 * with 60, contains 40, one typo away (queries of 5 letters or more) 20; main
 * names win over synonyms, shallower entries over deeper.
 */
export function search(index, query, { limit = 12 } = {}) {
  const q = fold(query);
  if (!q) return [];
  const qg = foldGerman(query);
  const best = new Map();
  for (const k of index.keys) {
    let s = 0;
    for (const qq of new Set([q, qg])) {
      let v = 0;
      if (k.f === qq) v = 100;
      else if (k.f.startsWith(qq)) v = 80;
      else if (k.f.split(' ').some((w) => w.startsWith(qq))) v = 60;
      else if (qq.length >= 3 && k.f.includes(qq)) v = 40;
      else if (qq.length >= 5 && k.f.split(' ').some((w) => editDistanceAtMost1(w, qq))) v = 20;
      s = Math.max(s, v);
    }
    if (!s) continue;
    s += k.main ? 5 : 0;
    s -= Math.min(4, (index.depth.get(k.id) ?? 0) * 0.5);
    const prev = best.get(k.id);
    if (!prev || s > prev.score) best.set(k.id, { id: k.id, lang: k.lang, term: k.term, score: s });
  }
  return [...best.values()].sort((a, b) => b.score - a.score || a.term.localeCompare(b.term)).slice(0, limit);
}
