const services = [
  {
    title: "Desarrollo Web",
    description: "Sitios y plataformas rápidas, optimizadas para SEO, accesibilidad y crecimiento.",
    icon: "window",
    span: "md:col-span-2",
  },
  {
    title: "Apps Móviles",
    description: "Aplicaciones fluidas para iOS y Android con experiencias intuitivas.",
    icon: "phone",
    span: "",
  },
  {
    title: "Productos Digitales",
    description: "Estrategia, diseño y desarrollo de MVPs listos para escalar.",
    icon: "layers",
    span: "",
  },
  {
    title: "Auditorías Tecnológicas",
    description: "Revisamos procesos, infraestructura y controles para detectar riesgos y oportunidades de mejora.",
    icon: "audit",
    span: "md:col-span-2",
  },
  {
    title: "Asesoría y Formación",
    description: "Acompañamiento práctico para desarrollar software y formar equipos en principios de ciberseguridad.",
    icon: "shield",
    span: "md:col-span-2",
  },
  {
    title: "Reparación de Equipos",
    description: "Diagnóstico y reparación responsable para recuperar tus equipos y mantener tu operación activa.",
    icon: "wrench",
    span: "",
  },
]

function ServiceIcon({ name }: { name: string }) {
  const common = { width: 22, height: 22, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round" as const, strokeLinejoin: "round" as const }
  if (name === "phone") return <svg {...common}><rect x="5" y="2" width="14" height="20" rx="2" /><path d="M12 18h.01" /></svg>
  if (name === "layers") return <svg {...common}><path d="m12 2 10 5-10 5L2 7l10-5Z" /><path d="m2 12 10 5 10-5" /><path d="m2 17 10 5 10-5" /></svg>
  if (name === "audit") return <svg {...common}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" /><path d="M14 2v6h6M8 13h8M8 17h5" /><path d="m8 9 .01 0" /></svg>
  if (name === "shield") return <svg {...common}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" /><path d="m9 12 2 2 4-4" /></svg>
  if (name === "wrench") return <svg {...common}><path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18a2.1 2.1 0 1 0 3 3l6.3-6.3a4 4 0 0 0 5.4-5.4L15 11l-2-2 1.7-2.7Z" /></svg>
  return <svg {...common}><rect x="2" y="3" width="20" height="14" rx="2" /><path d="M2 8h20M8 21h8M12 17v4" /></svg>
}

export function Services() {
  return (
    <section id="servicios" className="scroll-mt-20 border-t border-border/60 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-14 max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-widest text-secondary">Servicios</span>
          <h2 className="mt-3 text-balance font-display text-4xl font-bold tracking-tight text-foreground md:text-5xl">Tecnología confiable para cada desafío</h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">Desde una idea hasta la seguridad de tu operación, te acompañamos con soluciones claras y accionables.</p>
        </div>
        <div id="proyectos" className="grid scroll-mt-20 grid-cols-1 gap-4 md:grid-cols-3">
          {services.map((service) => (
            <article key={service.title} className={`group rounded-2xl border border-secondary/25 bg-card p-7 transition-all hover:border-secondary/60 hover:shadow-[0_0_0_1px_var(--secondary)] ${service.span}`}>
              <div className="mb-5 flex size-11 items-center justify-center rounded-xl border border-secondary/30 bg-secondary/5 text-secondary transition-colors group-hover:bg-secondary group-hover:text-secondary-foreground"><ServiceIcon name={service.icon} /></div>
              <h3 className="font-display text-xl font-semibold text-foreground">{service.title}</h3>
              <p className="mt-2 text-pretty leading-relaxed text-muted-foreground">{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
