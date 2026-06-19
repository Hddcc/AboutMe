## Context

The current homepage is a Vite/React single-screen composition implemented mainly in `frontend/src/App.tsx` with shared CSS in `frontend/src/styles.css`. The page already has a personalized identity hero and an infinite platform-card carousel, but several desktop sizes are fixed at the `lg` breakpoint. On shorter desktop windows, browsers with taller chrome, or zoomed displays, the page can jump to oversized avatar, title, card, and interior dimensions, making the first viewport feel cropped and crowded.

The change is limited to responsive layout behavior. Existing content, platform-card interiors, images, links, icons, hover/focus behavior, and the navigation-free one-screen concept remain intact.

## Goals / Non-Goals

**Goals:**
- Keep the visual result close to the relaxed reference composition across common desktop, laptop, tablet, and mobile viewport sizes.
- Replace abrupt fixed desktop sizing with fluid, bounded sizing for hero, carousel cards, card interiors, spacing, and controls.
- Add short-window handling so desktop layouts fit when usable viewport height is constrained.
- Preserve the current carousel structure, duplication loop, platform-specific interiors, copy, and asset usage.
- Validate with build output and representative viewport checks.

**Non-Goals:**
- Redesign the homepage, change the visual theme, or add page sections.
- Change carousel data, destinations, platform copy, images, or card ordering.
- Introduce new dependencies or runtime layout measurement code.
- Add browser-specific hacks when standards-based CSS can solve the sizing behavior.

## Decisions

1. Use CSS fluid bounds for major dimensions.

   The hero avatar, title, introduction, card width/height, interior frame height, card padding, carousel gap, and arrow size should use bounded responsive values such as `clamp()` or equivalent Tailwind arbitrary values. This keeps the intended large-screen presence while preventing the `lg` breakpoint from applying a single oversized layout to every desktop window.

   Alternative considered: add more Tailwind breakpoints only. Additional breakpoints would reduce some jumps, but height-constrained browser windows would still need separate handling.

2. Treat viewport height as a first-class constraint.

   Add short-viewport desktop rules so the page scales down when height is limited, while retaining a one-viewport composition. The hero section height, carousel card height, vertical padding, and controls should adapt to `vh` or `dvh` bounds.

   Alternative considered: allow page scrolling on desktop. Existing requirements emphasize a one-viewport homepage, so fitting the composition remains the primary behavior.

3. Keep the shared card shell stable.

   All platform cards should keep identical outer dimensions at each viewport size. Platform-specific interiors may scale inside the existing shell, but they should not alter the shell footprint or change the carousel loop.

   Alternative considered: give each platform custom responsive sizes. That would make the carousel less predictable and could create new overlap risks.

4. Prefer CSS-only adaptation.

   The change should be implemented through Tailwind utility values and shared CSS. Runtime measurement or JavaScript resize logic is unnecessary for this static single-page composition and would add avoidable complexity.

   Alternative considered: use JavaScript to calculate scale based on viewport size. CSS viewport units and `clamp()` are sufficient and easier to maintain.

## Risks / Trade-offs

- Over-compression on very small screens -> Keep minimum readable font sizes and card dimensions, and visually check narrow mobile viewports.
- Carousel animation distance changes with card sizes -> Keep the duplicated track model and identical group spacing so the existing `translate3d(-50%)` loop remains continuous.
- Text wrapping changes at intermediate widths -> Preserve max-widths and line-height relationships, and check the longest visible English and Chinese card headings.
- Large desktop displays may look slightly less oversized -> Use generous upper bounds so wide screens still feel premium and spacious.

## Migration Plan

1. Update `frontend/src/App.tsx` responsive utility classes for the page frame, hero, carousel cards, interiors, and arrow controls.
2. Update `frontend/src/styles.css` carousel spacing to use fluid gap and padding values.
3. Build the frontend.
4. Check representative viewport sizes such as 1920x1080, 1440x900, 1366x768, 1024x768, 390x844, and 360x740.
5. Rollback by reverting the responsive utility and CSS spacing changes if the composition regresses.
