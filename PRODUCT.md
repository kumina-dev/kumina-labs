# Kumina Labs

## Current promise

Kumina Labs gives small businesses a clear, credible website they control when social media is currently doing the job of a business site. The studio also builds and validates focused web products, beginning with Paper.

## Primary audience

- Small businesses in Finland without a website
- Finnish businesses using Instagram or Facebook as their main online presence
- Small English-speaking businesses that need the same focused service
- Early testers who want a calm, local-first writing tool for Paper

## First service offer

A personalized, responsive business website built around the business rather than a generic template. The first release explains the service and fit, shows the process, introduces Paper as a Kumina Labs product, and gives visitors a direct contact path.

## Product structure

- `/` — English-first Kumina Labs studio page
- `/fi` — Finnish Kumina Labs studio page
- `/paper` — English Paper product page
- `/fi/paper` — Finnish Paper product page
- `/privacy` and `/fi/privacy` — locale-specific privacy notices

## Contact system

- Custom form UI and API route
- Server-side validation, honeypot, timing check, URL/repetition checks, and basic rate limiting
- Supabase stores enquiries as the source of truth
- Resend sends a notification to `ville.syrjala@protonmail.com`
- The visitor's email is set as `reply_to`; it is never used as the sender
- A direct email link remains available as a fallback
- No autoresponse until a sending domain has been verified

## Constraints

- English first, with complete Finnish support
- Main market: Finland
- No dependency on a hosted form product such as Formspree
- No paid feature or large product surface before demand is demonstrated
- Paper stays focused on fast capture, offline-first use, search, and export

## Validation evidence

No market validation has been recorded yet. The website enquiry form and Paper waitlist are the first demand signals to collect.

## Next validation step

Publish the bilingual site, contact 10–15 suitable Finnish small businesses with weak or social-only web presences, and record replies, calls, and qualified enquiries. In parallel, recruit a small Paper testing group through the waitlist before expanding its feature set.
