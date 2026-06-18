## Context

The homepage currently renders a personalized identity hero above a WAM-inspired horizontal carousel. The carousel still uses blog article data, article dates, read times, and remote article imagery, which makes the cards feel like retained clone content instead of intentional personal link destinations.

The next iteration should keep the successful parts of the current page: single-viewport fit, dark visual tone, large horizontal cards, continuous carousel motion, and responsive layout. The card interiors need to shift from article previews to platform-aware destinations for Bilibili, NetEase Cloud Music, GitHub, Xiaohongshu, email, and future additions.

## Goals / Non-Goals

**Goals:**

- Model carousel items as personal platform links instead of blog posts.
- Keep a consistent card outer footprint across all cards.
- Give known platforms distinct, recognizable internal layouts.
- Preserve extra cards as generic or coming-soon entries.
- Maintain no body-level scrollbar on supported desktop and mobile viewports.
- Keep the implementation local to the frontend route and styling.

**Non-Goals:**

- Fetching live data from Bilibili, NetEase Cloud Music, GitHub, Xiaohongshu, or email providers.
- Adding backend endpoints, database storage, OAuth, analytics, or profile editing.
- Removing surplus carousel cards.
- Replacing the carousel with a different interaction pattern.

## Decisions

- Use a platform-link data model.
  - Each card should declare a `kind`, visible label, headline, description, href, and optional handle/image/accent metadata.
  - Rationale: a typed data model lets future cards join the carousel without changing the outer layout contract.
  - Alternative considered: keep `title/date/read/image/href` and infer platform from the URL. Explicit `kind` is clearer and easier to maintain while links are still placeholders.

- Keep one shared card shell.
  - The shell owns width, height, border radius, hover/focus state, link semantics, and responsive sizing.
  - Platform renderers fill only the interior visual area and copy block.
  - Rationale: this preserves the user's desired size consistency while allowing each card to feel individually designed.
  - Alternative considered: fully custom card markup per platform. That would make size and no-scroll constraints harder to preserve.

- Implement platform-specific renderers for the first known set.
  - Bilibili: video-oriented composition with play affordance and pink/blue accents.
  - NetEase Cloud Music: music-oriented composition with red accent, record/disc or waveform motif.
  - GitHub: project/work entry composition with code, repository, or contribution-inspired elements using visitor-friendly language.
  - Xiaohongshu: note/image-oriented composition with warm red accents, tags, and editorial rhythm.
  - Email: direct contact composition with envelope/action treatment and clear email address presentation.
  - Rationale: the visual differences should come from platform meaning, not random image crops.

- Provide a bounded fallback renderer.
  - Unknown or future card kinds should use the same shell and a polished generic interior.
  - Rationale: new cards can be added quickly without breaking the carousel or requiring immediate bespoke design work.

- Keep visual density tuned to the existing one-screen layout.
  - Card interiors should avoid dense paragraphs, large metadata stacks, or overflowing text.
  - Mobile variants should keep the platform signal, title, short description, and action visible without introducing page scroll.
  - Rationale: the existing page is constrained by a no-scroll requirement and large WAM-style card scale.

## Risks / Trade-offs

- [Risk] Platform interiors become too decorative and reduce link clarity -> Mitigation: keep a consistent label/headline/description/action rhythm in every card.
- [Risk] Long platform descriptions overflow on mobile -> Mitigation: use short copy, responsive line heights, and constrained metadata rows.
- [Risk] Extra placeholder cards feel unfinished -> Mitigation: render them as intentional generic or coming-soon cards with the same polish level.
- [Risk] Carousel motion may hide platform-specific details too quickly -> Mitigation: preserve hover pause and avoid tiny details that require long inspection.
