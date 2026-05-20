import { Section, Container } from "@/components/layout";
import { Heading, Text, Overline, Divider, Button, Badge } from "@/components/ui";

export const metadata = {
  title: "Case Study — Sea Shells from the Holy Land",
  description:
    "A behind-the-scenes look at how the Sea Shells e-commerce experience was designed and built — from brand identity to technical architecture.",
};

/* ── Data ────────────────────────────────────────── */

const palette = [
  { name: "White", token: "shell-white", hex: "#F8F4EC", textDark: false },
  { name: "Salt", token: "shell-salt", hex: "#FFFDF8", textDark: false },
  { name: "Pearl", token: "shell-pearl", hex: "#F1ECE2", textDark: false },
  { name: "Sand", token: "shell-sand", hex: "#E7D8C5", textDark: false },
  { name: "Limestone", token: "shell-limestone", hex: "#D8C8B2", textDark: false },
  { name: "Olive", token: "shell-olive", hex: "#6F735A", textDark: true },
  { name: "Gold", token: "shell-gold", hex: "#B58A43", textDark: true },
  { name: "Rust", token: "shell-rust", hex: "#A95F3D", textDark: true },
  { name: "Mauve", token: "shell-mauve", hex: "#9B6A75", textDark: true },
  { name: "Glass", token: "shell-glass", hex: "#9CAEA3", textDark: false },
  { name: "Ink", token: "shell-ink", hex: "#25291E", textDark: true },
];

const techStack = [
  { name: "Next.js 16", role: "Framework", detail: "App Router, server components, static generation" },
  { name: "React 19", role: "UI Library", detail: "Server & client components, streaming" },
  { name: "TypeScript 5", role: "Language", detail: "Strict mode, full type safety across data & components" },
  { name: "Tailwind CSS 4", role: "Styling", detail: "@theme inline tokens, zero custom CSS utility classes" },
  { name: "Google Fonts", role: "Typography", detail: "Cormorant Garamond (headings) + Inter (body), font-swap" },
];

const components = [
  { name: "Button", variants: "primary · secondary · ghost", detail: "Polymorphic (button or link), 3 sizes" },
  { name: "Heading", variants: "h1–h6 levels", detail: "Responsive sizing, optional tag override" },
  { name: "Text", variants: "body · lead · caption", detail: "Polymorphic (p, span, div)" },
  { name: "Overline", variants: "—", detail: "11px uppercase tracking label" },
  { name: "Badge", variants: "gold · rust · glass · mauve", detail: "Pill-shaped status indicator" },
  { name: "Divider", variants: "plain · decorative", detail: "Horizontal rule with optional shell motif" },
  { name: "ProductCard", variants: "—", detail: "Image, name, tagline, price, badge, hover lift" },
  { name: "WaitlistForm", variants: "—", detail: "Client component, email input + submit" },
  { name: "Section", variants: "5 backgrounds", detail: "white, salt, pearl, sand, ink" },
  { name: "Container", variants: "default · narrow", detail: "max-w-6xl / max-w-3xl, responsive padding" },
  { name: "Header", variants: "—", detail: "Sticky, scroll-blur, mobile hamburger with animated X" },
  { name: "Footer", variants: "—", detail: "3-column dark footer, portfolio link" },
];

const pages = [
  { name: "Home", path: "/", sections: "Hero, brand statement, featured grid, materials strip, waitlist CTA, editorial quote" },
  { name: "Collection", path: "/collection", sections: "Product grid (2-col mobile, 3-col desktop)" },
  { name: "Product Detail", path: "/collection/[slug]", sections: "Image gallery, product info, materials, waitlist CTA" },
  { name: "Our Story", path: "/our-story", sections: "Hero image, origin narrative, mission, timeline" },
  { name: "Sustainability", path: "/sustainability", sections: "Hero image, 6 pillars grid, impact stats" },
  { name: "First Drop", path: "/first-drop", sections: "Waitlist landing with 3 benefits" },
  { name: "Thank You", path: "/thank-you", sections: "Confirmation with next-step CTAs" },
  { name: "404", path: "—", sections: "Branded 'Lost at Sea' error page" },
  { name: "Case Study", path: "/case-study", sections: "This page — portfolio deep-dive" },
];

const uxDecisions = [
  {
    title: "No Dark Mode",
    why: "The brand identity is rooted in warm, natural tones — sand, limestone, pearl. Forcing a dark mode would undermine the emotional language of the design. The ink-background sections already provide contrast variety.",
  },
  {
    title: "Waitlist, Not Cart",
    why: "The collection doesn't ship yet. Instead of a misleading 'Add to Cart,' every product page drives to the waitlist — building anticipation and collecting leads without false promises.",
  },
  {
    title: "Static Data Layer",
    why: "Products live in a typed TypeScript file (lib/data/products.ts), not a CMS. For 6 products, this is the right trade-off: zero latency, full type safety, instant deploys. When the catalog grows, the typed interface makes migration to a headless CMS trivial.",
  },
  {
    title: "No JavaScript Animations Library",
    why: "All micro-animations use CSS transitions and Tailwind utilities — hover lifts, opacity fades, mobile menu stagger. This keeps the bundle tiny and the performance score pristine.",
  },
  {
    title: "Editorial Typography",
    why: "Cormorant Garamond at font-weight 300 for headings gives an editorial luxury feel. Inter for body text ensures readability. The pairing says 'premium' without being heavy.",
  },
];

/* ── Page ─────────────────────────────────────────── */

export default function CaseStudyPage() {
  return (
    <main className="pt-20 md:pt-32">
      {/* 1. Hero */}
      <Section bg="ink" className="!py-20 md:!py-32">
        <Container narrow className="flex flex-col items-center text-center space-y-8">
          <Badge variant="gold">Portfolio</Badge>
          <Heading level={1} className="!text-shell-white">
            Sea Shells
            <span className="block !text-shell-sand text-3xl md:text-5xl mt-2">
              Case Study
            </span>
          </Heading>
          <Text variant="lead" className="max-w-xl !text-shell-limestone">
            How a love for Mediterranean coastlines became a design-forward
            e-commerce experience — built with Next.js, React, and a
            hand-crafted design system.
          </Text>
          <Text variant="caption" className="!text-shell-olive tracking-widest uppercase">
            Designed & Built by Tamir Shina
          </Text>
        </Container>
      </Section>

      {/* 2. Project Overview */}
      <Section bg="white">
        <Container narrow className="flex flex-col items-center space-y-12">
          <div className="text-center space-y-4">
            <Overline>Overview</Overline>
            <Heading level={2}>The Brief</Heading>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            {[
              { label: "Client", value: "Sea Shells from the Holy Land" },
              { label: "Timeline", value: "Design → Build → Ship" },
              { label: "Role", value: "Full-Stack Design & Development" },
            ].map((item) => (
              <div key={item.label} className="text-center md:text-left space-y-2">
                <Overline>{item.label}</Overline>
                <Text variant="body" className="!text-shell-ink font-medium">
                  {item.value}
                </Text>
              </div>
            ))}
          </div>
          <Text variant="lead" className="max-w-2xl text-center">
            Sea Shells is an eco-luxe jewelry brand that draws its forms from
            Mediterranean shell shapes — crafted in recycled metals, packaged
            without plastic. The goal was to build a digital experience that
            communicates the same reverence for nature and craft that defines the
            physical products.
          </Text>
          <Divider decorative />
        </Container>
      </Section>

      {/* 3. Goals */}
      <Section bg="salt">
        <Container narrow className="flex flex-col items-center space-y-12">
          <div className="text-center space-y-4">
            <Overline>Goals</Overline>
            <Heading level={2}>What the Site Needed to Do</Heading>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full">
            {[
              { icon: "✦", text: "Communicate premium, editorial brand identity at first glance" },
              { icon: "◇", text: "Showcase 6 products with rich detail — materials, sustainability, story" },
              { icon: "○", text: "Drive waitlist sign-ups for the inaugural 'First Drop' collection" },
              { icon: "◆", text: "Tell the brand story — origin, mission, environmental commitment" },
              { icon: "▽", text: "Deliver Lighthouse 95+ scores across all categories" },
              { icon: "☽", text: "Serve as a portfolio piece — demonstrating design system thinking" },
            ].map((goal) => (
              <div key={goal.text} className="flex gap-4 items-start">
                <span className="text-xl text-shell-gold shrink-0 mt-0.5">{goal.icon}</span>
                <Text variant="body">{goal.text}</Text>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* 4. UX Decisions */}
      <Section bg="white">
        <Container narrow className="flex flex-col items-center space-y-12">
          <div className="text-center space-y-4">
            <Overline>UX Thinking</Overline>
            <Heading level={2}>Key Design Decisions</Heading>
          </div>
          <div className="space-y-10 w-full">
            {uxDecisions.map((decision, idx) => (
              <div key={decision.title} className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="font-heading text-3xl font-light text-shell-gold">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <Heading level={4}>{decision.title}</Heading>
                </div>
                <Text variant="body" className="pl-12 md:pl-14 max-w-2xl">
                  {decision.why}
                </Text>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* 5. Design System — Color Palette */}
      <Section bg="pearl">
        <Container className="flex flex-col items-center space-y-12">
          <div className="text-center space-y-4">
            <Overline>Design System</Overline>
            <Heading level={2}>Color Palette</Heading>
            <Text variant="body" className="max-w-xl mx-auto">
              11 purposeful tokens, inspired by the textures of the Israeli
              Mediterranean coast — from bleached sand to deep olive groves.
            </Text>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 w-full">
            {palette.map((color) => (
              <div key={color.token} className="space-y-2">
                <div
                  className="aspect-square rounded-sm border border-shell-limestone/20 shadow-sm flex items-end p-3 transition-transform duration-300 hover:scale-105"
                  style={{ backgroundColor: color.hex }}
                >
                  <span
                    className={`font-mono text-[10px] tracking-wider ${
                      color.textDark ? "text-white/80" : "text-shell-ink/60"
                    }`}
                  >
                    {color.hex}
                  </span>
                </div>
                <div>
                  <p className="font-body text-sm font-medium text-shell-ink">{color.name}</p>
                  <p className="font-mono text-[10px] text-shell-olive/60">{color.token}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* 6. Typography */}
      <Section bg="white">
        <Container narrow className="flex flex-col items-center space-y-12">
          <div className="text-center space-y-4">
            <Overline>Typography</Overline>
            <Heading level={2}>Font Pairing</Heading>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 w-full">
            <div className="space-y-6">
              <Overline>Headings</Overline>
              <p className="font-heading text-5xl font-light text-shell-ink leading-tight">
                Cormorant
                <span className="block text-shell-gold">Garamond</span>
              </p>
              <Text variant="caption">
                Weight 300 (Light). Editorial, refined, high contrast.
                Used for all headings, pull quotes, and display text.
              </Text>
            </div>
            <div className="space-y-6">
              <Overline>Body</Overline>
              <p className="font-body text-5xl font-light text-shell-ink leading-tight">
                Inter
              </p>
              <Text variant="caption">
                Variable weight. Clean, modern, highly legible at small
                sizes. Used for body text, labels, buttons, and UI elements.
              </Text>
            </div>
          </div>
        </Container>
      </Section>

      {/* 7. Tech Stack */}
      <Section bg="salt">
        <Container className="flex flex-col items-center space-y-12">
          <div className="text-center space-y-4">
            <Overline>Technical</Overline>
            <Heading level={2}>Tech Stack</Heading>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
            {techStack.map((tech) => (
              <div
                key={tech.name}
                className="bg-shell-white p-6 space-y-3 border border-shell-limestone/20 rounded-sm transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
              >
                <div className="flex items-center justify-between">
                  <Heading level={4} className="!text-xl">{tech.name}</Heading>
                  <Badge variant="glass">{tech.role}</Badge>
                </div>
                <Text variant="caption">{tech.detail}</Text>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* 8. Component Library */}
      <Section bg="white">
        <Container className="flex flex-col items-center space-y-12">
          <div className="text-center space-y-4">
            <Overline>Architecture</Overline>
            <Heading level={2}>Component Library</Heading>
            <Text variant="body" className="max-w-xl mx-auto">
              12 purpose-built components — each following a consistent API
              pattern: typed props, variant maps, polymorphic rendering, and
              className pass-through.
            </Text>
          </div>

          {/* Component table — desktop */}
          <div className="hidden md:block w-full overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-shell-limestone/30">
                  <th className="font-body text-[11px] font-medium uppercase tracking-[0.2em] text-shell-olive py-3 pr-6">Component</th>
                  <th className="font-body text-[11px] font-medium uppercase tracking-[0.2em] text-shell-olive py-3 pr-6">Variants</th>
                  <th className="font-body text-[11px] font-medium uppercase tracking-[0.2em] text-shell-olive py-3">Detail</th>
                </tr>
              </thead>
              <tbody>
                {components.map((comp) => (
                  <tr key={comp.name} className="border-b border-shell-limestone/15 transition-colors duration-200 hover:bg-shell-pearl/50">
                    <td className="py-3 pr-6">
                      <span className="font-mono text-sm text-shell-ink">{comp.name}</span>
                    </td>
                    <td className="py-3 pr-6">
                      <span className="font-body text-sm text-shell-olive">{comp.variants}</span>
                    </td>
                    <td className="py-3">
                      <span className="font-body text-sm text-shell-olive/80">{comp.detail}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Component cards — mobile */}
          <div className="md:hidden w-full space-y-4">
            {components.map((comp) => (
              <div key={comp.name} className="bg-shell-salt p-4 space-y-2 rounded-sm border border-shell-limestone/15">
                <span className="font-mono text-sm font-medium text-shell-ink">{comp.name}</span>
                <p className="font-body text-xs text-shell-olive">{comp.variants}</p>
                <p className="font-body text-xs text-shell-olive/70">{comp.detail}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* 9. Pages */}
      <Section bg="pearl">
        <Container className="flex flex-col items-center space-y-12">
          <div className="text-center space-y-4">
            <Overline>Site Map</Overline>
            <Heading level={2}>Pages Built</Heading>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {pages.map((page) => (
              <div
                key={page.name}
                className="bg-shell-white p-6 space-y-3 border border-shell-limestone/20 rounded-sm transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
              >
                <div className="flex items-center justify-between">
                  <Heading level={5} className="!text-lg">{page.name}</Heading>
                  <span className="font-mono text-[10px] text-shell-olive/60 bg-shell-pearl px-2 py-1 rounded-sm">
                    {page.path}
                  </span>
                </div>
                <Text variant="caption">{page.sections}</Text>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* 10. What's Next */}
      <Section bg="white">
        <Container narrow className="flex flex-col items-center space-y-12">
          <div className="text-center space-y-4">
            <Overline>Roadmap</Overline>
            <Heading level={2}>What&apos;s Next</Heading>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full">
            {[
              { status: "Planned", title: "Waitlist Backend", text: "Connect the email form to Resend or Mailchimp for real lead capture." },
              { status: "Planned", title: "OG & Social Meta", text: "Per-page Open Graph images and Twitter cards for social sharing." },
              { status: "Planned", title: "Scroll Animations", text: "Intersection Observer fade-ins for section entrances." },
              { status: "Future", title: "Headless CMS", text: "Migrate product data to Sanity or Contentful when the catalog grows." },
              { status: "Future", title: "Stripe Checkout", text: "Full e-commerce flow when the brand is ready to ship." },
              { status: "Future", title: "Analytics", text: "Vercel Analytics or Plausible for privacy-friendly traffic insights." },
            ].map((item) => (
              <div key={item.title} className="flex gap-4 items-start">
                <Badge variant={item.status === "Planned" ? "gold" : "glass"}>
                  {item.status}
                </Badge>
                <div className="space-y-1">
                  <Heading level={5} className="!text-base">{item.title}</Heading>
                  <Text variant="caption">{item.text}</Text>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* 11. Closing CTA */}
      <Section bg="ink">
        <Container narrow className="flex flex-col items-center text-center space-y-8 py-12">
          <Heading level={2} className="!text-shell-sand text-3xl md:text-5xl leading-tight max-w-3xl">
            &ldquo;The best design systems aren&apos;t the ones with the most tokens — they&apos;re the ones where every token earns its place.&rdquo;
          </Heading>
          <Text variant="caption" className="!text-shell-limestone tracking-widest uppercase">
            — Tamir Shina
          </Text>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button variant="primary" as="a" href="/">
              Visit the Site
            </Button>
            <Button
              variant="secondary"
              as="a"
              href="/collection"
              className="text-shell-white border-shell-white hover:bg-shell-white/10 hover:border-shell-white"
            >
              Explore the Collection
            </Button>
          </div>
        </Container>
      </Section>
    </main>
  );
}
