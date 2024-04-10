import { useState } from "react";
import "../NewTodoForm/NewTodoForm.css";

function NewTodoForm({onSubmit}) {
    const [newItem, setNewItem] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        if (newItem === "") return;

        onSubmit(newItem)

        setNewItem("")
    }


    return (
        <form onSubmit={handleSubmit} className="new-item-form">
            <div className="form-row">
                <input placeholder="Enter a new todo item" className="item-input" value={newItem} onChange={e => setNewItem(e.target.value)} type="text" id="item" />
                <button className="add-button">Add</button>
            </div>
        </form>
    )
}

export default NewTodoForm;