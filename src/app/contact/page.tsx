import { Metadata } from 'next';
import { Phone, MapPin, Mail, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import ContactForm from '@/components/forms/ContactForm';
import { BUSINESS_INFO } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with AutoWorks for automotive repair services. Visit our shop, call for appointments, or send us a message for quotes and questions.',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 rugged-gradient"></div>
        <div className="absolute inset-0 industrial-pattern"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-gray-800/70 to-gray-900/90"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-white">
          <div className="text-center">
            <div className="inline-flex items-center bg-orange-500/10 border border-orange-500/30 rounded-full px-6 py-2 mb-6">
              <Phone className="h-5 w-5 mr-2 text-orange-400" />
              <span className="condensed-font font-bold text-orange-400 tracking-wider text-sm">
                GET IN TOUCH
              </span>
            </div>
            <h1 className="display-font text-4xl md:text-5xl font-normal mb-6 tracking-wide">
              CONTACT AUTOWORKS
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to service your vehicle? Get in touch with us for appointments, quotes, or any questions about our automotive repair services.
            </p>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-orange-500 to-red-500"></div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and we&apos;ll get back to you within 24 hours. For urgent repairs, please call us directly.
              </p>
              <ContactForm formId={process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID} />
            </div>

            {/* Contact Info Cards */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
              
              <Card className="tool-shadow border-2 border-gray-200 hover:border-orange-500/50 transition-colors group">
                <CardHeader className="relative">
                  <div className="absolute top-0 right-0 w-8 h-8 bg-gray-800 group-hover:bg-orange-500 transition-colors duration-300"></div>
                  <div className="absolute top-0 right-0 w-6 h-6 bg-white transform rotate-45 translate-x-1 translate-y-1"></div>
                  <CardTitle className="flex items-center condensed-font tracking-wide">
                    <Phone className="h-5 w-5 mr-2 text-orange-500" />
                    Phone
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg font-semibold text-orange-600 mb-2">{BUSINESS_INFO.phone}</p>
                  <p className="text-gray-600">
                    Call us for immediate assistance, emergency repairs, or to schedule an appointment.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MapPin className="h-5 w-5 mr-2 text-blue-600" />
                    Visit Our Shop
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg font-semibold mb-2">{BUSINESS_INFO.address}</p>
                  <p className="text-gray-600 mb-4">
                    Modern facility with state-of-the-art diagnostic equipment and comfortable waiting area.
                  </p>
                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(BUSINESS_INFO.address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700 font-medium"
                  >
                    Get Directions →
                  </a>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Mail className="h-5 w-5 mr-2 text-blue-600" />
                    Email
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg font-semibold text-blue-600 mb-2">{BUSINESS_INFO.email}</p>
                  <p className="text-gray-600">
                    Send us detailed questions or photos of vehicle issues for preliminary assessment.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Clock className="h-5 w-5 mr-2 text-blue-600" />
                    Business Hours
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {Object.entries(BUSINESS_INFO.hours).map(([day, hours]) => (
                      <div key={day} className="flex justify-between">
                        <span className="font-medium">{day}:</span>
                        <span className={hours === 'Closed' ? 'text-red-600' : 'text-gray-600'}>
                          {hours}
                        </span>
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-gray-500 mt-4">
                    * Emergency repairs available by appointment outside regular hours
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="bg-red-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-red-800 mb-4">Emergency Repairs</h2>
            <p className="text-red-700 mb-6">
              Vehicle breakdown or urgent repair needed? We offer emergency services to get you back on the road safely.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="bg-red-600 text-white px-6 py-3 rounded-md font-medium hover:bg-red-700 transition-colors"
              >
                Call Emergency Line
              </a>
              <a
                href={`sms:${BUSINESS_INFO.phone}`}
                className="bg-white text-red-600 border border-red-600 px-6 py-3 rounded-md font-medium hover:bg-red-50 transition-colors"
              >
                Send Text Message
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Find Us</h2>
            <p className="text-xl text-gray-600">
              Conveniently located with easy access and plenty of parking for all vehicle types.
            </p>
          </div>
          
          {/* Placeholder for map - in a real implementation, you'd integrate with Google Maps */}
          <div className="bg-gray-300 rounded-lg h-96 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-16 w-16 text-gray-500 mx-auto mb-4" />
              <p className="text-gray-600 mb-2">Interactive Map Coming Soon</p>
              <p className="text-sm text-gray-500">{BUSINESS_INFO.address}</p>
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(BUSINESS_INFO.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700 font-medium mt-2 inline-block"
              >
                View on Google Maps →
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}