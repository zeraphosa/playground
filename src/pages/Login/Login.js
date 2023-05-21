import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

export default function Login({ setIsLoggedIn }) {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();

  function checkLogin() {
    data.map((item) => {
      if (item.name === name && item.pass === pass) {
        setIsLoggedIn(true);
        const status = "true";
        localStorage.setItem("status", status);
        return navigate("/");
      } else {
        return alert("HATA! Giriş yapılamadı!");
      }
    });
  }

  useEffect(() => {
    navigate("/login");
    setData({ name: "cini", pass: "1234" });
  }, [navigate]);

  return (
    <div className="login-bg">
      <div className="login-container">
        <input type="text" placeholder="ad" autoFocus onChange={(e) => setName(e.target.value)} />
        <input type="password" placeholder="şifre" autoFocus onChange={(e) => setPass(e.target.value)} />
        <button onClick={checkLogin}>Giriş yap</button>
      </div>
    </div>
  );
}
