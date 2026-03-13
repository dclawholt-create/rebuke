alter table public.rebuke_products enable row level security;
alter table public.rebuke_newsletter_signups enable row level security;

-- Public storefront reads only active coffee products.
drop policy if exists "Public can read active rebuke products" on public.rebuke_products;
create policy "Public can read active rebuke products"
  on public.rebuke_products
  for select
  to anon, authenticated
  using (is_active = true);

-- Public visitors can submit newsletter signups.
drop policy if exists "Public can insert rebuke newsletter signups" on public.rebuke_newsletter_signups;
create policy "Public can insert rebuke newsletter signups"
  on public.rebuke_newsletter_signups
  for insert
  to anon, authenticated
  with check (
    email is not null
    and position('@' in email) > 1
    and source in ('website', 'landing-page', 'wholesale-form')
  );

-- No public updates/deletes are granted. Service role remains unrestricted.
