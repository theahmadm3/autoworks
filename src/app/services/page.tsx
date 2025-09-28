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
            <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-2xl transform rotate-12 hover:rotate-0 transition-transform duration-300">
              <Wrench className="h-12 w-12 text-white" />
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
                Expert Auto Repair
              </span>
              <span className="block bg-gradient-to-r from-blue-200 via-white to-blue-100 bg-clip-text text-transparent">
                Services
              </span>
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-400 via-white to-purple-400 mx-auto mb-8 rounded-full"></div>
            
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              From routine maintenance to complex repairs, our certified technicians provide comprehensive automotive services with 
              <span className="font-semibold text-white"> honest pricing</span> and 
              <span className="font-semibold text-white">quality parts</span>.
            </p>
          </div>
        </div>
      </section>

      {/* Enhanced Services Grid */}
      <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 relative">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-80 h-80 bg-purple-500 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const serviceGradients = [
                'from-blue-50 to-cyan-50',
                'from-purple-50 to-pink-50',
                'from-emerald-50 to-teal-50',
                'from-orange-50 to-red-50',
                'from-indigo-50 to-purple-50',
                'from-rose-50 to-pink-50'
              ];
              const borderGradients = [
                'from-blue-200 to-cyan-200',
                'from-purple-200 to-pink-200',
                'from-emerald-200 to-teal-200',
                'from-orange-200 to-red-200',
                'from-indigo-200 to-purple-200',
                'from-rose-200 to-pink-200'
              ];
              
              return (
                <div key={service.id} className="group h-full">
                  <div className={`
                    h-full bg-gradient-to-br ${serviceGradients[index % serviceGradients.length]} 
                    rounded-3xl border-2 border-transparent 
                    shadow-lg hover:shadow-2xl transition-all duration-300 
                    transform hover:-translate-y-3 hover:scale-105
                    relative overflow-hidden
                  `}>
                    {/* Gradient border effect */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${borderGradients[index % borderGradients.length]} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10`}></div>
                    
                    <div className="p-8 h-full flex flex-col">
                      {/* Service title with enhanced styling */}
                      <h3 className="text-2xl font-bold mb-6 text-gray-900 group-hover:text-blue-900 transition-colors duration-300">
                        {service.name}
                      </h3>
                      
                      {/* Description */}
                      <p className="text-gray-600 mb-8 flex-grow leading-relaxed text-lg">{service.description}</p>
                      
                      {/* Enhanced pricing section */}
                      <div className="space-y-6">
                        <div className="flex items-center justify-between p-5 bg-white/70 backdrop-blur-sm rounded-2xl border border-white/50 shadow-sm">
                          <div className="flex items-center">
                            <div className="w-4 h-4 bg-green-500 rounded-full mr-3 animate-pulse"></div>
                            <span className="font-bold text-green-700 text-xl">{service.price}</span>
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-5 w-5 text-gray-500 mr-3" />
                            <span className="text-gray-600 font-medium text-lg">{service.duration}</span>
                          </div>
                        </div>
                        
                        {/* CTA Button */}
                        <Link href="/contact">
                          <Button className="w-full text-lg py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 font-semibold">
                            Request Quote
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Enhanced Service Features */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M20 20c0-11.046-8.954-20-20-20v20h20z'/%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
                Why Choose Our Services?
              </span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-400 via-white to-purple-400 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              We stand behind every service with quality guarantees and professional expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Quality Guarantee */}
            <div className="group text-center">
              <div className="bg-gradient-to-br from-white/15 to-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 hover:bg-white/20 hover:border-white/30 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-green-500/20">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Quality Guarantee</h3>
                <p className="text-blue-100 leading-relaxed">
                  All services come with comprehensive warranties and satisfaction guarantees.
                </p>
              </div>
            </div>
            
            {/* Expert Technicians */}
            <div className="group text-center">
              <div className="bg-gradient-to-br from-white/15 to-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 hover:bg-white/20 hover:border-white/30 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Wrench className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Expert Technicians</h3>
                <p className="text-blue-100 leading-relaxed">
                  ASE-certified mechanics with years of experience in automotive repair.
                </p>
              </div>
            </div>
            
            {/* Fair Pricing */}
            <div className="group text-center">
              <div className="bg-gradient-to-br from-white/15 to-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 hover:bg-white/20 hover:border-white/30 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <DollarSign className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Fair Pricing</h3>
                <p className="text-blue-100 leading-relaxed">
                  Transparent, competitive pricing with no hidden fees or surprise charges.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-24 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-700 text-white relative overflow-hidden">
        {/* Floating elements */}
        <div className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-purple-300/20 rounded-full blur-3xl animate-pulse delay-700"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
              Ready to Service
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-200 via-white to-blue-200 bg-clip-text text-transparent">
              Your Vehicle?
            </span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-400 via-white to-purple-400 mx-auto mb-8 rounded-full"></div>
          
          <p className="text-xl md:text-2xl mb-12 text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Don't wait for problems to get worse. 
            <span className="font-semibold text-white">Book your service appointment today</span>.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/contact">
              <Button size="lg" className="group text-lg px-12 py-5 bg-gradient-to-r from-white to-blue-50 text-blue-900 hover:from-blue-50 hover:to-white shadow-2xl hover:shadow-white/20 transition-all duration-300 transform hover:scale-105 font-bold">
                <span className="mr-2">Request Service</span>
                <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg" className="text-lg px-12 py-5 bg-transparent border-2 border-white/50 text-white hover:bg-white/10 hover:border-white backdrop-blur-sm transition-all duration-300 transform hover:scale-105 font-semibold">
                Get Free Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}