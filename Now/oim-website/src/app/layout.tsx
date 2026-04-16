import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

// ─── SEO SOTA ────────────────────────────────────────────────────────────────
const siteUrl = "https://oimatlanta.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Office Furniture Installation Atlanta | OIM",
    template: "%s | OIM Atlanta",
  },
  description:
    "Professional office furniture installation in Atlanta, GA. Corporate space management engineering — cubicles, desks, workstations, TVs, whiteboards & full office setups. Licensed & insured since 2018. Call +1 (470) 595-0121.",

  keywords: [
    "office furniture installation Atlanta",
    "commercial furniture assembly Georgia",
    "office setup Atlanta",
    "furniture relocation Atlanta",
    "bilingual office installers Atlanta",
    "cubicle installation Atlanta",
    "Office Installations Mayen",
  ],

  authors: [{ name: "Office Installations Mayen" }],
  creator: "OIM",
  publisher: "OIM",

  // ── Open Graph ──
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["es_US"],
    url: siteUrl,
    siteName: "OIM - Office Installations Mayen",
    title: "Office Furniture Installation Atlanta | OIM",
    description:
      "Professional office furniture installation & relocation in Atlanta. Bilingual (EN/ES), licensed & insured. Free quotes.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "OIM - Office Furniture Installation Atlanta",
      },
    ],
  },

  // ── Twitter / X ──
  twitter: {
    card: "summary_large_image",
    title: "Office Furniture Installation Atlanta | OIM",
    description:
      "Professional office furniture installation & relocation in Atlanta. Bilingual, licensed & insured.",
    images: ["/og-image.jpg"],
  },

  // ── Local Business ──
  alternates: {
    canonical: siteUrl,
    languages: {
      "en-US": siteUrl,
      "es-US": `${siteUrl}?lang=es`,
    },
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  icons: {
    icon: "/favicon-drill.png",
    apple: "/favicon-drill.png",
  },
};

// ─── Structured Data — Local Business ────────────────────────────────────────
const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Office Installations Mayen",
  alternateName: "OIM",
  description:
    "Professional office furniture installation, setup, and relocation services in Atlanta, GA since 2018.",
  url: siteUrl,
  telephone: "+1-470-595-0121",
  email: "oiminstallllc@gmail.com",
  foundingDate: "2018",
  areaServed: {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: 33.749,
      longitude: -84.388,
    },
    geoRadius: "80000",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Atlanta",
    addressRegion: "GA",
    addressCountry: "US",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:00",
      closes: "18:00",
    },
  ],
  priceRange: "$$",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Office Furniture Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Office Furniture Installation" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Office Setup & Reconfiguration" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Furniture Disassembly & Moving" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Commercial Projects" } },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#f4f6f8] text-[#0d1b2a]">
        {children}
      </body>
    </html>
  );
}
