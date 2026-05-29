import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
export function cn(...inputs: ClassValue[]) { return twMerge(clsx(inputs)); }
export function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}
export function amazonLink(asin: string): string {
  const tag = process.env.NEXT_PUBLIC_AMAZON_TAG ?? "YOURTAG-20";
  return `https://www.amazon.com/dp/${asin}?tag=${tag}`;
}
