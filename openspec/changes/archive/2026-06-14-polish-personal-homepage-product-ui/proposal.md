## Why

The current personal homepage works technically but still reads like a developer-oriented UI demo. The next iteration should make it feel like a complete personal website for all visitors, including people who are not programmers, while preserving the single-screen Aceternity-inspired foundation.

## What Changes

- Remove visitor-facing technical labels such as "Personal Blog", "Backend", "React", "Notes", and "Signal Deck".
- Rework the page composition so the page feels like one complete personal homepage rather than two boxed modules placed in the center.
- Reduce empty surrounding space by creating a stronger visual relationship between identity content, background treatment, and the card switcher.
- Remove the redundant small square icon from the top-right of each contact card.
- Replace the one-size-fits-all card template with platform-specific card interiors.
- Keep the outer card stage and outer card dimensions consistent across all cards and breakpoints.
- Redesign the WeChat card around a clear "WeChat" label and QR code, with minimal supporting text.
- Redesign GitHub and Xiaohongshu cards around visitor-friendly language and platform-specific visual treatments.
- Preserve local card switching animation, hover/focus feedback, infinite looping, no traditional emoji, no traditional component library look, and no dominant blue-purple AI-gradient style.

## Capabilities

### New Capabilities

- None.

### Modified Capabilities

- `personal-blog-homepage`: Updates the homepage requirements to require product-level visitor-facing language, integrated page composition, platform-specific card interiors, removal of redundant technical UI labels, and minimal WeChat QR card presentation.

## Impact

- Updates React homepage layout and visual hierarchy.
- Refactors contact card rendering from a single generic card body into platform-specific card variants selected by card kind.
- Updates profile/card copy in the Go profile endpoint and frontend fallback data.
- Updates browser verification expectations for removed labels, stable card dimensions, and platform-specific card contents.
