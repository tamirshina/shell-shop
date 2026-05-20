import { type ReactNode } from "react";

interface OverlineProps {
  children: ReactNode;
  className?: string;
}

export default function Overline({ children, className = "" }: OverlineProps) {
  return (
    <span
      className={`inline-block font-body text-[11px] font-medium uppercase tracking-[0.2em] text-shell-olive ${className}`}
    >
      {children}
    </span>
  );
}
