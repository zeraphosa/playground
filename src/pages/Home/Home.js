import { useEffect, useState } from "react";
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
  const [totalProduct, setTotalProduct] = useState([
    {
      id: 0,
      type: "",
      name: "",
      totalPrice: 0,
      defPrice: 0,
      count: 1,
    },
  ]);

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
        <Menu data={data} setData={setData} menuType={menuType} totalProduct={totalProduct} setTotalProduct={setTotalProduct} />
      </div>
      <div className="check">
        <div>
          <input id="paket" type="checkbox" />
          <label htmlFor="paket">Paket</label>
        </div>
        {totalProduct.map((item, id) => (
          <div key={id}>
            {item.type && (
              <p>
                {item.type} {item.name} {item.count} ədəd {item.totalPrice} azn
              </p>
            )}
          </div>
        ))}
        <div>
          Toplam: <span>12.80</span>
          <button>Göndər</button>
        </div>
      </div>
    </div>
  );
}

function Menu({ data, setData, menuType, totalProduct, setTotalProduct }) {
  function decreaseCount(id) {
    const newState = data.map((item) => {
      if (item.id === id && item.count > 0) {
        return { ...item, count: item.count - 1, totalPrice: item.count > 1 ? item.totalPrice - item.defPrice : item.totalPrice };
      }
      return item;
    });
    setData(newState);
  }

  function increaseCount(id, item) {
    const newState = data.map((item) => {
      if (item.id === id) {
        return { ...item, count: item.count + 1, totalPrice: item.count > 0 ? item.totalPrice + item.defPrice : item.totalPrice };
      }
      return item;
    });
    setData(newState);
    setTotalProduct([{ ...item, count: item.count + 1, totalPrice: item.count > 0 ? item.totalPrice + item.defPrice : item.totalPrice }]);
  }

  return (
    <>
      {data.map(
        (item) =>
          item.type === menuType && (
            <div key={item.id} className="menu-item">
              <div className="menu-info">
                <div>{item.name}</div>
                <div>{Number(item.totalPrice.toFixed(1))}</div>
                <div className="price-info">
                  <span className="count-btn" onClick={() => decreaseCount(item.id)}>
                    -
                  </span>
                  <span>{item.count}</span>
                  <span className="count-btn" onClick={() => increaseCount(item.id, item)}>
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
