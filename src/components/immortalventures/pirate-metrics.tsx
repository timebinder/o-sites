'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'

export function PirateMetrics() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  })

  // Image slides in from right as user scrolls through the tall container
  // The scroll is "locked" because we're in a sticky section while scrolling through extra height
  const imageX = useTransform(scrollYProgress, [0, 0.8], ['100%', '0%'])
  const imageOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1])

  // Text fades in earlier
  const textOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1])

  return (
    <div ref={containerRef} className="relative h-[200vh] z-[60]">
      {/* Sticky container that stays in view while we scroll through the height */}
      <div className="sticky top-14 md:top-16 h-screen bg-slate-900 overflow-hidden flex flex-col justify-center">
        {/* Text above image */}
        <motion.div
          className="container mx-auto px-6 mb-8 md:mb-12"
          style={{ opacity: textOpacity }}
        >
          <div className="max-w-3xl">
            <p className="text-xl md:text-2xl text-white/80 leading-relaxed">
              Putting the AARRR back in growth with &apos;Pirate Metrics&apos;
            </p>
            <p className="text-sm text-slate-500 mt-4">
              (Ref: Lean Analytics, published by O&apos;Reilly)
            </p>
          </div>
        </motion.div>

        {/* Full-width image with horizontal scroll reveal */}
        <motion.div
          className="relative w-full"
          style={{ x: imageX, opacity: imageOpacity }}
        >
          <Image
            src="/images/immortalventures/aaarr-journey-1-scaled.png"
            alt="AARRR Pirate Metrics Framework"
            width={1920}
            height={800}
            className="w-full h-auto"
            priority
          />
        </motion.div>

        {/* Background accent */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-900/10 to-transparent pointer-events-none" />
      </div>
    </div>
  )
}
