import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cog&Bit – Soluções Digitais",
  description: "Landing pages, sites profissionais e soluções sob medida.",
  icons: { icon: "/favicon.ico" },
  openGraph: {
    title: "Cog&Bit – Soluções Digitais",
    description: "Criamos sites modernos e responsivos.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Space+Grotesk:wght@600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  );
}
