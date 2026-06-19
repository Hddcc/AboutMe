## Why

The homepage currently changes scale too abruptly across desktop window sizes and browser zoom defaults, causing some visitors to see an overcrowded, cropped composition instead of the intended relaxed first-screen layout. This change improves responsive consistency so PC and mobile visitors see a similar visual hierarchy while preserving the existing content, layout language, icons, copy, and images.

## What Changes

- Refine homepage responsive sizing so the hero avatar, title, introduction, carousel cards, interior frames, spacing, and arrow controls scale smoothly across supported viewport widths and heights.
- Add short-window desktop handling so laptop windows, high browser zoom, and shorter browser chrome do not trigger oversized desktop proportions.
- Keep the current one-viewport, navigation-free composition and platform carousel behavior.
- Preserve all existing platform card copy, visual interiors, links, icons, images, hover states, and focus states.
- Avoid introducing new dependencies, new page sections, or a different interaction model.

## Capabilities

### New Capabilities

### Modified Capabilities
- `personal-blog-homepage`: Strengthen responsive layout requirements for cross-browser, PC, mobile, and varied viewport-size consistency.

## Impact

- Affected code: `frontend/src/App.tsx`, `frontend/src/styles.css`.
- Affected UI: personalized identity hero, featured platform-card carousel, arrow controls, carousel spacing.
- APIs/dependencies: none.
- Validation: build the frontend and visually check representative desktop, short desktop, tablet/mobile, and narrow mobile viewport sizes.
