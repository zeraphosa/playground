import "../styles/whatchlist.css";

export default function Watchlist() {
  return (
    <div className="watchlist">
      <div className="wl_form">
        <input type="text" placeholder="name" className="input" />
        <input type="text" placeholder="type" className="input" />
        <input type="text" placeholder="status" className="input" />
        <button className="button">+</button>
      </div>
      <table className="wl_list">
        <tr>
          <th>Name</th>
          <th>Type</th>
          <th>Status</th>
        </tr>
        {data.map((item, idx) => (
          <tr className="wl_items" key={idx}>
            <td>{item.name}</td>
            <td className={`wl_type ${(item.type === "serie" && "blue") || (item.type === "film" && "purple") || (item.type === "doc" && "gray")}`}>{item.type}</td>
            <td className={`wl_status ${(item.status === "half" && "yellow") || (item.status === "watch" && "red") || (item.status === "watched" && "green")}`}>{item.status}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

const data = [
  {
    name: "Bates Motel",
    type: "serie",
    status: "half",
  },
  {
    name: "TWD",
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
