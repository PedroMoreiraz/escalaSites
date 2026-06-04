import * as React from "react"
import { cn } from "@/lib/utils"
import { SPACING } from "@/constants/spacing"

export interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType
  cols?: 1 | 2 | 3 | 4 | 5 | 6 | 12
  gap?: keyof typeof SPACING.element
  mobileCollapse?: boolean
}

export const Grid = React.forwardRef<HTMLElement, GridProps>(
  ({ className, as: Component = "div", cols = 1, gap = "lg", mobileCollapse = true, style, children, ...props }, ref) => {
    
    // Explicit mapping to avoid dynamic Tailwind class purge issues
    const colClasses = {
      1: "md:grid-cols-1",
      2: "md:grid-cols-2",
      3: "md:grid-cols-3",
      4: "md:grid-cols-4",
      5: "md:grid-cols-5",
      6: "md:grid-cols-6",
      12: "md:grid-cols-12",
    }
    
    return (
      <Component
        ref={ref}
        className={cn(
          "grid",
          mobileCollapse ? "grid-cols-1" : `grid-cols-${cols}`,
          mobileCollapse ? colClasses[cols] : "",
          className
        )}
        style={{
          gap: SPACING.element[gap],
          ...style,
        }}
        {...props}
      >
        {children}
      </Component>
    )
  }
)
Grid.displayName = "Grid"
