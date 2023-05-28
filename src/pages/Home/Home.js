import { useState } from "react";
import Donerler from "../../components/Donerler";
import Others from "../../components/Others";
import menu from "../../menu";
import "./style.css";

export default function Home() {
  const [data, setData] = useState(menu);

  return (
    <div className="home">
      <div className="menu">
        <div className="menu-item">
          <Donerler data={data} setData={setData} />
        </div>
        <div className="menu-item">
          <Others data={data} setData={setData} />
        </div>
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
