'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Quote } from 'lucide-react'
import Image from 'next/image'

const testimonials = [
  {
    quote: "Gavriel supported us in sharpening our business case and pitch. He has a razor sharp eye and always manages to focus in on the areas of concern your business needs to pay attention to. Prioritize Gav and you won't be disappointed :-)",
    author: "Joost Schouten",
    role: "Founder",
    company: "nestr.io",
    image: "/images/immortalventures/joost-300x300.jpeg",
  },
  {
    quote: "Gavriel has amazingly sharp insights into marketing, and business acumen. He has a special gift to be able to break these insights down clearly. His mentorship and generosity is unmatched. We cannot imagine having a more suitable marketing and business advisor.",
    author: "Jerome Kelsey",
    role: "Founder",
    company: "freeos.io",
    image: "/images/immortalventures/jerome-300x300.jpeg",
  },
]

const credentials = [
  'Merrill Lynch', 'BOA', 'ING Barings', 'Digital Look', 'Stabull',
  'Cryptospace', 'Bitcoin.com', 'Sabio', 'Avaya', 'Wirex',
  'Jarvis', 'Orange Mobile', 'Hypha', 'Pizza Express', 'Renault'
]

const roles = [
  'CMO', 'Head of Marketing', 'Web Marketing Director', 'Acquisition Manager',
  'Product Marketing Manager', 'Product Manager', 'SEO Manager', 'Launch Manager'
]

export function Leadership() {
  return (
    <section id="leadership" className="py-24 bg-zinc-900">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Leadership</h2>
        </motion.div>

        {/* Gavriel Profile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <Card className="bg-zinc-950/50 border-zinc-800 overflow-hidden">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-3">
                {/* Image */}
                <div className="relative h-64 md:h-auto">
                  <Image
                    src="/images/immortalventures/gavriel.png"
                    alt="Gavriel Shaw"
                    fill
                    className="object-cover"
                  />
                </div>
                {/* Bio */}
                <div className="md:col-span-2 p-8">
                  <h3 className="text-3xl font-bold text-white mb-2">Gavriel Shaw</h3>
                  <p className="text-blue-400 font-medium mb-4">Chairman</p>
                  <p className="text-zinc-300 mb-6 leading-relaxed">
                    British-born, living in Latin America, with a 20-year international career
                    supporting GTM for world-class organizations.
                  </p>

                  {/* Credentials */}
                  <div className="mb-6">
                    <p className="text-zinc-500 text-sm mb-2">Companies Supported</p>
                    <div className="flex flex-wrap gap-2">
                      {credentials.slice(0, 10).map((company) => (
                        <span key={company} className="text-xs px-2 py-1 rounded bg-zinc-800 text-zinc-400">
                          {company}
                        </span>
                      ))}
                      <span className="text-xs px-2 py-1 text-zinc-500">+5 more</span>
                    </div>
                  </div>

                  {/* Roles */}
                  <div>
                    <p className="text-zinc-500 text-sm mb-2">Past Roles</p>
                    <div className="flex flex-wrap gap-2">
                      {roles.slice(0, 5).map((role) => (
                        <span key={role} className="text-xs px-2 py-1 rounded bg-blue-500/10 text-blue-400">
                          {role}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="bg-zinc-950/30 border-zinc-800 h-full">
                <CardContent className="p-6">
                  <Quote className="w-8 h-8 text-blue-400/30 mb-4" />
                  <blockquote className="text-zinc-300 mb-6 leading-relaxed">
                    &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>
                  <div className="flex items-center gap-4">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.author}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-white font-medium">{testimonial.author}</p>
                      <p className="text-zinc-500 text-sm">
                        {testimonial.role} | {testimonial.company}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
