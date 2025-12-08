'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'

export function PirateMetrics() {
  return (
    <section className="py-24 bg-zinc-950">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Card className="bg-zinc-900/50 border-zinc-800 overflow-hidden">
            <CardContent className="p-8 md:p-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="flex flex-col items-center"
              >
                <div className="relative w-full max-w-4xl mb-8">
                  <Image
                    src="/images/immortalventures/aaarr-journey-1-scaled.png"
                    alt="AARRR Pirate Metrics Framework"
                    width={1200}
                    height={600}
                    className="w-full h-auto rounded-lg"
                  />
                </div>
                <motion.p
                  className="text-xl md:text-2xl text-zinc-300 text-center font-medium"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  Putting the AARRR back in growth with &apos;Pirate Metrics&apos;
                </motion.p>
                <motion.p
                  className="text-sm text-zinc-500 mt-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  (Ref: Lean Analytics, published by O&apos;Reilly)
                </motion.p>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
