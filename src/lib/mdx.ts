import fs from "fs";
import path from "path";
import matter from "gray-matter";

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

export interface BlogFrontmatter {
  title: string;
  description: string;
  date: string;
  author: string;
  category: string;
  tags: string[];
  readTime: string;
}

export interface BlogPost {
  slug: string;
  frontmatter: BlogFrontmatter;
  content: string;
}

export async function getAllBlogSlugs(): Promise<string[]> {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".mdx")).map((f) => f.replace(/\.mdx$/, ""));
}

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  return { slug, frontmatter: data as BlogFrontmatter, content };
}

export async function getAllBlogPosts(): Promise<BlogPost[]> {
  const slugs = await getAllBlogSlugs();
  const posts = await Promise.all(slugs.map(getBlogPost));
  return (posts.filter(Boolean) as BlogPost[]).sort((a, b) => new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime());
}
