import * as React from 'react'
import { cn } from '@/lib/utils'

const sizes = {
  default: 'h-10 px-4 py-2',
  sm: 'h-8 rounded-md px-3 text-xs',
  lg: 'h-11 rounded-md px-8',
  icon: 'h-10 w-10'
} as const

const variants = {
  default: 'bg-primary text-primary-foreground hover:bg-primary/90',
  outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
  ghost: 'hover:bg-accent hover:text-accent-foreground'
} as const

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof variants
  size?: keyof typeof sizes
  href?: string
}

export function Button({
  className,
  variant = 'default',
  size = 'default',
  href,
  ...props
}: ButtonProps) {
  const cls = cn(
    'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ring-offset-background',
    variants[variant],
    sizes[size],
    className
  )
  if (href) {
    return <a href={href} className={cls} {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)} />
  }
  return <button className={cls} {...props} />
}