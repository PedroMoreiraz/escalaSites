# Design Philosophy

## Overall Philosophy
- **Anti-Slop Framework**: Reject AI defaults. Stop generating generic, templated, or "boilerplate" designs. Read the room and context before applying aesthetics.
- **Context-Aware Design**: A B2B dashboard needs different rules than a designer's portfolio. The audience dictates the aesthetic, not the designer's personal preference.
- **The Three Dials**: 
  - **Variance (1-10)**: 1 = Perfect Symmetry, 10 = Artsy Chaos.
  - **Motion Intensity (1-10)**: 1 = Static, 10 = Cinematic/Physics.
  - **Visual Density (1-10)**: 1 = Art Gallery/Airy, 10 = Cockpit/Packed Data.

## Aesthetic Direction
- **Systematic Honesty**: Use official design systems (e.g., Fluent, Carbon, Material) when building SaaS/Enterprise. Use bespoke styling (Tailwind + Framer Motion) only for landing pages, creative portfolios, and aesthetic-driven consumer products.
- **Vibe & Texture Archetypes**:
  - **Ethereal Glass**: Deep OLED black, radial mesh gradients, vantablack cards, white/10 hairlines.
  - **Editorial Luxury**: Warm creams, high-contrast serif headers, CSS film-grain noise.
  - **Soft Structuralism**: Silver-grey/white backgrounds, massive grotesk typography, soft/diffused ambient shadows.
  - **Utilitarian Minimalism**: Extreme contrast, warm monochrome, no heavy shadows, no gradients.

## Visual Priorities
- **Macro-Whitespace First**: Double the standard padding. Use extreme vertical spacing (`py-24` to `py-40`). Let components breathe heavily.
- **Haptic Depth**: Interfaces should feel tactile. Elements should simulate physical mass and real-world tension using nested architectures ("Double-Bezel") and spring physics.
- **Typographic Dominance**: Rely on extreme typographic contrast to establish hierarchy rather than multiple colored boxes or borders. 

## Premium Indicators ($150k Agency Vibe)
- **Fluid Dynamics**: Custom cubic-bezier transitions instead of linear defaults.
- **Hardware Materiality**: Nested containers (Doppelrand) that mimic a glass plate sitting in an aluminum tray.
- **Intentional Restraint**: Omitting elements is more premium than adding decorative noise. Color is a scarce resource used only for semantic meaning or subtle accents.

## Common Mistakes to Avoid
- **Default AI Typography**: Avoid Inter, Roboto, Arial. Do NOT default to serif typefaces unless explicitly justified by the brand's luxury/heritage context.
- **Generic Slop Elements**: Avoid "AI Purple" glowing gradients, basic 3-column equal-width cards, 1px solid gray borders everywhere.
- **Floating without Anchor**: Avoid applying heavy drop shadows. Shadows must be ultra-diffuse (< 0.05 opacity) or non-existent.
- **Lack of Thematic Lock**: Mixing light and dark modes within the same page. The page must have ONE locked theme.
- **Empty Design Space**: Relying on flat empty backgrounds instead of subtle noise, radial glows, or texture overlays.
