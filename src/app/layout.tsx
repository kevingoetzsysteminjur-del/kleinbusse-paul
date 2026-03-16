import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PreloaderWrapper from "@/components/PreloaderWrapper";

const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400","500","600","700","800"], variable: "--font-heading", display: "swap" });
const dmSans = DM_Sans({ subsets: ["latin"], weight: ["300","400","500","600","700"], variable: "--font-body", display: "swap" });

export const metadata: Metadata = {
  title: "H. Paul GmbH – Kleinbusvermietung & Behindertentransport Mosbach",
  description: "Kleinbusvermietung, Behindertentransport und Flughafentransfer in Mosbach. H. Paul GmbH – Ihr zuverlässiger Mobilitätspartner seit über 20 Jahren.",
  keywords: "Kleinbus mieten Mosbach, Behindertentransport Mosbach, Flughafentransfer Mosbach, H. Paul GmbH",
  openGraph: { title: "H. Paul GmbH", description: "Ihr Mobilitätspartner in Mosbach.", type: "website", locale: "de_DE" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={`${playfair.variable} ${dmSans.variable}`}>
      <body><PreloaderWrapper /><Navbar />{children}<Footer /></body>
    </html>
  );
}
