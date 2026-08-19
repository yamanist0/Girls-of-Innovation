'use client'
import { motion } from 'framer-motion'
import { RotateCcw } from 'lucide-react'
import { SectionHeading } from '@/components/ui/section-heading'
import { aboutParagraphs, equalitySteps } from '@/data/girls'

export function About() {
  return (
    <section id="about" className="space-y-12 scroll-mt-24">
      <SectionHeading
        title="A team that fights stereotypes"
        subtitle="Inside EAL Robotik, equality is not a document, it is how we run the team every day."
      />

      <div className="grid gap-14 md:grid-cols-2 max-w-6xl mx-auto md:gap-16">
        <div className="space-y-5">
          {aboutParagraphs.map((p, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="text-sm leading-relaxed text-muted-foreground"
            >
              {p}
            </motion.p>
          ))}
        </div>

        <div className="space-y-8">
          {equalitySteps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="space-y-1.5"
            >
              <h4 className="text-[11px] font-semibold uppercase tracking-[0.14em] text-highlight">
                {step.title}
              </h4>
              <p className="text-sm leading-relaxed text-muted-foreground">{step.text}</p>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 text-xs font-medium text-primary"
          >
            <RotateCcw className="h-3.5 w-3.5" />
            the cycle keeps going
          </motion.div>
        </div>
      </div>
    </section>
  )
}