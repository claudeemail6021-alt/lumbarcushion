import type { MetadataRoute } from "next";
import { getAllProducts } from "@/data/products";
export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://lumbarcushion.com";
  const products = getAllProducts();
  return [
    { url: base, lastModified: new Date(), changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/top-10`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/blog`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
    { url: `${base}/contact`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.4 },
    { url: `${base}/affiliate-disclosure`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.3 },
    { url: `${base}/privacy-policy`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.3 },
    { url: `${base}/terms`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.3 },
    ...products.map(p => ({ url: `${base}/reviews/${p.slug}`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.85 })),
    ...[
      "office-chair-back-pain",
      "best-lumbar-cushion-for-car",
      "memory-foam-vs-lumbar-roll",
      "lumbar-support-for-travel",
      "lumbar-support-guide",
      "best-lumbar-cushion-for-office-chair",
      "lumbar-support-while-driving",
      "how-to-sit-with-lumbar-support",
      "lumbar-support-standing-desk",
      "lower-back-stretches-desk-workers",
      "lumbar-support-for-pregnancy",
      "lumbar-support-for-gaming",
      "best-lumbar-support-for-back-pain",
      "lumbar-support-vs-back-brace",
      "physical-therapist-recommended-lumbar-support",
    ].map(slug => ({ url: `${base}/blog/${slug}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 })),
    { url: `${base}/methodology`, priority: 0.5, changeFrequency: "monthly" as const },
];
}
