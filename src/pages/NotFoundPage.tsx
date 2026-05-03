import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-6xl font-bold">404</h1>
      <p className="mt-4 text-2xl text-gray-600">Page Not Found</p>
      <Link to="/" className="mt-8 px-6 py-3 bg-brand-accent text-white rounded-lg hover:bg-brand-bright">
        Back to Home
      </Link>
    </div>
  );
}
