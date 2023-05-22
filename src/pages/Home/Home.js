import { useState } from "react";
import "./style.css";

export default function Home() {
  const [showDoner, setShowDoner] = useState(true);

  return (
    <div className="home">
      <div className="menu">
        <div className="menu-item">
          <div>
            <button onClick={(e) => setShowDoner(true)} style={showDoner ? { backgroundColor: "green" } : { backgroundColor: "red" }}>
              Toyuq
            </button>
            <button onClick={(e) => setShowDoner(false)} style={showDoner ? { backgroundColor: "red" } : { backgroundColor: "green" }}>Et</button>
          </div>
          {donerler.map((item, id) => (
            <div key={id}>
              {showDoner
                ? item.nov === "toyuq" &&
                  item.menu.map((e, id) => (
                    <div key={id} className="menu-info" style={showDoner ? { backgroundColor: "green" } : { backgroundColor: "red" }}>
                      <div>{e.tip}</div>
                      <div>
                        <span>-</span>
                        <span>{e.qiy}</span>
                        <span>+</span>
                      </div>
                    </div>
                  ))
                : item.nov === "et" &&
                  item.menu.map((d, id) => (
                    <div key={id} className="menu-info" style={showDoner ? { backgroundColor: "red" } : { backgroundColor: "green" }}>
                      <div>{d.tip}</div>
                      <div>
                        <span>-</span>
                        <span>{d.qiy}</span>
                        <span>+</span>
                      </div>
                    </div>
                  ))}
            </div>
          ))}
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

const donerler = [
  {
    nov: "toyuq",
    menu: [
      {
        tip: "corekde",
        qiy: "2.00",
      },
      {
        tip: "lavasda",
        qiy: "3.00",
      },
      {
        tip: "Bastirma",
        qiy: "3.00",
      },
      {
        tip: "Porsion",
        qiy: "3.00",
      },
      {
        tip: "Sezar",
        qiy: "3.00",
      },
      {
        tip: "Pilov ustu",
        qiy: "3.00",
      },
      {
        tip: "My Doner Roll",
        qiy: "3.00",
      },
      {
        tip: "Pendirli corek",
        qiy: "3.00",
      },
      {
        tip: "Pendirli lavas",
        qiy: "3.00",
      },
      {
        tip: "Limuzin corek",
        qiy: "3.00",
      },
      {
        tip: "Limuzin lavas",
        qiy: "3.00",
      },
      {
        tip: "Saurma corek",
        qiy: "3.00",
      },
      {
        tip: "Saurma lavas",
        qiy: "3.00",
      },
    ],
  },
  {
    nov: "et",
    menu: [
      {
        tip: "corekde",
        qiy: "2.00",
      },
      {
        tip: "lavasda",
        qiy: "3.00",
      },
      {
        tip: "Bastirma",
        qiy: "3.00",
      },
      {
        tip: "Porsion",
        qiy: "3.00",
      },
      {
        tip: "Sezar",
        qiy: "3.00",
      },
      {
        tip: "Pilov ustu",
        qiy: "3.00",
      },
      {
        tip: "My Doner Roll",
        qiy: "3.00",
      },
      {
        tip: "Pendirli corek",
        qiy: "3.00",
      },
      {
        tip: "Pendirli lavas",
        qiy: "3.00",
      },
      {
        tip: "Limuzin corek",
        qiy: "3.00",
      },
      {
        tip: "Limuzin lavas",
        qiy: "3.00",
      },
      {
        tip: "Saurma corek",
        qiy: "3.00",
      },
      {
        tip: "Saurma lavas",
        qiy: "3.00",
      },
      {
        tip: "Iskender",
        qiy: "3.00",
      },
      {
        tip: "Mix Doner",
        qiy: "3.00",
      },
    ],
  },
];
