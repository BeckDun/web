# beckettdunlavy.com

Personal portfolio site — Vite + React + TypeScript + Tailwind.

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build   # type-checks and outputs static files to dist/
```

## Deploy

Merges to `main` trigger `.github/workflows/deploy.yml`, which builds the
site on the self-hosted runner and publishes `dist/` to the web root via
`scripts/deploy.sh`.
