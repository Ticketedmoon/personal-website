# ADR-002: Static Export Deployment Strategy

**Date:** 2026-05-29
**Status:** Accepted

## Context

The site is hosted on a Digital Ocean droplet running Nginx. The previous Angular build produced static files in `dist/personal-website/` which were manually copied to the server. We need to decide how Next.js builds are deployed.

## Decision

Use Next.js **static export** (`output: 'export'` in `next.config.js`). The build outputs to the `out/` directory. A deploy script (`scripts/deploy.sh`) automates the build and transfer via `rsync`.

## Configuration

```js
// next.config.js
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
};
```

Key points:
- `output: 'export'` makes `next build` produce a fully static site in `out/`
- `images: { unoptimized: true }` is required because `next/image` optimization needs a server, which static export does not have
- No `basePath` is needed since the site is served at the domain root
- Standard `<img>` tags are used instead of `next/image` for simplicity

## Deploy Flow

```
npm run build    -->  out/          (static HTML/CSS/JS)
                       |
                  rsync --delete
                       |
                       v
        /var/www/sites/skybreak.app/html/personal-website/
```

The deploy script:
1. Runs `npm run build` (which calls `next build`)
2. Uses `rsync` with `--delete` to sync `out/` to the server
3. Reloads Nginx on the server to clear any cached responses

## Alternatives Considered

| Option | Rejected Because |
|--------|-----------------|
| Vercel/Netlify hosting | Adds vendor dependency, the droplet is already paid for and running |
| Docker container | Over-engineered for static files, adds maintenance overhead |
| GitHub Actions CI/CD | Good future enhancement, but manual deploy is fine for a personal site |
| `scp` instead of `rsync` | `rsync` is faster for incremental deploys (only transfers changed files) |

## Consequences

- Deploy is a single command: `npm run deploy`
- The Nginx config does not need to change (same document root, same setup)
- No server-side rendering, so no Node.js process needed on the droplet
- Build output is self-contained: no external dependencies at runtime
