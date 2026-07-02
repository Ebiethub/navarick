# NAVARICK Project Structure

This directory is a standalone Next.js application. It has no source dependency
on any sibling project in the workspace.

```text
navarick/
├── app/                    # App Router shell and future routes
│   ├── layout.tsx          # Root metadata, viewport, global styles, skip link
│   ├── page.tsx            # Foundation placeholder only
│   ├── globals.css         # Brand tokens, shadcn tokens, base accessibility
│   ├── work/               # Reserved for work index and case studies
│   ├── services/           # Reserved for service narrative
│   ├── about/              # Reserved for studio story
│   └── contact/            # Reserved for project enquiry
├── components/
│   ├── layout/             # Page shell and layout primitives
│   ├── navigation/         # Header and menu components
│   ├── sections/           # Homepage section compositions
│   ├── portfolio/          # Work listing and case-study components
│   ├── services/           # Service-specific compositions
│   ├── animations/         # GSAP-owned timelines and low-level effects
│   ├── motion/             # Framer Motion primitives and fallbacks
│   ├── ui/                 # shadcn/ui-owned component source
│   └── shared/             # Cross-route presentation components
├── data/                   # Typed local content and navigation
├── lib/                    # Utilities, constants, SEO, and motion tokens
├── public/                 # Project-owned static assets only
├── docs/                   # Product, architecture, and implementation docs
├── types/                  # Shared domain contracts
└── configuration files
```

## Architectural rules

### Server-first boundaries

Files in `app/` are Server Components by default. Add `"use client"` only to the
smallest interactive leaf. Content remains typed and importable on the server;
animation libraries stay out of the initial client bundle until used.

### Motion ownership

- CSS: focus, hover, and simple state transitions.
- Framer Motion: component entrances, presence, and route choreography.
- GSAP: signature timelines, masks, and pinned narrative sequences.
- React Three Fiber: optional hero material scene only after asset validation.
- Lenis: optional interpolation; never required for navigation or reading.

### Content contracts

`types/project.ts` defines the stable project boundary. `data/projects.ts` contains
clearly labelled structural placeholders, not invented client work. A future CMS
must adapt to these contracts rather than leak provider-specific types into UI.

### Design tokens

PRD values are represented in `tailwind.config.ts` and `app/globals.css`.
`globals.css` is also the semantic bridge for future shadcn components. Raw brand
hex values should not be repeated inside components.

### Asset ownership

Only NAVARICK-approved and correctly licensed files belong in `public/`.
Case-study assets should use `public/case-studies/<project-slug>/`. Production media
must include dimensions, alt-text decisions, and an optimised delivery format.

## Naming

- Components: PascalCase exports, kebab-case filenames.
- Utilities and data: camelCase exports, kebab-case filenames where applicable.
- Routes and project slugs: lowercase kebab-case.
- Constants: uppercase only for application-wide immutable values.
