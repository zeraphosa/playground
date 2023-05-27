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

  function decreaseCount(id) {
    const newState = data.map((item) => {
      if (item.id === id && item.count > 0) {
        return { ...item, count: item.count - 1 };
      }
      return item;
    });
    setData(newState);
  }

  function increaseCount(id) {
    const newState = data.map((item) => {
      if (item.id === id) {
        return { ...item, count: item.count + 1 };
      }
      return item;
    });
    setData(newState);
  }

  return (
    <div>
      <h1>All</h1>
      {data.map((item) => (
        <div key={item.id} style={{ display: "flex", gap: "30px", padding: "30px" }}>
          <p>{item.name}</p>
          <p>{item.count}</p>
          <button onClick={() => decreaseCount(item.id)}>AZALT</button>
          <button onClick={() => increaseCount(item.id)}>ARTIR</button>
        </div>
      ))}
    </div>
  );
}
