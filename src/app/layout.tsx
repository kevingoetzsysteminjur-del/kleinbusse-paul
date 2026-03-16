import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PreloaderWrapper from "@/components/PreloaderWrapper";
import ClientWidgets from "@/components/ClientWidgets";

const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400","500","600","700","800"], variable: "--font-heading", display: "swap" });
const dmSans = DM_Sans({ subsets: ["latin"], weight: ["300","400","500","600","700"], variable: "--font-body", display: "swap" });

export const metadata: Metadata = {
  title: "H. Paul GmbH – Kleinbusvermietung & Behindertentransport Mosbach",
  description: "Kleinbusvermietung, Behindertentransport und Flughafentransfer in Mosbach. Busse mit bis zu 28 Sitzen, Rollstuhlfahrzeuge, mit oder ohne Fahrer. Seit über 20 Jahren.",
  keywords: "Kleinbus mieten Mosbach, Busvermietung, Behindertentransport, Rollstuhlfahrten, Flughafentransfer, Klassenfahrt Bus, H. Paul GmbH",
  openGraph: {
    title: "H. Paul GmbH – Kleinbusvermietung Mosbach",
    description: "Ihr Mobilitätspartner seit über 20 Jahren. Kleinbusse, Behindertentransport, Flughafentransfer.",
    url: "https://kleinbusse-paul.de",
    siteName: "H. Paul GmbH",
    locale: "de_DE",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "H. Paul GmbH",
  "description": "Kleinbusvermietung, Behindertentransport und Flughafentransfer in Mosbach",
  "url": "https://kleinbusse-paul.de",
  "telephone": "+4962612526",
  "email": "info@kleinbusse-paul.de",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Am Eisweiher 14",
    "addressLocality": "Mosbach",
    "postalCode": "74821",
    "addressCountry": "DE"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "49.3629",
    "longitude": "9.1456"
  },
  "openingHours": "Mo-Fr 08:00-17:00",
  "priceRange": "€€",
  "image": "https://kleinbusse-paul.de/wp-content/uploads/2017/11/logo.jpg",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={`${playfair.variable} ${dmSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <PreloaderWrapper />
        <Navbar />
        {children}
        <Footer />
        <ClientWidgets />
      </body>
    </html>
  );
}
