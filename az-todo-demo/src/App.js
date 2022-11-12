import logo from './logo.svg';
import './App.css';
import { useState } from 'react'

function App() {

  const [todos, setTodos] = useState([
    { name: "Learn", done: true},
    { name: "Read", done: true},
    { name: "Practice", done: true},
    { name: "Learn", done: true},
    { name: "Work out", done: true},
    { name: "Chill", done: true},
  ]);

  const [item, setItem] = useState('');

  const addClickedFunc = () => {
    if (!item) {
      return;
    }
    const newTodos = todos.concat([{name: item, done: false}]);
    setTodos(newTodos);
    setItem('');
  }

  const itemChangedFunc = (e) => {
    const itemName = e.target.value;
    // setItem({name: itemName, done: true});
    setItem(itemName);
  }

  return (
    <div className='App'>
      <h1>AZ Todo List Demo</h1>
      <div>
        <input onChange={itemChangedFunc} type='text' value={item}></input>
        <button onClick={addClickedFunc}>Add</button>
      </div>
      <ul>
        {todos.map(item => <li>{item.name}</li>)}
      </ul>
    </div>
  );
}

export default App;
