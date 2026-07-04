#!/usr/bin/env bash
# Manual deploy: build the site and publish dist/ to the nginx web root.
# Run from a clone on the droplet if you ever need to deploy by hand —
# normal deploys happen via GitHub Actions (.github/workflows/deploy.yml).
set -euo pipefail

WEB_ROOT="${WEB_ROOT:-/var/www/beckettdunlavy.com}"

cd "$(dirname "$0")/.."

echo "==> Installing dependencies"
npm ci

echo "==> Building"
npm run build

echo "==> Publishing to ${WEB_ROOT}"
mkdir -p "$WEB_ROOT"
rsync -a --delete dist/ "$WEB_ROOT"/

echo "==> Deployed $(git rev-parse --short HEAD) to ${WEB_ROOT}"
