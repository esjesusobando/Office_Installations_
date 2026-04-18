# SEO Specification — oim-website

## Purpose

Define requirements for sitemap, robots, and structured data enrichment.

---

## Requirements

### Requirement: Sitemap

The system MUST expose `/sitemap.xml` via `src/app/sitemap.ts` using Next.js App Router native sitemap API.

The sitemap MUST include the following URLs with correct priorities:

| URL | changeFrequency | priority |
|-----|----------------|----------|
| `https://oimatlanta.com` | weekly | 1.0 |
| `https://oimatlanta.com/#services` | monthly | 0.8 |
| `https://oimatlanta.com/#about` | monthly | 0.8 |
| `https://oimatlanta.com/#gallery` | monthly | 0.7 |
| `https://oimatlanta.com/#contact` | monthly | 0.9 |
| `https://oimatlanta.com/#area` | monthly | 0.7 |

#### Scenario: Sitemap accessible

- GIVEN the site is built or running in dev mode
- WHEN a crawler requests `/sitemap.xml`
- THEN the response MUST be HTTP 200 with `Content-Type: application/xml`
- AND contain all 6 URLs listed above

#### Scenario: Sitemap URL matches production domain

- GIVEN `siteUrl = "https://oimatlanta.com"`
- WHEN sitemap.ts generates entries
- THEN all URLs MUST use `https://oimatlanta.com` as base (not localhost)

---

### Requirement: Robots

The system MUST expose `/robots.txt` via `src/app/robots.ts`.

The robots.txt MUST allow all user agents and MUST reference the sitemap URL.

#### Scenario: Robots accessible

- GIVEN the site is running
- WHEN a crawler requests `/robots.txt`
- THEN the response MUST contain `User-Agent: *`, `Allow: /`, and `Sitemap: https://oimatlanta.com/sitemap.xml`

---

### Requirement: AggregateRating in JSON-LD

The `LocalBusiness` node in `layout.tsx` SHOULD include an `aggregateRating` property to enable star snippets in Google search results.

The rating MUST use schema.org `AggregateRating` type with `ratingValue`, `bestRating`, and `ratingCount`.

#### Scenario: Rich result with stars

- GIVEN the structured data includes `aggregateRating`
- WHEN Google Rich Results Test processes the page
- THEN the LocalBusiness entity MUST pass validation with no errors
- AND the aggregateRating fields MUST be present and valid

#### Scenario: Invalid rating values rejected

- GIVEN `ratingValue` is a number
- WHEN value is outside range [1, 5]
- THEN the JSON-LD MUST NOT be used (validation fails)

---

### Requirement: BreadcrumbList in JSON-LD

The `@graph` array in `layout.tsx` SHOULD include a `BreadcrumbList` node representing the page hierarchy.

#### Scenario: BreadcrumbList present

- GIVEN the page loads
- WHEN Google processes structured data
- THEN `@graph` MUST contain a node of `@type: BreadcrumbList`
- AND it MUST include at minimum one `ListItem` for the homepage
