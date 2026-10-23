"""Checks of optics.py (run: python3 -I scripts/microscope/check_optics.py).

1. The OTF formula and the Airy pattern are a Fourier pair: the radial
   (Hankel) transform of the OTF gives the Airy intensity.
2. The first dark ring of the Airy pattern is at 0.61 lambda / NA.
3. The filter OTF_sim / OTF_src never exceeds 1.
4. Blurring a point with degrade.blur gives the Airy pattern.
"""
import os
import sys

import numpy as np

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import optics  # noqa: E402
import degrade  # noqa: E402


def j0(x):
    t = np.linspace(0.0, np.pi, 2001)
    return np.trapezoid(np.cos(np.atleast_1d(x)[:, None] * np.sin(t)[None, :]), t, axis=1) / np.pi


def main():
    na = 0.65
    nu = np.linspace(0, 2 * na / optics.LAMBDA_UM, 4000)
    H = optics.otf(nu, na)
    p0 = np.trapezoid(H * 2 * np.pi * nu, nu)
    for r in [0.1, 0.2, 0.3, 0.5, 0.7]:
        p = np.trapezoid(H * j0(2 * np.pi * nu * r) * 2 * np.pi * nu, nu) / p0
        a = optics.airy(r, na)[0]
        assert abs(p - a) < 1e-4, (r, p, a)
    r = np.linspace(0.3, 0.7, 4001)
    zero = r[np.argmin(optics.airy(r, na))]
    assert abs(zero - optics.rayleigh(na)) < 0.002, zero
    for na_sim, na_src in [(0.1, 0.25), (0.25, 0.65), (0.65, 0.95), (0.65, 1.3)]:
        nu = np.linspace(0, 3, 3001)
        assert optics.transfer(nu, na_sim, na_src).max() <= 1 + 1e-12
    # A point blurred by degrade.blur matches the Airy pattern.
    px = 0.05
    n = 257
    img = np.zeros((n, n, 3))
    img[n // 2, n // 2, :] = 1.0
    out = degrade.blur(img, px, na, None)[..., 1]
    out /= out[n // 2, n // 2]
    rr = np.arange(0, 30) * px
    prof = out[n // 2, n // 2:n // 2 + 30]
    err = np.max(np.abs(prof - optics.airy(rr, na)))
    assert err < 0.02, err
    print('optics checks passed; point blur vs Airy max error', f'{float(err):.2e}')


if __name__ == '__main__':
    main()
