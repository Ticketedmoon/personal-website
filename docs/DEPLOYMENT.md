# Deployment Guide

Step-by-step guide to build and deploy the personal website (Angular app) to a Digital Ocean droplet running Nginx.

---

## Prerequisites

- **Local machine:** Node.js <= 16.16.0, npm
- **Server:** A Digital Ocean droplet with Nginx installed and SSL certificates configured
- **Access:** SSH access to the droplet (e.g., `root@46.101.13.49` or `root@skybreak.app`)

---

## Step 1: Install Dependencies

From the project root, install all npm packages:

```bash
npm install
```

## Step 2: Build for Production

Run the production build. This compiles, minifies, and bundles the Angular app with AOT compilation:

```bash
npm run build-prod
```

This generates the deployable static files in:

```
dist/personal-website/
```

The output includes `index.html`, JavaScript bundles, CSS, and assets, all ready to be served by a web server.

## Step 3: Transfer Build Files to the Server

Use `scp` to copy the build output to your Digital Ocean droplet. The Nginx config serves files from `/var/www/sites/skybreak.app/html/personal-website/`.

```bash
scp -r dist/personal-website/* root@skybreak.app:/var/www/sites/skybreak.app/html/personal-website/
```

> **Tip:** If you prefer `rsync` for incremental transfers (faster on repeat deploys):
>
> ```bash
> rsync -avz --delete dist/personal-website/ root@skybreak.app:/var/www/sites/skybreak.app/html/personal-website/
> ```

## Step 4: Verify Nginx Configuration (First-Time Only)

SSH into the droplet and confirm Nginx is configured correctly:

```bash
ssh root@skybreak.app
```

Check that the site config is symlinked into `sites-enabled`:

```bash
ls -l /etc/nginx/sites-enabled/
# Should include a link to the skybreak.app config
```

If not already linked:

```bash
sudo ln -s /etc/nginx/sites-available/skybreak.app /etc/nginx/sites-enabled/
```

Test the Nginx configuration for syntax errors:

```bash
sudo nginx -t
```

## Step 5: Reload Nginx

After transferring new files, reload Nginx to clear any cached responses:

```bash
sudo systemctl reload nginx
```

## Step 6: Verify the Deployment

Open your browser and visit:

- **https://skybreak.app**
- **https://www.skybreak.app**

Confirm the site loads correctly and the content is up to date.

---

## Quick Reference (Cheat Sheet)

Full deploy from scratch in four commands:

```bash
npm install
npm run build-prod
scp -r dist/personal-website/* root@skybreak.app:/var/www/sites/skybreak.app/html/personal-website/
ssh root@skybreak.app "sudo systemctl reload nginx"
```

---

## Nginx Configuration

The Nginx config files are stored in the repo under `nginx-conf/` for reference:

| File | Purpose |
|------|---------|
| `nginx-conf/nginx.conf` | Main Nginx config (gzip, logging, worker settings) |
| `nginx-conf/sites-available/skybreak.app` | Site-specific server block (SSL, root path, proxy rules) |

**Key settings from the site config:**

- **Document root:** `/var/www/sites/skybreak.app/html/personal-website/`
- **SSL:** Certificates at `/var/www/ssl/skybreak.app/`
- **HTTP to HTTPS:** All HTTP traffic on port 80 is redirected to HTTPS
- **Proxy:** Requests to `/sao/` are proxied to `https://localhost:8080/`

---

## Troubleshooting

| Problem | Solution |
|---------|----------|
| `ng build` fails | Ensure Node.js version is <= 16.16.0 (`node -v`) |
| Permission denied on scp | Check SSH key is added, or use `scp -i ~/.ssh/your_key` |
| Site shows old content | Clear browser cache, or hard-reload with `Ctrl+Shift+R` |
| 502 Bad Gateway | Check Nginx is running: `sudo systemctl status nginx` |
| SSL certificate errors | Verify certs exist at `/var/www/ssl/skybreak.app/` |
| Nginx config test fails | Run `sudo nginx -t` and fix any reported syntax errors |
