import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    template: "%s | Elena - Modelo Internacional",
    default: "Elena - Modelo Internacional",
  },
  description: "Portfolio profesional de modelo internacional. Campañas, editoriales y contenido de moda.",
  keywords: ["modelo", "portafolio", "moda", "editorial", "fashion model"],
  authors: [{ name: "Elena" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="antialiased bg-cream text-charcoal">
        {children}
      </body>
    </html>
  );
}