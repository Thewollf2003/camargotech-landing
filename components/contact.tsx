"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"

export function Contact() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [errorMsg, setErrorMsg] = useState("")

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!email) return

    setLoading(true)
    setErrorMsg("")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      })

      if (response.ok) {
        setSubmitted(true)
      } else {
        setErrorMsg("Ocurrió un error al enviar. Intenta de nuevo.")
      }
    } catch (err) {
      setErrorMsg("Error de conexión. Revisa tu red.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contacto" className="scroll-mt-20 border-t border-border/60 py-20 md:py-28">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <span className="text-sm font-semibold uppercase tracking-widest text-secondary">Contacto</span>
        <h2 className="mt-3 text-balance font-display text-4xl font-bold tracking-tight text-foreground md:text-5xl">
          Cuéntanos tu idea. Nosotros la hacemos realidad.
        </h2>
        <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
          Déjanos tu correo y te contactaremos en menos de 24 horas para conversar sobre tu proyecto o consultoría.
        </p>

        {submitted ? (
          <div
            role="status"
            className="mt-10 rounded-2xl border border-primary/30 bg-accent p-8 text-accent-foreground"
          >
            <p className="font-display text-lg font-semibold">¡Gracias! Hemos recibido tu correo.</p>
            <p className="mt-1 text-sm text-muted-foreground">Te escribiremos muy pronto a {email}.</p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mx-auto mt-10 flex w-full max-w-md flex-col gap-3 sm:flex-row"
          >
            <label htmlFor="email" className="sr-only">
              Correo electrónico
            </label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="tu@correo.com"
              className="h-12 flex-1 rounded-full border border-border bg-background px-5 text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
            <Button type="submit" size="lg" disabled={loading} className="h-12 rounded-full px-7">
              {loading ? "Enviando..." : "Enviar"}
            </Button>
          </form>
        )}

        {errorMsg && (
          <p className="mt-3 text-sm text-red-500 font-medium">{errorMsg}</p>
        )}
      </div>
    </section>
  )
}