<p align="center">
  <img src="./public/kumina-mark.svg" width="72" height="72" alt="Kumina Labs">
</p>

<h1 align="center">Kumina Labs</h1>

<p align="center">
  Independent web studio and product lab in Finland.
</p>

<p align="center">
  <a href="https://paper-kumina.vercel.app">English</a>
  ·
  <a href="https://paper-kumina.vercel.app/fi">Suomeksi</a>
  ·
  <a href="https://paper-kumina.vercel.app/paper">Paper</a>
</p>

## About

Kumina Labs designs and builds personalized websites for small businesses that need a clearer and more credible online home—especially businesses currently relying on social media as their primary web presence.

The studio also develops focused software products, beginning with Paper: a private, fast and offline-first writing and notes tool.

This repository contains the Kumina Labs website and Paper's public product and waitlist pages. It does not contain the Paper application itself.

## Features

- English-first website with complete Finnish support
- Personalized website-service presentation
- Dedicated English and Finnish Paper pages
- Custom contact and Paper waitlist forms
- Supabase-backed enquiry and waitlist storage
- Email notifications through Resend
- Localized metadata, canonical URLs and language alternates
- Sitemap, robots configuration and social metadata
- Responsive layouts and accessible interactions
- No advertising or non-essential analytics cookies

## Routes

| Route | Description |
| --- | --- |
| `/` | English Kumina Labs landing page |
| `/fi` | Finnish Kumina Labs landing page |
| `/paper` | English Paper product page |
| `/fi/paper` | Finnish Paper product page |
| `/privacy` | English privacy notice |
| `/fi/privacy` | Finnish privacy notice |

## Technology

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- Supabase
- Resend
- Vercel

## Local development

Requirements:

- Node.js 20.9 or newer
- pnpm

Install the dependencies:

```bash
pnpm install
```

Create the local environment file:

```bash
cp .env.example .env.local
```

Fill in the required values and start the development server:

```bash
pnpm dev
```

The website will be available at [http://localhost:3000](http://localhost:3000).

## Environment variables

| Variable | Visibility | Purpose |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Public | Canonical website origin used by metadata, sitemap and robots |
| `NEXT_PUBLIC_SUPABASE_URL` | Public | Supabase project URL |
| `SUPABASE_SERVICE_ROLE_KEY` | Server only | Writes contact enquiries and waitlist submissions |
| `RESEND_API_KEY` | Server only | Sends contact-form notifications |
| `CONTACT_FROM_EMAIL` | Server only | Optional verified sender used for contact notifications |

Never expose `SUPABASE_SERVICE_ROLE_KEY` or `RESEND_API_KEY` through a variable beginning with `NEXT_PUBLIC_`.

## Database setup

Run these files in the Supabase SQL editor:

1. `supabase/contact-inquiries.sql`
2. `supabase/waitlist-submissions.sql`

Row Level Security is enabled without public access policies. Form submissions are written by the server using the Supabase service-role key.

## Contact email delivery

Contact enquiries are stored in Supabase before an email notification is sent through Resend.

The notification uses a Kumina Labs address as its sender. The visitor's email address is assigned to `Reply-To`, allowing a normal email reply without impersonating the visitor's domain.

The notification recipient is configured in `lib/site.ts`.

## Available commands

```bash
pnpm dev
pnpm lint
pnpm build
pnpm start
```

Run both checks before deployment:

```bash
pnpm lint
pnpm build
```

## Deployment

The repository is connected to Vercel through Git integration.

- Branch pushes create preview deployments.
- Changes merged into the production branch deploy to production.
- Production environment variables are managed in Vercel.
- `NEXT_PUBLIC_SITE_URL` must contain the final canonical production URL.
- Supabase tables and the Resend sender must be configured before testing the forms.

## Project status

The website service is preparing for launch.

Paper is an early-stage product with a waitlist open for potential users and testers.

## License

Copyright © 2026 Ville Syrjälä. All rights reserved.

This is a proprietary project. No permission is granted to copy, modify or distribute its source code.
