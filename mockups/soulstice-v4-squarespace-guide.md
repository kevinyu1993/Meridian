# Soulstice V4 Hero — Squarespace Build Guide

Step-by-step instructions for implementing the V4 hero on `soulstice.io` in Squarespace 7.1. Designed to be followed linearly while the editor is open.

Estimated time: **30–45 minutes**.

---

## Copy-paste strings (grab these first)

Open these in a separate tab or paste them into Notes — you'll reach for them several times.

**Eyebrow text:**
```
VIRTUAL THERAPY  ·  CA · NY · AZ · IL
```

**Heading 1** (two lines — hit Enter in Squarespace between them):
```
Doing well on paper.
Carrying more than that.
```

**Subhead:**
```
Therapy for working professionals — through career changes, work-life stress, and relationships. Individual, couples, and family sessions, with therapists who've lived the same transitions.
```

**Header CTA — change label:**
```
Patient Portal
```
Link to: your patient portal URL (SimplePractice client portal, or whatever EHR you use).

**Hero primary button:**
```
Book a free consult
```
Link to: your 15-min consult scheduler (Calendly link, intake form, or `/contact`).

**Hero secondary button:**
```
Meet our therapists
```
Link to: `/team`

> Two distinct funnels: header **Patient Portal** is for returning clients (utility); hero **Book a free consult** is the conversion CTA for new prospects; hero **Meet our therapists** is the discovery path that earns the "therapists who've lived the same transitions" promise. No redundancy.

---

## Before you start

You'll need:
- A **sunrise photo** ready to upload — or skip and use Squarespace's built-in Unsplash search (Step 5)
- A **white version of the Soulstice logo** (transparent PNG, ~400px wide) for use on the dark hero
- Access to **Site Styles** and the **Home page** in edit mode

If you don't have a white logo, you can generate one quickly: open your existing logo in any image tool, invert colors or replace the dark with white, export as PNG with transparent background.

---

## Step 1 — Update the header (transparency + Patient Portal label)

The header has to float over the hero photo, and the existing button needs to be relabeled.

**Path:** click anywhere on the header → **Edit Site Header** → **Style** tab.

| Setting | Value |
|---|---|
| Header Layout / Background | **Solid → opacity 0%** (or "Transparent") |
| Header text + icon colors | **White** |
| Reduce header on scroll | **ON** (so nav becomes readable once you scroll past the hero) |

While you're there: **Branding** tab → **Logo on Image** slot → upload the white version of the logo.

**Then relabel the header button:** click the button (or find it under **Elements** → **Button**). Change:
- Label: `Patient Portal`
- Link: your patient portal URL (SimplePractice / EHR / whichever you use)
- Style: keep lavender pill for consistency with current site — or switch to outline if you want to deweight it (Patient Portal is a utility action, so outline is also defensible)

Save the header settings.

---

## Step 2 — Replace the existing hero section

Open the Home page in edit mode. The current hero is the first section under the header.

1. Hover over the existing hero section
2. Click the gear icon → **Delete Section**
3. Confirm
4. Click **+ Add Section** where it was
5. Choose **Banner** template, or pick a blank section — either works

---

## Step 3 — Set the section background image

Click the new section → gear icon → **Edit Section** → **Background** tab.

1. **Image** → click upload area
2. Either upload your sunrise photo, **or** click the **Unsplash search icon** and search one of these:

| Search query | What to look for |
|---|---|
| `sunrise mountains` | Pink/orange sky with mountain silhouette — most cinematic |
| `sunrise sky pink purple` | Pure-sky color study, no horizon — abstract |
| `sunrise calm water` | Sky reflected in water — doubles the color, quieter |
| `golden hour window` | Warm light through a window — less literal "sunrise" |
| `palm sunrise pink` | Pink sky + palm silhouette — matches your brand-book reference |

3. After selecting: drag the **focal point** marker to where the warmest part of the sky is — that's what stays visible on mobile crops

**Avoid:** photos with people, strong centered subjects, cool/blue tones, or stock-y clichés (coffee cups, clock at 6am).

---

## Step 4 — Add a color overlay for legibility

Still in **Background** tab:

| Setting | Value |
|---|---|
| Color Overlay | **Enable** |
| Overlay Color | **Black** (`#000000`) |
| Overlay Opacity | **45–55%** (start at 50, adjust if text is hard to read) |

The mockup uses a softer overlay (~40%) because the gradient is doing some legibility work. With a real photo, 50% is usually right. If your sunrise is bright/contrasty, go up to 55. If it's muted, go down to 40.

---

## Step 5 — Set section dimensions and alignment

Still in **Edit Section**:

| Setting | Value |
|---|---|
| Width | **Full width** |
| Height | **Large** (or custom: ~85vh / ~720px) |
| Content Alignment | **Center / Center** (both horizontal and vertical) |
| Section Padding | Default — usually fine |

---

## Step 6 — Add the content blocks

Inside the section, add blocks in this order. All center-aligned. All white text.

### 6a. Eyebrow (small caps line above the headline)

Add a **Text block**. Paste:
```
VIRTUAL THERAPY  ·  CA · NY · AZ · IL
```

Highlight the text and apply these styles (via the text formatting toolbar or Site Styles):
- Font: **Montserrat Medium (500)** or **Semibold (600)**
- Size: **12px**
- Letter-spacing: **3.5px** (the property called "Letter Spacing" in Site Styles → Fonts)
- Color: **Peach `#FDB99B`**
- Case: **ALL CAPS** (or just type them in caps as shown)

Add ~28px of bottom margin (space below) before the next block.

### 6b. Heading 1

Add another **Text block** → format the line as **Heading 1**. Paste:
```
Doing well on paper.
Carrying more than that.
```
(Hit Enter between the two sentences for the line break.)

Style:
- Font: **Montserrat ExtraBold (800)** — or **Bold (700)** if 800 isn't available in your Site Styles font picker
- Size: **72px** desktop / Squarespace will auto-scale to ~44px on mobile
- Letter-spacing: **-0.025em** (slight negative tracking for tighter type)
- Color: **White (`#FFFFFF`)**
- Line height: **1.05**

### 6c. Subhead

Another **Text block** → format as **Paragraph 1** (or just paragraph). Paste:
```
Therapy for working professionals — through career changes, work-life stress, and relationships. Individual, couples, and family sessions, with therapists who've lived the same transitions.
```

Style:
- Font: **Montserrat Regular (400)**
- Size: **19px**
- Color: **White at 88% opacity** — use `rgba(255,255,255,0.88)` if Squarespace's color picker supports it, otherwise just `#E5E5E5`
- Max width: **680px** (Squarespace lets you set block width — slim it down so it doesn't span the whole screen)
- Line height: **1.55**

### 6d. CTAs — two buttons

Add a **Button Group block** (one block, two buttons) — or two **Button blocks** side by side.

**Primary button:**
- Label: `Book a free consult`
- Link: your 15-min consult scheduler URL
- Style: **Primary / Solid**
- Color: **Lavender `#CF8BF3`**
- Text color: **White**
- Padding: ~17px vertical

**Secondary button:**
- Label: `Meet our therapists`
- Link: `/team`
- Style: **Tertiary / Outline** (transparent background)
- Border: **1.5px white**
- Text color: **White**

> The header now says **Patient Portal** (for returning clients), so the hero is free to push toward new-prospect actions: the free consult is the soft conversion, the Team page is the discovery path.

---

## Step 7 — Lock fonts in Site Styles

**Path:** Site Styles (paint roller icon, top of editor) → **Fonts**.

- **Headings** → Montserrat → Weight **700 or 800**
- **Paragraph** → Montserrat → Weight **400**
- **Buttons** → Montserrat → Weight **600**, letter-spacing **0.5px**

Your brand book already specifies Montserrat — this is just confirming it's the active font everywhere.

---

## Step 8 — Mobile pass

Switch to **mobile view** (phone icon at the top of the editor).

Check:
- [ ] H1 doesn't break awkwardly — should stack as two lines naturally
- [ ] Subhead wraps cleanly (no orphan words on their own line if possible)
- [ ] Buttons stack vertically — that's fine
- [ ] Eyebrow doesn't get cut off — may need to drop letter-spacing slightly on mobile
- [ ] Photo focal point still shows the sunrise — re-set if needed

If anything looks off, Squarespace lets you set mobile-specific overrides on most settings.

---

## Step 9 — Save and review

- **Save** (top right of editor)
- Click **Preview** → open in a new tab and visit the home URL
- Check on actual desktop + actual phone (not just the editor preview — they sometimes differ)
- Scroll past the hero to make sure the header transitions to readable nav

---

## Common gotchas

| Problem | Fix |
|---|---|
| White nav invisible on light sections below hero | Make sure "Reduce header on scroll" is ON in header settings |
| Logo invisible on the dark hero | Upload white logo to the **Logo on Image** slot specifically (separate from the regular logo slot) |
| Text unreadable on photo | Increase color overlay opacity to 55–60%, or pick a darker photo |
| H1 wraps weird on tablet | Adjust the Site Styles base size, or set the H1 block's max-width manually |
| Buttons uneven spacing | Use a Button Group block (single block) instead of two separate Button blocks |
| Photo crops awkwardly on mobile | Re-set the focal point — drag the marker to the part of the photo you want to stay visible at narrow widths |

---

## What's not in this guide

- **The rest of the homepage sections** ("Why Soulstice", sub-banner, 3-up, insurance, footer) — those use the copy from the earlier polish rewrite, not changed here. Once the hero is live, ping me and we'll move on to those.
- **The Team page foregrounding the career-switcher therapists.** Important for the new positioning to actually pay off — the hero promises "therapists who've lived the same transitions," and the Team page has to deliver. Separate task.
- **Meta title / SEO description** for the homepage. Worth updating to match the new positioning. Can do in a separate pass.

---

When you sit down to do this, screenshot anything that doesn't match what's described here and drop it in chat. I'll tell you which menu to dig into.
