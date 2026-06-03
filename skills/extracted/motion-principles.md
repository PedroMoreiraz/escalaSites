# Motion Principles

## Animation Philosophy
- **Motion Must Be Motivated**: Every animation must communicate hierarchy, storytelling, state transition, or feedback. "Because it looked cool" is not a valid reason.
- **Motion Claimed = Motion Shown**: If the Motion Intensity dial is > 4, the page must actually move (entry transitions, hover physics, scroll-reveals).
- **Invisible but Present**: Good motion feels like physics, not spectacle. Target a high-end, haptic feel.

## Transition Rules
- **Physics over Linear**: NEVER use default `linear` or `ease-in-out` CSS transitions. Use spring physics (`type: "spring", stiffness: 100, damping: 20`) or custom cubic-beziers (e.g., `cubic-bezier(0.32,0.72,0,1)`).
- **Haptic Buttons**: On hover or `:active`, buttons should simulate a physical press. Scale the entire button down slightly (`scale-[0.98]`) and shift inner elements (like an arrow icon) diagonally to create kinetic tension.
- **Scroll Entry (Staggered Reveals)**: Elements should fade in gently as they enter the viewport. Use `translateY(16px)` + `blur-md` + `opacity: 0` resolving to `0` over 600-800ms. Stagger list items sequentially.

## Banned Motion Patterns
- **No `window.addEventListener('scroll')`**: Causes continuous reflows. Use `IntersectionObserver`, CSS scroll-driven animations, or `framer-motion` `whileInView`.
- **No Animate-All Layouts**: Never animate `top`, `left`, `width`, `height`. Animate exclusively via `transform` and `opacity`. Use `will-change: transform` sparingly.
- **Marquee Limit**: Max 1 horizontal scrolling marquee per page. Multiple marquees look like lazy filler.

## Advanced Choreography (GSAP/Framer Motion)
- **Liquid Glass & Blurs**: Apply `backdrop-blur` only to fixed/sticky elements (Nav, Modals). NEVER apply heavy blur filters to scrolling containers.
- **Sticky-Stack on Scroll**: Ensure cards pin correctly (`start: "top top"`). Triggers should fire when the element hits the top of the viewport, not the center.
- **Accessibility Requirement**: Any motion above baseline MUST honor `@media (prefers-reduced-motion)`. Provide static, clean fallbacks.
