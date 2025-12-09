'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface GlassCardProps {
  children: React.ReactNode
  className?: string
  hoverEffect?: boolean
  glowColor?: 'blue' | 'cyan' | 'amber' | 'emerald' | 'none'
}

export function GlassCard({
  children,
  className,
  hoverEffect = true,
  glowColor = 'blue'
}: GlassCardProps) {
  const glowStyles = {
    blue: 'hover:shadow-blue-500/20 hover:border-blue-500/30',
    cyan: 'hover:shadow-cyan-500/20 hover:border-cyan-500/30',
    amber: 'hover:shadow-amber-500/20 hover:border-amber-500/30',
    emerald: 'hover:shadow-emerald-500/20 hover:border-emerald-500/30',
    none: ''
  }

  return (
    <motion.div
      className={cn(
        'relative rounded-2xl',
        'bg-white/[0.02] backdrop-blur-xl',
        'border border-white/[0.05]',
        hoverEffect && 'transition-all duration-500 hover:shadow-2xl hover:bg-white/[0.04]',
        hoverEffect && glowStyles[glowColor],
        className
      )}
      whileHover={hoverEffect ? { y: -4, scale: 1.01 } : {}}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      {/* Gradient border effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity pointer-events-none" />
      {children}
    </motion.div>
  )
}

interface BentoCardProps {
  children: React.ReactNode
  className?: string
  size?: 'sm' | 'md' | 'lg' | 'wide' | 'tall'
}

export function BentoCard({ children, className, size = 'md' }: BentoCardProps) {
  const sizeStyles = {
    sm: 'col-span-1 row-span-1',
    md: 'col-span-1 row-span-1 md:col-span-1',
    lg: 'col-span-1 row-span-1 md:col-span-2 md:row-span-2',
    wide: 'col-span-1 md:col-span-2 row-span-1',
    tall: 'col-span-1 row-span-1 md:row-span-2',
  }

  return (
    <GlassCard className={cn(sizeStyles[size], 'p-6', className)}>
      {children}
    </GlassCard>
  )
}
