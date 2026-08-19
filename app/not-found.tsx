import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-[55vh] flex flex-col items-center justify-center text-center space-y-6">
      <p className="text-7xl md:text-8xl font-bold gradient-text">404</p>
      <div className="space-y-2">
        <h1 className="text-2xl font-bold tracking-tight">This page is off the map</h1>
        <p className="text-sm text-muted-foreground max-w-md mx-auto">
          The page you are looking for does not exist, or it broke a barrier and moved on.
        </p>
      </div>
      <Link
        href="/"
        className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition"
      >
        Back to Girls of Innovation
      </Link>
    </div>
  )
}