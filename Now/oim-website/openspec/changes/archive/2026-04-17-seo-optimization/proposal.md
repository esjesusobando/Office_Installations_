# Proposal: SEO Optimization — oim-website

## Intent

Cerrar los gaps de SEO técnico y accesibilidad identificados en la auditoría. La web tiene metadata excelente pero le faltan sitemap, robots.txt, enriquecimiento del JSON-LD (estrellas en resultados Google) y fixes menores de contraste + ARIA que afectan WCAG AA.

## Scope

### In Scope
- Crear `src/app/sitemap.ts` — sitemap nativo Next.js App Router
- Crear `src/app/robots.ts` — robots.txt nativo con referencia al sitemap
- Agregar `aggregateRating` al JSON-LD LocalBusiness en `layout.tsx` (star snippet en Google)
- Agregar `BreadcrumbList` al JSON-LD `@graph` en `layout.tsx`
- Fix contraste nav: `text-white/40` → `text-white/60` (`page.tsx` línea 49)
- Agregar `aria-hidden="true"` a los 4 SVGs decorativos en `ContactForm.tsx` (líneas 236–265)
- Agregar `aria-label` descriptivo a los nav links en `page.tsx` (líneas 54–67)

### Out of Scope
- Implementar rutas i18n reales (`/es/`) — requiere refactor arquitectural separado
- Reemplazar gradientes por imágenes reales en ProjectGallery
- Agregar test runner (Vitest/Jest)

## Approach

Todos los cambios son **aditivos**. Dos archivos nuevos (sitemap + robots), tres archivos editados con cambios mínimos. Sin tocar lógica de componentes, animaciones ni sistema de idiomas.

## Affected Areas

| Área | Impacto | Descripción |
|------|---------|-------------|
| `src/app/sitemap.ts` | Nuevo | Sitemap con 6 URLs (home + 5 anchors) |
| `src/app/robots.ts` | Nuevo | robots.txt + referencia a sitemap |
| `src/app/layout.tsx` | Modificado | AggregateRating + BreadcrumbList en JSON-LD |
| `src/app/page.tsx` | Modificado | Contrast fix + aria-label en nav links |
| `src/components/ContactForm.tsx` | Modificado | aria-hidden en 4 SVGs decorativos |

## Risks

| Riesgo | Probabilidad | Mitigación |
|--------|-------------|------------|
| JSON-LD inválido rompe rich results | Baja | Validar con Google Rich Results Test post-deploy |
| Contrast change altera diseño visual | Baja | white/60 sigue siendo sutil, solo más legible |

## Rollback Plan

Git revert de los 5 archivos afectados. Los archivos nuevos (sitemap.ts, robots.ts) se eliminan. Sin migraciones ni dependencias externas.

## Dependencies

Ninguna. Next.js 16 soporta `sitemap.ts` y `robots.ts` nativamente via App Router.

## Success Criteria

- [ ] `/sitemap.xml` responde 200 con 6 URLs en producción/build
- [ ] `/robots.txt` responde 200 con `Sitemap:` apuntando al dominio correcto
- [ ] Google Rich Results Test valida LocalBusiness con `aggregateRating`
- [ ] `npm run lint` pasa sin errores
- [ ] `npx tsc --noEmit` pasa sin errores
- [ ] `npm run build` completa sin errores
- [ ] Contraste nav subtitle ≥ 4.5:1 (WCAG AA)
