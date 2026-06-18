## MODIFIED Requirements

### Requirement: Asymmetric floating homepage canvas
The system SHALL present the homepage as a controlled asymmetric floating canvas organized around a clear diagonal visual flow rather than a scattered free-floating arrangement or an obvious left/right two-column layout.

#### Scenario: Desktop layout has controlled asymmetry
- **WHEN** the homepage is rendered on a supported desktop viewport
- **THEN** the name, avatar, introduction, subtle visual guide, and active card are arranged around an implied diagonal line from the identity area toward the active card
- **AND** the active card appears in a right-middle or right-middle-high focal position
- **AND** the composition does not present as a flat left text block beside a flat right card block
- **AND** the composition does not feel like randomly scattered floating elements

#### Scenario: Mobile layout remains asymmetric and readable
- **WHEN** the homepage is rendered on a supported mobile viewport
- **THEN** the identity content and active card remain visible within one viewport
- **AND** the layout preserves a compact asymmetric flow without sacrificing text readability or QR clarity

#### Scenario: First-read hierarchy is clear
- **WHEN** a visitor opens the homepage
- **THEN** the first visual read clearly includes the name, introduction, and main active card
- **AND** decorative elements do not compete with those primary elements

### Requirement: Decorative floating card echoes
The system SHALL allow at most two non-active decorative card echoes or glass planes around the active contact card to create subtle depth without changing the switcher contract.

#### Scenario: Decorative echoes do not become extra controls
- **WHEN** decorative card echoes are rendered
- **THEN** they are visually secondary to the active card
- **AND** they do not add independent links, buttons, or keyboard tab stops
- **AND** they do not alter the active card's fixed outer dimensions

#### Scenario: Echo count remains tightly bounded
- **WHEN** additional contact card data is added
- **THEN** the homepage shows no more than two decorative echoes
- **AND** the active card switcher remains the only complete card browsing interaction

#### Scenario: Echoes are lower emphasis than primary content
- **WHEN** decorative echoes are visible
- **THEN** their size, opacity, contrast, and position keep them behind the name, introduction, and active card in the visual hierarchy

### Requirement: Subtle connective visual flow
The system SHALL use at most one subtle visual guide line or geometric cue to relate identity content and the card system.

#### Scenario: Connector layer supports the refined composition
- **WHEN** the homepage is rendered
- **THEN** one low-opacity connector line or geometric cue visually guides attention between the identity content and active card area
- **AND** the connector layer remains decorative
- **AND** the connector layer does not use multiple long curves, bright paths, node-like dots, or dense data-dashboard styling

### Requirement: Equal-size contact cards
The system SHALL render every active personal address card with identical outer dimensions and stable outer layout while preserving the existing active card interior design and allowing only decorative surrounding echoes.

#### Scenario: Cards have identical dimensions
- **WHEN** the card switcher contains multiple card types
- **THEN** each active card uses the same outer width, outer height, border radius, and switcher stage footprint
- **AND** switching cards does not resize the active card stage

#### Scenario: Platform card interiors are preserved
- **WHEN** GitHub, Xiaohongshu, WeChat, and fallback cards are available
- **THEN** each active card keeps its existing interior design, content rhythm, buttons, QR presentation, and glass material
- **AND** layout refinement changes only the surrounding stage, positioning, spacing, or decorative canvas layers

#### Scenario: Redundant icon square is absent
- **WHEN** any active contact card is rendered
- **THEN** the card does not show a repeated top-right square icon container as a generic template element

### Requirement: Aceternity-inspired visual design
The system SHALL use Aceternity UI-inspired motion, spotlight, background, glowing-card, and layered glass patterns as a refined visual foundation while presenting a polished personal website experience for a general audience.

#### Scenario: Refined Aceternity-style visual treatment appears
- **WHEN** the homepage is rendered
- **THEN** the page includes a dark technical background, restrained grid texture, subtle spotlight lighting, quiet layered glass depth, and motion-enhanced card interactions
- **AND** the identity content, background, guide line, limited decorative echoes, and active card feel visually connected as one controlled homepage composition

#### Scenario: Avoided visual patterns are absent
- **WHEN** the homepage is rendered
- **THEN** the page does not use traditional emoji as UI icons
- **AND** the page does not use a dominant blue-purple AI-gradient visual theme
- **AND** the page does not expose traditional component-library styling
- **AND** the page does not expose demo-like technical labels or card section names
- **AND** decorative elements do not exceed the presence of the primary content
