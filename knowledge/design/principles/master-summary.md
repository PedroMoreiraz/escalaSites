# Master Summary

*Optimized for prompt injection and AI consumption. Load this into context for high-end web design tasks.*

## Top 25 Mandatory Rules
1. **No Slop Fonts**: Ban Inter, Roboto, Open Sans. Use premium Sans (Geist, Outfit, Cabinet Grotesk).
2. **Serif Discipline**: Never default to Serifs unless the brand is luxury/editorial. Ban Fraunces/Instrument_Serif.
3. **Macro-Whitespace**: Double all padding. Use `py-24` to `py-40` between sections. Let it breathe.
4. **Theme Lock**: Lock the entire page to Light, Dark, or Auto. No flipping mid-page.
5. **Shape Lock**: Pick ONE corner-radius (sharp, soft, or pill) and apply to all components.
6. **Color Lock**: Max 1 accent color. Saturation < 80%. Never use AI-Purple glows.
7. **Premium Palette Ban**: Do not use the beige + brass + espresso palette for consumer goods. Rotate to Cold Luxury, Black & Tan, or Monochrome.
8. **Double-Bezel**: Cards need outer shells (hairline border, padding) and inner cores (distinct bg, inner highlight shadow).
9. **No Em-Dashes**: The `—` character is universally banned as a design flourish.
10. **Eyebrow Cap**: Max 1 uppercase micro-label eyebrow per 3 sections.
11. **Hero Cap**: Top padding max `pt-24`. `min-h-[100dvh]` only (no `h-screen`). 
12. **Hero Stack**: Headline ≤ 2 lines. Subtext ≤ 20 words. Max 4 text elements total.
13. **Nav Height**: Navigation must be 1 line on desktop. Max height 80px.
14. **CTA Wrap Ban**: Button text MUST NOT wrap on desktop. 1-3 words max.
15. **Single Intent CTA**: "Get started" and "Try free" = duplicate intent. Pick ONE label.
16. **A11y Contrast**: Buttons, forms, and placeholders must pass WCAG AA (4.5:1).
17. **Logo Walls**: Use real SVGs, not text. Place under the hero. Logos only—no category labels below them.
18. **Bento Grid Math**: Grid cells MUST equal the number of items. No empty placeholder cells.
19. **Bento Diversity**: Include images, brand gradients, or tinted backgrounds. Not just white-on-white text cards.
20. **Zigzag Cap**: Max 2 alternating left-right split sections in a row.
21. **Layout Repetition Ban**: Use at least 4 different layout families across an 8-section page.
22. **Motion Must Work**: If `MOTION > 4`, the page must actually animate (entry, hover, physics). Use `transform`/`opacity` only.
23. **Spring Physics**: Ban `linear` and `ease-in-out`. Use spring physics or cubic-beziers.
24. **No Window Scroll**: Ban `window.addEventListener('scroll')`. Use `IntersectionObserver` or CSS driven.
25. **Copy Self-Audit**: Rewrite AI clichés ("Elevate", "Seamless", "Delve"). Use plain, functional language. No fake-precise numbers (`48.2k`).

## Top 10 Design Philosophy Principles
1. **Read the Room**: Infer the Vibe (Ethereal Glass, Editorial, Utilitarian) from the brief before setting defaults.
2. **Variance, Motion, Density**: Dial these 3 metrics (1-10) before generating code.
3. **Anti-Center Bias**: Shift towards asymmetric grids and Left-Right splits. Center alignment is only for manifestos.
4. **CSS Grid over Flex Math**: Ban `w-[calc()]` flex layouts in favor of native CSS Grid.
5. **Systematic Honesty**: Use official design systems (Fluent, Carbon) for enterprise/dashboards; bespoke Tailwind for marketing.
6. **Hardware Materiality**: Interfaces should look like physical objects, machined and layered, not flat floating colored boxes.
7. **Color is Scarce**: Rely on extreme typographic contrast for hierarchy, not colored backgrounds.
8. **Real Visuals Over Text**: Use real images or placeholder URLs (`picsum.photos`). Ban div-based fake screenshots.
9. **Desktop vs Mobile Reality**: Asymmetric desktop layouts must explicitly collapse to single columns (`w-full px-4`) below 768px.
10. **Restraint is Premium**: Omitting elements (shadows, borders, colors) is more premium than adding them. 

## Top Mistakes to Avoid
- **The "AI Tell" Typography**: Using `Inter` with generic `shadow-md` and a glowing purple gradient button.
- **The "Stuffed Hero"**: Placing a tagline, pricing strip, feature bullets, and logo wall inside the main Hero div.
- **The "Boring Spec Sheet"**: Creating a 10-row data table with `border-b` on every row instead of using grouped chunks or cards.
- **The "Form Label" Error**: Using `placeholder` text as the only input label.
- **The "Mixed Metaphor"**: Mixing rounded buttons inside square cards, or applying a dark mode section inside a light mode layout.
