## 1. Project Setup

- [x] 1.1 Initialize the Go module and create a small HTTP server entrypoint.
- [x] 1.2 Create a Vite React TypeScript frontend under a dedicated frontend directory.
- [x] 1.3 Add Tailwind CSS, Framer Motion, and icon dependencies required for the Aceternity-inspired UI.
- [x] 1.4 Configure the Go server to serve the React production build and provide a development fallback path.

## 2. Profile And Card Data

- [x] 2.1 Define the profile data model with avatar, name, introduction, and contact cards.
- [x] 2.2 Add initial card data for GitHub, Xiaohongshu, and WeChat QR code placeholders.
- [x] 2.3 Ensure card data supports future additions without layout changes.
- [x] 2.4 Add local placeholder assets for avatar and QR content with replaceable file names.

## 3. Visual System

- [x] 3.1 Define Tailwind theme tokens for graphite background, metallic neutrals, and one restrained accent color.
- [x] 3.2 Add typography setup for display, body, and mono text styles.
- [x] 3.3 Implement an Aceternity-inspired background with grid/dot texture and spotlight-style lighting.
- [x] 3.4 Add reduced-motion CSS rules for decorative motion and transition effects.
- [x] 3.5 Verify the UI avoids traditional emoji icons, traditional component-library defaults, and dominant blue-purple gradient styling.

## 4. Homepage Layout

- [x] 4.1 Build the single-screen homepage shell using `100dvh` and `overflow-hidden`.
- [x] 4.2 Render the avatar with accessible alternative text.
- [x] 4.3 Render the owner's name as the primary heading and the introduction nearby.
- [x] 4.4 Fit identity content and the card switcher into one viewport on desktop and mobile breakpoints.

## 5. Contact Card Switcher

- [x] 5.1 Build a fixed-size card stage that keeps dimensions stable across all cards.
- [x] 5.2 Build a reusable contact card component with identical outer dimensions and internal slots for label, visual preview, description, and action area.
- [x] 5.3 Implement GitHub, Xiaohongshu, and WeChat QR card content using the shared card structure.
- [x] 5.4 Implement next and previous controls with modulo-based infinite looping.
- [x] 5.5 Add Framer Motion enter/exit variants that animate only inside the card stage.
- [x] 5.6 Add hover and keyboard focus highlights without layout shift.
- [x] 5.7 Add reduced-motion behavior for card switching.

## 6. Verification

- [x] 6.1 Run Go tests or at least `go test ./...` after backend setup.
- [x] 6.2 Run the frontend typecheck/build command.
- [x] 6.3 Start the local app and verify the homepage in a browser.
- [x] 6.4 Check desktop and mobile viewports for absence of body-level scrollbars.
- [x] 6.5 Verify each card has identical dimensions before and after switching.
- [x] 6.6 Verify next and previous controls loop infinitely.
- [x] 6.7 Verify hover/focus effects are visible and do not shift layout.
