# Development Guide

How to set up, develop, and edit the personal website locally.

---

## Prerequisites

- **Node.js:** 18+ (LTS recommended)
- **npm:** 9+ (comes with Node.js)

## Getting Started

```bash
# Clone the repo
git clone https://github.com/Ticketedmoon/personal-website.git
cd personal-website

# Install dependencies
npm install

# Start the dev server
npm run dev
```

The site will be available at **http://localhost:3000** with hot reload.

---

## Project Structure

```
src/
├── app/
│   ├── globals.css       # Global styles, font-face declarations
│   ├── layout.tsx        # Root HTML layout, metadata, external CSS
│   └── page.tsx          # Home page, composes all sections
└── components/
    ├── NavigationMenu/   # Fixed top nav bar
    ├── HeroSection/      # Animated sky hero with name/title
    ├── AboutSection/     # Three bio rows (story, hobbies, goals)
    ├── TechGrid/         # 4x3 grid of technology logos (Azure, AWS, Java, C#, etc.)
    ├── SocialLinks/      # GitHub, LinkedIn, Strava links
    ├── WorkExperience/   # Job history entries
    ├── ValuesSection/    # Life values with floating bubble animation
    └── Footer/           # Contact links (email, Twitter, Steam)
```

Each component has:
- `ComponentName.tsx` - React component
- `ComponentName.module.css` - Scoped CSS styles

There is also `ScrollReveal/` which is a `'use client'` component wrapping sections with a fade-up animation via IntersectionObserver.

---

## Making Edits

### Editing text content

Most content is defined directly in the component `.tsx` files as data arrays. For example, to update work experience:

1. Open `src/components/WorkExperience/WorkExperience.tsx`
2. Find the `jobs` array at the top of the file
3. Edit the relevant entry (company name, period, role, description)
4. The dev server will hot-reload your changes

### Adding a new technology

1. Add the logo image to `public/images/technologies/`
2. Open `src/components/TechGrid/TechGrid.tsx`
3. Add a new entry to the `technologies` array:
   ```tsx
   { name: 'Go', image: 'go.png' },
   ```

### Editing styles

Each component has its own `.module.css` file. CSS classes are scoped to the component, so changes will not leak into other sections. Edit the CSS file alongside the component.

### Adding a new section

1. Create a new directory under `src/components/`, e.g., `src/components/Blog/`
2. Create `Blog.tsx` and `Blog.module.css`
3. Import and add it to `src/app/page.tsx` in the desired position
4. Add a test in `__tests__/components/Blog.test.tsx`

---

## Available Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start local dev server with hot reload |
| `npm run build` | Production build (outputs to `out/`) |
| `npm run start` | Serve production build locally |
| `npm run lint` | Run ESLint |
| `npm test` | Run all tests |
| `npm run test:watch` | Run tests in watch mode |
| `npm run test:coverage` | Run tests with coverage report |
| `npm run deploy` | Build and deploy to Digital Ocean droplet |

---

## Testing

Tests live in `__tests__/` and use Jest + React Testing Library.

```bash
# Run all tests
npm test

# Run a specific test
npx jest __tests__/components/Footer.test.tsx

# Run in watch mode (re-runs on file changes)
npm run test:watch
```

When editing content, update the corresponding test to match. For example, if you change a social media URL, update the expected `href` in the test.

---

## Building for Production

```bash
npm run build
```

This produces a fully static site in the `out/` directory. You can preview it locally:

```bash
npx serve out
```

---

## Deploying

See [DEPLOYMENT.md](./DEPLOYMENT.md) for the full deployment guide. The quick version:

```bash
npm run deploy
```

This runs `scripts/deploy.sh`, which builds the site and rsyncs it to the Digital Ocean droplet.
