# ADR-004: Migrate Hosting from Digital Ocean to Vercel

**Date:** 2026-05-29
**Status:** Accepted

## Context

The site was previously hosted on a Digital Ocean droplet ($5-12/month) running Nginx to serve static files. With the migration to Next.js, we have the option to use Vercel, which provides:

- Native Next.js support (Vercel is the creator of Next.js)
- A free tier that is more than sufficient for a personal portfolio
- Automatic deployments on git push
- Built-in CDN, SSL, and image optimization

## Decision

Migrate hosting from the Digital Ocean droplet to **Vercel's free Hobby plan**.

## What Changes

| Aspect | Before (Digital Ocean) | After (Vercel) |
|--------|----------------------|----------------|
| **Cost** | ~$5-12/month | Free |
| **Deploy** | Manual: `scripts/deploy.sh` (build + rsync) | Automatic: push to GitHub |
| **SSL** | Manual certificate management | Automatic (Let's Encrypt) |
| **CDN** | None (single server) | Global edge network |
| **Image optimization** | Not available (used `unoptimized: true`) | Built-in via `next/image` |
| **Nginx** | Required for serving, SSL termination, routing | Not needed |
| **Custom domain** | Manual DNS config | Vercel dashboard + DNS |
| **Preview deploys** | Not available | Automatic per PR |

## Migration Steps

1. Push the repo to GitHub (if not already)
2. Sign up at [vercel.com](https://vercel.com) and import the GitHub repository
3. Vercel auto-detects Next.js and configures the build
4. Add custom domain `skybreak.app` in Vercel dashboard
5. Update DNS records to point to Vercel:
   - `A` record: `76.76.21.21`
   - `CNAME` for `www`: `cname.vercel-dns.com`
6. Remove the `output: 'export'` config (Vercel handles Next.js natively)
7. Optionally cancel the Digital Ocean droplet once DNS propagates

## What We Keep

- `nginx-conf/` remains in the repo as historical reference
- `scripts/deploy.sh` remains for anyone who wants to self-host
- The site works identically whether deployed to Vercel or a static server

## Consequences

- Monthly hosting cost drops from ~$5-12 to $0
- No server maintenance (no OS updates, no Nginx config, no SSL renewals)
- Every push to `main` auto-deploys in ~30 seconds
- PRs get preview URLs for testing before merge
- Can use `next/image` for automatic image optimization
- If Vercel's free tier ever becomes insufficient, can easily move back to self-hosting with `output: 'export'`
