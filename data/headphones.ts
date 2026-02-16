export interface Headphone {
  id: number;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  priceHistory?: {
    date: string;
    price: number;
  }[];
  description: string;
  longDescription: string;
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
    priceHistory: [
      { date: "2025-09-01", price: 399 },
      { date: "2025-10-01", price: 379 },
      { date: "2025-11-01", price: 349 },
      { date: "2025-12-01", price: 369 },
      { date: "2026-01-01", price: 359 },
      { date: "2026-02-01", price: 348 },
    ],
    description: "Our top pick for most people with standout ANC and a full-day battery.",
    longDescription:
      "Sony's flagship noise canceling over-ears use a multi-mic system and dual processors to tune out distractions and sharpen call quality, with high-resolution audio support for detailed listening.",
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
    longDescription:
      "The QuietComfort Ultra is the QuietComfort line's CustomTune-calibrated model, using in-ear measurements to tailor sound and noise cancellation, with multiple ANC modes for travel or focus. If the QC45 is your baseline, CustomTune is the defining upgrade, and RTINGS finds its noise isolation edges out Sony's WH-1000XM5. Battery life is rated at 24 hours (18 with Immersive Audio), with RTINGS measuring about 29 hours in real use.",
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
    longDescription:
      "Apple's over-ear headphones deliver high-fidelity sound with Active Noise Cancellation and Personalized Spatial Audio, wrapped in a comfort-focused design with USB-C charging.",
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
    longDescription:
      "Sennheiser's Momentum 4 Wireless pairs adaptive noise cancellation and transparency mode with Sennheiser Signature Sound, customizable sound controls, and up to 60 hours of battery life.",
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
    priceHistory: [
      { date: "2025-09-01", price: 199 },
      { date: "2025-10-01", price: 189 },
      { date: "2025-11-01", price: 149 },
      { date: "2025-12-01", price: 169 },
      { date: "2026-01-01", price: 159 },
      { date: "2026-02-01", price: 149 },
    ],
    description: "Budget-friendly pick with surprisingly good ANC.",
    longDescription:
      "Sony's lightest ANC headband uses the Integrated Processor V1 and Dual Noise Sensor tech for stronger noise reduction, with DSEE sound enhancement, multipoint Bluetooth, and an all-day comfortable fit.",
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
    longDescription:
      "Bowers & Wilkins' Px7 S2e is a re-tuned evolution with 24-bit DSP, custom 40mm drivers, hybrid noise cancellation, and premium materials for all-day comfort.",
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
    longDescription:
      "Bang & Olufsen's Beoplay H9i leans into luxury with anodized aluminum and leather materials plus advanced active noise cancellation for immersive travel listening.",
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
    longDescription:
      "Jabra's Elite 85h uses SmartSound adaptive audio with Smart ANC, eight microphones for clearer calls, and rain-resistant durability paired with the Sound+ app.",
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
    longDescription:
      "Soundcore's Space One pairs adaptive noise cancelling with 40mm drivers, adjustable transparency, and long battery life for affordable everyday use.",
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
    longDescription:
      "Focal's Bathys focuses on high-fidelity wireless listening with active noise cancelling modes, premium comfort, and fast-charging battery life over 30 hours.",
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
