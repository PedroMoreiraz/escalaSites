import { BaseSectionProps } from "../types"

export type TestimonialVariant = "cards" | "carousel" | "editorial"

export interface TestimonialItem {
  id: string
  quote: string
  author: string
  role: string
  company?: string
  avatar?: string
}

export interface TestimonialProps extends BaseSectionProps {
  variant?: TestimonialVariant
  
  /**
   * Section headline.
   */
  headline?: string
  
  /**
   * The array of testimonials (Authentic Social Proof rule applies).
   */
  items: TestimonialItem[]
}
