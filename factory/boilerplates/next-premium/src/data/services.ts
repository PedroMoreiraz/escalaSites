import { ServicesProps } from "@/sections/services/types"

export const servicesData: Record<string, ServicesProps> = {
  bento: {
    id: "services-bento",
    variant: "bento",
    headline: "Our Capabilities",
    description: "End-to-end design and engineering for scaling startups.",
    eyebrow: "Expertise",
    items: [
      {
        id: "ui-engineering",
        title: "UI Engineering",
        description: "Pixel-perfect React development with uncompromising performance.",
      },
      {
        id: "motion-design",
        title: "Motion Design",
        description: "Physics-based interaction choreography.",
      },
      {
        id: "system-architecture",
        title: "System Architecture",
        description: "Scalable Next.js foundations built for enterprise.",
      },
    ],
  },
  grid: {
    id: "services-grid",
    variant: "grid",
    headline: "How We Help",
    items: [
      {
        id: "audit",
        title: "UX Audit",
        description: "Comprehensive review of your existing funnel.",
      },
      {
        id: "build",
        title: "Rapid Build",
        description: "From Figma to production in record time.",
      },
    ],
  }
}
