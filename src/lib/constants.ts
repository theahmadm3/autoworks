import { BusinessInfo, Service } from '@/types';

export const BUSINESS_INFO: BusinessInfo = {
  name: 'AutoWorks',
  address: '123 Main Street, Your City, ST 12345',
  phone: '(555) 123-4567',
  email: 'info@autoworks.com',
  hours: {
    'Monday': '8:00 AM - 6:00 PM',
    'Tuesday': '8:00 AM - 6:00 PM', 
    'Wednesday': '8:00 AM - 6:00 PM',
    'Thursday': '8:00 AM - 6:00 PM',
    'Friday': '8:00 AM - 6:00 PM',
    'Saturday': '8:00 AM - 4:00 PM',
    'Sunday': 'Closed'
  }
};

// Default services (can be overridden by CMS)
export const DEFAULT_SERVICES: Service[] = [
  {
    id: 1,
    name: 'Oil Change & Filter',
    description: 'Complete oil change service with filter replacement using premium synthetic oil.',
    price: 'Starting at $49.99',
    duration: '30 minutes'
  },
  {
    id: 2,
    name: 'Brake Service',
    description: 'Complete brake inspection, pad replacement, and rotor resurfacing as needed.',
    price: 'Starting at $149.99',
    duration: '1-2 hours'
  },
  {
    id: 3,
    name: 'Engine Diagnostics',
    description: 'Comprehensive computer diagnostics to identify engine issues and performance problems.',
    price: 'Starting at $99.99',
    duration: '45 minutes'
  },
  {
    id: 4,
    name: 'Transmission Service',
    description: 'Complete transmission fluid change and system inspection for optimal performance.',
    price: 'Starting at $199.99',
    duration: '1-2 hours'
  },
  {
    id: 5,
    name: 'AC Repair',
    description: 'Air conditioning system diagnosis, repair, and refrigerant recharge service.',
    price: 'Starting at $89.99',
    duration: '1 hour'
  },
  {
    id: 6,
    name: 'General Inspection',
    description: 'Comprehensive vehicle inspection covering all major systems and safety components.',
    price: 'Starting at $79.99',
    duration: '1 hour'
  }
];

export const SITE_CONFIG = {
  name: 'AutoWorks',
  description: 'Professional automotive repair services you can trust. Expert mechanics, quality parts, fair prices.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  keywords: 'auto repair, mechanic, car service, brake repair, oil change, engine diagnostics'
};