# NAVARICK Production Design Specification

**Status:** Final production specification
**Version:** 1.0
**Date:** 24 June 2026
**Pages:** Homepage, Work Index, Flagship Case Study
**Production frames:** 1440 px desktop and 390 px mobile
**Authority:** Consolidates all approved NAVARICK product, UX, design-system, wireframe, UI, and content documents.

---

## 0. Locked Decisions

These decisions are final for V1 and must not be reinterpreted during design or implementation.

| Decision | Approved value |
|---|---|
| Hero headline | **Building Brands People Remember.** |
| Hero primary CTA | **View Selected Work** |
| Hero secondary CTA | **Start a Project** |
| Process | **Discover → Strategy → Design → Develop → Launch** |
| Services | Brand Identity Design, Web Design, Web Development, UI/UX Design |
| Hero medium | Contained NAVARICK chrome-glass animation/object |
| Signature interaction | Hero material/light reveal only |
| Desktop production frame | 1440 px wide, 900 px reference viewport |
| Mobile production frame | 390 px wide, 844 px reference viewport |

The hero animation is not a background video, not fullscreen media, and not a general page texture. It is a contained cinematic object with its own reserved geometry.

---

# 1. Production Foundations

## 1.1 Desktop grid — 1440 px

- Frame width: 1440 px.
- Reference viewport height: 900 px.
- Grid: 12 stretch columns.
- Outer margins: 64 px.
- Gutters: 24 px.
- Content width: 1312 px.
- Column width: 87.33 px.
- Maximum site grid: 1600 px on wider displays.
- Standard section padding: 160 px top and bottom.
- Compact section padding: 128 px.
- Cinematic pause: 200–240 px.

## 1.2 Mobile grid — 390 px

- Frame width: 390 px.
- Reference viewport height: 844 px.
- Grid: 4 stretch columns.
- Outer margins: 20 px.
- Gutters: 16 px.
- Content width: 350 px.
- Column width: 75.5 px.
- Standard section padding: 80 px top and bottom.
- Compact section padding: 64 px.
- Cinematic pause: 96 px.
- Safe-area padding is added outside these visual values where required.

## 1.3 Colour tokens

| Role | Token | HEX |
|---|---|---:|
| Primary canvas | Obsidian 950 | `#070706` |
| Tonal canvas | Obsidian 900 | `#0D0D0C` |
| Glass/menu surface | Charcoal 800 | `#181816` |
| Strong dark state | Charcoal 700 | `#24221F` |
| Warm accent | Bronze 500 | `#A8733A` |
| Warm active | Bronze 400 | `#C08A4A` |
| Primary action | Champagne 300 | `#D8C29A` |
| Fine warm highlight | Champagne 200 | `#E7D8BB` |
| Metadata/chrome | Chrome 300 | `#BFC3C5` |
| Specular highlight | Chrome 100 | `#E3E5E5` |
| Primary text | Soft White | `#F2F0EB` |
| Secondary text | Muted Gray | `#9A9892` |
| Disabled/decorative | Quiet Gray | `#696762` |

Primary filled CTA uses Champagne 300 with Obsidian 950 text. Soft White text on Bronze 500 is prohibited for normal-size labels.

## 1.4 Production typography

Primary typefaces:

- Display/heading/navigation: Neue Montreal Medium. Manrope Medium is the licensed fallback substitution.
- Editorial accent: Instrument Serif Regular.
- Body/functional: Inter Regular/Medium/Semibold.

| Style | Desktop 1440 | Mobile 390 | Weight | Line height | Tracking |
|---|---:|---:|---:|---:|---:|
| Hero Display | 112 px | 58 px | 500 | 0.92 | `-0.05em` |
| Page Display | 104 px | 48 px | 500 | 0.94 | `-0.04em` |
| Editorial Display | 96 px | 52 px | 400 | 0.96 | `-0.02em` |
| H1 | 72 px | 42 px | 500 | 1.00 | `-0.035em` |
| H2 | 48 px | 34 px | 500 | 1.05 | `-0.025em` |
| H3 | 30 px | 26 px | 500 | 1.15 | `-0.015em` |
| Subheading | 22 px | 19 px | 500 | 1.35 | `-0.01em` |
| Body Large | 20 px | 18 px | 400 | 1.50 | `0` |
| Body | 16 px | 16 px | 400 | 1.60 | `0` |
| Body Strong | 16 px | 16 px | 600 | 1.55 | `0` |
| Caption | 14 px | 14 px | 400 | 1.45 | `0.01em` |
| Navigation | 14 px | 16 px | 500 | 1.20 | `0` |
| Label | 12 px | 12 px | 500 | 1.20 | `0.12em` |

Body copy maximum width is 720 px. Lead copy maximum width is 840 px. Labels are uppercase; headings and navigation use sentence case.

## 1.5 Surface rules

- Project media radius: 0 px.
- Input radius: 4 px.
- Compact navigation/menu radius: 10 px or pill only where specified.
- Default rule: 1 px Soft White at 12%.
- Strong rule: 1 px Soft White at 22%.
- Sticky-navigation shadow: black, y 18 px, blur 60 px, 42% opacity.
- Bronze glow: 48 px blur, Bronze 500 at 14% maximum; hero object only.
- No project-card shadows, generic panels, or nested glass surfaces.

---

# 2. Global Navigation

## 2.1 Desktop initial state — 1440

- Header bounds: `x 64`, `y 24`, `w 1312`, `h 64`.
- Wordmark: `x 64`, vertically centred; visual max `148 × 24 px`.
- Primary links: Work, Services, About; right-aligned before CTA.
- Link gap: 32 px.
- About-to-CTA gap: 32 px.
- CTA: Start a Project; height 48 px; horizontal padding 24 px; right edge x 1376.
- Initial header has no visible shell over the hero.
- Link text uses Navigation/14, Soft White.

## 2.2 Desktop sticky state

- Trigger: 80 px scroll or loss of the authored hero contrast zone, whichever occurs first.
- Shell bounds: `x 48`, `y 16`, `w 1344`, `h 64`.
- Fill: Charcoal 800 at 52%.
- Backdrop blur: 18 px; saturation 115%.
- Border: 1 px Chrome 100 at 14%.
- Inset top highlight: white at 10%.
- Shadow: approved navigation shadow.
- Transition: 500 ms, `cubic-bezier(.65,0,.35,1)`.
- Header remains visible; no downward-scroll auto-hide.

## 2.3 Desktop states

- Hover: link rule draws left-to-right in 220 ms; text shifts Muted Gray → Soft White.
- Current route: persistent 1 px Champagne 300 rule.
- Focus: 2 px Champagne ring, 4 px offset.
- CTA hover: Champagne 300 → Champagne 200 in 220 ms; arrow x `0 → 5 px`.
- Press: label/arrow y `0 → 1 px` for 120 ms; button bounds remain stable.

## 2.4 Mobile closed state — 390

- Header bounds: `x 20`, `y 16`, `w 350`, `h 48`.
- Wordmark max `124 × 20 px`.
- Menu button: `48 × 48 px`, right aligned.
- Sticky trigger: 64 px scroll.
- Sticky shell: `x 12`, `y 12`, `w 366`, `h 56`, 8 px internal padding.
- Same material properties as desktop sticky state.

## 2.5 Mobile open menu

- Fixed full viewport: 390 × 844 minimum.
- Fill: Obsidian 950 at 98%.
- Top row repeats wordmark and Close control at the same coordinates as closed state.
- Route group starts y 128, x 20, width 350.
- Links: Page/H2 34 px, line height 36 px; target height 56 px; 16 px visual gap.
- Link order: Work, Services, About, Contact.
- Start a Project CTA begins 40 px after Contact.
- Email/social utility anchors 32 px above safe-area bottom.

### Menu motion

- Overlay opacity: 0 → 1, 220 ms.
- Route group: y 16 → 0, opacity 0 → 1, 420 ms.
- Link stagger: 60 ms.
- Close total: 350 ms.
- Reduced motion: immediate display or opacity transition ≤120 ms; no translation/stagger.

---

# 3. Homepage — Desktop 1440

## 3.1 Page section map

The dimensions below assume approved working copy and five-stage process.

| Section | Start Y | Height | End Y |
|---|---:|---:|---:|
| Hero | 0 | 900 px | 900 |
| Featured Work | 900 | 3184 px | 4084 |
| Studio Philosophy | 4084 | 880 px | 4964 |
| Capabilities | 4964 | 1100 px | 6064 |
| Selected Works | 6064 | 2680 px | 8744 |
| Process | 8744 | 920 px | 9664 |
| Results | 9664 | 820 px | 10484 |
| Contact CTA | 10484 | 820 px | 11304 |
| Footer | 11304 | 440 px | 11744 |

If final project copy exceeds its allocated text measure, section height expands in approved spacing increments; media and typography are not compressed.

## 3.2 Homepage hero — 1440 × 900

### Composition

- Hero bounds: `x 0`, `y 0`, `w 1440`, `h 900`.
- Content plane uses columns 1–7.
- Media plane uses columns 8–12 with controlled overlap into column 7.
- Hero fill: Obsidian 950.

### Content placement

- Eyebrow “Independent creative studio”: `x 64`, `y 152`, `w 320`, Label/12.
- Headline: `x 64`, `y 190`, `w 700`, Hero Display 112/103.
- Approved line composition:

```text
Building Brands
People Remember.
```

- Headline maximum two lines at 1440. Optical line break may change only if the final licensed font metrics require it while preserving two lines.
- Supporting copy: `x 64`, `y 530`, `w 520`, Body Large 20/30.
- CTA group: `x 64`, `y 654`, horizontal.
- Primary View Selected Work: height 56 px, padding 32 px.
- Secondary Start a Project: height 56 px, padding 28 px, 12 px gap after primary.
- Scroll indicator: `x 64`, baseline `y 842`; Label/12 plus 32 px horizontal rule.

### Chrome-glass animation placement

- Reserved media stage: `x 800`, `y 144`, `w 576`, `h 576`.
- Stage ratio: 1:1.
- No visible frame, card, or border.
- Object visual bounds: approximately `x 836–1340`, `y 180–684`.
- Object occupies 76–88% of stage width and height depending on silhouette.
- Object centre: approximately `(1088, 432)`.
- Stage background is transparent/Obsidian-matched; no rectangular video edge.
- The object never extends beyond the right content margin.
- The asset is treated as a contained object; it does not fill the viewport and does not sit beneath the entire headline.

### CTA and scroll behaviour

- View Selected Work scrolls/focuses the Featured Work section.
- Start a Project navigates to Contact.
- Scroll indicator uses the same Featured Work target and is secondary to the primary CTA.

## 3.3 Hero motion — desktop

| Time | Element | Start state | End state | Duration |
|---:|---|---|---|---:|
| 0 ms | Canvas | Obsidian final | unchanged | immediate |
| 150 ms | Header/wordmark | opacity 0, y -8 | opacity 1, y 0 | 420 ms |
| 300 ms | Chrome-glass object | opacity 0, scale 1.02 | opacity 1, scale 1 | 700 ms |
| 650 ms | Headline line 1 | opacity 0, y 18, blur 6 | final | 700 ms |
| 710 ms | Headline line 2 | opacity 0, y 18, blur 6 | final | 700 ms |
| 1200 ms | Supporting copy | opacity 0, y 14 | final | 420 ms |
| 1450 ms | CTA group | opacity 0, y 12 | final | 420 ms |
| 1850 ms | Scroll indicator | opacity 0 | opacity 1 | 220 ms |
| 2200 ms | Pointer light | inactive | available | continuous while eligible |

Headline/media ease: `cubic-bezier(.16,1,.3,1)`; object morph/crossfade uses `cubic-bezier(.65,0,.35,1)`.

### Pointer light

- Fine-pointer devices only.
- Normalised to the 576 px media stage.
- Interpolation: 0.10.
- Maximum light travel: 20% horizontal, 12% vertical.
- Maximum object rotation: 3°.
- Stops when hero visibility is below 20%, pointer leaves, or tab is hidden.

## 3.4 Featured Work — desktop

### Section intro

- Top padding: 160 px.
- Label x 64.
- Heading “Selected Work”: x 64, 48 px below label, H1/72.
- Intro copy x 64, 32 px beneath heading, width 620 px, Body Large.
- Gap to Project 01: 96 px.

### Featured Project 01

- Module height: 1240 px.
- Media: columns 1–8, `x 64`, `w 867 px`, visible height 760 px; ratio 4:5 crop or project-approved equivalent.
- Media may be sticky at top 112 px for 720 px of module scroll.
- Narrative: columns 9–12, x 955, width 421 px, starts 160 px below media top.
- Title H2/48; metadata 16 px later; transformation Subheading 32 px later.
- Context, strategic idea, and outcome appear as three beats with 128 px gaps.
- View Case Study CTA sits 32 px below outcome.

### Featured Project 02

- Starts 200 px after Project 01.
- Narrative columns 1–5, x 64, width 532 px.
- Media columns 6–12, x 620, width 756 px, height 640 px, ratio approximately 6:5 or approved 3:2 crop.
- Title/narrative aligns to media upper third.
- No sticky behaviour.
- Section bottom padding: 160 px.

### Image treatment

- No card border or radius.
- Use authored project colour at full fidelity.
- Default poster/crop visible immediately.
- Captions 14/20, Muted Gray, 12 px below media.
- Contextual mockups never exceed 40% of a project's visible sequence.

### Hover/focus

- Media scale: 1 → 1.02 over 700 ms.
- Crop remains within fixed frame; no layout shift.
- Arrow x 0 → 5 px over 220 ms.
- Metadata stays visible and stationary.
- Focus uses 2 px Champagne ring or bounded underline; scale is optional.

## 3.5 Studio Philosophy — desktop

- Section height 880 px; padding 160 px top/bottom.
- Label x 64.
- Heading “Great Design Creates Trust Before a Word Is Spoken.” spans columns 1–9, max width 978 px, H1/72.
- Use Instrument Serif only for the phrase “Creates Trust” if final line balance remains three lines or fewer.
- Copy columns 9–12, x 955, width 421 px, aligned to the heading's lower third.
- Paragraph spacing: 24 px.
- Final statement “It is a business advantage.” uses Subheading/22, 32 px after preceding paragraph.
- No mandatory media.
- Line reveal: 700 ms, 60 ms stagger; copy enters 120 ms after final heading line begins.

## 3.6 Capabilities — desktop

- Section height: 1100 px; padding 160 px.
- Heading columns 1–6; introduction columns 8–12.
- Gap to rows: 96 px.
- Four rows, each 152 px high.
- Row grid: number column 1; title columns 2–5; outcome columns 6–8; service list columns 9–12.
- Rule at row top, 1 px/12%.
- Title H3/30; outcome Body/16; service list Caption/14.
- Final Explore Services link: 48 px beneath row 4, aligned to column 2.
- Hover/focus: title +6 px, rule opacity 12% → 32%, 420 ms.
- No icons or cards.

## 3.7 Selected Works — desktop

- Section height: 2680 px; padding 160 px.
- Heading columns 1–8; project count aligned column 12.
- Intro width 560 px, 24 px below heading.
- First media begins 96 px later.

### Sequence

1. Project 03: panoramic, columns 1–12, `1312 × 656 px`, ratio 2:1.
2. Gap after metadata: 160 px.
3. Project 04: columns 1–5, `532 × 665 px`, ratio 4:5.
4. Project 05: columns 7–12, `644 × 430 px`, ratio 3:2; top offset 160 px relative to Project 04.
5. Gap after lower module: 160 px.
6. Project 06: columns 4–12, width 978 px, ratio 16:9, height 550 px.
7. View All Work link: x 64, 64 px after final metadata.

### Metadata

- Title H3/30, 20 px below media.
- Discipline/year/status Label, 8 px later.
- Assignment statement Body/16, 16 px later, max 480 px.
- All metadata visible without hover.

## 3.8 Five-stage Process — desktop

- Section height: 920 px; padding 160 px.
- Heading columns 1–6; introduction columns 8–12.
- Stage area begins 96 px below.
- Five equal conceptual stages distributed across the 12-column grid:
  - Discover: columns 1–2
  - Strategy: columns 3–5
  - Design: columns 6–7
  - Develop: columns 8–10
  - Launch: columns 11–12
- A single horizontal rule spans columns 1–12.
- Number Label 16 px below rule.
- Stage title H3 24 px later.
- Stage statement Body/16 24 px later.
- Maximum statement width 220 px.
- Rule draw: 700 ms; stage groups reveal at 100 ms stagger.

## 3.9 Results — desktop

- Section height: 820 px; padding 160 px.
- Heading “Design That Delivers More Than Aesthetics.” columns 1–8, H1/72.
- Supporting result copy columns 9–12, aligned to heading lower third.
- Approved testimonial or verified outcome row begins 96 px later.
- Quote columns 1–8; attribution columns 9–12.
- Up to three outcome groups follow only when verified.
- No carousel, animated counter, or logo marquee.

## 3.10 Contact CTA — desktop

- Section height: 820 px; padding 160 px.
- Headline columns 1–10, H1/72, maximum three lines.
- Support columns 1–5, 48 px below.
- Primary Start Your Project and secondary Email NAVARICK occupy columns 8–12, aligned to support top.
- Primary button 56 px high; secondary 56 px high; 12 px gap.
- Response expectation Caption, 24 px below actions.
- Optional chrome-glass detail remains contained in right/rear plane and preserves 40% text-safe area.
- One 1100 ms light pass on viewport entry, no loop.

---

# 4. Homepage — Mobile 390

## 4.1 Section dimensions

| Section | Minimum height |
|---|---:|
| Hero | 844 px |
| Featured Work | 3200 px |
| Studio Philosophy | 760 px |
| Capabilities | 1320 px |
| Selected Works | 2600 px |
| Process | 1240 px |
| Results | 960 px |
| Contact CTA | 680 px |
| Footer | 720 px |

Heights expand only when final copy or approved media requires it. Horizontal margins remain 20 px.

## 4.2 Hero — mobile 390 × 844

- Hero min-height: 844 px / `100dvh`.
- Header bounds: x 20, y 16, w 350, h 48.
- Eyebrow: x 20, y 104, Label/12.
- Headline: x 20, y 136, w 350, Hero/58, line height 53 px.
- Approved line composition:

```text
Building Brands
People
Remember.
```

- Chrome-glass stage: `x 68`, `y 318`, `w 254`, `h 254`; 1:1.
- Object occupies 80–90% of stage.
- Supporting copy: x 20, y 596, w 350, Body Large/18/27.
- CTA group: x 20, y 692, w 350, horizontal when labels fit.
- Primary width 176 px, secondary width 162 px, 12 px gap, both 48 px high.
- If final font metrics cause label truncation, stack buttons without reducing text below 16 px.
- Scroll indicator: centred at y 808 only if safe-area clearance is at least 20 px; otherwise omitted.
- Animation is a contained poster/video object, never background or fullscreen.
- No cursor interaction; one authored light pass may play, then settle.

## 4.3 Featured Work — mobile

- Top padding 96 px.
- Heading 42/42; intro 18/27, 24 px below.
- Gap to Project 01: 80 px.
- Project order: title → metadata → transformation → media → context → idea → result → CTA.
- Title H2/34; metadata 12 px below; transformation 24 px below.
- Media full width 350 px; preferred 4:5 (`350 × 438`) or 3:2 (`350 × 233`) by project content.
- Context begins 32 px later.
- Idea/result gaps: 48 px.
- CTA 32 px after result.
- Project-to-project gap: 128 px.
- No sticky media or drag-only comparison.

## 4.4 Philosophy — mobile

- Padding 96 px top/bottom.
- Label → 24 px → H1/42.
- Use Instrument Serif accent only when it does not create more than five heading lines.
- Copy 40 px after heading, Body/16/26.
- Paragraph gap 20 px.
- Final business-advantage sentence Subheading/19, 28 px later.

## 4.5 Capabilities — mobile

- Padding 96 px top/bottom.
- Heading H1/42; intro 24 px later.
- Gap to first row: 64 px.
- Four rows, content-led; 32 px top/bottom padding.
- Row: number Label → 12 px title H3/26 → 16 px outcome → 12 px service list Caption.
- Explore Services 48 px after row 4.
- All information visible; no hover/media-stage dependency.

## 4.6 Selected Works — mobile

- Padding 96 px top/bottom.
- Heading H1/42; count Label 16 px below; intro 24 px later.
- Gap to first project 64 px.
- One-column project order.
- Media full 350 px width with project-specific ratio.
- Title 20 px after media; metadata 8 px; statement 16 px; project link 24 px.
- Module gap 96 px.
- View All Work 48 px after final project.
- No horizontal carousel or masonry.

## 4.7 Five-stage Process — mobile

- Padding 96 px top/bottom.
- Heading H1/42; intro 24 px later.
- Vertical rule x 20, begins 64 px below intro.
- Stage content x 48, width 322 px.
- Each stage: number Label → 12 px title H3/26 → 16 px statement Body/16.
- Stage gap: 64 px.
- Order: Discover, Strategy, Design, Develop, Launch.
- Static structure conveys order without animation.

## 4.8 Results — mobile

- Padding 96 px top/bottom.
- Heading H1/42.
- Supporting copy 32 px later.
- Quote H2/34, 64 px later; attribution 24 px below.
- Verified outcomes stack, 48 px gaps and 1 px rules.
- No carousel or counters.

## 4.9 Contact CTA — mobile

- Min-height 680 px; padding 96 px top/bottom.
- Headline H1/42, maximum five lines.
- Support 32 px later.
- Start Your Project full width, 52 px high, 40 px later.
- Email NAVARICK full width, 52 px high, 12 px later.
- Response expectation 24 px later.
- Static material detail only if it does not affect contrast.

---

# 5. Work Index — Desktop 1440

## 5.1 Section map

| Section | Height |
|---|---:|
| Intro | 680 px |
| Featured project | 980 px |
| Filter/index | 96 px |
| Editorial project sequence | 4200 px minimum |
| Contact invitation | 560 px |
| Footer | 440 px |

## 5.2 Intro

- Top padding: 176 px.
- H1 “Selected Work”: x 64, columns 1–10, Page Display/104/98.
- Curatorial statement: columns 7–12, Body Large, top aligned 32 px below H1 block.
- Project count: x 64, 64 px beneath title.
- Bottom padding: 128 px.
- Work link in navigation is current.

## 5.3 Featured project

- Media: x 64, width 1312 px, height 656 px, ratio 2:1.
- Title row 24 px after media.
- Title columns 1–6, H2/48.
- Metadata columns 9–12, right aligned, Label/12.
- Transformation statement columns 1–7, 24 px below title.
- Outcome columns 1–6 and View Case Study columns 10–12, 32 px later.
- No card container or overlay.

## 5.4 Filter/index

- Included only if the approved launch catalogue meets the existing threshold; the locked design system does not require filters for a small collection.
- Height 96 px; rules top/bottom.
- Controls centred vertically, 44 px targets.
- Labels: All, Brand Identity, Web, UI/UX.
- Gap: 24 px.
- Selected state: Champagne rule and visible result count.
- Normal flow by default; not sticky.

## 5.5 Editorial sequence

### Project 02

- Media columns 1–8: width 867 px, ratio 3:2, height 578 px.
- Narrative columns 9–12, aligned to media lower third.

### Project 03

- Starts 200 px later.
- Narrative columns 1–4.
- Portrait media columns 6–12: width 756 px, max height 820 px, 4:5 crop within the bound.

### Project 04

- Starts 200 px later.
- Panoramic media columns 1–12: `1312 × 656 px`, ratio 2:1.
- Metadata beneath.

### Project 05

- Starts 200 px later.
- Detail media A columns 1–5; detail media B columns 6–9; narrative columns 10–12.
- Detail ratios 1:1 or 4:5, matching subject matter.

### Text and interaction

- Index Label/12.
- Title H2/48 for large projects; H3/30 for paired modules.
- Metadata 12 px later; statement 20 px later; link 24 px later.
- Hover scale max 1.02/700 ms; arrow +5 px/220 ms.
- All project identity and facts visible at rest.

## 5.6 Work contact invitation

- Begins 200 px after final project.
- Min-height 560 px; padding 128 px top/bottom.
- Headline columns 1–8, H1/72.
- Start a Project columns 10–12, aligned to headline lower edge.

---

# 6. Work Index — Mobile 390

## 6.1 Section dimensions

| Section | Minimum height |
|---|---:|
| Intro | 560 px |
| Featured project | 840 px |
| Filter/index | 120 px when present |
| Project sequence | 4300 px minimum |
| Contact invitation | 440 px |
| Footer | 720 px |

## 6.2 Intro

- Top padding 128 px.
- H1 48/45, width 350 px.
- Curatorial statement 32 px below, 18/27.
- Count 32 px below.
- Bottom padding 96 px.

## 6.3 Featured project

- Title H2/34; metadata 12 px below.
- Media 24 px later, width 350 px; ratio 3:2 or 4:5 by approved crop.
- Transformation statement 24 px below media.
- Outcome 24 px later.
- View Case Study 32 px later.

## 6.4 Filter/index

- Wrap controls within 350 px; 12 px horizontal/vertical gaps.
- Target height 44 px.
- Never use a horizontally clipped control row.
- Filter update is immediate under reduced motion; normal transition 220 ms opacity.

## 6.5 Project sequence

- One project per row.
- Media width 350 px; project-specific ratio.
- Title 20 px below; metadata 8 px; statement 16 px; link 24 px.
- Project gap 96 px.
- No masonry, overlay title, or autoplay requirement.

## 6.6 Contact invitation

- Padding 96 px.
- Headline H1/42.
- Start a Project full width, 52 px high, 32 px later.

---

# 7. Flagship Case Study — Desktop 1440

## 7.1 Section map

| Section | Minimum height |
|---|---:|
| Hero | 1350 px |
| Challenge | 1250 px |
| Strategy | 1200 px |
| Identity | 4200 px |
| Website | 3000 px |
| UI/UX | 2500 px |
| Results | 900 px |
| Testimonial + Credits | 1000 px |
| Next Project + CTA | 900 px |
| Footer | 440 px |

Project-specific chapters may be omitted if irrelevant. Remaining section order is preserved.

## 7.2 Case-study hero

- Top padding 176 px.
- Client/project label x 64, Label/12.
- Transformation H1 columns 1–10, Page Display/104/98, max three lines.
- Facts row columns 1–8, 48 px below title; 32 px gaps.
- Optional Live Site link columns 11–12, right aligned.
- Hero media 96 px below facts, width 1312 px, ratio 16:9, height 738 px.
- Hero media expresses the central idea; it is not automatically a device mockup.
- Bottom gap to Challenge: 200 px.

## 7.3 Challenge

- Top/bottom padding 160 px.
- Chapter index/label columns 1–2.
- H1 columns 3–7.
- Context columns 3–8, Body Large, max 720 px.
- Success definition columns 9–12, Subheading/22.
- Before-state evidence 96 px below text.
- Before/after frames each 644 px wide with 24 px gutter; identical ratio and crop.
- Labels sit 12 px above frames.
- Default is static pair, not slider.

## 7.4 Strategy

- Begins after 200 px transition.
- Chapter header follows common pattern.
- Defining idea spans columns 1–10, H1/72 or Editorial Display/96.
- Explanation columns 1–6, 48 px below.
- Principles columns 8–12, 2–4 ruled rows; each row 88 px minimum.
- Optional diagram 96 px below, 10 columns centred.
- Strategy reveal 700 ms; principle rows 100 ms stagger.

## 7.5 Identity

### Sequence

1. Mark stage: width 1312 px, ratio 16:9, height 738 px.
2. Explanation: max 720 px, 64 px below.
3. Typography/colour: two 644 px modules with 24 px gap, 160 px below.
4. Composition/voice: media columns 1–8; text columns 9–12.
5. Motion principle: 16:9 poster/video with explicit control.
6. Applications: one panoramic module, then portrait/detail pair.

### Spacing

- Within one beat: 96 px.
- Between beats: 160–200 px.
- Captions: 14/20, 12 px below media, max width 560 px.

### Treatment

- Direct artefacts before contextual mockups.
- Client/project colour remains unmodified.
- No more than 40% contextual mockups.

## 7.6 Website

- Chapter intro uses common header.
- Experience premise/IA: text columns 3–7; flow columns 8–12.
- Full-page website view: 10 columns centred, maximum 1180 px; no device shell unless needed for context.
- Key interaction 160 px later, full 12 columns, ratio 16:10.
- Responsive sequence 160 px later: desktop screenshot columns 1–8; mobile states columns 9–12.
- Design-system detail follows 96 px later as 2–3 close crops.
- Captions align with each artefact.

## 7.7 UI/UX

- User task statement columns 1–8, H2/48.
- Journey flow begins 64 px below, 10 columns centred.
- One large focal screen followed by 2–3 supporting states.
- Maximum four screens visible simultaneously.
- Accessibility/state notes align beside relevant screens.
- Prototype video uses poster and explicit play.

## 7.8 Results

- Min-height 900 px; padding 160 px.
- Outcome context columns 1–5, H2 + Body Large.
- Up to three results columns 7–12.
- Value H1/72; description 16 px below; source/timeframe 12 px later.
- If metrics are qualitative, use one H2-scale statement with precise context.
- No animated counters.

## 7.9 Testimonial and Credits

- Testimonial begins 160 px after Results.
- Quote columns 1–9, 64–72 px based on length, max 45 words.
- Attribution columns 10–12, aligned to quote lower third.
- Credits begin 128 px later.
- Credit rows: role left, person/team right; minimum 44 px; 1 px rules.

## 7.10 Next Project and CTA

- Section min-height 900 px.
- Next-project media columns 1–8, ratio 16:10.
- Label/title columns 9–12, aligned to media lower third.
- View Next Project is primary.
- Start a Project appears 64 px below as secondary conversion.
- No automated redirect or infinite project loop.

---

# 8. Flagship Case Study — Mobile 390

## 8.1 Section dimensions

| Section | Minimum height |
|---|---:|
| Hero | 1100 px |
| Challenge | 1500 px |
| Strategy | 1400 px |
| Identity | 5200 px |
| Website | 4200 px |
| UI/UX | 3500 px |
| Results | 1100 px |
| Testimonial + Credits | 1400 px |
| Next Project + CTA | 1100 px |
| Footer | 720 px |

## 8.2 Hero

- Top padding 128 px.
- Client/project Label/12.
- Transformation title 48/45, 16 px below, max five lines.
- Facts wrap as two rows, 32 px below title, 12 px row gap.
- Live Site link 24 px below facts.
- Hero media 48 px later, width 350 px; 4:5 or 3:2 approved mobile crop.
- Bottom gap 112 px.

## 8.3 Common chapter pattern

- Padding 96 px top/bottom.
- Index/label → 16 px → H1/42 → 32 px → intro Body Large/18.
- Narrative/media pairs become sequential.
- No sticky chapter index or pinned media.

## 8.4 Challenge

- Context follows chapter intro with 48 px gap.
- Success definition Subheading/19, 32 px later.
- Before and after frames stack 24 px apart; each 350 px wide with identical ratio.
- Visible labels precede each image by 12 px.

## 8.5 Strategy

- Defining idea H1/42 or Editorial Display/52, max five lines.
- Explanation 32 px below.
- Principles stack as ruled rows, 24 px vertical padding.
- Diagram full width 64 px below if approved.

## 8.6 Identity

- Every artefact full width 350 px.
- Mark stage 16:9 or 1:1 by content.
- Explanation 32 px below.
- Typography, colour, composition, motion, and applications each separated by 96 px.
- Detail pairs stack with 64 px gap.
- Motion/video uses poster and explicit play.

## 8.7 Website

- Experience premise/IA first.
- Full-page view 48 px later, full width.
- Key interaction 96 px later, 16:10.
- Desktop and mobile responsive states stack; captions remain adjacent.
- Use fewer, larger screenshots; no illegible screen collage.

## 8.8 UI/UX

- User task H2/34.
- Journey flow 48 px below.
- Focal screen full width, supporting states one at a time.
- Maximum two screens in one visible composition.
- State/accessibility notes follow the relevant screen.

## 8.9 Results

- Outcome context H2/34.
- Results stack with 48 px gap and rules.
- Value H1/42; source context Caption.
- No counters.

## 8.10 Testimonial/Credits

- Quote H2/34, max 45 words.
- Attribution 24 px below.
- Credits begin 80 px later; role and contributor stack within each row.
- Credit row padding 16 px vertical.

## 8.11 Next Project/CTA

- Label/title first.
- Media 24 px later, width 350 px, ratio 16:10 or approved crop.
- View Next Project 24 px later.
- Start a Project full width 48 px later.

---

# 9. Shared Portfolio Media Rules

## 9.1 Ratios

- Panoramic: 2:1.
- Website/hero: 16:9 or 16:10.
- Editorial landscape: 3:2.
- Identity/portrait: 4:5.
- Detail/mark: 1:1.

The ratio is selected by content. Projects are not normalised into one thumbnail shape.

## 9.2 Media states

| State | Required treatment |
|---|---|
| Default | Approved final crop/poster; metadata visible |
| Hover | Scale/crop max 1.02; 700 ms; no overlay |
| Focus | 2 px visible outline/rule; scale optional |
| Active | Opacity 0.92 for 120 ms |
| Loading | Fixed-ratio placeholder matching dominant tone |
| Failed media | Approved fallback/poster; title and route remain |
| Reduced motion | Poster/final still; no scale or autoplay |

## 9.3 Delivery

- Still images use AVIF/WebP with appropriate fallback.
- Meaningful images have descriptive alt text.
- Decorative material imagery has empty alt.
- Video includes poster, muted/plays-inline behaviour where decorative, and explicit control where informative.
- Media dimensions are reserved before loading.
- Project visuals are never bronze-washed or recoloured to match NAVARICK.

---

# 10. Motion Production Values

## 10.1 Tokens

| Token | Value | Use |
|---|---:|---|
| Instant | 120 ms | Press acknowledgement |
| Fast | 220 ms | Link, icon, rule, small hover |
| Base | 420 ms | Text/block entrance |
| Medium | 500 ms | Navigation morph/media state |
| Slow | 700 ms | Clip/image reveal |
| Cinematic | 1100 ms maximum | Hero/page transition |
| Ease Out | `cubic-bezier(.16,1,.3,1)` | Entrances/release |
| Ease In Out | `cubic-bezier(.65,0,.35,1)` | Morph/crossfade/curtain |

## 10.2 Trigger points

- Large media reveal: element top reaches 90% viewport height.
- Heading reveal: element top reaches 86% viewport height.
- Body reveal: element top reaches 84% viewport height.
- Reveal once by default.
- Maximum moving groups per viewport: two.
- Parallax target: 3–5%; maximum 8% of element height.

## 10.3 Text reveal

- Heading: y 18 → 0, opacity 0 → 1, blur 6 → 0, 700 ms.
- Word/line stagger: 35–60 ms.
- Body: y 14 → 0, opacity 0 → 1, 420 ms.
- Label/metadata: opacity 0 → 1, 220 ms.

## 10.4 Media reveal

- Final dimensions are reserved.
- Clip reveals from bottom/reading origin.
- Scale 1.03 → 1.00 over 700 ms.
- Metadata begins when media reveal reaches 70%.

## 10.5 Page transition

- Click acknowledgement: 120 ms.
- Obsidian curtain or controlled fade: 700–900 ms.
- Incoming page title/media appears before curtain clears.
- Shared media transition only when crop mapping is stable.
- Back/forward behaviour takes priority.
- Reduced motion: immediate route or ≤120 ms opacity fade.

---

# 11. Footer — Production Specification

## 11.1 Desktop 1440

- Height: 440 px minimum.
- Content frame: x 64, width 1312 px.
- Top border: 1 px Soft White at 12%.
- Top padding 96 px; bottom padding 48 px.
- Wordmark columns 1–4, max width 240 px.
- Route index columns 7–9.
- Contact/social columns 10–12.
- Link vertical gap 16 px.
- Email uses Subheading/22.
- Legal row begins after 128 px minimum gap.
- Copyright/privacy left; social utility right.
- No newsletter, awards strip, or additional CTA.

## 11.2 Mobile 390

- Height: 720 px minimum.
- Padding 80 px top, 20 px horizontal, 32 px bottom plus safe area.
- Wordmark max width 180 px.
- Route list begins 48 px later; each target min 44 px.
- Contact begins 48 px after routes.
- Discipline line and tagline use Caption/14, max width 320 px.
- Legal utility begins 64 px later and stacks with 12 px gaps.
- No oversized cropped wordmark.

## 11.3 Footer interaction

- Rule draw/text change: 220 ms.
- Social links use visible names.
- Focus ring remains fully visible.

---

# 12. Accessibility Verification

## 12.1 WCAG 2.2 AA

The approved visual pairings meet or exceed required ratios:

- Soft White / Obsidian: 17.69:1.
- Muted Gray / Obsidian: 6.99:1.
- Champagne / Obsidian: 11.61:1.
- Bronze 500 / Obsidian: 4.97:1.
- Chrome 300 / Obsidian: 11.35:1.
- Obsidian / Champagne: 11.61:1.

Quiet Gray / Obsidian is limited to large, decorative, or disabled content. Final project imagery must be tested at actual crops.

## 12.2 Keyboard navigation

- Tab order follows visual reading order.
- Skip link appears on focus.
- Header, mobile menu, CTAs, project links, filters, video controls, and case-study comparisons are keyboard operable.
- Mobile menu traps focus correctly, closes on Escape, and returns focus to trigger.
- Current route uses semantic state plus visible treatment.
- No hover-only information.

## 12.3 Focus states

- Default: 2 px Champagne ring, 4 px offset.
- Use Soft White ring where Champagne does not maintain 3:1 local contrast.
- Focus is never clipped by overflow.
- Project media focus may use a bounded outline plus persistent title rule.

## 12.4 Reduced motion

- All content renders in final position at opacity 1.
- Hero uses approved poster; no cursor light.
- Lenis, parallax, pinning, magnetic response, blur reveal, long route transition, and decorative autoplay are disabled.
- Before/after uses labelled static frames.
- Optional opacity transition is 120–160 ms maximum.
- Reduced motion preserves section dimensions and reading order.

## 12.5 Touch and reflow

- Minimum target 44 × 44 px.
- Adjacent targets separated by at least 8 px.
- 390 designs remain valid down to 320 through fluid widths and specified stacking.
- 200% zoom must not produce horizontal page scroll or obscured focus.
- Body text minimum 16 px.

## 12.6 Media accessibility

- Meaningful images have alt text annotations.
- Decorative hero object is hidden from assistive technology.
- Informative video has accessible controls and description/caption where needed.
- Posters convey the stable visual meaning.

---

# 13. Production Asset Manifest

These assets are required to execute the approved design; they are inputs, not open design decisions.

## Brand assets

- Official NAVARICK wordmark: SVG, light and monochrome variants.
- Wordmark clear-space/minimum-size rules.
- Licensed Neue Montreal WOFF2 files, or approved Manrope production substitution.
- Instrument Serif and Inter WOFF2 files/subsets.

## Hero assets

- Chrome-glass animation source in its highest-quality rendered form.
- Editable 3D scene only if available and required for approved pointer light.
- Desktop transparent/matched-background video, target stage 576 × 576.
- Mobile variant, target stage 254 × 254.
- Desktop poster minimum 1200 × 1200.
- Mobile poster minimum 800 × 800.
- Material/lighting reference still.

## Portfolio assets

- Two flagship homepage projects.
- Three to four Selected Works projects.
- Work Index launch order and project status.
- Cover media at approved desktop/mobile crops.
- Full flagship case-study media: challenge evidence, strategy artefact, identity system, website, UI/UX, results.
- Video posters and optimised clips.
- Captions, alt text, rights, and credits.

## Proof/content assets

- Verified outcome data with source/timeframe.
- Approved testimonial with name, role, organisation.
- Complete credits.
- Final footer email, social, privacy, copyright.

---

# 14. Design Approval Checklist

## Locked content

- [ ] Hero headline uses “Building Brands People Remember.”
- [ ] Hero CTA order is View Selected Work, then Start a Project.
- [ ] Process uses Discover, Strategy, Design, Develop, Launch.
- [ ] Services remain the approved four disciplines.

## Homepage

- [ ] 1440 and 390 frames use exact section order and measurements.
- [ ] Chrome-glass object is contained at 576 × 576 desktop and 254 × 254 mobile.
- [ ] Hero is not fullscreen video or background media.
- [ ] Two flagship and three-to-four selected projects use approved real content.
- [ ] All project facts are visible without hover.
- [ ] Five-stage process fits without compressed type.
- [ ] Static/reduced-motion version is complete.

## Work Index

- [ ] 1440 and 390 editorial sequences use approved project order.
- [ ] Filter is included only if catalogue threshold is met.
- [ ] Featured project uses 2:1 media and visible transformation/outcome.
- [ ] No masonry or generic project cards.
- [ ] Hover, focus, loading, failure, and reduced-motion states are defined.

## Flagship Case Study

- [ ] One real project populates all relevant chapters.
- [ ] Challenge, Strategy, Identity, Website, UI/UX, Results, Testimonial, and CTA follow the exact hierarchy.
- [ ] Irrelevant chapters are omitted.
- [ ] Results are verified and credited.
- [ ] Desktop/mobile media crops, captions, posters, alt text, and credits are complete.
- [ ] Next Project and Start a Project actions are present.

## Navigation and footer

- [ ] Initial/sticky desktop header states match exact bounds.
- [ ] Mobile closed/open/sticky states match exact bounds.
- [ ] Focus management and reduced-motion menu state are documented.
- [ ] Footer uses final contact/legal content and contains no competing CTA.

## Motion

- [ ] Every motion has duration, easing, trigger, start, and end values.
- [ ] Hero is the only signature mechanic.
- [ ] No more than two moving groups occupy one viewport.
- [ ] Page transitions remain interruptible and back-button safe.
- [ ] Reduced-motion frames use final static states.

## Accessibility

- [ ] Final media/copy contrast passes WCAG 2.2 AA.
- [ ] Keyboard order follows reading order.
- [ ] Focus indicators are visible and unclipped.
- [ ] All targets meet 44 × 44 px minimum.
- [ ] 320 px and 200% zoom reflow checks pass.
- [ ] Alt text, captions, video controls, and decorative-media states are assigned.

## Implementation gate

- [ ] Required assets from the Production Asset Manifest are available.
- [ ] Final fonts are licensed and supplied.
- [ ] Figma frames use named tokens/components and exact measurements from this document.
- [ ] No engineer must invent a breakpoint, crop, state, timing, hierarchy, or CTA location.
- [ ] Creative lead, designer, and frontend lead have signed off.

---

# 15. Readiness Assessment

## Open decisions

**None.** Strategy, structure, headline, CTA hierarchy, process, service scope, responsive targets, interaction model, and visual system are locked for V1.

## Asset dependencies

Implementation still requires the assets listed in Section 13. Missing assets should use explicit development placeholders only; they must not be replaced with invented project work or generic stock media.

## Implementation readiness score

**90 / 100**

Breakdown:

- Strategy and information architecture: 10/10.
- UX and responsive structure: 10/10.
- Visual design measurements: 20/20.
- Motion and interaction specification: 15/15.
- Accessibility definition: 15/15.
- Content direction: 10/10.
- Production assets and verified case-study proof: 10/20 pending delivery.

The interface foundation, navigation, layout, responsive system, and static content structures can enter implementation. Final hero fidelity and portfolio/case-study completion depend on the production assets and verified evidence manifest.
