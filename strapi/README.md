# Strapi CMS Setup for AutoWorks

This directory contains the configuration and documentation for setting up Strapi CMS with the AutoWorks website.

## Quick Setup

1. Install Strapi globally:
```bash
npm install -g create-strapi-app
```

2. Create a new Strapi project:
```bash
npx create-strapi-app@latest autoworks-cms --quickstart
```

3. Start the development server:
```bash
cd autoworks-cms
npm run develop
```

4. Access the admin panel at `http://localhost:1337/admin`

## Content Types to Create

### Service
- **name** (Text, required)
- **description** (Rich Text, required) 
- **price** (Text, required)
- **duration** (Text, required)
- **image** (Media, optional)
- **category** (Text, optional)
- **featured** (Boolean, default: false)

### Testimonial
- **name** (Text, required)
- **rating** (Number, min: 1, max: 5, required)
- **comment** (Rich Text, required)
- **vehicle** (Text, optional)
- **service** (Text, optional)
- **featured** (Boolean, default: false)

### Blog Post
- **title** (Text, required)
- **content** (Rich Text, required)
- **excerpt** (Text, required)
- **image** (Media, optional)
- **publishedAt** (DateTime, required)
- **author** (Text, required)
- **category** (Text, optional)

## API Configuration

1. Go to Settings → Roles → Public
2. Enable the following permissions:
   - Service: find, findOne
   - Testimonial: find, findOne
   - Blog Post: find, findOne

## Environment Variables

Add to your `.env.local`:
```
NEXT_PUBLIC_STRAPI_URL=http://localhost:1337
STRAPI_API_TOKEN=your_api_token_here
```

## Integration with Next.js

The website includes utility functions in `src/lib/utils.ts` for:
- `getStrapiUrl()` - Generate Strapi API URLs
- `getStrapiImageUrl()` - Handle Strapi media URLs

Example API calls are implemented but will use fallback data until Strapi is configured.