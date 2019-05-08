import React, { useState } from 'react';
import './App.css';

function App() {
  const [counter, changeCounter] = useState(0); // returns => [state, setState]

  return (
    <div className="App">
      <h1>{counter}</h1>
      <button
        onClick={() => changeCounter(counter - 1)}>
        -
        </button>
      <button
        onClick={() => changeCounter(counter + 1)}>
        +
      </button>
    </div>
  );
}

export default App;
