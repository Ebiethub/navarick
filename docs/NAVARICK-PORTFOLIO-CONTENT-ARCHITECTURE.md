# NAVARICK Portfolio Content Architecture

## Source of truth

All portfolio content lives in:

```txt
data/projects.ts
```

The homepage featured work, Work index, and generated case-study routes all read from this single data source through `lib/portfolio.ts`.

## Current state

The portfolio is intentionally empty until real, approved projects are ready.

The site does not publish:

- fake projects;
- placeholder client names;
- invented outcomes;
- unapproved case-study summaries.

When no projects exist, the homepage and Work page render editorial empty states.

## Adding a future project

Add one complete `Project` object to `data/projects.ts` and set:

```ts
status: "published"
```

Set:

```ts
featured: true
```

when the project should appear in homepage Featured Work.

Supported disciplines include brand identity, logo design, brand strategy, website design, web development, UI/UX design, mobile apps, and product design. No page layout changes are required for new disciplines.

## Case-study route

Published projects automatically generate:

```txt
/work/[slug]
```

The reusable case-study template includes hero, overview, challenge, research, strategy, creative direction, identity system, website/digital experience, outcome, gallery, next project, and contact CTA sections.
