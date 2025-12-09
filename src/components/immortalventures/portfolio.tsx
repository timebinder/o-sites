'use client'

import { useRef, useEffect, useState } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'

const allVentures = [
  {
    name: 'Oriva',
    tagline: 'Collaboration Platform',
    logo: '/images/immortalventures/oriva-logo.png',
  },
  {
    name: 'Supermind',
    tagline: 'Cognitive Development Platform',
    logo: '/images/immortalventures/supermind-logo-768x161.png',
  },
  {
    name: 'LEF',
    tagline: 'Trust In Biometrics Initiative',
    logo: '/images/immortalventures/LEF-logo-light-background-768x850.png',
  },
  {
    name: 'Levity Labs',
    tagline: 'Radical Health Extension',
    logo: '/images/immortalventures/levity-labs-logo-768x974.png',
  },
  {
    name: 'Rando Cams',
    tagline: 'Hot Takes with Friends & Strangers',
  },
  {
    name: 'Live Mixers',
    tagline: 'In Real Life Meetup Events',
  },
  {
    name: 'Travel Hub',
    tagline: 'AI-Assisted Travel Arrangements',
  },
  {
    name: 'Hack-At-This',
    tagline: 'Streamlined Hackathon Platform',
  },
  {
    name: 'Love Puzl',
    tagline: 'Modern Solutions For Singles Matchmaking and Couples Intimacy',
    logo: '/images/immortalventures/love-puzl-logo.svg',
  },
  {
    name: 'Work Buddy',
    tagline: 'Remote Co-Working Sessions',
  },
  {
    name: 'Ask Me Anything',
    tagline: 'AMA Campaigns for Consumer & Business Influencers',
  },
  {
    name: 'Infinite Canvas',
    tagline: 'Visual Thought Organizer',
  },
]

export function Portfolio() {
  const acceleratorRef = useRef<HTMLElement | null>(null)
  const [acceleratorElement, setAcceleratorElement] = useState<HTMLElement | null>(null)

  // Find the Accelerator section after mount
  useEffect(() => {
    const el = document.getElementById('accelerator')
    if (el) {
      acceleratorRef.current = el
      setAcceleratorElement(el)
    }
  }, [])

  // Track when the Accelerator section enters the viewport from below
  const { scrollYProgress } = useScroll({
    target: acceleratorElement ? { current: acceleratorElement } : undefined,
    offset: ['start end', 'start start']
  })

  // Fade to white as Accelerator scrolls up
  // Start fade earlier (15%) so cards are fading before Accelerator border cuts across
  const whiteOverlayOpacity = useTransform(scrollYProgress, [0.15, 0.5], [0, 1])

  return (
    <div className="sticky top-0 h-screen z-20">
      <section id="portfolio" className="relative h-full flex flex-col justify-center py-16 md:py-20 bg-zinc-950">
        {/* Subtle starry background effect */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: 'radial-gradient(ellipse at 50% 0%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)',
          }}
        />
        <div className="container mx-auto px-6 relative">
          {/* Header */}
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-[1.15]">
              Our Venture Portfolio
            </h2>
          </div>

          {/* Unified Portfolio Grid - 5 columns on desktop */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
            {allVentures.map((venture, index) => (
              <motion.div
                key={venture.name}
                className="group relative rounded-xl bg-white border border-zinc-200 hover:border-zinc-400 hover:shadow-lg p-4 cursor-pointer transition-all duration-300 h-32"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.03 }}
                whileHover={{ y: -3, scale: 1.02 }}
              >
                <div className="flex flex-col items-center justify-center text-center h-full">
                  {venture.logo ? (
                    <div className="flex items-center justify-center mb-2 h-14">
                      <Image
                        src={venture.logo}
                        alt={venture.name}
                        width={120}
                        height={48}
                        className="object-contain h-10 md:h-11 w-auto transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  ) : (
                    <h3 className="text-base md:text-lg font-bold text-zinc-900 mb-1 transition-transform duration-300 group-hover:scale-105 leading-tight">
                      {venture.name}
                    </h3>
                  )}
                  <p className="text-xs text-zinc-600 font-medium leading-tight line-clamp-2">{venture.tagline}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* White fade overlay for transition to Accelerator */}
        <motion.div
          className="absolute inset-0 bg-white pointer-events-none z-10"
          style={{ opacity: whiteOverlayOpacity }}
        />
      </section>
    </div>
  )
}
