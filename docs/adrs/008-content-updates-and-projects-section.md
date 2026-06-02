# ADR-008: Content Updates, Projects Section, and Layout Refinements

**Date:** 2026-06-03
**Status:** Accepted

## Context

The site needed several content updates, a new Projects showcase section, and various layout refinements to improve visual consistency and mobile experience.

## Decisions

### 1. Projects Section (GitHub Integration)

Added a new `ProjectsSection` component that fetches repositories from the GitHub API (`/users/Ticketedmoon/repos`) with ISR caching (1-hour revalidation). Projects are classified into two tabs:

- **Services & Tools:** Developer tools, web apps, and utility projects
- **Games:** Game development projects

Classification is hardcoded via `toolRepos` and `gameRepos` arrays (not GitHub Topics) because the `gh` CLI was authenticated to the wrong account. The ordering within each tab is manually curated.

**Pagination:** Desktop shows 9 projects at a time, mobile shows 3. "Show More Projects" / "Show Less" buttons handle overflow. Page size adjusts on window resize via `useEffect` + `resize` listener with a 550px breakpoint.

**Section placement:** Tech Grid, Projects, Work Experience, Social Links, Values, Footer (in order).

### 2. Technology Grid Expansion

Expanded from 12 items (4x3) to 15 items (5x3). Added Docker, Kubernetes, Nginx, and Apache Solr. Removed SQL (too generic). Updated `grid-template-columns: repeat(5, 1fr)`. Hover containers use `background-size: 90%` for better visual sizing.

### 3. Values Section Rewrite

Rewrote values text (Option B selected by user for lines 1-3, original kept for Modesty):
- "Stay curious, stay humble, stay kind."
- "Think in decades, not deadlines."
- "Build things that matter, even if no one is watching."
- Original Passions line kept: "Pursue Passions, not paychecks."
- Original Modesty line kept.

Fixed "Happinesslies" typo (missing space in suffix).

### 4. Work Experience Layout Consistency

- Renamed Shutterstock role to "Software Engineer III"
- Applied consistent `2.5em` padding with `border-bottom: 1px solid #ddd` dividers
- Matched content width to About section at `77.5%`

### 5. Social Links and Footer Spacing

- Social links icons use `background-size: 110%` to fill containers
- Added `padding-bottom: 3em` to both Social Links and Footer wrappers
- Copyright line (`© {year} Shane Creedon`) placed as standalone element below the footer, separated by `border-top`
- Year updates automatically via `new Date().getFullYear()` at build time

### 6. Mobile Values Section

Increased padding (`3em` vs `1.5em`), line-height (`2.2`), and title margin for clearer separation from Social Links on mobile viewports.

## Consequences

- GitHub API rate limit (60 req/hr unauthenticated) is mitigated by ISR caching
- Project classification requires manual updates when new repos are created
- 36 tests passing across 10 test suites
- Copyright year auto-updates on each Vercel deploy
