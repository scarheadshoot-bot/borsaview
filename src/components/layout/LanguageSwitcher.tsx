"use client";

import { useLocale, useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const t = useTranslations("Language");
  const other = locale === "ar" ? "en" : "ar";

  return (
    <Link
      href={pathname}
      locale={other}
      lang={other}
      className="rounded-lg border border-border px-3 py-1.5 text-sm font-medium text-foreground transition-colors hover:bg-surface-2"
    >
      {t("switch")}
    </Link>
  );
}