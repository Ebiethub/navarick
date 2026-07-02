# NAVARICK High-Fidelity UI Specification

**Status:** Visual design definition / implementation approval candidate
**Version:** 1.0
**Date:** 24 June 2026
**Scope:** Homepage, Work Index, flagship Case Study, Services, About, Contact, global navigation, footer, motion, and accessibility
**Authority:** Extends `NAVARICK-V1-PRD.md`, `NAVARICK-HOMEPAGE-UX-BLUEPRINT.md`, `NAVARICK-DESIGN-SYSTEM.md`, and `NAVARICK-WIREFRAMES.md`.

---

## Document purpose

This specification defines the exact visual and interaction system a designer should recreate in Figma before implementation. It converts the approved strategy and wireframes into measurable frames, grids, type styles, spacing, media ratios, states, and motion annotations.

The document is content-accurate at the system level but still uses explicit placeholders where NAVARICK has not supplied final project names, outcomes, testimonials, wordmark assets, or imagery. A placeholder may be replaced only by content of the same type and comparable length unless the layout is re-reviewed.

## Design thesis

NAVARICK is a controlled exhibition. The interface uses darkness, editorial scale, physical light, and disciplined spacing to frame project evidence. The hero contains the only signature spectacle. Everywhere else, the work carries the colour and the interface becomes quieter.

### Absolute constraints

- No SaaS feature-card language.
- No generic agency tile grid.
- No decorative blob, neon, crypto, or rainbow-metal treatment.
- No essential information hidden until hover.
- No motion-gated content.
- No unsupported claim, client, result, award, or testimonial.
- No real-time 3D without an approved poster/video fallback.

---

# 1. Figma File Architecture

## 1.1 Recommended pages

```text
00 — Cover & status
01 — Foundations
02 — Components & states
03 — Navigation & footer
04 — Home
05 — Work index
06 — Case study
07 — Services
08 — About
09 — Contact
10 — Motion storyboards
11 — Responsive & reduced motion
12 — Handoff annotations
```

## 1.2 Frame naming

Use: `[Page] / [Breakpoint] / [State]`

Examples:

- `Home / 1440 / Default`
- `Home / 390 / Reduced Motion`
- `Work / 1280 / Filter Brand`
- `Navigation / 390 / Menu Open`
- `Contact / 390 / Validation Error`

## 1.3 Canonical frames

| Frame | Width | Review height | Purpose |
|---|---:|---:|---|
| Wide desktop | 1440 px | 900 px viewport | Primary visual-design frame |
| Desktop/laptop | 1280 px | 800 px viewport | Primary implementation anchor |
| Compact laptop | 1024 px | 768 px viewport | Stress test for width and height |
| Tablet portrait | 768 px | 1024 px viewport | Touch/tablet composition |
| Mobile | 390 px | 844 px viewport | Primary mobile frame |
| Minimum mobile | 320 px | 568 px viewport | Reflow and overlap stress test |

Full-page Figma frames extend vertically according to content. The listed heights define the viewport used to evaluate sticky, hero, and first-impression behaviour.

## 1.4 Layout grids

| Frame | Columns | Margin | Gutter | Calculated column width |
|---|---:|---:|---:|---:|
| 1440 | 12 stretch | 64 px | 24 px | 87.33 px |
| 1280 | 12 stretch | 32 px | 20 px | 83 px |
| 1024 | 12 stretch | 32 px | 20 px | 61.67 px |
| 768 | 8 stretch | 24 px | 20 px | 72.5 px |
| 390 | 4 stretch | 20 px | 16 px | 75.5 px |
| 320 | 4 stretch | 20 px | 16 px | 58 px |

Grid maximum width is 1600 px. On canvases wider than 1728 px, centre the 1600 px grid and allow only approved full-bleed media to extend beyond it.

## 1.5 Base spacing

Use only this spacing scale for layout:

`4, 8, 12, 16, 24, 32, 48, 64, 96, 128, 160, 240 px`

Optical corrections of 1–2 px are allowed for icon/type alignment only. They are not layout tokens.

## 1.6 Section padding anchors

| Frame | Standard top/bottom | Compact transition | Cinematic pause |
|---|---:|---:|---:|
| 1440 | 160 px | 128 px | 200–240 px |
| 1280 | 128 px | 96 px | 160–200 px |
| 1024 | 112 px | 96 px | 160 px |
| 768 | 96 px | 72 px | 128 px |
| 390/320 | 80 px | 64 px | 96 px |

Section height is content-led unless this document specifies a minimum viewport relationship.

---

# 2. Global Visual Foundations

## 2.1 Colour application

| Role | Token | Value | Figma use |
|---|---|---:|---|
| Page canvas | Obsidian 950 | `#070706` | Default page fill |
| Raised/alternate canvas | Obsidian 900 | `#0D0D0C` | Tonal section separation |
| Navigation/glass base | Charcoal 800 | `#181816` | 52% opacity in sticky nav |
| Strong dark state | Charcoal 700 | `#24221F` | Hover/input surfaces |
| Warm accent | Bronze 500 | `#A8733A` | Rules, active detail, reflected light |
| Warm hover | Bronze 400 | `#C08A4A` | Hover and active fill |
| Primary action | Champagne 300 | `#D8C29A` | Filled CTA, selected detail |
| Fine warm highlight | Champagne 200 | `#E7D8BB` | Thin rule/specular highlight |
| Cool metadata | Chrome 300 | `#BFC3C5` | Metadata and chrome edge |
| Specular highlight | Chrome 100 | `#E3E5E5` | Rare material highlight |
| Primary text | Soft White | `#F2F0EB` | Headings and body |
| Secondary text | Muted Gray | `#9A9892` | Body secondary/captions |
| Disabled/decorative | Quiet Gray | `#696762` | Large/decorative/disabled only |

### Required pairings

- Primary CTA: Champagne 300 fill with Obsidian 950 text.
- Optional bronze-filled control: Bronze 400 fill with Obsidian 950 text.
- Soft White text on Bronze 500 is not permitted for normal-size labels.
- Focus ring: 2 px Champagne 300, 4 px offset; use Soft White when champagne lacks 3:1 local contrast.
- Default border: Soft White at 12%; strong border: Soft White at 22%.

## 2.2 Type styles

Use the following Figma text-style names and values.

| Figma style | Family | 1440/1280 | 768 | 390/320 | Weight | Line height | Tracking |
|---|---|---:|---:|---:|---:|---:|---:|
| `Display/Hero` | Neue Montreal or Manrope | 128 px | 72 px | 58 px | 500 | 0.90 | `-0.05em` |
| `Display/Page` | Neue Montreal or Manrope | 104 px | 64 px | 48 px | 500 | 0.94 | `-0.04em` |
| `Display/Editorial` | Instrument Serif | 104 px | 64 px | 52 px | 400 | 0.96 | `-0.02em` |
| `Heading/H1` | Neue Montreal or Manrope | 72 px | 48 px | 42 px | 500 | 1.00 | `-0.035em` |
| `Heading/H2` | Neue Montreal or Manrope | 48 px | 38 px | 34 px | 500 | 1.05 | `-0.025em` |
| `Heading/H3` | Neue Montreal or Manrope | 30 px | 28 px | 26 px | 500 | 1.15 | `-0.015em` |
| `Subheading` | Neue Montreal or Manrope | 22 px | 20 px | 19 px | 500 | 1.35 | `-0.01em` |
| `Body/Large` | Inter | 20 px | 19 px | 18 px | 400 | 1.50 | `0` |
| `Body/Default` | Inter | 16 px | 16 px | 16 px | 400 | 1.60 | `0` |
| `Body/Strong` | Inter | 16 px | 16 px | 16 px | 600 | 1.55 | `0` |
| `Caption` | Inter | 14 px | 14 px | 14 px | 400 | 1.45 | `0.01em` |
| `Navigation` | Neue Montreal or Manrope | 14 px | 16 px | 16 px | 500 | 1.20 | `0` |
| `Label` | Inter | 12 px | 12 px | 12 px | 500 | 1.20 | `0.12em` |

### Type constraints

- Hero display maximum width at 1440: 9 columns / 812 px; preferred 2–3 lines.
- Page title maximum width: 10 columns.
- Lead text maximum width: 840 px.
- Body text maximum width: 720 px; ideal 45–72 characters.
- Labels are uppercase. Navigation and headings use sentence case.
- Instrument Serif is limited to one phrase or one major statement per section.
- If Neue Montreal is not licensed before Figma production, use Manrope in every file; do not mix provisional families.

## 2.3 Rules, borders, radius, shadow

- Editorial media radius: 0 px.
- Input radius: 4 px.
- Compact menu/dialog radius: 10 px.
- Pill radius: 999 px, navigation shell and compact CTA only.
- Rule: 1 px Soft White at 12%; section rule may rise to 22%.
- Sticky navigation shadow: `0 18 60 / 42% black`.
- Utility shadow: `0 8 24 / 28% black`.
- No project-card shadows.
- Bronze glow: 48 px blur, Bronze 500 at 14% maximum; hero material only.

## 2.4 Image placeholders in Figma

Every media frame must include:

- intended ratio;
- focal-point marker;
- asset name/status;
- desktop and mobile crop annotation;
- alt-text/empty-alt decision;
- video poster frame where relevant;
- expected intrinsic dimensions.

Do not use anonymous grey boxes in the final design handoff. Use approved assets or labelled content-accurate stand-ins matching the final ratio and contrast.

---

# 3. Navigation Specification

## 3.1 Desktop initial state

### 1440 frame

- Header bounding box: `x 64`, `y 24`, `w 1312`, `h 64`.
- Wordmark: left aligned at `x 64`, vertically centred; maximum visual width 148 px, maximum height 24 px.
- Primary link group: Work, Services, About; right aligned before CTA with 32 px gaps.
- CTA: `h 48`, horizontal padding 24 px; right edge at `x 1376`.
- Gap from About to CTA: 32 px.
- Header content has no visible shell over the hero in its initial state.

### 1280 frame

- Bounding box: `x 32`, `y 20`, `w 1216`, `h 64`.
- Wordmark maximum width 140 px.
- Link gap 28 px; About-to-CTA gap 24 px.

## 3.2 Desktop sticky state

- Trigger: after 80 px vertical scroll or when hero contrast zone ends, whichever comes first.
- 1440 shell: `x 48`, `y 16`, `w 1344`, `h 64`.
- 1280 shell: `x 24`, `y 16`, `w 1232`, `h 60`.
- Fill: Charcoal 800 at 52%; backdrop blur 18 px; saturation 115%.
- Border: 1 px Chrome 100 at 14%.
- Inset top highlight: 1 px white at 10%.
- Shadow: approved sticky-navigation shadow.
- Internal horizontal padding: 16 px left, 8 px right around CTA.
- Header stays visible; it does not auto-hide on downward scroll.

## 3.3 Desktop interaction states

- Link hover: Soft White text, 1 px rule draws over 220 ms.
- Current route: persistent 1 px Champagne rule and semantic current state.
- Focus: 2 px Champagne outline, 4 px offset, no clipped ring.
- CTA hover: Champagne 300 → Champagne 200 over 220 ms; arrow shifts 5 px.
- Press: content translates 1 px downward for 120 ms; outer geometry does not shrink.

## 3.4 Mobile closed state

### 390 frame

- Header: `x 20`, `y 16`, `w 350`, `h 48`.
- Wordmark max width 124 px, max height 20 px.
- Menu control: `48 × 48`, aligned to right edge.
- Safe-area top is added above the 16 px visual inset where required.

### 320 frame

- Header: `x 20`, `y 12`, `w 280`, `h 48`.
- Wordmark max width 112 px.

Sticky mobile shell begins after 64 px scroll:

- `x 12`, `y 12`, width `frame − 24`, height 56 px.
- Same glass material as desktop; internal padding 8 px.

## 3.5 Mobile open menu

- Full frame overlay fixed to viewport.
- Fill: Obsidian 950 at 98%; no project content visible underneath.
- Top row repeats wordmark and changes Menu to Close in the same 48 px target.
- Main route list begins 128 px below the top on 390; 104 px on short 320 frame.
- Route links: `Heading/H2`, 48 px vertical rhythm, full-width 48 px minimum targets.
- Active route uses a leading two-digit index and persistent rule.
- Start a project appears after a 48 px gap beneath route links.
- Email/social utility anchors 32 px above the safe-area bottom.
- Featured-project preview is omitted on 320 and shown on 390/768 only when it does not push utility content below the fold.

## 3.6 Menu transition

- Open total: 500 ms.
- Overlay opacity: 0 → 1 in 220 ms.
- Route group: y 16 → 0, opacity 0 → 1, 420 ms, 60 ms stagger per link.
- Utility group begins 120 ms after route group.
- Close: 350 ms, reverse group fade then overlay.
- Escape, route selection, and Close return focus appropriately.
- Reduced motion: overlay appears immediately or within 120 ms; no stagger/translation.

---

# 4. Footer Specification

## 4.1 Desktop footer

- Background: Obsidian 950.
- Top border: 1 px Soft White at 12%.
- 1440 internal frame: 1312 px wide, x 64.
- Top padding: 96 px; bottom padding: 48 px.
- Minimum total height: 440 px.

### Layout

- Row 1: wordmark spans columns 1–4; route index columns 7–9; contact/social columns 10–12.
- Wordmark maximum width: 240 px.
- Route links use Navigation style with 16 px vertical spacing.
- Email uses Subheading style and wraps only as a complete address.
- Optional location/time-zone line uses Caption/Muted Gray.
- Row 2 begins after 128 px minimum vertical gap.
- Legal/copyright left; privacy and social utility right.
- Oversized cropped wordmark may occupy the final background plane only if the official mark supports the crop and all utility text retains contrast.

## 4.2 Mobile footer

- Padding: 80 px top, 20 px horizontal, 32 px bottom plus safe area.
- Wordmark first, max width 180 px.
- Routes begin after 48 px; each target minimum 44 px.
- Contact begins after 48 px.
- Legal utility follows after 64 px and stacks with 12 px gaps.
- No oversized cropped wordmark on the 320 frame.

## 4.3 Footer interactions

- Text-link rule draw: 220 ms.
- Social links include visible names, not icon-only presentation.
- Focus ring is never clipped by footer overflow.
- Footer contains no newsletter, awards strip, or secondary CTA competing with the preceding Contact CTA.

---

# 5. Homepage Specification

## 5.1 Page canvas and rhythm

- Default fill: Obsidian 950.
- Alternate reading sections may use Obsidian 900 or Charcoal 800 only when separation is otherwise unclear.
- 1440 target full-page length: approximately 10,800–12,600 px with real content.
- 390 target full-page length: approximately 13,000–15,500 px due to linear project storytelling.
- Section order is fixed: Hero, Featured Work, Philosophy, Capabilities, Selected Works, Process, Results, Contact CTA, Footer.

## 5.2 Hero — exact composition

### 1440 × 900 viewport

- Hero frame: `x 0`, `y 0`, `w 1440`, `min-h 900`.
- Header occupies y 24–88.
- Eyebrow: `x 64`, `y 152`, width 320 px, Label style.
- Headline: `x 64`, `y 190`, width 800–840 px; Display/Hero 128/115 px; authored three-line maximum.
- Preferred line plan:
  - Line 1: We give ambitious
  - Line 2: ideas distinctive
  - Line 3: form.
- Hero media stage: `x 500`, `y 72`, `w 876`, `h 720`; object visual centre approximately `(968, 420)`.
- Object occupies 50–62% of stage width and 62–78% of stage height; it may pass behind headline but never behind essential body copy.
- Support copy: `x 64`, `y 708`, width 480 px; Body/Large 20/30.
- Action group: right aligned, bottom baseline at y 820; primary followed by secondary with 12 px gap.
- Scroll cue: centred at x 720, baseline y 858; label plus 24 px line.
- Safe bottom padding: 40 px.

### 1280 × 800 viewport

- Eyebrow x 32, y 132.
- Headline x 32, y 168, width 720 px; Display/Hero 112/104.
- Media stage x 420, y 64, w 828, h 632.
- Support x 32, y 620, width 440 px.
- Actions x auto/right 32, y 700.
- Scroll cue baseline y 760.

### 1024 × 768 viewport

- Headline width 650 px; size 88/82.
- Media stage x 360, y 96, w 632, h 520.
- Support and actions share lower row only if total width fits 960 px; otherwise actions sit 24 px below support.
- Object overlap is reduced before type is reduced below 88 px.

### 768 × 1024 tablet

- Hero min-height 1024 px.
- Header x 24, y 16.
- Eyebrow x 24, y 128.
- Headline x 24, y 166, width 690 px; 72/68.
- Media stage x 104, y 384, w 640, h 420.
- Support x 24, y 830, width 520 px.
- Actions x 24, y 912, horizontal if they fit; 12 px gap.
- No pointer interaction.

### 390 × 844 mobile

- Hero min-height: 844 px / `100dvh`.
- Header x 20, y 16.
- Eyebrow x 20, y 104.
- Headline x 20, y 136, width 350 px; 58/53; maximum four lines.
- Media stage x 20, y 354, w 350, h 270; ratio approximately 1.30:1.
- Object occupies 72–84% of media width.
- Support x 20, y 648, width 350 px; 18/27.
- Primary CTA x 20, y 736, h 48; secondary follows with 12 px gap or moves to next row on 320.
- Scroll cue appears at bottom centre only if it does not overlap the safe area; otherwise omit it.

### 320 × 568 minimum mobile

- Hero becomes content-height with `min-height: 568 px`, not forced fixed height.
- Eyebrow y 80; headline y 108, 48/46, width 280.
- Media stage y approximately 260, ratio 16:9, height 158.
- Support follows with 24 px gap.
- CTAs stack at 48 px height with 12 px gap.
- Scroll cue omitted.

## 5.3 Hero imagery and contrast

- Stage has no visible container boundary.
- Base scene fill matches Obsidian 950 to avoid a rectangular media edge.
- Material object uses dark glass/chrome, warm bronze edge light, and champagne/chrome specular highlight.
- A text-safe zone of at least 36% stage width remains behind/adjacent to the headline.
- If project/hero media cannot preserve local contrast, reposition content; do not add a universal black overlay.
- Poster dimensions: minimum 1920 × 1200 desktop and 900 × 900 mobile art direction.

## 5.4 Hero reveal sequence

| Time | Element | Start | End | Duration/easing |
|---:|---|---|---|---|
| 0 ms | Canvas | Obsidian final fill | unchanged | immediate |
| 150 ms | Wordmark/nav | opacity 0, y -8 | opacity 1, y 0 | 420 ms, ease-out |
| 300 ms | Media/object | opacity 0, scale 1.02 | opacity 1, scale 1 | 700 ms, ease-in-out |
| 650 ms | Headline | line opacity 0, y 18, blur 6 | final | 700 ms, 55 ms line/word stagger |
| 1200 ms | Support | opacity 0, y 14 | final | 420 ms, ease-out |
| 1450 ms | CTA group | opacity 0, y 12 | final | 420 ms, single group |
| 1850 ms | Scroll cue | opacity 0 | opacity 1 | 220 ms |
| 2200 ms | Pointer light | inactive | available | damped continuous while in stage |

Reduced motion displays all final states and poster immediately.

## 5.5 Featured Work

### Section intro

- 1440: y begins 160 px after hero; x 64; width 8 columns.
- Label → 16 px gap → Heading/H1 → 32 px gap → Body/Large.
- Intro bottom to Project A: 96 px.

### Featured Project A — desktop

- Module min-height: 1280 px.
- Media: columns 1–8, width 852 px at 1440; sticky top 112 px; ratio 4:5 container capped at 760 px high, using art-directed crop.
- Narrative: columns 9–12, starts 160 px below media top.
- Project title Heading/H2; metadata 16 px below; transformation Subheading 32 px below.
- Context, idea, result each separated by 96–160 px within normal scroll.
- CTA sits 32 px below result and never at the media bottom edge by default.

### Featured Project B — desktop

- Begins 200 px after Project A ends.
- Narrative columns 1–5; media columns 6–12.
- Media ratio 16:10 or 3:2; minimum displayed height 620 px.
- No sticky sequence if Project A already uses one.

### Mobile

- Section padding 96 px top, 80 px bottom.
- Project title → 12 px metadata → 24 px transformation → 32 px media.
- Media full 350 px width; use 4:5 or 3:2 according to content.
- Context begins 32 px after media; idea/result each 48 px apart.
- CTA 32 px after result.
- Project-to-project gap: 128 px.

### Motion

- Media clip reveal: 700 ms, scale 1.03 → 1.00.
- Metadata begins 120 ms after media reaches 70% reveal.
- Hover: media crop/scale maximum 1.02 over 700 ms; arrow x 0 → 5 px over 220 ms.
- Focus: no image scale required; visible outline/rule state.

## 5.6 Studio Philosophy

- Desktop min-height: 860 px; padding 160 px top/bottom.
- Label at columns 1–2.
- Main statement columns 1–9, top 48 px beneath label; use Heading/H1 with one Instrument Serif phrase in Display/Editorial only when line balance remains stable.
- Support copy columns 9–12, vertically aligned to statement's final third; Body/Large, max width 360 px.
- Our approach text link 32 px beneath support.
- Optional studio detail: columns 1–4, 3:2 ratio, placed 96 px below statement only if it does not dilute the quiet reading field.
- Mobile: label → 24 px → statement → 40 px → support → 32 px → link; no side media by default.
- Reveal: statement lines 60 ms stagger, 700 ms; support 120 ms later.

## 5.7 Capabilities

- Desktop padding 160 px top/bottom.
- Heading spans columns 1–6; Body/Large introduction columns 8–12.
- Gap to first row: 96 px.
- Each row minimum height: 152 px desktop, 176 px tablet, content-led mobile.
- Row grid: number column 1; title columns 2–5; outcome columns 6–8; scope columns 9–12.
- Rule spans all 12 columns.
- Title: Heading/H3; outcome: Body/Default; scope: Caption/Muted Gray.
- Shared media stage, if used, replaces columns 9–12 scope only at 1440; scope remains available in text elsewhere. Do not hide scope on hover.
- Mobile row: number/title on first line; outcome 16 px below; scope 12 px below; 32 px vertical padding.
- Explore services link: 48 px below final row, aligned to title column desktop and left margin mobile.
- Hover/focus: title x +6 px, rule opacity 12% → 32%, optional media crossfade 500 ms.

## 5.8 Selected Works

- Desktop padding 160 px top/bottom.
- Heading columns 1–8; project count aligned column 12 baseline.
- Intro below heading with 24 px gap, width 560 px.
- First project begins 96 px later.

### Module sequence at 1440

1. Panoramic project: columns 1–12, ratio 2:1; metadata 16 px below.
2. Gap 160 px.
3. Portrait project: columns 1–5, ratio 4:5; second landscape project columns 7–12, ratio 3:2, aligned 160 px lower.
4. Gap from taller module bottom: 160 px.
5. Final landscape/detail project: columns 4–12, ratio 16:9.
6. View all work link: columns 1–3, aligned 64 px below final metadata.

### Metadata

- Title: Heading/H3.
- Discipline/year/status: Label, 12 px below title.
- Assignment statement: Body/Default, 16 px below metadata, maximum 480 px.

### Mobile

- One column, 350 px width.
- Alternate ratios according to asset; never crop all to one ratio.
- Media → 16 px title → 8 px metadata → 12 px statement.
- Module gap: 96 px.
- View all work 48 px after final module.

### Interaction

- Hover reserves metadata position; no overlay.
- Preview video starts only on pointer/focus intent when practical, crossfades from poster in 220 ms, stops/resets on leave.
- Route transition may share media only when back navigation and reduced motion remain correct.

## 5.9 Process

- Desktop padding 160 px; minimum height 820 px.
- Heading columns 1–5; introduction columns 8–12.
- Stage area begins 96 px below.
- Four equal 3-column stages with 24 px gutters.
- Connecting rule at stage top; number Label 16 px below rule; title Heading/H3 24 px below; purpose Body/Default 24 px below; output Caption 24 px below.
- No cards or separate backgrounds per stage.
- Mobile: one vertical rule at x 20; content inset to x 48; stages separated by 64 px.
- Motion: rule draw 700 ms; stage content stagger 100 ms. Reduced motion shows full rule and stages.

## 5.10 Results / Proof

- Desktop padding 160 px; minimum height 760 px.
- Label columns 1–2.
- Quote columns 1–9; Heading/H1 or Instrument Serif 64–80 px depending length; maximum 45 words.
- Attribution columns 10–12, aligned to quote lower third.
- Outcomes row begins 96 px below quote.
- Up to three equal 4-column outcome groups separated by vertical rules.
- Outcome value Heading/H2; label/source Caption 16 px below.
- Mobile: quote Heading/H2/34 px; attribution 24 px below; outcomes stack with 48 px gaps and horizontal rules.
- No carousel or count-up motion.

## 5.11 Final Contact CTA

- Desktop min-height: 820 px; top/bottom padding 160 px.
- Headline columns 1–10, Heading/H1 72 px, max 3 lines.
- Support columns 1–5, 48 px below headline.
- CTA group columns 8–12, aligned to support top; Large 56 px buttons with 12 px gap.
- Response expectation columns 8–12, 24 px below CTA group, Caption style.
- Optional material detail fills right/rear plane but keeps 40% text-safe area.
- Mobile min-height 680 px; headline → 32 px support → 40 px primary CTA → 12 px secondary → 24 px expectation.
- One ambient light pass on entry, 1100 ms; no loop.

---

# 6. Work Index Specification

## 6.1 Page hierarchy

1. Header with Work current.
2. Page title and curatorial statement.
3. Featured project.
4. Filter/index when catalogue justifies it.
5. Editorial project sequence.
6. Contact invitation.
7. Footer.

## 6.2 Work hero

### Desktop 1440

- Page top padding beneath header: 176 px.
- Label x 64.
- H1 “Selected work”: columns 1–10, Display/Page 104/98.
- Curatorial statement: columns 7–12, Body/Large, top aligned 32 px below H1 baseline block.
- Project count: columns 1–2, 64 px beneath title.
- Hero bottom padding: 128 px.

### Mobile 390

- Top padding: 128 px.
- H1 48/45, width 350 px.
- Curatorial statement 32 px below, 18/27.
- Count 32 px below.

## 6.3 Featured project

- Desktop media width: all 12 columns; ratio 16:9 or 2:1 based on approved asset, minimum height 656 px.
- Title row 24 px below media: title columns 1–6, Heading/H2; metadata columns 9–12, right aligned.
- Transformation statement columns 1–7, 24 px below title.
- Outcome and View case study share a row 32 px below.
- Mobile: title/meta before media only when necessary for orientation; default media follows title within 24 px.

## 6.4 Filter system

- Render only when launch catalogue has more than eight projects and meaningful category density.
- Container top/bottom padding: 24 px; rules above and below.
- Controls: All, Brand Identity, Web, UI/UX.
- Control height: 40 px visual, 44 px hit target; 24 px gaps desktop, 12 px wrap gaps mobile.
- Selected state: Soft White text, 1 px Champagne rule, result count.
- Filter remains normal-flow, not permanently sticky. It may become sticky beneath header only if usability testing on a longer catalogue shows value.
- Update transition: project opacity 1 → 0.4 → 1 over 220 ms; no dramatic reordering animation.
- Reduced motion: immediate update and live result announcement.

## 6.5 Editorial project sequence

### 1440 pattern

- Project 02: media columns 1–8, ratio 3:2; text columns 9–12 aligned to lower third.
- Gap 200 px.
- Project 03: text columns 1–4; portrait media columns 6–12, ratio 4:5, max height 820 px.
- Gap 200 px.
- Project 04: panoramic media columns 1–12, ratio 2:1; metadata below.
- Gap 200 px.
- Project 05: dual detail media columns 1–5 and 6–9; narrative columns 10–12.
- Continue this rhythm rather than repeating a fixed tile.

### Project text

- Index: Label/Chrome 300.
- Title: Heading/H2 for large projects, Heading/H3 for paired projects.
- Metadata: Label, 12 px below.
- Statement: Body/Default, 20 px below; max 420 px.
- Link: Text button, 24 px below.

### Mobile

- Single column, 96 px project gap.
- Media full width; title 20 px below; metadata 8 px; statement 16 px; link 24 px.
- No masonry, horizontal track, or hidden hover title.

## 6.6 Work motion and transitions

- Each media reveal: 700 ms clip/scale, once.
- Hover scale maximum 1.02; metadata remains stationary.
- Project link arrow: 5 px/220 ms.
- Case-study navigation: obsidian route transition 900 ms maximum; shared media optional.
- Return from case study restores filter and scroll when technically reliable.

## 6.7 Work CTA

- Contact invitation begins 200 px after final project.
- Desktop: headline columns 1–8; Start a project columns 10–12 aligned to headline lower edge.
- Mobile: headline → 32 px CTA.
- Minimum section height 520 px desktop, 400 px mobile.

---

# 7. Flagship Case Study Specification

## 7.1 Page hierarchy

Hero → Challenge → Discovery/Strategy → Identity → Website → UI/UX → Results → Testimonial/Credits → Next Project/Contact.

Omit irrelevant expression chapters. Preserve the logic from problem to decision to system to outcome.

## 7.2 Case-study hero

### Desktop 1440

- Top padding: 176 px.
- Client/project label: x 64, Label.
- Transformation H1: columns 1–10, Display/Page 104/98, max 3 lines.
- Facts row: columns 1–8, 48 px below title; each fact separated by 32 px.
- Live link: columns 11–12, aligned right on facts baseline.
- Hero media begins 96 px below facts; full 12-column width; preferred ratio 16:9, height 738 px at content width.
- Bottom gap to Challenge: 200 px.

### Mobile 390

- Top padding 128 px.
- Transformation 48/45, max five lines.
- Facts wrap as two rows with 12 px vertical gap, 32 px below title.
- Live link 24 px below facts.
- Hero media 48 px below, full width, 4:5/3:2 art-directed mobile crop.
- Bottom gap 112 px.

## 7.3 Chapter header pattern

- Desktop chapter label/index: columns 1–2, sticky within chapter only when height permits.
- Chapter title: columns 3–7, Heading/H1 72/72.
- Intro/body: columns 8–12, Body/Large 20/30.
- Top padding: 160 px; bottom padding: 160 px.
- Mobile: index/label → 16 px title → 32 px intro; padding 96 px top/bottom.

## 7.4 Challenge

- Use Obsidian 900 tonal field only if it improves separation after hero media.
- Context body columns 3–8, max 720 px.
- Success definition columns 9–12 as Subheading.
- Before-state evidence begins 96 px below text.
- Before/after pair desktop: two equal 6-column frames with 24 px gap, identical ratio/crop.
- Mobile: labelled frames stacked with 24 px gap.
- No slider by default; approve only when it materially clarifies transformation.

## 7.5 Discovery and Strategy

### Discovery

- 1440: finding index columns 1–2; 2–4 findings occupy columns 3–8; supporting artefact columns 9–12.
- Each finding uses Heading/H3 + Body/Default with 48 px gap.
- Artefact ratio 4:5 or 3:2; caption 12 px below.

### Strategy

- Begins after 200 px transition.
- Defining idea spans columns 1–10, Heading/H1 or Display/Editorial 80–104 px.
- Explanation columns 1–6, 48 px below.
- Principles columns 8–12 as 2–4 ruled rows, 24 px vertical padding each.
- Optional diagram begins 96 px below; full 10-column width centred.

### Motion

- Findings reveal as blocks, 420 ms, 100 ms stagger.
- Strategy idea line reveal 700 ms.
- Diagram animates only if the final static diagram is already understandable.

## 7.6 Brand Identity chapter

### Sequence and measurements

1. Mark stage: full-bleed or 12-column, ratio 16:9, minimum 720 px desktop.
2. Mark explanation: 720 px reading width, 64 px below.
3. Typography and colour: two equal 6-column modules, 160 px after mark stage; ratios based on artefact.
4. Composition/voice: one 8-column wide module plus 4-column text.
5. Motion principle: poster + explicit video control; ratio 16:9.
6. Applications: one panoramic module followed by one portrait/detail pair.

### Rules

- Direct artefacts appear before contextual mockups.
- Project colours are not recoloured to NAVARICK palette.
- Captions remain 14/20 and within 560 px.
- Media-to-media vertical gap: 96 px within a sequence; chapter-beat gap: 160–200 px.
- Mobile: every artefact is full width; detail pairs stack; gap 64–96 px.

## 7.7 Website chapter

- Chapter introduction uses the common header pattern.
- Experience premise/IA: text columns 3–7; simplified flow/diagram columns 8–12.
- Full-page website view: 10 columns centred, maximum 1180 px width; no unnecessary device shell.
- Key interaction: 16:10 video/poster full 12 columns, 160 px after IA.
- Responsive sequence: desktop screenshot 8 columns; mobile screenshots form a 4-column group, aligned to same baseline.
- Design-system detail: two or three close crops with captions, 96 px below.
- Development/performance note appears only when NAVARICK delivered it; use Caption/Body, not a technology badge row.

## 7.8 UI/UX chapter

- User task statement spans columns 1–8, Heading/H2.
- Journey flow begins 64 px below, 10 columns centred; steps are text-led with connecting rule.
- Key screens appear in a controlled sequence: one large focal screen followed by 2–3 supporting states.
- Do not display more than four screens simultaneously at desktop or two at mobile.
- State/accessibility notes align beside the relevant screen, not in a detached feature-card grid.
- Prototype video has an explicit play control and poster.

## 7.9 Results

- Section min-height 760 px; padding 160 px.
- Outcome context columns 1–5, Heading/H2 + Body/Large.
- Up to three result groups columns 7–12.
- Value Heading/H1 72 px; description Caption/Body 16 px below; source/timeframe 12 px below.
- If no quantitative evidence exists, use one strong client-confirmed qualitative outcome at Heading/H2 scale and explain its context.
- No count-up.

## 7.10 Testimonial and credits

- Testimonial begins 160 px after Results.
- Quote columns 1–9, 64–72 px depending length; attribution columns 10–12.
- Credits begin 128 px below; two-column list with role left and person/team right.
- Credit row: minimum 44 px; 1 px rule.
- Mobile quote 34/36, attribution 24 px below; credits single-column pairs.

## 7.11 Case-study CTA

- Next Project section min-height 820 px desktop.
- Media columns 1–8, ratio 16:10; next-project label/title columns 9–12 aligned to media lower third.
- View next project is primary within the module.
- Start a project appears 64 px below next-project link as secondary conversion.
- Mobile: label/title → 24 px media → 24 px next link → 48 px Start a project.

## 7.12 Case-study motion

- Route entrance: hero media/title visible by 900 ms.
- Chapter reveals: 420–700 ms and once only.
- Media reveals: 700 ms.
- Sticky evidence limited to one chapter.
- Videos pause offscreen.
- Reduced motion uses posters, normal flow, and final states.

---

# 8. Services Page Specification

## 8.1 Services hero

### Desktop

- Top padding 176 px; bottom padding 160 px.
- H1 columns 1–10, Display/Page 104/98.
- Support columns 1–6, 48 px below.
- Start a project columns 10–12, aligned to support top.
- Optional artefact detail columns 8–12 only if it does not compete with the page title.

### Mobile

- Top padding 128 px; H1 48/45.
- Support 32 px below; CTA 40 px below.
- No decorative hero artefact on 320.

## 8.2 Services overview

- Desktop top/bottom padding 128 px.
- Four equal 3-column entries.
- Number Label; service title Heading/H3 20 px below; outcome Body/Default 20 px below.
- Top and bottom rules; vertical separators only if they preserve editorial openness.
- Each entry links to its chapter; target includes full entry.
- Tablet uses 2 × 2 with 64 px row gap.
- Mobile uses four vertical rows, 32 px padding each.

## 8.3 Detailed service chapters

- Four chapters alternate media/text alignment.
- Desktop chapter minimum height 920 px; padding 160 px.
- Number/label columns 1–2.
- Title/problem/outcome columns 2–7.
- Artefact columns 8–12, ratio 4:5 or 3:2.
- Deliverables begin 64 px below outcome: two columns of text rows, each 48 px minimum height.
- Engagement shape and relationship to other disciplines appear 64 px below deliverables.
- Related project begins 96 px later with 16:9 media and visible title.
- Contextual Start a project link sits after related project, never midway through deliverables.

### Mobile

- Number → title → problem/outcome → media → deliverables → engagement → related project → CTA.
- Chapter gap 128 px; internal major gap 48 px.
- Deliverables remain visible; no accordion for core scope.

## 8.4 Process

- Uses Homepage Process visual grammar but adds client role and decision gate.
- Desktop four-column stages; each stage min-height 260 px.
- Additional client-role row begins 64 px below stages, 1 px rules between role/output pairs.
- Mobile vertical timeline.

## 8.5 FAQ

- Maximum reading width 960 px; centred.
- Heading 48 px desktop, 34 px mobile.
- Gap to first item: 64 px.
- Each question row: minimum 72 px desktop, 64 px mobile; title 18/24; plus/minus icon 20 px.
- Answer max width 720 px, Body/Default; 16 px top and 32 px bottom padding.
- Rule between rows.
- Open transition: answer opacity and height over 420 ms, ease-out; reduced motion immediate.
- Focus ring covers question button, not icon only.

## 8.6 Services CTA

- Min-height 640 px desktop, 480 px mobile.
- Headline columns 1–8; CTA columns 10–12 aligned to headline bottom.
- Mobile stacks CTA 32 px below support.

---

# 9. About Page Specification

## 9.1 About hero / studio story

### Desktop

- Top padding 176 px.
- H1 columns 1–10, Display/Page 104/98.
- Origin/purpose copy columns 1–5, 56 px below.
- Portrait/studio media columns 7–12, starts 48 px below title baseline; ratio 4:5, maximum height 760 px.
- Studio model statement appears as Subheading directly below origin copy, 32 px gap.
- Hero bottom padding 160 px.

### Mobile

- H1 48/45.
- Origin/purpose 32 px below.
- Studio model 24 px later.
- Media 48 px later, full width 4:5 or 3:2 based on asset.

## 9.2 Philosophy

- Tonal canvas shift optional.
- Padding 160 px desktop / 96 px mobile.
- Statement columns 1–10, Heading/H1 or Instrument Serif phrase.
- Principles begin 96 px below.
- Three to five principles in editorial rows: index 1 column, title 3 columns, client consequence 5 columns, remaining whitespace.
- Row min-height 136 px; rules at 12%.
- Mobile row: index/title, then consequence 16 px below, 32 px vertical padding.

## 9.3 Working relationship/process

- Heading columns 1–6; intro columns 8–12.
- Four aspects: Listen, Decide, Make, Deliver.
- Use 2 × 2 arrangement on desktop only when copy is balanced; otherwise four-column process grammar.
- Client role/communication note spans columns 3–10, 96 px below aspects.
- No icons.

## 9.4 Capabilities

- Compact compared with Services page.
- Four ruled rows, 112 px height desktop.
- Service title Heading/H3, one sentence, route arrow.
- Related work preview may appear once after the index, full 12-column 16:9 media.

## 9.5 Team/collaborator/recognition

- Render only after studio model is confirmed.
- Portraits use 4:5 ratio; names Heading/H3; roles Caption.
- Maximum three profiles per desktop row, one per mobile row.
- Collaborator model uses a text index if long-term portraits are unavailable.
- Recognition uses a simple year/title/source list; no trophy icons or logo cloud.

## 9.6 About CTA

- Two choices: See the work and Start a project.
- Desktop headline columns 1–8; actions columns 9–12.
- Mobile: See the work primary until adequate portfolio proof has already appeared; Start a project follows 12 px later.

## 9.7 About motion

- Portrait reveal 700 ms clip/scale.
- Philosophy line reveal 700 ms.
- Principle rows 100 ms stagger.
- No portrait parallax above 3%; disabled tablet/mobile/reduced motion.

---

# 10. Contact Page Specification

## 10.1 Contact hero

- Desktop top padding 176 px; H1 columns 1–10, Display/Page 104/98.
- Support/response expectation columns 1–6, 48 px below.
- No dominant decorative media; optional material detail stays behind columns 9–12.
- Mobile top padding 128 px; H1 48/45; support 32 px below.

## 10.2 Project type orientation

- Desktop begins 96 px after hero copy.
- One horizontal ruled row with six options: Brand Identity, Web Design, Development, UI/UX, Integrated, Not sure.
- Each option is text, not a decorative card; minimum 48 px target.
- Selecting an option updates the form control and moves focus to the next logical field only when initiated by explicit action.
- Mobile uses wrapping options with 12 px gaps or a labelled select; choose the simpler tested pattern.

## 10.3 Form layout

### Desktop 1440

- Form region begins 128 px after orientation.
- Form columns 1–7; expectations columns 9–12.
- Form width approximately 744 px.
- Field vertical gap: 32 px.
- Two-column row allowed only for Name/Email: each half with 20 px gap.
- Company, Project Type, Project Change, Timing, Investment are full width unless content proves otherwise.
- Textarea minimum height: 200 px.
- Submit button: h 56, aligned left, 40 px after final field/privacy.
- Form status: 16 px below submit; reserves at least 48 px height to prevent layout shift.

### Mobile 390

- Form full 350 px width.
- One field per row; gap 28 px.
- Textarea minimum height 180 px.
- Submit full width, h 52.
- Status full width, 16 px below.

## 10.4 Field visual specification

- Persistent label: Label style, Soft White.
- Description/helper: Caption, Muted Gray, 8 px below label.
- Control top gap: 12 px.
- Input height: 56 px desktop/mobile.
- Horizontal padding: 16 px.
- Fill: Obsidian 900 or Charcoal 800 at 60%.
- Border: 1 px Soft White at 18%.
- Text: Body/Default Soft White.
- Placeholder: Muted Gray; never replaces the label.
- Focus: 2 px Champagne outer ring, 2 px offset; border Champagne 65%.
- Error: Signal Red border plus icon/message; message 14/20, 8 px below.
- Disabled: avoid unless required; Quiet Gray text plus disabled semantics.

## 10.5 Expectations side column

- Heading/Subheading at top.
- Three short blocks: What to share, How we reply, First conversation.
- Blocks separated by 32 px; no cards.
- Direct email appears 64 px below, Body/Strong or Subheading.
- Column becomes normal-flow beneath form at tablet/mobile with 80 px gap.

## 10.6 What happens next

- Desktop begins 160 px below form region.
- Four stages in ruled horizontal sequence; stage title Heading/H3, explanation Caption/Body.
- Mobile vertical rule with 48 px stage gaps.

## 10.7 Form states

### Loading

- Submit label changes to “Sending…”; width remains stable.
- Small 16 px indicator may rotate; reduced motion uses static status text.
- Controls remain readable and cannot be resubmitted.

### Validation error

- Error summary appears above first field, role/announcement defined in implementation.
- Summary uses Signal Red icon/left rule plus Soft White text; not a red-filled panel.
- First invalid field receives focus after submit.

### Server failure

- Preserve all entered values.
- Message explains recovery and exposes direct email.
- Retry action appears beside email only when safe.

### Success

- Replace form action region with confirmation while preserving page context.
- Heading/H2: “Thank you. We have your project.” or approved final copy.
- State response expectation and direct email.
- No confetti or celebratory animation.

## 10.8 Contact CTA placement

The form submit is the page's primary CTA. Do not add another filled Start a project button in the hero or footer on this route. Header CTA may change to a plain current-route label or remain styled but inert duplication should be avoided.

---

# 11. Portfolio Interaction Specification

## 11.1 Featured project module

- Uses large media and adjacent narrative, never a bordered card.
- Title and facts are visible at rest.
- Desktop media occupies 7–8 of 12 columns.
- Narrative occupies 4–5 columns.
- Project link target includes media and title relationship with one accessible action.
- Hover scale is capped at 1.02 and contained by media bounds.
- Metadata never overlays detailed work.

## 11.2 Project listing module

- Aspect ratio is selected by project content: 2:1, 16:9, 3:2, 4:5, or 1:1 detail.
- Title begins 16–24 px after media.
- Metadata begins 8–12 px after title.
- Statement begins 12–20 px after metadata.
- Link begins 24 px after statement.
- Large project gap: 160–200 px desktop, 96 px mobile.

## 11.3 Thumbnail states

| State | Media | Text | Cursor/focus |
|---|---|---|---|
| Default | Final crop/poster | Fully visible | Native cursor on link |
| Hover | Scale/crop to max 1.02 | Arrow/rule responds | Optional small “View” cursor supplement |
| Focus | No scale required | Persistent focus/rule | 2 px ring or bounded outline |
| Active | Opacity 0.92 for 120 ms | unchanged | no layout movement |
| Loading | Dominant-colour/neutral placeholder with fixed ratio | metadata visible | non-interactive until link is ready only if necessary |
| Error | Approved fallback/poster | metadata and route remain | link remains if destination exists |

## 11.4 Portfolio route transition

- Click acknowledgement: media opacity 1 → 0.94 and arrow +5 px in 120 ms.
- Obsidian curtain enters from bottom or uses controlled fade; 700–900 ms.
- Case-study title/media is visible before curtain fully clears.
- Shared media is permitted only when crop mapping is stable across breakpoints.
- Reduced motion: immediate route change or 120 ms opacity fade.

---

# 12. Motion Specification

## 12.1 Exact tokens

| Token | Value | Required use |
|---|---:|---|
| Instant | 120 ms | Press acknowledgement |
| Fast | 220 ms | Link, icon, border, small hover |
| Base | 420 ms | Component entrance, menu element |
| Medium | 500 ms | Navigation morph, media state |
| Slow | 700 ms | Image reveal, crossfade |
| Cinematic | 1100 ms maximum | Hero or page transition |
| Ease Out | `cubic-bezier(.16,1,.3,1)` | Entrance/release |
| Ease In Out | `cubic-bezier(.65,0,.35,1)` | Morph/crossfade/curtain |

## 12.2 Scroll-trigger rules

- Trigger line: element top reaches 82–90% viewport height, depending on content.
- Text reveals at 86%; large media at 90% so it begins slightly earlier.
- Reveal once by default.
- Maximum moving groups per viewport: two.
- Parallax range: target 3–5%, hard maximum 8% of element height.
- No scroll-linked body text motion.
- One sticky story maximum on the homepage and one in a long case study.

## 12.3 Text reveal

- Headline line: y 18 → 0, opacity 0 → 1, blur 6 → 0, 700 ms.
- Word stagger: 35–60 ms; never character stagger for body or major brand line.
- Body: y 14 → 0, opacity 0 → 1, 420 ms.
- Label/metadata: opacity 0 → 1, 220 ms.
- DOM reading order and accessible text remain intact.

## 12.4 Media reveal

- Container retains final dimensions.
- Clip from bottom or reading origin; use one direction consistently within a page.
- Media scale 1.03 → 1.00 over 700 ms.
- Metadata starts after 70% reveal progress.
- No alternating random slide directions.

## 12.5 Magnetic CTA

- Fine pointer only.
- Activation area extends 24 px beyond visible button.
- Button translation maximum 8 px; inner label maximum 4 px additional movement.
- Pointer smoothing 0.10 target interpolation.
- Enter response approximately 220 ms; return 420 ms ease-out.
- Static on focus, touch, and reduced motion.

## 12.6 Hero pointer light

- Fine pointer only and active after 2200 ms hero entrance.
- Pointer position normalised within media stage.
- Smoothed interpolation 0.08–0.12.
- Light/reveal follows within a bounded 20% horizontal and 12% vertical stage range.
- No object rotation above 3° unless the actual asset requires it and motion testing approves.
- Pause when pointer leaves, hero visibility is below 20%, or tab is hidden.

## 12.7 Reduced-motion exact state

- All elements render at opacity 1, transform none, blur 0.
- Smooth scrolling, pinning, parallax, cursor light, magnetic response, long route transitions, and autoplay decorative motion are disabled.
- Poster replaces 3D/hero autoplay.
- Before/after becomes labelled static frames.
- Optional opacity change must be 120–160 ms maximum.

---

# 13. Accessibility Review

## 13.1 Contrast verification

Approved core pairings:

- Soft White / Obsidian: 17.69:1.
- Muted Gray / Obsidian: 6.99:1.
- Champagne / Obsidian: 11.61:1.
- Bronze 500 / Obsidian: 4.97:1.
- Chrome 300 / Obsidian: 11.35:1.
- Obsidian / Champagne: 11.61:1.

Quiet Gray / Obsidian is 3.57:1 and is limited to large/decorative/disabled content. Soft White / Bronze 500 is 3.56:1 and is not permitted for normal button labels.

## 13.2 Text and zoom

- Body text minimum 16 px.
- Line height 1.5–1.6 for body.
- Reading measure 45–72 characters.
- All screens must reflow at 320 px and 200% browser zoom without horizontal page scroll.
- Display type may scale down but never replaces semantic heading order.

## 13.3 Focus and keyboard

- All interactive components include default, hover, focus-visible, active, loading, disabled where relevant, and error states in Figma.
- Focus ring: 2 px, 4 px offset, minimum 3:1 local contrast.
- Tab order follows visual order.
- Header, menu, filters, FAQ, media controls, comparison, form, and footer are fully keyboard-operable.
- Skip link frame is included in Navigation/Figma components.
- Mobile menu has opening focus, focus containment, Escape close, and trigger return annotations.

## 13.4 Touch

- Minimum target 44 × 44 px.
- Adjacent controls maintain at least 8 px separation.
- No essential hover, magnetic, parallax, or precise-drag interaction.
- Native controls are preferred where custom treatment would reduce usability.

## 13.5 Media

- Meaningful images have descriptive alt-text annotations.
- Decorative material images use empty alt.
- Captions are live text, not baked into imagery.
- Autoplay decorative video is muted, inline, short, and stops offscreen; persistent/informational media has controls.
- Posters preserve meaning when video never plays.

## 13.6 Motion

- A reduced-motion frame exists for Home hero, navigation menu, project transition, case-study comparison, and form states.
- No flashes, perpetual bounce, or decorative continuous motion.
- No content begins permanently hidden if scripts fail.

## 13.7 Forms

- Persistent labels and clear required/optional status.
- Errors use text/icon plus colour.
- Error summary and field-level errors are both specified.
- Entered content survives recoverable failure.
- Success and failure states do not rely on visual animation.

## 13.8 Accessibility review result

The visual rules in this specification can meet WCAG 2.2 AA provided final project imagery is contrast-tested at its actual crops, licensed fonts preserve metrics, interactive semantics match the annotated behaviour, and every reduced-motion/focus/form state is implemented as designed. High-fidelity screens are not approved until those checks are performed with final assets.

---

# 14. Figma Handoff Requirements

Every final page frame must include:

- canonical width in the frame name;
- layout grid enabled;
- auto-layout for repeated rows/stacks;
- design-system text and colour styles only;
- media ratio and crop annotation;
- interaction destination annotation;
- responsive behaviour note;
- motion timing/easing note where applicable;
- reduced-motion variant reference;
- focus order numbers for non-obvious compositions;
- content status: Final, Approved Placeholder, or Missing;
- accessibility notes for media and controls.

## Prototype requirements

Prototype only these flows before implementation:

1. Desktop and mobile navigation open/close.
2. Homepage hero entrance and reduced-motion state.
3. Featured Project hover/focus and case-study route transition.
4. Work filter selection and no-result state, if filters are retained.
5. Case-study before/after control and static mobile equivalent.
6. FAQ keyboard/focus behaviour.
7. Contact validation, server failure, and success flow.

Do not prototype decorative transitions that are not part of a decision or usability test.

---

# 15. Approval Checklist

Implementation begins only after the following are true.

## Foundations

- [ ] Canonical 1440, 1280, 768, and 390 frames are complete.
- [ ] 1024 short-laptop and 320 minimum-mobile stress tests pass.
- [ ] Grid, spacing, type, colour, radius, rules, and shadow values match this specification.
- [ ] Neue Montreal is licensed or every frame consistently uses Manrope.
- [ ] Official wordmark assets replace provisional text.

## Navigation and footer

- [ ] Initial and sticky desktop navigation states are designed.
- [ ] Closed/open mobile navigation and all focus states are designed.
- [ ] Footer desktop/mobile layouts use real email, legal, and social content.
- [ ] Current-route, hover, focus, active, and reduced-motion states are present.

## Homepage

- [ ] All eight sections exist in the approved order.
- [ ] Hero measurements are validated at six target frames.
- [ ] Final poster and hero-medium decision are available.
- [ ] Two flagship and three-to-four selected projects use approved content and media.
- [ ] Static and reduced-motion homepage remain complete.
- [ ] Contact CTA and footer do not compete.

## Work Index

- [ ] Actual launch project count determines whether filters appear.
- [ ] Featured project and editorial project order are approved.
- [ ] Default, hover, focus, loading, failed-media, and filtered states exist.
- [ ] Mobile remains one curated column without masonry.

## Flagship Case Study

- [ ] One actual project populates every relevant chapter.
- [ ] Challenge, Discovery, Strategy, system expression, Results, Testimonial, and Credits are approved.
- [ ] Irrelevant Identity/Website/UI chapters are omitted rather than filled.
- [ ] Media captions, credits, alt-text decisions, and mobile crops are complete.
- [ ] Results are verified and source context is recorded.
- [ ] Next-project and contact actions are approved.

## Services

- [ ] Four service chapters use approved problem, outcome, scope, evidence, and engagement language.
- [ ] FAQ uses real prospective-client questions.
- [ ] Desktop/mobile process and FAQ states are complete.

## About

- [ ] Studio model and story are factually confirmed.
- [ ] Portrait/studio imagery is approved and licensed.
- [ ] Philosophy, working relationship, capabilities, and CTA use real copy.
- [ ] Team/collaborator/recognition modules appear only with evidence.

## Contact

- [ ] Public email and response expectation are confirmed.
- [ ] Required/optional fields and investment policy are approved.
- [ ] Default, focus, error, loading, failure, and success frames are complete.
- [ ] Privacy copy and alternative contact are approved.
- [ ] Mobile keyboard/input-mode annotations exist.

## Motion

- [ ] Every motion annotation has exact duration, easing, start, and end state.
- [ ] Hero is the only signature mechanic.
- [ ] Sticky storytelling is limited as specified.
- [ ] Reduced-motion variants are designed, not merely described.
- [ ] No interaction hides or delays essential content.

## Accessibility

- [ ] Text and UI contrast is checked against final backgrounds/media.
- [ ] Keyboard order and visible focus are annotated.
- [ ] Touch targets meet 44 × 44 px minimum.
- [ ] 320 px reflow and 200% zoom are reviewed.
- [ ] Alt text/caption/decorative-media decisions are documented.
- [ ] Form errors and status announcements are included.

## Performance and content readiness

- [ ] Hero media can meet the PRD LCP/media budget.
- [ ] Font subset plan can meet the 180 KB budget.
- [ ] All media has final dimensions and responsive variants.
- [ ] Unsupported metrics, awards, clients, and testimonials are absent.
- [ ] No application implementation is required to resolve a missing visual decision.

## Final implementation gate

Before handoff, the designer, creative lead, and implementation lead should be able to answer yes:

1. Can every screen be reconstructed from named Figma styles and exact measurements?
2. Is every breakpoint's hierarchy intentional rather than a scaled desktop frame?
3. Are all interactive, loading, failure, focus, and reduced-motion states represented?
4. Does project evidence remain the focal point after the hero?
5. Can implementation begin without inventing layout, motion, or responsive behaviour?

---

# Open Content and Asset Inputs

The visual specification is complete, but the following inputs must replace labelled placeholders before final Figma approval:

1. Official NAVARICK wordmark variants.
2. Licensed Neue Montreal files or approval of Manrope.
3. Hero animation/video/3D source and mobile/desktop posters.
4. Two flagship homepage projects and the wider launch portfolio.
5. One complete flagship case study with verified outcomes and credits.
6. Approved testimonial and client attribution.
7. Founder/team/collaborator model and authored imagery.
8. Contact email, response expectation, field policy, and privacy language.
9. Final domain, social, legal, and footer details.

These inputs may change content and art direction but should not require a new structural system unless their length or media type differs materially from the slots defined here.

---

# Recommended Next Phase

Proceed to **Figma Production and Content Integration**, beginning with:

1. Navigation and shared foundations.
2. Homepage at 1440 and 390 using real flagship content.
3. Work Index at 1440 and 390 using the actual project count.
4. One flagship Case Study at 1440 and 390.
5. Responsive interpolation frames at 1280, 1024, 768, and 320.
6. Services, About, and Contact once the established system has been validated in portfolio contexts.
7. Motion prototypes and reduced-motion variants only after static frames pass design and accessibility review.

React implementation should begin only after the Approval Checklist is complete and all high-fidelity frames are signed off.
