#!/usr/bin/env bash
# Build the site and publish dist/ to the nginx web root.
# Used by .github/workflows/deploy.yml on the self-hosted runner,
# but safe to run by hand from the repo root on the droplet.
set -euo pipefail

WEB_ROOT="${WEB_ROOT:-/var/www/beckettdunlavy.com}"

cd "$(dirname "$0")/.."

echo "==> Installing dependencies"
npm ci

echo "==> Building"
npm run build

echo "==> Publishing to ${WEB_ROOT}"
sudo mkdir -p "$WEB_ROOT"
sudo rsync -a --delete dist/ "$WEB_ROOT"/

echo "==> Deployed $(git rev-parse --short HEAD) to ${WEB_ROOT}"
