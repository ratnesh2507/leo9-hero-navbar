# Leo9 Hero + Navbar

A small React (Vite) project that recreates the hero section and navbar inspired by leo9studio.com, with responsive layout and subtle interactions. Includes two additional sections below the hero.

## Tech Stack

- React 19 + Vite
- Tailwind CSS
- ESLint

## Getting Started

```bash
npm install
npm run dev
```

The app runs at http://localhost:5173.

## Build

```bash
npm run build
npm run preview
```

## Deploy

- Vercel: Import repo, use default Vite settings.
- Netlify: Build command `npm run build`, publish directory `dist`.
- GitHub Pages: `npm run build` then serve `dist` via any static host or use an action.

## Notes

- Navbar: sticky with backdrop blur after scroll, mobile menu.
- Hero: gradient background, pointer-follow glow, CTAs, floating badges.
- Sections: Selected Work cards and Services.
