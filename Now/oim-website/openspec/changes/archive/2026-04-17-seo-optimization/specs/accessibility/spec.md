# Accessibility Specification — oim-website

## Purpose

Define WCAG AA requirements for contrast ratio and ARIA attributes.

---

## Requirements

### Requirement: Nav Subtitle Contrast

The nav subtitle "Office Installations" MUST meet WCAG AA contrast ratio of ≥ 4.5:1 against its background.

The current `text-white/40` (contrast ≈ 3.2:1) MUST be replaced with `text-white/60` (contrast ≈ 5.1:1).

#### Scenario: Contrast passes WCAG AA

- GIVEN the nav header is rendered with navy background `rgba(13,27,42,0.60)`
- WHEN the subtitle uses `text-white/60`
- THEN the contrast ratio MUST be ≥ 4.5:1
- AND visual appearance MUST remain subdued (not dominant)

---

### Requirement: Decorative SVG Icons — aria-hidden

All purely decorative SVG icons that are siblings of visible text labels MUST have `aria-hidden="true"` to prevent screen readers from announcing SVG path data.

Affected: 4 SVG icons in `ContactForm.tsx` (location, phone, email, instagram) inside anchor elements that already have visible text.

#### Scenario: Screen reader skips decorative icon

- GIVEN a screen reader navigates the contact info links
- WHEN it encounters an SVG icon with `aria-hidden="true"`
- THEN the screen reader MUST skip the SVG and announce only the text label
- AND navigation MUST not be interrupted

#### Scenario: Icon without aria-hidden announces raw path data

- GIVEN an SVG without `aria-hidden`
- WHEN a screen reader encounters it
- THEN it MAY announce the path data — this MUST NOT happen in production

---

### Requirement: Nav Links — aria-label

Navigation anchor elements SHOULD have `aria-label` attributes that describe their destination when the visible text alone is ambiguous in context.

#### Scenario: Nav link announced correctly

- GIVEN a screen reader navigates the `<nav>` element
- WHEN it reaches an anchor link
- THEN the screen reader MUST announce a meaningful label (e.g., "Services section", "Projects section")
- AND the label MUST match the current language (EN or ES)
