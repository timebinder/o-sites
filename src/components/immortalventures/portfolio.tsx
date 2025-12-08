'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Brain, Shield, Heart, Users, Video, Plane, Code, Puzzle, Briefcase, MessageSquare, Layout } from 'lucide-react'

const ventures = [
  {
    name: 'Oriva',
    tagline: 'Cognitive Development Platform',
    icon: Brain,
    status: 'Active',
  },
  {
    name: 'Trust Initiative',
    tagline: 'Trust In Biometrics',
    icon: Shield,
    status: 'Active',
  },
  {
    name: 'LEF',
    tagline: 'Radical Health Extension',
    icon: Heart,
    status: 'Active',
  },
  {
    name: 'Nestr',
    tagline: "'Origin of Value' Collaboration",
    icon: Users,
    status: 'Active',
  },
]

const pipeline = [
  { name: 'Rando Cams', tagline: 'Hot Takes with Friends & Strangers', icon: Video },
  { name: 'Live Mixers', tagline: 'In Real Life Meetup Events', icon: Users },
  { name: 'Travel Hub', tagline: 'AI-Assisted Travel Arrangements', icon: Plane },
  { name: 'Hack-At-This', tagline: 'Streamlined Hackathon Platform', icon: Code },
  { name: 'Love Puzl', tagline: 'Singles Matchmaking & Couples Intimacy', icon: Puzzle },
  { name: 'Work Buddy', tagline: 'Remote Co-Working Sessions', icon: Briefcase },
  { name: 'Ask Me Anything', tagline: 'AMA Campaigns for Influencers', icon: MessageSquare },
  { name: 'Infinite Canvas', tagline: 'Visual Thought Organizer', icon: Layout },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-zinc-950">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Venture Portfolio
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Building and supporting software startups through our private Venture Studio
          </p>
        </motion.div>

        {/* Active Ventures */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {ventures.map((venture) => (
            <motion.div key={venture.name} variants={itemVariants}>
              <Card className="bg-zinc-900/50 border-zinc-800 hover:border-blue-500/50 transition-colors h-full">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center mb-4">
                    <venture.icon className="w-8 h-8 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{venture.name}</h3>
                  <p className="text-zinc-400 text-sm mb-3">{venture.tagline}</p>
                  <Badge variant="secondary" className="bg-green-500/10 text-green-400 border-green-500/20">
                    {venture.status}
                  </Badge>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Pipeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h3 className="text-2xl font-semibold text-zinc-300 mb-2">In The Pipeline</h3>
          <p className="text-zinc-500">Future ventures in development</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {pipeline.map((item) => (
            <motion.div key={item.name} variants={itemVariants}>
              <div className="p-4 rounded-lg bg-zinc-900/30 border border-zinc-800/50 hover:border-zinc-700 transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  <item.icon className="w-5 h-5 text-zinc-500" />
                  <span className="text-white font-medium">{item.name}</span>
                </div>
                <p className="text-zinc-500 text-sm">{item.tagline}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
