## ADDED Requirements

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
