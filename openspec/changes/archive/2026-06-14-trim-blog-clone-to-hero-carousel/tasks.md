## 1. Trim Page Structure

- [x] 1.1 Remove the lower insights/filter/blog-grid/load-more/footer sections from `frontend/src/App.tsx`.
- [x] 1.2 Keep the header, hero headline, hero glow, featured-card carousel, and carousel arrow controls visible on the primary route.
- [x] 1.3 Ensure mobile navigation still opens and closes after lower sections are removed.

## 2. Clean Up Supporting Code

- [x] 2.1 Remove state, data arrays, and helper components used only by the removed lower sections.
- [x] 2.2 Keep retained featured-post data and card rendering intact.
- [x] 2.3 Adjust spacing or page height so the retained upper section matches the reference composition on desktop and mobile.

## 3. Verification

- [x] 3.1 Run `npm.cmd run build` in `frontend`.
- [x] 3.2 Capture or inspect desktop 1440x900 and mobile 390x844 views to confirm only the upper composition remains.
- [x] 3.3 Verify mobile menu and featured-card hover/focus feedback still work.
