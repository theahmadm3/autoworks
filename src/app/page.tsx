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
  Mail,
  Zap,
  Target,
  Gauge
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
      {/* Hero Section - Industrial Design with Original Copy */}
      <section className="relative overflow-hidden">
        {/* Industrial background */}
        <div className="absolute inset-0 rugged-gradient"></div>
        <div className="absolute inset-0 industrial-pattern"></div>
        
        {/* Animated background elements */}
        <div className="absolute top-20 left-10 opacity-10">
          <Settings className="h-32 w-32 text-orange-400 animate-gear" />
        </div>
        <div className="absolute bottom-20 right-10 opacity-10">
          <Wrench className="h-24 w-24 text-orange-400 animate-wrench" />
        </div>
        
        {/* Diagonal overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-gray-800/70 to-gray-900/90"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center text-white">
            <h1 className="display-font text-4xl md:text-6xl lg:text-7xl font-normal mb-6 leading-tight tracking-wide">
              ON-DEMAND AUTO REPAIR
              <span className="block text-orange-400 text-3xl md:text-5xl lg:text-6xl mt-2">
                WITH PICK-UP & DELIVERY
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Professional mechanics come to you. Transparent pricing, quality guaranteed, 
              and your car returned safely to your door.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/contact">
                <button className="btn-industrial text-lg px-8 py-4">
                  Get Free Quote
                </button>
              </Link>
              <Link href="/contact">
                <button className="border-2 border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-white px-8 py-4 text-lg font-bold condensed-font tracking-wider transition-all duration-300 relative overflow-hidden group">
                  Emergency Service
                  <div className="absolute inset-0 bg-orange-500 transform -skew-x-12 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 -z-10"></div>
                </button>
              </Link>
            </div>
            
            {/* Industrial feature cards with original copy */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <div className="tool-shadow bg-gray-800/50 backdrop-blur-sm border border-orange-500/30 p-4 relative group hover:border-orange-500/60 transition-colors">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-red-500"></div>
                <div className="flex items-center justify-center mb-2">
                  <div className="bg-orange-500/20 p-2 rounded mr-2 group-hover:bg-orange-500/30 transition-colors">
                    <Smartphone className="h-6 w-6 text-orange-400" />
                  </div>
                  <span className="condensed-font font-bold text-lg tracking-wider text-white">Book Online</span>
                </div>
                <p className="text-gray-300">Website, Instagram, or email</p>
              </div>
              
              <div className="tool-shadow bg-gray-800/50 backdrop-blur-sm border border-orange-500/30 p-4 relative group hover:border-orange-500/60 transition-colors">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-red-500"></div>
                <div className="flex items-center justify-center mb-2">
                  <div className="bg-orange-500/20 p-2 rounded mr-2 group-hover:bg-orange-500/30 transition-colors">
                    <Truck className="h-6 w-6 text-orange-400" />
                  </div>
                  <span className="condensed-font font-bold text-lg tracking-wider text-white">We Come to You</span>
                </div>
                <p className="text-gray-300">Pick-up, repair, deliver</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom border with industrial rivets effect */}
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-orange-500 via-red-500 to-orange-500"></div>
        <div className="absolute bottom-0 left-0 right-0 flex justify-center space-x-8 transform translate-y-1">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="w-3 h-3 bg-gray-700 rounded-full border-2 border-orange-500/50"></div>
          ))}
        </div>
      </section>

      {/* How It Works - Industrial Process Design with Original Copy */}
      <section className="py-24 bg-gray-100 relative">
        {/* Industrial grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000' fill-opacity='0.1'%3E%3Cpath d='M0 0h40v40H0z'/%3E%3Cpath d='M0 0h1v1H0zM39 0h1v1h-1zM0 39h1v1H0zM39 39h1v1h-1z'/%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-20">
            <div className="inline-flex items-center bg-orange-500/10 border border-orange-500/30 rounded-full px-6 py-2 mb-6">
              <Settings className="h-5 w-5 mr-2 text-orange-500 animate-gear" />
              <span className="condensed-font font-bold text-orange-600 tracking-wider text-sm">
                HOW IT WORKS
              </span>
            </div>
            <h2 className="display-font text-4xl md:text-5xl text-gray-800 mb-6 tracking-wide">
              HOW IT WORKS
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-medium">
              Getting your car serviced has never been easier. Here's our simple 4-step process.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorksSteps.map((step, index) => {
              const Icon = getIconComponent(step.icon);
              return (
                <div key={step.id} className="relative group">
                  {/* Connection line to next step */}
                  {index < howItWorksSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-20 left-full w-8 h-0.5 bg-gradient-to-r from-orange-500 to-orange-300 transform translate-x-4 z-10"></div>
                  )}
                  
                  <div className="tool-shadow bg-white border border-gray-200 p-8 relative overflow-hidden hover:border-orange-500/50 transition-all duration-300 group-hover:shadow-xl">
                    {/* Industrial corner accent */}
                    <div className="absolute top-0 left-0 w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500"></div>
                    <div className="absolute top-0 left-0 w-12 h-12 bg-white transform rotate-45 translate-x-2 translate-y-2"></div>
                    
                    {/* Icon with industrial housing */}
                    <div className="relative mb-8">
                      <div className="bg-gray-800 w-20 h-20 rounded-none flex items-center justify-center mx-auto mb-4 tool-shadow relative overflow-hidden group-hover:bg-orange-500 transition-colors duration-300">
                        <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/20"></div>
                        <Icon className="h-10 w-10 text-orange-400 relative z-10 group-hover:text-white transition-colors duration-300" />
                      </div>
                      
                      {/* Step number with industrial design */}
                      <div className="bg-orange-500 text-white w-10 h-10 flex items-center justify-center mx-auto font-bold text-lg condensed-font border-4 border-white tool-shadow">
                        {step.order}
                      </div>
                    </div>
                    
                    <h3 className="display-font text-xl text-gray-800 mb-4 tracking-wide text-center">
                      {step.title.toUpperCase()}
                    </h3>
                    <p className="text-gray-600 text-center leading-relaxed">
                      {step.description}
                    </p>
                    
                    {/* Bottom accent line */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Value Propositions - Industrial Strength Features with Original Copy */}
      <section className="py-24 bg-white relative">
        {/* Subtle background texture */}
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-20">
            <div className="inline-flex items-center bg-orange-500/10 border border-orange-500/30 rounded-full px-6 py-2 mb-6">
              <Award className="h-5 w-5 mr-2 text-orange-500" />
              <span className="condensed-font font-bold text-orange-600 tracking-wider text-sm">
                OUR ADVANTAGES
              </span>
            </div>
            <h2 className="display-font text-4xl md:text-5xl text-gray-800 mb-6 tracking-wide">
              WHY CHOOSE AUTOWORKS?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We're revolutionizing auto repair with convenience, transparency, and professional expertise.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {VALUE_PROPOSITIONS.map((prop, index) => {
              const Icon = getIconComponent(prop.icon);
              const isHighlighted = prop.title === 'On-Demand Service' || prop.title === 'Pick-Up & Delivery';
              
              return (
                <div key={prop.title} className={`group relative overflow-hidden ${
                  isHighlighted ? 'lg:col-span-1 lg:row-span-1' : ''
                }`}>
                  <div className={`tool-shadow bg-white border-2 p-8 h-full relative transition-all duration-300 hover:shadow-2xl ${
                    isHighlighted 
                      ? 'border-orange-500 bg-gradient-to-br from-orange-50 to-white' 
                      : 'border-gray-200 group-hover:border-orange-500/50'
                  }`}>
                    
                    {/* Industrial corner reinforcement */}
                    <div className={`absolute top-0 right-0 w-16 h-16 transform rotate-45 translate-x-8 -translate-y-8 ${
                      isHighlighted ? 'bg-orange-500' : 'bg-gray-800 group-hover:bg-orange-500'
                    } transition-colors duration-300`}></div>
                    
                    {/* Feature badge for highlighted items */}
                    {isHighlighted && (
                      <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 text-xs font-bold condensed-font tracking-wider">
                        FEATURED
                      </div>
                    )}
                    
                    <div className="relative z-10 text-center">
                      {/* Icon housing */}
                      <div className={`w-16 h-16 mx-auto mb-6 flex items-center justify-center relative ${
                        isHighlighted 
                          ? 'bg-orange-500' 
                          : 'bg-gray-800 group-hover:bg-orange-500'
                      } transition-colors duration-300 tool-shadow rounded-full`}>
                        <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/20 rounded-full"></div>
                        <Icon className={`h-8 w-8 relative z-10 ${
                          isHighlighted 
                            ? 'text-white' 
                            : 'text-orange-400 group-hover:text-white'
                        } transition-colors duration-300`} />
                      </div>
                      
                      <h3 className={`text-xl font-semibold mb-3 ${
                        isHighlighted ? 'text-orange-600' : 'text-gray-800'
                      }`}>
                        {prop.title}
                        {isHighlighted && (
                          <span className="ml-2 text-orange-600">★</span>
                        )}
                      </h3>
                      
                      <p className="text-gray-600 leading-relaxed">
                        {prop.description}
                      </p>
                    </div>
                    
                    {/* Bottom reinforcement bar */}
                    <div className={`absolute bottom-0 left-0 right-0 h-2 ${
                      isHighlighted 
                        ? 'bg-gradient-to-r from-orange-500 to-red-500' 
                        : 'bg-gray-800 group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-red-500'
                    } transition-all duration-300`}></div>
                    
                    {/* Industrial rivets */}
                    <div className="absolute bottom-1 left-4 right-4 flex justify-between">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className={`w-2 h-2 rounded-full ${
                          isHighlighted 
                            ? 'bg-orange-300' 
                            : 'bg-gray-400 group-hover:bg-orange-300'
                        } transition-colors duration-300`}></div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Industrial spec number */}
                  <div className={`absolute -top-3 -left-3 w-8 h-8 flex items-center justify-center font-bold text-white text-sm condensed-font ${
                    isHighlighted ? 'bg-orange-500' : 'bg-gray-800'
                  } transform rotate-45`}>
                    <span className="transform -rotate-45">{index + 1}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Preview - Industrial Workshop with Original Copy */}
      <section className="py-20 bg-gray-50 relative">
        {/* Industrial rivets border */}
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-orange-500 to-red-500"></div>
        <div className="absolute top-0 left-0 right-0 flex justify-center space-x-12 transform translate-y-0">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="w-4 h-4 bg-gray-700 rounded-full border-2 border-orange-500/50"></div>
          ))}
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative pt-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-orange-500/10 border border-orange-500/30 rounded-full px-6 py-2 mb-6">
              <Wrench className="h-5 w-5 mr-2 text-orange-500 animate-wrench" />
              <span className="condensed-font font-bold text-orange-600 tracking-wider text-sm">
                OUR SERVICES
              </span>
            </div>
            <h2 className="display-font text-4xl md:text-5xl text-gray-800 mb-6 tracking-wide">
              OUR EXPERT SERVICES
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From routine maintenance to complex repairs, our certified mechanics handle it all with professional expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(0, 6).map((service, index) => (
              <div key={service.id} className="group relative">
                <div className="tool-shadow bg-white border-2 border-gray-200 hover:border-orange-500/50 transition-all duration-300 relative overflow-hidden group-hover:shadow-2xl h-full flex flex-col">
                  {/* Industrial corner reinforcement */}
                  <div className="absolute top-0 right-0 w-12 h-12 bg-gray-800 group-hover:bg-orange-500 transition-colors duration-300"></div>
                  <div className="absolute top-0 right-0 w-8 h-8 bg-white transform rotate-45 translate-x-2 translate-y-2"></div>
                  
                  {/* Service number badge */}
                  <div className="absolute top-4 left-4 bg-orange-500 text-white w-8 h-8 flex items-center justify-center font-bold text-sm condensed-font">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  
                  <div className="p-6 pt-16 flex-grow flex flex-col">
                    <h3 className="text-xl font-semibold mb-3">
                      {service.name}
                    </h3>
                    <p className="text-gray-600 mb-6 flex-grow">
                      {service.description}
                    </p>
                    
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-orange-600 font-semibold">{service.price}</span>
                        <span className="text-sm text-gray-500">{service.duration}</span>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-2">
                        <Link href="/contact">
                          <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 font-bold condensed-font tracking-wider transition-colors duration-300 text-sm">
                            Get Quote
                          </button>
                        </Link>
                        <Link href="/contact">
                          <button className="w-full border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white py-2 px-4 font-bold condensed-font tracking-wider transition-all duration-300 text-sm">
                            Book Now
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                  
                  {/* Bottom reinforcement bar */}
                  <div className="absolute bottom-0 left-0 right-0 h-2 bg-gray-800 group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-red-500 transition-all duration-300"></div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/services">
              <button className="btn-industrial text-lg px-8 py-4">
                View All Services
              </button>
            </Link>
          </div>
        </div>
        
        {/* Bottom industrial border */}
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-orange-500 to-red-500"></div>
      </section>

      {/* Testimonials - Customer Reviews with Industrial Styling */}
      <section className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-orange-500/10 border border-orange-500/30 rounded-full px-6 py-2 mb-6">
              <Shield className="h-5 w-5 mr-2 text-orange-500" />
              <span className="condensed-font font-bold text-orange-600 tracking-wider text-sm">
                CUSTOMER REVIEWS
              </span>
            </div>
            <h2 className="display-font text-4xl md:text-5xl text-gray-800 mb-6 tracking-wide">
              WHAT OUR CUSTOMERS SAY
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what real customers think about our service.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={testimonial.id} className="group relative">
                <div className="tool-shadow bg-white border-2 border-gray-200 hover:border-orange-500/50 transition-all duration-300 p-6 relative overflow-hidden group-hover:shadow-xl">
                  {/* Industrial corner accent */}
                  <div className="absolute top-0 left-0 w-12 h-12 bg-orange-500"></div>
                  <div className="absolute top-0 left-0 w-8 h-8 bg-white transform rotate-45 translate-x-2 translate-y-2"></div>
                  
                  <div className="relative z-10">
                    {/* Rating */}
                    <div className="flex items-center mb-4">
                      {[...Array(Math.max(0, Math.min(5, Math.round(testimonial.rating || 0))))].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-orange-500 fill-current" />
                      ))}
                    </div>
                    
                    {/* Quote */}
                    <p className="text-gray-600 mb-6 italic leading-relaxed">
                      &quot;{testimonial.comment}&quot;
                    </p>
                    
                    {/* Customer info */}
                    <div className="border-t pt-4">
                      <p className="font-semibold text-gray-800">{testimonial.name}</p>
                      {testimonial.vehicle && (
                        <p className="text-sm text-gray-500">{testimonial.vehicle}</p>
                      )}
                      {testimonial.service && (
                        <p className="text-sm text-orange-600 font-medium">{testimonial.service}</p>
                      )}
                    </div>
                  </div>
                  
                  {/* Bottom accent */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                </div>
                
                {/* Customer ID */}
                <div className="absolute -bottom-2 -right-2 bg-gray-800 text-orange-400 px-2 py-1 text-xs font-bold condensed-font tracking-wider transform rotate-3 group-hover:rotate-0 transition-transform duration-300">
                  #{String(index + 1).padStart(3, '0')}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection faqs={faqs} />

      {/* CTA Section - Industrial Style with Original Copy */}
      <section className="relative overflow-hidden">
        {/* Industrial background */}
        <div className="absolute inset-0 rugged-gradient"></div>
        <div className="absolute inset-0 industrial-pattern"></div>
        
        {/* Animated background elements */}
        <div className="absolute top-10 right-10 opacity-10">
          <Settings className="h-32 w-32 text-orange-400 animate-gear" />
        </div>
        <div className="absolute bottom-10 left-10 opacity-10">
          <Wrench className="h-24 w-24 text-orange-400 animate-wrench" />
        </div>
        
        {/* Diagonal overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-gray-800/80 to-gray-900/90"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center text-white">
          <h2 className="display-font text-4xl md:text-5xl mb-4 tracking-wide">
            READY FOR HASSLE-FREE AUTO REPAIR?
          </h2>
          <p className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
            Experience the convenience of on-demand service with pick-up and delivery. 
            Professional repairs, transparent pricing, guaranteed quality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link href="/contact">
              <button className="btn-industrial text-lg px-8 py-4">
                Get Free Quote
              </button>
            </Link>
            <Link href="/contact">
              <button className="border-2 border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-white px-8 py-4 text-lg font-bold condensed-font tracking-wider transition-all duration-300 relative overflow-hidden group">
                Emergency Service
                <div className="absolute inset-0 bg-orange-500 transform -skew-x-12 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 -z-10"></div>
              </button>
            </Link>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-gray-300">
            <div className="flex items-center">
              <Phone className="h-5 w-5 mr-2 text-orange-400" />
              <span>{BUSINESS_INFO.phone}</span>
            </div>
            <div className="flex items-center">
              <Mail className="h-5 w-5 mr-2 text-orange-400" />
              <span>{BUSINESS_INFO.email}</span>
            </div>
          </div>
        </div>
        
        {/* Bottom industrial border */}
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-orange-500 to-red-500"></div>
        <div className="absolute bottom-0 left-0 right-0 flex justify-center space-x-12 transform translate-y-1">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="w-4 h-4 bg-gray-700 border-4 border-orange-500/50 transform rotate-45"></div>
          ))}
        </div>
      </section>
    </>
  );
}
