const services = [
  {
    title: "Desarrollo Web",
    description:
      "Sitios y plataformas ultra rápidas, optimizadas para SEO y accesibilidad. Next.js, rendimiento impecable y diseño responsivo.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="2" y1="8" x2="22" y2="8" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    span: "md:col-span-2",
  },
  {
    title: "Apps Móviles",
    description:
      "Aplicaciones nativas e híbridas fluidas para iOS y Android, con experiencias intuitivas y offline-first.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" />
        <line x1="12" y1="18" x2="12" y2="18" />
      </svg>
    ),
    span: "",
  },
  {
    title: "Productos Digitales",
    description:
      "Del descubrimiento al lanzamiento: estrategia, diseño de producto y desarrollo de MVPs listos para escalar.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2 2 7l10 5 10-5-10-5Z" />
        <path d="m2 17 10 5 10-5" />
        <path d="m2 12 10 5 10-5" />
      </svg>
    ),
    span: "",
  },
  {
    title: "Diseño de Experiencia (UX/UI)",
    description:
      "Interfaces claras, inclusivas y centradas en las personas, respaldadas por investigación y sistemas de diseño consistentes.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="4" />
        <line x1="12" y1="2" x2="12" y2="4" />
        <line x1="12" y1="20" x2="12" y2="22" />
        <line x1="2" y1="12" x2="4" y2="12" />
        <line x1="20" y1="12" x2="22" y2="12" />
      </svg>
    ),
    span: "md:col-span-2",
  },
]

export function Services() {
  return (
    <section id="servicios" className="scroll-mt-20 border-t border-border/60 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-14 max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-widest text-secondary">Servicios</span>
          <h2 className="mt-3 text-balance font-display text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            Todo lo que tu producto necesita, en un solo equipo
          </h2>
        </div>

        <div id="proyectos" className="grid scroll-mt-20 grid-cols-1 gap-4 md:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className={`group rounded-2xl border border-secondary/25 bg-card p-7 transition-all hover:border-secondary/60 hover:shadow-[0_0_0_1px_var(--secondary)] ${service.span}`}
            >
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-secondary/30 bg-secondary/5 text-secondary transition-colors group-hover:bg-secondary group-hover:text-secondary-foreground">
                {service.icon}
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground">{service.title}</h3>
              <p className="mt-2 text-pretty leading-relaxed text-muted-foreground">{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
