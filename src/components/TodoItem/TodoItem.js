import "../TodoItem/TodoItem.css"

function TodoItem({ completed, id, title, toggleTodo, deleteTodo }) {
    return (
        <li>
            <div>
                <label>
                    <input type="checkbox" checked={completed} onChange={e => toggleTodo(id, e.target.checked)} />
                    <span className="todo-item">{title}</span>
                </label>
            </div>
            <div>
                <button
                    onClick={() => deleteTodo(id)}
                    className="delete-button">Delete
                </button>
            </div>
        </li>
    )
}

export default TodoItem;