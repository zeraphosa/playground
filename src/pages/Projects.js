import { useState } from "react";
// import terakep from "../assets/terakep.png";
// import zeracodeex from "../assets/zeracodeex.png";
// import zeracodes from "../assets/zeracodes.jpg";
import "../styles/projects.css";

export default function Projects() {
  const [data, set_data] = useState(initialState);
  const [project, set_project] = useState({ img: "", title: "" });

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
    set_data([project, ...data]);
    set_project("");
  }
  return (
    <div className="projects">
      <div className="p_form">
        <input type="text" placeholder="organization" value={project.img || ""} onChange={(e) => set_project({ img: e.target.value, title: null })} className="input" />
        <input type="text" placeholder="title" value={project.title || ""} onChange={(e) => set_project({ img: project.img, title: e.target.value })} className="input" />
        <button className="button" onClick={Add}>
          +
        </button>
      </div>
      <div className="p_list">
        {data.map((item, idx) => {
          return (
            <div key={idx} className="p_btns" onDoubleClick={() => Delete(idx)}>
              <img src={item.img} alt={item.img} />
              <h1>{item.title}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
}

const initialState = [
  {
    img: "terakep",
    title: "whichbin.com",
  },
  {
    img: "zeracodeex",
    title: "node crud",
  },
  {
    img: "zeracodes",
    title: "html css javascript",
  },
];
