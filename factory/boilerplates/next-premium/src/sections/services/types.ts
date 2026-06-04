import * as React from "react"
import { BaseSectionProps } from "../types"

export type ServicesVariant = "grid" | "cards" | "bento" | "timeline" | "editorial"

export interface ServiceItem {
  id: string
  title: string
  description: string
  icon?: string | React.ReactNode
  image?: string
  href?: string
}

export interface ServicesProps extends BaseSectionProps {
  variant?: ServicesVariant
  
  /**
   * Section headline.
   */
  headline: string
  
  /**
   * Section description.
   */
  description?: string
  
  /**
   * Optional micro-label (eyebrow cap rule applies).
   */
  eyebrow?: string
  
  /**
   * Array of service items to render based on the variant layout.
   */
  items: ServiceItem[]
}
