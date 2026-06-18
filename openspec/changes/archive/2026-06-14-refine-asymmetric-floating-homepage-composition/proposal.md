## Why

The current asymmetric homepage has gained spatial depth, but it now feels too dispersed and visually experimental. This change refines the composition into a controlled asymmetric glass layout with a clear center of gravity, preserving the active card design while making the page calmer, cleaner, and more premium.

## What Changes

- Rebalance the page around a clear diagonal composition line from the identity area to the main active card.
- Keep the active card's internal design, proportions, buttons, content layout, and glass material unchanged.
- Move the main card upward into a right-middle focal position so the page weight does not collapse into the lower-right corner.
- Reduce decorative preview cards to at most two small, low-opacity background echoes.
- Replace long or bright connector paths with one restrained low-opacity guide line.
- Reduce the name size to a controlled hero-title scale and keep the introduction compact near the identity area.
- Lower background noise by simplifying glass planes, grid intensity, dots, and glow layers.
- Preserve the single-screen, no-scroll, data-driven card switcher, infinite loop, accessibility, and visitor-facing language requirements.

## Capabilities

### New Capabilities

- None.

### Modified Capabilities

- `personal-blog-homepage`: Refine the asymmetric floating homepage requirements so the layout has a controlled diagonal visual center, restrained decoration, and protected active-card internals.

## Impact

- Updates layout, spacing, and decorative layer structure in `frontend/src/App.tsx`.
- Updates background intensity and atmosphere in `frontend/src/components/SignalBackground.tsx`.
- May adjust the outer placement or wrapper emphasis of `frontend/src/components/CardSwitcher.tsx`.
- Does not redesign `frontend/src/components/ContactCard.tsx` card interiors.
- Does not require backend API changes or new dependencies.
