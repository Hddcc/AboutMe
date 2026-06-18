## Context

The repository currently contains OpenSpec scaffolding but no application code. This change introduces a small Go + React application for a one-screen personal blog homepage. The UI must use Aceternity UI as the design foundation while avoiding common blue-purple AI gradients, emoji decoration, and traditional component-library defaults.

The homepage has four required content areas: avatar, name, personal introduction, and a switchable card area for real personal addresses. The card area is the main interaction surface and must remain stable as cards are added later.

## Goals / Non-Goals

**Goals:**
- Build a single-viewport homepage with no body-level scrollbar on target desktop and mobile viewports.
- Use React, Tailwind CSS, and Framer Motion to implement Aceternity-inspired background, spotlight, hover, and card transition effects.
- Serve the frontend through a Go HTTP server and keep the option to provide profile/card data from Go.
- Keep all contact cards visually equal in size, with consistent internal slots for label, icon/preview, description, and action hint.
- Animate only the card switcher region when changing cards.
- Provide infinite next/previous switching with keyboard-accessible controls.
- Make future card additions data-driven.

**Non-Goals:**
- Multi-page blog post management.
- Authentication, admin editing, comments, analytics, or content management.
- Traditional component libraries such as Ant Design, MUI, Chakra, or Bootstrap.
- Scroll-driven sections, long landing-page content, or separate detail pages.

## Decisions

### Use Go as a static web server with optional JSON profile data

Go will serve the built React assets and expose a small `/api/profile` endpoint if dynamic data is useful during implementation. This keeps the project aligned with the requested Go + React stack while avoiding unnecessary backend complexity.

Alternative considered: embed all profile/card data directly in React. This is simpler for the first version, but an API boundary makes later card changes easier if the user wants to manage content outside the frontend.

### Use Vite React for the frontend

The frontend will use Vite with React and TypeScript. Vite is lightweight, works well with Go static serving, and is straightforward for a single-page application.

Alternative considered: Next.js. Aceternity examples often target Next.js, but this page does not need server components, file routing, or image optimization pipelines.

### Compose Aceternity-style components locally

The implementation will adapt Aceternity UI patterns such as `Spotlight New`, grid/dot backgrounds, glowing borders, and motion card switching into local React components. The Aceternity site is copy-paste oriented, so local components fit the intended usage model.

Alternative considered: install a traditional component library and theme it. That would work technically but would miss the requested Aceternity-first visual language.

### Use a fixed-format card switcher

The contact card switcher will render a fixed-size card stage. Each card uses the same width, height, border radius, padding, and internal grid. Card types vary only in content, icon, QR preview, and action target.

The switcher maintains an active index and computes previous/next indexes with modulo arithmetic. Framer Motion handles enter/exit transitions inside the stage using `AnimatePresence` and directional variants. Controls call next/previous without changing the page layout.

Alternative considered: horizontal marquee. Infinite motion is useful for ambient content, but a focused personal address card needs a clear active state and user-controlled switching.

### Use restrained technical visual language

The page will use a dark graphite base, metallic neutrals, fine grid lines, and a single accent such as mint green or muted cold gold. Motion should feel precise and calm: spotlight drift, border glow on hover, and card transitions. Typography should use expressive but readable fonts such as Space Grotesk for display, IBM Plex Sans for body, and IBM Plex Mono for small technical labels.

Alternative considered: HUD-heavy cyan interface. It provides obvious technology cues, but thin lines and high glow density can reduce readability and age quickly.

## Risks / Trade-offs

- Single-viewport layout can become cramped on small screens -> Use responsive sizing, shorter copy limits, and fixed card aspect constraints.
- QR code cards may need more visual room than link cards -> Give every card a reserved preview slot so QR and icon cards share the same structure.
- Aceternity-style animation can become too busy -> Limit motion to background ambience, hover glow, and card transitions; respect `prefers-reduced-motion`.
- Fixed card size can clip future long text -> Define card data guidelines and use line clamps for title/description fields.
- External profile links and QR assets may be unavailable during development -> Use local placeholders with clearly named asset paths that can be replaced later.
