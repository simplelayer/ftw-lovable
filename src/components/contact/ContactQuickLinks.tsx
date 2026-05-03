import { Link } from 'react-router-dom';

export default function ContactQuickLinks() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <Link
        to="/stack-score"
        className="p-4 border rounded-lg hover:bg-brand-light transition"
      >
        <h3 className="font-semibold">Free Stack Score</h3>
        <p className="text-sm text-gray-600 mt-1">Evaluate your technology stack</p>
      </Link>
      <Link
        to="/schedule"
        className="p-4 border rounded-lg hover:bg-brand-light transition"
      >
        <h3 className="font-semibold">Schedule a Call</h3>
        <p className="text-sm text-gray-600 mt-1">Book a consultation</p>
      </Link>
    </div>
  );
}
