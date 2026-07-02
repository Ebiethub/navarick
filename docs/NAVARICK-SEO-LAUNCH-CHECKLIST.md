# NAVARICK SEO Launch Checklist

Phase 23 adds the SEO, metadata, social preview, sitemap, robots, canonical URL, structured data, and 404 foundations for launch.

## Completed

- Metadata defaults added through `lib/seo.ts`.
- Page titles and meta descriptions added for Home, Work, Services, About, Contact, and dynamic case-study pages.
- Canonical URLs added for static pages and dynamic project pages.
- Open Graph metadata added with image dimensions.
- Twitter Card metadata added with `summary_large_image`.
- Generated default social preview route added at `/opengraph-image`.
- Sitemap generation added for static pages and published project pages.
- Robots configuration allows normal crawling and references `/sitemap.xml`.
- JSON-LD added for Organization / ProfessionalService and WebSite on the homepage.
- Breadcrumb JSON-LD added to Work, Services, About, Contact, and project pages.
- CreativeWork JSON-LD added to dynamic project pages.
- Premium 404 page copy added with Return Home and View Work actions.

## Required Launch Assets

- Final Open Graph artwork: recommended 1200 x 630 PNG.
- Optional static OG asset path if preferred: `/public/images/og/navarick-og-default.png`.
- `favicon.ico`.
- `app/icon.svg` or `app/icon.png`.
- `app/apple-icon.png` or `public/apple-touch-icon.png`.
- Manifest icons if a web app manifest is added.

## Domain Requirement

- Confirm the final production domain before deployment.
- Set `NEXT_PUBLIC_SITE_URL` to the approved domain in production.
- `.env.example` currently documents `NEXT_PUBLIC_SITE_URL=https://navarickstudio.com`.

## Manual Checks Before Deployment

- Open `/sitemap.xml` and confirm all public routes are present.
- Open `/robots.txt` and confirm the sitemap URL uses the final domain.
- Inspect page source for canonical, Open Graph, Twitter, and JSON-LD output.
- Test social previews with LinkedIn, Facebook, and X/Twitter card validators after deployment.
- Confirm final favicon and Apple touch icon assets render in browsers and mobile save flows.
- Confirm no unpublished project pages appear in the sitemap.
