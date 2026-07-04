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
site on a GitHub-hosted runner and rsyncs `dist/` to the server over SSH.
`scripts/deploy.sh` does the same thing by hand from a clone on the server.
