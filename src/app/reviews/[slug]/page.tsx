import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check, X, ChevronRight, ExternalLink, Star, ArrowLeft } from "lucide-react";
import { getAllProducts, getProductBySlug } from "@/data/products";

export async function generateStaticParams() {
  return getAllProducts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Review Not Found" };
  return {
    title: `${product.name} Review 2026 — Is It Worth It?`,
    description: `Our in-depth ${product.name} review covers performance, durability, who it's best for, and whether it's worth the price. Updated for 2026.`,
    alternates: { canonical: `https://lumbarcushion.com/reviews/${slug}` },
  };
}

export default async function ReviewPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = getProductBySlug(slug);
  if (!p) notFound();

  const allProducts = getAllProducts();
  const currentIndex = allProducts.findIndex((x) => x.slug === slug);
  const prevProduct = currentIndex > 0 ? allProducts[currentIndex - 1] : null;
  const nextProduct = currentIndex < allProducts.length - 1 ? allProducts[currentIndex + 1] : null;

  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Review",
    name: `${p.name} Review`,
    reviewBody: p.shortDescription,
    reviewRating: {
      "@type": "Rating",
      ratingValue: p.rating,
      bestRating: 5,
      worstRating: 1,
    },
    author: { "@type": "Organization", name: "LumbarCushion.com" },
    itemReviewed: {
      "@type": "Product",
      name: p.name,
      image: p.imageUrl,
      brand: { "@type": "Brand", name: p.brand },
      offers: {
        "@type": "Offer",
        price: p.price.replace("$", ""),
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: p.rating,
        reviewCount: p.reviewCount,
        bestRating: 5,
      },
    },
  };

  const faqSchema = p.faq.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: p.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  } : null;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}

      {/* Breadcrumb */}
      <div className="bg-navy-50 border-b border-navy-100">
        <div className="container-custom py-3">
          <nav className="flex items-center gap-2 text-sm text-navy-500 flex-wrap">
            <Link href="/" className="hover:text-teal-600 transition-colors">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <Link href="/top-10" className="hover:text-teal-600 transition-colors">Top 10 Lumbar Cushions</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-navy-700 font-medium">{p.name}</span>
          </nav>
        </div>
      </div>

      <article>
        {/* Hero */}
        <section className="section-padding bg-white border-b border-navy-100">
          <div className="container-custom max-w-4xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-teal-600 bg-teal-50 px-3 py-1 rounded-full">
                #{p.rank} Ranked
              </span>
              <span className="text-xs text-navy-400">{p.cushionType} · {p.material}</span>
            </div>

            <h1 className="font-serif text-3xl md:text-4xl font-bold text-navy-900 mb-3 leading-tight">
              {p.name} Review (2026)
            </h1>
            <p className="text-lg text-navy-600 leading-relaxed mb-6">{p.shortDescription}</p>

            {p.imageUrl && (
              <div className="mb-6 bg-navy-50 rounded-2xl border border-navy-100 p-4 max-w-xs">
                <img src={p.imageUrl} alt={p.name} className="w-full h-auto object-contain" />
              </div>
            )}

            <div className="flex flex-wrap items-center gap-6 mb-6">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[1,2,3,4,5].map((star) => (
                    <Star key={star} className={`h-5 w-5 ${star <= Math.round(p.rating) ? "fill-amber-400 text-amber-400" : "text-gray-200"}`} />
                  ))}
                </div>
                <span className="font-bold text-navy-900">{p.rating}</span>
                <span className="text-navy-500 text-sm">({p.reviewCount.toLocaleString()} reviews)</span>
              </div>
              <div className="text-2xl font-bold text-navy-900">{p.price}</div>
              <span className="text-xs bg-navy-100 text-navy-600 px-2 py-1 rounded">{p.priceRange}</span>
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              {p.bestFor.map((b) => (
                <span key={b} className="text-sm bg-teal-50 text-teal-700 px-3 py-1 rounded-full font-medium">
                  ✓ Best for: {b}
                </span>
              ))}
            </div>

            <a
              href={`https://www.amazon.com/dp/${p.asin}?tag=asotv068-20`}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-500 text-navy-900 font-bold px-6 py-3 rounded-full transition-colors"
            >
              Check Price on Amazon <ExternalLink className="h-4 w-4" />
            </a>
            <p className="text-xs text-navy-400 mt-2">
              Price may vary. We earn a small commission on Amazon purchases — this doesn't affect our rankings.
            </p>
          </div>
        </section>

        {/* Quick verdict */}
        <section className="section-padding bg-navy-50">
          <div className="container-custom max-w-4xl">
            <h2 className="font-serif text-2xl font-bold text-navy-900 mb-6">Quick Verdict</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl border border-green-100 p-6">
                <h3 className="text-sm font-bold text-green-700 uppercase tracking-wide mb-4 flex items-center gap-2">
                  <Check className="h-4 w-4" /> What We Like
                </h3>
                <ul className="space-y-3">
                  {p.pros.map((pro, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-navy-700">
                      <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      {pro}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white rounded-2xl border border-red-100 p-6">
                <h3 className="text-sm font-bold text-red-600 uppercase tracking-wide mb-4 flex items-center gap-2">
                  <X className="h-4 w-4" /> What to Watch For
                </h3>
                <ul className="space-y-3">
                  {p.cons.map((con, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-navy-700">
                      <X className="h-4 w-4 text-red-400 mt-0.5 flex-shrink-0" />
                      {con}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Feature breakdown */}
        {Object.keys(p.featureBreakdown).length > 0 && (
          <section className="section-padding bg-white">
            <div className="container-custom max-w-4xl">
              <h2 className="font-serif text-2xl font-bold text-navy-900 mb-6">
                Feature Breakdown
              </h2>
              <div className="space-y-6">
                {Object.entries(p.featureBreakdown).map(([feature, description]) => (
                  <div key={feature} className="border-b border-navy-100 pb-6 last:border-0 last:pb-0">
                    <h3 className="font-bold text-navy-900 mb-2">{feature}</h3>
                    <p className="text-navy-700 leading-relaxed">{description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Who it's for / Not for */}
        <section className="section-padding bg-navy-50">
          <div className="container-custom max-w-4xl">
            <h2 className="font-serif text-2xl font-bold text-navy-900 mb-6">Who Should Buy This?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl p-6 border border-navy-100">
                <h3 className="font-bold text-teal-700 mb-3 flex items-center gap-2">
                  <Check className="h-5 w-5" /> Best For
                </h3>
                <p className="text-navy-700 leading-relaxed">{p.whoItsFor}</p>
              </div>
              <div className="bg-white rounded-2xl p-6 border border-navy-100">
                <h3 className="font-bold text-red-500 mb-3 flex items-center gap-2">
                  <X className="h-5 w-5" /> Not Ideal For
                </h3>
                <p className="text-navy-700 leading-relaxed">{p.notFor}</p>
              </div>
            </div>
          </div>
        </section>

        {/* How to use */}
        <section className="section-padding bg-white">
          <div className="container-custom max-w-4xl">
            <h2 className="font-serif text-2xl font-bold text-navy-900 mb-4">
              How to Use the {p.name}
            </h2>
            <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-6">
              <p className="text-navy-700 leading-relaxed">{p.howToUse}</p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        {p.faq.length > 0 && (
          <section className="section-padding bg-navy-50">
            <div className="container-custom max-w-4xl">
              <h2 className="font-serif text-2xl font-bold text-navy-900 mb-6">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {p.faq.map((item, i) => (
                  <details key={i} className="bg-white rounded-xl border border-navy-100 p-5 group">
                    <summary className="font-semibold text-navy-900 cursor-pointer list-none flex justify-between items-center">
                      {item.question}
                      <span className="text-teal-600 text-lg group-open:rotate-180 transition-transform ml-2 flex-shrink-0">▾</span>
                    </summary>
                    <p className="mt-3 text-navy-700 leading-relaxed text-sm">{item.answer}</p>
                  </details>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Buy CTA */}
        <section className="section-padding bg-white border-t border-navy-100">
          <div className="container-custom max-w-4xl text-center">
            <h2 className="font-serif text-2xl font-bold text-navy-900 mb-2">
              Ready to Try the {p.brand} {p.name.split(" ").slice(-2).join(" ")}?
            </h2>
            <p className="text-navy-600 mb-6">
              Ranked <strong>#{p.rank}</strong> in our lumbar support comparisons. {p.price} — {p.priceRange} category.
            </p>
            <a
              href={`https://www.amazon.com/dp/${p.asin}?tag=asotv068-20`}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-flex items-center gap-2 bg-navy-700 hover:bg-navy-800 text-white font-bold px-8 py-4 rounded-full transition-colors text-lg"
            >
              Check Price on Amazon <ExternalLink className="h-5 w-5" />
            </a>
            <p className="text-xs text-navy-400 mt-3">
              As an Amazon Associate we earn from qualifying purchases at no additional cost to you.
            </p>
          </div>
        </section>

        {/* Prev / Next navigation */}
        <nav className="border-t border-navy-100 bg-navy-50">
          <div className="container-custom max-w-4xl py-6 flex justify-between items-center gap-4">
            {prevProduct ? (
              <Link href={`/reviews/${prevProduct.slug}`} className="flex items-center gap-2 text-sm text-navy-600 hover:text-teal-600 transition-colors">
                <ArrowLeft className="h-4 w-4" />
                <div>
                  <div className="text-xs text-navy-400">Previous</div>
                  <div className="font-semibold">{prevProduct.name}</div>
                </div>
              </Link>
            ) : <div />}
            <Link href="/top-10" className="text-sm font-semibold text-teal-600 hover:text-teal-700">
              ← All Rankings
            </Link>
            {nextProduct ? (
              <Link href={`/reviews/${nextProduct.slug}`} className="flex items-center gap-2 text-sm text-navy-600 hover:text-teal-600 transition-colors text-right">
                <div>
                  <div className="text-xs text-navy-400">Next</div>
                  <div className="font-semibold">{nextProduct.name}</div>
                </div>
                <ChevronRight className="h-4 w-4" />
              </Link>
            ) : <div />}
          </div>
        </nav>
      </article>
    </>
  );
}
