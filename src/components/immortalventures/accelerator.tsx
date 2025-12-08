'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  TrendingUp,
  Unlock,
  Sprout,
  Calendar,
  Users,
  Video,
  Clock,
  CheckCircle2,
  Quote
} from 'lucide-react'

const benefits = [
  {
    icon: TrendingUp,
    title: '4x-10x Valuation Leap',
    description: 'Elevates $500K seed startups to $2M Series A potential',
  },
  {
    icon: Unlock,
    title: 'Unlocked Fundability',
    description: 'Custom traction and English fluency open doors to global capital',
  },
  {
    icon: Sprout,
    title: 'Sustainable Growth',
    description: 'From early traction to scalable growth with hiring and budget management',
  },
]

const programDetails = [
  { icon: Calendar, label: 'Duration', value: '60 days (8 weeks)' },
  { icon: Users, label: 'Cohort Size', value: '6 teams (12 founders)' },
  { icon: Video, label: 'Delivery', value: 'In-Person or Video' },
  { icon: Clock, label: 'Schedule', value: '9am-5pm daily container' },
]

const phases = [
  { week: '1-2', title: 'Conversions', focus: 'Customer Insight, Positioning & Messaging' },
  { week: '3-4', title: 'Distribution', focus: 'Funnels, Channels & Campaign Rollouts' },
  { week: '5-6', title: 'Performance', focus: 'Co-Marketing, Scorecards & Experimentation' },
  { week: '7-8', title: 'Stakeholders', focus: 'Investor Relations & Series A Prep' },
]

const testimonials = [
  {
    quote: "An incredible program. It has played a critical role in helping us refine and shape our pitch and message.",
    author: "Goodblock",
    role: "Web3 Startup",
  },
]

export function Accelerator() {
  return (
    <section id="accelerator" className="py-24 bg-gradient-to-b from-zinc-900 to-zinc-950">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 bg-blue-500/10 text-blue-400 border-blue-500/20">
            Growth Accelerator
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Funded? Bootstrapping?<br />
            <span className="text-blue-400">Join Our Accelerator</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Early-stage commercial focus for scalable traction. Customer journey optimization
            for accelerated user growth.
          </p>
        </motion.div>

        {/* Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <Card className="bg-zinc-900/50 border-zinc-800 max-w-3xl mx-auto">
            <CardContent className="p-8">
              <Quote className="w-10 h-10 text-blue-400/30 mb-4" />
              <blockquote className="text-xl text-zinc-300 italic mb-4">
                &ldquo;{testimonials[0].quote}&rdquo;
              </blockquote>
              <div className="text-zinc-500">
                — <span className="text-white">{testimonials[0].author}</span>, {testimonials[0].role}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Benefits */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="bg-zinc-900/30 border-zinc-800 h-full hover:border-blue-500/30 transition-colors">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4">
                    <benefit.icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                  <p className="text-zinc-400">{benefit.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Program Details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-semibold text-white text-center mb-8">Program Schedule</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {programDetails.map((detail) => (
              <div key={detail.label} className="text-center p-4 rounded-lg bg-zinc-900/30 border border-zinc-800">
                <detail.icon className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                <p className="text-zinc-500 text-sm">{detail.label}</p>
                <p className="text-white font-medium">{detail.value}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Phases */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-semibold text-white text-center mb-8">8-Week Journey</h3>
          <div className="grid md:grid-cols-4 gap-4">
            {phases.map((phase, index) => (
              <div key={phase.week} className="relative">
                <div className="p-6 rounded-lg bg-zinc-900/50 border border-zinc-800 h-full">
                  <div className="text-blue-400 font-mono text-sm mb-2">Weeks {phase.week}</div>
                  <h4 className="text-lg font-semibold text-white mb-2">{phase.title}</h4>
                  <p className="text-zinc-400 text-sm">{phase.focus}</p>
                </div>
                {index < phases.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-2 w-4 h-0.5 bg-zinc-700" />
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* What Startups Receive */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <Card className="bg-zinc-900/30 border-zinc-800">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-white mb-6">What Startups Receive</h3>
              <div className="space-y-4">
                {[
                  'Tailored interactive 60-Day Growth Sprint with Mastermind Roundtables and GTM Sprint Reviews',
                  'Early-Stage Leadership Development: Communication, presentation, and stakeholder engagement coaching',
                  'International Business Immersion: Business-English proficiency led by native British mentor',
                  'Weekly 1-hour 1:1 mentor sessions addressing specific needs based on KPI dashboard',
                  'Board pack and growth report with investor-ready pitch deck',
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5 shrink-0" />
                    <p className="text-zinc-300">{item}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg"
            asChild
          >
            <a href="#contact">Apply to the Accelerator</a>
          </Button>
          <p className="text-zinc-500 mt-4 text-sm">
            No equity dilution. Affordable shared-program fee.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
