import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Service, Testimonial, FAQ, HowItWorksStep, APIResponse } from '@/types';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPhoneNumber(phone: string): string {
  const cleaned = phone.replace(/\D/g, '');
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    return `(${match[1]}) ${match[2]}-${match[3]}`;
  }
  return phone;
}

export function getStrapiUrl(path: string = ''): string {
  const baseUrl = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';
  return `${baseUrl}${path}`;
}

export function getStrapiImageUrl(url: string): string {
  if (!url) return '';
  if (url.startsWith('http')) return url;
  return getStrapiUrl(url);
}

// Strapi API functions
export async function fetchFromStrapi<T>(endpoint: string): Promise<APIResponse<T[]> | null> {
  try {
    const url = getStrapiUrl(`/api/${endpoint}?populate=*`);
    const response = await fetch(url, {
      headers: {
        'Authorization': `Bearer ${process.env.STRAPI_API_TOKEN}`,
      },
      next: { revalidate: 300 } // Cache for 5 minutes
    });

    if (!response.ok) {
      console.warn(`Failed to fetch from Strapi: ${endpoint}`);
      return null;
    }

    return await response.json();
  } catch (error) {
    console.warn(`Error fetching from Strapi: ${endpoint}`, error);
    return null;
  }
}

export async function getServices(): Promise<Service[]> {
  const response = await fetchFromStrapi<Service>('services');
  return response?.data || [];
}

export async function getTestimonials(): Promise<Testimonial[]> {
  const response = await fetchFromStrapi<Testimonial>('testimonials');
  return response?.data || [];
}

export async function getFAQs(): Promise<FAQ[]> {
  const response = await fetchFromStrapi<FAQ>('faqs');
  return response?.data || [];
}

export async function getHowItWorksSteps(): Promise<HowItWorksStep[]> {
  const response = await fetchFromStrapi<HowItWorksStep>('how-it-works-steps');
  return response?.data?.sort((a, b) => a.order - b.order) || [];
}