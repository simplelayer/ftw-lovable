import { Link } from 'react-router-dom';

interface Bundle {
  slug: string;
  title: string;
  metaDescription: string;
}

interface BundlesCardsProps {
  bundles: Bundle[];
}

export default function BundlesCards({ bundles }: BundlesCardsProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {bundles.map((bundle) => (
        <Link
          key={bundle.slug}
          to={`/bundles/${bundle.slug}`}
          className="p-6 border rounded-lg hover:shadow-lg transition"
        >
          <h3 className="text-lg font-semibold mb-2">{bundle.title}</h3>
          <p className="text-gray-600 text-sm">{bundle.metaDescription}</p>
        </Link>
      ))}
    </div>
  );
}
