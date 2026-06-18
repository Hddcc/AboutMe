# personal-blog-homepage Specification

## Purpose
TBD - created by archiving change build-personal-blog-homepage. Update Purpose after archive.
## Requirements
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

### Requirement: Identity content
The system SHALL present the owner's avatar, name, and personal introduction as the primary identity content on the homepage.

#### Scenario: Identity content is visible
- **WHEN** a visitor opens the homepage
- **THEN** the avatar is visible with accessible alternative text
- **AND** the owner's name is visible as the primary heading
- **AND** the personal introduction is visible near the heading

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

### Requirement: Motion accessibility
The system SHALL respect reduced-motion preferences for decorative and transition animations.

#### Scenario: Reduced motion preference is active
- **WHEN** the visitor has reduced motion enabled
- **THEN** decorative background animation is minimized
- **AND** card switching uses a reduced transition that avoids large movement

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

### Requirement: WAM clone upper-section-only homepage
The system SHALL render the cloned homepage as an upper-section-only WAM Blog composition containing the header, hero headline, and horizontal featured-card carousel.

#### Scenario: Desktop shows only the retained upper composition
- **WHEN** the homepage is opened on a supported desktop viewport
- **THEN** the WAM logo, primary navigation, Contact Us button, hero headline, and horizontal featured-card carousel are visible
- **AND** lower-page content such as the insights heading, filters, blog grid, Load More button, CTA footer, and footer contact information is absent

#### Scenario: Mobile shows only the retained upper composition
- **WHEN** the homepage is opened on a supported mobile viewport
- **THEN** the WAM logo, mobile menu control, hero headline, and horizontal featured-card carousel are visible
- **AND** lower-page content such as the insights heading, filters, blog grid, Load More button, CTA footer, and footer contact information is absent

#### Scenario: Retained carousel remains interactive
- **WHEN** a visitor hovers or focuses a visible featured blog card or carousel arrow control
- **THEN** the retained controls provide visible feedback without revealing removed lower-page sections

#### Scenario: Mobile navigation remains available
- **WHEN** a visitor activates the mobile menu control
- **THEN** the mobile navigation opens with the expected WAM navigation links
- **AND** closing or reopening the menu does not reveal removed lower-page content

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

### Requirement: Platform-specific card interiors
The system SHALL give known platform cards distinct interiors that reflect the platform's purpose while preserving a consistent outer card footprint.

#### Scenario: Bilibili card uses video-oriented presentation
- **WHEN** the Bilibili card is rendered
- **THEN** the interior includes a video or play-oriented visual treatment
- **AND** the card uses platform-appropriate pink and blue accents without overpowering the page
- **AND** the Bilibili showcase frame uses a circular avatar-led focal area built from the supplied local avatar image treatment
- **AND** pink remains the dominant visual accent while blue appears as restrained supporting highlight detail
- **AND** the interior reads like a Bilibili channel or clip highlight rather than a generic media placeholder
- **AND** the composition adapts to the existing shared showcase frame dimensions instead of changing the outer card shell

#### Scenario: NetEase Cloud Music card uses music-oriented presentation
- **WHEN** the NetEase Cloud Music card is rendered
- **THEN** the interior uses a local screenshot-derived music showcase asset inside the existing middle frame
- **AND** the card uses restrained red accents consistent with the overall dark page
- **AND** the strongest red glow and platform-specific details remain contained inside the middle showcase frame
- **AND** the existing outer card copy, including headline, description, handle, and action, remains unchanged
- **AND** the composition adapts to the existing shared showcase frame dimensions instead of changing the outer card shell, spacing, or carousel footprint

#### Scenario: GitHub card uses project-oriented presentation
- **WHEN** the GitHub card is rendered
- **THEN** the interior presents GitHub as a project, work, or code entry point
- **AND** the visible copy remains understandable to visitors who are not programmers

#### Scenario: Xiaohongshu card uses note-oriented presentation
- **WHEN** the Xiaohongshu card is rendered
- **THEN** the interior presents Xiaohongshu as a place for notes, images, daily observations, or personal updates
- **AND** the interior uses an image-led composition with a circular focal area and a prominent Xiaohongshu wordmark-style treatment
- **AND** the interior adapts the composition to the existing shared showcase frame dimensions instead of replacing the frame with a literal source image
- **AND** the final styling remains visually consistent with the homepage's dark layered background language

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

