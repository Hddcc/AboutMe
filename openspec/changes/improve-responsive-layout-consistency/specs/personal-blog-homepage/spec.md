## ADDED Requirements

### Requirement: Responsive visual consistency
The system SHALL keep the personalized hero and platform-card carousel visually consistent across supported browsers, desktop window sizes, and mobile viewport sizes while preserving the existing content, imagery, icons, copy, and interaction model.

#### Scenario: Reference desktop composition remains relaxed
- **WHEN** the homepage is opened at a desktop viewport around 1920x1080 or 1440x900
- **THEN** the avatar, `Yufeng Zhang` heading, introduction, platform carousel, and arrow controls are visible within one viewport
- **AND** the layout appears spacious and balanced without card content crowding the hero area
- **AND** the visible copy, image assets, platform-specific interiors, and arrow affordances remain the same as before this responsive refinement

#### Scenario: Short desktop window avoids oversized scaling
- **WHEN** the homepage is opened on a desktop or laptop viewport with limited usable height such as 1366x768
- **THEN** the hero avatar, heading, introduction, platform cards, interior showcase frames, and arrow controls scale down within bounded limits
- **AND** the page does not crop primary content because of oversized desktop breakpoint values
- **AND** the carousel cards keep identical outer dimensions across all active platform entries

#### Scenario: Browser zoom and chrome variation retain the same hierarchy
- **WHEN** a visitor opens the homepage in different modern browsers or with normal browser chrome differences at the same approximate viewport category
- **THEN** the first visual read remains the same: avatar and identity text above or near the platform carousel
- **AND** spacing, typography scale, and card scale stay within the intended relaxed hierarchy
- **AND** platform labels, headlines, descriptions, handles, and card interiors remain readable without overlapping

#### Scenario: Mobile viewport remains complete and readable
- **WHEN** the homepage is opened at mobile viewport sizes such as 390x844 or 360x740
- **THEN** the avatar, name, introduction, carousel cards, and arrow controls remain visible within the mobile composition
- **AND** typography, card shell dimensions, interior images, and spacing scale proportionally for the smaller viewport
- **AND** the page preserves the current navigation-free platform carousel experience
