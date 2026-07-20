create table if not exists public.waitlist_submissions (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),

  email text not null
    check (char_length(email) between 3 and 254),

  current_tool text
    check (
      current_tool is null
      or char_length(current_tool) <= 120
    ),

  pain text
    check (
      pain is null
      or char_length(pain) <= 1000
    ),

  tester_intent text not null
    check (
      tester_intent in (
        'Yes, I''d like to test it',
        'Maybe, send me updates first',
        'Not right now'
      )
    ),

  source text not null default 'landing-page',
  product text not null default 'paper'
    check (product = 'paper'),

  page text not null default 'paper'
    check (page in ('paper', 'fi-paper'))
);

alter table public.waitlist_submissions enable row level security;

create unique index if not exists waitlist_submissions_email_idx
  on public.waitlist_submissions (lower(email));

create index if not exists waitlist_submissions_created_at_idx
  on public.waitlist_submissions (created_at desc);
