'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'

const clients = [
  { name: 'Premium Car Service' },
  { name: 'Stabull | Web3 DeFi' },
  { name: 'Travel Brand, Stealth Mode' },
]

export function AdvisoryServices() {
  return (
    <section id="advisory" className="py-24 bg-black">
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
                className="text-3xl md:text-4xl font-bold text-white mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Advisory Services — helping startups Launch, Scale, &amp; Pitch
              </motion.h2>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 mb-8"
              >
                {clients.map((client, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-lg bg-zinc-800/30 border border-zinc-700/50 text-center"
                  >
                    <span className="text-white font-medium">{client.name}</span>
                  </div>
                ))}
              </motion.div>

              <motion.p
                className="text-zinc-400 leading-relaxed mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Recent or current engagements. We work with very few one-to-one clients at a time to provide fully-focused attention that actually moves the needle.
              </motion.p>

              <motion.p
                className="text-zinc-400 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                If you&apos;re funded, apply to the Accelerator instead.
              </motion.p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
