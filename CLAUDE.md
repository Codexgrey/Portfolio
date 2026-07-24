# Portfolio site — context for Claude

React (CRA) single-page portfolio for Collins Ovuakporaye, deployed to GitHub Pages at
`https://codexgrey.github.io/Portfolio`. No router — one long scrolling page, sections
linked via anchor IDs (`#home`, `#about`, `#work`, `#design`, `#contact`) with a fixed
nav (`src/components/nav`) and `scroll-behavior: smooth` set globally in `public/index.html`.

## Structure

- `src/devdata.js` — project data for the Development section. Two arrays:
  `featuredWorks` (bigger cards, get a `caseStudy` object and open `CaseStudyModal`
  on click) and `practiceWorks` (smaller cards, plain Github/Demo links). Each entry's
  `img` is a real screenshot of the actual project, not a mockup — see "Screenshots" below.
- `src/designdata.js` / `src/dsdata.js` — the separate Design section (Figma/Dribbble
  mockups), untouched this round, don't confuse with devdata.js.
- `src/context.js` — dark/light mode via React Context + useReducer. Root theme color
  application happens in `App.jsx` (inline style on the top-level div).
- `src/components/caseStudyModal/` — modal showing Problem / My Contribution / Tech
  Stack / Outcome for featured projects.

## Hard constraints

- **Keep the `#59b256` green accent color exactly as-is** — explicit user requirement,
  used throughout (buttons, links, highlights). Don't introduce a different accent.
- **Writing style: no em-dashes.** Use semicolons or hyphens instead, in all copy
  (descriptions, case studies, comments). This applies to anything written for the site,
  not just committed text.

## Screenshots are real, not fabricated

Every project card image is a screenshot of the actual app running, not a placeholder.
For projects not publicly deployed (the RAG system, AI slide generator, threads_for_Agents),
screenshots were captured by cloning the repo, standing up a local Postgres/Redis, running
the real app, and using Playwright to screenshot it — logging in, filling forms, etc. If a
project needs a new/updated screenshot, prefer this approach over asking for one blind, unless
the user already has a specific image they want used (then just wire it in — see the
`Picture1.png` / `NASA.png` / `threadnought.png` pattern: user pushes the file directly into
`src/img/`, tell them what filename to use, then swap the `devdata.js` import and delete the
now-unused old image).

## Sandbox gotcha: fonts don't load here

This dev sandbox's network policy blocks `fonts.googleapis.com`, so Google Fonts (Poppins)
silently fails to load and the browser falls back to a system sans-serif when testing headless
here. This masked a real bug once already: a `<button>`'s browser-default font-size (`13.3333px`)
differs from an `<a>`'s inherited font-size (`16px`) — this is invisible in the fallback font but
very visible with Poppins loaded (heights/wrapping visibly differ). **When a user reports a visual
bug that doesn't reproduce in a local headless screenshot, suspect a font-loading difference before
assuming the fix worked.** Always set `font-size` explicitly on form controls (`button`, `input`,
etc.) rather than relying on inheritance — browsers don't inherit body font-size into form controls
by default.

## CSS gotchas hit this round (don't reintroduce)

- **Bare element selectors are global, not component-scoped.** This is plain CSS (no CSS
  Modules/styled-components), so `button { flex: 1; }` in `contact.css` applied to *every*
  `<button>` on the page, including the unrelated "Case Study" button in the project cards.
  Always scope selectors to a class (`.c-actions button`), never a bare tag, unless you
  genuinely want it site-wide.
- **`flex-basis` beats `width` on a flex item.** If a parent sets `flex: 1` (which implies
  `flex-basis: 0%`) and a media query later tries to override with just `width: 160px`, the
  width is ignored — the media query must also set `flex: none` to restore fixed sizing.
- **`object-fit: cover` vs `contain` depends on the actual image**, not a style preference.
  The hero image (`me3.png`) is a square illustration, not a photo — forcing it into a
  `3:4` card with `cover` cropped it badly. Check what an image actually *is* before
  choosing a crop strategy; when in doubt, use `contain` for illustrations/logos and
  `cover` only for photos where cropping the edges doesn't lose meaning.
- Modal components that toggle `document.body.style.overflow` in a `useEffect` must guard
  on the "is this actually open" condition inside the effect itself — the effect still runs
  on mount even when the component renders `null` afterward, so an unconditional
  `overflow: hidden` will lock page scroll site-wide from first render if the modal is
  always mounted (as `CaseStudyModal` is, inside `DevList`).

## Git workflow notes

The user pushes commits directly to whatever branch is active alongside Claude, often mid-session
(commit messages like "updates:subtle fixes"). Before pushing, always `git fetch` first — pushes
get rejected with a 403/non-fast-forward fairly often, and the fix is `git rebase origin/<branch>`,
not force-push. The `claude/portfolio-adequacy-review-igogbk` branch from that first big redesign
push has been merged to `master` via PR #1 and deleted; `master` is the live branch now.
