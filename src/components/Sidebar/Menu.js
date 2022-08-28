import { Icon } from "Icons";
import { NavLink } from "react-router-dom";

export default function Menu() {
  return (
    <nav className="px-2">
      <ul className="flex flex-col">
        <li>
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              isActive
                ? "h-10 flex gap-x-4 items-center text-sm font-semibold rounded hover:text-white px-4 bg-active text-white"
                : "h-10 flex gap-x-4 items-center text-sm font-semibold text-link rounded hover:text-white px-4"
            }
          >
            <span>
              <Icon name="home" />
            </span>
            Ana sayfa
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/search"}
            className={({ isActive }) =>
              isActive
                ? "h-10 flex gap-x-4 items-center text-sm font-semibold rounded hover:text-white px-4 bg-active text-white"
                : "h-10 flex gap-x-4 items-center text-sm font-semibold text-link rounded hover:text-white px-4"
            }
          >
            <span>
              <Icon name="search" />
            </span>
            Ara
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/collection"}
            className={({ isActive }) =>
              isActive
                ? "h-10 flex gap-x-4 items-center text-sm font-semibold rounded hover:text-white px-4 bg-active text-white"
                : "h-10 flex gap-x-4 items-center text-sm font-semibold text-link rounded hover:text-white px-4"
            }
          >
            <span>
              <Icon name="collection" />
            </span>
            Kitaplığın
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
