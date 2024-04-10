

function TodoItem({ completed, id, title, toggleTodo, deleteTodo }) {
    return (
        <li list-style-type="none">
            <label>
                <input type="checkbox" checked={completed} onChange={e => toggleTodo(id, e.target.checked)} />
                {title}
            </label>
            <button
                onClick={() => deleteTodo(id)}
                className="delete-button">Delete
            </button>
        </li>
    )
}

export default TodoItem;