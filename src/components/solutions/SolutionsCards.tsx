import { Link } from 'react-router-dom';

interface Solution {
  slug: string;
  title: string;
  cardIcon: string;
  cardDescription: string;
  cardBadge?: string;
}

interface SolutionsCardsProps {
  solutions: Solution[];
}

export default function SolutionsCards({ solutions }: SolutionsCardsProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {solutions.map((solution) => (
        <Link
          key={solution.slug}
          to={`/solutions/${solution.slug}`}
          className="group border rounded-lg p-6 hover:shadow-lg transition"
        >
          {solution.cardBadge && (
            <span className="inline-block bg-brand-accent text-white text-xs px-3 py-1 rounded-full mb-4">
              {solution.cardBadge}
            </span>
          )}
          <h3 className="text-xl font-semibold mb-2 group-hover:text-brand-primary">
            {solution.title}
          </h3>
          <p className="text-gray-600 text-sm">{solution.cardDescription}</p>
        </Link>
      ))}
    </div>
  );
}
