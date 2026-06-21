"use client"

import * as React from "react"
import { motion, useReducedMotion } from "framer-motion"
import { motionConfig } from "@/config/motion"
import { cn } from "@/lib/utils"

export interface FadeInProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  delay?: number
  duration?: number
}

export function FadeIn({ children, className, delay = 0, duration = motionConfig.durations.default, ...props }: FadeInProps) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration,
        delay,
        ease: motionConfig.easing.cubicBezier,
      }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  )
}
