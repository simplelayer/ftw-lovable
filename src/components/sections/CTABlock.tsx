import { Link } from 'react-router-dom';

interface CTABlockProps {
  heading: string;
  subheading?: string;
  ctaLabel: string;
  ctaHref: string;
}

export default function CTABlock({ heading, subheading, ctaLabel, ctaHref }: CTABlockProps) {
  return (
    <div className="bg-brand-primary rounded-lg p-12 text-center text-white">
      <h2 className="mb-2 text-3xl font-bold">{heading}</h2>
      {subheading && <p className="mb-8 text-gray-100">{subheading}</p>}
      <Link
        to={ctaHref}
        className="inline-block bg-brand-accent px-6 py-3 rounded-lg hover:bg-brand-bright transition"
      >
        {ctaLabel}
      </Link>
    </div>
  );
}
