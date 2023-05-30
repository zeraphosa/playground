import { useCallback, useEffect, useRef, useState } from "react";
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

  return (
    <div className="home">
      <div className="buttons">
        {types.map((item, id) => (
          <button key={id} className={`${menuType === item.type && "active"}`} onClick={() => setMenuType(item.type)}>
            {item.name}
          </button>
        ))}
      </div>
      <div className="menu">
        <Menu data={data} setData={setData} menuType={menuType} />
      </div>
      <div className="check">
        <div>
          <input id="paket" type="checkbox" />
          <label htmlFor="paket">Paket</label>
        </div>
        <div>
          <p>Toyuq: Çörək 5 ədəd - 10.00</p>
          <p>Cola 0.5ml 2 ədəd - 2.80</p>
        </div>
        <div>
          Toplam: <span>12.80</span>
          <button>Göndər</button>
        </div>
      </div>
    </div>
  );
}

function Menu({ data, setData, menuType }) {

  function decreaseCount(id) {
    const newState = data.map((item) => {
      if (item.id === id && item.count > 0) {
        return { ...item, count: item.count - 1 };
      }
      return item;
    });
    setData(newState);
  }
  function increaseCount(id, lastPrice) {
    // localStorage.setItem("price", lastPrice);

    const newState = data.map((item) => {
      if (item.id === id) {
        return { ...item, count: item.count + 1, price: item.count > 0 ? parseFloat(localStorage.getItem("price")) + item.price : item.price };
      }
      return item;
    });
    setData(newState);

    // console.log( price: item.count >= 1 ? item.price = (item.count -1)* item.price : item.price)
  }

  return (
    <>
      {data.map(
        (item) =>
          item.type === menuType && (
            <div key={item.id} className="menu-item">
              <div className="menu-info">
                <div>{item.name}</div>
                <div>{item.price}</div>
                <div className="price-info">
                  <span className="count-btn" onClick={() => decreaseCount(item.id, item.price)}>
                    -
                  </span>
                  <span>{item.count}</span>
                  <span className="count-btn" onClick={() => increaseCount(item.id, item.price)}>
                    +
                  </span>
                </div>
              </div>
            </div>
          ),
      )}
    </>
  );
}
