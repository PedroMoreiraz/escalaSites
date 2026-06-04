import { siteConfig } from "@/config/site";
import { seoConfig } from "@/config/seo";

export function generateOrganizationSchema() {
  if (!seoConfig.structuredData.organization) return null;

  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: siteConfig.ogImage,
    description: siteConfig.description,
    sameAs: Object.values(siteConfig.links).filter(Boolean),
    contactPoint: {
      "@type": "ContactPoint",
      email: siteConfig.contact.email,
      telephone: siteConfig.contact.phone,
      contactType: "customer service",
    },
  };
}

export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.name,
    image: siteConfig.ogImage,
    url: siteConfig.url,
    telephone: siteConfig.contact.phone,
    address: siteConfig.contact.address ? {
      "@type": "PostalAddress",
      streetAddress: siteConfig.contact.address,
    } : undefined,
  };
}

export function generateProfessionalServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.name,
    image: siteConfig.ogImage,
    url: siteConfig.url,
    telephone: siteConfig.contact.phone,
    address: siteConfig.contact.address ? {
      "@type": "PostalAddress",
      streetAddress: siteConfig.contact.address,
    } : undefined,
  };
}
