import { getTranslations, setRequestLocale } from "next-intl/server";
import Hero from "@/components/home/Hero";
import Section from "@/components/home/Section";
import FeatureCard from "@/components/home/FeatureCard";
import EmptyState from "@/components/home/EmptyState";
import CtaPanel from "@/components/home/CtaPanel";
import {
  GoldIcon,
  CurrencyIcon,
  StocksIcon,
  NewsIcon,
  AnalysisIcon,
  AcademyIcon,
  EconomyIcon,
} from "@/components/ui/Icons";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("Home");

  return (
    <>
      <Hero />

      <Section
        eyebrow={t("markets.eyebrow")}
        title={t("markets.title")}
        description={t("markets.desc")}
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <FeatureCard
            href="/gold"
            icon={<GoldIcon />}
            title={t("markets.gold.title")}
            description={t("markets.gold.desc")}
            cta={t("markets.explore")}
          />
          <FeatureCard
            href="/currencies"
            icon={<CurrencyIcon />}
            title={t("markets.currencies.title")}
            description={t("markets.currencies.desc")}
            cta={t("markets.explore")}
          />
          <FeatureCard
            href="/stocks"
            icon={<StocksIcon />}
            title={t("markets.stocks.title")}
            description={t("markets.stocks.desc")}
            cta={t("markets.explore")}
          />
        </div>
      </Section>

      <Section
        tone="alt"
        eyebrow={t("news.eyebrow")}
        title={t("news.title")}
        description={t("news.desc")}
      >
        <EmptyState
          icon={<NewsIcon />}
          title={t("news.emptyTitle")}
          description={t("news.emptyDesc")}
          cta={t("news.cta")}
          href="/news"
        />
      </Section>

      <Section
        eyebrow={t("analysis.eyebrow")}
        title={t("analysis.title")}
        description={t("analysis.desc")}
      >
        <EmptyState
          icon={<AnalysisIcon />}
          title={t("analysis.emptyTitle")}
          description={t("analysis.emptyDesc")}
          cta={t("analysis.cta")}
          href="/analysis"
        />
      </Section>

      <Section
        tone="alt"
        eyebrow={t("academy.eyebrow")}
        title={t("academy.title")}
        description={t("academy.desc")}
      >
        <CtaPanel
          icon={<AcademyIcon />}
          body={t("academy.body")}
          cta={t("academy.cta")}
          href="/academy"
        />
      </Section>

      <Section
        eyebrow={t("economy.eyebrow")}
        title={t("economy.title")}
        description={t("economy.desc")}
      >
        <CtaPanel
          icon={<EconomyIcon />}
          body={t("economy.body")}
          cta={t("economy.cta")}
          href="/economy"
        />
      </Section>
    </>
  );
}