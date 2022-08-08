import React, { useState } from "react";

export default function WithUseReducer() {
  const [todos, set_todos] = useState([]);
  const [todo, set_todo] = useState();

  function submitHandle(e) {
    e.preventDefault();
    set_todos([...todos, todo]);
    set_todo("");
  }

  return (
    <>
      <h1>Todo app with useStates</h1>
      <form onSubmit={submitHandle}>
        <input
          type="text"
          value={todo}
          onChange={(e) => set_todo(e.target.value)}
        />
        <button type="submit" disabled={!todo}>
          ekle
        </button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </>
  );
}
