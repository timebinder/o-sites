'use client'

import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'

export function Thesis() {
  return (
    <section className="py-24 bg-zinc-950 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Our Thesis: We Stand at the Cusp of Geometric Abundance.
          </h2>

          <p className="text-xl md:text-2xl text-zinc-300 mb-8 leading-relaxed">
            Thrive for 1,000 Years, Then Decide What&apos;s Next.
          </p>

          <p className="text-lg text-zinc-400 mb-8 leading-relaxed">
            We see a civilization that expands into the infinite cosmos, navigating untold realms
            of cognitive experience with exhilarating discovery. All 8 Billion+ human collaborators
            onboard the spaceship we call Earth, exploring infinite potential.
          </p>

          <p className="text-xl md:text-2xl text-zinc-300 mb-12 font-medium">
            Impacting The Next 1,000 Years
          </p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-8 rounded-2xl bg-zinc-800/30 border border-zinc-700/50"
          >
            <Quote className="w-10 h-10 text-blue-400/50 mx-auto mb-4" />
            <blockquote className="text-2xl md:text-3xl text-white font-light italic mb-4">
              &ldquo;Aim for the company of Immortals&rdquo;
            </blockquote>
            <cite className="text-zinc-400 not-italic">
              — David Ogilvy, Ogilvy Advertising Agency
            </cite>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
