## Why

The project needs a polished personal blog homepage that presents identity, introduction, and real contact/social addresses in a single memorable first view. The page should feel technical and intentional while avoiding common AI-styled blue-purple gradients, emoji-heavy decoration, and traditional component-library visual defaults.

## What Changes

- Add a Go + React personal blog homepage that fits within one viewport without page scrolling.
- Present the owner's avatar, name, and short personal introduction as the primary identity block.
- Add an extensible card switcher for real personal addresses such as GitHub, Xiaohongshu, and WeChat QR code.
- Ensure every contact card uses the same fixed size across all card types and viewport breakpoints.
- Animate card switching locally inside the card area, with smooth directional transitions and no full-page transition.
- Support infinite looping in both directions so adding more cards later does not require layout redesign.
- Add hover/focus highlighting for cards using Aceternity UI style effects.
- Use Aceternity UI design patterns/components as the visual foundation, including spotlight/background and motion-card concepts.
- Avoid traditional emoji, traditional component-library styling, and dominant blue-purple AI-gradient visuals.

## Capabilities

### New Capabilities

- `personal-blog-homepage`: Defines the single-screen personal blog homepage, identity presentation, Aceternity-inspired visual language, and contact-card carousel behavior.

### Modified Capabilities

- None.

## Impact

- Adds a Go web server for serving the React build and, if needed, contact/profile data.
- Adds a React frontend with Tailwind CSS and Framer Motion for Aceternity-style UI composition.
- Adds static assets for avatar and QR/contact card content placeholders.
- Adds frontend data structures that let future cards be added without changing the page layout.
