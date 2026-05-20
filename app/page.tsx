import Image from "next/image";
import { Button, Heading, Text, Overline, Divider, ProductCard, WaitlistForm } from "@/components/ui";
import { Section, Container } from "@/components/layout";
import { getFeaturedProducts } from "@/lib/data/products";

export default function Home() {
  const featuredProducts = getFeaturedProducts();

  return (
    <main>
      {/* 1. Hero Section */}
      <section className="relative min-h-dvh flex items-center justify-center pt-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero.png"
            alt="Mediterranean coastal scene"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-shell-ink/20" />
        </div>
        <Container className="relative z-10 text-center space-y-8 flex flex-col items-center justify-center">
          <Overline className="!text-shell-white">Eco-Luxe Mediterranean Keepsakes</Overline>
          <Heading level={1} className="!text-shell-white max-w-4xl mx-auto drop-shadow-sm">
            Sea Shells
            <span className="block !text-shell-sand">from the Holy Land</span>
          </Heading>
          <Text variant="lead" className="max-w-xl mx-auto !text-shell-salt drop-shadow-sm">
            Designed with reverence for nature, place, and memory — without
            taking from the sea.
          </Text>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button variant="primary" size="md" as="a" href="/first-drop">
              Join the First Drop
            </Button>
            <Button variant="secondary" size="md" as="a" href="/collection" className="text-shell-white border-shell-white hover:bg-shell-white/10 hover:border-shell-white">
              Explore the Collection
            </Button>
          </div>
        </Container>
      </section>

      {/* 2. Brand Statement */}
      <Section bg="white">
        <Container narrow className="text-center space-y-8 flex flex-col items-center w-full justify-center">
          <Overline className="text-center">Our Philosophy</Overline>
          <Heading level={2} className="max-w-2xl mx-auto text-center w-full">
            Crafted with Intention
          </Heading>
          <Text variant="lead" className="max-w-2xl mx-auto text-center w-full">
            Every piece begins with the quiet beauty of the Mediterranean
            coastline — its textures, its light, its timeless forms. We
            translate these into wearable keepsakes that honor nature without
            taking from it.
          </Text>
          <Divider decorative className="mx-auto" />
        </Container>
      </Section>

      {/* 3. Featured Collection Preview */}
      <Section bg="salt">
        <div className="w-full px-6 md:px-8 space-y-12">
          <div className="text-center space-y-4">
            <Overline>The Collection</Overline>
            <Heading level={2}>Featured Pieces</Heading>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center pt-8">
            <Button variant="secondary" size="lg" as="a" href="/collection">
              Explore the Full Collection →
            </Button>
          </div>
        </div>
      </Section>

      {/* 4. Materials / Sustainability Strip */}
      <section className="flex flex-wrap justify-center items-center bg-shell-sand py-12 border-y border-shell-limestone/30">
        <Container className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
          <span className="font-heading text-lg text-shell-olive tracking-widest uppercase">Recycled Gold</span>
          <span className="hidden md:inline text-shell-olive/50">•</span>
          <span className="font-heading text-lg text-shell-olive tracking-widest uppercase">Recycled Silver</span>
          <span className="hidden md:inline text-shell-olive/50">•</span>
          <span className="font-heading text-lg text-shell-olive tracking-widest uppercase">Ethical Origins</span>
          <span className="hidden md:inline text-shell-olive/50">•</span>
          <span className="font-heading text-lg text-shell-olive tracking-widest uppercase">Plastic Free</span>
        </Container>
      </section>

      {/* 5. First Drop CTA Banner */}
      <Section bg="white">
        <Container narrow className="flex flex-col flex-wrap justify-center items-center text-center space-y-8">
          <Overline>Exclusive Access</Overline>
          <Heading level={2}>Be the First to Know</Heading>
          <Text variant="lead" className="max-w-xl mx-auto">
            Join the waitlist for our inaugural collection. No spam. Just one quiet email when we launch.
          </Text>
          <div className="max-w-md mx-auto pt-4">
            <WaitlistForm />
          </div>
        </Container>
      </Section>

      {/* 6. Editorial Quote */}
      <Section bg="ink">
        <Container narrow className="text-center space-y-8 py-12">
          <Heading level={2} className="!text-shell-sand text-3xl md:text-5xl leading-tight">
            "To wear a shell is to carry the rhythm of the tides, a quiet reminder of where the land meets the sea."
          </Heading>
          <Text variant="caption" className="!text-shell-limestone tracking-widest uppercase">
            — Tamir Shina, Founder
          </Text>
        </Container>
      </Section>
    </main>
  );
}
