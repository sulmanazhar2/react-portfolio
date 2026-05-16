# React Portfolio - Sulman Azhar

Personal portfolio website built with React and Vite, deployed on Firebase Hosting.

## Tech Stack

- **React 18** with Vite 6
- **React Router v7** for routing
- **React-Bootstrap** for UI components
- **Firebase Analytics** + **Firebase Hosting**
- **@emailjs/browser** for the contact form
- **pnpm** package manager

## Getting Started

### Prerequisites

- Node.js 20+
- pnpm

### Setup

```bash
git clone https://github.com/sulmanazhar2/react-portfolio.git
cd react-portfolio
pnpm install
cp .env.local.example .env.local   # then fill in your values
pnpm dev
```

The app runs at `http://localhost:3000`.

### Environment Variables

All env vars use the `VITE_` prefix and live in `.env.local` (gitignored). See `.env.local.example` for the full list of required variables.

### Build

```bash
pnpm build       # Outputs production build to build/
pnpm preview     # Preview the production build locally
```

### Deploy

```bash
pnpm deploy      # Builds and deploys to Firebase Hosting
```

## Project Structure

```
src/
  main.jsx                          # Entry point
  app/                              # Root app and routes
  pages/                            # home, about, contact, portfolio, notfound
  components/                       # ErrorBoundary, socialicons, themetoggle
  header/                           # Navigation header
  hooks/AnimatedCursor.jsx          # Animated cursor effect
  firebase/firebaseConfig.js        # Firebase init + analytics helper
  content_option.js                 # All portfolio content lives here
public/                             # Static assets (favicon, manifest, robots, sitemap)
```

## Customization

All portfolio content (bio, skills, projects, work timeline, contact info) is in `src/content_option.js`. Edit that file to update the site -- no other code changes needed for content updates.

## Credits

Originally based on the [react-portfolio](https://github.com/ubaimutl/react-portfolio) template by ubaimutl. Significantly refactored and modernized.
