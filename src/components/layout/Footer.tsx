import Link from 'next/link';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { BUSINESS_INFO } from '@/lib/constants';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600/20 to-transparent"></div>
      </div>
      
      <div className="relative">
        {/* Main footer content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-lg">A</span>
                </div>
                <h3 className="font-display text-2xl font-bold">{BUSINESS_INFO.name}</h3>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Your trusted automotive repair specialists. Quality service, fair prices, and expert care for your vehicle with the convenience of pick-up & delivery.
              </p>
              <div className="space-y-3">
                <div className="flex items-center group">
                  <Phone className="h-4 w-4 mr-3 text-blue-400 group-hover:text-white transition-colors" />
                  <span className="text-gray-300 group-hover:text-white transition-colors font-medium">{BUSINESS_INFO.phone}</span>
                </div>
                <div className="flex items-center group">
                  <Mail className="h-4 w-4 mr-3 text-blue-400 group-hover:text-white transition-colors" />
                  <span className="text-gray-300 group-hover:text-white transition-colors font-medium">{BUSINESS_INFO.email}</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-white">Quick Links</h3>
              <ul className="space-y-3">
                {[
                  { name: 'Home', href: '/' },
                  { name: 'Services', href: '/services' },
                  { name: 'About Us', href: '/about' },
                  { name: 'Contact', href: '/contact' },
                  { name: 'Get Quote', href: '/contact' }
                ].map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href} 
                      className="text-gray-300 hover:text-blue-400 transition-colors duration-300 font-medium hover:translate-x-1 transform inline-block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-white">Our Services</h3>
              <ul className="space-y-3 text-gray-300">
                {[
                  'Oil Changes & Maintenance',
                  'Brake Repair & Service', 
                  'Engine Diagnostics',
                  'Transmission Service',
                  'AC Repair',
                  'General Inspections'
                ].map((service) => (
                  <li key={service} className="hover:text-blue-400 transition-colors duration-300 cursor-pointer">
                    {service}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact & Hours */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-white">Visit Us</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 mr-3 mt-1 flex-shrink-0 text-blue-400" />
                  <span className="text-gray-300 font-medium leading-relaxed">{BUSINESS_INFO.address}</span>
                </div>
                
                <div>
                  <div className="flex items-center mb-4">
                    <Clock className="h-5 w-5 mr-3 text-blue-400" />
                    <span className="font-semibold text-white">Business Hours</span>
                  </div>
                  <div className="ml-8 text-sm text-gray-300 space-y-2">
                    {Object.entries(BUSINESS_INFO.hours).map(([day, hours]) => (
                      <div key={day} className="flex justify-between">
                        <span className="font-medium">{day}:</span>
                        <span className={hours === 'Closed' ? 'text-gray-500' : 'text-gray-300'}>{hours}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col sm:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">
                © {currentYear} {BUSINESS_INFO.name}. All rights reserved.
              </p>
              <div className="mt-4 sm:mt-0">
                <Link 
                  href="/contact" 
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-2 rounded-xl transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  Request Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;