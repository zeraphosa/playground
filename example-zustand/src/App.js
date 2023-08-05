import { useState } from "react";
import useTodosStore from "./store/todos";

export default function App() {
  const todos = useTodosStore((state) => state.todos);
  const addTodo = useTodosStore((state) => state.addTodo);
  const [todo, setTodo] = useState("");

  return (
    <div>
      <input type="text" placeholder="todo" value={todo} onChange={(e) => setTodo(e.target.value)} />
      <button onClick={() => addTodo(todo)}>add</button>
      <div>
        {todos.map((item, id) => (
          <div key={id}>{item}</div>
        ))}
      </div>
    </div>
  );
}
