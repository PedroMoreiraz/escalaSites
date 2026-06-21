export const TYPOGRAPHY = {
  scale: {
    display: {
      mobile: { size: "3.5rem", lineHeight: 1, tracking: "-0.04em" },
      desktop: { size: "5rem", lineHeight: 1, tracking: "-0.04em" }
    },
    heading: {
      mobile: { size: "2.5rem", lineHeight: 1.1, tracking: "-0.02em" },
      desktop: { size: "3.5rem", lineHeight: 1.1, tracking: "-0.02em" }
    },
    subheading: {
      mobile: { size: "1.5rem", lineHeight: 1.3, tracking: "-0.01em" },
      desktop: { size: "1.75rem", lineHeight: 1.3, tracking: "-0.01em" }
    },
    body: {
      mobile: { size: "1rem", lineHeight: 1.6, tracking: "0" },
      desktop: { size: "1.125rem", lineHeight: 1.6, tracking: "0" }
    },
    caption: {
      mobile: { size: "0.75rem", lineHeight: 1.5, tracking: "0.1em" },
      desktop: { size: "0.75rem", lineHeight: 1.5, tracking: "0.1em" }
    }
  },
  weights: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700
  }
} as const;
