Pooly site + manual implementation plan
Goal

Build pooly.studio as a custom Astro static site with a beautiful mobile-first product experience and an embedded Markdown/MDX documentation system.

The site should support:

custom landing/product pages
visual “Learn” workflows
structured manual/reference pages
static search
GitHub Pages deployment
content that is easy for agents to update

Use:

Astro
MDX
Astro Content Collections
Pagefind
GitHub Actions
GitHub Pages

Astro’s Content Collections are the right primitive for this because they manage Markdown/MDX content with schemas, editor support, and type-safe querying. Pagefind is a good search fit because it builds a static search index from generated HTML and does not require a hosted backend.

Phase 1: Create the Astro site shell
1. Initialize Astro

From the pooly.github.io repo:

npm create astro@latest .

Recommended choices:

Template: Empty
TypeScript: Yes
Install dependencies: Yes
Git repo: No, because repo already exists

Then install MDX and Pagefind:

npm install @astrojs/mdx pagefind

Add MDX integration.

astro.config.mjs:

import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

export default defineConfig({
  site: "https://pooly.studio",
  integrations: [mdx()],
  output: "static",
});

Astro has official GitHub Pages deployment support through withastro/action, which is the simplest route for this setup.

Phase 2: Establish repo structure

Create this structure:

src/
  components/
    AppHeader.astro
    AppFooter.astro
    BottomNav.astro
    HeroSection.astro
    FeatureCard.astro
    GuideCard.astro
    ManualCard.astro
    ScreenshotFrame.astro
    SearchButton.astro
    Callout.astro
    PageSection.astro

  content/
    config.ts

    manual/
      concepts/
        clips-patterns-scenes.md
        tracks.md
        devices.md
        projects.md

      views/
        browser.md
        clip-launcher.md
        arranger.md
        mixer.md
        piano-roll.md

      instruments/
        sampler.md
        kit.md
        fm.md
        strata.md
        ks.md

      reference/
        troubleshooting.md
        shortcuts.md
        file-formats.md

    guides/
      first-song.md
      loading-samples.md
      building-an-instrument.md
      performing-with-scenes.md
      exporting-a-song.md

  layouts/
    BaseLayout.astro
    MarketingLayout.astro
    GuideLayout.astro
    ManualLayout.astro

  pages/
    index.astro
    learn/
      index.astro
      [slug].astro
    manual/
      index.astro
      [...slug].astro
    search.astro
    changelog.astro

  styles/
    global.css
    tokens.css
    utilities.css

public/
  images/
    screenshots/
    ui/
    brand/
  favicon.svg

Keep the structure intentionally simple. The site should be custom, but the content system should be boring and predictable.

Phase 3: Define content collections

src/content/config.ts:

import { defineCollection, z } from "astro:content";

const manual = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    section: z.enum([
      "concepts",
      "views",
      "instruments",
      "reference",
    ]),
    order: z.number().default(999),
    draft: z.boolean().default(false),
  }),
});

const guides = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    order: z.number().default(999),
    difficulty: z.enum(["beginner", "intermediate", "advanced"]).default("beginner"),
    estimatedTime: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = {
  manual,
  guides,
};

Each content file should have frontmatter like:

---
title: Clips, Patterns, and Scenes
description: Understand the core building blocks of Pooly projects.
section: concepts
order: 10
---

# Clips, Patterns, and Scenes

...

This gives agents a predictable format and lets the site generate nav automatically.

Phase 4: Build the visual system first

Before writing lots of docs, define the site’s visual language.

Design direction

Pooly should feel:

mobile-first
playful
musical
soft but technical
touchable
alive
not enterprise-docs
not generic SaaS
CSS tokens

src/styles/tokens.css:

the css is already mostly inplace here: @styles.css reuse that

The first pass does not need a huge design system. It needs strong defaults.

Required responsive behavior

Design mobile first:

bottom navigation or large mobile menu
card-based Learn page
no permanent left sidebar on mobile
manual pages should have:
readable article body
“On this page” collapsed or hidden on small screens
previous/next navigation
search always reachable
buttons and cards should be touch-sized
avoid tiny desktop-docs affordances
Phase 5: Implement core layouts
BaseLayout.astro

Responsibilities:

document shell
metadata
global CSS
header/footer
slot for content
---
import "../styles/tokens.css";
import "../styles/global.css";
import AppHeader from "../components/AppHeader.astro";
import AppFooter from "../components/AppFooter.astro";

const {
  title = "Pooly",
  description = "A playful, mobile-first music app.",
} = Astro.props;
---

<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>{title}</title>
    <meta name="description" content={description} />
  </head>
  <body>
    <AppHeader />
    <main>
      <slot />
    </main>
    <AppFooter />
  </body>
</html>
ManualLayout.astro

Responsibilities:

article page
manual section nav
mobile-friendly page navigation
previous/next links
search access

The manual should not look like a desktop docs portal. On mobile, the nav should become a compact drawer/card list.

Phase 6: Implement routes
Home page

src/pages/index.astro

Sections:

Hero
  headline
  short explanation
  screenshot or video
  CTA: Early Access / Learn Pooly

What Pooly is
  mobile-first DAW
  clips, scenes, instruments, arrangement

Feature cards
  Make ideas fast
  Perform with scenes
  Build sounds
  Arrange anywhere

Visual walkthrough
  screenshots with captions

CTA
  Join early access
  Read the manual
  Discord

The homepage should be allowed to be beautiful and custom. Do not force it to share manual styling.

Learn index

src/pages/learn/index.astro

Purpose:

“What are you trying to do?”

Cards:

Make your first song
Load and play samples
Build an instrument
Perform with scenes
Arrange a track
Export your song
Troubleshoot audio

This page should feel like an onboarding hub, not documentation.

Learn detail route

src/pages/learn/[slug].astro

Render guide collection entries.

Guide pages should be more visual than manual pages:

step sections
screenshots
callouts
“next thing to try”
related manual links
Manual index

src/pages/manual/index.astro

Grouped manual cards:

Core Concepts
Views
Instruments
Reference
Manual detail route

src/pages/manual/[...slug].astro

Render all manual collection entries.

Important: use file path as URL.

Example:

src/content/manual/views/browser.md

becomes:

/manual/views/browser/
Phase 7: Add search

Use Pagefind after build.

Update package.json:

{
  "scripts": {
    "dev": "astro dev",
    "build": "astro build && pagefind --site dist",
    "preview": "astro preview"
  }
}

Create:

src/pages/search.astro

A simple first-pass search page can load Pagefind’s default UI. Later, replace it with a custom overlay.

Important rule:

Search page is enough for v1.
Do not block the first version on a fancy command palette.

Pagefind is specifically designed to work with static HTML output and avoid backend infrastructure, so it fits GitHub Pages well.

Phase 8: GitHub Pages deployment

Create:

.github/workflows/deploy.yml
name: Deploy Pooly Site

on:
  push:
    branches:
      - main
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Pages
        uses: actions/configure-pages@v5

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 22
          cache: npm

      - name: Install dependencies
        run: npm ci

      - name: Build site
        run: npm run build

      - name: Upload Pages artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: dist

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build

    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4

In GitHub repo settings:

Settings → Pages → Source → GitHub Actions
Custom domain → pooly.studio

Astro’s official docs recommend the withastro/action for very little configuration, but this explicit Pages workflow is also fine and makes the build steps easy to customize for Pagefind.

Phase 9: First content pass

Do not try to write the whole manual first.

Create these pages only:

Learn
learn/first-song.md
learn/loading-samples.md
learn/performing-with-scenes.md
Manual concepts
manual/concepts/clips-patterns-scenes.md
manual/concepts/tracks.md
manual/concepts/devices.md
Manual views
manual/views/browser.md
manual/views/clip-launcher.md
manual/views/arranger.md
Reference
manual/reference/troubleshooting.md

That is enough to test the information architecture.

Phase 10: Content writing style

Every docs page should follow this pattern:

Title
One-sentence purpose

When to use this
Short practical explanation

Main explanation
Clear, visual, not too abstract

How to do it
Step-by-step

Tips
Small callouts

Related pages
Links

Avoid writing docs like:

The Browser is a component that exposes file and preset loading behavior...

Prefer:

Use the Browser when you want to find a sound, load a sample, open a preset, or add something to your project.

Pooly docs should teach through music-making tasks, not software architecture.

Phase 11: Agent update rules

Add a docs-writing-guide.md or AGENTS.md file:

# Pooly Site Writing Guide

## Voice

Write clearly, casually, and practically. Pooly is a creative music app, not an enterprise tool.

Use:
- “Use this when…”
- “Tap…”
- “Drag…”
- “Try…”
- “This is useful for…”

Avoid:
- overly technical internal implementation details
- desktop-only assumptions
- huge paragraphs
- undocumented feature promises

## Page structure

Each guide should include:
- what this helps you do
- steps
- screenshots when available
- related manual links

Each manual page should include:
- purpose
- key concepts
- controls
- tips
- related pages

## Terminology

Use these terms consistently:
- Clip
- Pattern
- Scene
- Track
- Device
- Instrument
- Effect
- Project
- Library
- Browser

This is important because it makes the site genuinely agent-friendly.

Phase 12: V1 acceptance checklist

The first version is done when:

Home page feels like Pooly, not a docs theme.
Learn page has useful workflow cards.
Manual index groups pages clearly.
At least 10 content pages exist.
Search works after production build.
Mobile layout feels intentionally designed.
GitHub Actions deploys to pooly.studio.
Adding a new manual page only requires creating one Markdown/MDX file.
Recommended build order

Do it in this order:

1. Astro project setup
2. GitHub Pages deployment
3. global CSS tokens
4. BaseLayout / header / footer
5. homepage
6. content collections
7. manual index + manual detail route
8. learn index + guide detail route
9. first 10 docs pages
10. Pagefind search
11. screenshots and polish
12. SEO/social cards later

The key is to get a working vertical slice early:

Home → Learn → Guide → Manual page → Search

Once that loop feels good on phone and desktop, expanding the manual is just content work.