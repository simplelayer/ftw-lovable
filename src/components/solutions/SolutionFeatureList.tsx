interface Feature {
  label: string;
  description: string;
}

interface FeatureGroup {
  group: string;
  items: Feature[];
}

interface SolutionFeatureListProps {
  groups: FeatureGroup[];
}

export default function SolutionFeatureList({ groups }: SolutionFeatureListProps) {
  return (
    <div className="grid gap-8 md:grid-cols-2">
      {groups.map((group) => (
        <div key={group.group}>
          <h3 className="font-semibold mb-4">{group.group}</h3>
          <ul className="space-y-3">
            {group.items.map((item, idx) => (
              <li key={idx}>
                <h4 className="font-medium">{item.label}</h4>
                <p className="text-sm text-gray-600">{item.description}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
