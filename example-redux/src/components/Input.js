import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../stores/todo";

export default function Input() {
  const dispatch = useDispatch();
  const [todo, setTodo] = useState("");

  return (
    <div>
      <input placeholder="todo add" type="text" value={todo} onChange={(e) => setTodo(e.target.value)} />
      <button onClick={() => dispatch(addTodo(todo))}>Add</button>
    </div>
  );
}
