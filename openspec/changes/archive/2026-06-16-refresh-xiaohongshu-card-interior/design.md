## Context

The homepage carousel already uses a shared outer shell for all platform cards and separates platform-specific treatment inside each card interior. The current Xiaohongshu interior uses a left-image-right-text composition with note lines and tag chips, which fits the existing footprint but does not yet capture a recognizable Xiaohongshu-specific focal style.

This change is constrained to the Xiaohongshu card's middle showcase frame inside `frontend/src/App.tsx`. The outer card dimensions, surrounding title and metadata layout, and carousel behavior remain unchanged. The new interior should reference the supplied visual direction, especially the circular image-led focal area and bold Xiaohongshu wordmark feel, while staying consistent with the homepage's dark layered surfaces and restrained accent use.

## Goals / Non-Goals

**Goals:**
- Make the Xiaohongshu interior more recognizable at a glance through a stronger image-led composition.
- Keep the new treatment fully contained within the existing shared interior frame dimensions across breakpoints.
- Preserve alignment with the homepage's dark, polished, layered visual system instead of introducing a pasted-in external image look.
- Maintain a simple enough structure that remains readable at the current mobile card scale.

**Non-Goals:**
- Changing the shared outer shell, card width, card height, carousel spacing, or typography outside the Xiaohongshu interior.
- Replacing the interior with a literal screenshot or uploaded image asset.
- Reworking the card's headline, description, handle, or action copy.
- Introducing new dependencies, APIs, or data fields.

## Decisions

### Use an abstracted editorial-cover composition inside the existing frame

The Xiaohongshu interior will move from the current split note/tag layout to a composition centered on:
- a circular focal area on the left that reads like a photo window
- a bold Xiaohongshu wordmark-style text treatment on the right
- minimal supporting detail that preserves some note-oriented rhythm without crowding the frame

This approach keeps the strongest visual cues from the reference image while avoiding a direct asset substitution.

Alternative considered:
- Directly embedding the provided reference image. This was rejected because it would break style cohesion, make sizing brittle, and introduce a pasted-poster feel against the current dark homepage.

### Keep the existing interior frame box model and adapt composition within it

The implementation will keep the same middle showcase frame footprint already allocated by the shared card shell. The Xiaohongshu interior will adapt its internal layout within that area rather than changing the shell or asking the outer card to grow.

Alternative considered:
- Enlarging the Xiaohongshu interior or letting it exceed the current rhythm. This was rejected because the existing specs require stable card dimensions and balanced fit across cards.

### Translate the photo reference into layered CSS surfaces

The circular focal area should be built from layered gradients, masked panels, soft highlights, and simple structural shapes that suggest a photographic scene without depending on a real image. This keeps the result flexible, theme-aligned, and responsive.

Alternative considered:
- Keeping the current flat placeholder block and only swapping the right-side text. This was rejected because it would not meaningfully address recognizability.

### Use restrained brand-red emphasis inside the existing dark palette

The wordmark and supporting glow will use a Xiaohongshu-like red, but tuned to sit inside the page's darker black-red atmosphere. The background remains predominantly dark with subtle depth and localized red influence.

Alternative considered:
- A brighter full-brand panel background. This was rejected because it would dominate the carousel and weaken visual consistency with adjacent cards.

## Risks / Trade-offs

- [Reference becomes too literal] -> Build the composition from abstract layers and shapes rather than using a full image asset.
- [Recognizability drops too much after abstraction] -> Keep the two strongest cues intact: circular focal frame and bold Xiaohongshu wordmark placement.
- [Mobile scale becomes cramped] -> Reduce or hide minor supporting detail at smaller sizes while keeping the circle and wordmark as the primary read.
- [New composition feels disconnected from other cards] -> Preserve the shared interior border radius, layered dark surfaces, and restrained accent intensity already used across the carousel.
