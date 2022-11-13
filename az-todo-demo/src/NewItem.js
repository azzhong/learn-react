import { useState } from "react";

// addItemFunc is a function passed in from the main App
// to the component
// to add item to the todos (list of objects), which 
// is declared in App
const NewItem = ({addItemFunc}) => {
    const [item, setItem] = useState('');

    const itemChangedFunc = (e) => {
        const itemName = e.target.value;
        setItem(itemName);
    };

    // call addItemFunc to add the item to the
    // todos list declared in App
    // then clean item (state variable), which is
    // declared in this class
    const addButtonClicked = () => {
        addItemFunc(item);
        setItem('');
    }

    return (
        <div>
            <input 
                type='text'
                onChange={itemChangedFunc} 
                value={item}>
            </input>
            <button onClick={addButtonClicked}>Add</button>
        </div>
    );
};

export default NewItem;