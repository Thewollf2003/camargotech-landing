export function Footer() {
  return (
    <footer className="border-t border-border/60 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <p className="font-display text-sm font-bold tracking-tight text-foreground">
          Camargo<span className="text-primary">Tech</span>
        </p>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} CamargoTech. Software con propósito.
        </p>
      </div>
    </footer>
  )
}
