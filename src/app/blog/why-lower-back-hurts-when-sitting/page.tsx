import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Why Your Lower Back Hurts When Sitting — The Biomechanical Explanation",
  description: "A detailed explanation of why sitting causes lower back pain, how different postures change spinal loading, and what this means for seating choices.",
  alternates: { canonical: "/blog/why-lower-back-hurts-when-sitting" },
};

export default function Post() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-2xl mx-auto px-6 py-12">
        <Link href="/blog" className="text-sm text-indigo-600 hover:text-indigo-700 mb-6 inline-block">← Back to articles</Link>

        <div className="mb-2 flex gap-3 text-xs text-gray-400 font-medium uppercase tracking-wide">
          <span className="text-indigo-600">Education</span>
          <span>·</span>
          <span>June 10, 2026</span>
          <span>·</span>
          <span>6 min read</span>
        </div>

        <h1 className="text-3xl font-bold text-gray-900 mb-6 leading-tight">
          Why Your Lower Back Hurts When Sitting — The Biomechanical Explanation
        </h1>

        <div className="prose prose-sm max-w-none text-gray-700 leading-relaxed space-y-5">

          <p>Lower back pain that worsens with prolonged sitting is one of the most common musculoskeletal complaints, and it is largely predictable from basic biomechanical principles. Understanding why it happens is the first step to addressing it systematically rather than simply tolerating it.</p>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">The Core Problem: Sitting Loads the Spine More Than Standing</h2>

          <p>Most people assume that sitting "takes the weight off" the spine. In one sense it does — the legs bear less load. But the lumbar discs bear significantly more.</p>

          <p>Nachemson's foundational research measured intradiscal pressure directly in living subjects across different postures. The results were counterintuitive: the lumbar L3 disc bore approximately 40% more pressure in unsupported upright sitting than in standing. In forward-leaning sitting — the default posture for most desk workers — pressures were even higher.</p>

          <p>This happens because sitting without lumbar support reverses or flattens the lumbar lordosis (the inward curve of the lower back). In this position, the posterior disc wall is stretched and loaded rather than supported, and the muscles that normally share the load (particularly the multifidus) are poorly positioned to contribute.</p>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">Posterior Pelvic Tilt: The Root Cause</h2>

          <p>The lumbar lordosis and pelvic position are tightly linked. When the pelvis rotates backward (posterior pelvic tilt — think of "tucking your tail under"), the lumbar curve flattens or reverses. When the pelvis tips forward (anterior tilt), the lumbar lordosis is accentuated.</p>

          <p>In most chairs without lumbar support, the natural tendency is toward posterior pelvic tilt when sitting. Several factors drive this:</p>

          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Hip flexor tightness:</strong> Shortened hip flexors from prolonged sitting pull the pelvis into anterior tilt in standing, but this tightness does not help maintain lumbar lordosis in sitting — the mechanics are different</li>
            <li><strong>Hamstring tightness:</strong> Tight hamstrings pull the ischial tuberosities (sit bones) posteriorly, rotating the pelvis backward when seated</li>
            <li><strong>Chair seat angle:</strong> A flat or backward-sloping seat directly promotes posterior pelvic tilt</li>
            <li><strong>Absence of lumbar support:</strong> Without a backrest or cushion maintaining the lumbar curve, postural muscles fatigue and the spine settles into flexion</li>
          </ul>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">How Posterior Tilt Causes Pain</h2>

          <p>When the lumbar spine is in prolonged flexion:</p>

          <p><strong>Disc loading shifts posteriorly.</strong> The anterior disc space closes while the posterior disc space opens, putting the posterior annular fibers under tensile stress. Over time, this stresses the annulus and can contribute to posterior disc bulging or herniation.</p>

          <p><strong>Facet joints are unloaded in flexion</strong> but their capsules are stretched. The posterior spinal ligaments — the supraspinous ligament, interspinous ligament, and facet joint capsules — are placed under sustained tension, which is painful and fatiguing.</p>

          <p><strong>Paraspinal muscles fatigue.</strong> To maintain any upright position in lumbar flexion, the erector spinae and multifidus must work harder. This leads to the "tired ache" in the lower back that develops over the course of a working day.</p>

          <p><strong>The hip flexors are in shortened position.</strong> Extended hip flexion in sitting shortens the iliopsoas. When standing, this contributes to anterior pelvic tilt and can be a source of groin and anterior hip pain.</p>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">Why Some Chairs and Postures Hurt More Than Others</h2>

          <p>A soft, deep sofa produces severe posterior pelvic tilt because you sink into it and the low seat height creates extreme hip flexion. This is why soft couches are often the worst seating choice for lower back pain despite feeling comfortable initially.</p>

          <p>A hard chair with no lumbar support produces moderate posterior tilt. The hard surface at least prevents sinking, but without lumbar support, the spine still settles into flexion as postural muscles tire.</p>

          <p>A chair with an appropriately positioned lumbar support (contacting the spine at the L3–L5 level, approximately 4–6 inches above the seat surface) mechanically prevents posterior pelvic tilt by pushing the lumbar spine into its natural curve. This is why lumbar support is the single most evidence-supported seating intervention for lower back pain.</p>

          <p>A forward-tilting seat pan (saddle-style seats, wedge cushions) encourages anterior pelvic tilt directly by changing the geometry of the seat-to-thigh contact, allowing the pelvis to tip forward and restoring lumbar lordosis without requiring muscular effort.</p>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">The Muscle Fatigue Accumulation Problem</h2>

          <p>Even in good posture, sustained sitting leads to progressive muscle fatigue. Research on prolonged static muscle loading shows that the paraspinal muscles begin showing electromyographic signs of fatigue within 20–30 minutes of sustained sitting, even in supported upright posture.</p>

          <p>As muscles fatigue, they contribute less to spinal stability, and passive structures (discs, ligaments, facet capsules) must absorb more of the load. This progressive shift is why lower back pain often develops gradually over the course of a workday rather than immediately.</p>

          <p>This is the biomechanical rationale for movement breaks: standing up, walking briefly, or even changing sitting position every 30–45 minutes unloads the passive structures, allows muscle recovery, and prevents the progressive accumulation of mechanical stress that underlies most sitting-related back pain.</p>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">The Takeaway</h2>

          <p>Sitting-related lower back pain is not mysterious or inevitable. It is the predictable result of a specific mechanical problem — sustained lumbar flexion loading the posterior disc and fatiguing paraspinal muscles — acting over time. Interventions that maintain lumbar lordosis (lumbar support, forward-tilting seats, wedge cushions) and reduce sustained static loading (movement breaks, adjustable postures) address the actual mechanism. Everything else is either supportive or irrelevant.</p>

        </div>

        <div className="mt-10 pt-6 border-t border-gray-100">
          <p className="text-xs text-gray-400">This article is for educational purposes only and does not substitute for professional evaluation and care for lower back pain.</p>
        </div>
      </div>
    </main>
  );
}
