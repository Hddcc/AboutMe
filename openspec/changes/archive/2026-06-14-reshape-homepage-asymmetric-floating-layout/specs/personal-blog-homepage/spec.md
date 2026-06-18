## ADDED Requirements

### Requirement: Asymmetric floating homepage canvas
The system SHALL present the homepage as an asymmetric floating canvas rather than an obvious left/right two-column arrangement.

#### Scenario: Desktop layout has spatial overlap and offset
- **WHEN** the homepage is rendered on a supported desktop viewport
- **THEN** the name, avatar, introduction, active card, and ambient layers are arranged with intentional offsets, varied depth, or slight overlap
- **AND** the composition does not present as a flat left text block beside a flat right card block

#### Scenario: Mobile layout remains asymmetric and readable
- **WHEN** the homepage is rendered on a supported mobile viewport
- **THEN** the identity content and active card remain visible within one viewport
- **AND** the layout preserves a compressed asymmetric composition without sacrificing text readability or QR clarity

### Requirement: Decorative floating card echoes
The system SHALL allow non-active decorative card echoes or glass planes around the active contact card to create depth without changing the switcher contract.

#### Scenario: Decorative echoes do not become extra controls
- **WHEN** decorative card echoes are rendered
- **THEN** they are visually secondary to the active card
- **AND** they do not add independent links, buttons, or keyboard tab stops
- **AND** they do not alter the active card's fixed outer dimensions

#### Scenario: Echo count remains bounded
- **WHEN** additional contact card data is added
- **THEN** the homepage may show a bounded set of decorative echoes
- **AND** the active card switcher remains the only complete card browsing interaction

### Requirement: Subtle connective visual flow
The system SHALL use subtle visual devices such as luminous connector lines, arcs, or layered geometry to relate identity content and the card system.

#### Scenario: Connector layer supports the asymmetric composition
- **WHEN** the homepage is rendered
- **THEN** connector lines or geometric flow cues visually guide attention between the identity content and active card area
- **AND** the connector layer remains decorative and does not resemble a dense data dashboard

## MODIFIED Requirements

### Requirement: Single-screen homepage layout
The system SHALL display the personal blog homepage within one viewport without a body-level scrollbar for supported desktop and mobile viewport sizes, while using the viewport as one asymmetric floating designed surface.

#### Scenario: Desktop first view has no page scrollbar
- **WHEN** the homepage is opened on a supported desktop viewport
- **THEN** the avatar, name, introduction, and card switcher are visible within the first viewport
- **AND** the document body does not require vertical scrolling
- **AND** the page composition reads as one asymmetric floating canvas with spatial depth

#### Scenario: Mobile first view has no page scrollbar
- **WHEN** the homepage is opened on a supported mobile viewport
- **THEN** the avatar, name, introduction, and card switcher are visible within the first viewport
- **AND** the document body does not require vertical scrolling
- **AND** the content remains readable in a compressed asymmetric layout without relying on hidden technical labels

### Requirement: Aceternity-inspired visual design
The system SHALL use Aceternity UI-inspired motion, spotlight, background, glowing-card, and layered glass patterns as the visual foundation while presenting a polished personal website experience for a general audience.

#### Scenario: Aceternity-style visual treatment appears
- **WHEN** the homepage is rendered
- **THEN** the page includes a technical background treatment, spotlight-style lighting, layered glass depth, and motion-enhanced card interactions consistent with Aceternity UI patterns
- **AND** the identity content, background, connector layer, decorative echoes, and active card feel visually connected as one homepage composition

#### Scenario: Avoided visual patterns are absent
- **WHEN** the homepage is rendered
- **THEN** the page does not use traditional emoji as UI icons
- **AND** the page does not use a dominant blue-purple AI-gradient visual theme
- **AND** the page does not expose traditional component-library styling
- **AND** the page does not expose demo-like technical labels or card section names

### Requirement: Equal-size contact cards
The system SHALL render every active personal address card with identical outer dimensions and stable outer layout while allowing platform-specific interior design and decorative surrounding echoes.

#### Scenario: Cards have identical dimensions
- **WHEN** the card switcher contains multiple card types
- **THEN** each active card uses the same outer width, outer height, border radius, and switcher stage footprint
- **AND** switching cards does not resize the active card stage

#### Scenario: Platform cards use custom interiors
- **WHEN** GitHub, Xiaohongshu, and WeChat cards are available
- **THEN** each active card presents a distinct interior design tailored to that platform
- **AND** all active cards retain the same outer dimensions

#### Scenario: Redundant icon square is absent
- **WHEN** any active contact card is rendered
- **THEN** the card does not show a repeated top-right square icon container as a generic template element

### Requirement: Local card switching animation
The system SHALL animate card changes inside the active card stage without transitioning the whole page or reflowing decorative canvas layers.

#### Scenario: Next card animates locally
- **WHEN** a visitor activates the next-card control
- **THEN** the current active card exits and the next active card enters within the card stage
- **AND** the avatar, name, introduction, background layout, connector layer, and decorative echoes remain in place

#### Scenario: Previous card animates locally
- **WHEN** a visitor activates the previous-card control
- **THEN** the current active card exits and the previous active card enters within the card stage
- **AND** the avatar, name, introduction, background layout, connector layer, and decorative echoes remain in place

### Requirement: Data-driven card additions
The system SHALL define contact cards from data so future cards can be added without changing the switcher layout, while supporting platform-specific renderers for known card kinds and bounded decorative echoes.

#### Scenario: New card data appears in switcher
- **WHEN** a new valid card item is added to the card data collection
- **THEN** the card switcher includes it in the infinite loop
- **AND** the active card uses the same outer dimensions as existing cards
- **AND** decorative echoes remain bounded so the canvas does not need manual repositioning for every new card

#### Scenario: Known card kind uses custom renderer
- **WHEN** a card has a known kind such as GitHub, Xiaohongshu, or WeChat
- **THEN** the switcher renders the platform-specific card interior for that kind

#### Scenario: Unknown card kind uses fallback renderer
- **WHEN** a card has an unknown kind
- **THEN** the switcher renders an accessible fallback card that keeps the same outer dimensions and does not break the loop
