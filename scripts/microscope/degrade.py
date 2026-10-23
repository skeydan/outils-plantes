"""Build the images of the simulated-microscope tab from real photographs.

    python3 -I scripts/microscope/degrade.py <manifest.json> <originals dir> <output dir>

For each specimen of the manifest (crop box in source pixels, µm per source
pixel, NA of the objective that took the photo if known) and each simulated
objective it allows:
  1. crop the photograph (burned-in labels and scale bars are left out);
  2. convert sRGB to linear light (blurring is a sum of light intensities);
  3. pad by reflection, FFT, multiply by OTF_sim / OTF_src (optics.py);
  4. back to sRGB, resample to a pixel of lambda/(8 NA_sim), half the largest
     pixel that keeps everything the simulated objective passes, and save as JPEG;
  5. measure how far the source spectrum rises above its noise floor and
     report it, so a source that is not sharp enough is caught.
Writes <output dir>/build.json with what was done; nothing else is run.
"""
import json
import os
import sys

import numpy as np
from PIL import Image

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import optics  # noqa: E402

OBJECTIVES = {'4x': 0.10, '10x': 0.25, '40x': 0.65}  # usual achromat apertures (MicroscopyU, Table 1)
SRC_MAX = 2400  # longest side of the stored "photo as taken" view


def srgb_to_linear(a):
    a = a / 255.0
    return np.where(a <= 0.04045, a / 12.92, ((a + 0.055) / 1.055) ** 2.4)


def linear_to_srgb(a):
    a = np.clip(a, 0.0, 1.0)
    return np.where(a <= 0.0031308, a * 12.92, 1.055 * a ** (1 / 2.4) - 0.055) * 255.0


def freq_grid(h, w, px_um):
    fy = np.fft.fftfreq(h, d=px_um)
    fx = np.fft.fftfreq(w, d=px_um)
    return np.sqrt(fy[:, None] ** 2 + fx[None, :] ** 2)


def blur(lin, px_um, na_sim, na_src):
    h, w, _ = lin.shape
    pad = int(np.ceil(6 * optics.rayleigh(na_sim) / px_um)) + 8
    pad = min(pad, h - 1, w - 1)
    big = np.pad(lin, ((pad, pad), (pad, pad), (0, 0)), mode='reflect')
    H = optics.transfer(freq_grid(*big.shape[:2], px_um), na_sim, na_src)
    out = np.empty_like(big)
    for c in range(3):
        out[..., c] = np.real(np.fft.ifft2(np.fft.fft2(big[..., c]) * H))
    return out[pad:pad + h, pad:pad + w]


def spectrum_reach(lin, px_um):
    """Highest frequency (cycles/µm) where the radial power spectrum of the
    luminance stays clearly above the floor measured near Nyquist."""
    y = lin @ np.array([0.2126, 0.7152, 0.0722])
    y = y - y.mean()
    h, w = y.shape
    win = np.outer(np.hanning(h), np.hanning(w))
    p = np.abs(np.fft.fft2(y * win)) ** 2
    nu = freq_grid(h, w, px_um)
    nyq = 0.5 / px_um
    bins = np.linspace(0, nyq, 129)
    idx = np.digitize(nu.ravel(), bins) - 1
    ok = (idx >= 0) & (idx < 128)
    prof = np.bincount(idx[ok], weights=p.ravel()[ok], minlength=128) / np.maximum(np.bincount(idx[ok], minlength=128), 1)
    centres = 0.5 * (bins[1:] + bins[:-1])
    floor = np.median(prof[-12:])
    above = np.nonzero(prof > 10 * floor)[0]
    return float(centres[above[-1]]) if len(above) else 0.0, float(nyq)


def save_jpeg(arr, path, quality=86):
    Image.fromarray(np.round(arr).astype(np.uint8), 'RGB').save(path, 'JPEG', quality=quality, optimize=True, progressive=True)


def resize_linear(lin, scale):
    h, w, _ = lin.shape
    nw, nh = max(1, round(w * scale)), max(1, round(h * scale))
    chans = [np.asarray(Image.fromarray(lin[..., c].astype(np.float32), 'F').resize((nw, nh), Image.LANCZOS)) for c in range(3)]
    return np.stack(chans, axis=-1)


def main(manifest_path, originals, outdir):
    with open(manifest_path, encoding='utf-8') as f:
        manifest = json.load(f)
    os.makedirs(outdir, exist_ok=True)
    report = []
    for sp in manifest['specimens']:
        img = Image.open(os.path.join(originals, sp['file']))
        img = img.convert('RGB')
        x0, y0, x1, y1 = sp['crop']
        a = np.asarray(img.crop((x0, y0, x1, y1)), dtype=np.float64)
        lin = srgb_to_linear(a)
        px = sp['um_per_px']
        reach, nyq = spectrum_reach(lin, px)
        entry = {'id': sp['id'], 'um_per_px': px, 'size_px': [x1 - x0, y1 - y0],
                 'size_um': [round((x1 - x0) * px, 1), round((y1 - y0) * px, 1)],
                 'spectrum_reach_cyc_per_um': round(reach, 3), 'nyquist_cyc_per_um': round(nyq, 3), 'views': {}}
        # The photo as taken (downscaled only if very large).
        s = min(1.0, SRC_MAX / max(lin.shape[:2]))
        src = resize_linear(lin, s) if s < 1 else lin
        name = f"{sp['id']}-photo.jpg"
        save_jpeg(linear_to_srgb(src), os.path.join(outdir, name))
        entry['views']['photo'] = {'file': name, 'um_per_px': round(px / s, 5), 'w': src.shape[1], 'h': src.shape[0]}
        for obj in sp['objectives']:
            na = OBJECTIVES[obj]
            cut = 2 * na / optics.LAMBDA_UM
            if px > optics.nyquist_pixel(na) * 1.0001:
                raise SystemExit(f"{sp['id']} {obj}: source pixel {px} µm is too coarse for NA {na}")
            if reach < cut:
                print(f"warning: {sp['id']} {obj}: source spectrum reaches {reach:.2f} cyc/µm, objective passes {cut:.2f}", file=sys.stderr)
            out = blur(lin, px, na, sp.get('na_src'))
            target = optics.nyquist_pixel(na) / 2  # oversampled twice, so the browser's interpolation adds little
            scale = min(1.0, px / target)
            if scale < 1:
                out = resize_linear(out, scale)
            name = f"{sp['id']}-{obj}.jpg"
            save_jpeg(linear_to_srgb(out), os.path.join(outdir, name))
            entry['views'][obj] = {'file': name, 'um_per_px': round(px / scale, 5), 'w': out.shape[1], 'h': out.shape[0],
                                   'source_reaches_cutoff': bool(reach >= cut), 'cutoff_cyc_per_um': round(cut, 3)}
        report.append(entry)
        print(json.dumps(entry))
    with open(os.path.join(outdir, 'build.json'), 'w', encoding='utf-8') as f:
        json.dump(report, f, indent=1)


if __name__ == '__main__':
    if len(sys.argv) != 4:
        raise SystemExit(__doc__)
    main(*sys.argv[1:])
