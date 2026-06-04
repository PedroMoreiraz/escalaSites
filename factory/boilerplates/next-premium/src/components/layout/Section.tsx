import * as React from "react"
import { cn } from "@/lib/utils"
import { SPACING } from "@/constants/spacing"

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  spacing?: keyof typeof SPACING.section
  as?: React.ElementType
}

export const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ className, spacing = "lg", as: Component = "section", style, children, ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={cn("relative w-full", className)}
        style={{
          paddingTop: SPACING.section[spacing],
          paddingBottom: SPACING.section[spacing],
          ...style,
        }}
        {...props}
      >
        {children}
      </Component>
    )
  }
)
Section.displayName = "Section"
