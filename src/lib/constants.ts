import { BusinessInfo, Service, Testimonial, FAQ, HowItWorksStep } from '@/types';

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

// Updated value propositions
export const VALUE_PROPOSITIONS = [
  {
    title: 'On-Demand Service',
    description: 'Order a mechanic online through our website, Instagram, or email — no stress of searching or waiting at workshops.',
    icon: 'smartphone'
  },
  {
    title: 'Pick-Up & Delivery',
    description: 'We collect your car, repair it, and return it safely — total convenience for your busy schedule.',
    icon: 'truck'
  },
  {
    title: 'Trust & Transparency', 
    description: 'Upfront pricing, digital invoices, and clear communication so you know exactly what you\'re paying for.',
    icon: 'shield'
  },
  {
    title: 'Skilled & Verified Mechanics',
    description: 'Professional, trained mechanics — not just roadside fixes. Quality workmanship is guaranteed.',
    icon: 'award'
  },
  {
    title: 'Speed & Reliability',
    description: 'Quick response for breakdowns or emergencies, keeping you on the road when you need it most.',
    icon: 'clock'
  },
  {
    title: 'Tailored Services',
    description: 'From luxury cars to Uber/Bolt drivers, we customize service packages for different customer needs.',
    icon: 'settings'
  },
  {
    title: 'Tech-Driven',
    description: 'Modern diagnostic tools and OBD2 scanners ensure accurate repairs and efficient service.',
    icon: 'cpu'
  }
];

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

// Default testimonials (fallback data)
export const DEFAULT_TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    rating: 5,
    comment: 'Amazing service! They picked up my car, fixed the brake issue, and delivered it back the same day. Professional and transparent pricing.',
    vehicle: '2019 Honda Civic',
    service: 'Brake Service'
  },
  {
    id: 2,
    name: 'Mike Chen',
    rating: 5,
    comment: 'As an Uber driver, I need my car running perfectly. AutoWorks offers great packages for drivers like me. Quick turnaround and honest pricing.',
    vehicle: '2020 Toyota Camry',
    service: 'General Maintenance'
  },
  {
    id: 3,
    name: 'Lisa Rodriguez',
    rating: 5,
    comment: 'The convenience is unmatched! Booked online, they handled everything. Digital invoice made it easy to expense for my business.',
    vehicle: '2021 BMW 3 Series',
    service: 'Engine Diagnostics'
  }
];

// Default FAQ data
export const DEFAULT_FAQS: FAQ[] = [
  {
    id: 1,
    question: 'How does the pick-up and delivery service work?',
    answer: 'Simply book online or contact us. We\'ll arrange a convenient time to collect your vehicle, perform the necessary repairs at our facility, and return it to you the same day or next day depending on the service required.'
  },
  {
    id: 2,
    question: 'Do you provide upfront pricing?',
    answer: 'Yes! We believe in complete transparency. After our initial diagnosis, we provide a detailed quote with all costs upfront. No hidden fees, no surprises.'
  },
  {
    id: 3,
    question: 'What areas do you serve for pick-up and delivery?',
    answer: 'We currently serve the greater metropolitan area within a 25-mile radius. Contact us to confirm if we cover your location.'
  },
  {
    id: 4,
    question: 'Are your mechanics certified?',
    answer: 'Absolutely! All our mechanics are professionally trained and certified. We don\'t do roadside fixes - all work is performed at our fully equipped facility.'
  },
  {
    id: 5,
    question: 'How quickly can you respond to emergencies?',
    answer: 'For emergency breakdowns, we typically respond within 2-4 hours during business hours. We prioritize getting you back on the road as quickly as possible.'
  }
];

// Default How It Works steps
export const DEFAULT_HOW_IT_WORKS: HowItWorksStep[] = [
  {
    id: 1,
    title: 'Book Online',
    description: 'Schedule your service through our website, Instagram, or email. Choose your preferred time and service type.',
    icon: 'calendar',
    order: 1
  },
  {
    id: 2,
    title: 'We Pick Up',
    description: 'Our team collects your vehicle at the scheduled time from your location. No need to visit a workshop.',
    icon: 'truck',
    order: 2
  },
  {
    id: 3,
    title: 'Expert Service',
    description: 'Certified mechanics perform professional diagnostics and repairs using modern tools and quality parts.',
    icon: 'wrench',
    order: 3
  },
  {
    id: 4,
    title: 'We Deliver',
    description: 'Your vehicle is returned to you in perfect condition with a digital invoice and service report.',
    icon: 'check-circle',
    order: 4
  }
];

export const SITE_CONFIG = {
  name: 'AutoWorks',
  description: 'On-demand automotive repair with pick-up & delivery. Professional mechanics, transparent pricing, tech-driven service.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  keywords: 'auto repair, mechanic, car service, pick up delivery, on-demand, brake repair, oil change, engine diagnostics'
};