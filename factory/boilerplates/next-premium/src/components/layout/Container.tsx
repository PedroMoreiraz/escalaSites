import * as React from "react"
import { cn } from "@/lib/utils"
import { CONTAINERS } from "@/constants/containers"

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType
  size?: keyof typeof CONTAINERS.maxWidth
}

export const Container = React.forwardRef<HTMLElement, ContainerProps>(
  ({ className, as: Component = "div", size = "wide", style, children, ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={cn("w-full mx-auto px-4 md:px-8", className)}
        style={{
          maxWidth: CONTAINERS.maxWidth[size],
          ...style,
        }}
        {...props}
      >
        {children}
      </Component>
    )
  }
)
Container.displayName = "Container"
