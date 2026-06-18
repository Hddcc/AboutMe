## Context

The current frontend renders a WAM Blog clone on the primary route. It includes the requested upper section plus additional lower-page content: filters, article grid, load-more control, CTA footer, and contact/footer information.

The requested target is the upper composition shown in the reference image: fixed WAM-style navigation, large hero headline, and horizontal featured-card carousel on a black background.

## Goals / Non-Goals

**Goals:**
- Keep the cloned upper-section visual: header, hero headline, and featured carousel.
- Remove all lower-page UI and supporting state/data from the homepage.
- Keep desktop and mobile layouts visually coherent after the page is shortened.
- Preserve existing build and runtime setup.

**Non-Goals:**
- Recreating source-site backend behavior or blog detail pages.
- Changing project routing, backend APIs, or package dependencies.
- Reworking the retained WAM visual language beyond what is necessary after trimming the page.

## Decisions

- Keep the implementation in `frontend/src/App.tsx`.
  - Rationale: the cloned page is currently concentrated there, so this change can be scoped to the existing page component.
  - Alternative considered: introduce new page-level components. That would add structure for a small removal-focused change.

- Remove lower-section components, state, and data together.
  - Rationale: deleting `filtersOpen`, filter data, blog-grid data, `BlogCard`, and `Footer` avoids dead code and keeps the retained page easier to maintain.
  - Alternative considered: hide lower sections with CSS. That would leave unused interactions and accessibility landmarks in the code.

- Keep the page scroll behavior natural unless the retained upper section exceeds a viewport.
  - Rationale: desktop target is a wide upper composition; mobile may still need a small amount of vertical room for the retained carousel controls.

## Risks / Trade-offs

- Source visual drift after trimming → Verify screenshots at desktop 1440x900 and mobile 390x844.
- Over-removal of shared utilities → Remove only data/components used solely by the lower sections.
- Empty-feeling mobile layout after lower content removal → Preserve hero glow, carousel spacing, and navigation so the retained section still feels complete.
