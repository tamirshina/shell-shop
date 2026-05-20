import Image from "next/image";
import { notFound } from "next/navigation";
import { getProductBySlug, getAllProducts } from "@/lib/data/products";
import { Container, Section } from "@/components/layout";
import { Heading, Text, Overline, Divider, Badge, WaitlistForm } from "@/components/ui";

export function generateStaticParams() {
  const products = getAllProducts();
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <main className="pt-20 md:pt-32">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start pb-20">
          {/* Left Column: Image Gallery */}
          <div className="space-y-4 sticky top-32">
            <div className="relative aspect-[4/5] w-full bg-shell-sand/20 rounded-sm overflow-hidden">
              <Image
                src={product.images[0]}
                alt={product.name}
                fill
                priority
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* If there were multiple images, a thumbnail row would go here */}
          </div>

          {/* Right Column: Product Info */}
          <div className="flex flex-col gap-4 space-y-8 pt-4 lg:pt-12">
            <div className="space-y-4">
              <div className="flex gap-2 items-center">
                <Overline>{product.category}</Overline>
                {product.badge && <Badge variant="gold">{product.badge}</Badge>}
              </div>
              <Heading level={1} className="text-4xl md:text-5xl">{product.name}</Heading>
              <Text variant="lead" className="text-shell-gold text-2xl">
                ${product.price} {product.currency}
              </Text>
            </div>

            <Divider />

            <div className="space-y-6">
              <Text variant="body">{product.description}</Text>

              <div className="space-y-2">
                <Overline>Materials</Overline>
                <ul className="list-inside list-disc font-body text-sm text-shell-olive space-y-1">
                  {product.materials.map((material, idx) => (
                    <li key={idx}>{material}</li>
                  ))}
                </ul>
              </div>

              <div className="space-y-2">
                <Overline>Sustainability Note</Overline>
                <Text variant="caption">{product.sustainabilityNote}</Text>
              </div>
            </div>

            <Divider />

            {/* Waitlist Call to Action */}
            <div className="bg-shell-salt p-6 md:p-8 space-y-6 rounded-sm border border-shell-limestone/30">
              <div className="space-y-2">
                <Heading level={4}>Join the First Drop Waitlist</Heading>
                <Text variant="caption">This piece is part of our upcoming inaugural collection. Join the waitlist to secure early access.</Text>
              </div>
              <WaitlistForm />
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
