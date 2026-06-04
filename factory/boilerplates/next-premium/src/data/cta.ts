import { CTAProps } from "@/sections/cta/types"

export const ctaData: Record<string, CTAProps> = {
  floating: {
    id: "cta-floating",
    variant: "floating",
    alignment: "center",
    headline: "Ready to upgrade your presence?",
    subtext: "Join 50+ scaling companies who trust our methodology.",
    actions: [
      { label: "Start Project", href: "/contact", variant: "primary" },
    ],
  },
  split: {
    id: "cta-split",
    variant: "split",
    headline: "Stop leaking conversions.",
    subtext: "Book a technical teardown today.",
    actions: [
      { label: "Book Call", href: "/call", variant: "primary" },
    ],
    media: "https://picsum.photos/800/800",
  }
}
