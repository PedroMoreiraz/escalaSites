# Development Rules

Every AI generating code must follow these rules.
No exceptions.

---

## Stack

- Framework: Next.js App Router with TypeScript.
- Styling: Tailwind CSS v4.
- Components: shadcn/ui primitives only.
- Animation: Framer Motion only. No other animation libraries.
- Fonts: next/font only. No external font CDN links in components.

## Component Architecture

- Server Components are the default. No `use client` unless strictly required.
- `use client` is required for: Framer Motion, browser APIs, click interactions, hover state, local state.
- Client components must be leaf nodes. Never wrap a Server Component tree in a Client Component.
- One component = one responsibility.

## Data Architecture

- Business content must never be hardcoded inside components.
- All content lives in data files: `heroData.ts`, `servicesData.ts`, `faqData.ts`, etc.
- Components consume typed data interfaces. They do not receive raw strings.
- The single source of truth for brand configuration is `config/site.ts`.

## Code Generation Order

1. Generate `config/site.ts` from `site-config` schema.
2. Generate data files for each section.
3. Generate components that consume those data files.
4. Never generate component code before the data structure is defined.

## Boilerplate

- The only permitted boilerplate is `templates/site/next-premium/`.
- Copy the boilerplate to `clients/[slug]/site/`. Never modify the source.
- Do not reinvent routing, build configuration, or the design token system.

## Quality Constraints

- No hardcoded color values in components. Use design tokens only.
- No hardcoded spacing values in components. Use Tailwind tokens only.
- No magic numbers. Every value must be traceable to a token or dial.
- All interactive elements must have accessible labels.
- Minimum WCAG AA contrast (4.5:1) on all text and interactive elements.

## Responsive

- Mobile-first. Write mobile styles first, desktop as overrides.
- Every layout must collapse cleanly to single-column below `md:` breakpoint.
- Touch targets must be minimum 44x44px on mobile.
- Use `min-h-[100dvh]` to prevent iOS Safari viewport jump.
