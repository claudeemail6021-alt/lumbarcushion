import type { MetadataRoute } from "next";
import { getAllProducts } from "@/data/products";
import { getAllBlogSlugs } from "@/lib/mdx";
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = "https://lumbarcushion.com";
  const products = getAllProducts();
  const blogSlugs = await getAllBlogSlugs();
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
    ...blogSlugs.map(slug => ({ url: `${base}/blog/${slug}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 })),
  ];
}
