"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X, Armchair } from "lucide-react";
const navLinks = [
  { label: "Top 10 Picks", href: "/top-10" },
  { label: "Reviews", href: "/reviews/comfilife-lumbar-support-pillow" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
];
export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-navy-100 shadow-soft">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 group">
            <Armchair className="h-5 w-5 text-navy-600 group-hover:text-teal-500 transition-colors" />
            <span className="font-serif text-xl font-bold text-navy-900">Lumbar<span className="text-teal-500">Cushion</span></span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map(l => <Link key={l.href} href={l.href} className="text-sm font-medium text-navy-600 hover:text-teal-500 transition-colors">{l.label}</Link>)}
            <Link href="/top-10" className="ml-2 px-4 py-2 bg-navy-700 text-white text-sm font-semibold rounded-full hover:bg-navy-800 transition-colors shadow-sm">Top Picks →</Link>
          </nav>
          <button className="md:hidden p-2 text-navy-600 hover:text-teal-500" onClick={() => setOpen(!open)}>
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden bg-white border-t border-navy-100 px-6 py-4 space-y-3">
          {navLinks.map(l => <Link key={l.href} href={l.href} className="block text-sm font-medium text-navy-700 hover:text-teal-500 py-1" onClick={() => setOpen(false)}>{l.label}</Link>)}
          <Link href="/top-10" className="block text-center px-4 py-2 bg-navy-700 text-white text-sm font-semibold rounded-full" onClick={() => setOpen(false)}>Top Picks →</Link>
        </div>
      )}
    </header>
  );
}
