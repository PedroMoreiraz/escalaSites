# Typography System

## Hierarchy Rules
- **Extreme Contrast**: Establish hierarchy through dramatic size and weight differences.
- **Headlines**: Default to massive scaling (`text-4xl md:text-6xl` or up to `text-8xl`), `tracking-tighter`, `leading-none`.
- **Body**: Default to `text-base text-gray-600 leading-relaxed max-w-[65ch]`. Avoid absolute black (`#000000`); use off-black/charcoal (`#111111`) with generous line-height (`1.6`).

## Font Selection Philosophy
- **Sans-Serif First**: Default to geometric, neo-grotesk, or character-rich sans fonts. Recommended: `Geist`, `Outfit`, `Cabinet Grotesk`, `Satoshi`, `SF Pro Display`, `Clash Display`.
- **Banned Defaults**: Do NOT use Inter, Roboto, Arial, or Open Sans as the primary display font unless specifically building a generic utilitarian UI or requested.
- **Serif Discipline**: Serif fonts are strongly DISCOURAGED as defaults. Only use a Serif (e.g., `Lyon Text`, `Newsreader`, `PP Editorial New`) if the brand explicitly demands it (Luxury, Heritage, Editorial). Banned: `Fraunces` and `Instrument_Serif` (overused AI defaults).

## Typography Mechanics
- **Emphasis Rule**: When emphasizing a specific word in a headline, use *italic* or **bold** of the SAME font family. NEVER inject a random serif word into a sans headline to add visual interest.
- **Italic Descender Clearance**: When italic display type contains descenders (`y, g, j, p, q`), a `leading-none` or `leading-[1]` will clip the letters. Enforce a minimum `leading-[1.1]` and add `pb-1` or `mb-1` reserve padding on the wrapper.
- **Eyebrow Restraint**: Small uppercase tracked-out labels (e.g., `uppercase tracking-[0.18em]`) should be used sparingly. Max 1 eyebrow per 3 sections.
- **Em-Dash Ban**: The em-dash character (`—`) is completely banned for use as a design flourish, kinetic bullet, or attribution separator.

## Scaling
- **Hero Alignment**: Plan font size and image size together. A 4-line hero headline means the font size is an error.
- **Tags & Badges**: Small, uppercase, wide-tracking (`text-xs uppercase tracking-[0.05em]`).
