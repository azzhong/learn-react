import './NewItem.css';

function TodoItem({ item, toggleFunc }) {
    return (
        <div class='each_item_component'>
            <li >
                <input 
                    type='checkbox'
                    checked={item.done ? 'checked' : ''}
                    onClick={toggleFunc}>
                </input>
                {item.name}
            </li>
        </div>
    );
};

export default TodoItem;
