type SpacerSize = "sm" | "md" | "lg" | "xl";

interface SpacerProps {
  size?: SpacerSize;
}

const sizeStyles: Record<SpacerSize, string> = {
  sm: "h-6 md:h-8",
  md: "h-10 md:h-14",
  lg: "h-16 md:h-24",
  xl: "h-24 md:h-32",
};

export default function Spacer({ size = "md" }: SpacerProps) {
  return <div className={sizeStyles[size]} aria-hidden="true" />;
}
