export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
}

export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    twitter: string;
    github: string;
    [key: string]: string;
  };
  contact: {
    email: string;
    phone?: string;
    address?: string;
  };
  nav: NavItem[];
  ctaDefaults: {
    primaryLabel: string;
    primaryHref: string;
  };
  businessMetadata: {
    foundingYear: number;
    industry: string;
  };
}
