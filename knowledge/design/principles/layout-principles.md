# Layout Principles

## Grid Philosophy
- **CSS Grid over Flex-Math**: NEVER use complex flexbox percentage math (e.g., `w-[calc(33%-1rem)]`). ALWAYS use native CSS Grid (`grid-cols-1 md:grid-cols-3 gap-6`).
- **Asymmetric Composition**: Break the digital grid. Mix `col-span-8 row-span-2` next to stacked `col-span-4` elements. Avoid 3 symmetrical Bootstrap-style columns.

## Alignment Rules
- **Anti-Center Bias**: Avoid horizontally centering large blocks of text or hero elements unless making a deliberate editorial/manifesto statement. Align text to the left; align visuals to the grid edges.
- **Visual Weight Balancing**: Counterbalance heavy typography on the left with interactive, layered, or scrolling visual assets on the right.

## Content Width Rules
- **Containment**: Standardize maximum page width using `max-w-[1400px] mx-auto` or `max-w-7xl`.
- **Typographic Line Length**: Constrain reading text (paragraphs, subheads) to a maximum of `65ch` (characters) to maintain readability. `max-w-4xl` or `max-w-5xl` for main text blocks.

## Section Structure
- **Section-Layout-Repetition Ban**: A layout family (e.g., 3-column-cards, split-text-image) can appear at most ONCE per page. An 8-section page must use at least 4 different layout families.
- **Zigzag Alternation Cap**: Limit "left-image + right-text" alternating patterns. Max 2 consecutive zigzag sections. The 3rd must break the pattern (e.g., full-width, bento grid, marquee).
- **Eyebrow Restraint**: Maximum 1 small uppercase "eyebrow" label per 3 sections. Do not prefix every section heading with a tracking-wide label. 

## Composition Techniques
- **Z-Axis Cascade**: Stack elements like physical cards with subtle overlapping negative margins and slight rotations (`-2deg` or `3deg`).
- **The Editorial Split**: Massive typography on one half (`w-1/2`), staggered interactive cards or horizontal scroll pills on the other half.
- **Double-Bezel (Doppelrand)**: Create physical depth without heavy shadows. Wrap elements in an outer shell (hairline border, specific padding, large radius) and an inner core (distinct background, inner highlight shadow, mathematically smaller radius for concentric curves).
- **Mobile Collapse Protocol**: Asymmetric layouts on desktop MUST aggressively fall back to a single column (`w-full`, `px-4`, `py-8`, remove rotations) on mobile `< 768px`.
