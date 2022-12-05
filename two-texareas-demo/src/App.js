import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [textarea1, setTextarea1] = useState('');
  const [textarea2, setTextarea2] = useState('');

  const handleTextarea1Change = (event) => {
    setTextarea1(event.target.value);
    setTextarea2(transformText(event.target.value));
  }

  const handleTextarea2Change = (event) => {
    setTextarea1(inverseTransformText(event.target.value));
    setTextarea2(event.target.value);
  }

  const transformText = (text) => {
    return JSON.stringify(sortByCount(text), null, 4);
  }

  // place holder
  const inverseTransformText = (text) => {
    // Implement your inverse text transformation function here
    return text;
  }

  function sortByCount(text) {
    // Remove punctuation and split the text into an array of words by whitespaces
    const words = text.trim().replace(/[^\w\s]/gi, '').split(/\s+/);
  
    // Create an object to store the frequency of each word
    const wordCounts = {};
  
    // Iterate over the words and count the frequency of each word
    words.forEach((word) => {
      if (wordCounts[word]) {
        wordCounts[word] += 1;
      } else {
        wordCounts[word] = 1;
      }
    });

    const entries = Object.entries(wordCounts);
    // Sort the words by their frequency of occurrence
    entries.sort((a, b) => b[1] - a[1]);
    const ret = Object.fromEntries(entries);

    return ret;
  }

  return (
    <div>
      <h1>Word Count</h1>
      <div class="container">
        <div>
          <h2>Input Text</h2>
          <textarea
            value={textarea1}
            onChange={handleTextarea1Change}
          />
        </div>
        <div>
          <h2>Word Count</h2>
          <textarea
            value={textarea2}
            onChange={handleTextarea2Change}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
