'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { ScrollArea } from '@/components/ui/scroll-area'
import {
  TrendingUp,
  Unlock,
  Sprout,
  Quote,
  FileText,
} from 'lucide-react'

// Exact benefits from docs
const benefits = [
  {
    icon: TrendingUp,
    title: '4x-10x Valuation Leap',
    description: 'Elevates $500K seed startups to $2M Series A potential, growing accelerators\' equity and a 4x-10x return on VC equity.',
  },
  {
    icon: Unlock,
    title: 'Unlocked Fundability',
    description: 'Custom traction (e.g., users for apps, partnerships for tech services) and English fluency open doors to global capital (e.g., top-tier investors).',
  },
  {
    icon: Sprout,
    title: 'Sustainable Growth',
    description: 'From early traction (e.g., "100 users/customers, $20K ARR, fluent pitches"), to scalable growth (hiring, budget management, partner programs for distribution at scale).',
  },
]

// Full accelerator outline content - exact text from docs
const acceleratorOutline = {
  intro: `Founders lose steam. It's human nature. Or they focus on tasks that suit their personal interests or background experience.
Gaps go unnoticed, time drags on, and budgets go up in smoke.
Startup House ensures accountability, measured results, and peer-level support.

The Startup House GTM Hot-Seat program is a 60-day intensive, designed to accelerate early-stage startups from validation to Series A readiness.
The program equips founders with the mental grit and determination to "eat glass" and achieve real-world results fast.`,

  pricing: `Little more than a quality co-working office, with meals included, offering Founders the opportunity for accelerated growth at an affordable shared-program fee, with no equity dilution.`,

  qualification: [
    '2 Founders that account for product development and market distribution.',
    'At minimum, have a functional prototype or published MVP, ideally with market traction.',
    'A USD100k+ growth budget or sponsoring Incubator, VC, or respected University.',
  ],

  programFormat: {
    duration: '60 days (8 weeks), 5 days/week.',
    cohortSize: '6 teams (12 founders, 2 per team).',
    delivery: 'In-Person (Mexico City or Bogota Colombia) or Video Conference.',
    timeCommitment: '9am-5pm co-working container.',
  },

  morningHotSeats: [
    {
      day: 'Monday',
      title: 'Mastermind Roundtables',
      format: 'Each team presents a 5-minute update (e.g., user acquisition, campaign metrics), followed by 10-minute peer/mentor discussions to solve challenges and debate tactics.',
      outcome: 'Updated peer-reviewed practical GTM plans based on ongoing in-the-trenches daily effort.',
    },
    {
      day: 'Tuesday',
      title: 'Tools & Techniques',
      format: 'Presentation by program-lead, knowledge share with cohort members, and Q&A sessions with expert panel.',
      outcome: 'Best practice knowledge of AI tools, workflows for asset creation, performance monitoring systems, and campaign experimentation.',
    },
    {
      day: 'Wednesday',
      title: 'Resource Wrangling',
      format: 'Hot-seat review of budget plans, hiring plans, hired resource performance reviews, campaign brief best practices, and more.',
      outcome: 'Better use of budget for time-efficient quality campaign execution. Hiring & Firing Staff, Agencies, and Creators.',
    },
    {
      day: 'Thursday',
      title: 'Pitch Practice',
      format: 'Pitch practice and feedback from program participants and panel members, incorporating new learnings from ongoing campaigns and Accelerator input.',
      outcome: 'Identify gaps in GTM performance and investment due diligence. Stronger pitch delivery with improved presentation skills and confidence.',
    },
    {
      day: 'Friday',
      title: 'Sprint Reviews',
      format: 'KPI Scorecard review per team (user sign-ups, costs, revenue, conversion bottlenecks, etc), followed by group analysis and careful review of commercially-focused options.',
      outcome: 'Optimized campaigns, collaborative knowledge share. Investor worthy board packs with KPI analysis.',
    },
  ],

  afternoonWorkshops: [
    {
      weeks: '1-2',
      title: 'Conversions: Customer Insight, Positioning & Messaging',
      goal: 'Confirm market fit and establish team basics.',
      tasks: 'Conduct 20 customer discovery interviews per team, refine MVP based on feedback, target 5+ users/customers. Leadership: Define team norms, practice facilitation.',
      milestones: 'Validated personas, initial user/customer acquisition, basic communication setup by Day 14.',
    },
    {
      weeks: '3-4',
      title: 'Market Distribution: Funnels, Channels, and Strategic Campaign Rollouts',
      topics: 'Develop GTM strategy (channels, messaging, pricing), launch pilot campaigns, aim for 20+ users/customers, target $1K-$5K ARR. Leadership: Deliver 10-minute strategy presentations.',
      milestones: 'GTM plan completed, pilot results, presentation skills honed by Day 28.',
    },
    {
      weeks: '5-6',
      title: 'Performance Management: Co-Marketing, Scorecards, & Experimentation',
      goal: 'Scale traction and engage stakeholders.',
      tasks: 'Optimize campaigns (e.g., adjust ad spend), target 50+ users/customers, aim for $10K-$20K ARR, secure 1-2 LOIs. Leadership: Role-play negotiations.',
      milestones: 'Scaled user/customer base, revenue milestone, initial LOIs by Day 42.',
    },
    {
      weeks: '7-8',
      title: 'Stakeholder Management: Investor Relations, Board Packs, and Series A Preparation',
      topics: 'Finalize traction and pitch readiness. Refine funnels for retention (e.g., 70% user retention), target 50+ users/customers, aim for $10K-$50K ARR, secure 1-3 LOIs, prepare investor decks. Leadership: Deliver 15-minute pitches.',
      milestones: 'Final traction metrics, polished investor pitch by Day 60.',
    },
  ],

  additionalElements: [
    'Meals provided for in-person program: Mid-morning brunch and mid-afternoon lunch. Well-fed Founders remain focused on productivity.',
    'English Fluency Integration: Embedded in all sessions with a focus on business English (e.g., pitch terms), assessed via weekly 15-minute check-ins requiring B2 proficiency.',
    'Mentor Support: Weekly 1-hour 1:1 sessions with a program lead, addressing specific needs based on KPI dashboard metrics.',
    'Final Output: Board pack and growth report (e.g., KPIs, pitch deck) and a virtual demo day on Day 60 to present results.',
  ],
}

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
        </motion.div>

        {/* Goodblock Testimonial - exact from docs */}
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
                &ldquo;an incredible program. It has played a critical role in helping us refine and shape our pitch and message.&rdquo;
              </blockquote>
              <div className="text-zinc-500">
                — <span className="text-white">Goodblock</span>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Focus Areas - exact text from docs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex flex-wrap justify-center gap-4 text-zinc-400">
            <span>Early-stage commercial focus for scalable traction</span>
            <span className="text-zinc-600">•</span>
            <span>Customer journey optimization for accelerated user growth</span>
            <span className="text-zinc-600">•</span>
            <span>Resource allocation for cost-efficient runway management</span>
          </div>
        </motion.div>

        {/* Benefits - Startups Gain */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-semibold text-white text-center mb-8">Startups Gain:</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={benefit.title} className="bg-zinc-900/30 border-zinc-800 h-full hover:border-blue-500/30 transition-colors">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4">
                    <benefit.icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-2">{benefit.title}</h4>
                  <p className="text-zinc-400 text-sm">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Program Schedule & Application - with Dialog for full outline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <Dialog>
            <DialogTrigger asChild>
              <Button
                size="lg"
                variant="outline"
                className="border-blue-500/50 text-blue-400 hover:bg-blue-500/10 px-8 py-6 text-lg mb-6"
              >
                <FileText className="w-5 h-5 mr-2" />
                Program Schedule & Application
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl max-h-[90vh] bg-zinc-900 border-zinc-800">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-white">
                  8-Week Hot-Seat Accelerator
                </DialogTitle>
              </DialogHeader>
              <ScrollArea className="max-h-[70vh] pr-4">
                <div className="space-y-8 text-zinc-300">
                  {/* Intro */}
                  <div>
                    <p className="whitespace-pre-line leading-relaxed">{acceleratorOutline.intro}</p>
                  </div>

                  {/* Pricing */}
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Pricing?</h4>
                    <p>{acceleratorOutline.pricing}</p>
                  </div>

                  {/* Qualification */}
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Qualification Criteria</h4>
                    <ul className="list-disc list-inside space-y-1">
                      {acceleratorOutline.qualification.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Program Format */}
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Program Duration and Format</h4>
                    <ul className="space-y-1">
                      <li><strong>Duration:</strong> {acceleratorOutline.programFormat.duration}</li>
                      <li><strong>Cohort Size:</strong> {acceleratorOutline.programFormat.cohortSize}</li>
                      <li><strong>Delivery:</strong> {acceleratorOutline.programFormat.delivery}</li>
                      <li><strong>Time Commitment:</strong> {acceleratorOutline.programFormat.timeCommitment}</li>
                    </ul>
                  </div>

                  {/* Expert Panel note */}
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Expert Panel</h4>
                    <p>Supported by a panel of experts who participate at different times throughout the program.</p>
                  </div>

                  {/* Co-Working note */}
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Co-Working Accountability</h4>
                    <p>Better than standard co-working offices, we provide a focused sprint container with familiarity of participants and a shared program.</p>
                  </div>

                  {/* Morning Hot Seats */}
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-4">Program Overview</h4>
                    <h5 className="text-lg font-semibold text-blue-400 mb-3">Morning Hot Seats: Share & Compare</h5>
                    <p className="mb-4">1.5 hours each morning on cutting edge topics that move the needle for traction and growth.</p>
                    <div className="space-y-4">
                      {acceleratorOutline.morningHotSeats.map((session) => (
                        <div key={session.day} className="p-4 bg-zinc-800/50 rounded-lg">
                          <h6 className="font-semibold text-white">{session.day} {session.title}</h6>
                          <p className="text-sm mt-1"><strong>Format:</strong> {session.format}</p>
                          <p className="text-sm mt-1"><strong>Outcome:</strong> {session.outcome}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Afternoon Workshops */}
                  <div>
                    <h5 className="text-lg font-semibold text-blue-400 mb-3">Afternoon Workshops: Progressive Performance</h5>
                    <p className="mb-4">The program emphasizes 4 inter-locking dimensions of early-stage growth.</p>
                    <div className="space-y-4">
                      {acceleratorOutline.afternoonWorkshops.map((workshop) => (
                        <div key={workshop.weeks} className="p-4 bg-zinc-800/50 rounded-lg">
                          <h6 className="font-semibold text-white">Weeks {workshop.weeks}: {workshop.title}</h6>
                          {workshop.goal && <p className="text-sm mt-1"><strong>Goal:</strong> {workshop.goal}</p>}
                          {workshop.tasks && <p className="text-sm mt-1"><strong>Tasks:</strong> {workshop.tasks}</p>}
                          {workshop.topics && <p className="text-sm mt-1"><strong>Topics:</strong> {workshop.topics}</p>}
                          <p className="text-sm mt-1"><strong>Milestones:</strong> {workshop.milestones}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Additional Elements */}
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Additional Program Elements</h4>
                    <ul className="list-disc list-inside space-y-2">
                      {acceleratorOutline.additionalElements.map((element, i) => (
                        <li key={i}>{element}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ScrollArea>
            </DialogContent>
          </Dialog>

          <div className="mt-4">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg"
              asChild
            >
              <a href="#contact">Apply to the Accelerator</a>
            </Button>
          </div>
          <p className="text-zinc-500 mt-4 text-sm">
            No equity dilution. Affordable shared-program fee.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
