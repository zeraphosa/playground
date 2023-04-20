import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./Sidebar";
import Projects from "./projects/Projects";

export default function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Sidebar />
        <div>
          <Routes>
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
