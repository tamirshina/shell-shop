import { Section, Container } from "@/components/layout";
import { Heading, Text, Overline, Divider, BespokeWaitlistForm } from "@/components/ui";

export const metadata = {
  title: "Join the First Drop — Sea Shells from the Holy Land",
  description: "Be the first to access our inaugural collection. Join the waitlist for exclusive early access and a quiet email when we launch.",
};

export default function FirstDropPage() {
  return (
    <main className="pt-20 md:pt-32">
      {/* Hero */}
      <Section bg="pearl" className="!py-16 md:!py-24 border-b border-shell-limestone/20">
        <Container narrow className="flex flex-col items-center text-center space-y-6">
          <Overline>Exclusive Access</Overline>
          <Heading level={1}>
            The First Drop
          </Heading>
          <Text variant="lead" className="max-w-xl">
            Our inaugural collection is almost ready. Six organic, hand-finished pieces, each one a love letter to a specific shell form from the Mediterranean coast.
          </Text>
        </Container>
      </Section>

      {/* Main Two-Column Layout */}
      <Section bg="white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left: Bespoke Waitlist Form */}
            <div className="flex flex-col gap-5 lg:col-span-8 space-y-6">
              <div className="space-y-2">
                <Overline>Join the Waitlist</Overline>
                <Heading level={2} className="text-3xl md:text-4xl">Secure Your Pieces</Heading>
                <Text variant="body">
                  Register your interest below to secure priority in our upcoming drop and share any bespoke or sizing inquiries.
                </Text>
              </div>
              <BespokeWaitlistForm />
            </div>

            {/* Right: Direct Outreach Column */}
            <div className="lg:col-span-4 lg:sticky lg:top-32">
              <div className="flex flex-col gap-3 bg-shell-salt border border-shell-limestone/30 p-6 md:p-8 space-y-6 rounded-sm">
                <div className="space-y-3">
                  <Overline>Founder Outreach</Overline>
                  <Heading level={3} className="text-2xl font-light">Direct Connection</Heading>
                  <Text variant="caption">
                    Prefer a direct, personal conversation? Reach out to our founder, Tamir Shina, directly. We are happy to discuss custom commissions, size adjustments, special packaging, or immediate orders.
                  </Text>
                </div>
                <Divider />
                <div className="flex flex-col gap-2 space-y-4 pt-2">
                  <a
                    href="mailto:tamir@seashells-holyland.com"
                    className="flex items-center gap-4 p-4 border border-shell-limestone/30 rounded-sm bg-shell-white hover:border-shell-gold hover:bg-shell-sand/10 transition-all duration-300 group"
                  >
                    <span className="text-xl text-shell-gold group-hover:scale-110 transition-transform duration-300">✉</span>
                    <div className="overflow-hidden">
                      <span className="font-heading text-[10px] font-semibold uppercase tracking-wider text-shell-olive block">Email Direct</span>
                      <span className="font-body text-xs text-shell-ink truncate block">tamir@seashells-holyland.com</span>
                    </div>
                  </a>

                  <a
                    href="tel:+972547654321"
                    className="flex items-center gap-4 p-4 border border-shell-limestone/30 rounded-sm bg-shell-white hover:border-shell-gold hover:bg-shell-sand/10 transition-all duration-300 group"
                  >
                    <span className="text-xl text-shell-gold group-hover:scale-110 transition-transform duration-300">☎</span>
                    <div>
                      <span className="font-heading text-[10px] font-semibold uppercase tracking-wider text-shell-olive block">Phone / WhatsApp</span>
                      <span className="font-body text-xs text-shell-ink">+972 54 765 4321</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
