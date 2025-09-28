import { Metadata } from 'next';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Book Service - AutoWorks',
  description: 'Request automotive service through our contact form. Pick-up & delivery available.',
};

export default function AppointmentsPage() {
  // Redirect to contact page since we're now using the contact form for all bookings
  redirect('/contact');
}