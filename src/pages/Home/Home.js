import { useState } from "react";
import "./style.css";

export default function Home() {
  const [donerler, setDonerler] = useState([
    {
      nov: "toyuq",
      menu: [
        {
          id: 0,
          tip: "corekde",
          qiy: "2.00",
          cnt: 1,
        },
        {
          id: 1,
          tip: "lavasda",
          qiy: "3.00",
          cnt: 3,
        },
        {
          id: 2,
          tip: "Bastirma",
          qiy: "3.00",
          cnt: 0,
        },
        {
          id: 3,
          tip: "Porsion",
          qiy: "3.00",
          cnt: 0,
        },
        {
          id: 4,
          tip: "Sezar",
          qiy: "3.00",
          cnt: 0,
        },
        {
          id: 5,
          tip: "Pilov ustu",
          qiy: "3.00",
          cnt: 0,
        },
        {
          id: 6,
          tip: "My Doner Roll",
          qiy: "3.00",
          cnt: 0,
        },
        {
          id: 7,
          tip: "Pendirli corek",
          qiy: "3.00",
          cnt: 0,
        },
        {
          id: 8,
          tip: "Pendirli lavas",
          qiy: "3.00",
          cnt: 0,
        },
        {
          id: 9,
          tip: "Limuzin corek",
          qiy: "3.00",
          cnt: 0,
        },
        {
          id: 10,
          tip: "Limuzin lavas",
          qiy: "3.00",
          cnt: 0,
        },
        {
          id: 11,
          tip: "Saurma corek",
          qiy: "3.00",
          cnt: 0,
        },
        {
          id: 12,
          tip: "Saurma lavas",
          qiy: "3.00",
          cnt: 0,
        },
      ],
    },
    {
      nov: "et",
      menu: [
        {
          tip: "corekde",
          qiy: "2.00",
          cnt: 0,
        },
        {
          tip: "lavasda",
          qiy: "3.00",
          cnt: 0,
        },
        {
          tip: "Bastirma",
          qiy: "3.00",
          cnt: 0,
        },
        {
          tip: "Porsion",
          qiy: "3.00",
          cnt: 0,
        },
        {
          tip: "Sezar",
          qiy: "3.00",
          cnt: 0,
        },
        {
          tip: "Pilov ustu",
          qiy: "3.00",
          cnt: 0,
        },
        {
          tip: "My Doner Roll",
          qiy: "3.00",
          cnt: 0,
        },
        {
          tip: "Pendirli corek",
          qiy: "3.00",
          cnt: 0,
        },
        {
          tip: "Pendirli lavas",
          qiy: "3.00",
          cnt: 0,
        },
        {
          tip: "Limuzin corek",
          qiy: "3.00",
          cnt: 0,
        },
        {
          tip: "Limuzin lavas",
          qiy: "3.00",
          cnt: 0,
        },
        {
          tip: "Saurma corek",
          qiy: "3.00",
          cnt: 0,
        },
        {
          tip: "Saurma lavas",
          qiy: "3.00",
          cnt: 0,
        },
        {
          tip: "Iskender",
          qiy: "3.00",
          cnt: 0,
        },
        {
          tip: "Mix Doner",
          qiy: "3.00",
          cnt: 0,
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

  function decreaseCount() {
      const count = donerler.map((item) => item.nov === "toyuq" && item.menu.map((e) => e.cnt));
      console.log(count)
      setDonerler(...donerler, count > 0 ? count - 1 : 0);
  }
  function increaseCount(cnt) {
    // setCount(cnt => cnt + 1);
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
                  <div>{e.tip}</div>
                  <div>{e.qiy} azn</div>
                  <div className="price-info">
                    <span className="count-btn" onClick={decreaseCount}>
                      -
                    </span>
                    <span>{e.cnt}</span>
                    <span className="count-btn" onClick={increaseCount}>
                      +
                    </span>
                  </div>
                </div>
              ))
            : item.nov === "et" &&
              item.menu.map((d, id) => (
                <div key={id} className="menu-info" style={{ backgroundColor: "#867070" }}>
                  <div>{d.tip}</div>
                  <div>{d.qiy} azn</div>
                  <div className="price-info">
                    <span className="count-btn">-</span>
                    <span>{0}</span>
                    <span className="count-btn">+</span>
                  </div>
                </div>
              ))}
        </div>
      ))}
    </>
  );
}
