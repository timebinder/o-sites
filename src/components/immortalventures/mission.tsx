'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export function Mission() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end']
  })

  // Horizontal split - headline goes up, body text goes down
  // Starts at 40% scroll progress to give time to read Our Mission
  const topDoorY = useTransform(scrollYProgress, [0.4, 0.8], ['0%', '-100%'])
  const bottomDoorY = useTransform(scrollYProgress, [0.4, 0.8], ['0%', '100%'])

  return (
    <div ref={sectionRef} className="relative h-[300vh]">
      {/* Single sticky container that stays in place for the entire scroll */}
      <div className="sticky top-0 h-screen z-10 overflow-hidden">
        {/* What We Do - sits BEHIND the doors */}
        <section className="absolute inset-0 flex items-center justify-center bg-zinc-900">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 leading-[1.15]">
                What We Do
              </h2>
              <p className="text-xl md:text-2xl text-zinc-400 leading-relaxed max-w-3xl mx-auto">
                Immortal Ventures builds and supports software startups (from digital platforms to mobile apps) through our private Venture Studio and a public Growth Accelerator
              </p>
            </div>
          </div>
        </section>

        {/* Our Mission - TOP DOOR (only headline - positioned at bottom of door) */}
        <motion.div
          className="absolute top-0 left-0 w-full h-1/2 overflow-hidden"
          style={{ y: topDoorY }}
        >
          <section className="absolute inset-0 flex items-end justify-center pb-4 bg-slate-900">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: 'radial-gradient(ellipse at 50% 100%, rgba(59, 130, 246, 0.1) 0%, transparent 60%)',
              }}
            />
            <div className="container mx-auto px-6 relative">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-[1.1]">
                  Our Mission
                </h2>
              </div>
            </div>
          </section>
        </motion.div>

        {/* Our Mission - BOTTOM DOOR (only body text - positioned at top of door) */}
        <motion.div
          className="absolute bottom-0 left-0 w-full h-1/2 overflow-hidden"
          style={{ y: bottomDoorY }}
        >
          <section className="absolute inset-0 flex items-start justify-center pt-4 bg-slate-900">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: 'radial-gradient(ellipse at 50% 0%, rgba(59, 130, 246, 0.1) 0%, transparent 60%)',
              }}
            />
            <div className="container mx-auto px-6 relative">
              <div className="max-w-4xl mx-auto text-center">
                <p className="text-xl md:text-2xl text-zinc-300 leading-relaxed max-w-3xl mx-auto">
                  <span className="font-semibold text-blue-400">Putting Humans First:</span> Artificial Intelligence Is Cool — But Let&apos;s Prioritize Human Wellbeing As We Learn To Accelerate Beyond Mechanical-Robotics &amp; Large Language Models Into Bio-Energetic Quantum Mastery Over The Next 1,000 Years And Beyond
                </p>
              </div>
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  )
}
