## MODIFIED Requirements

### Requirement: Data-driven card additions
The system SHALL define carousel cards from data so future cards can be added without changing the carousel layout, while supporting platform-specific interiors for known card kinds and a polished fallback for future card kinds.

#### Scenario: New active card data appears in carousel
- **WHEN** a new valid card item is added to the card data collection and marked for public display
- **THEN** the carousel includes it in the loop
- **AND** the card uses the same outer dimensions as existing carousel cards
- **AND** the page remains within the supported one-viewport layout

#### Scenario: Draft or placeholder card data stays hidden
- **WHEN** a card item represents a draft, placeholder, or coming-soon entry
- **THEN** the public homepage carousel does not render it as a complete visible card
- **AND** the card data or fallback renderer can remain available for future activation
- **AND** the carousel loop remains continuous with the remaining active cards

#### Scenario: Known card kind uses custom renderer
- **WHEN** a card has a known kind such as Bilibili, NetEase Cloud Music, GitHub, Xiaohongshu, or email
- **THEN** the carousel renders the platform-specific card interior for that kind
- **AND** the card keeps the shared outer shell dimensions and interaction states

#### Scenario: Unknown active card kind uses fallback renderer
- **WHEN** a public active card has an unknown kind
- **THEN** the carousel renders an accessible fallback card that keeps the same outer dimensions
- **AND** the fallback card does not break the carousel loop, animation, or responsive fit

### Requirement: Platform link carousel cards
The system SHALL render the homepage carousel as personal platform link cards rather than cloned blog article cards, and the public carousel SHALL include only configured active platform entries.

#### Scenario: Known active platform cards are present
- **WHEN** the homepage carousel is rendered
- **THEN** the carousel includes active cards for Bilibili, NetEase Cloud Music, GitHub, Xiaohongshu, and email
- **AND** each card links to its configured destination or contact action
- **AND** placeholder, draft, or coming-soon cards are not shown as public carousel entries

#### Scenario: Blog article metadata is absent from platform cards
- **WHEN** a platform link card is rendered
- **THEN** the card does not present blog article dates, read times, or cloned article paths as primary content
- **AND** the visible content describes the platform destination in visitor-facing language
