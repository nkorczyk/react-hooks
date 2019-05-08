import React, { useState } from 'react';
import './App.css';

function App() {
  const [shoppingList, setShoppingList] = useState([]);

  const addItemToShoppingList = () => {
    setShoppingList([...shoppingList, "Marchewka"]);
  };

  return (
    <div className="App">
      <ul>
        {shoppingList.map(item => (
          <li>{item}</li>
        ))}
      </ul>
      <input type="text" name="item" />
      <button onClick={addItemToShoppingList}>
        Add
      </button>
    </div>
  );
}

export default App;
