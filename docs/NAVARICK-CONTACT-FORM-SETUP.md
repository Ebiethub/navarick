# NAVARICK Contact Form Setup

## Current behaviour

The contact form is functional from the browser through `/api/contact`.

It currently:

- validates required fields on the client;
- validates the same schema again in the API route;
- returns field-level validation errors with a `422` response;
- returns a safe `202` fallback response when email delivery is not configured;
- sends real email through Resend when delivery variables are configured.

No form payload is persisted in the current implementation. If email delivery is not configured, the API returns an inquiry reference so submissions can be tested safely without pretending delivery happened.

## Required fields

- Name
- Email
- Project Type
- Budget Range
- Project Details

Company is optional.

## Environment variables

Use `.env.example` as the template.

```env
NEXT_PUBLIC_CONTACT_EMAIL=hello@navarick.com

CONTACT_EMAIL_PROVIDER=resend
CONTACT_EMAIL_TO=hello@navarick.com
CONTACT_EMAIL_FROM="NAVARICK <hello@navarick.com>"
RESEND_API_KEY=
```

`NEXT_PUBLIC_CONTACT_EMAIL` is safe to expose in the browser. The remaining values are server-only and must never be exposed to client components.

## Resend setup

Configure:

- `CONTACT_EMAIL_PROVIDER`: `resend`;
- `CONTACT_EMAIL_TO`: confirmed destination inbox;
- `CONTACT_EMAIL_FROM`: verified sender address in Resend, or use `RESEND_FROM_EMAIL`;
- `RESEND_API_KEY`: server-side Resend API key.

If `CONTACT_EMAIL_TO` is not set, the API uses `NEXT_PUBLIC_CONTACT_EMAIL` as the delivery inbox.

The API sends to Resend from `/api/contact` after validation succeeds. Keep the existing fallback response for preview and staging environments where delivery is intentionally disabled.

## Safety notes

- Do not commit real API keys.
- Do not hardcode private email addresses in source files.
- Do not log full inquiry payloads in production.
- Keep client validation as UX only; the API route remains the security boundary.
- Use verified outcome language only after real delivery and follow-up workflows are approved.
