'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/Card';
import { FAQ } from '@/types';

interface FAQSectionProps {
  faqs: FAQ[];
}

interface FAQItemProps {
  faq: FAQ;
}

function FAQItem({ faq }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardContent className="p-0">
        <button
          className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          <h3 className="text-lg font-semibold pr-4">{faq.question}</h3>
          <ChevronDown className={`h-5 w-5 text-gray-500 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </button>
        {isOpen && (
          <div className="px-6 pb-4">
            <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

export function FAQSection({ faqs }: FAQSectionProps) {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about our service
          </p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq) => (
            <FAQItem key={faq.id} faq={faq} />
          ))}
        </div>
      </div>
    </section>
  );
}