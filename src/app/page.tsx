'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { 
  Smartphone, 
  Truck, 
  Shield, 
  Award, 
  Clock, 
  Settings, 
  Cpu, 
  Calendar,
  Wrench,
  CheckCircle,
  Star,
  ChevronDown,
  Phone,
  Mail
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { 
  DEFAULT_SERVICES, 
  DEFAULT_TESTIMONIALS, 
  DEFAULT_FAQS, 
  DEFAULT_HOW_IT_WORKS, 
  VALUE_PROPOSITIONS,
  BUSINESS_INFO 
} from '@/lib/constants';
import { getServices, getTestimonials, getFAQs, getHowItWorksSteps } from '@/lib/utils';

export default function Home() {
  const [services, setServices] = useState(DEFAULT_SERVICES);
  const [testimonials, setTestimonials] = useState(DEFAULT_TESTIMONIALS);
  const [faqs, setFaqs] = useState(DEFAULT_FAQS);
  const [howItWorksSteps, setHowItWorksSteps] = useState(DEFAULT_HOW_IT_WORKS);

  useEffect(() => {
    // Try to fetch from Strapi, fall back to defaults
    Promise.all([
      getServices().then(data => data.length > 0 ? data : DEFAULT_SERVICES),
      getTestimonials().then(data => data.length > 0 ? data : DEFAULT_TESTIMONIALS),
      getFAQs().then(data => data.length > 0 ? data : DEFAULT_FAQS),
      getHowItWorksSteps().then(data => data.length > 0 ? data : DEFAULT_HOW_IT_WORKS)
    ]).then(([servicesData, testimonialsData, faqsData, stepsData]) => {
      setServices(servicesData);
      setTestimonials(testimonialsData);
      setFaqs(faqsData);
      setHowItWorksSteps(stepsData);
    });
  }, []);

  const getIconComponent = (iconName: string) => {
    const icons = {
      smartphone: Smartphone,
      truck: Truck,
      shield: Shield,
      award: Award,
      clock: Clock,
      settings: Settings,
      cpu: Cpu,
      calendar: Calendar,
      wrench: Wrench,
      'check-circle': CheckCircle
    };
    return icons[iconName as keyof typeof icons] || CheckCircle;
  };

  return (
    <>
      {/* Hero Section - Cleaner Design */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              On-Demand Auto Repair
              <span className="block text-blue-300 text-3xl md:text-5xl lg:text-6xl mt-2">
                With Pick-Up & Delivery
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Professional mechanics come to you. Transparent pricing, quality guaranteed, 
              and your car returned safely to your door.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/contact">
                <Button size="lg" className="text-lg px-8 py-4 bg-white text-blue-900 hover:bg-gray-100">
                  Get Free Quote
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg" className="text-lg px-8 py-4 bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900">
                  Emergency Service
                </Button>
              </Link>
            </div>
            
            {/* Key differentiators */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="flex items-center justify-center mb-2">
                  <Smartphone className="h-6 w-6 mr-2" />
                  <span className="font-semibold">Book Online</span>
                </div>
                <p className="text-sm text-blue-100">Website, Instagram, or email</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="flex items-center justify-center mb-2">
                  <Truck className="h-6 w-6 mr-2" />
                  <span className="font-semibold">We Come to You</span>
                </div>
                <p className="text-sm text-blue-100">Pick-up, repair, deliver</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Getting your car serviced has never been easier. Here&apos;s our simple 4-step process.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorksSteps.map((step) => {
              const Icon = getIconComponent(step.icon);
              return (
                <div key={step.id} className="text-center">
                  <div className="bg-blue-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon className="h-10 w-10 text-white" />
                  </div>
                  <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-4 text-sm font-bold">
                    {step.order}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Value Propositions - Highlighting On-Demand and Pick-Up & Delivery */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose AutoWorks?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We&apos;re revolutionizing auto repair with convenience, transparency, and professional expertise.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {VALUE_PROPOSITIONS.map((prop) => {
              const Icon = getIconComponent(prop.icon);
              const isHighlighted = prop.title === 'On-Demand Service' || prop.title === 'Pick-Up & Delivery';
              
              return (
                <Card key={prop.title} className={`text-center hover:shadow-lg transition-shadow ${isHighlighted ? 'ring-2 ring-blue-500 bg-blue-50' : ''}`}>
                  <CardContent className="pt-8">
                    <div className="flex justify-center mb-6">
                      <div className={`w-16 h-16 rounded-full flex items-center justify-center ${isHighlighted ? 'bg-blue-600' : 'bg-gray-100'}`}>
                        <Icon className={`h-8 w-8 ${isHighlighted ? 'text-white' : 'text-blue-600'}`} />
                      </div>
                    </div>
                    <h3 className={`text-xl font-semibold mb-3 ${isHighlighted ? 'text-blue-900' : ''}`}>
                      {prop.title}
                      {isHighlighted && <span className="ml-2 text-blue-600">★</span>}
                    </h3>
                    <p className="text-gray-600">{prop.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Preview with CTAs */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Expert Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From routine maintenance to complex repairs, our certified mechanics handle it all with professional expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(0, 6).map((service) => (
              <Card key={service.id} className="hover:shadow-lg transition-shadow h-full flex flex-col">
                <CardHeader>
                  <CardTitle className="text-xl">{service.name}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col">
                  <p className="text-gray-600 mb-6 flex-grow">{service.description}</p>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-blue-600 font-semibold">{service.price}</span>
                      <span className="text-sm text-gray-500">{service.duration}</span>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-2">
                      <Link href="/contact">
                        <Button className="w-full text-sm">
                          Get Quote
                        </Button>
                      </Link>
                      <Link href="/contact">
                        <Button variant="outline" className="w-full text-sm">
                          Book Now
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/services">
              <Button size="lg">View All Services</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What Our Customers Say</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Don&apos;t just take our word for it. Here&apos;s what real customers think about our service.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 italic">&quot;{testimonial.comment}&quot;</p>
                  <div className="border-t pt-4">
                    <p className="font-semibold">{testimonial.name}</p>
                    {testimonial.vehicle && (
                      <p className="text-sm text-gray-500">{testimonial.vehicle}</p>
                    )}
                    {testimonial.service && (
                      <p className="text-sm text-blue-600">{testimonial.service}</p>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection faqs={faqs} />

      {/* CTA Section */}
      <section className="bg-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready for Hassle-Free Auto Repair?</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Experience the convenience of on-demand service with pick-up and delivery. 
            Professional repairs, transparent pricing, guaranteed quality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link href="/contact">
              <Button size="lg" className="text-lg px-8 py-4 bg-white text-blue-900 hover:bg-gray-100">
                Get Free Quote
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-blue-900">
                Emergency Service
              </Button>
            </Link>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-blue-100">
            <div className="flex items-center">
              <Phone className="h-5 w-5 mr-2" />
              <span>{BUSINESS_INFO.phone}</span>
            </div>
            <div className="flex items-center">
              <Mail className="h-5 w-5 mr-2" />
              <span>{BUSINESS_INFO.email}</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// FAQ Component with expand/collapse
function FAQSection({ faqs }: { faqs: { id: number; question: string; answer: string }[] }) {
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

function FAQItem({ faq }: { faq: { id: number; question: string; answer: string } }) {
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
