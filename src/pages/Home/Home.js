import { useState } from "react";
// import Left from "../../components/Left";
// import Others from "../../components/Others";
import menu from "../../menu";
import "./style.css";

export default function Home() {
  const [data, setData] = useState(menu);
  const [menuType, setMenuType] = useState("toyuq");
  const types = [
    {
      type: "toyuq",
      name: "Toyuq dönər",
    },
    {
      type: "et",
      name: "Ət dönər",
    },
    {
      type: "burger",
      name: "Burger",
    },
    {
      type: "sorba",
      name: "Şorba",
    },
    {
      type: "salat",
      name: "Salat",
    },
    {
      type: "cigkofte",
      name: "çİğ köftə",
    },
    {
      type: "kofte",
      name: "köftə",
    },
    {
      type: "tost",
      name: "tost",
    },
    {
      type: "lunch",
      name: "Business lunch",
    },
    {
      type: "icki",
      name: "İçkİ",
    },
  ];

  function menuTypeHandler(value) {
    setMenuType(value);
  }

  return (
    <div className="home">
      <div className="buttons">
        {types.map((item, id) => (
          <button key={id} className={menuType === item.type && "active"} onClick={() => menuTypeHandler(item.type)}>
            {item.name}
          </button>
        ))}
      </div>
      <div className="menu">
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
