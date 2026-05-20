import { type ReactNode } from "react";

type TextVariant = "body" | "lead" | "caption";

interface TextProps {
  variant?: TextVariant;
  children: ReactNode;
  className?: string;
  as?: "p" | "span" | "div";
}

const variantStyles: Record<TextVariant, string> = {
  body: "text-base leading-relaxed text-shell-olive",
  lead: "text-lg md:text-xl leading-relaxed text-shell-olive",
  caption: "text-sm leading-normal text-shell-olive/80",
};

export default function Text({
  variant = "body",
  as: Tag = "p",
  children,
  className = "",
}: TextProps) {
  return (
    <Tag className={`font-body ${variantStyles[variant]} ${className}`}>
      {children}
    </Tag>
  );
}
