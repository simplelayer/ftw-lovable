import { Link } from 'react-router-dom';

interface RelatedLink {
  label: string;
  href: string;
}

interface SolutionRelatedLinksProps {
  title: string;
  links: RelatedLink[];
}

export default function SolutionRelatedLinks({ title, links }: SolutionRelatedLinksProps) {
  return (
    <div>
      <h3 className="font-semibold mb-4">{title}</h3>
      <ul className="space-y-2">
        {links.map((link) => (
          <li key={link.href}>
            <Link to={link.href} className="text-brand-primary hover:underline">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
