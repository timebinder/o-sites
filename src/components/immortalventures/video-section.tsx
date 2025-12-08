'use client'

import { motion } from 'framer-motion'

interface VideoSectionProps {
  videoId?: string
}

export function VideoSection({
  videoId = 'vOT0bpNnvSk',
}: VideoSectionProps) {
  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative aspect-video rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl shadow-blue-500/10">
            <iframe
              src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`}
              title="Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
