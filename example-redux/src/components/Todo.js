import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodo } from "../stores/todo";
import Theme from "./Theme";

export default function Todo() {
  const { todos } = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        {todos.map((item) => (
          <div key={item} className="list">
            <p>{item}</p>
            <button className="delete" onClick={() => dispatch(deleteTodo(item))}>
              Delete
            </button>
          </div>
        ))}
      </div>
      <Theme />
    </div>
  );
}
