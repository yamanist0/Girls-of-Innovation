const YEAR = 2026

export function SiteFooter() {
  return (
    <footer className="border-t mt-16 py-8 text-sm text-muted-foreground">
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between px-4 md:px-6">
        <p>Girls of Innovation • EAL Robotik 8828 • Eskişehir Anadolu Lisesi • {YEAR}</p>
        <p className="text-xs text-center">
          <a
            href="https://ealrobotik.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline underline-offset-4"
          >
            Made as part of EAL Robotik
          </a>
        </p>
      </div>
    </footer>
  )
}