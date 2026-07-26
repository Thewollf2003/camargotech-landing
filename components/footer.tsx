export function Footer() {
  return (
    <footer className="border-t border-border/60 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <p className="font-display text-sm font-bold tracking-tight text-foreground">
          Camargo<span className="text-primary">Tech</span>
        </p>
        
        <div className="flex items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} CamargoTech. Software con propósito.
          </p>
          <a
            href="https://www.linkedin.com/in/andr%C3%A9s-mart%C3%ADnez-669542368/" 
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Perfil de LinkedIn"
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            {/* SVG Oficial de LinkedIn */}
            <svg
              className="h-5 w-5 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  )
}