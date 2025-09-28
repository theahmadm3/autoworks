# AutoWorks - Professional Mechanic Website

A modern, professional website for automotive repair services built with Next.js, Strapi CMS, and integrated appointment booking.

## Features

- **Modern Frontend**: Built with Next.js 15 and TypeScript for optimal performance
- **Content Management**: Strapi headless CMS for easy content updates
- **Appointment Booking**: Integrated Calendly widget for seamless scheduling
- **Contact Forms**: Formspree integration for reliable contact form handling
- **Responsive Design**: Mobile-first design with Tailwind CSS
- **SEO Optimized**: Built-in SEO optimization for better search visibility

## Technology Stack

- **Frontend**: Next.js 15, React, TypeScript
- **Styling**: Tailwind CSS
- **CMS**: Strapi (headless)
- **Appointments**: Calendly integration
- **Contact Forms**: Formspree
- **Deployment**: Vercel-ready

## Getting Started

### Prerequisites
- Node.js 18 or later
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/theahmadm3/autoworks.git
cd autoworks
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

4. Start the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

## Configuration

### Strapi CMS Setup
1. Navigate to the Strapi admin panel
2. Create content types for services, testimonials, and blog posts
3. Configure API permissions for public access to content

### Calendly Integration
1. Get your Calendly username from your account
2. Update the Calendly widget URL in the appointments page

### Formspree Setup
1. Create a form at [formspree.io](https://formspree.io)
2. Add your form endpoint to the environment variables

## Project Structure

```
autoworks/
├── src/
│   ├── app/              # App Router pages
│   ├── components/       # Reusable components
│   ├── lib/             # Utility functions
│   └── types/           # TypeScript type definitions
├── public/              # Static assets
├── strapi/             # Strapi CMS configuration
└── docs/               # Documentation
```

## Deployment

The application is optimized for deployment on Vercel:

1. Connect your GitHub repository to Vercel
2. Configure environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License.
