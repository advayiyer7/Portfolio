# Advay Deepak Iyer — Portfolio

A dark, cinematic "glowing data" single-page portfolio. Next.js (App Router) +
TypeScript + Tailwind v4 + Framer Motion. Deploys to Vercel.

## Run

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm run start      # serve the production build
```

## Editing content

**All copy, links, and data live in one file:** [`src/lib/content.ts`](src/lib/content.ts).
Update text there — no need to touch components.

- Skills, experience, projects, education are simple typed arrays/objects.
- **Projects** are placeholders driven by the `projects` array. Each card takes
  `title`, `tagline`, `tags[]`, `status`, optional `links[]`, optional `thumbnail`.
  Drop a screenshot into `public/` and set `thumbnail` to wire it up later.

## ⚠️ TODO — replace these placeholders before sharing publicly

In `src/lib/content.ts`:

- [ ] `site.linkedin` — your real LinkedIn URL (currently a placeholder)
- [ ] `site.resume` — hosted resume PDF URL, or drop `resume.pdf` into `public/`
- [ ] `site.url` — your deployed domain (used for SEO / Open Graph / sitemap)

## Design system

Tokens, fonts, and utilities are defined in [`src/app/globals.css`](src/app/globals.css):

- Colors: `--color-bg` `#06070D`, accents `--color-cyan` `--color-blue` `--color-violet`
- Fonts: Space Grotesk (display) · Inter (body) · JetBrains Mono (labels)
- Utilities: `.bg-dot-grid`, `.text-glow-cyan`, `.glow-ring`, `.glow-blob`, `.label-mono`

The signature animated curve is [`src/components/GlowCurve.tsx`](src/components/GlowCurve.tsx).
All motion respects `prefers-reduced-motion` with static fallbacks.

## Deploy (Vercel)

Push to GitHub and import the repo at [vercel.com/new](https://vercel.com/new). No
environment variables or config needed — it builds with `next build` out of the box.
Set your custom domain, then update `site.url` so OG tags resolve to absolute URLs.
