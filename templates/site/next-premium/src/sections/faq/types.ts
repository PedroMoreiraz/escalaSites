import * as React from "react"
import { BaseSectionProps, SectionAlignment } from "../types"

export type FAQVariant = "accordion" | "split" | "editorial"

export interface FAQItem {
  id: string
  question: string
  answer: string | React.ReactNode
}

export interface FAQProps extends BaseSectionProps {
  variant?: FAQVariant
  alignment?: SectionAlignment
  
  headline: string
  description?: string
  
  /**
   * The frequently asked questions.
   */
  items: FAQItem[]
  
  /**
   * Optional contact link for unanswered questions.
   */
  contactHref?: string
  contactLabel?: string
}
