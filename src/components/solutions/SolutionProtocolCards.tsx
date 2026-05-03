interface Protocol {
  name: string;
  description: string;
}

interface SolutionProtocolCardsProps {
  protocols: Protocol[];
}

export default function SolutionProtocolCards({ protocols }: SolutionProtocolCardsProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {protocols.map((protocol) => (
        <div key={protocol.name} className="p-4 border rounded-lg text-center">
          <h3 className="font-semibold">{protocol.name}</h3>
          <p className="text-sm text-gray-600 mt-2">{protocol.description}</p>
        </div>
      ))}
    </div>
  );
}
