import React, { useState } from 'react';
import Typeahead from 'react-typeahead';

const Autocomplete = () => {
  const [selected, setSelected] = useState([]);

  const options = [
    'apple',
    'banana',
    'cherry',
    'date',
    'elderberry',
    'fig',
    'grape'
  ];

//   const handleSelect = (value) => {
//     setSelected(value);
//   };

  return (
    <div>
        <h1>hello world</h1>
      {/* <Typeahead
        // options={options}
        // placeholder="Type a fruit"
        selected={selected}
      /> */}
      <p>You selected: {selected}</p>
    </div>
  );
};

export default Autocomplete;
