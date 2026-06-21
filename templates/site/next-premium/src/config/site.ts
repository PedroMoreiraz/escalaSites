import { SiteConfig } from "@/types/site";

export const siteConfig: SiteConfig = {
  name: "EscalaSites Master",
  description: "Premium web experiences built for high-conversion.",
  url: "https://escalasites.com",
  ogImage: "https://escalasites.com/og.png",
  links: {
    twitter: "https://twitter.com/escalasites",
    github: "https://github.com/escalasites",
  },
  contact: {
    email: "hello@escalasites.com",
  },
  nav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
  ],
  ctaDefaults: {
    primaryLabel: "Get Started",
    primaryHref: "/contact",
  },
  businessMetadata: {
    foundingYear: 2026,
    industry: "Web Development",
  },
};
