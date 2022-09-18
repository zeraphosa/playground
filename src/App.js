import Footer from "components/Footer";
import Navbar from "components/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "views/Home";

export default function App() {
  return (
    <Router>
      <div className="w-[100%] h-[auto] bg-back text-text">
        <Navbar />
        <Home />
        <Footer />
      </div>
    </Router>
  );
}
