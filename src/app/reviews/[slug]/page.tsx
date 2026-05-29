import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ExternalLink, Check, X, ChevronRight } from "lucide-react";
import { getProductBySlug, getAllProducts } from "@/data/products";
import StarRating from "@/components/StarRating";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import { amazonLink } from "@/lib/utils";

export async function generateStaticParams() {
  return getAllProducts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};
  return {
    title: `${product.name} Review (${new Date().getFullYear()}) — Is It Worth It?`,
    description: `In-depth review of the ${product.name}. Support quality, durability, pros and cons, and who it's best for. Rating: ${product.rating}/5.`,
    alternates: { canonical: `https://lumbarcushion.com/reviews/${slug}` },
  };
}

export default async function ReviewPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();
  const allProducts = getAllProducts();
  const related = allProducts.filter(p => p.slug !== slug).slice(0, 3);

  const reviewJsonLd = {
    "@context": "https://schema.org", "@type": "Review",
    name: `${product.name} Review`,
    reviewBody: product.shortDescription,
    reviewRating: { "@type": "Rating", ratingValue: product.rating, bestRating: 5, worstRating: 1 },
    author: { "@type": "Organization", name: "LumbarCushion Editorial Team" },
    itemReviewed: {
      "@type": "Product", name: product.name,
      brand: { "@type": "Brand", name: product.brand },
      offers: { "@type": "Offer", price: product.price.replace("$",""), priceCurrency: "USD" },
      aggregateRating: { "@type": "AggregateRating", ratingValue: product.rating, reviewCount: product.reviewCount, bestRating: 5 },
    },
  };

  const faqJsonLd = product.faq.length > 0 ? {
    "@context": "https://schema.org", "@type": "FAQPage",
    mainEntity: product.faq.map(f => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })),
  } : null;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewJsonLd) }} />
      {faqJsonLd && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />}
      <div className="bg-navy-50 border-b border-navy-100">
        <div className="container-custom py-3">
          <nav className="flex items-center gap-2 text-sm text-navy-500">
            <Link href="/" className="hover:text-teal-500">Home</Link>
            <ChevronRight className="h-3 w-3"/>
            <Link href="/top-10" className="hover:text-teal-500">Reviews</Link>
            <ChevronRight className="h-3 w-3"/>
            <span className="text-navy-700 font-medium">{product.name}</span>
          </nav>
        </div>
      </div>
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <span className="text-xs uppercase tracking-wider font-semibold text-teal-600">{product.cushionType}</span>
              <h1 className="font-serif text-3xl md:text-4xl font-bold text-navy-900 mb-4">{product.name} Review</h1>
              <div className="flex flex-wrap items-center gap-4 mb-4">
                <StarRating rating={product.rating} reviewCount={product.reviewCount} size="lg" />
              </div>
              <AffiliateDisclosure />
              <p className="text-lg text-navy-700 leading-relaxed my-6">{product.shortDescription}</p>
              <div className="mb-8">
                <h2 className="font-serif text-xl font-bold text-navy-900 mb-3">Best For</h2>
                <div className="flex flex-wrap gap-2">
                  {product.bestFor.map(b => <span key={b} className="px-3 py-1 bg-teal-50 text-teal-700 rounded-full text-sm font-medium">{b}</span>)}
                </div>
              </div>
              <div className="mb-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="p-5 bg-green-50 rounded-2xl">
                  <h2 className="font-semibold text-green-800 mb-3 flex items-center gap-2"><Check className="h-5 w-5"/>Pros</h2>
                  {product.pros.map((pro,i) => <div key={i} className="flex items-start gap-2 text-sm text-navy-700 mb-2"><Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0"/>{pro}</div>)}
                </div>
                <div className="p-5 bg-red-50 rounded-2xl">
                  <h2 className="font-semibold text-red-700 mb-3 flex items-center gap-2"><X className="h-5 w-5"/>Cons</h2>
                  {product.cons.map((con,i) => <div key={i} className="flex items-start gap-2 text-sm text-navy-700 mb-2"><X className="h-4 w-4 text-red-400 mt-0.5 flex-shrink-0"/>{con}</div>)}
                </div>
              </div>
              <div className="mb-8">
                <h2 className="font-serif text-2xl font-bold text-navy-900 mb-4">Feature Breakdown</h2>
                <div className="space-y-3">
                  {Object.entries(product.featureBreakdown).map(([key, val]) => (
                    <div key={key} className="p-4 bg-navy-50 rounded-xl border border-navy-100">
                      <span className="font-semibold text-navy-900 text-sm">{key}</span>
                      <p className="text-sm text-navy-600 mt-1">{val}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mb-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="p-5 bg-teal-50 rounded-2xl">
                  <h3 className="font-bold text-teal-700 mb-2">Best For</h3>
                  <p className="text-sm text-navy-700">{product.whoItsFor}</p>
                </div>
                <div className="p-5 bg-navy-100 rounded-2xl">
                  <h3 className="font-bold text-navy-600 mb-2">Not Ideal For</h3>
                  <p className="text-sm text-navy-700">{product.notFor}</p>
                </div>
              </div>
              <div className="mb-8">
                <h2 className="font-serif text-2xl font-bold text-navy-900 mb-4">How to Use</h2>
                <p className="text-navy-700 leading-relaxed">{product.howToUse}</p>
              </div>
              {product.faq.length > 0 && (
                <div className="mb-8">
                  <h2 className="font-serif text-2xl font-bold text-navy-900 mb-6">FAQ</h2>
                  <div className="space-y-4">
                    {product.faq.map((f,i) => (
                      <div key={i} className="p-5 bg-navy-50 rounded-xl border border-navy-100">
                        <h3 className="font-semibold text-navy-900 mb-2">{f.question}</h3>
                        <p className="text-sm text-navy-700 leading-relaxed">{f.answer}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <div className="bg-white rounded-2xl border border-navy-100 shadow-card p-6">
                  <div className="h-32 bg-gradient-to-br from-navy-50 to-teal-50 rounded-xl mb-4 flex items-center justify-center">
                    <span className="font-serif text-navy-400 font-bold">{product.brand}</span>
                  </div>
                  <h3 className="font-serif text-lg font-bold text-navy-900 mb-1">{product.name}</h3>
                  <StarRating rating={product.rating} reviewCount={product.reviewCount} size="sm" />
                  <div className="my-4 flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-navy-900">{product.price}</span>
                    <span className="text-sm text-navy-400">{product.priceRange}</span>
                  </div>
                  <a href={amazonLink(product.asin)} target="_blank" rel="noopener noreferrer nofollow"
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-navy-700 text-white font-bold rounded-full hover:bg-navy-800 transition-colors mb-3">
                    Buy on Amazon <ExternalLink className="h-4 w-4"/>
                  </a>
                  <p className="text-xs text-navy-400 text-center">Price checked regularly.</p>
                </div>
                <div className="bg-teal-50 rounded-2xl p-5">
                  <h3 className="font-bold text-navy-900 mb-4">Quick Specs</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between"><span className="text-navy-500">Type</span><span className="font-medium text-navy-800">{product.cushionType}</span></div>
                    <div className="flex justify-between"><span className="text-navy-500">Material</span><span className="font-medium text-navy-800">{product.material}</span></div>
                    <div className="flex justify-between"><span className="text-navy-500">Price</span><span className="font-medium text-navy-800">{product.price}</span></div>
                  </div>
                </div>
                {related.length > 0 && (
                  <div className="bg-white rounded-2xl border border-navy-100 p-5">
                    <h3 className="font-bold text-navy-900 mb-4">Also Consider</h3>
                    <div className="space-y-3">
                      {related.map(rp => (
                        <Link key={rp.id} href={`/reviews/${rp.slug}`} className="flex items-center gap-3 p-3 bg-navy-50 rounded-xl hover:bg-teal-50 transition-colors">
                          <span className="text-xs font-bold text-navy-500 w-6">#{rp.rank}</span>
                          <div className="flex-1 min-w-0">
                            <p className="text-xs font-semibold text-navy-900 truncate">{rp.name}</p>
                            <StarRating rating={rp.rating} size="sm" showNumber={false} />
                          </div>
                          <span className="text-xs font-bold text-navy-700">{rp.price}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
