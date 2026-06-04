import { FAQProps } from "@/sections/faq/types"

export const faqData: Record<string, FAQProps> = {
  accordion: {
    id: "faq-accordion",
    variant: "accordion",
    headline: "Common Questions",
    contactHref: "/contact",
    contactLabel: "Still have questions?",
    items: [
      {
        id: "timeline",
        question: "How long does a typical build take?",
        answer: "Most projects are completed within 2 to 4 weeks depending on architectural scope.",
      },
      {
        id: "tech-stack",
        question: "What technology do you use?",
        answer: "We specialize exclusively in Next.js App Router, Tailwind CSS v4, and Framer Motion to ensure the highest performance ceiling.",
      },
      {
        id: "design",
        question: "Do you provide design files?",
        answer: "Yes, fully organized Figma files are handed over alongside the production repository.",
      }
    ],
  },
}
