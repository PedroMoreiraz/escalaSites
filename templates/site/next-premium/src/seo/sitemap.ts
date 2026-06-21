import { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

export function generateBaseSitemap(): MetadataRoute.Sitemap {
  // Base routes derived from the site navigation
  const routes = siteConfig.nav.map((route) => ({
    url: `${siteConfig.url}${route.href}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly" as const,
    priority: route.href === "/" ? 1 : 0.8,
  }));

  return routes;
}
