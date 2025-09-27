import { Metadata } from 'next';
import { Calendar, Clock, CheckCircle, Phone } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import CalendlyWidget from '@/components/ui/CalendlyWidget';
import { BUSINESS_INFO } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Book Appointment',
  description: 'Schedule your auto repair appointment online with AutoWorks. Choose from available time slots and book your vehicle service conveniently.',
};

export default function AppointmentsPage() {
  const appointmentFeatures = [
    {
      icon: Calendar,
      title: 'Easy Online Booking',
      description: 'Select your preferred date and time from available slots in our calendar.'
    },
    {
      icon: Clock,
      title: 'Flexible Scheduling',
      description: 'We offer appointment times that work with your schedule, including early morning and late afternoon slots.'
    },
    {
      icon: CheckCircle,
      title: 'Instant Confirmation',
      description: 'Receive immediate email confirmation with appointment details and preparation instructions.'
    }
  ];

  const prepTips = [
    'Please arrive 10 minutes early for your appointment',
    'Bring your vehicle registration and maintenance records if available',
    'Remove all personal items from your vehicle',
    'If possible, note when the issue first occurred and any symptoms',
    'Prepare a list of any questions about your vehicle',
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Calendar className="h-16 w-16 mx-auto mb-6 text-blue-300" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Book Your Appointment
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Schedule your automotive service appointment online. Choose from available time slots and get your vehicle the expert care it deserves.
            </p>
          </div>
        </div>
      </section>

      {/* Appointment Features */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Book Online?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our online booking system makes it easy to schedule your service at your convenience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {appointmentFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <Icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Calendly Widget Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Select Your Appointment Time</h2>
            <p className="text-xl text-gray-600">
              Choose from available time slots that work best for your schedule.
            </p>
          </div>

          {/* Calendly Widget */}
          <CalendlyWidget 
            username={process.env.NEXT_PUBLIC_CALENDLY_USERNAME || 'demo-autoworks'} 
            height={700} 
          />
        </div>
      </section>

      {/* Preparation Tips */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <CheckCircle className="h-5 w-5 mr-2 text-green-600" />
                  Appointment Preparation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  To make the most of your appointment and ensure efficient service:
                </p>
                <ul className="space-y-2">
                  {prepTips.map((tip, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{tip}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Phone className="h-5 w-5 mr-2 text-blue-600" />
                  Need Help Booking?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Having trouble with online booking or have specific questions about your service needs?
                </p>
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold text-lg mb-2">Call Us Directly:</p>
                    <p className="text-2xl font-bold text-blue-600">{BUSINESS_INFO.phone}</p>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">Business Hours:</p>
                    <div className="text-sm space-y-1">
                      {Object.entries(BUSINESS_INFO.hours).map(([day, hours]) => (
                        <div key={day} className="flex justify-between">
                          <span>{day}:</span>
                          <span className={hours === 'Closed' ? 'text-red-600' : ''}>{hours}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="pt-4 border-t">
                    <p className="text-sm text-gray-600">
                      Emergency repairs available outside regular hours by special arrangement.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Alternative */}
      <section className="bg-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Prefer to Call?</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Our friendly staff is ready to help you schedule your appointment and answer any questions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="bg-white text-blue-900 px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors"
            >
              Call {BUSINESS_INFO.phone}
            </a>
            <a
              href="/contact"
              className="border border-white text-white px-8 py-3 rounded-md font-medium hover:bg-white hover:text-blue-900 transition-colors"
            >
              Send Message
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}