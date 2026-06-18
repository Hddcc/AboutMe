## Why

The current homepage still reads as a separated identity island and card island with too much empty space between them. This change rebuilds the composition into a compact asymmetric center stage so the identity content, introduction, guide cue, and active card feel like one connected product surface.

## What Changes

- Constrain the desktop main content into a centered stage between 1040px and 1180px wide instead of spreading across the full 16:9 canvas.
- Move the identity area closer to the visual center, targeting roughly x=14% to 20% and y=18% to 26% on desktop.
- Move the active contact card inward and upward, targeting roughly x=55% to 66% and y=28% to 38% on desktop.
- Make the active card the clearest visual focal point through a slightly stronger outer stage presence, spotlight, or glow while preserving `ContactCard.tsx` internals.
- Reduce the name size to roughly 75% to 85% of the current desktop scale.
- Shrink the identity glass plate by at least 30% and keep it close to the identity text block.
- Shrink the right-side background glass plate so it becomes a card-adjacent shadow layer instead of a competing color block.
- Remove the broad cross-canvas connector curve and allow at most one short, low-opacity diagonal guide line no longer than 260px.
- Reduce decorative card echoes to at most one faint, partial, low-opacity depth cue.
- Reduce center emptiness so the identity description, guide cue, and active card form a continuous reading path.

## Capabilities

### New Capabilities

- None.

### Modified Capabilities

- `personal-blog-homepage`: Tighten the asymmetric homepage requirements around a compact centered stage, stronger active-card focus, reduced decorative layers, and protected contact-card internals.

## Impact

- Updates layout, positioning, stage constraints, decorative glass, connector cue, and echo rendering in `frontend/src/App.tsx`.
- May adjust outer wrapper emphasis around `CardSwitcher` without changing active card internals or card data behavior.
- Allows only background noise reduction in `frontend/src/components/SignalBackground.tsx`.
- Does not modify `frontend/src/components/ContactCard.tsx` internal card design.
- Does not require backend API changes, new routes, new dependencies, or new user-facing sections.
