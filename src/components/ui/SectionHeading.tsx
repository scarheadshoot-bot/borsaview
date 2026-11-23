type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export default function SectionHeading({ eyebrow, title, description }: Props) {
  return (
    <div className="max-w-2xl">
      {eyebrow && (
        <p className="mb-2 text-sm font-semibold text-accent">{eyebrow}</p>
      )}
      <h2 className="text-2xl font-bold sm:text-3xl">{title}</h2>
      {description && <p className="mt-3 text-muted">{description}</p>}
    </div>
  );
}