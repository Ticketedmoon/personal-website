# Deployment Guide

The site deploys automatically to **Vercel** on every push to `main`.

---

## Vercel (Primary)

### Initial Setup (One-Time)

1. Push the repo to GitHub
2. Go to [vercel.com](https://vercel.com) and sign in with GitHub
3. Click "Import Project" and select the `personal-website` repository
4. Vercel auto-detects Next.js, no config needed. Click "Deploy"
5. Add custom domain in Vercel Dashboard > Settings > Domains:
   - Add `skybreak.app`
   - Add `www.skybreak.app`
6. Update DNS: switch nameservers at your domain registrar to Vercel:
   - `ns1.vercel-dns.com`
   - `ns2.vercel-dns.com`

### Deploying Changes

```bash
git add .
git commit -m "your changes"
git push origin main
```

That's it. Vercel auto-builds and deploys in ~30 seconds.

### Preview Deploys

Every pull request gets a unique preview URL automatically. Check PR comments for the link.

---

## Self-Hosted (Alternative)

If you prefer to self-host on a server with Nginx, add `output: 'export'` back to `next.config.js`:

```js
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
};
```

Then build and transfer:

```bash
npm run build
rsync -avz --delete out/ root@skybreak.app:/var/www/sites/skybreak.app/html/personal-website/
ssh root@skybreak.app "sudo systemctl reload nginx"
```

Or use the deploy script: `bash scripts/deploy.sh`

---

## Nginx Configuration (Reference)

The Nginx config files are stored in the repo under `nginx-conf/` for historical reference:

| File | Purpose |
|------|---------|
| `nginx-conf/nginx.conf` | Main Nginx config |
| `nginx-conf/sites-available/skybreak.app` | Site-specific server block |

---

## Troubleshooting

| Problem | Solution |
|---------|----------|
| Build fails on Vercel | Check build logs at vercel.com dashboard |
| Custom domain not working | Verify DNS records have propagated (`dig skybreak.app`) |
| Site shows old content | Clear browser cache, or check Vercel dashboard for deploy status |
| Want to rollback | Click "Redeploy" on a previous deployment in Vercel dashboard |
