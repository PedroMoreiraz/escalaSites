# Master Boilerplate Specification

*Technical Blueprint for the EscalaSites Next.js Architecture*

This document defines the structural foundation for all EscalaSites projects. It is designed to act as a highly scalable, token-efficient boilerplate that enforces premium design constraints mechanically.

---

## 1. Folder Structure
**Goal**: Flat, predictable, and token-efficient.
- `/app`: Next.js App Router root (Pages, Layouts, API).
- `/components`:
  - `/atoms`: Pure functional UI primitives (Buttons, Inputs, Badges).
  - `/molecules`: Composed primitives (Cards, Accordions, Nav Items).
  - `/sections`: Major page blocks (Hero, Bento Grid, Footer).
- `/lib`: Utility functions (CN merger, formatting).
- `/motion`: Centralized animation variants and hooks.
- `/config`: Global site configurations and brand vectors.
- `/public`: Static assets and real SVGs.

## 2. Component Structure
**Goal**: Maximize reuse while enforcing React Server Component (RSC) safety.
- **Default Isolation**: All components default to Server Components for performance. 
- **Client Leaves**: Any component utilizing `framer-motion`, `useScroll`, or click/hover state must be an isolated Client Component (`'use client'`). 
- **Double-Bezel Standard**: Card components inherently accept an `innerProps` and `outerProps` schema to mechanically enforce nested hardware materiality without rewriting complex Tailwind strings per instance.

## 3. Section Structure
**Goal**: Parameterized layout families to avoid repetition.
- **Section Families**: Provide foundational section components (`<SplitHero />`, `<BentoGrid />`, `<ZigzagFeature />`, `<LogoWall />`).
- **Data-Driven**: Sections accept JSON data payloads rather than hardcoded children. This minimizes token usage during AI generation (the LLM only writes the JSON prop payload, not the whole DOM tree).
- **Macro-Whitespace Guardrails**: Every section automatically applies the `py-24` or `py-32` vertical rhythm via a shared wrapper component (`<SectionContainer />`).

## 4. Motion Architecture
**Goal**: Physics-based, highly reusable, and accessible motion.
- **Centralized Variants**: Store standard motion curves (spring physics, custom cubic-beziers) in `/motion/variants.ts`. The AI references these by name rather than hallucinating transition strings.
- **Scroll Choreography**: Provide a `<FadeUpStagger />` wrapper component that utilizes `IntersectionObserver` to reveal children sequentially.
- **A11y Compliance**: Global enforcement of `@media (prefers-reduced-motion)`. All motion hooks gracefully degrade to static states automatically.

## 5. Design Token Architecture
**Goal**: Mechanical enforcement of the 1-Accent rule and Color Scarcity.
- **Tailwind Strategy**: Avoid complex, deeply nested color palettes. Define semantic slots:
  - `bg-canvas` (bone/white or pure off-black)
  - `bg-surface` (card inner cores)
  - `text-body` (`#111111` or `#EAEAEA`)
  - `color-accent` (The single allowed high-saturation accent color).
- **Shape System**: Define a global `--radius` variable. The entire app calculates corner rounding relative to this variable to guarantee the "Shape Lock" rule.

## 6. Typography System
**Goal**: Flawless, premium typographic hierarchy out of the box.
- **Font Provisioning**: Use `next/font` for optimal loading of premium sans-serifs (Geist, Outfit, Cabinet Grotesk).
- **Hierarchy Classes**: Centralize headline logic into utility classes or wrapper components (`<Headline level="h1" />`) that automatically apply `tracking-tighter` and `leading-none`.
- **Descender Clearance**: The `<Headline />` component automatically applies `leading-[1.1]` and `pb-1` when italicized.

## 7. Responsive Strategy
**Goal**: Prevent broken mobile layouts.
- **Explicit Collapse**: Desktop asymmetric layouts (CSS Grid) must utilize a unified responsive wrapper (`<GridContainer />`) that automatically collapses to a single column (`w-full px-4`) below the `md:` breakpoint.
- **Touch Targets**: Mobile views automatically strip overlapping negative margins (Z-Axis cascade) to prevent touch-target conflicts.
- **Viewport Lock**: Top-level containers enforce `min-h-[100dvh]` to prevent iOS Safari address bar layout jumping.

## 8. SEO Structure
**Goal**: Automated, high-performance search visibility.
- **Dynamic Metadata**: The `app/layout.tsx` generates dynamic `metadata` objects fed by the centralized config.
- **Structured Data**: A `<JsonLd />` component automatically generates schema markup (Organization, Website, Product) based on the config.
- **Semantic HTML**: Strict adherence to semantic tags (`<article>`, `<section>`, `<nav>`) baked into the base section components.

## 9. Reusable Patterns
**Goal**: High-speed assembly with baked-in premium rules.
- **Button-in-Button**: The `<Button />` component accepts an `icon` prop and automatically nests it flush-right in a distinct circular wrapper with internal hover physics (`scale-[0.98]`).
- **Eyebrow Limiter**: The `<Eyebrow />` component tracks its global usage count in context and logs a warning if the 1-per-3-sections rule is violated during development.
- **Form Groups**: Standardized `<InputGroup />` mapping label above, input, and error below with built-in contrast validation styles.

## 10. Configuration Strategy
**Goal**: Single source of truth for the AI generation engine.
- **Central Config File**: `/config/site.ts`.
- **Contents**: Holds the 3 Dials (`variance`, `motion`, `density`), the Vibe Archetype, brand vectors, navigation links, and SEO defaults.
- **Workflow Hook**: During Step 6 of the generation workflow (Design Direction), the LLM strictly modifies this JSON/TS object. The boilerplate architecture natively adapts to the config values, drastically reducing the amount of DOM code the LLM needs to write.
