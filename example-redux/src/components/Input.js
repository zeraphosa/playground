import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addTodo } from "../stores/todo";
import Theme from "./Theme";

export default function Input() {
  const dispatch = useDispatch();
  const { theme } = useSelector((state) => state.theme);
  const [todo, setTodo] = useState("");

  return (
    <div className={`${theme ? "dark" : "light"}`}>
      <input placeholder="todo add" type="text" value={todo} onChange={(e) => setTodo(e.target.value)} />
      <button onClick={() => dispatch(addTodo(todo))}>Add</button>
      <Theme />
    </div>
  );
}
