"use client";
import { useState } from "react";
export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);
  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); setDone(true); };
  if (done) return <div className="text-center py-4"><p className="text-navy-700 font-semibold">You&apos;re on the list! We&apos;ll send you our best back-care tips.</p></div>;
  return (
    <div className="text-center">
      <h2 className="font-serif text-2xl font-bold text-navy-900 mb-2">Get Pain Relief Tips</h2>
      <p className="text-navy-600 mb-6 text-sm">Expert guides on back health, ergonomics, and the latest cushion reviews — delivered free.</p>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
        <input type="email" required value={email} onChange={e=>setEmail(e.target.value)} placeholder="your@email.com" className="flex-1 px-4 py-2.5 rounded-full border border-navy-200 focus:outline-none focus:ring-2 focus:ring-teal-300 text-sm"/>
        <button type="submit" className="px-6 py-2.5 bg-navy-700 text-white font-semibold rounded-full hover:bg-navy-800 transition-colors text-sm">Subscribe Free</button>
      </form>
      <p className="text-xs text-navy-400 mt-3">No spam, ever. Unsubscribe anytime.</p>
    </div>
  );
}
