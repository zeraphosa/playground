import { useState } from "react";

export default function All() {
  const [data, setData] = useState([
    {
      id: 0,
      name: "corek",
      count: 0,
      defPrice: 2,
      totalPrice: 2,
    },
    {
      id: 1,
      name: "lavas",
      count: 0,
      defPrice: 2.5,
      totalPrice: 2.5,
    },
  ]);
  const [totalProducts, setTotalProducts] = useState([]);

  function increaseCount(id, item) {
    const newState = data.map((item) => {
      if (item.id === id) {
        return { ...item, count: item.count + 1, totalPrice: item.count > 0 ? item.totalPrice + item.defPrice : item.totalPrice };
      }
      return item;
    });
    setData(newState);

    const changedProducts = newState.filter((item)=> item.count !== 0);
    setTotalProducts(changedProducts)
  }

  return (
    <div>
      <h1>All</h1>
      {data.map((item) => (
        <div key={item.id} style={{ display: "flex", gap: "30px", padding: "30px" }}>
          <p>{item.name}</p>
          <p>{item.count}</p>
          <p>{item.totalPrice}</p>
          <button onClick={() => increaseCount(item.id, item)}>ARTIR</button>
        </div>
      ))}
      <div>
        TOTAL:{" "}
        {totalProducts.map((item) => (
          <div>
            <p>{item.name}</p>
            <p>{item.count}</p>
            <p>{item.totalPrice}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
