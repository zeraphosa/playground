import { useState } from "react";
import Donerler from "../../components/Donerler";
import "./style.css";
import menu from "../../menu";

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

function Others({ data, setData }) {
  function decreaseCount() {}
  function increaseCount() {}

  return (
    <>
      <div className="others">
        <h1>Burger</h1>
        {data.map((item) => {
          if (item.type === "burger") {
            return (
              <div key={item.id}>
                <div className="menu-info">
                  <div>{item.name}</div>
                  <div>{item.price}</div>
                  <div className="price-info">
                    <span className="count-btn" onClick={() => decreaseCount(item.id, "toyuq")}>
                      -
                    </span>
                    <span>{item.count}</span>
                    <span className="count-btn" onClick={() => increaseCount(item.id, "toyuq")}>
                      +
                    </span>
                  </div>
                </div>
              </div>
            );
          }
          return null;
        })}
      </div>
      <div className="others">
        <h1>Şorba</h1>
        {data.map((item) => {
          if (item.type === "sorba") {
            return (
              <div key={item.id}>
                <div className="menu-info">
                  <div>{item.name}</div>
                  <div>{item.price}</div>
                  <div className="price-info">
                    <span className="count-btn" onClick={() => decreaseCount(item.id, "toyuq")}>
                      -
                    </span>
                    <span>{item.count}</span>
                    <span className="count-btn" onClick={() => increaseCount(item.id, "toyuq")}>
                      +
                    </span>
                  </div>
                </div>
              </div>
            );
          }
          return null;
        })}
      </div>
      <div className="others">
        <h1>Salat</h1>
        {data.map((item) => {
          if (item.type === "salat") {
            return (
              <div key={item.id}>
                <div className="menu-info">
                  <div>{item.name}</div>
                  <div>{item.price}</div>
                  <div className="price-info">
                    <span className="count-btn" onClick={() => decreaseCount(item.id, "toyuq")}>
                      -
                    </span>
                    <span>{item.count}</span>
                    <span className="count-btn" onClick={() => increaseCount(item.id, "toyuq")}>
                      +
                    </span>
                  </div>
                </div>
              </div>
            );
          }
          return null;
        })}
      </div>
      <div className="others">
        <h1>Çiğ köftə</h1>
        {data.map((item) => {
          if (item.type === "cigkofte") {
            return (
              <div key={item.id}>
                <div className="menu-info">
                  <div>{item.name}</div>
                  <div>{item.price}</div>
                  <div className="price-info">
                    <span className="count-btn" onClick={() => decreaseCount(item.id, "toyuq")}>
                      -
                    </span>
                    <span>{item.count}</span>
                    <span className="count-btn" onClick={() => increaseCount(item.id, "toyuq")}>
                      +
                    </span>
                  </div>
                </div>
              </div>
            );
          }
          return null;
        })}
      </div>
    </>
  );
}
