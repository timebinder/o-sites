# o-sites: Marketing & Corporate Websites

**What**: Static marketing sites (Immortal Ventures, Gavriel Shaw portfolio)
**Tech**: Next.js 16 with Tailwind CSS, Framer Motion animations
**Serena Project**: Not applicable (no serena project configured)

---

## Quick Reference

| What | Where |
|------|-------|
| **Port** | 3006 (IMPORTANT: Do NOT use 3000, 3001, 3002 - those are for other projects) |
| **Start Dev** | `PORT=3006 npm run dev` |
| **Deploy** | `vercel --prod` |

---

## Port Allocation (All Oriva Projects)

| Project | Port | Purpose |
|---------|------|---------|
| o-orig | 3000 | Oriva Originals web launcher |
| o-core | 3001 | Oriva Core web app |
| o-platform | 3002 | BFF/API proxy |
| **o-sites** | **3006** | Marketing websites |
| o-orig | 8084 | Metro bundler (mobile) |
| o-core | 8081 | Metro bundler (mobile) |
| OrivaLocalDB | 54341 | Local Supabase |

---

## Sites Structure

- `/` - Immortal Ventures (venture builder site)
- `/gavrielshaw` - Personal portfolio site

---

## Development Notes

- Always start with `PORT=3006 npm run dev`
- Never kill processes on ports 3000, 3001, 3002 as they may be running other Oriva projects
