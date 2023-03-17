import axios from "axios";
import React, { useEffect, useState } from "react";

export default function App() {
  const url = "https://api.example.com/";
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      axios.get(url).then((res) => {
        setData(res.data);
      });
    }
    getData();
  }, []);

  return (
    <div>
      {data.map((item, idx) => (
        <p key={idx}>{item.text}</p>
      ))}
    </div>
  );
}
