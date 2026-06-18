## ADDED Requirements

### Requirement: Single-screen homepage layout
The system SHALL display the personal blog homepage within one viewport without a body-level scrollbar for supported desktop and mobile viewport sizes.

#### Scenario: Desktop first view has no page scrollbar
- **WHEN** the homepage is opened on a supported desktop viewport
- **THEN** the avatar, name, introduction, and card switcher are visible within the first viewport
- **AND** the document body does not require vertical scrolling

#### Scenario: Mobile first view has no page scrollbar
- **WHEN** the homepage is opened on a supported mobile viewport
- **THEN** the avatar, name, introduction, and card switcher are visible within the first viewport
- **AND** the document body does not require vertical scrolling

### Requirement: Identity content
The system SHALL present the owner's avatar, name, and personal introduction as the primary identity content on the homepage.

#### Scenario: Identity content is visible
- **WHEN** a visitor opens the homepage
- **THEN** the avatar is visible with accessible alternative text
- **AND** the owner's name is visible as the primary heading
- **AND** the personal introduction is visible near the heading

### Requirement: Aceternity-inspired visual design
The system SHALL use Aceternity UI-inspired motion, spotlight, background, and glowing-card patterns as the visual foundation.

#### Scenario: Aceternity-style visual treatment appears
- **WHEN** the homepage is rendered
- **THEN** the page includes a technical background treatment, spotlight-style lighting, and motion-enhanced card interactions consistent with Aceternity UI patterns

#### Scenario: Avoided visual patterns are absent
- **WHEN** the homepage is rendered
- **THEN** the page does not use traditional emoji as UI icons
- **AND** the page does not use a dominant blue-purple AI-gradient visual theme
- **AND** the page does not expose traditional component-library styling

### Requirement: Equal-size contact cards
The system SHALL render every personal address card with identical outer dimensions and stable internal layout slots.

#### Scenario: Cards have identical dimensions
- **WHEN** the card switcher contains multiple card types
- **THEN** each card uses the same width, height, border radius, and padding
- **AND** switching cards does not resize the card stage

#### Scenario: QR and link cards share one layout system
- **WHEN** a QR code card and a link card are both available
- **THEN** both cards use the same content slots for label, visual preview, description, and action area
- **AND** neither card changes the switcher dimensions

### Requirement: Local card switching animation
The system SHALL animate card changes inside the card switcher region without transitioning the whole page.

#### Scenario: Next card animates locally
- **WHEN** a visitor activates the next-card control
- **THEN** the current card exits and the next card enters within the card stage
- **AND** the avatar, name, introduction, and background layout remain in place

#### Scenario: Previous card animates locally
- **WHEN** a visitor activates the previous-card control
- **THEN** the current card exits and the previous card enters within the card stage
- **AND** the avatar, name, introduction, and background layout remain in place

### Requirement: Infinite card loop
The system SHALL support infinite card switching in both directions.

#### Scenario: Next from final card loops to first card
- **WHEN** the active card is the final card
- **AND** a visitor activates the next-card control
- **THEN** the first card becomes active with the normal switch animation

#### Scenario: Previous from first card loops to final card
- **WHEN** the active card is the first card
- **AND** a visitor activates the previous-card control
- **THEN** the final card becomes active with the normal switch animation

### Requirement: Contact card hover and focus feedback
The system SHALL provide visible hover and keyboard focus feedback for the active contact card and card controls.

#### Scenario: Card hover highlights active card
- **WHEN** a pointer hovers over the active card
- **THEN** the active card displays a highlighted border or glow effect without shifting layout

#### Scenario: Keyboard focus is visible
- **WHEN** keyboard focus moves to a card action or switch control
- **THEN** the focused element displays a visible focus state

### Requirement: Data-driven card additions
The system SHALL define contact cards from data so future cards can be added without changing the switcher layout.

#### Scenario: New card data appears in switcher
- **WHEN** a new valid card item is added to the card data collection
- **THEN** the card switcher includes it in the infinite loop
- **AND** the card uses the same dimensions and internal layout as existing cards

### Requirement: Motion accessibility
The system SHALL respect reduced-motion preferences for decorative and transition animations.

#### Scenario: Reduced motion preference is active
- **WHEN** the visitor has reduced motion enabled
- **THEN** decorative background animation is minimized
- **AND** card switching uses a reduced transition that avoids large movement
