## 1. Refresh Bilibili interior composition

- [x] 1.1 Redesign `BilibiliInterior` in `frontend/src/App.tsx` so the middle showcase frame uses a circular avatar focal area, a stronger Bilibili title treatment, and lightweight playback cues.
- [x] 1.2 Keep the new Bilibili composition inside the existing shared showcase frame dimensions without changing the outer platform card shell or surrounding text layout.

## 2. Prepare the avatar-led visual treatment

- [x] 2.1 Derive or add a local Bilibili avatar asset from the user-supplied image with the white background cleaned up for circular presentation.
- [x] 2.2 Integrate the avatar treatment with pink-led glow, subtle blue highlight detail, and layered dark surfaces so the focal area feels embedded in the card.

## 3. Align with homepage visual system

- [x] 3.1 Tune the Bilibili interior colors, gradients, borders, and shadows so the new composition matches the homepage's dark layered presentation while keeping Bilibili's pink-blue identity readable.
- [x] 3.2 Preserve clear video semantics through restrained playback details such as a progress line, time badge, or small play cue without falling back to a generic placeholder feel.

## 4. Verify responsive fit

- [x] 4.1 Adjust the Bilibili interior so the avatar focal area, title treatment, and playback cues remain readable at the current mobile and desktop card sizes.
- [x] 4.2 Review the updated card in the carousel to confirm the headline, description, handle, and action still fit cleanly and no card dimensions or overflow behavior regress.
