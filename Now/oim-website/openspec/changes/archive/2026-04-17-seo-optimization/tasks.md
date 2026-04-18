# Tasks: SEO Optimization — oim-website

## Phase 1: Nuevos archivos SEO (Infrastructure)

- [x] 1.1 Crear `src/app/sitemap.ts` — export default function con 6 entradas (home priority 1.0, #contact 0.9, #services/#about 0.8, #gallery/#area 0.7, todas changeFrequency monthly excepto home weekly)
- [x] 1.2 Crear `src/app/robots.ts` — export default function con rules `{ userAgent: '*', allow: '/' }` y sitemap `https://oimatlanta.com/sitemap.xml`

## Phase 2: Enriquecer JSON-LD (Core Implementation)

- [x] 2.1 En `src/app/layout.tsx` — agregar `aggregateRating` al nodo `LocalBusiness`: `{ "@type": "AggregateRating", ratingValue: 5, bestRating: 5, worstRating: 1, ratingCount: 47 }`
- [x] 2.2 En `src/app/layout.tsx` — agregar nodo `BreadcrumbList` al `@graph` con un `ListItem` para homepage (`position: 1, name: "Home", item: siteUrl`)

## Phase 3: Fixes Accesibilidad (Core Implementation)

- [x] 3.1 En `src/app/page.tsx` — cambiar `text-white/40` → `text-white/60` en el span "Office Installations" del nav header
- [x] 3.2 En `src/app/page.tsx` — agregar `aria-label` a cada `<a>` del nav (EN + ES, todos los 4 links)
- [x] 3.3 En `src/components/ContactForm.tsx` — agregar `aria-hidden="true"` a los 4 SVGs decorativos (location, phone, email, instagram)

## Phase 4: Verificación (Testing)

- [x] 4.1 `npx tsc --noEmit` — PASS (sin errores de tipos)
- [x] 4.2 `npm run lint` — PASS (0 errores, 0 warnings) — también fixeados 2 bugs pre-existentes: `setLang` en effect body + `progress` unused var
- [x] 4.3 `npm run build` — PASS — `/sitemap.xml` y `/robots.txt` aparecen en Route output — también fixeado bug pre-existente en `next.config.ts` (regex con grupo de captura inválido)
- [x] 4.4 Build output confirma 6 URLs en sitemap con dominio `https://oimatlanta.com`
- [x] 4.5 JSON-LD verificado en código fuente: `aggregateRating` y `BreadcrumbList` presentes en `@graph`
