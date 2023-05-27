import { useState } from "react";
import "./style.css";

export default function Home() {
  const [donerler, setDonerler] = useState([
    {
      nov: "toyuq",
      menu: [
        {
          id: 0,
          name: "corekde",
          price: "2.00",
          count: 1,
        },
        {
          id: 1,
          name: "lavasda",
          price: "3.00",
          count: 3,
        },
        {
          id: 2,
          name: "Bastirma",
          price: "3.00",
          count: 0,
        },
        {
          id: 3,
          name: "Porsion",
          price: "3.00",
          count: 0,
        },
        {
          id: 4,
          name: "Sezar",
          price: "3.00",
          count: 0,
        },
        {
          id: 5,
          name: "Pilov ustu",
          price: "3.00",
          count: 0,
        },
        {
          id: 6,
          name: "My Doner Roll",
          price: "3.00",
          count: 0,
        },
        {
          id: 7,
          name: "Pendirli corek",
          price: "3.00",
          count: 0,
        },
        {
          id: 8,
          name: "Pendirli lavas",
          price: "3.00",
          count: 0,
        },
        {
          id: 9,
          name: "Limuzin corek",
          price: "3.00",
          count: 0,
        },
        {
          id: 10,
          name: "Limuzin lavas",
          price: "3.00",
          count: 0,
        },
        {
          id: 11,
          name: "Saurma corek",
          price: "3.00",
          count: 0,
        },
        {
          id: 12,
          name: "Saurma lavas",
          price: "3.00",
          count: 0,
        },
      ],
    },
    {
      nov: "et",
      menu: [
        {
          id: 0,
          name: "corekde",
          price: "2.00",
          count: 0,
        },
        {
          id: 1,
          name: "lavasda",
          price: "3.00",
          count: 0,
        },
        {
          id: 2,
          name: "Bastirma",
          price: "3.00",
          count: 0,
        },
        {
          id: 3,
          name: "Porsion",
          price: "3.00",
          count: 0,
        },
        {
          id: 4,
          name: "Sezar",
          price: "3.00",
          count: 0,
        },
        {
          id: 5,
          name: "Pilov ustu",
          price: "3.00",
          count: 0,
        },
        {
          id: 6,
          name: "My Doner Roll",
          price: "3.00",
          count: 0,
        },
        {
          id: 7,
          name: "Pendirli corek",
          price: "3.00",
          count: 0,
        },
        {
          id: 8,
          name: "Pendirli lavas",
          price: "3.00",
          count: 0,
        },
        {
          id: 9,
          name: "Limuzin corek",
          price: "3.00",
          count: 0,
        },
        {
          id: 10,
          name: "Limuzin lavas",
          price: "3.00",
          count: 11,
        },
        {
          id: 12,
          name: "Saurma corek",
          price: "3.00",
          count: 0,
        },
        {
          id: 13,
          name: "Saurma lavas",
          price: "3.00",
          count: 0,
        },
        {
          id: 14,
          name: "Iskender",
          price: "3.00",
          count: 0,
        },
        {
          id: 15,
          name: "Mix Doner",
          price: "3.00",
          count: 0,
        },
      ],
    },
  ]);

  return (
    <div className="home">
      <div className="menu">
        <div className="menu-item">
          <Donerler donerler={donerler} setDonerler={setDonerler} />
        </div>
        <div className="menu-item">Burger, Şorba, Salat, Cig kofte</div>
        <div className="menu-item">Kofte</div>
        <div className="menu-item">Tost</div>
        <div className="menu-item">MY Burger Set, Business Lunch</div>
        <div className="menu-item">Ickiler</div>
      </div>
      <div className="info">Paket, Col, Normal</div>
      <div className="done">Sifarisi tamamla</div>
    </div>
  );
}

function Donerler({ donerler, setDonerler }) {
  const [showDoner, setShowDoner] = useState(true);

  function decreaseCount(el) {
    const newState = donerler.map((item) => {
      if (item.menu.id === el.id && item.menu.count > 0) {
        return { ...item.menu, count: item.menu.count - 1 };
      }
      return item.menu;
    });
    setDonerler(newState);
    // const newState = donerler.map((item) => {
    //   if (item.nov === "toyuq" && item.menu.id === id && item.menu.count > 0) {
    //     return { ...item.menu, count: item.menu.count - 1 };
    //   }
    //   return item.menu;
    // });
    // setDonerler(newState);
  }

  function increaseCount(id, type) {
    const filteredData = donerler.filter((item) => item.nov === type && item.menu);
    filteredData.map((item) =>
      item.menu.map((e) => {
        if (e.id === id) {
          console.log("e:", { ...e, count: e.count + 1 });
          setDonerler([ { ...e, count: e.count + 1 }]);
        }
        return item;
      }),
    );
  }

  return (
    <>
      <div>
        <button onClick={() => setShowDoner(true)} style={{ backgroundColor: "#5C8984" }} className="doner-btn">
          Toyuq
        </button>
        <button onClick={() => setShowDoner(false)} style={{ backgroundColor: "#867070" }} className="doner-btn">
          Et
        </button>
      </div>
      {donerler.map((item, id) => (
        <div key={id}>
          {showDoner
            ? item.nov === "toyuq" &&
              item.menu.map((e) => (
                <div key={e.id} className="menu-info" style={{ backgroundColor: "#5C8984" }}>
                  <div>{e.name}</div>
                  <div>{e.price} azn</div>
                  <div className="price-info">
                    <span className="count-btn" onClick={() => decreaseCount(e.id, "toyuq")}>
                      -
                    </span>
                    <span>{e.count}</span>
                    <span className="count-btn" onClick={() => increaseCount(e.id, "toyuq")}>
                      +
                    </span>
                  </div>
                </div>
              ))
            : item.nov === "et" &&
              item.menu.map((d, id) => (
                <div key={id} className="menu-info" style={{ backgroundColor: "#867070" }}>
                  <div>{d.name}</div>
                  <div>{d.price} azn</div>
                  <div className="price-info">
                    <span className="count-btn" onClick={() => decreaseCount(d.id, "et")}>
                      -
                    </span>
                    <span>{d.count}</span>
                    <span className="count-btn" onClick={() => increaseCount(d.id, "et")}>
                      +
                    </span>
                  </div>
                </div>
              ))}
        </div>
      ))}
    </>
  );
}
