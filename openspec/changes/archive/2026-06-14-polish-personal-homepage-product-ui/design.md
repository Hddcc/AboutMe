## Context

The current implementation meets the first version's technical requirements, but several UI details make it feel like an internal demo: visible technical labels, a generic card template, boxed modules placed in the center, and repeated icon squares inside cards. The site is intended for all visitors, so the next iteration should make the page feel like a complete personal homepage with clear identity and contact paths.

The existing stack remains Go + Vite React + Tailwind CSS + Framer Motion. The existing single-screen and equal-size-card constraints still apply.

## Goals / Non-Goals

**Goals:**
- Replace visitor-facing technical labels with natural personal website language.
- Make the page composition feel integrated and complete within one viewport.
- Keep the Aceternity-inspired atmosphere while reducing demo-like UI chrome.
- Remove the repeated top-right icon square from contact cards.
- Keep card outer dimensions and switcher animation stable.
- Give each platform card a custom interior: QR-focused WeChat, project/work-focused GitHub, and visual note-focused Xiaohongshu.
- Keep copy understandable for non-programmers.

**Non-Goals:**
- Adding more sections or page scrolling.
- Adding CMS, authentication, article pages, comments, or analytics.
- Replacing the current stack or adding a traditional component library.
- Requiring real personal data before the layout works.

## Decisions

### Replace generic card interiors with platform-specific card components

The card switcher will keep a shared outer stage and animation wrapper, but card content will be rendered by a `kind`-based component map such as `GitHubCard`, `XiaohongshuCard`, and `WeChatCard`. A fallback card can remain for future card types.

This keeps the exact same outer dimensions while allowing each platform to communicate in its own visual language. It also removes the current repeated top-right icon square that makes every card feel templated.

Alternative considered: keep one generic card and add conditional branches inside it. That would be faster but would keep the same visual sameness that caused the issue.

### Make WeChat a minimal QR card

The WeChat card should be centered around "WeChat" and a large QR code. Long explanatory copy, bottom action rows, handles, and labels should be removed or reduced to one short human phrase if space needs context.

Alternative considered: keep a description and action text for consistency. This adds clutter to a QR-only task and weakens the scan action.

### Redesign GitHub and Xiaohongshu for non-programmer comprehension

GitHub should be framed as "Projects" or "Things I build" rather than repository jargon. Xiaohongshu should feel more like notes, images, or daily observations while staying visually consistent with the site.

Alternative considered: keep platform labels and technical descriptions. That works for developers but narrows the audience too much.

### Integrate the page composition

The homepage should use the full first viewport as one designed surface. Identity content and card switcher should feel connected through shared alignment, background layers, and visual rhythm. The layout can remain a two-region composition on desktop, but it should avoid the impression of two isolated boxes floating in empty space.

Possible implementation directions:
- Enlarge the identity area and use the avatar as a stronger first-viewport signal.
- Add a subtle full-width visual band or stage behind the main content.
- Let the card switcher overlap or align with the identity block more intentionally.
- Reduce border-heavy nested card backgrounds.

### Keep controls lightweight

The switcher controls should remain accessible but visually quieter. Counters and technical labels should be removed or hidden from the main visual presentation if they do not help ordinary visitors.

## Risks / Trade-offs

- More custom card interiors can increase maintenance -> Keep a fallback card component and document card data expectations.
- Removing labels can reduce orientation -> Use natural copy and platform names as the orientation instead.
- A fuller composition can threaten the no-scroll rule -> Verify desktop and mobile viewport heights after design changes.
- QR-only WeChat card can feel sparse -> Use scale, alignment, and subtle background treatment to make the minimal card feel intentional.
- Platform-specific styling can become inconsistent -> Share typography, spacing, border radius, and outer stage constraints.
