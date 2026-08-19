'use client'
import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/ui/section-heading'
import { galleryPhotos } from '@/data/gallery'

export function Gallery() {
  return (
    <section id="gallery" className="space-y-10 scroll-mt-24">
      <SectionHeading
        title="Moments from the movement"
        subtitle="Workshops, conferences and events where girls take the stage in STEM."
      />

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 max-w-6xl mx-auto">
        {galleryPhotos.map((src, i) => (
          <motion.div
            key={src}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ delay: (i % 8) * 0.05, duration: 0.4 }}
            className="relative aspect-square rounded-lg overflow-hidden border border-border bg-muted/20 group"
          >
            <img
              src={src}
              alt={`Girls of Innovation event photo ${i + 1}`}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </motion.div>
        ))}
      </div>
    </section>
  )
}