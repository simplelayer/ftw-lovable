interface Card {
  title: string;
  description: string;
  href?: string;
}

interface CardGridProps {
  cards: Card[];
  columns?: number;
}

export default function CardGrid({ cards, columns = 3 }: CardGridProps) {
  const colClass = {
    1: 'grid-cols-1',
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-3',
    4: 'md:grid-cols-4',
  }[columns] || 'md:grid-cols-3';

  return (
    <div className={`grid gap-6 ${colClass}`}>
      {cards.map((card, idx) => (
        <div key={idx} className="border rounded-lg p-6 hover:shadow-lg transition">
          <h3 className="font-semibold mb-2">{card.title}</h3>
          <p className="text-gray-600 text-sm">{card.description}</p>
        </div>
      ))}
    </div>
  );
}
