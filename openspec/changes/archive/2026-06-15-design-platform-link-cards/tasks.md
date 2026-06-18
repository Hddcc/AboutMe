## 1. Card Data Model

- [x] 1.1 Replace the current blog-post carousel data with platform-link card data for Bilibili, NetEase Cloud Music, GitHub, Xiaohongshu, email, and retained extra cards.
- [x] 1.2 Define card fields for platform kind, label, headline, description, href, optional handle, optional image, and accent metadata.
- [x] 1.3 Ensure all configured card destinations use valid links or contact actions and have accessible text.

## 2. Shared Card Shell

- [x] 2.1 Refactor the carousel card component to use a shared outer shell for every platform card.
- [x] 2.2 Preserve consistent outer dimensions, border radius, hover feedback, focus feedback, and responsive sizing across all card kinds.
- [x] 2.3 Remove blog-specific visible metadata such as article dates, read times, and cloned article paths from the card UI.

## 3. Platform Interiors

- [x] 3.1 Implement a Bilibili card interior with video/play visual treatment and restrained pink-blue accents.
- [x] 3.2 Implement a NetEase Cloud Music card interior with music-oriented visual treatment and restrained red accents.
- [x] 3.3 Implement a GitHub card interior that presents projects or work in visitor-friendly language.
- [x] 3.4 Implement a Xiaohongshu card interior with note/image/tag-oriented presentation.
- [x] 3.5 Implement an email card interior with clear direct contact presentation.
- [x] 3.6 Implement a polished fallback interior for retained extra cards and future unknown card kinds.

## 4. Responsive Fit And Verification

- [x] 4.1 Tune card interior typography, spacing, and visual density for the existing no-scroll desktop and mobile page constraints.
- [x] 4.2 Run the frontend build to confirm the implementation compiles.
- [x] 4.3 Capture or inspect desktop and mobile views to verify no body-level scrollbar, no overlapping card content, and a balanced carousel appearance.
