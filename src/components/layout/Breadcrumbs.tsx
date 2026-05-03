import { Link, useLocation } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export default function Breadcrumbs() {
  const location = useLocation();
  const parts = location.pathname.split('/').filter(Boolean);

  return (
    <nav className="flex items-center gap-2 text-sm">
      <Link to="/" className="hover:text-brand-primary">Home</Link>
      {parts.map((part, idx) => (
        <span key={idx} className="flex items-center gap-2">
          <ChevronRight className="h-4 w-4" />
          <span className="capitalize">{part.replace(/-/g, ' ')}</span>
        </span>
      ))}
    </nav>
  );
}
