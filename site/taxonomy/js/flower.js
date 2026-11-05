// A schematic floral diagram, drawn from the flower object: the whorls as
// concentric marks (sepals outermost, then petals, stamens, carpels), with a
// labelled legend. No DOM, so the unit tests can import it; it returns an SVG
// string that uses the page's CSS colour variables, so it follows the theme.

const pt = (i, n, r) => {
  const a = -Math.PI / 2 + (i * 2 * Math.PI) / n;
  return [r * Math.cos(a), r * Math.sin(a)];
};

const W = [
  { key: 'sepals', r: 76, color: 'var(--green)', shape: 'sepal' },
  { key: 'petals', r: 57, color: 'var(--cyan)', shape: 'petal' },
  { key: 'stamens', r: 37, color: 'var(--yellow)', shape: 'anther' },
];

const MARK = {
  // Ellipses oriented along the radius, so the flower reads as a flower.
  sepal: (x, y, a) => `<ellipse cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" rx="4.6" ry="9" transform="rotate(${a.toFixed(1)} ${x.toFixed(1)} ${y.toFixed(1)})" fill="${W[0].color}" fill-opacity="0.9"/>`,
  petal: (x, y, a) => `<ellipse cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" rx="6" ry="11" transform="rotate(${a.toFixed(1)} ${x.toFixed(1)} ${y.toFixed(1)})" fill="${W[1].color}" fill-opacity="0.85"/>`,
  anther: (x, y) => `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="3.4" fill="${W[2].color}"/>`,
};

function whorl(cx, cy, n, r, shape, fused) {
  const parts = [];
  if (n === 0) return '';
  if (fused) {
    // Joined parts: one continuous ring instead of separate marks.
    return `<circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="${W.find((w) => w.shape === shape).color}" stroke-width="8" opacity="0.9"/>`;
  }
  const m = n ?? 14; // "many" -> a dotted ring of 14
  for (let i = 0; i < m; i++) {
    const [dx, dy] = pt(i, m, r);
    const x = cx + dx, y = cy + dy;
    const deg = (Math.atan2(dy, dx) * 180) / Math.PI + 90;
    parts.push(MARK[shape](x, y, deg));
  }
  return parts.join('');
}

/** count as text: "5", "0", or "∞" for many. */
const nTxt = (n) => (n === null ? '∞' : String(n));

/**
 * f: the `flower` object. S: label strings. Returns an <svg> string.
 */
export function flowerSVG(f, S) {
  const cx = 100, cy = 105;
  const carpelsColor = 'var(--sand)';
  let carpels = '';
  const g = f.carpels;
  if (g.n === 0) carpels = '';
  else if (g.fused) carpels = `<circle cx="${cx}" cy="${cy}" r="16" fill="${carpelsColor}" opacity="0.9"/>`;
  else if (g.n === null) {
    const m = 8; // many free carpels -> a cluster
    for (let i = 0; i < m; i++) { const [dx, dy] = pt(i, m, 8); carpels += `<circle cx="${(cx + dx).toFixed(1)}" cy="${(cy + dy).toFixed(1)}" r="4.4" fill="${carpelsColor}"/>`; }
  } else {
    carpels = `<circle cx="${cx}" cy="${cy}" r="15" fill="${carpelsColor}" opacity="0.9"/>`;
  }

  const flower = [
    `<circle cx="${cx}" cy="${cy}" r="86" fill="none" stroke="var(--hairline)" stroke-width="1"/>`,
    whorl(cx, cy, f.sepals.n, W[0].r, 'sepal', f.sepals.fused),
    whorl(cx, cy, f.petals.n, W[1].r, 'petal', f.petals.fused),
    whorl(cx, cy, f.stamens.n, W[2].r, 'anther', f.stamens.fused),
    carpels,
  ].join('');

  const legend = [
    [W[0].color, `${S.sepals} ${nTxt(f.sepals.n)}`],
    [W[1].color, `${S.petals} ${nTxt(f.petals.n)}`],
    [W[2].color, `${S.stamens} ${nTxt(f.stamens.n)}`],
    [carpelsColor, `${S.carpels} ${nTxt(f.carpels.n)}`],
  ].map(([c, txt], i) => {
    const y = 34 + i * 34;
    return `<circle cx="196" cy="${y - 4}" r="6" fill="${c}"/><text x="210" y="${y}" font-size="13" fill="var(--ink)">${txt}</text>`;
  }).join('');

  const title = `${S.diagram}: ${f.formula}`;
  return `<svg viewBox="0 0 300 210" role="img" aria-label="${title}" xmlns="http://www.w3.org/2000/svg">
<title>${title}</title>
${flower}
${legend}
</svg>`;
}
