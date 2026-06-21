# SEO Rules

Every generated site must satisfy these SEO requirements before delivery.
These are production requirements, not recommendations.

---

## Metadata

- Every page must have a unique, descriptive `<title>` tag. Maximum 60 characters.
- Every page must have a `<meta name="description">` tag. Maximum 160 characters.
- Open Graph tags are mandatory: `og:title`, `og:description`, `og:image`, `og:url`.
- Canonical URL must be set on every page.
- No duplicate metadata across pages.

## Structured Data

- Every site must include `Organization` schema markup.
- Local businesses must include `LocalBusiness` schema with address, phone, and hours.
- Use the `JsonLd` component from the boilerplate. Never inline script tags manually.
- Structured data must be validated before delivery.

## Technical

- `sitemap.xml` is mandatory. Must be generated dynamically or statically at build time.
- `robots.txt` is mandatory. Must allow crawling of all public pages.
- Every image must have a meaningful `alt` attribute. Empty `alt=""` is only permitted for decorative images.
- Page load time on Vercel must be under 3 seconds on a simulated 4G connection.
- Core Web Vitals (LCP, CLS, FID) must be green on Lighthouse before delivery.

## Semantic HTML

- One `<h1>` per page. The h1 contains the primary keyword.
- Heading hierarchy must be sequential: h1 → h2 → h3. No skipping levels.
- Navigation must use `<nav>` with an `aria-label`.
- Main content must be wrapped in `<main>`.
- Use `<article>` for self-contained content blocks.
- Use `<section>` for thematic groupings with a visible heading.

## Content

- Primary keyword must appear in: title tag, h1, first paragraph, at least one subheading.
- Keyword density must feel natural. Never force keywords.
- Internal linking is mandatory: every page must link to at least two other pages.
- All external links to non-authoritative sources must include `rel="noopener noreferrer"`.
