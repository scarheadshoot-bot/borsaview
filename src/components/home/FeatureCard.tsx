import type { ReactNode } from "react";
import { Link } from "@/i18n/navigation";
import { ArrowIcon } from "@/components/ui/Icons";

type Props = {
  href: string;
  icon: ReactNode;
  title: string;
  description: string;
  cta: string;
};

export default function FeatureCard({
  href,
  icon,
  title,
  description,
  cta,
}: Props) {
  return (
    <Link
      href={href}
      className="group flex h-full flex-col rounded-xl border border-border bg-surface p-6 transition hover:-translate-y-0.5 hover:border-accent/40 hover:bg-surface-2"
    >
      <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent/10 text-accent">
        {icon}
      </span>
      <h3 className="mt-5 text-lg font-semibold">{title}</h3>
      <p className="mt-2 flex-1 text-sm leading-7 text-muted">{description}</p>
      <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-accent">
        {cta}
        <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" />
      </span>
    </Link>
  );
}