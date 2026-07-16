import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, BookOpen, Award, Heart, Search, BarChart } from "lucide-react";

export const metadata: Metadata = {
  title: "About LumbarCushion.com — Our Mission & Review Process",
  description: "LumbarCushion.com independently researches lumbar support products using published spine health research, ergonomics science, and verified long-term user outcomes. Learn about our review standards.",
  alternates: { canonical: "https://lumbarcushion.com/about" },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-indigo-50 to-white py-14">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About LumbarCushion.com</h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Independent lumbar support product research — grounded in published spine health science and long-term real-world outcomes.
          </p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-6 py-12 space-y-12">
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why We Built This</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              Lumbar support is a specific ergonomic intervention targeting the L4–L5 region of the lumbar spine. A lumbar cushion positioned at mid-back provides no lumbar support. Foam that compresses flat within 90 days provides no structural support. Yet most lumbar support marketing ignores both of these realities.
            </p>
            <p>
              LumbarCushion.com evaluates lumbar support products against what published ergonomics and spine health research actually says about effective lumbar support. We are an independent editorial and research site, not affiliated with any cushion manufacturer or brand.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Review Methodology</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { title: "Lumbar Biomechanics", desc: "We assess cushion height, curve depth, and firmness against published research on L4–L5 support, lumbar lordosis maintenance, and seated posture. Height must align with the individual's lumbar curve — cushions are evaluated for how they address this variability." },
              { title: "Foam Density & Durability", desc: "Foam density (lbs/ft³) is the single best predictor of how long a lumbar cushion maintains its shape under daily use. We analyze specifications and verify against long-term user reports. A cushion that flattens within months is not a lumbar support." },
              { title: "Attachment System", desc: "A lumbar cushion that slides out of position provides no consistent benefit. We evaluate strap geometry, anti-slip surfaces, and positional stability across different chair types including office chairs, car seats, and gaming chairs." },
              { title: "User Outcome Analysis", desc: "We synthesize verified purchase reviews from users who explicitly describe lower back conditions and report on outcomes after 3+ months of consistent daily use — the minimum timeframe for meaningful evaluation." },
            ].map((item) => (
              <div key={item.title} className="bg-indigo-50 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2 text-sm">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-4">
            <Link href="/methodology" className="text-sm text-indigo-600 font-semibold hover:text-indigo-700">
              Read our full review methodology →
            </Link>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Research Sources</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li>Published research on lumbar support, seating ergonomics, and disc biomechanics from journals including Spine, Ergonomics, and Applied Ergonomics</li>
            <li>Occupational health guidelines from NIOSH, OSHA, and published ergonomics standards</li>
            <li>Materials science data on polyurethane foam density, compression characteristics, and durability</li>
            <li>Manufacturer product specifications and materials certifications</li>
            <li>Long-term verified user reviews with emphasis on 3+ month use periods from users with documented lower back conditions</li>
          </ul>
        </section>

        <section>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { icon: ShieldCheck, title: "Research-Grounded", desc: "Product evaluations are based on published spine health and ergonomics research, not manufacturer marketing claims." },
              { icon: Search, title: "Independent", desc: "We are not affiliated with any cushion brand. No manufacturer can pay to improve their ranking." },
              { icon: Award, title: "No Paid Placements", desc: "Rankings reflect product performance and evidence only — never advertising budgets or commission rates." },
              { icon: Heart, title: "Reader-Funded", desc: "Affiliate commissions from purchases are our only revenue. We recommend products we would buy for people we know." },
              { icon: BookOpen, title: "Transparent Methodology", desc: "Our full evaluation criteria are published. You can judge our methods, not just our conclusions." },
              { icon: BarChart, title: "Durability Focus", desc: "A lumbar cushion that flattens in 90 days is useless. We weight long-term durability data heavily in all rankings." },
            ].map((item) => (
              <div key={item.title} className="p-5 bg-indigo-50 rounded-xl flex gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                  <item.icon className="h-5 w-5 text-indigo-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-sm mb-1">{item.title}</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="border-t border-gray-200 pt-8">
          <h2 className="text-xl font-bold text-gray-900 mb-3">Medical Disclaimer</h2>
          <p className="text-sm text-gray-500 leading-relaxed">
            Content on LumbarCushion.com is for informational purposes only and does not constitute medical advice. Lower back pain has multiple potential causes. If you have chronic, worsening, or acute lower back pain, consult a qualified healthcare provider before relying on a lumbar cushion as your primary intervention.
          </p>
          <p className="mt-3 text-sm text-gray-500">
            Questions or corrections? <Link href="/contact" className="text-indigo-600 hover:text-indigo-700">Contact us</Link>
          </p>
        </section>
      </div>
    </main>
  );
}
