import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQ {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  faqs: FAQ[];
}

export default function FAQAccordion({ faqs }: FAQAccordionProps) {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <div className="space-y-4">
      {faqs.map((faq, idx) => (
        <div key={idx} className="border rounded-lg">
          <button
            onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
            className="w-full flex items-center justify-between p-4 hover:bg-gray-50"
          >
            <h3 className="font-semibold text-left">{faq.question}</h3>
            <ChevronDown
              className={`h-5 w-5 transition-transform ${openIdx === idx ? 'rotate-180' : ''}`}
            />
          </button>
          {openIdx === idx && (
            <div className="px-4 pb-4 text-gray-600 border-t">
              <p>{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
