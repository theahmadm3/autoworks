'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, MapPin, Clock } from 'lucide-react';
import { BUSINESS_INFO } from '@/lib/constants';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Get Quote', href: '/contact', primary: true },
  ];

  return (
    <header className="bg-white shadow-xl border-b border-gray-100 sticky top-0 z-50 backdrop-blur-sm">
      {/* Top bar with contact info - Enhanced */}
      <div className="bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-3 text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center group">
                <Phone className="h-4 w-4 mr-2 text-blue-300 group-hover:text-white transition-colors" />
                <span className="font-medium tracking-wide">{BUSINESS_INFO.phone}</span>
              </div>
              <div className="hidden sm:flex items-center group">
                <MapPin className="h-4 w-4 mr-2 text-blue-300 group-hover:text-white transition-colors" />
                <span className="font-medium tracking-wide">{BUSINESS_INFO.address}</span>
              </div>
            </div>
            <div className="hidden md:flex items-center">
              <Clock className="h-4 w-4 mr-2 text-blue-300" />
              <span className="font-medium tracking-wide">Mon-Fri: 8AM-6PM | Sat: 8AM-4PM</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation - Enhanced */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-5">
          {/* Logo - Enhanced */}
          <div className="flex items-center">
            <Link href="/" className="group">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                  <span className="text-white font-bold text-lg">A</span>
                </div>
                <span className="text-2xl font-display font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                  {BUSINESS_INFO.name}
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation - Enhanced */}
          <nav className="hidden md:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`relative px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                  item.primary
                    ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg hover:shadow-xl hover:from-blue-700 hover:to-blue-800 transform hover:-translate-y-0.5'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50 group'
                }`}
              >
                {!item.primary && (
                  <div className="absolute inset-0 bg-blue-600 rounded-xl scale-0 group-hover:scale-100 transition-transform duration-300 opacity-0 group-hover:opacity-5" />
                )}
                <span className="relative z-10">{item.name}</span>
              </Link>
            ))}
          </nav>

          {/* Mobile menu button - Enhanced */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all duration-300"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation - Enhanced */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-2 pt-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                    item.primary
                      ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;