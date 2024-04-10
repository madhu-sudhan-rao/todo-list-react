import { useEffect, useState } from "react";
import "../src/App.css"
import NewTodoForm from "./components/NewTodoForm/NewTodoForm";
import TodoList from "./components/TodoList/TodoList";




function App() {
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS")
    if (localValue == null) return [];
    return JSON.parse(localValue)
  });


  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos))
  }, [todos])


  function addTodo(title) {
    setTodos(currentTodos => {
      return [
        ...currentTodos,
        {
          id: crypto.randomUUID(),
          title: title,
          completed: false
        }
      ]
    })
  }


  function toggleTodo(id, completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed }
        }
        return todo;
      })

    })

  }

  function deleteTodo(id) {
    setTodos((currentTodos) => {
      return currentTodos.filter(
        todo => todo.id !== id
      )
    })

  }

  return (
    <body>
        <h1 className="header">Todo List</h1>
      <div className="form"><NewTodoForm onSubmit={addTodo} /></div>
   <div className="main">
        <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
   </div>
    </body>
  )
}

export default App;
