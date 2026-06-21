"use client"

import * as React from "react"
import { motion, useReducedMotion } from "framer-motion"
import { motionConfig } from "@/config/motion"
import { cn } from "@/lib/utils"

export interface HoverScaleProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  scale?: number
}

export function HoverScale({ children, className, scale = motionConfig.presets.hover.scale, ...props }: HoverScaleProps) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div
      whileHover={shouldReduceMotion ? undefined : { scale }}
      whileTap={shouldReduceMotion ? undefined : { scale: scale * 0.98 }}
      transition={motionConfig.easing.spring}
      className={cn("origin-center cursor-pointer", className)}
      {...props}
    >
      {children}
    </motion.div>
  )
}
