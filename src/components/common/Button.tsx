import React from "react";
import Link from "next/link";

export type ButtonVariant = "primary" | "secondary" | "outline" | "frosted" | "ghost";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  target?: string;
  rel?: string;
  className?: string;
  children: React.ReactNode;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-[#610D17] text-white border border-transparent shadow-xs hover:bg-[#4B0A12] active:bg-[#3B070D]",
  secondary:
    "bg-white text-[#610D17] border border-transparent shadow-xs hover:bg-zinc-100 hover:shadow active:bg-zinc-200",
  outline:
    "bg-white text-zinc-800 border border-zinc-300 hover:bg-zinc-100 hover:border-zinc-400 hover:text-zinc-950",
  frosted:
    "bg-white/10 text-white border border-white/30 backdrop-blur-xs hover:bg-white/20 active:bg-white/25",
  ghost:
    "bg-transparent text-zinc-700 hover:bg-zinc-100 hover:text-zinc-900",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-3.5 py-2 text-xs font-bold rounded-lg gap-1.5",
  md: "px-4 py-2.5 text-xs sm:text-sm font-bold rounded-xl gap-2",
  lg: "px-5 py-3 text-sm sm:text-base font-bold rounded-xl gap-2.5",
};

export default function Button({
  variant = "primary",
  size = "md",
  href,
  target,
  rel,
  className = "",
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#610D17] disabled:opacity-50 disabled:pointer-events-none cursor-pointer";
  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if (href) {
    const isExternal =
      href.startsWith("http") ||
      href.startsWith("mailto:") ||
      href.startsWith("tel:") ||
      target === "_blank";

    if (isExternal) {
      return (
        <a
          href={href}
          target={target}
          rel={target === "_blank" ? (rel ?? "noopener noreferrer") : rel}
          className={combinedClassName}
          {...(props as unknown as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {children}
        </a>
      );
    }

    return (
      <Link
        href={href}
        className={combinedClassName}
        {...(props as unknown as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClassName} {...props}>
      {children}
    </button>
  );
}
