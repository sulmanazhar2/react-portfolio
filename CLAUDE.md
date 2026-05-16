# Project: React Portfolio

Personal portfolio website for Sulman Azhar.

## Tech Stack

- React 18 (Create React App)
- React-Bootstrap + CSS for styling
- React Router v6 for routing
- Firebase Analytics (SDK v9)
- Firebase Hosting for deployment
- EmailJS for the contact form
- pnpm as package manager

## Key Commands

```bash
pnpm install        # Install dependencies
pnpm start          # Start dev server (localhost:3000)
pnpm build          # Production build (output: build/)
firebase deploy     # Deploy to Firebase Hosting
```

## Project Structure

```
src/
  app/App.js            # Root component - router, theme, layout
  app/routes.js         # Route definitions
  content_option.js     # ALL portfolio content lives here (bio, skills, projects, contact)
  firebase/firebaseConfig.js  # Firebase initialization (reads from REACT_APP_* env vars)
  pages/                # Page components: home, about, contact, portfolio
  components/           # Reusable: socialicons, themetoggle
  header/               # Navigation header
  hooks/                # AnimatedCursor, withRouter HOC
```

## Environment Variables

Firebase config is loaded from environment variables (`REACT_APP_*` prefix, required by CRA).
See `.env.local.example` for the full list. The actual `.env.local` is gitignored.

Required variables:
- `REACT_APP_FIREBASE_API_KEY`
- `REACT_APP_FIREBASE_AUTH_DOMAIN`
- `REACT_APP_FIREBASE_PROJECT_ID`
- `REACT_APP_FIREBASE_STORAGE_BUCKET`
- `REACT_APP_FIREBASE_MESSAGING_SENDER_ID`
- `REACT_APP_FIREBASE_APP_ID`
- `REACT_APP_FIREBASE_MEASUREMENT_ID`

Build flags (also in `.env.local`):
- `GENERATE_SOURCEMAP=false`
- `DISABLE_ESLINT_PLUGIN=true`

## Content Editing

All portfolio content is centralized in `src/content_option.js`:
- `introdata` - Home page hero text and animated titles
- `dataabout` - About page bio
- `worktimeline` - Work experience entries
- `skills` - Skill bars with proficiency values
- `courses` - Certifications/courses
- `dataportfolio` - Portfolio project cards
- `contactConfig` - EmailJS service/template IDs and contact email
- `socialprofils` - Social media links

## Deployment

The project deploys to Firebase Hosting. Configuration:
- `firebase.json` - Hosting config (serves from `build/`, SPA rewrites)
- `.firebaserc` - Project alias (`sulman-qureshi`)

## Conventions

- Page components live in `src/pages/<name>/index.js` with co-located `style.css`
- Components use `src/components/<name>/index.js` with co-located `style.css`
- No TypeScript - plain JavaScript throughout
- No test files currently exist
