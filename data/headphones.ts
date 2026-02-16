export interface Headphone {
  id: number;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  description: string;
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
    description: "Best overall noise-cancelling headphone with industry-leading ANC and 30-hour battery.",
    imageUrl: "/headphones/sony-xm5.jpg",
    rating: 4.8,
    pickNumber: 1,
  },
  {
    id: 2,
    name: "QuietComfort Ultra",
    brand: "Bose",
    price: 379,
    originalPrice: 429,
    description: "Premium comfort and spatial audio with exceptional noise cancellation.",
    imageUrl: "/headphones/bose-qc-ultra.jpg",
    rating: 4.7,
    pickNumber: 2,
  },
  {
    id: 3,
    name: "AirPods Max",
    brand: "Apple",
    price: 479,
    originalPrice: 549,
    description: "Best for Apple users with seamless ecosystem integration and premium build.",
    imageUrl: "/headphones/airpods-max.jpg",
    rating: 4.6,
    pickNumber: 3,
  },
  {
    id: 4,
    name: "Momentum 4 Wireless",
    brand: "Sennheiser",
    price: 299,
    originalPrice: 379,
    description: "Audiophile-grade sound quality with 60-hour battery life.",
    imageUrl: "/headphones/sennheiser-momentum4.jpg",
    rating: 4.7,
    pickNumber: 4,
  },
  {
    id: 5,
    name: "WH-CH720N",
    brand: "Sony",
    price: 149,
    description: "Best budget option with impressive noise cancellation at an affordable price.",
    imageUrl: "/headphones/sony-ch720n.jpg",
    rating: 4.5,
    pickNumber: 5,
  },
  {
    id: 6,
    name: "Px7 S2e",
    brand: "Bowers & Wilkins",
    price: 399,
    description: "Premium build quality with rich, detailed sound for discerning listeners.",
    imageUrl: "/headphones/bw-px7.jpg",
    rating: 4.6,
    pickNumber: 6,
  },
  {
    id: 7,
    name: "H9i",
    brand: "Bang & Olufsen",
    price: 449,
    description: "Luxury design meets exceptional sound with premium materials throughout.",
    imageUrl: "/headphones/bo-h9i.jpg",
    rating: 4.5,
    pickNumber: 7,
  },
  {
    id: 8,
    name: "Elite 85h",
    brand: "Jabra",
    price: 199,
    originalPrice: 299,
    description: "Best for calls with 8-microphone system and SmartSound audio optimization.",
    imageUrl: "/headphones/jabra-elite85h.jpg",
    rating: 4.6,
    pickNumber: 8,
  },
  {
    id: 9,
    name: "Space One",
    brand: "Soundcore",
    price: 99,
    description: "Best value with surprisingly good ANC and 55-hour battery life.",
    imageUrl: "/headphones/soundcore-space-one.jpg",
    rating: 4.4,
    pickNumber: 9,
  },
  {
    id: 10,
    name: "Bathys",
    brand: "Focal",
    price: 699,
    description: "Ultimate audiophile wireless headphone with DAC and Hi-Res audio support.",
    imageUrl: "/headphones/focal-bathys.jpg",
    rating: 4.7,
    pickNumber: 10,
  },
];
