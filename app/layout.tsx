import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://seashells-holyland.com"),
  title: {
    default: "Sea Shells from the Holy Land — Eco-Luxe Mediterranean Keepsakes",
    template: "%s | Sea Shells from the Holy Land",
  },
  description:
    "Premium jewelry and meaningful gifts inspired by Mediterranean sea shell forms. Designed with reverence for nature, place, and memory.",
  keywords: [
    "eco-luxe jewelry",
    "sustainable jewelry",
    "mediterranean sea shells",
    "holy land keepsakes",
    "recycled gold jewelry",
    "recycled silver charms",
  ],
  authors: [{ name: "Tamir Shina", url: "https://seashells-holyland.com" }],
  creator: "Tamir Shina",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://seashells-holyland.com",
    siteName: "Sea Shells from the Holy Land",
    title: "Sea Shells from the Holy Land — Eco-Luxe Mediterranean Keepsakes",
    description:
      "Premium jewelry and meaningful gifts inspired by Mediterranean sea shell forms. Designed with reverence for nature, place, and memory.",
    images: [
      {
        url: "/images/hero.png",
        width: 1200,
        height: 630,
        alt: "Mediterranean coastal scene with sea shells concept",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sea Shells from the Holy Land — Eco-Luxe Mediterranean Keepsakes",
    description:
      "Premium jewelry and meaningful gifts inspired by Mediterranean sea shell forms. Designed with reverence for nature, place, and memory.",
    images: ["/images/hero.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body>
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
