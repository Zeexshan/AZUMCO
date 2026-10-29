# Implementation Plan: Eradicate AI Slop & Refine Azumco Agency Website

## Overview
This plan removes the 10 classic AI slop design patterns identified across vibe-coded sites and establishes a restrained, product-focused digital agency presence inspired by Apple marketing standards and editorial craftsmanship.

---

## Targeted File
- **File**: `/src/App.tsx`
- **Scope**: Direct surgical replacement of AI slop elements while preserving all business functionality, interactive booking flows, audit calculators, and lead intake forms.

---

## Key Changes & De-sloppification Matrix

### 1. Header & Navigation
- **Remove**: Pulsing green dot next to the logo (`animate-pulse`).
- **Remove**: Overly rounded pill button treatments.
- **Implement**: Clean, architectural navigation bar with the embedded Azumco logo, concise links, and a solid high-contrast "Schedule Briefing" CTA.

### 2. Hero Section
- **Remove**: Sparkle icon pill badge (`border-orange-500/30 rounded-full text-xs` with `<Sparkles />`).
- **Remove**: Abstract 3D particle canvas (`Hero3DCanvas`) with rotating glowing dots.
- **Remove**: Formulaic dual-contrast copy ("From the first line of code... Most agencies only do marketing...").
- **Implement**:
  - Direct, confident headline: "We build high-performance web applications and search dominance for ambitious companies."
  - Replaced hero visual: An interactive **Live Deliverable Showcase** with switchable tabs (`High-Velocity Web App`, `Organic Search Engine`, `Conversion Pipeline`) demonstrating real interfaces, measurable speed scores, and realistic analytics dashboards rather than decorative floating geometry.

### 3. Proof & Engineering Showcase
- **Remove**: Decorative fake code-comment headers (`// Azumco Engineering Stack: Modular & High-Performance`, `// Status: ✓ Build verified...`).
- **Remove**: Generic glowing radial background orbs.
- **Implement**: Clean editorial technical specification and architectural deliverables breakdown with structured typography and clear capability metrics.

### 4. Service Pillars & Packages
- **Remove**: Uniform 3-card icon grid with checkmark bullets and floating "Recommended" pill badge.
- **Implement**: Asymmetric layout giving flagship full-stack engineering the dominant visual footprint, supported by concise scope specifications, deliverables checklists, and clear engagement terms.

### 5. Interaction & Motion Discipline
- **Refinement**: Eliminate unanchored hover scale transitions on every element. Retain crisp, deliberate micro-interactions, responsive mobile menus, and the interactive project estimation drawer.

---

## Verification & Safety Check
- Run TypeScript lint check (`lint_applet`) to ensure zero typing errors.
- Run `compile_applet` to verify clean build.
- Touch only `/src/App.tsx`; no changes to packages, configuration, or environment files.
