import { Metadata } from "next";
import { seoConfig } from "@/config/seo";

export function constructMetadata({
  title = seoConfig.title.default,
  description = seoConfig.description,
  image = seoConfig.openGraph.images[0].url,
  noIndex = !seoConfig.robots.index,
}: {
  title?: string;
  description?: string;
  image?: string;
  noIndex?: boolean;
} = {}): Metadata {
  return {
    title: {
      default: title,
      template: seoConfig.title.template,
    },
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: image,
          width: seoConfig.openGraph.images[0].width,
          height: seoConfig.openGraph.images[0].height,
          alt: seoConfig.openGraph.images[0].alt,
        },
      ],
      type: seoConfig.openGraph.type as "website",
      siteName: seoConfig.openGraph.siteName,
      locale: seoConfig.openGraph.locale,
      url: seoConfig.openGraph.url,
    },
    twitter: {
      card: seoConfig.twitter.card as "summary_large_image",
      title,
      description,
      images: [image],
      creator: seoConfig.twitter.creator,
    },
    metadataBase: seoConfig.metadataBase,
    alternates: {
      canonical: seoConfig.canonical,
    },
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}
