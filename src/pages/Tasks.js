import "../styles/style.css";
import "../styles/tasks.css";

export default function Tasks() {
  function Delete() {
    let alert = window.confirm("Are you sure you wish to delete this item?");
    if (alert === true) {
      console.log("Item deleted successfully");
    } else {
      console.log("Canceled");
    }
  }
  return (
    <div className="tasks">
      <div className="tasks_form">
        <input type="text" placeholder="new task" className="input" />
        <button className="button">+</button>
      </div>
      <ul className="tasks_list">
        {data.map((data, idx) => (
          <li key={idx} onDoubleClick={Delete}>
            <input type="checkbox" id={idx} />
            <label for={idx}>{data}</label>
          </li>
        ))}
      </ul>
    </div>
  );
}

const data = ["bugun bunlari ele", "sabah bunlari ele"];
