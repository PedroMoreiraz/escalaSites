# EscalaSites — Platform Roadmap

Last updated: 2026-06-20

---

## Status: Architecture Stable (V1.1)

The platform architecture is now considered definitive. No further structural reorganizations are planned.

Future work is content growth within the existing domain structure.

---

## Immediate Next Steps

### knowledge/
- [ ] Populate `knowledge/sectors/` with sector-specific market knowledge files
- [ ] Populate `knowledge/design/systems/` with design system documentation
- [ ] Populate `knowledge/design/patterns/` with reusable UI pattern documentation
- [ ] Populate `knowledge/design/references/` with curated visual references
- [ ] Populate `knowledge/seo/` with SEO strategy knowledge
- [ ] Populate `knowledge/conversion/` with conversion optimization principles
- [ ] Populate `knowledge/copywriting/` with copywriting frameworks

### engine/
- [ ] Expand playbooks: add `landing-page.md` to clinic, ecommerce, agency folders
- [ ] Add `engine/workflows/` content to support the new prompt structure
- [ ] Create `engine/qa/` QA automation script

### schemas/
- [ ] Add JSON Schema validation tooling to automate output validation
- [ ] Expand hero schema with variant types (split, centered, full-bleed)

### automation/
- [ ] Update `automation/project/new-client.ps1` to use `site/` folder and new docs structure
- [ ] Create `automation/deploy/deploy-vercel.ps1`
- [ ] Create `automation/project/promote-example.ps1` (promote a finished project to examples/)

### platform/
- [ ] Write `platform/decisions/001-domain-architecture.md` (ADR for V1.0)
- [ ] Write `platform/decisions/002-site-over-project.md` (ADR for V1.1 rename)

---

## Future Integrations

- Firecrawl automation for lead research (auto-populate `research/leads/[slug]/firecrawl/`)
- Context7 integration for up-to-date dependency documentation
- Schema validation CLI to verify AI outputs before continuing pipeline
- Multi-page support (service pages, about, blog)
- Deployment pipeline automation (Vercel API)

---

## What Will Never Change

- The 10 root domains. They are final.
- `knowledge/design/principles/` remains read-only.
- Client project autonomy (each client folder must work standalone).
- No AI-specific folders anywhere in the platform.
