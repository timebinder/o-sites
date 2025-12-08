// Multi-site configuration
// Each site maps a domain to its configuration

export interface SiteConfig {
  name: string
  domain: string
  title: string
  description: string
  theme: {
    primary: string
    accent: string
  }
  social?: {
    twitter?: string
    linkedin?: string
    github?: string
  }
  analytics?: {
    gaId?: string
  }
}

export const sites: Record<string, SiteConfig> = {
  immortalventures: {
    name: 'immortalventures',
    domain: 'immortalventures.co',
    title: 'Immortal Ventures | Venture Builder & Growth Accelerator',
    description: 'Putting Humans First: Building and accelerating software startups through our private Venture Studio and public Growth Accelerator.',
    theme: {
      primary: '#0f172a', // slate-900
      accent: '#3b82f6',  // blue-500
    },
  },
  gavrielshaw: {
    name: 'gavrielshaw',
    domain: 'gavrielshaw.com',
    title: 'Gavriel Shaw | Insight, Growth & Culture',
    description: 'With a reverence for human history, focused on the evolution of a human-centric marketplace that will reach across the stars.',
    theme: {
      primary: '#18181b', // zinc-900
      accent: '#a855f7',  // purple-500
    },
  },
}

// Helper to get site by hostname
export function getSiteByHostname(hostname: string): SiteConfig | null {
  // Handle localhost development
  if (hostname.includes('localhost') || hostname.includes('127.0.0.1')) {
    // Default to immortalventures in dev, or use query param
    return sites.immortalventures
  }

  // Find matching site
  for (const site of Object.values(sites)) {
    if (hostname.includes(site.domain) || hostname.includes(site.name)) {
      return site
    }
  }

  return null
}

// Get site from subdomain pattern (for Vercel preview URLs)
export function getSiteFromSubdomain(hostname: string): SiteConfig | null {
  const subdomain = hostname.split('.')[0]
  return sites[subdomain] || null
}
