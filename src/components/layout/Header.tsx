"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { siteConfig } from "@/config/site";
import Logo from "./Logo";
import LanguageSwitcher from "./LanguageSwitcher";

const items = siteConfig.nav.filter((item) => item.key !== "home");

export default function Header() {
  const t = useTranslations("Nav");
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Logo />

        <nav className="hidden items-center gap-1 xl:flex" aria-label="Main">
          {items.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              className={`rounded-md px-3 py-2 text-sm transition-colors hover:text-foreground ${
                isActive(item.href) ? "text-accent" : "text-muted"
              }`}
            >
              {t(item.key)}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LanguageSwitcher />
          <button
            type="button"
            className="rounded-lg border border-border p-2 xl:hidden"
            aria-expanded={open}
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path
                d={open ? "M5 5l10 10M15 5L5 15" : "M3 6h14M3 10h14M3 14h14"}
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav
          className="border-t border-border bg-background xl:hidden"
          aria-label="Mobile"
        >
          <ul className="mx-auto max-w-6xl px-4 py-2 sm:px-6">
            {items.map((item) => (
              <li key={item.key}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`block rounded-md px-2 py-3 text-sm ${
                    isActive(item.href) ? "text-accent" : "text-muted"
                  }`}
                >
                  {t(item.key)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}