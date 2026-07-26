# 🚀 CamargoTech - Landing Page & Servicios TI

Repositorio oficial del sitio web de **CamargoTech**, dedicado a consultorías tecnológicas, auditoría en normativas **ISO 19011:2018**, ciberseguridad, desarrollo web/móvil y distribución de recursos educativos digitales.

---

## 🤖 Contexto y Palabras Clave para IA / Prompts Futuros

> **Keywords:** `CamargoTech`, `Next.js App Router`, `Tailwind CSS`, `Shadcn UI`, `Ciberseguridad`, `Auditoría ISO 19011:2018`, `Licenciado en Administración Mención Informática`, `Politécnico de Colombia`, `Resend API`, `Netlify Deployment`.

---

## 🛠️ Stack Tecnológico

- **Framework:** [Next.js 14+](https://nextjs.org/) (App Router & Server Actions / API Routes)
- **Lenguaje:** TypeScript
- **Estilos & UI:** Tailwind CSS, Lucide Icons, Shadcn UI Components
- **Servicio de Email:** Resend (`/api/contact/route.ts`)
- **Hosting:** Netlify (`https://camargotech.netlify.app/`)

---

## 📁 Estructura del Proyecto

```text
camargotech-landing/
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts     # Endpoint de envío de correo
│   ├── globals.css          # Variables CSS de Tailwind
│   ├── layout.tsx           # Layout base del proyecto
│   └── page.tsx             # Home Page principal
├── components/
│   ├── ui/                  # Componentes reutilizables (Button, etc.)
│   ├── contact.tsx          # Formulario con captura de leads
│   ├── footer.tsx           # Enlaces a redes sociales y LinkedIn
│   ├── hero.tsx             # Encabezado principal y Badge Pro
│   ├── navbar.tsx           # Navegación del sitio
│   └── services.tsx         # Módulo de servicios
├── public/                  # Favicons e imágenes
├── netlify.toml             # Configuración para despliegue
└── package.json