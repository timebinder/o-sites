'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Brain, Shield, Heart, Users, Video, Plane, Code, Puzzle, Briefcase, MessageSquare, Layout } from 'lucide-react'

// Main portfolio ventures - exact text from docs
const ventures = [
  {
    tagline: 'Cognitive Development Platform',
    icon: Brain,
  },
  {
    tagline: 'Trut In Biometrics Initiative',
    icon: Shield,
  },
  {
    tagline: 'Radical Health Extension',
    icon: Heart,
  },
]

// Pipeline ventures - exact text from docs
const pipeline = [
  { name: "'Origin of Value' Collaboration Platform", icon: Users },
  { name: 'Rando Cams', tagline: 'Hot Takes with Friends & Strangers', icon: Video },
  { name: 'Live Mixers', tagline: 'In Real Life Meetup Events', icon: Users },
  { name: 'Travel Hub', tagline: 'AI-Assisted Travel Arrangements', icon: Plane },
  { name: 'Hack-At-This', tagline: 'Streamlined Hackathon Platform', icon: Code },
  { name: 'Love Puzl', tagline: 'Modern Solutions For Singles Matchmaking and Couples Intimacy', icon: Puzzle },
  { name: 'Work Buddy', tagline: 'Remote Co-Working Sessions', icon: Briefcase },
  { name: 'Ask Me Anything', tagline: 'AMA Campaigns for Consumer & Business Influencers', icon: MessageSquare },
  { name: 'Infinite Canvas', tagline: 'Visual Thought Organizer', icon: Layout },
]

export function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-zinc-950">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Card className="bg-zinc-900/50 border-zinc-800 overflow-hidden">
            <CardContent className="p-8 md:p-12">
              {/* Header */}
              <motion.h2
                className="text-4xl md:text-5xl font-bold text-white mb-4 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Our Venture Portfolio
              </motion.h2>

              {/* Active Ventures */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 mb-16"
              >
                {ventures.map((venture, index) => (
                  <motion.div
                    key={venture.tagline}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="flex flex-col items-center text-center p-6 rounded-xl bg-zinc-800/30 border border-zinc-700/50 hover:border-blue-500/30 transition-colors"
                  >
                    <div className="w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center mb-4">
                      <venture.icon className="w-8 h-8 text-blue-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">{venture.tagline}</h3>
                  </motion.div>
                ))}
              </motion.div>

              {/* Divider */}
              <div className="border-t border-zinc-800 my-8" />

              {/* Pipeline Header */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-8"
              >
                <h3 className="text-2xl font-semibold text-zinc-300">In The Pipeline</h3>
              </motion.div>

              {/* Pipeline Grid */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
              >
                {pipeline.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.05 }}
                    className="p-4 rounded-lg bg-zinc-800/20 border border-zinc-800/50 hover:border-zinc-700 transition-colors"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <item.icon className="w-5 h-5 text-zinc-500 shrink-0" />
                      <span className="text-white font-medium">{item.name}</span>
                    </div>
                    {item.tagline && <p className="text-zinc-500 text-sm pl-8">{item.tagline}</p>}
                  </motion.div>
                ))}
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
