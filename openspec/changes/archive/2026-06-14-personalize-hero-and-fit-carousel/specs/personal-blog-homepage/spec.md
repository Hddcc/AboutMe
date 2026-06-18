## ADDED Requirements

### Requirement: Personalized identity hero
The system SHALL replace the cloned marketing headline with a personalized identity hero containing a circular avatar area, the name `Yufeng Zhang`, and a smaller personal introduction using the same font family.

#### Scenario: Desktop identity hero is visible
- **WHEN** the homepage is opened on a supported desktop viewport
- **THEN** a circular avatar area appears to the left of the identity text
- **AND** the name `Yufeng Zhang` appears as the larger identity line
- **AND** a smaller personal introduction appears below or near the name
- **AND** the name and introduction use the same font family

#### Scenario: Mobile identity hero is readable
- **WHEN** the homepage is opened on a supported mobile viewport
- **THEN** the circular avatar, `Yufeng Zhang`, and personal introduction remain readable without overlapping the carousel
- **AND** the avatar and text scale down proportionally for the smaller viewport

### Requirement: Navigation-free composition
The system SHALL remove the visible top navigation row from the homepage composition.

#### Scenario: Desktop navigation is absent
- **WHEN** the homepage is opened on a supported desktop viewport
- **THEN** the WAM logo, primary navigation links, and Contact Us button are absent

#### Scenario: Mobile navigation is absent
- **WHEN** the homepage is opened on a supported mobile viewport
- **THEN** the WAM logo, mobile menu button, and mobile navigation overlay are absent

### Requirement: One-viewport balanced layout
The system SHALL fit the personalized hero and featured-card carousel within one viewport without page scrollbars on supported desktop and mobile viewport sizes.

#### Scenario: Desktop layout has no scrollbar
- **WHEN** the homepage is opened at a 1440x900 viewport
- **THEN** the full personalized hero and featured-card carousel are visible within the viewport
- **AND** the document does not require vertical scrolling
- **AND** typography, avatar size, card size, and spacing appear visually balanced without crowding or excessive empty space

#### Scenario: Mobile layout has no scrollbar
- **WHEN** the homepage is opened at a 390x844 viewport
- **THEN** the full personalized hero and featured-card carousel controls are visible within the viewport
- **AND** the document does not require vertical scrolling
- **AND** typography, avatar size, card size, and spacing remain balanced for the mobile viewport
