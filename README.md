# AMG Kennel Atlanta

A single-page marketing site concept for AMG (Atlanta Meets Groomers), a full-service pet grooming studio and boutique in Atlanta, GA.

Built with Astro, React islands, Tailwind CSS, and Framer Motion.

## Stack

- **Astro** — static site generation, page shell
- **React** — interactive sections, hydrated as islands (`client:load` / `client:visible`)
- **Tailwind CSS v4** — styling, theme tokens in `src/styles/global.css`
- **Framer Motion** — scroll reveals, hover states, the hero paw-print trail
- **Lenis** — smooth scroll

## Structure

```
src/
├── components/       Page sections (Hero, Story, Services, Shop, Gallery,
│                      Testimonials, Visit, BookingForm, Nav, Footer) and
│                      shared pieces (Paw, PawScatter, Marquee, Reveal, CountUp)
├── layouts/
│   └── Layout.astro  Head, fonts, meta
├── lib/
│   └── images.ts      Unsplash image manifest
└── pages/
    └── index.astro    Assembles all sections
```

## Commands

| Command           | Action                                      |
| :----------------- | :------------------------------------------- |
| `npm install`       | Install dependencies                         |
| `npm run dev`       | Start local dev server at `localhost:4321`   |
| `npm run build`     | Build the production site to `./dist/`       |
| `npm run preview`   | Preview the production build locally          |
| `npm run astro check` | Type-check the project                     |

## Deployment

This is a fully static build (no server output, no environment variables required). It deploys to Vercel with zero configuration — Vercel auto-detects the Astro framework from `package.json` and runs `npm run build`, publishing `dist/`.

## Notes

- The booking form is a styled UI only; it doesn't submit anywhere yet.
- Shop section items are marked "Available In-Store" rather than linked to an external cart — AMG doesn't currently have a working online store to send traffic to.
- Imagery is sourced from Unsplash (free-to-use license) as stand-ins for real studio photography.
