## 1. Canvas Structure

- [x] 1.1 Replace the obvious desktop grid composition in `frontend/src/App.tsx` with a full-viewport relative spatial canvas.
- [x] 1.2 Reposition the name, subtitle, introduction, and avatar into an asymmetric identity cluster with intentional offset or overlap.
- [x] 1.3 Move the active card switcher into a floating stage that is offset from the identity cluster rather than aligned as a right column.
- [x] 1.4 Preserve `h-dvh` and body-level overflow constraints while changing the layout structure.

## 2. Layered Glass And Background Atmosphere

- [x] 2.1 Add layered glass planes behind and around the identity and active-card regions.
- [x] 2.2 Strengthen the background with graphite texture, subtle geometric depth, and restrained mint/gold atmosphere.
- [x] 2.3 Add a lightweight connector layer using decorative lines, arcs, or geometry between identity content and the card stage.
- [x] 2.4 Ensure decorative background and connector elements use `pointer-events-none` and do not create accessibility noise.
- [x] 2.5 Respect reduced-motion preferences for any connector shimmer, floating drift, or background movement.

## 3. Floating Card Echoes

- [x] 3.1 Add bounded decorative card echoes near the active card stage without making them interactive.
- [x] 3.2 Derive echoes from available card data or stable abstract placeholders while capping the number shown.
- [x] 3.3 Style echoes as lower-emphasis glass fragments so the active card remains the clear interaction target.
- [x] 3.4 Ensure decorative echoes do not add links, buttons, tab stops, or layout requirements for every future card.

## 4. Active Card Stage Preservation

- [x] 4.1 Keep the active card switcher stage fixed-size across all known card variants.
- [x] 4.2 Preserve local next/previous card animation within the active stage only.
- [x] 4.3 Preserve infinite loop behavior in both directions.
- [x] 4.4 Preserve hover and keyboard focus feedback for the active card and controls.
- [x] 4.5 Adjust active card glass styling if needed so it fits the new layered canvas without reintroducing repeated generic icon chrome.

## 5. Responsive Composition

- [x] 5.1 Create a desktop layout with visible spatial depth, overlap, and non-grid rhythm.
- [x] 5.2 Create a mobile layout that compresses the asymmetric composition into one readable viewport.
- [x] 5.3 Reduce or hide decorative echoes on mobile if needed to prevent overflow and preserve QR clarity.
- [x] 5.4 Verify desktop and mobile layouts do not visually read as a flat text block beside a flat card block.

## 6. Verification

- [x] 6.1 Run `go test ./...`.
- [x] 6.2 Run the frontend build command.
- [x] 6.3 Verify supported desktop and mobile viewports have no body-level scrollbar.
- [x] 6.4 Verify active card dimensions remain stable while switching through GitHub, Xiaohongshu, WeChat, and fallback data.
- [x] 6.5 Verify decorative echoes are not keyboard-focusable and do not expose extra actionable controls.
- [x] 6.6 Verify the rendered UI avoids forbidden technical labels, traditional emoji decoration, dominant blue-purple AI-gradient styling, and generic component-library chrome.
