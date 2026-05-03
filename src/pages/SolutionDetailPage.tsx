import { useParams } from 'react-router-dom';

export default function SolutionDetailPage() {
  const { slug } = useParams<{ slug: string }>();

  return (
    <div className="min-h-screen">
      <section className="py-20 text-center">
        <h1 className="text-4xl font-bold">Solution: {slug}</h1>
        <p className="mt-4 text-gray-600">Detailed solution information</p>
      </section>
    </div>
  );
}
