import Link from 'next/link';
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
  Phone,
  Mail
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { VALUE_PROPOSITIONS, BUSINESS_INFO } from '@/lib/constants';
import { 
  getFeaturedServices, 
  getFeaturedTestimonials, 
  getFAQs, 
  getHowItWorksSteps 
} from '@/lib/strapi';
import { FAQSection } from '@/components/FAQSection';

export default async function Home() {
  // Server-side data fetching - this is the conventional pattern for Next.js App Router
  const [services, testimonials, faqs, howItWorksSteps] = await Promise.all([
    getFeaturedServices(6),
    getFeaturedTestimonials(10),
    getFAQs(),
    getHowItWorksSteps()
  ]);

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
      {/* Enhanced Hero Section with Modern Design */}
      <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-blue-800 text-white overflow-hidden min-h-screen flex items-center">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='60' cy='60' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-blue-300/20 rounded-full blur-2xl animate-pulse delay-300"></div>
        <div className="absolute bottom-20 left-1/3 w-16 h-16 bg-purple-300/20 rounded-full blur-lg animate-pulse delay-700"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Enhanced Typography with Animations */}
            <div className="mb-8">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-4 leading-tight tracking-tight">
                <span className="bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent">
                  On-Demand
                </span>
                <span className="block bg-gradient-to-r from-blue-200 via-white to-blue-100 bg-clip-text text-transparent">
                  Auto Repair
                </span>
              </h1>
              <div className="relative">
                <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-blue-200 mb-2">
                  With Pick-Up & Delivery
                </h2>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-blue-300 to-transparent rounded-full"></div>
              </div>
            </div>
            
            <p className="text-xl md:text-2xl mb-12 text-blue-100 max-w-4xl mx-auto leading-relaxed font-light">
              Professional mechanics come to you. 
              <span className="font-semibold text-white">Transparent pricing</span>, 
              <span className="font-semibold text-white">quality guaranteed</span>, 
              and your car returned safely to your door.
            </p>
            
            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Link href="/contact">
                <Button size="lg" className="group text-lg px-10 py-5 bg-gradient-to-r from-white to-blue-50 text-blue-900 hover:from-blue-50 hover:to-white shadow-2xl hover:shadow-white/20 transition-all duration-300 transform hover:scale-105 font-bold border-0">
                  <span className="mr-2">Get Free Quote</span>
                  <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg" className="text-lg px-10 py-5 bg-transparent border-2 border-white/50 text-white hover:bg-white/10 hover:border-white backdrop-blur-sm transition-all duration-300 transform hover:scale-105 font-semibold">
                  Emergency Service
                </Button>
              </Link>
            </div>
            
            {/* Enhanced Key Differentiators */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              <div className="group bg-white/15 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 hover:border-white/30 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                    <Smartphone className="h-6 w-6 text-white" />
                  </div>
                  <span className="text-xl font-bold text-white">Book Online</span>
                </div>
                <p className="text-blue-100 text-center">Website, Instagram, or email</p>
              </div>
              <div className="group bg-white/15 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 hover:border-white/30 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                    <Truck className="h-6 w-6 text-white" />
                  </div>
                  <span className="text-xl font-bold text-white">We Come to You</span>
                </div>
                <p className="text-blue-100 text-center">Pick-up, repair, deliver</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced How It Works Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <div className="absolute top-20 left-10 w-40 h-40 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-60 h-60 bg-purple-500 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 bg-clip-text text-transparent">How It Works</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Getting your car serviced has never been easier. Here's our simple 4-step process.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorksSteps.map((step, index) => {
              const Icon = getIconComponent(step.icon);
              const gradients = [
                'from-blue-500 to-cyan-500',
                'from-purple-500 to-pink-500', 
                'from-emerald-500 to-teal-500',
                'from-orange-500 to-red-500'
              ];
              return (
                <div key={step.id} className="group text-center">
                  <div className="relative mb-8">
                    {/* Step connector line */}
                    {index < 3 && (
                      <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-gray-300 to-gray-200 z-0"></div>
                    )}
                    
                    {/* Icon circle */}
                    <div className={`relative bg-gradient-to-br ${gradients[index]} w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl`}>
                      <Icon className="h-10 w-10 text-white" />
                    </div>
                    
                    {/* Step number */}
                    <div className={`bg-gradient-to-br ${gradients[index]} text-white w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-6 text-lg font-bold shadow-lg group-hover:scale-105 transition-transform duration-300`}>
                      {step.order}
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 group-hover:border-gray-200">
                    <h3 className="text-xl font-bold mb-4 text-gray-900">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Enhanced Value Propositions Section */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M20 20c0-11.046-8.954-20-20-20v20h20z'/%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
                Why Choose AutoWorks?
              </span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-400 via-white to-purple-400 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              We're revolutionizing auto repair with convenience, transparency, and professional expertise.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {VALUE_PROPOSITIONS.map((prop, index) => {
              const Icon = getIconComponent(prop.icon);
              const isHighlighted = prop.title === 'On-Demand Service' || prop.title === 'Pick-Up & Delivery';
              const cardGradients = [
                'from-blue-500/20 to-cyan-500/20',
                'from-purple-500/20 to-pink-500/20',
                'from-emerald-500/20 to-teal-500/20',
                'from-orange-500/20 to-red-500/20',
                'from-indigo-500/20 to-purple-500/20',
                'from-rose-500/20 to-pink-500/20',
                'from-amber-500/20 to-yellow-500/20'
              ];
              
              return (
                <div key={prop.title} className={`group relative text-center transform transition-all duration-300 hover:scale-105 ${isHighlighted ? 'lg:scale-110 z-10' : ''}`}>
                  {/* Glassmorphism card */}
                  <div className={`
                    relative bg-gradient-to-br ${cardGradients[index % cardGradients.length]} 
                    backdrop-blur-lg rounded-3xl p-8 border border-white/30 
                    hover:border-white/50 transition-all duration-300
                    ${isHighlighted ? 'ring-2 ring-white/50 shadow-2xl shadow-blue-500/20' : 'hover:shadow-xl hover:shadow-white/10'}
                  `}>
                    {/* Highlight badge for featured services */}
                    {isHighlighted && (
                      <div className="absolute -top-3 -right-3 bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 px-3 py-1 rounded-full text-sm font-bold flex items-center shadow-lg">
                        <Star className="h-3 w-3 mr-1" />
                        FEATURED
                      </div>
                    )}
                    
                    {/* Icon */}
                    <div className="flex justify-center mb-6">
                      <div className={`
                        w-18 h-18 rounded-2xl flex items-center justify-center 
                        bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-sm
                        group-hover:scale-110 transition-all duration-300
                        ${isHighlighted ? 'shadow-lg shadow-white/20' : ''}
                      `}>
                        <Icon className="h-10 w-10 text-white" />
                      </div>
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-2xl font-bold mb-4 text-white">
                      {prop.title}
                      {isHighlighted && <span className="ml-2 text-yellow-300">★</span>}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-blue-100 leading-relaxed">{prop.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Enhanced Services Preview Section */}
      <section className="py-24 bg-gradient-to-br from-white via-gray-50 to-blue-50/30 relative">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 right-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent">
              Our Expert Services
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From routine maintenance to complex repairs, our certified mechanics handle it all with professional expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(0, 6).map((service, index) => {
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
                    h-full flex flex-col bg-gradient-to-br ${serviceGradients[index]} 
                    rounded-3xl border-2 border-transparent bg-gradient-to-br 
                    shadow-lg hover:shadow-2xl transition-all duration-300 
                    transform hover:-translate-y-2 hover:scale-105
                    relative overflow-hidden
                  `}>
                    {/* Gradient border effect */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${borderGradients[index]} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10`}></div>
                    
                    <div className="p-8 h-full flex flex-col">
                      {/* Service title */}
                      <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-blue-900 transition-colors duration-300">
                        {service.name}
                      </h3>
                      
                      {/* Description */}
                      <p className="text-gray-600 mb-6 flex-grow leading-relaxed">{service.description}</p>
                      
                      {/* Pricing and duration */}
                      <div className="flex justify-between items-center mb-6 p-4 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/40">
                        <div className="flex items-center">
                          <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                          <span className="text-green-700 font-bold text-lg">{service.price}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 text-gray-500 mr-2" />
                          <span className="text-gray-600 font-medium">{service.duration}</span>
                        </div>
                      </div>
                      
                      {/* Action buttons */}
                      <div className="grid grid-cols-2 gap-3">
                        <Link href="/contact">
                          <Button className="w-full text-sm font-semibold bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg hover:shadow-xl transition-all duration-300">
                            Get Quote
                          </Button>
                        </Link>
                        <Link href="/contact">
                          <Button variant="outline" className="w-full text-sm font-semibold border-2 hover:bg-gray-50 transition-all duration-300">
                            Book Now
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-16">
            <Link href="/services">
              <Button size="lg" className="text-lg px-12 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                View All Services
              </Button>
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
                    {[...Array(Math.max(0, Math.min(5, Math.round(testimonial.rating || 0))))].map((_, i) => (
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
