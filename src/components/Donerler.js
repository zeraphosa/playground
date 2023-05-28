import { useState } from "react";

export default function Donerler({ data, setData }) {
  const [showDoner, setShowDoner] = useState(true);

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
    <>
      <div>
        <button onClick={() => setShowDoner(true)} style={{ backgroundColor: "#5C8984" }} className="doner-btn">
          Toyuq
        </button>
        <button onClick={() => setShowDoner(false)} style={{ backgroundColor: "#867070" }} className="doner-btn">
          Ət
        </button>
      </div>
      <div>
        {data.map((item) => {
          if ((showDoner && item.type === "toyuq") || (!showDoner && item.type === "et")) {
            return (
              <div key={item.id}>
                <div className="menu-info" style={item.type === "toyuq" ? { backgroundColor: "#5C8984" } : { backgroundColor: "#867070" }}>
                  <div>{item.name}</div>
                  <div>{item.price}</div>
                  <div className="price-info">
                    <span className="count-btn" onClick={() => decreaseCount(item.id, "toyuq")}>
                      -
                    </span>
                    <span>{item.count}</span>
                    <span className="count-btn" onClick={() => increaseCount(item.id, "toyuq")}>
                      +
                    </span>
                  </div>
                </div>
              </div>
            );
          }
          return null;
        })}
      </div>
    </>
  );
}
