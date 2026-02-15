# ARQA Medical — Full Project Guide (Student / Intern)

This document explains the project so you can understand **every major part**: Next.js, TypeScript, Sanity CMS, products flow, cards, and how data moves from CMS to the UI. Use it to master the codebase.

---

## Table of Contents

1. [High-Level Architecture](#1-high-level-architecture)
2. [Next.js App Router Basics](#2-nextjs-app-router-basics)
3. [TypeScript in This Project](#3-typescript-in-this-project)
4. [Sanity CMS — The Full Picture](#4-sanity-cms--the-full-picture)
5. [Products: From Sanity to Screen](#5-products-from-sanity-to-screen)
6. [Cards and Consistent Button Height](#6-cards-and-consistent-button-height)
7. [Other Sanity-Powered Sections](#7-other-sanity-powered-sections)
8. [Quick Reference: Important Files](#8-quick-reference-important-files)

---

## 1. High-Level Architecture

```
┌─────────────────┐     ┌──────────────────┐     ┌─────────────────┐
│   Browser       │     │   Next.js       │     │   Sanity CMS    │
│   (User)       │────▶│   (Vercel)      │────▶│   (Cloud)       │
│                 │     │                 │     │                 │
│  - Pages       │     │  - app/        │     │  - Products     │
│  - Components  │     │  - components/ │     │  - Knowledge    │
│                 │     │  - sanity/     │     │  - Certificates │
└─────────────────┘     └──────────────────┘     │  - Testimonials │
        │                          │             │  - Companies    │
        │                          │             └─────────────────┘
        │                          │
        └──────────────────────────┘
              HTML / React
```

- **Next.js** serves the site (pages, API routes, server and client components).
- **Sanity** holds all editable content (products, knowledge articles, certifications, etc.).
- **TypeScript** types the data and functions so we catch errors at compile time.

The site **fetches** data from Sanity (via the Sanity client and GROQ queries) and **renders** it in React components. No content is stored in the Next.js repo; it lives in Sanity’s dataset.

---

## 2. Next.js App Router Basics

### What is the App Router?

Next.js 13+ uses a file-based router under the `app/` folder. Each folder is a **route segment**, and special file names have meaning:

| File           | Meaning |
|----------------|--------|
| `page.tsx`     | The UI for that URL. |
| `layout.tsx`   | Wraps all pages under that segment (e.g. navbar + footer). |
| `not-found.tsx`| Shown when the route is not found (404). |
| `loading.tsx`  | Optional loading UI while the page is loading. |

### Routes in This Project

- `app/page.tsx`           → `/` (home)
- `app/about/page.tsx`     → `/about`
- `app/products/page.tsx`  → `/products`
- `app/products/[product]/page.tsx` → `/products/abc123` (dynamic: `[product]` is the ID)
- `app/knowledge/page.tsx` → `/knowledge`
- `app/knowledge/[knowledge]/page.tsx` → `/knowledge/some-id`
- `app/contact/page.tsx`   → `/contact`

When you visit `/products/xyz`, Next.js runs `app/products/[product]/page.tsx` and passes `params.product = "xyz"`.

### Server vs Client Components

- **Server component** (default): Runs only on the server. Can `await` data (e.g. Sanity), no `useState` or `useEffect`. No `"use client"`.
- **Client component**: Runs in the browser. Can use `useState`, `useEffect`, event handlers. Must have `"use client"` at the top.

Example: `Featured.tsx` is a **server** component — it does `await getFeaturedProducts()`. `ProductsClient.tsx` is a **client** component — it uses `useState`, `useEffect`, and `useSearchParams()` to handle search and filters in the browser.

### Why `export const dynamic = "force-dynamic"`?

By default, Next.js can **statically generate** a page at build time and reuse the same HTML. For pages that show Sanity content, we want **fresh data on every request**. So we set:

```ts
export const dynamic = "force-dynamic"
```

in the **page** file (e.g. `app/page.tsx`, `app/about/page.tsx`). That tells Next.js: “Do not cache this page; run it on every request.” So when you update content in Sanity and refresh the deployed site, you see the update without redeploying.

---

## 3. TypeScript in This Project

### Why TypeScript?

TypeScript adds **types** to JavaScript: you declare the shape of data (objects, function arguments, return values). The compiler then catches many bugs before runtime (e.g. typos in property names, wrong types passed to functions).

### How We Use It Here

**1. Props for components**

```ts
type MyCardProps = {
  id: any
  srcc?: string
  namee: string
  propp?: string[] | null
  typee: string
}

const MyCard = ({ id, srcc, namee, propp, typee }: MyCardProps) => { ... }
```

So every place that uses `<MyCard ... />` must pass the right props; otherwise you get a type error.

**2. Typing Sanity data**

We don’t always define a separate interface for every Sanity document; sometimes we use `any` for speed (e.g. `product: any`). For clarity you can add interfaces, e.g.:

```ts
type Product = {
  _id: string
  name: string
  category: string
  features: string[] | null
  images: { url: string }[]
}
```

**3. Function signatures**

```ts
export async function getProducts(search = "", category = ""): Promise<Product[]>
```

So callers know the function returns a Promise that resolves to an array of products.

### Key TypeScript Concepts You’ll See

- **`type` / `interface`** — Define the shape of an object.
- **`?`** — Optional property (e.g. `srcc?: string`).
- **`| null`** — Value can be `null` (e.g. `propp?: string[] | null`).
- **`Promise<T>`** — Async function that eventually returns `T`.
- **`as`** — Type assertion when you know more than TypeScript (e.g. `Icons[icon as keyof typeof Icons]`).

---

## 4. Sanity CMS — The Full Picture

Sanity is a **headless CMS**: it stores content and exposes it via an API. The “frontend” (this Next.js app) fetches that content and renders it. Editors use **Sanity Studio** to create and edit content.

### 4.1 How We Connect to Sanity

**Step 1: Environment variables** (`sanity/env.ts`)

- `NEXT_PUBLIC_SANITY_PROJECT_ID` — Which Sanity project.
- `NEXT_PUBLIC_SANITY_DATASET` — Which dataset (e.g. `production`).
- `NEXT_PUBLIC_SANITY_API_VERSION` — API version (e.g. `2026-02-04`).

`assertValue()` makes the build fail early if these are missing.

**Step 2: Sanity client** (`sanity/lib/client.ts`)

```ts
import { createClient } from 'next-sanity'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,  // we always get fresh data from the API
})
```

- `client` is used everywhere we need to talk to Sanity.
- `useCdn: false` means we skip Sanity’s CDN cache and hit the API directly (good for always-fresh content).

**Step 3: Fetching data**

We never call Sanity directly from the UI. We use **helper functions** that call `client.fetch()` with a **GROQ** query (Sanity’s query language). Example:

```ts
// sanity/lib/getProducts.ts
import { client } from "./client"

export async function getFeaturedProducts() {
  return await client.fetch(FeaturedProductQuery)
}
```

So: **env → client → get* functions → pages/components**.

### 4.2 GROQ (Sanity’s Query Language)

GROQ looks like JSON. You select which documents and which fields to return.

**Example: get all products**

```groq
*[_type == "Products"]{
  _id,
  name,
  category,
  features,
  images[]{ "url": asset->url }
}
```

- `*` — All documents.
- `[_type == "Products"]` — Filter: only documents with `_type` equal to `"Products"`.
- `{ _id, name, ... }` — Return only these fields.
- `images[]{ "url": asset->url }` — For each item in `images`, resolve the reference `asset` and take its `url`, and expose it as `url`.

So the **schema** (defined in `sanity/schemaTypes/`) tells Sanity what shape the data has; the **query** tells Sanity what to return. The result is plain JSON that we use in React.

### 4.3 Schemas (What Editors See and What We Get)

Schemas define the **content model**: which document types exist and which fields they have.

**Products** (`sanity/schemaTypes/Products.ts`)

- **Type name**: `Products` (so `_type == "Products"` in queries).
- **Fields**: `name`, `category`, `description`, `features` (array of strings), `images` (array of images), plus technical specs (material, thickness, etc.) in a fieldset.

So in the Studio, editors create “Products” with name, category, features, images, etc. In the app we fetch exactly those fields (and only what we need) via GROQ.

**Knowledge** (`sanity/schemaTypes/knowledge.ts`)

- **Type name**: `Knowledge`.
- **Fields**: `title`, `category`, `date`, `description`, `report` (rich text blocks), `img` (image).

Same idea: the schema defines the structure; queries pick the fields we need (e.g. `title`, `category`, `date`, `description`, `img` for cards; full `report` for the article page).

### 4.4 Where Queries Live

- **Queries**: `sanity/queries/` — e.g. `Products.ts`, `Knowledge.ts`, `Certificates.ts`. They export GROQ strings.
- **Fetchers**: `sanity/lib/` — e.g. `getProducts.ts`, `getKnowledge.ts`, `getCertificates.ts`. They `client.fetch(query)` and return the result.

So to add a new field to the product card, you would:

1. Add the field to the schema if it doesn’t exist.
2. Add the field to the GROQ query in `sanity/queries/Products.ts`.
3. Use the new field in the component (e.g. `ProductCard`).

---

## 5. Products: From Sanity to Screen

This is the most important flow to understand: how a product in Sanity becomes a card on the products page.

### 5.1 Data Flow (Summary)

1. User opens `/products` (or refreshes).
2. `app/products/page.tsx` renders. It’s a **server** page but it only renders `<ProductsClient />` (no direct Sanity call in the page).
3. **ProductsClient** is a **client** component. On mount it runs:
   ```ts
   useEffect(() => {
     getProducts().then(setProducts)
   }, [])
   ```
4. `getProducts()` (from `sanity/lib/getProducts.ts`) runs in the browser. It uses the Sanity client (with `NEXT_PUBLIC_*` env vars) to run the GROQ query and get all products.
5. Products are stored in React state: `products`.
6. **Filtering**: `useMemo` computes `filteredProducts` from `products` using:
   - **URL**: `search`, `category`, `sub` from `useSearchParams()`.
   - **Category**: left sidebar (e.g. “Gloves”) — filter by `product.category` or name containing category.
   - **Sub**: e.g. “Latex” under Gloves — filter by category or name containing `sub`.
   - **Search bar**: filter by name or category containing the search term.
7. **Pagination**: `paginatedProducts = filteredProducts.slice((page-1)*ITEMS_PER_PAGE, page*ITEMS_PER_PAGE)`.
8. Each item in `paginatedProducts` is rendered with **ProductCard**, which receives `id`, `srcc`, `namee`, `propp`, `typee` (maps to Sanity’s `_id`, first image url, `name`, `features`, `category`).

So: **Sanity → getProducts() → products state → filter + paginate → ProductCard**.

### 5.2 Product Detail Page

- URL: `/products/[product]` (e.g. `/products/abc123`).
- File: `app/products/[product]/page.tsx`.
- It’s a **server** component. It gets `params.product` (the ID), then calls `getSpecificProduct()` with a GROQ query that fetches **one** product by `_id`.
- That product’s full data (name, description, features, images, specs) is rendered on the page. So one product in Sanity → one product page in the app.

### 5.3 TypeScript and Products

- **From Sanity**: We get objects like `{ _id, name, category, features, images: [{ url }] }`. We often type them loosely (e.g. `any[]`) or with a minimal type.
- **ProductCard props**: We map Sanity fields to prop names (`namee`, `propp`, `typee`, etc.). The type `MyCardProps` / `mytypess` in ProductCard describes exactly what the component expects so the parent must pass the right shape.

---

## 6. Cards and Consistent Button Height

You asked for all cards (MyCard, ProductCard, ProductsGuide, KnowledgeCards) to have the **same height** and the **action button** (View Details / Read More) to sit at the **same vertical position** so the layout looks consistent.

### How We Achieve It

1. **Card container**  
   The outer card uses `h-full` (or is in a grid that gives equal height). So all cards in a row get the same total height.

2. **Content area is flex**  
   The content area inside the card is a **flex column**:
   - A **top block** (title, features, description, etc.) that can **grow and shrink**: we give it `flex-1 min-h-0` so it takes the remaining space but doesn’t force the card to grow.
   - A **bottom block** that is the **button**. We give the button wrapper `mt-auto` so it is always pushed to the **bottom** of that flex column.

So:
- **More text** → the top block grows, button stays at bottom.
- **Less text** → the top block shrinks, button still at bottom.
- **Same row** → all cards have the same height (grid/flex), so all buttons align at the same height.

### Code Pattern Used

```tsx
<div className="flex flex-col flex-1 min-h-0 ...">
  {/* Variable content: title, list, description */}
  <div className="flex-1 min-h-0 flex flex-col gap-2">
    <h3>...</h3>
    <ul>...</ul>
  </div>
  {/* Button always at bottom */}
  <Link className="mt-auto block">
    <Button>View Details</Button>
  </Link>
</div>
```

- **`flex-1`** — This div takes up remaining space.
- **`min-h-0`** — Allows the flex item to shrink below content size so the layout doesn’t overflow.
- **`mt-auto`** on the Link — Pushes the button to the bottom of the flex container.

This pattern is applied in **ProductCard**, **MyCard**, and **KnowledgeCards** (which already had `mt-auto`). **ProductsGuide** uses a similar idea with `flex-1 min-h-0` so that if you add a button later, it can sit at the bottom too; the description is also limited with `line-clamp-3` so long text doesn’t break the card height.

---

## 7. Other Sanity-Powered Sections

Same idea as products: a **get*** function fetches data with a GROQ query, and a component renders it.

| Section         | Fetcher               | Query / file          | Used in                    |
|-----------------|-----------------------|------------------------|----------------------------|
| Certifications  | `getCertificates()`   | `certificatesQuery`   | About page, Certifications |
| Featured        | `getFeaturedProducts()` | `FeaturedProductQuery` | Home, Knowledge page       |
| Knowledge cards | `getKnowledge()`      | `knowledgeQuery`      | Knowledge page, ProdGuide  |
| Product guides  | `getProductGuides()`  | (in queries)          | Knowledge page             |
| Testimonials    | `getTestimonials()`   | (in lib)              | Home, About (client)       |
| Marquee (logos) | `getCompanies()`      | (in lib)              | Home (client)              |

- **Server components** (e.g. Certifications, Featured, ProdGuide) call the getter in the component and `await` it; the page that contains them has `dynamic = "force-dynamic"` so data is fresh.
- **Client components** (Testimonials, MyMarquee, ProductsClient) call the getter inside `useEffect` so data is fetched in the browser after mount. Still fresh on every page load.

---

## 8. Quick Reference: Important Files

Use this as a map when you’re lost.

| What you want to understand      | Where to look |
|----------------------------------|---------------|
| Sanity connection & env          | `sanity/env.ts`, `sanity/lib/client.ts` |
| Product content model           | `sanity/schemaTypes/Products.ts` |
| Product queries                 | `sanity/queries/Products.ts` |
| Fetching products               | `sanity/lib/getProducts.ts` |
| Products page (list + filter)   | `app/products/page.tsx`, `app/products/ProductsClient.tsx` |
| Single product page             | `app/products/[product]/page.tsx` |
| Product card UI                 | `components/ProductCard.tsx`, `components/MyCard.tsx` |
| Knowledge content model         | `sanity/schemaTypes/knowledge.ts` |
| Knowledge queries & fetch       | `sanity/queries/Knowledge.ts`, `sanity/lib/getKnowledge.ts` |
| Card layout (button at bottom)  | `ProductCard.tsx`, `MyCard.tsx`, `KnowledgeCards.tsx`, `ProductsGuide.tsx` |
| Global layout & metadata         | `app/layout.tsx` |
| 404 page                        | `app/not-found.tsx`, `components/NotFound.tsx` |
| Dynamic rendering (fresh data)  | `export const dynamic = "force-dynamic"` in page files |

---

## Summary

- **Next.js** serves routes under `app/`; server components fetch data, client components handle interactivity and URL state.
- **TypeScript** types props and data so we catch mistakes early.
- **Sanity** stores content; we connect via **env → client → get* + GROQ** and render the JSON in React.
- **Products** flow: Sanity → `getProducts()` → state in ProductsClient → filter/paginate → ProductCard; detail page uses `getSpecificProduct()` with the ID from the URL.
- **Cards** use **flex + flex-1 + min-h-0 + mt-auto** so the action button stays at the same height across cards and the layout stays consistent.

Once you’re comfortable with this flow, you can add new Sanity types, new queries, and new components using the same patterns.
