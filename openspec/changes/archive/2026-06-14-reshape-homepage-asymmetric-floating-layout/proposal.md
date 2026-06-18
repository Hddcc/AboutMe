## Why

The current homepage is polished but still reads as a conventional two-column composition, with identity content on one side and the card switcher on the other. The next iteration should turn the single viewport into a more memorable asymmetric floating canvas with layered glass, spatial overlap, and gentle connective motion while preserving the existing product constraints.

## What Changes

- Replace the desktop two-column grid feeling with an asymmetric single-screen composition where name, avatar, introduction, active card, and ambient preview layers occupy different depths and offsets.
- Introduce floating glass planes, subtle overlap, and non-uniform placement so the page feels closer to a modern digital gallery than a centered dashboard.
- Add fine luminous connector lines or orbit paths that visually relate the identity content to the card system without becoming a data-dashboard motif.
- Keep the active contact card as the only fully interactive card stage, with the same outer dimensions, local switching animation, hover/focus feedback, and infinite loop behavior.
- Add decorative inactive card previews or glass echoes around the active card to create spatial richness without changing switcher state or adding page scroll.
- Rework the mobile layout into a compressed vertical asymmetric composition that retains readability within one viewport.
- Preserve the existing dark graphite, mint, and gold visual direction while avoiding dominant blue-purple AI-gradient styling, traditional emoji, and generic component-library chrome.

## Capabilities

### New Capabilities

- None.

### Modified Capabilities

- `personal-blog-homepage`: Update homepage layout requirements from a connected two-region composition to an asymmetric floating glass canvas with layered depth, decorative card echoes, and non-grid spatial rhythm while preserving one-screen, equal-card, and local-switching constraints.

## Impact

- Updates React homepage composition in `frontend/src/App.tsx`.
- Likely updates or extends background and decorative layer components in `frontend/src/components/SignalBackground.tsx`.
- Updates `frontend/src/components/CardSwitcher.tsx` to support active-card placement within a floating stage and optional decorative card echoes.
- May require small class and structure updates in `frontend/src/components/ContactCard.tsx` so cards feel glassier and work when partially overlapped.
- Does not require backend API changes or new dependencies.
