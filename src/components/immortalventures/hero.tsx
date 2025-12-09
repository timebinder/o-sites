'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowDown } from 'lucide-react'

export function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start']
  })

  // Parallax effect on background image
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  // Move text downward as user scrolls (stays visible longer while fading)
  const textY = useTransform(scrollYProgress, [0, 0.5], ['0%', '15%'])

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center overflow-hidden z-[5]">
      {/* Background Image with Parallax - extended beyond viewport for full reveal */}
      <motion.div
        className="absolute -inset-x-0 -top-20 -bottom-40 bg-contain bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/images/immortalventures/immortal-bridge.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center 60%',
          y: bgY
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />
      </motion.div>

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }}
      />

      {/* Content */}
      <motion.div
        className="relative z-10 container mx-auto px-6 text-left"
        style={{ opacity, y: textY }}
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 tracking-tight leading-[1.05] whitespace-nowrap">
          Venture Builder <span className="text-zinc-400">&amp;</span> Growth Accelerator
        </h1>

        <p className="text-zinc-400 font-medium tracking-widest uppercase text-base md:text-lg">
          Immortal Ventures
        </p>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <ArrowDown className="w-5 h-5 text-zinc-500" />
      </motion.div>
    </section>
  )
}
