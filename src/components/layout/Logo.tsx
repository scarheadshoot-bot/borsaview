import { Link } from "@/i18n/navigation";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2" aria-label="BorsaView">
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <rect width="28" height="28" rx="7" className="fill-accent" />
        <path
          d="M7 19l5-5 3 3 6-7"
          className="stroke-accent-foreground"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="text-lg font-bold tracking-tight">BorsaView</span>
    </Link>
  );
}