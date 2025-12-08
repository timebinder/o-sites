'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'

export function Mission() {
  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Card className="bg-zinc-900/50 border-zinc-800 overflow-hidden">
            <CardContent className="p-8 md:p-12">
              <motion.h2
                className="text-3xl md:text-4xl font-bold text-white mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Our Mission
              </motion.h2>
              <motion.p
                className="text-lg md:text-xl text-zinc-300 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Putting Humans First: Artificial Intelligence Is Cool — But Let&apos;s Prioritize Human Wellbeing As We Learn To Accelerate Beyond Mechanical-Robotics &amp; Large Language Models Into Bio-Energetic Quantum Mastery Over The Next 1,000 Years And Beyond
              </motion.p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-8"
        >
          <Card className="bg-zinc-900/30 border-zinc-800">
            <CardContent className="p-8 md:p-12">
              <motion.h3
                className="text-2xl md:text-3xl font-bold text-white mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                What We Do
              </motion.h3>
              <motion.p
                className="text-lg text-zinc-400 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Immortal Ventures builds and supports software startups (from digital platforms to mobile apps) through our private Venture Studio and a public Growth Accelerator
              </motion.p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
