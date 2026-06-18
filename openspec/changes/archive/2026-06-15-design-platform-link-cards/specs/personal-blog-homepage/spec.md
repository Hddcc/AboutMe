## ADDED Requirements

### Requirement: Platform link carousel cards
The system SHALL render the homepage carousel as personal platform link cards rather than cloned blog article cards.

#### Scenario: Known platform cards are present
- **WHEN** the homepage carousel is rendered
- **THEN** the carousel includes cards for Bilibili, NetEase Cloud Music, GitHub, Xiaohongshu, and email
- **AND** each card links to its configured destination or contact action
- **AND** extra cards remain available as generic or coming-soon entries

#### Scenario: Blog article metadata is absent from platform cards
- **WHEN** a platform link card is rendered
- **THEN** the card does not present blog article dates, read times, or cloned article paths as primary content
- **AND** the visible content describes the platform destination in visitor-facing language

### Requirement: Platform-specific card interiors
The system SHALL give known platform cards distinct interiors that reflect the platform's purpose while preserving a consistent outer card footprint.

#### Scenario: Bilibili card uses video-oriented presentation
- **WHEN** the Bilibili card is rendered
- **THEN** the interior includes a video or play-oriented visual treatment
- **AND** the card uses platform-appropriate pink and blue accents without overpowering the page

#### Scenario: NetEase Cloud Music card uses music-oriented presentation
- **WHEN** the NetEase Cloud Music card is rendered
- **THEN** the interior includes a music-oriented visual treatment such as a record, playlist, waveform, or track motif
- **AND** the card uses restrained red accents consistent with the overall dark page

#### Scenario: GitHub card uses project-oriented presentation
- **WHEN** the GitHub card is rendered
- **THEN** the interior presents GitHub as a project, work, or code entry point
- **AND** the visible copy remains understandable to visitors who are not programmers

#### Scenario: Xiaohongshu card uses note-oriented presentation
- **WHEN** the Xiaohongshu card is rendered
- **THEN** the interior presents Xiaohongshu as a place for notes, images, daily observations, or personal updates
- **AND** the card includes a note or tag-oriented visual rhythm

#### Scenario: Email card uses direct contact presentation
- **WHEN** the email card is rendered
- **THEN** the interior clearly presents an email contact route
- **AND** the card includes a direct contact action or visible email address

### Requirement: Consistent platform card shell
The system SHALL use a shared carousel card shell for all platform cards so switching or scrolling through cards does not change the carousel's visual footprint.

#### Scenario: Card shell remains consistent
- **WHEN** the carousel contains multiple platform card kinds
- **THEN** every card uses the same outer width, outer height, border radius, link hit area, hover behavior, and focus behavior for its viewport breakpoint
- **AND** platform-specific differences are contained inside the card interior

#### Scenario: Platform content remains balanced
- **WHEN** a card is rendered on supported desktop and mobile viewports
- **THEN** the platform label, headline, description, visual treatment, and action affordance fit inside the card without overlapping
- **AND** no individual card creates a body-level scrollbar

## MODIFIED Requirements

### Requirement: Data-driven card additions
The system SHALL define carousel cards from data so future cards can be added without changing the carousel layout, while supporting platform-specific interiors for known card kinds and a polished fallback for future card kinds.

#### Scenario: New card data appears in carousel
- **WHEN** a new valid card item is added to the card data collection
- **THEN** the carousel includes it in the loop
- **AND** the card uses the same outer dimensions as existing carousel cards
- **AND** the page remains within the supported one-viewport layout

#### Scenario: Known card kind uses custom renderer
- **WHEN** a card has a known kind such as Bilibili, NetEase Cloud Music, GitHub, Xiaohongshu, or email
- **THEN** the carousel renders the platform-specific card interior for that kind
- **AND** the card keeps the shared outer shell dimensions and interaction states

#### Scenario: Unknown card kind uses fallback renderer
- **WHEN** a card has an unknown kind
- **THEN** the carousel renders an accessible fallback card that keeps the same outer dimensions
- **AND** the fallback card does not break the carousel loop, animation, or responsive fit
