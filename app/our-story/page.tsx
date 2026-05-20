import Image from "next/image";
import { Section, Container } from "@/components/layout";
import { Heading, Text, Overline, Divider } from "@/components/ui";

export const metadata = {
  title: "Our Story — Sea Shells from the Holy Land",
  description: "How a love for the Mediterranean coastline became a mission to create eco-luxe jewelry that honors nature without taking from it.",
};

export default function OurStoryPage() {
  return (
    <main className="pt-20 md:pt-32">
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] flex items-end">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/story-hero.png"
            alt="Artisan workshop overlooking the Mediterranean"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-shell-ink/60 via-shell-ink/20 to-transparent" />
        </div>
        <Container className="relative z-10 pb-16 md:pb-24">
          <Overline className="!text-shell-limestone">Our Story</Overline>
          <Heading level={1} className="!text-shell-white mt-4 max-w-2xl">
            Born from the Shore
          </Heading>
        </Container>
      </section>

      {/* Origin Story */}
      <Section bg="white">
        <Container narrow className="flex flex-col items-center space-y-8 text-center">
          <Heading level={2}>Where the Land Meets the Sea</Heading>
          <Text variant="lead" className="max-w-2xl">
            Sea Shells began with a simple ritual — long walks along the Mediterranean
            coast at golden hour, collecting small wonders that the tide left behind.
            Not to keep, but to study. To admire the geometry that only nature can craft.
          </Text>
          <Divider decorative />
        </Container>
      </Section>

      {/* The Mission */}
      <Section bg="pearl">
        <Container narrow className="flex flex-col items-center space-y-12">
          <div className="text-center space-y-4">
            <Overline>The Mission</Overline>
            <Heading level={2}>Honor Nature Without Taking From It</Heading>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            <div className="space-y-4">
              <Heading level={4}>What We Don't Do</Heading>
              <Text>
                We never harvest shells from the sea. We never use materials that
                harm marine ecosystems. We never compromise on the ethics of our
                supply chain. The ocean gives us inspiration — we give it respect.
              </Text>
            </div>
            <div className="space-y-4">
              <Heading level={4}>What We Create</Heading>
              <Text>
                Each piece is a translation — from the organic curves of a cowrie
                shell into recycled gold, from the ridges of a scallop into sterling
                silver. We study nature's forms and recreate them with reverence, so
                you can carry a piece of the coast without cost to the coast.
              </Text>
            </div>
          </div>
        </Container>
      </Section>

      {/* Timeline */}
      <Section bg="white">
        <Container narrow className="flex flex-col items-center space-y-16">
          <div className="text-center space-y-4">
            <Overline>The Journey</Overline>
            <Heading level={2}>From Sketch to Shore</Heading>
          </div>

          <div className="space-y-16 w-full max-w-xl">
            {[
              { year: "2023", title: "The First Walk", text: "A summer spent on the Israeli Mediterranean coast. Sketching shell forms in a worn notebook. The idea takes root." },
              { year: "2024", title: "The Workshop", text: "Partnering with artisan goldsmiths who share our values. First prototypes cast in recycled 14k gold. Every ridge, every curve — faithful to nature." },
              { year: "2025", title: "The Collection", text: "Six pieces. Each one a love letter to a specific shell form. Sustainable packaging designed. The brand identity crystallizes." },
              { year: "2026", title: "The First Drop", text: "You're here. The waitlist opens. A community gathers around a shared belief: luxury and sustainability are not at odds." },
            ].map((milestone) => (
              <div key={milestone.year} className="flex gap-8 items-start">
                <span className="font-heading text-4xl font-light text-shell-gold shrink-0 w-20">
                  {milestone.year}
                </span>
                <div className="space-y-2 pt-2">
                  <Heading level={4}>{milestone.title}</Heading>
                  <Text variant="caption">{milestone.text}</Text>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Closing Quote */}
      <Section bg="ink">
        <Container narrow className="flex flex-col items-center text-center space-y-8 py-12">
          <Heading level={2} className="!text-shell-sand text-3xl md:text-5xl leading-tight max-w-3xl">
            "We don't take from the sea. We listen to it."
          </Heading>
          <Text variant="caption" className="!text-shell-limestone tracking-widest uppercase">
            — Tamir Shina, Founder
          </Text>
        </Container>
      </Section>
    </main>
  );
}
