import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

export default function Header() {
  const { dark, language } = useSelector((state) => state.site);

  return (
    <div>
      <nav>
        <NavLink to="/" activeClassName="active">
          Anasayfa
        </NavLink>
        <NavLink to="/about" activeClassName="active">
          Hakkinda
        </NavLink>
        <NavLink to="/profile" activeClassName="active">
          Profil
        </NavLink>
      </nav>
      <div>
        dark mode = {dark ? "true" : "false"} <br />
        language = {language}
      </div>
      <p>======================================================</p>
    </div>
  );
}
