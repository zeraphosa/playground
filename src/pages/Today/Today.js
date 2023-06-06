import { useEffect, useState } from "react";
import "./style.css";
import axios from "axios";

export default function Today({ allData }) {
  const url = "http://localhost:5600/today";
  const [data, setData] = useState([]);
  // 79 | products | isPaket | totalPrice |

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        const res = await axios.get(`${url}`);
        setData(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllData();
  }, [url, data]);

  return (
    <div className="today">
      <div className="header">
        <p>
          Toplam Paket {19} ədəd {56} azn
        </p>
        <p>Toplam Satış {312.7} azn</p>
      </div>
      <table className="table-container">
        <thead>
          <td>#</td>
          <td>Product</td>
          <td>Paket</td>
          <td>Toplam</td>
        </thead>
        {data?.map((item) => (
          <tbody key={item.id}>
            <td>{item.id}</td>
            <td>{item.products}</td>
            <td>{item.isPackage && "TRUE"}</td>
            <td>{item.totalPrice}</td>
          </tbody>
        ))}
      </table>
    </div>
  );
}
