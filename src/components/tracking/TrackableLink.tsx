import { Link } from 'react-router-dom';
import { trackCTAClick } from '@/config/site';

interface TrackableLinkProps {
  to: string;
  label: string;
  className?: string;
}

export default function TrackableLink({ to, label, className }: TrackableLinkProps) {
  const handleClick = () => {
    trackCTAClick(label, to);
  };

  return (
    <Link to={to} onClick={handleClick} className={className}>
      {label}
    </Link>
  );
}
