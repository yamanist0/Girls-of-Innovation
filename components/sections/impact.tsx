'use client'
import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/ui/section-heading'
import { impactNotes } from '@/data/girls'

export function Impact() {
  return (
    <section id="impact" className="space-y-10 scroll-mt-24">
      <SectionHeading
        title="The change we are making"
        subtitle="What breaking barriers looks like in practice, inside our team and beyond it."
      />

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-3xl text-center text-base leading-loose text-muted-foreground md:text-lg"
      >
        {impactNotes.map((note, i) => (
          <span key={i}>
            {i > 0 && <span className="mx-3 text-highlight">&#183;</span>}
            {note}
          </span>
        ))}
      </motion.p>
    </section>
  )
}