import type { ReactNode } from "react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

type Props = {
  eyebrow: string;
  title: string;
  description: string;
  children: ReactNode;
  tone?: "default" | "alt";
};

export default function Section({
  eyebrow,
  title,
  description,
  children,
  tone = "default",
}: Props) {
  const toneClass =
    tone === "alt" ? "border-y border-border bg-surface/50" : "";

  return (
    <section className={`py-16 sm:py-20 ${toneClass}`}>
      <Container>
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          description={description}
        />
        <div className="mt-10">{children}</div>
      </Container>
    </section>
  );
}