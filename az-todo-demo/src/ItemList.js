import TodoItem from "./TodoItem";

// example of declaring a function as a const
const ItemList = ({todos, itemToggleFunc}) => {
    return (
        <div class='item_list_component'>
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
        </div>
    );
}

export default ItemList;