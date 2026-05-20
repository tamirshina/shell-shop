import { Section, Container } from "@/components/layout";
import { Heading, Text, Overline, Divider, Button } from "@/components/ui";

export const metadata = {
  title: "404 — Lost at Sea",
  description: "This page doesn't exist. Let's get you back to shore.",
};

export default function NotFound() {
  return (
    <main className="pt-20 md:pt-32">
      <Section bg="pearl" className="min-h-[70vh] !py-20 md:!py-32">
        <Container narrow className="flex flex-col items-center text-center space-y-8">
          <span className="font-heading text-[120px] md:text-[180px] font-light text-shell-limestone/40 leading-none select-none">
            404
          </span>
          <Overline>Lost at Sea</Overline>
          <Heading level={2}>This Page Doesn't Exist</Heading>
          <Text variant="lead" className="max-w-md">
            The tide may have carried it away. Let's get you back to familiar waters.
          </Text>
          <Divider decorative />
          <Button variant="primary" as="a" href="/">
            Back to Shore
          </Button>
        </Container>
      </Section>
    </main>
  );
}
