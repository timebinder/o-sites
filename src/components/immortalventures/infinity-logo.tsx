'use client'

interface InfinityLogoProps {
  className?: string
  color?: string
}

// Elegant, professional infinity loop for IV brand
export function InfinityLogo({ className = '', color = '#1e293b' }: InfinityLogoProps) {
  return (
    <svg
      viewBox="0 0 80 32"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 16c0-6.627 5.373-12 12-12 4.418 0 8 3.582 8 8s-3.582 8-8 8c-6.627 0-12-5.373-12-12zm20 0c0 6.627 5.373 12 12 12 4.418 0 8-3.582 8-8s-3.582-8-8-8c-6.627 0-12 5.373-12 12z"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

// Minimalist horizontal infinity - cleaner for nav
export function InfinityLogoMinimal({ className = '', color = '#1e293b' }: InfinityLogoProps) {
  return (
    <svg
      viewBox="0 0 60 24"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M30 12
           c0-5.523-4.477-10-10-10
           c-5.523 0-10 4.477-10 10
           c0 5.523 4.477 10 10 10
           c5.523 0 10-4.477 10-10
           c0 5.523 4.477 10 10 10
           c5.523 0 10-4.477 10-10
           c0-5.523-4.477-10-10-10
           c-5.523 0-10 4.477-10 10"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

// Flowing infinity with smooth curves - most elegant
export function InfinityLogoFlowing({ className = '', color = '#1e293b' }: InfinityLogoProps) {
  return (
    <svg
      viewBox="0 0 100 40"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M50 20
           C50 8 62 4 75 4
           C88 4 96 12 96 20
           C96 28 88 36 75 36
           C62 36 50 32 50 20
           C50 8 38 4 25 4
           C12 4 4 12 4 20
           C4 28 12 36 25 36
           C38 36 50 32 50 20Z"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

// Modern geometric infinity with overlap effect
export function InfinityLogoModern({ className = '', primaryColor = '#1e3a5f', secondaryColor = '#3b82f6' }: { className?: string; primaryColor?: string; secondaryColor?: string }) {
  return (
    <svg
      viewBox="0 0 100 40"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Back loop */}
      <ellipse
        cx="30"
        cy="20"
        rx="20"
        ry="14"
        stroke={primaryColor}
        strokeWidth="2.5"
        opacity="0.4"
      />
      {/* Front loop */}
      <ellipse
        cx="70"
        cy="20"
        rx="20"
        ry="14"
        stroke={secondaryColor}
        strokeWidth="2.5"
      />
      {/* Connection lines */}
      <path
        d="M50 6 L50 34"
        stroke={primaryColor}
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity="0.3"
      />
    </svg>
  )
}

// Simple elegant - two overlapping circles with gradient
export function InfinityLogoGradient({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 40"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="ivGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#1e3a5f" />
          <stop offset="100%" stopColor="#3b82f6" />
        </linearGradient>
      </defs>
      <path
        d="M50 20
           C50 10 60 6 72 6
           C84 6 94 12 94 20
           C94 28 84 34 72 34
           C60 34 50 30 50 20
           C50 10 40 6 28 6
           C16 6 6 12 6 20
           C6 28 16 34 28 34
           C40 34 50 30 50 20Z"
        stroke="url(#ivGradient)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
