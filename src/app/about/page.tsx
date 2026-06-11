import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About LumbarCushion.com — Our Team & Review Standards",
  description:
    "Meet the team behind LumbarCushion.com. Ergonomists, physical therapists, and spine health writers reviewing lumbar support cushions for back pain relief.",
  alternates: { canonical: "/about" },
};

const team = [
  {
    initials: "DS",
    color: "bg-indigo-100 text-indigo-700",
    name: "Dr. Paul Sato",
    title: "Contributing Ergonomics & Spine Consultant",
    credentials: "PhD Kinesiology; Certified Professional Ergonomist (CPE)",
    bio: "Dr. Sato spent 12 years as an occupational ergonomist before shifting to research and consulting. He reviews LumbarCushion.com's product evaluations specifically for lumbar biomechanics — assessing whether lumbar curve support, seat-to-back angle, and foam density claims translate to actual spinal decompression and posture improvement in extended sitting.",
  },
  {
    initials: "LN",
    color: "bg-green-100 text-green-700",
    name: "Lauren Nash",
    title: "Lead Product Reviewer",
    credentials: "DPT, Orthopaedic Certified Specialist (OCS)",
    bio: "Lauren is a licensed physical therapist who works primarily with patients recovering from lumbar disc injuries and chronic lower back pain. She applies her clinical background to evaluate whether lumbar cushion designs — firmness, height, curve depth, and attachment systems — actually support healthy sitting posture for people with lower back conditions.",
  },
  {
    initials: "CW",
    color: "bg-amber-100 text-amber-700",
    name: "Chris Wallace",
    title: "Senior Editor",
    credentials: "Former Editor, Spine-Health.com; 12 years spine health journalism",
    bio: "Chris has spent over a decade writing about spine health, back pain management, and ergonomic products for major health publications. He manages editorial quality at LumbarCushion.com — ensuring product explanations are technically accurate, written in plain language, and genuinely useful for people making purchase decisions.",
  },
  {
    initials: "MO",
    color: "bg-rose-100 text-rose-700",
    name: "Maria Ochoa",
    title: "User Research Analyst",
    credentials: "MS Public Health, University of Michigan",
    bio: "Maria oversees our consumer review analysis — systematically reviewing thousands of verified purchase reports to surface patterns in relief effectiveness, durability over time, and fit across different body types and chair configurations. Her public health background helps ensure our analysis captures real-world population-level outcomes rather than cherry-picked testimonials.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-indigo-50 to-white py-14">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About LumbarCushion.com</h1>
          <p className="text-lg text-gray-600">
            Independent lumbar support cushion reviews from kinesiologists, physical therapists,
            and experienced spine health writers — focused on what actually relieves lower back
            pain versus what just looks ergonomic.
          </p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-6 py-12 space-y-12">
        {/* Mission */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              The lumbar cushion market is full of products making vague ergonomic claims. "Lumbar
              support" and "posture correction" are applied to products ranging from truly effective
              orthopedic aids to foam pieces that flatten within weeks.
            </p>
            <p>
              LumbarCushion.com was built to give people with lower back pain a reliable,
              clinician-reviewed guide to the products that{" "}
              <strong>actually deliver lumbar support</strong> — with enough detail about materials,
              design, and fit to match the right cushion to your specific situation.
            </p>
          </div>
        </section>

        {/* Review process */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Review Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                title: "Lumbar Support Design",
                desc: "We assess curve height, depth, and firmness relative to lumbar anatomy. A lumbar cushion that positions support at T12 rather than L3–L5 does nothing for most lower back pain sufferers.",
              },
              {
                title: "Ergonomics Review",
                desc: "Our CPE consultant evaluates seat pan design, attachment system reliability, and whether the product integrates with standard office chairs without creating compensatory posture problems.",
              },
              {
                title: "Materials Durability",
                desc: "We analyze foam density ratings (ILD) and long-term compression resistance. Flat foam is useless foam. We specifically look for durability data in long-term verified reviews.",
              },
              {
                title: "Back Pain User Outcomes",
                desc: "We filter reviews for lower back pain, disc injury, and lumbar condition mentions to understand real-world effectiveness for the specific population LumbarCushion.com serves.",
              },
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

        {/* Team */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Meet the Team</h2>
          <div className="space-y-5">
            {team.map((member) => (
              <div key={member.name} className="flex gap-4 p-5 bg-gray-50 rounded-xl items-start">
                <div
                  className={`w-11 h-11 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 ${member.color}`}
                >
                  {member.initials}
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-sm">{member.name}</p>
                  <p className="text-xs text-indigo-600 font-semibold mb-0.5">{member.title}</p>
                  <p className="text-xs text-gray-400 italic mb-2">{member.credentials}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Independence */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Editorial Independence</h2>
          <div className="space-y-3 text-gray-700 leading-relaxed">
            <p>
              LumbarCushion.com earns revenue through Amazon affiliate commissions. When you
              purchase a product through our links, we earn a small commission at no extra cost to
              you.
            </p>
            <p>
              <strong>This never influences our rankings.</strong> Products are scored on their
              merits alone. We have recommended lower-commission products over higher-commission
              ones when the clinical and user evidence supported it. We have never accepted payment
              for inclusion, exclusion, or a favorable review.
            </p>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="border-t border-gray-200 pt-8">
          <h2 className="text-xl font-bold text-gray-900 mb-3">Medical Disclaimer</h2>
          <p className="text-sm text-gray-500 leading-relaxed">
            Content on LumbarCushion.com is for informational purposes only and does not
            constitute medical advice. Lower back pain has many potential causes, some of which
            require professional evaluation and treatment. If you are experiencing severe,
            worsening, or radiating pain, please consult a qualified healthcare provider. A lumbar
            cushion is a postural support aid — it is not a substitute for diagnosis or treatment.
          </p>
          <p className="mt-4 text-sm text-gray-500">
            Questions?{" "}
            <Link href="/contact" className="text-indigo-600 hover:text-indigo-700">
              Contact our editorial team
            </Link>
          </p>
        </section>
      </div>
    </main>
  );
}
