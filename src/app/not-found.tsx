import Link from "next/link";
export default function NotFound() {
  return (
    <section className="section-padding text-center">
      <div className="container-custom max-w-lg">
        <div className="text-8xl mb-6">🪑</div>
        <h1 className="font-serif text-4xl font-bold text-navy-900 mb-4">Page Not Found</h1>
        <p className="text-navy-600 mb-8">That page has slipped out of position. Let&apos;s get you back on track.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="px-6 py-3 bg-navy-700 text-white font-semibold rounded-full hover:bg-navy-800 transition-colors">Back to Home</Link>
          <Link href="/top-10" className="px-6 py-3 border border-navy-200 text-navy-700 font-semibold rounded-full hover:border-teal-300 transition-colors">See Top 10 Picks</Link>
        </div>
      </div>
    </section>
  );
}
