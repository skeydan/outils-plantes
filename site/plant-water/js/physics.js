// Water in plants: the formulas behind the explainer. Pure functions, SI
// inside, results in MPa (1 MPa = 10 bar = 1000 kPa) unless said otherwise.
// Every formula is cited on the page; the unit tests check them against the
// cited worked examples.

export const R = 8.314; // gas constant, J mol⁻¹ K⁻¹ (= L kPa mol⁻¹ K⁻¹)
export const G = 9.80665; // standard gravity, m s⁻²
export const RHO_W = 998.2; // density of liquid water at 20 °C, kg m⁻³
export const VW = 18.05e-6; // partial molar volume of liquid water at 20 °C, m³ mol⁻¹

export const kelvin = (c) => c + 273.15;

/**
 * Solute (osmotic) potential from the van 't Hoff relation, Ψs = −i·C·R·T,
 * for dilute, ideal solutions. c in mol per litre, tC in °C, i the number of
 * particles per formula unit (1 for sucrose, about 2 for NaCl). MPa.
 */
export function solutePotential(c, tC, i = 1) {
  // mol/L × J/(mol K) × K = kJ/L... ×1000 L/m³ = J/m³ = Pa; /1e6 -> MPa.
  return (-i * c * 1000 * R * kelvin(tC)) / 1e6;
}

/** Concentration (mol/L) that gives a solute potential (MPa) at tC. */
export function concentrationFor(psiS, tC, i = 1) {
  return (-psiS * 1e6) / (i * 1000 * R * kelvin(tC));
}

/** Gravitational potential Ψg = ρw·g·h (MPa) for a height h in metres above the reference. */
export function gravityPotential(h, rho = RHO_W) {
  return (rho * G * h) / 1e6;
}

/** Total water potential: the sum of the components (MPa). Missing ones count as 0. */
export function waterPotential({ s = 0, p = 0, m = 0, g = 0 } = {}) {
  return s + p + m + g;
}

/**
 * Water potential of air (or of the vapour in equilibrium with a sample) at
 * relative humidity rh (0–1] and tC: Ψ = (R·T / V̄w)·ln(RH). MPa.
 */
export function airPotential(rh, tC, vw = VW) {
  if (!(rh > 0)) return -Infinity;
  return ((R * kelvin(tC)) / vw) * Math.log(Math.min(rh, 1)) / 1e6;
}

/** Relative humidity (0–1) in equilibrium with a water potential (MPa). */
export function rhFor(psi, tC, vw = VW) {
  return Math.exp((psi * 1e6 * vw) / (R * kelvin(tC)));
}

/**
 * Surface tension of water against its vapour, IAPWS (2014) release:
 * γ = B·τ^μ·(1 + b·τ), τ = 1 − T/Tc. N m⁻¹. Valid from the triple point to Tc.
 */
export function surfaceTension(tC) {
  const Tc = 647.096, B = 0.2358, b = -0.625, mu = 1.256;
  const tau = 1 - kelvin(tC) / Tc;
  return B * tau ** mu * (1 + b * tau);
}

/**
 * Jurin's law: height (m) of capillary rise in a tube of radius r (m),
 * h = 2·γ·cosθ / (ρ·g·r). theta in degrees (0 = perfectly wetting).
 */
export function jurinHeight(r, { tC = 20, thetaDeg = 0, rho = RHO_W, gamma = surfaceTension(tC) } = {}) {
  return (2 * gamma * Math.cos((thetaDeg * Math.PI) / 180)) / (rho * G * r);
}

/** Radius (m) needed for capillarity alone to lift water to height h (m). */
export function radiusForHeight(h, opts = {}) {
  return jurinHeight(1, opts) / h;
}

/**
 * Pressure difference a curved meniscus can hold (Young–Laplace for a
 * hemispherical meniscus): ΔP = 2·γ·cosθ / r, in MPa. This is the tension a
 * wetted pore of radius r can sustain before air is pulled through it.
 */
export function laplacePressure(r, { tC = 20, thetaDeg = 0, gamma = surfaceTension(tC) } = {}) {
  return (2 * gamma * Math.cos((thetaDeg * Math.PI) / 180)) / r / 1e6;
}

/**
 * A cell with solute potential psiS0 (MPa, its value at full turgor volume)
 * placed in a bath of water potential psiOut (MPa, ≤ 0), at equilibrium.
 * Simplification: the cell volume is taken as constant while it has turgor
 * (rigid wall); below zero turgor the protoplast shrinks like an ideal
 * osmometer (Boyle–van 't Hoff: Ψs·V constant). Returns {psiP, psiS, volume}
 * with volume relative to the turgid volume.
 */
export function cellInBath(psiS0, psiOut) {
  if (psiOut >= psiS0) return { psiP: psiOut - psiS0, psiS: psiS0, volume: 1, plasmolysed: false };
  return { psiP: 0, psiS: psiOut, volume: psiS0 / psiOut, plasmolysed: true };
}

/** Direction of spontaneous water movement between A and B: 1 A→B, −1 B→A, 0 none. */
export function flowDirection(psiA, psiB, eps = 1e-9) {
  if (psiA - psiB > eps) return 1;
  if (psiB - psiA > eps) return -1;
  return 0;
}

/**
 * Highest water potential the top of a plant of height h (m) can have for
 * water to rise from a soil at psiSoil (MPa): the soil value, minus the
 * weight of the column (ρgh), minus a friction loss per metre (MPa m⁻¹,
 * 0 = water at rest; the page cites a teaching estimate of 0.02 for fast
 * flow). MPa.
 */
export function tensionAtHeight(h, { psiSoil = 0, frictionPerM = 0 } = {}) {
  return psiSoil - gravityPotential(h) - frictionPerM * h;
}

/** Symmetric log transform used to draw potentials from 0 to −1000 MPa on one axis. */
export const symlog = (v, c = 0.01) => Math.sign(v) * Math.log10(1 + Math.abs(v) / c);

/** MPa to other units. */
export const toBar = (mpa) => mpa * 10;
export const toKPa = (mpa) => mpa * 1000;
export const toAtm = (mpa) => (mpa * 1e6) / 101325;
/** Height of a water column with the same pressure (m). */
export const toWaterColumn = (mpa, rho = RHO_W) => (mpa * 1e6) / (rho * G);

/**
 * One living cell and the apoplast around it (cell wall, intercellular
 * spaces, xylem). The vacuole and the cytoplasm share one solute potential
 * and one turgor: the membranes inside the cell cannot hold a pressure
 * difference, and osmotic potentials are uniform through the cell (Kramer &
 * Boyer ch. 3). Ψm is ignored in the protoplast (high water content, no
 * air–water interface). In the wall, pressure and matric parts are counted
 * together (mostly tension behind the menisci of the wall pores).
 *
 * psiS: solute potential of the cell sap at the start (MPa); turgor0: its
 * turgor at the start (MPa, ≥ 0); psiOut: water potential of the apoplast
 * (MPa); psiSWall: solute potential of the wall solution (MPa).
 * Returns the start, the direction of the first water movement (1: into the
 * cell, −1: out of it, 0: none) and the equilibrium of each compartment, with
 * the rigid-wall simplification of cellInBath.
 */
export function compartments({ psiS, turgor0 = 0, psiOut, psiSWall = 0 }) {
  const start = psiS + turgor0;
  const flow = flowDirection(psiOut, start);
  const eq = cellInBath(psiS, psiOut);
  const proto = { s: eq.psiS, p: eq.psiP, m: 0, psi: eq.psiS + eq.psiP };
  return {
    start,
    flow,
    plasmolysed: eq.plasmolysed,
    volume: eq.volume,
    vacuole: { ...proto },
    cytoplasm: { ...proto },
    wall: { s: psiSWall, pm: psiOut - psiSWall, psi: psiOut },
  };
}
