import React, { useState } from "react";
import Todo from "./Todo";
import "./style.css";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");

  return (
    <div>
      <Todo todos={todos} todo={todo} setTodo={setTodo} setTodos={setTodos} />
     
    </div>
  );
}
