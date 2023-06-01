import { useEffect, useState } from "react";
import menu from "../../menu";
import "./style.css";

export default function Home({ allData, setAllData }) {
  const [data, setData] = useState(menu);
  const [menuType, setMenuType] = useState(localStorage.getItem("menuType") === null ? "toyuq" : localStorage.getItem("menuType"));
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
  const [totalProduct, setTotalProduct] = useState([]);
  const [allTotalPrice, setAllTotalPrice] = useState(0);
  const [isPackage, setIsPackage] = useState(false);
  const newArray = [];

  function handleSendData() {
    let newName = "";
    totalProduct.map((item) => {
      if (item.id) {
        newName = item.name + " " + item.count + " ədəd " + item.totalPrice + " ";
        newArray.push(newName);
        setAllData([{ id: item.id, products: newArray, totalPrice: allTotalPrice, isPackage: isPackage }]);
      }
      return item;
    });
    data.map((item) => {
      item.count = 0;
      item.totalPrice = item.defPrice;
    });
    setTotalProduct([]);
    setIsPackage(false);
    setAllTotalPrice(0);
  }

  useEffect(() => {
    const array = [];
    localStorage.setItem("menuType", menuType);
    totalProduct.map((item) => {
      return array.push(item.totalPrice);
    });
    setAllTotalPrice(array.reduce((a, b) => a + b, 0));
  }, [totalProduct, menuType]);

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
        <div className="check-btn" onClick={() => setIsPackage(!isPackage)} style={isPackage === true ? { backgroundColor: "green" } : { backgroundColor: "#2c3333" }}>
          <h2>Paket</h2>
        </div>
        <div className="check-info">
          {totalProduct?.map((item, id) => (
            <p key={id}>
              <span>{item.count}</span> ədəd {item.name} <span>{Number(item.totalPrice.toFixed(1))}</span> azn
            </p>
          ))}
        </div>
        <div className="check-btn" onClick={handleSendData}>
          <p>Toplam</p>
          <span>{allTotalPrice}</span>
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
    const changedProducts = newState.filter((item) => item.count !== 0);
    setTotalProduct(changedProducts);
  }

  function increaseCount(id) {
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
                  <span className="count-btn" onClick={() => increaseCount(item.id)}>
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
