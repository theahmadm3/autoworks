import { Metadata } from 'next';
import { Award, Shield, Smartphone, Truck, Clock, Settings, Cpu } from 'lucide-react';
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
      {/* Enhanced Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-blue-800 text-white py-24 overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='60' cy='60' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-24 h-24 bg-white/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-blue-300/20 rounded-full blur-2xl animate-pulse delay-500"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
                About AutoWorks
              </span>
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-400 via-white to-purple-400 mx-auto mb-8 rounded-full"></div>
            
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Revolutionizing auto repair with 
              <span className="font-semibold text-white"> on-demand service</span>, 
              <span className="font-semibold text-white">pick-up & delivery</span>, and 
              <span className="font-semibold text-white">transparent pricing</span>. 
              Professional mechanics you can trust.
            </p>
          </div>
        </div>
      </section>

      {/* Enhanced Our Story Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 relative">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-80 h-80 bg-purple-500 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent">
                Our Story
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mb-8 rounded-full"></div>
              
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p>
                  <span className="font-semibold text-gray-900">AutoWorks was founded in 1998</span> with a simple mission: to provide honest, reliable automotive repair services to our local community. What started as a small garage has grown into a full-service automotive center, but our core values remain the same.
                </p>
                <p>
                  Over the past <span className="font-semibold text-blue-600">25+ years</span>, we&apos;ve built our reputation one satisfied customer at a time. Our team of <span className="font-semibold text-blue-600">ASE-certified technicians</span> combines old-school craftsmanship with modern diagnostic technology to keep your vehicle running at its best.
                </p>
                <p>
                  We believe that car repair shouldn&apos;t be a mystery. That&apos;s why we take the time to <span className="font-semibold text-gray-900">explain what we find</span>, show you the parts that need attention, and provide clear, upfront pricing for all our services.
                </p>
              </div>
              <div className="mt-10">
                <Link href="/services">
                  <Button size="lg" className="text-lg px-10 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                    View Our Services
                  </Button>
                </Link>
              </div>
            </div>
            
            {/* Enhanced Stats Card */}
            <div className="bg-gradient-to-br from-white to-blue-50/50 rounded-3xl p-10 shadow-2xl border border-blue-100/50 backdrop-blur-sm">
              <h3 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                By the Numbers
              </h3>
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center group">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-3xl font-bold text-white">25+</span>
                  </div>
                  <div className="text-gray-600 font-medium">Years in Business</div>
                </div>
                <div className="text-center group">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl font-bold text-white">10K+</span>
                  </div>
                  <div className="text-gray-600 font-medium">Vehicles Serviced</div>
                </div>
                <div className="text-center group">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-3xl font-bold text-white">98%</span>
                  </div>
                  <div className="text-gray-600 font-medium">Customer Satisfaction</div>
                </div>
                <div className="text-center group">
                  <div className="w-20 h-20 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl font-bold text-white">5-★</span>
                  </div>
                  <div className="text-gray-600 font-medium">Average Rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Values Section */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M20 20c0-11.046-8.954-20-20-20v20h20z'/%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
                What Makes Us Different
              </span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-400 via-white to-purple-400 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              We&apos;re not just another repair shop. Here&apos;s how we&apos;re revolutionizing auto repair with modern convenience and professional expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {VALUE_PROPOSITIONS.slice(0, 6).map((value, index) => {
              const Icon = getIconComponent(value.icon);
              const cardGradients = [
                'from-blue-500/20 to-cyan-500/20',
                'from-purple-500/20 to-pink-500/20',
                'from-emerald-500/20 to-teal-500/20',
                'from-orange-500/20 to-red-500/20',
                'from-indigo-500/20 to-purple-500/20',
                'from-rose-500/20 to-pink-500/20'
              ];
              
              return (
                <div key={value.title} className="group text-center transform transition-all duration-300 hover:scale-105">
                  <div className={`
                    bg-gradient-to-br ${cardGradients[index % cardGradients.length]} 
                    backdrop-blur-lg rounded-3xl p-8 border border-white/30 
                    hover:border-white/50 transition-all duration-300
                    hover:shadow-xl hover:shadow-white/10
                  `}>
                    {/* Icon */}
                    <div className="flex justify-center mb-6">
                      <div className="w-18 h-18 rounded-2xl flex items-center justify-center bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-sm group-hover:scale-110 transition-all duration-300">
                        <Icon className="h-10 w-10 text-white" />
                      </div>
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-2xl font-bold mb-4 text-white">{value.title}</h3>
                    
                    {/* Description */}
                    <p className="text-blue-100 leading-relaxed">{value.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Enhanced Team Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 relative">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent">
              Meet Our Team
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our experienced, certified technicians are passionate about keeping your vehicle running safely and efficiently.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => {
              const avatarGradients = [
                'from-blue-500 to-cyan-500',
                'from-purple-500 to-pink-500',
                'from-emerald-500 to-teal-500'
              ];
              const cardGradients = [
                'from-blue-50 to-cyan-50',
                'from-purple-50 to-pink-50',
                'from-emerald-50 to-teal-50'
              ];
              
              return (
                <div key={index} className="group">
                  <div className={`
                    text-center bg-gradient-to-br ${cardGradients[index]} 
                    rounded-3xl p-8 shadow-lg hover:shadow-2xl 
                    transition-all duration-300 transform hover:-translate-y-3 hover:scale-105
                    border-2 border-transparent hover:border-gray-200/50
                  `}>
                    {/* Avatar */}
                    <div className={`
                      bg-gradient-to-br ${avatarGradients[index]} 
                      w-28 h-28 rounded-2xl mx-auto mb-6 flex items-center justify-center
                      shadow-xl group-hover:scale-110 transition-transform duration-300
                    `}>
                      <span className="text-3xl font-bold text-white">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    
                    {/* Member info */}
                    <h3 className="text-2xl font-bold mb-3 text-gray-900">{member.name}</h3>
                    <p className="text-blue-600 font-bold mb-3 text-lg">{member.role}</p>
                    <p className="text-gray-600 mb-4 font-medium bg-white/50 rounded-full py-2 px-4 inline-block">
                      {member.experience} Experience
                    </p>
                    <p className="text-gray-700 font-medium leading-relaxed">{member.specialties}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Enhanced Contact Info Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-blue-800 text-white py-24 overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='60' cy='60' r='3'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-300/20 rounded-full blur-3xl animate-pulse delay-500"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
                Visit Our Shop
              </span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-400 via-white to-purple-400 mx-auto mb-12 rounded-full"></div>
            
            <div className="max-w-3xl mx-auto mb-12">
              <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
                Located conveniently in the heart of town, our modern facility is equipped with the latest diagnostic tools and equipment.
              </p>
              
              {/* Contact Information Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="text-2xl font-bold text-white mb-2">📍</div>
                  <p className="text-blue-100 font-medium">{BUSINESS_INFO.address}</p>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="text-2xl font-bold text-white mb-2">📞</div>
                  <p className="text-blue-100 font-medium">{BUSINESS_INFO.phone}</p>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="text-2xl font-bold text-white mb-2">✉️</div>
                  <p className="text-blue-100 font-medium">{BUSINESS_INFO.email}</p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/contact">
                <Button size="lg" className="group text-lg px-12 py-5 bg-gradient-to-r from-white to-blue-50 text-blue-900 hover:from-blue-50 hover:to-white shadow-2xl hover:shadow-white/20 transition-all duration-300 transform hover:scale-105 font-bold">
                  <span className="mr-2">Get Directions</span>
                  <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg" className="text-lg px-12 py-5 bg-transparent border-2 border-white/50 text-white hover:bg-white/10 hover:border-white backdrop-blur-sm transition-all duration-300 transform hover:scale-105 font-semibold">
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