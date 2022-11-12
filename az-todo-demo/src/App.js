import logo from './logo.svg';
import './App.css';
import { useState } from 'react'
import TodoItem from './TodoItem';

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
  };

  const itemChangedFunc = (e) => {
    const itemName = e.target.value;
    // setItem({name: itemName, done: true});
    setItem(itemName);
  };

  const toggleChecked = (e, index) => {
    console.log('check box {index} clciked');
    const newTodos = todos.map((item, idx) => {
      if (idx != index) {
        return item;
      } 
      return {name: item.name, done: !item.done};
    });
    setTodos(newTodos);
  }

  const notDone = todos.filter(item => !item.done).length;

  return (
    <div className='App'>
      <h1>AZ Todo List Demo</h1>
      <div>Not done: {notDone}</div>
      <div>
        <input onChange={itemChangedFunc} type='text' value={item}></input>
        <button onClick={addClickedFunc}>Add</button>
      </div>
      <ul>

        {todos.map(
          (item, idx) => <TodoItem 
            item={item} onclick={e => toggleChecked(e, idx)}></TodoItem>
        )}

        {todos.map(
          (item, idx) => {
            return (
              <li>
                <input 
                  type='checkbox' 
                  checked={item.done ? 'checked': ''}
                  onClick={e => toggleChecked(e, idx)}>
                </input>
                {item.name}
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default App;
