import { NavLink } from "react-router-dom";
export default function Sidebar() {
  return (
    <div style={{ display: "flex", gap: "20px" }}>
      {data.map((item, id) => (
        <NavLink key={id} to={item.t}>
          {item.n}
        </NavLink>
      ))}
      <NavLink to="/projects">Create new project</NavLink>
    </div>
  );
}

const data = [
  {
    n: "Portfolio project",
    t: "/projects/portfolio-project",
  },
  {
    n: "Blog project",
    t: "/projects/blog-project",
  },
  {
    n: "Admin panel project",
    t: "/projects/admin-panel-project",
  },
];
