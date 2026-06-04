# AI UI/UX Prompt Pack

## 1. Core Principles
- **Context Over Defaults**: Dial Variance (1-10), Motion (1-10), and Density (1-10) before generating. Target audience dictates aesthetics.
- **Hardware Materiality**: UIs simulate physical depth. Use Double-Bezel (outer shell + inner core) for containers. Shadows ultra-diffuse (<0.05 opacity) or non-existent.
- **Color Scarcity**: Use pure white/bone or pure off-black backgrounds. Max 1 accent color (saturation < 80%). Color signals state, not decoration.
- **Macro-Whitespace**: Double default web padding. Use extreme vertical rhythm (`py-24` to `py-40`) between macro sections.
- **Asymmetric Composition**: Break the digital grid. Shift visual weight with `col-span` variation. Anti-center bias (except manifestos). 
- **Systematic Honesty**: Use official design systems (Fluent, Carbon) for enterprise/SaaS. Use bespoke Tailwind + Motion for marketing/portfolios.
- **Visual Dominance**: Use real images or placeholder URLs (`picsum.photos`). Minimalist does not mean pure text.

## 2. Mandatory Rules
- **Typography**: Default to premium Sans-Serif (Geist, Outfit, Cabinet Grotesk, SF Pro). Headlines: massive, `tracking-tighter`, `leading-none`. Body: off-black (`#111111`), `max-w-[65ch]`, `leading-relaxed`.
- **Typographic Mechanics**: Add `leading-[1.1]` + `pb-1` for italic descender clearance. Emphasis uses bold/italic of the SAME font family.
- **Layout Consistency**: Lock ONE page theme (Light, Dark, Auto). Lock ONE shape radius scale (sharp, soft, pill). Lock ONE accent color.
- **Hero Constraints**: Top padding max `pt-24`. Use `min-h-[100dvh]` (never `h-screen`). Max 4 text elements total. Headline ≤ 2 lines. Subtext ≤ 20 words.
- **CSS Grid Priority**: Use native CSS grid (`grid-cols-X gap-Y`).
- **Bento Logic**: Cell count must exactly equal content item count. Mix content types (images, gradients, solid colors).
- **Navigation**: Max 1 line on desktop. Max height 80px.
- **Component Integrity**: CTAs must be 1-3 words, single line. Button inner trailing icons sit flush right in distinct circular wrappers.
- **Conversion UX**: CTAs must have singular page intent. Logos must be real SVGs, positioned UNDER the hero. 
- **Accessibility**: All buttons, form inputs, placeholders, and focus rings must pass WCAG AA (4.5:1 ratio). Forms must use labels above inputs.
- **Motion Physics**: Use spring physics (`type:"spring", stiffness:100`) or custom cubic-beziers. 
- **Haptic Interactions**: Buttons trigger `scale-[0.98]` on `:active` + diagonal inner-icon shifts.
- **Scroll Choreography**: Elements fade up (`translateY(16px) blur opacity:0->1`) on entry.
- **Responsiveness**: Desktop asymmetric grids MUST explicitly collapse to single-column (`w-full px-4`) below 768px. Remove negative margins/rotations on mobile.

## 3. Forbidden Patterns
- **Banned Typography**: Inter, Roboto, Arial, Open Sans, Fraunces, Instrument_Serif. 
- **Banned Characters**: Em-dashes (`—`) completely forbidden. 
- **Banned Colors**: AI purple glows. Pure black `#000` text. Beige/brass/espresso combinations for consumer goods (rotate to monochrome or cold luxury).
- **Banned Mechanics**: `window.addEventListener('scroll')`. Animating `top/left/width/height`.
- **Banned Elements**: Div-based fake screenshots. Hand-rolled decorative SVGs. Multi-line desktop CTAs.
- **Banned Layouts**: >2 consecutive zigzag (left-image/right-text) sections. Symmetrical 3-column bento default. Empty bento cells.
- **Banned Densities**: 10-row tables with `border-b` on every row (use chunking or cards instead). Stuffed heroes (trust logos, taglines, pricing inside the hero stack).
- **Banned Copy**: AI clichés (Elevate, Seamless, Unleash, Delve, Next-Gen). Fake-precise numbers (`48.2k`). Placeholders acting as form labels. Multiple CTAs with duplicate intent (e.g., "Contact" and "Let's talk").
- **Banned Overlays**: Multiple horizontal marquees per page. Eyebrow caps on every section (max 1 per 3 sections). 
