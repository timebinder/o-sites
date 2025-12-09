'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navItems = [
  { label: 'Portfolio', href: '#portfolio', sectionId: 'portfolio-anchor' },
  { label: 'Accelerator', href: '#accelerator', sectionId: 'accelerator-anchor' },
  { label: 'Advisory', href: '#advisory', sectionId: 'advisory-anchor' },
]

// Sections with light backgrounds need dark text
const lightBgSections = ['accelerator-anchor', 'leadership-anchor']

// All sections to track for background color detection (using anchor IDs)
const allSections = ['portfolio-anchor', 'accelerator-anchor', 'advisory-anchor', 'leadership-anchor']

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState<string | null>(null)
  const [isLightBg, setIsLightBg] = useState(false)

  const updateActiveSection = useCallback(() => {
    const scrollY = window.scrollY
    const navbarHeight = 80 // Approximate navbar height
    const scrollPosition = scrollY + navbarHeight // Position in document we're checking

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
      // Reset when no tracked section is at navbar position
      setActiveSection(null)
      setIsLightBg(false)
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      updateActiveSection()
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    // Run once on mount
    updateActiveSection()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [updateActiveSection])

  // Determine text colors based on background
  const getNavItemClasses = (sectionId: string) => {
    const isActive = activeSection === sectionId

    if (isLightBg) {
      // Dark text for light backgrounds
      return isActive
        ? 'text-slate-900 font-semibold'
        : 'text-slate-600 hover:text-slate-900'
    } else {
      // Light text for dark backgrounds
      return isActive
        ? 'text-white font-semibold'
        : 'text-zinc-400 hover:text-white'
    }
  }

  const getUnderlineColor = () => {
    return isLightBg ? 'bg-slate-900' : 'bg-white'
  }

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-[110] transition-all duration-300 pt-2 ${
          isScrolled
            ? isLightBg
              ? 'bg-white/90 backdrop-blur-md border-b border-zinc-200'
              : 'bg-black/90 backdrop-blur-md border-b border-zinc-800'
            : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-center h-16 md:h-20">
            {/* Desktop Nav - Centered */}
            <nav className="hidden md:flex items-center gap-12">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={`relative text-sm font-medium transition-colors ${getNavItemClasses(item.sectionId)}`}
                >
                  {item.label}
                  {activeSection === item.sectionId && (
                    <motion.div
                      layoutId="navActiveUnderline"
                      className={`absolute -bottom-1 left-0 right-0 h-0.5 ${getUnderlineColor()}`}
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              className={`md:hidden p-2 transition-colors ${isLightBg ? 'text-slate-900' : 'text-white'}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-[105] bg-black/95 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="flex flex-col items-center justify-center h-full gap-8">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={`text-2xl transition-colors ${
                    activeSection === item.sectionId
                      ? 'text-white font-semibold'
                      : 'text-zinc-400 hover:text-white'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
