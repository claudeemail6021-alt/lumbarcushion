import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "About LumbarCushion — Our Mission & Review Process",
  description: "Learn how LumbarCushion independently tests and ranks lumbar support cushions. Our team, process, and commitment to honest back-pain recommendations.",
  alternates: { canonical: "https://lumbarcushion.com/about" },
};
export default function AboutPage() {
  return (
    <section className="section-padding">
      <div className="container-custom max-w-4xl">
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-navy-900 mb-4">About LumbarCushion</h1>
          <p className="text-xl text-navy-600 max-w-2xl mx-auto leading-relaxed">We built LumbarCushion because lower back pain is the #1 cause of disability worldwide — and most people are sitting on the wrong support.</p>
        </div>
        <div className="prose mb-16">
          <h2>Why We Built This</h2>
          <p>Our founder spent three years managing chronic lower back pain while working a desk job. He tried dozens of cushions, saw two physical therapists, and eventually found a combination that worked. LumbarCushion exists to shortcut that journey for everyone else — with independent, evidence-based reviews that tell you exactly what works and why.</p>
          <h2>Our Review Process</h2>
          <p>Every cushion we feature is evaluated on: support quality and lumbar curve alignment, material durability and foam density, versatility across office/car/travel use, ease of adjustment and strap reliability, and real-world user feedback aggregated across multiple platforms.</p>
          <h2>Medical Disclaimer</h2>
          <p>LumbarCushion provides product reviews and general information about back support. We are not medical professionals. If you experience severe or persistent back pain, please consult a qualified healthcare provider. Nothing on this site constitutes medical advice.</p>
          <h2>Independence</h2>
          <p>We earn commissions from affiliate links, but this never influences our rankings. No brand can pay for placement or an improved ranking on LumbarCushion.</p>
        </div>
      </div>
    </section>
  );
}
