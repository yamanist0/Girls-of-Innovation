'use client'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { slogan, heroStats } from '@/data/girls'

export function Hero() {
  return (
    <section id="hero" className="relative text-center space-y-10 py-10 md:py-16 scroll-mt-24">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="text-4xl md:text-6xl font-bold tracking-tight leading-tight"
      >
        <span className="gradient-text">Girls of Innovation</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.6, ease: 'easeOut' }}
        className="text-muted-foreground max-w-2xl mx-auto text-lg md:text-xl italic"
      >
        &ldquo;{slogan}&rdquo;
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25, duration: 0.6, ease: 'easeOut' }}
        className="flex gap-4 justify-center flex-wrap"
      >
        <Button href="#barriers" size="lg">
          Break a Barrier
        </Button>
        <Button href="#about" size="lg" variant="outline">
          Our Story
        </Button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35, duration: 0.5 }}
        className="flex flex-wrap gap-x-14 gap-y-6 justify-center"
      >
        {heroStats.map(s => (
          <div key={s.label} className="text-center leading-tight">
            <div className="font-semibold text-highlight text-sm md:text-base">{s.value}</div>
            <div className="text-xs text-muted-foreground uppercase tracking-wide">{s.label}</div>
          </div>
        ))}
      </motion.div>
    </section>
  )
}