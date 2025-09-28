# AutoWorks - On-Demand Auto Repair Website

A modern, professional website for on-demand automotive repair services with pick-up & delivery, built with Next.js App Router and Strapi CMS using conventional patterns.

## Features

- **Modern Frontend**: Built with Next.js 15 App Router and TypeScript for optimal performance and SEO
- **Strapi CMS Integration**: Server-side data fetching with conventional patterns and intelligent fallbacks
- **On-Demand Service Model**: Contact form-based booking system replacing traditional appointments
- **Responsive Design**: Mobile-first design with Tailwind CSS
- **Server-Side Rendering**: Better SEO and performance with Next.js App Router
- **Type Safety**: Full TypeScript implementation with proper type definitions

## Technology Stack

- **Frontend**: Next.js 15 (App Router), React 19, TypeScript
- **Styling**: Tailwind CSS v4
- **CMS**: Strapi (headless CMS with conventional integration patterns)
- **Contact Forms**: Formspree integration for service requests
- **Deployment**: Vercel-ready with ISR (Incremental Static Regeneration)

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

## Strapi CMS Integration (Conventional Pattern)

This project implements the **conventional pattern** for Strapi CMS integration with Next.js App Router:

### Architecture
- **Server Components**: Data fetching happens server-side using `async/await`
- **No Loading States**: Eliminates client-side loading spinners and hydration issues
- **Intelligent Fallbacks**: Graceful degradation to default content when CMS is unavailable
- **ISR Caching**: 5-minute revalidation with tagged cache invalidation
- **Type Safety**: Full TypeScript support for all CMS data structures

### Data Layer Structure
```
src/lib/
├── strapi.ts          # Conventional Strapi integration functions
├── constants.ts       # Default fallback data
└── utils.ts          # General utility functions
```

### Key Functions
- `getServices()` - Fetch services with fallback to defaults
- `getTestimonials()` - Fetch testimonials with fallback to defaults  
- `getFAQs()` - Fetch FAQs with fallback to defaults
- `getHowItWorksSteps()` - Fetch process steps with fallback to defaults
- `getFeaturedServices()` - Get featured services for homepage
- `getFeaturedTestimonials()` - Get featured testimonials for homepage

### Usage Pattern
```typescript
// Server Component (conventional pattern)
export default async function HomePage() {
  const [services, testimonials] = await Promise.all([
    getFeaturedServices(6),
    getFeaturedTestimonials(3)
  ]);
  
  return (
    <div>
      {/* Render data directly - no loading states needed */}
    </div>
  );
}
```

## Configuration

### Environment Variables
```bash
# Strapi Configuration
NEXT_PUBLIC_STRAPI_URL=http://localhost:1337
STRAPI_API_TOKEN=your_api_token_here

# Contact Form
NEXT_PUBLIC_FORMSPREE_FORM_ID=your_form_id
```

### Strapi CMS Setup
See `strapi/README.md` for detailed Strapi configuration instructions including:
- Content type definitions
- API permissions setup
- Authentication configuration

## Project Structure

```
autoworks/
├── src/
│   ├── app/              # App Router pages (Server Components)
│   │   ├── page.tsx      # Homepage with server-side data fetching
│   │   ├── services/     # Services page with Strapi integration
│   │   └── contact/      # Contact form (client component)
│   ├── components/       # Reusable components
│   │   ├── FAQSection.tsx # Client component for interactive FAQ
│   │   ├── layout/       # Layout components
│   │   └── ui/          # UI components
│   ├── lib/             # Utility functions and data layer
│   │   ├── strapi.ts    # Conventional Strapi integration
│   │   ├── constants.ts # Default fallback data
│   │   └── utils.ts     # General utilities
│   └── types/           # TypeScript type definitions
├── public/              # Static assets
├── strapi/             # Strapi CMS configuration and docs
└── docs/               # Documentation
```

## Business Model

AutoWorks has evolved from traditional appointment-based service to an **on-demand model** with:

### Key Differentiators
1. **On-Demand Service** - Book through website, Instagram, or email
2. **Pick-Up & Delivery** - Complete convenience with vehicle collection/return
3. **Trust & Transparency** - Upfront pricing and digital invoices
4. **Skilled & Verified Mechanics** - Professional certified technicians
5. **Speed & Reliability** - Quick emergency response
6. **Tailored Services** - Custom packages for different customer needs
7. **Tech-Driven** - Modern diagnostic tools and OBD2 scanners

### Contact Form Integration
- **Reason for Contact**: Service request, question, quote, emergency
- **Service Preference**: Pick-up & delivery, drop-off, or undecided
- **Direct Booking**: No calendly - all bookings through contact form

## Deployment

Optimized for deployment on Vercel with:
- **Automatic ISR**: 5-minute revalidation for CMS content
- **Edge Functions**: Fast global performance
- **Build-time Optimization**: Static generation where possible
- **Error Handling**: Graceful fallbacks for all external dependencies

```bash
# Deploy to Vercel
vercel --prod
```

## Performance Features

- **Server-Side Rendering**: Better SEO and faster initial page loads
- **ISR Caching**: Efficient content updates without full rebuilds  
- **Intelligent Fallbacks**: Never shows broken content if CMS is down
- **Minimal JavaScript**: Server components reduce client-side bundle
- **Type Safety**: Catch errors at build time, not runtime

## License

This project is licensed under the MIT License.
