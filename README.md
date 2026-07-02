# NAVARICK

Standalone portfolio website for NAVARICK, an independent creative studio focused
on brand identity, web design, web development, and UI/UX design.

The product and creative source of truth is
[`docs/NAVARICK-V1-PRD.md`](docs/NAVARICK-V1-PRD.md). The current repository is a
foundation only: it contains the application shell, typed content contracts,
design tokens, dependency setup, and one restrained homepage placeholder. It does
not contain the final homepage or portfolio experience.

## Stack

- Next.js App Router with React Server Components by default
- TypeScript in strict mode
- Tailwind CSS with NAVARICK semantic tokens
- Framer Motion for component and route choreography
- GSAP for bounded cinematic timelines
- Lenis as an optional progressive scroll enhancement
- React Three Fiber and Drei for an optional signature material scene
- shadcn/ui-ready aliases, tokens, and component destination

## Requirements

- Node.js 20.9 or newer (an active LTS release is recommended)
- npm 10 or newer

## Local setup

```bash
npm install
copy .env.example .env.local
npm run dev
```

Open `http://localhost:3000`.

## Verification

```bash
npm run lint
npm run typecheck
npm run build
```

## Working rules

- Keep the project independent; never import from sibling workspace projects.
- Keep editorial pages as Server Components until browser interaction is required.
- Add shadcn components individually when a real requirement exists.
- Use one animation owner per CSS property; never make GSAP and Framer Motion
  compete for the same transform.
- Treat WebGL and smooth scrolling as progressive enhancements with static and
  reduced-motion fallbacks.
- Do not commit secrets, client-confidential media, or unlicensed fonts.

See [`docs/PROJECT_STRUCTURE.md`](docs/PROJECT_STRUCTURE.md) and
[`docs/DEVELOPMENT_PLAN.md`](docs/DEVELOPMENT_PLAN.md) before implementation.
