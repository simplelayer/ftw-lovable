import { Link } from 'react-router-dom';

interface PricingTier {
  name: string;
  price: string;
  features: string[];
}

interface PricingCard {
  title: string;
  price: string;
  description: string;
  features: string[];
  tiers?: PricingTier[];
  note?: string;
  ctaLabel: string;
  ctaHref: string;
}

interface SolutionPricingCardsProps {
  cards: PricingCard[];
}

export default function SolutionPricingCards({ cards }: SolutionPricingCardsProps) {
  return (
    <div className="grid gap-8 md:grid-cols-2">
      {cards.map((card) => (
        <div key={card.title} className="border rounded-lg p-8">
          <h3 className="text-2xl font-semibold mb-2">{card.title}</h3>
          <p className="text-3xl font-bold mb-4">{card.price}</p>
          <p className="text-gray-600 mb-6">{card.description}</p>
          <ul className="space-y-2 mb-6">
            {card.features.map((feature, idx) => (
              <li key={idx} className="text-sm">✓ {feature}</li>
            ))}
          </ul>
          {card.note && <p className="text-xs text-gray-500 mb-6">{card.note}</p>}
          <Link
            to={card.ctaHref}
            className="block text-center bg-brand-accent text-white py-2 rounded hover:bg-brand-bright"
          >
            {card.ctaLabel}
          </Link>
        </div>
      ))}
    </div>
  );
}
