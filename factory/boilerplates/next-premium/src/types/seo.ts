export interface SeoConfig {
  metadataBase: URL;
  title: {
    default: string;
    template: string;
  };
  description: string;
  openGraph: {
    type: string;
    locale: string;
    url: string;
    title: string;
    description: string;
    siteName: string;
    images: Array<{
      url: string;
      width: number;
      height: number;
      alt: string;
    }>;
  };
  twitter: {
    card: string;
    title: string;
    description: string;
    images: string[];
    creator: string;
  };
  robots: {
    index: boolean;
    follow: boolean;
    googleBot: {
      index: boolean;
      follow: boolean;
      "max-video-preview": number;
      "max-image-preview": string;
      "max-snippet": number;
    };
  };
  canonical: string;
  sitemapPath: string;
  structuredData: {
    organization: boolean;
    website: boolean;
  };
}
