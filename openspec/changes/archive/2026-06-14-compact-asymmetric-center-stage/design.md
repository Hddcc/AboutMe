## Context

The homepage has already moved away from a plain two-column layout, but the current composition still reads as two separated floating islands: identity content on the left and the contact card on the right. The center has too much empty space, while glass plates, echo cards, and the connector line still make the page feel dispersed.

The existing active card interiors are considered good enough for this change. The design work should happen around them: the stage, surrounding light, placement, background restraint, and reading path.

## Goals / Non-Goals

**Goals:**
- Rebuild the desktop composition around a centered stage that is 1040px to 1180px wide.
- Bring identity and active card close enough to feel like one compact asymmetric product surface.
- Make the active card the clearest focal point without redesigning `ContactCard.tsx`.
- Reduce the perceived center void by aligning identity description, a short guide cue, and the active card into one readable sequence.
- Shrink identity and right-side glass plates so they support content instead of forming large independent blocks.
- Reduce decorative card echoes to at most one faint partial cue.
- Lower background noise without adding new decorative layers.

**Non-Goals:**
- Redesigning GitHub, Xiaohongshu, WeChat, or fallback card interiors.
- Changing card data, backend profile APIs, routes, or assets.
- Adding article lists, navigation, scrolling sections, or new user interactions.
- Solving the composition through only opacity, scale, or tiny positional nudges.

## Decisions

### Introduce a centered composition stage

Use a desktop-only inner stage wrapper inside `main`, centered with a max width around 1120px and full viewport height. Place identity, connector cue, glass plates, echo, and card stage relative to this wrapper instead of positioning them directly against viewport edges.

Alternative considered: continue using viewport-based left/right offsets. That keeps the current mental model but preserves the large middle gap on wide screens.

### Move identity and card toward a shared center

Position the identity cluster around the left-center area of the stage and position the active card around the right-center area. The intended desktop viewport result is roughly x=14% to 20% for identity and x=55% to 66% for the active card, with the card y position around 28% to 38%.

Alternative considered: stack identity above the card in the center. That would create strong focus, but it would lose the asymmetry and spatial tension the homepage direction is aiming for.

### Make the card stage stronger through outer treatment

Increase the active card's visual dominance through the surrounding stage: a concentrated spotlight, tighter shadow layer, and possibly a modest wrapper-level scale or padding change. Keep `ContactCard.tsx` unchanged so card internals, QR presentation, action rows, and platform-specific layouts remain stable.

Alternative considered: enlarge or redesign the card internals. That would risk breaking the equal-size card contract and the card designs that the user explicitly wants to preserve.

### Replace broad decoration with local support layers

Shrink `CanvasGlass` into two small support layers: one near the identity content and one tucked behind the active card. Remove broad decorative plates that create separate islands. Keep connector guidance to one short, low-opacity diagonal line under 260px.

Alternative considered: remove all glass and connector decoration. That would be clean, but the page would lose too much of the desired Aceternity-inspired layered depth.

### Keep at most one incomplete echo

Render no more than one echo and make it feel like a partial trace or shadow, with opacity below 0.18. Avoid showing a complete readable mini-card with title text, because that competes with the active card and implies another interactive surface.

Alternative considered: keep one complete mini preview. That provides context for card switching, but the user's feedback points to removing the floating experiment feeling.

### Reduce background noise only

`SignalBackground.tsx` may lower opacity of grid, dots, diagonal texture, and ambient glow. It should not add new blobs, shapes, or decorative layers in this change.

Alternative considered: use a stronger background spotlight to solve focus. That could help the active card, but it risks adding another visual system instead of tightening the existing composition.

## Risks / Trade-offs

- Desktop stage may feel too compact on very wide monitors -> Use a max width near 1120px while keeping atmospheric background full-viewport.
- Card focus could overpower identity content -> Strengthen the card through glow and placement while keeping name and introduction readable.
- Wrapper-level card scaling could affect no-scroll behavior -> Prefer outer glow first, then modest scale only if viewport constraints remain safe.
- Reducing echo and glass layers may lower depth -> Preserve one partial echo and two local glass support layers.
- Mobile could become crowded if desktop positions leak downward -> Use breakpoint-specific layout and hide or greatly simplify echo on small screens.
- Static verification may miss visual balance -> Include build checks and, when available, screenshot review against the acceptance criteria.
