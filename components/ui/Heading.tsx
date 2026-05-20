import { type ReactNode } from "react";

type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

interface HeadingProps {
  level?: HeadingLevel;
  as?: `h${HeadingLevel}`;
  children: ReactNode;
  className?: string;
}

const levelStyles: Record<HeadingLevel, string> = {
  1: "text-5xl md:text-7xl tracking-tight",
  2: "text-4xl md:text-5xl tracking-tight",
  3: "text-3xl md:text-4xl",
  4: "text-2xl md:text-3xl",
  5: "text-xl md:text-2xl",
  6: "text-lg md:text-xl",
};

export default function Heading({
  level = 2,
  as,
  children,
  className = "",
}: HeadingProps) {
  const Tag = as ?? (`h${level}` as const);

  return (
    <Tag className={`font-heading font-light ${levelStyles[level]} ${className}`}>
      {children}
    </Tag>
  );
}
