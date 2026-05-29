export interface Product {
  id: string;
  slug: string;
  name: string;
  brand: string;
  asin: string;
  price: string;
  priceRange: string;
  rating: number;
  reviewCount: number;
  shortDescription: string;
  cushionType: string;
  material: string;
  bestFor: string[];
  pros: string[];
  cons: string[];
  featureBreakdown: Record<string, string>;
  whoItsFor: string;
  notFor: string;
  howToUse: string;
  faq: { question: string; answer: string }[];
  rank: number;
  featured?: boolean;
}

const products: Product[] = [
  {
    id: "1",
    slug: "comfilife-lumbar-support-pillow",
    name: "ComfiLife Lumbar Support Back Pillow",
    brand: "ComfiLife",
    asin: "B01N5HEQOF",
    price: "$30",
    priceRange: "Budget",
    rating: 4.5,
    reviewCount: 87000,
    shortDescription: "The best-selling lumbar cushion on Amazon for good reason — memory foam that conforms to your spine, a mesh cover that breathes, and a universal strap that fits any chair.",
    cushionType: "Lumbar Roll",
    material: "Memory Foam",
    bestFor: ["Office Chair", "Car Seat", "Desk Work"],
    pros: ["Excellent lumbar curve support", "Breathable 3D mesh cover", "Adjustable strap fits most chairs", "Machine-washable cover", "High-density foam retains shape"],
    cons: ["May be too firm for very sensitive backs", "Strap can slip on leather chairs", "Not ideal for recliners"],
    featureBreakdown: {
      "Memory Foam Density": "High-density foam (45D) that conforms to your lumbar curve without bottoming out. Maintains its shape after years of use.",
      "Mesh Cover": "3D mesh cover promotes airflow, reducing the heat buildup that makes long sitting sessions uncomfortable.",
      "Adjustable Strap": "Elastic strap with buckle attaches to chair back. Works with most office chairs, car seats, and dining chairs.",
      "Ergonomic Curve": "Contoured shape designed to fill the natural gap between your lower back and the chair, reducing strain on lumbar vertebrae L4–L5.",
    },
    whoItsFor: "Remote workers and office employees who sit for 6+ hours a day. Anyone with mild to moderate lower back pain who needs reliable, affordable daily support.",
    notFor: "People with severe herniated discs or spinal conditions who need medical-grade orthopedic support. Consult a healthcare provider for severe pain.",
    howToUse: "Position the cushion against the chair back so the widest part of the curve supports your lower back (roughly level with your belt line). Secure the strap. Adjust height until you feel gentle pressure at your lumbar curve, not your mid-back or tailbone.",
    faq: [
      { question: "Will this help with sciatica?", answer: "Many users with mild sciatica report reduced symptoms from improved lumbar alignment. However, sciatica has multiple causes — consult a doctor for persistent or severe sciatic pain." },
      { question: "Does it work in a car?", answer: "Yes. The adjustable strap works well on car seats and the cushion's size fits most vehicles. Particularly helpful for long drives." },
      { question: "How long does the memory foam last?", answer: "High-density memory foam typically retains its shape for 3–5 years with daily use. The ComfiLife foam is 45D density, which is on the durable end of the spectrum." },
    ],
    rank: 1,
    featured: true,
  },
  {
    id: "2",
    slug: "lovehome-lumbar-support-cushion",
    name: "LoveHome Memory Foam Lumbar Support",
    brand: "LoveHome",
    asin: "B00E5SXYPY",
    price: "$28",
    priceRange: "Budget",
    rating: 4.4,
    reviewCount: 62000,
    shortDescription: "A firm, contoured lumbar cushion with an ergonomic arch design and dual-strap system for secure placement. One of the most stable options at this price point.",
    cushionType: "Lumbar Support",
    material: "Memory Foam",
    bestFor: ["Office Chair", "Car", "Home Chair"],
    pros: ["Dual-strap system stays in place better than single strap", "Firm support for serious lower back relief", "Affordable price", "Breathable velvet cover", "Ergonomic contour fits spine naturally"],
    cons: ["Firmer than average — may not suit those who prefer soft support", "Cover not removable on all versions", "Slightly bulky for small car seats"],
    featureBreakdown: {
      "Dual Strap System": "Two straps rather than one prevent the cushion from rotating or sliding, even on smooth leather surfaces.",
      "Contoured Shape": "Raised center section provides targeted lumbar arch support while beveled edges avoid pressure points on the sides.",
      "Firm Memory Foam": "Higher firmness rating than many competitors, providing more structural support for those with significant lower back pain.",
    },
    whoItsFor: "People who need firm, stable lumbar support and find softer cushions insufficiently supportive. Good for those whose single-strap cushion keeps sliding out of position.",
    notFor: "Those who prefer softer, more cushioning support. Not recommended for recliners or chairs with unusually shaped backs.",
    howToUse: "Thread both straps around the chair back and buckle. Center the cushion vertically at your lumbar region. The firm foam may take a few days to break in to your specific contour.",
    faq: [
      { question: "How firm is this compared to the ComfiLife?", answer: "Noticeably firmer. LoveHome prioritizes structural support over plush comfort. If you found the ComfiLife too soft, this is likely a better fit." },
      { question: "Is it good for pregnancy back pain?", answer: "Many pregnant users report it helpful for lumbar support during desk work. The firm support can relieve the lower back strain caused by shifting center of gravity." },
    ],
    rank: 2,
    featured: true,
  },
  {
    id: "3",
    slug: "everlasting-comfort-lumbar-support",
    name: "Everlasting Comfort Lumbar Support Pillow",
    brand: "Everlasting Comfort",
    asin: "B07FKRCL7Z",
    price: "$35",
    priceRange: "Budget-Mid",
    rating: 4.5,
    reviewCount: 55000,
    shortDescription: "Pure memory foam with a unique ergonomic design that supports both the lumbar region and the upper back simultaneously. Excellent for long work-from-home sessions.",
    cushionType: "Full Back Support",
    material: "Pure Memory Foam",
    bestFor: ["Office Chair", "Home Office", "Gaming Chair"],
    pros: ["Pure memory foam — no hollow center", "Larger surface area supports upper and lower back", "Machine-washable velvet cover", "Universal adjustable strap", "Great for gamers and long work sessions"],
    cons: ["Larger size may overwhelm small chairs", "Higher price than basic options", "May feel too large for car use"],
    featureBreakdown: {
      "Pure Memory Foam Core": "Solid memory foam construction with no hollow air pocket, providing consistent support across the entire contact surface.",
      "Extended Coverage": "Taller than most lumbar cushions to provide support from the lumbar through the lower thoracic spine — ideal for those who experience mid and lower back pain simultaneously.",
    },
    whoItsFor: "Remote workers with both lumbar and mid-back discomfort. Gamers and those who spend 8+ hours seated daily.",
    notFor: "Those who need targeted lumbar-only support. Not ideal for car seats or small office chairs where the larger size may not fit well.",
    howToUse: "Position so the cushion spans from your lower back to mid-back. The ergonomic curve should align with your natural spine curvature.",
    faq: [
      { question: "Is this good for gaming chairs?", answer: "Yes — the extended height works especially well with gaming chairs, which typically have high, flat backs that offer little lumbar curve." },
    ],
    rank: 3,
    featured: true,
  },
  {
    id: "4",
    slug: "relax-support-rs1-lumbar-cushion",
    name: "Relax Support RS1 Lumbar Cushion",
    brand: "Relax Support",
    asin: "B00L7JQNLU",
    price: "$45",
    priceRange: "Mid-Range",
    rating: 4.3,
    reviewCount: 28000,
    shortDescription: "A medium-firm adjustable lumbar cushion with a uniquely soft outer layer over a firmer core — giving you the best of both support styles in one product.",
    cushionType: "Adjustable Lumbar",
    material: "Dual-Density Foam",
    bestFor: ["Office Chair", "Car", "Travel", "Home"],
    pros: ["Dual-density design: firm core, soft outer", "Adjustable height with internal strap", "Works for car, office, and travel", "Excellent durability", "Multiple firmness options available"],
    cons: ["Higher price than entry-level cushions", "Internal adjustment can be fiddly", "Bulkier than minimalist options"],
    featureBreakdown: {
      "Dual-Density Construction": "Soft velour-covered outer layer for initial comfort, over a firm memory foam core for structural support. Prevents the 'hammock effect' common in overly soft cushions.",
      "Height Adjustment": "Internal strap lets you shift the cushion's position on the chair back without removing and repositioning — useful when switching between sitting postures throughout the day.",
    },
    whoItsFor: "Those who find single-density cushions either too hard or too soft. Ideal for people who alternate between upright sitting and more relaxed postures.",
    notFor: "Minimalists or budget shoppers. The adjustment features add complexity that some users find unnecessary.",
    howToUse: "Set the internal strap to place the cushion at lumbar height. Use the external strap to secure to the chair. Adjust height via the internal strap as needed throughout the day.",
    faq: [
      { question: "What makes dual-density worth the extra cost?", answer: "Single-density foam forces a compromise between softness and support. Dual-density gives you immediate surface comfort while the firm core prevents your back from sinking through the cushion over hours of use." },
    ],
    rank: 4,
  },
  {
    id: "5",
    slug: "sabar-car-lumbar-support",
    name: "Sabar Car Lumbar Support Pillow",
    brand: "Sabar",
    asin: "B08HGXV5GF",
    price: "$22",
    priceRange: "Budget",
    rating: 4.3,
    reviewCount: 18000,
    shortDescription: "Specifically designed for car seats with a narrow profile, headrest-compatible strap routing, and a shape that works with bucket seats' natural contour.",
    cushionType: "Car Lumbar Support",
    material: "Memory Foam",
    bestFor: ["Car Seat", "Truck", "Van", "Long Drives"],
    pros: ["Designed specifically for cars and trucks", "Narrow profile fits bucket seats", "Car-compatible strap routing", "Very affordable", "Reduces driver fatigue on long trips"],
    cons: ["Not as versatile for office chairs", "Smaller than general-purpose cushions", "Less supportive for severe back pain"],
    featureBreakdown: {
      "Car-Specific Design": "Narrower profile and deeper contour designed for bucket car seats rather than flat office chairs. The strap routes around the headrest post rather than over the seat back.",
      "Driver Fatigue Reduction": "Proper lumbar support reduces the muscle tension that causes driver fatigue, improving alertness and comfort on long journeys.",
    },
    whoItsFor: "Drivers and passengers who experience lower back pain on commutes or long road trips. Delivery drivers and truck drivers who spend most of their day in a vehicle.",
    notFor: "Primary office chair use. The car-specific design is less effective on flat office chair backs.",
    howToUse: "Route the strap through or around the headrest post. Center the cushion at your lower back. For cars without adjustable headrests, use the secondary velcro attachment.",
    faq: [
      { question: "Does it work in a truck?", answer: "Yes — the car-specific design works well in trucks, SUVs, and vans. The strap system accommodates larger seat backs common in trucks." },
    ],
    rank: 5,
  },
  {
    id: "6",
    slug: "travelrest-ultimate-lumbar-travel",
    name: "TravelRest Ultimate Travel Lumbar Pillow",
    brand: "TravelRest",
    asin: "B004FPUTVC",
    price: "$40",
    priceRange: "Mid-Range",
    rating: 4.2,
    reviewCount: 12000,
    shortDescription: "The only lumbar cushion on our list designed specifically for air travel — inflatable for compact packing, with a sling design that attaches to the airplane seat tray.",
    cushionType: "Travel Inflatable",
    material: "Inflatable TPU",
    bestFor: ["Airplane", "Train", "Travel", "Car"],
    pros: ["Packs flat for travel — no bulk in carry-on", "Attaches to airplane seat tray back", "Adjustable inflation for custom firmness", "Works on trains and buses", "Durable TPU material"],
    cons: ["Not suitable for office chair use", "Inflatable less supportive than foam", "Must inflate/deflate for each use"],
    featureBreakdown: {
      "Inflation System": "Valve allows custom inflation from soft to firm. Deflates to about 1 inch thick for packing.",
      "Tray Table Attachment": "Unique sling design loops over the airplane seat tray in the down position, keeping the pillow at exactly the right height — something no strap-based cushion can replicate on a plane.",
    },
    whoItsFor: "Frequent flyers who suffer back pain on long-haul flights. Business travelers who want effective lumbar support without checking a bag.",
    notFor: "Home or office use. This product is optimized for travel scenarios where foam cushions are impractical.",
    howToUse: "Inflate to desired firmness. On planes, lower the tray table and loop the sling around the tray edge. The cushion will hang at lumbar height on the seat in front.",
    faq: [
      { question: "Does it work on economy class airline seats?", answer: "Yes — designed specifically for economy class seats, where lumbar support is minimal and the tray table attachment is the most reliable anchor point." },
    ],
    rank: 6,
  },
  {
    id: "7",
    slug: "desk-jockey-lumbar-roll",
    name: "Original McKenzie SuperRoll Lumbar Roll",
    brand: "OPTP",
    asin: "B000I1DXQO",
    price: "$38",
    priceRange: "Mid-Range",
    rating: 4.4,
    reviewCount: 9500,
    shortDescription: "The physical therapist's favorite — a classic lumbar roll used in clinics worldwide. Simple, effective, and backed by decades of clinical use for lumbar support.",
    cushionType: "Lumbar Roll",
    material: "Foam Roll",
    bestFor: ["Office Chair", "Physical Therapy", "Home Chair", "Car"],
    pros: ["Recommended by physical therapists", "Classic, clinically-proven design", "Durable foam that holds shape for years", "Affordable and portable", "Easy to position and adjust"],
    cons: ["No strap — must be held by chair back pressure", "Less convenient than cushions with straps", "Minimal padding for those wanting plush comfort"],
    featureBreakdown: {
      "Clinical Design": "McKenzie lumbar rolls have been used in physical therapy practices for over 40 years. The cylindrical shape precisely fills the lumbar lordosis gap without over-correcting.",
      "Foam Durability": "Denser foam than typical seat cushions. Designed to maintain its cylindrical shape under prolonged pressure.",
    },
    whoItsFor: "Anyone whose physical therapist has recommended lumbar roll support. Those who prefer a simple, proven solution over feature-heavy cushions.",
    notFor: "Those who need a cushion that stays in place via strap — the roll works best pressed between your back and a firm chair back.",
    howToUse: "Place the roll horizontally across the chair back at your lumbar region. Sit back firmly so your body weight holds it in position. No strap is needed when used correctly with a firm chair back.",
    faq: [
      { question: "Why do physical therapists recommend this over other cushions?", answer: "The cylindrical shape provides precise, consistent lumbar support without the risk of over-correcting the curve, which some contoured cushions can do if positioned incorrectly." },
    ],
    rank: 7,
  },
  {
    id: "8",
    slug: "tempur-pedic-lumbar-support-pillow",
    name: "Tempur-Pedic Lumbar Support Pillow",
    brand: "Tempur-Pedic",
    asin: "B001CF48MU",
    price: "$80",
    priceRange: "Premium",
    rating: 4.3,
    reviewCount: 7200,
    shortDescription: "Premium TEMPUR material from the brand synonymous with pressure relief. If budget isn't a concern, this is the most pressure-distributing lumbar cushion available.",
    cushionType: "Premium Lumbar",
    material: "TEMPUR Foam",
    bestFor: ["Office Chair", "Home Chair", "Premium Use"],
    pros: ["Genuine TEMPUR pressure-relief material", "Exceptional durability — 5+ year lifespan", "Temperature-sensitive for personalized contouring", "Premium build quality", "Backed by Tempur-Pedic brand reputation"],
    cons: ["Significantly more expensive than alternatives", "Heavy for a lumbar cushion", "TEMPUR foam traps heat in warm environments", "May be overkill for mild back discomfort"],
    featureBreakdown: {
      "TEMPUR Material": "Proprietary viscoelastic foam that responds to body heat and weight to distribute pressure evenly. Originally developed by NASA for seat cushioning.",
      "Longevity": "TEMPUR material is rated to outlast standard memory foam significantly, making the higher upfront cost offset over 5+ years of use.",
    },
    whoItsFor: "Those with chronic back pain who want maximum pressure relief and are willing to invest in the best available material. Those who've found memory foam cushions too firm.",
    notFor: "Budget-conscious shoppers. Those who run hot, as TEMPUR foam retains body heat more than open-cell memory foam.",
    howToUse: "Allow the foam to warm to room temperature before use in cold environments (cold TEMPUR is firmer). Position at lumbar region and allow 10–15 minutes for the foam to conform to your shape.",
    faq: [
      { question: "Is Tempur-Pedic worth the premium over regular memory foam?", answer: "For chronic pain sufferers, yes — the pressure distribution is noticeably superior. For mild discomfort, the ComfiLife or Everlasting Comfort at a third of the price will likely suffice." },
    ],
    rank: 8,
  },
];

export function getAllProducts(): Product[] {
  return products.sort((a, b) => a.rank - b.rank);
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured).sort((a, b) => a.rank - b.rank);
}
