import { useState } from "react";
import Donerler from "../../components/Donerler";
import "./style.css";
import menu from "../../menu";

export default function Home() {
  const [donerler, setDonerler] = useState(menu);

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
