---
name: RoadMind Enterprise
colors:
  surface: '#faf9fd'
  surface-dim: '#dbd9dd'
  surface-bright: '#faf9fd'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f4f3f7'
  surface-container: '#efedf1'
  surface-container-high: '#e9e7eb'
  surface-container-highest: '#e3e2e6'
  on-surface: '#1a1b1e'
  on-surface-variant: '#414754'
  inverse-surface: '#2f3033'
  inverse-on-surface: '#f1f0f4'
  outline: '#727785'
  outline-variant: '#c1c6d6'
  surface-tint: '#005bc0'
  primary: '#005bbf'
  on-primary: '#ffffff'
  primary-container: '#1a73e8'
  on-primary-container: '#ffffff'
  inverse-primary: '#adc7ff'
  secondary: '#005ac1'
  on-secondary: '#ffffff'
  secondary-container: '#4d8efe'
  on-secondary-container: '#00285c'
  tertiary: '#9e4300'
  on-tertiary: '#ffffff'
  tertiary-container: '#c55500'
  on-tertiary-container: '#0e0200'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d8e2ff'
  primary-fixed-dim: '#adc7ff'
  on-primary-fixed: '#001a41'
  on-primary-fixed-variant: '#004493'
  secondary-fixed: '#d8e2ff'
  secondary-fixed-dim: '#adc6ff'
  on-secondary-fixed: '#001a41'
  on-secondary-fixed-variant: '#004494'
  tertiary-fixed: '#ffdbcb'
  tertiary-fixed-dim: '#ffb691'
  on-tertiary-fixed: '#341100'
  on-tertiary-fixed-variant: '#783100'
  background: '#faf9fd'
  on-background: '#1a1b1e'
  surface-variant: '#e3e2e6'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '500'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.02em
  code:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 4px
  xs: 8px
  sm: 16px
  md: 24px
  lg: 32px
  xl: 48px
  container-max: 1440px
  gutter: 24px
---

## Brand & Style

The design system is anchored in a philosophy of **Intelligent Precision**. It targets enterprise stakeholders and government agencies in the road safety sector, demanding a UI that feels authoritative, dependable, and technologically advanced without being overwhelming.

The aesthetic follows a **Corporate / Modern** direction, drawing heavily from the refined clarity of modern enterprise software. It prioritizes "information density with breathability"—ensuring complex data is digestible through generous whitespace and a strict mathematical grid. The emotional response should be one of "calm control" and "total reliability." Visual noise is intentionally minimized to allow critical road safety alerts and data insights to take center stage.

## Colors

The palette is functional and restrained, utilizing a "Google-inspired" logic where color is a tool for orientation rather than decoration.

- **Primary Blue (#1A73E8):** Reserved strictly for primary actions, active states, and critical navigation markers.
- **Surface Neutrals:** Pure white (#FFFFFF) is the base for all workspaces. Soft light gray (#F8F9FA) is used for sidebars, secondary content areas, and card backgrounds to create subtle structural contrast.
- **Typography & Icons:** Dark gray (#202124) ensures high legibility and a professional tone, replacing pure black to reduce eye strain during long-term monitoring tasks.
- **Status Indicators (Functional):** Use standard semantic colors (Success: #1E8E3E, Warning: #F9AB00, Error: #D93025) but only in small doses like status dots or thin borders.

## Typography

This design system utilizes **Inter** exclusively to achieve a systematic, utilitarian aesthetic. It is a typeface designed for screens, providing exceptional legibility at small sizes—crucial for data-heavy road safety dashboards.

- **Scale:** A tight modular scale ensures hierarchical clarity. 
- **Weights:** Use 'Medium' (500) for subheaders and 'Semi-Bold' (600) for section titles to create emphasis without excessive visual weight.
- **Readability:** Body text uses a standard 16px base with 1.5x line spacing to maintain a "lightweight" feel even in text-heavy reports.

## Layout & Spacing

The layout follows a **Fluid Grid** model with a maximum container width to prevent line lengths from becoming unreadable on ultra-wide monitors.

- **Rhythm:** An 8px linear scale (4px for micro-adjustments) governs all margins and padding. 
- **Desktop:** 12-column grid with 24px gutters and 32px side margins.
- **Tablet:** 8-column grid with 20px gutters and 24px side margins.
- **Mobile:** 4-column grid with 16px gutters and 16px side margins.
- **Alignment:** All elements must align to the baseline grid. Navigation sidebars are fixed at 256px for consistency across the platform.

## Elevation & Depth

Hierarchy is established through **Tonal Layers** and extremely subtle **Ambient Shadows**. This design system avoids heavy shadows to maintain a flat, modern SaaS aesthetic.

- **Level 0 (Flat):** Main background (#FFFFFF) and secondary sections (#F8F9FA).
- **Level 1 (Low Elevation):** Used for cards and floating panels. Defined by a 1px solid border (#DADCE0) or a very soft shadow: `0px 1px 3px rgba(0, 0, 0, 0.05)`.
- **Level 2 (Active/Overlays):** Used for dropdowns and tooltips. Defined by a slightly more pronounced shadow: `0px 4px 12px rgba(0, 0, 0, 0.08)`.
- **Level 3 (Modals):** Centered dialogs with a `0px 12px 32px rgba(0, 0, 0, 0.12)` shadow and a 40% opacity neutral-dark overlay for the background.

## Shapes

The shape language is "Professional-Soft." Corners are rounded to remove the "sharpness" of traditional enterprise software while maintaining a structured, reliable look.

- **Standard UI Elements:** Buttons, input fields, and tags use an 8px radius (`rounded`).
- **Containers:** Large cards, dashboard widgets, and modals use a 12px radius (`rounded-lg`).
- **Icons:** Use a 2px stroke weight with slightly rounded caps and joins to match the typography's geometry.

## Components

### Buttons
- **Primary:** Solid #1A73E8 background, White text. 8px radius. No gradient.
- **Secondary:** White background, 1px #DADCE0 border, #1A73E8 text.
- **Tertiary (Ghost):** No background or border. #5F6368 text, turns #202124 on hover.

### Input Fields
- **Default State:** 1px #DADCE0 border, White background, 8px radius. 
- **Focus State:** 2px #1A73E8 border. Labels move to a "Floating Label" style or remain as clear, 12px Semi-Bold text above the field.

### Cards
- White background, 1px #DADCE0 border. 12px corner radius. Padding is strictly 24px (`md`) for internal content. Use "Surface" light gray for header areas within cards.

### Chips & Tags
- Pill-shaped (fully rounded). Background: #F1F3F4. Text: #3C4043. For status tags (e.g., "Active"), use a subtle tinted background (e.g., Light Green #E6F4EA with Dark Green #137333 text).

### Lists & Data Tables
- Clean lines only. No zebra striping. Use 1px #F1F3F4 horizontal dividers. Row height set to 52px for standard density and 40px for high-density views. Hover state uses #F8F9FA.

### Additional Components
- **Status Banners:** Full-width alerts at the top of pages for system-wide road safety updates.
- **KPI Widgets:** Large numerical display with a small sparkline chart, housed in a Level 1 card.