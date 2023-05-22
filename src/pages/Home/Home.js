import { useState } from "react";
import "./style.css";

export default function Home() {
  const [showToyuq, setShowToyuq] = useState(true);
  const [showEt, setShowEt] = useState(false);

  return (
    <div className="home">
      <div class="menu">
        <div class="menu-item">
          <div>
            <button>Toyuq</button>
            <button>Et</button>
          </div>
          <div>Doner menu</div>
        </div>
        <div class="menu-item">Burger, Şorba, Salat, Cig kofte</div>
        <div class="menu-item">Kofte</div>
        <div class="menu-item">Tost</div>
        <div class="menu-item">MY Burger Set, Business Lunch</div>
        <div class="menu-item">Ickiler</div>
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
