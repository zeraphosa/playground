import { useState } from "react";
import "../styles/whatchlist.css";

export default function Watchlist() {
  const [data, set_data] = useState(initialState);
  const [wl, set_wl] = useState({ name: "", type: "", status: "" });

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
    set_data([wl, ...data]);
    set_wl("");
  }

  return (
    <div className="watchlist">
      <div className="wl_form">
        <input type="text" placeholder="name" className="input" value={wl.name || ""} onChange={(e) => set_wl({ name: e.target.value, type: null, status: null })} />
        <input type="text" placeholder="type" className="input" value={wl.type || ""} onChange={(e) => set_wl({ name: wl.name, type: e.target.value, status: null })} />
        <input type="text" placeholder="status" className="input" value={wl.status || ""} onChange={(e) => set_wl({ name: wl.name, type: wl.type, status: e.target.value })} />
        <button className="button" onClick={Add}>
          +
        </button>
      </div>
      <table className="wl_list">
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, idx) => (
            <tr className="wl_items" key={idx} onDoubleClick={() => Delete(idx)}>
              <td>{item.name}</td>
              <td className="wl_type">
                <p className={`${(item.type === "serie" && "blue") || (item.type === "film" && "purple") || (item.type === "doc" && "gray")}`}>{item.type}</p>
              </td>
              <td className="wl_status">
                <p className={`${(item.status === "half" && "yellow") || (item.status === "watch" && "red") || (item.status === "watched" && "green")}`}>{item.status}</p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const initialState = [
  {
    name: "Bates Motel",
    type: "serie",
    status: "half",
  },
  {
    name: "The walking dead",
    type: "serie",
    status: "watched",
  },
  {
    name: "Wanted",
    type: "film",
    status: "watched",
  },
  {
    name: "Day shift",
    type: "film",
    status: "watched",
  },
  {
    name: "Downsizing",
    type: "film",
    status: "watch",
  },
  {
    name: "Capitani",
    type: "doc",
    status: "watch",
  },
];
