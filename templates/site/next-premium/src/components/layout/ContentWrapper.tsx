import * as React from "react"
import { cn } from "@/lib/utils"
import { CONTAINERS } from "@/constants/containers"

export interface ContentWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType
  align?: "left" | "center" | "right"
}

export const ContentWrapper = React.forwardRef<HTMLElement, ContentWrapperProps>(
  ({ className, as: Component = "div", align = "left", style, children, ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={cn(
          "w-full",
          {
            "mx-auto text-center": align === "center",
            "ml-auto text-right": align === "right",
            "mr-auto text-left": align === "left",
          },
          className
        )}
        style={{
          maxWidth: CONTAINERS.maxWidth.content,
          ...style,
        }}
        {...props}
      >
        {children}
      </Component>
    )
  }
)
ContentWrapper.displayName = "ContentWrapper"
