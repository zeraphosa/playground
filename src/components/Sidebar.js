import { Link } from "react-router-dom";
import "../styles/style.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar_inner">
        {pages.map((page, idx) => (
          <Link key={idx} to={page.route} className="sidebar_text">
            <p>{page.name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

const pages = [
  { name: "T", route: "/" },
  { name: "N", route: "/notes" },
  { name: "A", route: "/accounts" },
  { name: "P", route: "/projects" },
  { name: "W", route: "/watchlist" },
];
