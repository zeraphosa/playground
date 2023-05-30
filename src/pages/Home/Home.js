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
        <Menu data={data} setData={setData} menuType={menuType} setTotalProduct={setTotalProduct} />
      </div>
      <div className="check">
        <div className="check-btn">
          <p>Paket</p>
        </div>
        <div className="check-info">
          {totalProduct.map(
            (item, id) =>
              item.type && (
                <p key={id}>
                  {item.name} <span>{item.count}</span> ədəd <span>{Number(item.totalPrice.toFixed(1))}</span>
                </p>
              ),
          )}
        </div>
        <div className="check-btn">
          <span>12.80</span>
        </div>
      </div>
    </div>
  );
}

function Menu({ data, setData, menuType, setTotalProduct }) {
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
    const changedProducts = newState.filter((item) => item.count !== 0);
    setTotalProduct(changedProducts);
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
