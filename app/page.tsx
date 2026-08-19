import { Hero } from '@/components/sections/hero'
import { About } from '@/components/sections/about'
import { BarrierBreaker } from '@/components/sections/barrier-breaker'
import { WhatWeDo } from '@/components/sections/what-we-do'
import { Impact } from '@/components/sections/impact'
import { Gallery } from '@/components/sections/gallery'
import { Contact } from '@/components/sections/contact'

export default function GirlsPage() {
  return (
    <div className="space-y-28">
      <Hero />
      <About />
      <BarrierBreaker />
      <WhatWeDo />
      <Impact />
      <Gallery />
      <Contact />
    </div>
  )
}