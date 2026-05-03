interface Step {
  title: string;
  description: string;
}

interface ProcessStepsProps {
  steps: Step[];
}

export default function ProcessSteps({ steps }: ProcessStepsProps) {
  return (
    <div className="grid gap-8 md:grid-cols-3">
      {steps.map((step, idx) => (
        <div key={idx} className="text-center">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-brand-accent text-white font-bold mx-auto">
            {idx + 1}
          </div>
          <h3 className="mb-2 font-semibold">{step.title}</h3>
          <p className="text-sm text-gray-600">{step.description}</p>
        </div>
      ))}
    </div>
  );
}
