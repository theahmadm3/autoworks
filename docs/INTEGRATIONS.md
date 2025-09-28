# AutoWorks Integrations Guide

This document explains how to configure and use the external service integrations in the AutoWorks website.

## 🗓️ Calendly Integration

### Setup Steps

1. **Create Calendly Account**
   - Sign up at [calendly.com](https://calendly.com)
   - Set up your availability and appointment types
   - Configure appointment details (duration, buffer times, etc.)

2. **Configure Environment Variable**
   ```bash
   # In .env.local
   NEXT_PUBLIC_CALENDLY_USERNAME=your-calendly-username
   ```

3. **Customize Appointment Types**
   - Oil Change & Maintenance (30 minutes)
   - Brake Service (1-2 hours)
   - Engine Diagnostics (45 minutes)
   - General Inspection (1 hour)
   - Custom appointment types as needed

### Features Implemented
- ✅ Embedded Calendly widget on `/appointments` page
- ✅ Responsive design that works on all devices
- ✅ Fallback content for users with JavaScript disabled
- ✅ Direct links to open Calendly in new tab

## 📧 Formspree Integration

### Setup Steps

1. **Create Formspree Account**
   - Sign up at [formspree.io](https://formspree.io)
   - Create a new form project
   - Copy your form endpoint ID

2. **Configure Environment Variable**
   ```bash
   # In .env.local
   NEXT_PUBLIC_FORMSPREE_FORM_ID=your-formspree-form-id
   ```

3. **Form Configuration (Optional)**
   - Set up email notifications
   - Configure spam protection
   - Add custom thank you page
   - Set up integrations (Slack, Google Sheets, etc.)

### Features Implemented
- ✅ Professional contact form on `/contact` page
- ✅ Form validation and error handling
- ✅ Success/error states with user feedback
- ✅ Fields: Name, Email, Phone, Vehicle, Service Type, Message
- ✅ Mobile-responsive design

## 📊 Strapi CMS Integration

### Setup Steps

1. **Install Strapi**
   ```bash
   npx create-strapi-app@latest autoworks-cms --quickstart
   cd autoworks-cms
   npm run develop
   ```

2. **Create Content Types**
   - **Service**: name, description, price, duration, image, featured
   - **Testimonial**: name, rating, comment, vehicle, service, featured
   - **Blog Post**: title, content, excerpt, image, publishedAt, author

3. **Configure API Permissions**
   - Go to Settings → Roles → Public
   - Enable find and findOne for all content types

4. **Environment Configuration**
   ```bash
   # In .env.local
   NEXT_PUBLIC_STRAPI_URL=http://localhost:1337
   STRAPI_API_TOKEN=your-api-token
   ```

### API Integration Points
- ✅ Services data with fallback to default services
- ✅ Testimonials for homepage and about page
- ✅ Blog posts for content marketing
- ✅ Image handling with Strapi media library

## 🔧 Development Workflow

### Local Development
1. Start Next.js development server: `npm run dev`
2. Start Strapi (if used): `cd autoworks-cms && npm run develop`
3. Configure environment variables in `.env.local`

### Testing Integrations
1. **Calendly**: Visit `/appointments` and test booking flow
2. **Formspree**: Visit `/contact` and test form submission
3. **Strapi**: Verify API responses and fallback data

### Production Deployment
1. Deploy Next.js app to Vercel/Netlify
2. Deploy Strapi to Heroku/Railway/VPS
3. Update environment variables in production
4. Test all integrations in production environment

## 🚀 Deployment Checklist

- [ ] Calendly account configured with proper availability
- [ ] Formspree form created and tested
- [ ] Strapi CMS deployed (if using)
- [ ] Environment variables set in production
- [ ] All integrations tested in production
- [ ] SSL certificates configured
- [ ] Contact information updated in constants.ts
- [ ] Google Analytics/tracking added (optional)

## 📞 Support & Maintenance

### Regular Tasks
- Update service pricing in Strapi or constants.ts
- Review and respond to form submissions
- Update Calendly availability as needed
- Monitor integration uptime and performance

### Troubleshooting
- Check environment variables are correctly set
- Verify external service status pages
- Review browser console for JavaScript errors
- Test form submissions and booking flows regularly

For technical support, refer to the main README.md or contact the development team.