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
      {/* Hero Section - Elevated Design */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Enhanced Background with multiple layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-slate-900"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
          <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{animationDelay: '4s'}}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 text-center">
          <div className="animate-fade-in-up">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full text-blue-300 text-sm font-medium backdrop-blur-sm border border-blue-500/30">
                Premium Automotive Service
              </span>
            </div>
            
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-8 text-white leading-tight tracking-tight">
              On-Demand
              <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-300 bg-clip-text text-transparent">
                Auto Repair
              </span>
              <span className="block text-4xl md:text-5xl lg:text-6xl mt-4 text-gray-300 font-medium">
                With Pick-Up & Delivery
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-12 text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
              Experience the future of automotive service. Professional mechanics come to you with 
              <span className="text-blue-300 font-medium"> transparent pricing</span>, 
              <span className="text-blue-300 font-medium"> quality guaranteed</span>, and your car returned safely to your door.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Link href="/contact">
                <Button size="xl" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-2xl transform hover:scale-105">
                  <span className="mr-2">✨</span>
                  Get Free Quote
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="xl" className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white backdrop-blur-sm">
                  🚨 Emergency Service
                </Button>
              </Link>
            </div>
            
            {/* Enhanced Key differentiators */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              <div className="group bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center justify-center mb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">
                    <Smartphone className="h-6 w-6 text-white" />
                  </div>
                  <span className="font-semibold text-xl text-white">Book Online</span>
                </div>
                <p className="text-blue-200 font-medium">Website, Instagram, or email</p>
              </div>
              
              <div className="group bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center justify-center mb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">
                    <Truck className="h-6 w-6 text-white" />
                  </div>
                  <span className="font-semibold text-xl text-white">We Come to You</span>
                </div>
                <p className="text-blue-200 font-medium">Pick-up, repair, deliver</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* How It Works - Enhanced Design */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-100 to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
              Simple Process
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Getting your car serviced has never been easier. Here&apos;s our simple 4-step process 
              that puts convenience first.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorksSteps.map((step, index) => {
              const Icon = getIconComponent(step.icon);
              const colors = [
                'from-blue-500 to-blue-600',
                'from-purple-500 to-purple-600', 
                'from-orange-500 to-orange-600',
                'from-green-500 to-green-600'
              ];
              
              return (
                <div key={step.id} className="relative group">
                  {/* Connecting line */}
                  {index < howItWorksSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-gray-300 to-transparent z-0 transform translate-x-4"></div>
                  )}
                  
                  <div className="relative z-10 text-center group-hover:transform group-hover:-translate-y-2 transition-all duration-300">
                    {/* Icon container */}
                    <div className={`bg-gradient-to-br ${colors[index]} w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:shadow-2xl group-hover:scale-110 transition-all duration-300`}>
                      <Icon className="h-10 w-10 text-white" />
                    </div>
                    
                    {/* Step number */}
                    <div className={`bg-gradient-to-br ${colors[index]} text-white w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-6 text-lg font-bold shadow-lg`}>
                      {step.order}
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-xl font-semibold mb-4 text-gray-900">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Call to action */}
          <div className="text-center mt-16">
            <Link href="/contact">
              <Button size="lg" variant="gradient" className="shadow-xl">
                Start Your Service Journey
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Value Propositions - Enhanced Design */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 rounded-full text-sm font-medium mb-4">
              Why Choose Us
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Why Choose AutoWorks?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We&apos;re revolutionizing auto repair with convenience, transparency, and professional expertise. 
              Here&apos;s what sets us apart from traditional repair shops.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {VALUE_PROPOSITIONS.map((prop, index) => {
              const Icon = getIconComponent(prop.icon);
              const isHighlighted = prop.title === 'On-Demand Service' || prop.title === 'Pick-Up & Delivery';
              
              const gradients = [
                'from-blue-500 to-cyan-500',
                'from-purple-500 to-pink-500',
                'from-orange-500 to-red-500',
                'from-green-500 to-emerald-500',
                'from-indigo-500 to-purple-500',
                'from-teal-500 to-blue-500',
                'from-amber-500 to-orange-500'
              ];
              
              return (
                <Card 
                  key={prop.title} 
                  variant={isHighlighted ? "elevated" : "default"}
                  className={`text-center group cursor-pointer ${isHighlighted ? 'ring-2 ring-blue-200 bg-gradient-to-br from-blue-50 to-white' : ''}`}
                >
                  <CardContent className="p-8">
                    <div className="flex justify-center mb-6">
                      <div 
                        className={`w-18 h-18 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 ${
                          isHighlighted 
                            ? 'bg-gradient-to-br from-blue-600 to-blue-700' 
                            : `bg-gradient-to-br ${gradients[index % gradients.length]}`
                        }`}
                      >
                        <Icon className="h-10 w-10 text-white" />
                      </div>
                    </div>
                    
                    <h3 className={`text-xl font-semibold mb-4 group-hover:text-blue-600 transition-colors ${isHighlighted ? 'text-blue-900' : 'text-gray-900'}`}>
                      {prop.title}
                      {isHighlighted && <span className="ml-2 text-amber-500 text-2xl">★</span>}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed">{prop.description}</p>
                    
                    {/* Subtle decoration for highlighted cards */}
                    {isHighlighted && (
                      <div className="mt-4 inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                        Our Specialty
                      </div>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>
          
          {/* Featured highlight section */}
          <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-8 md:p-12 text-white text-center">
            <h3 className="font-display text-2xl md:text-3xl font-bold mb-4">
              The Future of Auto Repair is Here
            </h3>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
              No more waiting at repair shops. No more scheduling conflicts. Just professional service 
              that adapts to your busy lifestyle.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                  Experience the Difference
                </Button>
              </Link>
              <Link href="/about">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600">
                  Learn Our Story
                </Button>
              </Link>
            </div>
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
