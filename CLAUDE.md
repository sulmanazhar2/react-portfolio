# Project: React Portfolio

Personal portfolio website for Sulman Azhar.

## Tech Stack

- **React 18** with JSX
- **Vite 6** as build tool and dev server (migrated from CRA)
- **React Router v7** for routing
- **React-Bootstrap** + CSS for styling
- **Firebase Analytics** (SDK v12) - safe init, no-ops if config missing
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
firebase deploy     # Deploy current build/ to Firebase Hosting
```

## Project Structure

```
index.html                          # Vite entry HTML (root level, not in public/)
vite.config.js                      # Vite config
firebase.json                       # Firebase Hosting config + caching headers
src/
  main.jsx                          # Entry point - StrictMode + ErrorBoundary + HelmetProvider
  app/App.jsx                       # Root component (Router, ScrollToTop, AnimatedCursor)
  app/routes.jsx                    # Route definitions (uses useLocation directly, no withRouter)
  content_option.js                 # ALL portfolio content (bio, skills, projects, contact)
  firebase/firebaseConfig.js        # Safe Firebase init + trackEvent() helper
  pages/                            # Page components: home, about, contact, portfolio, notfound
  components/                       # Reusable: ErrorBoundary, socialicons, themetoggle
  header/                           # Navigation header
  hooks/AnimatedCursor.jsx          # Custom animated cursor (proper cleanup, no leaks)
public/                             # Static assets (favicon, manifest, robots.txt, sitemap.xml)
```

## Environment Variables

All env vars use the `VITE_` prefix (required by Vite). See `.env.local.example` for the full list.
The actual `.env.local` is gitignored.

**Firebase:**
- `VITE_FIREBASE_API_KEY`
- `VITE_FIREBASE_AUTH_DOMAIN`
- `VITE_FIREBASE_PROJECT_ID`
- `VITE_FIREBASE_STORAGE_BUCKET`
- `VITE_FIREBASE_MESSAGING_SENDER_ID`
- `VITE_FIREBASE_APP_ID`
- `VITE_FIREBASE_MEASUREMENT_ID`

**EmailJS:**
- `VITE_EMAILJS_SERVICE_ID`
- `VITE_EMAILJS_TEMPLATE_ID`
- `VITE_EMAILJS_PUBLIC_KEY`

Access in code via `import.meta.env.VITE_*` (NOT `process.env`).

## Content Editing

All portfolio content lives in `src/content_option.js`:
- `meta` - SEO meta tags
- `introdata` - Home page hero text and animated titles
- `dataabout` - About page bio
- `worktimeline` - Work experience entries
- `skills` - Skill bars with proficiency values
- `courses` - Certifications/courses
- `dataportfolio` - Portfolio project cards (img is plain string URL, title + description + optional link)
- `contactConfig` - Contact email + description (EmailJS IDs are in env vars now)
- `socialprofils` - Social media links

## Deployment

```bash
pnpm deploy  # Builds + deploys to Firebase Hosting
```

Firebase Hosting is configured with:
- SPA rewrites (all paths -> index.html)
- Long-cache headers for assets (`max-age=31536000, immutable`)
- No-cache for `index.html`
- Security headers: X-Content-Type-Options, X-Frame-Options, Referrer-Policy

## Key Design Decisions

1. **Firebase init is safe** - wrapped in try/catch, no-ops if env vars missing or analytics unsupported.
2. **Analytics is async** - use `trackEvent(name, params)` from `firebase/firebaseConfig.js`. Never throws.
3. **One HelmetProvider at root** - in `main.jsx`. Pages use `<Helmet>` directly, not `<HelmetProvider>`.
4. **ErrorBoundary at root** - catches render errors and shows recovery UI instead of white screen.
5. **Theme toggle works** - persists to localStorage, respects system preference, switches `data-theme` attribute.
6. **No `withRouter` HOC** - uses `useLocation`/`useNavigate` hooks directly.

## Conventions

- JSX files use `.jsx` extension (required by Vite for fast refresh detection)
- Plain JS files (utilities, data) use `.js`
- Page components: `src/pages/<name>/index.jsx` with co-located `style.css`
- Components: `src/components/<name>/index.jsx` with co-located `style.css`
- No TypeScript - plain JavaScript throughout
- All external links: `target="_blank" rel="noopener noreferrer"`
- All icon-only buttons: must have `aria-label`
- All form inputs: must have associated `<label>` (use `visually-hidden` class if visual label not needed)
