# ADR-005: Scroll Animations and Dynamic Content

**Date:** 2026-05-30
**Status:** Accepted

## Context

The initial Next.js migration produced a functional but static-feeling site. We wanted to add visual polish (animations, hover effects) and keep content maintenance low (e.g., not manually updating age each year).

## Decisions

### 1. CSS-only scroll-reveal animations via IntersectionObserver

A `ScrollReveal` client component (`'use client'`) wraps each page section and uses `IntersectionObserver` to trigger a CSS `fade-up` animation when the section enters the viewport.

**Why not a library (e.g., Framer Motion, AOS)?**
- Zero dependency: the animation is ~30 lines of code
- No JS animation runtime shipped to the client
- IntersectionObserver has universal browser support
- Simple fade-up is sufficient for a portfolio site

### 2. Hover effects via CSS transitions

Interactive elements (tech grid icons, social links, work experience images) use CSS `transform: scale()` and `box-shadow` transitions on `:hover`. All effects are pure CSS with no JavaScript.

### 3. Dynamic age calculation

The About section computes the site owner's age from a birth date constant (`1996-11-27`) rather than hardcoding it. This uses a `calculateAge()` function that handles month/day boundary correctly.

### 4. Body background color

Changed from `#446E86` (dark teal) to `whitesmoke` to prevent a dark flash before content renders, since the page content is predominantly white.

## Consequences

- `ScrollReveal` is the only `'use client'` component (needs browser APIs)
- Must be mocked in tests as a pass-through `<>{children}</>` since IntersectionObserver is not available in jsdom
- Age updates automatically each year with no code changes
- All animations are performant (GPU-composited `transform` and `opacity` only)
