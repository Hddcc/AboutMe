## Why

The current upper-section clone still reads as a WAM Blog page because it retains the WAM navigation and generic marketing headline. This change personalizes the page into a compact one-screen profile hero while keeping the horizontal card carousel visual that was already built.

## What Changes

- Remove the top navigation row, including the WAM logo, navigation links, Contact Us button, mobile menu button, and mobile navigation overlay.
- Replace the marketing headline with a personal identity block that includes a circular avatar area, the name `Yufeng Zhang`, and a smaller personal introduction using the same font family.
- Rebalance the retained hero and carousel so the whole page fits within one viewport without body-level scrollbars on supported desktop and mobile viewports.
- Tune typography, card sizing, spacing, and vertical rhythm so the layout feels balanced rather than crowded or overly empty.

## Capabilities

### New Capabilities

- None.

### Modified Capabilities

- `personal-blog-homepage`: Update the upper-section-only homepage into a personalized avatar/name/bio hero with a fitted carousel and no page scrollbar.

## Impact

- Affects `frontend/src/App.tsx` page structure, identity content, removed navigation state/components, and carousel layout sizing.
- Affects `frontend/src/styles.css` global page height/overflow behavior and carousel animation sizing if needed.
- No backend, API, routing, or dependency changes are expected.
