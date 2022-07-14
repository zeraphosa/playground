import { useState } from "react";
import Screen from "./components/Screen";
import Start from "./components/Start";
import "./css/app.css";

function App() {
  const [starttab, setStarttab] = useState(false);
  return (
    <div className="app">
      <Screen starttab={starttab} setStarttab={setStarttab} />
      <Start starttab={starttab} setStarttab={setStarttab} />
    </div>
  );
}

export default App;
