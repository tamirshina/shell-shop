import { type ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  narrow?: boolean;
}

export default function Container({
  children,
  className = "",
  narrow = false,
}: ContainerProps) {
  const maxWidth = narrow ? "max-w-3xl" : "max-w-6xl";

  return (
    <div className={`mx-auto w-full px-6 md:px-8 ${maxWidth} ${className}`}>
      {children}
    </div>
  );
}
