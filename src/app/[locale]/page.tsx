
import { getTranslations, setRequestLocale } from "next-intl/server";
import Link from "next/link";

const sections = [
  {
    number: "01",
    title: "الذهب والأسواق",
    description: "تابع حركة الذهب وتطورات الأسواق العالمية.",
    href: "/gold",
    image:
      "https://images.unsplash.com/photo-1610375461246-83df859d849d?auto=format&fit=crop&w=1200&q=85",
  },
  {
    number: "02",
    title: "العملات والأسهم",
    description: "اكتشف أسواق العملات والأسهم والمؤشرات.",
    href: "/currencies",
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1200&q=85",
  },
  {
    number: "03",
    title: "دليلك إلى البورصة",
    description: "مفاهيم ومقالات تساعدك على فهم عالم الأسواق.",
    href: "/academy",
    image:
      "https://images.unsplash.com/photo-1504457047772-27faf1c00561?auto=format&fit=crop&w=1200&q=85",
  },
  {
    number: "04",
    title: "الاقتصاد والفكر",
    description: "قراءة أعمق في الاقتصاد والتحولات العالمية.",
    href: "/economy",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85",
  },
];

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const isArabic = locale === "ar";
  const t = await getTranslations("Home");

  return (
    <main className="min-h-screen bg-[#080808] text-[#F3F0E8]">
      {/* Navigation */}
      <header className="border-b border-[#C5A45A]/20 bg-black">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <Link
            href="/"
            className="text-2xl font-bold tracking-[0.12em] text-[#D7B65F]"
          >
            BorsaView<span className="text-white">.</span>
          </Link>

          <nav className="hidden items-center gap-8 text-sm text-gray-300 md:flex">
            <Link href="/" className="transition hover:text-[#D7B65F]">
              {isArabic ? "الرئيسية" : "Home"}
            </Link>
            <Link href="/markets" className="transition hover:text-[#D7B65F]">
              {isArabic ? "الأسواق" : "Markets"}
            </Link>
            <Link href="/news" className="transition hover:text-[#D7B65F]">
              {isArabic ? "الأخبار والتحليلات" : "News & Analysis"}
            </Link>
            <Link href="/academy" className="transition hover:text-[#D7B65F]">
              {isArabic ? "دليلك إلى البورصة" : "Academy"}
            </Link>
            <Link href="/economy" className="transition hover:text-[#D7B65F]">
              {isArabic ? "الاقتصاد" : "Economy"}
            </Link>
          </nav>

          <Link
            href="/contact"
            className="rounded-md border border-[#D7B65F] px-4 py-2 text-sm text-[#D7B65F] transition hover:bg-[#D7B65F] hover:text-black"
          >
            {isArabic ? "تواصل معنا" : "Contact"}
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="relative flex min-h-[620px] items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgba(0,0,0,.95), rgba(0,0,0,.55), rgba(0,0,0,.35)), url('https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=2000&q=90')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-black/30" />

        <div
          className={`relative mx-auto w-full max-w-7xl px-6 py-28 ${
            isArabic ? "text-right" : "text-left"
          }`}
          dir={isArabic ? "rtl" : "ltr"}
        >
          <p className="mb-6 text-sm font-semibold tracking-[0.25em] text-[#D7B65F]">
            FINANCIAL MARKETS · ECONOMY · INSIGHT
          </p>

          <h1 className="max-w-3xl text-5xl font-bold leading-tight md:text-7xl">
            {isArabic ? (
              <>
                ما وراء الأرقام،
                <span className="block text-[#D7B65F]">
                  تبدأ الرؤية.
                </span>
              </>
            ) : (
              <>
                See Beyond
                <span className="block text-[#D7B65F]">
                  The Numbers.
                </span>
              </>
            )}
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-9 text-gray-300">
            {isArabic
              ? "من الأسواق العالمية إلى التحولات الاقتصادية، نمنحك مساحة لاكتشاف الصورة الأوسع."
              : "From global markets to economic transformations, discover a broader perspective."}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/markets"
              className="bg-[#D7B65F] px-8 py-4 font-semibold text-black transition hover:bg-[#E8CE87]"
            >
              {isArabic ? "اكتشف الأسواق" : "Explore Markets"}
            </Link>
            <Link
              href="/academy"
              className="border border-white/40 px-8 py-4 text-white transition hover:border-[#D7B65F] hover:text-[#D7B65F]"
            >
              {isArabic ? "دليلك إلى البورصة" : "Explore Academy"}
            </Link>
          </div>
        </div>
      </section>

      {/* Sections */}
      <section className="mx-auto max-w-7xl px-6 py-24" dir={isArabic ? "rtl" : "ltr"}>
        <div className="mb-14">
          <p className="mb-3 text-sm tracking-widest text-[#D7B65F]">
            EXPLORE BORSA VIEW
          </p>
          <h2 className="text-3xl font-bold md:text-4xl">
            {isArabic ? "اكتشف عالم الأسواق" : "Explore the Markets"}
          </h2>
          <p className="mt-4 text-gray-400">
            {isArabic
              ? "مساحات مختلفة لفهم الأسواق والاقتصاد من زوايا متعددة."
              : "Different perspectives on markets and economics."}
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {sections.map((item) => (
            <Link
              key={item.number}
              href={item.href}
              className="group relative min-h-[320px] overflow-hidden border border-[#D7B65F]/15 bg-[#111] transition hover:border-[#D7B65F]/60"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-105"
                style={{
                  backgroundImage: `url('${item.image}')`,
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

              <div className="relative flex min-h-[320px] flex-col justify-end p-8">
                <span className="mb-4 text-sm text-[#D7B65F]">
                  {item.number}
                </span>
                <h3 className="text-2xl font-bold text-white">
                  {isArabic
                    ? item.title
                    : ["Gold & Markets", "Currencies & Stocks", "Stock Market Guide", "Economy & Thought"][Number(item.number) - 1]}
                </h3>
                <p className="mt-3 max-w-md text-sm leading-7 text-gray-300">
                  {isArabic
                    ? item.description
                    : [
                        "Follow gold and global market developments.",
                        "Discover currencies, stocks and indices.",
                        "Articles and concepts to understand financial markets.",
                        "Deeper perspectives on economics and global change.",
                      ][Number(item.number) - 1]}
                </p>
                <span className="mt-6 text-sm font-semibold text-[#D7B65F]">
                  {isArabic ? "اكتشف المزيد ←" : "Discover More →"}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="border-y border-[#D7B65F]/20 bg-[#101010] px-6 py-24 text-center">
        <p className="mb-4 text-sm tracking-widest text-[#D7B65F]">
          BORSA VIEW
        </p>
        <h2 className="text-3xl font-bold md:text-5xl">
          {isArabic ? "ابدأ رحلة اكتشافك" : "Begin Your Journey"}
        </h2>
        <p className="mx-auto mt-5 max-w-xl leading-8 text-gray-400">
          {isArabic
            ? "للاستفسارات والتواصل، يمكنك زيارة صفحة التواصل واختيار الوسيلة المناسبة."
            : "For inquiries, visit our contact page and choose your preferred method."}
        </p>
        <Link
          href="/contact"
          className="mt-9 inline-block bg-[#D7B65F] px-10 py-4 font-semibold text-black transition hover:bg-[#E8CE87]"
        >
          {isArabic ? "الدخول إلى صفحة التواصل" : "Visit Contact Page"}
        </Link>
      </section>

      {/* Footer */}
      <footer className="bg-black px-6 py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 md:flex-row">
          <span className="text-xl font-bold tracking-widest text-[#D7B65F]">
            BorsaView
          </span>
          <p className="text-center text-xs text-gray-500">
            © {new Date().getFullYear()} BorsaView.{" "}
            {isArabic ? "جميع الحقوق محفوظة." : "All rights reserved."}
          </p>
        </div>
      </footer>
    </main>
  );
}
