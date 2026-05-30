# ADR-007: Mobile Responsiveness and CI Pipeline

**Date:** 2026-05-30
**Status:** Accepted

## Context

The site was built primarily for desktop viewports. It had no responsive breakpoints, no mobile navigation, and no CI/CD pipeline for automated testing or coverage reporting.

## Decisions

### 1. Comprehensive Mobile Responsiveness

Added responsive breakpoints across all components at 480px, 780px, 900px, and 1250px:

- **NavigationMenu:** Hamburger menu with full-screen overlay on mobile (below 780px). Uses `<div role="navigation">` instead of `<nav>` to avoid Materialize CSS conflicts.
- **HeroSection:** Fluid font sizing with `clamp()` and `rem` units. Separated background from fade-in animation to prevent flash of grey during load.
- **AboutSection:** Stacked layout on mobile with flexbox column. Left-aligned paragraph text with centered subtitles. Dynamic age calculation unchanged.
- **TechGrid:** Reduced gap and padding on small screens.
- **SocialLinks / Footer:** Scaled down link sizes at 480px.
- **WorkExperience:** Left-aligned text, reduced padding on mobile.
- **ValuesSection:** Large floating bubbles hidden on mobile for performance.
- **ScrollReveal:** Lower intersection threshold (0.05) with negative root margin on mobile for earlier animation trigger.

### 2. Materialize CSS Conflict Resolution

Materialize CSS was the source of extensive styling conflicts. Key mitigations:

- **Local bundling:** Downloaded `materialize.min.css` and imported it in `layout.tsx` before `globals.css`, ensuring our styles load after Materialize and naturally override it.
- **Removed CDN link:** No longer loading Materialize from CDN (was causing load-order issues where Materialize loaded last and won on cascade).
- **Semantic HTML change:** Navigation uses `<div role="navigation">` instead of `<nav>` to completely avoid Materialize's `nav` element selectors.
- **Global overrides:** High-specificity `html body nav` overrides with `!important` in `globals.css` as additional safety.
- **Heading tag avoidance:** Hero section uses `<p>` tags instead of `<h1>/<h4>/<h6>` to avoid Materialize heading size overrides.

### 3. CI Pipeline with Coverage Badge

Created `.github/workflows/ci.yml` with:

- Triggers on push to `master` and pull requests
- Node.js 18 matrix
- `npm ci`, `npm test -- --coverage`
- Codecov upload for coverage reporting
- Badge in README.md for CI status and coverage percentage

### 4. Content Updates

- Updated degree to "1.1 (First-Class Honours) B.Sc in Computer Science"
- Title changed to "Software Development Engineer"
- Removed passions subtitle from hero section
- Added line break in "My Story" between Dublin intro and degree info

## Consequences

- Site is now usable on mobile devices and tablets
- Automated testing runs on every push and PR
- Coverage badge provides visibility into test health
- Materialize CSS conflicts are contained, though some residual styling issues may persist due to the library's aggressive element selectors
- 30 tests passing across 9 test suites
