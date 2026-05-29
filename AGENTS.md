# AGENTS.md

## Project Overview

This is **personal-website** (skybreak.app), an Angular 8 single-page application.
It is a static portfolio site built with Angular CLI, served via Nginx on a Digital Ocean droplet.

## Tech Stack

- **Framework:** Angular 8 (TypeScript)
- **Build:** Angular CLI (`@angular-devkit/build-angular`)
- **Styling:** CSS with Materialize CSS, Angular Material 7
- **Web Server:** Nginx (config stored in `nginx-conf/`)
- **Hosting:** Digital Ocean droplet, served at `skybreak.app`

## Project Structure

```
src/
  app/
    app.component.*          # Root component
    app.module.ts            # Root module
    components/
      about-me-section/      # About me content
      favourite-technologies/ # Tech stack showcase
      footer-information/    # Footer with contact links (gmail, twitter, steam)
      introduction-image/    # Hero/landing section
      my-protocol-for-life/  # Life rules section (has background-animation.css)
      navigation-menu/       # Top nav bar
      social-media-project-links/ # Social links (github, linkedin, youtube)
      work-experience-section/    # Work history
  assets/
    fonts/                   # Lato-Light.ttf, PoiretOne-Regular.ttf
    general-images/          # Hero images, icons, profile photos
    links-images/            # Social media icons (github, gmail, linkedin, etc.)
    technology-section-images/ # Tech logos (java, python, react, etc.)
    work-experience-images/  # Company logos
  environments/              # Angular environment configs
  index.html                 # Entry point
  styles.css                 # Global styles
nginx-conf/                  # Nginx server configuration (reference copies)
docs/                        # Deployment guide and documentation
```

## Key Commands

```bash
npm install                  # Install dependencies
npm run start                # Local dev server (ng serve)
npm run build-prod           # Production build (output: dist/personal-website/)
npm run lint                 # Run tslint
```

## Build & Deploy

- Production build: `npm run build-prod`
- Output directory: `dist/personal-website/`
- Deploy target: `scp` or `rsync` to `/var/www/sites/skybreak.app/html/personal-website/` on the droplet
- Full deployment guide: see `docs/DEPLOYMENT.md`

## Requirements

- **Node.js:** <= 16.16.0 (required for Angular 8 compatibility)

## Conventions

- Each component lives in its own directory under `src/app/components/`
- Each component has: `.component.ts`, `.component.html`, `.component.css`
- No unit tests currently (boilerplate stubs were removed as they had no real coverage)
- CSS background images reference assets via relative or absolute `/assets/...` paths
- Fonts are loaded via `@font-face` in `app.component.css` and `styles.css`

## Nginx

- Config files in `nginx-conf/` are reference copies of what is deployed on the server
- The site config is at `nginx-conf/sites-available/skybreak.app`
- Document root on server: `/var/www/sites/skybreak.app/html/personal-website/`
- HTTP requests redirect to HTTPS
- `/sao/` path proxies to `localhost:8080`
