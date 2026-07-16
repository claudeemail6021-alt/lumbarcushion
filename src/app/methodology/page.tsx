import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Review Methodology — How LumbarCushion.com Evaluates Products",
  description:
    "Every product on LumbarCushion.com is evaluated using a consistent, transparent research process grounded in published spine health and ergonomics science. Here is exactly how we score lumbar cushions.",
  alternates: { canonical: "/methodology" },
};

const steps = [
  {
    num: "01",
    title: "Product Selection",
    content:
      "We include products based on market presence, verified customer review volume, and recognition in ergonomics or spine health communities. We focus on lumbar support cushions specifically — distinguishing them from general seat cushions that happen to include a lumbar pad. Brands cannot pay for inclusion, exclusion, or ranking position.",
  },
  {
    num: "02",
    title: "Lumbar Support Design Analysis",
    content:
      "Our kinesiologist and physical therapist evaluate the lumbar support geometry in detail: lumbar curve apex height (should align with L3–L5 for most adults), curve depth (too shallow provides no support; too deep creates discomfort), and firmness relative to the target user. Adjustable designs are reviewed across multiple settings. Products claiming lumbar support without meaningful curve geometry are flagged.",
  },
  {
    num: "03",
    title: "Ergonomics Integration Review",
    content:
      "A lumbar cushion doesn't work in isolation — it interacts with chair seat pan angle, seat height, and armrest position. We evaluate whether the product's attachment system (straps, clips) maintains positioning during real use, whether it shifts during normal movement, and whether it creates compensatory posture problems (like forward head posture from changed seating angle). Our CPE consultant reviews these interactions.",
  },
  {
    num: "04",
    title: "Materials & Durability Assessment",
    content:
      "We analyze foam density ratings (ILD), memory foam response time, and construction quality. A lumbar cushion that compresses flat after 2–3 months provides diminishing support over time — a common complaint in low-density foam products. We cross-reference manufacturer density specifications against long-term user reports for evidence of premature compression.",
  },
  {
    num: "05",
    title: "Back Pain User Review Analysis",
    content:
      "We systematically analyze verified purchase reviews, specifically filtering for mentions of lower back conditions: herniated disc, lumbar stenosis, spondylosis, general lower back pain, degenerative disc disease. This condition-filtered subset gives more reliable signal about effectiveness for the people most likely to buy a dedicated lumbar cushion. We track relief duration, body size compatibility, and chair type performance.",
  },
  {
    num: "06",
    title: "Ongoing Monitoring",
    content:
      "We track recent review trends to detect reformulations or manufacturing changes. Foam density is a common cost-cutting target — products can launch with high-density foam and later shift to cheaper material. We update rankings when consistent evidence indicates quality changes. All rankings display a last-reviewed date. Prices are updated regularly.",
  },
];

export default function MethodologyPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-indigo-50 to-white py-14">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Review Methodology</h1>
          <p className="text-lg text-gray-600">
            Every ranking on LumbarCushion.com follows the same process. Here is exactly how we
            evaluate products — so you know precisely what our recommendations are based on.
          </p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-6 py-12 space-y-10">
        {/* Scoring overview */}
        <div className="bg-indigo-50 rounded-2xl p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Scoring Breakdown (100 points)</h2>
          <div className="space-y-3">
            {[
              { pts: "35 pts", label: "Lumbar Support Design", desc: "Curve geometry, apex positioning, firmness, adjustability" },
              { pts: "30 pts", label: "Materials & Durability", desc: "Foam density, long-term compression resistance, cover quality" },
              { pts: "25 pts", label: "Back Pain User Outcomes", desc: "Filtered verified reviews from lower back pain sufferers" },
              { pts: "10 pts", label: "Value for Money", desc: "Performance relative to price tier" },
            ].map((row) => (
              <div key={row.label} className="flex items-start gap-4">
                <span className="text-sm font-bold text-indigo-600 w-16 flex-shrink-0">{row.pts}</span>
                <div>
                  <span className="text-sm font-semibold text-gray-900">{row.label}</span>
                  <p className="text-xs text-gray-500 mt-0.5">{row.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Steps */}
        <div className="space-y-6">
          {steps.map((step) => (
            <div key={step.num} className="flex gap-5">
              <div className="text-2xl font-black text-indigo-200 flex-shrink-0 w-10">{step.num}</div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">{step.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{step.content}</p>
              </div>
            </div>
          ))}
        </div>

        {/* COI */}
        <div className="border border-gray-200 rounded-xl p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-3">Conflicts of Interest</h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            LumbarCushion.com earns Amazon affiliate commissions. This funds our research and keeps
            the site free. It does not influence rankings — products are ranked by score regardless
            of commission rate. We have never accepted payment for inclusion, exclusion, or a
            favorable ranking position. Team members disclose any brand relationships before
            reviewing those products.
          </p>
        </div>

        <p className="text-sm text-gray-400 text-center">
          Questions about our process?{" "}
          <Link href="/contact" className="text-indigo-600 hover:text-indigo-700">
            Contact us
          </Link>
        </p>
      </div>
    </main>
  );
}
