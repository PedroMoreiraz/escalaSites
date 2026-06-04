"use client"

import * as React from "react"
import { motion, useReducedMotion } from "framer-motion"
import { motionConfig } from "@/config/motion"
import { cn } from "@/lib/utils"

export interface RevealProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  delay?: number
  once?: boolean
  amount?: "some" | "all" | number
}

export function Reveal({ children, className, delay = 0, once = true, amount = 0.3, ...props }: RevealProps) {
  const shouldReduceMotion = useReducedMotion()
  const { initial, animate, transition } = motionConfig.presets.reveal

  return (
    <motion.div
      initial={shouldReduceMotion ? { opacity: 1, y: 0, filter: "none" } : initial}
      whileInView={shouldReduceMotion ? { opacity: 1, y: 0, filter: "none" } : animate}
      viewport={{ once, amount }}
      transition={{
        ...transition,
        delay,
      }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  )
}
