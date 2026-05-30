# ADR-006: Copyright Compliance and Branding

**Date:** 2026-05-30
**Status:** Accepted

## Context

The site originally used a Triforce (Zelda) favicon, which is a Nintendo trademark. Technology logos displayed on the site are used to represent professional skills. We needed to ensure all assets are either original, properly licensed, or fall under fair use for a personal portfolio.

## Decisions

### 1. Replace Triforce favicon with SC monogram

Created a custom favicon using the site owner's initials "SC" on a purple-to-blue gradient background. Generated in both `.ico` (multi-size: 16/32/48/64px) and `.svg` formats. The SVG uses a `linearGradient` for the background.

**Rationale:** Original branding avoids any trademark issues and gives the site a professional, personal identity.

### 2. Technology logos as skill indicators (fair use)

Logos for Java, Python, Azure, AWS, C#, etc. are used solely to indicate professional competency. This falls under nominative fair use: the logos identify the technologies, not the site itself. All logos are sourced from official or widely-used open-source icon sets.

### 3. Company logos in work experience

Company logos (Microsoft, Shutterstock, Brightflag, Bloomberg) are used in the work experience section to identify past employers. This is standard practice for personal portfolios and CVs.

## Favicon Specification

| Format | Sizes | Background | Foreground |
|--------|-------|------------|------------|
| `.ico` | 16, 32, 48, 64px | Purple-to-blue gradient (`#581C87` to `#0096FF`) | White "SC" text |
| `.svg` | Scalable | Same gradient via `linearGradient` | White "SC" text |

Both are referenced in `layout.tsx`:
```html
<link rel="icon" href="/favicon.ico" sizes="any" />
<link rel="icon" href="/favicon.svg" type="image/svg+xml" />
```

## Consequences

- No copyrighted assets are used as branding for the site
- Technology logos may need periodic updates as brands refresh their visual identity
- If adding new company or technology logos, source from official press kits or open-source icon libraries (e.g., devicon, Simple Icons)
