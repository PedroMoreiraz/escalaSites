import * as React from "react"
import { BaseSectionProps, SectionAlignment } from "../types"

export type HeroVariant = "editorial" | "split" | "showcase" | "asymmetric" | "story"

export interface HeroAction {
  label: string
  href: string
  variant?: "primary" | "secondary" | "outline" | "ghost"
}

export interface HeroProps extends BaseSectionProps {
  variant?: HeroVariant
  alignment?: SectionAlignment
  
  /**
   * The main headline, limited to 2 lines maximum per premium rules.
   */
  headline: string
  
  /**
   * The subtext, limited to 20 words maximum per premium rules.
   */
  subtext?: string
  
  /**
   * Optional micro-label (eyebrow cap rule applies).
   */
  eyebrow?: string
  
  /**
   * Primary and secondary actions (CTA wrap ban applies).
   */
  actions?: HeroAction[]
  
  /**
   * Visual asset (image URL, video URL, or React component).
   */
  media?: React.ReactNode | string
}
