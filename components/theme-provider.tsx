'use client'
import * as React from 'react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'

interface SimpleThemeProviderProps {
  children: React.ReactNode
  attribute?: string
  defaultTheme?: string
  enableSystem?: boolean
  themes?: string[]
}

export function ThemeProvider({ children, ...props }: SimpleThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}