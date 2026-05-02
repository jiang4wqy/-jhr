# UI Kit — 同窗 Tóngchuāng Website

A click-thru recreation of the four core surfaces of the 同窗 marriage-matchmaking website for university students.

## Surfaces in this kit

1. **Marketing landing** — what 同窗 is, who it's for, how to join.
2. **Browse / Discover** — the daily curated grid of suggested classmates.
3. **Profile** — magazine-style profile page (the "showcasing yourself" centerpiece).
4. **Chat** — direct messaging after a mutual 想认识.

## Files

- `index.html` — the click-thru. Load this in a browser; navigate via the top nav and clickable cards.
- `App.jsx` — root with screen routing.
- `components/` — small, reusable JSX.
  - `Header.jsx` — sticky nav.
  - `Footer.jsx` — page footer.
  - `Marketing.jsx` — landing screen.
  - `Browse.jsx` — discover grid.
  - `Profile.jsx` — single-profile page.
  - `Chat.jsx` — messaging.
  - `ProfileCard.jsx`, `Tag.jsx`, `Button.jsx`, `IconButton.jsx`, `HeartButton.jsx` — atoms.
  - `data.js` — fake students seeded for the click-thru.
  - `icons.jsx` — Lucide-style inline SVG icons.

## How to extend

- Pull `colors_and_type.css` from the project root for design tokens.
- Copy any of the JSX components into a new project verbatim — they all read CSS variables from `colors_and_type.css`.
- The faux state lives in `App.jsx`'s `useState` hooks. Replace with real data sources as needed.

## Caveats

- This is a **visual + interaction recreation**, not production code. Form validation, real auth, real chat transport are stubs.
- Photos in `assets/placeholders/` are procedurally generated — replace with real student photos before any real launch.
- No screenshots or codebase were provided; the design is built from the brief and design-system principles, so v1 is open to iteration.
