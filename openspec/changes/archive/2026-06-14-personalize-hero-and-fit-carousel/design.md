## Context

The current primary route renders an upper-section-only WAM Blog-inspired page: fixed navigation/header, marketing headline, and horizontal featured-card carousel. The next iteration should remove the WAM brand/navigation layer and turn the first read into a personal identity block for Yufeng Zhang while keeping the carousel as the main visual asset.

The page must fit within one viewport after the change, which means the hero and carousel need to be treated as one composed surface rather than stacked sections that naturally overflow.

## Goals / Non-Goals

**Goals:**
- Remove all top navigation/header UI from the visible page.
- Replace the marketing headline with a circular avatar plus two-line identity text: a larger name and smaller personal introduction.
- Use the same font family for the name and introduction.
- Fit the complete page inside the viewport without body scrollbars on supported desktop and mobile sizes.
- Rebalance text scale, avatar size, carousel card size, and spacing so the page has even visual density.

**Non-Goals:**
- Adding authentication, profile editing, upload flows, or a real avatar management feature.
- Reworking blog-card data sources or adding new backend endpoints.
- Rebuilding the carousel interaction model beyond sizing and placement adjustments.

## Decisions

- Remove the `Header` component and mobile navigation state entirely.
  - Rationale: the requested visual removes the entire top row, so keeping hidden navigation code would add unused state and accessibility surface.
  - Alternative considered: hide the header with CSS. That would leave unnecessary code and mobile menu logic.

- Implement the hero as an identity block inside `App.tsx`.
  - Rationale: the page is currently a single focused component; adding a local identity block keeps the change scoped.
  - The avatar can use the existing placeholder asset initially, with a circular frame that can later accept a real image.

- Use a viewport-constrained layout.
  - Rationale: a single-screen goal is easiest to maintain if `main` owns `min-h`/`h` and `overflow-hidden`, with hero and carousel sized through responsive viewport-aware classes.
  - The carousel cards should shrink from the previous clone dimensions so the retained content fits comfortably.

## Risks / Trade-offs

- [Risk] Carousel cards may become too small on mobile → Mitigation: use a mobile-specific card height and text scale while preserving readable titles.
- [Risk] Removing the header leaves too much empty top space → Mitigation: move the identity block upward and use avatar/name/bio grouping as the first visual anchor.
- [Risk] No-scroll requirement conflicts with very small screens → Mitigation: tune for supported 390x844 mobile and 1440x900 desktop, and use responsive constraints for intermediate sizes.
