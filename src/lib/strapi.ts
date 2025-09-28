import { Service, Testimonial, FAQ, HowItWorksStep, APIResponse } from '@/types';
import { 
  DEFAULT_SERVICES, 
  DEFAULT_TESTIMONIALS, 
  DEFAULT_FAQS, 
  DEFAULT_HOW_IT_WORKS 
} from '@/lib/constants';

// Strapi configuration
const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';
const STRAPI_API_TOKEN = process.env.STRAPI_API_TOKEN;

// Helper function to build Strapi URL
export function getStrapiUrl(path: string = ''): string {
  return `${STRAPI_URL}${path}`;
}

// Helper function to handle Strapi image URLs
export function getStrapiImageUrl(url: string): string {
  if (!url) return '';
  if (url.startsWith('http')) return url;
  return getStrapiUrl(url);
}

// Generic fetch function for Strapi API
async function fetchStrapi<T>(endpoint: string): Promise<APIResponse<T[]> | null> {
  try {
    const url = getStrapiUrl(`/api/${endpoint}?populate=*`);
    const headers: HeadersInit = {
      'Content-Type': 'application/json',
    };

    // Add auth token if available
    if (STRAPI_API_TOKEN) {
      headers['Authorization'] = `Bearer ${STRAPI_API_TOKEN}`;
    }

    const response = await fetch(url, {
      headers,
      next: { 
        revalidate: 300, // Revalidate every 5 minutes
        tags: [endpoint] // Tag for on-demand revalidation
      }
    });

    if (!response.ok) {
      console.warn(`Strapi API error for ${endpoint}: ${response.status}`);
      return null;
    }

    return await response.json();
  } catch (error) {
    console.warn(`Error fetching from Strapi ${endpoint}:`, error);
    return null;
  }
}

// Services API
export async function getServices(): Promise<Service[]> {
  try {
    const response = await fetchStrapi<Service>('services');
    return response?.data || DEFAULT_SERVICES;
  } catch (error) {
    console.warn('Failed to fetch services from Strapi, using defaults:', error);
    return DEFAULT_SERVICES;
  }
}

// Testimonials API
export async function getTestimonials(): Promise<Testimonial[]> {
  try {
    const response = await fetchStrapi<Testimonial>('testimonials');
    return response?.data || DEFAULT_TESTIMONIALS;
  } catch (error) {
    console.warn('Failed to fetch testimonials from Strapi, using defaults:', error);
    return DEFAULT_TESTIMONIALS;
  }
}

// FAQs API
export async function getFAQs(): Promise<FAQ[]> {
  try {
    const response = await fetchStrapi<FAQ>('faqs');
    return response?.data || DEFAULT_FAQS;
  } catch (error) {
    console.warn('Failed to fetch FAQs from Strapi, using defaults:', error);
    return DEFAULT_FAQS;
  }
}

// How It Works Steps API
export async function getHowItWorksSteps(): Promise<HowItWorksStep[]> {
  try {
    const response = await fetchStrapi<HowItWorksStep>('how-it-works-steps');
    const data = response?.data || DEFAULT_HOW_IT_WORKS;
    // Sort by order field
    return data.sort((a, b) => a.order - b.order);
  } catch (error) {
    console.warn('Failed to fetch how-it-works steps from Strapi, using defaults:', error);
    return DEFAULT_HOW_IT_WORKS;
  }
}

// Featured services (for homepage)
export async function getFeaturedServices(limit: number = 6): Promise<Service[]> {
  try {
    const services = await getServices();
    return services.slice(0, limit);
  } catch (error) {
    console.warn('Failed to fetch featured services:', error);
    return DEFAULT_SERVICES.slice(0, limit);
  }
}

// Featured testimonials (for homepage)
export async function getFeaturedTestimonials(limit: number = 3): Promise<Testimonial[]> {
  try {
    const testimonials = await getTestimonials();
    return testimonials.slice(0, limit);
  } catch (error) {
    console.warn('Failed to fetch featured testimonials:', error);
    return DEFAULT_TESTIMONIALS.slice(0, limit);
  }
}