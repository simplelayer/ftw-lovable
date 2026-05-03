import { Link } from 'react-router-dom';

interface Solution {
  title: string;
  href: string;
  description: string;
}

interface IndustrySolutionLinksProps {
  solutions: Solution[];
}

export default function IndustrySolutionLinks({ solutions }: IndustrySolutionLinksProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {solutions.map((solution) => (
        <Link
          key={solution.href}
          to={solution.href}
          className="p-6 border rounded-lg hover:shadow-lg transition"
        >
          <h3 className="font-semibold mb-2">{solution.title}</h3>
          <p className="text-gray-600 text-sm">{solution.description}</p>
        </Link>
      ))}
    </div>
  );
}
