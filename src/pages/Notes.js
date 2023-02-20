import { useState } from "react";
import "../styles/notes.css";

export default function Notes() {
  const [data, set_data] = useState(initialState);
  const [note, set_note] = useState({ title: "", text: "" });

  function Delete(idx) {
    let alert = window.confirm("Are you sure you wish to delete this item?");
    if (alert === true) {
      set_data(data.filter((item, id) => idx !== id));
      console.log("Item deleted successfully");
    } else {
      console.log("Canceled");
    }
  }
  function Add() {
    set_data([note, ...data]);
    set_note("");
  }
  return (
    <div className="notes">
      <div className="notes_form">
        <input type="text" placeholder="title" value={note.title || ""} onChange={(e) => set_note({ title: e.target.value, text: null })} className="input" />
        <input type="text" placeholder="new note" value={note.text || ""} onChange={(e) => set_note({ title: note.title, text: e.target.value })} className="input" />
        <button className="button" onClick={Add}>
          +
        </button>
      </div>
      <div className="notes_list">
        {data.map((item, idx) => (
          <div key={idx} className="card" onDoubleClick={() => Delete(idx)}>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const initialState = [
  {
    title: "Greencard ucun bilgi",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    title: "Greencard ucun bilgi",
    text: "lorem ipsum dolor omet si",
  },
  {
    title: "Greencard ucun bilgi",
    text: "lorem ipsum dolor omet si",
  },
];
