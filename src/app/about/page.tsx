import { Metadata } from 'next';
import { Users, Award, Shield, Heart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { BUSINESS_INFO } from '@/lib/constants';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about AUTOWORKS - Nigeria\'s leading tech-driven auto repair service bringing convenience, trust, and professionalism to car servicing with pickup & delivery.',
};

export default function AboutPage() {
  const values = [
    {
      icon: Shield,
      title: 'Pickup & Delivery',
      description: 'Total convenience for busy professionals. We collect your car, repair it professionally, and return it safely to you.'
    },
    {
      icon: Award,
      title: 'Modern Technology', 
      description: 'OBD2 scanners and advanced diagnostic equipment ensure accurate repairs - not just roadside fixes.'
    },
    {
      icon: Heart,
      title: 'Transparent Pricing',
      description: 'Upfront pricing with digital invoices and clear communication. No hidden fees or surprise charges.'
    },
    {
      icon: Users,
      title: 'Customer Convenience',
      description: 'Order a mechanic online through our website, Instagram, or WhatsApp. No more workshop visits or waiting.'
    }
  ];

  const teamMembers = [
    {
      name: 'Adebayo Okafor',
      role: 'Head of Operations',
      experience: '10+ years',
      specialties: 'Fleet Management, Diagnostic Systems'
    },
    {
      name: 'Fatima Aliyu',
      role: 'Senior Technician',
      experience: '8+ years',
      specialties: 'Engine Diagnostics, OBD2 Systems'
    },
    {
      name: 'Chinedu Nwankwo',
      role: 'Mobile Technician',
      experience: '6+ years',
      specialties: 'Pickup & Delivery, On-site Repairs'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About AUTOWORKS
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Nigeria&apos;s leading tech-driven auto repair service. Making car care simple and accessible with convenient pickup & delivery.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  AUTOWORKS was born from a passion for solving the everyday frustrations of car owners in Nigeria. Founded with the vision of making car care simple and accessible, we bring convenience, trust, and professionalism into car servicing.
                </p>
                <p>
                  Unlike traditional roadside mechanics, we provide pickup-and-delivery service, transparent pricing, and skilled, verified mechanics who use advanced diagnostic tools. Our customers range from busy professionals to e-hailing drivers, logistics companies, and corporate fleets.
                </p>
                <p>
                  Though a young and innovative company, AUTOWORKS aims to set a new standard in the Nigerian auto service industry by blending technology, speed, and reliability with excellent customer service.
                </p>
              </div>
              <div className="mt-8">
                <Link href="/services">
                  <Button size="lg">View Our Services</Button>
                </Link>
              </div>
            </div>
            <div className="bg-gray-100 rounded-lg p-8">
              <h3 className="text-2xl font-semibold mb-6">Our Impact</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                  <div className="text-gray-600">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">1,200+</div>
                  <div className="text-gray-600">Vehicles Serviced</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
                  <div className="text-gray-600">Pickup & Delivery</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">24hrs</div>
                  <div className="text-gray-600">Average Turnaround</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Makes Us Different</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              These core innovations set AUTOWORKS apart as Nigeria&apos;s most convenient auto repair service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <Icon className="h-8 w-8 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                        <p className="text-gray-600">{value.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our experienced, certified technicians are passionate about keeping your vehicle running safely and efficiently.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="bg-gray-200 w-24 h-24 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-12 w-12 text-gray-500" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-2">{member.role}</p>
                  <p className="text-gray-600 mb-2">{member.experience} Experience</p>
                  <p className="text-sm text-gray-500">{member.specialties}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="bg-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Visit Our Shop</h2>
            <div className="max-w-2xl mx-auto mb-8">
              <p className="text-xl text-blue-100 mb-6">
                Located conveniently in the heart of town, our modern facility is equipped with the latest diagnostic tools and equipment.
              </p>
              <div className="space-y-2 text-lg">
                <p>{BUSINESS_INFO.address}</p>
                <p>{BUSINESS_INFO.phone}</p>
                <p>{BUSINESS_INFO.email}</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100">
                  Get Directions
                </Button>
              </Link>
              <Link href="/appointments">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-900">
                  Schedule Visit
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}