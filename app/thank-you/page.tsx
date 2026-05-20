import { Section, Container } from "@/components/layout";
import { Heading, Text, Overline, Divider, Button } from "@/components/ui";

export const metadata = {
  title: "Thank You — Sea Shells from the Holy Land",
  description: "You're on the list! We'll send you one quiet email when our inaugural collection launches.",
};

export default function ThankYouPage() {
  return (
    <main className="pt-20 md:pt-32">
      <Section bg="pearl" className="min-h-[70vh] !py-20 md:!py-32">
        <Container narrow className="flex flex-col items-center text-center space-y-8">
          <span className="text-5xl">✦</span>
          <Overline>You're In</Overline>
          <Heading level={1}>Thank You</Heading>
          <Text variant="lead" className="max-w-xl">
            You're now on the First Drop waitlist. When our inaugural collection
            is ready, you'll be the first to know — with one quiet email, just as
            we promised.
          </Text>
          <Divider decorative />
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button variant="primary" as="a" href="/collection">
              Explore the Collection
            </Button>
            <Button variant="secondary" as="a" href="/our-story">
              Read Our Story
            </Button>
          </div>
        </Container>
      </Section>
    </main>
  );
}
