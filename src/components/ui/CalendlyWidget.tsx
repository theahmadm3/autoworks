'use client';

import { useEffect } from 'react';

interface CalendlyWidgetProps {
  username?: string;
  height?: number;
}

const CalendlyWidget = ({ username = 'demo-autoworks', height = 630 }: CalendlyWidgetProps) => {
  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.head.appendChild(script);

    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  const calendlyUrl = `https://calendly.com/${username}`;

  return (
    <div className="calendly-inline-widget-container">
      <div
        className="calendly-inline-widget"
        data-url={calendlyUrl}
        style={{ minWidth: '320px', height: `${height}px` }}
      />
      
      {/* Fallback for when Calendly is not available */}
      <noscript>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-8 text-center">
          <h3 className="text-xl font-semibold text-blue-800 mb-4">Schedule Your Appointment</h3>
          <p className="text-blue-700 mb-6">
            JavaScript is required to use our online booking system. Please enable JavaScript or contact us directly.
          </p>
          <div className="space-y-4">
            <a
              href={calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors"
            >
              Open Calendly in New Tab
            </a>
            <div className="text-sm text-gray-600">
              <p>Or call us directly:</p>
              <p className="font-semibold">(555) 123-4567</p>
            </div>
          </div>
        </div>
      </noscript>
    </div>
  );
};

export default CalendlyWidget;