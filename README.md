# ARQA Medical — Corporate Website

[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)](https://nextjs.org/)
[![Sanity](https://img.shields.io/badge/CMS-Sanity-000000?logo=sanity)](https://www.sanity.io/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](https://www.typescriptlang.org/)

Official website for **ARQA Medical Import & Export** — a trusted supplier of premium medical supplies and healthcare products for professionals across Egypt and the region.

---

## Overview

This repository contains the public-facing website for ARQA Medical. It is built with **Next.js 16** (App Router), **Sanity** as the headless CMS, and **Tailwind CSS** for styling. The site showcases the company’s product catalog, knowledge hub, certifications, and contact flows while keeping a professional, medical-appropriate design.

### Main features

- **Home**: Hero, product categories, trusted partners marquee, “Why ARQA”, featured products, product guides, testimonials, and expert CTA.
- **Products**: Searchable and filterable catalog (by name, category, and features) with category sidebar and pagination; product detail pages with images and specifications.
- **Knowledge Hub**: Articles and product guides with Sanity-backed content.
- **About**: Company story, mission & vision, numbers, certifications, and testimonials.
- **Contact**: Contact cards, inquiry form, and map.
- **404**: Custom not-found page for invalid or removed routes.
- **SEO & performance**: Centralized metadata, Open Graph, Twitter cards, security headers, and optional animations (Framer Motion).

---

## Tech stack

| Layer        | Technology |
|-------------|------------|
| Framework   | Next.js 16 (App Router) |
| Language   | TypeScript |
| CMS        | Sanity (content and product data) |
| Styling    | Tailwind CSS v4 |
| UI primitives | Radix UI, shadcn/ui-style components |
| Animations | Framer Motion |
| Fonts      | Poppins (headings), Geist (body) |

---

## Getting started

### Prerequisites

- **Node.js** 18+ (or 20+ recommended)
- **npm** (or yarn / pnpm)

### Installation

```bash
git clone https://github.com/your-org/arqa.git
cd arqa
npm install
```

### Environment variables

Create a `.env.local` in the project root (see `.env.example` if present). Typical variables:

- `NEXT_PUBLIC_SITE_URL` — Full site URL (e.g. `https://arqamedical.com`) for metadata and links.
- Sanity project ID and dataset (or `NEXT_PUBLIC_SANITY_*` as required by your Sanity setup).

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Build and production

```bash
npm run build
npm start
```

### Linting

```bash
npm run lint
```

---

## Project structure (high level)

```
arqa/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout, metadata, fonts
│   ├── not-found.tsx       # Global 404 (uses NotFound component)
│   ├── page.tsx           # Home
│   ├── about/
│   ├── products/          # Catalog + [product] detail
│   ├── knowledge/
│   ├── contact/
│   └── api/               # e.g. contact form handler
├── components/             # React components
│   ├── ui/                # Buttons, cards, inputs, sheet, etc.
│   ├── Hero.tsx, Categories.tsx, Featured.tsx, Why.tsx, …
│   ├── NotFound.tsx
│   └── FadeInSection.tsx  # Scroll-triggered fade-in
├── sanity/                # Sanity schema, queries, lib
│   ├── schemaTypes/
│   ├── queries/
│   └── lib/
├── lib/
│   ├── utils.ts
│   └── motion.ts          # Framer Motion variants
├── public/                # Static assets, ARQA logos, manifest
├── next.config.ts         # Images, security headers
└── package.json
```

---

## Products: search and filter behavior

- **Search bar**  
  Filters by **product name**, **category**, or **features**.  
  If the search term is a product type (e.g. *Latex*, *Nitrile*, *Vinyl*), results are limited to that type (e.g. “Latex” does not show Nitrile or Vinyl products).

- **Left sidebar (category)**  
  Filters **by category only** (e.g. Gloves, Masks, Thermometers).  
  Subcategories (e.g. Nitrile, Latex under Gloves) further narrow by that type in name/features.

- **URL**  
  State is reflected in query params (`search`, `category`, `sub`, `page`) so links and back/forward work as expected.

---

## SEO, security, and performance

- **Metadata**: Default title and description, Open Graph and Twitter cards, `metadataBase`, and optional per-page overrides in `app/layout.tsx` and page-level exports.
- **Icons / favicon**: ARQA logo set as favicon and app icons via `metadata.icons` and `public/manifest.webmanifest`.
- **Security headers** (in `next.config.ts`): `X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`.
- **Images**: Next.js `Image` and configured `remotePatterns` for Sanity/Cloudinary where used.

---

## Content management (Sanity)

Product and editorial content are managed in Sanity. Relevant schemas and fetch helpers live under `sanity/`. Run the Sanity Studio locally or use the deployed studio URL configured for the project.

---

## Deployment

Build and run with Node in production, or deploy to a platform that supports Next.js (e.g. Vercel, Node host). Ensure `NEXT_PUBLIC_SITE_URL` (and any Sanity env vars) are set in the deployment environment.

---

## License and contact

Proprietary to **ARQA Medical Import & Export**. For questions about the project or content, use the contact information on the website or your internal channels.
