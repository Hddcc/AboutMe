## Why

The current WAM Blog clone includes the full lower-page experience, while the requested target only needs the upper composition shown in the reference image. Trimming the page to the header, hero headline, and horizontal featured-card carousel creates a tighter reproduction focused on the visible first section.

## What Changes

- Remove all content below the featured horizontal blog-card carousel from the current cloned homepage.
- Keep the WAM-style header/navigation, hero headline, black background, and horizontal featured blog cards.
- Preserve responsive behavior for desktop and mobile so the retained upper section remains polished and usable.
- Remove unused lower-page interactions such as filters, blog grid, load-more button, footer CTA, contact/footer links, and their supporting data/state.

## Capabilities

### New Capabilities

- None.

### Modified Capabilities

- `personal-blog-homepage`: Change the homepage requirement from a full cloned blog page to a focused WAM Blog upper-section reproduction.

## Impact

- Affects `frontend/src/App.tsx` page structure, component/data usage, and responsive behavior.
- May simplify `frontend/src/styles.css` if lower-page styles become unused.
- No backend, API, routing, or dependency changes are expected.
