import type { ReactNode } from "react";
import Button from "@/components/ui/Button";

type Props = {
  icon: ReactNode;
  title: string;
  description: string;
  cta: string;
  href: string;
};

export default function EmptyState({
  icon,
  title,
  description,
  cta,
  href,
}: Props) {
  return (
    <div className="flex flex-col items-center rounded-xl border border-dashed border-border bg-surface/60 px-6 py-12 text-center">
      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-accent">
        {icon}
      </span>
      <h3 className="mt-5 text-lg font-semibold">{title}</h3>
      <p className="mt-2 max-w-md text-sm leading-7 text-muted">
        {description}
      </p>
      <div className="mt-6">
        <Button href={href} variant="ghost">
          {cta}
        </Button>
      </div>
    </div>
  );
}