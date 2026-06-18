## 1. Scope Guardrails

- [x] 1.1 Confirm `frontend/src/components/ContactCard.tsx` active card interiors are not redesigned for this change.
- [x] 1.2 Preserve active card dimensions, content layout, buttons, QR presentation, and glass material.
- [x] 1.3 Limit implementation scope to layout placement, decorative layers, background atmosphere, connector guidance, and switcher stage positioning.

## 2. Controlled Diagonal Composition

- [x] 2.1 Reduce the desktop name size to a controlled hero-title scale.
- [x] 2.2 Keep subtitle and introduction compact near the identity area.
- [x] 2.3 Reposition the avatar, name, introduction, guide line, and active card around one implied diagonal composition line.
- [x] 2.4 Move the active card stage from lower-right toward right-middle or right-middle-high.
- [x] 2.5 Preserve a lightly asymmetric layout without returning to a plain two-column grid.

## 3. Decorative Echo Reduction

- [x] 3.1 Reduce decorative card echoes to no more than two.
- [x] 3.2 Make echoes smaller, lower-opacity, and lower-contrast than the active card.
- [x] 3.3 Ensure echoes remain non-interactive, `aria-hidden`, and outside the keyboard tab order.
- [x] 3.4 Keep mobile echoes hidden or extremely limited to protect readability and QR clarity.

## 4. Connector And Background Restraint

- [x] 4.1 Replace current connector paths with one short, low-opacity visual guide.
- [x] 4.2 Remove bright node-like dots and multi-curve connector styling.
- [x] 4.3 Reduce decorative glass plane count and opacity.
- [x] 4.4 Lower background grid, dot, diagonal texture, and glow intensity while preserving dark technical atmosphere.
- [x] 4.5 Respect reduced-motion preferences for any retained ambient movement.

## 5. Visual Hierarchy Verification

- [x] 5.1 Verify first-read hierarchy is name/avatar, introduction, then active card.
- [x] 5.2 Verify the active card remains the strongest right-side focal element.
- [x] 5.3 Verify decorative elements do not exceed primary content presence.
- [x] 5.4 Verify the page feels more controlled than the previous scattered layout while retaining more design depth than a plain two-column layout.

## 6. Regression Verification

- [x] 6.1 Run `go test ./...`.
- [x] 6.2 Run the frontend build command.
- [x] 6.3 Verify supported desktop and mobile viewports retain no body-level scrollbar.
- [x] 6.4 Verify active card dimensions remain stable across switching.
- [x] 6.5 Verify forbidden labels, traditional emoji decoration, dominant blue-purple AI-gradient styling, and generic component-library chrome are absent.
- [x] 6.6 Verify `ContactCard.tsx` card interior structure is unchanged or only touched for non-visual maintenance.
