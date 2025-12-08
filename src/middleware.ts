import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Multi-site routing middleware
// Routes requests to the correct site based on hostname

export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host') || ''
  const url = request.nextUrl.clone()

  // Determine which site based on hostname
  let siteName = 'immortalventures' // default

  if (hostname.includes('gavrielshaw')) {
    siteName = 'gavrielshaw'
  } else if (hostname.includes('immortalventures') || hostname.includes('immortal')) {
    siteName = 'immortalventures'
  }

  // For local development, check for site query param or subdomain simulation
  if (hostname.includes('localhost') || hostname.includes('127.0.0.1')) {
    const siteParam = url.searchParams.get('site')
    if (siteParam && ['immortalventures', 'gavrielshaw'].includes(siteParam)) {
      siteName = siteParam
    }
  }

  // Add site context to headers for use in layouts/pages
  const response = NextResponse.next()
  response.headers.set('x-site-name', siteName)

  return response
}

export const config = {
  matcher: [
    // Match all paths except static files and api routes
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}
