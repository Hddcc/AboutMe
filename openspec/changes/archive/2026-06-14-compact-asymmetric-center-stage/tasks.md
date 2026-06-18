## 1. Scope And Baseline Guardrails

- [x] 1.1 Record or verify the current `frontend/src/components/ContactCard.tsx` state before layout work.
- [x] 1.2 Confirm implementation scope is limited to `App.tsx` composition layers and optional noise reduction in `SignalBackground.tsx`.
- [x] 1.3 Preserve active card internals, data-driven switching, equal active dimensions, buttons, QR treatment, and platform-specific card content.

## 2. Center Stage Composition

- [x] 2.1 Introduce a centered desktop composition stage in `App.tsx` with width constrained between 1040px and 1180px.
- [x] 2.2 Reposition the identity section into the stage so desktop placement lands near x=14% to 20% and y=18% to 26% of the viewport.
- [x] 2.3 Reposition the active card stage inward and upward so desktop placement lands near x=55% to 66% and y=28% to 38% of the viewport.
- [x] 2.4 Reduce the desktop name size to roughly 75% to 85% of the current scale while keeping it readable as the primary identity heading.
- [x] 2.5 Arrange the introduction, short guide cue, and active card as a continuous reading path with visibly reduced central empty space.
- [x] 2.6 Preserve a compact asymmetric layout on mobile without adding body-level scrolling.

## 3. Active Card Focal Treatment

- [x] 3.1 Strengthen the active card as the clearest visual focal point using only outer stage treatment such as spotlight, glow, shadow, or wrapper emphasis.
- [x] 3.2 Avoid modifying `ContactCard.tsx` internal structure, internal typography, QR layout, buttons, or platform-specific content.
- [x] 3.3 Verify card switching animation remains local to the card stage and infinite in both directions.
- [x] 3.4 Verify active card dimensions remain stable across card types and switch transitions.

## 4. Decorative Layer Reduction

- [x] 4.1 Shrink the left identity glass plate by at least 30% and keep it close to the identity text block.
- [x] 4.2 Shrink the right background glass plate and position it as a local shadow layer behind or near the active card.
- [x] 4.3 Replace broad cross-canvas connector styling with at most one short, low-opacity diagonal guide cue no longer than 260px on desktop.
- [x] 4.4 Reduce decorative card echoes to at most one faint partial cue with opacity below 0.18.
- [x] 4.5 Ensure any retained echo is non-interactive, `aria-hidden`, outside tab order, and visually incomplete enough to avoid reading as another active card.
- [x] 4.6 Remove or reduce decorative layers that create a scattered floating experiment feeling.

## 5. Background Restraint

- [x] 5.1 If needed, lower grid, dot, diagonal texture, and ambient glow intensity in `SignalBackground.tsx`.
- [x] 5.2 Do not add new background decorative layers or new visual systems.
- [x] 5.3 Preserve dark technical atmosphere, restrained Aceternity-inspired glass, and reduced-motion behavior.

## 6. Verification

- [x] 6.1 Run `npm.cmd run build` in `frontend`.
- [x] 6.2 Run `go test ./...`.
- [x] 6.3 Verify desktop screenshot or visual inspection shows one compact center stage rather than separated left and right islands.
- [x] 6.4 Verify first-read hierarchy includes name, introduction, and active card, with the active card as the strongest focal point.
- [x] 6.5 Verify center empty space is visibly reduced compared with the archived refined layout.
- [x] 6.6 Verify forbidden demo labels, traditional emoji decoration, dominant blue-purple AI-gradient styling, and generic component-library chrome remain absent.
- [x] 6.7 Verify `ContactCard.tsx` is unchanged or only touched for non-visual maintenance.
