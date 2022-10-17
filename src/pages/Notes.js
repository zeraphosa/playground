export default function Notes() {
  return (
    <div className="notes">
      <div className="notes_form">
        <input type="text" placeholder="new task" className="input" />
        <button className="button">+</button>
      </div>
      <div className="notes_list"></div>
    </div>
  );
}
