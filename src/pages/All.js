import { useState } from "react";

export default function All() {
  const [data, setData] = useState([
    {
      id: 0,
      name: "corek",
      count: 2,
    },
    {
      id: 1,
      name: "lavas",
      count: 3,
    },
  ]);

  function decreaseCount(item) {
    // setData([...data, item.count > 0 ? item.count - 1 : 0]);
  }

  function increaseCount(id) {
    setData([...data, data.filter((item) => item.id === id).map((item) => (item.count = item.count + 1))]);
    // setData([...data, exampl.map((item)=> item.count + 1)])
    // setData([...data, data.map((item) => item.id === id && item.name === "deneme")]);
    // setData([...data, item.count + 1]);
  }

  return (
    <div>
      <h1>All</h1>
      {data.map((item) => (
        <div key={item.id} style={{ display: "flex", gap: "30px", padding: "30px" }}>
          <p>{item.name}</p>
          <p>{item.count}</p>
          <button onClick={() => decreaseCount(item)}>AZALT</button>
          <button onClick={() => increaseCount(item.id)}>ARTIR</button>
        </div>
      ))}
    </div>
  );
}
