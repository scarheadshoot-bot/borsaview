import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
} as const;

export function GoldIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 18l2-8h12l2 8z" />
      <path d="M8.5 10l1-4h5l1 4" />
    </svg>
  );
}

export function CurrencyIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M6 8h12l-3-3" />
      <path d="M18 16H6l3 3" />
    </svg>
  );
}

export function StocksIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M5 20v-8" />
      <path d="M11 20V5" />
      <path d="M17 20v-6" />
      <path d="M3 20h18" />
    </svg>
  );
}

export function NewsIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <path d="M8 9h8M8 13h8M8 17h5" />
    </svg>
  );
}

export function AnalysisIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M3 17l5-5 4 4 8-9" />
      <path d="M15 7h5v5" />
    </svg>
  );
}

export function AcademyIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M2 9l10-5 10 5-10 5z" />
      <path d="M6 11v5c0 1.5 3 3 6 3s6-1.5 6-3v-5" />
    </svg>
  );
}

export function EconomyIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3c3 3 3 15 0 18" />
      <path d="M12 3c-3 3-3 15 0 18" />
    </svg>
  );
}

export function ArrowIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M5 12h14" />
      <path d="M13 6l6 6-6 6" />
    </svg>
  );
}