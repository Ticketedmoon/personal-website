# ADR-001: Migrate from Angular 8 to Next.js with React

**Date:** 2026-05-29
**Status:** Accepted

## Context

The personal website was built with Angular 8, a framework that reached end-of-life in November 2019. The site is a purely presentational single-page portfolio with no dynamic state, API calls, or client-side routing. Angular 8 imposed several constraints:

- **Node.js <= 16.16.0** required (itself EOL), blocking security updates
- Large runtime bundle for what is essentially static content
- Heavy framework overhead: modules, dependency injection, zone.js, polyfills
- Upgrading Angular (8 to 19) would require navigating 11 major versions of breaking changes
- Shrinking ecosystem for personal/portfolio sites

## Decision

Migrate to **Next.js 15** with the App Router and **React 19**. Use static export (`output: 'export'`) to produce plain HTML/CSS/JS files.

## Rationale

- **Static export**: produces the same deployment artifact as before (static files served by Nginx), so no server infrastructure changes needed
- **Modern Node.js**: no version ceiling, can use current LTS
- **Minimal JS shipped**: Server Components render to HTML at build time with zero client JS by default
- **Better DX**: fast refresh, TypeScript-first, CSS Modules built in
- **Ecosystem**: React is the most widely used UI framework, with vast community and tooling
- **Simplicity**: for a portfolio site, Next.js static export is the sweet spot between a raw HTML site and a full-stack framework
- **Future flexibility**: if the site later needs dynamic features (blog, contact form), Next.js supports API routes and SSR without a rewrite

## Alternatives Considered

| Option | Rejected Because |
|--------|-----------------|
| Upgrade Angular 8 to 19 | 11 major version jumps with extensive breaking changes, disproportionate effort for a static site |
| Plain HTML/CSS | Loses component reusability, harder to maintain, no build tooling |
| Gatsby | Declining ecosystem, slower builds, more complex data layer than needed |
| Astro | Strong option, but Next.js has broader ecosystem and the team has React experience |

## Consequences

- All Angular source code, configs, and dependencies are removed
- The component structure is preserved (8 components, same visual layout)
- Deployment workflow remains the same: build locally, transfer static files to the droplet
- Tests can now use React Testing Library (more widely known than Angular TestBed)
