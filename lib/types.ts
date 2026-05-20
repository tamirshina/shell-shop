export type Product = {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  price: number;
  currency: string;
  images: string[];
  materials: string[];
  category: "necklace" | "bracelet" | "ring" | "earring" | "gift-set";
  badge?: "First Drop" | "Limited" | "Eco-Friendly" | "Handcrafted";
  isFeatured: boolean;
  sustainabilityNote: string;
};
