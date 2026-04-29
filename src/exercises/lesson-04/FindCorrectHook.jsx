// TOPIC: Choose the correct tool: useRef vs useState

import { useRef } from 'react';

// TASK: Make sure it updates the text *without* triggering a re-render
export default function FindCorrectHook() {
  const clickCount = useRef(0);

  function handleClick() {
    clickCount.current++;
  }

  return (
    <div>
      <h2>useRef vs useState Decision</h2>
      <button onClick={handleClick}>{clickCount.current} Clicks</button>
    </div>
  );
}
