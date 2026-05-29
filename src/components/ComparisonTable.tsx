import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { type Product } from "@/data/products";
import StarRating from "./StarRating";
import { amazonLink } from "@/lib/utils";

interface Props { products: Product[]; }
export default function ComparisonTable({ products }: Props) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-navy-100 shadow-card">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-navy-50 border-b border-navy-100">
            <th className="px-4 py-3 text-left font-semibold text-navy-700 w-8">#</th>
            <th className="px-4 py-3 text-left font-semibold text-navy-700 min-w-[180px]">Cushion</th>
            <th className="px-4 py-3 text-left font-semibold text-navy-700 hidden md:table-cell">Type</th>
            <th className="px-4 py-3 text-left font-semibold text-navy-700 hidden lg:table-cell">Best For</th>
            <th className="px-4 py-3 text-left font-semibold text-navy-700">Rating</th>
            <th className="px-4 py-3 text-left font-semibold text-navy-700 hidden sm:table-cell">Price</th>
            <th className="px-4 py-3 text-left font-semibold text-navy-700"></th>
          </tr>
        </thead>
        <tbody>
          {products.map((p, i) => (
            <tr key={p.id} className={`border-b border-navy-50 hover:bg-teal-50/30 transition-colors ${i % 2 === 0 ? "bg-white" : "bg-navy-50/30"}`}>
              <td className="px-4 py-3">
                <span className={`inline-flex items-center justify-center w-6 h-6 rounded-full text-xs font-bold ${p.rank === 1 ? "bg-navy-700 text-white" : p.rank <= 3 ? "bg-navy-100 text-navy-700" : "bg-neutral-100 text-neutral-500"}`}>{p.rank}</span>
              </td>
              <td className="px-4 py-3">
                <Link href={`/reviews/${p.slug}`} className="font-semibold text-navy-900 hover:text-teal-600 transition-colors block leading-snug">{p.name}</Link>
                <span className="text-xs text-navy-400">{p.brand}</span>
              </td>
              <td className="px-4 py-3 hidden md:table-cell">
                <span className="inline-flex items-center gap-1 px-2 py-1 bg-teal-50 text-teal-700 rounded-full text-xs font-medium">{p.cushionType}</span>
              </td>
              <td className="px-4 py-3 hidden lg:table-cell">
                <div className="flex flex-wrap gap-1">
                  {p.bestFor.slice(0,2).map(b => <span key={b} className="text-xs bg-navy-50 text-navy-600 px-1.5 py-0.5 rounded">{b}</span>)}
                </div>
              </td>
              <td className="px-4 py-3">
                <StarRating rating={p.rating} reviewCount={p.reviewCount} size="sm" />
              </td>
              <td className="px-4 py-3 hidden sm:table-cell">
                <span className="font-semibold text-navy-800">{p.price}</span>
                <span className="text-xs text-navy-400 block">{p.priceRange}</span>
              </td>
              <td className="px-4 py-3">
                <a href={amazonLink(p.asin)} target="_blank" rel="noopener noreferrer nofollow" className="inline-flex items-center gap-1 px-3 py-1.5 bg-navy-700 text-white text-xs font-semibold rounded-full hover:bg-navy-800 transition-colors whitespace-nowrap">
                  Buy <ExternalLink className="h-3 w-3"/>
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
