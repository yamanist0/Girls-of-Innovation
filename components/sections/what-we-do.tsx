'use client'
import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/ui/section-heading'
import { pillars } from '@/data/girls'

export function WhatWeDo() {
  return (
    <section id="what-we-do" className="space-y-10 scroll-mt-24">
      <SectionHeading
        title="Three ways we break barriers"
        subtitle="Workshops, role models and community events that turn hesitation into confidence."
      />

      <div className="mx-auto grid max-w-5xl gap-12 sm:grid-cols-3 sm:gap-8">
        {pillars.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ delay: i * 0.12, duration: 0.5 }}
            className="space-y-3"
          >
            <span className="block h-[2px] w-8 rounded-full bg-highlight" />
            <h3 className="text-base font-semibold tracking-tight">{p.title}</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">{p.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}