interface DividerProps {
  className?: string;
  decorative?: boolean;
}

export default function Divider({
  className = "",
  decorative = false,
}: DividerProps) {
  if (decorative) {
    return (
      <div className={`flex items-center justify-center gap-4 py-2 ${className}`}>
        <span className="h-px w-12 bg-shell-limestone/50" />
        <span className="text-shell-gold text-lg">✦</span>
        <span className="h-px w-12 bg-shell-limestone/50" />
      </div>
    );
  }

  return (
    <hr
      className={`border-0 h-px bg-shell-limestone/40 ${className}`}
      role="separator"
    />
  );
}
