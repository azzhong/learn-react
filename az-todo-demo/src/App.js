import logo from './logo.svg';
import './App.css';
import { useState } from 'react'
import TodoItem from './TodoItem';
import ItemList from './ItemList';
import NewItem from './NewItem';

function App() {

  // Hold item data
  const [todos, setTodos] = useState([
    { name: "Learn", done: true},
    { name: "Read", done: true},
    { name: "Practice", done: true},
    { name: "Learn", done: true},
    { name: "Work out", done: true},
    { name: "Chill", done: true},
  ]);

  // For new task 
  const [item, setItem] = useState('');

  // For new task 
  const addClickedFunc = () => {
    if (!item) {
      return;
    }
    const newTodos = todos.concat([{name: item, done: false}]);
    setTodos(newTodos);
    setItem('');
  };

  // for new task (component version)
  const addItemFunc = (item) => {
    if (!item) {
      return;
    }
    const newTodos = todos.concat([{name: item, done: false}]);
    setTodos(newTodos);
  };

  // For new task 
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

      <h2>New Item without Component</h2>
      <div class='no_component'>
        <input onChange={itemChangedFunc} type='text' value={item}></input>
        <button onClick={addClickedFunc}>Add</button>
      </div>

      <h2>New Item using Component</h2>
      <NewItem addItemFunc={addItemFunc}></NewItem>

      <h2>Demo Using TodoList Component</h2>
      <ItemList todos={todos} itemToggleFunc={toggleChecked}/>

      <h2>Demo Item Component</h2>
      <ul>
        {todos.map(
          (item, idx) => <TodoItem 
            item={item} toggleFunc={e => toggleChecked(e, idx)}></TodoItem>
        )}
      </ul>

      <h2>Demo Without Separate Components</h2>
      <div class='no_component'>
        <ul>
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
    </div>
  );
}

export default App;
