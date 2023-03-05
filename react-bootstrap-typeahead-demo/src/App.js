import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { Typeahead } from 'react-bootstrap-typeahead';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-typeahead/css/Typeahead.css';


const options = [
  'Apple',
  'App',
  'Banana',
  'Cherry',
  'Date',
  'Elderberry',
  'Fig',
  'Grape',
  'Honeydew',
  'Iced Melon'
];

function App() {
  const [singleSelections, setSingleSelections] = useState([]);

  return (
    <div>
      <Form.Group>
        <Form.Label>Single Selection</Form.Label>
        <Typeahead
          id="basic-typeahead-single"
          labelKey="name"
          onChange={setSingleSelections}
          options={options}
          placeholder="Choose a state..."
          selected={singleSelections}
          className="rbt-input-main form-control rbt-input"
        />
      </Form.Group>
    </div>
  );
}

export default App;
