## Why

The current Bilibili card interior reads as a generic video placeholder, so it does not carry the same platform-specific identity that the refreshed Xiaohongshu card now has. A stronger Bilibili-focused middle showcase frame will make the carousel feel more intentional while preserving the homepage's dark, polished presentation.

## What Changes

- Refresh the Bilibili card's middle showcase frame to use a more recognizable channel-style composition built around a circular avatar focal area, pink-led stage lighting, and small blue highlight accents.
- Keep the existing outer card shell, carousel footprint, headline block, and surrounding metadata structure unchanged so the update stays isolated inside the platform interior.
- Adapt the new Bilibili composition to the current interior frame dimensions on desktop and mobile breakpoints without introducing overflow or layout shifts.
- Reference the user-supplied avatar image as the focal graphic treatment, with a circular crop and simplified cutout treatment that stays visually integrated with the homepage's layered dark style.

## Capabilities

### New Capabilities
- None.

### Modified Capabilities
- `personal-blog-homepage`: refine the Bilibili platform card interior so it keeps the shared card dimensions while using a more recognizable avatar-led Bilibili showcase treatment with pink-blue brand cues that remain visually consistent with the homepage.

## Impact

- Affected code: `frontend/src/App.tsx`
- Affected UI surface: Bilibili platform card interior inside the homepage carousel
- Expected asset work: add or derive one local avatar-focused graphic asset for the Bilibili interior treatment
- No API, backend, or dependency changes
