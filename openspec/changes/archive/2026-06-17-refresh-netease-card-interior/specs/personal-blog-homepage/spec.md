## MODIFIED Requirements

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
