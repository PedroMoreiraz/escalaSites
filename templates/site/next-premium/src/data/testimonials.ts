import { TestimonialProps } from "@/sections/testimonials/types"

export const testimonialsData: Record<string, TestimonialProps> = {
  carousel: {
    id: "testimonials-carousel",
    variant: "carousel",
    headline: "Trusted by Industry Leaders",
    items: [
      {
        id: "t1",
        quote: "The attention to detail and physics-based motion completely transformed our brand perception overnight.",
        author: "Sarah Jenkins",
        role: "VP Product",
        company: "Vercel",
      },
      {
        id: "t2",
        quote: "They delivered a $150k agency-tier site in weeks. Unbelievable velocity and zero AI slop.",
        author: "David Chen",
        role: "Founder",
        company: "Acme Corp",
      },
    ],
  },
}
