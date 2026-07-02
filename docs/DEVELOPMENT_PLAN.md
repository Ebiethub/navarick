# NAVARICK Development Plan

This plan implements the approved PRD in reviewable phases. The foundation phase
is deliberately separate from full UI design.

## Phase 0 — Foundation (current)

- [x] Establish the standalone Next.js App Router project.
- [x] Configure strict TypeScript, ESLint, Tailwind, and shadcn aliases.
- [x] Add motion, smooth-scroll, and optional 3D dependencies.
- [x] Translate PRD colour, spacing, radius, type, and motion values into tokens.
- [x] Create typed site, navigation, service, and project data boundaries.
- [x] Create metadata utilities and the homepage placeholder.
- [x] Document architecture and working rules.
- [ ] Confirm assets, font licences, domain, contact details, and launch projects.

**Exit gate:** lint, typecheck, and production build pass; no final interface has
been prematurely designed.

## Phase 1 — Content and assets

1. Confirm the production wordmark, animation source, poster fallback, and usage
   rights.
2. Select four to six launch projects and complete at least two case-study
   narratives.
3. Validate all project claims, outcomes, testimonials, and credits.
4. Confirm the canonical domain, contact email, enquiry destination, and analytics
   policy.
5. Confirm Neue Montreal licensing or approve Manrope as the heading fallback.

**Exit gate:** approved content matrix and optimised media inventory exist.

## Phase 2 — Core system

1. Build container, typography, link, button, media, and focus primitives.
2. Add the accessible desktop header and mobile menu.
3. Add Lenis only behind reduced-motion and capability checks.
4. Establish Framer Motion variants and route-transition fallback behaviour.
5. Create error, not-found, loading, and metadata image foundations.

**Exit gate:** primitives pass keyboard, responsive, contrast, and reduced-motion
checks without relying on cinematic effects.

## Phase 3 — Routes and portfolio

1. Build Home in PRD order, beginning with static hierarchy.
2. Build Work index and the case-study content renderer.
3. Build Services, About, and Contact.
4. Implement validated contact delivery with server-side validation and rate
   limiting.
5. Add structured data and route-specific metadata.

**Exit gate:** every core journey works with JavaScript motion disabled.

## Phase 4 — Signature motion

1. Prototype the hero using the cheapest faithful medium: video first, WebGL only
   if it adds visible value.
2. Add GSAP timelines to approved high-value sequences.
3. Add project media reveals and restrained hover behaviour.
4. Test mobile thermal impact, frame rate, input responsiveness, and static
   fallbacks.

**Exit gate:** motion improves comprehension, respects reduced motion, and stays
inside the PRD performance budgets.

## Phase 5 — Launch quality

1. Cross-browser and responsive visual regression testing.
2. Keyboard, screen-reader, contrast, and automated accessibility checks.
3. Lighthouse and production Web Vitals verification.
4. SEO, form delivery, analytics, legal, asset licence, and content review.
5. Soft launch, establish a 30-day baseline, then set conversion targets.

## Decisions required before Phase 2

- Production domain and public contact email.
- Wordmark files and hero animation/model format.
- Approved display/heading font files and licences.
- Launch project list, media, outcomes, credits, and confidentiality status.
- Contact form delivery service and indicative investment-range policy.
- Whether V1 needs a CMS or remains typed local content.
