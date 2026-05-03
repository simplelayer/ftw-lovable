import { Link } from 'react-router-dom';

interface Industry {
  slug: string;
  title: string;
  metaDescription: string;
}

interface IndustriesCardsProps {
  industries: Industry[];
}

export default function IndustriesCards({ industries }: IndustriesCardsProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {industries.map((industry) => (
        <Link
          key={industry.slug}
          to={`/industries/${industry.slug}`}
          className="p-6 border rounded-lg hover:shadow-lg transition"
        >
          <h3 className="text-lg font-semibold mb-2">{industry.title}</h3>
          <p className="text-gray-600 text-sm">{industry.metaDescription}</p>
        </Link>
      ))}
    </div>
  );
}
