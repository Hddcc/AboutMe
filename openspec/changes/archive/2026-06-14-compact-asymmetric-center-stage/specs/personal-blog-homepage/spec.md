## MODIFIED Requirements

### Requirement: Aceternity-inspired visual design
The system SHALL use Aceternity UI-inspired motion, spotlight, background, glowing-card, and layered glass patterns as a refined visual foundation while presenting a polished personal website experience for a general audience.

#### Scenario: Refined Aceternity-style visual treatment appears
- **WHEN** the homepage is rendered
- **THEN** the page includes a dark technical background, restrained grid texture, subtle spotlight lighting, quiet layered glass depth, and motion-enhanced card interactions
- **AND** the identity content, background, guide cue, limited decorative echo, and active card feel visually connected as one compact center-stage composition
- **AND** the active contact card is the clearest visual focal element through stage placement, surrounding light, or outer glow treatment

#### Scenario: Avoided visual patterns are absent
- **WHEN** the homepage is rendered
- **THEN** the page does not use traditional emoji as UI icons
- **AND** the page does not use a dominant blue-purple AI-gradient visual theme
- **AND** the page does not expose traditional component-library styling
- **AND** the page does not expose demo-like technical labels or card section names
- **AND** decorative elements do not exceed the presence of the primary content

### Requirement: Equal-size contact cards
The system SHALL render every active personal address card with identical outer dimensions and stable outer layout while preserving the existing active card interior design and allowing only decorative surrounding echoes.

#### Scenario: Cards have identical dimensions
- **WHEN** the card switcher contains multiple card types
- **THEN** each active card uses the same outer width, outer height, border radius, and switcher stage footprint
- **AND** switching cards does not resize the active card stage

#### Scenario: Platform card interiors are preserved
- **WHEN** GitHub, Xiaohongshu, WeChat, and fallback cards are available
- **THEN** each active card keeps its existing interior design, content rhythm, buttons, QR presentation, and glass material
- **AND** layout refinement changes only the surrounding stage, positioning, spacing, focus glow, or decorative canvas layers

#### Scenario: Redundant icon square is absent
- **WHEN** any active contact card is rendered
- **THEN** the card does not show a repeated top-right square icon container as a generic template element

### Requirement: Asymmetric floating homepage canvas
The system SHALL present the homepage as a compact asymmetric center stage organized around a connected identity-to-card reading path rather than separated left and right islands.

#### Scenario: Desktop layout uses compact center stage
- **WHEN** the homepage is rendered on a supported desktop viewport
- **THEN** the primary layout content is constrained inside a centered stage between 1040px and 1180px wide
- **AND** the identity area sits closer to the visual center at approximately x=14% to 20% and y=18% to 26% of the viewport
- **AND** the active card sits inward from the right edge at approximately x=55% to 66% and y=28% to 38% of the viewport
- **AND** the identity description, short guide cue, and active card form a continuous reading path with reduced central emptiness
- **AND** the composition does not present as two separated islands with a large empty gap between them

#### Scenario: Desktop hierarchy favors active card
- **WHEN** the homepage is rendered on a supported desktop viewport
- **THEN** the name remains visible at a controlled hero-title scale roughly 75% to 85% of the previous desktop size
- **AND** the active contact card is visually stronger than the identity glass plate, right background glass, connector cue, and decorative echo
- **AND** the active card focal presence is increased through outer stage treatment without changing the internal `ContactCard` structure

#### Scenario: Mobile layout remains asymmetric and readable
- **WHEN** the homepage is rendered on a supported mobile viewport
- **THEN** the identity content and active card remain visible within one viewport
- **AND** the layout preserves a compact asymmetric flow without sacrificing text readability or QR clarity

#### Scenario: First-read hierarchy is clear
- **WHEN** a visitor opens the homepage
- **THEN** the first visual read clearly includes the name, introduction, and main active card
- **AND** the main active card is the most explicit focal element
- **AND** decorative elements do not compete with those primary elements

### Requirement: Decorative floating card echoes
The system SHALL allow at most one faint non-active decorative card echo or glass trace around the active contact card to create subtle depth without changing the switcher contract.

#### Scenario: Decorative echo does not become an extra control
- **WHEN** a decorative card echo is rendered
- **THEN** it is visually secondary to the active card
- **AND** it does not add independent links, buttons, or keyboard tab stops
- **AND** it does not alter the active card's fixed outer dimensions
- **AND** it does not read as a complete active card

#### Scenario: Echo count remains tightly bounded
- **WHEN** additional contact card data is added
- **THEN** the homepage shows no more than one decorative echo
- **AND** the active card switcher remains the only complete card browsing interaction

#### Scenario: Echo remains below primary presence
- **WHEN** a decorative echo is visible
- **THEN** its opacity is below 0.18
- **AND** its size, cropping, contrast, and position keep it behind the name, introduction, and active card in the visual hierarchy

### Requirement: Subtle connective visual flow
The system SHALL use at most one short, low-opacity visual guide line or geometric cue to relate identity content and the active card inside the compact center stage.

#### Scenario: Connector layer supports compact composition
- **WHEN** the homepage is rendered
- **THEN** one low-opacity connector line or geometric cue visually guides attention between the identity description and active card area
- **AND** the cue length is no longer than 260px on desktop
- **AND** the connector layer remains decorative
- **AND** the connector layer does not use broad cross-canvas curves, bright paths, node-like dots, or dense data-dashboard styling
