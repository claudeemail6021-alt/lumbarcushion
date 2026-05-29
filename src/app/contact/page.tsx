import type { Metadata } from "next";
import ContactForm from "./ContactForm";
export const metadata: Metadata = {
  title: "Contact Us | LumbarCushion",
  description: "Get in touch with the LumbarCushion team.",
  alternates: { canonical: "https://lumbarcushion.com/contact" },
};
export default function ContactPage() {
  return (
    <section className="section-padding">
      <div className="container-custom max-w-2xl">
        <div className="text-center mb-10">
          <h1 className="font-serif text-4xl font-bold text-navy-900 mb-4">Get in Touch</h1>
          <p className="text-navy-600 leading-relaxed">Have a question about a cushion, found an error, or want to suggest a product? We read every message.</p>
        </div>
        <div className="bg-white rounded-2xl border border-navy-100 shadow-card p-8"><ContactForm /></div>
        <div className="mt-8 text-center text-sm text-navy-500">
          <p>For partnerships: <a href="mailto:hello@lumbarcushion.com" className="text-teal-600 hover:underline">hello@lumbarcushion.com</a></p>
        </div>
      </div>
    </section>
  );
}
