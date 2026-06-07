# EscalaSites Master Context

## 1. Vision

EscalaSites is a premium website generation engine.

The goal is not to create templates.

The goal is to create unique, high-end websites with a repeatable and scalable production system.

Every generated website must feel custom-made while maintaining operational efficiency.

The system prioritizes:

- Premium quality
- Scalability
- Speed
- Consistency
- Maintainability

A generated website should never feel AI-generated.

---

## 2. Business Model

EscalaSites operates as a website production system.

Clients enter through consulting, referrals, partnerships, outbound sales, or inbound channels.

Production is executed internally using a standardized generation workflow.

The system must support generating dozens of websites without sacrificing quality.

The objective is to increase production volume while maintaining premium standards.

---

## 3. Core Objective

Generate production-ready websites that:

- Look custom designed
- Follow premium design principles
- Maintain strong SEO foundations
- Are mobile-first
- Are accessible
- Are scalable
- Are easy to maintain

The system must reduce repetitive work through reusable architecture while preserving uniqueness in the final result.

---

## 4. Tech Stack

### Frontend

- Next.js App Router
- TypeScript
- Tailwind CSS
- shadcn/ui
- Framer Motion

### Research

- Firecrawl
- Context7

### Design Knowledge

- Taste Skill

### Deployment

- Vercel
- Client hosting providers

### Development Philosophy

- Mobile-first
- RSC by default
- Data-driven architecture
- Configuration-driven architecture
- Reusable systems over one-off solutions

---

## 5. Architecture Overview

EscalaSites follows a layered architecture.

Each layer has a single responsibility.

### Foundation Layer

Provides the project foundation.

Responsibilities:

- Next.js configuration
- TypeScript configuration
- Tailwind configuration
- Application structure
- Build system

---

### Design Token Layer

Provides visual consistency.

Responsibilities:

- spacing
- typography
- radius
- shadows
- breakpoints
- containers

Rules:

- Never hardcode spacing values.
- Never hardcode typography scales.
- Always consume centralized tokens.

---

### Layout Layer

Provides page structure primitives.

Responsibilities:

- Container
- Section
- Grid
- Stack
- ContentWrapper

Rules:

- Layout primitives must be reused.
- Desktop layouts may vary.
- Mobile layouts must remain predictable.

---

### Motion Layer

Provides reusable animation primitives.

Responsibilities:

- Reveal
- Stagger
- FadeIn
- HoverScale

Rules:

- Motion must be centralized.
- Motion must respect reduced-motion preferences.
- Motion must never be reinvented per component.

---

### SEO Layer

Provides search visibility infrastructure.

Responsibilities:

- Metadata
- Schema
- Sitemap
- Robots

Rules:

- SEO is mandatory.
- Every project must be production ready.

---

### Data Layer

Provides content separation.

Responsibilities:

- Hero data
- Services data
- CTA data
- FAQ data
- Testimonials data
- Footer data

Rules:

- Content lives in data files.
- UI consumes data.
- Business content must not be hardcoded inside components.

---

### Section Layer

Provides reusable page sections.

Responsibilities:

- Hero
- Services
- CTA
- FAQ
- Testimonials
- Footer

Rules:

- Sections consume typed data.
- Sections consume layout primitives.
- Sections consume motion primitives.

---

## 6. Boilerplate Architecture

The official EscalaSites boilerplate is:

factory/boilerplates/next-premium

The boilerplate exists to reduce repetitive implementation work while preserving design flexibility.

Core principles:

- Mobile-first
- RSC by default
- Data-driven
- SEO-ready
- Performance-first
- Reusable architecture

### Server Components First

Default behavior:

- Server Components

Client Components only when necessary:

- Framer Motion
- Browser APIs
- Click interactions
- Hover interactions
- Local state

---

### Data Driven Generation

The generation system should prefer creating data objects instead of generating large DOM structures.

Preferred:

heroData.ts

servicesData.ts

faqData.ts

ctaData.ts

Then:

Hero component consumes heroData.

Services component consumes servicesData.

This minimizes token usage and increases consistency.

---

### Configuration Driven System

The primary source of truth is:

config/site.ts

The configuration controls:

- Brand information
- Navigation
- SEO defaults
- Archetype
- Variance dial
- Motion dial
- Density dial

The generation workflow should modify configuration before modifying UI.

---

### Responsive Strategy

Desktop:

- Creative
- Asymmetrical
- Layout experimentation allowed

Mobile:

- Predictable
- Single-column first
- Readability prioritized

Every desktop layout must have an intentional mobile collapse strategy.

---

### Design Consistency Strategy

The boilerplate enforces consistency through:

- Design tokens
- Layout primitives
- Motion primitives
- Section contracts
- Centralized configuration

Consistency should emerge from the system, not from duplicated code.

---

## 7. Design Philosophy

Premium design is created through restraint.

The goal is not to add more elements.

The goal is to create stronger hierarchy through:

- typography
- spacing
- composition
- rhythm

Premium interfaces should feel intentional.

Every design decision must have a purpose.

Avoid visual noise.

Avoid decoration without function.

---

### Core Principle

Less, but better.

Remove before adding.

Hierarchy should come from structure, not effects.

---

### Interface Goals

Every generated website should feel:

- Custom made
- Premium
- Modern
- Intentional
- Trustworthy

Generated websites must never feel:

- Template based
- AI generated
- Overdesigned
- Trend chasing

---

### Design Dials

Every project starts by defining:

Variance (1-10)

Controls:

- layout diversity
- composition freedom
- visual experimentation

Motion (1-10)

Controls:

- animation intensity
- interaction richness
- transition frequency

Density (1-10)

Controls:

- spacing
- content compression
- visual breathing room

These three dials influence every design decision.

---

## 8. Taste Skill Rules

The Taste Skill system acts as the design governor of EscalaSites.

Its purpose is to prevent generic AI-generated interfaces.

---

### Mandatory Rules

- Mobile-first always
- WCAG AA minimum contrast
- CSS Grid preferred over flex-math layouts
- Real hierarchy over decorative hierarchy
- Macro whitespace required
- Shape consistency required
- Theme consistency required
- Motion consistency required
- Typography consistency required
- Content readability required

---

### Layout Rules

- Avoid excessive center alignment
- Avoid repeating identical section structures
- Prefer layout variation across the page
- Desktop layouts may be expressive
- Mobile layouts must remain predictable
- Every layout must have a collapse strategy

---

### Typography Rules

Typography creates hierarchy.

Do not depend on:

- gradients
- shadows
- colors

to create importance.

Prefer:

- size
- weight
- spacing
- rhythm

Maximum readability is preferred over visual novelty.

---

### Spacing Rules

Whitespace is a design tool.

Whitespace creates:

- hierarchy
- focus
- breathing room

Never compress layouts unnecessarily.

Section spacing should follow centralized tokens.

---

### Motion Rules

Motion should feel physical.

Motion should never feel decorative.

Prefer:

- spring motion
- stagger reveals
- subtle hover feedback

Avoid:

- random motion
- exaggerated motion
- motion without purpose

---

### Conversion Rules

Trust before persuasion.

Conversion should be achieved through:

- clarity
- positioning
- credibility
- proof

Avoid aggressive marketing patterns.

Avoid fake urgency.

Avoid generic marketing copy.

---

### Content Rules

Content must reflect the client.

Do not generate generic SaaS messaging.

Research should influence:

- headlines
- positioning
- structure
- calls to action

Every project should feel specific to the client.

---

### Visual Authenticity Rules

Prefer:

- real photography
- real team imagery
- real products
- real environments

Avoid:

- fake dashboards
- fake metrics
- fake social proof
- generic stock imagery

---

### System Rule

A generated website should not reveal the system that created it.

The output must feel custom designed.

---

## 9. Layout System

The Layout System provides the structural primitives used across all projects.

The objective is to separate layout responsibilities from business content.

Layout primitives should be reused instead of recreated.

---

### Container

Purpose:

- Control width
- Control horizontal padding
- Maintain consistency

Rules:

- Always wrap major content blocks
- Use centralized container sizes
- Never hardcode page widths

---

### Section

Purpose:

- Control vertical rhythm
- Apply spacing tokens

Rules:

- Every major page block should use Section
- Never hardcode section spacing
- Consume spacing variants

---

### Stack

Purpose:

- Vertical composition
- Consistent spacing between elements

Rules:

- Prefer Stack over manual gap management
- Use spacing tokens

---

### Grid

Purpose:

- Multi-column layouts
- Responsive structure

Rules:

- CSS Grid preferred
- Mobile collapse required
- Desktop experimentation allowed

---

### ContentWrapper

Purpose:

- Readability control
- Text width constraints

Rules:

- Long-form content must use readability limits
- Respect content width constraints
- Avoid excessively wide text blocks

---

### Layout Principles

- Mobile-first always
- Desktop may be expressive
- Mobile must remain predictable
- Readability is mandatory
- Whitespace is intentional
- Structure creates hierarchy

---

## 10. Motion System

The Motion System provides reusable animation primitives.

Motion must be centralized.

Components should consume motion primitives rather than defining custom animation logic.

---

### Motion Philosophy

Motion exists to:

- Guide attention
- Improve perception
- Increase quality

Motion does not exist for decoration.

---

### Motion Components

#### Reveal

Purpose:

- Viewport entry animations

Usage:

- Headlines
- Content blocks
- Cards
- Sections

---

#### Stagger

Purpose:

- Sequential reveals

Usage:

- Lists
- Features
- Service cards
- Testimonials

---

#### FadeIn

Purpose:

- Simple visibility transitions

Usage:

- Supporting content
- Secondary elements

---

#### HoverScale

Purpose:

- Haptic interaction feedback

Usage:

- Buttons
- Interactive cards
- Clickable elements

---

### Motion Rules

- Respect prefers-reduced-motion
- Motion must be subtle
- Motion must be purposeful
- Avoid animation overload
- Avoid multiple competing animations

---

### Motion Dials

Motion intensity is controlled through:

Motion (1-10)

Low values:

- Minimal motion

High values:

- Rich interactions

Motion decisions must originate from configuration.

---

## 11. SEO System

SEO is not optional.

Every generated project must be production ready.

---

### Metadata

Responsibilities:

- Page title
- Description
- Open Graph
- Twitter metadata
- Canonical URLs

Rules:

- Every page must define metadata
- Metadata should be configurable

---

### Structured Data

Responsibilities:

- Organization schema
- LocalBusiness schema
- ProfessionalService schema

Rules:

- Schema should reflect the client
- Use JSON-LD

---

### Sitemap

Responsibilities:

- Search engine discovery

Rules:

- Generated automatically
- Reflect active navigation structure

---

### Robots

Responsibilities:

- Crawling instructions

Rules:

- Controlled centrally
- Environment aware

---

### SEO Principles

SEO starts before code.

Research influences:

- Site structure
- Headlines
- Services
- Internal linking

SEO should be integrated into the generation process from the beginning.

---

### SEO Requirements

Every project should include:

- Metadata
- Open Graph
- Sitemap
- Robots
- Structured Data
- Semantic HTML
- Accessible content structure

---

## 12. Data Architecture

The Data Layer separates content from presentation.

The objective is to ensure that business information is stored independently from UI implementation.

Components render data.

Components do not own content.

---

### Core Principle

Data drives the interface.

The generation workflow should create structured data before creating UI.

Preferred workflow:

Research
↓
Brand Profile
↓
Content Strategy
↓
Data Objects
↓
UI Rendering

---

### Current Data Modules

Hero

- heroData.ts

Services

- servicesData.ts

CTA

- ctaData.ts

FAQ

- faqData.ts

Testimonials

- testimonialsData.ts

Footer

- footerData.ts

---

### Data Rules

Business content must not be hardcoded inside components.

Bad:

Component contains:
- company name
- service names
- testimonials
- contact information

Good:

Component consumes:

- props
- typed objects
- centralized data

---

### Benefits

- lower token usage
- reusable sections
- easier content updates
- easier A/B testing
- scalable generation workflow

---

### Generation Strategy

AI should prioritize generating:

- data files
- content payloads
- configuration objects

before generating UI code.

---

### Content Sources

Content may originate from:

- client questionnaire
- Firecrawl research
- social media analysis
- website analysis
- brand profile
- positioning document

The generated data should reflect the client.

Generic content is forbidden.

---

## 13. Section Architecture

Sections are the building blocks of every EscalaSites project.

Sections consume:

- data
- layout primitives
- motion primitives
- design tokens

Sections should never reinvent system behavior.

---

### Current Foundation Sections

Hero

Services

CTA

Testimonials

FAQ

Footer

---

### Hero

Purpose:

- positioning
- first impression
- primary action

Current implementation:

- HeroEditorial

Future variants may include:

- Split
- Showcase
- Story
- Asymmetric

---

### Services

Purpose:

- communicate value
- explain offerings

Possible layouts:

- Grid
- Bento
- Timeline

---

### CTA

Purpose:

- create a clear next action

Rules:

- single intent preferred
- clarity over persuasion

---

### Testimonials

Purpose:

- trust
- credibility
- social proof

Rules:

- authentic attribution preferred
- avoid fake testimonials

---

### FAQ

Purpose:

- objection handling
- clarification
- SEO support

Rules:

- answer real client questions
- improve information architecture

---

### Footer

Purpose:

- navigation
- trust
- contact access

Rules:

- semantic structure
- legal information
- navigation support

---

### Section Contracts

Every section should have:

- typed props
- typed data
- configurable variants

Every section should be:

- reusable
- composable
- maintainable

---

### Section Rules

Do not create sections without a clear purpose.

Do not create visual variations that duplicate functionality.

Prefer extending contracts before creating new systems.

Reuse architecture whenever possible.

---

## 14. Client Workflow

Every project follows a standardized client workflow.

The objective is to collect enough information to create a website that reflects the client's business, positioning, and goals.

The workflow should minimize assumptions.

Research should replace guessing.

---

### Stage 1 — Client Intake

Collect:

- Business name
- Services
- Products
- Target audience
- Goals
- Contact information
- Social profiles
- Existing website

Preferred method:

- Structured questionnaire
- Discovery call
- Intake form

---

### Stage 2 — Brand Understanding

Identify:

- Positioning
- Value proposition
- Market category
- Brand personality
- Communication style
- Competitive advantages

The goal is to understand how the company should be perceived.

---

### Stage 3 — Research

Collect information from:

- Website
- Social media
- Google Business Profile
- Reviews
- Competitors
- Industry references

Research should generate evidence, not assumptions.

---

### Stage 4 — Brand Profile

Produce:

brand-profile.md

The profile should define:

- positioning
- audience
- messaging
- differentiation
- tone of voice
- trust signals

The Brand Profile becomes the foundation of all future decisions.

---

### Stage 5 — Site Architecture

Create:

page-architecture.md

Define:

- pages
- sections
- navigation
- conversion flow
- SEO opportunities

---

### Stage 6 — Content Strategy

Define:

- messaging hierarchy
- section goals
- CTA strategy
- trust elements

---

### Stage 7 — Implementation

Generate:

- configuration
- data files
- sections
- page structure

Following the boilerplate architecture.

---

### Stage 8 — Quality Assurance

Validate:

- responsiveness
- accessibility
- SEO
- performance
- consistency

---

### Stage 9 — Delivery

Prepare:

- deployment
- analytics
- SEO assets
- documentation

The project is only complete after validation.

---

## 15. Site Generation Workflow

The EscalaSites generation engine follows a structured production pipeline.

The objective is to reduce token usage while maximizing quality and consistency.

---

### Phase 1 — Research

Gather information from:

- Firecrawl
- Client questionnaire
- Social profiles
- Existing website
- Competitor websites

Output:

research.md

---

### Phase 2 — Brand Profile

Transform research into:

brand-profile.md

Output includes:

- positioning
- audience
- tone
- differentiation
- goals

---

### Phase 3 — Design Direction

Determine:

Variance (1-10)

Motion (1-10)

Density (1-10)

Select:

- visual direction
- layout freedom
- interaction intensity

---

### Phase 4 — Architecture

Create:

page-architecture.md

Define:

- page hierarchy
- section hierarchy
- conversion hierarchy

---

### Phase 5 — Content Generation

Generate:

- headlines
- subheads
- CTAs
- FAQs
- proof elements

Content must be client-specific.

Generic AI copy is forbidden.

---

### Phase 6 — Data Generation

Generate:

- heroData
- servicesData
- ctaData
- faqData
- testimonialsData
- footerData

Data is generated before UI.

---

### Phase 7 — UI Assembly

Render sections using:

- design tokens
- layout primitives
- motion primitives
- section contracts

Avoid custom implementations whenever possible.

---

### Phase 8 — SEO Assembly

Generate:

- metadata
- schema
- sitemap
- robots

SEO must be integrated into the architecture.

---

### Phase 9 — QA

Run validation.

Fix issues.

Only then proceed to deployment.

---

## 16. Quality Control

Quality control is mandatory.

No project should be delivered without validation.

---

### Design QA

Validate:

- spacing consistency
- typography hierarchy
- visual balance
- responsiveness
- brand consistency

---

### Layout QA

Validate:

- container usage
- section spacing
- mobile collapse strategy
- readability constraints

---

### Motion QA

Validate:

- reduced motion support
- animation consistency
- hover feedback
- performance

---

### Content QA

Validate:

- grammar
- clarity
- positioning
- CTA alignment

Remove generic AI wording.

---

### SEO QA

Validate:

- metadata
- schema
- sitemap
- robots
- semantic structure

---

### Accessibility QA

Validate:

- keyboard navigation
- contrast
- labels
- semantic HTML

Minimum target:

WCAG AA.

---

### Performance QA

Validate:

- Lighthouse
- Core Web Vitals
- bundle size
- image optimization

---

### Final Release Checklist

Before deployment:

- Mobile approved
- Desktop approved
- SEO approved
- Accessibility approved
- Performance approved
- Client content approved

Only after all checks pass should the project be deployed.

---

## 17. Coding Rules

The EscalaSites codebase prioritizes maintainability, scalability, and consistency.

All implementations must respect the architecture before introducing new solutions.

---

### General Rules

- TypeScript first
- Reusability first
- Mobile-first
- Accessibility-first
- SEO-first
- Performance-first

Never sacrifice architecture for short-term speed.

---

### Component Rules

Components should:

- have a single responsibility
- be reusable
- be composable
- be typed

Avoid:

- monolithic components
- duplicated implementations
- business logic inside UI

---

### Layout Rules

Always consume:

- Container
- Section
- Stack
- Grid
- ContentWrapper

Do not recreate layout primitives.

Do not hardcode layout behavior.

---

### Motion Rules

Always consume:

- Reveal
- Stagger
- FadeIn
- HoverScale

Avoid creating one-off animation systems.

Motion must originate from centralized configuration.

---

### Token Rules

Always consume:

- spacing tokens
- typography tokens
- radius tokens
- container tokens

Never hardcode values that already exist in the design system.

---

### Data Rules

Data should live in:

src/data/

UI should consume data.

Avoid hardcoded business content.

The preferred workflow is:

Data
↓
Section
↓
Page

---

### Configuration Rules

Configuration lives in:

src/config/

Configuration should drive:

- branding
- navigation
- SEO
- design dials
- contact information

Prefer changing configuration before modifying UI.

---

### RSC Rules

Default:

Server Components

Client Components only when required:

- Framer Motion
- browser APIs
- interaction state
- client-only behavior

---

### SEO Rules

Every page should support:

- metadata
- Open Graph
- structured data

SEO is part of implementation, not a post-processing step.

---

### Generation Rules

Prefer generating:

- configuration
- data
- content

before generating:

- components
- pages
- layouts

Data-driven generation is the standard.

---

## 18. Forbidden Patterns

The following patterns are forbidden inside EscalaSites.

---

### Design

- Generic AI layouts
- Template-looking interfaces
- Excessive gradients
- Excessive glassmorphism
- Random visual effects
- Visual clutter
- Decorative complexity

---

### Layout

- Repeated section structures
- Endless center alignment
- Flexbox math where Grid is superior
- Missing mobile collapse strategy
- Hardcoded spacing

---

### Typography

- Weak hierarchy
- Excessive font mixing
- Decorative typography without purpose
- Poor readability

---

### Motion

- Random animation values
- Motion without purpose
- Excessive motion
- Competing animations
- Ignoring reduced-motion preferences

---

### Content

- Generic SaaS copy
- Placeholder content
- AI clichés
- Fake urgency
- Fake scarcity
- Fake testimonials
- Fake metrics

---

### Architecture

- Duplicated logic
- Duplicated components
- Hardcoded business data
- Hardcoded configuration
- Bypassing design tokens
- Bypassing layout primitives
- Bypassing motion primitives

---

### Development

- Premature optimization
- Overengineering
- Creating systems before they are needed
- Ignoring existing architecture

---

### EscalaSites Rule

If a solution already exists in the architecture:

Reuse it.

Do not rebuild it.

---

## 19. Current Project Status

### Repository

EscalaSites

Current boilerplate:

factory/boilerplates/next-premium

---

### Completed Architecture Layers

✅ Foundation Layer

✅ Configuration Layer

- site.ts
- theme.ts
- motion.ts
- seo.ts

✅ Type Layer

- site.ts
- theme.ts
- motion.ts
- seo.ts

✅ Design Token Layer

- tokens.css
- typography.css
- utilities.css

✅ Constants Layer

- spacing
- typography
- breakpoints
- containers

✅ Layout Layer

- Container
- Section
- Stack
- Grid
- ContentWrapper

✅ Motion Layer

- Reveal
- Stagger
- FadeIn
- HoverScale

✅ SEO Layer

- metadata
- schema
- sitemap
- robots

✅ Section Contracts

- Hero
- Services
- CTA
- Testimonials
- FAQ
- Footer

✅ Data Layer

- Hero
- Services
- CTA
- Testimonials
- FAQ
- Footer

---

### Current Implemented Section

HeroEditorial

Purpose:

Validate the architecture.

Validate:

- layout primitives
- motion primitives
- data flow
- typography system

HeroEditorial acts as the first proof-of-concept implementation of the system.

---

### Next Priorities

1. Review HeroEditorial

2. Implement Services section

3. Implement CTA section

4. Implement Testimonials section

5. Implement FAQ section

6. Implement Footer section

7. Build page composition patterns

8. Create archetype system

9. Create generation workflow integrations

10. Prepare production deployment pipeline

---

### Long-Term Objective

EscalaSites should become a complete premium website generation engine capable of:

- research
- strategy
- architecture
- content generation
- implementation
- SEO
- deployment

while maintaining custom-quality output at scale.