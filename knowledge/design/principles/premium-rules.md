# Premium Rules (For Prompt Injection)

Use these concise directives to instruct agents on generating high-end, $150k agency-tier designs.

## Visual Quality & Aesthetics
- **Ban AI Defaults**: No Inter, no Roboto, no glowing purple gradients, no three-column identical bento boxes, no pure black `#000` text.
- **Materiality & Depth**: Use "Double-Bezel" (outer shell + inner core) for cards. No basic 1px gray borders. Shadows must be ultra-soft, low opacity (<0.05), or non-existent.
- **Visual Diversity**: Real images or placeholder URLs (`picsum.photos`). No pure-text minimalism. No div-based fake screenshots. No hand-rolled decorative SVGs. 
- **Theme Lock**: Entire page locked to Light, Dark, or Auto. No flipping themes mid-page.

## Spacing & Structure
- **Macro-Whitespace**: Double the default padding. Use `py-24` to `py-40` between major sections.
- **Viewport Stability**: Always use `min-h-[100dvh]` for full-screen sections. Never `h-screen`.
- **Hero Constraints**: Top padding max `pt-24`. Headlines ≤ 2 lines, subtext ≤ 20 words. No tiny taglines or trust-logos inside the hero stack.

## Hierarchy & Typography
- **Type Contrast**: Huge, tight-tracking headlines (`tracking-tighter leading-none`) vs readable, relaxed body text (`max-w-[65ch] leading-relaxed`).
- **Serif Discipline**: Default to premium Sans-Serif. Serifs are heavily discouraged unless strictly demanded by luxury/editorial brand identity.
- **Eyebrow Caps**: Max 1 small uppercase eyebrow label per 3 sections.
- **Em-Dash Ban**: ZERO em-dashes (`—`) anywhere. Use real typographic quotes or nothing. 

## Motion & Interaction
- **Physics over Linear**: Transitions must use spring physics or custom cubic-beziers. 
- **Haptic Feedback**: Buttons use `scale-[0.98]` on `:active` with diagonal icon shifts.
- **Scroll Reveals**: Content fades up (`translateY(16px)` + `blur` + `opacity: 0` to `1`) on scroll entry. Stagger lists. No `window.scroll` event listeners.

## Responsiveness & Scaling
- **Explicit Collapse**: Desktop asymmetric grids MUST explicitly collapse to single columns (`w-full px-4`) below `768px`. Remove all negative margins and rotations on mobile.
- **CTA Wrap Ban**: Button text must never wrap to two lines on desktop. 

## Clean Code & Scalability
- **One Design System**: Never mix systems (e.g., Shadcn + Material).
- **Component Integrity**: Build isolated leaf components for motion with `'use client'` tags.
