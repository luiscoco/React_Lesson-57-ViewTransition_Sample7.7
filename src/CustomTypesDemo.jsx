// CustomTypesDemo.jsx
import {
  ViewTransition,
  addTransitionType,
  startTransition,
  useState,
} from 'react';

export default function CustomTypesDemo() {
  const [index, setIndex] = useState(0);
  const pages = ['Page A', 'Page B', 'Page C'];

  function goForward() {
    startTransition(() => {
      addTransitionType('navigation-forward');
      setIndex(prev => (prev + 1) % pages.length);
    });
  }

  function goBack() {
    startTransition(() => {
      addTransitionType('navigation-back');
      setIndex(prev => (prev === 0 ? pages.length - 1 : prev - 1));
    });
  }

  return (
    <div className="custom-types-demo">
      <div className="controls">
        <button onClick={goBack}>Back</button>
        <button onClick={goForward}>Forward</button>
      </div>
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
    </div>
  );
}
