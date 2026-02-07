# Implementation Notes — What Was Done and Why

This document explains every change made for products search/filter, 404 handling, SEO, security, performance, favicon, animations, and README, so you can learn from and maintain the codebase.

---

## 1. Products: Search and Category Filter

### Goal

- **Search bar**: Results must match **product name**, **category**, or **features**. For terms like “Red”, “Latex”, or “Gloves”:
  - “Red” → products whose name (or category/features) contains “Red” (e.g. “RED Nitrile”).
  - “Latex” → only Latex-related products, not Nitrile or Vinyl.
  - “Gloves” → all products in the Gloves category (or that mention gloves in name/features).
- **Left sidebar**: Filter **by category only** (e.g. Gloves, Masks). Subcategories (e.g. Latex under Gloves) filter by that type within the selected category.

### Where it lives

- `app/products/ProductsClient.tsx` — client component that fetches products, reads URL params, and applies filters + pagination.

### How it works

1. **URL as source of truth**  
   `search`, `category`, `sub`, and `page` come from `useSearchParams()`. So “Search” updates the URL, and back/forward or shared links work.

2. **Category filter (sidebar)**  
   - `matchesCategory`: `category === "All"` or `product.category === category`.  
   - So the sidebar filters **only by category**; no search logic here.

3. **Sub filter (e.g. “Latex” under Gloves)**  
   - When user clicks a subcategory, `sub` is set (e.g. `"Latex"`).  
   - `matchesSub`: product name or any feature contains `sub` (case-insensitive).  
   - Combined with category, this gives “Gloves + Latex” = only latex gloves.

4. **Search bar**  
   - `productMatchesSearch()`:
     - Normalizes search to trimmed lowercase.
     - Includes product if **name**, **category**, or **features** contain the search term.
     - **Mutually exclusive types**: For “latex”, “nitrile”, “vinyl” we treat them as product types. If the search term is one of these, we **exclude** products that contain one of the **other** types in name or features. So “Latex” won’t show “Nitrile” or “Vinyl” products.

5. **Sync input with URL**  
   A `useEffect` updates the search input value when `searchParams` change (e.g. back button or shared link), so the input always reflects the current URL.

### Code pieces you can reuse

- `textContains(haystack, needle)` — case-insensitive substring.
- `productMatchesSearch(product, searchNorm)` — one place that encodes “search by name/category/features” and “exclude other types when searching for latex/nitrile/vinyl”.
- `MUTUALLY_EXCLUSIVE_TYPES` — easy to extend if you add more product types later.

---

## 2. 404 and NotFound Component

### Goal

Any invalid or unwanted route (e.g. `/foo`, deleted page) should show your custom **NotFound** design, not the default Next.js 404.

### How Next.js handles 404

- Next.js App Router looks for a **root** `app/not-found.tsx`.
- When a route doesn’t match any `page.tsx`, or when you call `notFound()` from `next/navigation`, Next.js renders that file.
- A folder like `app/[not-found]/page.tsx` is just a route at `/not-found`, not the global 404 handler.

### What was done

- **Created** `app/not-found.tsx` that only renders your existing `NotFound` component from `components/NotFound.tsx`.
- No UI change: same layout, same “Go back to homepage” and image. Only the wiring is centralised.

### Result

- Visiting a non-existent path (e.g. `/some-bad-url`) or calling `notFound()` in any page shows your custom 404 page.
- One place to change 404 content in the future: `components/NotFound.tsx`.

---

## 3. SEO: Metadata and Favicon

### Goal

- Strong, consistent metadata for Google and social sharing.
- Favicon and app icons = ARQA logo.
- No UI/layout changes.

### Where

- `app/layout.tsx` — `metadata` export and `metadataBase`.
- `public/manifest.webmanifest` — PWA manifest with name, theme, icons.

### What was added

1. **metadataBase**  
   `new URL(siteUrl)` so all relative URLs in metadata become absolute. `siteUrl` comes from `process.env.NEXT_PUBLIC_SITE_URL` (e.g. `https://arqamedical.com`). Set this in production.

2. **title**  
   - `default`: “ARQA Medical | Premium Medical Supplies & Healthcare Products”.
   - `template`: “%s | ARQA Medical” so child pages can set `title: "Contact"` and get “Contact | ARQA Medical”.

3. **description**  
   One clear sentence about ARQA and medical supplies for Egypt and beyond.

4. **keywords**  
   Array of terms (medical supplies, healthcare, Egypt, gloves, masks, etc.) to help search engines.

5. **authors, creator, publisher**  
   Set to ARQA Medical for clarity and trust.

6. **openGraph**  
   - `type`, `locale`, `url`, `siteName`, `title`, `description`, `images` (ARQA logo).
   - Used when the site is shared on Facebook, LinkedIn, etc.

7. **twitter**  
   - `card`, `title`, `description` for Twitter cards.

8. **robots**  
   - `index: true`, `follow: true`, and same for `googleBot`, so search engines are allowed to index and follow links.

9. **icons**  
   - `icon`, `shortcut`, `apple` all point to `/ARQA Logo.svg` (your logo as favicon and app icon).
   - Browsers that support SVG favicons will use it; you can add a fallback `favicon.ico` in `public/` or `app/` if needed.

10. **manifest**  
    - `manifest: "/manifest.webmanifest"` so the manifest is linked from the document.

### manifest.webmanifest

- **name**, **short_name**, **description** — for “Add to Home Screen” and PWA.
- **theme_color**, **background_color** — match your brand (e.g. dark teal).
- **icons** — ARQA logo again.
- **start_url**, **display** — standard PWA fields.

### What you should do

- Set `NEXT_PUBLIC_SITE_URL` in production to your real domain.
- Optionally add per-page `metadata` in pages that need custom titles/descriptions (e.g. Products, About, Contact).

---

## 4. Security Headers

### Goal

Harden the site with standard HTTP security headers without changing the UI.

### Where

- `next.config.ts` → `async headers()`.

### Headers added

| Header | Value | Purpose |
|--------|--------|--------|
| `X-Frame-Options` | `DENY` | Prevents the site from being embedded in iframes (clickjacking). |
| `X-Content-Type-Options` | `nosniff` | Stops the browser from guessing MIME types; reduces certain XSS/upload risks. |
| `Referrer-Policy` | `strict-origin-when-cross-origin` | Limits how much referrer info is sent to other sites. |
| `Permissions-Policy` | `camera=(), microphone=(), geolocation=()` | Disables camera, microphone, geolocation for this origin (you can relax if you add features that need them). |

All are applied to `source: "/(.*)"` so every response gets them.

### Optional next steps

- Add **Content-Security-Policy** if you want to restrict scripts/styles (requires tuning for Sanity, Cloudinary, etc.).
- Use **Strict-Transport-Security** (HSTS) on the server or at the host (e.g. Vercel) for HTTPS-only.

---

## 5. Framer Motion Animations

### Goal

Add subtle, professional motion (fade-in, light slide) so the site feels dynamic without being distracting for a medical brand. No layout or style changes beyond the animation itself.

### Dependencies

- **framer-motion** added to `package.json`.

### New files

1. **lib/motion.ts**  
   Reusable variants:
   - `fadeInUp` — opacity 0→1, y 16→0 (gentle slide up).
   - `fadeIn` — opacity only.
   - `staggerContainer` — for future staggered children.
   - `defaultTransition` — one easing/duration to keep animations consistent.

2. **components/FadeInSection.tsx**  
   - Client component that wraps children in a `motion.div`.
   - `initial="hidden"` (opacity 0, y 20), `whileInView="visible"` (opacity 1, y 0).
   - `viewport={{ once: true, margin: "-40px" }}` so the animation runs when the section is near the viewport and only once per scroll.
   - Accepts `className` so it can replace the outer wrapper of a section without changing the rest of the markup.

### Where animations were applied

1. **Hero** (`components/Hero.tsx`)  
   - The inner content div (with headline and buttons) is wrapped in `<motion.div>` with `fadeInUp`: on load, content fades in and moves up slightly.
   - “use client” was added because Framer Motion runs on the client.

2. **Categories, Why, Featured**  
   - Each section’s **outer** wrapper was replaced by `<FadeInSection className="...">` so the whole section fades in and moves up a bit when it enters the viewport.
   - No change to inner structure or styles.

### Why this approach

- **Centralised variants** in `lib/motion.ts` make it easy to tweak timing/easing site-wide.
- **FadeInSection** keeps “animate when in view” logic in one place; you can wrap more sections the same way.
- **viewport.once** avoids repeated animation on scroll back up, which keeps the experience calm.

---

## 6. README

### Goal

A single, professional README for GitHub that describes the project, stack, and how to run it, without duplicating this implementation doc.

### What’s in README.md

- **Project name and short description** — ARQA Medical and what the site is for.
- **Overview** — Main sections (Home, Products, Knowledge, About, Contact, 404) and high-level features (SEO, performance, security, animations).
- **Tech stack** — Next.js, TypeScript, Sanity, Tailwind, Radix/shadcn, Framer Motion, fonts.
- **Getting started** — Clone, install, env vars, dev/build/start/lint.
- **Project structure** — Short tree of `app/`, `components/`, `sanity/`, `lib/`, `public/`, config.
- **Products** — How search and category/sub filters work (aligned with the behaviour above).
- **SEO, security, performance** — Short summary and pointer to layout + next.config.
- **Sanity** — Where content lives and that Studio is used to manage it.
- **Deployment** — Build/run and env vars reminder.
- **License/contact** — Placeholder for your policy and contact.

You can extend it with env examples, testing, or contribution guidelines later.

---

## Quick reference: files touched

| Area | Files |
|------|--------|
| Products search/filter | `app/products/ProductsClient.tsx` |
| 404 | `app/not-found.tsx` (new), `components/NotFound.tsx` (unchanged) |
| SEO & favicon | `app/layout.tsx`, `public/manifest.webmanifest` (new) |
| Security | `next.config.ts` |
| Animations | `lib/motion.ts` (new), `components/FadeInSection.tsx` (new), `components/Hero.tsx`, `components/Categories.tsx`, `components/Why.tsx`, `components/Featured.tsx` |
| Docs | `README.md`, `IMPLEMENTATION.md` (this file) |
| Deps | `package.json` (framer-motion added) |

---

## Summary

- **Products**: Search uses name/category/features and type-exclusion for Latex/Nitrile/Vinyl; category sidebar filters by category only; URL and input stay in sync.
- **404**: All “not found” routes use your `NotFound` component via `app/not-found.tsx`.
- **SEO**: Rich metadata, Open Graph, Twitter, robots, ARQA favicon/icons, and manifest.
- **Security**: Four standard headers in `next.config.ts`.
- **Animations**: Light fade-in and slide with Framer Motion on Hero and three sections, driven by shared variants and `FadeInSection`.
- **README**: One place for project description and setup on GitHub.

No intentional changes were made to the existing visual design or layout; only behaviour, metadata, headers, and optional motion were added or refined.
