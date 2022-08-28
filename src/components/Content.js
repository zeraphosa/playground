import { Route, Routes } from "react-router-dom";
import Navbar from "components/Navbar";
import Home from "views/Home";
import Search from "views/Search";
import Collection from "views/Collection";

export default function Content() {
  return (
    <div className="flex-auto overflow-auto">
      <Navbar />
      <div className="px-8 py-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/collection" element={<Collection />} />
        </Routes>
      </div>
    </div>
  );
}
