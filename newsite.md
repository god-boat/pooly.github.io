Yes — based on the live page, the issue is not that it looks bad. It’s that the current language is very “clean SaaS landing page”: centered hero, generic feature cards, broad benefit copy, smooth professional polish. That works, but it does not yet communicate music culture, handmade tools, or real-life creative use strongly enough. The current hero says “make music anywhere” and describes Pooly as “a powerful DAW…” which is accurate, but very category-generic.

I think Pooly should avoid going fully futuristic/glassy/cyber. That would fight the “handcrafted, lifestyle, grounded” goal. I’d aim for:

Design direction: “portable studio notebook”

Think: field recorder, pocket synth, sketchbook, tape labels, soft stickers, studio desk, worn-in creative gear — but presented with enough restraint that it still feels like a real product.

Not “retro DAW.”
Not “Ableton clone.”
Not “AI startup gradient blob.”
More like:

a small, tactile music workstation you actually carry with you.

That gives you a clear visual rule: every design choice should feel like it belongs to a musician’s everyday creative environment.

What I’d change first

The page needs more specific personality surfaces.

Right now the structure is sensible:

Hero → feature overview → cards → CTA.

But the visual storytelling could be more Pooly-specific. The sections “Capture ideas,” “Perform live,” “Build sounds,” and “Arrange anywhere” are useful, but they are currently broad DAW claims.

I’d make each section feel like a scene from use:

Capture ideas
Current feel: app feature.
Better feel: “You’re on a couch, train, park bench, or floor with headphones, catching something before it disappears.”

Perform live
Current feel: clip launcher feature.
Better feel: “The app is playable, physical, immediate — less spreadsheet, more instrument.”

Build sounds
Current feel: instrument list.
Better feel: “A box of little sound machines: FM, sampler, drums, strange textures.”

Arrange anywhere
Current feel: mobile DAW claim.
Better feel: “Turn sketches into songs without needing to move to a desktop.”

Visual language recommendations

Use warm neutrals as the base, not pure black/white SaaS contrast. Something like bone, graphite, clay, faded blue, olive, muted orange, charcoal. Accent colors can still be vivid, but they should feel like stickers, knobs, tape marks, or synth LEDs.

Use slightly imperfect geometry in decorative elements. Not sloppy, but avoid everything being perfectly rounded glass cards. Add small tape-label shapes, offset borders, capsule tags, stamp-like labels, grid paper textures, subtle paper noise, or “screenprint” imperfections.

Use real-world framing around screenshots. Instead of floating UI screenshots in generic browser/device frames, frame them like objects: a phone on a table, a stickered device, a manual diagram, a printed quick-start card, a patch label, a gig bag insert. Even without photography, you can imply this with layout.

Use shorter, more human copy. “A powerful DAW for capturing ideas…” is true but expected. Pooly’s sharper position is more like:

A music studio that behaves more like an instrument.

or:

Sketch, perform, sample, and arrange without leaving the moment.

or:

A pocket-sized DAW for ideas that do not wait.

A stronger homepage concept

I’d restructure the page around a more distinctive narrative:

Hero

Make music before the idea disappears.

Pooly is a touch-first music workstation for sketching, sampling, performing, and arranging on phones, tablets, and desktop.

CTA buttons:
keep the current socials and manual buttons

Then show a large Pooly UI screenshot, but place it in a more tactile composition: soft background, sticker labels pointing to clips/scenes/sampler/arranger, maybe small handwritten-style annotations.

Section 1: “Built for the first 30 seconds of an idea”

Show clip launcher, pads, quick recording, patterns.

Section 2: “Playable, not just editable”

Show scene launching, performance surface, live control.

Section 3: “A small studio of instruments”

Show FM, sampler, kits, Strata/Braids-style synths, built-in voices.

Section 4: “Finish the idea”

Show arranger, song structure, export/share.

This tells a journey instead of listing features.

The design language name I’d use internally

Give the direction a name so every future design choice can be judged against it:

Field Studio

That captures: portable, real-life, creative, grounded, not sterile.

Other possible names:

Pocket Workshop — more handmade/tool-like
Soft Machine — warmer electronic/music feel
Tape & Touch — tactile/mobile/music-specific
Everyday Studio — lifestyle-friendly, less artsy
Instrument OS — more product/tech, less warm

My pick is Field Studio.

Concrete style rules

For Pooly’s marketing site, I’d use rules like:

Screenshots should feel used, not displayed.
Add labels, cropped closeups, context, annotations, and “here’s what you can do” storytelling.
Avoid generic tech gradients unless they look like light, paper, or material.
Warm ambient gradients are fine. Cold purple-blue SaaS gradients are not.
Use product vocabulary, but pair it with musician vocabulary.
“Patterns and clips” should sit near “catch a beat,” “shape a sound,” “perform a section.”
Make the app feel like an instrument first and software second.
Pooly’s differentiator is touch-first performance + creation, not just “DAW features on mobile.”
Use small human details.
Sticker tags, “made on the bus,” “sketched on phone, finished on desktop,” little scene names, sample names, project titles.
The main thing to avoid

Do not over-index on “professional DAW” visual language. That usually leads to dark backgrounds, glowing waveforms, floating UI panels, and cold productivity copy. Pooly should still look credible, but its emotional hook should be:

music-making as a lived, portable, playful habit.

That is much more distinctive than “powerful DAW on any device.”

I’d break it into three layers: core site structure, reusable “field studio” visual primitives, and a few carefully placed handcrafted details.

1. Keep the page structure mostly normal

Do not build the whole thing as a giant collage image. The page should still be regular responsive HTML:

Header
Hero
Feature story section 01
Feature story section 02
Feature story section 03
Feature story section 04
CTA
Footer

The handcrafted feeling should come from reusable components:

GridPaperPanel
TapeLabel
Sticker
HandNote
ScreenshotCard
SectionNumber
FeatureBlock
FieldButton

That way the page stays responsive and editable.

2. Define the “Field Studio” design tokens

Start with a palette like:

:root {
  --bg: #11110f;
  --paper: #191916;
  --paper-soft: #20201c;
  --ink: #f2eee4;
  --muted: #b9b1a4;

  --grid-line: rgba(242, 238, 228, 0.075);
  --border: rgba(242, 238, 228, 0.16);

  --blue: #4e6f9e;
  --clay: #b87543;
  --olive: #9a9b62;
  --tape: #c9b98f;
  --note: #e2d0a2;
}

Then build the page around dark graphite grid paper, not a flat black background.

.field-bg {
  background-color: var(--bg);
  background-image:
    linear-gradient(var(--grid-line) 1px, transparent 1px),
    linear-gradient(90deg, var(--grid-line) 1px, transparent 1px);
  background-size: 28px 28px;
}

For larger graph paper panels:

.grid-panel {
  background-color: var(--paper);
  background-image:
    linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px);
  background-size: 24px 24px;
  border: 1px solid var(--border);
  box-shadow: 0 16px 50px rgba(0, 0, 0, 0.35);
}
3. Add texture with CSS first, images second

You can get a lot of the look without heavy assets:

.noise::before {
  content: "";
  position: absolute;
  inset: 0;
  pointer-events: none;
  opacity: 0.08;
  background-image: url("/textures/noise.png");
  mix-blend-mode: screen;
}

Use a tiny repeating PNG/WebP noise texture. Keep it subtle. The page should not look dirty or low-res.

You probably want these texture assets:

/public/textures/noise.webp
/public/textures/paper-fiber.webp
/public/textures/tape.webp
/public/textures/cardboard.webp

But only use them as light overlays. The main design should still work from CSS.

4. Make tape, notes, and stickers as components
Tape label
---
// TapeLabel.astro
const { children, rotate = "-2deg" } = Astro.props;
---

<span class="tape-label" style={`--rotate:${rotate}`}>
  <slot />
</span>

<style>
  .tape-label {
    display: inline-block;
    padding: 0.35rem 0.75rem;
    background: rgba(207, 190, 143, 0.9);
    color: #1b1710;
    font-size: 0.78rem;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    transform: rotate(var(--rotate));
    box-shadow: 0 4px 12px rgba(0,0,0,0.25);
  }
</style>
Hand note

Use an actual handwriting-ish font only for small notes, not body copy.

Good choices:

Patrick Hand
Caveat
Kalam
Nanum Pen Script
.hand-note {
  font-family: "Kalam", "Comic Sans MS", cursive;
  color: #e8dcc5;
  font-size: 0.95rem;
  line-height: 1.2;
}

Do not overuse it. Handwriting should be accent material.

Sticker
.sticker {
  display: inline-grid;
  place-items: center;
  width: 86px;
  height: 86px;
  border-radius: 999px;
  background: var(--clay);
  color: #1b120c;
  font-weight: 800;
  text-align: center;
  font-size: 0.75rem;
  text-transform: uppercase;
  transform: rotate(-5deg);
  box-shadow: 0 10px 25px rgba(0,0,0,0.3);
}
5. Screenshot cards should do most of the work

The mockup works because the Pooly UI is the colorful focal point. So make your app screenshots large, dark, and embedded in tactile panels.

<section class="feature-block grid-panel">
  <div class="feature-copy">
    <span class="section-number">01</span>
    <h2>Built for the first 30 seconds of an idea</h2>
    <p>Capture, sketch, and loop in moments. Clips, patterns, and variations — fast.</p>
  </div>

  <figure class="screenshot-card">
    <img src="/images/pattern-editor.webp" alt="Pooly pattern editor" />
  </figure>
</section>
.feature-block {
  position: relative;
  display: grid;
  grid-template-columns: 0.85fr 1.4fr;
  gap: clamp(1.5rem, 4vw, 4rem);
  padding: clamp(1.5rem, 4vw, 4rem);
  border-radius: 28px;
}

.screenshot-card {
  background: #080807;
  border: 1px solid rgba(255,255,255,0.13);
  border-radius: 18px;
  padding: 0.5rem;
  box-shadow:
    0 18px 50px rgba(0,0,0,0.45),
    inset 0 1px 0 rgba(255,255,255,0.08);
}

.screenshot-card img {
  width: 100%;
  display: block;
  border-radius: 12px;
}
6. Use decorative elements as absolutely positioned accents

Example hero:

<section class="hero field-bg">
  <div class="hero-copy">
    <TapeLabel>Portable Studio</TapeLabel>
    <h1>Make music before the idea disappears.</h1>
    <p>Pooly is a touch-first music workstation for sketching, sampling, performing, and arranging on phones, tablets, and desktop.</p>
  </div>

  <div class="hero-device">
    <img src="/images/pooly-clip-launcher.webp" alt="Pooly clip launcher" />
  </div>

  <HandNote class="note note-a">Sketch, loop, build.</HandNote>
  <HandNote class="note note-b">Take it anywhere.</HandNote>
</section>
.hero {
  position: relative;
  overflow: hidden;
  display: grid;
  grid-template-columns: 0.9fr 1.2fr;
  gap: 4rem;
  padding: clamp(4rem, 8vw, 8rem) clamp(1.25rem, 6vw, 6rem);
}

.hero-device {
  transform: rotate(-2deg);
}

.note {
  position: absolute;
}

.note-a {
  top: 18%;
  right: 38%;
}

.note-b {
  top: 34%;
  right: 4%;
}

On mobile, hide or simplify some annotations:

@media (max-width: 800px) {
  .hero {
    grid-template-columns: 1fr;
  }

  .note {
    display: none;
  }

  .hero-device {
    transform: none;
  }
}
7. Make the grid paper system reusable

You probably want different intensities:

.grid-paper-subtle {
  background-image:
    linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px);
  background-size: 32px 32px;
}

.grid-paper-medium {
  background-image:
    linear-gradient(rgba(255,255,255,0.065) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.065) 1px, transparent 1px);
  background-size: 24px 24px;
}

.grid-paper-dense {
  background-image:
    linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px);
  background-size: 16px 16px;
}

Use the dense grid only in small panels. If everything is dense, the page gets noisy.

8. Use real Pooly UI screenshots, then stylize the frames

The generated image invents UI details, but the real implementation should use real screenshots from Pooly:

/images/hero-clip-launcher.webp
/images/pattern-editor.webp
/images/performance-view.webp
/images/instruments.webp
/images/arrangement.webp

Then frame them with CSS instead of editing everything into Photoshop.

This keeps the site easy to update when the UI changes.

9. Suggested Astro component structure

Since your site is Astro, I’d do something like:

src/
  components/
    site/
      Header.astro
      Footer.astro
      Hero.astro
      CTA.astro

    field/
      GridPanel.astro
      TapeLabel.astro
      HandNote.astro
      Sticker.astro
      ScreenshotCard.astro
      FeatureBlock.astro

  pages/
    index.astro

  styles/
    tokens.css
    field-studio.css
    global.css

public/
  images/
    pooly-screens/
  textures/

The homepage should read almost like content assembly:

<Hero />

<FeatureBlock
  number="01"
  title="Built for the first 30 seconds of an idea"
  body="Capture, sketch, and loop in moments. Clips, patterns, and variations — fast."
  image="/images/pooly-screens/pattern-editor.webp"
/>

<FeatureBlock
  number="02"
  title="Playable, not just editable"
  body="Scenes, mutes, and macros put your song in your hands."
  image="/images/pooly-screens/performance.webp"
/>

<FeatureBlock
  number="03"
  title="A small studio of instruments"
  body="FM synths, samplers, expressive kits, and everyday sounds — built in."
  image="/images/pooly-screens/instruments.webp"
/>

<FeatureBlock
  number="04"
  title="Finish the idea"
  body="Arrange, refine, and build your song all in one place."
  image="/images/pooly-screens/arrangement.webp"
/>

<CTA />
10. The biggest implementation warning

The mockup looks cool because it is dense, but the real page needs restraint.

I’d use this rule:

Every section gets one main handcrafted detail, not five.

For example:

Hero:
  grid paper + tape labels + one sticker

Feature 01:
  grid card + handwritten arrow

Feature 02:
  torn note + stage/playable annotation

Feature 03:
  circular sticker

Feature 04:
  export/share/release tape note

CTA:
  polaroid/lifestyle image

That keeps it feeling designed rather than cluttered.

11. Practical first pass

I’d implement in this order:

Add design tokens and dark grid-paper background.
Redesign hero with real screenshot, strong headline, and CTA row.
Build reusable GridPanel, ScreenshotCard, TapeLabel, and Sticker.
Convert current feature cards into larger editorial feature blocks.
Add handwritten accent font only for notes.
Add texture overlays.
Add responsive rules to remove clutter on mobile.
Compress all screenshots/textures as WebP/AVIF.

The key is: make the layout conventional, but make the surfaces tactile. That gives you the handcrafted feel without making the codebase fragile.