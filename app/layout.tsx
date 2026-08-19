import './globals.css'
import type { Metadata, Viewport } from 'next'
import { ReactNode } from 'react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { ThemeProvider } from '@/components/theme-provider'
import favicon from '../assets/favicon.ico'

export const metadata: Metadata = {
  metadataBase: new URL('https://girls.ealrobotik.com'),
  title: {
    default: 'Girls of Innovation | EAL Robotik',
    template: '%s | Girls of Innovation'
  },
  description:
    'Empowering girls to break STEM barriers, one innovation at a time. A social impact program by EAL Robotik 8828 for gender equality in STEM.',
  keywords: [
    'Girls of Innovation',
    'STEM',
    'girls in STEM',
    'gender equality',
    'FRC',
    'FRC 8828',
    'EAL Robotik',
    'women in engineering',
    'Eskişehir Anadolu Lisesi'
  ],
  applicationName: 'Girls of Innovation',
  authors: [{ name: 'EAL Robotik', url: 'https://ealrobotik.com' }],
  creator: 'EAL Robotik',
  publisher: 'EAL Robotik',
  alternates: { canonical: '/' },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1
    }
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: 'Girls of Innovation',
    title: 'Girls of Innovation | EAL Robotik',
    description:
      'Empowering girls to break STEM barriers, one innovation at a time. A social impact program by EAL Robotik 8828.',
    images: [
      {
        url: '/favicon.svg',
        width: 512,
        height: 512,
        alt: 'Girls of Innovation logo'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Girls of Innovation | EAL Robotik',
    description:
      'Empowering girls to break STEM barriers, one innovation at a time. A social impact program by EAL Robotik 8828.'
  },
  icons: { icon: favicon.src, apple: favicon.src }
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <SiteHeader />
          <main className="flex-1 container py-8">{children}</main>
          <SiteFooter />
        </ThemeProvider>
      </body>
    </html>
  )
}