'use client'

import { useState, useRef } from 'react'
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
import { Send, CheckCircle2, Loader2 } from 'lucide-react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'

const clients = [
  { name: 'Limohawk', subtitle: 'Ride Partner', logo: '/images/immortalventures/limoh-logo1.png' },
  { name: 'Stabull', subtitle: 'Stablecoin DeFi', logo: '/images/immortalventures/stabull-logo-300x300.png' },
]

type FormStatus = 'idle' | 'submitting' | 'success' | 'error'

export function AdvisoryServices() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [status, setStatus] = useState<FormStatus>('idle')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    stage: '',
    message: '',
  })

  // Track scroll progress for horizontal reveal of Pirate Metrics graphic
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  })

  // Image slides in slowly from right as user scrolls - slower reveal for reading
  const imageX = useTransform(scrollYProgress, [0.05, 0.85], ['100%', '0%'])
  const imageOpacity = useTransform(scrollYProgress, [0.05, 0.25], [0, 1])



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
          type: 'advisory_enquiry',
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
    <div id="advisory" ref={containerRef} className="relative h-[250vh] z-[70]">
      {/* Sticky container that stays in view */}
      <div className="sticky top-0 h-screen bg-slate-900 overflow-hidden">
        {/* Background accent */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-900/20 to-transparent pointer-events-none" />


        <section className="h-full flex flex-col justify-center relative py-12">
          <div className="container mx-auto px-6">
            {/* Centered Header with subhead */}
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                Advisory Services
              </h2>
              <p className="text-2xl md:text-3xl lg:text-4xl text-slate-400 font-medium mt-2">
                Launch, Scale &amp; Pitch
              </p>
            </div>

            {/* Two-column layout: 4/5 Pirate Metrics, 1/5 Advisory content */}
            <div className="grid lg:grid-cols-[4fr_1fr] gap-6 lg:gap-8 w-full items-center">

              {/* Left Column: Pirate Metrics Graphic */}
              <div className="relative overflow-hidden flex flex-col justify-center order-2 lg:order-1">
                {/* Horizontal reveal image - slides in from left */}
                <motion.div
                  className="relative"
                  style={{ x: imageX, opacity: imageOpacity }}
                >
                  <Image
                    src="/images/immortalventures/aaarr-journey-1-scaled.png"
                    alt="AARRR Pirate Metrics Framework"
                    width={1920}
                    height={800}
                    className="w-full h-auto rounded-2xl"
                    priority
                  />
                </motion.div>

                {/* Footnote text below graphic - single line */}
                <motion.p
                  className="mt-4 text-center text-sm text-white/60 whitespace-nowrap"
                  style={{ opacity: imageOpacity }}
                >
                  Putting the AARRR back in growth with &apos;Pirate Metrics&apos; — Ref: Lean Analytics, published by O&apos;Reilly
                </motion.p>
              </div>

              {/* Right Column: Advisory Content */}
              <div className="space-y-6 order-1 lg:order-2">

                {/* "Recent or current engagements" above logos */}
                <p className="text-white/70 text-sm text-left">
                  Recent or current engagements
                </p>

                {/* Client logos - side by side */}
                <div className="flex gap-8 items-start justify-center">
                  {clients.map((client, index) => (
                    <div key={index} className="flex flex-col items-center">
                      <div className="h-12 w-24 relative">
                        <Image
                          src={client.logo}
                          alt={client.name}
                          fill
                          className="object-contain"
                        />
                      </div>
                      <div className="text-center mt-2">
                        <span className="text-white/70 text-xs block">{client.name}</span>
                        <span className="text-white/50 text-xs block">{client.subtitle}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Description */}
                <div>
                  <p className="text-white/70 leading-relaxed text-sm text-left">
                    We work with very few one-to-one clients at a time to provide focused attention that moves the needle.
                  </p>
                </div>

                {/* CTA */}
                <div>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        size="lg"
                        className="bg-white hover:bg-slate-100 text-slate-900 px-6 py-5 text-base"
                      >
                        Service Enquiry
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="bg-white border-zinc-200 text-zinc-900 max-w-lg">
                      <DialogHeader>
                        <DialogTitle className="text-2xl font-medium text-zinc-900">
                          Advisory Services Enquiry
                        </DialogTitle>
                      </DialogHeader>

                      {status === 'success' ? (
                        <div className="text-center py-8">
                          <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mx-auto mb-6">
                            <CheckCircle2 className="w-8 h-8 text-blue-600" />
                          </div>
                          <h3 className="text-xl font-medium text-zinc-900 mb-4">Message Sent!</h3>
                          <p className="text-zinc-500 mb-6">
                            Thank you for reaching out. We&apos;ll review your enquiry and get back to you shortly.
                          </p>
                          <Button
                            variant="outline"
                            onClick={() => setStatus('idle')}
                            className="border-zinc-300 text-zinc-600 hover:bg-zinc-50"
                          >
                            Send Another Message
                          </Button>
                        </div>
                      ) : (
                        <>
                          <p className="text-zinc-500 mb-6">
                            Our team spans the gamut of modern startup. Let us know the gist of your situation, gaps or requirements, and the right person on our team will contact you with service options or suitable suggestions.
                          </p>

                          <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                              <div className="space-y-2">
                                <Label htmlFor="advisory-name" className="text-zinc-600">Name *</Label>
                                <Input
                                  id="advisory-name"
                                  required
                                  value={formData.name}
                                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                  className="border-zinc-300"
                                  placeholder="Your name"
                                />
                              </div>
                              <div className="space-y-2">
                                <Label htmlFor="advisory-email" className="text-zinc-600">Email *</Label>
                                <Input
                                  id="advisory-email"
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
                                <Label htmlFor="advisory-company" className="text-zinc-600">Company</Label>
                                <Input
                                  id="advisory-company"
                                  value={formData.company}
                                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                  className="border-zinc-300"
                                  placeholder="Company name"
                                />
                              </div>
                              <div className="space-y-2">
                                <Label htmlFor="advisory-stage" className="text-zinc-600">Stage</Label>
                                <Input
                                  id="advisory-stage"
                                  value={formData.stage}
                                  onChange={(e) => setFormData({ ...formData, stage: e.target.value })}
                                  className="border-zinc-300"
                                  placeholder="e.g., Seed, Bootstrapped"
                                />
                              </div>
                            </div>

                            <div className="space-y-2">
                              <Label htmlFor="advisory-message" className="text-zinc-600">Message *</Label>
                              <Textarea
                                id="advisory-message"
                                required
                                rows={4}
                                maxLength={350}
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                className="border-zinc-300 resize-none"
                                placeholder="Tell us about your situation..."
                              />
                              <p className="text-zinc-400 text-sm text-right">
                                {formData.message.length} / 350
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
                              className="w-full bg-slate-900 hover:bg-slate-800 text-white"
                            >
                              {status === 'submitting' ? (
                                <>
                                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                                  Sending...
                                </>
                              ) : (
                                <>
                                  <Send className="w-4 h-4 mr-2" />
                                  Send Message
                                </>
                              )}
                            </Button>
                          </form>
                        </>
                      )}
                    </DialogContent>
                  </Dialog>
                </div>
              </div>

            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
