import Image from "next/image";
import { Section, Container } from "@/components/layout";
import { Heading, Text, Overline, Divider } from "@/components/ui";

export const metadata = {
  title: "Sustainability — Sea Shells from the Holy Land",
  description: "Our commitment to ethical materials, responsible processes, plastic-free packaging, and giving back to Mediterranean conservation.",
};

const pillars = [
  {
    icon: "✦",
    title: "Recycled Metals",
    description: "100% of our gold and silver is recycled from post-consumer sources. No new mining. No environmental destruction. The same radiant metal, without the cost to the earth.",
  },
  {
    icon: "◇",
    title: "Ethical Sourcing",
    description: "Every material in our supply chain is traceable. We work only with certified partners who share our values — fair wages, safe conditions, transparent practices.",
  },
  {
    icon: "○",
    title: "Plastic-Free Packaging",
    description: "From the gift box to the tissue paper to the shipping mailer — every element is recyclable, biodegradable, or compostable. We've eliminated plastic entirely.",
  },
  {
    icon: "◆",
    title: "Small-Batch Production",
    description: "We produce in small, intentional batches to minimize waste. No overproduction. No deadstock. Each piece is made with purpose.",
  },
  {
    icon: "▽",
    title: "Low-Impact Processes",
    description: "Our artisan partners use traditional casting techniques that require less energy than industrial manufacturing. Quality over quantity, always.",
  },
  {
    icon: "☽",
    title: "Giving Back",
    description: "A portion of every sale supports Mediterranean marine conservation efforts. We take inspiration from the sea — and we invest in protecting it.",
  },
];

export default function SustainabilityPage() {
  return (
    <main className="pt-20 md:pt-32">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[360px] flex items-end">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/sustainability-hero.png"
            alt="Eco-friendly jewelry packaging"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-shell-ink/60 via-shell-ink/20 to-transparent" />
        </div>
        <Container className="relative z-10 pb-16 md:pb-24">
          <Overline className="!text-shell-limestone">Our Commitment</Overline>
          <Heading level={1} className="!text-shell-white mt-4 max-w-2xl">
            Sustainability
          </Heading>
        </Container>
      </section>

      {/* Intro */}
      <Section bg="white">
        <Container narrow className="flex flex-col items-center text-center space-y-8">
          <Heading level={2}>Luxury Without Compromise</Heading>
          <Text variant="lead" className="max-w-2xl">
            We believe that beautiful things shouldn't come at the earth's expense.
            Every decision we make — from the metals we choose to the boxes we ship
            in — is guided by a simple question: can we do this more gently?
          </Text>
          <Divider decorative />
        </Container>
      </Section>

      {/* Pillars Grid */}
      <Section bg="salt">
        <Container>
          <div className="text-center space-y-4 mb-16">
            <Overline>Our Pillars</Overline>
            <Heading level={2}>How We Do It</Heading>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16">
            {pillars.map((pillar) => (
              <div key={pillar.title} className="space-y-4">
                <span className="text-3xl text-shell-gold">{pillar.icon}</span>
                <Heading level={4}>{pillar.title}</Heading>
                <Text variant="body">{pillar.description}</Text>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Impact Numbers */}
      <Section bg="pearl">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "100%", label: "Recycled metals" },
              { number: "0", label: "Plastic in packaging" },
              { number: "99%", label: "Less mining impact" },
              { number: "100%", label: "Traceable supply chain" },
            ].map((stat) => (
              <div key={stat.label} className="space-y-2">
                <span className="font-heading text-4xl md:text-5xl font-light text-shell-gold block">
                  {stat.number}
                </span>
                <Text variant="caption" className="uppercase tracking-widest">
                  {stat.label}
                </Text>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Closing */}
      <Section bg="ink">
        <Container narrow className="flex flex-col items-center text-center space-y-8 py-12">
          <Heading level={2} className="!text-shell-sand text-3xl md:text-5xl leading-tight max-w-3xl">
            "The most luxurious thing we can do is leave the world better than we found it."
          </Heading>
          <Text variant="caption" className="!text-shell-limestone tracking-widest uppercase">
            — Our Guiding Principle
          </Text>
        </Container>
      </Section>
    </main>
  );
}
