'use client'
import Link from 'next/link'
import { ThemeToggle } from '@/components/theme-toggle'
import { useEffect, useRef, useState } from 'react'
import favicon from '../assets/favicon.ico'

const nav = [
  { href: '#about', label: 'About' },
  { href: '#barriers', label: 'Break the Barriers' },
  { href: '#what-we-do', label: 'What We Do' },
  { href: '#impact', label: 'Impact' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#contact', label: 'Contact' }
] as const

export function SiteHeader() {
  const [hidden, setHidden] = useState(false)
  const [active, setActive] = useState(`#${nav[0].href.replace('#', '')}`)
  const lastY = useRef(0)
  const autoScroll = useRef(false)

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      const dy = y - lastY.current
      lastY.current = y
      if (autoScroll.current) {
        setHidden(false)
        if (Math.abs(dy) < 2) autoScroll.current = false
        return
      }
      if (y < 300) {
        setHidden(false)
        return
      }
      if (dy < -5) setHidden(false)
      else if (dy > 5) setHidden(true)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sectionIds = nav.map(n => n.href.replace('#', ''))
    const sections = sectionIds.map(id => document.getElementById(id)).filter(Boolean) as HTMLElement[]
    if (!sections.length) return
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActive('#' + entry.target.id)
          }
        })
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: [0, 0.25, 0.5, 1] }
    )
    sections.forEach(sec => observer.observe(sec))
    return () => observer.disconnect()
  }, [])

  const navClick = () => {
    autoScroll.current = true
    setHidden(false)
  }

  return (
    <header className={`border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-40 transition-transform duration-300 ${hidden ? '-translate-y-full' : 'translate-y-0'}`}>
      <div className="grid h-16 grid-cols-[1fr_auto_1fr] items-center px-4 md:px-6">
        <Link href="#hero" onClick={navClick} className="flex items-center gap-2.5 font-bold tracking-tight text-lg">
          <img src={favicon.src} alt="EAL Robotik" className="h-6 w-6 rounded-[4px] object-contain" />
          <span className="gradient-text">Girls of Innovation</span>
        </Link>
        <nav className="hidden md:flex gap-6 text-sm">
          {nav.map(item => {
            const isActive = active === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={navClick}
                className={`relative transition-colors ${isActive ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'}`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute -bottom-1 left-0 h-[2px] w-full rounded bg-highlight" />
                )}
              </Link>
            )
          })}
        </nav>
        <div className="flex items-center justify-end gap-2">
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
