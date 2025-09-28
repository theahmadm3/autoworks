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
      {/* Hero Section - Rugged Industrial Design */}
      <section className="relative overflow-hidden">
        {/* Background with industrial pattern */}
        <div className="absolute inset-0 rugged-gradient"></div>
        <div className="absolute inset-0 industrial-pattern"></div>
        
        {/* Animated background elements */}
        <div className="absolute top-20 left-10 opacity-10">
          <Settings className="h-32 w-32 text-orange-400 animate-gear" />
        </div>
        <div className="absolute bottom-20 right-10 opacity-10">
          <Wrench className="h-24 w-24 text-orange-400 animate-wrench" />
        </div>
        <div className="absolute top-1/2 left-1/4 opacity-5">
          <Gauge className="h-40 w-40 text-white animate-pulse" />
        </div>
        
        {/* Diagonal overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-gray-800/70 to-gray-900/90"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center text-white">
            {/* Trust badge */}
            <div className="inline-flex items-center bg-orange-500/20 border border-orange-500/50 rounded-full px-6 py-2 mb-8">
              <Shield className="h-5 w-5 mr-2 text-orange-400" />
              <span className="condensed-font font-bold text-orange-400 tracking-wider text-sm">
                CERTIFIED AUTOMOTIVE PROFESSIONALS
              </span>
            </div>
            
            <h1 className="display-font text-5xl md:text-7xl lg:text-8xl font-normal mb-6 leading-tight tracking-wide">
              RUGGED AUTO REPAIR
              <span className="block text-orange-400 text-4xl md:text-6xl lg:text-7xl mt-4 relative">
                DELIVERED TO YOU
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent"></div>
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-12 text-gray-300 max-w-4xl mx-auto leading-relaxed font-medium">
              <strong className="text-white">Professional mechanics.</strong> <strong className="text-orange-400">Industrial-grade tools.</strong> <strong className="text-white">Military precision.</strong>
              <br />
              We don't just fix cars—we engineer solutions that last.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Link href="/contact">
                <button className="btn-industrial text-lg px-10 py-5 rounded-none relative group">
                  <Zap className="inline h-5 w-5 mr-2 group-hover:animate-pulse" />
                  GET INSTANT QUOTE
                </button>
              </Link>
              <Link href="/contact">
                <button className="border-2 border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-white px-10 py-5 text-lg font-bold condensed-font tracking-wider transition-all duration-300 relative overflow-hidden group">
                  <Target className="inline h-5 w-5 mr-2" />
                  EMERGENCY REPAIR
                  <div className="absolute inset-0 bg-orange-500 transform -skew-x-12 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 -z-10"></div>
                </button>
              </Link>
            </div>
            
            {/* Industrial feature cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="tool-shadow bg-gray-800/50 backdrop-blur-sm border border-orange-500/30 p-6 relative group hover:border-orange-500/60 transition-colors">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-red-500"></div>
                <div className="flex items-center justify-center mb-4">
                  <div className="bg-orange-500/20 p-3 rounded-full group-hover:bg-orange-500/30 transition-colors">
                    <Smartphone className="h-8 w-8 text-orange-400" />
                  </div>
                  <span className="ml-4 condensed-font font-bold text-xl tracking-wider text-white">DIGITAL BOOKING</span>
                </div>
                <p className="text-gray-300 font-medium">Advanced scheduling system • Instant confirmation • Real-time updates</p>
              </div>
              
              <div className="tool-shadow bg-gray-800/50 backdrop-blur-sm border border-orange-500/30 p-6 relative group hover:border-orange-500/60 transition-colors">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-red-500"></div>
                <div className="flex items-center justify-center mb-4">
                  <div className="bg-orange-500/20 p-3 rounded-full group-hover:bg-orange-500/30 transition-colors">
                    <Truck className="h-8 w-8 text-orange-400" />
                  </div>
                  <span className="ml-4 condensed-font font-bold text-xl tracking-wider text-white">MOBILE GARAGE</span>
                </div>
                <p className="text-gray-300 font-medium">Full-service pickup • Professional repair facility • Secure delivery</p>
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

      {/* How It Works - Industrial Process Design */}
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
                OUR PROVEN PROCESS
              </span>
            </div>
            <h2 className="display-font text-5xl md:text-6xl text-gray-800 mb-6 tracking-wide">
              HOW WE WORK
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-medium">
              A systematic approach refined through thousands of repairs. 
              <strong className="text-orange-600"> Precision. Efficiency. Results.</strong>
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
                    
                    <h3 className="display-font text-2xl text-gray-800 mb-4 tracking-wide text-center">
                      {step.title.toUpperCase()}
                    </h3>
                    <p className="text-gray-600 text-center leading-relaxed font-medium">
                      {step.description}
                    </p>
                    
                    {/* Bottom accent line */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Process guarantee */}
          <div className="mt-20 text-center">
            <div className="tool-shadow bg-gray-800 p-8 max-w-4xl mx-auto relative overflow-hidden">
              <div className="absolute inset-0 industrial-pattern"></div>
              <div className="relative">
                <div className="flex items-center justify-center mb-4">
                  <Shield className="h-8 w-8 text-orange-400 mr-4" />
                  <span className="display-font text-3xl text-white tracking-wider">100% PROCESS GUARANTEE</span>
                </div>
                <p className="text-gray-300 text-lg font-medium">
                  Every step documented • Every part verified • Every repair backed by our warranty
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Propositions - Industrial Strength Features */}
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
                ENGINEERED ADVANTAGES
              </span>
            </div>
            <h2 className="display-font text-5xl md:text-6xl text-gray-800 mb-6 tracking-wide">
              BUILT DIFFERENT
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-medium">
              We've re-engineered automotive service from the ground up. 
              <strong className="text-orange-600"> Industrial precision meets customer convenience.</strong>
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
                    
                    <div className="relative z-10">
                      {/* Icon housing */}
                      <div className={`w-20 h-20 mx-auto mb-6 flex items-center justify-center relative ${
                        isHighlighted 
                          ? 'bg-orange-500' 
                          : 'bg-gray-800 group-hover:bg-orange-500'
                      } transition-colors duration-300 tool-shadow`}>
                        <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/20"></div>
                        <Icon className={`h-10 w-10 relative z-10 ${
                          isHighlighted 
                            ? 'text-white' 
                            : 'text-orange-400 group-hover:text-white'
                        } transition-colors duration-300`} />
                      </div>
                      
                      <h3 className={`display-font text-2xl mb-4 tracking-wide text-center ${
                        isHighlighted ? 'text-orange-600' : 'text-gray-800'
                      }`}>
                        {prop.title.toUpperCase()}
                        {isHighlighted && (
                          <div className="inline-block ml-2 w-6 h-6 bg-orange-500 text-white text-sm font-bold leading-6 text-center">
                            ★
                          </div>
                        )}
                      </h3>
                      
                      <p className="text-gray-600 text-center leading-relaxed font-medium">
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
          
          {/* Industrial strength guarantee */}
          <div className="mt-20">
            <div className="tool-shadow bg-gray-800 p-12 relative overflow-hidden">
              <div className="absolute inset-0 industrial-pattern"></div>
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-red-500"></div>
              <div className="relative text-center">
                <div className="flex items-center justify-center mb-6">
                  <div className="bg-orange-500/20 p-4 mr-6">
                    <Shield className="h-12 w-12 text-orange-400" />
                  </div>
                  <div className="text-left">
                    <div className="display-font text-4xl text-white tracking-wider">INDUSTRIAL GRADE</div>
                    <div className="condensed-font text-orange-400 font-bold tracking-wider">SERVICE STANDARDS</div>
                  </div>
                </div>
                <p className="text-gray-300 text-lg font-medium max-w-4xl mx-auto">
                  Every service meets or exceeds OEM specifications • Military-grade diagnostic equipment • 
                  Aerospace-quality parts and materials • Zero-tolerance quality control
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview - Industrial Workshop */}
      <section className="py-24 bg-gray-100 relative">
        {/* Industrial rivets border */}
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-orange-500 to-red-500"></div>
        <div className="absolute top-0 left-0 right-0 flex justify-center space-x-12 transform translate-y-0">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="w-4 h-4 bg-gray-700 rounded-full border-2 border-orange-500/50"></div>
          ))}
        </div>
        
        {/* Background texture */}
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000' fill-opacity='0.1'%3E%3Cpath d='M0 0h80v80H0z'/%3E%3Cpath d='M0 20h80v40H0zM20 0v80M60 0v80'/%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative pt-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center bg-orange-500/10 border border-orange-500/30 rounded-full px-6 py-2 mb-6">
              <Wrench className="h-5 w-5 mr-2 text-orange-500 animate-wrench" />
              <span className="condensed-font font-bold text-orange-600 tracking-wider text-sm">
                PRECISION SERVICES
              </span>
            </div>
            <h2 className="display-font text-5xl md:text-6xl text-gray-800 mb-6 tracking-wide">
              EXPERT SERVICES
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-medium">
              Military-grade precision meets automotive expertise. 
              <strong className="text-orange-600"> Every service engineered to perfection.</strong>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(0, 6).map((service, index) => (
              <div key={service.id} className="group relative">
                <div className="tool-shadow bg-white border-2 border-gray-200 hover:border-orange-500/50 transition-all duration-300 relative overflow-hidden group-hover:shadow-2xl">
                  {/* Industrial corner reinforcement */}
                  <div className="absolute top-0 right-0 w-12 h-12 bg-gray-800 group-hover:bg-orange-500 transition-colors duration-300"></div>
                  <div className="absolute top-0 right-0 w-8 h-8 bg-white transform rotate-45 translate-x-2 translate-y-2"></div>
                  
                  {/* Service number badge */}
                  <div className="absolute top-4 left-4 bg-orange-500 text-white w-8 h-8 flex items-center justify-center font-bold text-sm condensed-font">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  
                  <div className="p-8 pt-16">
                    <h3 className="display-font text-2xl text-gray-800 mb-4 tracking-wide">
                      {service.name.toUpperCase()}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed font-medium">
                      {service.description}
                    </p>
                    
                    <div className="space-y-4">
                      <div className="flex justify-between items-center bg-gray-50 p-3">
                        <div>
                          <span className="text-orange-600 font-bold text-lg condensed-font">
                            {service.price}
                          </span>
                          <div className="text-sm text-gray-500 condensed-font">
                            Duration: {service.duration}
                          </div>
                        </div>
                        <div className="bg-orange-500/10 p-2 rounded">
                          <Wrench className="h-5 w-5 text-orange-500" />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-3">
                        <Link href="/contact">
                          <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 px-4 font-bold condensed-font tracking-wider transition-colors duration-300 text-sm">
                            GET QUOTE
                          </button>
                        </Link>
                        <Link href="/contact">
                          <button className="w-full border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white py-3 px-4 font-bold condensed-font tracking-wider transition-all duration-300 text-sm">
                            BOOK NOW
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                  
                  {/* Bottom reinforcement bar */}
                  <div className="absolute bottom-0 left-0 right-0 h-2 bg-gray-800 group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-red-500 transition-all duration-300"></div>
                </div>
                
                {/* Industrial spec plate */}
                <div className="absolute -bottom-3 -right-3 bg-gray-800 text-orange-400 px-3 py-1 text-xs font-bold condensed-font tracking-wider transform rotate-3 group-hover:rotate-0 transition-transform duration-300">
                  SPEC #{String(index + 1).padStart(3, '0')}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-20">
            <Link href="/services">
              <button className="btn-industrial text-lg px-12 py-4">
                <Settings className="inline h-5 w-5 mr-2 animate-gear" />
                VIEW ALL SERVICES
              </button>
            </Link>
          </div>
        </div>
        
        {/* Bottom industrial border */}
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-orange-500 to-red-500"></div>
      </section>

      {/* Testimonials - Customer Testimonies */}
      <section className="py-24 bg-white relative">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-3">
          <div className="h-full w-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ff6b35' fill-opacity='0.05'%3E%3Cpolygon points='50 0 60 40 100 50 60 60 50 100 40 60 0 50 40 40'/%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-20">
            <div className="inline-flex items-center bg-orange-500/10 border border-orange-500/30 rounded-full px-6 py-2 mb-6">
              <Shield className="h-5 w-5 mr-2 text-orange-500" />
              <span className="condensed-font font-bold text-orange-600 tracking-wider text-sm">
                VERIFIED TESTIMONIALS
              </span>
            </div>
            <h2 className="display-font text-5xl md:text-6xl text-gray-800 mb-6 tracking-wide">
              PROVEN RESULTS
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-medium">
              Real customers. Real results. Real trust built through 
              <strong className="text-orange-600"> exceptional service delivery.</strong>
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={testimonial.id} className="group relative">
                <div className="tool-shadow bg-white border-2 border-gray-200 hover:border-orange-500/50 transition-all duration-300 p-8 relative overflow-hidden group-hover:shadow-xl">
                  {/* Industrial corner accent */}
                  <div className="absolute top-0 left-0 w-16 h-16 bg-orange-500"></div>
                  <div className="absolute top-0 left-0 w-12 h-12 bg-white transform rotate-45 translate-x-2 translate-y-2"></div>
                  
                  {/* Customer ID badge */}
                  <div className="absolute top-4 right-4 bg-gray-800 text-orange-400 px-3 py-1 text-xs font-bold condensed-font tracking-wider">
                    ID #{String(index + 1).padStart(3, '0')}
                  </div>
                  
                  <div className="relative z-10">
                    {/* Rating with industrial style */}
                    <div className="flex items-center mb-6 bg-gray-100 p-3 -mx-2">
                      <div className="flex items-center mr-4">
                        {[...Array(Math.max(0, Math.min(5, Math.round(testimonial.rating || 0))))].map((_, i) => (
                          <Star key={i} className="h-5 w-5 text-orange-500 fill-current" />
                        ))}
                      </div>
                      <div className="text-orange-600 font-bold condensed-font text-sm tracking-wider">
                        VERIFIED CUSTOMER
                      </div>
                    </div>
                    
                    {/* Quote with industrial styling */}
                    <div className="relative mb-8">
                      <div className="absolute -top-2 -left-2 text-6xl text-orange-500/20 font-bold">"</div>
                      <p className="text-gray-700 font-medium leading-relaxed text-lg relative z-10 pl-6">
                        {testimonial.comment}
                      </p>
                      <div className="absolute -bottom-4 -right-2 text-6xl text-orange-500/20 font-bold transform rotate-180">"</div>
                    </div>
                    
                    {/* Customer info with industrial layout */}
                    <div className="border-t-2 border-orange-500/20 pt-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="display-font text-xl text-gray-800 tracking-wide">
                            {testimonial.name.toUpperCase()}
                          </p>
                          {testimonial.vehicle && (
                            <p className="text-sm text-gray-500 condensed-font font-semibold">
                              {testimonial.vehicle}
                            </p>
                          )}
                        </div>
                        <div className="text-right">
                          {testimonial.service && (
                            <div className="bg-orange-500/10 px-3 py-1 text-xs condensed-font font-bold text-orange-600 tracking-wider">
                              {testimonial.service.toUpperCase()}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Bottom accent */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                </div>
                
                {/* Service badge */}
                <div className="absolute -bottom-3 -left-3 bg-gray-800 text-orange-400 px-4 py-2 text-xs font-bold condensed-font tracking-wider transform -rotate-3 group-hover:rotate-0 transition-transform duration-300">
                  SATISFIED CLIENT
                </div>
              </div>
            ))}
          </div>
          
          {/* Trust indicators */}
          <div className="mt-20">
            <div className="tool-shadow bg-gray-800 p-12 relative overflow-hidden">
              <div className="absolute inset-0 industrial-pattern"></div>
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-red-500"></div>
              <div className="relative text-center">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
                  <div className="flex items-center justify-center">
                    <div className="bg-orange-500/20 p-4 mr-4">
                      <Award className="h-8 w-8 text-orange-400" />
                    </div>
                    <div className="text-left">
                      <div className="display-font text-3xl tracking-wider">500+</div>
                      <div className="condensed-font text-orange-400 font-bold tracking-wider text-sm">SATISFIED CUSTOMERS</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="bg-orange-500/20 p-4 mr-4">
                      <Shield className="h-8 w-8 text-orange-400" />
                    </div>
                    <div className="text-left">
                      <div className="display-font text-3xl tracking-wider">100%</div>
                      <div className="condensed-font text-orange-400 font-bold tracking-wider text-sm">GUARANTEE RATE</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="bg-orange-500/20 p-4 mr-4">
                      <Star className="h-8 w-8 text-orange-400" />
                    </div>
                    <div className="text-left">
                      <div className="display-font text-3xl tracking-wider">4.9/5</div>
                      <div className="condensed-font text-orange-400 font-bold tracking-wider text-sm">AVERAGE RATING</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection faqs={faqs} />

      {/* CTA Section - Command Center */}
      <section className="relative overflow-hidden">
        {/* Industrial background */}
        <div className="absolute inset-0 rugged-gradient"></div>
        <div className="absolute inset-0 industrial-pattern"></div>
        
        {/* Animated background elements */}
        <div className="absolute top-10 right-10 opacity-10">
          <Settings className="h-40 w-40 text-orange-400 animate-gear" />
        </div>
        <div className="absolute bottom-10 left-10 opacity-10">
          <Target className="h-32 w-32 text-orange-400 animate-pulse" />
        </div>
        
        {/* Diagonal overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-gray-800/80 to-gray-900/90"></div>
        
        {/* Industrial top border */}
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-orange-500 to-red-500"></div>
        <div className="absolute top-0 left-0 right-0 flex justify-center space-x-16 transform translate-y-0">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="w-6 h-6 bg-gray-700 border-4 border-orange-500/50 transform rotate-45"></div>
          ))}
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center text-white">
          {/* Mission critical badge */}
          <div className="inline-flex items-center bg-red-600/20 border border-red-500/50 rounded-full px-8 py-3 mb-8">
            <Zap className="h-6 w-6 mr-3 text-red-400 animate-pulse" />
            <span className="condensed-font font-bold text-red-400 tracking-wider">
              MISSION CRITICAL • DEPLOY NOW
            </span>
          </div>
          
          <h2 className="display-font text-5xl md:text-7xl mb-8 tracking-wider leading-tight">
            DEPLOY AUTO REPAIR
            <span className="block text-orange-400 text-4xl md:text-6xl mt-4">
              MISSION READY
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl mb-12 text-gray-300 max-w-4xl mx-auto leading-relaxed font-medium">
            <strong className="text-white">Command center activated.</strong> <strong className="text-orange-400">Strike team deployed.</strong> <strong className="text-white">Mission success guaranteed.</strong>
            <br />
            Your vehicle's combat readiness is our top priority.
          </p>
          
          {/* Command buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Link href="/contact">
              <button className="btn-industrial text-xl px-12 py-6 relative group">
                <Zap className="inline h-6 w-6 mr-3 group-hover:animate-pulse" />
                ENGAGE MISSION
                <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-2 py-1 condensed-font font-bold animate-pulse">
                  FREE
                </div>
              </button>
            </Link>
            <Link href="/contact">
              <button className="border-2 border-red-500 text-red-400 hover:bg-red-500 hover:text-white px-12 py-6 text-xl font-bold condensed-font tracking-wider transition-all duration-300 relative overflow-hidden group">
                <Target className="inline h-6 w-6 mr-3" />
                EMERGENCY DEPLOY
                <div className="absolute inset-0 bg-red-500 transform -skew-x-12 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 -z-10"></div>
              </button>
            </Link>
          </div>
          
          {/* Command center status */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="tool-shadow bg-gray-800/60 backdrop-blur-sm border border-orange-500/30 p-6 relative group hover:border-orange-500/60 transition-colors">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-red-500"></div>
              <div className="flex items-center justify-center mb-4">
                <div className="bg-green-500/20 p-3 rounded-full mr-4">
                  <Phone className="h-8 w-8 text-green-400" />
                </div>
                <div className="text-left">
                  <div className="condensed-font font-bold text-xl tracking-wider text-white">DIRECT COMM</div>
                  <div className="text-green-400 font-medium">{BUSINESS_INFO.phone}</div>
                </div>
              </div>
              <div className="text-xs condensed-font text-gray-400 tracking-wider">24/7 OPERATIONAL</div>
            </div>
            
            <div className="tool-shadow bg-gray-800/60 backdrop-blur-sm border border-orange-500/30 p-6 relative group hover:border-orange-500/60 transition-colors">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-red-500"></div>
              <div className="flex items-center justify-center mb-4">
                <div className="bg-blue-500/20 p-3 rounded-full mr-4">
                  <Mail className="h-8 w-8 text-blue-400" />
                </div>
                <div className="text-left">
                  <div className="condensed-font font-bold text-xl tracking-wider text-white">SECURE CHANNEL</div>
                  <div className="text-blue-400 font-medium">{BUSINESS_INFO.email}</div>
                </div>
              </div>
              <div className="text-xs condensed-font text-gray-400 tracking-wider">ENCRYPTED COMMS</div>
            </div>
          </div>
          
          {/* Status indicators */}
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="w-4 h-4 bg-green-400 rounded-full mx-auto mb-2 animate-pulse"></div>
              <div className="text-xs condensed-font text-green-400 font-bold tracking-wider">ONLINE</div>
            </div>
            <div className="text-center">
              <div className="w-4 h-4 bg-orange-400 rounded-full mx-auto mb-2 animate-pulse"></div>
              <div className="text-xs condensed-font text-orange-400 font-bold tracking-wider">READY</div>
            </div>
            <div className="text-center">
              <div className="w-4 h-4 bg-red-400 rounded-full mx-auto mb-2 animate-pulse"></div>
              <div className="text-xs condensed-font text-red-400 font-bold tracking-wider">DEPLOY</div>
            </div>
          </div>
        </div>
        
        {/* Bottom industrial border with larger rivets */}
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-orange-500 to-red-500"></div>
        <div className="absolute bottom-0 left-0 right-0 flex justify-center space-x-12 transform translate-y-1">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="w-4 h-4 bg-gray-700 border-4 border-orange-500/50 transform rotate-45"></div>
          ))}
        </div>
      </section>
    </>
  );
}
