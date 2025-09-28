'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, MapPin, Wrench, Shield } from 'lucide-react';
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
    <header className="bg-white shadow-2xl relative">
      {/* Top bar with contact info */}
      <div className="rugged-gradient text-white industrial-pattern relative">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex justify-between items-center py-3 text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-orange-400" />
                <span className="font-medium">{BUSINESS_INFO.phone}</span>
              </div>
              <div className="hidden sm:flex items-center">
                <MapPin className="h-4 w-4 mr-2 text-orange-400" />
                <span className="font-medium">{BUSINESS_INFO.address}</span>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <div className="flex items-center">
                <Shield className="h-4 w-4 mr-1 text-green-400" />
                <span className="condensed-font font-bold">CERTIFIED • INSURED • TRUSTED</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white">
        <div className="flex justify-between items-center py-6">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <Wrench className="h-8 w-8 text-orange-500 group-hover:animate-wrench transition-all duration-300" />
                <div className="absolute -inset-1 bg-orange-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div>
                <span className="display-font text-3xl text-gray-800 leading-none">
                  {BUSINESS_INFO.name}
                </span>
                <div className="text-xs condensed-font text-orange-500 font-bold tracking-wider">
                  AUTOMOTIVE EXPERTS
                </div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`${
                  item.primary
                    ? 'btn-industrial px-6 py-3 text-sm font-bold'
                    : 'text-gray-700 hover:text-orange-500 transition-colors font-semibold condensed-font text-lg tracking-wide'
                } relative group`}
              >
                {item.name}
                {!item.primary && (
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
                )}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-orange-500 p-2 rounded-md hover:bg-gray-100 transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-6 border-t border-gray-200">
            <nav className="flex flex-col space-y-2 pt-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`${
                    item.primary
                      ? 'btn-industrial text-center py-3 font-bold'
                      : 'text-gray-700 hover:text-orange-500 px-4 py-3 font-semibold condensed-font text-lg tracking-wide hover:bg-gray-50 rounded-md'
                  } transition-colors`}
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