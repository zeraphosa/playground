import { useState } from "react";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");

  return (
    <div>
      <input type="text" placeholder="todo" value={todo} onChange={(e) => setTodo(e.target.value)} />
      <button
        onClick={() => {
          setTodos([...todos, todo]);
          setTodo("");
        }}
      >
        add
      </button>

      {todos.map((item, id) => (
        <div key={id}>
          <p>{item}</p>
        </div>
      ))}
    </div>
  );
}
