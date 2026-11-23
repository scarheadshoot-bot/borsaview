import { getTranslations, setRequestLocale } from "next-intl/server";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("Home");

  return (
    <section className="py-20 sm:py-28">
      <Container>
        <h1 className="max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
          {t("title")}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
          {t("subtitle")}
        </p>
        <div className="mt-8">
          <Button href="/academy">{t("cta")}</Button>
        </div>
      </Container>
    </section>
  );
}