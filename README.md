# LumbarCushion.com

Independent reviews of the best lumbar support cushions for office chairs, car seats, and travel. Built with Next.js 15, TypeScript, Tailwind CSS, and MDX.

## Tech Stack
- **Framework:** Next.js 15 (App Router), TypeScript
- **Styling:** Tailwind CSS (navy/teal palette)
- **Blog:** MDX via `next-mdx-remote`
- **Icons:** Lucide React
- **Deployment:** Vercel (free tier)

## Quick Start
```bash
npm install
cp .env.example .env.local
npm run dev
```

## Deployment to Vercel
1. Push to GitHub: `git init && git add . && git commit -m "init" && gh repo create lumbarcushion --private --push`
2. Import repo at [vercel.com](https://vercel.com)
3. Add environment variables (see `.env.example`)
4. Deploy — Vercel auto-detects Next.js

## Custom Domain (GoDaddy → Vercel)
1. Vercel: Project → Settings → Domains → Add `lumbarcushion.com`
2. GoDaddy DNS: Add A record `@` → Vercel IP, CNAME `www` → `cname.vercel-dns.com`
3. SSL auto-provisions in 5–10 minutes

## Environment Variables
| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_AMAZON_TAG` | Amazon Associates tag |
| `NEXT_PUBLIC_GA4_ID` | Google Analytics 4 ID |
| `NEXT_PUBLIC_ADSENSE_ID` | Google AdSense publisher ID |

© 2026 LumbarCushion.com
