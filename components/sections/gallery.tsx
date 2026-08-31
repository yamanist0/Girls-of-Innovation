'use client'
import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/ui/section-heading'
import { galleryPhotos } from '@/data/gallery'

// grid cells top out near 280px, so the browser only ever needs the small variants
const sizes = '(min-width: 1024px) 279px, (min-width: 768px) 33vw, 50vw'

export function Gallery() {
  return (
    <section id="gallery" className="space-y-10 scroll-mt-24">
      <SectionHeading
        title="Moments from the movement"
        subtitle="Workshops, conferences and events where girls take the stage in STEM."
      />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.4 }}
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 max-w-6xl mx-auto"
      >
        {galleryPhotos.map((photo, i) => (
          <div
            key={photo.src}
            className="relative aspect-square rounded-lg overflow-hidden border border-border bg-muted/20 group"
          >
            <img
              src={photo.src}
              srcSet={photo.srcSet}
              sizes={sizes}
              width={photo.width}
              height={photo.height}
              alt={`Girls of Innovation event photo ${i + 1}`}
              loading={i < 4 ? 'eager' : 'lazy'}
              decoding="async"
              fetchPriority={i < 4 ? 'high' : 'low'}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        ))}
      </motion.div>
    </section>
  )
}
