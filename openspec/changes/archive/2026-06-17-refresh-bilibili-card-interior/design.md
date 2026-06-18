## Context

The homepage carousel already uses a shared outer shell for all platform cards and relies on platform-specific interior treatments to communicate destination identity. The current Bilibili interior in `frontend/src/App.tsx` uses a lightweight play-button composition with a progress bar and time badge, which satisfies the baseline video requirement but still feels closer to a generic media placeholder than a Bilibili-specific destination.

This change is constrained to the Bilibili card's middle showcase frame inside `frontend/src/App.tsx`. The outer card dimensions, hover behavior, carousel rhythm, text layout, and surrounding shell remain unchanged. The new interior should reflect the requested visual direction: a pink-led Bilibili atmosphere with a small amount of blue accenting, a circular avatar focal area using the supplied image, and a more channel-like presentation that still fits the homepage's darker layered visual system.

## Goals / Non-Goals

**Goals:**
- Make the Bilibili interior more recognizable at a glance through a stronger avatar-led channel composition.
- Keep the new treatment fully contained within the existing shared interior frame dimensions across breakpoints.
- Preserve alignment with the homepage's dark, polished, layered visual system while allowing Bilibili's pink-blue palette to read clearly.
- Keep enough video semantics in the frame that visitors still read the card as a motion or channel destination.
- Prepare the design so the supplied avatar image can be cut out, circularly framed, and integrated without looking pasted on top of the card.

**Non-Goals:**
- Changing the shared outer shell, card width, card height, carousel spacing, or typography outside the Bilibili interior.
- Reworking the Bilibili card's headline, description, handle, or action copy as part of this interior refresh.
- Replacing the entire showcase frame with a literal screenshot from Bilibili.
- Introducing new dependencies, APIs, runtime data, or changes to other platform interiors.

## Decisions

### Use an avatar-led channel-stage composition inside the existing frame

The Bilibili interior will move from the current centered play-button placeholder to a layout centered on:
- a circular avatar focal area positioned toward the left side
- a bold Bilibili wordmark or channel-title treatment on the right
- a thin progress or playback line near the bottom to preserve video semantics
- a small top label and time badge to reinforce the feel of a published clip or channel highlight

This direction gives the card a stronger platform identity while still reading as media-oriented.

Alternative considered:
- Keeping the current structure and only recoloring the play button. This was rejected because color changes alone would not meaningfully improve recognizability.

### Keep pink as the dominant accent and use blue as a controlled highlight

The composition will lead with Bilibili-adjacent pink lighting and surfaces, while blue appears in narrow edges, glow trims, or small interface strokes. This matches the user's preference for a pink-led palette with a little blue and keeps the card from drifting into a colder video-player look.

Alternative considered:
- Keeping blue as the dominant accent because the current card data uses a blue accent color. This was rejected because the requested visual direction is more pink-forward and the stronger pink identity will differentiate the card more clearly.

### Integrate the supplied avatar through a cleaned circular cutout treatment

The supplied image will be prepared as a local asset with its surrounding white background removed or visually neutralized before it is placed into the circular focal frame. The avatar area should then be layered with a soft pink glow, subtle blue rim light, and a restrained shadow so it feels embedded in the card instead of pasted into it.

Alternative considered:
- Dropping the uploaded image in as-is inside a circle. This was rejected because the white background would weaken the card's polish and break cohesion with the surrounding dark surfaces.

### Preserve the existing frame footprint and reduce secondary detail on small screens

The implementation will reuse the current Bilibili showcase frame box model already allocated by the shared shell. Secondary elements such as small labels, wave lines, or decorative trims can reduce in prominence or disappear on smaller breakpoints while the avatar, title treatment, and playback cue remain visible.

Alternative considered:
- Expanding the interior or introducing a denser interface-like layout. This was rejected because the current carousel relies on stable dimensions and light visual density for mobile readability.

## Risks / Trade-offs

- [Avatar cutout still shows edge artifacts] -> Refine the image treatment before placement and soften the integration with glow, rim light, and shadow.
- [Pink-led palette overpowers adjacent cards] -> Keep the strongest pink localized inside the Bilibili frame and preserve the dark base surfaces around it.
- [Channel-style composition loses the sense of video playback] -> Retain one or two clear media cues such as a progress line, time badge, or small play indicator.
- [Mobile layout becomes cramped] -> Keep the circular avatar and title as the primary read, and reduce or hide secondary UI detail on smaller sizes.
