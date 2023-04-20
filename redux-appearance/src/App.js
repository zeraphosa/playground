import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./Sidebar";
import Projects from "./projects/Projects";
import ProjectDetails from "./ProjectDetails";

export default function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <div>
          <Routes>
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:projectName" element={<ProjectDetails />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
