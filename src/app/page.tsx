import Link from 'next/link';
import { CheckCircle, Clock, Shield, Award } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { DEFAULT_SERVICES, BUSINESS_INFO } from '@/lib/constants';

export default function Home() {
  const features = [
    {
      icon: CheckCircle,
      title: 'Certified Technicians',
      description: 'ASE-certified mechanics with years of experience in automotive repair.'
    },
    {
      icon: Clock,
      title: 'Quick Turnaround',
      description: 'Fast, efficient service to get you back on the road as soon as possible.'
    },
    {
      icon: Shield,
      title: 'Quality Guarantee',
      description: 'All our work is backed by comprehensive warranties for your peace of mind.'
    },
    {
      icon: Award,
      title: '25+ Years Experience',
      description: 'Trusted by thousands of customers with over two decades of service excellence.'
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Expert Auto Repair 
                <span className="text-blue-300"> You Can Trust</span>
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Professional automotive services with honest pricing, quality parts, and certified technicians. 
                Your vehicle deserves the best care.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/appointments">
                  <Button size="lg" className="w-full sm:w-auto">
                    Book Appointment
                  </Button>
                </Link>
                <Link href="/services">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto bg-transparent border-white text-white hover:bg-white hover:text-blue-900">
                    View Services
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-2xl font-semibold mb-4">Get A Quote Today</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span>Oil Change Service:</span>
                    <span className="font-semibold">Starting at $49.99</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Brake Service:</span>
                    <span className="font-semibold">Starting at $149.99</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Engine Diagnostics:</span>
                    <span className="font-semibold">Starting at $99.99</span>
                  </div>
                  <div className="border-t border-white/20 pt-4 mt-4">
                    <p className="text-center text-blue-100">
                      Call <span className="font-semibold">{BUSINESS_INFO.phone}</span> for detailed pricing
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose AutoWorks?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We&apos;re committed to providing exceptional automotive service with integrity, quality, and customer satisfaction as our top priorities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent>
                    <div className="flex justify-center mb-4">
                      <Icon className="h-12 w-12 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Expert Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From routine maintenance to complex repairs, our certified technicians handle it all with professional expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {DEFAULT_SERVICES.slice(0, 6).map((service) => (
              <Card key={service.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle>{service.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-blue-600 font-semibold">{service.price}</span>
                    <span className="text-sm text-gray-500">{service.duration}</span>
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

      {/* CTA Section */}
      <section className="bg-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Service Your Vehicle?</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Don&apos;t wait for problems to get worse. Schedule your appointment today and experience the AutoWorks difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/appointments">
              <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100">
                Schedule Appointment
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-900">
                Get Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
