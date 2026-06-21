# EscalaSites

Premium website production platform powered by AI.

## Mission

Generate custom, high-end websites at scale through reusable systems, structured knowledge, and AI-assisted workflows.

Every generated site must feel custom-designed. Never template-based. Never AI-generated.

---

## Platform Domains

```
knowledge/      What the platform knows (design, sectors, SEO, conversion, copywriting)
engine/         How the platform generates (context, prompts, workflows, playbooks, QA)
templates/      Reusable structures (site boilerplate, document templates, specs)
rules/          Mandatory constraints for architecture, design, development, SEO, content
schemas/        JSON schemas for every document type in the generation pipeline
examples/       Reference projects by sector (restaurant, clinic, law-firm, saas, ecommerce, agency)
clients/        Autonomous client projects
automation/     Operational scripts (project, setup, deploy, docs)
platform/       Platform meta-documentation (decisions, changelog, roadmap)
research/       Pre-client intelligence (leads, market)
```

---

## Core Stack

- **Framework:** Next.js App Router + TypeScript
- **Styling:** Tailwind CSS + shadcn/ui
- **Animation:** Framer Motion
- **Research:** Firecrawl MCP + Context7 MCP
- **Deployment:** Vercel

---

## Generation Flow

```
Lead → Research → Knowledge → Strategy → Project → Boilerplate → Code → QA → Deploy → Delivery
```

See `engine/workflows/` for detailed orchestration.

---

## Rules

Every AI must load the relevant rules before generating output:

- `rules/architecture.md` — Platform structure constraints
- `rules/design.md` — Visual and UX constraints
- `rules/development.md` — Code generation constraints
- `rules/seo.md` — SEO requirements
- `rules/content.md` — Copywriting constraints

---

## Starting a New Client Project

```
automation/project/new-client.ps1 -ClientSlug "client-name"
```

This creates the complete folder structure under `clients/client-name/`.

---

## Architecture Principles

1. Every folder represents a domain. No folder exists for convenience.
2. Single responsibility per domain.
3. Client projects are fully autonomous.
4. Knowledge is centralized in `knowledge/`.
5. No AI-specific folders (claude/, gpt/, gemini/) anywhere.
6. `knowledge/design/principles/` is read-only.