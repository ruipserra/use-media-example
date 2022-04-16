import React from 'react';
import useMedia from 'use-media';

function App() {
  const isWide = useMedia({minWidth: '1000px'});
  const reduceMotion = useMedia('(prefers-reduced-motion: reduce)');

  return (
    <div className="App">
      <p>Screen is wide: {isWide ? '✅' : '❌'}</p>
      <p>Reduced motion: {reduceMotion ? '✅' : '❌'}</p>
    </div>
  );
}

export default App;
