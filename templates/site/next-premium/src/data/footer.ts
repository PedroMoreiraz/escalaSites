import { FooterProps } from "@/sections/footer/types"

export const footerData: Record<string, FooterProps> = {
  multiColumn: {
    id: "footer-main",
    variant: "multi-column",
    description: "Premium web experiences built for high-conversion.",
    logo: "EscalaSites",
    columns: [
      {
        title: "Product",
        links: [
          { label: "Features", href: "/features" },
          { label: "Pricing", href: "/pricing" },
          { label: "Showcase", href: "/showcase" },
        ],
      },
      {
        title: "Company",
        links: [
          { label: "About", href: "/about" },
          { label: "Careers", href: "/careers" },
          { label: "Contact", href: "/contact" },
        ],
      },
    ],
    socialLinks: [
      { label: "Twitter", href: "https://twitter.com" },
      { label: "GitHub", href: "https://github.com" },
    ],
    legalLinks: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
    copyright: "© 2026 EscalaSites. All rights reserved.",
  },
}
