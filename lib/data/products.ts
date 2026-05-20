import { Product } from "../types";

export const products: Product[] = [
  {
    id: "p-001",
    slug: "cowrie-pendant",
    name: "Cowrie Shell Pendant",
    tagline: "A symbol of protection and prosperity.",
    description: "Inspired by the delicate ridges of Mediterranean cowrie shells, this pendant is cast in solid recycled gold with a soft matte finish. Suspended on a delicate chain, it sits close to the heart.",
    price: 340,
    currency: "USD",
    images: ["/images/products/cowrie-pendant.png"],
    materials: ["Recycled 14k Gold", "Ethically Sourced Gold Chain"],
    category: "necklace",
    isFeatured: true,
    sustainabilityNote: "Cast in 100% recycled 14k gold, reducing mining impact by 99%.",
  },
  {
    id: "p-002",
    slug: "coastal-charm-bracelet",
    name: "Coastal Charm Bracelet",
    tagline: "The essence of the shoreline at your wrist.",
    description: "A delicate sterling silver chain adorned with tiny, meticulously crafted cowrie shell charms. The perfect layering piece to carry a piece of the coast with you everywhere.",
    price: 185,
    currency: "USD",
    images: ["/images/products/coastal-charm-bracelet.png"],
    materials: ["Recycled Sterling Silver", "Brushed Gold Accents"],
    category: "bracelet",
    isFeatured: true,
    sustainabilityNote: "Made entirely from post-consumer recycled silver and gold.",
  },
  {
    id: "p-003",
    slug: "tideline-drops",
    name: "Tideline Drops",
    tagline: "Elegant simplicity, inspired by water's edge.",
    description: "Organic drop earrings that mirror the gentle curves of wave-tossed shells. These statement pieces catch the light beautifully, offering a sophisticated nod to nature.",
    price: 220,
    currency: "USD",
    images: ["/images/products/tideline-drops.png"],
    materials: ["Brushed 14k Gold Vermeil", "Sterling Silver Base"],
    category: "earring",
    badge: "Eco-Friendly",
    isFeatured: true,
    sustainabilityNote: "Vermeil plating uses a high-quality, durable gold layer over recycled silver, ensuring longevity and lower environmental impact.",
  },
  {
    id: "p-004",
    slug: "shell-motif-ring",
    name: "Shell Motif Ring",
    tagline: "A subtle touch of the sea.",
    description: "A minimalist ring featuring a delicate shell motif. Perfect for stacking or wearing alone as a quiet statement of your connection to the ocean.",
    price: 150,
    currency: "USD",
    images: ["/images/products/shell-ring.png"],
    materials: ["14k Solid Gold"],
    category: "ring",
    isFeatured: false,
    sustainabilityNote: "Handcrafted in small batches to minimize waste.",
  },
  {
    id: "p-005",
    slug: "cascading-statement-necklace",
    name: "Cascading Statement Necklace",
    tagline: "Bold elegance inspired by the shore.",
    description: "A breathtaking statement piece featuring multiple cast shell pendants cascading from a sturdy linked chain. Designed for those who carry the ocean's bold energy.",
    price: 480,
    currency: "USD",
    images: ["/images/products/statement-necklace.png"],
    materials: ["Recycled Silver", "Brushed Gold"],
    category: "necklace",
    isFeatured: false,
    sustainabilityNote: "Constructed using off-cuts and recycled materials from our workshop.",
  },
  {
    id: "p-006",
    slug: "ocean-earth-gift-set",
    name: "Ocean & Earth Gift Set",
    tagline: "The perfect gift for the nature lover.",
    description: "A beautifully curated set including our signature shell necklace and matching earrings. Presented in an eco-friendly kraft paper box, ready for gifting.",
    price: 395,
    currency: "USD",
    images: ["/images/products/gift-set.png"],
    materials: ["Recycled Silver", "14k Gold Vermeil", "Pearl"],
    category: "gift-set",
    isFeatured: false,
    sustainabilityNote: "Packaged entirely in plastic-free, recyclable, and biodegradable materials.",
  },
];

export const getAllProducts = (): Product[] => {
  return products;
};

export const getProductBySlug = (slug: string): Product | undefined => {
  return products.find((p) => p.slug === slug);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter((p) => p.isFeatured);
};

export const getProductsByCategory = (category: Product["category"]): Product[] => {
  return products.filter((p) => p.category === category);
};
