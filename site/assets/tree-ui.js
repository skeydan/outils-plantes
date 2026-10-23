// DOM parts shared by the browsable trees (plant anatomy, breeding systems):
// the collapsible tree panel and the search box with its result list.
import { h } from './ui.js';
import { pathTo, descendantCount } from './tree.js';

/**
 * Render the tree into `box`. opts: index, current (id shown), open (Set of
 * expanded ids, updated in place), label(id) -> text or node, labelLang (lang
 * attribute of the labels), href(id) -> link of an entry, T(en, fr).
 */
export function renderTree(box, { index, current, open, label, labelLang = null, href, T }) {
  for (const id of pathTo(index, current).slice(0, -1)) open.add(id);
  const text = (id) => { const l = label(id); return typeof l === 'string' ? l : l.textContent; };
  const node = (id) => {
    const kids = index.children.get(id);
    const isOpen = open.has(id);
    const link = h('a', { href: href(id), lang: labelLang, 'aria-current': id === current ? 'true' : null, 'data-id': id }, label(id));
    const li = h('li', { 'data-id': id });
    if (kids.length) {
      const sub = h('ul', { id: `a-sub-${id}`, hidden: !isOpen }, ...(isOpen ? kids.map(node) : []));
      const btn = h('button', { type: 'button', class: 'a-twist', 'aria-expanded': String(isOpen), 'aria-controls': `a-sub-${id}`,
        'aria-label': `${isOpen ? T('Collapse', 'Replier') : T('Expand', 'Déplier')} ${text(id)}`,
        onclick: () => {
          if (open.has(id)) open.delete(id); else open.add(id);
          const now = open.has(id);
          btn.setAttribute('aria-expanded', String(now));
          btn.setAttribute('aria-label', `${now ? T('Collapse', 'Replier') : T('Expand', 'Déplier')} ${text(id)}`);
          sub.hidden = !now;
          if (now && !sub.childElementCount) sub.append(...kids.map(node));
        } });
      li.append(h('div', { class: 'a-row' }, btn, link, h('span', { class: 'a-count', title: T('entries below', 'entrées en dessous'), text: String(descendantCount(index, id)) })), sub);
    } else {
      li.append(h('div', { class: 'a-row' }, h('span', { class: 'a-leaf', 'aria-hidden': 'true' }), link));
    }
    return li;
  };
  box.replaceChildren(h('ul', { class: 'a-root' }, ...index.roots.map(node)));
  const cur = box.querySelector('a[aria-current="true"]');
  const panel = box.closest('.a-tree-card');
  if (cur && panel) {
    // Scroll the tree panel only, never the page.
    const top = cur.offsetTop - panel.offsetTop;
    if (panel.scrollHeight > panel.clientHeight && (top < panel.scrollTop || top > panel.scrollTop + panel.clientHeight - 40)) panel.scrollTop = Math.max(0, top - panel.clientHeight / 3);
  }
}

/**
 * A combobox search. opts: input, results (ul), msg (p), find(q) -> results,
 * option(result) -> array of nodes for one row, pick(result), T(en, fr).
 */
export function wireSearch({ input, results: list, msg, find, option, pick, T }) {
  let results = [];
  let active = -1;
  const close = () => { list.hidden = true; input.setAttribute('aria-expanded', 'false'); input.removeAttribute('aria-activedescendant'); active = -1; };
  const highlight = (i) => {
    active = i;
    [...list.children].forEach((li, j) => li.setAttribute('aria-selected', String(j === i)));
    if (i >= 0) { input.setAttribute('aria-activedescendant', `a-opt-${i}`); list.children[i]?.scrollIntoView({ block: 'nearest' }); }
  };
  const choose = (i) => { const r = results[i]; if (!r) return; close(); input.value = ''; msg.textContent = ''; pick(r); };
  const update = () => {
    const q = input.value;
    results = find(q);
    list.replaceChildren(...results.map((r, i) => h('li', { role: 'option', id: `a-opt-${i}`, 'aria-selected': 'false', 'data-id': r.id,
      onmousedown: (ev) => { ev.preventDefault(); choose(i); } }, ...option(r))));
    const has = results.length > 0;
    list.hidden = !has || !q.trim();
    input.setAttribute('aria-expanded', String(has && !!q.trim()));
    msg.textContent = q.trim() && !has ? T('No entry found. Try another spelling or language.', 'Aucune entrée trouvée. Essayez une autre orthographe ou une autre langue.') : '';
    highlight(has ? 0 : -1);
  };
  input.addEventListener('input', update);
  input.addEventListener('keydown', (ev) => {
    if (ev.key === 'ArrowDown') { ev.preventDefault(); if (results.length) highlight((active + 1) % results.length); }
    else if (ev.key === 'ArrowUp') { ev.preventDefault(); if (results.length) highlight((active - 1 + results.length) % results.length); }
    else if (ev.key === 'Enter') { ev.preventDefault(); if (active >= 0) choose(active); }
    else if (ev.key === 'Escape') close();
  });
  input.addEventListener('blur', () => setTimeout(close, 100));
  input.addEventListener('focus', () => { if (input.value.trim()) update(); });
}
