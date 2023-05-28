export default function Others({ data, setData }) {
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
                  <div className="menu-info" style={{ backgroundColor: "#829460"}}>
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
                  <div className="menu-info" style={{ backgroundColor: "#665A48"}}>
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
                  <div className="menu-info" style={{ backgroundColor: "#655D8A"}}>
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
                  <div className="menu-info" style={{ backgroundColor: "#BB6464"}}>
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
          <h1>My Burger Set</h1>
          {data.map((item) => {
            if (item.type === "set") {
              return (
                <div key={item.id}>
                  <div className="menu-info" style={{ backgroundColor: "#9E9D89" }}>
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
          <h1>Business Lunch</h1>
          {data.map((item) => {
            if (item.type === "lunch") {
              return (
                <div key={item.id}>
                  <div className="menu-info" style={{ backgroundColor: "#E6B566" }}>
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
          <h1>Tost</h1>
          {data.map((item) => {
            if (item.type === "tost") {
              return (
                <div key={item.id}>
                  <div className="menu-info" style={{ backgroundColor: "#9656A1" }}>
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
  