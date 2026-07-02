# NAVARICK Launch Guide

This guide prepares NAVARICK for a Vercel production deployment. The site is feature-complete; remaining launch work is configuration, verification, and business-specific values.

## Environment Variables

Set these in Vercel Project Settings before production deployment:

```env
NEXT_PUBLIC_SITE_URL=https://your-production-domain.com
NEXT_PUBLIC_CONTACT_EMAIL=hello@your-production-domain.com
CONTACT_EMAIL_PROVIDER=resend
CONTACT_EMAIL_TO=hello@your-production-domain.com
CONTACT_EMAIL_FROM="NAVARICK <hello@your-production-domain.com>"
RESEND_API_KEY=
GOOGLE_ANALYTICS_ID=
GOOGLE_SITE_VERIFICATION=
MICROSOFT_CLARITY_ID=
PLAUSIBLE_DOMAIN=
```

Notes:
- `NEXT_PUBLIC_SITE_URL` drives canonical URLs, sitemap, robots, metadata, and JSON-LD.
- `NEXT_PUBLIC_CONTACT_EMAIL` is visible in the footer and legal pages.
- `RESEND_API_KEY` must remain server-side and must never be committed.
- Analytics scripts render only when the matching environment variable exists.

## Domain Setup

1. Choose the final approved production domain.
2. Set `NEXT_PUBLIC_SITE_URL` to the exact HTTPS origin.
3. Connect the domain in Vercel.
4. Configure DNS records from Vercel.
5. Wait for SSL to become active.
6. Verify `/robots.txt`, `/sitemap.xml`, canonical tags, and JSON-LD use the final domain.

## Vercel Deployment

1. Import or connect the repository in Vercel.
2. Confirm the framework preset is Next.js.
3. Use the default build command: `npm.cmd run build` locally, `npm run build` in Vercel.
4. Configure all environment variables.
5. Deploy to preview first.
6. Smoke test preview routes: `/`, `/work`, `/services`, `/about`, `/contact`, `/privacy`, `/terms`.
7. Promote to production only after QA passes.

## Analytics Setup

Supported integrations are environment-gated:
- GA4: `GOOGLE_ANALYTICS_ID`.
- Google Search Console: `GOOGLE_SITE_VERIFICATION`.
- Microsoft Clarity: `MICROSOFT_CLARITY_ID`.
- Plausible: `PLAUSIBLE_DOMAIN`.

Cookie note:
- If GA4, Clarity, or another cookie-setting analytics provider is enabled in a jurisdiction requiring consent, add a lightweight consent banner before loading those scripts.
- Until analytics IDs are configured, no analytics scripts are rendered.

## Resend Setup

1. Verify the sender domain in Resend.
2. Set `CONTACT_EMAIL_FROM` to an address on the verified domain.
3. Set `CONTACT_EMAIL_TO` to the approved inbox.
4. Set `RESEND_API_KEY` in Vercel only.
5. Send a production test inquiry after deployment.
6. Confirm the recipient inbox receives the message and reply-to uses the client email.

## Google Workspace Setup

1. Confirm the official NAVARICK email address.
2. Configure MX records for Google Workspace.
3. Add SPF, DKIM, and DMARC records.
4. Use the same verified domain for Resend sender identity when possible.

## DNS Checklist

- Root domain points to Vercel.
- `www` domain redirects or resolves consistently.
- SSL certificate is active.
- Google Workspace MX records are active if email is hosted there.
- Resend SPF/DKIM records are active for email delivery.
- No stale preview or old hosting records conflict with production.

## Security Checklist

- Security headers are configured in `next.config.ts`.
- CSP allows the app, hero video, images, analytics providers, and Resend endpoint.
- `X-Frame-Options` is `DENY`.
- `X-Content-Type-Options` is `nosniff`.
- `Referrer-Policy` is `strict-origin-when-cross-origin`.
- `Permissions-Policy` blocks camera, microphone, geolocation, and payment.
- `Strict-Transport-Security` is enabled for production HTTPS.
- Contact API validates JSON input and throttles repeated submissions per client IP.
- `.env` remains uncommitted.
- Run `npm audit` before launch and resolve critical or high issues.

Current local audit note:
- `npm.cmd audit --audit-level=high` completed with no high or critical vulnerabilities.
- npm reports a moderate PostCSS advisory through Next. The suggested `npm audit fix --force` path would install a breaking Next version and should not be used blindly. Re-check after the next safe Next.js dependency update.

## Placeholder Audit

Confirm before production:
- Public contact email.
- Contact delivery inbox and sender.
- Business address and phone numbers in `data/site.ts`.
- Facebook/social URL in `data/site.ts`.
- Final production domain.
- Final favicon package.
- Final social preview artwork if replacing the generated `/opengraph-image`.
- Case-study placeholder text and `Details to be confirmed` client labels.
- Project years that currently display `Year to be confirmed`.

Do not invent missing business values. Either supply approved information or keep the placeholder documented.

## Final QA Checklist

- Home, Work, Services, About, Contact, Privacy, Terms, and 404 render correctly.
- Dynamic project pages render and metadata uses project-specific images.
- Contact form submits successfully in production.
- Footer legal links work.
- Sitemap contains all public pages and published projects.
- Robots references the final sitemap URL.
- No horizontal overflow at 320, 375, 390, 430, 768, 1024, 1280, 1440, and 1920 px.
- Chrome, Edge, Firefox, and Safari are manually smoke-tested.
- Hero video, motion, navigation, portfolio images, forms, and footer are checked.

## Post-Launch Monitoring

First hour:
- Confirm production health by loading all primary routes.
- Confirm no new Vercel function errors.
- Confirm contact form delivery.
- Confirm analytics events appear if analytics are enabled.
- Confirm Search Console verification.
- Confirm Core Web Vitals or Vercel Speed Insights once data is available.

First week:
- Review server errors.
- Review contact form deliverability.
- Review analytics for broken routes or unexpected exits.
- Re-run Lighthouse on Home, Work, Contact, and one case-study page.

## Rollback Considerations

- If launch breaks, use Vercel rollback to restore the previous deployment.
- If only analytics causes issues, remove the analytics env vars and redeploy.
- If email delivery fails, keep the site live and fix Resend configuration; the API has a safe fallback when delivery is not configured.
- If DNS fails, revert DNS to the previous host while investigating.
