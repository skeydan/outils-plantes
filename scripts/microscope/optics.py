"""Diffraction-limited optics used by the microscope simulator (offline step).

Incoherent imaging with a circular pupil: the optical transfer function
(OTF) of an aberration-free objective of numerical aperture NA, at the
wavelength lam (µm), is

    OTF(nu) = (2/pi) * (acos(s) - s*sqrt(1 - s^2)),  s = nu / nu_c,  nu_c = 2 NA / lam

for nu < nu_c and 0 beyond (nu in cycles per µm): Formula 4 and the cut-off
f(c) = 2NA/lambda of Nikon MicroscopyU, "Modulation transfer function". The
OTF is the Fourier transform of the point spread function, here the Airy
pattern [2 J1(v)/v]^2, v = 2 pi NA r / lam (checked numerically in
scripts/microscope/check_optics.py). Multiplying an image spectrum by the OTF
is the same as convolving the image with the Airy pattern.

A source photograph already went through its own objective (NA_src). To end
with the transfer function of the simulated objective (NA_sim < NA_src) we
multiply by OTF_sim / OTF_src, which is never above 1 (the OTF of a circular
pupil decreases with s), so nothing is sharpened or amplified.
"""
import numpy as np

LAMBDA_UM = 0.55  # green light, where the eye is most sensitive


def otf(nu, na, lam=LAMBDA_UM):
    """Incoherent diffraction-limited OTF of a circular pupil; nu in cycles/µm."""
    s = np.clip(np.asarray(nu, dtype=float) / (2.0 * na / lam), 0.0, 1.0)
    return (2.0 / np.pi) * (np.arccos(s) - s * np.sqrt(1.0 - s * s))


def transfer(nu, na_sim, na_src=None, lam=LAMBDA_UM):
    """Filter that turns an image taken at na_src into one taken at na_sim."""
    h = otf(nu, na_sim, lam)
    if na_src is None:
        return h
    if na_src <= na_sim:
        raise ValueError('the source must have a larger NA than the simulated objective')
    return np.where(h > 0, h / np.maximum(otf(nu, na_src, lam), 1e-12), 0.0)


def rayleigh(na, lam=LAMBDA_UM):
    """Two-point resolution (Rayleigh), µm."""
    return 0.61 * lam / na


def abbe(na, lam=LAMBDA_UM):
    """Abbe limit with a condenser matched to the objective, µm."""
    return lam / (2.0 * na)


def nyquist_pixel(na, lam=LAMBDA_UM):
    """Largest pixel (µm) that still samples everything the objective passes."""
    return lam / (4.0 * na)


def bessel_j1(x):
    """J1 by its integral form (no SciPy): J1(x) = (1/pi) ∫0^pi cos(t - x sin t) dt."""
    t = np.linspace(0.0, np.pi, 2001)
    x = np.atleast_1d(np.asarray(x, dtype=float))
    vals = np.cos(t[None, :] - x[:, None] * np.sin(t)[None, :])
    return np.trapezoid(vals, t, axis=1) / np.pi


def airy(r, na, lam=LAMBDA_UM):
    """Normalised Airy intensity at radius r (µm)."""
    v = 2.0 * np.pi * na * np.atleast_1d(np.asarray(r, dtype=float)) / lam
    out = np.ones_like(v)
    nz = v > 1e-9
    out[nz] = (2.0 * bessel_j1(v[nz]) / v[nz]) ** 2
    return out
