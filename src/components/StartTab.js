import "../css/screen.css";
export default function StartTab({ starttab }) {
  if (starttab === true) {
    return (
      <div className="start_tab">
        <div className="tab_top"></div>
        <div className="tab_bottom">
          <div className="tb_container">
            <div className="tb_about">
              <img src="/pp.jpg" alt="pp" />
              <p>Zaur Sharifov</p>
            </div>
            <div className="tb_btns">butonlar</div>
          </div>
        </div>
      </div>
    );
  } else return;
}
