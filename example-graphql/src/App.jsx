import "./App.css";
import { useEffect, useState } from "react";

export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/cljs6zn1e133h01umhh8fdq2e/master", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: `{
          bookmarks {
            id
            name
            url
          }
        }`,
      }),
    })
      .then((res) => res.json())
      .then((res) => setData(res.data.bookmarks));
  }, []);

  return (
    <div>
      <h1>Bookmarks</h1>
      {data.map((item)=> (
        <div key={item.id}>
          <h2>{item.name}</h2>
          <p>{item.url}</p>
          <p>{item.id}</p>
        </div>
      ))}
    </div>
  );
}
