## Why

The homepage carousel currently shows a generic "More" placeholder card that reads like an unfinished public entry. The page needs to present only configured platform links today while keeping the existing card system ready for future additions.

## What Changes

- Hide placeholder, coming-soon, or draft platform cards from the public homepage carousel.
- Keep the data-driven card model and generic fallback renderer available for future card additions.
- Ensure the carousel still loops smoothly after the visible card count changes.
- Preserve the shared platform card shell, platform-specific interiors, hover/focus behavior, and one-viewport layout.

## Capabilities

### New Capabilities

- None.

### Modified Capabilities

- `personal-blog-homepage`: update carousel requirements so public rendering includes configured active platform cards and excludes placeholder/draft entries while retaining future card extension support.

## Impact

- Affected spec: `openspec/specs/personal-blog-homepage/spec.md`
- Affected UI code: `frontend/src/App.tsx`
- Affected CSS if needed: `frontend/src/styles.css` carousel drift timing and offsets
- No API, backend, or dependency changes expected.
