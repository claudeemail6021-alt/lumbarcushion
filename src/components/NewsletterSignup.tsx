"use client";
import { useState } from "react";

export function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    try {
      const BREVO_ACTION = "https://54b3b228.sibforms.com/serve/MUIFAC5l3teXKGXgyYqPGIqNxIicgm-HJZostOSSVxydQktRhYP4ZZRtaqY8WtLXN2mjW8po9XjbcetOLw34_wE1sGC3YdmVTPeS61FJ0Ep1yi_lrsSRZd8_W6w6ePJjHyHrRufXiQjgGv9MIF33Clenj-bYX0HOynWpwOSfMQeSw1N3upSTTGIS9E47ravKsO6aq3ZSOfPXCOFhpg==";
      const formData = new FormData();
      formData.append("EMAIL", email);
      formData.append("locale", "en");
      await fetch(BREVO_ACTION, { method: "POST", mode: "no-cors", body: formData });
    } catch {}
    setStatus("success");
    setEmail("");
  };

  return (
    <div className="bg-gradient-to-br from-indigo-50 to-slate-50 border border-indigo-100 rounded-2xl p-6 sm:p-8">
      {status === "success" ? (
        <div className="text-center py-4">
          <div className="text-4xl mb-2">✅</div>
          <p className="font-bold text-slate-900 text-lg">You're in!</p>
          <p className="text-sm text-slate-600 mt-1">Check your inbox for your free lumbar support guide.</p>
        </div>
      ) : (
        <>
          <h3 className="text-xl font-bold text-slate-900 mb-1">Free Lumbar Support Guide</h3>
          <p className="text-sm text-slate-600 mb-4">
            Get our PT-approved guide to <strong>positioning lumbar support correctly</strong> — the mistake most people make that makes back pain worse, not better.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="flex-1 border border-slate-300 rounded-lg px-4 py-3 text-base focus:ring-2 focus:ring-indigo-400 outline-none"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors whitespace-nowrap disabled:opacity-60"
            >
              {status === "loading" ? "Sending…" : "Get Free Guide →"}
            </button>
          </form>
          <p className="text-xs text-slate-400 mt-2">No spam. Unsubscribe anytime.</p>
        </>
      )}
    </div>
  );
}
