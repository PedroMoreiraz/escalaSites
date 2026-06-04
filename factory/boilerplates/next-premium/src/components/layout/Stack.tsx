import * as React from "react"
import { cn } from "@/lib/utils"
import { SPACING } from "@/constants/spacing"

export interface StackProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType
  gap?: keyof typeof SPACING.element
  align?: "start" | "center" | "end" | "stretch"
  justify?: "start" | "center" | "end" | "between" | "around"
}

export const Stack = React.forwardRef<HTMLElement, StackProps>(
  ({ className, as: Component = "div", gap = "md", align = "stretch", justify = "start", style, children, ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={cn(
          "flex flex-col",
          {
            "items-start": align === "start",
            "items-center": align === "center",
            "items-end": align === "end",
            "items-stretch": align === "stretch",
            "justify-start": justify === "start",
            "justify-center": justify === "center",
            "justify-end": justify === "end",
            "justify-between": justify === "between",
            "justify-around": justify === "around",
          },
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
Stack.displayName = "Stack"
