# BPS Industries Equipment — Catalog Website

A responsive, SEO-ready catalog website built with Next.js (App Router),
Tailwind CSS, shadcn-style UI components, GSAP, and Lenis smooth scroll.

This is **not an e-commerce store** — there's no cart or checkout. Visitors
browse products and categories, then send an enquiry (via a form, WhatsApp,
phone, or email) and your sales team quotes them directly.

All content is currently **dummy/placeholder data** for a sample business
("BPS Industries Equipment", an industrial equipment supplier). Replace it
with your real business details — see "Editing your content" below.

## 1. Install & run

```bash
npm install
npm run dev
```

Open http://localhost:3000

## 2. Set your real contact details (.env.local)

Open `.env.local` in the project root — it already has dummy values filled
in so the site runs immediately. Update these when you're ready to go live:

```
NEXT_PUBLIC_SITE_URL=https://www.yourdomain.com
NEXT_PUBLIC_PHONE_DISPLAY=+91 98765 43210
NEXT_PUBLIC_WHATSAPP_NUMBER=919876543210     # country code + number, no + or spaces
NEXT_PUBLIC_CONTACT_EMAIL=sales@yourdomain.com
WEB3FORMS_ACCESS_KEY=                         # see step 3
```

Restart `npm run dev` after changing this file.

## 3. Make the enquiry form actually send emails

The contact form and every product's "Send enquiry" button post to
`/api/contact`, which relays submissions to **Web3Forms** — a free service
that emails form submissions straight to your inbox. No database or email
server needed.

1. Go to https://web3forms.com
2. Enter the email address where you want enquiries delivered
3. Copy the access key it gives you
4. Paste it into `.env.local` as `WEB3FORMS_ACCESS_KEY=your-key-here`
5. Restart the dev server

Until you add a key, submissions are accepted (so the UI works end-to-end)
and logged to your terminal instead of emailed — useful for testing.

## 4. Editing your content — no code required

Everything you'll want to update regularly lives in `src/data/`:

| File              | What it controls                                              |
| ----------------- | ------------------------------------------------------------- |
| `siteConfig.js`   | Business name, tagline, description, address, hours, socials  |
| `categoryData.js` | The 6 product categories (name, description, icon)            |
| `productData.js`  | Every product: name, category, specs, features, description   |
| `homeData.js`     | Homepage hero text, highlights, featured picks, process steps |
| `aboutData.js`    | About page story, values, stats                               |

**To add a new product:** open `productData.js`, copy an existing product
object, give it a unique `slug`, and fill in the fields. It will
automatically appear in `/products`, its category page, and get its own
detail page at `/products/your-slug`.

**To add a new category:** add an entry to `categoryData.js` with a unique
`slug`. Pick an `icon` name from the ones already mapped in
`src/components/shared/CategoryIcon.jsx` (or add a new lucide-react icon
there).

**Product photos:** products currently show a generated placeholder graphic
(an icon on a technical-drawing background) instead of real photos — see
`src/components/shared/ProductVisual.jsx`. Swap this out for real product
images (e.g. `next/image` pointing at files in `/public/products/`) whenever
you have photography ready.

## 5. Project structure

```
src/
  app/                    Pages (App Router)
    page.js               Home
    about/page.js
    contact/page.js
    categories/page.js
    products/page.js      Catalog with category filter + search
    products/[slug]/      Product detail page (dynamic route)
    api/contact/route.js  Enquiry form backend (Web3Forms relay)
    sitemap.js            Auto-generated sitemap.xml
    robots.js             Auto-generated robots.txt
  components/
    layout/               Navbar, Footer, smooth-scroll provider
    shared/                Product/category cards, enquiry form + dialog,
                           WhatsApp button, animations
    ui/                    Reusable primitives (button, input, dialog, etc.)
  data/                   Edit this folder to update site content
  lib/utils.js
```

## 6. SEO

- Per-page title and meta description via Next's Metadata API
- Open Graph tags
- JSON-LD structured data (Organization on every page, Product on detail pages)
- Auto-generated sitemap.xml and robots.txt (src/app/sitemap.js, robots.js)
- Semantic headings and breadcrumb navigation on product pages

Once `NEXT_PUBLIC_SITE_URL` is set to your real domain, the sitemap and
canonical URLs update automatically.

## 7. Deploying

This is a standard Next.js app — deploy it to Vercel, Netlify, or any Node
hosting:

```bash
npm run build
npm run start
```

Remember to set the same environment variables from `.env.local` in your
hosting provider's dashboard (Vercel: Project Settings -> Environment Variables).

## Tech stack

Next.js 16 (App Router), Tailwind CSS v4, Radix UI primitives (shadcn-style
components), GSAP (hero entrance + count-up stats), Lenis (smooth scroll),
Sonner (toast notifications), Web3Forms (enquiry form delivery).
