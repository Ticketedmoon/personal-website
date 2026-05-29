# AGENTS.md

## Project Overview

This is **personal-website** (skybreak.app), a Next.js static site for a personal portfolio.
It is built with React and exported as plain HTML/CSS/JS, served via Nginx on a Digital Ocean droplet.

## Tech Stack

- **Framework:** Next.js 15 (App Router, static export)
- **UI:** React 19, TypeScript
- **Styling:** CSS Modules (one `.module.css` per component)
- **Testing:** Jest + React Testing Library
- **Web Server:** Nginx (config stored in `nginx-conf/`)
- **Hosting:** Vercel (free tier), previously Digital Ocean droplet

## Project Structure

```
src/
  app/
    globals.css              # Global styles, font-face declarations
    layout.tsx               # Root layout with metadata
    page.tsx                 # Home page composing all sections
  components/
    NavigationMenu/          # Fixed top nav bar
    HeroSection/             # Animated hero with name/title
    AboutSection/            # Bio rows (story, hobbies, goals)
    TechGrid/                # 3x3 technology logo grid
    SocialLinks/             # GitHub, LinkedIn, YouTube links
    WorkExperience/          # Job history entries
    ValuesSection/           # Life values with floating bubbles
    Footer/                  # Contact links (email, Twitter, Steam)
public/
  fonts/                     # Lato-Light.ttf, PoiretOne-Regular.ttf
  images/
    general/                 # Hero images, icons, profile photos
    links/                   # Social media icons
    technologies/            # Tech logos
    work-experience/         # Company logos
  favicon.ico
__tests__/                   # Jest + RTL tests for all components
scripts/
  deploy.sh                  # Build + rsync to Digital Ocean
docs/
  adrs/                      # Architectural Decision Records
  DEPLOYMENT.md              # Deployment guide
  DEVELOPMENT.md             # Dev setup and workflow guide
nginx-conf/                  # Nginx server configuration (reference copies)
```

## Key Commands

```bash
npm install                  # Install dependencies
npm run dev                  # Local dev server with hot reload
npm run build                # Production build (output: out/)
npm test                     # Run all tests
npm run deploy               # Build and deploy to Digital Ocean
```

## Build & Deploy

- **Primary:** Vercel (auto-deploys on push to `main`)
- **Alternative:** Self-hosted with `output: 'export'` + rsync (see `scripts/deploy.sh`)
- Production build: `npm run build`
- Full deployment guide: see `docs/DEPLOYMENT.md`

## Requirements

- **Node.js:** 18+ (LTS recommended)

## Conventions

- Each component lives in its own directory under `src/components/`
- Each component has: `ComponentName.tsx` + `ComponentName.module.css`
- Components are React Server Components by default (no `'use client'`)
- Content data (jobs, technologies, links) is defined as arrays at the top of each component file
- Images in `public/` are referenced via root-relative paths (`/images/...`)
- Fonts are loaded via `@font-face` in `globals.css`
- Tests use React Testing Library, one test file per component in `__tests__/components/`

## Nginx

- Config files in `nginx-conf/` are reference copies of what is deployed on the server
- The site config is at `nginx-conf/sites-available/skybreak.app`
- Document root on server: `/var/www/sites/skybreak.app/html/personal-website/`
- HTTP requests redirect to HTTPS
- `/sao/` path proxies to `localhost:8080`
