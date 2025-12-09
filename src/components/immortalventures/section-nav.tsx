'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'

const navItems = [
  { label: 'Portfolio', href: '#portfolio', sectionId: 'portfolio-anchor' },
  { label: 'Accelerator', href: '#accelerator', sectionId: 'accelerator-anchor' },
  { label: 'Advisory', href: '#advisory', sectionId: 'advisory-anchor' },
]

// Sections with light backgrounds need dark text
const lightBgSections = ['accelerator-anchor', 'leadership-anchor']

// All sections to track for background color detection (using anchor IDs)
const allSections = ['portfolio-anchor', 'accelerator-anchor', 'advisory-anchor', 'leadership-anchor']

export function SectionNav() {
  const [activeSection, setActiveSection] = useState<string | null>(null)
  const [isLightBg, setIsLightBg] = useState(false)

  const updateActiveSection = useCallback(() => {
    const scrollY = window.scrollY
    const navHeight = 64 // Height of section nav
    const earlyTriggerOffset = 100 // Trigger section change earlier (about 1 inch before reaching section)
    const scrollPosition = scrollY + navHeight + earlyTriggerOffset // Position in document we're checking

    // Find section that contains the current scroll position
    // Use offsetTop to get actual document position (not affected by sticky positioning)
    let currentSection: string | null = null

    // Get all section positions in document coordinates
    const sectionPositions: { id: string; top: number; bottom: number }[] = []

    for (const sectionId of allSections) {
      const element = document.getElementById(sectionId)
      if (element) {
        // Get element's position relative to document, not viewport
        // For elements inside sticky containers, we need to traverse up to find the true offset
        let top = 0
        let el: HTMLElement | null = element
        while (el) {
          top += el.offsetTop
          el = el.offsetParent as HTMLElement | null
        }
        const height = element.offsetHeight
        sectionPositions.push({ id: sectionId, top, bottom: top + height })
      }
    }

    // Sort by position (should already be in order, but just to be safe)
    sectionPositions.sort((a, b) => a.top - b.top)

    // Find which section contains the current scroll position
    for (const section of sectionPositions) {
      if (scrollPosition >= section.top && scrollPosition < section.bottom) {
        currentSection = section.id
        break
      }
    }

    // If we're past all sections, highlight the last one
    if (!currentSection && sectionPositions.length > 0) {
      const lastSection = sectionPositions[sectionPositions.length - 1]
      if (scrollPosition >= lastSection.top) {
        currentSection = lastSection.id
      }
    }

    if (currentSection) {
      setActiveSection(currentSection)
      setIsLightBg(lightBgSections.includes(currentSection))
    } else {
      setActiveSection(null)
      setIsLightBg(false)
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      updateActiveSection()
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    updateActiveSection()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [updateActiveSection])

  // Determine text colors based on background
  const getNavItemClasses = (sectionId: string) => {
    const isActive = activeSection === sectionId

    if (isLightBg) {
      // Dark text for light backgrounds
      return isActive
        ? 'text-slate-900'
        : 'text-slate-500 hover:text-slate-700'
    } else {
      // Light text for dark backgrounds
      return isActive
        ? 'text-white'
        : 'text-zinc-500 hover:text-zinc-300'
    }
  }

  const getUnderlineColor = () => {
    return isLightBg ? 'bg-slate-900' : 'bg-white'
  }

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] bg-transparent pt-1">
      <div className="container mx-auto px-6">
        <nav className="flex items-center justify-center gap-8 md:gap-16 h-16">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`relative text-base md:text-lg font-medium transition-colors ${getNavItemClasses(item.sectionId)}`}
            >
              {item.label}
              {activeSection === item.sectionId && (
                <motion.div
                  layoutId="activeSection"
                  className={`absolute -bottom-[1px] left-0 right-0 h-0.5 ${getUnderlineColor()}`}
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </a>
          ))}
        </nav>
      </div>
    </div>
  )
}
