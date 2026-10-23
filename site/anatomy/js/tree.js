// The anatomy tree: its languages, search keys and structural checks. The
// generic tree logic (index, paths, search) is shared in assets/tree.js.

import { fold, foldGerman, buildIndex as buildTreeIndex, pathTo, descendantCount, search } from '../../assets/tree.js';

export { fold, foldGerman, pathTo, descendantCount, search };

export const LANGS = ['la', 'fr', 'de', 'en'];

/** Search keys of an anatomy entry: every name, synonym and confusable word in every language. */
export function anatomyKeys(e) {
  const out = [];
  for (const l of LANGS) {
    const n = e.names[l];
    if (!n) continue;
    [n.term, ...(n.syn ?? [])].filter(Boolean).forEach((term, i) => out.push({ lang: l, term, main: i === 0 }));
    // Words often mistaken for this one (false friends): found by search, shown as such.
    for (const term of n.confusable ?? []) out.push({ lang: l, term, main: false });
  }
  return out;
}

/** Build lookups once: byId, children (in data order), roots, depth, search keys. */
export const buildIndex = (entries) => buildTreeIndex(entries, anatomyKeys);

/**
 * Structural checks used by the tests and, in development, by the page:
 * one root, no orphans or cycles, every language slot filled or marked
 * missing with a reason, sources known, cross-links valid.
 */
export function validate(entries, { sourceIds = new Set(), noteIds = new Set(), drawingIds = new Set() } = {}) {
  const problems = [];
  const index = buildIndex(entries);
  if (index.roots.length !== 1) problems.push(`expected one root, got ${index.roots.join(', ')}`);
  for (const e of entries) {
    if (e.parent !== null && !index.byId.has(e.parent)) problems.push(`${e.id}: parent ${e.parent} does not exist (orphan)`);
    if (!index.depth.has(e.id)) problems.push(`${e.id}: not reachable from the root`);
    for (const l of LANGS) {
      const n = e.names?.[l];
      if (!n) { problems.push(`${e.id}: no ${l} slot`); continue; }
      if (n.term) {
        if (!n.src?.length) problems.push(`${e.id}: ${l} "${n.term}" has no source`);
      } else if (!n.missing) problems.push(`${e.id}: ${l} empty without a reason`);
      for (const s of n.src ?? []) {
        const k = typeof s === 'string' ? s : s.k;
        if (!sourceIds.has(k)) problems.push(`${e.id}: ${l} unknown source ${k}`);
      }
    }
    if (!e.def?.en || !e.def?.fr) problems.push(`${e.id}: definition missing`);
    if (!e.def?.src?.length) problems.push(`${e.id}: definition has no source`);
    for (const s of e.def?.src ?? []) {
      const k = typeof s === 'string' ? s : s.k;
      if (!sourceIds.has(k)) problems.push(`${e.id}: definition unknown source ${k}`);
    }
    for (const s of e.see ?? []) if (!index.byId.has(s)) problems.push(`${e.id}: see-also ${s} does not exist`);
    for (const n of e.notes ?? []) if (!noteIds.has(n)) problems.push(`${e.id}: unknown note ${n}`);
    if (e.draw && !drawingIds.has(e.draw)) problems.push(`${e.id}: unknown drawing ${e.draw}`);
  }
  return problems;
}
