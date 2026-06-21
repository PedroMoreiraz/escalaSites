import { MetadataRoute } from "next";
import { seoConfig } from "@/config/seo";
import { siteConfig } from "@/config/site";

export function generateRobotsConfig(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: seoConfig.robots.index ? [] : ["/"],
    },
    sitemap: `${siteConfig.url}${seoConfig.sitemapPath}`,
  };
}
