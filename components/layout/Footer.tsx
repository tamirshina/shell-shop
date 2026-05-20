import Link from "next/link";

const footerLinks = {
  shop: [
    { label: "Collection", href: "/collection" },
    { label: "First Drop", href: "/first-drop" },
  ],
  brand: [
    { label: "Our Story", href: "/our-story" },
    { label: "Sustainability", href: "/sustainability" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-shell-ink text-shell-limestone">
      {/* Main Footer */}
      <div className="mx-auto max-w-6xl px-6 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <Link
              href="/"
              className="font-heading text-2xl font-light text-shell-white"
            >
              Sea Shells
            </Link>
            <p className="font-body text-sm leading-relaxed text-shell-limestone/80 max-w-xs">
              Eco-luxe keepsakes inspired by the Mediterranean coast. Designed
              with reverence for nature, place, and memory.
            </p>
          </div>

          {/* Shop Links */}
          <div className="md:col-span-3">
            <h3 className="font-body text-[11px] font-medium uppercase tracking-[0.2em] text-shell-olive mb-4">
              Shop
            </h3>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-sm text-shell-limestone/80 transition-colors duration-300 hover:text-shell-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Brand Links */}
          <div className="md:col-span-4">
            <h3 className="font-body text-[11px] font-medium uppercase tracking-[0.2em] text-shell-olive mb-4">
              Brand
            </h3>
            <ul className="space-y-3">
              {footerLinks.brand.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-sm text-shell-limestone/80 transition-colors duration-300 hover:text-shell-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-shell-olive/20">
        <div className="mx-auto max-w-6xl px-6 md:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-shell-olive">
            © {new Date().getFullYear()} Sea Shells from the Holy Land. All
            rights reserved.
          </p>
          <p className="font-body text-xs text-shell-olive">
            Built by{" "}
            <Link
              href="/case-study"
              className="text-shell-limestone/60 transition-colors duration-300 hover:text-shell-gold underline underline-offset-2 decoration-shell-olive/30"
            >
              Tamir Shina
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
