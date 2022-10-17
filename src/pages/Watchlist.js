export default function Watchlist() {
  return (
    <div className="watchlist">
      <div className="wl_form">
        <input type="text" placeholder="name" className="input" />
        <input type="text" placeholder="type" className="input" />
        <input type="text" placeholder="status" className="input" />
        <button className="button">+</button>
      </div>
      <table>
        <th>
          <tr>Name</tr>
          <tr>Type</tr>
          <tr>Status</tr>
        </th>
        {data.map((item, idx) => (
          <td>
            <tr>{item.name}</tr>
            <tr>{item.type}</tr>
            <tr>{item.status}</tr>
          </td>
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
];
