import Image from "next/image";
import { useTranslations } from "next-intl";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function Hero() {
  const t = useTranslations("Home.hero");

  return (
    <section className="hero-glow relative overflow-hidden border-b border-border">
      <Container className="grid items-center gap-10 py-16 sm:py-24 lg:grid-cols-2">
        <div className="fade-up">
          <span className="inline-block rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-accent">
            {t("badge")}
          </span>
          <h1 className="mt-6 text-4xl font-bold leading-tight sm:text-5xl">
            {t("title")}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-muted">
            {t("subtitle")}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/academy">{t("ctaPrimary")}</Button>
            <Button href="/markets" variant="ghost">
              {t("ctaSecondary")}
            </Button>
          </div>
        </div>
        <div
          className="fade-up hidden justify-center lg:flex"
          style={{ animationDelay: "120ms" }}
        >
          <Image
            src="/logo-full.png"
            alt="BorsaView"
            width={900}
            height={629}
            priority
            className="h-auto w-full max-w-md"
          />
        </div>
      </Container>
    </section>
  );
}