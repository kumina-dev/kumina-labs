begin;

-- Both tables live in the exposed public schema, so RLS must be enabled.
alter table public.contact_inquiries
  enable row level security;

alter table public.waitlist_submissions
  enable row level security;

-- The browser must not access either table directly.
revoke all privileges
  on table public.contact_inquiries
  from public, anon, authenticated;

revoke all privileges
  on table public.waitlist_submissions
  from public, anon, authenticated;

-- The server-side Supabase secret key operates as service_role.
grant usage on schema public to service_role;

grant select, insert, update, delete
  on table public.contact_inquiries
  to service_role;

grant select, insert, update, delete
  on table public.waitlist_submissions
  to service_role;

commit;
