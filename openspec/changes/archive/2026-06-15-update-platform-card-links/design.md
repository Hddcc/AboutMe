## Context

The current homepage implementation already uses a data-driven `platformCards` collection in `frontend/src/App.tsx`. Each card has its own destination field, so the requested change is a configuration update to existing card data rather than a structural or visual redesign.

The user wants the homepage to keep its current card appearance and only change the clickable destinations for Bilibili, NetEase Cloud Music, GitHub, Xiaohongshu, and email. The email card also needs to open the visitor's mail client compose flow instead of navigating to a mailbox site.

## Goals / Non-Goals

**Goals:**

- Replace placeholder or generic platform destinations with the owner's real external addresses.
- Keep the current card shell, platform-specific interiors, and page styling unchanged.
- Preserve the existing email-card interaction pattern while making it open a compose action through `mailto:`.

**Non-Goals:**

- Rewriting card copy, labels, headlines, or visual treatments.
- Adding or removing cards from the carousel.
- Introducing analytics, live platform integrations, or backend-managed profile data.

## Decisions

- Keep the change inside the existing `platformCards` data collection.
  - Rationale: the current implementation already centralizes each card's `href` in one place, so link updates can stay narrow and low-risk.
  - Alternative considered: refactor card data into a separate profile configuration file. That would expand scope without helping this targeted update.

- Use direct external profile URLs for social platforms.
  - Rationale: the user supplied final public destinations for Bilibili, NetEase Cloud Music, GitHub, and Xiaohongshu, so the homepage should point straight to those public pages.
  - Alternative considered: keep platform homepages and rely on visible handles only. That leaves visitors one step away from the intended profile.

- Use `mailto:531210118@qq.com` for the email card destination.
  - Rationale: `mailto:` launches a compose flow in the visitor's configured mail app, which matches the requested interaction.
  - Alternative considered: link to a mailbox provider site. That does not reliably open a compose page for the address owner.

## Risks / Trade-offs

- [Risk] Some devices may handle `mailto:` through different client apps or browser prompts. -> Mitigation: this is acceptable because the requirement is to open a compose flow, and `mailto:` is the standard browser-supported mechanism.
- [Risk] Future card data edits could reintroduce placeholder URLs. -> Mitigation: capture the expected real destinations in the spec delta and task list for verification.
