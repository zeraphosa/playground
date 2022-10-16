import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/style.css";

export default function Sidebar() {
  const [active, set_active] = useState(null);
  return (
    <div className="sidebar">
      <div className="sidebar_inner">
        {pages.map((page, idx) => (
          <Link onClick={() => set_active(idx)} 
          key={idx} to={page.route} 
          className={`sidebar_text ${active === idx && "active"}`}
          >
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
