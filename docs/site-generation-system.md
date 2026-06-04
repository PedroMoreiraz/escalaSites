# EscalaSites: Site Generation System

*Operational Manual for High-Velocity, Premium Website Generation*

This document defines the standardized, 11-step pipeline for generating $150k-tier web experiences at scale. The system is optimized for speed, token efficiency, and absolute consistency.

---

## 1. Client Intake
**Goal**: Standardize inputs to minimize back-and-forth and token overhead.
- **Process**: Client completes a strict intake schema (JSON/form).
- **Required Data**: Core value proposition, target audience, 2-3 visual references, existing brand assets (logo, colors), and primary conversion goal.
- **Output**: `client-brief.md`.

## 2. Research Phase
**Goal**: Establish context and define the conversion narrative.
- **Process**: LLM reads `client-brief.md` to identify the primary audience and tone.
- **Action**: Formulate a single-sentence "Design Read" (e.g., *Reading this as: B2B SaaS landing for technical buyers, with a minimalist language.*).

## 3. Firecrawl Analysis
**Goal**: Automate extraction of existing client assets.
- **Process**: Trigger the Firecrawl MCP to scrape the client's existing website or provided raw documentation.
- **Action**: Extract raw copy, brand vectors, and existing IA (Information Architecture). Discard legacy design choices; retain only semantic content.

## 4. Competitor Analysis
**Goal**: Ensure visual and structural differentiation.
- **Process**: Use Firecrawl to scan 1-2 competitor URLs provided in the intake.
- **Action**: Map competitor structural layouts and value props. Ensure the EscalaSites design direction explicitly avoids mirroring their aesthetic.

## 5. Prompt-Pack Injection
**Goal**: Enforce premium design rules and eliminate AI slop.
- **Process**: Inject `skills/extracted/prompt-pack.md` into the active generation context.
- **Action**: This locks the agent into strict constraints (no default AI fonts, no em-dashes, enforced macro-whitespace, hardware materiality). This is the core quality-control mechanism.

## 6. Design Direction
**Goal**: Set the deterministic parameters for the build.
- **Process**: Based on the Design Read, explicitly set the 3 Dials:
  - `Variance (1-10)`
  - `Motion (1-10)`
  - `Density (1-10)`
- **Action**: Select ONE structural Vibe Archetype (e.g., Ethereal Glass, Editorial Luxury, Soft Structuralism, Utilitarian Minimalism) and lock the color/shape systems.

## 7. Template Selection
**Goal**: Bypass boilerplate setup.
- **Process**: Select the appropriate base architecture from the internal `templates/` directory (e.g., Next.js RSC + Tailwind v4 + Framer Motion).
- **Action**: Initialize the repository. Do not reinvent the build system or routing structure.

## 8. Section Selection
**Goal**: Architect the page layout before writing UI code.
- **Process**: Map out the vertical rhythm. Sequence the components: Hero → Social Proof → Bento Features → Detail Zigzag → Testimonials → Final CTA → Footer.
- **Constraints**: Apply the **Section-Layout-Repetition Ban** (use ≥ 4 distinct layout families per page). Apply the **Zigzag Cap** (max 2 alternating split-layouts in a row).
- **Output**: `page-architecture.md`.

## 9. Development Workflow
**Goal**: High-speed, rule-abiding code generation.
- **Process**: Generate sections sequentially based on `page-architecture.md`.
- **Standards Enforcement**: 
  - Apply "Double-Bezel" container structures.
  - Apply typography rules (massive `tracking-tighter` headers, off-black body).
  - Apply interaction physics (`scale-[0.98]` hover states).
  - Enforce explicit mobile collapse (`w-full px-4` below 768px).

## 10. QA Workflow
**Goal**: Mechanical verification of premium rules.
- **Process**: Execute a strict Pre-Flight Checklist against the generated code.
- **Checks**:
  - Mechanical count of eyebrow labels (max 1 per 3 sections).
  - Verify WCAG AA 4.5:1 button/form contrast.
  - Scan for and delete any generated em-dashes (`—`).
  - Scan for AI copywriting clichés ("Elevate", "Seamless") and rewrite them functionally.
  - Verify Hero top padding does not exceed `pt-24`.

## 11. Delivery Workflow
**Goal**: Seamless client handover.
- **Process**: Compile production assets (`npm run build`).
- **Action**: Deploy to Vercel/hosting infrastructure. Provide the client with the live URL, the source code repository, and a generated Walkthrough Document summarizing the design decisions and conversion strategies.
