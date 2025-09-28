import { Metadata } from 'next';
import { Users, Award, Shield, Heart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { BUSINESS_INFO } from '@/lib/constants';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about AutoWorks - your trusted automotive repair specialists with over 25 years of experience serving the community with quality, integrity, and fair pricing.',
};

export default function AboutPage() {
  const values = [
    {
      icon: Shield,
      title: 'Trust & Integrity',
      description: 'We believe in honest communication and transparent pricing. No surprises, no hidden fees - just straightforward service you can count on.'
    },
    {
      icon: Award,
      title: 'Quality Workmanship',
      description: 'Our ASE-certified technicians use the latest diagnostic equipment and high-quality parts to ensure your vehicle receives the best care possible.'
    },
    {
      icon: Heart,
      title: 'Customer First',
      description: 'Your satisfaction is our priority. We take the time to explain repairs, answer questions, and ensure you feel confident in our service.'
    },
    {
      icon: Users,
      title: 'Community Focused',
      description: 'As a local business, we\'re committed to serving our community with reliable automotive services and building lasting relationships.'
    }
  ];

  const teamMembers = [
    {
      name: 'Mike Johnson',
      role: 'Owner & Master Technician',
      experience: '25+ years',
      specialties: 'Engine Diagnostics, Transmission Repair'
    },
    {
      name: 'Sarah Chen',
      role: 'ASE Master Technician',
      experience: '15+ years',
      specialties: 'Brake Systems, Electrical Systems'
    },
    {
      name: 'Carlos Rodriguez',
      role: 'Senior Technician',
      experience: '12+ years',
      specialties: 'AC Systems, Preventive Maintenance'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About AutoWorks
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Your trusted automotive repair partners since 1998. Built on quality, integrity, and exceptional customer service.
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
                  AutoWorks was founded in 1998 with a simple mission: to provide honest, reliable automotive repair services to our local community. What started as a small garage has grown into a full-service automotive center, but our core values remain the same.
                </p>
                <p>
                  Over the past 25+ years, we&apos;ve built our reputation one satisfied customer at a time. Our team of ASE-certified technicians combines old-school craftsmanship with modern diagnostic technology to keep your vehicle running at its best.
                </p>
                <p>
                  We believe that car repair shouldn&apos;t be a mystery. That&apos;s why we take the time to explain what we find, show you the parts that need attention, and provide clear, upfront pricing for all our services.
                </p>
              </div>
              <div className="mt-8">
                <Link href="/services">
                  <Button size="lg">View Our Services</Button>
                </Link>
              </div>
            </div>
            <div className="bg-gray-100 rounded-lg p-8">
              <h3 className="text-2xl font-semibold mb-6">By the Numbers</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">25+</div>
                  <div className="text-gray-600">Years in Business</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">10,000+</div>
                  <div className="text-gray-600">Vehicles Serviced</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">98%</div>
                  <div className="text-gray-600">Customer Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">5-Star</div>
                  <div className="text-gray-600">Average Rating</div>
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
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              These core principles guide everything we do and shape how we serve our customers every day.
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