import logo from './logo.svg';
import './App.css';
import { useState } from 'react'

function App() {

  const [todos, setTodos] = useState([
    "Learn",
    "Read",
    "Practice",
    "Learn",
    "Work out",
    "Chill",
  ]);

  const [item, setItem] = useState('');

  const addClickedFunc = () => {
    if (!item) {
      return;
    }
    const newTodos = todos.concat([item]);
    setTodos(newTodos);
    setItem('');
  }

  const itemChangedFunc = (e) => {
    const item = e.target.value;
    setItem(item);
  }

  return (
    <div className='App'>
      <h1>AZ Todo List Demo</h1>
      <div>
        <input onChange={itemChangedFunc} type='text' value={item}></input>
        <button onClick={addClickedFunc}>Add</button>
      </div>
      <ul>
        {todos.map(item => <li>{item}</li>)}
      </ul>
    </div>
  );
}

export default App;
