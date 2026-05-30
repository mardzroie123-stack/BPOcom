# LuckyAssist Pro - Project Constitution

This document defines the strict engineering constraints, architectural guidelines, and design systems for the **LuckyAssist Pro** website. Any AI agent or developer implementing features must follow these rules.

---

## 1. Core Engineering Principles
- **Semantic HTML**: Utilize native HTML5 elements (`<header>`, `<main>`, `<section>`, `<article>`, `<footer>`, `<button>`, `<nav>`) to maintain accessibility and structural clarity.
- **No Tailwind CSS**: Avoid Tailwind CSS or utility-first frameworks. Use **Vanilla CSS** with variables (`var(--...)`) for components.
- **No Heavy Frameworks**: Implement using Vanilla Javascript with modular ES modules. Do not import React, Vue, or Angular.
- **Modular Component Design**: Write custom JS files in `src/components/` that export render functions or class wrappers to build elements dynamically.
- **Accessibility (a11y)**:
  - Maintain WCAG AA standard contrast ratio (minimum 4.5:1 for body text).
  - Use `aria-expanded` for toggles/dropdowns.
  - Interactive elements must be keyboard-navigable (`tabindex`, Focus indicators).

---

## 2. Design System & CSS Variables

All CSS variables must be defined in `:root` inside `src/style.css` and reused across components.

### Brand Palette (Light Theme)
```css
:root {
  /* Brand Colors */
  --color-primary: #0F172A;
  --color-primary-glow: rgba(15, 23, 42, 0.15);
  --color-secondary: #2563EB;
  --color-secondary-glow: rgba(37, 99, 235, 0.45);

  /* Backgrounds & Surfaces */
  --color-bg: #FFFFFF;
  --color-surface: #F8FAFC;

  /* Text */
  --color-text: #334155;
  --color-text-muted: #94A3B8;

  /* Borders */
  --color-border: #E2E8F0;

  /* Accents */
  --color-accent-gold: #3B82F6;
  --color-accent-gold-glow: rgba(59, 130, 246, 0.35);
  --color-accent-teal: #38BDF8;
  --color-accent-teal-glow: rgba(56, 189, 248, 0.3);

  /* Fonts */
  --font-display: 'Outfit', sans-serif;
  --font-body: 'Plus Jakarta Sans', sans-serif;

  /* Spacing */
  --spacing-xs: 0.5rem;
  --spacing-sm: 1rem;
  --spacing-md: 1.5rem;
  --spacing-lg: 2.5rem;
  --spacing-xl: 5rem;

  /* Styling details */
  --border-radius-sm: 8px;
  --border-radius-md: 16px;
  --border-radius-lg: 24px;
  --glass-bg: rgba(30, 41, 59, 0.7);
  --glass-border: rgba(255, 255, 255, 0.08);
  --transition-speed: 0.3s;
}
```

### Visual Guidelines
- **Glassmorphism**: Use `backdrop-filter: blur(16px)` combined with subtle borders and shadows to represent floating panels.
- **Micro-Animations**:
  - Buttons must elevate on hover (`transform: translateY(-2px)`) and increase their shadow.
  - Hover states on links must use dynamic slide-in underlines.
  - Operational function cards must reveal details with smooth height/opacity transitions.
  - Savings calculations must transition numbers or bar widths smoothly.

---

## 3. Directory & File Organization
- Component logic lives in `src/components/`.
- CSS is centralized in `src/style.css` using organized sections.
- `src/main.js` is the central orchestrator responsible for loading components and initiating scroll/animation hooks.

---

## 4. Quality & Build Standards
- Clean compilation: Running `npm run build` must succeed without errors.
- Console hygiene: No active debug logging (`console.log`) in production code. Use standard error handlers (`console.error`).
