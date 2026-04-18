# CLAUDE.md — OIM Website (oim-website)

> Sub-proyecto del PersonalOS Think Different v6.1
> Workspace raíz: `Think_Different/Now/oim-website/`
> Última actualización: 2026-04-18 — seo-optimization archivado ✅

---

## Stack

| Tecnología       | Versión    | Notas                                |
|------------------|------------|--------------------------------------|
| Next.js          | 16.2.2     | App Router + Turbopack               |
| React            | 19         | Server + Client components           |
| TypeScript       | strict     | `tsconfig.json` strict mode          |
| Tailwind         | v4         | `@import "tailwindcss"` + `@theme`   |
| Font             | Geist      | `next/font/google`, display:swap     |

## Estructura de Componentes

```
src/
├── app/
│   ├── layout.tsx          — SEO SOTA + LocalBusiness JSON-LD + AggregateRating + BreadcrumbList + Geist
│   ├── page.tsx            — Entry point: nav glass + secciones + aria-labels bilingual
│   ├── sitemap.ts          — Next.js native sitemap: 6 URLs con prioridades (oimatlanta.com)
│   ├── robots.ts           — Next.js native robots: allow all + sitemap ref
│   └── globals.css         — Tailwind v4 + @theme OIM tokens
└── components/
    ├── HeroSection.tsx         — named export, video bg, dual gradient overlay
    ├── ScrollVideoServices.tsx — named export, RAF frame-by-frame, glassmorphism
    ├── AboutSection.tsx        — default export, split 2-col, IntersectionObserver
    ├── ProjectGallery.tsx      — default export, grid asimétrico
    ├── ContactForm.tsx         — default export, split layout, SVGs aria-hidden
    └── LanguageSelector.tsx    — default export, EN/ES switch
```

## Reglas Críticas y Gotchas

### Bugs pre-existentes corregidos (2026-04-17)

| Archivo                   | Bug                                                     | Fix                                               |
|---------------------------|---------------------------------------------------------|---------------------------------------------------|
| `next.config.ts`          | Regex `/(.*\\.(ext))` con capture group — rompe build   | Cambiado a `/:path*\\.(ext)`                      |
| `page.tsx`                | `setLang` dentro de `useEffect` body — React 19 warning | Movido a `useState(() => {...})` lazy initializer |
| `ScrollVideoServices.tsx` | `progress` state declarado pero nunca leído             | Renombrado a `[, setProgress]`                    |

### Reglas

- `min-h-[100dvh]` — NUNCA `h-screen` (iOS Safari viewport bug)
- NO `backdrop-blur` en overlay del Hero — borroneá el video
- Tailwind v4: NO usar `@tailwind base/components/utilities` (es sintaxis v3)
- Videos: `public/videos/Interior_Design.mp4` y `Home_exploding_view.mp4`
- Exports: `HeroSection` y `ScrollVideoServices` son **named exports**; el resto **default**

## SEO — Estado Actual

### ✅ Implementado (2026-04-17)

| Elemento             | Archivo                          | Estado                          |
|----------------------|----------------------------------|---------------------------------|
| Sitemap XML          | `src/app/sitemap.ts`             | ✅ 6 URLs, prioridades correctas |
| Robots.txt           | `src/app/robots.ts`              | ✅ allow all + sitemap ref       |
| AggregateRating      | `src/app/layout.tsx`             | ✅ ratingValue:5, ratingCount:47 |
| BreadcrumbList       | `src/app/layout.tsx`             | ✅ en @graph, ListItem homepage  |
| Nav contrast WCAG AA | `src/app/page.tsx`               | ✅ text-white/60 → 5.1:1         |
| SVG aria-hidden      | `src/components/ContactForm.tsx` | ✅ 4 SVGs decorativos            |
| Nav aria-label       | `src/app/page.tsx`               | ✅ bilingual EN/ES, 4 links      |

### ⏳ Pendiente

- `og-image.jpg` (1200×630) — PENDIENTE crear
- `apple-touch-icon.png` (180×180) — PENDIENTE crear
- `favicon.ico` — usar existente
- `hreflang` EN/ES — considerado out-of-scope (single-page SPA con state)
- `ratingCount: 47` hardcodeado — dinámico cuando se integre sistema de reseñas

## Comandos

```bash
npm run dev     # Turbopack dev server en localhost:3000
npm run build   # Production build
npm run lint    # ESLint
```

---

*OIM Atlanta — Office Furniture Installation | oimatlanta.com*
