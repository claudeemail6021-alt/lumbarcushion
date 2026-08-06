import AdUnit from "@/components/AdUnit";
import type { Metadata } from "next";
import Link from "next/link";
import { ExternalLink, Check, X } from "lucide-react";
import { getAllProducts } from "@/data/products";
import StarRating from "@/components/StarRating";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import { amazonLink } from "@/lib/utils";

export const metadata: Metadata = {
  title: "10 Best Lumbar Support Cushions of 2026 (Office, Car & Travel)",
  description: "Compare popular lumbar support cushions for 2026. Browse highly-rated options for real-world use in office chairs, cars, and travel.",
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


      <div className="container-custom max-w-4xl py-2"><AdUnit slot="8199600350" /></div>
      {/* Buying Guide */}
      <section className="section-padding bg-navy-50">
        <div className="container-custom max-w-4xl">
          <h2 className="font-serif text-3xl font-bold text-navy-900 mb-8 text-center">
            How to Choose the Right Lumbar Cushion
          </h2>
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-6 border border-navy-100">
              <h3 className="font-bold text-navy-900 text-lg mb-3">1. Match Firmness to Your Pain Level</h3>
              <p className="text-navy-700 leading-relaxed">
                Firmness is the most important variable and the most commonly misjudged. Softer cushions feel comfortable initially but can bottom out under sustained weight, providing no actual lumbar support after an hour. Firmer cushions provide better structural support but can create pressure points for people with acute pain sensitivity. As a rule: if your pain is mild to moderate and you need all-day support, medium-firm is optimal. If you have significant acute pain, start softer and work toward firmer as symptoms settle.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-navy-100">
              <h3 className="font-bold text-navy-900 text-lg mb-3">2. Consider Your Primary Seating Environment</h3>
              <p className="text-navy-700 leading-relaxed">
                Not all lumbar cushions work equally across environments. Office chairs typically have flat or slightly curved backs — standard cushions work well. Car seats have pronounced lateral bolsters and headrest structures that require car-specific strap routing. Gaming chairs have high backs that suit taller cushions. Travel contexts require compact, lightweight designs or inflatable options. Buying an office cushion for your car (or vice versa) is the most common mismatch — the strap geometry simply won't work correctly.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-navy-100">
              <h3 className="font-bold text-navy-900 text-lg mb-3">3. Foam Density Determines Durability</h3>
              <p className="text-navy-700 leading-relaxed">
                Foam density (measured in pounds per cubic foot) is the single best predictor of how long a cushion will maintain its support. Low-density foam (under 2 lbs/ft³) will compress permanently within weeks of daily use. High-density foam (3.5–4.5 lbs/ft³) can last 3–5 years. This specification is rarely front-and-center in marketing materials — you often have to dig into the product specs or look at long-term durability reviews (90+ days of verified use). If a product doesn't disclose foam density, treat it as a yellow flag.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-navy-100">
              <h3 className="font-bold text-navy-900 text-lg mb-3">4. Strap System Quality Matters More Than You Think</h3>
              <p className="text-navy-700 leading-relaxed">
                A lumbar cushion that slides out of position every 20 minutes provides no consistent benefit. The strap system determines whether the cushion actually stays at the L4–L5 region where it's most effective. Single elastic straps work on most fabric chairs but tend to slip on smooth leather or PU surfaces. Dual-strap systems (two straps rather than one) provide significantly better stability, particularly for leather gaming chairs and car seats. Velcro attachments add grip but can damage delicate upholstery over time.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-navy-100">
              <h3 className="font-bold text-navy-900 text-lg mb-3">5. Positioning: Most People Place It Too High</h3>
              <p className="text-navy-700 leading-relaxed">
                The lumbar curve you&apos;re supporting sits at approximately belt-line height — L4–L5 — not mid-back. The most common mistake is placing the cushion too high (at the mid-back) because it feels intuitively comfortable, when in fact it&apos;s compressing the thoracic spine rather than supporting the lumbar curve. The widest part of the cushion should contact your back just above your belt line, pressing gently inward to fill the natural gap between your lower back and the chair. If you feel it in your shoulder blades, it&apos;s too high.
              </p>
            </div>
          </div>
          <div className="mt-10 bg-white rounded-2xl p-6 border border-teal-100">
            <h3 className="font-bold text-navy-900 text-lg mb-3">Our Recommendation Framework</h3>
            <ul className="space-y-2 text-navy-700">
              <li className="flex items-start gap-2"><span className="text-teal-600 font-bold flex-shrink-0">→</span><span><strong>Budget ($20–35):</strong> ComfiLife or LoveHome. Both have high-density foam that outlasts cheaper alternatives. The gap in performance vs. premium options is smaller than the price gap.</span></li>
              <li className="flex items-start gap-2"><span className="text-teal-600 font-bold flex-shrink-0">→</span><span><strong>Mid-range ($35–60):</strong> Relax Support RS1 or Cushion Lab. Worth the premium if you sit 8+ hours daily or have significant back pain.</span></li>
              <li className="flex items-start gap-2"><span className="text-teal-600 font-bold flex-shrink-0">→</span><span><strong>Premium ($60+):</strong> Tempur-Pedic. Only justified for chronic pain sufferers who have tried mid-range options and need TEMPUR material&apos;s unique pressure-distribution properties.</span></li>
              <li className="flex items-start gap-2"><span className="text-teal-600 font-bold flex-shrink-0">→</span><span><strong>For car use:</strong> Sabar or Samsonite — both engineered for vehicle seat geometry rather than office chairs.</span></li>
              <li className="flex items-start gap-2"><span className="text-teal-600 font-bold flex-shrink-0">→</span><span><strong>For travel:</strong> TravelRest inflatable — the only option that packs flat and works on airplane seats.</span></li>
            </ul>
          </div>
        </div>
      </section>

      {/* Related reading */}
      <section className="section-padding bg-white border-t border-navy-100">
        <div className="container-custom max-w-4xl">
          <h2 className="font-serif text-2xl font-bold text-navy-900 mb-6">Related Guides</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { href: "/blog/best-sitting-positions-lower-back-pain", title: "Best Sitting Positions for Lower Back Pain" },
              { href: "/blog/office-chair-vs-lumbar-cushion", title: "Office Chair vs. Lumbar Cushion: What Actually Works?" },
              { href: "/blog/how-to-sit-with-lumbar-support", title: "How to Position Lumbar Support Correctly" },
            ].map((link) => (
              <a key={link.href} href={link.href} className="block p-4 rounded-xl border border-navy-100 hover:border-teal-300 hover:bg-teal-50 transition-colors">
                <p className="text-sm font-semibold text-navy-800">{link.title}</p>
                <p className="text-xs text-teal-600 mt-1">Read guide →</p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
