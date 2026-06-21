# Architecture Rules

Every AI must follow these rules before generating any output.
These rules are not suggestions. They are mandatory constraints.

---

## Structure

- Every folder represents a domain. No folder exists for convenience.
- Each domain has a single responsibility.
- No cross-domain coupling except through defined interfaces.
- Client projects are fully autonomous. Copying a client folder to another machine must not break anything.
- No AI-specific folders (claude/, gpt/, gemini/, cursor/) may exist anywhere in the platform.

## Knowledge

- All platform knowledge lives in `knowledge/`. No other location.
- `knowledge/design/principles/` is read-only. Never modify its content.
- Design principles are referenced, not copied, into prompts or playbooks.

## Engine

- Prompts are atomic. One prompt = one responsibility.
- Prompts in `engine/prompts/strategy/` are executed before any other prompts.
- Prompts in `engine/prompts/components/` consume output from strategy and implementation.
- Workflows in `engine/workflows/` orchestrate prompts. They do not contain prompt content.
- Playbooks in `engine/playbooks/[segment]/` are the only location for segment-specific logic.

## Generation Flow

- Every project starts with loading `engine/context/master-context.md`.
- Strategy prompts execute before implementation prompts.
- Implementation prompts execute before component prompts.
- SEO prompts execute after components.
- QA checklists in `engine/qa/` execute last.

## Schemas

- Every document type has a corresponding schema in `schemas/`.
- Output must conform to the schema before being used in the next step.
- Never generate free-form documents when a schema exists.

## Templates

- `templates/site/next-premium/` is the only permitted boilerplate source.
- Never modify the boilerplate directly. Copy it to `clients/[slug]/site/` first.
- Document templates in `templates/documents/` define structure only, not content.
