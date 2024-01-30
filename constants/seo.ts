import { Metadata, Viewport } from "next";

const WEB_APP_URL = "https://sri-spa.vercel.app/";

const SEO_KEYWORDS = ["News", "Cars"];

const DEFAULT_METADATA: Metadata = {
  title: "SRI - The Marketplace of choice",
  description: "The Marketplace of choice",
  authors: {
    name: "SRI",
    url: WEB_APP_URL,
  },
  generator: "Next.js",
  keywords: SEO_KEYWORDS,
  referrer: "origin-when-cross-origin",
  creator: "SRI",
  publisher: "SRI",
  icons: [
    "/favicon.ico",
    "/favicon-16x16.png",
    "/favicon-32x32.png",
    "/apple-touch-icon.png",
    "/android-chrome-192x192.png",
    "/android-chrome-512x512.png",
  ],
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: WEB_APP_URL,
    siteName: "SRI",
    title: "SRI - The Marketplace of choice",
    description:
      "SRI: The Marketplace of choice. Elevate online shopping with SRI's user-friendly platform. Try it now!",
    images: [
      {
        url: "/images/lg-og-image.webp",
        width: 192,
        height: 192,
        alt: "SRI",
      },
    ],
  },
  twitter: {
    creator: "@SRI",
    title: "SRI - The Marketplace of choice",
    description:
      "The Marketplace of choice 💼💡 #SRI #Marketplace #MarketplaceSimplified",
    site: "@SRI",
    card: "summary_large_image",
    images: [
      {
        url: "/images/lg-og-image.webp",
        width: 512,
        height: 512,
        alt: "SRI",
      },
    ],
  },
  metadataBase: new URL(WEB_APP_URL),
};

const VIEWPORT_METADATA: Viewport = {
  width: 1,
  themeColor: "#040a13",
  colorScheme: "dark",
};

export { DEFAULT_METADATA, VIEWPORT_METADATA, WEB_APP_URL };
