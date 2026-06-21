import * as React from "react"
import { BaseSectionProps } from "../types"

export type FooterVariant = "simple" | "multi-column" | "editorial"

export interface FooterLink {
  label: string
  href: string
  external?: boolean
}

export interface FooterColumn {
  title: string
  links: FooterLink[]
}

export interface FooterProps extends BaseSectionProps {
  variant?: FooterVariant
  
  /**
   * Primary brand logo or text.
   */
  logo?: React.ReactNode | string
  
  /**
   * Brief description or tagline.
   */
  description?: string
  
  /**
   * Navigation columns.
   */
  columns?: FooterColumn[]
  
  /**
   * Legal links (Privacy Policy, Terms of Service).
   */
  legalLinks?: FooterLink[]
  
  /**
   * Social media links.
   */
  socialLinks?: FooterLink[]
  
  /**
   * Copyright text (e.g., "© 2026 EscalaSites. All rights reserved.")
   */
  copyright?: string
}
