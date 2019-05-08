import React, { useState } from 'react';
import './App.css';

function App() {
  const [shoppingList, setShoppingList] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addItemToShoppingList = value => {
    setShoppingList([...shoppingList, value]);
  };

  const handleInputChange = event => {
    setInputValue(event.target.value);
  };

  return (
    <div className="App">
      <ul>
        {shoppingList.map(item => (
          <li>{item}</li>
        ))}
      </ul>
      <input
        type="text"
        name="item"
        value={inputValue}
        onChange={handleInputChange}
      />
      <h1>{inputValue}</h1>
      <button
        onClick={() => addItemToShoppingList(inputValue)}>
        Add
      </button>
    </div>
  );
}

export default App;
