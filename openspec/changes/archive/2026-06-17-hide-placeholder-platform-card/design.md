## Context

The homepage carousel is defined in `frontend/src/App.tsx` through a `PlatformCard` data array. The current array includes five real platform entries and one generic "More" placeholder entry. The generic card uses the same shared `PlatformLinkCard` shell and falls through to `GenericInterior`, so it is useful as a future-card fallback but reads as unfinished when shown publicly.

The current specification also allows extra generic or coming-soon entries to remain available. This change narrows the public carousel contract: only active, configured platform cards should render, while the data model and generic fallback renderer remain available for later expansion.

## Goals / Non-Goals

**Goals:**

- Remove the placeholder "More" card from the public carousel experience.
- Keep future card additions data-driven through the existing `PlatformCard` model.
- Keep the generic fallback interior available for unknown or future card kinds.
- Preserve the shared carousel shell dimensions, hover/focus behavior, platform interiors, and one-viewport layout.
- Re-check carousel drift spacing and timing after the visible card count changes.

**Non-Goals:**

- Redesign the carousel, hero, or platform card visual language.
- Add a new public "add card" UI.
- Remove the generic fallback renderer from the codebase.
- Change platform links, card copy, or external destinations for active cards.
- Introduce backend, API, or dependency changes.

## Decisions

### Separate active display data from future card capability

Use an explicit display filter before building `tickerCards`, such as a `status` or `isVisible` field, so placeholder/draft entries can stay in source data without entering the public loop.

Alternative considered: delete the generic card object entirely. That would satisfy the immediate screenshot issue but weakens the future-card workflow and hides the intended extension path from the data layer.

### Keep `generic` rendering as the fallback path

Retain `PlatformKind` support for `generic` and the default `GenericInterior` branch. Future cards can use the existing shared shell immediately, and unknown kinds still have a safe visual fallback.

Alternative considered: remove the `generic` kind and only render known platforms. That would make future additions more brittle because every new card would require renderer changes before it can appear safely.

### Maintain carousel continuity after reducing visible cards

Build the duplicated ticker list from visible cards only. After the public count drops from six to five entries, tune animation distance or duration only if visual inspection shows gaps, abrupt repetition, or awkward pacing.

Alternative considered: leave the animation untouched. This is acceptable only if the reduced list still loops cleanly on desktop and mobile.

## Risks / Trade-offs

- [Hidden placeholder also removes one visual beat from the loop] -> Verify desktop and mobile carousel flow after filtering and adjust drift values if needed.
- [Future contributors may re-add placeholder cards directly to the public list] -> Encode visibility/status in data and tasks so draft entries have an obvious place to live.
- [Spec wording could over-constrain future card experiments] -> Require hiding placeholder/draft cards publicly while preserving a clear path for active future entries.
- [Filtering all cards accidentally creates an empty ticker] -> Keep current active platform cards visible and avoid broad filters based only on `kind`.
