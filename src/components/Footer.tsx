import Link from "next/link";
import { Armchair, Heart } from "lucide-react";
export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-navy-900 text-navy-300 mt-20">
      <div className="bg-navy-800 border-b border-navy-700">
        <div className="container-custom py-3"><p className="text-xs text-navy-400 text-center"><strong className="text-navy-200">Affiliate Disclosure:</strong> As an Amazon Associate and AWIN affiliate partner, we earn from qualifying purchases at no extra cost to you. <Link href="/affiliate-disclosure" className="underline hover:text-white">Learn more</Link></p></div>
      </div>
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4"><Armchair className="h-5 w-5 text-teal-400" /><span className="font-serif text-lg font-bold text-white">Lumbar<span className="text-teal-400">Cushion</span></span></Link>
            <p className="text-sm leading-relaxed">Independent reviews of the best lumbar support cushions for office, car, and travel in 2026.</p>
          </div>
          <div>
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wide">Top Reviews</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/reviews/comfilife-lumbar-support-pillow" className="hover:text-white">ComfiLife Lumbar Pillow</Link></li>
              <li><Link href="/reviews/lovehome-lumbar-support-cushion" className="hover:text-white">LoveHome Memory Foam</Link></li>
              <li><Link href="/reviews/everlasting-comfort-lumbar-support" className="hover:text-white">Everlasting Comfort</Link></li>
              <li><Link href="/reviews/tempur-pedic-lumbar-support-pillow" className="hover:text-white">Tempur-Pedic Lumbar</Link></li>
              <li><Link href="/top-10" className="text-teal-400 hover:text-teal-300">All Top 10 →</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wide">Learn</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/blog/lumbar-support-guide" className="hover:text-white">Lumbar Support Guide</Link></li>
              <li><Link href="/blog/office-chair-back-pain" className="hover:text-white">Office Chair Back Pain</Link></li>
              <li><Link href="/blog" className="text-teal-400 hover:text-teal-300">All Articles →</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wide">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-white">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
              <li><Link href="/methodology" className="hover:text-white">Our Methodology</Link></li>
              <li><Link href="/affiliate-disclosure" className="hover:text-white">Affiliate Disclosure</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-white">Terms of Use</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-navy-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-navy-500">© {year} LumbarCushion.com — Independent lumbar support reviews. Not medical advice.</p>
          <p className="text-xs text-navy-500 flex items-center gap-1">Made with <Heart className="h-3 w-3 text-teal-500" /> for pain-free sitting</p>
        </div>
      </div>

          {/* Related Sites */}
          <div>
            <h3 className="font-semibold text-slate-900 mb-3 text-sm">Related Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="https://sciaticacushions.com" target="_blank" rel="noopener" className="text-slate-500 hover:text-indigo-600 transition-colors">SciaticaCushions.com — Sciatica Product Reviews</a></li>
              <li><a href="https://gelcushions.com" target="_blank" rel="noopener" className="text-slate-500 hover:text-indigo-600 transition-colors">GelCushions.com — Gel Seat & Knee Cushion Reviews</a></li>
              <li><a href="/methodology" className="text-slate-500 hover:text-indigo-600 transition-colors">Our Review Methodology</a></li>
              <li><a href="/affiliate-disclosure" className="text-slate-500 hover:text-indigo-600 transition-colors">Affiliate Disclosure</a></li>
            </ul>
          </div>
    </footer>
  );
}
