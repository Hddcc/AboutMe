## 1. Data Visibility Model

- [x] 1.1 Extend the platform card data model with an explicit public visibility marker such as `status` or `isVisible`.
- [x] 1.2 Mark the five configured platform cards as public active entries.
- [x] 1.3 Mark the generic "More" placeholder card as draft or hidden while keeping its data available for future activation.

## 2. Carousel Rendering

- [x] 2.1 Build the duplicated ticker list from public active cards only.
- [x] 2.2 Preserve `generic` and unknown-kind fallback rendering for future public active cards.
- [x] 2.3 Confirm the public carousel renders Bilibili, NetEase Cloud Music, GitHub, Xiaohongshu, and email, with no visible "More", "Space for the next address", "Coming soon", or "Soon" placeholder content.

## 3. Layout And Motion Check

- [x] 3.1 Review the carousel drift after the visible card count changes and adjust CSS timing or translation values only if the loop shows gaps, abrupt repetition, or awkward pacing.
- [x] 3.2 Verify the shared card shell dimensions, hover/focus behavior, platform interiors, and one-viewport layout remain unchanged on desktop and mobile.

## 4. Verification

- [x] 4.1 Run the frontend type/build check available for the project.
- [x] 4.2 Perform a visual smoke check of the homepage carousel and confirm placeholder cards remain hidden while future-card fallback code remains intact.
