import { ThemeConfig } from "@/types/theme";

export const themeConfig: ThemeConfig = {
  dials: {
    density: 4,
    variance: 8,
  },
  spacing: {
    sectionPadding: "py-24 md:py-32",
    macroWhitespace: "py-32 md:py-40",
  },
  radius: {
    base: "0.5rem",
    button: "9999px", // Pill shape by default
    cardOuter: "2rem", // Double-bezel outer
    cardInner: "calc(2rem - 0.375rem)", // Double-bezel inner
  },
  container: {
    maxWidth: "max-w-[1400px]",
    padding: "px-4 md:px-8",
  },
  layoutConstraints: {
    maxHeroPadding: "pt-24",
    maxContentWidth: "max-w-[65ch]",
    navHeight: "80px",
  },
};
