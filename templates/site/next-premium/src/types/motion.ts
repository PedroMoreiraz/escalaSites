export type MotionDial = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

export interface MotionConfig {
  dial: MotionDial;
  durations: {
    fast: number;
    default: number;
    slow: number;
  };
  easing: {
    spring: {
      type: string;
      stiffness: number;
      damping: number;
    };
    cubicBezier: number[];
  };
  presets: {
    reveal: {
      initial: Record<string, any>;
      animate: Record<string, any>;
      transition: Record<string, any>;
    };
    stagger: {
      delayChildren: number;
      staggerChildren: number;
    };
    hover: {
      scale: number;
    };
  };
  constraints: {
    prefersReducedMotion: boolean;
  };
}
