import { NavLink } from "react-router-dom";
import "./style.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <ul>
        <li>
          <NavLink to="/" className="navlink">MyDönər</NavLink>
        </li>
        <li>
          <NavLink to="/today" className="navlink">Bugünün hesabı</NavLink>
        </li>
        <li>
          <NavLink to="/all" className="navlink">Bütün hesablar</NavLink>
        </li>
      </ul>
    </div>
  );
}
