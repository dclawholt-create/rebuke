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
