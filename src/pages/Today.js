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
          <tr>
            <th>#</th>
            <th>Product</th>
            <th>Paket</th>
            <th>Toplam</th>
          </tr>
          <tr>
            <td>1</td>
            <td>3 eded DOner 6 azn 2 eded Cola 0.5ml 2.8</td>
            <td>8.8 azn</td>
          </tr>
        </table>
      </div>
    </div>
  );
}
