import { BusinessInfo, Service } from '@/types';

export const BUSINESS_INFO: BusinessInfo = {
  name: 'AUTOWORKS',
  address: 'Lagos, Nigeria (Pickup & Delivery Available)',
  phone: '+234 (0) 123 456 7890',
  email: 'info@autoworks.ng',
  hours: {
    'Monday': '7:00 AM - 7:00 PM',
    'Tuesday': '7:00 AM - 7:00 PM', 
    'Wednesday': '7:00 AM - 7:00 PM',
    'Thursday': '7:00 AM - 7:00 PM',
    'Friday': '7:00 AM - 7:00 PM',
    'Saturday': '8:00 AM - 6:00 PM',
    'Sunday': '9:00 AM - 5:00 PM'
  }
};

// Default services (can be overridden by CMS)
export const DEFAULT_SERVICES: Service[] = [
  {
    id: 1,
    name: 'Oil Change & Filter',
    description: 'Complete oil change service with filter replacement using premium synthetic oil. Pickup & delivery included.',
    price: 'Starting at ₦15,000',
    duration: '30 minutes'
  },
  {
    id: 2,
    name: 'Brake Service',
    description: 'Complete brake inspection, pad replacement, and rotor resurfacing as needed. We come to you.',
    price: 'Starting at ₦35,000',
    duration: '1-2 hours'
  },
  {
    id: 3,
    name: 'Engine Diagnostics',
    description: 'Comprehensive OBD2 computer diagnostics to identify engine issues and performance problems.',
    price: 'Starting at ₦20,000',
    duration: '45 minutes'
  },
  {
    id: 4,
    name: 'Transmission Service',
    description: 'Complete transmission fluid change and system inspection with pickup & delivery service.',
    price: 'Starting at ₦45,000',
    duration: '1-2 hours'
  },
  {
    id: 5,
    name: 'AC Repair',
    description: 'Air conditioning system diagnosis, repair, and refrigerant recharge with modern diagnostic tools.',
    price: 'Starting at ₦25,000',
    duration: '1 hour'
  },
  {
    id: 6,
    name: 'General Inspection',
    description: 'Comprehensive vehicle inspection covering all major systems using advanced diagnostic equipment.',
    price: 'Starting at ₦18,000',
    duration: '1 hour'
  }
];

export const SITE_CONFIG = {
  name: 'AUTOWORKS',
  description: 'Nigeria\'s leading tech-driven auto repair service. Convenient pickup & delivery, skilled mechanics, transparent pricing, and modern diagnostics.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  keywords: 'auto repair nigeria, mobile mechanic, pickup delivery, car service lagos, obd2 diagnostics, uber bolt car repair, fleet maintenance'
};