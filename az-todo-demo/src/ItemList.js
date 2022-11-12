import TodoItem from "./TodoItem";

// example of declaring a function as a const
const ItemList = ({todos, itemToggleFunc}) => {
    return (
        <ul>
            {
                todos.map(
                    (item, idx) => {
                        return <TodoItem 
                            item={item} 
                            toggleFunc={e => itemToggleFunc(e, idx) }/>;
                    })
            }
        </ul>
    );
}

export default ItemList;