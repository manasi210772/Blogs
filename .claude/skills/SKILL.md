# Food Blog Design Specifications

## 🍔 Project Overview
A warm, rustic food blog dedicated to outside dining experiences including street foods, fine dining, fast foods, and desserts. The design prioritizes excellent text legibility, zero eye strain (completely avoiding dark, harsh shades of red and blue), and an unmistakable, food-centric layout utilizing transparent outline icons.

---

## 🎨 1. Colour Tokens
Formulated to ensure deep text clarity without resorting to stark blues or harsh, eye-straining red tones.

```css
:root {
  /* --- BACKGROUND & SURFACE (60%) --- */
  --color-bg-main: #FAF6F0;       /* Alabaster Warm Cream (gentle base canvas) */
  --color-surface-card: #F2EAE0;  /* Roasted Almond (soft container contrast) */
  --color-surface-input: #FFFFFF; /* Pure White (strictly reserved for form entries) */

  /* --- TEXT & CONTRAST (30%) --- */
  --color-text-primary: #2C1E11;  /* Espresso Charcoal (dark rich brown for elite legibility) */
  --color-text-muted: #5C4A37;    /* Soft Walnut (for dates and secondary metadata) */

  /* --- BRAND ACCENTS & ACTIONS (10%) --- */
  --color-accent-primary: #D97736;/* Terracotta Clay (appetite-stimulating button color) */
  --color-accent-hover: #BF5E1E;  /* Toasted Earth (deepening hue for hover states) */
  --color-border-dark: #2C1E11;   /* Used exclusively for fine-line icon strokes */
}
```

---

## 🗺️ 2. Navigation Header Icon Mapping
To ensure buttons and menu links look integrated, clean, and customized, use transparent stroke/linear borders matching the primary text color (`currentColor`) instead of colored emojis.

| Navigation Header | Lucide Icon Name | Phosphor Icon Name | Visual Design Concept |
| :--- | :--- | :--- | :--- |
| **Home / Feed** | `utensils` | `utensils` | A classic crossed fork and knife that acts as the universal signal for a dining log. |
| **Street Food** | `hop` or `skewers` | `skewers` | A skewer/kebab shape that instantly communicates street-side eating and dynamic small bites. |
| **Fine Dining** | `wine` or `glass-water` | `wine` | A clean, stemmed wine glass silhouette representing refined tables and upscale experiences. |
| **Fast Foods** | `sandwich` or `pizza` | `hamburger` | A crisp burger or sandwich outline with distinctive layer boundaries. |
| **Desserts** | `cake` | `cake` | A slice of cake or pastry outline with structural layered detailing. |

---

## font-size-display | `3.157rem` (~50px) | `1.15` | 700 (Bold) | Hero Titles / Major Section Headers |
| **`font-size-h1`** | `2.369rem` (~38px) | `1.2` | 700 (Bold) | Blog Post Article Titles |
| **`font-size-h2`** | `1.777rem` (~28px) | `1.25` | 600 (Semi-Bold) | Card Titles / Sidebar Headers |
| **`font-size-h3`** | `1.333rem` (~21px) | `1.3` | 600 (Semi-Bold) | Subheadings inside a review |
| **`font-size-body`** | `1.000rem` (~16px) | `1.6` | 400 (Regular) | Main Review Text (highly visible) |
| **`font-size-small`** | `0.750rem` (~12px) | `1.4` | 500 (Medium) | Button labels, categories, metadata |

---

## 📏 4. Spacing System
An **8pt fluid grid spacing system** ensures that headings, food imagery, and cards have plenty of room to breathe. Generous white space prevents the warm background colors from looking muddy or cluttered.

*   **`space-xs` (4px):** Micro-alignments (spacing between a hollow food icon and its text label).
*   **`space-sm` (8px):** Tight elements (padding inside small tags, spacing between meta-tags).
*   **`space-md` (16px):** Standard inline spacing (padding inside mobile cards, gap between structural elements).
*   **`space-lg` (24px):** Regular component layouts (padding inside desktop cards, gaps between form fields).
*   **`space-xl` (48px):** Section blocks (vertical spacing separating major content sections).

---

## 🧱 5. Component Patterns

### A. Button States
Buttons feature transparent outline food icons. The icon's border stroke automatically takes the color of the text via CSS `currentColor`.
*   **Default State:** Solid Terracotta background (`--color-accent-primary`), high-contrast text and icon borders matching the base cream (`--color-bg-main`).
*   **Hover State:** Shifts smoothly to Toasted Earth (`--color-accent-hover`) with a slight upward translation (`transform: translateY(-2px)`) to indicate interactivity.
*   **Focus / Active State:** Accompanied by a clean, distinct focus ring (`outline: 3px solid var(--color-text-primary)`).

### B. Card Structure (The Outside Food Review Card)
*   **Container:** Surface color is Roasted Almond (`--color-surface-card`), avoiding sharp modern shadows. Uses a natural, soft `border-radius: 12px` and `padding: var(--space-lg)`.
*   **Header Tier:** Features a small metadata line utilizing `--color-text-muted`, followed by the review title using `--color-text-primary` at `font-size-h2`.
*   **Content Tier:** High-visibility body text detailing your location find.
*   **Footer Tier:** Houses the action button inline with a transparent line icon border.

### C. Form Layouts (Search & Newsletter Sign-ups)
*   **Inputs:** Block-level text fields styled with a white background (`--color-surface-input`) to isolate search queries sharply against the cream layout. 
*   **Borders:** Structured with a clean line frame (`1.5px solid var(--color-text-muted)`). When a user clicks or taps into an input field, the border smoothly transitions to match the primary `--color-accent-primary` text token to emphasize active text entry.

---

## 🚫 6. Instructions to Avoid a Generic "AI Aesthetic"
Many automated AI web layouts feel cold, clinical, and corporate. To ensure your site feels deeply personal, human, and genuinely screams food, implement these specific anti-AI layout strategies:

*   **Ban Symmetric "SaaS" Grids:** Avoid the classic tech layout of three perfectly identical, sterile column cards with rounded icons in colored circles. Instead, alternate your review layouts. Let a major street food review span full-width, followed by an off-center two-column layout for fast food and desserts.
*   **Ditch Perfectly Circular Component Elements:** Standard software components use pill-shaped buttons with fully round borders. Keep your corners organic and slightly stylized—aim for a subtle `6px` to `12px` border radius across buttons and card structures rather than corporate pill shapes.
*   **Emphasize Asymmetric "Scrapbook" Photo Placements:** Do not place all your food photographs into rigid, uniformly sized squares. Let your fine-dining review feature a prominent vertical layout, while your street food entry displays overlapping snapshots with slightly thick, warm borders. 
*   **Enforce Asymmetrical Text-to-Icon Spacing:** AI blocks place abstract, colorful flat vectors directly over text blocks. By keeping your icons directly nested inline right next to your actionable typography labels (e.g., using `display: inline-flex` with a tight `gap: 8px`), your custom iconography reads as an intentional, functional element of the text itself.