# Component Principles

## Component Architecture (Building Premium)
- **The "Double-Bezel" (Doppelrand)**: Premium components should mimic machined hardware. They consist of:
  1. **Outer Shell**: Wrapper div with subtle background, hairline outer border, specific padding, and large outer radius.
  2. **Inner Core**: The actual content container with a distinct background, inner highlight (`shadow-inset`), and a mathematically smaller radius to create concentric curves.
- **Button-in-Button Trailing Icons**: CTAs with trailing icons (like an arrow) should nest the icon inside its own distinct circular wrapper placed completely flush with the main button's inner padding.

## Reusability & State Management
- **Interactive UI States**: Components must be designed for full lifecycles. 
  - **Loading**: Use skeletal loaders matching the final layout shape. No generic circular spinners.
  - **Empty States**: Beautifully composed, indicating how to populate data.
  - **Error States**: Clear and contextual (inline for forms).
- **Prop Drilling Avoidance**: Use local `useState` for isolated UI. Use global state only for deep prop-drilling avoidance. **Never** use `useState` to track continuous values driven by user input (mouse position, scroll progress).

## Consistency
- **Shape Consistency Lock**: Pick ONE corner-radius scale for the page and stick to it (e.g., all-sharp 0px, all-soft 12-16px, or all-pill). Mixed systems (round buttons inside square layouts) break design integrity.
- **Color Consistency Lock**: Once an accent color is chosen for a page, use it everywhere. Do not introduce new accent colors dynamically.
- **Icon Libraries**: One icon family per project (e.g., Phosphor, HugeIcons, Radix). Standardize the `strokeWidth` globally (e.g., `1.5` or `2.0`).

## Scalability & Performance
- **Framework & RSC Safety**: In Next.js, wrap providers in a `"use client"` component. Any component using Framer Motion, scroll listeners, or pointer physics MUST be an isolated leaf with `'use client'` at the top. Server Components render static layouts only.
- **GPU-Safe Animation**: Animate ONLY `transform` and `opacity`. Never animate `top`, `left`, `width`, or `height`. 
- **DOM Purity**: Avoid `window.addEventListener("scroll")`. Rely on `useScroll()`, `IntersectionObserver`, or CSS scroll-driven animations.
