# NAVARICK Design System & Component Specification

**Status:** Design definition / approval candidate
**Version:** 1.0
**Date:** 24 June 2026
**Scope:** Visual language, interaction rules, and future component contracts
**Authority:** Extends `NAVARICK-V1-PRD.md` and `NAVARICK-HOMEPAGE-UX-BLUEPRINT.md`; it does not replace either document.

---

## Purpose

This document defines how NAVARICK should look, feel, and behave before wireframes, high-fidelity design, or component development begins. It converts the approved creative direction into a repeatable system so that every future page can feel unmistakably NAVARICK without depending on one hero effect.

The system is intentionally restrained. It provides enough precision to remove arbitrary choices while leaving enough room for each project to bring its own visual language into the portfolio.

### Governing idea: Form, revealed

NAVARICK turns unclear ambition into distinctive form. The system expresses this through:

- darkness that creates focus;
- light that reveals rather than decorates;
- typography that carries authority;
- project media that provides colour and proof;
- motion that clarifies sequence;
- detail that rewards attention.

### Non-negotiable rules

1. The work leads; the interface recedes.
2. One dominant interaction is stronger than many competing effects.
3. Gold is punctuation, not wallpaper.
4. Glass is a material, not a universal container style.
5. Mobile is re-composed, not compressed.
6. Accessibility and performance are part of craft.
7. No visual claim outruns the available evidence.

---

# 1. Design Philosophy

## 1.1 Luxury

Luxury is expressed through confidence, editing, material sensitivity, and time. It is not expressed through ornamental gold, excessive serif typography, large prices, or vague exclusivity.

### Design implications

- Use fewer elements with stronger hierarchy.
- Allow generous negative space; do not fill quiet areas with decoration.
- Prefer exact alignment, authored crops, and considered transitions over novelty.
- Reserve bronze, champagne, and chrome for moments of emphasis.
- Use high-quality, project-specific imagery rather than generic mockup packs.
- Make loading, focus, empty, and reduced-motion states feel as intentional as the ideal state.

## 1.2 Editorial

Editorial design gives NAVARICK structure, rhythm, and intellectual confidence. It lets typography and sequencing explain the work without turning every idea into a bordered card.

### Design implications

- Use strong headlines, short introductions, captions, rules, folios, and project metadata.
- Alternate dense visual passages with quieter reading passages.
- Vary media scale and aspect ratio according to narrative importance.
- Keep body text measures controlled and hierarchy semantically honest.
- Use asymmetry where it sharpens emphasis; return to the grid for clarity.
- Avoid uniform card grids, decorative icons, and repetitive centre-aligned sections.

## 1.3 Cinematic

Cinematic means controlled light, framing, pacing, scale, and transition. It does not mean every viewport is a movie or every asset autoplays.

### Design implications

- Compose each major section around one focal plane.
- Use obsidian space, warm edge light, chrome highlights, and intentional depth.
- Stage entrances in layers: environment, media, headline, support, actions.
- Use full-bleed media only when it deserves the scale.
- Follow a high-stimulus scene with a moment of stillness.
- Keep text readable without blanket overlays over all imagery.

## 1.4 Premium

Premium is the visible result of rigorous systems and execution. The experience should feel dependable as well as beautiful.

### Design implications

- Use a finite type scale, spacing scale, colour ratio, and motion vocabulary.
- Maintain consistent focus, hover, active, and disabled states.
- Protect Core Web Vitals and input responsiveness.
- Show real artefacts, strategic decisions, and outcomes.
- Do not invent project results, testimonials, client logos, scarcity, or awards.

## 1.5 Timeless

Timelessness comes from proportion, typography, contrast, and clarity—not from avoiding all contemporary technique.

### Design implications

- Ground the system in neutral blacks, warm metals, soft white, and editorial type.
- Use trends only when they serve the NAVARICK idea.
- Avoid neon, chromatic noise, blob gradients, heavy glassmorphism, and oversized rounded cards.
- Prefer simple shapes, fine rules, and durable interaction patterns.
- Let client work carry visual variety rather than changing the studio system each season.

## 1.6 Interactive

Interactivity should create physicality, reveal context, or improve orientation. It is never required to access meaning.

### Design implications

- Hover enriches; it does not unlock essential content.
- Scroll motion supports sequence; it never traps or delays the reader.
- Pointer-responsive light is bounded to the hero object.
- Magnetic response is reserved for one or two primary calls to action.
- Touch and keyboard states are authored equivalents, not fallbacks of neglect.
- Reduced-motion users receive a complete and equally premium composition.

## 1.7 Decision filter

Before adding a visual or interaction, ask:

1. Does it clarify hierarchy, prove craft, or improve orientation?
2. Is it recognisably NAVARICK rather than merely fashionable?
3. Can it remain excellent on mobile and with reduced motion?
4. Does it respect the performance budget?
5. Would removing it make the work clearer?

If the fifth answer is yes, remove it.

---

# 2. Colour System

## 2.1 Core palette

| Token | Name | HEX | RGB | HSL | Primary role |
|---|---|---:|---|---|---|
| `obsidian-950` | Obsidian Black | `#070706` | `7, 7, 6` | `60°, 7.7%, 2.5%` | Primary page canvas, hero, transitions |
| `obsidian-900` | Deep Obsidian | `#0D0D0C` | `13, 13, 12` | `60°, 4.0%, 4.9%` | Tonal separation, elevated dark surface |
| `charcoal-800` | Charcoal Black | `#181816` | `24, 24, 22` | `60°, 4.3%, 9.0%` | Menus, alternate sections, utility surfaces |
| `charcoal-700` | Warm Charcoal | `#24221F` | `36, 34, 31` | `36°, 7.5%, 13.1%` | Hover surfaces, strong dark borders |
| `bronze-500` | Bronze Gold | `#A8733A` | `168, 115, 58` | `31°, 48.7%, 44.3%` | Primary warm accent, active detail |
| `bronze-400` | Lit Bronze | `#C08A4A` | `192, 138, 74` | `33°, 48.4%, 52.2%` | Warm hover/accent highlight |
| `champagne-300` | Champagne Gold | `#D8C29A` | `216, 194, 154` | `39°, 44.3%, 72.5%` | Premium highlight, primary filled action |
| `champagne-200` | Pale Champagne | `#E7D8BB` | `231, 216, 187` | `40°, 47.8%, 82.0%` | Fine rules, specular warmth, selected text |
| `chrome-300` | Chrome Silver | `#BFC3C5` | `191, 195, 197` | `200°, 4.9%, 76.1%` | Metadata, metallic edges, secondary highlight |
| `chrome-100` | Bright Chrome | `#E3E5E5` | `227, 229, 229` | `180°, 3.7%, 89.4%` | Specular highlight only |
| `soft-white` | Soft White | `#F2F0EB` | `242, 240, 235` | `43°, 21.2%, 93.5%` | Primary text on dark surfaces |
| `muted-gray` | Muted Gray | `#9A9892` | `154, 152, 146` | `45°, 3.8%, 58.8%` | Secondary text and captions |
| `quiet-gray` | Quiet Gray | `#696762` | `105, 103, 98` | `43°, 3.4%, 39.8%` | Decorative labels and disabled states |

## 2.2 Functional colours

Functional colours are system extensions, not brand accents.

| Token | Name | HEX | RGB | HSL | Role |
|---|---|---:|---|---|---|
| `signal-red` | Error | `#C45A4A` | `196, 90, 74` | `8°, 50.8%, 52.9%` | Validation/error state with text/icon |
| `signal-green` | Success | `#78906B` | `120, 144, 107` | `99°, 14.7%, 49.2%` | Confirmation/success with text/icon |

Never rely on these colours alone. Every state includes an icon, label, or message.

## 2.3 Colour distribution

Target ratio across NAVARICK-owned interface surfaces:

- **78%** obsidian and charcoal foundations.
- **16%** soft white, gray, and natural project media.
- **5%** bronze and champagne.
- **1%** chrome specular detail.

Project media is exempt from this ratio. Client work retains its original colour system.

## 2.4 Semantic usage

| Purpose | Default | Alternative | Prohibited |
|---|---|---|---|
| Page background | `obsidian-950` | `obsidian-900` | Flat pure black everywhere |
| Raised dark surface | `obsidian-900` | `charcoal-800` | Light cards on the dark system |
| Primary text | `soft-white` | `chrome-100` for tiny highlights | Pure white for all text |
| Secondary text | `muted-gray` | `chrome-300` | `quiet-gray` for small body copy |
| Warm accent text/rule | `bronze-500` | `bronze-400` | Large gold-filled sections |
| Primary action fill | `champagne-300` | `bronze-400` with obsidian text | Soft-white text on bronze fill |
| Focus ring | `champagne-300` | `soft-white` | Bronze-only focus on complex media |
| Border | Soft white at 12% | Soft white at 22% for emphasis | Bright silver outlines everywhere |
| Glass | Charcoal at 45–55% | Obsidian at 55–65% | Fully transparent text surface |

## 2.5 Contrast reference

| Foreground / background | Ratio | Rule |
|---|---:|---|
| Soft White / Obsidian Black | 17.69:1 | Approved for all text sizes |
| Muted Gray / Obsidian Black | 6.99:1 | Approved for normal text |
| Quiet Gray / Obsidian Black | 3.57:1 | Large text, disabled, or decorative use only |
| Champagne Gold / Obsidian Black | 11.61:1 | Approved for text and controls |
| Bronze Gold / Obsidian Black | 4.97:1 | Approved for normal text; avoid thin type |
| Chrome Silver / Obsidian Black | 11.35:1 | Approved for text and metadata |
| Soft White / Charcoal Black | 15.61:1 | Approved for all text sizes |
| Muted Gray / Charcoal Black | 6.16:1 | Approved for normal text |
| Obsidian Black / Champagne Gold | 11.61:1 | Preferred primary button pairing |
| Soft White / Bronze Gold | 3.56:1 | Fails normal text; large type only |
| Obsidian Black / Lit Bronze | 6.69:1 | Approved filled-action pairing |

### Contrast rules

- Normal text below 24 px: minimum 4.5:1.
- Large text at least 24 px regular or 18.66 px bold: minimum 3:1.
- UI boundaries, icons, and focus indicators: minimum 3:1 against adjacent colours.
- Body copy defaults to Soft White or Muted Gray; Quiet Gray is not a body colour.
- Text over media requires a tested local contrast zone or a bounded surface. Do not paste a blanket overlay over every image.
- Translucent/glass surfaces are tested against the brightest and darkest possible media behind them.
- Hover, selected, error, and success states use more than colour alone.

## 2.6 Metallic and light effects

- A gradient is allowed only when it simulates physical reflection or edge light.
- Metallic effects use narrow tonal bands rather than rainbow/chromatic gradients.
- Bronze glow remains under approximately 14% opacity and is reserved for active material.
- Chrome is used as a specular edge, thin rule, or object material—not a page background.
- Gold type is reserved for labels, one phrase, active states, or evidence markers.
- Never combine bronze, champagne, and chrome at equal visual weight.

## 2.7 Glass treatment

Glass is limited to:

- the compact sticky navigation;
- selected utility controls;
- optional project metadata surface over simple media;
- the hero material object itself.

Required properties:

- dark surface opacity high enough to preserve contrast;
- 1 px low-opacity border;
- restrained backdrop blur;
- a single inset top highlight;
- no nested glass-on-glass composition;
- no long-form body copy on moving glass.

---

# 3. Typography System

## 3.1 Font families

| Role | Primary | Fallback | Status |
|---|---|---|---|
| Display/editorial accent | Instrument Serif | Georgia, serif | Open/licence files must be approved and self-hosted |
| Heading/UI | Neue Montreal | Manrope, Inter, Arial, sans-serif | Commercial licence decision required |
| Body/functional | Inter | Arial, sans-serif | Approved direction; self-hosting preferred |

Neue Montreal must not enter production without an appropriate licence. If the decision remains unresolved at wireframe sign-off, use Manrope as the working heading family so layout measurements do not depend on unavailable font files.

## 3.2 Typographic principles

- Sans-serif establishes precision and modernity.
- Serif appears as an accent within high-value statements, never as the default UI voice.
- Display type is sparse: hero, page title, and major editorial statements only.
- Body text remains readable, compact, and left aligned.
- Headings use sentence case unless a deliberate campaign treatment requires uppercase.
- Uppercase is reserved for labels and small metadata.
- Avoid ultra-light weights on dark backgrounds.
- Do not use faux italics, faux bold, or unlicensed font substitutes.

## 3.3 Type styles

Desktop values target 1440 px and above. Mobile values target 320–767 px. Intermediate sizes interpolate within the stated range without changing semantic role.

| Style | Family | Desktop size | Mobile size | Weight | Line-height | Letter spacing | Usage |
|---|---|---:|---:|---:|---:|---:|---|
| Display XL | Neue Montreal/Manrope | 112–160 px | 56–72 px | 500 | 0.88–0.94 | `-0.045em` to `-0.055em` | Homepage hero only |
| Display Editorial | Instrument Serif | 88–128 px | 48–64 px | 400 | 0.92–0.98 | `-0.02em` | One phrase or major statement |
| Display L / Page title | Neue Montreal/Manrope | 80–112 px | 44–56 px | 500 | 0.94 | `-0.04em` | Work, Services, About, Contact titles |
| Heading 1 | Neue Montreal/Manrope | 64–80 px | 40–48 px | 500 | 1.00 | `-0.035em` | Major section proposition |
| Heading 2 | Neue Montreal/Manrope | 40–52 px | 32–38 px | 500 | 1.05 | `-0.025em` | Section heading |
| Heading 3 | Neue Montreal/Manrope | 26–32 px | 24–28 px | 500 | 1.15 | `-0.015em` | Project/service/chapter title |
| Subheading | Neue Montreal/Manrope | 20–24 px | 18–20 px | 500 | 1.35 | `-0.01em` | Lead-in, outcome statement |
| Body L | Inter | 20 px | 18 px | 400 | 1.50 | `0` | Introductory and lead copy |
| Body | Inter | 16 px | 16 px | 400 | 1.60 | `0` | Standard reading copy |
| Body Strong | Inter | 16 px | 16 px | 500–600 | 1.55 | `0` | Emphasis and compact facts |
| Caption | Inter | 14 px | 14 px | 400 | 1.45 | `0.01em` | Media captions and supporting metadata |
| Navigation | Neue Montreal/Manrope | 14 px | 16 px | 500 | 1.20 | `0` | Header and mobile menu links |
| Label | Inter | 12 px | 12 px | 500 | 1.20 | `0.12em` | Uppercase section labels, years, disciplines |
| Micro | Inter | 11 px | 11 px | 500 | 1.30 | `0.08em` | Rare legal/system metadata only |

## 3.4 Role-specific rules

### Display

- Maximum one Display XL composition per page.
- Ideal headline length: 3–10 words.
- Author line breaks; do not rely on accidental wrapping.
- Do not place Display XL inside cards or utility surfaces.
- Display serif is an accent, not a substitute for hierarchy.

### Heading

- Heading levels follow document structure; visual size never changes semantic order.
- Keep section headings under approximately 12 words.
- Large headings use Soft White; bronze/champagne may emphasise one phrase only.

### Subheading

- Used for a concise consequence, positioning idea, or chapter introduction.
- Maximum measure: approximately 50 characters.
- Do not use muted colour when the subheading carries essential meaning.

### Body

- Preferred measure: 45–72 characters.
- Body copy maximum width: 720 px; lead copy maximum: 840 px.
- Paragraph spacing is one line-height; avoid indented paragraphs.
- Avoid centre-aligned body copy beyond two short lines.

### Caption

- Captions explain artefact, decision, location, or credit.
- Caption text is Muted Gray, not Quiet Gray.
- Captions stay visually attached to their media.

### Navigation

- Desktop navigation uses compact sentence-case labels.
- Mobile navigation may scale to Heading 2/Page-title size inside the full-screen menu.
- Current page is indicated by text plus rule/position, not colour alone.

## 3.5 Numerals and metadata

- Use tabular numerals for project years, indices, and result comparisons when supported.
- Project indices use two digits: `01`, `02`, `03`.
- Disciplines are separated by middle dots or line breaks, never a row of filled pills.
- Avoid all-uppercase client/project titles unless required by the brand identity.

## 3.6 Font loading and licensing

- Self-host approved WOFF2 files.
- Subset by actual language coverage where licensing permits.
- Total above-the-fold font payload remains within the PRD's 180 KB budget.
- Preload only the faces required in the first viewport.
- Define metric-compatible fallbacks to reduce layout shift.
- Do not use remote CSS imports in production.

---

# 4. Layout System

## 4.1 Breakpoints

| Name | Range | Design intent |
|---|---:|---|
| `xs` | 320–374 px | Minimum supported mobile |
| `sm` | 375–767 px | Standard mobile |
| `md` | 768–1023 px | Tablet |
| `lg` | 1024–1279 px | Laptop / compact desktop |
| `xl` | 1280–1439 px | Desktop |
| `wide` | 1440 px and above | Wide desktop |

Breakpoints are content decisions, not device labels. Add no breakpoint solely to patch an arbitrary composition; first improve the underlying fluid rules.

## 4.2 Grid

| Viewport | Columns | Gutter | Outer margin | Max grid width |
|---|---:|---:|---:|---:|
| 320–767 px | 4 | 16 px | 20 px | Fluid |
| 768–1023 px | 8 | 20 px | 24 px | Fluid |
| 1024–1439 px | 12 | 20 px | 32 px | Fluid |
| 1440 px+ | 12 | 24 px | 48–64 px | 1600 px |

### Grid rules

- Text and controls align to the grid.
- Project media may break the grid deliberately once per major narrative passage.
- Optical alignment may override mathematical alignment for the official wordmark, oversized display type, and circular controls.
- No more than two projects share a row on desktop.
- Mobile project sequences are curated in a single column.

## 4.3 Containers

| Container | Maximum width | Use |
|---|---:|---|
| Full bleed | None | Hero media, one project image, page transition |
| Site grid | 1600 px | Primary layout system |
| Reading wide | 840 px | Lead statements and case-study introductions |
| Reading standard | 720 px | Body copy |
| Reading narrow | 560 px | Forms, focused explanations, testimonial attribution |
| Utility | 420 px | Compact navigation panel, metadata groups |

Full bleed does not mean edge-to-edge text. Content returns to the site grid.

## 4.4 Spacing scale

Base unit: 4 px.

| Token | Value | Common use |
|---|---:|---|
| `space-1` | 4 px | Icon/internal micro gap |
| `space-2` | 8 px | Caption pair, close inline gap |
| `space-3` | 12 px | Label-to-title gap |
| `space-4` | 16 px | Compact component gap |
| `space-6` | 24 px | Standard content gap |
| `space-8` | 32 px | Component group separation |
| `space-12` | 48 px | Editorial group separation |
| `space-16` | 64 px | Large component separation |
| `space-24` | 96 px | Mobile/tablet section rhythm |
| `space-32` | 128 px | Standard desktop section rhythm |
| `space-40` | 160 px | Large desktop transition |
| `space-60` | 240 px | Rare cinematic pause |

Do not invent intermediate values for ordinary spacing. Optical nudges up to 2 px are permitted only for icon/type alignment and must not become layout tokens.

## 4.5 Section spacing

| Context | Vertical padding |
|---|---:|
| Mobile standard | 72–96 px |
| Tablet standard | 96–128 px |
| Laptop standard | 112–160 px |
| Wide desktop standard | 128–200 px |
| Cinematic transition | Up to 240 px where narrative pacing requires it |

- Consecutive dark sections are separated through rhythm, tonal shift, rule, or media—not arbitrary containers.
- A high-density project passage is followed by at least one lower-density reading passage.
- Avoid identical top/bottom spacing across every section; use the scale to create narrative cadence.

## 4.6 Vertical viewport rules

- Full-screen sections use dynamic viewport units on mobile.
- The hero accounts for navigation, safe areas, and short laptop heights.
- Sticky media activates only when viewport height supports the full composition.
- No section requires pinning to expose its core content.
- Minimum content remains visible at 320 × 568 px without overlap.

## 4.7 Shape, borders, and depth

### Radius

| Token | Value | Use |
|---|---:|---|
| Square | 0 px | Editorial project media, section frames |
| Small | 4 px | Inputs, small utility surfaces |
| Medium | 10 px | Compact menu/dialog surfaces |
| Pill | 999 px | Navigation shell, tags, compact CTA only |

Avoid large friendly SaaS radii and nested rounded surfaces.

### Borders

- Default: 1 px Soft White at 12% opacity.
- Strong: 1 px Soft White at 22% opacity.
- Warm active: 1 px Champagne at 45–65% opacity.
- Dividers span according to the content grid, not automatically edge to edge.

### Shadows

- Tonal separation is preferred to shadow.
- Floating navigation may use `0 18px 60px` black at approximately 42%.
- Compact utility surfaces may use `0 8px 24px` black at approximately 28%.
- Bronze glow is material light, not a generic focus shadow.

---

# 5. Navigation System

## 5.1 Desktop header

### Structure

- Official wordmark at start/left.
- Primary links: Work, Services, About.
- Contact remains the distinct action: Start a project.
- Optional availability indicator appears only when accurate and never competes with the CTA.
- No dropdown mega-menu is required for V1.

### Initial state

- Height: approximately 80–88 px.
- Transparent/visually open over the hero.
- Content aligns to the site grid.
- Wordmark and links meet contrast requirements against the authored hero negative space.

### Sticky state

- Header remains persistent on desktop; it does not disappear during ordinary downward scroll.
- After approximately 64–96 px of scroll, it compresses to a 60–64 px dark-glass shell.
- Shell sits 16–24 px from the viewport edges/top depending on breakpoint.
- Transition uses opacity/transform/size over 350–500 ms without shifting page content.
- The sticky state never becomes fully transparent over project media.

### Scroll behaviour

- The active route uses a fine rule and semantic current-page state.
- In-page section links, if introduced, respect focus and reduced-motion behaviour.
- Navigation does not animate on every small scroll direction change.
- No scroll progress bar is shown globally unless user testing proves it aids long case studies.

## 5.2 Mobile navigation

### Closed state

- Wordmark left; Menu control right.
- Minimum control target: 44 × 44 px.
- Header remains visible and uses the same compact glass logic after leaving the hero.

### Open state

- Full-screen editorial index, not a narrow drawer.
- Large links: Work, Services, About, Contact.
- One featured project may appear only when approved content and space permit.
- Direct email and social links sit in a quiet lower utility zone.
- Background is Obsidian/Charcoal; optional material detail remains subtle.

### Interaction

- Menu button exposes its open/closed state to assistive technology.
- Focus moves into the menu, remains contained, and returns to the trigger on close.
- Escape closes the menu.
- Body scroll is contained while the menu is open without losing position.
- Reduced motion uses immediate display or a short fade; no large curtain travel.

## 5.3 CTA placement

- Primary navigation CTA: Start a project.
- Hero: View selected work is primary; Start a project is secondary.
- Case studies: Next project and Start a project appear after proof.
- Final homepage CTA: Start a project is primary; email is secondary.
- Do not repeat a filled CTA in every section.

## 5.4 Navigation states

| State | Behaviour |
|---|---|
| Default | Soft White or Muted Gray on transparent/dark surface |
| Hover | Soft White plus rule or 4 px arrow/label shift |
| Focus | 2 px Champagne ring/underline with 4 px offset |
| Current | Soft White plus persistent fine rule and current-page semantics |
| Active/press | 1–2 px optical compression or opacity change; no layout shift |
| Disabled | Avoid disabled navigation links; remove unavailable route instead |

---

# 6. Button System

Buttons and links are visually distinct by action type. Navigation uses links; forms use buttons. The implementation must preserve correct semantics.

## 6.1 Shared dimensions

| Size | Height | Horizontal padding | Text style | Use |
|---|---:|---:|---|---|
| Small | 40 px | 16 px | 13–14 px / 500 | Compact utility only |
| Medium | 48 px | 20–24 px | 14 px / 500 | Navigation and standard actions |
| Large | 56 px | 28–32 px | 15–16 px / 500 | Hero and final CTA |

- Minimum touch target: 44 × 44 px, even when visual treatment is smaller.
- Shape: pill for compact CTAs; 4 px radius for form actions where a pill would feel ornamental.
- Icon size: 16–18 px, positioned after text by default.
- Text labels stay concise and verb-led.

## 6.2 Primary button

### Visual

- Fill: Champagne Gold.
- Text/icon: Obsidian Black.
- Border: transparent or one-tone darker champagne edge.
- Default size: Medium; Large in hero/final CTA.

### States

| State | Specification |
|---|---|
| Default | Champagne fill, Obsidian text |
| Hover | Fill shifts toward Pale Champagne; arrow translates 4–6 px |
| Focus | 2 px Champagne/Soft White outer ring, 4 px offset |
| Active | Fill returns toward Champagne; content compresses optically by 1–2 px |
| Loading | Label remains or changes clearly; motion indicator does not cause width shift |
| Disabled | Charcoal fill, Quiet Gray text, no glow; semantic disabled state |

White text on Bronze Gold is prohibited for normal button labels because it does not meet the required contrast.

## 6.3 Secondary button

### Visual

- Transparent or very low-opacity dark fill.
- 1 px Soft White/Chrome border at 18–22%.
- Soft White text.
- Optional restrained glass only over a controlled background.

### States

| State | Specification |
|---|---|
| Default | Transparent/dark-glass fill, fine border |
| Hover | Charcoal surface appears; border rises to 35%; text remains stable |
| Focus | 2 px Champagne outer ring with 4 px offset |
| Active | Surface darkens; no scale larger than 1.0 |
| Disabled | Border and text shift to Quiet Gray; interaction removed |

## 6.4 Text button / editorial link

### Visual

- No container by default.
- Text plus optional directional arrow.
- Underline or rule occupies reserved space to avoid layout shift.

### States

- Hover: rule draws left to right and arrow moves 4–6 px.
- Focus: visible Champagne rule/ring independent of hover.
- Active: text shifts to Champagne or Bronze; never colour-only without a rule/arrow change.
- Disabled text actions are avoided; unavailable actions should not render.

## 6.5 Magnetic CTA

The magnetic CTA is a behavioural enhancement of the Primary or Secondary button, not a separate visual family.

### Rules

- Maximum two magnetic CTAs on a page: hero and final contact.
- Fine-pointer devices only.
- Maximum translation: 6–8 px.
- Activation zone extends beyond the visible button without overlapping other controls.
- Return motion is slightly slower than approach motion.
- The hit area itself does not move away from the pointer.
- Focus, touch, keyboard, and reduced-motion states are static.

## 6.6 Prohibited button patterns

- Gradient-filled CTA.
- White text on Bronze Gold at normal size.
- Multiple competing filled CTAs in one section.
- Icon-only action without accessible label.
- Layout-shifting scale on hover.
- Continuous glow or pulse.
- Disabled action communicated by opacity alone.

---

# 7. Portfolio System

The portfolio system is an editorial display system, not a card library. Modules are defined by narrative depth and media importance.

## 7.1 Featured Project module

### Role

Present one flagship transformation at cinematic scale on the homepage or Work landing page.

### Required content

- Project/client name.
- Transformation statement.
- Sector, disciplines, and year.
- Dominant media preview.
- One defining idea or decision.
- One verified outcome or honest qualitative result.
- Case-study link and accessible label.

### Composition

- Near-full-width or full-bleed media stage.
- Metadata occupies a stable grid zone, not a floating card.
- Supporting evidence may use one sticky media stage beside 2–3 short narrative beats.
- One featured module may reverse its composition to create rhythm.
- Square editorial frames are preferred; radius defaults to 0.

### Behaviour

- Clip/mask media reveal plus 1.03 → 1.00 scale settlement.
- Metadata enters after media is legible.
- Hover shifts crop by no more than 2%.
- Entire media/title relationship is clearly clickable without obscuring content.
- Mobile becomes a linear narrative and removes sticky behaviour.

## 7.2 Gallery Project module

### Role

Demonstrate breadth through a faster, variable editorial gallery.

### Required content

- Project/client name.
- Disciplines and year.
- One-line assignment/change statement.
- Media preview and project link.
- Concept/unreleased status when applicable.

### Composition

- Variable aspect ratio selected from approved set: panoramic, landscape, portrait, square/detail.
- No more than two projects per desktop row.
- Metadata appears beneath or beside the visual in reserved space.
- Mobile is curated as one column; no masonry reconstruction.

### Behaviour

- Preview motion occurs on intent where practical and has a poster.
- Hover never places a black veil over the entire image.
- A cursor label may supplement but not replace visible link cues.

## 7.3 Case-study Entry module

### Role

Transition from a project listing into the complete case-study story.

### Required content

- Project title/client.
- Concise transformation promise.
- Disciplines, sector, year, and status.
- Hero media.
- Optional live-site link where permitted.

### Composition

- Title and transformation appear before or alongside hero media.
- The opening avoids a generic metadata sidebar card.
- Project facts use grid alignment and fine rules.
- Hero media expresses the central idea, not automatically a laptop mockup.

## 7.4 Thumbnail system

Approved thumbnail ratios:

- `16:9` or `3:2` for websites, cinematic project worlds, and wide systems.
- `4:5` for identity applications, editorial objects, and vertical campaign work.
- `1:1` for marks, details, and tightly composed artefacts.
- Extra-wide panoramic only as a deliberate full-grid interruption.

### Rules

- Use the same authored crop at predictable breakpoints; change art direction when the subject would be lost.
- Reserve intrinsic dimensions to prevent layout shift.
- Avoid text baked into images when live text can provide the same information.
- Posters represent the strongest stable frame of motion assets.
- Do not force every project into the same ratio.

## 7.5 Hover and focus behaviour

- Default media remains fully visible.
- Hover may alter crop, reveal adjacent metadata, draw a rule, or move an arrow.
- Focus reproduces the same semantic information without requiring pointer position.
- No 3D tilt for ordinary project previews.
- No card lift or shadow bloom.
- No essential title hidden until hover.
- Touch shows all core metadata permanently.

## 7.6 Project status treatment

- `Live`, `Concept`, `In progress`, and `Archived` use the same metadata hierarchy as year/discipline.
- Status is text, not colour-only.
- Concept work is never styled to appear like an unnamed client commission.
- Confidential projects are not represented by fabricated visuals.

---

# 8. Case-study System

Every case study uses the same narrative spine while allowing each project's visual system to change the rhythm and media treatment.

## 8.1 Reusable structure

```text
01  Hero / transformation promise
02  Context and challenge
03  Strategy / defining idea
04  Identity system (when relevant)
05  Website experience (when relevant)
06  UI/UX system (when relevant)
07  Applications and system in use
08  Results / impact / client voice
09  Credits
10  Next project / contact
```

Irrelevant chapters are omitted rather than filled. The story must still flow from context to decision to expression to outcome.

## 8.2 Hero

### Purpose

State the transformation and establish the strongest visual idea.

### Content

- Project/client name.
- Transformation statement.
- Sector, disciplines, year, status.
- Dominant hero media.
- Live URL where approved.

### Rules

- Do not lead with a decorative mockup that hides the work.
- Hero may use full bleed, but text returns to the grid.
- The main title is a real heading and remains readable without animation.
- Media includes a poster/fallback and stable dimensions.

## 8.3 Challenge

### Purpose

Explain why the work mattered and the real constraints around it.

### Content

- Business/user context.
- Specific tension or broken perception.
- Audience and meaningful constraint.
- Success definition.

### Rules

- Avoid inflated problem statements.
- Keep to one strong reading passage plus supporting facts.
- Use before-state evidence only when fair and approved.

## 8.4 Strategy

### Purpose

Reveal the central decision that organised the work.

### Content

- Insight.
- Strategic or experience principle.
- Defining idea.
- Consequences for design and behaviour.

### Rules

- Give the idea a concise name only if that language was genuinely used.
- Pair explanation with one visual proof, diagram, or artefact.
- Avoid proprietary-process theatre and jargon.

## 8.5 Identity

### Purpose

Show how the idea became a coherent and generative brand system.

### Recommended sequence

1. Primary/responsive mark.
2. Typography.
3. Colour.
4. Composition and graphic behaviour.
5. Voice/messaging where relevant.
6. Motion principle.
7. Applications and real-world use.

### Rules

- Show direct artefacts as well as contextual mockups.
- Demonstrate behaviour across scale.
- Do not reduce the identity chapter to logo animation and stationery.

## 8.6 Website

### Purpose

Show how the brand becomes a responsive, usable digital experience.

### Recommended sequence

1. Information architecture or experience premise.
2. Key page/interaction at useful scale.
3. Responsive behaviour across meaningful widths.
4. Motion and transition principle.
5. Development/performance detail when NAVARICK built the experience.

### Rules

- Pair framed mockups with flat screenshots.
- Show behaviour, not three floating device screens.
- Keep interface copy legible in at least one image.

## 8.7 UI/UX

### Purpose

Explain the journey and system behind a complex interface.

### Recommended sequence

1. User need/task.
2. Journey or flow.
3. Key interaction.
4. Interface system and states.
5. Responsive/accessibility behaviour.
6. Validated improvement where available.

### Rules

- Present screens as a sequence, not a collage.
- Remove confidential or fabricated data.
- Do not claim research or testing NAVARICK did not conduct.

## 8.8 Results

### Purpose

Connect design work to a verifiable change.

### Evidence hierarchy

1. Verified metric with source and period.
2. Specific client-confirmed operational or perception change.
3. Attributable testimonial.
4. Honest qualitative outcome.

### Rules

- No animated counters.
- No percentages without baselines or source context.
- Quote length target: 25–45 words.
- Results use editorial type and rules, not dashboard stat cards.

## 8.9 Before/after module

- Compare equivalent states and crops.
- Label both states visibly.
- Include a short explanation of what changed and why.
- Drag interaction is optional; keyboard controls and static mobile pair are required.
- Never weaken or distort the before state.

## 8.10 Credits

- NAVARICK role.
- Client team.
- Collaborators.
- Photography, illustration, 3D, typefaces, and other licensed contributors.
- Credits remain readable and linked where appropriate.

## 8.11 Closing CTA

- Primary: next project, maintaining portfolio exploration.
- Secondary: start a project.
- The next project uses one strong media preview and clear title.
- Avoid trapping the visitor in an infinite automated project loop.

---

# 9. Motion Tokens

## 9.1 Character

Motion is weighted, optical, and inevitable. It behaves like a camera settling, a page being composed, or material catching light. It does not bounce, wobble, or announce itself continuously.

## 9.2 Duration tokens

| Token | Duration | Use |
|---|---:|---|
| `motion-instant` | 120 ms | Press, checkbox, immediate state feedback |
| `motion-fast` | 220 ms | Link, icon, small hover |
| `motion-base` | 420 ms | Component entrance, menu control, rule draw |
| `motion-medium` | 500 ms | Navigation morph, media state change |
| `motion-slow` | 700 ms | Clip reveal, crossfade, large image transition |
| `motion-cinematic` | 1100 ms | Hero material change, route transition maximum |

## 9.3 Easing tokens

| Token | Curve | Use |
|---|---|---|
| `ease-out` | `cubic-bezier(.16, 1, .3, 1)` | Entrances, hover release, reveal |
| `ease-in-out` | `cubic-bezier(.65, 0, .35, 1)` | Morph, crossfade, page curtain |
| `ease-linear` | Linear | Progress only; never primary interface motion |

Spring bounce is not part of the NAVARICK brand language.

## 9.4 Reveal tokens

| Reveal | Specification |
|---|---|
| Word reveal | 35–60 ms stagger; full phrase resolves quickly |
| Group reveal | 80–120 ms stagger between related groups |
| Headline | 420–700 ms; 12–20 px travel or blur up to 6 px |
| Body copy | 420 ms; 12–16 px travel; block-level only |
| Metadata | 220–420 ms opacity change |
| Media | 700 ms clip/mask; 1.03 → 1.00 scale |
| Rule | 420–500 ms draw from reading origin |

## 9.5 Hover tokens

| Interaction | Duration | Range |
|---|---:|---:|
| Text/rule | 220 ms | No layout movement |
| Arrow | 220 ms | 4–6 px |
| Project crop | 420–700 ms | Maximum 2% scale/crop shift |
| Service title | 220–420 ms | 4–8 px |
| Magnetic CTA | Continuous damped response | Maximum 6–8 px |

## 9.6 Scroll tokens

- Viewport reveal threshold: 10–18% inside the viewport.
- Parallax: target 3–5%, hard maximum 8% of element height.
- Sticky storytelling: one significant homepage passage maximum.
- Smooth-scroll interpolation: subtle and progressive; native scroll remains baseline.
- Scroll animations run once unless state continuity requires otherwise.
- Never animate layout dimensions from scroll.

## 9.7 Page transition tokens

- Total duration: 700–1100 ms.
- Outgoing content begins first; incoming title/media becomes visible before the curtain fully clears.
- Preferred treatments: obsidian curtain, controlled fade, or reliable shared project media.
- Transitions are interruptible and cancel safely.
- Browser back/forward restoration takes precedence.

## 9.8 Motion ownership

- CSS: simple hover, focus, and press feedback.
- Framer Motion: presence, component entrances, route choreography.
- GSAP: bounded hero timeline, complex mask, one approved pinned sequence.
- React Three Fiber/requestAnimationFrame: material scene and pointer light.
- Never let two systems animate the same property on the same element.

## 9.9 Reduced-motion rules

- Remove smooth scrolling, pinning, parallax, cursor tracking, blur, and long route transitions.
- Render final content states immediately.
- Replace hero 3D/video motion with an approved poster.
- Replace before/after drag with labelled static frames.
- Permit no animation or opacity under 160 ms.
- Ensure hidden/reveal initial states cannot suppress content when scripts fail.
- User preference overrides brand choreography without exception.

## 9.10 Continuous motion

Continuous decorative animation is prohibited. Exceptions:

- a genuine loading indicator;
- a user-controlled or contextually necessary product demonstration;
- an extremely subtle hero light state after performance testing, paused offscreen.

---

# 10. 3D Guidelines

## 10.1 Approved use

3D is used only when it adds material presence or responsive light behaviour that a rendered asset cannot deliver as effectively.

Approved candidates:

- the NAVARICK signature hero object;
- one controlled brand-system demonstration inside a relevant case study;
- a still rendered object used as ordinary imagery.

## 10.2 Avoid 3D when

- the source reference is already a rendered video and no meaningful interaction is needed;
- it delays the proposition or competes with project work;
- it serves as a generic futuristic decoration;
- it requires users to rotate or discover essential content;
- the same result can be delivered more reliably as video, image sequence, or still;
- it pushes the route outside performance budgets.

## 10.3 Visual rules

- Material: dark chrome/glass with warm bronze edge reflection and champagne specular detail.
- Motion: slow, weighted, and bounded.
- No particle explosion, wireframe assembly, neon emission, iridescent rainbow, or physics toy behaviour.
- Camera movement is minimal; lighting reveals form.
- Object never compromises text contrast.

## 10.4 Performance rules

- One persistent WebGL canvas maximum per route.
- Dynamically load after the semantic hero and poster are available.
- Scale device pixel ratio by device capability; do not default to maximum DPR.
- Compress geometry and textures; use the minimum light/shader complexity that preserves the idea.
- Pause rendering when offscreen, tab-hidden, or scene-static.
- Avoid continuous React state updates for pointer motion.
- Dispose geometry, materials, textures, observers, and animation frames on teardown.
- Static/Video fallback is mandatory.
- Initial route JavaScript budget excludes optional 3D only when the scene is genuinely deferred.
- Target 55–60 fps on modern desktop and do not demand real-time 3D on mid-tier mobile.

## 10.5 Mobile rules

- Default mobile experience is the approved poster or optimised short video.
- Real-time 3D is opt-in by capability, not viewport width alone.
- No pointer-specific interaction.
- One authored light pass may occur, then settle.
- Respect data-saving, reduced-motion, thermal, battery, and failed-WebGL conditions.
- The hero remains fully composed when 3D never loads.

## 10.6 3D approval gate

Before production 3D is approved, compare it against video/poster for:

- perceptible creative value;
- LCP and interaction cost;
- frame stability;
- visual fidelity;
- mobile fallback quality;
- development and maintenance cost.

If the value is primarily that “it is interactive,” choose the rendered asset.

---

# 11. Imagery Guidelines

## 11.1 General art direction

- Use authored, high-resolution, correctly licensed project assets.
- Let project work retain its own colour and visual language.
- Mix context, full compositions, direct artefacts, and intimate details.
- Every image must prove a decision, show scale, demonstrate coherence, explain use, or create an intentional pause.
- Avoid stock-office imagery and anonymous “creative team” scenes.
- NAVARICK-owned photography may be graded toward neutral blacks and warm highlights; client work is not recoloured.

## 11.2 Mockups

- Target approximately 30–40% contextual mockups and 60–70% direct design evidence.
- Use custom project-specific environments where possible.
- Keep lighting, perspective, shadows, and material logic consistent inside a project.
- Avoid repeated floating laptop/phone scenes.
- Browser/device frames are used only when they explain context.
- Do not use mockups to hide weak flat artwork.

## 11.3 Photography

- Prefer tactile detail, real application, human scale, and credible context.
- Portraits should feel observational and assured, not corporate.
- Avoid staged handshake, desk, meeting, and stock lifestyle conventions.
- Crops prioritise subject and negative space required by the composition.
- Credits and usage rights are recorded with the asset.

## 11.4 Renders

- Renders use physically plausible light and material.
- Dark scenes retain tonal separation; black objects must not disappear into the canvas.
- Bronze and champagne behave as reflected accents.
- Avoid glossy spectacle without narrative purpose.
- A render is labelled as conceptual when it depicts an unrealised application.

## 11.5 Website visuals

- Show responsive behaviour, not three static devices as proof of responsiveness.
- Pair contextual frames with flat, legible screenshots.
- Show at least one defining interaction or page at useful scale.
- UI copy should be legible somewhere in the narrative.
- Motion clips are short, muted, compressed, and poster-backed.

## 11.6 UI/UX visuals

- Show a user journey, sequence, state system, or decision.
- Avoid random screen collages.
- Remove confidential data and use plausible, approved replacements.
- Callouts explain only meaningful interaction or information decisions.
- Accessibility states are shown when they are relevant to the result.

## 11.7 Image ratios and crops

- Approved working ratios: 16:9, 3:2, 4:5, 1:1, and rare panoramic.
- Define focal point and art-directed crop for mobile when required.
- Do not crop marks, type, or UI controls unintentionally.
- Reserve dimensions before media load.
- Use captions and alt text as separate content fields.

## 11.8 Delivery

- Still images: AVIF/WebP with an appropriate fallback where required.
- Video: web-optimised sources based on tested browser support; muted and inline when decorative.
- Lazy-load non-critical media.
- Preload only the actual LCP asset.
- Do not use animated GIF for cinematic or UI motion.
- Every meaningful image receives descriptive alt text; decorative material images use empty alt.

---

# 12. Accessibility Standards

NAVARICK targets WCAG 2.2 AA as the minimum baseline. Accessibility is evaluated in static, motion, loading, error, and responsive states.

## 12.1 Contrast

- Normal text: at least 4.5:1.
- Large text: at least 3:1.
- Interactive boundaries and focus indicators: at least 3:1.
- Test glass against real background extremes.
- Project media never becomes the only carrier of text.
- Quiet Gray is limited to large/decorative/disabled content.
- Error/success states include text or icon in addition to colour.

## 12.2 Focus states

- Every interactive element has a visible `:focus-visible` state.
- Default focus: 2 px Champagne or Soft White, 4 px offset.
- Focus is never removed without an equal or stronger replacement.
- Focus is visible over both obsidian and project media.
- Menu/dialog focus is placed intentionally and restored on close.

## 12.3 Keyboard navigation

- Tab order follows the visual and reading order.
- All hover interactions have focus equivalents.
- Project previews use real links with useful accessible names.
- Menus, comparisons, carousels, video controls, and form fields work without pointer input.
- Escape closes dismissible overlays.
- No keyboard traps except correctly managed modal contexts.
- A skip-to-content link is present and visible on focus.

## 12.4 Motion

- Respect `prefers-reduced-motion` at first render.
- No scroll-jacking, forced section snapping, or animation-gated content.
- Avoid continuous decorative motion.
- Autoplay media is muted and pauseable where motion persists or conveys information.
- Flashing remains below harmful thresholds; decorative flashes are avoided entirely.
- Reduced motion receives composed poster/static states.

## 12.5 Touch and target size

- Minimum target: 44 × 44 px.
- Adjacent targets maintain sufficient separation.
- No essential action depends on hover or precise drag.
- Before/after interactions offer labelled controls or static comparisons.

## 12.6 Structure and content

- One semantic page-level heading.
- Heading order reflects document structure.
- Landmarks identify navigation, main content, and footer.
- Alt text describes meaningful content and context, not visual mood alone.
- Captions and credits remain text, not baked into images.
- Form inputs have persistent labels, instructions, and announced errors.

## 12.7 Zoom and reflow

- Content reflows without horizontal scrolling at 320 px CSS width.
- Browser zoom to 200% preserves all content and actions.
- Text is not locked into image assets.
- Sticky/fixed elements do not obscure focused content.

## 12.8 Validation

- Automated accessibility testing is necessary but insufficient.
- Manual keyboard review is required for every route.
- Screen-reader spot checks cover navigation, project links, menus, case-study structure, and contact flow.
- Reduced-motion and high-contrast conditions are part of visual QA.

---

# 13. Component Inventory

This inventory defines future responsibilities only. It does not prescribe implementation boundaries until wireframes and content prove the need.

## 13.1 Navigation

- **SiteHeader** — Global header state and positioning.
- **DesktopNavigation** — Desktop route links and project CTA.
- **MobileNavigationTrigger** — Accessible open/close control.
- **MobileNavigationPanel** — Full-screen editorial mobile menu.
- **NavigationLink** — Default, current, hover, and focus states.
- **Wordmark** — Approved official mark variants and sizing.
- **HeaderProjectCTA** — Compact Start a project action.
- **SkipLink** — Keyboard route to main content.
- **NavigationBackdrop** — Optional bounded glass surface.

## 13.2 Hero

- **CinematicHero** — Semantic hero composition and content hierarchy.
- **HeroCopy** — Eyebrow, headline, support, and action group.
- **HeroMaterialStage** — Media host independent of content.
- **HeroPoster** — Static and reduced-motion visual.
- **HeroVideo** — Optimised rendered animation option.
- **HeroLightInteraction** — Fine-pointer bounded light input.
- **HeroActions** — Primary and secondary CTA relationship.
- **ScrollCue** — Accessible route to next section.
- **OpeningFrame** — Optional capped asset-readiness frame.

## 13.3 Portfolio

- **FeaturedWorkSequence** — Homepage flagship project container.
- **FeaturedProjectModule** — Deep transformation preview.
- **GalleryProjectModule** — Faster variable project preview.
- **ProjectMetadata** — Client, discipline, sector, year, status.
- **ProjectMedia** — Responsive still/video wrapper and caption.
- **ProjectHoverPreview** — Intent-led enhancement with poster.
- **ProjectStatus** — Live/concept/in-progress/archive label.
- **WorkIndex** — Full portfolio listing structure.
- **WorkFilter** — Conditional filter when catalogue size justifies it.
- **CaseStudyEntry** — Opening project title, promise, facts, and media.
- **CaseStudyChapter** — Reusable narrative chapter boundary.
- **BeforeAfterComparison** — Accessible transformation comparison.
- **BrandSystemSequence** — Identity system reveal.
- **WebsiteShowcase** — Responsive website narrative.
- **UIJourneySequence** — Flow and interface-state narrative.
- **OutcomeEvidence** — Metric/qualitative result with source.
- **Testimonial** — Quote and attribution.
- **CreditsList** — Studio, client, and collaborator credits.
- **NextProject** — Case-study continuation.

## 13.4 Services

- **CapabilitiesIndex** — Four-discipline editorial list.
- **CapabilityRow** — Service name, outcome, and scope.
- **CapabilityMediaStage** — Optional active-row artefact.
- **ServicesHero** — Services page proposition.
- **ServiceChapter** — One service's problem, outcome, and scope.
- **DeliverablesList** — Representative outputs without commodity treatment.
- **EngagementModel** — Appropriate engagement shapes.
- **ProcessOverview** — Discover/Define/Design/Deliver summary.
- **FitChecklist** — Clear client/project fit criteria.
- **ServicesCTA** — Route to project enquiry.

## 13.5 About

- **AboutHero** — Studio point of view and identity.
- **StudioStatement** — Large editorial philosophy statement.
- **StudioPortrait** — Authored founder/team/collaborator media.
- **PrinciplesList** — Studio principles without generic icon cards.
- **ApproachNarrative** — How the studio thinks and works.
- **TeamIndex** — Fixed team members where accurate.
- **CollaboratorIndex** — Curated collaborators where accurate.
- **RecognitionList** — Verified awards/press only.
- **AboutCTA** — Project conversation route.

## 13.6 Contact

- **ContactHero** — Invitation and expectation setting.
- **ProjectInquiryForm** — One-page qualified enquiry flow.
- **FormField** — Label, control, description, and error relationship.
- **TextInput** — Text/email/company fields.
- **TextArea** — Project ambition/change prompt.
- **SelectField** — Project type/timing/investment selections.
- **CheckboxField** — Consent or optional acknowledgement.
- **InvestmentRange** — Optional and phrased as indicative investment.
- **FormStatus** — Loading, success, and failure announcement.
- **ContactAlternatives** — Email and relevant social routes.
- **AvailabilityNote** — Accurate availability/response expectation.
- **PrivacyNotice** — Clear data-use statement.

## 13.7 Shared

- **Container** — Site-grid and reading-width boundaries.
- **Section** — Semantic section spacing and optional label.
- **Grid** — Responsive column contract.
- **Stack** — Vertical rhythm.
- **Cluster** — Inline/wrapping relationship.
- **DisplayText** — Display hierarchy and authored lines.
- **Heading** — Semantic heading with visual role.
- **BodyText** — Reading widths and text variants.
- **Eyebrow** — Section label treatment.
- **MetaText** — Project/system metadata.
- **PrimaryButton** — Primary action states.
- **SecondaryButton** — Secondary action states.
- **TextLink** — Editorial link states.
- **IconButton** — Accessible compact action.
- **Rule** — Editorial divider/progress line.
- **Tag** — Rare project/status metadata treatment.
- **GlassSurface** — Controlled glass material.
- **ResponsiveImage** — Art direction, sizes, alt, and loading.
- **ResponsiveVideo** — Poster, sources, playback, visibility handling.
- **MediaCaption** — Caption and credit relationship.
- **OutcomeFact** — Evidence presentation without stat card.
- **EmptyState** — Honest missing/no-result state where applicable.
- **LoadingState** — Stable skeleton/poster state.
- **ErrorState** — Clear recovery action and announcement.
- **SiteFooter** — Navigation, email, legal, and social utility.
- **CookieNotice** — Only if consent requirements justify it.
- **VisuallyHidden** — Assistive content utility.
- **FocusRing** — Shared visible-focus contract.

## 13.8 Motion

- **MotionPreferenceProvider** — User preference and capability boundary.
- **Reveal** — Standard block entrance.
- **SplitTextReveal** — Accessible visual line/word reveal.
- **ClipMediaReveal** — Shared image/motion reveal language.
- **CrossfadeMedia** — Active-state media transition.
- **ParallaxMedia** — Bounded optional parallax.
- **MagneticTarget** — Fine-pointer CTA enhancement.
- **ScrollProgress** — Local narrative progress where justified.
- **StickyStory** — One approved pinned sequence.
- **RouteTransition** — Interruptible page choreography.
- **ReducedMotionFallback** — Explicit final/static state.
- **MotionProfiler** — Development-only performance aid.

## 13.9 3D

- **MaterialSceneBoundary** — Lazy-load and error boundary.
- **MaterialRevealScene** — Signature NAVARICK object scene.
- **MaterialObject** — Geometry/material responsibility.
- **SceneLighting** — Bronze/champagne lighting rig.
- **PointerLightController** — Bounded fine-pointer interaction.
- **SceneQualityController** — DPR/capability quality scaling.
- **SceneVisibilityController** — Pause/resume based on viewport and tab state.
- **WebGLFallback** — Video/poster replacement.
- **SceneLoader** — Non-blocking readiness state.

## 13.10 System/utility components required across groups

- **SeoMetadata** — Route metadata contract.
- **StructuredData** — Organisation and CreativeWork data where accurate.
- **NotFoundView** — Branded but useful 404.
- **RouteErrorView** — Recovery-focused route failure.
- **AnalyticsEvents** — Typed project and enquiry events.

### Inventory rule

A listed component is not permission to build it prematurely. Components are introduced only when approved wireframes and repeated use prove a stable boundary.

---

# 14. Approval Checklist

Wireframing begins only when the system is approved at the level necessary to prevent foundational rework.

## 14.1 Brand and philosophy

- [ ] The six design principles—Luxury, Editorial, Cinematic, Premium, Timeless, Interactive—are approved.
- [ ] “Form, revealed” remains the governing experience idea.
- [ ] Stakeholders accept that restraint and project evidence take priority over decorative spectacle.
- [ ] SaaS, generic agency, crypto/neon, blob-gradient, and card-heavy patterns remain explicit anti-patterns.

## 14.2 Colour

- [ ] The core palette values and semantic roles are approved.
- [ ] The 78/16/5/1 distribution is accepted as a direction, not a literal pixel audit.
- [ ] Champagne/Obsidian is approved as the preferred filled-action pairing.
- [ ] White-on-bronze is rejected for normal button text.
- [ ] Glass and metallic effects remain limited to specified contexts.

## 14.3 Typography

- [ ] Instrument Serif is approved for editorial accent use.
- [ ] Neue Montreal is licensed, or Manrope is formally approved as fallback.
- [ ] Inter is approved for body and functional text.
- [ ] Desktop/mobile type roles, weights, leading, and tracking are approved.
- [ ] Working font files are available before high-fidelity layout evaluation.

## 14.4 Layout

- [ ] Breakpoints, grid columns, gutters, margins, and 1600 px maximum grid are approved.
- [ ] Reading widths and section-spacing ranges are approved.
- [ ] Mobile remains an authored four-column composition.
- [ ] Square editorial media and restrained radii are accepted.
- [ ] Short laptop heights are included in the future wireframe review.

## 14.5 Navigation and actions

- [ ] Header remains persistent and morphs into a compact dark-glass state.
- [ ] Mobile navigation is a full-screen editorial index, not a generic drawer.
- [ ] Start a project remains the global navigation CTA.
- [ ] Primary, secondary, text, and magnetic action rules are approved.
- [ ] Magnetic behaviour is capped at two CTA instances per page.

## 14.6 Portfolio and case studies

- [ ] The Featured Project, Gallery Project, and Case-study Entry modules are understood as editorial modules, not cards.
- [ ] Two flagship projects are identified for deep homepage treatment.
- [ ] Three to four additional projects are identified for the gallery or the count is deliberately reduced.
- [ ] Every selected project has approved usage rights, credits, status, and enough content for its assigned module.
- [ ] The reusable case-study spine is approved.
- [ ] Before/after comparisons will use equivalent, honest evidence.

## 14.7 Motion and 3D

- [ ] Motion duration, easing, reveal, hover, scroll, and transition tokens are approved.
- [ ] The hero material reveal is the sole signature mechanic.
- [ ] Reduced-motion behaviour is approved as a first-class design state.
- [ ] The hero source is confirmed as video, editable 3D, or both.
- [ ] 3D remains conditional on proving value over video/poster.
- [ ] One-canvas maximum and mobile poster/video default are accepted.

## 14.8 Imagery and content readiness

- [ ] Official wordmark variants are supplied.
- [ ] Project imagery, video, renders, and mockups are inventoried with rights and credits.
- [ ] Art-directed crop and alt-text requirements are recorded.
- [ ] At least two case studies have credible challenge, idea, expression, and result narratives.
- [ ] Results and testimonials are verified; unsupported metrics are removed.
- [ ] Founder/team/collaborator model is confirmed before About wireframes.

## 14.9 Accessibility

- [ ] WCAG 2.2 AA is accepted as the minimum target.
- [ ] Contrast rules and prohibited pairings are approved.
- [ ] Focus style, keyboard behaviour, touch targets, and skip link are approved.
- [ ] Hover-only meaning, scroll trapping, and animation-gated content are prohibited.
- [ ] Reduced-motion, 200% zoom, and 320 px reflow are included in acceptance testing.

## 14.10 Technical feasibility

- [ ] Hero medium can meet the PRD's LCP and media budgets.
- [ ] Font plan can meet the 180 KB above-the-fold budget.
- [ ] Static page hierarchy works without Framer Motion, GSAP, Lenis, or WebGL.
- [ ] Media dimensions and responsive delivery can prevent layout shift.
- [ ] Component inventory is treated as future scope, not a bulk-build instruction.

## 14.11 Final approval questions

Before wireframes begin, all decision-makers should answer yes:

1. Can the system create a recognisable NAVARICK page without relying on the logo or hero 3D?
2. Is the work allowed to bring its own colour and visual language into the system?
3. Are hierarchy and conversion clear without motion?
4. Are mobile, reduced motion, focus, and loading states part of the intended design—not engineering cleanup?
5. Does every visual rule support clarity, craft, trust, or memory?

---

# Open Decisions and Risks

## Decisions required

1. Confirm Neue Montreal licence or approve Manrope.
2. Supply official wordmark variants and rules.
3. Confirm whether the hero source is rendered animation, editable 3D, or both.
4. Select the two flagship and three-to-four gallery projects.
5. Verify outcomes, testimonial, project status, usage rights, and credits.
6. Confirm the studio model: founder-led, fixed team, or curated collaborators.
7. Confirm domain, public contact email, and response expectation.

## Principal risks

| Risk | Consequence | Control |
|---|---|---|
| 3D becomes the product | Slow delivery and weak portfolio proof | Prototype video/poster first; require value test |
| Gold/glass overuse | Crypto/template aesthetic | Enforce colour ratio and limited glass contexts |
| Font decision remains open | Layout and licence rework | Resolve before high-fidelity design |
| Weak or unavailable case-study evidence | Decorative portfolio | Prioritise fewer, deeper projects |
| Motion added before hierarchy | Animation-led usability | Approve static wireframes first |
| Project media dominates performance | Missed LCP/INP targets | Asset inventory, budgets, posters, lazy loading |
| Hover-led desktop concept | Broken touch/keyboard experience | Design permanent information states first |
| Component inventory treated as a build list | Premature abstraction | Build only after wireframe repetition proves need |

---

# Recommended Next Phase

After this system and its open decisions are approved, proceed to **Content-Accurate Low-Fidelity Wireframes**.

That phase should produce:

- homepage wireframes at wide desktop, short laptop, tablet, and mobile;
- Work index and one flagship case-study wireframe;
- navigation closed/open/sticky states;
- static, loading, failed-media, and reduced-motion hero storyboards;
- real copy lengths and representative approved media ratios;
- keyboard/focus order annotations;
- component-boundary hypotheses based on repeated patterns, not the inventory alone.

High-fidelity visual design and React implementation should wait until those wireframes prove hierarchy, narrative, conversion, and responsive behaviour.
