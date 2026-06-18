## Context

The homepage now uses an asymmetric floating canvas with layered glass, connector paths, and decorative card echoes. The direction is stronger than the earlier two-column layout, but the current version can feel too scattered: the name is very large, the main card sits low, connector paths are long, and several glass/echo layers compete for attention.

This change refines the same design language into a calmer composition. The active card remains the product centerpiece and its internal design is treated as protected; the work is about the stage around it.

## Goals / Non-Goals

**Goals:**
- Keep the page asymmetric while creating a clear visual center and first-read order.
- Align identity content and the active card along one controlled diagonal composition line.
- Move the active card to a right-middle or right-middle-high position.
- Reduce decorative preview cards to at most two low-opacity background echoes.
- Reduce connector visuals to one restrained low-opacity guide line.
- Lower background noise while preserving dark grid, graphite atmosphere, and subtle mint/gold glow.
- Keep the active card internals, dimensions, buttons, content layout, and glass style intact.

**Non-Goals:**
- Redesigning GitHub, Xiaohongshu, WeChat, or fallback card interiors.
- Changing contact data, Go API behavior, routing, or assets.
- Adding new sections, scrolling, article pages, or extra interactions.
- Making the page symmetrical or returning to a plain two-column grid.

## Decisions

### Use a diagonal composition spine

The layout should be guided by one implied line from the upper-left identity cluster to the right-middle active card. The avatar, title, intro, subtle guide line, and card stage should sit near this spine, creating intentional flow.

Alternative considered: keep the current broader scattered canvas. That keeps visual drama, but it weakens the page's hierarchy and first-read clarity.

### Protect the active card internals

The active card component should not be redesigned. Changes may adjust the card switcher's outer placement or stage wrapper, but the platform card interiors, button/action rows, QR presentation, and content rhythm should remain intact.

Alternative considered: refine card interiors at the same time. That would blur the scope and risk losing the card design that already works.

### Reduce echoes to background depth only

Decorative echoes should be capped at two and made smaller, dimmer, and more obviously secondary. They should sit behind or near the active card as depth cues, not as competing cards.

Alternative considered: keep three echoes. This adds more spatial richness, but the current feedback points to excess visual dispersion.

### Replace connector paths with one guide line

The connector layer should become one short, low-opacity line or subtle diagonal streak. It should guide the eye without nodes, multiple curves, or data-dashboard energy.

Alternative considered: remove connector visuals entirely. That may be clean, but one restrained line helps the asymmetry feel designed.

### Lower background noise

The background should keep its dark grid and atmospheric glow, while reducing dot density, diagonal texture, and oversized glass planes. The result should feel premium and quiet.

Alternative considered: keep the current rich background. It creates depth, but competes with content and pushes the page toward visual experimentation.

## Risks / Trade-offs

- Over-correction can make the page plain -> Keep slight offsets, one guide line, and two quiet echoes.
- The active card may still feel low on small screens -> Use breakpoint-specific positioning and keep mobile preview echoes hidden or very limited.
- Reducing decoration may reduce perceived depth -> Preserve layered glass behind the identity and active-card zones with lower opacity.
- Protecting card internals limits visual polish options -> Treat the card stage and surrounding canvas as the polishing surface.
