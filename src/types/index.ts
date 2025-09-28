// Service types
export interface Service {
  id: number;
  name: string;
  description: string;
  price: string;
  duration: string;
  image?: string;
}

// Testimonial types
export interface Testimonial {
  id: number;
  name: string;
  rating: number;
  comment: string;
  vehicle?: string;
  service?: string;
}

// Contact form types
export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  vehicle: string;
  service: string;
  contactReason: 'service-request' | 'question' | 'quote-request' | 'emergency' | 'other';
  serviceType: 'drop-off' | 'pickup-delivery' | 'not-sure';
  message: string;
}

// Business info types
export interface BusinessInfo {
  name: string;
  address: string;
  phone: string;
  email: string;
  hours: {
    [key: string]: string;
  };
}

// API response types
export interface APIResponse<T> {
  data: T;
  meta?: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

// FAQ types
export interface FAQ {
  id: number;
  question: string;
  answer: string;
  category?: string;
}

// How It Works step types
export interface HowItWorksStep {
  id: number;
  title: string;
  description: string;
  icon: string;
  order: number;
}