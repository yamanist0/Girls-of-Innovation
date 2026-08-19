'use client'
import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Hammer } from 'lucide-react'
import { SectionHeading } from '@/components/ui/section-heading'
import { barriers, type Barrier } from '@/data/girls'
import { cn } from '@/lib/utils'

const shards = [
  { clip: 'polygon(0 0, 46% 0, 32% 56%, 0 100%)', drift: { x: -40, y: -14, rotate: -14 } },
  { clip: 'polygon(46% 0, 100% 0, 68% 56%, 32% 56%)', drift: { x: 34, y: -18, rotate: 12 } },
  { clip: 'polygon(32% 56%, 68% 56%, 58% 100%, 0 100%)', drift: { x: -24, y: 22, rotate: 9 } },
  { clip: 'polygon(68% 56%, 100% 0, 100% 100%, 58% 100%)', drift: { x: 42, y: 16, rotate: -10 } }
]

const shades = [
  'bg-gradient-to-br from-primary/70 to-primary/45',
  'bg-gradient-to-tl from-primary/80 to-primary/50',
  'bg-gradient-to-bl from-primary/65 to-primary/40',
  'bg-gradient-to-tr from-primary/75 to-primary/55'
]

function BarrierTile({ barrier, index, onBreak }: { barrier: Barrier; index: number; onBreak: () => void }) {
  const [broken, setBroken] = useState(false)
  const reduceMotion = useReducedMotion()

  const smash = () => {
    if (broken) return
    setBroken(true)
    onBreak()
  }

  return (
    <motion.button
      type="button"
      aria-pressed={broken}
      aria-label={broken ? 'Barrier broken' : `Break barrier: ${barrier.label}`}
      onClick={smash}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      className="relative aspect-[5/4] rounded-xl overflow-hidden border border-border text-left group"
    >
      <span
        className={cn(
          'absolute inset-0 transition-transform duration-300',
          broken ? 'scale-110' : 'group-hover:scale-[1.03]',
          'bg-[repeating-linear-gradient(180deg,rgba(0,0,0,0.08)_0px,rgba(0,0,0,0.08)_3px,transparent_3px,transparent_28px)]'
        )}
      />

      {broken ? (
        <>
          {reduceMotion ? null : (
            <>
              {shards.map((s, i) => (
                <motion.span
                  key={i}
                  aria-hidden
                  initial={{ x: 0, y: 0, rotate: 0, opacity: 1 }}
                  animate={{ ...s.drift, opacity: 0.75 }}
                  transition={{ duration: 0.55, ease: 'easeOut' }}
                  className={cn('absolute inset-0 will-change-transform', shades[i])}
                  style={{ clipPath: s.clip }}
                />
              ))}
              <motion.span
                aria-hidden
                initial={{ scale: 0.6, opacity: 1 }}
                animate={{ scale: 1.25, opacity: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
              >
                <svg viewBox="0 0 100 100" className="h-full w-full">
                  <path
                    d="M50 6 L40 34 L54 46 L38 62 L52 78 L44 94"
                    fill="none"
                    stroke="white"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    opacity="0.9"
                  />
                  <path
                    d="M56 10 L62 30 L50 44 L66 58 L60 84"
                    fill="none"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    opacity="0.6"
                  />
                </svg>
              </motion.span>
              <motion.span
                aria-hidden
                initial={{ opacity: 1, scale: 1 }}
                animate={{ opacity: 0, scale: 1.15 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="absolute inset-0 flex items-center justify-center p-4 text-center font-semibold text-white"
              >
                {barrier.label}
              </motion.span>
            </>
          )}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: reduceMotion ? 0 : 0.25, type: 'spring', stiffness: 260, damping: 18 }}
            className="absolute inset-0 flex flex-col items-center justify-center gap-2.5 p-4 text-center bg-gradient-to-br from-primary to-[#be185d] text-white"
          >
            <span className="rounded-full bg-white/20 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-widest">
              {barrier.stat}
            </span>
            <span className="text-xs font-medium leading-snug">{barrier.reveal}</span>
            <span className="text-[11px] italic leading-snug opacity-80">{barrier.tagline}</span>
          </motion.div>
        </>
      ) : (
        <>
          <motion.span
            initial={false}
            animate={broken ? { opacity: 0 } : { opacity: 1 }}
            className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-4 text-center bg-gradient-to-br from-slate-500 via-slate-600 to-slate-800 text-white"
          >
            <Hammer className="h-5 w-5 opacity-80" />
            <span className="font-semibold text-sm leading-snug">{barrier.label}</span>
            <span className="text-[10px] uppercase tracking-wider opacity-70">tap to break</span>
          </motion.span>
        </>
      )}
    </motion.button>
  )
}

export function BarrierBreaker() {
  const [brokenCount, setBrokenCount] = useState(0)
  const total = barriers.length
  const allBroken = brokenCount >= total

  return (
    <section id="barriers" className="space-y-10 scroll-mt-24">
      <SectionHeading
        title="Smash the stereotypes"
        subtitle="Every brick is a stereotype girls hear about STEM. Tap a brick to shatter it and reveal the truth behind it."
      />

      <div className="max-w-2xl mx-auto">
        <div className="flex items-end justify-between text-sm">
          <span className="text-muted-foreground">Barriers broken</span>
          <span className="font-semibold text-primary tabular-nums">
            {brokenCount} / {total}
          </span>
        </div>
        <div className="mt-3 flex gap-1.5" aria-hidden>
          {barriers.map((b, i) => (
            <motion.div
              key={b.label}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              className={cn(
                'h-5 flex-1 -skew-x-[14deg] rounded-[3px] transition-colors duration-300',
                i < brokenCount
                  ? 'bg-gradient-to-r from-primary to-highlight shadow-sm shadow-primary/40'
                  : 'bg-muted'
              )}
            />
          ))}
        </div>
      </div>

      {allBroken && (
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-center text-sm font-semibold text-primary"
        >
          You broke every barrier. Nothing stands between girls and STEM.
        </motion.p>
      )}

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
        {barriers.map((b, i) => (
          <BarrierTile
            key={b.label}
            barrier={b}
            index={i}
            onBreak={() => setBrokenCount(prev => prev + 1)}
          />
        ))}
      </div>
    </section>
  )
}