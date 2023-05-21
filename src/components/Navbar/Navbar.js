import { NavLink } from "react-router-dom";
import "./style.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <ul>
        <li>
          <NavLink to="/" className="navlink">MyDoner</NavLink>
        </li>
        <li>
          <NavLink to="/today" className="navlink">Bugünün hesabatı</NavLink>
        </li>
        <li>
          <NavLink to="/all" className="navlink">Bütün hesabatlar</NavLink>
        </li>
      </ul>
    </div>
  );
}
