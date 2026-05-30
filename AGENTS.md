# AGENTS.md

## Project Overview

This is **personal-website** (skybreak.app), a personal portfolio site for Shane Creedon.
Built with Next.js 15 and React 19, deployed to Vercel with automatic deploys on push to `master`.

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **UI:** React 19, TypeScript
- **Styling:** CSS Modules (one `.module.css` per component) + Materialize CSS (CDN)
- **Animations:** CSS-only via `ScrollReveal` component (IntersectionObserver)
- **Testing:** Jest + React Testing Library
- **Hosting:** Vercel (free Hobby plan), auto-deploys on push to `master`
- **Domain:** skybreak.app (registered on GoDaddy, nameservers point to Vercel)
- **Favicon:** Custom SC monogram (purple-to-blue gradient), both .ico and .svg

## Project Structure

```
src/
  app/
    globals.css              # Global styles, font-face declarations
    layout.tsx               # Root layout with metadata, favicon, Materialize CDN
    page.tsx                 # Home page composing all sections with ScrollReveal
  components/
    NavigationMenu/          # Fixed top nav bar (flex layout)
    HeroSection/             # Animated sky hero with name/title/passions
    AboutSection/            # Bio rows (story, hobbies, goals) with dynamic age
    TechGrid/                # 4x3 grid of technology logos (Azure, AWS, Java, C#, etc.)
    SocialLinks/             # GitHub, LinkedIn, Strava links
    WorkExperience/          # Job history (Microsoft, Shutterstock, Brightflag, Bloomberg)
    ValuesSection/           # Life values with floating bubble animation
    Footer/                  # Contact links (email, Twitter, Steam)
    ScrollReveal/            # Client component: IntersectionObserver fade-up animation
public/
  fonts/                     # Lato-Light.ttf, PoiretOne-Regular.ttf
  images/
    general/                 # Hero images, icons, profile photos
    links/                   # Social media icons (strava.svg, etc.)
    technologies/            # Tech logos (azure.png, aws.png, csharp.png, etc.)
    work-experience/         # Company logos (microsoft.png, etc.)
  favicon.ico                # SC monogram, multi-size (16/32/48/64px)
  favicon.svg                # SC monogram, scalable SVG with gradient
__tests__/                   # Jest + RTL tests for all components
docs/
  adrs/                      # Architectural Decision Records (001-006)
  DEPLOYMENT.md              # Deployment guide (Vercel primary, self-hosted fallback)
  DEVELOPMENT.md             # Dev setup and workflow guide
scripts/
  deploy.sh                  # Legacy: build + rsync to self-hosted server
nginx-conf/                  # Legacy: Nginx server configuration (historical reference)
```

## Key Commands

```bash
npm install                  # Install dependencies
npm run dev                  # Local dev server with hot reload (localhost:3000)
npm run build                # Production build
npm test                     # Run all tests (29 tests)
```

## Build & Deploy

- **Primary:** Vercel (auto-deploys on push to `master`)
- **Branch:** `master` (not `main`)
- **Alternative:** Self-hosted with `output: 'export'` + rsync (see `scripts/deploy.sh`)
- Full deployment guide: see `docs/DEPLOYMENT.md`

## Requirements

- **Node.js:** 18+ (LTS recommended)

## Conventions

- Each component lives in its own directory under `src/components/`
- Each component has: `ComponentName.tsx` + `ComponentName.module.css`
- Components are React Server Components by default (no `'use client'`)
- `ScrollReveal` is the only client component (needs IntersectionObserver)
- Content data (jobs, technologies, links) is defined as arrays at the top of each component file
- Images in `public/` are referenced via root-relative paths (`/images/...`)
- Fonts are loaded via `@font-face` in `globals.css`
- Tests use React Testing Library, one test file per component in `__tests__/components/`
- Materialize CSS is loaded via CDN in `layout.tsx`, which can cause style conflicts requiring `!important` overrides (especially on nav elements)

## Git

- **Remote:** SSH (`git@github.com:Ticketedmoon/personal-website.git`)
- **Author:** `Ticketedmoon <shane.creedon3@gmail.com>`
- **Default branch:** `master`

## Important Notes

- `calculateAge()` in `AboutSection.tsx` dynamically computes age from birth date (Nov 27, 1996)
- `ScrollReveal` must be mocked in tests as pass-through `<>{children}</>` (no IntersectionObserver in jsdom)
- Several components have text appearing in multiple elements, use `getAllByText` in tests
- Jest requires a separate `tsconfig.jest.json` with `"jsx": "react-jsx"` (Next.js uses `"jsx": "preserve"`)

## ADRs

| ADR | Title | Status |
|-----|-------|--------|
| 001 | Migrate from Angular 8 to Next.js | Accepted |
| 002 | Static Export Deployment Strategy | Superseded by 004 |
| 003 | Testing Strategy | Accepted |
| 004 | Migrate Hosting to Vercel | Accepted |
| 005 | Scroll Animations and Dynamic Content | Accepted |
| 006 | Copyright Compliance and Branding | Accepted |
