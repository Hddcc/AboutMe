## 1. Refresh NetEase showcase composition

- [x] 1.1 Redesign `NetEaseInterior` in `frontend/src/App.tsx` so the middle showcase frame uses the local screenshot-derived NetEase Cloud Music showcase asset inspired by the supplied reference.
- [x] 1.2 Keep the new composition fully contained inside the existing shared showcase frame dimensions without changing `PlatformLinkCard`, carousel sizing, outer shell styling, or surrounding spacing.

## 2. Preserve copy and visual boundaries

- [x] 2.1 Preserve the existing NetEase card label, headline, description, handle, action, and link data without text edits.
- [x] 2.2 Keep the redesigned showcase frame visual-only, avoiding new wordmarks, slogans, captions, or extra text inside the frame.

## 3. Tune responsive visual fit

- [x] 3.1 Tune record size, equalizer spacing, red glow, borders, shadows, and dark surfaces so the frame reads cleanly at current mobile and desktop card sizes.
- [x] 3.2 Verify the NetEase card does not overlap content, create body-level scrolling, or visually disturb adjacent platform cards in the carousel.
