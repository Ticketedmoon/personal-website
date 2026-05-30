# Personal Website

[![CI](https://github.com/Ticketedmoon/personal-website/actions/workflows/ci.yml/badge.svg)](https://github.com/Ticketedmoon/personal-website/actions/workflows/ci.yml)

Source code for [skybreak.app](https://www.skybreak.app), a single-page portfolio site.

Built with Next.js 15, React 19, and TypeScript. Hosted on [Vercel](https://vercel.com) (free tier) with automatic deployments on push to `master`.

Previously an Angular 8 app hosted on a Digital Ocean droplet. Migrated in May 2026.

## Tech Stack

- Next.js 15 (App Router)
- React 19, TypeScript
- CSS Modules, with Materialize CSS loaded via CDN
- Jest and React Testing Library
- Vercel for hosting, SSL, and CDN

## Quick Start

Requires Node.js 18 or later.

```bash
npm install
npm run dev
```

Opens at `http://localhost:3000` with hot reload.

## Site Sections

Single page layout, top to bottom:

- Navigation bar (fixed, scrolls to anchors)
- Hero section (name, title, animated background)
- About me (three rows: background, hobbies, career goals)
- Technologies (4x3 grid: Azure, AWS, Java, C#, Spring Boot, Python, SQL, Elasticsearch, Redis, C++, React, Node.js)
- Social links (GitHub, LinkedIn, Strava)
- Work experience (Microsoft, Shutterstock, Brightflag, Bloomberg Polarlake, and earlier roles)
- Values
- Footer (email, Twitter, Steam)

Each section fades in on scroll using a lightweight IntersectionObserver wrapper.

## Commands

| Command | What it does |
|---------|-------------|
| `npm run dev` | Start the local dev server |
| `npm run build` | Production build |
| `npm test` | Run all 29 tests |
| `npm run lint` | Run ESLint |

## Project Structure

```
src/app/              Page layout, global styles, metadata
src/components/       One directory per section, each with .tsx and .module.css
public/images/        All image assets (tech logos, company logos, icons)
public/fonts/         Lato and Poiret One font files
__tests__/            Component and page tests
docs/                 Development guide, deployment guide, ADRs
```

## Deployment

Pushes to `master` auto-deploy to Vercel. No manual steps needed.

Domain (`skybreak.app`) uses Vercel nameservers. DNS is managed in the Vercel dashboard.

For details, see [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md).

## Documentation

- [Development guide](docs/DEVELOPMENT.md) -- local setup, editing content, adding sections
- [Deployment guide](docs/DEPLOYMENT.md) -- Vercel config, DNS, self-hosted fallback
- [ADRs](docs/adrs/) -- architectural decisions and their rationale

| ADR | Topic |
|-----|-------|
| [001](docs/adrs/001-migrate-angular-to-nextjs.md) | Angular 8 to Next.js migration |
| [002](docs/adrs/002-static-export-strategy.md) | Static export strategy (superseded) |
| [003](docs/adrs/003-testing-strategy.md) | Testing approach |
| [004](docs/adrs/004-migrate-to-vercel.md) | Hosting migration to Vercel |
| [005](docs/adrs/005-scroll-animations-and-dynamic-content.md) | Scroll animations and dynamic content |
| [006](docs/adrs/006-copyright-compliance-and-branding.md) | Copyright compliance and branding |

## License

This is a personal project. No license is granted for reuse of the content or design.
