## Context

The homepage currently meets the product-language and card-interaction requirements, but the composition still feels like a refined two-column layout. The identity section and card switcher are visually connected, yet their placement remains predictable: text and avatar on the left, one active card on the right.

The next design iteration should keep the same single-screen Go + React application and existing card data model while changing the frontend composition into a more expressive dark digital-gallery surface. The visual target combines three references: asymmetric floating placement, soft fluid connection, and layered glass geometry.

## Goals / Non-Goals

**Goals:**
- Make the first viewport feel like one asymmetric spatial canvas instead of a left/right grid.
- Create a sense of depth using glass planes, offset layers, slight overlap, glow, and background geometry.
- Keep the active card fixed-size, data-driven, keyboard-accessible, and locally animated.
- Add decorative card echoes or inactive glass previews to make the card system feel expandable without showing all cards as equal active choices.
- Preserve the no body-level scrollbar requirement on supported desktop and mobile viewports.
- Preserve the dark graphite, mint, and gold palette while avoiding dominant blue-purple AI-gradient styling.

**Non-Goals:**
- Adding more pages, article sections, CMS features, comments, analytics, or authentication.
- Showing every contact card as a fully interactive card at once.
- Introducing new third-party visual component libraries.
- Changing the Go API contract or requiring real personal assets before the layout works.

## Decisions

### Replace the page grid with a spatial canvas

The main layout should become a full-viewport relative canvas rather than an obvious desktop grid. Identity content, avatar, active card, controls, decorative card echoes, and glass layers can be absolutely positioned at different offsets for desktop, with responsive constraints for mobile.

On desktop, the name should anchor the upper-left or left-center region, while the active card floats right-center or lower-right with a deliberate offset. The avatar can become a smaller glass object that overlaps or sits near the identity copy rather than living inside a plain row.

Alternative considered: keep the existing grid and add decorative layers. This would improve texture but would preserve the exact two-box read that caused the issue.

### Keep one active card stage and make echoes decorative

The switcher should still own one active `ContactCard` at a fixed outer size. Surrounding glass cards should be decorative echoes derived from nearby card data or abstract platform hints. They should not create additional tab stops, links, or independent switching state.

This keeps future card additions safe: the active switcher loop remains the source of truth, while echoes can be generated from the same array or capped to a small count.

Alternative considered: fan out multiple real cards and let the active one expand. This adds complexity, creates responsive risk, and conflicts with the earlier requirement that cards are not all laid out flat.

### Use lightweight connector lines instead of dashboard wiring

Fine luminous lines, arcs, or SVG paths can connect the identity area to the active-card stage. They should feel like spatial composition guides, not graph edges or data-flow diagrams.

The connector layer should be pointer-events-none and should respect reduced-motion preferences. Motion can be limited to opacity drift or subtle path shimmer.

Alternative considered: no connectors. This is cleaner but can make the asymmetry feel accidental.

### Mobile becomes compressed asymmetry

Mobile should not try to preserve all desktop floating objects. The mobile composition should keep a strong top identity lockup, a slightly offset avatar or glass tile, and one active card stage below with one or two faint decorative layers. This keeps the page readable within one viewport.

Alternative considered: scale down the desktop canvas. That would likely make text, QR code, and controls too small.

### Strengthen glass material while preserving Aceternity inspiration

The new look should lean into Aceternity-style spotlights, glowing borders, animated gradients, and layered backgrounds, while using custom local components and Tailwind classes. Glass planes should use subtle blur, transparency, inner highlights, and graphite color variation rather than heavy borders.

Alternative considered: introduce a component package or prebuilt gallery template. That would weaken the custom feel and violate the no traditional component-library direction.

## Risks / Trade-offs

- Dense floating composition can cause mobile overflow -> Use breakpoint-specific object counts, smaller glass echoes, and strict `h-dvh overflow-hidden` constraints.
- Asymmetric placement can feel random -> Use a consistent diagonal flow from name to avatar to active card, plus restrained connector lines.
- Decorative echoes can confuse users if they look clickable -> Mark them `aria-hidden`, disable pointer events, lower opacity, and keep active controls visually clearer.
- More absolute positioning can be harder to maintain -> Keep positions grouped in a small number of named layout containers and avoid one-off magic for every element.
- Glass and blur effects can be expensive on low-end devices -> Keep blur radii modest, limit animated elements, and respect reduced-motion preferences.
