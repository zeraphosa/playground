import React, { useState } from "react";
import Input from "./components/Input";
import Theme from "./components/Theme";
import Todo from "./components/Todo";
import "./style.css";

export default function App() {
  const [theme, setTheme] = useState(false);
  return (
    <div className={`${theme ? "dark" : "light"}`}>
      <Input />
      <Todo />
      <Theme theme={theme} setTheme={setTheme} />
    </div>
  );
}
