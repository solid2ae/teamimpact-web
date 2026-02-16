# Team Impact Basketball Website

Modern black & gold site built with **Next.js + Tailwind**. Free hosting recommended on **Vercel**.

## Quick start (local)
1) Install Node.js (LTS)
2) In this folder:
```bash
npm install
npm run dev
```
Open http://localhost:3000

## Deploy for free (Vercel)
1) Create a free GitHub account (if needed)
2) Create a new repo and push this code
3) Go to Vercel → New Project → Import the repo
4) Click Deploy (defaults work)

## Updating content (no code changes needed)
- Schedule + game details: `data/games.json`
- Roster: `data/roster.json`
- Photos: add images in `public/photos/` then update `data/photos.json`
- Logo: `public/logo/team-impact.png`

## Game footage + box stats
- Put a YouTube link in `videoUrl` for each game to embed highlights.
- Box stats live in `boxScore` per game for now.
  Later options (free tiers):
  - Google Sheets → publish as CSV → auto-load
  - Sanity CMS / Contentful → edit in a dashboard (no Git needed)

## Next steps (optional)
- Add a free contact form (Formspree / Netlify Forms)
- Add an Admin dashboard (Decap/Netlify CMS) so you can edit roster/schedule without Git
