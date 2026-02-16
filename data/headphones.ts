export interface Headphone {
  id: number;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  description: string;
  features: string[];
  imageUrl: string;
  rating: number;
  pickNumber: number;
}

export const headphones: Headphone[] = [
  {
    id: 1,
    name: "WH-1000XM5",
    brand: "Sony",
    price: 348,
    originalPrice: 399,
    description: "Our top pick for most people with standout ANC and a full-day battery.",
    features: [
      "Excellent active noise cancellation in crowded spaces.",
      "Comfortable fit for all-day work and travel.",
      "Reliable 30-hour battery with USB-C quick charge.",
    ],
    imageUrl: "/headphones/sony-xm5.svg",
    rating: 4.8,
    pickNumber: 1,
  },
  {
    id: 2,
    name: "QuietComfort Ultra",
    brand: "Bose",
    price: 379,
    originalPrice: 429,
    description: "Plush fit and strong noise reduction, especially for long flights.",
    features: [
      "Soft ear cushions that stay comfortable for long sessions.",
      "Class-leading wind and cabin noise suppression.",
      "Balanced tuning with strong vocal clarity.",
    ],
    imageUrl: "/headphones/bose-qc-ultra.svg",
    rating: 4.7,
    pickNumber: 2,
  },
  {
    id: 3,
    name: "AirPods Max",
    brand: "Apple",
    price: 479,
    originalPrice: 549,
    description: "Best for Apple users who want frictionless switching and rich detail.",
    features: [
      "Seamless multi-device pairing in the Apple ecosystem.",
      "Spacious soundstage with adaptive EQ.",
      "Premium aluminum build with excellent microphones.",
    ],
    imageUrl: "/headphones/airpods-max.svg",
    rating: 4.6,
    pickNumber: 3,
  },
  {
    id: 4,
    name: "Momentum 4 Wireless",
    brand: "Sennheiser",
    price: 299,
    originalPrice: 379,
    description: "Big, balanced sound with marathon battery life.",
    features: [
      "Up to 60-hour battery life on a single charge.",
      "Detailed sound signature that works across genres.",
      "Useful app controls for EQ and sound personalization.",
    ],
    imageUrl: "/headphones/sennheiser-momentum4.svg",
    rating: 4.7,
    pickNumber: 4,
  },
  {
    id: 5,
    name: "WH-CH720N",
    brand: "Sony",
    price: 149,
    description: "Budget-friendly pick with surprisingly good ANC.",
    features: [
      "Lightweight frame that feels easy for daily commutes.",
      "Effective ANC for the price tier.",
      "Strong battery life with fast top-up charging.",
    ],
    imageUrl: "/headphones/sony-ch720n.svg",
    rating: 4.5,
    pickNumber: 5,
  },
  {
    id: 6,
    name: "Px7 S2e",
    brand: "Bowers & Wilkins",
    price: 399,
    description: "Polished build with a warm, detailed tuning.",
    features: [
      "Rich, musical tuning with premium detail retrieval.",
      "Refined design with durable materials.",
      "Consistent Bluetooth performance with low latency.",
    ],
    imageUrl: "/headphones/bw-px7.svg",
    rating: 4.6,
    pickNumber: 6,
  },
  {
    id: 7,
    name: "H9i",
    brand: "Bang & Olufsen",
    price: 449,
    description: "Luxury materials with a refined, relaxed sound.",
    features: [
      "Elegant industrial design with real metal and leather.",
      "Smooth and fatigue-free sound for long listening.",
      "Intuitive touch controls with stable connectivity.",
    ],
    imageUrl: "/headphones/bo-h9i.svg",
    rating: 4.5,
    pickNumber: 7,
  },
  {
    id: 8,
    name: "Elite 85h",
    brand: "Jabra",
    price: 199,
    originalPrice: 299,
    description: "Best for calls with clear mics and smart ambient modes.",
    features: [
      "Clear voice pickup in noisy environments.",
      "SmartSound profiles adapt to surroundings automatically.",
      "Durable chassis with dependable battery performance.",
    ],
    imageUrl: "/headphones/jabra-elite85h.svg",
    rating: 4.6,
    pickNumber: 8,
  },
  {
    id: 9,
    name: "Space One",
    brand: "Soundcore",
    price: 99,
    description: "Best value with long battery life and capable ANC.",
    features: [
      "Excellent value-to-performance ratio under $100.",
      "Big battery life for week-long casual use.",
      "Helpful app with EQ presets and customization.",
    ],
    imageUrl: "/headphones/soundcore-space-one.svg",
    rating: 4.4,
    pickNumber: 9,
  },
  {
    id: 10,
    name: "Bathys",
    brand: "Focal",
    price: 699,
    description: "Audiophile splurge with a built-in DAC and premium detail.",
    features: [
      "High-resolution wired DAC mode for critical listening.",
      "Luxurious comfort and premium craftsmanship.",
      "Expansive, reference-leaning sound signature.",
    ],
    imageUrl: "/headphones/focal-bathys.svg",
    rating: 4.7,
    pickNumber: 10,
  },
];
