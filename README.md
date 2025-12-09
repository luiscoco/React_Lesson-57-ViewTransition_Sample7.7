# Custom Types ViewTransition Demo (React 19 canary)

Vite + React 19 canary sample that shows how to label transitions with custom types and map them to different animations. The demo cycles through three pages and applies slide-in/slide-out animations based on whether you navigated forward or back.

## What this demo shows

- Tagging navigation intent: buttons call `startTransition` and `addTransitionType` so React knows whether you're going forward or backward.

  ```jsx
  startTransition(() => {
    addTransitionType('navigation-forward');
    setIndex(prev => (prev + 1) % pages.length);
  });
  ```

- Mapping custom types to animations: `ViewTransition` assigns the custom types to CSS classes so each direction can animate differently.

  ```jsx
  <ViewTransition
    default={{
      'navigation-back': 'vt-slide-right',
      'navigation-forward': 'vt-slide-left',
    }}
  >
    <div className="page">
      <h2>{pages[index]}</h2>
      <p>This page animates differently depending on navigation type.</p>
    </div>
  </ViewTransition>
  ```

- Minimal CSS for per-type motion: slide left when moving forward, slide right when going back.

  ```css
  ::view-transition-new(.vt-slide-left) { animation: vt-slide-left-in 250ms; }
  ::view-transition-old(.vt-slide-left) { animation: vt-slide-left-out 250ms; }
  ::view-transition-new(.vt-slide-right) { animation: vt-slide-right-in 250ms; }
  ::view-transition-old(.vt-slide-right) { animation: vt-slide-right-out 250ms; }
  ```

- Simple carousel of Page A/B/C so you can trigger both transition types quickly.

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
