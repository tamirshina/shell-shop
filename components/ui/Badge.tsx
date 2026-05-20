import { type ReactNode } from "react";

type BadgeVariant = "gold" | "rust" | "glass" | "mauve";

interface BadgeProps {
  children: ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

const variantStyles: Record<BadgeVariant, string> = {
  gold: "bg-shell-gold/15 text-shell-gold",
  rust: "bg-shell-rust/15 text-shell-rust",
  glass: "bg-shell-glass/20 text-shell-glass",
  mauve: "bg-shell-mauve/15 text-shell-mauve",
};

export default function Badge({
  children,
  variant = "gold",
  className = "",
}: BadgeProps) {
  return (
    <span
      className={`inline-block font-body text-[11px] font-medium uppercase tracking-wider px-3 py-1 rounded-full ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
