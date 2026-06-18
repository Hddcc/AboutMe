## Why

The current carousel still uses blog-post card content and layout, so each card feels inconsistent in a way that comes from mismatched source imagery and article metadata rather than intentional personal link design. The homepage should present Yufeng Zhang's platform destinations as recognizable, visitor-friendly cards for Bilibili, NetEase Cloud Music, GitHub, Xiaohongshu, email, and future additions.

## What Changes

- Replace the featured-blog card content model with a platform-link card model.
- Keep every carousel card's outer footprint consistent while allowing each known platform to have a tailored interior design.
- Add platform-specific card treatments for Bilibili, NetEase Cloud Music, GitHub, Xiaohongshu, and email.
- Preserve extra carousel cards as generic or coming-soon entries instead of removing them.
- Keep the existing one-viewport page constraint, no body-level scrollbar, horizontal carousel rhythm, hover/focus feedback, and responsive fit.
- Do not add new backend services, authentication, live platform API integrations, or editable profile management.

## Capabilities

### New Capabilities

- None.

### Modified Capabilities

- `personal-blog-homepage`: Change the carousel from cloned blog article cards into platform-aware personal link cards with consistent outer sizing and platform-specific interiors.

## Impact

- Affects `frontend/src/App.tsx` card data, card rendering logic, and platform-specific card interior components.
- May affect `frontend/src/styles.css` carousel animation timing, card visual helpers, and responsive fit rules.
- No database, API, dependency, routing, or deployment changes are expected.
