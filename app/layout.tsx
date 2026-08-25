import './globals.css'
import type { Metadata, Viewport } from 'next'
import { ReactNode } from 'react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { ThemeProvider } from '@/components/theme-provider'
import favicon from '../assets/favicon.ico'

const siteUrl = 'https://girls.ealrobotik.com'
const siteTitle = 'Girls of Innovation | EAL Robotik'
const siteDescription =
  'Girls of Innovation is an EAL Robotik 8828 social impact program empowering girls to break barriers and build a future in STEM.'
const logoUrl = `${siteUrl}/logo.png`

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: '%s | Girls of Innovation'
  },
  description: siteDescription,
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
  category: 'education',
  alternates: { canonical: siteUrl },
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
    url: siteUrl,
    siteName: 'Girls of Innovation',
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: logoUrl,
        width: 512,
        height: 512,
        alt: 'Girls of Innovation logo'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: siteDescription,
    images: [logoUrl]
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
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${siteUrl}/#organization`,
        name: 'Girls of Innovation',
        alternateName: 'EAL Robotik Girls of Innovation',
        url: siteUrl,
        logo: logoUrl,
        parentOrganization: {
          '@type': 'Organization',
          name: 'EAL Robotik',
          url: 'https://ealrobotik.com/'
        }
      },
      {
        '@type': 'WebSite',
        '@id': `${siteUrl}/#website`,
        name: 'Girls of Innovation',
        url: siteUrl,
        description: siteDescription,
        publisher: { '@id': `${siteUrl}/#organization` },
        inLanguage: 'en'
      }
    ]
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </head>
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
