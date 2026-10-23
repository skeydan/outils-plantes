// Water in plants: the formulas against the cited values and worked examples.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  solutePotential, concentrationFor, gravityPotential, waterPotential, airPotential, rhFor, surfaceTension,
  jurinHeight, radiusForHeight, laplacePressure, cellInBath, flowDirection, tensionAtHeight, symlog,
  toBar, toKPa, toAtm, toWaterColumn, compartments,
} from '../site/plant-water/js/physics.js';
import { readFileSync } from 'node:fs';
import { SOURCES } from '../site/plant-water/js/sources.js';

const near = (a, b, tol, msg) => assert.ok(Math.abs(a - b) <= tol, `${msg}: ${a} vs ${b}`);

test('surface tension: IAPWS R1-76(2014), Table 1', () => {
  near(surfaceTension(0.01) * 1000, 75.65, 0.01, '0.01 °C');
  near(surfaceTension(20) * 1000, 72.74, 0.01, '20 °C');
  near(surfaceTension(25) * 1000, 71.97, 0.01, '25 °C');
  near(surfaceTension(100) * 1000, 58.91, 0.01, '100 °C');
});

test("van 't Hoff: −1.0 MPa at 25 °C takes about 0.404 mol/L (Neufeld, answer 6)", () => {
  near(concentrationFor(-1.0, 25), 0.404, 0.002, 'concentration');
  near(solutePotential(0.404, 25), -1.0, 0.003, 'back again');
  near(solutePotential(0.1, 20, 2), 2 * solutePotential(0.1, 20), 1e-12, 'i = 2 doubles it');
  near(solutePotential(0, 20), 0, 1e-15, 'pure water');
});

test('air: −2.7 MPa at 98 % and −93.5 MPa at 50 % RH, 20 °C (Saupe); about −10 MPa at 93 % (Caupin 2012)', () => {
  near(airPotential(0.98, 20), -2.7, 0.05, '98 %');
  near(airPotential(0.5, 20), -93.5, 0.2, '50 %');
  near(airPotential(0.93, 20), -10, 0.3, '93 %');
  assert.equal(airPotential(1, 20), 0);
  assert.equal(airPotential(0, 20), -Infinity);
  near(rhFor(airPotential(0.62, 25), 25), 0.62, 1e-12, 'inverse');
});

test('a cell at −3.0 MPa keeps 98 % of the vapour pressure of pure water at 30 °C (Kramer & Boyer, Table 7.5)', () => {
  near(rhFor(-3.0, 30), 4.158 / 4.243, 0.002, 'relative vapour pressure');
});

test('capillary rise: h (m) ≈ 14.87 / r (µm) at 20 °C (Saupe, Table 1)', () => {
  for (const [r, hm] of [[10, 1.49], [40, 0.37], [100, 0.15]]) near(jurinHeight(r * 1e-6), hm, 0.006, `${r} µm`);
  near(jurinHeight(10e-6, { thetaDeg: 48 }), 1.49 * Math.cos((48 * Math.PI) / 180), 0.01, 'contact angle 48°');
  near(radiusForHeight(115.55) * 1e6, 0.129, 0.002, 'radius for Hyperion, µm');
});

test('Young–Laplace: 0.1 MPa across a meniscus of about 1.4 µm radius (Caupin 2012)', () => {
  near(laplacePressure(1.4e-6), 0.104, 0.002, '1.4 µm');
  near(laplacePressure(10e-9), 14.5, 0.1, '10 nm pore radius (20 nm pore, Choat 2003 Eq. 1)');
});

test('the Kramer & Boyer cell: Ψs −0.9 and Ψp +0.3 give Ψ −0.6 MPa', () => {
  near(waterPotential({ s: -0.9, p: 0.3 }), -0.6, 1e-12, 'sum');
  const c = cellInBath(-0.9, -0.6);
  near(c.psiP, 0.3, 1e-12, 'turgor in a −0.6 MPa bath');
  assert.equal(c.plasmolysed, false);
  const d = cellInBath(-0.9, -1.2);
  assert.equal(d.plasmolysed, true);
  assert.equal(d.psiP, 0);
  near(d.volume, 0.75, 1e-12, 'protoplast shrinks to 3/4');
  assert.equal(flowDirection(-0.2, -1.5), 1);
  assert.equal(flowDirection(-1.5, -0.2), -1);
});

test('gravity: about 0.01 MPa per metre; 115.55 m needs about 1.13 MPa', () => {
  near(gravityPotential(1), 0.00979, 0.00001, 'one metre');
  near(gravityPotential(115.55), 1.13, 0.005, 'Hyperion');
  near(tensionAtHeight(100, { psiSoil: 0, frictionPerM: 0.02 }), -2.98, 0.01, '100 m with the teaching friction');
});

test('units', () => {
  assert.equal(toBar(-1.5), -15);
  assert.equal(toKPa(-0.033), -33);
  near(toAtm(1), 9.87, 0.01, 'atm');
  near(toWaterColumn(1), 102.16, 0.01, 'metres of water');
  assert.equal(symlog(0), 0);
  near(symlog(-100), -4, 0.001, 'symlog');
});

test('compartments: the Kramer & Boyer cell at equilibrium with its apoplast', () => {
  const c = compartments({ psiS: -0.9, turgor0: 0.3, psiOut: -0.6, psiSWall: -0.04 });
  assert.equal(c.flow, 0);
  near(c.start, -0.6, 1e-12, 'cell Ψ');
  for (const k of ['vacuole', 'cytoplasm']) {
    near(c[k].s, -0.9, 1e-12, `${k} Ψs`);
    near(c[k].p, 0.3, 1e-12, `${k} turgor`);
    assert.equal(c[k].m, 0, `${k} Ψm ignored`);
    near(c[k].psi, -0.6, 1e-12, `${k} Ψ`);
  }
  near(c.wall.s + c.wall.pm, -0.6, 1e-12, 'wall Ψ = Ψs + (Ψp + Ψm)');
  near(c.wall.pm, -0.56, 1e-12, 'wall tension (Nonami & Boyer solutes)');
});

test('compartments: a wetter apoplast fills the cell, a strong solution plasmolyses it', () => {
  const wet = compartments({ psiS: -0.9, turgor0: 0.3, psiOut: -0.15, psiSWall: -0.04 });
  assert.equal(wet.flow, 1, 'water enters');
  near(wet.vacuole.p, 0.75, 1e-12, 'turgor rises');
  const bath = solutePotential(0.5, 20);
  near(bath, -1.22, 0.005, '0.5 mol/L sucrose at 20 °C');
  const salt = compartments({ psiS: -0.9, turgor0: 0.3, psiOut: bath, psiSWall: bath });
  assert.equal(salt.flow, -1, 'water leaves');
  assert.equal(salt.plasmolysed, true);
  assert.equal(salt.vacuole.p, 0);
  near(salt.vacuole.s, bath, 1e-12, 'sap concentrates to the bath');
  near(salt.volume, 0.9 / 1.2178, 0.003, 'protoplast volume');
});

test('xylem sap of 20 to 50 mOsm/kg is about −0.05 to −0.12 MPa (our conversion, van ’t Hoff at 20 °C)', () => {
  near(solutePotential(0.02, 20), -0.05, 0.002, '20 mOsm/kg');
  near(solutePotential(0.05, 20), -0.12, 0.003, '50 mOsm/kg');
});

test('every source of the water tab is cited on the page, and every citation has a source', () => {
  const app = readFileSync(new URL('../site/plant-water/js/app.js', import.meta.url), 'utf8');
  const cited = new Set([...app.matchAll(/cite\(([^)]*)\)/g)].flatMap((m) => [...m[1].matchAll(/'([a-z0-9-]+)'/g)].map((x) => x[1])));
  for (const m of app.matchAll(/src: \[([^\]]*)\]/g)) for (const x of m[1].matchAll(/'([a-z0-9-]+)'/g)) cited.add(x[1]);
  for (const m of app.matchAll(/\['(schmidt|kb3|nonami|kb2|maurel1997|openstax)'[^\]]*\]/g)) for (const x of m[0].matchAll(/'([a-z0-9-]+)'/g)) cited.add(x[1]);
  const ids = new Set(SOURCES.map((s) => s.id));
  for (const s of SOURCES) {
    assert.ok(cited.has(s.id), `${s.id} listed but never cited`);
    assert.match(s.url, /^https?:\/\//, s.id);
  }
  for (const id of cited) assert.ok(ids.has(id), `cited ${id} has no source`);
});
