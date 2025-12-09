# Custom Types ViewTransition Demo (React 19 canary)

Vite + React 19 canary sample that shows how to label transitions with custom types and map them to different animations. The demo cycles through three pages and applies slide-in/slide-out animations based on whether you navigated forward or back.

## Features

- Uses `startTransition` + `addTransitionType` to tag navigation as forward/back.
- `ViewTransition` maps those custom types to CSS classes (`vt-slide-left` and `vt-slide-right`).
- Simple page carousel (Page A/B/C) so you can see each transition type in action.
- Minimal, copy-pastable CSS keyframes demonstrating how to author per-type animations.

## How to run

- Requirements: Node 18+ and npm.
- Install dependencies:
  ```bash
  npm install
  ```
- Start the dev server and open the printed URL (defaults to http://localhost:5173):
  ```bash
  npm run dev
  ```
- Optional: build and preview the production bundle:
  ```bash
  npm run build
  npm run preview
  ```
