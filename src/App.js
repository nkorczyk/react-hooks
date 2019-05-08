import React, { useState } from 'react';

import { countries } from './countries';
import './App.css';

function App() {
  const [countryList, setCountryList] = useState(countries);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = event => {
    setInputValue(event.target.value);
    setCountryList(countryList
      .filter(country => country.toLocaleLowerCase().includes(event.target.value.toLocaleLowerCase())));

    if (!event.target.value.length) setCountryList(countries);
  };

  return (
    <div className="App">
      <label for="country">Search Country</label>
      <input
        id="country"
        type="text"
        name="country"
        value={inputValue}
        onChange={handleInputChange}
      />
      <ul>
        {countryList.map(country => (
          <li>{country}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
