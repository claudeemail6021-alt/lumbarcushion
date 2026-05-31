import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://lumbarcushion.com"),
  title: { default: "LumbarCushion — Best Lumbar Support Cushion Reviews 2026", template: "%s | LumbarCushion" },
  description: "Expert reviews of the best lumbar support cushions for office chairs, car seats, and travel. End back pain with the right support.",
  keywords: ["lumbar support cushion", "back support pillow", "office chair cushion", "lumbar pillow", "back pain relief 2026"],
  authors: [{ name: "LumbarCushion Editorial Team" }],
  openGraph: {
    type: "website", locale: "en_US", url: "https://lumbarcushion.com", siteName: "LumbarCushion",
    title: "LumbarCushion — Best Lumbar Support Cushion Reviews 2026",
    description: "Expert-ranked lumbar support cushions for office, car, and travel. End lower back pain.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "LumbarCushion — Lumbar Support Reviews" }],
  },
  twitter: { card: "summary_large_image", title: "LumbarCushion — Best Lumbar Cushions 2026", description: "Expert reviews of lumbar support cushions." },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://lumbarcushion.com" },
  verification: { google: "wWxUJKO7_5badfwWP3Zw7M3MK_NrT5ycEgwAbOeCnqc" },
  other: { "google-adsense-account": "ca-pub-3024315445700130" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Google AdSense */}
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3024315445700130" crossOrigin="anonymous"></script>
        {/* Google Analytics */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-D06T991W1R" strategy="afterInteractive" />
        <Script id="ga4-init" strategy="afterInteractive">{`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-D06T991W1R');`}</Script>
        {/* Google Ads */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=AW-18184715619" strategy="afterInteractive" />
        <Script id="google-ads" strategy="afterInteractive">{`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','AW-18184715619');`}</Script>
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
