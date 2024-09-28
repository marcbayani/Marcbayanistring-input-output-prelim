import React, { useState } from 'react';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [outputValue, setOutputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setOutputValue(inputValue);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter"
        />
        <button type="submit">Submit</button>
      </form>
      <h2>Output: {outputValue}</h2>
    </div>
  );
}

export default App;
