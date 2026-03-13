# Rebuke Coffee

A sleek, premium coffee storefront concept for **Rebuke Coffee**, a brand run by **I Am Church** to sell coffee and support ministry fundraising.

## Stack

- Next.js 16
- React 19
- Tailwind CSS 4
- Supabase-ready API routes

## Included

- Premium landing page with an Apple-inspired modern layout
- Expanded mock catalog with six coffee products
- Product detail pages at `/catalog/[slug]`
- Catalog page at `/catalog`
- Mock cart preview section for checkout direction
- Newsletter/launch signup form
- `GET /api/products` route
- `POST /api/newsletter` route
- `supabase/schema.sql` starter schema

## Run locally

```bash
npm install
npm run dev
```

Then open <http://localhost:3000>

## Supabase setup

1. Create a Supabase project
2. Copy `.env.example` to `.env.local`
3. Add your project URL and anon key
4. Run `supabase/schema.sql` in the Supabase SQL editor

## Suggested next steps

- Add real product photography
- Add a real cart and checkout flow using Stripe
- Add a Supabase admin flow for products
- Add church partner application forms
- Add testimonials and ministry stories
