import { MotionConfig } from "@/types/motion";

export const motionConfig: MotionConfig = {
  dial: 6,
  durations: {
    fast: 0.2,
    default: 0.6,
    slow: 0.8,
  },
  easing: {
    spring: {
      type: "spring",
      stiffness: 100,
      damping: 20,
    },
    cubicBezier: [0.32, 0.72, 0, 1],
  },
  presets: {
    reveal: {
      initial: { opacity: 0, y: 16, filter: "blur(4px)" },
      animate: { opacity: 1, y: 0, filter: "blur(0px)" },
      transition: { duration: 0.6, ease: [0.32, 0.72, 0, 1] },
    },
    stagger: {
      delayChildren: 0.1,
      staggerChildren: 0.08,
    },
    hover: {
      scale: 0.98,
    },
  },
  constraints: {
    prefersReducedMotion: true,
  },
};
