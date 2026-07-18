import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 pb-20 pt-20 md:pb-28 md:pt-28">
        <div className="flex flex-col items-center text-center">
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-secondary/40 bg-secondary/5 px-4 py-1.5 text-xs font-medium text-secondary">
            <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-secondary" />
            Agencia de software · Diseño + Ingeniería
          </span>

          <h1 className="max-w-4xl text-balance font-display text-5xl font-bold leading-[1.05] tracking-tight text-foreground md:text-7xl">
            Construimos <span className="text-primary">webs, apps móviles</span> y productos digitales que la gente ama
          </h1>

          <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            En CamargoTech convertimos ideas en software rápido, accesible e innovador. Del prototipo al producto,
            diseñamos y desarrollamos con precisión de ingeniería.
          </p>

          <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row">
            <Button asChild size="lg" className="w-full rounded-full px-8 text-base sm:w-auto">
              <a href="#contacto">Empezar un proyecto</a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="w-full rounded-full border-secondary/40 px-8 text-base text-secondary hover:bg-secondary/5 hover:text-secondary sm:w-auto"
            >
              <a href="#servicios">Ver servicios</a>
            </Button>
          </div>

          <dl className="mt-16 grid w-full max-w-2xl grid-cols-3 gap-6 border-t border-border/60 pt-8">
            {[
              { value: "50+", label: "Productos lanzados" },
              { value: "100%", label: "Enfoque accesible" },
              { value: "24/7", label: "Rendimiento monitoreado" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <dt className="font-display text-3xl font-bold text-foreground">{stat.value}</dt>
                <dd className="mt-1 text-sm text-muted-foreground">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
