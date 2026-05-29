import type { Metadata } from "next";
import { getAllBlogPosts } from "@/lib/mdx";
import BlogCard from "@/components/BlogCard";
export const metadata: Metadata = {
  title: "Back Health & Lumbar Support Blog — Guides & Tips",
  description: "Science-backed articles on back pain relief, ergonomics, lumbar support, and sitting posture. Expert guides for office workers, drivers, and travelers.",
  alternates: { canonical: "https://lumbarcushion.com/blog" },
};
export default async function BlogPage() {
  const posts = await getAllBlogPosts();
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl font-bold text-navy-900 mb-4">Back Health Resource Center</h1>
          <p className="text-lg text-navy-600 max-w-xl mx-auto">Evidence-based guides on back pain, ergonomics, and lumbar support for every situation.</p>
        </div>
        {posts.length === 0 ? <p className="text-center text-navy-500">Articles coming soon!</p> : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map(post => <BlogCard key={post.slug} post={post} />)}
          </div>
        )}
      </div>
    </section>
  );
}
