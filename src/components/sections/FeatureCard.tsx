interface FeatureCardProps {
  title: string;
  description: string;
  icon?: string;
}

export default function FeatureCard({ title, description, icon }: FeatureCardProps) {
  return (
    <div className="p-6 border rounded-lg">
      {icon && <div className="mb-4 text-2xl">{icon}</div>}
      <h3 className="font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}
