import * as React from "react"
import { BaseSectionProps, SectionAlignment } from "../types"

export type CTAVariant = "inline" | "floating" | "editorial" | "split"

export interface CTAAction {
  label: string
  href: string
  variant?: "primary" | "secondary" | "outline" | "white"
}

export interface CTAProps extends BaseSectionProps {
  variant?: CTAVariant
  alignment?: SectionAlignment
  
  /**
   * The primary call to action headline.
   */
  headline: string
  
  /**
   * Supporting persuasive text.
   */
  subtext?: string
  
  /**
   * The actions to take (Single Intent CTA rule applies).
   */
  actions: CTAAction[]
  
  /**
   * Optional visual asset, mainly used in 'split' or 'editorial' variants.
   */
  media?: React.ReactNode | string
}
