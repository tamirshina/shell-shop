import { Section, Container } from "@/components/layout";
import { Heading, Text, Overline, Divider, WaitlistForm } from "@/components/ui";

export const metadata = {
  title: "Join the First Drop — Sea Shells from the Holy Land",
  description: "Be the first to access our inaugural collection. Join the waitlist for exclusive early access and a quiet email when we launch.",
};

export default function FirstDropPage() {
  return (
    <main className="pt-20 md:pt-32">
      {/* Hero */}
      <Section bg="pearl" className="min-h-[60vh] !py-20 md:!py-32">
        <Container narrow className="flex flex-col items-center text-center space-y-8">
          <Overline>Exclusive Access</Overline>
          <Heading level={1}>
            The First Drop
          </Heading>
          <Text variant="lead" className="max-w-xl">
            Our inaugural collection is almost ready. Six pieces, each one a love
            letter to a specific shell form from the Mediterranean coast. Be the
            first to know when they arrive.
          </Text>
          <Divider decorative />
        </Container>
      </Section>

      {/* Why Join */}
      <Section bg="white">
        <Container narrow className="flex flex-col items-center space-y-12">
          <div className="text-center space-y-4">
            <Overline>Why Join?</Overline>
            <Heading level={2}>What You'll Get</Heading>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full">
            {[
              { icon: "✦", title: "Early Access", text: "Shop before the public launch. First Drop members get 24-hour early access." },
              { icon: "◇", title: "Founding Prices", text: "Exclusive introductory pricing available only to First Drop members." },
              { icon: "○", title: "The Story", text: "A behind-the-scenes look at how each piece was designed and crafted." },
            ].map((benefit) => (
              <div key={benefit.title} className="text-center space-y-3">
                <span className="text-2xl text-shell-gold block">{benefit.icon}</span>
                <Heading level={4}>{benefit.title}</Heading>
                <Text variant="caption">{benefit.text}</Text>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Email Form */}
      <Section bg="sand">
        <Container narrow className="flex flex-col items-center text-center space-y-8">
          <Heading level={2}>Join the Waitlist</Heading>
          <Text variant="body" className="max-w-md">
            No spam. Just one quiet email when we launch. Unsubscribe anytime.
          </Text>
          <div className="w-full max-w-md">
            <WaitlistForm />
          </div>
        </Container>
      </Section>

      {/* Trust */}
      <Section bg="white">
        <Container narrow className="flex flex-col items-center text-center space-y-4">
          <Text variant="caption" className="max-w-lg">
            Join over 200 people already on the waitlist. Your email is safe with
            us — we'll never share it, and you can unsubscribe with one click.
          </Text>
        </Container>
      </Section>
    </main>
  );
}
