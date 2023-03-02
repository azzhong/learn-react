import './App.css';
import { Typeahead } from 'react-typeahead';
import { useState } from 'react';


function App() {
  const [selected, setSelected] = useState('not selected');

  const options = [
    'apple',
    'banana',
    'cherry',
    'date',
    'elderberry',
    'fig',
    'grape'
  ];

  const handleSelect = (value) => {
    setSelected(value);
  };

  return (
    <div className="App">
        <Typeahead
          options={options}
          onOptionSelected={handleSelect}
          placeholder="Choose a fruit..."
        />

      <p>Selected: {selected}</p>
    </div>
  );
}

export default App;
