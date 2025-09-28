'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, MapPin } from 'lucide-react';
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
    <header className="bg-white shadow-lg">
      {/* Top bar with contact info */}
      <div className="bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-2 text-sm">
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-1" />
                <span>{BUSINESS_INFO.phone}</span>
              </div>
              <div className="hidden sm:flex items-center">
                <MapPin className="h-4 w-4 mr-1" />
                <span>{BUSINESS_INFO.address}</span>
              </div>
            </div>
            <div className="hidden md:block">
              <span>Mon-Fri: 8AM-6PM | Sat: 8AM-4PM</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-blue-900">
              {BUSINESS_INFO.name}
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
                    ? 'bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors'
                    : 'text-gray-700 hover:text-blue-600 transition-colors'
                } font-medium`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <nav className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`${
                    item.primary
                      ? 'bg-blue-600 text-white px-4 py-2 rounded-md'
                      : 'text-gray-700 hover:text-blue-600 px-4 py-2'
                  } font-medium transition-colors`}
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