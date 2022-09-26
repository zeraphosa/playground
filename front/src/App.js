import Sidebar from "components/Sidebar";
import { BrowserRouter as Router } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div className="flex bg-gray-800">
        <Sidebar />
        <div className="p-7 text-2xl font-semibold flex-1 h-screen">Main page</div>
      </div>
    </Router>
  );
}
