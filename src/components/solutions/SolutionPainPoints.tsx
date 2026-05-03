interface PainPoint {
  title: string;
  description: string;
  icon: string;
}

interface SolutionPainPointsProps {
  painPoints: PainPoint[];
}

export default function SolutionPainPoints({ painPoints }: SolutionPainPointsProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {painPoints.map((point, idx) => (
        <div key={idx} className="p-6 border rounded-lg">
          <h3 className="font-semibold mb-2">{point.title}</h3>
          <p className="text-gray-600 text-sm">{point.description}</p>
        </div>
      ))}
    </div>
  );
}
