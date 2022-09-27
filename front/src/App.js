import Sidebar from "components/Sidebar";
import Accounts from "pages/Accounts";
import Notes from "pages/Notes";
import Projects from "pages/Projects";
import Tasks from "pages/Tasks";
import Watchlist from "pages/Watchlist";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div className="flex bg-gray-800">
        <Sidebar />
        <div className="p-7 text-2xl font-semibold flex-1 h-screen">
          <Router>
            <Routes>
              <Route path="/" element={<Tasks />} />
              <Route path="/notes" element={<Notes />} />
              <Route path="/accounts" element={<Accounts />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/watchlist" element={<Watchlist />} />
            </Routes>
          </Router>
        </div>
      </div>
    </Router>
  );
}
