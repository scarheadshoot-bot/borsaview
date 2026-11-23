import type { ReactNode } from "react";

export default function Card({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-xl border border-border bg-surface p-6 transition-colors hover:border-accent/40 ${className}`}
    >
      {children}
    </div>
  );
}