import type { Metadata } from "next";
import Link from "next/link";
import { Armchair, Shield, Award, BookOpen } from "lucide-react";
import { getAllProducts } from "@/data/products";
import { getAllBlogPosts } from "@/lib/mdx";
import ComparisonTable from "@/components/ComparisonTable";
import ProductCard from "@/components/ProductCard";
import BlogCard from "@/components/BlogCard";
import NewsletterSignup from "@/components/NewsletterSignup";

export const metadata: Metadata = {
  title: "Best Lumbar Support Cushions 2026 — Expert Reviews | LumbarCushion",
  description: "We test and rank the best lumbar support cushions for office chairs, car seats, and travel. End lower back pain with the right support.",
  alternates: { canonical: "https://lumbarcushion.com" },
};

const jsonLd = {
  "@context": "https://schema.org", "@type": "WebSite",
  name: "LumbarCushion", url: "https://lumbarcushion.com",
  description: "Independent reviews of the best lumbar support cushions.",
};

const trustBadges = [
  { icon: Shield, label: "Ergonomist-Backed", desc: "Reviews informed by ergonomics research and physical therapy guidelines" },
  { icon: Award, label: "Independently Tested", desc: "No brand sponsorships — only honest rankings based on real performance" },
  { icon: Armchair, label: "All-Use Coverage", desc: "We cover office, car, and travel — finding the best cushion for every situation" },
  { icon: BookOpen, label: "Evidence-Based", desc: "Back pain guidance grounded in peer-reviewed biomechanics research" },
];

const useCases = [
  { emoji: "💼", title: "Office Chair", desc: "8+ hours of desk work calls for dedicated lumbar support. The right cushion can eliminate chronic back pain from prolonged sitting.", tip: "Look for: adjustable strap, memory foam, breathable cover" },
  { emoji: "🚗", title: "Car & Commute", desc: "Car seats are designed for a range of body types, not yours specifically. A lumbar cushion fills the gap and reduces driver fatigue.", tip: "Look for: car-specific strap routing, slim profile" },
  { emoji: "✈️", title: "Travel", desc: "Airplane and train seats offer virtually no lumbar support. An inflatable or compact travel cushion can transform a miserable long-haul.", tip: "Look for: inflatable, packs flat, attaches to seat" },
  { emoji: "🏠", title: "Home & Sofa", desc: "Sofas are notoriously bad for your back. A lumbar roll or wedge cushion brings ergonomic support to your relaxation time.", tip: "Look for: portable, no-strap design, washable cover" },
];

export default async function HomePage() {
  const products = getAllProducts();
  const blogPosts = await getAllBlogPosts();

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="section-padding" style={{ background: "linear-gradient(135deg, #F0F4F8 0%, #F0FAFA 50%, #F8FAFC 100%)" }}>
        <div className="container-custom text-center">
          <span className="inline-block px-4 py-1.5 bg-navy-100 text-navy-700 text-xs font-bold uppercase tracking-wider rounded-full mb-6">Updated for 2026</span>
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-navy-900 leading-tight mb-6">
            End Back Pain.<br /><span className="text-teal-500">Find Your Perfect Support.</span>
          </h1>
          <p className="text-lg text-navy-600 max-w-2xl mx-auto leading-relaxed mb-10">
            We independently test and rank the best lumbar support cushions for office chairs, car seats, and travel. Expert recommendations to help you sit pain-free.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/top-10" className="px-8 py-3.5 bg-navy-700 text-white font-bold rounded-full hover:bg-navy-800 transition-colors shadow-md">See Our Top 10 Picks →</Link>
            <Link href="/blog/lumbar-support-guide" className="px-8 py-3.5 bg-white text-navy-700 font-semibold rounded-full border border-navy-200 hover:border-teal-300 transition-colors">What Causes Back Pain? →</Link>
          </div>
          <div className="mt-8 flex items-center justify-center gap-6 text-sm text-navy-500">
            <span>✓ 8 cushions tested</span>
            <span>✓ Office, car & travel</span>
            <span>✓ No paid placements</span>
          </div>
        </div>
      </section>

      {/* Trust badges */}
      <section className="py-12 bg-white border-b border-navy-50">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {trustBadges.map((b) => (
              <div key={b.label} className="text-center p-4">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-navy-50 rounded-xl mb-3">
                  <b.icon className="h-6 w-6 text-navy-600" />
                </div>
                <h3 className="font-semibold text-sm text-navy-900 mb-1">{b.label}</h3>
                <p className="text-xs text-navy-500 leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="section-padding bg-navy-50">
        <div className="container-custom">
          <div className="text-center mb-10">
            <h2 className="font-serif text-3xl font-bold text-navy-900 mb-3">2026 Lumbar Cushion Rankings</h2>
            <p className="text-navy-600 max-w-xl mx-auto">Every cushion ranked on support quality, durability, versatility, and value — for office, car, and travel use.</p>
          </div>
          <ComparisonTable products={products.slice(0, 8)} />
          <div className="text-center mt-8">
            <Link href="/top-10" className="inline-flex items-center gap-2 px-6 py-3 bg-navy-700 text-white font-semibold rounded-full hover:bg-navy-800 transition-colors">View Full Top 10 Rankings →</Link>
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-10">
            <h2 className="font-serif text-3xl font-bold text-navy-900 mb-3">Where Do You Need Support?</h2>
            <p className="text-navy-600 max-w-xl mx-auto">Different situations demand different features. Here&apos;s what to look for in each use case.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((u) => (
              <div key={u.title} className="p-6 rounded-2xl border border-navy-100 hover:border-teal-200 transition-colors bg-white">
                <span className="text-3xl mb-3 block">{u.emoji}</span>
                <h3 className="font-bold text-navy-900 mb-2">{u.title}</h3>
                <p className="text-sm text-navy-600 leading-relaxed mb-3">{u.desc}</p>
                <span className="text-xs bg-teal-50 text-teal-700 px-2 py-1 rounded-full font-medium">{u.tip}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section-padding bg-navy-50">
        <div className="container-custom">
          <div className="text-center mb-10">
            <h2 className="font-serif text-3xl font-bold text-navy-900 mb-3">Editor&#39;s Top Picks</h2>
            <p className="text-navy-600">Our highest-rated lumbar cushions for every budget and use case.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.slice(0, 4).map((p) => <ProductCard key={p.id} product={p} />)}
          </div>
          <div className="text-center mt-8">
            <Link href="/top-10" className="inline-flex items-center gap-2 text-teal-600 font-semibold hover:text-teal-700">View all 10 picks →</Link>
          </div>
        </div>
      </section>

      {/* Blog */}
      {blogPosts.length > 0 && (
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-10">
              <h2 className="font-serif text-3xl font-bold text-navy-900 mb-3">Back Health Resource Center</h2>
              <p className="text-navy-600">Evidence-based guides on back pain, ergonomics, and finding the right lumbar support.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {blogPosts.slice(0, 3).map((post) => <BlogCard key={post.slug} post={post} />)}
            </div>
            <div className="text-center mt-8">
              <Link href="/blog" className="inline-flex items-center gap-2 text-teal-600 font-semibold hover:text-teal-700">Read all articles →</Link>
            </div>
          </div>
        </section>
      )}

      <section className="section-padding bg-navy-50">
        <div className="container-custom max-w-2xl text-center">
          <NewsletterSignup />
        </div>
      </section>
    </>
  );
}
