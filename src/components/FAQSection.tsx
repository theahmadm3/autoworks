'use client';

import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
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
    <Card variant="elevated" className="group overflow-hidden">
      <CardContent className="p-0">
        <button
          className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gradient-to-r hover:from-blue-50 hover:to-transparent transition-all duration-300"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="flex items-center flex-1">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
              <HelpCircle className="h-5 w-5 text-white" />
            </div>
            <h3 className="text-lg font-semibold pr-4 text-gray-900 group-hover:text-blue-600 transition-colors">
              {faq.question}
            </h3>
          </div>
          <ChevronDown 
            className={`h-6 w-6 text-gray-500 group-hover:text-blue-600 transition-all duration-300 ${
              isOpen ? 'rotate-180' : ''
            }`} 
          />
        </button>
        {isOpen && (
          <div className="px-8 pb-6 ml-14">
            <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-blue-500">
              <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

export function FAQSection({ faqs }: FAQSectionProps) {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-blue-100 to-transparent"></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
            Got Questions?
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about our service. Can&apos;t find what you&apos;re looking for? 
            <span className="text-blue-600 font-medium"> Contact us directly</span>.
          </p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq) => (
            <FAQItem key={faq.id} faq={faq} />
          ))}
        </div>
        
        {/* Contact CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white">
            <h3 className="font-display text-2xl font-bold mb-4">
              Still have questions?
            </h3>
            <p className="text-blue-100 mb-6 text-lg">
              Our friendly team is here to help you with any questions about our services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-600 rounded-xl font-medium hover:bg-gray-100 transition-colors">
                Contact Us
              </a>
              <a href="tel:(555) 123-4567" className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white rounded-xl font-medium hover:bg-white hover:text-blue-600 transition-colors">
                Call Now: (555) 123-4567
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}