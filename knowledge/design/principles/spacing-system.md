# Spacing System

## Macro Whitespace (Density Principles)
- **Let it Breathe**: Double the standard web padding. Use extreme vertical spacing between major sections (e.g., `py-24` to `py-40`). 
- **Density Dial**: Sane content density. Do not pack too much information into a small space unless the user specifically requests a "dashboard" or "cockpit" density (Density: 10). Landing pages and portfolios (Density: 3-5) require significant empty space.

## Viewport Stability
- **No Absolute Heights**: NEVER use `h-screen` for full-height Hero or interactive sections. ALWAYS use `min-h-[100dvh]` to prevent violent layout jumps when the iOS Safari address bar expands/collapses.

## Hero Spacing
- **Top Padding Cap**: Maximum `pt-24` (≈6rem) at desktop for the Hero section.
- **Prevent Floating**: If padding exceeds this, the hero content floats halfway down the viewport, reading as a layout bug rather than intentional space. If more breathing room is needed, scale up the typography or asset size, do NOT add more top padding.

## Component & Inner Spacing
- **Bento & Cards**: Internal padding must be generous (`24px` to `40px`).
- **Grouping over Dividers**: Use spacing and negative space to group elements. Only use physical borders (`border-t`, `divide-y`) or cards (shadows) when elevation is strictly necessary for hierarchy.
- **Form Inputs**: Standard `gap-2` for input blocks (Label -> Input -> Error).

## Vertical Rhythm
- **Explicit Mobile Rules**: Mobile collapse must be explicitly declared per section (e.g., `< 768px` fallback with `px-4`, `py-8`). Do not rely on implicit framework defaults.
- **Card Overlaps**: When using negative margins for overlapping elements (Z-Axis Cascade), remove these negative margins on mobile to prevent touch-target conflicts.
