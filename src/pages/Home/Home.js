import { useState } from "react";
// import Left from "../../components/Left";
// import Others from "../../components/Others";
import menu from "../../menu";
import "./style.css";

export default function Home() {
  const [data, setData] = useState(menu);
  const [menuType, setMenuType] = useState("toyuq");

  return (
    <div className="home">
      <div className="buttons">
        <button onClick={() => setMenuType("toyuq")}>Toyuq dönər</button>
        <button onClick={() => setMenuType("et")}>Ət dönər</button>
        <button onClick={() => setMenuType("burger")}>Burger</button>
        <button onClick={() => setMenuType("sorba")}>Şorba</button>
        <button onClick={() => setMenuType("salat")}>Salat</button>
        <button onClick={() => setMenuType("cigkofte")}>çİğ köftə</button>
        <button onClick={() => setMenuType("kofte")}>köftə</button>
        <button onClick={() => setMenuType("tost")}>tost</button>
        <button onClick={() => setMenuType("lunch")}>Business lunch</button>
        <button onClick={() => setMenuType("icki")}>İçkİ</button>
      </div>
      <div className="menu">
        <h1>{menuType}</h1>
        {data.map(
          (item) =>
            item.type === menuType && (
              <div key={item.id}>
                <div className="menu-info">
                  <div>{item.name}</div>
                  <div>{item.price}</div>
                  <div className="price-info">
                    <span className="count-btn">-</span>
                    <span>{item.count}</span>
                    <span className="count-btn">+</span>
                  </div>
                </div>
              </div>
            ),
        )}
      </div>
      <div className="check">Check</div>
    </div>
  );
}

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
