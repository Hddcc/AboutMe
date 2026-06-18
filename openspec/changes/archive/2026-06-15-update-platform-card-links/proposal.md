## Why

The homepage carousel already presents platform cards, but the current links still point to generic or placeholder destinations. Replacing them with the owner's real profile addresses will make each card immediately useful to visitors without changing the existing visual design.

## What Changes

- Update the configured Bilibili card link to the owner's real Bilibili profile page.
- Update the configured NetEase Cloud Music card link to the owner's real NetEase user home page.
- Update the configured GitHub card link to the owner's real GitHub profile page.
- Update the configured Xiaohongshu card link to the owner's real Xiaohongshu profile page.
- Update the email card to open a compose flow with the owner's real email address through a `mailto:` destination.
- Preserve the current card layout, copy structure, and visual styling for all cards.

## Capabilities

### New Capabilities

- None.

### Modified Capabilities

- `personal-blog-homepage`: Update the platform card destinations so the homepage links open the owner's real profile and contact addresses while preserving the existing card presentation.

## Impact

- Affects the frontend carousel card configuration in `frontend/src/App.tsx`.
- Does not change card styling, component structure, routing, backend services, or external dependencies.
