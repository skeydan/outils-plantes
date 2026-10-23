// Optics of the simulated microscope: magnification, resolution, useful
// magnification, what a screen pixel stands for. No DOM, so the unit tests
// can import it. Sources are in sources.js (ids in the comments).

export const LAMBDA_UM = 0.55; // green light, the middle of the visible spectrum [microscopyu-res]

// The Bresser Biorit SE 1600x as its manual gives it [bresser-manual, p. 2
// "Technische Daten/Technical data"]: monocular head, eyepieces WF10x / WF20x,
// objectives 4x / 10x / 40x, 2x Barlow lens, 40x-1600x, LED. The manual, like
// the product page [bresser-se], gives no numerical aperture, no field number
// and no condenser aperture (p. 9 only names "Condenser & dial aperture", the
// colour filter wheel: "Kondensor und Farbfilterscheibe", p. 5).
// So the apertures below are assumptions, flagged as such and shown so in the
// tab: the usual values of achromats of these magnifications [microscopyu-na];
// 0.65 is also the 40x of Bresser's own example [bresser-faq].
export const OBJECTIVES = [
  { id: '4x', mag: 4, na: 0.10, naAssumed: true, naSrc: 'microscopyu-na' },
  { id: '10x', mag: 10, na: 0.25, naAssumed: true, naSrc: 'microscopyu-na' },
  { id: '40x', mag: 40, na: 0.65, naAssumed: true, naSrc: 'microscopyu-na' },
];
// Eyepieces WF10x and WF20x, and a 2x Barlow lens in the tube [bresser-manual, bresser-se].
// Field number, an assumption too: 18 mm is what Bresser gives for the WF10x of
// the Erudit Basic, with the same 23.2 mm barrel [bresser-erudit]; none is
// published for the WF20x, so its field of view stays unknown.
export const EYEPIECES = [
  { id: 'wf10', mag: 10, fn: 18, fnAssumed: true, fnSrc: 'bresser-erudit' },
  { id: 'wf20', mag: 20, fn: null },
];
export const BARLOW = 2;

export const objective = (id) => OBJECTIVES.find((o) => o.id === id);
export const eyepiece = (id) => EYEPIECES.find((e) => e.id === id);

/** Total visual magnification: objective x eyepiece (x Barlow). */
export const totalMag = (obj, eye, barlow = false) => obj.mag * eye.mag * (barlow ? BARLOW : 1);

/** Rayleigh two-point resolution, µm: 0.61 λ / NA [microscopyu-res]. */
export const rayleigh = (na, lam = LAMBDA_UM) => (0.61 * lam) / na;
/** Abbe limit with a condenser matched to the objective, µm: λ / (2 NA) [microscopyu-res]. */
export const abbe = (na, lam = LAMBDA_UM) => lam / (2 * na);
/** Highest spatial frequency the objective passes, cycles per µm (cut-off of the incoherent OTF): 2 NA / λ. */
export const cutoff = (na, lam = LAMBDA_UM) => (2 * na) / lam;

/** Useful magnification range, 500 to 1000 x NA [microscopyu-useful, bresser-faq]. */
export const usefulRange = (na) => [500 * na, 1000 * na];
/** 'low' (the eye cannot see all the objective resolves), 'useful', or 'empty' (bigger, not sharper). */
export function verdict(M, na) {
  const [lo, hi] = usefulRange(na);
  if (M < lo - 1e-9) return 'low';
  if (M > hi + 1e-9) return 'empty';
  return 'useful';
}

// Magnification is quoted for a virtual image seen at 250 mm [microscopyu-useful].
// A CSS pixel is defined as a visual angle of about 0.0213° [css-px]. So if the
// image is drawn with one CSS pixel per 0.0213° of the eyepiece image, the
// screen shows it at the angular size the eye would see in the eyepiece.
export const VIEW_MM = 250;
export const CSS_PX_DEG = 0.0213;
/** Specimen size (µm) covered by one CSS pixel at total magnification M. */
export const umPerCssPx = (M) => (VIEW_MM * 1000 * Math.tan((CSS_PX_DEG * Math.PI) / 180)) / M;

/** Diameter of the field of view on the specimen, µm (field number / magnification before the eyepiece), or null. */
export function fieldUm(obj, eye, barlow = false) {
  if (!eye.fn) return null;
  return (eye.fn * 1000) / (obj.mag * (barlow ? BARLOW : 1));
}

/**
 * How a structure of a given size shows with an objective, by our own rule
 * of thumb on the Rayleigh distance d: below d it is not resolved; from d to
 * 3 d it is a blur or dot whose shape cannot be made out; from 3 d its shape
 * shows. Contrast is a separate question (stain, pigment).
 */
export function resolves(sizeUm, na) {
  const d = rayleigh(na);
  if (sizeUm < d) return 'no';
  if (sizeUm < 3 * d) return 'dot';
  return 'shape';
}
