# o-sites Development Commands

## Development
```bash
npm run dev          # Start dev server at localhost:3000
npm run build        # Production build
npm run start        # Start production server
npm run lint         # Run ESLint
```

## Local Multi-Site Testing
```bash
# Default: immortalventures.com
http://localhost:3000

# Switch to gavrielshaw.com
http://localhost:3000?site=gavrielshaw
```

## shadcn/ui Components
```bash
npx shadcn@latest add [component]   # Add a new UI component
```

## Deployment (Vercel)
```bash
vercel                    # Deploy preview
vercel --prod --yes       # Deploy to production
```

## Git
```bash
git add .
git commit -m "message"
git push
```

## Useful File Operations (macOS/Darwin)
```bash
ls -la                    # List files with details
find . -name "*.tsx"      # Find TypeScript React files
grep -r "pattern" src/    # Search in source
```
