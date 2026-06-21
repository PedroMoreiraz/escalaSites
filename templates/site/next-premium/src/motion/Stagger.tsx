"use client"

import * as React from "react"
import { motion, useReducedMotion, Variants } from "framer-motion"
import { motionConfig } from "@/config/motion"
import { cn } from "@/lib/utils"

export interface StaggerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  once?: boolean
  amount?: "some" | "all" | number
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: motionConfig.presets.stagger.staggerChildren,
      delayChildren: motionConfig.presets.stagger.delayChildren,
    },
  },
}

export function Stagger({ children, className, once = true, amount = 0.2, ...props }: StaggerProps) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div
      initial={shouldReduceMotion ? "show" : "hidden"}
      whileInView="show"
      viewport={{ once, amount }}
      variants={shouldReduceMotion ? { hidden: { opacity: 1 }, show: { opacity: 1 } } : containerVariants}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export interface StaggerItemProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

const itemVariants: Variants = {
  hidden: motionConfig.presets.reveal.initial,
  show: {
    ...motionConfig.presets.reveal.animate,
    transition: motionConfig.presets.reveal.transition,
  },
}

export function StaggerItem({ children, className, ...props }: StaggerItemProps) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div
      variants={shouldReduceMotion ? { hidden: { opacity: 1, y: 0, filter: "none" }, show: { opacity: 1, y: 0, filter: "none" } } : itemVariants}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  )
}
