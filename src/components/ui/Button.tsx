import type { ReactNode } from "react";
import { Link } from "@/i18n/navigation";

type Props = {
  href?: string;
  variant?: "primary" | "ghost";
  children: ReactNode;
  className?: string;
};

const base =
  "inline-flex items-center justify-center rounded-lg px-5 py-2.5 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

const variants = {
  primary: "bg-accent text-accent-foreground hover:bg-accent/90",
  ghost: "border border-border text-foreground hover:bg-surface-2",
};

export default function Button({
  href,
  variant = "primary",
  children,
  className = "",
}: Props) {
  const cls = `${base} ${variants[variant]} ${className}`;
  if (href) {
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }
  return (
    <button type="button" className={cls}>
      {children}
    </button>
  );
}