import "../styles/style.css";
import "../styles/tasks.css";

export default function Tasks() {
  return (
    <div className="tasks">
      <div className="tasks_form">
        <input type="text" placeholder="new task" className="input" />
        <button className="button">+</button>
      </div>
      <ul className="tasks_list">
        {data.map((data, idx) => (
          <li key={idx}>
            <input type="checkbox" id="n" />
            <label for="n">{data}</label>
          </li>
        ))}
      </ul>
    </div>
  );
}

const data = ["bugun bunlari ele", "sabah bunlari ele"];
