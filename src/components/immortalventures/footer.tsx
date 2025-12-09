'use client'

import { useState } from 'react'
import { InfinityLogoFlowing } from './infinity-logo'
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

type FormStatus = 'idle' | 'submitting' | 'success' | 'error'

export function Footer() {
  const [status, setStatus] = useState<FormStatus>('idle')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

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
          type: 'general_contact',
        }),
      })

      if (response.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', subject: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <footer className="relative">
      {/* Hero Image Background */}
      <div className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-bottom bg-no-repeat"
          style={{
            backgroundImage: 'url(/images/immortalventures/immortal-bridge.jpg)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/95 via-black/60 to-black/50" />
        </div>

        {/* Subtle grid overlay - matching hero */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
            backgroundSize: '60px 60px'
          }}
        />

        {/* Footer content */}
        <div className="relative py-16 md:py-24">
          <div className="container mx-auto px-6">
            {/* Two-column layout with space in middle for hero figure */}
            <div className="grid lg:grid-cols-[1fr_1.5fr_1.5fr] gap-8 items-start mb-12">

              {/* Left Column - Quote, Logo, Nav, Copyright */}
              <div className="space-y-6">
                {/* Quote */}
                <div>
                  <blockquote className="text-base text-white/70 font-light italic">
                    &ldquo;Aim for the company of Immortals&rdquo;
                  </blockquote>
                  <cite className="text-zinc-500 not-italic text-xs tracking-wide">
                    — David Ogilvy, Ogilvy Advertizing Agency
                  </cite>
                </div>

                {/* Logo */}
                <div>
                  <InfinityLogoFlowing className="w-20 h-7" color="#ffffff" />
                </div>

                {/* Navigation */}
                <nav className="flex flex-col gap-2">
                  <a href="#portfolio" className="text-zinc-400 hover:text-white text-sm transition-colors">
                    Portfolio
                  </a>
                  <a href="#accelerator" className="text-zinc-400 hover:text-white text-sm transition-colors">
                    Accelerator
                  </a>
                  <a href="#advisory" className="text-zinc-400 hover:text-white text-sm transition-colors">
                    Advisory
                  </a>
                  <Dialog>
                    <DialogTrigger asChild>
                      <button className="text-zinc-400 hover:text-white text-sm transition-colors text-left">
                        Contact
                      </button>
                    </DialogTrigger>
                    <DialogContent className="bg-white border-zinc-200 text-zinc-900 max-w-lg">
                      <DialogHeader>
                        <DialogTitle className="text-2xl font-medium text-zinc-900">
                          Get In Touch
                        </DialogTitle>
                      </DialogHeader>

                      {status === 'success' ? (
                        <div className="text-center py-8">
                          <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mx-auto mb-6">
                            <CheckCircle2 className="w-8 h-8 text-blue-600" />
                          </div>
                          <h3 className="text-xl font-medium text-zinc-900 mb-4">Message Sent!</h3>
                          <p className="text-zinc-500 mb-6">
                            Thank you for reaching out. We&apos;ll get back to you shortly.
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
                            Have a question or want to connect? Drop us a message and we&apos;ll get back to you.
                          </p>

                          <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                              <div className="space-y-2">
                                <Label htmlFor="contact-name" className="text-zinc-600">Name *</Label>
                                <Input
                                  id="contact-name"
                                  required
                                  value={formData.name}
                                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                  className="border-zinc-300"
                                  placeholder="Your name"
                                />
                              </div>
                              <div className="space-y-2">
                                <Label htmlFor="contact-email" className="text-zinc-600">Email *</Label>
                                <Input
                                  id="contact-email"
                                  type="email"
                                  required
                                  value={formData.email}
                                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                  className="border-zinc-300"
                                  placeholder="you@company.com"
                                />
                              </div>
                            </div>

                            <div className="space-y-2">
                              <Label htmlFor="contact-subject" className="text-zinc-600">Subject</Label>
                              <Input
                                id="contact-subject"
                                value={formData.subject}
                                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                className="border-zinc-300"
                                placeholder="What's this about?"
                              />
                            </div>

                            <div className="space-y-2">
                              <Label htmlFor="contact-message" className="text-zinc-600">Message *</Label>
                              <Textarea
                                id="contact-message"
                                required
                                rows={4}
                                maxLength={500}
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                className="border-zinc-300 resize-none"
                                placeholder="Your message..."
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
                </nav>

                {/* Copyright */}
                <div className="pt-4 border-t border-zinc-800/50">
                  <p className="text-zinc-500 text-xs mb-1 whitespace-nowrap">
                    Immortal Ventures is a subsidiary of Cyclic Media, Inc.
                  </p>
                  <p className="text-zinc-600 text-xs">
                    &copy; {new Date().getFullYear()} Immortal Ventures
                  </p>
                </div>
              </div>

              {/* Middle - Empty space for hero figure */}
              <div className="hidden lg:block" />

              {/* Right Column - Thesis */}
              <div>
                <h3 className="text-lg md:text-xl text-white font-medium leading-snug mb-3">
                  Impacting The Next 1,000 Years
                </h3>
                <p className="text-sm text-white/60 mb-3">
                  <span className="text-white/80 font-medium">Our Thesis:</span> We Stand at the Cusp of Geometric Abundance.
                </p>
                <p className="text-sm text-white/60 leading-relaxed">
                  We see a civilization that expands into the infinite cosmos, navigating untold realms of cognitive experience with exhilarating discovery. All 8 Billion+ human collaborators onboard the spaceship we call Earth, exploring infinite potential.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
