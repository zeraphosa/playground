import { Route, Routes } from "react-router-dom";
import Navbar from "components/Navbar";
import Home from "views/Home";
import Search from "views/Search";
import Collection from "views/Collection";

export default function Content() {
  return (
    <div className="flex-auto">
      <Navbar />
      <div className="px-8 pt-2">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/collection" element={<Collection />} />
        </Routes>
      </div>
    </div>
  );
}
