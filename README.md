# Personal Website

Personal website repository for [skybreak.app](https://www.skybreak.app).

## Tech Stack

- **Next.js 15** (React 19, TypeScript, static export)
- **CSS Modules** for scoped styling
- **Nginx** on a Digital Ocean droplet for hosting

## Quick Start

```bash
npm install
npm run dev        # http://localhost:3000
```

## Website Structure

Single page design:

> Navigation Menu
> Hero (name, title, passions)
> About Me (story, hobbies, goals)
> Favourite Technologies (3x3 grid)
> Social Media Links (GitHub, LinkedIn, YouTube)
> Work Experience
> Values For Life
> Contact (Email, Twitter, Steam)

## Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Local dev server |
| `npm run build` | Production build (outputs to `out/`) |
| `npm test` | Run tests |
| `npm run deploy` | Build and deploy to Digital Ocean |

## Documentation

- [Development Guide](docs/DEVELOPMENT.md)
- [Deployment Guide](docs/DEPLOYMENT.md)
- [ADRs](docs/adrs/) (Architectural Decision Records)

