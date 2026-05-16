# Project: React Portfolio

Personal portfolio + blog for Sulman Azhar Qureshi (Senior Software Engineer, Berlin).

## Tech Stack

- **React 18** with JSX
- **Vite 6** as build tool and dev server
- **React Router v7** for routing
- **MDX (@mdx-js/rollup)** for blog content
- **rehype-pretty-code + shiki** for code syntax highlighting in blog posts
- **Tailwind CSS v4** for styling (no React-Bootstrap)
- **Firebase Analytics** (SDK v12) — safe init, no-ops if config missing
- **Firebase Hosting** for deployment
- **@emailjs/browser** for the contact form
- **pnpm** as package manager

## Key Commands

```bash
pnpm install        # Install dependencies
pnpm dev            # Start dev server (localhost:3000)
pnpm start          # Alias for pnpm dev
pnpm build          # Production build (output: build/)
pnpm preview        # Preview production build locally
pnpm deploy         # Build + firebase deploy
```

## Routes

- `/` — Home (hero, animated tagline)
- `/about` — Bio, experience timeline, categorized skills, recommendations, courses
- `/work` — Selected work / case-study highlights (text-based, no screenshots)
- `/portfolio` — Backwards-compat redirect to `/work`
- `/blog` — Blog post list
- `/blog/:slug` — Individual blog post (rendered from MDX)
- `/resume` — Embedded PDF resume viewer
- `/contact` — Contact form + email/location
- `*` — 404 NotFound

## Project Structure

```
index.html                          # Vite entry HTML (root level)
vite.config.js                      # Vite + MDX config
firebase.json                       # Firebase Hosting config + caching headers
public/
  Sulman_Qureshi_Resume.pdf         # Resume served as a static asset
  favicon.ico, manifest.json, robots.txt, sitemap.xml
src/
  main.jsx                          # Entry: StrictMode + ErrorBoundary + HelmetProvider
  app/App.jsx                       # Root (Router, ScrollToTop, AnimatedCursor)
  app/routes.jsx                    # All route definitions
  content_option.js                 # ALL portfolio content (single source of truth)
  blog/posts.js                     # Auto-discovers MDX posts via import.meta.glob
  content/blog/*.mdx                # Blog post source files (frontmatter + markdown)
  firebase/firebaseConfig.js        # Safe Firebase init + trackEvent() helper
  pages/                            # home, about, work, blog (+ post.jsx), resume, contact, notfound
  components/                       # ErrorBoundary, Navbar, Footer
  hooks/                            # (empty, AnimatedCursor was removed)
  assets/images/                    # profile.jpg, logo.svg
```

## Writing Blog Posts

1. Create a new `.mdx` file in `src/content/blog/`
2. Frontmatter (required):
   ```yaml
   ---
   title: "Your post title"
   date: "2026-05-16"
   summary: "A one-line summary that shows up in the post list."
   tags: ["engineering", "ai"]
   published: true
   ---
   ```
3. The filename (without `.mdx`) becomes the slug, e.g. `my-post.mdx` -> `/blog/my-post`.
   Override with `slug: "custom-slug"` in frontmatter if needed.
4. Posts with `published: false` are visible in dev but hidden in production builds.
5. Posts are auto-sorted by date (newest first). No registry to update.
6. Code blocks get syntax highlighting via `rehype-pretty-code` (shiki).

## Environment Variables

All env vars use the `VITE_` prefix (required by Vite). See `.env.local.example`.
The actual `.env.local` is gitignored.

Required:
- `VITE_FIREBASE_*` (7 vars) — see `.env.local.example`
- `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`, `VITE_EMAILJS_PUBLIC_KEY`

Access in code via `import.meta.env.VITE_*` (NOT `process.env`).

## Content Editing

All portfolio content lives in `src/content_option.js`:

- `meta` — global SEO title and description
- `introdata` — home page hero (titles + animated typewriter strings + photo)
- `dataabout` — about page bio (paragraph blocks, split on `\n`)
- `worktimeline` — experience entries with optional `highlights` bullet arrays
- `skills` — object keyed by category, each value is an array of skill tags
- `highlights` — selected work for the `/work` page (title, company, period, summary, stack, optional link)
- `recommendations` — testimonials shown on the about page
- `courses` — certifications
- `contactConfig` — email, location, contact-page description
- `socialprofils` — GitHub, LinkedIn, Stack Overflow (Twitter removed)
- `resumeFile` — path to the resume PDF in `public/`

## Deployment

```bash
pnpm deploy  # Builds + deploys to Firebase Hosting
```

Firebase Hosting is configured with:
- SPA rewrites (all paths -> `index.html`)
- Long-cache headers for assets (`max-age=31536000, immutable`)
- No-cache for `index.html`
- Security headers: X-Content-Type-Options, X-Frame-Options, Referrer-Policy

## Key Design Decisions

1. **MDX for blog** — posts live in repo, no CMS, no auth, deploy via `git push`.
2. **Firebase init is safe** — wrapped in try/catch, analytics never throws.
3. **Theme toggle defaults to system preference** — persists to localStorage on change.
4. **ErrorBoundary at root** — catches render errors instead of white-screen.
5. **One HelmetProvider at root** — pages use `<Helmet>` directly.
6. **Resume served from `public/`** — embedded via `<object>` tag on `/resume`.
7. **No screenshot portfolio** — replaced with text-based work highlights.
8. **Twitter dropped** — kept GitHub, LinkedIn, Stack Overflow.

## Conventions

- JSX files use `.jsx` extension (Vite Fast Refresh requirement)
- Plain JS files (utilities, data) use `.js`
- Blog posts use `.mdx`
- Page components: `src/pages/<name>/index.jsx` + co-located `style.css`
- Components: `src/components/<name>/index.jsx` + co-located `style.css`
- All external links: `target="_blank" rel="noopener noreferrer"`
- All icon-only buttons: must have `aria-label`
- Form inputs: must have associated `<label>` (`visually-hidden` class if visual label not needed)
