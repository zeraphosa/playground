import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import { useEffect, useState } from "react";

export default function App() {
  const dispatch = useDispatch();
  const mode = useSelector((state) => state.mode.appearance);
  const [theme, setTheme] = useState("light");

  function handleClick() {
    dispatch({ type: "setAppearance" });
  }

  useEffect(() => {
    if (mode === true) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  },[mode]);

  return (
    <div className="app">
      <div className={`${theme}`}>Navbar</div>
      <div>Sidebar</div>
      <div>Content</div>
      <button onClick={handleClick}>Toggle Appearance</button>
    </div>
  );
}
