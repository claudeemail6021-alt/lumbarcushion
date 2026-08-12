import type { MetadataRoute } from "next";
import { getAllProducts } from "@/data/products";

const blogSlugs = [
  "lumbar-support-guide",
  "best-lumbar-cushion-for-car",
  "best-lumbar-cushion-for-office-chair",
  "best-lumbar-support-for-back-pain",
  "how-to-sit-with-lumbar-support",
  "lower-back-stretches-desk-workers",
  "lumbar-support-for-gaming",
  "lumbar-support-for-pregnancy",
  "lumbar-support-for-travel",
  "lumbar-support-standing-desk",
  "lumbar-support-vs-back-brace",
  "lumbar-support-while-driving",
  "memory-foam-vs-lumbar-roll",
  "office-chair-back-pain",
  "physical-therapist-recommended-lumbar-support",
  "best-sitting-positions-lower-back-pain",
  "office-chair-vs-lumbar-cushion",
    "best-lumbar-support-gifts-2026",
];

const staticBlogSlugs = [
  "exercises-for-lower-back-pain-from-sitting",
  "lumbar-spine-anatomy-guide",
  "why-lower-back-hurts-when-sitting",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://lumbarcushion.com";
  const products = getAllProducts();

  return [
    { url: base, lastModified: new Date(), changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/top-10`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/blog`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/contact`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.4 },
    { url: `${base}/affiliate-disclosure`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.3 },
    { url: `${base}/privacy-policy`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.3 },
    { url: `${base}/terms`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.3 },
    ...products.map((p) => ({ url: `${base}/reviews/${p.slug}`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.85 })),
    ...blogSlugs.map((slug) => ({ url: `${base}/blog/${slug}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.75 })),
    ...staticBlogSlugs.map((slug) => ({ url: `${base}/blog/${slug}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.75 })),
  ];
}
