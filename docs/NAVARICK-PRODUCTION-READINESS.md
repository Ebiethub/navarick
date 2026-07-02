# NAVARICK Production Readiness

Last reviewed: 2026-07-01

## Performance Checklist

- Next.js production build passes with Turbopack.
- Homepage no longer wraps the full route tree in a client-side page transition.
- Homepage content shell is a Server Component; client hydration is limited to navigation, hero motion, reveal headings, contact form, and interactive portfolio controls.
- Below-the-fold gallery images do not use `priority`.
- Case-study cover images keep `priority` because they are above the fold on project pages.
- Hero video is local, not remote, and its source is deferred until idle/after initial render.
- Reduced-motion users do not load the hero video.
- Large brand identity images have optimized WebP variants and project data points to those variants.
- Gallery scanning prefers `.optimized.webp` siblings over heavier originals.
- Static `/images` and `/videos` assets are configured with immutable cache headers.
- Next image optimization is configured for AVIF and WebP output.

## Accessibility Checklist

- Skip link is present and targets `#main-content`.
- Primary navigation exposes active route state with `aria-current`.
- Mobile menu button has `aria-controls`, `aria-expanded`, and stateful labels.
- Decorative icons and visual flourishes use `aria-hidden`.
- Contact form inputs have labels, helper text, error text, `aria-describedby`, and `aria-invalid`.
- Contact form status uses `role="status"`.
- Reduced-motion handling is implemented for hero, headings, reveals, mobile menu, and portfolio cards.
- Focus-visible styles are present for navigation, links, buttons, form controls, and gallery controls.

## Image Optimization Notes

Created optimized image derivatives:

- `public/images/Brand Identity/Melvbee Vellora Presentation-01.optimized.webp`: 9.63 MB original to 114 KB.
- `public/images/Brand Identity/Motrion Fitness Presentation-01.optimized.webp`: 12.18 MB original to 113.5 KB.
- `public/images/Brand Identity/Mountess-01.optimized.webp`: 2.41 MB original to 104.4 KB.
- `public/images/Brand Identity/Gravitas gym Logo-presentation.optimized.webp`: 253.2 KB original to 100.8 KB.
- `public/images/Brand Identity/Siaga Beauty Presentation-01.optimized.webp`: 831.1 KB original to 60.3 KB.

The original files remain in the repository for source fidelity, but runtime gallery logic prefers optimized siblings when available.

## Font Optimization Notes

- No local `.woff`, `.woff2`, `.ttf`, or `.otf` files are currently present in the app.
- CSS now uses stable system fallback stacks instead of referencing unshipped display fonts as if they were bundled.
- Recommended next step: add licensed `woff2` files for the final brand fonts and wire them through `next/font/local`.
- Avoid `next/font/google` unless build-time network access and font licensing are intentionally accepted.

## JavaScript And Bundle Notes

- Removed unused heavy dependencies: `@react-three/drei`, `@react-three/fiber`, `three`, `@types/three`, `gsap`, and `lenis`.
- Removed the unused root `PageTransition` client component.
- Removed blur filters from motion variants.
- Work gallery cards now render as static `next/image` cards instead of one Framer Motion instance per image.
- Header scroll state is throttled with `requestAnimationFrame` and updates only when sticky state changes.
- Next analyzer output was generated at `.next/diagnostics/analyze`.

Current static chunk snapshot after build:

- `.next/static/chunks`: 16 files, 981.7 KB uncompressed.
- JavaScript chunks: 15 files, 864.6 KB uncompressed.
- CSS chunks: 1 file, 117.1 KB uncompressed.

## CSS And Animation Notes

- Removed dead `.page-transition` CSS references.
- Reduced persistent `will-change` usage on shared gallery and header selectors.
- Retained premium visual treatments where they do not force layout animation.
- Remaining expensive effects are mostly `backdrop-filter`, shadow layers, and image saturation filters. These should be reviewed with real Lighthouse traces on target devices.

## SEO And Best Practices Checklist

- Canonical metadata is generated from `SITE_URL`.
- Open Graph and Twitter metadata are present.
- `/robots.txt` is generated.
- `/sitemap.xml` is generated and includes static pages plus published project routes.
- `poweredByHeader` is disabled.
- Security-readiness headers are configured:
  - `X-Content-Type-Options: nosniff`
  - `Referrer-Policy: strict-origin-when-cross-origin`
  - `Permissions-Policy` for camera, microphone, geolocation, and payment

## Deployment Checklist

- Set `NEXT_PUBLIC_SITE_URL` to the production URL.
- Set `NEXT_PUBLIC_CONTACT_EMAIL` to the approved public email.
- Configure contact email delivery before launch; the API currently validates inquiries but returns a delivery fallback.
- Confirm the Wyoming address and phone/mobile numbers are approved for public display.
- Run Lighthouse against the production build on the deployed URL.
- Confirm CDN cache headers for `/_next/static`, `/images`, and `/videos`.
- Confirm all project placeholders have approved client context before public case-study promotion.

## Cache Strategy

- `/_next/static` should be served as immutable by the hosting platform.
- `/images/:path*` and `/videos/:path*` are configured as `public, max-age=31536000, immutable`.
- Contact API responses should remain uncached.
- Future project data that becomes dynamic should use explicit cache tags or static regeneration rules.

## Remaining Placeholders

- Several portfolio entries still use `Details to be confirmed`.
- Project years still show `Year to be confirmed` where no approved year exists.
- Case-study overview sections intentionally avoid metrics, testimonials, and launch claims until approved.
- Public contact email may still fall back to `Email to be confirmed` if `NEXT_PUBLIC_CONTACT_EMAIL` is not set.

## Future Optimization Opportunities

- Add licensed local font files through `next/font/local`.
- Run Lighthouse CI once `lighthouse` or `@lhci/cli` is installed.
- Consider removing or splitting unused global CSS from earlier design phases.
- Consider producing an optimized hero video below 1 MB, or replacing autoplay video with a still poster on slow connections.
- Add real-user Core Web Vitals reporting after deployment.
- Review moderate npm audit findings with a planned dependency update rather than `--force`.
