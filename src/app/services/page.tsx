import { Metadata } from 'next';
import { Wrench, CheckCircle, Clock, DollarSign } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { getServices } from '@/lib/strapi';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Auto Repair Services | AutoWorks',
  description: 'Comprehensive automotive repair services including oil changes, brake repair, engine diagnostics, and more. Professional mechanics with quality parts and fair pricing.',
};

export default async function ServicesPage() {
  // Server-side data fetching with Strapi integration
  const services = await getServices();
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 rugged-gradient"></div>
        <div className="absolute inset-0 industrial-pattern"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-gray-800/70 to-gray-900/90"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-white">
          <div className="text-center">
            <div className="bg-orange-500/20 p-4 rounded-full w-24 h-24 mx-auto mb-6">
              <Wrench className="h-16 w-16 mx-auto text-orange-400 animate-wrench" />
            </div>
            <h1 className="display-font text-4xl md:text-5xl font-normal mb-6 tracking-wide">
              EXPERT AUTO REPAIR SERVICES
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From routine maintenance to complex repairs, our certified technicians provide comprehensive automotive services with honest pricing and quality parts.
            </p>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-orange-500 to-red-500"></div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={service.id} className="group relative">
                <Card className="hover:shadow-lg transition-shadow h-full tool-shadow border-2 border-gray-200 hover:border-orange-500/50">
                  <CardHeader className="relative">
                    <div className="absolute top-0 right-0 w-12 h-12 bg-gray-800 group-hover:bg-orange-500 transition-colors duration-300"></div>
                    <div className="absolute top-0 right-0 w-8 h-8 bg-white transform rotate-45 translate-x-2 translate-y-2"></div>
                    <CardTitle className="text-xl text-gray-800 condensed-font tracking-wide">{service.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow relative">
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    
                    <div className="space-y-3">
                      <div className="flex items-center justify-between bg-gray-100 p-3">
                        <div className="flex items-center">
                          <DollarSign className="h-4 w-4 text-orange-500 mr-2" />
                          <span className="font-semibold text-orange-600">{service.price}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 text-gray-500 mr-2" />
                          <span className="text-sm text-gray-500">{service.duration}</span>
                        </div>
                      </div>
                      
                      <div className="pt-4 border-t">
                        <Link href="/contact">
                          <button className="btn-industrial w-full py-3">
                            Request Quote
                          </button>
                        </Link>
                      </div>
                    </div>
                    
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                  </CardContent>
                </Card>
                
                <div className="absolute -top-2 -left-2 w-8 h-8 bg-orange-500 text-white text-sm font-bold condensed-font flex items-center justify-center transform rotate-45">
                  <span className="transform -rotate-45">{String(index + 1).padStart(2, '0')}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Features */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Our Services?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We stand behind every service with quality guarantees and professional expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <CheckCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Quality Guarantee</h3>
              <p className="text-gray-600">
                All services come with comprehensive warranties and satisfaction guarantees.
              </p>
            </div>
            
            <div className="text-center">
              <Wrench className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Expert Technicians</h3>
              <p className="text-gray-600">
                ASE-certified mechanics with years of experience in automotive repair.
              </p>
            </div>
            
            <div className="text-center">
              <DollarSign className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Fair Pricing</h3>
              <p className="text-gray-600">
                Transparent, competitive pricing with no hidden fees or surprise charges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Service Your Vehicle?</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Don&apos;t wait for problems to get worse. Book your service appointment today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100">
                Request Service
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