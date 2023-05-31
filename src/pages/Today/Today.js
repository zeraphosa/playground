import "./style.css";

export default function Today({ allData }) {
  // 79 | products | isPaket | totalPrice |
  console.log(allData)
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
          <th>#</th>
          <th>Product</th>
          <th>Paket</th>
          <th>Toplam</th>
        </thead>
        {allData.map((item) => (
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
