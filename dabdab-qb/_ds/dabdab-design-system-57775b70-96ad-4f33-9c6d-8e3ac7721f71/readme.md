# Dabdab Design System

The design system for **Dabdab** — an independent design and technology studio based in Nepal, engineering "functionally beautiful" digital products for a global market.

Dabdab sits at the join between deep technical architecture and intuitive product design: complex backend systems, proprietary WebGL integrations, and high-fidelity UI/UX executed fast. The studio's positioning is operational, not decorative — it applies "the exact dab needed" to turn business chaos into effortless, premium digital experiences. The brand voice follows from that: energetic, young, highly creative, and technically fluent.

---

## Sources used to build this system

Everything here derives from three files supplied by the user (originals preserved in `uploads/`):

| Source | What it gave us |
| --- | --- |
| `uploads/dabdabsvgArtboard 2 copy 2.svg` | The **brand mark** — six organic "petals" arranged as an abstract hash/dab. Copied to `assets/logo/`. |
| `uploads/dabdabsvgArtboard 2 copy.svg` | The **weave pattern** — a hand-drawn, slightly wobbly woven grid. Vector copy at `assets/patterns/weave.svg`, plus pre-tinted raster tiles (`weave-brand/ink/paper/alpha.png`) used by `PatternPanel`. |
| `uploads/dabdabphoneArtboard 5.png` | The **key visual** (1081×1921 phone artboard) — the exact palette was sampled from it: `#FDB713` field, `#FDBE3A` weave, `#F7F9F9` mark. |

**No codebase, Figma file, website, or deck was provided.** There is therefore no captured product UI, no existing component inventory, and no real product copy. Consequences, stated plainly:

- The component inventory below is an **authored standard set** (Button, Input, Card, …), not a recreation of an existing library.
- The UI kits are **brand-derived reference surfaces**, not pixel recreations of shipped Dabdab screens. Treat them as "what a Dabdab product looks like given these foundations," and replace them with real recreations if a codebase or Figma file becomes available.
- All copy in the kits and cards is written *in the brand's voice* but is illustrative, not real marketing copy.

### Substitutions made (please confirm or replace)

| Thing | Substitute used | Why |
| --- | --- | --- |
| Display & mono typefaces | **Big Shoulders Display** (headlines), **Space Mono** (labels/code) — Google Fonts, loaded via `tokens/fonts.css`. **Readex Pro** is brand-confirmed and carries the logo + all UI/body text. | No font files were supplied. Readex Pro was confirmed by the studio as the logo face; because it is a warm, soft-cornered sans that reads well small, it also serves as the UI/body face. For display we deliberately avoided another grotesque: Big Shoulders Display is tall and narrow, so headlines stack into dense blocks and leave the horizontal room that Readex's round forms need. |
| Iconography | **Lucide** (`lucide-static` via unpkg CDN), 2px stroke, masked to `currentColor` | No icon set was supplied. Lucide's even 2px stroke matches the system's 2px border language. |
| Wordmark | Type-set `dabdab` in Bricolage Grotesque 800 lowercase | No wordmark artwork was supplied — the mark alone was. Nothing was drawn or reconstructed. |

---

## Index

| Path | What's in it |
| --- | --- |
| `styles.css` | **Entry point.** Nothing but `@import`s — consumers link this one file. |
| `tokens/` | `fonts.css` (Readex Pro · Big Shoulders Display · Space Mono) `assets.css` `icons.css` `colors.css` `typography.css` `spacing.css` `radius.css` `elevation.css` `motion.css` `semantic.css` `base.css` |
| `components/core/` | Button, IconButton, Icon, Badge, Tag, Logo (+ `core.css`) |
| `components/forms/` | Field, Input, Textarea, Select, Checkbox, Radio, Switch (+ `forms.css`) |
| `components/surfaces/` | Card, PatternPanel, Dialog, Tooltip, Toast (+ `surfaces.css`) |
| `components/navigation/` | Navbar, Tabs, SideNav (+ `navigation.css`) |
| `guidelines/` | 24 foundation specimen cards (Colors, Type, Spacing, Elevation, Brand) |
| `ui_kits/studio-site/` | Marketing site: home, case study, contact — click-through |
| `ui_kits/studio-ops/` | Internal project-ops app: pipeline, project detail, settings |
| `assets/logo/` | `mark.svg` (currentColor), `mark-black.svg`, `mark-white.svg`, `mark-yellow.svg`. Also inlined as the `--logo-mark` data-URI token so it can be used as a CSS mask anywhere. |
| `assets/patterns/` | `weave.svg` (vector source) + `weave-brand.png` / `weave-ink.png` / `weave-paper.png` (pre-tinted tiles, 1200px) + `weave-alpha.png` (black on transparent, for custom tints) |
| `assets/brand/` | `wallpaper-mark-yellow.png` — the supplied key visual |
| `thumbnail.html` | Homepage tile for this system |
| `SKILL.md` | Agent-Skills front matter, for use in Claude Code |

### Components

Every component is `<Name>.jsx` + `<Name>.d.ts` + `<Name>.prompt.md`, exported from the compiled bundle under the project namespace.

**Core** — `Button`, `IconButton`, `Icon`, `Badge`, `Tag`, `Logo`
**Forms** — `Field`, `Input`, `Textarea`, `Select`, `Checkbox`, `Radio`, `Switch`
**Surfaces** — `Card`, `PatternPanel`, `Dialog`, `Tooltip`, `Toast`
**Navigation** — `Navbar`, `Tabs`, `SideNav`

**Intentional additions** (no source defined an inventory, so this is an authored set; two entries deserve a note):
- `Icon` — a wrapper over the Lucide glyph set, so icon colour and sizing stay tokenised instead of ad-hoc inline SVG.
- `PatternPanel` — not a generic primitive, but the brand's most distinctive surface: the supplied weave texture, tinted and tiled. Without it, every consumer would reimplement the mask by hand.

---

## CONTENT FUNDAMENTALS

**The voice in one line:** a very good engineer who is also funny, saying the true thing in the fewest words.

**Person.** "We" for the studio, "you" for the reader. Never "Dabdab believes…" in the third person, never the royal "one." Client work is described as *ours together*: "we rebuilt your checkout," not "the client's checkout was rebuilt."

**Casing.** Sentence case everywhere — headlines, buttons, nav, card titles, dialog titles. The **only** uppercase in the system is the mono eyebrow/badge (`--type-eyebrow`, `--tracking-caps`), and that's set by CSS, so write those strings in sentence case in source. The wordmark is always lowercase: `dabdab`, never `DabDab` or `Dabdab` in a lockup — only in prose sentences where it starts a sentence.

**Length.** Headlines ≤ 6 words. Sub-heads one sentence. Body paragraphs ≤ 3 sentences, ≤ 64 characters per line. Buttons 1–3 words, verb first. Badges 1–2 words. Tooltips 1–4 words, no period.

**Punctuation.** Periods in body copy, none on headlines unless the period *is* the joke ("Functionally beautiful."). Em dashes sparingly — one per paragraph maximum. No exclamation marks, no ALL-CAPS shouting, no ellipses to imply mystery.

**Numbers do the bragging.** Prefer a measured result to an adjective: "4× faster checkout," "84 seconds to deploy," "six weeks, start to shipped." Never invent a metric; if there isn't one, describe the mechanism instead.

**Vocabulary that's ours.** *dab* (the precise intervention), *bottleneck*, *shipped*, *scope*, *operational partner*, *functionally beautiful*. Verbs are physical and specific: rebuilt, cut, unblocked, wired, shipped.

**Vocabulary that isn't.** "Leverage," "synergy," "solutions," "seamless," "cutting-edge," "revolutionary," "we're passionate about," "in today's fast-paced world," "unlock," "elevate," "delight." No agency-mysticism ("we craft experiences that resonate").

**Emoji: no.** Not in product UI, not in marketing, not in empty states. The Lucide glyph set covers every case where an emoji would be reached for. Unicode symbols are used only as functional punctuation (`→` in links, `×` in dismiss, `·` as a separator).

**Examples, right and wrong.**

| Slot | Write this | Not this |
| --- | --- | --- |
| Hero headline | One dab, exactly where it hurts | Crafting Digital Experiences That Inspire ✨ |
| Sub-head | We build the parts that are hard — the backend that buckles at scale, the WebGL scene that has to run on a laptop. | We are a full-service digital agency delivering end-to-end solutions. |
| Primary button | Start a project | Let's Get Started! |
| Secondary button | See the work | Learn More |
| Badge | In build | 🚧 WIP |
| Empty state | Nothing here yet. Add your first project. | Oops! It looks like there's nothing here… |
| Error | That email doesn't look right. | Invalid input in field "email" |
| Success toast | Deployed — live in 84 seconds. | Success!!! Your changes have been saved successfully. |
| Case study title | Cut checkout latency 4× | A Journey Towards Performance Excellence |

**Micro-copy rules.** Errors say what's wrong and what to do, in that order, no blame. Success messages are past tense and one word where possible ("Deployed", "Saved", "Copied"). Loading copy names the work ("Compiling scene…"), never "Please wait."

---

## VISUAL FOUNDATIONS

### The idea
Two things collide: **engineering precision** (a strict 4px grid, 2px borders, mono labels, exact numbers) and **hand-drawn wobble** (the weave pattern, the organic petals of the mark, generous soft corners). Neither wins. Every screen should feel measured *and* alive.

### Colour
- **One loud colour.** `#FDB713` Dab Yellow, on `#000000` ink, on `#F7F9F9` paper. That trio carries the whole identity, so yellow is used as *punctuation*, not as a wash: one primary button, one active nav mark, one textured panel per view. Roughly 5–15% of a screen's area, never 50%.
- Yellow pairs **only** with ink for text. Never white text on yellow (2.0:1 — fails); ink on yellow is 11.4:1.
- Neutrals are very slightly cool (`--n-*`), which keeps the yellow reading warm by contrast.
- Four accents (`blue`, `coral`, `green`, `orange`) exist for status and data only, one per screen maximum. Yellow always outranks them.
- **No gradients as a look.** No bluish-purple hero gradients, no mesh blobs, no yellow-to-orange fades. Gradients appear only as functional protection scrims (`linear-gradient` from `--alpha-ink-64` to transparent) over the bottom of an image so text stays legible.
- Dark sections use `.dab-on-ink` (a token scope) rather than hand-flipping colours.

### Type
- **Display: Big Shoulders Display 800** — tall, narrow, almost no tracking (−0.012em; a condensed face does not want −0.035em), leading 0.92. Because it is condensed, display type runs *large*: 62px+ for an h1, 80–136px for a hero. Headlines break across two or three short lines and stack into a solid block.
- **Logo, UI & body: Readex Pro** — the brand's own face. Light (300) lowercase for the wordmark at −0.03em — the thin wordmark lets the solid mark carry the weight; 15px / 1.45 leading / 64-character measure for body; 17px for editorial lead paragraphs.
- **Labels & code: Space Mono**, 11–13px. Uppercase + 0.12em tracking for eyebrows, badges, counts, table headers.
- Tracking tightens as size grows; body copy is never tracked. Text is left-aligned; centring is allowed for ≤ 2 lines only. Never justified.
- Long-form copy uses `text-wrap: pretty`.

### Backgrounds & imagery
- Default page is flat `--paper`. No page-wide texture — texture is a **surface**, not a background.
- The **weave** is the signature: tiled 420–640px in sections (160–260px in cards), tinted ink-on-yellow, yellow-on-ink or ink-on-paper at **8–16%**. The three tints ship pre-baked as PNG tiles, applied by `components/surfaces/surfaces.css` (file URLs live in component stylesheets, never in custom properties — a relative `url()` inside a `--var` resolves against the *document* and 404s at other depths). `weave.svg` remains the vector source; `weave-alpha.png` covers custom tints via `.dab-weave`. One textured surface per view; never behind body copy.
- Full-bleed imagery is allowed in case-study heroes and card media slots. Photography vibe: **warm, high-contrast, slightly gritty** — real desks, real screens, real hands; no stock handshakes, no floating 3D shapes. Screens-in-context and WebGL captures are preferred over people. Where photography isn't available, use an ink or brand-yellow card instead of a placeholder illustration.
- No hand-drawn illustration set exists beyond the mark and the weave. Do not invent one.
- Grain: only what's already in the weave. Don't add noise overlays.

### Shape, corners, borders
- Two radius families: **generous soft** (12 inputs / 18 small / 26 cards / 36 sections) and **pill** (buttons, chips, tags, switches). `--radius-xs` (4px) is reserved for badges — deliberately the squarest thing on screen.
- `--radius-blob` exists for purely decorative organic shapes; never on a text container.
- **2px ink borders are the signature.** Brand-forward surfaces (buttons, inputs, sticker cards, dialogs, toasts) get `--border-thick solid var(--ink)`. Dense product UI (tables, list rows, plain cards) gets a 1px neutral hairline instead. Never mix both weights on the same element.

### Cards
Two looks, chosen by context:
- **Sticker card** (marketing, feature grids): white, 2px ink border, 26px radius, `--shadow-sticker` (4px 4px 0 ink). No blur, no colour-tinted shadow.
- **Plain card** (product UI, dense lists): white, 1px `--border-subtle`, 26px radius, `--shadow-soft-1`.
Plus `ink` and `brand` fills for stat/quote moments. Card padding is `--space-6` (24px); body sits 8px under the title, footer 20px under the body.

### Elevation
Two systems that never mix on one element:
1. **Sticker** — hard offset ink shadows (2/4/8px, zero blur). Brand elevation.
2. **Soft** — ambient `--shadow-soft-1/2/3`. 1 = resting rows, 2 = menus and popovers, 3 = hovered cards.
Inner shadows are used only as `--shadow-inset-hairline` for a 1px inner rule where a border would shift layout.

### Motion
- Default: `140ms` `--ease-dab` `cubic-bezier(.2,.9,.2,1)` — quick out, decisive, no float.
- **One bounce allowed:** `--ease-spring` on the Switch knob and on Dialog entry. Nowhere else.
- Fades are for scrims and toasts only. No scroll-jacking, no parallax, no fade-up-on-scroll walls, no animated counters, no marquee unless the content is genuinely a ticker.
- Durations: 90ms micro-feedback · 140ms controls · 200ms panels · 320ms modals · 520ms only for a deliberate hero reveal.
- `prefers-reduced-motion` collapses everything to 1ms (already in `tokens/base.css`).

### Interaction states
- **Hover:** sticker elements lift `−2px` *and* grow their shadow (4→6px offset), so the light appears to move — the yellow also lightens 500→400. Ghost/quiet elements tint with `--alpha-ink-04`. Links change colour to `--dab-yellow-700`; underlines are 2px at 3px offset.
- **Press:** the opposite — translate `+2px` toward the shadow and drop it to 0, so the element physically presses down. Yellow deepens to 600. Nothing scales; no `scale(0.97)` shrink.
- **Focus:** never removed. `--focus-ring` = 3px yellow halo at 32% + 1px ink. `--focus-ring-inverse` on ink surfaces.
- **Disabled:** 38% opacity, shadow removed, pointer events off. No grey-out repaint.
- **Selected / current:** yellow fill (pills, sidebar items, tags, checkboxes) or a 3px yellow underline bar (tabs, nav links). Yellow *always* means "you are here" or "this is the one action."

### Transparency & blur
Used sparingly and only for layering: the sticky `Navbar` (`--surface-veil` at 72% + `--blur-veil` 14px) and the Dialog scrim (64% ink + 14px blur). Never on cards, never as frosted decoration, never on text backgrounds.

### Layout
- 4px grid, `--space-*` only — no arbitrary pixel values.
- Containers: 640 / 880 / 1160 / 1440. Section rhythm `--section-y` 96px (64px tight).
- Fixed/sticky elements: the site header (sticky, blurred), the app `SideNav` (fixed 232px), toast stack (bottom-right, 24px inset), dialog (centred). Nothing else pins.
- Asymmetry is welcome: 2-column splits at 5/7 or 4/8 rather than 6/6, and headline blocks that stop well short of the measure.
- Whitespace is the luxury signal. When in doubt, remove an element rather than shrink the gaps.

---

## ICONOGRAPHY

- **Set:** [Lucide](https://lucide.dev) — `lucide-static@0.544.0` served from unpkg, 24×24 viewBox, **2px stroke, round caps**. This is a **substitution**: no icon assets were supplied. It was chosen because a 2px stroke is the exact weight of the system's borders, so icons and containers share one line language.
- **How it's wired:** the `Icon` component sets the glyph as a CSS `mask-image` on a `background: currentColor` span, so every icon inherits its parent's text colour. The ~40 glyphs this system actually uses are **inlined as data-URI tokens** in `tokens/icons.css` (`--icon-arrow-up-right`, `--icon-search`, …); `Icon` reads `var(--icon-<name>, url(<lucide CDN>))`, so any other Lucide name still works but loads from the CDN. The inlining is deliberate: external-SVG masks don't survive DOM-cloning screenshot capture, so CDN-only icons render as black boxes in card thumbnails and exports. If you need a glyph often, add it to `tokens/icons.css`.
- **Sizes:** 16 inline with text · 18 inside controls · 24 in navigation · 32–48 as feature glyphs. Always an even number; never scaled to a non-integer.
- **Colour:** icons are monochrome — ink, paper, or `--text-muted`. An icon is never the only carrier of meaning, and never multi-colour.
- **No hand-drawn SVG.** If a glyph doesn't exist in Lucide, use a word. Do not draw one.
- **No icon font, no sprite sheet, no PNG icons.** The only bitmap in the system is the supplied key visual.
- **Emoji: never.** See Content Fundamentals.
- **Unicode as icons:** only `→` (inline link affordance), `×` (dismiss, when a glyph would be too heavy), `·` (separator). Nothing else.
- **The brand mark is not an icon.** `assets/logo/mark.svg` is used at 20px+ in lockups and as a large graphic element; it never appears inline in a sentence, in a button, or as a bullet.

---

## Using this system

```html
<link rel="stylesheet" href="styles.css">
```

```jsx
const { Button, Card, PatternPanel } = window.DabdabDesignSystem_57775b;

<PatternPanel tone="brand" strength={0.1} squared>
  <h1>One dab, exactly where it hurts</h1>
  <Button iconRight="arrow-up-right">Start a project</Button>
</PatternPanel>
```

Rules of thumb: one primary button per view · one textured surface per view · sentence case everywhere · yellow means "here" or "this one" · never mix hairline and 2px borders on the same element · never white text on yellow.
