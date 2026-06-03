# UI Patterns

## Hero Sections
- **Structure**: Short headline (≤ 8 words) + short sub-paragraph (≤ 20 words, max 4 lines) + primary CTA + one visual asset. Max 4 text elements overall.
- **Anti-Center Bias**: Avoid centered Hero text unless it's a manifesto. Use Asymmetric Split (Left content / Right asset).
- **Height Lock**: Never use `h-screen`. Always use `min-h-[100dvh]` to prevent iOS Safari viewport jumps. Top padding capped at `pt-24`.

## Navigation (Navbars)
- **Structure**: Floating glass pill (`mt-6`, `mx-auto`, `rounded-full`) or clean minimal line. Max height 80px.
- **Desktop Rule**: MUST render on a single line. Condense or move to a hamburger menu at `lg` breakpoint if needed. 
- **Hamburger Morph**: Fluidly rotate lines to form an 'X', don't just snap states.

## Footers
- **Structure**: Clean, semantic grouping. Separate internal links, legal, and social proof.
- **Visuals**: Often darker or structurally separated from the main content. Ensure CTA button contrast rules apply even at the bottom of the page.

## CTAs (Call to Action)
- **Nested Architecture (Button-in-Button)**: If a button has an arrow (`↗`), it sits inside its own distinct circular wrapper flush with the right padding.
- **Contrast Check**: Text must pass WCAG AA (4.5:1 ratio) against the background. 
- **Single Intent**: Never use multiple labels for the same action (e.g., don't use "Get in touch" and "Let's talk" on the same page).
- **Wrap Ban**: Button text MUST fit on one line at desktop.

## Bento Box Feature Grids
- **Cell Count Math**: Number of cells MUST exactly match the content items (e.g., 5 items = 2+3 or 3+2 grid). No blank placeholder cells.
- **Diversity**: Mix content types. Include a real image, brand gradient, or tinted background. Do not use only white-on-white text cards.
- **Shape**: Asymmetrical CSS Grid. Crisp borders (`1px solid #EAEAEA` or `white/10`).

## Quotes & Testimonials
- **Brevity**: Max 3 lines of body text. Trim if longer.
- **Attribution**: Name + Role + Company. Never just a first name.
- **No Em-Dashes**: Em-dashes (`—`) are completely banned for attribution or aesthetic pauses. Use real typographic quotes or nothing.

## FAQ & Accordions
- **Minimalist Structure**: Strip all outer bounding boxes. Separate items ONLY with a bottom border (`border-bottom: 1px solid #EAEAEA`).
- **Icons**: Clean `+` and `-` for toggle states.

## Forms & Inputs
- **Structure**: Label ABOVE input. Error text BELOW. Standard `gap-2` for groupings. 
- **Rule**: NEVER use placeholder-as-label. 
- **Contrast**: Input borders, focus rings, and placeholders must pass contrast checks against the section background.
