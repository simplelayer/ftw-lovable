interface Step {
  title: string;
  description: string;
}

interface SolutionHowItWorksProps {
  steps: Step[];
}

export default function SolutionHowItWorks({ steps }: SolutionHowItWorksProps) {
  return (
    <div className="grid gap-8 md:grid-cols-3">
      {steps.map((step, idx) => (
        <div key={idx} className="text-center">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-brand-accent text-white font-bold mx-auto">
            {idx + 1}
          </div>
          <h3 className="font-semibold mb-2">{step.title}</h3>
          <p className="text-gray-600 text-sm">{step.description}</p>
        </div>
      ))}
    </div>
  );
}
