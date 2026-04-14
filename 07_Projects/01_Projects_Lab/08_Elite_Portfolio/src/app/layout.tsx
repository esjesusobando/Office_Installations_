import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Sofía - Modelo & Empresaria",
    default: "Sofía - Modelo & Empresaria",
  },
  description: "Modelo profesional y empresaria. Compartiendo elegancia y glamour con el mundo. Portafolio de campañas internacionales, editoriales y contenido premium.",
  keywords: ["modelo", "modelo profesional", "empresaria", "portafolio", "moda", "belleza", "campañas", "editorial", "influencer"],
  authors: [{ name: "Sofía" }],
  openGraph: {
    title: "Sofía - Modelo & Empresaria",
    description: "Compartiendo elegancia y glamour con el mundo.",
    type: "website",
    locale: "es_ES",
    url: "https://sofia-model.com",
    siteName: "Sofía Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sofía - Modelo & Empresaria",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sofía - Modelo & Empresaria",
    description: "Compartiendo elegancia y glamour con el mundo.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${inter.variable} ${outfit.variable} antialiased bg-zinc-50 text-zinc-950 dark:bg-zinc-950 dark:text-zinc-50`}>
        {children}
      </body>
    </html>
  );
}