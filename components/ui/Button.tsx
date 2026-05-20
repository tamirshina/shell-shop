import { type ButtonHTMLAttributes, type AnchorHTMLAttributes, type ReactNode } from "react";
import Link from "next/link";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

/* ── Shared props ─────────────────────────────────── */
interface BaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
  className?: string;
}

/* ── Polymorphic overloads ────────────────────────── */
type ButtonAsButton = BaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps> & {
    as?: "button";
    href?: never;
  };

type ButtonAsLink = BaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseProps> & {
    as: "a";
    href: string;
  };

type ButtonProps = ButtonAsButton | ButtonAsLink;

/* ── Style maps ───────────────────────────────────── */
const variantStyles: Record<ButtonVariant, string> = {
  primary: [
    "bg-shell-gold text-white",
    "hover:shadow-lg hover:shadow-shell-gold/25 hover:brightness-110",
    "active:scale-[0.97]",
    "disabled:opacity-50 disabled:pointer-events-none",
  ].join(" "),
  secondary: [
    "border border-shell-limestone text-shell-ink bg-transparent",
    "hover:bg-shell-sand hover:border-shell-sand",
    "active:scale-[0.97]",
    "disabled:opacity-50 disabled:pointer-events-none",
  ].join(" "),
  ghost: [
    "text-shell-olive bg-transparent",
    "hover:text-shell-ink",
    "after:absolute after:bottom-0 after:left-0 after:w-full after:h-px",
    "after:bg-shell-limestone after:origin-left after:scale-x-0",
    "hover:after:scale-x-100 after:transition-transform after:duration-300",
    "disabled:opacity-50 disabled:pointer-events-none",
  ].join(" "),
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "h-9 px-5 text-[0.6875rem] leading-[.9375rem]",
  md: "h-11 px-6 text-[0.75rem] leading-[.9375rem]",
  lg: "h-[3.25rem] px-8 text-[0.75rem] leading-[.9375rem]",
};

const baseStyles = [
  "relative inline-flex items-center justify-center",
  "font-body font-medium tracking-[0.03em] uppercase",
  "rounded-none cursor-pointer",
  "transition-all duration-300 ease-out",
  "focus-visible:outline-2 focus-visible:outline-shell-gold focus-visible:outline-offset-2",
].join(" ");

/* ── Component ────────────────────────────────────── */
export default function Button(props: ButtonProps) {
  const {
    variant = "primary",
    size = "md",
    className = "",
    children,
    ...rest
  } = props;

  const classes = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if (props.as === "a") {
    const { as: _as, variant: _v, size: _s, ...anchorProps } = rest as Record<string, unknown>;
    return (
      <Link href={props.href} className={classes} {...(anchorProps as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </Link>
    );
  }

  const { as: _as, variant: _v, size: _s, ...buttonProps } = rest as Record<string, unknown>;
  return (
    <button className={classes} {...(buttonProps as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
