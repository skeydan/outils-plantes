"""Download the original photographs named in manifest.json and check them.

    python3 -I scripts/microscope/fetch.py scripts/microscope/manifest.json <empty dir>

Each file is fetched from its "original" URL into the given directory and
its SHA-256 compared with the manifest (so the images in site/microscope/img
can be rebuilt from exactly the same files). The files are only read as
images afterwards; nothing in them is run. The originals are not kept in the
repository.
"""
import hashlib
import json
import os
import sys
import urllib.request

UA = 'outils-plantes-microscope/1.0 (static teaching site; rebuilds images from Wikimedia Commons)'


def main(manifest_path, outdir):
    with open(manifest_path, encoding='utf-8') as f:
        manifest = json.load(f)
    os.makedirs(outdir, exist_ok=True)
    bad = 0
    for sp in manifest['specimens']:
        path = os.path.join(outdir, sp['file'])
        if not os.path.exists(path):
            req = urllib.request.Request(sp['photo']['original'], headers={'User-Agent': UA})
            with urllib.request.urlopen(req, timeout=60) as r, open(path, 'wb') as out:
                out.write(r.read())
        digest = hashlib.sha256(open(path, 'rb').read()).hexdigest()
        ok = digest == sp['photo'].get('sha256')
        bad += not ok
        print(('ok  ' if ok else 'DIFF'), sp['file'], digest)
    if bad:
        raise SystemExit(f'{bad} file(s) differ from the manifest')


if __name__ == '__main__':
    if len(sys.argv) != 3:
        raise SystemExit(__doc__)
    main(*sys.argv[1:])
