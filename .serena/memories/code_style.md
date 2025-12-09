# o-sites Code Style & Conventions

## TypeScript
- Strict mode enabled
- Use TypeScript for all files (`.ts`, `.tsx`)
- Path alias: `@/*` maps to `./src/*`
- Interfaces preferred over types for object shapes

## React/Next.js
- Use function components with named exports
- Client components marked with `'use client'` directive at top
- Server components are default (no directive needed)
- Use Next.js App Router conventions

## Component Structure
```tsx
'use client' // Only if needed

import { motion } from 'framer-motion'
import { Component } from '@/components/ui/component'
import { Icon } from 'lucide-react'

export function ComponentName() {
  return (
    <section className="...">
      {/* Content */}
    </section>
  )
}
```

## Styling
- Tailwind CSS for all styling
- CSS variables for theming (defined in globals.css)
- shadcn/ui components use "new-york" style
- Responsive: mobile-first with `sm:`, `md:`, `lg:` breakpoints
- Common pattern: `className="text-white bg-slate-900 hover:bg-slate-800"`

## Animation
- Framer Motion for component animations
- GSAP for complex/scroll-based animations
- Standard motion pattern:
```tsx
<motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: 'easeOut' }}
>
```

## File Naming
- Components: PascalCase (`Hero.tsx`, `ContactForm.tsx`)
- Utilities: camelCase (`utils.ts`, `supabase.ts`)
- Config files: kebab-case or camelCase (`config.ts`)

## Imports Order
1. React/Next.js imports
2. Third-party libraries
3. Internal components (`@/components/...`)
4. Utilities (`@/lib/...`)
5. Types (if separate)
