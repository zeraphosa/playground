import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import Today from "./pages/Today";
import All from "./pages/All";
import Login from "./pages/Login/Login";
import Navbar from "./components/Navbar/Navbar";
import "./style.css";

export default function App() {
  const loginStatus = localStorage.getItem("status");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <div className="content">
          {loginStatus === "true" ? (
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/today" element={<Today />} />
              <Route path="/all" element={<All />} />
            </Routes>
          ) : (
            <Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
          )}
        </div>
      </div>
    </BrowserRouter>
  );
}
