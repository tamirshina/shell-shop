import { type ReactNode } from "react";

type SectionBackground = "white" | "salt" | "pearl" | "sand" | "ink";

interface SectionProps {
  children: ReactNode;
  bg?: SectionBackground;
  className?: string;
  id?: string;
}

const bgStyles: Record<SectionBackground, string> = {
  white: "bg-shell-white",
  salt: "bg-shell-salt",
  pearl: "bg-shell-pearl",
  sand: "bg-shell-sand",
  ink: "bg-shell-ink text-shell-white",
};

export default function Section({
  children,
  bg = "white",
  className = "",
  id,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`flex justify-center items-center py-10 md:py-28 ${bgStyles[bg]} ${className}`}
    >
      {children}
    </section>
  );
}
