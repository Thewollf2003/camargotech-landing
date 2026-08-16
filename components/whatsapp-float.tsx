import { whatsappUrl } from "@/components/navbar"

export function WhatsAppFloat() {
  return (
    <a href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Contactar por WhatsApp" className="fixed bottom-5 right-5 z-40 flex items-center gap-3 rounded-full border border-secondary/30 bg-secondary px-4 py-3 text-sm font-semibold text-secondary-foreground shadow-lg transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2">
      <svg aria-hidden="true" width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M20 11.5a8 8 0 0 1-11.8 7L4 20l1.5-4.2A8 8 0 1 1 20 11.5Z" /><path d="M8.5 9.5c.3 1.7 2.3 3.7 4 4 .5.1.8-.1 1.1-.5l.5-.7" /></svg>
      <span className="hidden sm:inline">Soporte WhatsApp</span>
    </a>
  )
}
