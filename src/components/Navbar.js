import Navigation from "./Navbar/Navigation";
import Auth from "./Navbar/Auth";
import { useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  return (
    <div className="h-[3.75rem] flex items-center justify-between px-8">
      <Navigation />
      {location.pathname === "/search" && <div>Search kismindasin!</div>}
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/collection" element={<Collection />} />
      </Routes> */}

      <Auth />
    </div>
  );
}
