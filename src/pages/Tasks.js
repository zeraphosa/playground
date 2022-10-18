import { useState } from "react";
import "../styles/tasks.css";

export default function Tasks() {
  const [task, set_task] = useState("");
  const [data, set_data] = useState(["bugun bunlari ele", "sabah bunlari ele"]);
  function Delete() {
    let alert = window.confirm("Are you sure you wish to delete this item?");
    if (alert === true) {
      console.log("Item deleted successfully");
    } else {
      console.log("Canceled");
    }
  }
  function Add() {
    const new_data = [task, ...data];
    set_data(new_data);
    set_task("");
  }

  return (
    <div className="tasks">
      <div className="tasks_form">
        <input type="text" placeholder="new task" className="input" value={task} onChange={(e) => set_task(e.target.value)} />
        <button className="button" onClick={Add}>
          +
        </button>
      </div>
      <ul className="tasks_list">
        {data.map((data, idx) => (
          <li key={idx} onDoubleClick={Delete}>
            <input type="checkbox" id={idx} />
            <label htmlFor={idx}>{data}</label>
          </li>
        ))}
      </ul>
    </div>
  );
}
