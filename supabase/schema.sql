-- Legacy convenience setup file.
-- For shared-database / production use, prefer the migration files in `supabase/migrations/`.

create extension if not exists pgcrypto;

create table if not exists public.rebuke_products (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  name text not null,
  subtitle text,
  description text not null,
  long_description text not null,
  price text not null,
  size text not null,
  roast text not null,
  notes text[] not null default '{}',
  badge text,
  ministry_use text not null,
  palette text not null,
  sort_order integer not null default 0,
  is_active boolean not null default true,
  created_at timestamptz not null default now()
);

create index if not exists rebuke_products_is_active_sort_order_idx
  on public.rebuke_products (is_active, sort_order);

create table if not exists public.rebuke_newsletter_signups (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  source text not null default 'website',
  created_at timestamptz not null default now()
);

create index if not exists rebuke_newsletter_signups_created_at_idx
  on public.rebuke_newsletter_signups (created_at desc);

alter table public.rebuke_products enable row level security;
alter table public.rebuke_newsletter_signups enable row level security;

drop policy if exists "Public can read active rebuke products" on public.rebuke_products;
create policy "Public can read active rebuke products"
  on public.rebuke_products
  for select
  to anon, authenticated
  using (is_active = true);

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

insert into public.rebuke_products (
  slug,
  name,
  subtitle,
  description,
  long_description,
  price,
  size,
  roast,
  notes,
  badge,
  ministry_use,
  palette,
  sort_order
)
values
  ('rebuke-roast', 'Rebuke Roast', 'Flagship dark roast', 'Chocolate, cedar, and a clean finish for early sermon prep and long ministry nights.', 'The anchor product for the entire line. Rebuke Roast is deep, sturdy, and unmistakably bold without turning ashy. It is the bag you set on the counter when you want the room to feel awake, focused, and cared for.', '$18', '12 oz', 'Dark', array['Dark chocolate','Cedar','Burnt sugar'], 'Best seller', 'Perfect for sermon prep tables, early volunteer mornings, and men''s ministry gatherings.', 'from-[#5f3b2b] via-[#2f1b14] to-[#130d0b]', 1),
  ('upper-room-blend', 'Upper Room Blend', 'Balanced house blend', 'Smooth caramel body with citrus lift — built for hospitality tables, staff rooms, and Sunday teams.', 'This is the easy-reach house coffee. It tastes premium without being precious, and it works for the broadest range of people. If Rebuke Roast is the statement piece, Upper Room Blend is the dependable everyday ministry workhorse.', '$17', '12 oz', 'Medium', array['Caramel','Orange peel','Toasted almond'], 'Hospitality favorite', 'Ideal for Sunday hospitality, lobby coffee stations, and staff meetings.', 'from-[#8b5e34] via-[#47301d] to-[#1b120d]', 2),
  ('watch-and-pray-decaf', 'Watch & Pray Decaf', 'Late-night comfort', 'A richer decaf that keeps the ritual without the crash. Good for evenings, counseling, and second cups.', 'Most decaf feels like a concession. This one feels intentional. Watch & Pray Decaf keeps body and warmth in the cup so evening conversations, counseling sessions, and post-event wind-downs still feel dignified.', '$19', '12 oz', 'Medium-dark', array['Cocoa nib','Brown sugar','Soft smoke'], 'Evening pick', 'Built for counseling rooms, evening Bible studies, and second cups after sunset.', 'from-[#6b594c] via-[#342921] to-[#15110f]', 3),
  ('coram-deo-cold-brew', 'Coram Deo Cold Brew', 'Flashy cold brew release', 'Velvety and sweet with molasses depth — a summer launch built for youth nights and outdoor events.', 'Coram Deo is the cooler seasonal sibling in the lineup. It is designed for iced service, event carts, and high-traffic gatherings where presentation matters as much as flavor. It gives the brand a younger, sharper edge.', '$21', '16 oz', 'Cold brew', array['Molasses','Cherry cola','Cacao'], 'Seasonal drop', 'Great for youth events, summer conferences, and branded church pop-ups.', 'from-[#7f3b1d] via-[#331a12] to-[#10090a]', 4),
  ('loaves-and-fishes-espresso', 'Loaves & Fishes Espresso', 'Espresso-forward blend', 'Dense crema, cocoa finish, and a little citrus snap for cafés inside churches and partner ministries.', 'This one exists for churches with actual espresso service or ambitions to get there. It looks and feels premium, gives the catalog some technical legitimacy, and creates a product tier that feels more serious than basic drip coffee.', '$20', '12 oz', 'Espresso', array['Cocoa','Red fruit','Molten caramel'], 'Cafe tier', 'For church cafés, ministry training spaces, and partner venues wanting a stronger coffee identity.', 'from-[#4b2217] via-[#26110c] to-[#0f0908]', 5),
  ('manna-morning', 'Manna Morning', 'Bright breakfast roast', 'Honeyed sweetness with a crisp finish — approachable, cheerful, and easy to serve at scale.', 'Manna Morning broadens the line with a lighter expression that still feels grounded. It is the product for gift sets, newcomers, and anyone who wants the brand to feel warm and inviting instead of intense all the time.', '$16', '12 oz', 'Light-medium', array['Honey','Pear','Biscuit'], null, 'A natural fit for welcome gifts, women''s gatherings, and broad Sunday-morning appeal.', 'from-[#b3844b] via-[#5f4427] to-[#18110d]', 6)
on conflict (slug) do nothing;
