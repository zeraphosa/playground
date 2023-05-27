import { useEffect, useState } from "react";
import "./style.css";

export default function Home() {
  const [donerler, setDonerler] = useState([
    {
      id: 0,
      type: "toyuq",
      name: "çörək",
      price: "2.00",
      count: 1,
    },
    {
      id: 1,
      type: "toyuq",
      name: "lavaş",
      price: "3.00",
      count: 3,
    },
    {
      id: 2,
      type: "toyuq",
      name: "Bastırma",
      price: "3.00",
      count: 0,
    },
    {
      id: 3,
      type: "toyuq",
      name: "Porsion",
      price: "3.00",
      count: 0,
    },
    {
      id: 4,
      type: "toyuq",
      name: "Sezar",
      price: "3.00",
      count: 0,
    },
    {
      id: 5,
      type: "toyuq",
      name: "Pilov üstü",
      price: "3.00",
      count: 0,
    },
    {
      id: 6,
      type: "toyuq",
      name: "My Dönər Roll",
      price: "3.00",
      count: 0,
    },
    {
      id: 7,
      type: "toyuq",
      name: "Pendirli çörək",
      price: "3.00",
      count: 0,
    },
    {
      id: 8,
      type: "toyuq",
      name: "Pendirli lavaş",
      price: "3.00",
      count: 0,
    },
    {
      id: 9,
      type: "toyuq",
      name: "Limuzin çörək",
      price: "3.00",
      count: 0,
    },
    {
      id: 10,
      type: "toyuq",
      name: "Limuzin lavaş",
      price: "3.00",
      count: 0,
    },
    {
      id: 11,
      type: "toyuq",
      name: "Şaurma çörək",
      price: "3.00",
      count: 0,
    },
    {
      id: 12,
      type: "toyuq",
      name: "Şaurma lavaş",
      price: "3.00",
      count: 0,
    },

    {
      id: 13,
      type: "et",
      name: "çörək",
      price: "2.00",
      count: 0,
    },
    {
      id: 14,
      type: "et",
      name: "lavaş",
      price: "3.00",
      count: 0,
    },
    {
      id: 15,
      type: "et",
      name: "Bastırma",
      price: "3.00",
      count: 0,
    },
    {
      id: 16,
      type: "et",
      name: "Porsion",
      price: "3.00",
      count: 0,
    },
    {
      id: 17,
      type: "et",
      name: "Sezar",
      price: "3.00",
      count: 0,
    },
    {
      id: 18,
      type: "et",
      name: "Pilov üstü",
      price: "3.00",
      count: 0,
    },
    {
      id: 19,
      type: "et",
      name: "My Dönər Roll",
      price: "3.00",
      count: 0,
    },
    {
      id: 20,
      type: "et",
      name: "Pendirli çörək",
      price: "3.00",
      count: 0,
    },
    {
      id: 21,
      type: "et",
      name: "Pendirli lavaş",
      price: "3.00",
      count: 0,
    },
    {
      id: 22,
      type: "et",
      name: "Limuzin çörək",
      price: "3.00",
      count: 0,
    },
    {
      id: 23,
      type: "et",
      name: "Limuzin lavaş",
      price: "3.00",
      count: 11,
    },
    {
      id: 24,
      type: "et",
      name: "Şaurma çörək",
      price: "3.00",
      count: 0,
    },
    {
      id: 25,
      type: "et",
      name: "Şaurma lavaş",
      price: "3.00",
      count: 0,
    },
    {
      id: 26,
      type: "et",
      name: "İskəndər",
      price: "3.00",
      count: 0,
    },
    {
      id: 27,
      type: "et",
      name: "Mix Dönər",
      price: "3.00",
      count: 0,
    },
  ]);

  return (
    <div className="home">
      <div className="menu">
        <div className="menu-item">
          <Donerler donerler={donerler} setDonerler={setDonerler} />
        </div>
        <div className="menu-item">Burger, Şorba, Salat, Ciğ köftə</div>
        <div className="menu-item">Köftə</div>
        <div className="menu-item">Tost</div>
        <div className="menu-item">My Burger Set, Business Lunch</div>
        <div className="menu-item">İçkilər</div>
      </div>
      <div className="info">Paket, Çöl, Normal</div>
      <div className="done">Sifarişi tamamla</div>
    </div>
  );
}

function Donerler({ donerler, setDonerler }) {
  const [showDoner, setShowDoner] = useState(true);

  function decreaseCount(id) {
    const newState = donerler.map((item) => {
      if (item.id === id && item.count > 0) {
        return { ...item, count: item.count - 1 };
      }
      return item;
    });
    setDonerler(newState);
  }

  function increaseCount(id) {
    const newState = donerler.map((item) => {
      if (item.id === id) {
        return { ...item, count: item.count + 1 };
      }
      return item;
    });
    setDonerler(newState);
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
        {donerler.map((item) => {
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
