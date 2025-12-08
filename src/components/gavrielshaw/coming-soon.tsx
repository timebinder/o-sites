'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export function ComingSoon() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-zinc-950 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-purple-500/20 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-blue-500/20 blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-purple-400 font-medium tracking-widest uppercase mb-4">
            Insight • Growth • Culture
          </p>
        </motion.div>

        <motion.h1
          className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          Gavriel Shaw
        </motion.h1>

        <motion.p
          className="text-xl text-zinc-400 max-w-2xl mx-auto mb-8 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          With a reverence for human history, focused on the evolution of a
          human-centric marketplace that will reach across the stars.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-12"
        >
          <p className="text-zinc-500 mb-2">New site launching soon</p>
          <div className="flex items-center justify-center gap-2 text-zinc-600">
            <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
            <span>Currently rebuilding</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Button
            size="lg"
            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 text-lg"
            asChild
          >
            <a href="https://immortalventures.com" target="_blank" rel="noopener noreferrer">
              Visit Immortal Ventures
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </Button>
        </motion.div>

        <motion.footer
          className="absolute bottom-8 left-0 right-0 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p className="text-zinc-600 text-sm">
            20 years in finance, product & marketing
          </p>
        </motion.footer>
      </div>
    </section>
  )
}
