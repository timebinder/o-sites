# o-sites Task Completion Checklist

## Before Committing

### 1. Build Check
```bash
npm run build
```
Ensure no TypeScript or build errors.

### 2. Lint Check
```bash
npm run lint
```
Fix any ESLint warnings/errors.

### 3. Visual Verification
- Test on localhost:3000
- Check both sites if changes affect shared code:
  - `http://localhost:3000` (immortalventures)
  - `http://localhost:3000?site=gavrielshaw`

### 4. Responsive Check
Test at common breakpoints:
- Mobile: 375px
- Tablet: 768px
- Desktop: 1280px+

## Deployment
- Vercel auto-deploys on push to main
- Preview deployments for PRs
- Production: `vercel --prod --yes`

## Common Issues to Avoid
- Don't read large image files directly (Claude Code has size limits)
- Use Playwright browser_snapshot for visual verification instead
- Ensure 'use client' directive for components using hooks/interactivity
- Check that Supabase env vars are set for contact form functionality
