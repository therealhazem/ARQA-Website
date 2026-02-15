import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Separator from "@/components/Separator";
import Footer from "@/components/Footer";
import Whatsapp from "@/components/Whatsapp";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://arqamedical.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "ARQA Medical | Premium Medical Supplies & Healthcare Products",
    template: "%s | ARQA Medical",
  },
  description:
    "ARQA Medical Import & Export delivers premium medical supplies to healthcare professionals across Egypt and beyond. Quality gloves, masks, thermometers, and consumables you can trust.",
  keywords: [
    "medical supplies",
    "healthcare products",
    "Egypt medical",
    "medical gloves",
    "surgical masks",
    "ARQA Medical",
    "medical equipment",
    "healthcare distribution",
  ],
  authors: [{ name: "ARQA Medical Import & Export" }],
  creator: "ARQA Medical",
  publisher: "ARQA Medical",
  formatDetection: { email: false, address: false, telephone: false },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "ARQA Medical",
    title: "ARQA Medical | Premium Medical Supplies & Healthcare Products",
    description:
      "Premium medical supplies for healthcare professionals. Quality you can trust, service you can rely on.",
    images: [{ url: "/ARQA Logo.svg", width: 600, height: 200, alt: "ARQA Medical" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ARQA Medical | Premium Medical Supplies",
    description: "Premium medical supplies for healthcare professionals across Egypt and beyond.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  icons: {
    icon: [{ url: "/ARQA Logo.svg", type: "image/svg+xml" }],
    shortcut: "/ARQA Logo.svg",
    apple: "/ARQA Logo.svg",
  },
  manifest: "/manifest.webmanifest",
  category: "Healthcare",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="preconnect" href="https://cdn.sanity.io" />
        <link rel="preconnect" href="https://jhejul37.api.sanity.io" />
        <link rel="preconnect" href="https://res.cloudinary.com" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <Separator /> {/* Navbar Separator */}
        <main id="main" className="min-h-[65vh]">
          {children}
        </main>
        <Whatsapp />
        <Footer />
      </body>
    </html>
  );
}
