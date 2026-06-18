## Why

The current NetEase Cloud Music middle showcase frame already signals music through a record and bars, but it feels comparatively plain beside the refreshed platform-specific card interiors. The user supplied a tighter visual direction: a dark red framed stage with a vinyl focal object and compact equalizer marks, while preserving the existing card shell and visible card copy.

## What Changes

- Refresh the NetEase Cloud Music card's middle showcase frame by using a local screenshot-derived visual asset inspired by the supplied reference.
- Keep the outer carousel card width, height, border radius, hover/focus behavior, middle-frame footprint, surrounding spacing, and existing card copy unchanged.
- Keep the showcase frame itself visual-only, without adding new text inside the frame.
- Adapt the composition to the current desktop and mobile showcase dimensions without introducing overflow, layout shifts, or body-level scrolling.
- Use the cropped screenshot-derived asset as the showcase content while keeping it clipped to the existing middle-frame dimensions.

## Capabilities

### New Capabilities

- None.

### Modified Capabilities

- `personal-blog-homepage`: refine the NetEase Cloud Music platform card interior so it keeps the shared card dimensions and existing card copy while using a screenshot-derived music showcase treatment.

## Impact

- Affected code: `frontend/src/App.tsx`
- Affected asset: `frontend/public/assets/netease-cloud-music-showcase.png`
- Affected UI surface: NetEase Cloud Music platform card middle showcase frame in the homepage carousel
- No backend, API, routing, dependency, or data-model changes
