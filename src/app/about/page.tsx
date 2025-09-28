import { Metadata } from 'next';
import { Users, Award, Shield, Smartphone, Truck, Clock, Settings, Cpu } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { BUSINESS_INFO, VALUE_PROPOSITIONS } from '@/lib/constants';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about AutoWorks - your trusted automotive repair specialists with over 25 years of experience serving the community with quality, integrity, and fair pricing.',
};

export default function AboutPage() {
  const getIconComponent = (iconName: string) => {
    const icons = {
      smartphone: Smartphone,
      truck: Truck, 
      shield: Shield,
      award: Award,
      clock: Clock,
      settings: Settings,
      cpu: Cpu
    };
    return icons[iconName as keyof typeof icons] || Shield;
  };

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
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 rugged-gradient"></div>
        <div className="absolute inset-0 industrial-pattern"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-gray-800/70 to-gray-900/90"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-white">
          <div className="text-center">
            <div className="inline-flex items-center bg-orange-500/10 border border-orange-500/30 rounded-full px-6 py-2 mb-6">
              <Shield className="h-5 w-5 mr-2 text-orange-400" />
              <span className="condensed-font font-bold text-orange-400 tracking-wider text-sm">
                OUR STORY
              </span>
            </div>
            <h1 className="display-font text-4xl md:text-5xl font-normal mb-6 tracking-wide">
              ABOUT AUTOWORKS
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Revolutionizing auto repair with on-demand service, pick-up & delivery, and transparent pricing. Professional mechanics you can trust.
            </p>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-orange-500 to-red-500"></div>
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
            <div className="bg-gray-800 rounded-lg p-8 tool-shadow">
              <h3 className="display-font text-2xl font-semibold mb-6 text-white tracking-wide">BY THE NUMBERS</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-400 mb-2 display-font">25+</div>
                  <div className="text-gray-300 condensed-font">Years in Business</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-400 mb-2 display-font">10,000+</div>
                  <div className="text-gray-300 condensed-font">Vehicles Serviced</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-400 mb-2 display-font">98%</div>
                  <div className="text-gray-300 condensed-font">Customer Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-400 mb-2 display-font">5-Star</div>
                  <div className="text-gray-300 condensed-font">Average Rating</div>
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
              We&apos;re not just another repair shop. Here&apos;s how we&apos;re revolutionizing auto repair with modern convenience and professional expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {VALUE_PROPOSITIONS.slice(0, 6).map((value, index) => {
              const Icon = getIconComponent(value.icon);
              return (
                <div key={value.title} className="group relative">
                  <Card className="hover:shadow-lg transition-shadow h-full tool-shadow border-2 border-gray-200 hover:border-orange-500/50">
                    <CardContent className="p-6 text-center relative">
                      <div className="absolute top-0 right-0 w-12 h-12 bg-gray-800 group-hover:bg-orange-500 transition-colors duration-300"></div>
                      <div className="absolute top-0 right-0 w-8 h-8 bg-white transform rotate-45 translate-x-2 translate-y-2"></div>
                      
                      <div className="flex justify-center mb-4">
                        <div className="w-16 h-16 bg-gray-800 group-hover:bg-orange-500 transition-colors duration-300 flex items-center justify-center tool-shadow">
                          <Icon className="h-8 w-8 text-orange-400 group-hover:text-white transition-colors duration-300" />
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold mb-3 condensed-font tracking-wide">{value.title}</h3>
                      <p className="text-gray-600">{value.description}</p>
                      
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                    </CardContent>
                  </Card>
                  
                  <div className="absolute -top-2 -left-2 w-6 h-6 bg-orange-500 text-white text-xs font-bold condensed-font flex items-center justify-center transform rotate-45">
                    <span className="transform -rotate-45">{index + 1}</span>
                  </div>
                </div>
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
              <Link href="/contact">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-900">
                  Get Quote
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}