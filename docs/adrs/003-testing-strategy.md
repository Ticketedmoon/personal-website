# ADR-003: Testing Strategy

**Date:** 2026-05-29
**Status:** Accepted

## Context

The previous Angular project had boilerplate test stubs (`expect(component).toBeTruthy()`) with no real coverage. These were removed during cleanup. We need a testing strategy for the new Next.js site.

## Decision

Use **Jest** with **React Testing Library (RTL)** for component and page-level tests.

## Test Structure

```
__tests__/
├── components/
│   ├── NavigationMenu.test.tsx    # Nav links and anchor targets
│   ├── HeroSection.test.tsx       # Name, title, passions
│   ├── AboutSection.test.tsx      # Bio content, external links
│   ├── TechGrid.test.tsx          # All 9 technologies rendered
│   ├── SocialLinks.test.tsx       # GitHub/LinkedIn/YouTube URLs
│   ├── WorkExperience.test.tsx    # All job entries, company links
│   ├── ValuesSection.test.tsx     # All 4 values, bubble animation
│   └── Footer.test.tsx            # Contact links (email/Twitter/Steam)
└── page.test.tsx                  # All sections compose in correct order
```

## What Tests Cover

Each component test verifies:
- **Content presence**: key text, headings, and data render correctly
- **Link integrity**: all `href` values point to the correct URLs
- **Structure**: expected number of items (9 technologies, 6 jobs, 10 bubbles, etc.)
- **Accessibility**: `aria-label` attributes on interactive elements

The page test verifies:
- All 8 sections are rendered
- Sections appear in the correct visual order

## What Tests Do Not Cover

- Visual/CSS correctness (would require Playwright or Chromatic)
- Responsive breakpoints
- Animation behavior
- Lighthouse/performance metrics

These are intentionally excluded to keep the test suite fast and maintainable for a personal site.

## Alternatives Considered

| Option | Rejected Because |
|--------|-----------------|
| Playwright E2E | Overkill for a static portfolio, adds browser dependency |
| Snapshot tests only | Brittle, break on any markup change, low signal |
| No tests | Learned from the Angular project: even a portfolio benefits from content correctness checks |
| Vitest | Good option, but Jest has broader ecosystem and is the default for Next.js projects |

## Consequences

- Tests run in ~2-3 seconds (jsdom, no browser needed)
- `npm test` provides quick feedback on content correctness after edits
- CSS Modules are mocked via `identity-obj-proxy`, so class names are testable but styles are not rendered
