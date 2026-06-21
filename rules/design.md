# Design Rules

Every generated website must follow these design rules.
No exceptions. No deviations.

---

## Premium Standard

- Every site must feel custom-designed. It must never feel template-based or AI-generated.
- Restraint is a feature. Remove before adding.
- Hierarchy comes from structure, typography, and spacing — not from decorative effects.

## Color

- Maximum one high-saturation accent color per project.
- Never use default browser colors or generic palette values.
- Background must be canvas-level (off-white or near-black). Never pure white or pure black.
- Color scarcity is mandatory. Accent appears at critical conversion points only.

## Typography

- Never use system fonts or default browser fonts.
- Headlines use `tracking-tighter` and `leading-none` or `leading-[1.1]`.
- Body text maximum contrast: `#111111` on light, `#EAEAEA` on dark.
- No em-dashes in copy. Use a colon or restructure the sentence.
- No AI copywriting clichés: "Elevate", "Seamless", "Transform", "Empower", "Unlock".

## Spacing

- Macro-whitespace is mandatory. Section padding minimum `py-24`.
- Never compress a layout to add more content. Add less content.
- Spacing tokens from the boilerplate must be used. No hardcoded spacing values.

## Layout

- Never repeat identical section layouts more than twice in a row.
- Minimum 4 distinct layout families per page (hero, bento, zigzag, full-width, etc.).
- Desktop layouts may be expressive and asymmetric.
- Mobile layouts must be predictable and single-column first.
- Every desktop layout must have a defined mobile collapse strategy.

## Motion

- Motion must feel physical. Use spring physics.
- Motion must serve a purpose: guide attention, signal interactivity, confirm action.
- Decorative motion is not permitted.
- All motion must respect `prefers-reduced-motion`.
- Motion intensity is controlled by the project's Motion dial (1-10).

## Design Dials

- Every project defines three dials before any UI generation:
  - `Variance (1-10)` — layout diversity and composition freedom
  - `Motion (1-10)` — animation intensity and interaction richness
  - `Density (1-10)` — spacing and content compression
- Dials are set in `clients/[slug]/docs/06-design/` before implementation starts.
- No component may be generated without dials being defined.

## Vibe Archetypes

- Exactly one archetype is selected per project:
  - Ethereal Glass
  - Editorial Luxury
  - Soft Structuralism
  - Utilitarian Minimalism
- The archetype must be documented before implementation.

## Authenticity

- Prefer real photography over stock imagery.
- Never use fake metrics, fake dashboards, or fake social proof.
- Content must reflect the specific client. No generic SaaS messaging applied to non-SaaS clients.
