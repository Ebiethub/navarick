# NAVARICK Homepage UX Blueprint

**Status:** UX definition / approval candidate
**Version:** 1.0
**Date:** 24 June 2026
**Scope:** Homepage experience only
**Authority:** Extends `NAVARICK-V1-PRD.md`; it does not replace it.

---

## Document purpose

This blueprint defines the complete NAVARICK homepage experience before visual design or frontend development. It establishes narrative order, hierarchy, interaction intent, responsive behaviour, draft copy, and motion boundaries. It deliberately does not define React components, Tailwind layouts, or final art direction files.

Where this document leaves a decision open, the PRD remains authoritative. Where implementation constraints conflict with a desired effect, content clarity, accessibility, and performance take priority.

### Experience thesis

The homepage should behave like a controlled exhibition:

1. **Create intrigue** through one cinematic material moment.
2. **Establish meaning** before spectacle becomes ambiguous.
3. **Prove the standard** through a small number of consequential projects.
4. **Explain the practice** with editorial clarity.
5. **Build confidence** through process and verifiable outcomes.
6. **Invite contact** without pressure or invented urgency.

The signature idea remains **Form, revealed**: NAVARICK turns unclear ambition into distinctive form. Light moving across obsidian, bronze, and chrome is the metaphor. The work—not the interface—provides the lasting evidence.

---

# 1. Homepage Objective

## 1.1 Strategic purpose

The homepage is NAVARICK's primary positioning and qualification experience. It must attract design-conscious founders, executives, marketing leaders, and product leaders while helping poor-fit prospects self-select out. Its purpose is not to explain every deliverable or maximise raw lead volume. Its purpose is to create conviction.

The homepage must accomplish five jobs:

1. **Identify:** Make NAVARICK recognisable as a premium creative studio specialising in brand identity, web design, web development, and UI/UX design.
2. **Differentiate:** Demonstrate a singular point of view and an unusually coherent standard across brand and digital.
3. **Prove:** Show finished work, transformation, decisions, and outcomes—not only atmospheric visuals.
4. **Reassure:** Make the studio's scope, process, and professional discipline legible.
5. **Convert:** Guide qualified visitors toward a case study and ultimately a project conversation.

## 1.2 Primary visitor questions

The page should answer these in sequence:

- What is NAVARICK?
- Is the work genuinely exceptional?
- Can the studio solve the kind of problem I have?
- Does it think strategically or only make attractive surfaces?
- Can I trust the process and execution?
- What changed for previous clients?
- How do I begin?

## 1.3 Primary conversion path

**Hero → Featured case study → Studio philosophy/capability → Proof → Contact**

The principal behavioural objective is not an immediate form submission. It is a meaningful case-study view followed by a qualified enquiry.

## 1.4 Secondary conversion paths

- Hero → Start a project.
- Hero → Capabilities → Services.
- Featured Work → full case study → next project/contact.
- Studio Philosophy → About.
- Selected Works → Work index.
- Final CTA → Contact or direct email.

## 1.5 Success signals

- The studio's category and four disciplines are understood within the first viewport or first short scroll.
- At least one flagship project is visible within the first two meaningful content sections.
- Visitors can distinguish Featured Work from the broader Selected Works gallery.
- Enquiry intent grows after exposure to project proof and process—not through repeated CTA pressure.
- The experience remains complete when animation, smooth scrolling, video, or WebGL is unavailable.

---

# 2. Homepage Emotional Journey

The emotional arc should move from mystery to clarity. Luxury is expressed through pacing, precision, and confidence—not obscurity.

| Stage | Homepage moment | Intended feeling | Visitor thought | Design response |
|---|---|---|---|---|
| 1. Arrival | Cinematic Hero | Intrigue | “This feels considered.” | Obsidian stillness, controlled light, one focal object |
| 2. Recognition | Hero copy resolves | Orientation | “I understand what they do.” | Clear category language and a concise promise |
| 3. Desire | Featured Work | Aspiration | “I want this level of distinction.” | Large project worlds, art-directed at near-cinematic scale |
| 4. Understanding | Studio Philosophy | Intellectual confidence | “There is a point of view behind the work.” | Editorial statement, disciplined supporting copy |
| 5. Relevance | Capabilities | Self-recognition | “They can handle my kind of project.” | Four clear disciplines framed through outcomes |
| 6. Discovery | Selected Works | Curiosity and breadth | “The standard holds across different contexts.” | Variable gallery rhythm, fast scanning, honest metadata |
| 7. Reassurance | Process | Safety | “This will be thoughtful and well run.” | Four decisive stages and visible decision gates |
| 8. Trust | Results / Proof | Credibility | “The work made a meaningful difference.” | Verifiable outcomes, client voice, restrained presentation |
| 9. Readiness | Final Contact CTA | Possibility | “I know what to do next.” | Calm invitation, direct route, clear expectation |

## Emotional pacing rules

- The opening may be mysterious; the offer must not remain mysterious.
- Every high-stimulus visual passage is followed by a quieter reading passage.
- The page should alternate between **immersion** and **interpretation**.
- Confidence should rise progressively. Do not lead with unearned claims or awards.
- The final contact moment should feel like the natural conclusion of the story, not a sales interruption.

---

# 3. Full Homepage Section Architecture

## Page rhythm overview

```text
01  Cinematic Hero                 Intrigue + orientation
02  Featured Work                  Deep proof through 2 flagship transformations
03  Studio Philosophy              Point of view + integrated practice
04  Capabilities                   Scope + self-qualification
05  Selected Works                 Breadth + visual discovery
06  Process                        Risk reduction + professional clarity
07  Results / Proof / Impact       External validation + outcomes
08  Final Contact CTA              Invitation + conversion
```

The header and footer frame this architecture but are not counted as homepage narrative sections. Navigation remains restrained and persistent. The footer provides utility after the final CTA without introducing another major message.

---

## 3.1 Cinematic Hero — Form, revealed

### Purpose

Establish NAVARICK's identity, discipline, and atmosphere in one decisive viewport. The hero creates memory through the material object while the copy creates immediate comprehension.

### Layout structure

- Full viewport: `100svh`/`100dvh`, never shorter than the usable screen.
- The NAVARICK material object occupies the visual centre and may cross the central grid.
- Wordmark/navigation sits at the top with sufficient edge clearance.
- Eyebrow and headline occupy the upper-left or centre-left negative space.
- Supporting copy anchors the lower-left; actions anchor lower-right or follow the copy when space is constrained.
- The scroll cue sits on the lower visual axis and never competes with the CTAs.
- No hero card, feature badges, logo cloud, statistics, or decorative icon group.

### Content hierarchy

1. NAVARICK identity/wordmark.
2. “Independent creative studio” category label.
3. “We give ambitious ideas distinctive form.”
4. One-sentence brand and digital positioning.
5. Primary: View selected work.
6. Secondary: Start a project.
7. Optional availability note only when operationally accurate.

### Visual direction

- Obsidian black is spatial and nearly lightless at first.
- A single chrome-glass object or wordmark form catches brown-gold edge light and a restrained champagne specular highlight.
- The object should feel physical, weighty, and slowly discovered—not iridescent, liquid, or futuristic for its own sake.
- Media remains crisp. Avoid a blanket dark overlay; place copy in authored negative space.
- Gold occupies no more than a small portion of the viewport and behaves as reflected light.

### Motion and interaction

- One signature mechanic: bounded material/light reveal.
- The opening choreography runs once and settles.
- On fine pointers, cursor movement subtly affects the key light or reveal mask after the entrance completes.
- Movement is damped; the object does not chase the cursor or rotate freely.
- CTA hover is tactile but quiet: fill inversion, 4–6 px arrow travel, optional magnetic movement capped at 8 px.
- Scroll remains native and available throughout.

### Conversion goal

Move a visitor into Featured Work while keeping direct project contact one interaction away.

### Desktop behaviour

- Cinematic composition with ample negative space and the full material interaction.
- Copy and object may overlap optically but never reduce readability.
- Cursor response activates only within the media field, not globally.
- Navigation is visible from the first frame or appears no later than the headline.

### Mobile behaviour

- Recompose rather than scale: wordmark top, category/headline upper field, object centred or slightly above centre, support and CTAs in the safe lower area.
- Use a curated video/poster or simplified scene; no pointer-dependent promise.
- One slow autonomous light pass may occur, then the visual becomes still.
- CTA row becomes a stable vertical or wrapping group with 44 px minimum targets.
- No essential text sits over the brightest or most active region of the object.

---

## 3.2 Featured Work / Signature Case Studies — Evidence at scale

### Purpose

Turn aesthetic interest into evidence. This section presents two flagship projects as transformations, giving each enough space to communicate context, idea, system, and result.

### Layout structure

- Intro index: “Selected transformations” plus a brief curatorial sentence.
- Two project chapters rather than a repeated card grid.
- Each chapter uses one near-full-viewport hero preview, followed by a compact editorial evidence band.
- Alternate composition: Project A may favour left-aligned copy/right-weighted media; Project B reverses the rhythm.
- Each project includes one transformation moment: before/after, identity system progression, or digital journey comparison.
- Chapters remain independently linkable to full case studies.

### Content hierarchy

For each flagship project:

1. Project title and client.
2. Transformation statement—not a generic project category.
3. Disciplines, sector, year.
4. Dominant preview media.
5. One strategic idea or defining decision.
6. One verified outcome or honest qualitative result.
7. View case study.

### Visual direction

- Project work introduces colour into the dark NAVARICK environment without being recoloured.
- Media alternates between finished brand worlds, responsive website behaviour, identity details, and contextual application.
- The NAVARICK interface recedes. Project typography and imagery are allowed to own the frame.
- Use straight editorial frames and full bleed. Avoid floating rounded browser cards and repeated laptop mockups.

### Motion and interaction

- Media reveals through one consistent curtain/clip language with a 1.03 → 1.00 settling scale.
- Metadata appears after the media is legible.
- One chapter may use a bounded sticky progression if it clarifies transformation; the second should remain simpler.
- Hover on the linked media changes crop by no more than 2% and reveals a precise text/arrow response.
- Before/after interaction is used only where equivalent source material exists; keyboard and static alternatives are mandatory.

### Conversion goal

Open a full case study and establish NAVARICK as a strategic as well as visual partner.

### Desktop behaviour

- Chapters span 1.2–1.8 viewports depending on available evidence.
- One media stage may remain sticky while 2–3 short evidence beats advance beside it.
- Desktop hover enriches discovery but all core metadata is visible without hover.

### Mobile behaviour

- Chapters become linear: title → preview → transformation/decision → result → link.
- Sticky sequences collapse to authored static frames.
- Before and after appear as two labelled frames or a tap toggle, not a tiny drag handle.
- Project titles and result claims never overlay complex media.

---

## 3.3 Studio Philosophy — One practice, one standard

### Purpose

Articulate the studio's point of view and explain why integrated brand and digital direction produces more coherent work.

### Layout structure

- Quiet tonal shift from the project media into an obsidian or charcoal reading field.
- Oversized statement spans approximately eight desktop columns.
- A compact explanatory paragraph and studio link occupy the remaining columns or follow beneath.
- A single serif phrase may provide editorial contrast.
- Optional tactile studio detail—material, sketch, type specimen, or working crop—appears as supporting evidence, not stock lifestyle imagery.

### Content hierarchy

1. Section label: Philosophy.
2. Core statement: “One idea. One direction. Every expression.”
3. Explanation of the integrated practice.
4. Link: Our approach.

### Visual direction

- This is the page's principal moment of stillness.
- Typography carries the section; decorative material is minimal.
- Thin champagne or chrome rule may mark the transition.
- No mission/vision cards, values grid, icon list, or portrait carousel.

### Motion and interaction

- Statement reveals line by line with low vertical travel.
- The key serif phrase may emerge through a subtle weight/opacity shift, not handwritten animation.
- Supporting image, if approved, has no more than 3% parallax.
- Link uses a measured rule draw.

### Conversion goal

Build intellectual confidence and route visitors who care about partnership and worldview to About.

### Desktop behaviour

- Generous vertical breathing room, around one viewport in perceived duration.
- Statement is allowed to break across 2–4 lines with intentional asymmetry.
- Secondary copy maintains a 45–65 character measure.

### Mobile behaviour

- Preserve the statement's scale and line rhythm; do not reduce it to ordinary body copy.
- Remove non-essential parallax.
- Supporting copy follows immediately beneath the statement.
- Any image becomes full-width or a deliberate inset, never a cramped side column.

---

## 3.4 Capabilities — What we make

### Purpose

Make NAVARICK's offer concrete and allow visitors to recognise the right engagement without presenting the studio as a menu of commodities.

### Layout structure

- Four numbered editorial rows separated by precise rules.
- Rows: Brand Identity Design, Web Design, Web Development, UI/UX Design.
- Each row includes a service name, one outcome-led sentence, and 3–5 representative outputs.
- On wide screens, one shared visual stage may change with the active row.
- The service information itself remains visible and does not depend on accordion expansion.

### Content hierarchy

1. Section label and concise proposition.
2. Number and service title.
3. Outcome statement.
4. Representative scope/deliverables.
5. Explore services.

### Visual direction

- Large type, horizontal rules, and tonal shifts—not bordered cards.
- The active row uses a warm material accent sparingly.
- Supporting imagery should show relevant artefacts: identity system, responsive page, code/motion detail, interface flow.
- Do not use generic service icons.

### Motion and interaction

- On desktop, hover/focus activates a row and crossfades the shared visual stage over 350–500 ms.
- Rules draw once as the section enters.
- Service title may translate 4–8 px; layout geometry remains stable.
- Keyboard focus produces the same information state as hover.

### Conversion goal

Move self-qualified visitors to Services or reinforce fit before they continue to broader work.

### Desktop behaviour

- Rows use the full grid and display outcome plus scope without expansion.
- Visual stage is optional; if project assets are weak, typography alone is preferable.
- Pointer interaction is additive, never required.

### Mobile behaviour

- Single vertical index with all essential copy visible.
- Remove active-row media swapping unless it remains clear and lightweight.
- Limit deliverable lists to the most useful 3–4 items.
- Entire service titles may link, with explicit focus and press states.

---

## 3.5 Portfolio Gallery / Selected Works — A wider body of work

### Purpose

Demonstrate range after the flagship stories have established depth. The gallery should reward exploration without flattening every project into identical cards.

### Layout structure

- 3–4 additional projects, bringing the homepage total to approximately 5–6.
- Variable editorial sequence: one panoramic frame, one portrait pairing, one compact artefact strip, and one optional motion preview.
- Each project has a title, disciplines, year, and one-line relevance statement.
- A closing “View all work” route leads to the Work index.
- Filtering belongs on the Work page only when the catalogue is large enough; no homepage filters.

### Content hierarchy

1. Selected Works heading and count.
2. Project image/motion preview.
3. Title and client.
4. Disciplines/year.
5. One clear statement of the assignment or change.
6. View project or honest “Project overview” state.

### Visual direction

- Let the media determine the rhythm and aspect ratio.
- Mix direct artefact evidence with contextual mockups.
- Avoid masonry for its own sake, floating device piles, dark hover veils, and title-only thumbnails.
- Conceptual or unreleased work is labelled at the same hierarchy as year/discipline.

### Motion and interaction

- Previews reveal as they approach the reading zone, once by default.
- Motion previews play only on intent where practical and always provide posters.
- Hover reveals metadata adjacent to the media or within reserved space; it never covers the work.
- A subtle cursor label may appear on fine pointers, but it cannot be the only link cue.

### Conversion goal

Increase project discovery, demonstrate consistency across disciplines, and route visitors to the full Work experience.

### Desktop behaviour

- Use 12-column asymmetry and deliberate gaps; no more than two projects share a row.
- Wide project media can interrupt the grid once.
- Hover preview remains light enough to preserve scroll performance.

### Mobile behaviour

- Curated single-column order rather than reproducing desktop masonry.
- Metadata is always visible beneath the media.
- Autoplay video is avoided unless muted, short, compressed, and demonstrably useful.
- Do not use horizontal swipe galleries for essential projects.

---

## 3.6 Process — Clarity without bureaucracy

### Purpose

Reduce the risk of engaging a premium studio by showing that exploration is disciplined, decisions are visible, and delivery is considered.

### Layout structure

- Four chapters: Discover, Define, Design, Deliver.
- Each chapter includes intent, key activity, client decision point, and tangible output.
- One continuous bronze/champagne rule or progress marker connects the stages.
- Keep the entire explanation concise enough to scan without opening accordions.

### Content hierarchy

1. Section heading: A clear path to distinctive work.
2. Stage number and name.
3. One-sentence purpose.
4. A representative output or decision gate.
5. Link: How we work, if a fuller Services/About explanation exists.

### Visual direction

- Editorial timeline, not a four-card process grid.
- The connective rule is the only persistent graphic device.
- Typography and pacing communicate order; avoid cogs, arrows, icons, and “our proven framework” language.

### Motion and interaction

- On desktop, the active stage changes as the reader crosses each chapter.
- The connecting rule advances continuously or in four deliberate segments.
- Copy fades 12–16 px into place; no spinning numbers or horizontal scroll takeover.
- The sequence remains fully readable without pinning.

### Conversion goal

Increase confidence that NAVARICK can lead a consequential engagement from ambiguity to launch.

### Desktop behaviour

- Either a horizontal four-column reading field or one restrained sticky index beside vertically flowing stage copy.
- If sticky is used in Featured Work, Process should remain non-sticky to avoid repetition.
- All stages are discoverable within normal scroll.

### Mobile behaviour

- Vertical sequence with stage numbers aligned to one rule.
- No pinned viewport or horizontal progression.
- Decision point/output follows each stage directly.
- Progress is communicated structurally, not by animation alone.

---

## 3.7 Results / Proof / Impact — What changed

### Purpose

Substantiate the studio's promise with external voice and verifiable results. This section should leave the visitor with trust, not a wall of vanity metrics.

### Layout structure

- One principal testimonial or client statement.
- Up to three verified result facts tied to named projects.
- Optional restrained client index if every relationship is legitimate and approved.
- A short bridge from visual craft to business or user impact.
- If quantitative evidence is unavailable, use specific qualitative outcomes rather than fabricated percentages.

### Content hierarchy

1. Result statement or client quote.
2. Person, role, organisation.
3. 1–3 outcome facts with source/project context.
4. Optional project link.

### Visual direction

- Quote receives editorial scale and generous negative space.
- Metrics are typeset as evidence, not dashboard tiles.
- Use thin rules or column alignment; avoid stat cards, counters, logos in monochrome pills, and animated number theatrics.
- Project media may appear as a small supporting crop, not another dominant gallery.

### Motion and interaction

- Quote reveals by line or as a single block.
- Results fade once; numbers do not count up.
- If multiple testimonials are eventually used, controls are explicit and autoplay is forbidden.
- No infinite client-logo marquee unless the client list becomes substantial and its provenance is clear.

### Conversion goal

Resolve final credibility concerns immediately before the contact invitation.

### Desktop behaviour

- Quote spans 7–9 columns; attribution and outcomes occupy the remaining grid.
- Results remain visible together for comparison.

### Mobile behaviour

- Quote, attribution, and outcome facts stack in that order.
- Keep quotation length under approximately 45 words.
- Avoid carousels; use one strongest proof item for V1.

---

## 3.8 Final Contact CTA — Bring us the ambition

### Purpose

Convert accumulated desire and trust into a clear, low-pressure project conversation.

### Layout structure

- Near-full-viewport closing field.
- One large question or invitation.
- Primary action: Start a project.
- Secondary action: direct email.
- Short expectation statement: who should enquire and when NAVARICK responds.
- Footer begins only after the CTA has had sufficient space to land.

### Content hierarchy

1. Invitation headline.
2. One sentence describing the right moment to contact NAVARICK.
3. Start a project.
4. Email and response expectation.

### Visual direction

- Return to the hero's obsidian/bronze material world to close the narrative loop.
- Use a single controlled light pass or close crop of the NAVARICK object.
- Type remains the focal point; the material is supporting atmosphere.
- No giant gradient orb, confetti, urgency banner, or “Book a call” widget.

### Motion and interaction

- One ambient light pass occurs as the section enters, then settles.
- Primary CTA may have subtle magnetic response on fine pointers, capped at 8 px.
- Email/link states use fill inversion or a rule draw.
- Focus treatment is as intentional as hover.

### Conversion goal

Start a qualified enquiry or provide a direct email path.

### Desktop behaviour

- Headline occupies 8–10 columns; action group sits beneath or on the lower opposing edge.
- The footer remains visually separate and calmer.

### Mobile behaviour

- Headline remains large but wraps intentionally.
- Primary and secondary actions stack with full, stable hit areas.
- Background material is simplified so text contrast is never negotiated.
- Contact expectation appears before the footer, not hidden within it.

---

# 4. Hero Experience

## 4.1 Timing principle

The hero should feel immediate even when the cinematic asset is still preparing. Meaningful text must not wait behind a long preloader. The ideal entrance settles within approximately **2.2 seconds after critical media readiness**, while the page itself remains usable from first paint.

## 4.2 Second-by-second choreography

| Time | Experience | Visual state | Content state |
|---:|---|---|---|
| 0.00–0.15 s | Initial load | Solid `obsidian-950`; no white flash | Semantic hero copy exists in the document but may begin visually subdued |
| 0.15–0.45 s | Wordmark arrival | Wordmark resolves from low contrast or a restrained 6–10 px rise | Navigation becomes available; no interaction lock |
| 0.30–0.90 s | Material presence | Poster/video/3D object fades in with 1–2% zoom settlement; bronze edge light travels once | Category label becomes legible |
| 0.65–1.45 s | Headline reveal | Words reveal with 35–60 ms stagger and 4–6 px blur resolving to zero | Full promise is readable by roughly 1.45 s |
| 1.20–1.75 s | Supporting message | Copy rises 12–16 px and fades | Studio category and integrated offer are clear |
| 1.50–2.05 s | CTA reveal | Primary, secondary, and optional availability note enter as one group | Actions become visually prominent and were never functionally disabled |
| 1.85–2.20 s | Scroll cue | Quiet line/label resolves at lower axis | Visitor is invited downward without a looping bounce |
| After 2.20 s | Resting state | Scene is mostly still; subtle physical light remains | Cursor response may activate on capable fine-pointer devices |

## 4.3 Initial load and preloader rule

- Prefer immediate hero rendering with a poster over a blocking branded preloader.
- Use an opening frame only if critical media genuinely needs protection from a broken first frame.
- Cached visits skip the opening frame.
- Any opening frame has a hard maximum of 2.5 seconds and does not display a fake percentage.
- If media fails, the poster and complete copy remain composed.

## 4.4 Wordmark appearance

- The official wordmark—not improvised type—is required before final design approval.
- It may resolve through contrast, opacity, or a short vertical reveal.
- Do not construct the wordmark letter-by-letter unless the official identity system supports it.
- The wordmark remains stable once revealed; it is not a perpetual animated logo.

## 4.5 3D/material appearance

- The production choice is evidence-led: optimised video if the reference is rendered motion; React Three Fiber only if genuine real-time light response adds meaningful value.
- The object enters as mass, not as particles or a wireframe assembly.
- Bronze is reflected light; chrome/champagne defines edges.
- One canvas maximum. It is decorative to assistive technology and never contains required content.
- The final scene requires a still poster for low-power, touch, failed-WebGL, and reduced-motion states.

## 4.6 Headline and CTA reveal

- The headline is split by words or authored lines, not by individual characters.
- Stagger completes quickly enough that visitors do not wait to understand the proposition.
- CTA group enters after the headline, not one button at a time.
- CTAs use real links in the final implementation and remain keyboard reachable from first render.

## 4.7 Scroll cue

- Use a quiet “Scroll to explore” label, section index, or short line.
- One reveal is sufficient; no infinite bounce or pulsing mouse icon.
- Activating the cue should move to Featured Work while respecting reduced motion and focus expectations.

## 4.8 Mouse interaction

- Activate only for `(pointer: fine)` after the entrance completes.
- Raw pointer input is smoothed with approximately 0.08–0.12 interpolation.
- Constrain the light/mask to the object field and keep movement under a visually subtle range.
- Stop or reduce updates when the pointer leaves, the hero is offscreen, or the tab is hidden.
- The custom cursor, if any, remains decorative and does not replace native link cues.

## 4.9 Reduced-motion fallback

- Show the final wordmark, headline, support copy, CTAs, and a high-quality poster at first paint.
- Remove preloader choreography, cursor response, parallax, blur, smooth scrolling, and long transitions.
- Permit either no animation or a single opacity change under 160 ms.
- Preserve the same hierarchy and emotional quality; reduced motion must not feel like an error state.

---

# 5. Portfolio Experience

## 5.1 Portfolio model

The homepage portfolio has two distinct layers:

- **Featured Work:** two deep project chapters that show transformation and thinking.
- **Selected Works:** three to four shorter editorial previews that prove breadth.

This keeps the work central without turning the homepage into either a project archive or a repeated grid of interchangeable cards.

## 5.2 Project selection criteria

Choose homepage projects for the story they collectively tell, not merely visual similarity.

The set should demonstrate:

- At least one identity-led transformation.
- At least one web design/development engagement.
- At least one UI/UX problem with a meaningful journey or system.
- Range across sectors without appearing indiscriminate.
- A consistent NAVARICK standard across different visual languages.
- Honest availability of outcomes, credits, and client approval.

## 5.3 Large immersive previews

- Use one defining image or motion sequence per project as the entry point.
- The preview should express the project's central idea, not simply place a logo on a billboard.
- Pair full compositions with close details so visitors see both effect and craft.
- Maintain real aspect ratios and reserve space before media loads.
- Do not place all projects inside browser chrome, device mockups, or floating perspective scenes.

## 5.4 Editorial case-study preview

Each Featured Work chapter follows this compact narrative:

1. **Context:** What was changing?
2. **Tension:** What was unclear, inconsistent, or limiting?
3. **Idea:** What decision organised the work?
4. **Expression:** How did that idea become identity and/or digital experience?
5. **Impact:** What verifiably changed?

The homepage provides a strong excerpt. The full case study owns the complete process, system, applications, outcomes, and credits.

## 5.5 Before/after transformation

- Use equivalent crops, artefacts, tasks, or moments.
- Label both states and explain the design decision.
- For identity: compare recognition, coherence, hierarchy, or expression.
- For web/UI: compare navigation, task clarity, responsive behaviour, accessibility, or performance.
- Never deliberately weaken or distort the “before.”
- If comparison is not materially useful, use a sequenced system reveal instead.

## 5.6 Brand system reveals

A brand project should move beyond logo presentation:

- Strategic idea or design principle.
- Primary and responsive marks.
- Type and colour relationships.
- Composition behaviour.
- Voice or messaging sample where relevant.
- Motion principle.
- At least one real or credible application.

The system should feel generative: visitors should understand how a few rules create many coherent expressions.

## 5.7 Website mockups

- Present responsive behaviour, not a row of static device frames.
- Show one full page or defining interaction at useful scale.
- Pair interface context with direct, flat screenshots so details remain legible.
- Use browser/device framing only when it adds context.
- Motion clips require a poster and should be short, silent, compressed, and purpose-led.

## 5.8 UI screens

- Show a journey or system, not a collage of unrelated screens.
- Use callouts sparingly to explain a meaningful interaction or information decision.
- Include mobile and desktop only when both reveal distinct design thinking.
- Protect confidentiality and remove fabricated data before publication.

## 5.9 Results and impact

Preferred hierarchy:

1. Verified business/user metric with source and period.
2. Specific operational or perception change confirmed by the client.
3. Attributable client statement.
4. Honest qualitative outcome if measurement is unavailable.

Avoid unqualified claims such as “increased engagement,” vanity statistics without context, animated counters, or awards used as a substitute for outcomes.

## 5.10 Project interaction rules

- The project title and media form one clear link target.
- All essential context is visible without hover.
- Hover enriches, never unlocks, meaning.
- Concept and unreleased work is explicitly labelled.
- Media captions explain the artefact or decision; alt text describes meaningful visual content.
- Project colour is allowed to interrupt NAVARICK's palette; it should not be bronze-washed.

---

# 6. Motion Language

## 6.1 Motion character

NAVARICK motion is **weighted, optical, restrained, and editorial**. It should resemble a camera settling, material catching light, or a page being composed. It should never feel bouncy, game-like, or friction-heavy.

The hero material reveal is the only dominant signature interaction. Elsewhere, motion supports hierarchy and continuity.

## 6.2 Scroll animations

- Native scrolling is the baseline.
- Lenis, if later approved, provides subtle interpolation only on capable devices.
- Trigger reveals when content enters approximately 10–18% inside the viewport.
- Most reveals run once.
- Limit each viewport to one or two meaningful moving groups.
- Do not lock scroll, force section snapping, or make users wait for a timeline.
- Use at most one sticky storytelling passage in Featured Work; if used there, avoid another pinned homepage sequence.

## 6.3 Text reveals

- Display headings: line or word reveal; 35–60 ms word stagger.
- Section statements: clipped line reveal or blur from no more than 6 px.
- Body text: block-level fade with 12–16 px vertical travel.
- Labels/metadata: simple opacity transition.
- Do not animate body copy character-by-character.
- The semantic text remains present; visual split clones are hidden from assistive technology.

## 6.4 Image reveals

- Primary pattern: clip/mask reveal with media scale from 1.03 to 1.00.
- Secondary pattern: controlled crossfade for active-state media.
- Maintain reserved dimensions to prevent layout shift.
- Avoid alternating arbitrary slide directions.
- Project media becomes legible before metadata animation begins.

## 6.5 Page transitions

- Total duration: 700–1100 ms on capable desktop devices.
- Preferred language: obsidian curtain, shared project media where reliable, or controlled fade.
- Navigation remains operable; transitions cancel cleanly on rapid route changes.
- Back/forward restoration and deep links take precedence over spectacle.
- Reduced motion uses immediate navigation or opacity under 160 ms.

## 6.6 Hover states

- Text links: rule draw, warm colour shift, or 4–6 px arrow translation.
- Project previews: crop shift no greater than 2%; metadata appears in reserved space.
- Service rows: 4–8 px title shift and visual-stage crossfade.
- No layout-changing lift, 3D tilt on every image, or universal custom cursor.
- Hover and keyboard focus communicate equivalent intent.

## 6.7 Magnetic buttons

- Reserved for the hero or final primary CTA; never every link.
- Fine-pointer devices only.
- Translation capped at 6–8 px with a padded activation region.
- The button returns more slowly than it approaches.
- Focus, touch, and reduced-motion states remain static and polished.

## 6.8 Parallax rules

- Maximum range: 8% of element height; target range: 3–5%.
- Use on one supporting image or material layer at a time.
- Never parallax body text against its background.
- Disable on mobile when it compromises crop or performance.
- Disable completely for reduced motion.

## 6.9 Animation timing

| Use | Duration | Easing |
|---|---:|---|
| Press/active feedback | 120 ms | direct/ease-out |
| Link and small hover | 220 ms | `cubic-bezier(.16,1,.3,1)` |
| Component entrance | 420 ms | `cubic-bezier(.16,1,.3,1)` |
| Media reveal/crossfade | 700 ms | `cubic-bezier(.65,0,.35,1)` |
| Hero/page transition | 900–1100 ms | authored ease-in-out |
| Group stagger | 80–120 ms | n/a |
| Word stagger | 35–60 ms | n/a |

No spring bounce is used in primary brand motion. Long animation is reserved for large spatial or material changes.

## 6.10 Reduced-motion behaviour

- Remove cursor tracking, smooth scrolling, parallax, pinning, blur, and long transitions.
- Render final content states immediately.
- Replace the hero scene with its approved poster.
- Replace interactive before/after movement with labelled static frames.
- Stop autoplay motion unless it conveys essential information and has user control.
- Never leave opacity at zero or content off-canvas when scripts fail.

---

# 7. Responsive UX

Responsive design changes composition and interaction—not merely dimensions.

## 7.1 Wide desktop — 1440 px and above

- Use the full 12-column system with 48–64 px margins and controlled full bleed.
- Allow the hero object and oversized type to create optical overlap.
- Use two-column evidence layouts and one carefully selected sticky sequence.
- Preserve substantial negative space; do not fill wide screens with more content.
- Cursor/light response, magnetic CTA, and high-resolution media may activate when performance allows.
- Cap readable content width even when media extends to 1600 px.

## 7.2 Laptop — 1024–1439 px

- Retain the 12-column logic with 32 px margins and 20 px gutters.
- Reduce visual overlap before reducing text size.
- Keep hero supporting copy and actions within safe vertical bounds on shorter screens.
- Convert complex two-stage project evidence into fewer, stronger frames.
- Use sticky behaviour only when viewport height is sufficient; short laptop screens receive normal flow.
- Treat this as a primary design target, not a scaled desktop afterthought.

## 7.3 Tablet — 768–1023 px

- Shift to the eight-column grid and 24 px margins.
- Recompose hero text and object into distinct but visually connected zones.
- Disable cursor-specific mechanics and most magnetic behaviour.
- Featured project chapters become mostly linear; retain generous image scale.
- Capabilities can use two-column text structure but should avoid hover-dependent media stages.
- Process becomes a vertical timeline or two-by-two editorial sequence.
- Ensure touch targets are at least 44×44 px and visible states do not depend on hover.

## 7.4 Mobile — 320–767 px

- Use a four-column grid, 20 px margins, and 16 px gutters.
- Use `100dvh` with safe-area-aware lower spacing for the hero.
- Preserve the hero's hierarchy: wordmark → category → headline → object → support/actions.
- Use a poster or short authored light pass; no WebGL dependency.
- Stack project narrative beats and keep metadata permanently visible.
- Replace sliders, sticky scenes, and drag comparisons with labelled static sequences.
- Maintain 72–96 px section spacing; do not compress the exhibition rhythm into a feed.
- Use one-column Selected Works in a deliberately curated order.
- Keep large type expressive while preventing orphaned words and horizontal overflow.
- Do not autoplay non-essential video on constrained connections.

## 7.5 Cross-breakpoint continuity

At every size:

- Section order and narrative meaning remain unchanged.
- The hero identifies NAVARICK without animation.
- Project links and primary contact remain obvious.
- Body text remains at least 16 px with appropriate contrast.
- No information exists only in hover, parallax, or 3D.
- Media has fixed aspect/dimension reservations to control CLS.
- Test at 320, 375, 768, 1024, and 1440 px, plus short laptop heights.

---

# 8. Content Draft

This copy is directional, not final. Project titles, outcomes, testimonial, availability, contact details, and credits must be replaced with approved facts. Bracketed text is a content requirement, not publishable copy.

## 8.1 Cinematic Hero

**Eyebrow**
Independent creative studio

**Headline**
We give ambitious ideas distinctive form.

**Supporting copy**
NAVARICK builds brand identities and digital experiences where strategy, design, and technology move as one.

**Primary CTA**
View selected work

**Secondary CTA**
Start a project

**Scroll cue**
Explore the work

## 8.2 Featured Work / Signature Case Studies

**Section label**
Selected transformations

**Section introduction**
A closer look at the ideas, systems, and digital experiences built to move ambitious businesses forward.

**Project template**

- **Title:** [Approved project/client name]
- **Transformation:** From [specific constraint] to [specific new position or experience].
- **Context:** [Client] needed to [clear business or user need] without losing [important constraint].
- **Defining idea:** We built the system around [one concise strategic/design decision].
- **Impact:** [Verified outcome, attributable client observation, or honest qualitative result].
- **CTA:** View case study

**Example structure—not a publishable claim**
An identity built to make a complex offer instantly recognisable. A digital system designed to carry that clarity from first impression to final interaction.

## 8.3 Studio Philosophy

**Section label**
Our point of view

**Statement**
One idea. One direction. Every expression.

**Supporting copy**
The strongest brands do not separate what they say from how they behave. We connect strategy, identity, interface, and development under one creative standard—so every touchpoint feels unmistakably part of the same whole.

**CTA**
Our approach

## 8.4 Capabilities

**Section label**
What we make

**Introduction**
Four disciplines, shaped as one coherent experience.

### 01 — Brand Identity Design

Distinctive identity systems built from a clear strategic foundation.

**Scope:** Positioning direction, visual identity, typography, colour, brand systems, motion principles, guidelines.

### 02 — Web Design

Editorial digital experiences that make the brand tangible and persuasive.

**Scope:** Information architecture, creative direction, responsive design, interaction design, design systems.

### 03 — Web Development

Carefully engineered websites that preserve the creative idea in production.

**Scope:** Frontend architecture, responsive implementation, motion, accessibility, performance, launch support.

### 04 — UI/UX Design

Clear, considered interfaces for products and complex digital journeys.

**Scope:** User flows, experience architecture, interface systems, prototyping, usability refinement.

**CTA**
Explore our services

## 8.5 Portfolio Gallery / Selected Works

**Section heading**
Selected works

**Introduction**
Different challenges. Different visual languages. The same standard of clarity and craft.

**Project item template**

- [Project/client name]
- [Disciplines] · [Year]
- [One specific sentence describing the assignment or change]
- View project

**Closing CTA**
View all work

## 8.6 Process

**Section label**
How we work

**Heading**
A clear path to distinctive work.

**Introduction**
Every engagement is shaped around the problem, but the discipline remains consistent: understand deeply, decide clearly, make precisely, and deliver completely.

### 01 — Discover

We listen, question, and find the truth the work needs to express.

**Output:** Shared brief, context, constraints, and success definition.

### 02 — Define

We turn insight into a focused strategic and creative direction.

**Output:** Position, principles, experience direction, and decision criteria.

### 03 — Design

We build the identity or interface as a coherent, responsive system.

**Output:** Approved system, prototypes, applications, and production direction.

### 04 — Deliver

We refine, build, test, and prepare the work to perform in the real world.

**Output:** Production assets, launched experience, documentation, and handover.

## 8.7 Results / Proof / Impact

**Section label**
The work, in effect

**Bridge copy**
Good design changes more than appearance. It clarifies the offer, strengthens recognition, and makes every important interaction feel more intentional.

**Testimonial template**
“[A concise, attributable statement describing the working relationship and the difference the work made.]”

**Attribution**
[Name], [Role] at [Organisation]

**Outcome templates**

- [Verified metric] — [what it measures, project, and period]
- [Specific qualitative change] — confirmed by [client/source]
- [Operational or user result] — [context]

If this evidence is not ready, publish one approved testimonial and one specific project outcome. Do not fill the space with invented statistics.

## 8.8 Final Contact CTA

**Headline**
Have something worth making unmistakable?

**Supporting copy**
Tell us what you are building, changing, or ready to clarify. We will begin with the ambition—and the problem behind it.

**Primary CTA**
Start a project

**Secondary CTA**
Email [confirmed NAVARICK address]

**Expectation line**
Share a little about the project, timing, and where you need the work to take you. [Confirmed response expectation.]

---

# 9. Implementation Notes

## 9.1 Build in the next approved phase

The next implementation phase should establish the static, semantic, responsive experience before cinematic enhancement:

1. Final content inventory and project selection.
2. Low-fidelity desktop/mobile wireframes for all eight sections.
3. Navigation, container, typography, link/button, media, rule, and focus primitives.
4. Static homepage architecture with real copy lengths and representative approved media.
5. Featured Work and Selected Works content contracts.
6. Responsive image/video strategy and fixed media aspect ratios.
7. Accessible focus order, skip link, headings, project links, and reduced-motion baseline.
8. Metadata and analytics event plan for homepage project and enquiry paths.

## 9.2 Build after the static hierarchy is approved

- Framer Motion entrance primitives and route transition.
- Selected clip/image reveal language.
- Capability-row active media treatment.
- One chosen sticky Featured Work sequence, if user testing confirms value.
- Magnetic treatment for no more than two primary CTAs.
- Lenis as an optional progressive enhancement.

## 9.3 Prototype before committing

Prototype these independently from the full page:

- Hero medium comparison: optimised video versus React Three Fiber.
- Material light/cursor response and low-power fallback.
- Before/after interaction with keyboard and mobile alternatives.
- Short-laptop hero composition.
- Project media performance at the PRD's mobile/desktop budgets.

## 9.4 Wait until source material is approved

- Final project modules, case-study order, and outcome claims.
- Wordmark-specific entrance choreography.
- WebGL scene and production lighting.
- Client logo index or testimonial rotation.
- Contact response expectation and investment language.
- CMS integration, analytics vendor, form provider, or paid dependencies.
- Any award/recognition content.

## 9.5 Explicitly out of scope for the homepage build

- SaaS pricing, feature grids, dashboards, product screenshots without narrative context.
- Blog, careers, newsletter, or unrelated service expansion.
- Multiple competing hero interactions.
- Generic service icon cards.
- Persistent custom cursor as a navigation requirement.
- Scroll-jacking, mandatory horizontal scrolling, or animation-gated content.
- Fabricated project names, client claims, statistics, or testimonials.

## 9.6 Recommended implementation sequence

1. Content and asset approval.
2. Mobile and desktop wireframes.
3. Semantic static page.
4. Responsive art direction.
5. Accessibility and keyboard review.
6. Performance baseline.
7. Motion layer.
8. Hero prototype integration.
9. Cross-device verification.

This order protects the portfolio narrative from becoming subordinate to the hero effect.

---

# 10. Acceptance Criteria

This blueprint is ready for UI development only when the following are true.

## Strategy and narrative

- [ ] The eight-section order is approved.
- [ ] The distinction between two deep Featured Work stories and the wider Selected Works gallery is approved.
- [ ] The hero communicates the studio category and offer without relying on motion.
- [ ] The emotional journey moves deliberately from intrigue to trust to contact.
- [ ] The page avoids SaaS, consultancy, generic agency, crypto, and template conventions.

## Content

- [ ] Hero headline and supporting copy are approved or an explicit copy exploration is commissioned.
- [ ] Four disciplines remain the complete V1 capability set.
- [ ] Two flagship case studies are selected with sufficient transformation evidence.
- [ ] Three to four additional homepage projects are selected or the gallery count is deliberately reduced.
- [ ] Every published claim, result, testimonial, credit, and project status is verifiable.
- [ ] Placeholder text is clearly separated from publishable content.

## Visual and assets

- [ ] Official wordmark variants are supplied.
- [ ] Hero source format is confirmed: rendered animation/video, 3D source, or both.
- [ ] Hero poster fallback is approved.
- [ ] Neue Montreal licensing is confirmed or Manrope is approved as fallback.
- [ ] Project media has usage rights, dimensions, intended crops, and alt-text notes.
- [ ] The design remains mostly obsidian/charcoal with restrained bronze, champagne, and chrome material use.

## UX and interaction

- [ ] Every essential action and piece of project context works without hover.
- [ ] The page never traps, snaps, or delays native scrolling.
- [ ] At most one homepage section uses significant sticky storytelling.
- [ ] Pointer interaction is supplemental and has a touch/static equivalent.
- [ ] Contact is accessible from the hero, persistent navigation, and final CTA.

## Responsive

- [ ] Hero and all eight sections have authored desktop, laptop, tablet, and mobile compositions.
- [ ] Short laptop heights are included in design review.
- [ ] Mobile project stories are linear and do not depend on drag, hover, or autoplay.
- [ ] No horizontal overflow appears at 320 px.
- [ ] Type hierarchy and exhibition pacing survive on mobile.

## Motion and accessibility

- [ ] The hero material reveal is the single signature mechanic.
- [ ] Motion timings follow the PRD token system and avoid spring bounce.
- [ ] Reduced-motion states are explicitly designed, not left to engineering interpretation.
- [ ] Semantic content exists before animation and remains visible if JavaScript fails.
- [ ] Keyboard focus, contrast, alternative text, and 44×44 px targets meet the agreed WCAG 2.2 AA baseline.

## Performance and technical feasibility

- [ ] The chosen hero medium can meet the PRD media and LCP budgets.
- [ ] One-canvas maximum and poster fallback are accepted.
- [ ] Non-critical media is lazy-loadable and dimensionally reserved.
- [ ] Desktop motion targets stable 55–60 fps and mobile fallbacks remain usable on representative mid-tier hardware.
- [ ] The complete static page works without Lenis, GSAP, WebGL, or Framer Motion.

## Final approval gate

Before UI development begins, stakeholders should be able to answer “yes” to four questions:

1. Does this page make NAVARICK's work the proof rather than the interface the performance?
2. Is the homepage recognisably NAVARICK without depending on bronze, glass, or the logo alone?
3. Is every interaction serving understanding, desire, or trust?
4. Would a qualified visitor know what NAVARICK does, why it is different, and how to begin?

---

# Open Decisions

1. Which two projects have the strongest evidence for Featured Work?
2. Which three to four projects complete the Selected Works set without diluting quality?
3. Is the source NAVARICK animation a rendered asset, an editable 3D scene, or both?
4. Does real-time cursor-controlled light add enough value to justify WebGL?
5. Which official wordmark variant belongs in the opening frame?
6. Is Neue Montreal licensed, or should visual design proceed with Manrope?
7. What verified outcomes and client testimony are available at launch?
8. Is NAVARICK founder-led, a fixed team, or a curated collaborator model?
9. What public contact address and response expectation should appear?
10. Will the first release use typed local content or require a CMS workflow?

---

# Recommended Next Phase

Proceed to **Content & Asset Definition plus Low-Fidelity Wireframes**—not visual UI implementation yet.

The next phase should produce:

- Approved hero copy and wordmark/animation inventory.
- A project selection matrix for Featured Work and Selected Works.
- Complete content outlines for the two flagship case studies.
- Desktop, short-laptop, tablet, and mobile wireframes for all eight sections.
- A media specification with crop, format, alt-text, and performance requirements.
- Static and reduced-motion hero storyboards.

Only after those items are approved should NAVARICK move into high-fidelity visual design and component architecture.
