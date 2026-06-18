## 1. Copy And Data Cleanup

- [x] 1.1 Remove visitor-facing technical labels from the homepage layout.
- [x] 1.2 Rewrite profile introduction and card copy for non-programmer visitors.
- [x] 1.3 Update Go profile data and frontend fallback data to stay aligned.
- [x] 1.4 Ensure forbidden visible phrases are absent: "Personal Blog", "Backend", "React", "Notes", and "Signal Deck".

## 2. Integrated Homepage Composition

- [x] 2.1 Rework the desktop homepage layout so identity content and card switcher feel like one designed surface.
- [x] 2.2 Rework the mobile layout so the page remains readable within one viewport.
- [x] 2.3 Reduce empty surrounding space using stronger background layers, alignment, and visual rhythm.
- [x] 2.4 Preserve the no body-level scrollbar requirement across target viewports.

## 3. Card Architecture

- [x] 3.1 Refactor the generic contact card into a shared fixed-size card shell plus kind-specific interiors.
- [x] 3.2 Add platform-specific renderers for GitHub, Xiaohongshu, and WeChat.
- [x] 3.3 Add an accessible fallback renderer for unknown future card kinds.
- [x] 3.4 Remove the repeated top-right square icon container from all card variants.
- [x] 3.5 Preserve stable outer card dimensions across all variants and breakpoints.

## 4. Platform Card Redesign

- [x] 4.1 Redesign the WeChat card around a clear "WeChat" label and large QR code.
- [x] 4.2 Remove long placeholder instructions, bottom metadata rows, and action labels from the WeChat card.
- [x] 4.3 Redesign the GitHub card as a project/work entry point using visitor-friendly language.
- [x] 4.4 Redesign the Xiaohongshu card as a notes/images/daily-observations entry point.
- [x] 4.5 Keep all platform cards visually consistent with the overall page while still feeling distinct.

## 5. Switcher And Interaction Polish

- [x] 5.1 Keep card switching animation local to the switcher stage.
- [x] 5.2 Make switcher controls visually lightweight while preserving keyboard accessibility.
- [x] 5.3 Preserve next/previous infinite looping behavior.
- [x] 5.4 Preserve hover and focus feedback without layout shift.
- [x] 5.5 Respect reduced-motion preferences after visual changes.

## 6. Verification

- [x] 6.1 Run `go test ./...`.
- [x] 6.2 Run the frontend build command.
- [x] 6.3 Verify desktop and mobile pages have no body-level scrollbar.
- [x] 6.4 Verify all card variants keep identical outer dimensions before and after switching.
- [x] 6.5 Verify forbidden labels and long WeChat placeholder text are absent from rendered UI.
- [x] 6.6 Verify GitHub, Xiaohongshu, WeChat, and fallback card variants render correctly.
