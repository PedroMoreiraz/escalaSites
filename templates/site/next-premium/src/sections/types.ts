import { SPACING } from "@/constants/spacing"

export type SectionVariant = "default" | "alternate" | "dark" | "light" | "glass"
export type SectionSpacing = keyof typeof SPACING.section
export type SectionAlignment = "left" | "center" | "right"

export interface BaseSectionProps {
  /**
   * Unique identifier for the section, used for semantic HTML and anchor links.
   */
  id?: string
  
  /**
   * The aesthetic variant of the section.
   */
  variant?: SectionVariant
  
  /**
   * The vertical spacing rhythm applied to the section.
   */
  spacing?: SectionSpacing
  
  /**
   * Optional CSS classes to append.
   */
  className?: string
}
