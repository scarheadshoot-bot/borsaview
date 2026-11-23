import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { siteConfig } from "@/config/site";
import Container from "@/components/ui/Container";
import Logo from "./Logo";

const items = siteConfig.nav.filter((item) => item.key !== "home");

export default function Footer() {
  const t = useTranslations("Footer");
  const nav = useTranslations("Nav");

  return (
    <footer className="mt-20 border-t border-border bg-surface">
      <Container className="py-12">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <Logo />
            <p className="mt-4 max-w-md text-sm leading-7 text-muted">
              {t("about")}
            </p>
          </div>
          <ul className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm sm:grid-cols-3">
            {items.map((item) => (
              <li key={item.key}>
                <Link
                  href={item.href}
                  className="text-muted transition-colors hover:text-foreground"
                >
                  {nav(item.key)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-10 border-t border-border pt-6 text-xs leading-6 text-muted">
          <p>{t("notice")}</p>
          <p className="mt-2">
            © {new Date().getFullYear()} BorsaView. {t("rights")}
          </p>
        </div>
      </Container>
    </footer>
  );
}