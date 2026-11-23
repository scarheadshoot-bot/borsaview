import type { ReactNode } from "react";
import Button from "@/components/ui/Button";

type Props = {
  icon: ReactNode;
  body: string;
  cta: string;
  href: string;
};

export default function CtaPanel({ icon, body, cta, href }: Props) {
  return (
    <div className="flex flex-col items-start gap-6 rounded-2xl border border-border bg-surface p-8 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-start gap-4">
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
          {icon}
        </span>
        <p className="max-w-2xl leading-8 text-muted">{body}</p>
      </div>
      <Button href={href}>{cta}</Button>
    </div>
  );
}