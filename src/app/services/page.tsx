import { Metadata } from 'next';
import { Wrench, CheckCircle, Clock, DollarSign } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { DEFAULT_SERVICES } from '@/lib/constants';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Auto Repair Services',
  description: 'Comprehensive automotive repair services including oil changes, brake repair, engine diagnostics, and more. Professional mechanics with quality parts and fair pricing.',
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Wrench className="h-16 w-16 mx-auto mb-6 text-blue-300" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Convenient Auto Repair Services
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Pickup & delivery service with skilled mechanics using modern diagnostic tools. 
              Perfect for busy professionals, fleet owners, and Uber/Bolt drivers across Nigeria.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {DEFAULT_SERVICES.map((service) => (
              <Card key={service.id} className="hover:shadow-lg transition-shadow h-full">
                <CardHeader>
                  <CardTitle className="text-xl text-blue-900">{service.name}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <DollarSign className="h-4 w-4 text-green-600 mr-2" />
                        <span className="font-semibold text-green-600">{service.price}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 text-gray-500 mr-2" />
                        <span className="text-sm text-gray-500">{service.duration}</span>
                      </div>
                    </div>
                    
                    <div className="pt-4 border-t">
                      <Link href="/appointments">
                        <Button className="w-full">
                          Book This Service
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Features */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">The AUTOWORKS Advantage</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Nigeria&apos;s most convenient auto repair service with pickup & delivery, transparent pricing, and modern diagnostic tools.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <CheckCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Pickup & Delivery</h3>
              <p className="text-gray-600">
                We collect your car, repair it professionally, and return it safely - total convenience.
              </p>
            </div>
            
            <div className="text-center">
              <Wrench className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Modern Diagnostics</h3>
              <p className="text-gray-600">
                OBD2 scanners and advanced diagnostic equipment for accurate repairs and diagnostics.
              </p>
            </div>
            
            <div className="text-center">
              <DollarSign className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Transparent Pricing</h3>
              <p className="text-gray-600">
                Upfront pricing with digital invoices and clear communication - no hidden fees.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Experience Nigeria&apos;s Most Convenient Auto Repair</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Book online and enjoy pickup & delivery service. Perfect for busy professionals and fleet owners.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/appointments">
              <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100">
                Schedule Service
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-900">
                Get Free Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}