## MODIFIED Requirements

### Requirement: Platform link carousel cards
The system SHALL render the homepage carousel as personal platform link cards rather than cloned blog article cards.

#### Scenario: Known platform cards are present
- **WHEN** the homepage carousel is rendered
- **THEN** the carousel includes cards for Bilibili, NetEase Cloud Music, GitHub, Xiaohongshu, and email
- **AND** the Bilibili card links to the configured Bilibili profile page at `https://space.bilibili.com/390509974?spm_id_from=333.788.0.0`
- **AND** the NetEase Cloud Music card links to the configured NetEase user page at `https://music.163.com/#/user/home?id=1570725353`
- **AND** the GitHub card links to the configured GitHub profile page at `https://github.com/Hddcc`
- **AND** the Xiaohongshu card links to the configured Xiaohongshu profile page at `https://www.xiaohongshu.com/user/profile/5c9c67e6000000001601c6c4`
- **AND** the email card links to a configured contact action for `531210118@qq.com`
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
- **AND** activating the card opens a compose flow for `531210118@qq.com`
