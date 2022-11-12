function TodoItem({ item, toggleFunc }) {
    return (
        <li>
            <input 
                type='checkbox'
                checked={item.done ? 'checked' : ''}
                onClick={toggleFunc}>
            </input>
            {item.name}
        </li>
    );
};

export default TodoItem;
