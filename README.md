# React Portfolio - Sulman Azhar

Personal portfolio website built with React, showcasing projects, skills, and work experience.

**Live:** Deployed via Firebase Hosting

## Tech Stack

- **Framework:** React 18 (Create React App)
- **Styling:** React-Bootstrap, CSS
- **Routing:** React Router v6
- **Contact Form:** EmailJS
- **Analytics:** Firebase Analytics
- **Hosting:** Firebase Hosting

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm

### Setup

1. Clone the repository:

```bash
git clone https://github.com/sulmanazhar2/react-portfolio.git
cd react-portfolio
```

2. Install dependencies:

```bash
pnpm install
```

3. Set up environment variables:

```bash
cp .env.local.example .env.local
```

Edit `.env.local` and fill in your Firebase configuration values. See the [Firebase Console](https://console.firebase.google.com/) for your project credentials.

4. Start the development server:

```bash
pnpm start
```

The app will be available at `http://localhost:3000`.

### Build for Production

```bash
pnpm build
```

### Deploy to Firebase

```bash
firebase deploy
```

## Project Structure

```
src/
  app/              # App shell (App.js, routes, global styles)
  assets/images/    # Project screenshots and logo
  components/       # Reusable components (social icons, theme toggle)
  firebase/         # Firebase initialization
  header/           # Navigation header
  hooks/            # Custom hooks (animated cursor, withRouter)
  pages/            # Page components (home, about, contact, portfolio)
  content_option.js # Central content configuration
  index.js          # Entry point
```

## Customization

All portfolio content (bio, skills, projects, work timeline, contact info) is configured in `src/content_option.js`.

## Credits

Based on the [react-portfolio](https://github.com/ubaimutl/react-portfolio) template by ubaimutl.
