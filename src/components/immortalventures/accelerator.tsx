'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Send, CheckCircle2, Loader2, Play, X, Plus, Minus } from 'lucide-react'

type FormStatus = 'idle' | 'submitting' | 'success' | 'error'

const startupsReceive = [
  {
    title: 'Tailored interactive 60-Day Growth Sprint',
    description: 'A structured program featuring Mastermind Roundtables and GTM Sprint Reviews to track progress—spanning four phases (validation to Series A).',
  },
  {
    title: 'Early-Stage Leadership Development',
    description: 'Practice and coaching to sharpen communication, presentation, accountability, and stakeholder engagement, fostering a professional culture for modern leadership.',
  },
  {
    title: 'International Business Immersion',
    description: 'Perspective and practice for professional communication (including business-English proficiency), led by a native British mentor with global business experience.',
  },
]

const startupsGain = [
  {
    title: '4x-10x Valuation Leap',
    description: 'Elevates $500K seed startups to $2M Series A potential, growing accelerators\' equity and a 4x-10x return on VC equity.',
  },
  {
    title: 'Unlocked Fundability',
    description: 'Custom traction (e.g., users for apps, partnerships for tech services) and English fluency open doors to global capital.',
  },
  {
    title: 'Sustainable Growth',
    description: 'From early traction to scalable growth - hiring, budget management, partner programs for distribution at scale.',
  },
]

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
      format: 'Each team presents a 5-minute update, followed by 10-minute peer/mentor discussions.',
      outcome: 'Updated peer-reviewed practical GTM plans.',
    },
    {
      day: 'Tuesday',
      title: 'Tools & Techniques',
      format: 'Presentation by program-lead, knowledge share with cohort members, and Q&A sessions.',
      outcome: 'Best practice knowledge of AI tools and workflows.',
    },
    {
      day: 'Wednesday',
      title: 'Resource Wrangling',
      format: 'Hot-seat review of budget plans, hiring plans, and performance reviews.',
      outcome: 'Better use of budget for time-efficient quality execution.',
    },
    {
      day: 'Thursday',
      title: 'Pitch Practice',
      format: 'Pitch practice and feedback from program participants and panel members.',
      outcome: 'Stronger pitch delivery with improved presentation skills.',
    },
    {
      day: 'Friday',
      title: 'Sprint Reviews',
      format: 'KPI Scorecard review per team, followed by group analysis.',
      outcome: 'Optimized campaigns, investor worthy board packs.',
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
      title: 'Market Distribution: Funnels, Channels, and Campaign Rollouts',
      goal: 'Develop GTM strategy and launch pilots.',
      tasks: 'Develop GTM strategy (channels, messaging, pricing), launch pilot campaigns, aim for 20+ users/customers, target $1K-$5K ARR. Leadership: Deliver 10-minute strategy presentations.',
      milestones: 'GTM plan completed, pilot results, presentation skills honed by Day 28.',
    },
    {
      weeks: '5-6',
      title: 'Performance Management: Co-Marketing, Scorecards & Experimentation',
      goal: 'Scale traction and engage stakeholders.',
      tasks: 'Optimize campaigns (e.g., adjust ad spend), target 50+ users/customers, aim for $10K-$20K ARR, secure 1-2 LOIs. Leadership: Role-play negotiations.',
      milestones: 'Scaled user/customer base, revenue milestone, initial LOIs by Day 42.',
    },
    {
      weeks: '7-8',
      title: 'Stakeholder Management: Investor Relations & Series A Preparation',
      goal: 'Finalize traction and pitch readiness.',
      tasks: 'Refine funnels for retention (e.g., 70% user retention), target 50+ users/customers, aim for $10K-$50K ARR, secure 1-3 LOIs, prepare investor decks. Leadership: Deliver 15-minute pitches.',
      milestones: 'Final traction metrics, polished investor pitch by Day 60.',
    },
  ],

  additionalElements: [
    {
      title: 'Expert Panel',
      description: 'Supported by a panel of experts who participate at different times throughout the program.',
    },
    {
      title: 'Co-Working Accountability',
      description: 'Better than standard co-working offices, we provide a focused sprint container with familiarity of participants and a shared program.',
    },
    {
      title: 'Meals Provided',
      description: 'Mid-morning brunch and mid-afternoon lunch for in-person program. Well-fed Founders remain focused on productivity.',
    },
    {
      title: 'English Fluency Integration',
      description: 'Embedded in all sessions with a focus on business English (e.g., pitch terms), assessed via weekly 15-minute check-ins requiring B2 proficiency.',
    },
    {
      title: 'Mentor Support',
      description: 'Weekly 1-hour 1:1 sessions with a program lead, addressing specific needs based on KPI dashboard metrics.',
    },
    {
      title: 'Final Output',
      description: 'Board pack and growth report (e.g., KPIs, pitch deck) and a virtual demo day on Day 60 to present results.',
    },
  ],
}

// Two main accordion sections
const accordionSections = [
  {
    id: 'receive',
    title: 'Startups Receive',
    items: startupsReceive,
  },
  {
    id: 'gain',
    title: 'Startups Gain',
    items: startupsGain,
  },
]

export function Accelerator() {
  const sectionRef = useRef<HTMLElement>(null)
  const [status, setStatus] = useState<FormStatus>('idle')
  const [videoOpen, setVideoOpen] = useState(false)
  const [openAccordion, setOpenAccordion] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    stage: '',
    message: '',
  })

  // Track scroll progress for background transition (black to white)
  // Using same offset as Portfolio: track when this section's top moves from bottom of viewport to top
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'start start'] // Same as Portfolio tracks Accelerator
  })

  // Background transitions from black (zinc-950) to white as section scrolls into view
  // EXACTLY matches Portfolio's white overlay timing: starts at 15%, completes at 50%
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.15, 0.5, 1],
    ['rgb(9, 9, 11)', 'rgb(9, 9, 11)', 'rgb(255, 255, 255)', 'rgb(255, 255, 255)'] // Stay black, fade to white, stay white
  )

  // Text color transitions from white to dark as background lightens
  const headingColor = useTransform(
    scrollYProgress,
    [0, 0.15, 0.5],
    ['rgb(255, 255, 255)', 'rgb(255, 255, 255)', 'rgb(39, 39, 42)'] // Stay white, then fade to zinc-800
  )

  const subheadingColor = useTransform(
    scrollYProgress,
    [0, 0.15, 0.5],
    ['rgb(161, 161, 170)', 'rgb(161, 161, 170)', 'rgb(82, 82, 91)'] // Stay zinc-400, then fade to zinc-600
  )

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('submitting')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          site: 'immortalventures',
          type: 'accelerator_application',
        }),
      })

      if (response.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', company: '', stage: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <motion.section
      ref={sectionRef}
      id="accelerator"
      className="relative pb-40 md:pb-48 z-40"
      style={{ backgroundColor }}
    >
      <div className="container mx-auto px-6 pt-24 md:pt-32">
        {/* Header - Centered, refined */}
        <div className="text-center mb-10">
          <motion.p
            className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
            style={{ color: headingColor }}
          >
            Funded? Bootstrapping?
          </motion.p>
          <motion.p
            className="text-2xl md:text-3xl lg:text-4xl font-medium mt-2"
            style={{ color: subheadingColor }}
          >
            Join Our Growth Accelerator
          </motion.p>
        </div>

        {/* Video Modal */}
        {videoOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80" onClick={() => setVideoOpen(false)}>
            <div className="relative w-full max-w-4xl mx-4" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={() => setVideoOpen(false)}
                className="absolute -top-12 right-0 text-white hover:text-zinc-300 transition-colors"
              >
                <X className="w-8 h-8" />
              </button>
              <div className="aspect-video rounded-lg overflow-hidden bg-black">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/vOT0bpNnvSk?autoplay=1"
                  title="Immortal Ventures Accelerator"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        )}

        {/* Video + Accordion Layout - First Round Style */}
        <div className="grid lg:grid-cols-[1fr_minmax(0,340px)] gap-12 lg:gap-16 mb-20 max-w-5xl mx-auto items-start">
          {/* Left: Video Thumbnail (50%) */}
          <div className="lg:sticky lg:top-24">
            <button
              onClick={() => setVideoOpen(true)}
              className="relative w-full aspect-video rounded-2xl overflow-hidden bg-zinc-200 group cursor-pointer shadow-xl hover:shadow-2xl transition-all"
            >
              <Image
                src="https://img.youtube.com/vi/vOT0bpNnvSk/maxresdefault.jpg"
                alt="Accelerator Video"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                  <Play className="w-8 h-8 text-zinc-900 ml-1" fill="currentColor" />
                </div>
              </div>
            </button>
            {/* Testimonial below video */}
            <div className="mt-8">
              <blockquote className="text-lg text-zinc-600 italic">
                &ldquo;An incredible program that helped us refine our pitch and message.&rdquo;
              </blockquote>
              <p className="text-zinc-500 text-sm">— <a href="https://www.goodblock.io" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-700 underline">www.goodblock.io</a></p>
            </div>
          </div>

          {/* Right: Accordion (50%) - Two main sections */}
          <div>
            <div className="divide-y divide-zinc-200">
              {accordionSections.map((section) => (
                <div key={section.id} className="py-5">
                  <button
                    onClick={() => setOpenAccordion(openAccordion === section.id ? null : section.id)}
                    className="w-full flex items-center justify-between text-left group"
                  >
                    <span className="text-xl font-semibold text-zinc-900 group-hover:text-zinc-600 transition-colors pr-4">
                      {section.title}
                    </span>
                    <span className="flex-shrink-0 w-10 h-10 rounded-full bg-zinc-100 border border-zinc-300 flex items-center justify-center group-hover:bg-zinc-200 group-hover:border-zinc-400 transition-colors">
                      {openAccordion === section.id ? (
                        <Minus className="w-5 h-5 text-zinc-600" />
                      ) : (
                        <Plus className="w-5 h-5 text-zinc-600" />
                      )}
                    </span>
                  </button>
                  <AnimatePresence>
                    {openAccordion === section.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <ul className="mt-4 space-y-4">
                          {section.items.map((item, idx) => (
                            <li key={idx}>
                              <h4 className="text-base font-medium text-zinc-800">{item.title}</h4>
                              <p className="text-zinc-600 mt-1 leading-relaxed text-sm">
                                {item.description}
                              </p>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* CTA - Below accordion items */}
            <div className="mt-8">
              <Dialog>
            <DialogTrigger asChild>
              <motion.div
                animate={{
                  scale: [1, 1.02, 1],
                  rotate: [0, -0.5, 0.5, 0],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  repeatDelay: 3,
                  ease: 'easeInOut',
                }}
              >
                <Button
                  size="lg"
                  className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-shadow"
                >
                  Program Schedule & Application
                </Button>
              </motion.div>
            </DialogTrigger>
            <DialogContent className="max-w-4xl max-h-[90vh] bg-white border-zinc-200">
              <DialogHeader>
                <DialogTitle className="text-2xl font-medium text-zinc-900">
                  8-Week Hot-Seat Accelerator
                </DialogTitle>
              </DialogHeader>
              <ScrollArea className="max-h-[75vh] pr-4">
                <div className="space-y-8 text-zinc-600">
                  <p className="whitespace-pre-line leading-relaxed">{acceleratorOutline.intro}</p>

                  <div>
                    <h4 className="text-lg font-medium text-zinc-900 mb-2">Pricing</h4>
                    <p>{acceleratorOutline.pricing}</p>
                  </div>

                  <div>
                    <h4 className="text-lg font-medium text-zinc-900 mb-2">Qualification Criteria</h4>
                    <ul className="list-disc list-inside space-y-1">
                      {acceleratorOutline.qualification.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-medium text-zinc-900 mb-2">Program Format</h4>
                    <ul className="space-y-1">
                      <li><strong>Duration:</strong> {acceleratorOutline.programFormat.duration}</li>
                      <li><strong>Cohort Size:</strong> {acceleratorOutline.programFormat.cohortSize}</li>
                      <li><strong>Delivery:</strong> {acceleratorOutline.programFormat.delivery}</li>
                      <li><strong>Time:</strong> {acceleratorOutline.programFormat.timeCommitment}</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-medium text-zinc-900 mb-2">Morning Hot Seats: Share & Compare</h4>
                    <p className="text-sm text-zinc-500 mb-4">1.5 hours each morning on cutting edge topics that move the needle for traction and growth.</p>
                    <div className="space-y-4">
                      {acceleratorOutline.morningHotSeats.map((session) => (
                        <div key={session.day} className="p-4 bg-zinc-50 rounded-lg">
                          <h6 className="font-medium text-zinc-900">{session.day}: {session.title}</h6>
                          <p className="text-sm mt-1">{session.format}</p>
                          <p className="text-sm text-zinc-500 mt-1">{session.outcome}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-medium text-zinc-900 mb-2">Afternoon Workshops</h4>
                    <p className="text-sm text-zinc-500 mb-4">The program emphasizes 4 inter-locking dimensions of early-stage growth.</p>
                    <div className="space-y-4">
                      {acceleratorOutline.afternoonWorkshops.map((workshop) => (
                        <div key={workshop.weeks} className="p-4 bg-zinc-50 rounded-lg">
                          <h6 className="font-semibold text-zinc-900">Weeks {workshop.weeks}: {workshop.title}</h6>
                          <p className="text-sm font-medium text-zinc-700 mt-2">Goal: {workshop.goal}</p>
                          <p className="text-sm text-zinc-600 mt-1">{workshop.tasks}</p>
                          <p className="text-sm text-zinc-500 mt-2 italic">Milestones: {workshop.milestones}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-medium text-zinc-900 mb-4">Additional Program Elements</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {acceleratorOutline.additionalElements.map((element) => (
                        <div key={element.title} className="p-4 bg-zinc-50 rounded-lg">
                          <h6 className="font-medium text-zinc-900">{element.title}</h6>
                          <p className="text-sm text-zinc-600 mt-1">{element.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Application Form */}
                  <div className="pt-8 border-t border-zinc-200">
                    <h4 className="text-lg font-medium text-zinc-900 mb-4">Apply to the Accelerator</h4>

                    {status === 'success' ? (
                      <div className="text-center py-8">
                        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                          <CheckCircle2 className="w-8 h-8 text-green-600" />
                        </div>
                        <h3 className="text-xl font-medium text-zinc-900 mb-4">Application Sent!</h3>
                        <p className="text-zinc-500 mb-6">
                          Thank you for applying. We&apos;ll review your application and get back to you shortly.
                        </p>
                        <Button
                          variant="outline"
                          onClick={() => setStatus('idle')}
                          className="border-zinc-300 text-zinc-600 hover:bg-zinc-50"
                        >
                          Send Another Application
                        </Button>
                      </div>
                    ) : (
                      <>
                        <p className="text-zinc-500 mb-6">
                          Tell us about your startup and where you are in your journey.
                        </p>

                        <form onSubmit={handleSubmit} className="space-y-4">
                          <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="accel-name" className="text-zinc-600">Name *</Label>
                              <Input
                                id="accel-name"
                                required
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                className="border-zinc-300"
                                placeholder="Your name"
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="accel-email" className="text-zinc-600">Email *</Label>
                              <Input
                                id="accel-email"
                                type="email"
                                required
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                className="border-zinc-300"
                                placeholder="you@company.com"
                              />
                            </div>
                          </div>

                          <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="accel-company" className="text-zinc-600">Company *</Label>
                              <Input
                                id="accel-company"
                                required
                                value={formData.company}
                                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                className="border-zinc-300"
                                placeholder="Company name"
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="accel-stage" className="text-zinc-600">Stage *</Label>
                              <Input
                                id="accel-stage"
                                required
                                value={formData.stage}
                                onChange={(e) => setFormData({ ...formData, stage: e.target.value })}
                                className="border-zinc-300"
                                placeholder="e.g., Seed"
                              />
                            </div>
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="accel-message" className="text-zinc-600">Tell us about your startup *</Label>
                            <Textarea
                              id="accel-message"
                              required
                              rows={4}
                              maxLength={500}
                              value={formData.message}
                              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                              className="border-zinc-300 resize-none"
                              placeholder="What does your startup do? What traction do you have?"
                            />
                            <p className="text-zinc-400 text-sm text-right">
                              {formData.message.length} / 500
                            </p>
                          </div>

                          {status === 'error' && (
                            <p className="text-red-600 text-sm">
                              Something went wrong. Please try again.
                            </p>
                          )}

                          <Button
                            type="submit"
                            disabled={status === 'submitting'}
                            className="w-full bg-zinc-900 hover:bg-zinc-800 text-white"
                          >
                            {status === 'submitting' ? (
                              <>
                                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                                Sending...
                              </>
                            ) : (
                              <>
                                <Send className="w-4 h-4 mr-2" />
                                Submit Application
                              </>
                            )}
                          </Button>
                        </form>
                      </>
                    )}
                  </div>
                </div>
              </ScrollArea>
            </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>

      </div>
    </motion.section>
  )
}
