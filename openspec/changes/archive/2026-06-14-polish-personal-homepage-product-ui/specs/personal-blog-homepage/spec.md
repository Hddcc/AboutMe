## ADDED Requirements

### Requirement: Visitor-facing product language
The system SHALL present homepage text in natural visitor-facing language that is understandable to non-programmers.

#### Scenario: Technical demo labels are absent
- **WHEN** the homepage is rendered
- **THEN** visible text does not include "Personal Blog", "Backend", "React", "Notes", or "Signal Deck"
- **AND** visible text does not rely on programming jargon to explain the page

#### Scenario: Visitor understands the page purpose
- **WHEN** a non-programmer visitor opens the homepage
- **THEN** the visible name, introduction, and contact entries make clear who the owner is and how to reach or learn about them

### Requirement: WeChat QR card presentation
The system SHALL render the WeChat card as a minimal QR-focused contact card.

#### Scenario: WeChat card is concise
- **WHEN** the WeChat card is active
- **THEN** the card visibly presents "WeChat" and a QR code
- **AND** the card does not show long placeholder instructions
- **AND** the card does not show bottom metadata rows such as handle and action labels

### Requirement: Platform-specific non-QR card presentation
The system SHALL render non-QR platform cards with custom visitor-friendly content instead of QR-style layouts.

#### Scenario: GitHub card avoids repository jargon
- **WHEN** the GitHub card is active
- **THEN** the card presents GitHub as a project or work entry point using language understandable to non-programmers

#### Scenario: Xiaohongshu card uses note-oriented presentation
- **WHEN** the Xiaohongshu card is active
- **THEN** the card presents Xiaohongshu as a place for notes, images, or daily observations
- **AND** the card style remains visually consistent with the overall homepage

## MODIFIED Requirements

### Requirement: Single-screen homepage layout
The system SHALL display the personal blog homepage within one viewport without a body-level scrollbar for supported desktop and mobile viewport sizes, while using the viewport as one complete designed homepage surface.

#### Scenario: Desktop first view has no page scrollbar
- **WHEN** the homepage is opened on a supported desktop viewport
- **THEN** the avatar, name, introduction, and card switcher are visible within the first viewport
- **AND** the document body does not require vertical scrolling
- **AND** the page composition does not read as two isolated boxes surrounded by empty space

#### Scenario: Mobile first view has no page scrollbar
- **WHEN** the homepage is opened on a supported mobile viewport
- **THEN** the avatar, name, introduction, and card switcher are visible within the first viewport
- **AND** the document body does not require vertical scrolling
- **AND** the content remains readable without relying on hidden technical labels

### Requirement: Aceternity-inspired visual design
The system SHALL use Aceternity UI-inspired motion, spotlight, background, and glowing-card patterns as the visual foundation while presenting a polished personal website experience for a general audience.

#### Scenario: Aceternity-style visual treatment appears
- **WHEN** the homepage is rendered
- **THEN** the page includes a technical background treatment, spotlight-style lighting, and motion-enhanced card interactions consistent with Aceternity UI patterns
- **AND** the identity content, background, and card switcher feel visually connected as one homepage composition

#### Scenario: Avoided visual patterns are absent
- **WHEN** the homepage is rendered
- **THEN** the page does not use traditional emoji as UI icons
- **AND** the page does not use a dominant blue-purple AI-gradient visual theme
- **AND** the page does not expose traditional component-library styling
- **AND** the page does not expose demo-like technical labels or card section names

### Requirement: Equal-size contact cards
The system SHALL render every personal address card with identical outer dimensions and stable outer layout while allowing platform-specific interior design.

#### Scenario: Cards have identical dimensions
- **WHEN** the card switcher contains multiple card types
- **THEN** each card uses the same outer width, outer height, border radius, and switcher stage footprint
- **AND** switching cards does not resize the card stage

#### Scenario: Platform cards use custom interiors
- **WHEN** GitHub, Xiaohongshu, and WeChat cards are available
- **THEN** each card presents a distinct interior design tailored to that platform
- **AND** all cards retain the same outer dimensions

#### Scenario: Redundant icon square is absent
- **WHEN** any contact card is rendered
- **THEN** the card does not show a repeated top-right square icon container as a generic template element

### Requirement: Data-driven card additions
The system SHALL define contact cards from data so future cards can be added without changing the switcher layout, while supporting platform-specific renderers for known card kinds.

#### Scenario: New card data appears in switcher
- **WHEN** a new valid card item is added to the card data collection
- **THEN** the card switcher includes it in the infinite loop
- **AND** the card uses the same outer dimensions as existing cards

#### Scenario: Known card kind uses custom renderer
- **WHEN** a card has a known kind such as GitHub, Xiaohongshu, or WeChat
- **THEN** the switcher renders the platform-specific card interior for that kind

#### Scenario: Unknown card kind uses fallback renderer
- **WHEN** a card has an unknown kind
- **THEN** the switcher renders an accessible fallback card that keeps the same outer dimensions and does not break the loop

### Requirement: Contact card hover and focus feedback
The system SHALL provide visible hover and keyboard focus feedback for the active contact card and card controls without adding generic decorative chrome.

#### Scenario: Card hover highlights active card
- **WHEN** a pointer hovers over the active card
- **THEN** the active card displays a highlighted border, shadow, or surface effect without shifting layout

#### Scenario: Keyboard focus is visible
- **WHEN** keyboard focus moves to a card action or switch control
- **THEN** the focused element displays a visible focus state

#### Scenario: Controls remain visually lightweight
- **WHEN** card switching controls are rendered
- **THEN** the controls are available and accessible
- **AND** they do not dominate the card presentation with technical labels or counters
