'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'

const testimonials = [
  {
    quote: "Gavriel supported us in sharpening our business case and pitch.\nHe has a razor sharp eye and always manages to focus in on the areas of concern your business needs to pay attention to.\nRunning a business is all about managing your time so you prioritize the right things.\nPrioritize Gav and you won't be disappointed :-)",
    author: "Joost Schouten",
    role: "Founder",
    company: "www.nestr.io",
    image: "/images/immortalventures/joost-300x300.jpeg",
  },
  {
    quote: "Gavriel has amazingly sharp insights into marketing, and business acumen.\nHe has a special gift to be able to break these insights down clearly.\nHis mentorship and generosity is unmatched.\nWe are extremely grateful to have Gavriel interface with, and guide our senior leadership team to increasing levels of success.\nWe cannot imagine having a more suitable marketing and business advisor to work with, and I personally cannot imagine how he would not be able to bring massive, transformational value to almost any organisation that wishes to improve their operations, or thinking.",
    author: "Jerome Kelsey",
    role: "Founder",
    company: "www.freeos.io",
    image: "/images/immortalventures/jerome-300x300.jpeg",
  },
]

const credentials = [
  'Merrill Lynch', 'BOA', 'ING Barings', 'Digital Look', 'Stabull',
  'Cryptospace', 'Bitcoin.com', 'Database Group', 'Sabio', 'Avaya',
  'Syncoms', 'Wirex', 'Fuel-IT', 'Jarvis', 'Orange Mobile',
  'Hypha', 'Pizza Express', 'Renault'
]

const roles = [
  'CMO', 'Head of Marketing', 'Web Marketing Director', 'Acquisition Manager',
  'Product Marketing Manager', 'Product Manager', 'SEO Manager', 'Launch Manager', 'Copywriter'
]

export function Leadership() {
  const sectionRef = useRef<HTMLElement>(null)

  // Track when this section's top edge travels from bottom of viewport to top
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'start start']
  })

  // White overlay starts at full opacity and fades OUT as section enters
  // This creates the "fade to white" effect as Advisory transitions to Leadership
  const whiteOverlayOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  return (
    <section ref={sectionRef} id="leadership" className="relative py-40 md:py-56 bg-zinc-100 z-[80]">
      {/* White overlay that fades out as this section scrolls into view */}
      <motion.div
        className="absolute inset-0 bg-white pointer-events-none z-10"
        style={{ opacity: whiteOverlayOpacity }}
      />

      <div className="container mx-auto px-6">
        {/* 3-Column Layout: Narrow profile left, 2 wider testimonials right */}
        <div className="grid lg:grid-cols-[1fr_2fr_2fr] gap-8 lg:gap-10 items-start">
          {/* Profile Column - Left (narrower) */}
          <div>
            {/* Photo */}
            <div className="relative w-64 h-72 mx-auto lg:mx-0 mb-6 rounded-lg overflow-hidden border-4 border-white shadow-sm">
              <Image
                src="/images/immortalventures/gavriel-photo.png"
                alt="Gavriel Shaw"
                fill
                className="object-cover"
              />
            </div>

            <h3 className="text-xl font-medium text-slate-700 mb-4 text-center lg:text-left">
              Gavriel Shaw, Chairman
            </h3>

            <p className="text-zinc-600 mb-6 leading-relaxed text-sm">
              British-born, living in Latin America, with a 20-year international career.
            </p>

            {/* Roles */}
            <div className="mb-6">
              <p className="text-sm text-zinc-700 leading-relaxed">
                <span className="font-semibold">Past roles include:</span> {roles.join(', ')}.
              </p>
            </div>

            {/* Companies */}
            <div className="mb-6">
              <p className="text-sm text-zinc-700 leading-relaxed">
                <span className="font-semibold">Supporting GTM for:</span> {credentials.join(', ')}, and more.
              </p>
            </div>

            {/* LinkedIn */}
            <div className="flex justify-center lg:justify-start">
              <a
                href="https://www.linkedin.com/in/gavrielshaw/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#0A66C2">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Testimonials - 2 columns on right */}
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.author}
              className="bg-white rounded-lg p-6 shadow-sm border border-zinc-200"
            >
              {/* Quote mark */}
              <span className="text-4xl text-blue-400 font-serif leading-none">&ldquo;</span>

              <blockquote className="text-zinc-600 leading-7 whitespace-pre-line mb-4">
                {testimonial.quote}
              </blockquote>

              {/* Quote mark end */}
              <div className="flex justify-end mb-4">
                <span className="text-4xl text-blue-400 font-serif leading-none">&rdquo;</span>
              </div>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-blue-300">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.author}
                    width={96}
                    height={96}
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-slate-700 font-medium">{testimonial.author}</p>
                  <p className="text-zinc-500 text-sm">
                    {testimonial.role} | {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
