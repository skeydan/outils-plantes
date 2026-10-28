// Routes of the single page: #<tab>[/<sub>]. No side effects, so the tools
// and the unit tests can import it.

export const TAB_IDS = ['anatomy', 'water', 'seeds', 'graft', 'microscope'];
export const DEFAULT_TAB = 'anatomy';

/** Parse a hash into {tab, sub}. Unknown or empty hashes give the default tab. */
export function parseRoute(hash) {
  let raw = String(hash ?? '').replace(/^#/, '');
  try { raw = decodeURIComponent(raw); } catch { /* keep it raw */ }
  const [first, ...rest] = raw.split('/');
  if (TAB_IDS.includes(first)) return { tab: first, sub: rest.join('/') || null };
  return { tab: DEFAULT_TAB, sub: null };
}

/** The hash of a route. */
export const routeHref = (tab, sub = null) => `#${tab}${sub ? `/${sub}` : ''}`;

/** Scroll to an element of the open tab, mark it and give it the focus (in-page anchors). */
export function revealAnchor(target, { smooth = true } = {}) {
  document.querySelectorAll('.is-target').forEach((el) => el.classList.remove('is-target'));
  target.classList.add('is-target');
  for (let d = target.closest('details'); d; d = d.parentElement?.closest('details')) d.open = true;
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  target.scrollIntoView({ block: 'start', behavior: smooth && !reduce ? 'smooth' : 'auto' });
  if (!target.hasAttribute('tabindex') && !/^(A|BUTTON|INPUT|SELECT|TEXTAREA)$/.test(target.tagName)) target.tabIndex = -1;
  target.focus({ preventScroll: true });
}
