<div align="center">

![ARQA Medical](public/ARQA%20Logo.svg)

# 🏥 ARQA Medical

**Premium Medical Supplies for Healthcare Professionals**

Corporate website for **ARQA Medical Import & Export** — trusted supplier of medical supplies, gloves, masks, thermometers, and healthcare products across Egypt and the region. Content is powered by Sanity CMS and updates live on every refresh after deployment.

![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Sanity](https://img.shields.io/badge/Sanity-000000?style=for-the-badge&logo=sanity&logoColor=white)

## 🌐 **LIVE PREVIEW**

[![View Live Site](https://img.shields.io/badge/View_Live_Site-1d4d4f?style=for-the-badge&logo=vercel&logoColor=white)](https://arqamedical.com/)

**👉 [https://arqamedical.com](https://arqamedical.com) 👈**

*Replace with your Vercel or production URL after deployment*

</div>

---

## 📋 Table of Contents

- [🤖 Introduction](#-introduction)
- [⚙️ Tech Stack](#️-tech-stack)
- [🔋 Features](#-features)
- [🔄 Dynamic Content (Sanity)](#-dynamic-content-sanity)
- [🤸 Quick Start](#-quick-start)
- [🕸️ Project Structure](#️-project-structure)
- [🔗 Environment Variables](#-environment-variables)
- [🚀 Deployment](#-deployment)
- [📈 SEO, Performance & Security](#-seo-performance--security)
- [🤝 Contributing](#-contributing)

---

## 🤖 Introduction

ARQA Medical’s website is built for healthcare professionals and partners who need:

- **Product catalog** — Search and filter by name, category, and features (e.g. “Latex”, “Gloves”, “RED Nitrile”).
- **Knowledge Hub** — Articles and product guides managed in Sanity.
- **Certifications & trust** — Quality standards, testimonials, and trusted-partner content.
- **Contact & quotes** — Inquiry form and contact information.

The site is **fully dynamic** for Sanity-backed sections: after you update content in Sanity and refresh the deployed site (e.g. on Vercel), changes appear immediately — no redeploy needed for content updates.

---

## ⚙️ Tech Stack

### Frontend
- **React 19** — UI with hooks and functional components
- **Next.js 16** — App Router, server and client components
- **TypeScript** — Type-safe development
- **Tailwind CSS v4** — Utility-first styling
- **ShadCN / Radix UI** — Accessible UI primitives
- **Framer Motion** — Subtle, professional animations

### Backend & Content
- **Sanity CMS** — Headless CMS for products, knowledge, certifications, testimonials, trusted companies
- **Next.js API Routes** — e.g. contact form handling

### Tooling
- **ESLint** — Linting
- **PostCSS** — CSS processing

---

## 🔋 Features

### 🎯 Core
- **Live Sanity content** — Certifications, Featured products, Knowledge cards, Product guides, Testimonials, Trusted companies (marquee) and Product catalog update on every page load/refresh after deployment.
- **Products** — Search by name/category/features; filter by category and subcategory (e.g. Gloves → Latex); pagination and shareable URLs.
- **Knowledge Hub** — Articles and product guides with Sanity-backed content.
- **About** — Story, mission & vision, numbers, certifications, testimonials.
- **Contact** — Contact cards, form, and map.
- **404** — Custom not-found page for invalid routes.

### 🎨 UX
- **Responsive** — Mobile-first layout.
- **Animations** — Light fade-in and scroll-triggered sections (Framer Motion).
- **Page loading** — Same loading screen on every route (first load and all navigations): small ARQA logo with a fade in/out animation until the page is ready.
- **Accessible** — Semantic HTML, ARIA where needed (e.g. sheet menu title).

### 📈 Quality
- **SEO** — Metadata, Open Graph, Twitter cards, favicon (ARQA logo), manifest, `metadataBase`.
- **Performance** — Next.js Image, dynamic rendering only where needed.
- **Security** — Headers: `X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`.

---

## 🔄 Dynamic Content (Sanity)

These parts read from Sanity and are **fetched on every request** (no static build-time snapshot):

| Section / Page        | Data source           | Behavior on refresh      |
|-----------------------|-----------------------|---------------------------|
| Home – Featured       | Sanity Products       | Updates immediately       |
| Home – ProdGuide      | Sanity Knowledge      | Updates immediately       |
| Home – MyMarquee      | Sanity Companies      | Updates immediately       |
| Home – Testimonials   | Sanity Testimonials   | Updates immediately       |
| About – Certifications| Sanity Certificates   | Updates immediately       |
| About – Testimonials  | Sanity Testimonials   | Updates immediately       |
| Knowledge – cards     | Sanity Knowledge      | Updates immediately       |
| Knowledge – guides    | Sanity Product guides | Updates immediately       |
| Products – list       | Sanity Products       | Updates immediately       |
| Product detail        | Sanity Products       | Updates immediately       |
| Knowledge detail      | Sanity Knowledge      | Updates immediately       |

This is achieved by using `export const dynamic = "force-dynamic"` on the relevant **pages** (not on components), so Vercel (or any Node server) runs the route on each request and fetches the latest data from Sanity.

---

## 🤸 Quick Start

### Prerequisites

- **Node.js** (v18 or higher)
- **npm** (v9 or higher)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-org/arqa.git
   cd arqa
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   Then fill in your Sanity project ID, dataset, and (optionally) `NEXT_PUBLIC_SITE_URL`. See [Environment Variables](#-environment-variables).

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**  
   Go to [http://localhost:3000](http://localhost:3000).

---

## 🕸️ Project Structure

```
arqa/
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Root layout, metadata, fonts
│   ├── loading.tsx             # Global loading UI (all pages)
│   ├── not-found.tsx            # Global 404
│   ├── page.tsx                 # Home (dynamic)
│   ├── about/
│   │   ├── loading.tsx          # Same loading UI for /about
│   │   └── page.tsx             # About (dynamic)
│   ├── products/
│   │   ├── loading.tsx          # Same loading UI for /products
│   │   ├── page.tsx             # Products list (dynamic)
│   │   ├── ProductsClient.tsx   # Client: search, filter, pagination
│   │   └── [product]/
│   │       ├── loading.tsx      # Same loading UI for /products/[id]
│   │       └── page.tsx        # Product detail (dynamic)
│   ├── knowledge/
│   │   ├── loading.tsx          # Same loading UI for /knowledge
│   │   ├── page.tsx             # Knowledge hub (dynamic)
│   │   └── [knowledge]/
│   │       ├── loading.tsx      # Same loading UI for /knowledge/[id]
│   │       └── page.tsx        # Article detail (dynamic)
│   ├── contact/
│   │   ├── loading.tsx          # Same loading UI for /contact
│   │   └── page.tsx
│   └── api/                     # e.g. contact form
├── components/
│   ├── ui/                      # Buttons, cards, inputs, sheet, etc.
│   ├── PageLoadingScreen.tsx    # Shared loading UI (logo + fade) for all routes
│   ├── Certifications.tsx       # Sanity: certificates
│   ├── Featured.tsx             # Sanity: featured products
│   ├── ProdGuide.tsx            # Sanity: knowledge preview
│   ├── MyMarquee.tsx            # Sanity: trusted companies
│   ├── Testimonials.tsx         # Sanity: testimonials
│   ├── KnowledgeCards.tsx       # Presentational
│   ├── ProductsGuide.tsx        # Presentational
│   ├── ProductCard.tsx          # Presentational
│   ├── NotFound.tsx
│   ├── FadeInSection.tsx        # Scroll animation
│   └── ...
├── sanity/
│   ├── schemaTypes/             # Content schemas
│   ├── queries/                 # GROQ queries
│   └── lib/                     # Client, getCertificates, getProducts, etc.
├── lib/
│   ├── utils.ts
│   └── motion.ts                # Framer Motion variants
├── public/                      # Static assets, manifest
├── next.config.ts               # Images, security headers
└── package.json
```

---

## 🔗 Environment Variables

Create a `.env.local` in the project root:

```env
# Sanity (required for content)
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
# Optional: NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01

# Site URL (for metadata and Open Graph; set in production)
NEXT_PUBLIC_SITE_URL=https://arqamedical.com
```

### Getting credentials

- **Sanity**: Create a project at [sanity.io](https://www.sanity.io) and use the project ID and dataset in the Sanity Studio and in `.env.local`.
- **NEXT_PUBLIC_SITE_URL**: Set to your production domain (e.g. Vercel URL) for correct canonical and social URLs.

---

## 🚀 Deployment

### Vercel (recommended)

1. Connect your repository to Vercel.
2. Add the same environment variables as in `.env.local` (Sanity IDs, `NEXT_PUBLIC_SITE_URL`, etc.).
3. Deploy; every push can trigger a new build. **Content updates in Sanity appear on refresh** — no redeploy needed.

### Other platforms

The app can run on any platform that supports Next.js (e.g. Netlify, Railway, Node server). Ensure `NEXT_PUBLIC_SITE_URL` and Sanity env vars are set in the deployment environment.

---

## 📈 SEO, Performance & Security

- **Metadata** — Default title and description, Open Graph and Twitter cards, `metadataBase`, favicon (ARQA logo), and `manifest.webmanifest`.
- **Performance** — Next.js Image, dynamic rendering only where Sanity content must be fresh; client-side fetching for products list and some sections.
- **Security** — In `next.config.ts`: `X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`.

Together this keeps the project in line with modern SEO, performance, and security expectations for a professional site.

---

## 🤝 Contributing

1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/your-feature`).
3. Commit changes (`git commit -m 'Add your feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a Pull Request.

---

<div align="center">

**ARQA Medical Import & Export**

*Premium medical supplies for healthcare professionals*

**🌐 [Live site](https://arqamedical.com)** • **⭐ Star this repo** • **🐛 [Report bug](https://github.com/your-org/arqa/issues)** • **💡 [Request feature](https://github.com/your-org/arqa/issues)**

</div>
