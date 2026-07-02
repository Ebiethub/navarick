# NAVARICK Experience Wireframes

**Status:** UX architecture / approval candidate
**Version:** 1.0
**Date:** 24 June 2026
**Scope:** Structural wireframes for Home, Work, flagship Case Study, Services, About, and Contact
**Authority:** Extends the approved PRD, Homepage UX Blueprint, and Design System; it does not replace them.

---

## Document purpose

This document defines the structural experience before visual UI design begins. It describes hierarchy, content order, responsive composition, navigation, interaction logic, and conversion paths without prescribing finished styling or frontend implementation.

These wireframes are intentionally low fidelity. Boxes indicate content responsibility, not card styling. A bordered block in a diagram does not imply that the final interface should use a visible card or border.

## Wireframe notation

| Notation | Meaning |
|---|---|
| `[TEXT]` | Editorial copy or heading |
| `[META]` | Project facts, label, year, discipline, status |
| `[MEDIA]` | Image, video, render, interface sequence, or approved fallback |
| `[ACTION]` | Link or button with a clear destination |
| `[FORM]` | Form control with persistent label and validation |
| `[PROOF]` | Verified result, testimonial, or credit |
| `[STICKY]` | May remain in view on capable desktop layouts only |
| `[OPTIONAL]` | Render only when approved content justifies it |
| `→` | Primary reading or conversion path |
| `↳` | Secondary route or detail path |

## Global experience shell

All pages share this structural shell:

```text
┌────────────────────────────────────────────────────────────────────┐
│ [SKIP TO CONTENT]                                                  │
│ [WORDMARK]              Work  Services  About    [Start a project] │
├────────────────────────────────────────────────────────────────────┤
│                                                                    │
│ [PAGE-SPECIFIC MAIN CONTENT]                                       │
│                                                                    │
├────────────────────────────────────────────────────────────────────┤
│ [WORDMARK]  Work / Services / About / Contact                     │
│ [EMAIL]     [SOCIAL]     [PRIVACY]     [COPYRIGHT]                 │
└────────────────────────────────────────────────────────────────────┘
```

### Global shell behaviour

- Header begins open/transparent over a controlled hero zone and becomes a compact persistent navigation surface after initial scroll.
- Header never obscures focused content and never fully disappears on ordinary desktop scroll.
- Mobile replaces desktop links with a Menu control and a full-screen editorial navigation index.
- Contact is accessible from the global header, final CTA, and footer.
- Current route is indicated semantically and visually.
- Browser back/forward and native scroll restoration remain predictable.

### Page responsibilities

| Page | Primary responsibility | Primary onward action |
|---|---|---|
| Home | Establish desire and orient | View flagship work |
| Work | Enable project discovery and comparison | Open a case study |
| Case Study | Prove thinking, craft, and outcome | Start a project / next project |
| Services | Clarify fit and engagement value | Start a project |
| About | Establish point of view and human confidence | Explore work / contact |
| Contact | Qualify gently and remove friction | Submit enquiry |

---

# 1. Homepage Wireframe

## 1.1 Homepage master flow

```text
[GLOBAL HEADER]
      ↓
01 CINEMATIC HERO
      ↓ primary: View selected work
02 FEATURED WORK / TWO SIGNATURE CASE STUDIES
      ↓ primary: Open flagship case study
03 STUDIO PHILOSOPHY
      ↓ secondary: About / approach
04 CAPABILITIES
      ↓ secondary: Services
05 SELECTED WORKS
      ↓ primary: Work index / project
06 PROCESS
      ↓ reassurance
07 RESULTS / PROOF / IMPACT
      ↓ trust resolved
08 FINAL CONTACT CTA
      ↓ primary conversion: Contact
[GLOBAL FOOTER]
```

The homepage alternates immersion and interpretation. It does not place multiple text-heavy explanations or multiple galleries back to back.

## 1.2 Desktop homepage overview — 1440 px and above

```text
┌────────────────────────────────────────────────────────────────────┐
│ HEADER                                                             │
├────────────────────────────────────────────────────────────────────┤
│ 01 HERO — full usable viewport                                    │
│                                                                    │
│ [EYEBROW]                                                          │
│ [HEADLINE / PROMISE]             [MATERIAL OBJECT / HERO MEDIA]    │
│                                                                    │
│ [SUPPORT COPY]                   [VIEW WORK] [START PROJECT]        │
│                                                    [SCROLL CUE]    │
├────────────────────────────────────────────────────────────────────┤
│ 02 FEATURED WORK                                                   │
│ [SECTION INTRO]                                                    │
│                                                                    │
│ [PROJECT A LARGE MEDIA — STICKY OPTIONAL]  [CONTEXT / IDEA / RESULT]│
│ [TRANSFORMATION EVIDENCE]                 [VIEW CASE STUDY]         │
│                                                                    │
│ [PROJECT B CONTEXT / IDEA / RESULT]       [PROJECT B LARGE MEDIA]  │
│ [VIEW CASE STUDY]                         [TRANSFORMATION EVIDENCE] │
├────────────────────────────────────────────────────────────────────┤
│ 03 STUDIO PHILOSOPHY                                               │
│ [LARGE STATEMENT — 8 COLUMNS]      [SUPPORT COPY / OUR APPROACH]   │
├────────────────────────────────────────────────────────────────────┤
│ 04 CAPABILITIES                                                    │
│ [INTRO]                                                            │
│ 01 Brand Identity  [OUTCOME] [SCOPE]       [SHARED MEDIA STAGE]    │
│ 02 Web Design      [OUTCOME] [SCOPE]       [ACTIVE ROW MEDIA]      │
│ 03 Development     [OUTCOME] [SCOPE]                               │
│ 04 UI/UX            [OUTCOME] [SCOPE]                              │
│ [EXPLORE SERVICES]                                                 │
├────────────────────────────────────────────────────────────────────┤
│ 05 SELECTED WORKS                                                  │
│ [HEADING / COUNT]                                                  │
│ [PANORAMIC PROJECT]                                                │
│                    [PORTRAIT PROJECT] [DETAIL PROJECT]             │
│ [LANDSCAPE PROJECT]                                                │
│ [VIEW ALL WORK]                                                    │
├────────────────────────────────────────────────────────────────────┤
│ 06 PROCESS                                                         │
│ [HEADING]         01 Discover  02 Define  03 Design  04 Deliver   │
│ [INTRO]           [PURPOSE / OUTPUT / DECISION GATE BY STAGE]      │
├────────────────────────────────────────────────────────────────────┤
│ 07 RESULTS / PROOF                                                 │
│ [LARGE CLIENT QUOTE]                  [ATTRIBUTION]                 │
│ [VERIFIED OUTCOME] [VERIFIED OUTCOME] [VERIFIED OUTCOME]           │
├────────────────────────────────────────────────────────────────────┤
│ 08 CONTACT CTA                                                     │
│ [INVITATION HEADLINE]                                              │
│ [SUPPORT / EXPECTATION]              [START PROJECT] [EMAIL]       │
├────────────────────────────────────────────────────────────────────┤
│ FOOTER                                                             │
└────────────────────────────────────────────────────────────────────┘
```

## 1.3 Section specifications

### 01 — Cinematic Hero

#### Layout

- Full usable viewport beneath/behind the global header.
- Two visual planes: semantic copy and independent hero-media stage.
- Headline occupies the upper/central reading zone; support and actions anchor lower in the viewport.
- Media receives the visual centre but does not become a content container.

#### Hierarchy

1. Official wordmark/global navigation.
2. Category: Independent creative studio.
3. Promise: We give ambitious ideas distinctive form.
4. Brand identity and digital experience explanation.
5. View selected work.
6. Start a project.
7. Scroll cue.

#### Content blocks

- `[META]` category label.
- `[TEXT]` primary headline.
- `[TEXT]` one-sentence positioning.
- `[ACTION]` View selected work.
- `[ACTION]` Start a project.
- `[MEDIA]` approved poster/video/3D scene.
- `[OPTIONAL META]` accurate availability note.

#### User flow

- Primary: Hero → Featured Work.
- Secondary: Hero → Contact.
- Utility: Hero → global navigation routes.

#### Interaction notes

- Meaningful copy is available from first render.
- Hero entrance settles once; scroll remains available throughout.
- Fine-pointer light response begins only after the entrance and only inside the media stage.
- Scroll cue moves to Featured Work and transfers context without trapping scroll.
- Failed media shows the approved poster without moving copy.

---

### 02 — Featured Work / Signature Case Studies

#### Layout

- Section introduction followed by two distinct project chapters.
- Each chapter has one dominant media stage and one narrative column.
- Project A may place media first; Project B reverses the order.
- Only one chapter may use a sticky media/narrative progression.

#### Hierarchy

1. Selected transformations heading.
2. Project title/client.
3. Transformation statement.
4. Sector, disciplines, year.
5. Dominant media.
6. Context.
7. Defining idea.
8. Verified result or honest qualitative outcome.
9. View case study.

#### Content blocks

- `[TEXT]` section introduction.
- `[META]` project facts.
- `[MEDIA]` project hero preview.
- `[TEXT]` context, idea, result.
- `[MEDIA]` before/after or system sequence.
- `[ACTION]` View case study.

#### User flow

- Browse first flagship → open case study or continue.
- Browse second flagship → open case study or continue to Philosophy.
- Case-study return should restore the user's homepage position where technically reliable.

#### Interaction notes

- All project facts remain visible without hover.
- Hover/focus enriches the preview but does not reveal essential content.
- Before/after is interactive only when equivalent source material exists.
- Project chapter is a clearly scoped link target; nested links remain avoided.

---

### 03 — Studio Philosophy

#### Layout

- Quiet reading field after immersive project media.
- Large statement occupies most of the horizontal grid.
- Supporting explanation and Our approach link sit beside or beneath it.
- Optional working detail supports the statement without creating another gallery.

#### Hierarchy

1. Our point of view.
2. One idea. One direction. Every expression.
3. Explanation of the integrated practice.
4. Our approach.

#### Content blocks

- `[META]` section label.
- `[TEXT]` editorial statement.
- `[TEXT]` short supporting paragraph.
- `[OPTIONAL MEDIA]` studio/process detail.
- `[ACTION]` About/approach route.

#### User flow

- Continue downward for practical capability information.
- Secondary route to About for visitors evaluating philosophy/culture.

#### Interaction notes

- No required interaction.
- Statement may reveal by line; it is fully present in the reading order.
- Optional media parallax is non-essential and removed on touch/reduced motion.

---

### 04 — Capabilities

#### Layout

- Four numbered editorial rows, not four cards.
- Each row exposes title, outcome, and representative scope.
- Shared supporting media stage appears only on wide screens and only if approved artefacts exist.

#### Hierarchy

1. What we make.
2. Four disciplines, shaped as one coherent experience.
3. Brand Identity Design.
4. Web Design.
5. Web Development.
6. UI/UX Design.
7. Explore our services.

#### Content blocks

- `[TEXT]` section introduction.
- Four × `[META]` number.
- Four × `[TEXT]` service title, outcome, scope.
- `[OPTIONAL MEDIA]` active service artefact.
- `[ACTION]` Explore services.

#### User flow

- Scan all four services → identify fit → Services page.
- Continue to broader work when fit is already clear.

#### Interaction notes

- Desktop hover/focus may crossfade a shared media stage.
- Rows never collapse core information into accordions.
- Touch shows complete information in normal flow.

---

### 05 — Selected Works

#### Layout

- Three to four additional projects in a variable editorial sequence.
- Approved modules may be panoramic, landscape, portrait, or detail-led.
- Metadata remains adjacent to each preview.
- No filter controls on the homepage.

#### Hierarchy

1. Selected works heading and count.
2. Project media.
3. Project/client name.
4. Disciplines and year.
5. Assignment/change statement.
6. View project.
7. View all work.

#### Content blocks

- `[TEXT]` heading and introduction.
- 3–4 × `[MEDIA]` project preview.
- 3–4 × `[META]` project facts/status.
- 3–4 × `[ACTION]` project route.
- `[ACTION]` Work index.

#### User flow

- Open a project from the gallery.
- Compare range by continuing through the sequence.
- Move to Work index for the complete portfolio.

#### Interaction notes

- Project preview motion plays on intent where justified and has a poster.
- No title is hidden until hover.
- Concept/unreleased status is explicit.
- Mobile does not become a horizontal swipe gallery.

---

### 06 — Process

#### Layout

- Four sequential stages: Discover, Define, Design, Deliver.
- One connecting rule/index creates order.
- Each stage contains purpose, output, and decision gate.
- If Featured Work uses sticky behaviour, Process remains normal flow.

#### Hierarchy

1. A clear path to distinctive work.
2. Short process introduction.
3. Stage name.
4. Stage purpose.
5. Output/decision gate.
6. Optional How we work link.

#### Content blocks

- `[TEXT]` heading and introduction.
- Four × `[META]` stage index.
- Four × `[TEXT]` purpose and output.
- `[ACTION OPTIONAL]` Services/About process route.

#### User flow

- Read stages in order → gain delivery confidence → continue to Proof.
- No branch or decision is required.

#### Interaction notes

- Desktop may mark the active stage as it crosses the reading zone.
- All stages remain visible without animation.
- No horizontal scroll takeover or pinned mandatory timeline.

---

### 07 — Results / Proof / Impact

#### Layout

- One principal testimonial.
- Up to three verified result facts tied to named projects.
- Optional client list only when approved relationships justify it.

#### Hierarchy

1. The work, in effect.
2. Principal client statement.
3. Attribution.
4. Verified outcome facts.
5. Optional related project link.

#### Content blocks

- `[TEXT/PROOF]` quote.
- `[META]` name, role, organisation.
- 1–3 × `[PROOF]` outcome and source context.
- `[OPTIONAL ACTION]` related case study.

#### User flow

- Proof resolves credibility concerns → Final Contact CTA.
- Related project remains a secondary route.

#### Interaction notes

- One quote is preferred for V1.
- No autoplay carousel, count-up metric, or logo marquee.
- If evidence is unavailable, reduce content rather than fabricate volume.

---

### 08 — Final Contact CTA

#### Layout

- Near-full-viewport closing invitation.
- Headline is the primary element.
- Support and contact expectation accompany two actions.
- Footer begins after sufficient separation.

#### Hierarchy

1. Have something worth making unmistakable?
2. Who/when should contact NAVARICK.
3. Start a project.
4. Direct email.
5. Response expectation.

#### Content blocks

- `[TEXT]` invitation headline.
- `[TEXT]` support and expectation.
- `[ACTION]` Start a project.
- `[ACTION]` email.
- `[MEDIA OPTIONAL]` quiet material/poster detail.

#### User flow

- Primary: Start a project → Contact page.
- Secondary: Direct email.
- Recovery: Footer routes.

#### Interaction notes

- Magnetic response is optional on capable fine pointers only.
- Action labels remain stable and descriptive.
- No booking widget or form overlay is triggered from the homepage.

## 1.4 Laptop homepage — 1024–1439 px

```text
┌──────────────────────────────────────────────────────────┐
│ HEADER — compact persistent                              │
├──────────────────────────────────────────────────────────┤
│ HERO                                                     │
│ [EYEBROW] [HEADLINE]                                     │
│                    [HERO MEDIA]                          │
│ [SUPPORT]           [ACTIONS]                            │
├──────────────────────────────────────────────────────────┤
│ FEATURED A: [MEDIA 7 COL] [NARRATIVE 5 COL]              │
│ FEATURED B: [NARRATIVE 5 COL] [MEDIA 7 COL]              │
├──────────────────────────────────────────────────────────┤
│ PHILOSOPHY: [STATEMENT 8 COL] [SUPPORT 4 COL]            │
├──────────────────────────────────────────────────────────┤
│ CAPABILITIES: [ROWS 8 COL] [MEDIA 4 COL, OPTIONAL]       │
├──────────────────────────────────────────────────────────┤
│ SELECTED WORKS: variable 7/5 and full-width modules      │
├──────────────────────────────────────────────────────────┤
│ PROCESS: four columns or static vertical sequence        │
├──────────────────────────────────────────────────────────┤
│ PROOF → CONTACT → FOOTER                                 │
└──────────────────────────────────────────────────────────┘
```

### Laptop rules

- Treat 1024 px and short viewport heights as primary design conditions.
- Reduce overlap and sticky duration before reducing type hierarchy.
- Disable sticky Featured Work when the full narrative cannot fit in the viewport.
- Hero actions may sit beneath support copy rather than at the opposite edge.
- Capability media becomes optional below the width at which text feels compressed.

## 1.5 Tablet homepage — 768–1023 px

```text
┌──────────────────────────────────────────────┐
│ [WORDMARK]                         [MENU]     │
├──────────────────────────────────────────────┤
│ HERO                                         │
│ [EYEBROW]                                    │
│ [HEADLINE]                                   │
│ [HERO MEDIA / POSTER]                        │
│ [SUPPORT]                                    │
│ [VIEW WORK] [START PROJECT]                  │
├──────────────────────────────────────────────┤
│ FEATURED PROJECT A                           │
│ [TITLE / META]                               │
│ [LARGE MEDIA]                                │
│ [CONTEXT] [IDEA] [RESULT]                    │
│ [VIEW CASE STUDY]                            │
│ FEATURED PROJECT B — same order              │
├──────────────────────────────────────────────┤
│ PHILOSOPHY [STATEMENT] → [SUPPORT]           │
├──────────────────────────────────────────────┤
│ CAPABILITIES — four complete rows            │
├──────────────────────────────────────────────┤
│ SELECTED WORKS — 1 or 2 modules per row      │
├──────────────────────────────────────────────┤
│ PROCESS — vertical or 2 × 2 sequence         │
├──────────────────────────────────────────────┤
│ PROOF → CONTACT → FOOTER                     │
└──────────────────────────────────────────────┘
```

### Tablet rules

- No pointer-dependent hero or service behaviour.
- Featured Work becomes linear; no pinned storytelling.
- Essential project metadata is always visible.
- Process uses vertical or two-by-two structure based on actual copy length.
- Mobile Menu pattern replaces desktop route row.
- Touch targets remain at least 44 × 44 px.

## 1.6 Mobile homepage — 320–767 px

```text
┌──────────────────────────────┐
│ [WORDMARK]            [MENU] │
├──────────────────────────────┤
│ HERO — 100dvh                │
│ [EYEBROW]                    │
│ [HEADLINE]                   │
│ [HERO POSTER]                │
│ [SUPPORT]                    │
│ [VIEW WORK]                  │
│ [START PROJECT]              │
│ [SCROLL CUE]                 │
├──────────────────────────────┤
│ FEATURED WORK                │
│ PROJECT A                    │
│ [TITLE / META]               │
│ [MEDIA]                      │
│ [CONTEXT]                    │
│ [IDEA]                       │
│ [RESULT]                     │
│ [VIEW CASE STUDY]            │
│                              │
│ PROJECT B — same order       │
├──────────────────────────────┤
│ PHILOSOPHY                   │
│ [STATEMENT]                  │
│ [SUPPORT] [OUR APPROACH]     │
├──────────────────────────────┤
│ CAPABILITIES                 │
│ 01 [TITLE] [OUTCOME] [SCOPE] │
│ 02 [TITLE] [OUTCOME] [SCOPE] │
│ 03 [TITLE] [OUTCOME] [SCOPE] │
│ 04 [TITLE] [OUTCOME] [SCOPE] │
├──────────────────────────────┤
│ SELECTED WORKS               │
│ [MEDIA] [META] [TITLE]       │
│ [MEDIA] [META] [TITLE]       │
│ [MEDIA] [META] [TITLE]       │
│ [VIEW ALL WORK]              │
├──────────────────────────────┤
│ PROCESS — vertical timeline  │
├──────────────────────────────┤
│ QUOTE → OUTCOME → CONTACT    │
├──────────────────────────────┤
│ FOOTER                       │
└──────────────────────────────┘
```

### Mobile rules

- Content order follows the visual order exactly.
- Hero uses a poster or one short authored light pass; no WebGL dependency.
- No sticky project sequence, drag-dependent comparison, horizontal project carousel, or hover-only metadata.
- Before/after becomes two labelled frames or a simple accessible toggle.
- Project media precedes the explanatory copy it illustrates unless comprehension requires the opposite.
- Final CTA actions stack and remain stable above the footer.

## 1.7 Reduced-motion homepage

The section order and hierarchy do not change.

```text
[STATIC HEADER]
[HERO: final wordmark + complete copy + approved poster]
[FEATURED WORK: final media frames + visible metadata]
[PHILOSOPHY: complete statement]
[CAPABILITIES: all rows visible; no active media swap required]
[SELECTED WORKS: poster frames]
[PROCESS: complete static sequence]
[PROOF: quote and outcomes]
[CONTACT CTA: static material detail]
[FOOTER]
```

### Reduced-motion interaction rules

- No opening choreography, cursor tracking, parallax, pinning, clip reveals, blur, or magnetic response.
- Content renders in its final position.
- Optional opacity transition remains under 160 ms.
- Scroll cue uses native jump or user-agent behaviour.
- Motion previews require explicit play.
- Route transitions are immediate or a short fade.

---

# 2. Work Index Wireframe

## 2.1 Page objective

Allow visitors to understand the breadth and standard of NAVARICK's work, identify a relevant project, and enter a case study without reducing the portfolio to a generic grid of equal thumbnails.

## 2.2 Work Index master flow

```text
[GLOBAL HEADER / WORK CURRENT]
      ↓
WORK INTRO / CURATORIAL STATEMENT
      ↓
FEATURED PROJECT
      ↓
PROJECT INDEX / OPTIONAL FILTER
      ↓
EDITORIAL PROJECT SEQUENCE
      ↓
CONTACT INVITATION
[FOOTER]
```

## 2.3 Desktop wireframe

```text
┌────────────────────────────────────────────────────────────────────┐
│ HEADER — Work marked current                                      │
├────────────────────────────────────────────────────────────────────┤
│ WORK INTRO                                                        │
│ [H1: Selected work]                                               │
│ [CURATORIAL STATEMENT — what the collection demonstrates]         │
│ [PROJECT COUNT]                           [OPTIONAL FILTER INDEX]   │
├────────────────────────────────────────────────────────────────────┤
│ FEATURED PROJECT                                                  │
│ [PROJECT NAME / TRANSFORMATION]                                   │
│ [META]                                                            │
│ [DOMINANT FULL-WIDTH MEDIA]                                       │
│ [ONE-LINE RESULT]                               [VIEW CASE STUDY]  │
├────────────────────────────────────────────────────────────────────┤
│ PROJECT INDEX / FILTER                                            │
│ [ALL] [BRAND IDENTITY] [WEB] [UI/UX]          [VISIBLE COUNT]     │
├────────────────────────────────────────────────────────────────────┤
│ EDITORIAL LIST                                                     │
│ 02 [WIDE PROJECT MEDIA]                [TITLE / META / STATEMENT]  │
│ 03 [TITLE / META / STATEMENT]          [PORTRAIT MEDIA]           │
│ 04 [PANORAMIC MEDIA]                                              │
│    [TITLE / META / STATEMENT]                                     │
│ 05 [DETAIL MEDIA] [DETAIL MEDIA]      [TITLE / META / STATEMENT]  │
├────────────────────────────────────────────────────────────────────┤
│ [NO-RESULT STATE WHEN FILTERED]                                   │
├────────────────────────────────────────────────────────────────────┤
│ CONTACT INVITATION                                                │
│ [Looking for a particular kind of transformation?] [START PROJECT]│
├────────────────────────────────────────────────────────────────────┤
│ FOOTER                                                            │
└────────────────────────────────────────────────────────────────────┘
```

## 2.4 Information hierarchy

1. Work page title and curatorial point of view.
2. One featured project.
3. Optional category control when justified.
4. Remaining projects in intentional editorial order.
5. Project title, transformation statement, discipline/year/status.
6. Contact invitation.

## 2.5 Featured project

- Uses the strongest project not already overexposed in the homepage hero.
- Includes transformation statement and one honest result.
- Media dominates the entry but title and facts are visible before hover.
- Entire module routes to the full case study.

## 2.6 Project listing strategy

- Order is curated, not chronological by default.
- Alternate scale and alignment to sustain rhythm.
- Projects are not forced into equal cards or masonry.
- No pagination is required for 4–8 projects.
- Introduce pagination or “Load more” only when the catalogue meaningfully exceeds one composed page.
- Concept/unreleased/archive status is explicit.

## 2.7 Filtering strategy

### V1 recommendation

- Hide filters when there are eight or fewer projects or when categories would contain fewer than two useful entries.
- If filtering is justified, use: All, Brand Identity, Web, UI/UX.
- Web includes web design and development while project metadata still names both precisely.

### Behaviour

- Filter updates the visible project sequence and count without reordering unrelated content unexpectedly.
- Selected filter is represented in the URL when practical so the view is shareable and back-button safe.
- Focus remains on the selected control; a polite status message announces result count.
- No-results state explains that the current collection is curated and offers All Work/Contact routes.
- On mobile, filters become a wrapping control row or native accessible selection—not a hidden horizontal scroller.

## 2.8 Navigation behaviour

- Work is marked as the current route.
- Persistent header uses the compact state after the intro.
- Opening a case study uses normal navigation and preserves expected back behaviour.
- Returning to Work restores filter and approximate scroll position when browser behaviour supports it.
- Final contact route remains visible without interrupting project browsing.

## 2.9 Work Index responsive structure

### Laptop

- Keep 12-column order; reduce asymmetric gaps before reducing project legibility.
- Featured media remains wide; narrative may move beneath on short screens.
- Editorial list uses 7/5 or 8/4 relationships rather than extreme offsets.

### Tablet

- Intro remains wide; filter wraps beneath count.
- Featured project becomes title/meta → media → result/action.
- Project listing uses one project per row or intentional portrait pairs.
- Hover preview becomes tap/visible metadata.

### Mobile

```text
[HEADER]
[H1 + CURATORIAL STATEMENT]
[PROJECT COUNT]
[FILTERS IF JUSTIFIED]
[FEATURED TITLE / META]
[FEATURED MEDIA]
[RESULT / VIEW CASE STUDY]
[PROJECT MEDIA]
[TITLE / META / STATEMENT]
[PROJECT MEDIA]
[TITLE / META / STATEMENT]
[...]
[CONTACT CTA]
[FOOTER]
```

- One-column curated sequence; no masonry.
- All metadata is visible.
- Filter controls do not create horizontal page overflow.
- Videos display poster first and play only on explicit intent or carefully tested visibility.

---

# 3. Flagship Case Study Wireframe

## 3.1 Page objective

Demonstrate that NAVARICK can understand a consequential problem, make a defining strategic decision, express it as a coherent brand/digital system, and deliver a credible result.

## 3.2 Scroll flow

```text
[GLOBAL HEADER]
      ↓
01 HERO — transformation promise
      ↓
02 CHALLENGE — why change was necessary
      ↓
03 DISCOVERY — what was learned
      ↓
04 STRATEGY — the defining idea
      ↓
05 BRAND IDENTITY — the system
      ↓
06 WEBSITE DESIGN — brand in responsive experience
      ↓
07 UI/UX — journey and interface logic
      ↓
08 RESULTS — verified impact
      ↓
09 TESTIMONIAL + CREDITS
      ↓
10 NEXT PROJECT / CONTACT CTA
```

Chapters irrelevant to a project are omitted rather than padded. At least one expression chapter must show how the strategic idea shaped a real system.

## 3.3 Desktop wireframe

```text
┌────────────────────────────────────────────────────────────────────┐
│ HEADER                                                             │
├────────────────────────────────────────────────────────────────────┤
│ 01 HERO                                                            │
│ [CLIENT / PROJECT]                                                 │
│ [TRANSFORMATION PROMISE — H1]                                     │
│ [DISCIPLINES] [SECTOR] [YEAR] [STATUS]       [LIVE SITE OPTIONAL] │
│ [DOMINANT HERO MEDIA]                                              │
├────────────────────────────────────────────────────────────────────┤
│ 02 CHALLENGE                                                       │
│ [SECTION INDEX / TITLE]    [CONTEXT + SPECIFIC TENSION]            │
│ [SUCCESS DEFINITION]       [BEFORE-STATE EVIDENCE OPTIONAL]        │
├────────────────────────────────────────────────────────────────────┤
│ 03 DISCOVERY                                                       │
│ [WHAT WE LEARNED — 2–4 FINDINGS]      [RESEARCH/ARTEFACT MEDIA]   │
│ [CONSTRAINTS / AUDIENCE / OPPORTUNITY]                             │
├────────────────────────────────────────────────────────────────────┤
│ 04 STRATEGY                                                        │
│ [DEFINING IDEA — LARGE STATEMENT]                                 │
│ [WHY IT MATTERED] [DESIGN PRINCIPLES] [DIAGRAM / PROOF]           │
├────────────────────────────────────────────────────────────────────┤
│ 05 BRAND IDENTITY                                                  │
│ [MARK REVEAL / PRIMARY SYSTEM]                                    │
│ [TYPOGRAPHY] [COLOUR]                                              │
│ [COMPOSITION / VOICE / MOTION PRINCIPLE]                           │
│ [APPLICATION WIDE MEDIA]                                          │
├────────────────────────────────────────────────────────────────────┤
│ 06 WEBSITE DESIGN                                                  │
│ [EXPERIENCE PREMISE / IA]          [FULL PAGE / KEY INTERACTION]   │
│ [RESPONSIVE SEQUENCE]              [DESIGN-SYSTEM DETAIL]          │
├────────────────────────────────────────────────────────────────────┤
│ 07 UI/UX                                                           │
│ [USER TASK / JOURNEY]                                              │
│ [FLOW] → [KEY SCREENS] → [STATES / ACCESSIBILITY]                 │
├────────────────────────────────────────────────────────────────────┤
│ 08 RESULTS                                                         │
│ [RESULT CONTEXT]                                                   │
│ [VERIFIED OUTCOME] [VERIFIED OUTCOME] [QUALITATIVE CHANGE]         │
│ [BEFORE / AFTER OPTIONAL]                                         │
├────────────────────────────────────────────────────────────────────┤
│ 09 TESTIMONIAL + CREDITS                                           │
│ [CLIENT QUOTE]                         [NAME / ROLE]                │
│ [NAVARICK ROLE / CLIENT TEAM / COLLABORATORS / ASSET CREDITS]      │
├────────────────────────────────────────────────────────────────────┤
│ 10 CTA                                                             │
│ [NEXT PROJECT MEDIA + TITLE]             [START A PROJECT]         │
├────────────────────────────────────────────────────────────────────┤
│ FOOTER                                                             │
└────────────────────────────────────────────────────────────────────┘
```

## 3.4 Chapter specifications

### Hero

- **Hierarchy:** Project/client → transformation promise → facts → media → live link.
- **Flow:** Establish relevance before the visitor commits to a long scroll.
- **Interaction:** Hero media may transition from the Work preview when reliable; content does not depend on the transition.
- **Navigation:** Header remains available; optional local chapter index appears only if the final study is long enough to justify it.

### Challenge

- **Hierarchy:** Context → specific tension → affected audience/business → success definition.
- **Content:** One strong reading passage and supporting facts, not a wall of discovery notes.
- **Interaction:** Before-state evidence may open/compare but remains understandable statically.

### Discovery

- **Hierarchy:** What was examined → what was learned → what opportunity emerged.
- **Content:** Two to four findings with source/context, constraints, relevant artefacts.
- **Integrity:** Do not imply formal research methods that were not conducted.
- **Interaction:** Findings may update one supporting media area on desktop; all text stays visible.

### Strategy

- **Hierarchy:** Defining idea → why it answered the challenge → principles/consequences.
- **Content:** One named idea only if authentic, plus 2–4 design/experience principles.
- **Interaction:** Optional diagram or progressive reveal; strategy remains readable without motion.

### Brand Identity

- **Hierarchy:** Mark/system premise → typography/colour → composition/voice/motion → application.
- **Content:** Direct artefacts before contextual mockups.
- **Flow:** Move from rule to variation to real use.
- **Interaction:** System sequence may advance through normal scroll; no required drag or carousel.

### Website Design

- **Hierarchy:** Experience premise/IA → defining page/interaction → responsive behaviour → system detail.
- **Content:** Flat legible screenshot plus contextual frame; responsive states that demonstrate a decision.
- **Interaction:** Short clips play on intent; poster remains meaningful.

### UI/UX

- **Hierarchy:** User task → journey/flow → key interface → states/accessibility → observed result.
- **Content:** Screens as a sequence, not a collage.
- **Interaction:** Flow may be stepped with explicit controls; keyboard/touch equivalents are required.

### Results

- **Hierarchy:** Outcome context → metric/qualitative result → source/timeframe → interpretation.
- **Content:** One to three strong outcomes.
- **Interaction:** None required. No count-up animation.

### Testimonial

- **Hierarchy:** Quote → name → role/organisation → related result.
- **Content:** One attributable quote of approximately 25–45 words.
- **Interaction:** None. No rotating testimonial carousel.

### CTA

- **Hierarchy:** Next project first for portfolio continuation; Start a project second for conversion.
- **Content:** Next-project title/media and project-contact invitation.
- **Interaction:** Normal link navigation; no automated redirect.

## 3.5 Case-study reading/navigation support

- Optional local chapter index appears after the hero only when there are at least six substantial chapters.
- Local index uses plain links and marks the current chapter without replacing browser navigation.
- Estimated reading time is optional and must not reduce the project to a blog article.
- Media captions and credits are attached to the relevant artefacts.
- Share control is optional and secondary.

## 3.6 Case-study responsive structure

### Laptop

- Retain two-column context/strategy passages where copy length permits.
- Reduce sticky media use on short screens.
- Full-width media remains full-width within the site grid rather than viewport edge when performance/crop demands it.

### Tablet

- Hero facts wrap beneath the title.
- Narrative/media pairs become sequential.
- Local chapter index becomes a compact list or is omitted.
- System comparisons use labelled frames.

### Mobile

```text
[HEADER]
[PROJECT / CLIENT]
[TRANSFORMATION H1]
[FACTS]
[HERO MEDIA]
[CHALLENGE TEXT]
[BEFORE EVIDENCE]
[DISCOVERY FINDINGS]
[STRATEGY IDEA]
[PRINCIPLES]
[IDENTITY MEDIA SEQUENCE]
[WEBSITE / UI SEQUENCE]
[RESULTS]
[QUOTE]
[CREDITS]
[NEXT PROJECT]
[START PROJECT]
[FOOTER]
```

- One narrative flow; no sticky chapters or split-column dependencies.
- Before/after uses labelled images or explicit toggle.
- Key interface screens remain legible; small collages are replaced by fewer larger frames.
- Project facts remain near the top, not hidden in a drawer.

---

# 4. Services Page Wireframe

## 4.1 Page objective

Help a prospective client understand what NAVARICK can solve, how the four disciplines connect, what an engagement produces, and whether the studio is the right fit.

## 4.2 Services flow

```text
[HEADER / SERVICES CURRENT]
      ↓
SERVICES HERO
      ↓
SERVICES OVERVIEW / FOUR DISCIPLINES
      ↓
DETAILED SERVICE CHAPTERS
      ↓
PROCESS
      ↓
FAQ
      ↓
CONTACT CTA
[FOOTER]
```

## 4.3 Desktop wireframe

```text
┌────────────────────────────────────────────────────────────────────┐
│ HEADER — Services current                                         │
├────────────────────────────────────────────────────────────────────┤
│ HERO                                                              │
│ [H1: One creative direction, from identity to experience.]        │
│ [WHO THIS IS FOR / WHAT CHANGES]             [START A PROJECT]    │
├────────────────────────────────────────────────────────────────────┤
│ SERVICES OVERVIEW                                                  │
│ 01 Brand Identity   02 Web Design   03 Development   04 UI/UX     │
│ [OUTCOME SUMMARY FOR EACH]                                        │
├────────────────────────────────────────────────────────────────────┤
│ DETAIL 01 — BRAND IDENTITY                                        │
│ [PROBLEM / OUTCOME]          [REPRESENTATIVE ARTEFACT]             │
│ [SCOPE / DELIVERABLES]       [APPROPRIATE ENGAGEMENT]              │
│ [RELATED PROJECT]                                                   │
├────────────────────────────────────────────────────────────────────┤
│ DETAIL 02 — WEB DESIGN — mirrored rhythm                          │
├────────────────────────────────────────────────────────────────────┤
│ DETAIL 03 — WEB DEVELOPMENT                                      │
├────────────────────────────────────────────────────────────────────┤
│ DETAIL 04 — UI/UX DESIGN                                         │
├────────────────────────────────────────────────────────────────────┤
│ PROCESS                                                            │
│ Discover → Define → Design → Deliver                              │
│ [CLIENT ROLE / DECISION GATES / OUTPUTS]                           │
├────────────────────────────────────────────────────────────────────┤
│ FAQ                                                                │
│ [QUESTION + VISIBLE SUMMARY / EXPANDABLE DETAIL]                  │
│ [QUESTION + VISIBLE SUMMARY / EXPANDABLE DETAIL]                  │
│ [QUESTION + VISIBLE SUMMARY / EXPANDABLE DETAIL]                  │
├────────────────────────────────────────────────────────────────────┤
│ CTA: [Tell us what needs to change.] [START A PROJECT]             │
├────────────────────────────────────────────────────────────────────┤
│ FOOTER                                                             │
└────────────────────────────────────────────────────────────────────┘
```

## 4.4 Services Overview

- Four numbered entries act as both summary and chapter navigation.
- Each entry names a client outcome rather than a list of tools.
- The overview does not use icon cards.
- Selecting an entry moves to its detailed chapter and updates focus appropriately.

## 4.5 Detailed Service Section template

Each service chapter includes:

1. Service name and number.
2. Problem/moment the service addresses.
3. Desired client outcome.
4. Representative scope and deliverables.
5. How it connects with other NAVARICK disciplines.
6. Appropriate engagement shape.
7. One relevant project as evidence.
8. Contextual Start a project link.

Core service information remains visible. Optional deliverable detail may expand only when it would otherwise overwhelm the narrative.

## 4.6 Process

- Reuses the four-stage Discover/Define/Design/Deliver logic.
- Adds client role and decision gates that the homepage omits.
- Does not promise a fixed timeline before project scope is known.
- Makes revision/approval responsibilities legible without procurement-heavy language.

## 4.7 FAQ

Recommended questions:

- What kind of organisations are the right fit?
- Can NAVARICK handle strategy, design, and development together?
- Can we engage NAVARICK for one discipline?
- What does a typical engagement require from our team?
- How are timing and investment determined?
- What happens after launch?

### FAQ behaviour

- Questions use real buttons and announced expanded state.
- One or multiple answers may remain open; choose based on content length.
- First sentence of each answer should resolve the question without requiring a long read.
- FAQ is not used to hide core service information.

## 4.8 Services responsive structure

### Laptop

- Overview stays four columns only when outcome copy remains readable; otherwise use two-by-two.
- Detail chapters use 7/5 composition with artefact beside copy.

### Tablet

- Overview becomes two-by-two or vertical index.
- Detail chapters become text → artefact → scope → evidence.
- Process becomes a vertical sequence.

### Mobile

- Hero CTA follows the explanation.
- Four-service overview is a vertical linked index.
- Detailed chapters expose core information without nested accordions.
- Related project appears after scope, not beside it.
- FAQ targets are at least 44 px and answers reflow without horizontal movement.

---

# 5. About Page Wireframe

## 5.1 Page objective

Humanise NAVARICK, establish the studio's point of view and working model, and help prospective clients decide whether the relationship feels right.

## 5.2 About flow

```text
[HEADER / ABOUT CURRENT]
      ↓
STUDIO STORY / ABOUT HERO
      ↓
PHILOSOPHY
      ↓
PROCESS / WORKING RELATIONSHIP
      ↓
CAPABILITIES / PRACTICE MODEL
      ↓
OPTIONAL TEAM OR COLLABORATOR PROOF
      ↓
WORK / CONTACT CTA
[FOOTER]
```

## 5.3 Desktop wireframe

```text
┌────────────────────────────────────────────────────────────────────┐
│ HEADER — About current                                            │
├────────────────────────────────────────────────────────────────────┤
│ STUDIO STORY / HERO                                               │
│ [H1: A studio built around one coherent creative standard.]       │
│ [CONCISE ORIGIN / PURPOSE]                [STUDIO/PORTRAIT MEDIA]  │
├────────────────────────────────────────────────────────────────────┤
│ PHILOSOPHY                                                        │
│ [LARGE POINT-OF-VIEW STATEMENT]                                   │
│ [WHAT NAVARICK BELIEVES]        [WHAT THAT MEANS FOR CLIENTS]      │
├────────────────────────────────────────────────────────────────────┤
│ PROCESS / WORKING RELATIONSHIP                                    │
│ [HOW WE LISTEN] [HOW WE DECIDE] [HOW WE MAKE] [HOW WE DELIVER]   │
│ [CLIENT ROLE / COMMUNICATION / COLLABORATION MODEL]                │
├────────────────────────────────────────────────────────────────────┤
│ CAPABILITIES                                                      │
│ Brand Identity / Web Design / Development / UI/UX                  │
│ [WHY THEY LIVE TOGETHER]                                          │
├────────────────────────────────────────────────────────────────────┤
│ [TEAM OR COLLABORATOR MODEL — ONLY WHEN CONFIRMED]                │
│ [VERIFIED RECOGNITION — OPTIONAL]                                 │
├────────────────────────────────────────────────────────────────────┤
│ CTA                                                               │
│ [SEE THE WORK]                         [START A PROJECT]            │
├────────────────────────────────────────────────────────────────────┤
│ FOOTER                                                            │
└────────────────────────────────────────────────────────────────────┘
```

## 5.4 Studio Story

- Explains why NAVARICK exists and the kind of work it chooses to pursue.
- Names the actual studio model: founder-led, fixed team, or curated collaborators.
- Uses an authored portrait or working detail, not stock office photography.
- Keeps biography secondary to the value and point of view.

## 5.5 Philosophy

- Expands “One idea. One direction. Every expression.”
- Defines 3–5 principles with meaningful explanation.
- Avoids a generic values-card grid.
- Connects each principle to a client consequence.

## 5.6 Process / working relationship

- Explains communication, collaboration, decision-making, and client involvement.
- Complements rather than duplicates the Services process.
- Clarifies that NAVARICK leads creatively while working closely with client expertise.
- Does not invent fixed ceremonies or team size.

## 5.7 Capabilities

- Shows the four disciplines as one practice.
- Provides concise routes to Services and relevant projects.
- Avoids another full service-page duplicate.

## 5.8 About responsive structure

### Laptop

- Story keeps two-column relationship if media and text remain balanced.
- Philosophy statement spans the grid; supporting implications use two columns.

### Tablet

- Story becomes statement → media → origin/purpose.
- Principles form a vertical editorial sequence.
- Working relationship uses two-by-two or vertical structure.

### Mobile

- Hero copy precedes media.
- Studio model is stated plainly near the story.
- Principles and process appear in normal reading order with no hover interaction.
- Team/collaborator and recognition modules are omitted if evidence is weak.
- See the work precedes Start a project when the visitor still needs proof.

---

# 6. Contact Page Wireframe

## 6.1 Page objective

Make it easy for a qualified prospect to begin a conversation while gathering enough context for a useful response. The page should feel like an invitation, not a procurement portal.

## 6.2 Contact flow

```text
[HEADER / CONTACT CURRENT]
      ↓
CONTACT HERO / EXPECTATION
      ↓
PROJECT TYPE ORIENTATION
      ↓
INQUIRY FORM
      ↓
WHAT HAPPENS NEXT
      ↓
ALTERNATIVE CONTACT METHODS
[FOOTER]
```

## 6.3 Desktop wireframe

```text
┌────────────────────────────────────────────────────────────────────┐
│ HEADER — Contact current                                          │
├────────────────────────────────────────────────────────────────────┤
│ CONTACT HERO                                                      │
│ [H1: Tell us what you are building or ready to change.]           │
│ [WHO SHOULD ENQUIRE / RESPONSE EXPECTATION]                       │
├────────────────────────────────────────────────────────────────────┤
│ PROJECT TYPES                                                     │
│ Brand Identity / Web Design / Development / UI/UX / Not sure yet  │
├────────────────────────────────────────────────────────────────────┤
│ INQUIRY FORM                         │ EXPECTATIONS / CONTACT      │
│ [NAME] [EMAIL]                       │ [WHAT TO SHARE]             │
│ [COMPANY]                            │ [HOW NAVARICK RESPONDS]     │
│ [PROJECT TYPE]                       │ [DIRECT EMAIL]              │
│ [WHAT ARE YOU HOPING TO CHANGE?]    │ [LOCATION/TIME ZONE IF USEFUL]│
│ [DESIRED TIMING]                     │                            │
│ [INDICATIVE INVESTMENT OPTIONAL]     │                            │
│ [PRIVACY ACKNOWLEDGEMENT]            │                            │
│ [SUBMIT ENQUIRY]                     │                            │
│ [FORM STATUS / ERROR SUMMARY]        │                            │
├────────────────────────────────────────────────────────────────────┤
│ WHAT HAPPENS NEXT                                                  │
│ 01 Review → 02 Reply → 03 Intro conversation → 04 Proposal/fit    │
├────────────────────────────────────────────────────────────────────┤
│ ALTERNATIVES: [EMAIL] [RELEVANT SOCIAL]                            │
├────────────────────────────────────────────────────────────────────┤
│ FOOTER                                                             │
└────────────────────────────────────────────────────────────────────┘
```

## 6.4 Contact Hero

- Sets the invitation and explains the right moment to contact NAVARICK.
- States a real response expectation only after it is operationally confirmed.
- Does not use invented scarcity or “limited slots” language.

## 6.5 Project Types

- Brand Identity Design.
- Web Design.
- Web Development.
- UI/UX Design.
- Integrated engagement.
- Not sure yet.

Project type may be selected in the form rather than duplicated as decorative cards. If shown before the form, it acts as orientation and moves focus to the corresponding option.

## 6.6 Inquiry Form

### Required fields

1. Name.
2. Email.
3. Company/organisation.
4. Project type.
5. “What are you hoping to change?”

### Optional/conditional fields

- Desired timing.
- Indicative investment, including Not sure yet.
- Existing website.
- Referral source, only if operationally useful.

### Form behaviour

- One page; no hidden multi-step progress unless evidence later proves the need.
- Labels remain visible after entry.
- Client and server validation use the same plain-language rules.
- Errors appear beside fields and in an announced summary.
- First invalid field receives focus after failed submission.
- Submit retains entered content during recoverable failure.
- Success state confirms receipt, response expectation, and an alternative email.
- Loading state does not change the button width or invite duplicate submissions.
- Privacy explanation says what data is used for.

## 6.7 Expectations

Explain:

- what information helps NAVARICK respond well;
- how fit is assessed;
- when the sender should expect a reply;
- what the first conversation covers;
- that submitting does not create a contractual commitment.

## 6.8 Contact methods

- Primary alternative: direct email.
- Relevant professional social link only.
- No phone number, calendar booking, or chat widget unless NAVARICK actually supports that channel.
- Email remains visible as text and a link.

## 6.9 Contact responsive structure

### Laptop

- Form and expectations may remain in a 7/5 relationship.
- Long textarea receives sufficient width and height.

### Tablet

- Hero → project type orientation → form → expectations.
- Two short fields may share a row; long fields remain full width.
- Expectations move beneath the form if the side column becomes cramped.

### Mobile

```text
[HEADER]
[CONTACT H1]
[WHO / RESPONSE EXPECTATION]
[PROJECT TYPE]
[NAME]
[EMAIL]
[COMPANY]
[WHAT ARE YOU HOPING TO CHANGE?]
[TIMING]
[INVESTMENT OPTIONAL]
[PRIVACY]
[SUBMIT]
[STATUS]
[WHAT HAPPENS NEXT]
[DIRECT EMAIL]
[FOOTER]
```

- One field per row.
- Use input types/modes appropriate to content.
- Keep submit and error summary visible in normal flow.
- Do not open a custom full-screen select when a native control would be more usable.

---

# 7. Responsive Adaptation

## 7.1 Cross-page breakpoint rules

| Viewport | Grid | Navigation | Content model | Interaction model |
|---|---|---|---|---|
| Wide desktop, 1440 px+ | 12 columns | Full persistent header | Asymmetric editorial composition | Fine-pointer enhancements permitted |
| Laptop, 1024–1439 px | 12 columns | Full compact header | Reduced asymmetry; short-height aware | Sticky only when height permits |
| Tablet, 768–1023 px | 8 columns | Wordmark + Menu | Mostly sequential; occasional 2-column groups | Touch-first, no hover dependency |
| Mobile, 320–767 px | 4 columns | Wordmark + Menu | Curated single-column reading order | Static/tap, no drag dependency |

## 7.2 Page-by-page adaptation matrix

| Page | Desktop | Laptop | Tablet | Mobile |
|---|---|---|---|---|
| Home | Full cinematic hero, two-column featured stories, variable gallery | Preserve hierarchy; reduce overlap/sticky duration | Linear featured stories; 2-column only where copy remains comfortable | One-column exhibition rhythm; posters and visible metadata |
| Work | Featured project plus asymmetric editorial sequence | Moderate 7/5 relationships | One project per row or intentional portrait pair | Single curated project sequence; no masonry |
| Case Study | Wide media, narrative pairs, optional local index/sticky evidence | Short-height aware; fewer sticky moments | Sequential narrative/media, compact/omitted index | One reading flow, large legible artefacts, static comparisons |
| Services | Overview plus alternating detail chapters | 7/5 details, overview 4 or 2×2 | Vertical/2×2 overview, sequential detail chapters | Linked vertical index and complete chapter flow |
| About | Story/media pair, wide philosophy, multi-column working model | Preserve pair where balanced | Story becomes sequential; principles vertical | Copy first, authored media, simple proof/CTA order |
| Contact | Form with expectations side column | Keep 7/5 if comfortable | Form precedes expectations when needed | One field per row; native controls; status in flow |

## 7.3 Responsive content rules

- Content is not removed solely to make a desktop composition fit. It may be shortened only when the same meaning is preserved.
- Essential metadata never exists only in overlays.
- Full-bleed desktop media becomes grid-contained on small screens when edge cropping would lose meaning.
- Large media collages become fewer, larger frames.
- Reading order in the DOM matches the mobile visual order.
- Buttons wrap or stack without truncation.
- Fixed and sticky elements account for safe areas and do not obscure focus.

## 7.4 Orientation and short-height behaviour

- Hero content remains usable in landscape mobile and short laptop viewports.
- Full-viewport sections become minimum-height sections when content exceeds available height.
- Sticky/pinned behaviour disables when minimum content visibility cannot be maintained.
- Mobile menu content scrolls internally only when necessary and preserves access to close control.

## 7.5 Responsive verification targets

- 320 × 568 px.
- 375 × 667 px.
- 768 × 1024 px.
- 1024 × 768 px.
- 1280 × 720 px short laptop.
- 1440 × 900 px.
- 1920 px wide-screen sanity check.
- Browser zoom at 200%.

---

# 8. Reduced-Motion Version

Reduced motion changes presentation, not content, hierarchy, or access.

## 8.1 Global behaviour

- Render all text/media in final position.
- Remove Lenis interpolation, parallax, pinning, cursor tracking, blur, magnetic movement, and long transitions.
- Permit no animation or an opacity transition under 160 ms.
- Use normal browser scroll and route navigation.
- Replace decorative autoplay with approved posters.
- Never leave content in hidden initial states when scripts fail.

## 8.2 Interaction degradation matrix

| Standard interaction | Reduced-motion version |
|---|---|
| Hero word/line choreography | Full headline visible at first paint |
| Hero 3D/light response | Approved static poster |
| Hero video light pass | Poster; explicit play only if informative |
| Smooth scrolling | Native scrolling |
| Clip/mask media reveal | Final image visible or opacity ≤160 ms |
| Sticky Featured Work | Normal document flow |
| Project crop/scale hover | Border/rule/text change only |
| Capability media crossfade | Static first/most relevant media or no media stage |
| Parallax supporting image | Fixed image |
| Process progress animation | Static ordered rule and stage markers |
| Count/metric animation | Final verified value visible immediately |
| Magnetic CTA | Static button with focus/hover colour/rule state |
| Page curtain/shared-element transition | Immediate route change or short fade |
| Before/after drag | Two labelled static frames or explicit non-motion toggle |
| UI flow autoplay | Static key frames with captions and explicit play option |
| Mobile menu curtain | Immediate open or short opacity change |

## 8.3 Page-specific reduced-motion states

### Home

- Final hero composition and poster from first paint.
- Project previews display their strongest stable frames.
- Featured stories, Capabilities, and Process use normal flow.

### Work Index

- Project sequence remains identical.
- Filtering updates without animated reordering; focus and result announcement persist.

### Case Study

- All chapters remain in order.
- Video/identity motion uses posters with controls.
- No sticky media or scroll-driven sequence.

### Services

- Service overview links jump/focus to chapters using native behaviour.
- FAQ expands without large movement; focus remains stable.

### About

- Portrait and working imagery remain static.
- Philosophy and principles appear complete.

### Contact

- Form behaviour is unchanged except decorative transitions are removed.
- Error focus/announcements remain immediate.

## 8.4 Reduced-motion approval requirement

Every high-fidelity page must include an explicit reduced-motion frame or annotation. “Engineering will disable animation” is not sufficient design documentation.

---

# 9. User Journey Map

## 9.1 Primary journey

```text
HOMEPAGE
  Intrigue + category clarity
        ↓
  Featured Work establishes desire
        ↓
WORK INDEX
  Range + relevance + honest project metadata
        ↓
FLAGSHIP CASE STUDY
  Challenge → insight → strategy → system → outcome
        ↓
CONTACT
  Fit + expectations + low-friction enquiry
        ↓
QUALIFIED CONVERSATION
```

## 9.2 Journey stages

| Stage | Visitor question | Trust built by | Primary action | Failure risk |
|---|---|---|---|---|
| Homepage Hero | What is NAVARICK? | Clear positioning and composed first impression | View selected work | Atmosphere obscures offer |
| Featured Work | Is the work exceptional? | Large project evidence and transformation | Open case study | Work looks like decorative mockups |
| Philosophy/Capabilities | Do they think and can they solve my problem? | Point of view plus four clear disciplines | Services or continue | Generic agency claims |
| Work Index | Is there relevant range? | Curated projects, honest facts/status | Select project | Uniform grid prevents comparison |
| Case Study Challenge/Discovery | Do they understand real problems? | Specific context and credible learning | Continue reading | Inflated or vague challenge |
| Case Study Strategy/System | Can they make coherent decisions? | One defining idea expressed across artefacts | Continue to result | Process theatre without evidence |
| Results/Testimonial | Did the work matter? | Verified outcome and external voice | Start a project | Unsupported metric or anonymous praise |
| Contact | Is it easy and appropriate to begin? | Clear expectations, human language, direct email | Submit enquiry | Long/procurement-style form |

## 9.3 Trust ladder

1. **Taste:** First viewport shows restraint and judgement.
2. **Clarity:** Visitor understands the four-disciplined studio offer.
3. **Craft:** Featured project media proves execution quality.
4. **Thinking:** Philosophy, challenge, discovery, and strategy reveal reasoning.
5. **Coherence:** Identity, website, and UI/UX chapters show one idea across systems.
6. **Impact:** Results and testimony connect work to change.
7. **Reliability:** Process and contact expectations reduce delivery risk.
8. **Human confidence:** About and contact language show how the relationship will feel.

## 9.4 Conversion points

### Primary conversion

Case Study result/testimonial → Start a project → Contact form submission.

This is the most informed and therefore highest-quality path.

### Secondary conversions

- Hero → Start a project for high-intent referrals.
- Services → Contact for capability-led prospects.
- About → Contact for relationship-led prospects.
- Homepage final CTA → Contact for visitors convinced without opening a case study.
- Direct email for visitors who prefer a personal channel.

## 9.5 Recovery paths

- If no Work filter result: reset to All or contact NAVARICK.
- If a case study is irrelevant: Next Project and Work index remain available.
- If form submission fails: preserve data, explain recovery, show direct email.
- If hero media fails: poster and complete positioning remain.
- If motion is disabled: no step in the conversion journey changes.

## 9.6 Measurement points

Measure only events that improve decisions:

- View selected work.
- Open project from Home versus Work.
- Case-study chapter depth at Strategy and Results.
- Select service.
- Start enquiry by source page/project.
- Submit enquiry.
- Enquiry error.
- Direct email click.
- External live-project visit.

Do not interpret scroll depth alone as trust or success.

---

# 10. Approval Checklist

High-fidelity UI design begins only when the structural system is approved and the content/assets are credible enough to test real hierarchy.

## 10.1 Global architecture

- [ ] The responsibilities of Home, Work, Case Study, Services, About, and Contact are approved.
- [ ] Global navigation routes and persistent-contact logic are approved.
- [ ] Footer utility content and legal routes are defined.
- [ ] Browser back/forward, filter state, and scroll restoration expectations are accepted.
- [ ] No page relies on generic card grids as its primary structure.

## 10.2 Homepage

- [ ] The eight-section homepage order is approved.
- [ ] Two flagship Featured Work projects are selected.
- [ ] Three to four Selected Works projects are selected or the count is deliberately reduced.
- [ ] Every homepage section has a clear purpose and onward flow.
- [ ] The hero remains understandable without animation or 3D.
- [ ] Homepage desktop, short-laptop, tablet, mobile, and reduced-motion structures are approved.

## 10.3 Work Index

- [ ] The featured project and project order are selected.
- [ ] The catalogue size and category distribution justify either filters or no filters.
- [ ] Filter labels, URL behaviour, result announcement, and no-result state are approved.
- [ ] Project status and concept/unreleased labels are defined.
- [ ] Editorial sequence is approved without masonry or equal-card dependency.

## 10.4 Flagship Case Study

- [ ] One real flagship project has enough material for the wireframe.
- [ ] Challenge, Discovery, Strategy, expression, Results, Testimonial, and Credits content is available or assigned.
- [ ] Irrelevant identity/web/UI chapters are intentionally omitted rather than fabricated.
- [ ] Before/after evidence is fair, equivalent, and approved.
- [ ] Result claims include source, baseline/timeframe where relevant, and client approval.
- [ ] Next-project and contact routes are approved.

## 10.5 Services

- [ ] The four disciplines remain the complete V1 service set.
- [ ] Each service has an approved problem, outcome, representative scope, and related project.
- [ ] Engagement model language does not imply fixed timelines or deliverables prematurely.
- [ ] FAQ questions reflect real sales concerns rather than filler.

## 10.6 About

- [ ] NAVARICK's studio model is confirmed: founder-led, fixed team, or curated collaborators.
- [ ] Origin/story, philosophy, and working-relationship claims are accurate.
- [ ] Portrait/studio imagery is available or commissioned.
- [ ] Recognition appears only when verified.

## 10.7 Contact

- [ ] Required and optional fields are approved.
- [ ] Project type, timing, and indicative investment language is approved.
- [ ] Public email and response expectation are confirmed.
- [ ] Privacy/data-use wording and consent requirements are known.
- [ ] Success, validation, server failure, and direct-email recovery states are defined.
- [ ] No unsupported booking/chat/phone channel is included.

## 10.8 Responsive

- [ ] Every page has a confirmed desktop, laptop, tablet, and mobile reading order.
- [ ] 1280 × 720 short-laptop behaviour is approved.
- [ ] No essential content depends on hover, drag, sticky positioning, or wide media.
- [ ] Mobile menus, filters, FAQs, forms, and comparisons have explicit interaction logic.
- [ ] 320 px reflow and 200% zoom are part of the design QA plan.

## 10.9 Reduced motion and accessibility

- [ ] Every major interaction has a documented reduced-motion equivalent.
- [ ] Static hierarchy remains complete without JavaScript animation.
- [ ] Focus order follows reading order on every page.
- [ ] Skip link, current-route state, menu focus management, and error announcements are accepted.
- [ ] Touch targets, headings, labels, captions, and alternative text requirements are included.

## 10.10 Content and assets

- [ ] Official wordmark variants are supplied.
- [ ] Hero animation/3D source and poster are supplied or commissioned.
- [ ] Font licensing is resolved.
- [ ] Project media is inventoried with rights, credits, ratios, and mobile crops.
- [ ] Real copy lengths replace structural placeholders before visual sign-off.
- [ ] Outcomes, testimonials, logos, and recognition are verified.

## 10.11 Final gate questions

Before high-fidelity UI design begins, stakeholders should answer yes:

1. Can a visitor understand each page's purpose from its first meaningful viewport?
2. Does the journey build trust in the order a premium client needs it?
3. Can every primary journey complete on mobile, by keyboard, and with reduced motion?
4. Does the portfolio prove thinking and impact rather than merely display attractive surfaces?
5. Are the wireframes specific enough to test real content without dictating decorative style?

---

# Open Decisions Before Visual UI Design

1. Confirm the official wordmark, heading font licence, and hero media format.
2. Select two homepage flagship projects and the broader Work order.
3. Choose the single case study used as the high-fidelity design prototype.
4. Confirm whether Work filtering is justified by the launch catalogue.
5. Verify all project outcomes, testimonials, credits, and confidentiality states.
6. Confirm the studio/team model for About.
7. Confirm Contact email, response expectation, form delivery, and investment-range policy.
8. Decide whether a local case-study chapter index is useful after real content is assembled.
9. Decide whether any sticky Featured Work sequence materially improves understanding.

---

# Recommended Next Phase

Proceed to **Content Assembly and Annotated High-Fidelity Design Exploration** only after this wireframe document and its open decisions are approved.

The next phase should begin with three representative screens:

1. Homepage desktop and mobile using real launch-project content.
2. Work Index desktop and mobile with the actual project count and filter decision.
3. One flagship Case Study desktop and mobile using real media, result evidence, and credits.

Services, About, and Contact high-fidelity design should follow after these screens establish the visual system in use. Motion prototypes should remain separate until the static hierarchy and responsive compositions are approved.
