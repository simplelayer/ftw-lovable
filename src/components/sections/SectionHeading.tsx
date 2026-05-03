interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}

export default function SectionHeading({ eyebrow, title, subtitle }: SectionHeadingProps) {
  return (
    <div className="mb-12 text-center">
      {eyebrow && <p className="text-sm font-semibold text-brand-primary uppercase">{eyebrow}</p>}
      <h2 className="mt-2 text-3xl font-bold md:text-4xl">{title}</h2>
      {subtitle && <p className="mt-4 text-lg text-gray-600">{subtitle}</p>}
    </div>
  );
}
