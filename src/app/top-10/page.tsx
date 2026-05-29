import type { Metadata } from "next";
import Link from "next/link";
import { ExternalLink, Check, X } from "lucide-react";
import { getAllProducts } from "@/data/products";
import StarRating from "@/components/StarRating";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import { amazonLink } from "@/lib/utils";

export const metadata: Metadata = {
  title: "10 Best Lumbar Support Cushions of 2026 (Office, Car & Travel)",
  description: "Expert-ranked top 10 lumbar support cushions for 2026. Tested for back pain relief, durability, and real-world use in office chairs, cars, and travel.",
  alternates: { canonical: "https://lumbarcushion.com/top-10" },
};

export default function Top10Page() {
  const products = getAllProducts();
  const jsonLd = {
    "@context": "https://schema.org", "@type": "ItemList",
    name: "10 Best Lumbar Support Cushions 2026", url: "https://lumbarcushion.com/top-10",
    numberOfItems: products.length,
    itemListElement: products.map((p, i) => ({ "@type": "ListItem", position: i+1, name: p.name, url: `https://lumbarcushion.com/reviews/${p.slug}` })),
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className="section-padding bg-navy-50">
        <div className="container-custom text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-navy-900 mb-4">10 Best Lumbar Cushions of 2026</h1>
          <p className="text-lg text-navy-600 max-w-2xl mx-auto mb-4">Tested for back pain relief, support quality, durability, and value. For office, car, and travel.</p>
          <AffiliateDisclosure />
        </div>
      </section>
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <div className="space-y-12">
            {products.map((p) => (
              <article key={p.id} className="rounded-2xl border border-navy-100 overflow-hidden shadow-card">
                <div className={`px-6 py-4 flex items-center justify-between ${p.rank === 1 ? "bg-navy-700 text-white" : "bg-navy-50"}`}>
                  <div className="flex items-center gap-3">
                    <span className={`text-2xl font-serif font-bold ${p.rank === 1 ? "text-white" : "text-navy-600"}`}>#{p.rank}</span>
                    <div>
                      <h2 className={`font-serif text-xl font-bold ${p.rank === 1 ? "text-white" : "text-navy-900"}`}>{p.name}</h2>
                      <span className={`text-sm ${p.rank === 1 ? "text-white/80" : "text-navy-500"}`}>{p.brand} · {p.cushionType}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className={`text-xl font-bold ${p.rank === 1 ? "text-white" : "text-navy-900"}`}>{p.price}</span>
                    <span className={`block text-xs ${p.rank === 1 ? "text-white/70" : "text-navy-400"}`}>{p.priceRange}</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <StarRating rating={p.rating} reviewCount={p.reviewCount} size="sm" />
                        <div className="flex flex-wrap gap-1">
                          {p.bestFor.map(b => <span key={b} className="text-xs bg-teal-50 text-teal-700 px-2 py-0.5 rounded-full">{b}</span>)}
                        </div>
                      </div>
                      <p className="text-navy-700 leading-relaxed mb-4">{p.shortDescription}</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <h4 className="text-xs font-bold text-green-700 uppercase tracking-wide mb-2">Pros</h4>
                          {p.pros.map((pro,i) => <div key={i} className="flex items-start gap-2 text-sm text-navy-700 mb-1"><Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0"/>{pro}</div>)}
                        </div>
                        <div>
                          <h4 className="text-xs font-bold text-red-500 uppercase tracking-wide mb-2">Cons</h4>
                          {p.cons.map((con,i) => <div key={i} className="flex items-start gap-2 text-sm text-navy-700 mb-1"><X className="h-4 w-4 text-red-400 mt-0.5 flex-shrink-0"/>{con}</div>)}
                        </div>
                      </div>
                    </div>
                    <div className="md:w-48 flex flex-col gap-3">
                      <Link href={`/reviews/${p.slug}`} className="block text-center px-4 py-2.5 border-2 border-navy-600 text-navy-600 font-semibold rounded-full hover:bg-navy-50 transition-colors text-sm">Full Review</Link>
                      <a href={amazonLink(p.asin)} target="_blank" rel="noopener noreferrer nofollow"
                        className="flex items-center justify-center gap-2 px-4 py-2.5 bg-navy-700 text-white font-bold rounded-full hover:bg-navy-800 transition-colors text-sm">
                        Buy on Amazon <ExternalLink className="h-4 w-4"/>
                      </a>
                      <p className="text-xs text-navy-400 text-center">Price may vary. Check for deals.</p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
