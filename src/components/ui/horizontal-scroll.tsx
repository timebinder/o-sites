'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { cn } from '@/lib/utils'

interface HorizontalScrollProps {
  children: React.ReactNode
  className?: string
}

export function HorizontalScroll({ children, className }: HorizontalScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <div ref={containerRef} className={cn('relative', className)}>
      <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 -mx-6 px-6">
        {children}
      </div>
      {/* Gradient fade edges */}
      <div className="absolute left-0 top-0 bottom-4 w-12 bg-gradient-to-r from-zinc-950 to-transparent pointer-events-none z-10" />
      <div className="absolute right-0 top-0 bottom-4 w-12 bg-gradient-to-l from-zinc-950 to-transparent pointer-events-none z-10" />
    </div>
  )
}

interface ScrollCardProps {
  children: React.ReactNode
  className?: string
  index?: number
}

export function ScrollCard({ children, className, index = 0 }: ScrollCardProps) {
  return (
    <motion.div
      className={cn(
        'flex-shrink-0 snap-center',
        'w-[300px] md:w-[350px]',
        className
      )}
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {children}
    </motion.div>
  )
}

interface ParallaxSectionProps {
  children: React.ReactNode
  className?: string
  speed?: number
}

export function ParallaxSection({ children, className, speed = 0.5 }: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  })

  const y = useTransform(scrollYProgress, [0, 1], [100 * speed, -100 * speed])

  return (
    <div ref={ref} className={cn('relative overflow-hidden', className)}>
      <motion.div style={{ y }}>
        {children}
      </motion.div>
    </div>
  )
}
