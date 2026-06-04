import { HeroProps } from "@/sections/hero/types"

export const heroData: Record<string, HeroProps> = {
  split: {
    id: "hero-split",
    variant: "split",
    spacing: "lg",
    headline: "Premium Interfaces for Fast Teams",
    subtext: "We build $150k-tier digital experiences in days, not months. Stop accepting default templates.",
    eyebrow: "The New Standard",
    actions: [
      { label: "View Portfolio", href: "/work", variant: "primary" },
      { label: "Book Audit", href: "/audit", variant: "ghost" },
    ],
    media: "https://picsum.photos/1200/800", // Placeholder for actual asset
  },
  showcase: {
    id: "hero-showcase",
    variant: "showcase",
    alignment: "center",
    spacing: "xl",
    headline: "Design That Commands Authority",
    subtext: "Dominate your niche with physics-based interactions and ruthless typography.",
    actions: [
      { label: "Get Started", href: "/start", variant: "primary" },
    ],
  },
  editorial: {
    id: "hero-editorial",
    variant: "editorial",
    headline: "The Art of Restraint",
    subtext: "Minimalism is not a lack of design. It is the mastery of what to omit.",
    actions: [
      { label: "Read Manifesto", href: "/manifesto", variant: "primary" },
    ],
  }
}
