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
- Prefixed shared-database tables: `rebuke_products` and `rebuke_newsletter_signups`
- Supabase migration files in `supabase/migrations/`

## Run locally

```bash
npm install
npm run dev
```

Then open <http://localhost:3000>

## Supabase setup

1. Create or choose your Supabase project
2. Copy `.env.example` to `.env.local`
3. Add your project URL and anon key
4. Prefer running the migration files in `supabase/migrations/`
5. Use `supabase/schema.sql` only as a convenience setup file if you are not using the CLI migration flow

## Shared database notes

This project is now safer to add to an existing church web app database because the storefront tables are prefixed:

- `rebuke_products`
- `rebuke_newsletter_signups`

That reduces naming collisions with your main church app while keeping everything in one Supabase project.

## Suggested next steps

- Add real product photography
- Add a real cart and checkout flow using Stripe
- Add a Supabase admin flow for products
- Add church partner application forms
- Add testimonials and ministry stories
