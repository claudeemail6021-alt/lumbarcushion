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
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {process.env.NEXT_PUBLIC_GA4_ID && (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA4_ID}`} strategy="afterInteractive" />
            <Script id="ga4-init" strategy="afterInteractive">{`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${process.env.NEXT_PUBLIC_GA4_ID}');`}</Script>
          </>
        )}
        {process.env.NEXT_PUBLIC_ADSENSE_ID && (
          <Script async src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_ADSENSE_ID}`} crossOrigin="anonymous" strategy="afterInteractive" />
        )}
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
