export default function Today() {
  // 79 | products | isPaket | totalPrice |

  return (
    <div className="today">
      <div className="header">
        <h2>
          Toplam Paket {19} ədəd {56} azn
        </h2>
        <h2>Toplam Satış {312.7} azn</h2>
      </div>
      <div className="table-container">
        <table>
          <td>
            <th>#</th>
            <th>Product</th>
            <th>Paket</th>
            <th>Toplam</th>
          </td>
          <td>
            <tr>1</tr>
            <tr>3 eded DOner 6 azn 2 eded Cola 0.5ml 2.8</tr>
            <tr>8.8 azn</tr>
          </td>
        </table>
      </div>
    </div>
  );
}
