create table if not exists public.contact_inquiries (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null
    check (char_length(name) between 1 and 100),
  email text not null
    check (char_length(email) between 3 and 254),
  business_name text
    check (
      business_name is null
      or char_length(business_name) <= 120
    ),
  current_website text
    check (
      current_website is null
      or char_length(current_website) <= 500
    ),
  message text not null
    check (char_length(message) between 1 and 3000),
  locale text not null default 'en'
    check (locale in ('en', 'fi')),
  notification_status text not null default 'pending'
    check (
      notification_status in (
        'pending',
        'sent',
        'failed',
        'not_configured'
      )
    ),
  notification_sent_at timestamptz
);

alter table public.contact_inquiries
  enable row level security;

create index if not exists
  contact_inquiries_created_at_idx
on public.contact_inquiries (created_at desc);

create index if not exists
  contact_inquiries_notification_status_idx
on public.contact_inquiries (
  notification_status,
  created_at desc
);
