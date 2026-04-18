# Exploration: SEO Optimization — oim-website

## Current State

### What's already EXCELLENT (don't touch)
- `layout.tsx`: Full metadata export — title template, description, keywords array (9 terms), authors, OG complete (og:type, og:locale, alternateLocale es_US, og:image 1200×630), Twitter card, canonical + hreflang (en-US / es-US / x-default), robots with googleBot directives, icons, category
- `layout.tsx`: JSON-LD `@graph` — LocalBusiness (complete: telephone, email, address, geo, openingHours, priceRange, areaServed x5, sameAs, hasOfferCatalog x4) + WebSite schema
- `next.config.ts`: Security headers (X-Content-Type-Options, X-Frame-Options, Referrer-Policy, Permissions-Policy) + aggressive cache (1yr for videos, images)
- `page.tsx`: Lazy loading all below-the-fold components with Suspense
- Videos: preload="metadata" (not "auto")
- Fonts: next/font/google with display:swap + preload:true

### Critical GAPS (need fixing)

**1. No sitemap.xml** — `src/app/` has: favicon.ico, globals.css, layout.tsx, page.tsx — NO sitemap.ts, NO robots.ts
- Impact: Google can crawl but has no explicit index map → slower discovery
- Fix: `src/app/sitemap.ts` + `src/app/robots.ts` (Next.js App Router native)

**2. hreflang points to `?lang=es` (query param) — NOT a real route**
- layout.tsx line 77: `"es-US": "${siteUrl}?lang=es"`
- Language switch is client-only via sessionStorage + CustomEvent
- Google sees ONE URL, ignores `?lang=es` for separate indexing
- Impact: Spanish content NOT indexed separately → bilingual SEO value = 0

**3. `text-white/40` contrast failure on nav subtitle**
- page.tsx line 49: "Office Installations" subtitle uses `text-white/40` = rgba(255,255,255,0.4)
- Against navy rgba(13,27,42,0.60): contrast ratio ≈ 3.2:1 — FAILS WCAG AA (requires 4.5:1)

**4. ContactForm SVG icons missing aria-hidden**
- ContactForm.tsx lines 236-265: 4 SVG icons (location, phone, email, instagram) used as decorative
- They're inside `<a>` tags with text labels — SVGs should be `aria-hidden="true"`
- Screen readers announce SVG path data without aria-hidden

**5. No AggregateRating in JSON-LD**
- AboutSection has a hardcoded 5-star review displayed visually
- But LocalBusiness JSON-LD in layout.tsx has NO `aggregateRating` property
- Impact: No star snippets in Google search results

**6. BreadcrumbList missing from JSON-LD**
- Single-page app with anchor sections — breadcrumb would reinforce content hierarchy to Google

**7. Nav links missing semantic role**
- page.tsx lines 53-68: `<nav>` present ✅, but `<a>` links have no `aria-label`
- Not critical but improves screen reader experience

## Affected Areas

- `src/app/sitemap.ts` — NEW FILE (doesn't exist)
- `src/app/robots.ts` — NEW FILE (doesn't exist)
- `src/app/layout.tsx` — Add AggregateRating + BreadcrumbList to JSON-LD, fix hreflang note
- `src/app/page.tsx` — Fix `text-white/40` → `text-white/60`, add `aria-label` to nav links
- `src/components/ContactForm.tsx` — Add `aria-hidden="true"` to 4 decorative SVGs

## Approaches

### Approach 1: Full SEO Sprint (Recommended)
Fix ALL gaps in one change: sitemap, robots, JSON-LD enhancements, accessibility fixes.
- Pros: Complete, no partial state, single PR
- Cons: More files touched
- Effort: Low (no architectural changes, all additive)

### Approach 2: Critical Only
Only sitemap + robots + contrast fix.
- Pros: Minimal risk
- Cons: Leaves AggregateRating gap, accessibility debt
- Effort: Very Low

## Recommendation

**Approach 1 — Full SEO Sprint.** Every fix is additive (new files or small edits). Zero risk of breaking existing animations, bilingual logic, or component structure. The hreflang `?lang=es` issue is a known limitation of client-side i18n — the correct fix is a comment + cleanup (not building a full i18n router, which is out of scope).

## Risks

- `sitemap.ts` / `robots.ts` are new files — zero regression risk
- JSON-LD additions are additive — no removal, no risk
- `text-white/40` → `text-white/60` changes visual appearance (minor, still subdued)
- `aria-hidden` on SVGs is purely additive — no visual change

## Ready for Proposal

Yes. All gaps confirmed via direct code reading. Scope is clear and bounded.
