# test-task-gymteam

A pixel-perfect Next.js rebuild of [usmanovafit.gymteam.ru](https://usmanovafit.gymteam.ru) — Ekaterina Usmanova's fitness landing page, including the `/method_july` upsell page.

## Tech Stack

- **Next.js 16** — App Router, React 19, TypeScript strict
- **shadcn/ui** — Radix primitives + Tailwind CSS v4
- **Tailwind CSS v4** — oklch design tokens
- **Lucide React** — icons

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Commands

```bash
npm run dev       # Start dev server
npm run build     # Production build
npm run lint      # ESLint check
npm run typecheck # TypeScript check
npm run check     # Run lint + typecheck + build
```

### Docker

```bash
docker compose up app --build # build and run the app
docker compose up dev --build # run the app in dev mode on port 3001
```

## Project Structure

```
src/
  app/
    page.tsx          # Home page
    method_july/       # /method_july upsell page
  components/          # React components (home page sections)
    method-july/        # Components for the /method_july page
    ui/                 # shadcn/ui primitives
  lib/utils.ts          # cn() utility
  types/                # TypeScript interfaces
  hooks/                # Custom React hooks
public/
  images/               # Site images
  fonts/                # Gilroy webfonts
  seo/                  # Favicons, OG images
docs/
  research/             # Extracted design tokens, component specs, page topology
  design-references/    # Reference screenshots
```
