import Image from "next/image";
import Link from "next/link";
import { Product } from "@/lib/types";
import Badge from "./Badge";
import Heading from "./Heading";
import Text from "./Text";

interface ProductCardProps {
  product: Product;
  className?: string;
}

export default function ProductCard({ product, className = "" }: ProductCardProps) {
  return (
    <Link href={`/collection/${product.slug}`} className={`group block ${className}`}>
      {/* Image Container */}
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-shell-sand/20 mb-6 rounded-sm">
        {product.badge && (
          <div className="absolute top-4 left-4 z-10">
            <Badge variant="gold">{product.badge}</Badge>
          </div>
        )}
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-shell-ink/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </div>

      {/* Product Details */}
      <div className="space-y-2 text-center">
        <Heading level={4} className="text-xl">
          {product.name}
        </Heading>
        <Text variant="caption" className="line-clamp-1">
          {product.tagline}
        </Text>
        <Text variant="body" className="pt-2">
          ${product.price} {product.currency}
        </Text>
      </div>
    </Link>
  );
}
