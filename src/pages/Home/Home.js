import { useState } from "react";
// import Left from "../../components/Left";
// import Others from "../../components/Others";
import menu from "../../menu";
import "./style.css";

export default function Home() {
  const [data, setData] = useState(menu);

  return (
    <div className="home">
      <div className="buttons">
        <button>Toyuq dönər</button>
        <button>Ət dönər</button>
        <button>Burger</button>
        <button>Şorba</button>
        <button>Salat</button>
        <button>çİğ köftə</button>
        <button>köftə</button>
        <button>tost</button>
        <button>Business lunch</button>
        <button>İçkİ</button>
      </div>
      <div className="menu">Menu</div>
      <div className="check">Check</div>
    </div>




    // <div className="home">
    //   <div className="menu">
    //     <div className="menu-item">
    //   <Left data={data} setData={setData} />
    //     </div>
    //     <div className="menu-item">
    //       <Others data={data} setData={setData} />
    //     </div>
    //   </div>
    //   <div className="info">Paket</div>
    //   <div className="done">Sifarişi tamamla</div>
    // </div>
  );
}
