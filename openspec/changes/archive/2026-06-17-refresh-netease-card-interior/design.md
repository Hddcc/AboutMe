## Context

The homepage carousel uses a shared `PlatformLinkCard` shell in `frontend/src/App.tsx`. Each known platform renders its own middle showcase frame through `PlatformInterior`, and the NetEase Cloud Music card currently uses `NetEaseInterior()` for a simple record-plus-bar treatment.

This change is intentionally narrow. The surrounding platform label, headline, description, handle, action, link destination, outer card dimensions, frame allocation, spacing, and hover/focus shell behavior remain unchanged. The refreshed design only affects the visual content inside the existing NetEase middle showcase frame.

The supplied reference shows a dark red NetEase Cloud Music showcase panel with a large vinyl record, platform title, equalizer motif, and heart-led slogan. The desired result is to use that visual as the content inside the existing middle showcase frame without changing the card shell or surrounding layout.

## Goals / Non-Goals

**Goals:**
- Make the NetEase Cloud Music showcase frame feel more intentional and platform-specific.
- Preserve the current card shell, allocated showcase dimensions, spacing, and existing visible card copy.
- Replace the hand-built CSS interior with a local screenshot-derived asset while preserving the current middle-frame allocation.
- Match the homepage's dark polished visual language with restrained red lighting and layered surfaces.
- Ensure the composition remains readable in both the compact mobile frame and the taller desktop frame.

**Non-Goals:**
- Changing the card headline, description, label, handle, action, link, or carousel data.
- Changing `PlatformLinkCard` dimensions, spacing, typography, hover/focus states, or card framework.
- Adding images, external assets, dependencies, runtime data, audio behavior, or real playback controls.
- Replacing the whole frame with a literal screenshot of NetEase Cloud Music.
- Modifying other platform card interiors.

## Decisions

### Use a local screenshot-derived showcase asset

`NetEaseInterior()` will keep the existing middle-frame container contract and render a local asset at `/assets/netease-cloud-music-showcase.png`. The asset is cropped to the red showcase panel itself, clipped by the existing rounded frame, and stretched to fill the middle frame without changing the frame's footprint.

This matches the user's request to replace the frame content with the supplied red panel while preserving the outer card layout.

Alternative considered:
- Rebuilding the full reference panel in CSS. A screenshot-derived asset is closer to the reference and avoids a large amount of fragile shape recreation.

### Preserve the card shell and surrounding spacing

The replacement must stay inside the `NetEaseInterior()` frame. `PlatformLinkCard`, the allocated frame height, surrounding margins, headline, description, handle, and action remain unchanged.

Alternative considered:
- Changing the shared frame dimensions to better match the screenshot. That would violate the layout constraint and affect the surrounding carousel card.

### Preserve the shared shell and frame allocation

The implementation should stay inside `NetEaseInterior()` and reuse the existing frame dimensions provided by the caller. The function may adjust its own internal padding, absolute decoration, and responsive sizing, but it should not require changes to the outer `PlatformLinkCard` layout.

Alternative considered:
- Increasing the middle-frame height for a closer match to the reference. That would violate the user's constraint and could affect carousel balance.

### Keep the asset local and static

The asset lives in `frontend/public/assets` and is served through the existing Vite public asset path. No new dependency, runtime fetch, or external image host is introduced.

Alternative considered:
- Linking to the temporary uploaded image path. That path is outside the app and would not be reliable after the local session.

## Risks / Trade-offs

- [Asset crop hides important content at some breakpoints] -> Crop to the red showcase panel and fill the existing middle frame predictably.
- [Asset text becomes small on mobile] -> Preserve the existing frame dimensions and accept the asset as decorative platform identity, with outer card copy still readable.
- [Red glow overpowers the outer card copy] -> Localize the strongest glow inside the frame and keep the frame background dark.
- [Interior accidentally shifts the card footprint] -> Limit changes to `NetEaseInterior()` and verify the allocated showcase frame still fits within current mobile and desktop heights.
