interface ComparisonItem {
  question: string;
  answer: string;
}

interface SolutionComparisonProps {
  items: ComparisonItem[];
}

export default function SolutionComparison({ items }: SolutionComparisonProps) {
  return (
    <div className="space-y-6">
      {items.map((item, idx) => (
        <div key={idx} className="border-b pb-6">
          <h3 className="font-semibold mb-2">{item.question}</h3>
          <p className="text-gray-600">{item.answer}</p>
        </div>
      ))}
    </div>
  );
}
