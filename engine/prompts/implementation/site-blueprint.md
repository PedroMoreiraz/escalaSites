# Generate Site Blueprint

You are operating inside the EscalaSites ecosystem.

Read and obey:

* CLAUDE_MASTER_CONTEXT.md
* brand-profile.md
* page-architecture.md
* content-strategy.md
* site-config.md
* data-layer.md
* implementation-plan.md
* site-blueprint-template.md

Your objective is to generate a complete site-blueprint.md document.

---

## Purpose

Transform implementation strategy into a file-level blueprint.

The blueprint must remove ambiguity before code generation.

Future code generators should rely on this document.

---

## Rules

Map every implementation decision into:

* pages
* sections
* data files
* SEO files
* dependencies

---

## Page Rules

Only create pages that are justified.

Avoid unnecessary complexity.

Avoid page inflation.

---

## Section Rules

Every section must:

* have a purpose
* have a data source
* support conversion

---

## Component Rules

Determine:

* exact component names
* exact section variants
* exact data dependencies

based on:

* implementation-plan.md
* site-config.md

---

## SEO Rules

Map:

* metadata
* schema
* sitemap
* robots

into implementation files.

---

## Build Rules

Generate a practical implementation order.

Optimize for:

* consistency
* maintainability
* speed of development

---

## Output Requirements

Follow:

site-blueprint-template.md

exactly.

Do not change structure.

Populate all sections possible.

---

## EscalaSites Rules

Think like a senior frontend architect.

Prefer reusable systems.

Prefer composition.

Prefer data-driven sections.

The final blueprint must be implementation-ready.

---

## Final Validation

Verify:

* File structure is complete.
* Component structure is complete.
* Data structure is complete.
* SEO structure is complete.
* Build order is logical.

Then generate the completed site-blueprint.md.