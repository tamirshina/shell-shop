"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { products } from "@/lib/data/products";
import { Button, Heading, Text } from "./index";
import { sendInquiry } from "@/app/actions/send-inquiry";

export default function BespokeWaitlistForm() {
  const router = useRouter();
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [bespokeRequest, setBespokeRequest] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const toggleProduct = (slug: string) => {
    setSelectedProducts((prev) =>
      prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await sendInquiry({
        name,
        email,
        phone: phone || undefined,
        selectedProducts,
        bespokeRequest: bespokeRequest || undefined,
      });

      if (!result.success) {
        alert("Failed to submit inquiry: " + (result.error || "Unknown error"));
        setIsSubmitting(false);
        return;
      }
    } catch (err: any) {
      console.error("Submission error:", err);
      alert("An unexpected error occurred during submission.");
      setIsSubmitting(false);
      return;
    }

    setIsSubmitting(false);

    // Redirect to the updated thank-you page
    router.push("/thank-you");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5 space-y-8 bg-shell-salt p-6 md:p-10 border border-shell-limestone/30 rounded-sm">
      <div className="flex flex-col gap-5 space-y-4">
        <Heading level={4} className="text-xl">Which pieces are you interested in?</Heading>
        <Text variant="caption">Select all that appeal to you. This helps us prioritize our handcrafted production queue.</Text>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          {products.map((product) => {
            const isChecked = selectedProducts.includes(product.slug);
            return (
              <button
                key={product.id}
                type="button"
                onClick={() => toggleProduct(product.slug)}
                className={`flex items-start text-left gap-3 p-4 rounded-sm border transition-all duration-300 ${isChecked
                  ? "bg-shell-sand/20 border-shell-gold"
                  : "bg-shell-white border-shell-limestone/30 hover:border-shell-limestone"
                  }`}
              >
                <div
                  className={`mt-1 flex items-center justify-center w-4 h-4 rounded-full border transition-all duration-300 ${isChecked
                    ? "border-shell-gold bg-shell-gold text-shell-white"
                    : "border-shell-limestone"
                    }`}
                >
                  {isChecked && <span className="text-[10px]">✦</span>}
                </div>
                <div>
                  <span className="font-heading text-sm font-medium text-shell-ink block">
                    {product.name}
                  </span>
                  <span className="font-body text-xs text-shell-olive/80">
                    ${product.price} {product.currency}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      <div className="flex flex-col gap-5 space-y-3">
        <Heading level={4} className="text-xl">Bespoke Inquiry / Custom request</Heading>
        <Text variant="caption">Looking for a custom shell, custom sizing, or have specific desires? Describe what you want here.</Text>
        <textarea
          placeholder="I would love a cowrie pendant but with a thicker chain, or I am looking for a custom size..."
          rows={3}
          value={bespokeRequest}
          onChange={(e) => setBespokeRequest(e.target.value)}
          className="w-full bg-shell-white border border-shell-limestone px-4 py-3 rounded-sm font-body text-sm focus-visible:outline-2 focus-visible:outline-shell-gold focus-visible:outline-offset-2"
        />
      </div>

      <div className="flex flex-col gap-5 space-y-4">
        <Heading level={4} className="text-xl">Your Contact Details</Heading>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1">
            <label className="font-body text-[11px] font-medium uppercase tracking-widest text-shell-olive">Name</label>
            <input
              type="text"
              required
              placeholder="Your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-shell-white border border-shell-limestone px-4 py-3 rounded-sm font-body text-sm focus-visible:outline-2 focus-visible:outline-shell-gold focus-visible:outline-offset-2"
            />
          </div>

          <div className="space-y-1">
            <label className="font-body text-[11px] font-medium uppercase tracking-widest text-shell-olive">Email Address</label>
            <input
              type="email"
              required
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-shell-white border border-shell-limestone px-4 py-3 rounded-sm font-body text-sm focus-visible:outline-2 focus-visible:outline-shell-gold focus-visible:outline-offset-2"
            />
          </div>
        </div>

        <div className="space-y-1">
          <label className="font-body text-[11px] font-medium uppercase tracking-widest text-shell-olive">Phone Number (Optional)</label>
          <input
            type="tel"
            placeholder="+972 50 000 0000"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full bg-shell-white border border-shell-limestone px-4 py-3 rounded-sm font-body text-sm focus-visible:outline-2 focus-visible:outline-shell-gold focus-visible:outline-offset-2"
          />
        </div>
      </div>

      <Button
        variant="primary"
        type="submit"
        disabled={isSubmitting}
        className="w-full justify-center text-center py-4"
      >
        {isSubmitting ? "Submitting Inquiry..." : "Join Waitlist & Send Inquiry"}
      </Button>
    </form>
  );
}
