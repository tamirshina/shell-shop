import { getAllProducts } from "@/lib/data/products";
import { Container, Section } from "@/components/layout";
import { Heading, Overline, Text, ProductCard } from "@/components/ui";

export const metadata = {
  title: "The Collection",
  description:
    "Discover our full range of eco-luxe keepsakes, thoughtfully crafted to honor the timeless forms of the Mediterranean coast.",
};

export default function CollectionPage() {
  const products = getAllProducts();

  return (
    <main className="pt-20 md:pt-32">
      {/* Hero Header */}
      <Section bg="pearl" className="!py-12 md:!py-20">
        <Container narrow className="flex flex-col justify-between items-center text-center space-y-6">
          <Overline>Shop</Overline>
          <Heading level={1}>The Collection</Heading>
          <Text variant="lead" className="max-w-xl mx-auto">
            Discover our full range of eco-luxe keepsakes, thoughtfully crafted to honor the timeless forms of the Mediterranean coast.
          </Text>
        </Container>
      </Section>

      {/* Product Grid */}
      <Section bg="salt" className="!pt-8">
        <Container>
          {/* Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-12 md:gap-x-8 md:gap-y-16">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </Container>
      </Section>
    </main>
  );
}
