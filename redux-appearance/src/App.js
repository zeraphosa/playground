import useDarkMode from "./hooks/useDarkMode";
import "./App.css";

export default function App() {
  const [theme, toggleTheme] = useDarkMode();

  return (
    <div className="app">
      <div className={`navbar ${theme}`}>Navbar</div>
      <div className={`sidebar ${theme}`}>
        <div className="top">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/">About</a></li>
          </ul>
        </div>
        <div className="bottom">Bottom</div>
      </div>
      <button onClick={toggleTheme}>Toggle Appearance</button>
    </div>
  );
}
