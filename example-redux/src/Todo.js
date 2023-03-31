import React from "react";

export default function Todo({ setTodos, setTodo, todo, todos }) {
  function handleDelete(item) {
    setTodos((todos) => todos.filter((t) => t !== item));
  }
  return (
    <div>
      <div>
        <input placeholder="todo add" type="text" value={todo} onChange={(e) => setTodo(e.target.value)} />
        <button onClick={() => setTodos([...todos, todo])}>Add</button>
      </div>
      <div>
        {todos.map((item, id) => (
          <div key={id} className="list">
            <p>{item}</p>
            <button className="delete" onClick={() => handleDelete(item)}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
