# o-sites Project Overview

## Purpose
Multi-site platform hosting multiple websites from a single Next.js codebase. Currently hosts:
- **immortalventures.com** - Venture Builder & Growth Accelerator (default site)
- **gavrielshaw.com** - Personal site for Gavriel Shaw

## Tech Stack
- **Framework**: Next.js 16.0.8 (App Router)
- **React**: 19.2.1
- **TypeScript**: 5.x (strict mode)
- **Styling**: Tailwind CSS 4.x with CSS variables
- **UI Components**: shadcn/ui (new-york style) with Radix primitives
- **Animation**: Framer Motion + GSAP
- **Database**: Supabase (for contact forms)
- **Deployment**: Vercel

## Multi-Site Architecture
- Middleware (`src/middleware.ts`) routes requests based on hostname
- Site configs defined in `src/sites/config.ts`
- Local dev: `localhost:3000` defaults to immortalventures, use `?site=gavrielshaw` to switch
- Each site has dedicated components in `src/components/{sitename}/`

## Key Directories
```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx            # Immortal Ventures homepage
│   ├── gavrielshaw/        # Gavriel Shaw site pages
│   └── api/                # API routes (contact form)
├── components/
│   ├── ui/                 # shadcn/ui components
│   ├── immortalventures/   # IV-specific components
│   └── gavrielshaw/        # GS-specific components
├── sites/                  # Multi-site configuration
└── lib/                    # Utilities (utils.ts, supabase.ts)
docs/                       # Content docs & assets per site
```

## Documentation
Content for each site lives in `docs/{sitename}/`:
- `docs/immortalventurescom/` - IV content, forms, assets
- `docs/gavrielshawcom/` - GS content and assets
