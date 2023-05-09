import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import "./style.css";
import Home from "./components/Home";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import { useEffect, useState } from "react";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) navigate("/signin");
  }, [isLoggedIn, navigate]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}
