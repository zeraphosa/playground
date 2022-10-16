import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Notes from "./pages/Notes";
import Tasks from "./pages/Tasks";
import Accounts from "./pages/Accounts";
import Projects from "./pages/Projects";
import Watchlist from "./pages/Watchlist";
import "./styles/sidebar.css";

export default function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Sidebar />
        <div className="main">
          <Routes>
            <Route path="/" element={<Tasks />} />
            <Route path="/notes" element={<Notes />} />
            <Route path="/accounts" element={<Accounts />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/watchlist" element={<Watchlist />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
