## 1. Responsive Layout Audit

- [x] 1.1 Review current `frontend/src/App.tsx` hero, carousel, card shell, interior, and arrow-control sizing classes.
- [x] 1.2 Review `frontend/src/styles.css` carousel track, group gap, and animation spacing for assumptions tied to fixed card sizes.
- [x] 1.3 Identify the minimum and maximum safe visual bounds for desktop, short desktop, and mobile viewport categories.

## 2. Core Implementation

- [x] 2.1 Update the page frame and hero section sizing so vertical spacing adapts to both viewport width and viewport height.
- [x] 2.2 Replace abrupt hero avatar, title, and introduction desktop sizes with bounded fluid values while preserving the current visual hierarchy.
- [x] 2.3 Replace the platform card shell width, height, padding, border radius, and interior showcase height with shared bounded fluid values.
- [x] 2.4 Update platform-specific interior details that currently jump at `lg` so Bilibili, NetEase Cloud Music, GitHub, Xiaohongshu, email, and fallback interiors remain balanced inside the shared shell.
- [x] 2.5 Update arrow-control size and carousel control spacing so controls stay visible and proportionate on desktop, short desktop, and mobile viewports.
- [x] 2.6 Update `.featured-card-group` spacing in `frontend/src/styles.css` to use fluid gap and padding values that keep the infinite duplicated-track loop continuous.

## 3. Preservation Checks

- [x] 3.1 Confirm existing platform card copy, links, labels, descriptions, handles, images, and interaction affordances are unchanged.
- [x] 3.2 Confirm every active platform card keeps identical outer shell dimensions at each responsive state.
- [x] 3.3 Confirm no new dependencies, new visible sections, navigation elements, or runtime measurement logic were added.

## 4. Verification

- [x] 4.1 Run the frontend build.
- [x] 4.2 Visually inspect 1920x1080 and 1440x900 desktop viewports for the relaxed reference composition.
- [x] 4.3 Visually inspect 1366x768 and 1024x768 shorter desktop/tablet-like viewports for bounded scaling without primary-content cropping.
- [x] 4.4 Visually inspect 390x844 and 360x740 mobile viewports for readable, complete one-screen composition.
- [x] 4.5 Check hover/focus states and reduced-motion behavior still work as expected.
